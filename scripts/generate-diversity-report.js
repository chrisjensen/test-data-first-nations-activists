#!/usr/bin/env node

import { generateDiversityReport } from '../../test-data-api/scripts/diversity-analyzer.js';
import firstNationsActivistsData from '../dist/index.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate and save the report
try {
  const outputPath = join(__dirname, '..', 'DIVERSITY.md');
  
  generateDiversityReport(firstNationsActivistsData, outputPath, {
    datasetName: 'First Nations Activists Dataset',
    includeUnicodeAnalysis: true,  // Enable Unicode analysis for international names
    acknowledgeDeceasedFirstNations: true  // Required for First Nations data
  });
  
} catch (error) {
  console.error('❌ Error generating diversity report:', error);
  process.exit(1);
}