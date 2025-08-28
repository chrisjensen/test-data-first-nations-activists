import { validateImageUrls } from '../../test-data-api/src/shared-tests.js';
import dataPackage from './index.js';

validateImageUrls(dataPackage, {
  datasetName: 'First Nations Activists Dataset',
  httpTimeout: 15000
});