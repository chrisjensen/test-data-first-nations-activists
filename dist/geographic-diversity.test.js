import { describe, it, expect } from 'vitest';
import firstNationsActivistsData from './index.js';
describe('Geographic Diversity', () => {
    it('should have adequate representation from multiple continents', () => {
        const people = firstNationsActivistsData.people;
        // Count people by country based on address data
        const countryCounts = {};
        people.forEach(person => {
            if (person.address?.country) {
                countryCounts[person.address.country] = (countryCounts[person.address.country] || 0) + 1;
            }
        });
        console.log('\nCountry representation:');
        Object.entries(countryCounts)
            .sort(([, a], [, b]) => b - a)
            .forEach(([country, count]) => {
            console.log(`  ${country}: ${count} activists`);
        });
        // Should have representation from multiple continents
        const countries = Object.keys(countryCounts);
        // North America should not dominate completely
        const northAmericaCount = (countryCounts['United States'] || 0) + (countryCounts['Canada'] || 0);
        const totalCount = people.length;
        const northAmericaPercentage = (northAmericaCount / totalCount) * 100;
        console.log(`\nNorth America representation: ${northAmericaCount}/${totalCount} (${northAmericaPercentage.toFixed(1)}%)`);
        // North America should be less than 40% of total representation (improved from original 87.8%)
        expect(northAmericaPercentage).toBeLessThan(40);
        // Should have at least 4 different countries represented
        expect(countries.length).toBeGreaterThanOrEqual(4);
        // Should include key regions
        expect(countries).toContain('Australia');
        expect(countries).toContain('New Zealand');
        // Should have some representation from South America
        const southAmericanCountries = ['Brazil', 'Guatemala', 'Peru', 'Bolivia', 'Ecuador', 'Colombia', 'Venezuela', 'Chile', 'Argentina'];
        const hasSouthAmerica = southAmericanCountries.some(country => countries.includes(country));
        expect(hasSouthAmerica).toBe(true);
    });
    it('should represent diverse Indigenous groups and cultures', () => {
        const people = firstNationsActivistsData.people;
        const allTags = people.flatMap(person => person.tags);
        // Count cultural/ethnic tags
        const culturalTags = allTags.filter(tag => 
        // North American First Nations
        tag.includes('anishinaabe') || tag.includes('lakota') || tag.includes('cherokee') ||
            tag.includes('navajo') || tag.includes('cree') || tag.includes('gitxsan') ||
            // Australian/Oceanic
            tag.includes('aboriginal') || tag.includes('torres-strait') || tag.includes('maori') ||
            // South American
            tag.includes('maya') || tag.includes('guarani') || tag.includes('quechua') ||
            // European Indigenous
            tag.includes('sami') ||
            // Other specific nations/tribes
            tag.includes('mi\'kmaq') || tag.includes('spokane') || tag.includes('comanche'));
        console.log('\nCultural/ethnic representation in tags:');
        const culturalTagCounts = {};
        culturalTags.forEach(tag => {
            culturalTagCounts[tag] = (culturalTagCounts[tag] || 0) + 1;
        });
        Object.entries(culturalTagCounts)
            .sort(([, a], [, b]) => b - a)
            .forEach(([tag, count]) => {
            console.log(`  ${tag}: ${count}`);
        });
        // Should have representation from multiple cultural groups
        const uniqueCulturalTags = Object.keys(culturalTagCounts);
        expect(uniqueCulturalTags.length).toBeGreaterThanOrEqual(8);
        // Should include Australian Aboriginal representation
        expect(culturalTags.some(tag => tag.includes('aboriginal') || tag.includes('torres-strait'))).toBe(true);
        // Should include Māori representation
        expect(culturalTags.some(tag => tag.includes('maori'))).toBe(true);
        // Should include South American Indigenous representation
        expect(culturalTags.some(tag => tag.includes('maya') || tag.includes('guarani') || tag.includes('quechua'))).toBe(true);
    });
    it('should include Pacific Islander representation', () => {
        const people = firstNationsActivistsData.people;
        const pacificCountries = ['Fiji', 'Tonga', 'Samoa', 'Solomon Islands', 'Vanuatu', 'Papua New Guinea', 'New Zealand'];
        const pacificRepresentation = people.filter(person => pacificCountries.includes(person.address?.country || '') ||
            person.tags.some(tag => tag.includes('maori') ||
                tag.includes('pacific-islander') ||
                tag.includes('polynesian') ||
                tag.includes('melanesian') ||
                tag.includes('micronesian')));
        console.log(`\nPacific Islander representation: ${pacificRepresentation.length} activists`);
        if (pacificRepresentation.length > 0) {
            pacificRepresentation.forEach(person => {
                console.log(`  - ${person.fullName} (${person.address?.country || 'Unknown location'})`);
            });
        }
        // Should have at least 2 Pacific Islander activists
        expect(pacificRepresentation.length).toBeGreaterThanOrEqual(2);
    });
    it('should include European Indigenous representation', () => {
        const people = firstNationsActivistsData.people;
        const europeanIndigenous = people.filter(person => person.tags.some(tag => tag.includes('sami') ||
            tag.includes('romani') ||
            tag.includes('basque')) ||
            ['Norway', 'Sweden', 'Finland', 'Russia'].includes(person.address?.country || ''));
        console.log(`\nEuropean Indigenous representation: ${europeanIndigenous.length} activists`);
        if (europeanIndigenous.length > 0) {
            europeanIndigenous.forEach(person => {
                console.log(`  - ${person.fullName} (${person.address?.country || 'Unknown location'})`);
            });
        }
        // Should have at least 1 European Indigenous activist (likely Sami)
        expect(europeanIndigenous.length).toBeGreaterThanOrEqual(1);
    });
    it('should not be dominated by historical figures', () => {
        const people = firstNationsActivistsData.people;
        // Identify likely historical figures (died before 1980)
        const historicalNames = [
            'Sitting Bull', 'Crazy Horse', 'Tecumseh', 'Geronimo', 'Chief Joseph',
            'Pocahontas', 'Sequoyah', 'Black Elk', 'Sarah Winnemucca', 'Ira Hayes',
            'Jim Thorpe', 'Maria Tallchief'
        ];
        const historicalCount = people.filter(person => historicalNames.includes(person.fullName)).length;
        const contemporaryCount = people.length - historicalCount;
        const contemporaryPercentage = (contemporaryCount / people.length) * 100;
        console.log(`\nHistorical vs Contemporary representation:`);
        console.log(`  Historical figures: ${historicalCount}`);
        console.log(`  Contemporary activists: ${contemporaryCount}`);
        console.log(`  Contemporary percentage: ${contemporaryPercentage.toFixed(1)}%`);
        // Should be at least 60% contemporary activists
        expect(contemporaryPercentage).toBeGreaterThanOrEqual(60);
    });
});
//# sourceMappingURL=geographic-diversity.test.js.map