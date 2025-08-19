import { describe, it, expect, beforeEach } from 'vitest';
import DataFactory from 'test-data-factory';
import firstNationsActivistsData from './index.js';

describe('First Nations Activists Dataset - Specific Requirements', () => {
  let factory: DataFactory;

  beforeEach(() => {
    factory = new DataFactory(firstNationsActivistsData, { acknowledgeDeceasedFirstNations: true });
  });

  describe('Cultural Diversity', () => {
    it('should have diverse global Indigenous representation', () => {
      const people = factory.getPeople();
      expect(people.length).toBeGreaterThanOrEqual(40);
      
      // Check for different Indigenous cultures with real activists
      const cultures = people.flatMap(p => p.tags);
      expect(cultures).toContain('anishinaabe');
      expect(cultures).toContain('oglala-lakota');
      expect(cultures).toContain('gitxsan');
      expect(cultures).toContain('aboriginal');
      expect(cultures).toContain('maya');
      expect(cultures).toContain('cherokee');
      expect(cultures).toContain('navajo');
    });
  });

  describe('First Nations Protocol Compliance', () => {
    it('should require cultural acknowledgment for access', () => {
      // Test that without acknowledgment, no people are returned
      const factoryWithoutAcknowledgment = new DataFactory(firstNationsActivistsData);
      
      expect(() => {
        factoryWithoutAcknowledgment.getPeople();
      }).toThrow('requires acknowledgment');
    });

    it('should have proper metadata flag for First Nations content', () => {
      expect(firstNationsActivistsData.metadata?.containsFirstNationsPeople).toBe(true);
    });
  });

  describe('Cultural Content Quality', () => {
    it('should include meaningful quotes from activists', () => {
      const people = factory.getPeople();
      const peopleWithQuotes = people.filter(p => p.quote && p.quote.length > 10);
      expect(peopleWithQuotes.length).toBeGreaterThan(30);
    });

    it('should have accurate geographic representation', () => {
      const people = factory.getPeople();
      const peopleWithAddresses = people.filter(p => p.address);
      expect(peopleWithAddresses.length).toBeGreaterThan(30);
      
      // Should have global representation
      const countries = new Set(peopleWithAddresses.map(p => p.address!.country));
      expect(countries.size).toBeGreaterThan(10);
    });
  });
});