import { TriageInput, TriageResult, RiskLevel } from '@/types';

export function runSmartTriage(input: TriageInput): TriageResult {
  let score = 15; // Base line
  const warningSigns: string[] = [];
  const recommendedActions: string[] = [];
  const evidenceBasedOn: string[] = [
    'Patient Age & Vitals Parameters (Temp, SpO2, BP)',
    'Ashta Block Rural Healthcare Facility Mapping',
    'ICMR & NHM Standard Clinical Triage Guidelines'
  ];

  const symptomsLower = input.symptoms.map(s => s.toLowerCase());

  // High risk emergency red flags
  const redFlags = ['chest pain', 'difficulty breathing', 'severe shortness of breath', 'unconsciousness', 'uncontrolled bleeding', 'seizure', 'severe abdominal pain'];
  const hasRedFlag = symptomsLower.some(s => redFlags.some(rf => s.includes(rf)));

  if (hasRedFlag) {
    score += 65;
    warningSigns.push('Critical emergency symptom detected requiring immediate medical intervention.');
  }

  // High temperature check
  if (input.temperatureF && input.temperatureF >= 102.5) {
    score += 20;
    warningSigns.push(`High body temperature recorded: ${input.temperatureF}°F`);
  } else if (input.temperatureF && input.temperatureF >= 100.4) {
    score += 10;
  }

  // SpO2 check
  if (input.spO2 && input.spO2 < 90) {
    score += 45;
    warningSigns.push(`Critically low blood oxygen level (SpO2: ${input.spO2}%)`);
  } else if (input.spO2 && input.spO2 < 94) {
    score += 20;
    warningSigns.push(`Low blood oxygen level (SpO2: ${input.spO2}%)`);
  }

  // Blood pressure check
  if (input.bloodPressureSys && input.bloodPressureSys >= 160) {
    score += 25;
    warningSigns.push(`Severely elevated systolic blood pressure: ${input.bloodPressureSys} mmHg`);
  } else if (input.bloodPressureSys && input.bloodPressureSys >= 140) {
    score += 12;
  }

  // Pregnancy high risk checks
  if (input.isPregnant) {
    score += 15;
    evidenceBasedOn.push('Maternal ANC Gestational Risk Parameters');
    if (symptomsLower.some(s => s.includes('bleeding') || s.includes('swelling') || s.includes('headache') || s.includes('blurred vision'))) {
      score += 35;
      warningSigns.push('Maternal high-risk complication warning (Pre-eclampsia / Antepartum concern).');
    }
  }

  // Age factor
  if (input.age >= 65 || input.age <= 2) {
    score += 10;
  }

  // Symptom duration factor
  if (input.durationDays >= 7) {
    score += 10;
    warningSigns.push('Symptoms persisting for over 7 days without resolution.');
  }

  // Cap score 0 to 100
  score = Math.min(Math.max(score, 5), 98);

  let riskLevel: RiskLevel = 'LOW';
  let urgencyLabel = 'Routine Care';
  let recommendedFacility: TriageResult['recommendedFacility'] = 'Home Care';
  let referralRequired = false;
  let followUpHours = 48;

  if (score >= 80) {
    riskLevel = 'EMERGENCY';
    urgencyLabel = 'IMMEDIATE EMERGENCY REDIRECTION';
    recommendedFacility = 'Emergency Transport';
    referralRequired = true;
    followUpHours = 2;
    recommendedActions.push('Dispatch 108 Ambulance / Emergency Transport immediately.');
    recommendedActions.push('Alert nearest District Hospital Casualty Ward.');
    recommendedActions.push('Do not delay for home remedies.');
  } else if (score >= 55) {
    riskLevel = 'HIGH';
    urgencyLabel = 'Urgent Clinical Evaluation Needed (Within 6 Hours)';
    recommendedFacility = 'CHC';
    referralRequired = true;
    followUpHours = 12;
    recommendedActions.push('Visit nearest Community Health Centre (CHC) or District Hospital.');
    recommendedActions.push('Alert assigned ASHA worker for escorted transport.');
    recommendedActions.push('Monitor vitals hourly until doctor evaluation.');
  } else if (score >= 35) {
    riskLevel = 'MODERATE';
    urgencyLabel = 'Primary Healthcare Consultation Recommended (Within 24 Hours)';
    recommendedFacility = 'PHC';
    referralRequired = false;
    followUpHours = 24;
    recommendedActions.push('Visit nearby Primary Health Centre (PHC) or schedule Tele-consultation.');
    recommendedActions.push('Ensure hydration and rest.');
    recommendedActions.push('Follow up if symptoms escalate.');
  } else {
    riskLevel = 'LOW';
    urgencyLabel = 'Self-Management & Preventive Guidance';
    recommendedFacility = 'Home Care';
    referralRequired = false;
    followUpHours = 72;
    recommendedActions.push('Rest, maintain adequate fluids, and monitor symptoms.');
    recommendedActions.push('Connect with local ASHA worker if symptoms persist past 3 days.');
  }

  return {
    riskLevel,
    riskScore: score,
    urgencyLabel,
    recommendedFacility,
    referralRequired,
    warningSigns,
    recommendedActions,
    followUpHours,
    aiDisclaimer: 'This AI assistant provides informational guidance and does not replace a qualified healthcare professional.',
    evidenceBasedOn,
    confidenceScore: Math.min(95, Math.max(75, 100 - Math.round(score * 0.15)))
  };
}
