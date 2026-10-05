import { SimulationParams, SimulationResult, ResilienceIndex } from '@/types';

export function runWhatIfSimulation(params: SimulationParams, baseResilience: ResilienceIndex): SimulationResult {
  let accessibilityDelta = 0;
  let travelHoursSaved = 0;
  let facilityLoadDelta = 0;
  let teleconsultCapacityDelta = 0;

  // Telemedicine center addition (+1 = +14% access, saves 2.5 travel hrs/day per 100 patients)
  if (params.telemedicineCentersAdd > 0) {
    accessibilityDelta += params.telemedicineCentersAdd * 14;
    travelHoursSaved += params.telemedicineCentersAdd * 18.5; // total weekly hours saved per village cluster
    facilityLoadDelta -= params.telemedicineCentersAdd * 8; // reduces overcrowded OPD load at CHC
    teleconsultCapacityDelta += params.telemedicineCentersAdd * 35; // consultations/day
  }

  // Medicine stock increase
  if (params.medicineStockIncreasePct > 0) {
    accessibilityDelta += Math.round(params.medicineStockIncreasePct * 0.25);
    travelHoursSaved += Math.round(params.medicineStockIncreasePct * 0.15); // prevents travel to distant private shops
  }

  // ASHA workers addition
  if (params.ashaWorkersAdd > 0) {
    accessibilityDelta += params.ashaWorkersAdd * 8;
    facilityLoadDelta -= params.ashaWorkersAdd * 3; // early detection prevents emergency visits
  }

  // Mobile van drive
  if (params.mobileVanActive) {
    accessibilityDelta += 18;
    travelHoursSaved += 24;
    facilityLoadDelta -= 12;
  }

  // Vaccination drive
  if (params.vaccinationDriveActive) {
    accessibilityDelta += 10;
  }

  const resilienceScoreNew = Math.min(100, baseResilience.overallScore + Math.round(accessibilityDelta * 0.45));

  return {
    accessibilityDeltaPct: Math.min(100, Math.max(0, accessibilityDelta)),
    travelBurdenHoursSaved: Math.round(travelHoursSaved),
    facilityLoadDeltaPct: Math.round(facilityLoadDelta),
    resilienceScoreNew,
    teleconsultationCapacityNew: 40 + teleconsultCapacityDelta
  };
}

export function calculateSustainabilityMetrics() {
  return {
    sustainabilityScore: 84, // out of 100
    estimatedTravelAvoidedKm: 14250,
    estimatedCO2SavedKg: 2850, // ~0.2kg CO2 per km for two-wheelers/buses
    medicineWastagePreventedPct: 18.4,
    teleconsultationsCompleted: 642,
    transportBurdenAvoidedINR: 178500 // Direct travel cost saved for rural patients (tickets/fuel)
  };
}
