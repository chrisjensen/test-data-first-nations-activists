import { describe, it, expect, beforeEach } from 'vitest';
import DataFactory from 'test-data-factory';
import firstNationsActivistsData from './index.js';

describe('First Nations Activists Data Package', () => {
  let factory: DataFactory;

  beforeEach(() => {
    factory = new DataFactory(firstNationsActivistsData, { acknowledgeDeceasedFirstNations: true });
  });

  describe('Export Structure', () => {
    it('should export valid DataPackage structure', () => {
      expect(firstNationsActivistsData).toBeDefined();
      expect(firstNationsActivistsData).toHaveProperty('people');
      expect(firstNationsActivistsData).toHaveProperty('groups');
      expect(firstNationsActivistsData).toHaveProperty('events');
    });

    it('should contain actual data', () => {
      expect(firstNationsActivistsData.people.length).toBeGreaterThan(0);
      expect(firstNationsActivistsData.groups.length).toBeGreaterThan(0);
      expect(firstNationsActivistsData.events.length).toBeGreaterThan(0);
    });
  });

  describe('First Nations Dataset Specific Requirements', () => {
    it('should mark the set as containing First Nations people (per metadata)', () => {
      expect(firstNationsActivistsData.metadata?.containsFirstNationsPeople).toBe(true);
    });

    it('should use test domains for mock data safety', () => {
      const people = factory.getPeople();
      people.forEach(person => {
        expect(person.email).toMatch(/\.test$/);
      });

      const groups = factory.getGroups();
      groups.forEach(group => {
        if (group.email) {
          expect(group.email).toMatch(/\.test$/);
        }
      });
    });

    it('should include reference links for verification', () => {
      const people = factory.getPeople();
      people.forEach(person => {
        if ((person as any).reference) {
          expect((person as any).reference).toMatch(/^https:\/\//);
        }
      });
    });
  });

  describe('API Integration', () => {
    it('should work with DataFactory', () => {
      const people = factory.getPeople();
      const groups = factory.getGroups();
      const events = factory.getEvents();

      expect(Array.isArray(people)).toBe(true);
      expect(Array.isArray(groups)).toBe(true);
      expect(Array.isArray(events)).toBe(true);
      expect(people.length).toBeGreaterThan(0);
    });

    it('should support filtering by count', () => {
      const allPeople = factory.getPeople();
      const somePeople = factory.getPeople(5);
      
      expect(somePeople.length).toBeLessThanOrEqual(5);
      expect(somePeople.length).toBeLessThanOrEqual(allPeople.length);
    });
  });
});