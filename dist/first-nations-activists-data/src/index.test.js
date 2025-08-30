import { describe, it, expect } from 'vitest';
import firstNationsActivistsData from './index.js';
describe('First Nations Activists Data Package', () => {
    it('should export valid DataPackage structure', () => {
        expect(firstNationsActivistsData).toBeDefined();
        expect(firstNationsActivistsData).toHaveProperty('people');
        expect(firstNationsActivistsData).toHaveProperty('groups');
        expect(firstNationsActivistsData).toHaveProperty('events');
        expect(firstNationsActivistsData.people.length).toBeGreaterThan(0);
        expect(firstNationsActivistsData.groups.length).toBeGreaterThan(0);
        expect(firstNationsActivistsData.events.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=index.test.js.map