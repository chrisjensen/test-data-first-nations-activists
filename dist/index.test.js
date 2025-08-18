import { describe, it, expect, beforeEach } from 'vitest';
import DataFactory from 'test-data-factory';
import firstNationsActivistsData from './index.js';
describe('First Nations Activists Data Package', () => {
    let factory;
    beforeEach(() => {
        factory = new DataFactory(firstNationsActivistsData, { acknowledgeDeceasedFirstNations: true });
    });
    describe('Data Package Structure', () => {
        it('should have people, groups, and events', () => {
            expect(firstNationsActivistsData.people).toBeDefined();
            expect(firstNationsActivistsData.groups).toBeDefined();
            expect(firstNationsActivistsData.events).toBeDefined();
            expect(Array.isArray(firstNationsActivistsData.people)).toBe(true);
            expect(Array.isArray(firstNationsActivistsData.groups)).toBe(true);
            expect(Array.isArray(firstNationsActivistsData.events)).toBe(true);
        });
        it('should have diverse global representation', () => {
            const people = factory.getPeople();
            expect(people.length).toBeGreaterThanOrEqual(40);
            // Check for different regions/cultures with real activists
            const cultures = people.flatMap(p => p.tags);
            expect(cultures).toContain('anishinaabe');
            expect(cultures).toContain('oglala-lakota');
            expect(cultures).toContain('gitxsan');
            expect(cultures).toContain('aboriginal');
            expect(cultures).toContain('maya');
            expect(cultures).toContain('cherokee');
            expect(cultures).toContain('navajo');
        });
        it('should have mock email addresses with .test domains', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                expect(person.email).toMatch(/\.test$/);
                expect(person.email).not.toContain('@gmail.com');
                expect(person.email).not.toContain('@yahoo.com');
            });
            const groups = factory.getGroups();
            groups.forEach(group => {
                if (group.email) {
                    expect(group.email).toMatch(/\.test$/);
                }
            });
        });
        it('should have phone numbers that are clearly fake', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                if (person.phone) {
                    // Should contain 555 (common fake number pattern) or be clearly test numbers
                    expect(person.phone).toMatch(/555|test|-55-5/i);
                }
            });
        });
        it('should include reference links for verification', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                if (person.reference) {
                    expect(person.reference).toMatch(/^https:\/\//);
                }
            });
            // Ensure at least some people have reference links
            const peopleWithReferences = people.filter(p => p.reference);
            expect(peopleWithReferences.length).toBeGreaterThan(0);
        });
        it('should include address information with accurate locations', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                if (person.address) {
                    expect(person.address.street).toBeDefined();
                    expect(person.address.city).toBeDefined();
                    expect(person.address.state).toBeDefined();
                    expect(person.address.country).toBeDefined();
                    expect(person.address.zipCode).toBeDefined();
                    // Should be real countries
                    const validCountries = ['United States', 'Canada', 'Australia', 'Brazil', 'Guatemala', 'New Zealand', 'India', 'Ecuador', 'South Africa', 'Kenya', 'Tanzania', 'Nigeria', 'Sweden', 'Norway', 'Finland', 'Russia', 'Japan', 'Philippines', 'Fiji', 'Papua New Guinea', 'Vanuatu', 'Solomon Islands', 'Kiribati', 'Marshall Islands', 'Samoa', 'Chile', 'Argentina', 'Colombia', 'Bolivia', 'Peru', 'Botswana', 'Namibia', 'Chad', 'Nepal', 'Honduras', 'Gambia'];
                    expect(validCountries).toContain(person.address.country);
                }
            });
            // Ensure most people have addresses
            const peopleWithAddresses = people.filter(p => p.address);
            expect(peopleWithAddresses.length).toBeGreaterThan(30);
        });
        it('should include meaningful quotes from each activist', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                if (person.quote) {
                    expect(person.quote.length).toBeGreaterThan(10);
                    expect(typeof person.quote).toBe('string');
                }
            });
            // Ensure most people have quotes
            const peopleWithQuotes = people.filter(p => p.quote);
            expect(peopleWithQuotes.length).toBeGreaterThan(30);
        });
    });
    describe('API Integration', () => {
        it('should work with DataFactory getPeople', () => {
            const allPeople = factory.getPeople();
            expect(allPeople.length).toBeGreaterThan(0);
            const somePeople = factory.getPeople(5);
            expect(somePeople.length).toBe(5);
        });
        it('should work with DataFactory getPerson', () => {
            const person = factory.getPerson('person-0001');
            expect(person).toBeDefined();
            expect(person?.fullName).toBe('Winona LaDuke');
            expect(person?.tags).toContain('anishinaabe');
            const nonExistent = factory.getPerson('non-existent');
            expect(nonExistent).toBeNull();
        });
        it('should work with DataFactory getPersonByEmail', () => {
            const person = factory.getPersonByEmail('winona.laduke@honorearth.test');
            expect(person).toBeDefined();
            expect(person?.id).toBe('person-0001');
            const nonExistent = factory.getPersonByEmail('fake@example.test');
            expect(nonExistent).toBeNull();
        });
        it('should work with DataFactory getGroups', () => {
            const allGroups = factory.getGroups();
            expect(allGroups.length).toBeGreaterThan(0);
            const someGroups = factory.getGroups(3);
            expect(someGroups.length).toBe(3);
        });
        it('should work with DataFactory getGroup', () => {
            const group = factory.getGroup('american-indian-movement');
            expect(group).toBeDefined();
            expect(group?.name).toBe('American Indian Movement');
            const nonExistent = factory.getGroup('non-existent');
            expect(nonExistent).toBeNull();
        });
        it('should work with DataFactory getEvents', () => {
            const allEvents = factory.getEvents();
            expect(allEvents.length).toBeGreaterThan(0);
            const someEvents = factory.getEvents(3);
            expect(someEvents.length).toBe(3);
        });
        it('should work with DataFactory getEvent', () => {
            const event = factory.getEvent('event-001');
            expect(event).toBeDefined();
            expect(event?.name).toBe('Global Indigenous Environmental Summit');
            const nonExistent = factory.getEvent('non-existent');
            expect(nonExistent).toBeNull();
        });
        it('should work with filtering methods', () => {
            const environmentalActivists = factory.getPeopleByTag('environmental');
            expect(environmentalActivists.length).toBeGreaterThan(0);
            environmentalActivists.forEach(person => {
                expect(person.tags).toContain('environmental');
            });
            const aimMembers = factory.getPeopleInGroup('american-indian-movement');
            expect(aimMembers.length).toBeGreaterThan(0);
            aimMembers.forEach(person => {
                expect(person.groupMemberships).toContain('american-indian-movement');
            });
        });
    });
    describe('Deterministic Behavior', () => {
        it('should provide consistent results with same seed', () => {
            factory.setSeed(42);
            const people1 = factory.getPeople(5);
            factory.setSeed(42);
            const people2 = factory.getPeople(5);
            expect(people1.map(p => p.id)).toEqual(people2.map(p => p.id));
        });
        it('should handle nullable fields according to API specs', () => {
            factory.setSeed(1);
            const people = factory.getPeople();
            let hasNullBio = false;
            let hasNullPhone = false;
            let hasNullPicture = false;
            people.forEach(person => {
                if (person.bio === null)
                    hasNullBio = true;
                if (person.phone === null)
                    hasNullPhone = true;
                if (person.picture === null)
                    hasNullPicture = true;
            });
            // With enough people and a fixed seed, we should see some null values
            // (though specific nullability depends on the seed and API configuration)
            expect(hasNullBio || hasNullPhone || hasNullPicture).toBe(true);
        });
    });
    describe('Data Quality', () => {
        it('should have activists covering different causes', () => {
            const people = factory.getPeople();
            const allTags = people.flatMap(p => p.tags);
            expect(allTags).toContain('environmental');
            expect(allTags).toContain('civil-rights');
            expect(allTags).toContain('child-welfare');
            expect(allTags).toContain('human-rights');
            expect(allTags).toContain('water-rights');
            expect(allTags).toContain('youth-activism');
        });
        it('should have realistic group memberships', () => {
            const people = factory.getPeople();
            people.forEach(person => {
                expect(person.groupMemberships.length).toBeGreaterThan(0);
                // Verify group memberships reference valid group IDs
                person.groupMemberships.forEach(groupId => {
                    const group = factory.getGroup(groupId);
                    expect(group).toBeDefined();
                });
            });
        });
        it('should have events with valid attendee references', () => {
            const events = factory.getEvents();
            events.forEach(event => {
                expect(event.attendeeIds.length).toBeGreaterThan(0);
                // Verify attendee IDs reference valid people
                event.attendeeIds.forEach(personId => {
                    const person = factory.getPerson(personId);
                    expect(person).toBeDefined();
                });
            });
        });
        it('should have groups with meaningful descriptions', () => {
            const groups = factory.getGroups();
            groups.forEach(group => {
                expect(group.name.length).toBeGreaterThan(5);
                expect(group.about.length).toBeGreaterThan(20);
                expect(group.about).toMatch(/Indigenous|First Nations|Native|Aboriginal|tribal|Sami|Torres Strait|Pacific Islander|Khoikhoi|cultural heritage|traditional|Māori|environmental|human rights|activism|sovereignty|land rights|community|organization|movement|Parliament|Congress|political|legislative|Armed forces|military|peacekeeping|constitutional/i);
            });
        });
    });
    describe('First Nations Cultural Sensitivity', () => {
        it('should require acknowledgment flag to load First Nations data', () => {
            // Test loading without acknowledgment flag
            const factoryWithoutAck = new DataFactory(firstNationsActivistsData);
            expect(() => {
                factoryWithoutAck.getPeople();
            }).toThrow(/This dataset contains First Nations people and requires acknowledgment/);
        });
        it('should load normally with acknowledgment flag', () => {
            const factoryWithAck = new DataFactory(firstNationsActivistsData, { acknowledgeDeceasedFirstNations: true });
            const people = factoryWithAck.getPeople();
            expect(people.length).toBeGreaterThan(0);
        });
        it('should have metadata indicating First Nations content', () => {
            expect(firstNationsActivistsData.metadata).toBeDefined();
            expect(firstNationsActivistsData.metadata?.containsFirstNationsPeople).toBe(true);
        });
        it('should provide clear error message when data is blocked', () => {
            const factoryWithoutAck = new DataFactory(firstNationsActivistsData);
            expect(() => {
                factoryWithoutAck.getPeople();
            }).toThrow("No people available. This dataset contains First Nations people and requires acknowledgment of cultural protocols regarding deceased persons. Please reload with appropriate acknowledgment flag or load a different or additional dataset.");
        });
    });
});
//# sourceMappingURL=index.test.js.map