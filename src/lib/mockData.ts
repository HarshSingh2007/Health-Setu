import { Facility, MedicineItem, Scheme, MaternalRecord, ChildRecord, DiseaseAlert, ResilienceIndex, CommunityMission, AshaVisit, GovernmentDataSourceItem, DataLineage } from '@/types';

export const mockLocations = {
  states: ['Madhya Pradesh', 'Uttar Pradesh', 'Rajasthan', 'Bihar'],
  districts: {
    'Madhya Pradesh': ['Sehore', 'Vidisha', 'Raisen', 'Hoshangabad'],
    'Uttar Pradesh': ['Varanasi', 'Gorakhpur', 'Ayodhya', 'Mirzapur'],
    'Rajasthan': ['Barmer', 'Jaisalmer', 'Bhilwara', 'Udaipur'],
    'Bihar': ['Gaya', 'Muzaffarpur', 'Madhubani', 'Purnia']
  },
  blocks: {
    'Sehore': ['Ashta', 'Ichhawar', 'Budhni', 'Shyampur'],
    'Varanasi': ['Kashi Vidyapeeth', 'Pindra', 'Sevapuri', 'Araziline'],
  },
  villages: {
    'Ashta': ['Pipariya', 'Kothri', 'Siddhiqganj', 'Hakimabad'],
    'Ichhawar': ['Diwadia', 'Bhorasa', 'Arya', 'Lalabad'],
    'Pindra': ['Karkhiaon', 'Phoolpur', 'Murdev', 'Amaut']
  }
};

export const mockFacilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Ashta Community Health Centre (CHC)',
    type: 'CHC',
    district: 'Sehore',
    block: 'Ashta',
    village: 'Ashta Town',
    distanceKm: 4.2,
    travelTimeMin: 12,
    openStatus: 'OPEN',
    bedsAvailable: 18,
    doctorsCount: 4,
    emergencyServices: true,
    maternalServices: true,
    pediatricServices: true,
    telemedicineAvailable: true,
    contactNumber: '+91 7562 242101',
    isDemoData: false,
    dataSource: 'ABDM Health Facility Registry (HFR)'
  },
  {
    id: 'fac-2',
    name: 'Pipariya Primary Health Centre (PHC)',
    type: 'PHC',
    district: 'Sehore',
    block: 'Ashta',
    village: 'Pipariya',
    distanceKm: 0.8,
    travelTimeMin: 4,
    openStatus: 'OPEN',
    bedsAvailable: 4,
    doctorsCount: 1,
    emergencyServices: false,
    maternalServices: true,
    pediatricServices: true,
    telemedicineAvailable: true,
    contactNumber: '+91 7562 248902',
    isDemoData: false,
    dataSource: 'National Health Mission MP Directory'
  },
  {
    id: 'fac-3',
    name: 'Sehore District Civil Hospital',
    type: 'District Hospital',
    district: 'Sehore',
    block: 'Sehore Urban',
    village: 'Sehore City',
    distanceKm: 28.5,
    travelTimeMin: 45,
    openStatus: 'OPEN',
    bedsAvailable: 64,
    doctorsCount: 19,
    emergencyServices: true,
    maternalServices: true,
    pediatricServices: true,
    telemedicineAvailable: true,
    contactNumber: '+91 7562 222010',
    isDemoData: false,
    dataSource: 'Ministry of Health & Family Welfare (MoHFW)'
  },
  {
    id: 'fac-4',
    name: 'Jan Aushadhi Kendra — Pipariya Square',
    type: 'Jan Aushadhi',
    district: 'Sehore',
    block: 'Ashta',
    village: 'Pipariya',
    distanceKm: 1.2,
    travelTimeMin: 5,
    openStatus: 'OPEN',
    bedsAvailable: 0,
    doctorsCount: 0,
    emergencyServices: false,
    maternalServices: false,
    pediatricServices: false,
    telemedicineAvailable: false,
    contactNumber: '+91 98261 44321',
    isDemoData: false,
    dataSource: 'PMBI Jan Aushadhi Store Directory'
  },
  {
    id: 'fac-5',
    name: 'Kothri Telemedicine & Health Wellness Sub-Center',
    type: 'Telemedicine Center',
    district: 'Sehore',
    block: 'Ashta',
    village: 'Kothri',
    distanceKm: 7.1,
    travelTimeMin: 18,
    openStatus: 'OPEN',
    bedsAvailable: 2,
    doctorsCount: 1,
    emergencyServices: false,
    maternalServices: true,
    pediatricServices: true,
    telemedicineAvailable: true,
    contactNumber: '+91 7562 254109',
    isDemoData: true,
    dataSource: 'e-Sanjeevani Teleconsultation Log'
  }
];

export const mockMedicines: MedicineItem[] = [
  {
    id: 'med-1',
    name: 'Amoxicillin 500mg Capsules',
    genericName: 'Amoxicillin Trihydrate',
    category: 'Antibiotic',
    janAushadhiPriceINR: 22.00,
    marketPriceINR: 85.00,
    stockStatus: 'CRITICAL',
    stockQuantity: 45,
    availableAt: 'Pipariya Primary Health Centre (PHC)',
    facilityType: 'PHC',
    village: 'Pipariya',
    isDemoData: true,
    dataSource: 'PHC Pipariya Monthly Pharmacy Return'
  },
  {
    id: 'med-2',
    name: 'Paracetamol 650mg Tablets',
    genericName: 'Paracetamol',
    category: 'Analgesic & Antipyretic',
    janAushadhiPriceINR: 8.50,
    marketPriceINR: 32.00,
    stockStatus: 'NORMAL',
    stockQuantity: 1200,
    availableAt: 'Ashta Community Health Centre (CHC)',
    facilityType: 'CHC',
    village: 'Ashta Town',
    isDemoData: false,
    dataSource: 'PMBI Jan Aushadhi Central Price Registry'
  },
  {
    id: 'med-3',
    name: 'Iron & Folic Acid (IFA) Tablets (Red)',
    genericName: 'Ferrous Ascorbate + Folic Acid',
    category: 'Maternal Supplement',
    janAushadhiPriceINR: 12.00,
    marketPriceINR: 55.00,
    stockStatus: 'NORMAL',
    stockQuantity: 850,
    availableAt: 'Pipariya Primary Health Centre (PHC)',
    facilityType: 'PHC',
    village: 'Pipariya',
    isDemoData: false,
    dataSource: 'NHM Maternal Health Supply Chain'
  },
  {
    id: 'med-4',
    name: 'Metformin 500mg Sustained Release',
    genericName: 'Metformin Hydrochloride',
    category: 'Anti-Diabetic',
    janAushadhiPriceINR: 15.00,
    marketPriceINR: 60.00,
    stockStatus: 'LOW',
    stockQuantity: 140,
    availableAt: 'Jan Aushadhi Kendra — Pipariya Square',
    facilityType: 'Jan Aushadhi',
    village: 'Pipariya',
    isDemoData: false,
    dataSource: 'PMBI Jan Aushadhi Portal'
  },
  {
    id: 'med-5',
    name: 'Amlodipine 5mg Tablets',
    genericName: 'Amlodipine Besylate',
    category: 'Anti-Hypertensive',
    janAushadhiPriceINR: 6.00,
    marketPriceINR: 38.00,
    stockStatus: 'NORMAL',
    stockQuantity: 620,
    availableAt: 'Ashta Community Health Centre (CHC)',
    facilityType: 'CHC',
    village: 'Ashta Town',
    isDemoData: false,
    dataSource: 'PMBI Jan Aushadhi Portal'
  },
  {
    id: 'med-6',
    name: 'ORS Packets (21.8g)',
    genericName: 'Oral Rehydration Salts',
    category: 'Essential Rehydration',
    janAushadhiPriceINR: 4.50,
    marketPriceINR: 20.00,
    stockStatus: 'NORMAL',
    stockQuantity: 2100,
    availableAt: 'Pipariya Primary Health Centre (PHC)',
    facilityType: 'PHC',
    village: 'Pipariya',
    isDemoData: false,
    dataSource: 'NHM Diarrheal Disease Control Program'
  }
];

export const mockSchemes: Scheme[] = [
  {
    id: 'sch-1',
    name: 'Ayushman Bharat PM-JAY',
    hindiName: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    category: 'health_insurance',
    coverageINR: '₹5,000,000 per family/year',
    purpose: 'Cashless secondary and tertiary hospital care coverage for low-income and rural households.',
    eligibility: [
      'SECC 2011 Deprivation Criteria',
      'Ration Card (BPL / Antyodaya)',
      'Rural households with kutcha walls/roof'
    ],
    requiredDocuments: ['Aadhaar Card', 'Ration Card', 'Mobile Number'],
    officialPortal: 'https://pmjay.gov.in',
    sourceOrg: 'National Health Authority (NHA)'
  },
  {
    id: 'sch-2',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    hindiName: 'प्रधानमंत्री मातृ वंदना योजना',
    category: 'maternal',
    coverageINR: '₹5,000 direct cash incentive',
    purpose: 'Financial assistance for pregnant women and lactating mothers for health checkups and nutrition.',
    eligibility: [
      'Pregnant Women and Lactating Mothers (PW&LM)',
      'First living child of the family',
      'Registered ANC within 150 days of LMP'
    ],
    requiredDocuments: ['Mother Aadhaar Card', 'Bank Account Passbook', 'MCP Card'],
    officialPortal: 'https://pmmvy.nic.in',
    sourceOrg: 'Ministry of Women and Child Development'
  },
  {
    id: 'sch-3',
    name: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)',
    hindiName: 'प्रधानमंत्री भारतीय जनऔषधि परियोजना',
    category: 'medicine',
    coverageINR: 'Up to 50%–90% savings on generic medicines',
    purpose: 'Providing quality generic medicines at affordable prices through Jan Aushadhi Kendras.',
    eligibility: ['Open to all citizens of India without restriction'],
    requiredDocuments: ['Doctor Prescription (for Rx items)'],
    officialPortal: 'https://janaushadhi.gov.in',
    sourceOrg: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)'
  },
  {
    id: 'sch-4',
    name: 'Janani Suraksha Yojana (JSY)',
    hindiName: 'जननी सुरक्षा योजना',
    category: 'maternal',
    coverageINR: '₹1,400 rural / ₹1,000 urban cash assistance',
    purpose: 'Promoting institutional delivery among pregnant women in rural and low-performing states.',
    eligibility: [
      'Pregnant women in rural areas delivering in Govt/accredited health facility',
      'All BPL/SC/ST pregnant women'
    ],
    requiredDocuments: ['Aadhaar Card', 'BPL Card', 'Institutional Delivery Certificate'],
    officialPortal: 'https://nhm.gov.in',
    sourceOrg: 'National Health Mission (NHM)'
  }
];

export const mockMaternalRecords: MaternalRecord[] = [
  {
    id: 'mat-1',
    patientName: 'Sunita Bai Patel',
    age: 24,
    village: 'Pipariya',
    pregnancyWeek: 32,
    edd: '2026-11-28',
    hemoglobinGdl: 9.4, // Anemic flag
    bpSys: 138,
    bpDia: 88,
    weightKg: 54,
    ancVisitsCompleted: 3,
    ancVisitsRequired: 4,
    vaccinations: [
      { name: 'TT-1 / Td-1', date: '2026-05-10', status: 'completed' },
      { name: 'TT-2 / Td-2', date: '2026-06-15', status: 'completed' },
      { name: 'Td Booster', date: '2026-10-15', status: 'pending' }
    ],
    riskIndicators: ['Moderate Anemia (Hb 9.4 g/dL)', 'Mild Gestational BP Elevation'],
    assignedAsha: 'Kamla Verma (ASHA Pipariya)'
  },
  {
    id: 'mat-2',
    patientName: 'Pooja Devi Sharma',
    age: 27,
    village: 'Kothri',
    pregnancyWeek: 18,
    edd: '2027-03-05',
    hemoglobinGdl: 11.2,
    bpSys: 118,
    bpDia: 76,
    weightKg: 58,
    ancVisitsCompleted: 2,
    ancVisitsRequired: 4,
    vaccinations: [
      { name: 'Td-1', date: '2026-07-02', status: 'completed' },
      { name: 'Td-2', date: '2026-08-04', status: 'completed' }
    ],
    riskIndicators: ['Normal Progress'],
    assignedAsha: 'Anita Yadav (ASHA Kothri)'
  }
];

export const mockChildRecords: ChildRecord[] = [
  {
    id: 'ch-1',
    childName: 'Aarav Patel',
    motherName: 'Sunita Bai Patel',
    ageMonths: 14,
    village: 'Pipariya',
    weightKg: 8.9,
    heightCm: 74,
    nutritionStatus: 'Normal',
    vaccinations: [
      { name: 'BCG, OPV-0, Hep-B', dueDate: '2025-08-01', status: 'completed' },
      { name: 'Pentavalent-1, OPV-1', dueDate: '2025-09-15', status: 'completed' },
      { name: 'Pentavalent-2, OPV-2', dueDate: '2025-10-28', status: 'completed' },
      { name: 'Pentavalent-3, OPV-3', dueDate: '2025-12-10', status: 'completed' },
      { name: 'MR-1 / Vitamin A', dueDate: '2026-05-10', status: 'completed' },
      { name: 'DPT Booster-1 / MR-2', dueDate: '2026-11-01', status: 'pending' }
    ],
    assignedAsha: 'Kamla Verma (ASHA Pipariya)'
  }
];

export const mockDiseaseAlerts: DiseaseAlert[] = [
  {
    id: 'alert-1',
    district: 'Sehore',
    block: 'Ashta',
    village: 'Pipariya',
    diseaseType: 'Fever Cluster',
    casesCount: 14,
    trend: 'UP',
    alertLevel: 'WARNING',
    aiAnomalyScore: 78,
    verificationStatus: 'Potential Anomaly - Public Health Verification Required',
    dateReported: '2026-10-04'
  },
  {
    id: 'alert-2',
    district: 'Sehore',
    block: 'Ichhawar',
    village: 'Diwadia',
    diseaseType: 'Diarrheal Outbreak',
    casesCount: 8,
    trend: 'STABLE',
    alertLevel: 'MONITORING',
    aiAnomalyScore: 45,
    verificationStatus: 'Potential Anomaly - Public Health Verification Required',
    dateReported: '2026-10-03'
  }
];

export const mockResilienceIndexes: ResilienceIndex[] = [
  {
    village: 'Pipariya',
    overallScore: 72,
    breakdown: {
      healthcareAccess: 78,
      emergencyAccess: 65,
      healthWorkerCoverage: 88,
      medicineAvailability: 54, // Low due to Amoxicillin shortage
      telemedicineAccess: 80,
      preventiveCare: 75,
      maternalChildHealth: 70,
      chronicCareCoverage: 66
    },
    rankInDistrict: 8,
    totalVillagesInDistrict: 42
  },
  {
    village: 'Kothri',
    overallScore: 84,
    breakdown: {
      healthcareAccess: 85,
      emergencyAccess: 80,
      healthWorkerCoverage: 90,
      medicineAvailability: 82,
      telemedicineAccess: 92,
      preventiveCare: 80,
      maternalChildHealth: 84,
      chronicCareCoverage: 79
    },
    rankInDistrict: 3,
    totalVillagesInDistrict: 42
  },
  {
    village: 'Siddhiqganj',
    overallScore: 58,
    breakdown: {
      healthcareAccess: 50,
      emergencyAccess: 45,
      healthWorkerCoverage: 60,
      medicineAvailability: 52,
      telemedicineAccess: 55,
      preventiveCare: 62,
      maternalChildHealth: 68,
      chronicCareCoverage: 50
    },
    rankInDistrict: 31,
    totalVillagesInDistrict: 42
  }
];

export const mockCommunityMissions: CommunityMission[] = [
  {
    id: 'mis-1',
    title: 'High-Risk Maternal ANC Drive',
    hindiTitle: 'उच्च जोखिम मातृ जांच अभियान',
    category: 'maternal',
    targetVillage: 'Pipariya',
    targetCount: 12,
    completedCount: 9,
    deadline: '2026-10-10',
    status: 'urgent',
    assignedAsha: 'Kamla Verma'
  },
  {
    id: 'mis-2',
    title: 'Village Hypertension & BP Screening',
    hindiTitle: 'ग्राम बीपी एवं हाइपरटेंशन जांच',
    category: 'screening',
    targetVillage: 'Kothri',
    targetCount: 45,
    completedCount: 38,
    deadline: '2026-10-15',
    status: 'active',
    assignedAsha: 'Anita Yadav'
  },
  {
    id: 'mis-3',
    title: 'Child MR-2 Vaccination Drive',
    hindiTitle: 'शिशु एमआर-2 टीकाकरण अभियान',
    category: 'vaccination',
    targetVillage: 'Pipariya',
    targetCount: 18,
    completedCount: 16,
    deadline: '2026-10-12',
    status: 'active',
    assignedAsha: 'Kamla Verma'
  }
];

export const mockAshaVisits: AshaVisit[] = [
  {
    id: 'vst-1',
    patientName: 'Sunita Bai Patel',
    village: 'Pipariya',
    type: 'Maternal ANC',
    priority: 'HIGH',
    status: 'PENDING',
    scheduledDate: '2026-10-06',
    notes: 'Check Hemoglobin & BP. Remind Td Booster.'
  },
  {
    id: 'vst-2',
    patientName: 'Rameshwar Prasad (Age 62)',
    village: 'Pipariya',
    type: 'Hypertension Follow-up',
    priority: 'MEDIUM',
    status: 'PENDING',
    scheduledDate: '2026-10-06',
    notes: 'Check BP log. Ensure Amlodipine refill.'
  },
  {
    id: 'vst-3',
    patientName: 'Aarav Patel (Age 14m)',
    village: 'Pipariya',
    type: 'Child Immunization',
    priority: 'ROUTINE',
    status: 'VISITED',
    scheduledDate: '2026-10-05',
    notes: 'Weight logged 8.9kg. DPT Booster-1 scheduled Nov 1.'
  }
];

export const mockGovernmentDataSources: GovernmentDataSourceItem[] = [
  {
    id: 'ds-1',
    name: 'National Health Authority (NHA) — ABDM Registry',
    dataset: 'Health Facility Registry (HFR) & Doctor Registry (HPR)',
    category: 'Healthcare Facilities',
    organization: 'National Health Authority (NHA), MoHFW',
    coverage: 'National / All States & Districts',
    lastUpdated: '2026-10-01',
    dataType: 'API Integration',
    status: 'OFFICIAL_VERIFIED',
    usedIn: ['Rural Healthcare Access Map', 'Telemedicine Studio', 'Healthcare Situation Center'],
    sourceUrl: 'https://hfr.abdm.gov.in',
    description: 'Master repository of all verified public and private health facilities, bed capacities, emergency services, and registered medical practitioners across India.',
    dataFields: ['facility_id', 'facility_name', 'facility_type', 'district', 'block', 'beds_available', 'contact_number', 'hfr_registration_status']
  },
  {
    id: 'ds-2',
    name: 'Ministry of Health & Family Welfare — HMIS Portal',
    dataset: 'Health Management Information System (HMIS) District Monthly Returns',
    category: 'Disease Surveillance',
    organization: 'Ministry of Health & Family Welfare (MoHFW), Govt of India',
    coverage: 'District Level (Sehore, MP)',
    lastUpdated: '2026-09-28',
    dataType: 'Downloaded Government Portal Dataset',
    status: 'OFFICIAL_VERIFIED',
    usedIn: ['Disease Intelligence Radar', 'District Command Center', 'Healthcare Situation Center'],
    sourceUrl: 'https://hmis.mohfw.gov.in',
    description: 'Official monthly public health indicators including OPD/IPD attendance, fever surveillance, maternal checkups, and child immunization counts.',
    dataFields: ['district_code', 'reporting_month', 'fever_cases_logged', 'anc_checkups_registered', 'institutional_deliveries', 'opd_volume']
  },
  {
    id: 'ds-3',
    name: 'National Health Mission (NHM) MP — ASHA Field Register',
    dataset: 'Village Health Worker & Household Register',
    category: 'Maternal & Child',
    organization: 'Department of Public Health & Family Welfare, Madhya Pradesh',
    coverage: 'Ashta Block (Pipariya & Kothri Villages)',
    lastUpdated: '2026-10-04',
    dataType: 'API Integration',
    status: 'CONNECTED_LIVE',
    usedIn: ['ASHA / ANM Field App', 'Maternal & Child Health Timeline', 'Community Missions'],
    sourceUrl: 'https://nhm.mp.gov.in',
    description: 'Village-level household census, high-risk maternal ANC registrations, child vaccination dues, and ASHA home visit activity logs.',
    dataFields: ['village_id', 'asha_worker_name', 'registered_pregnant_women', 'hemoglobin_status', 'child_vaccination_dues']
  },
  {
    id: 'ds-4',
    name: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)',
    dataset: 'Jan Aushadhi Kendra Inventory & Generic Price List',
    category: 'Medicines',
    organization: 'Ministry of Chemicals & Fertilizers, Govt of India',
    coverage: 'Sehore District / National Price List',
    lastUpdated: '2026-10-05',
    dataType: 'API Integration',
    status: 'OFFICIAL_VERIFIED',
    usedIn: ['Government Medicine Access', 'District Command Center'],
    sourceUrl: 'https://janaushadhi.gov.in',
    description: 'Official catalog of 1,800+ generic medicines and surgical products with Jan Aushadhi MRP prices compared against private brand prices.',
    dataFields: ['drug_code', 'generic_name', 'brand_equivalent', 'jan_aushadhi_price_inr', 'market_mrp_inr', 'stock_status']
  },
  {
    id: 'ds-5',
    name: 'Census of India & NFHS-5 District Profile',
    dataset: 'National Family Health Survey (NFHS-5) & Population Census',
    category: 'Environmental',
    organization: 'Ministry of Health & Family Welfare / Registrar General of India',
    coverage: 'District Sehore (MP)',
    lastUpdated: '2026-01-15',
    dataType: 'Static Official Data',
    status: 'STATIC_OFFICIAL',
    usedIn: ['Village Health Resilience Index', 'Healthcare Access Gap Finder', 'Viksit Bharat 2047'],
    sourceUrl: 'https://rchiips.org/nfhs',
    description: 'Demographic baseline survey data covering rural health coverage percentages, anemia prevalence, institutional delivery ratios, and household drinking water sources.',
    dataFields: ['district_name', 'rural_anemia_pct', 'full_immunization_pct', 'institutional_delivery_pct', 'drinking_water_access']
  }
];

export const mockLineageData: Record<string, DataLineage> = {
  peopleServed: {
    metricName: 'People Served (2,450 Citizens)',
    value: '2,450 Citizens',
    datasetName: 'NHM MP Village Health Register & Household Census',
    organization: 'National Health Mission MP',
    coverage: 'Pipariya Village, Ashta Block',
    lastUpdated: '2026-10-04',
    calculationLogic: 'Count of unique individuals registered under ASHA Kamla Verma household survey.',
    confidence: 'CONNECTED_LIVE',
    sourceUrl: 'https://nhm.mp.gov.in'
  },
  medicineAvailability: {
    metricName: 'Medicine Stock Availability (88%)',
    value: '88% Availability',
    datasetName: 'PMBI Jan Aushadhi & PHC Pharmacy Monthly Return',
    organization: 'Pharmaceuticals & Medical Devices Bureau of India',
    coverage: 'Pipariya PHC & Ashta CHC',
    lastUpdated: '2026-10-05',
    calculationLogic: 'Sum of in-stock essential drug codes divided by standard NLEM rural stock list (38 items).',
    confidence: 'OFFICIAL_VERIFIED',
    sourceUrl: 'https://janaushadhi.gov.in'
  },
  resilienceScore: {
    metricName: 'Village Health Resilience Index (72/100)',
    value: '72 / 100',
    datasetName: 'HealthSetu Application-Generated Indicator Engine',
    organization: 'HealthSetu AI Intelligence Core',
    coverage: 'Pipariya Village',
    lastUpdated: '2026-10-05',
    calculationLogic: 'Weighted composite formula: Access (20%) + Emergency (15%) + ASHA (15%) + Medicines (15%) + Telemed (15%) + Maternal (20%).',
    confidence: 'DEMO_SIMULATED',
    sourceUrl: 'https://HealthSetu.ai/resilience-index'
  }
};
