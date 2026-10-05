export type Language = 'en' | 'hi' | 'hinglish';

export type UserRole = 'patient' | 'asha' | 'doctor' | 'admin';

export interface LocationState {
  country: string;
  state: string;
  district: string;
  block: string;
  village: string;
}

export type RiskLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'EMERGENCY';

export type DataConfidenceType = 'OFFICIAL_VERIFIED' | 'CONNECTED_LIVE' | 'DEMO_SIMULATED' | 'STATIC_OFFICIAL';

export interface DataLineage {
  metricName: string;
  value: string;
  datasetName: string;
  organization: string;
  coverage: string;
  lastUpdated: string;
  calculationLogic: string;
  confidence: DataConfidenceType;
  sourceUrl: string;
}

export interface TriageInput {
  age: number;
  gender: 'male' | 'female' | 'other';
  symptoms: string[];
  durationDays: number;
  temperatureF?: number;
  bloodPressureSys?: number;
  bloodPressureDia?: number;
  spO2?: number;
  isPregnant?: boolean;
  pregnancyWeek?: number;
  preExistingConditions: string[];
  location: LocationState;
}

export interface TriageResult {
  riskLevel: RiskLevel;
  riskScore: number; // 0 to 100
  urgencyLabel: string;
  recommendedFacility: 'PHC' | 'CHC' | 'District Hospital' | 'Emergency Transport' | 'Home Care';
  referralRequired: boolean;
  warningSigns: string[];
  recommendedActions: string[];
  followUpHours: number;
  aiDisclaimer: string;
  evidenceBasedOn: string[];
  confidenceScore: number;
}

export interface Facility {
  id: string;
  name: string;
  type: 'PHC' | 'CHC' | 'District Hospital' | 'Jan Aushadhi' | 'Telemedicine Center' | 'Ambulance Hub';
  district: string;
  block: string;
  village: string;
  distanceKm: number;
  travelTimeMin: number;
  openStatus: 'OPEN' | 'BUSY' | 'CLOSED';
  bedsAvailable: number;
  doctorsCount: number;
  emergencyServices: boolean;
  maternalServices: boolean;
  pediatricServices: boolean;
  telemedicineAvailable: boolean;
  contactNumber: string;
  isDemoData: boolean;
  dataSource: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  category: string;
  janAushadhiPriceINR: number;
  marketPriceINR: number;
  stockStatus: 'NORMAL' | 'LOW' | 'CRITICAL' | 'OUT OF STOCK';
  stockQuantity: number;
  availableAt: string; // Facility name
  facilityType: string;
  village: string;
  isDemoData: boolean;
  dataSource: string;
}

export interface Scheme {
  id: string;
  name: string;
  hindiName: string;
  category: 'maternal' | 'health_insurance' | 'child' | 'medicine' | 'general';
  coverageINR: number | string;
  purpose: string;
  eligibility: string[];
  requiredDocuments: string[];
  officialPortal: string;
  sourceOrg: string;
}

export interface MaternalRecord {
  id: string;
  patientName: string;
  age: number;
  village: string;
  pregnancyWeek: number;
  edd: string; // Estimated Delivery Date
  hemoglobinGdl: number;
  bpSys: number;
  bpDia: number;
  weightKg: number;
  ancVisitsCompleted: number;
  ancVisitsRequired: number;
  vaccinations: { name: string; date: string; status: 'completed' | 'pending' | 'overdue' }[];
  riskIndicators: string[];
  assignedAsha: string;
}

export interface ChildRecord {
  id: string;
  childName: string;
  motherName: string;
  ageMonths: number;
  village: string;
  weightKg: number;
  heightCm: number;
  nutritionStatus: 'Normal' | 'Moderate Stunting' | 'Severe Acute Malnutrition';
  vaccinations: { name: string; dueDate: string; status: 'completed' | 'pending' | 'overdue' }[];
  assignedAsha: string;
}

export interface DiseaseAlert {
  id: string;
  district: string;
  block: string;
  village: string;
  diseaseType: 'Fever Cluster' | 'Respiratory Illness' | 'Diarrheal Outbreak' | 'Dengue / Vector' | 'Malaria';
  casesCount: number;
  trend: 'UP' | 'STABLE' | 'DOWN';
  alertLevel: 'MONITORING' | 'WARNING' | 'HIGH ALERT';
  aiAnomalyScore: number;
  verificationStatus: 'Potential Anomaly - Public Health Verification Required';
  dateReported: string;
}

export interface ResilienceIndex {
  village: string;
  overallScore: number; // 0-100
  breakdown: {
    healthcareAccess: number;
    emergencyAccess: number;
    healthWorkerCoverage: number;
    medicineAvailability: number;
    telemedicineAccess: number;
    preventiveCare: number;
    maternalChildHealth: number;
    chronicCareCoverage: number;
  };
  rankInDistrict: number;
  totalVillagesInDistrict: number;
}

export interface SimulationParams {
  telemedicineCentersAdd: number;
  medicineStockIncreasePct: number;
  ashaWorkersAdd: number;
  vaccinationDriveActive: boolean;
  mobileVanActive: boolean;
}

export interface SimulationResult {
  accessibilityDeltaPct: number; // e.g. +14%
  travelBurdenHoursSaved: number;
  facilityLoadDeltaPct: number;
  resilienceScoreNew: number;
  teleconsultationCapacityNew: number;
}

export interface CommunityMission {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'maternal' | 'vaccination' | 'screening' | 'medicine' | 'awareness';
  targetVillage: string;
  targetCount: number;
  completedCount: number;
  deadline: string;
  status: 'active' | 'completed' | 'urgent';
  assignedAsha: string;
}

export interface AshaVisit {
  id: string;
  patientName: string;
  village: string;
  type: 'Maternal ANC' | 'Child Immunization' | 'Hypertension Follow-up' | 'Diabetes Check' | 'Post-Natal Care';
  priority: 'HIGH' | 'MEDIUM' | 'ROUTINE';
  status: 'PENDING' | 'VISITED' | 'REFERRED';
  scheduledDate: string;
  notes?: string;
}

export interface GovernmentDataSourceItem {
  id: string;
  name: string;
  dataset: string;
  category: 'Healthcare Facilities' | 'Medicines' | 'Maternal & Child' | 'Disease Surveillance' | 'Government Schemes' | 'Environmental';
  organization: string;
  coverage: string;
  lastUpdated: string;
  dataType: 'API Integration' | 'Downloaded Government Portal Dataset' | 'Simulated Live Stream' | 'Static Official Data';
  status: DataConfidenceType;
  usedIn: string[];
  sourceUrl: string;
  description: string;
  dataFields: string[];
}

export type JudgePreset = 'pregnancy' | 'fever_cluster' | 'medicine_shortage' | 'simulator_demo' | 'default';
