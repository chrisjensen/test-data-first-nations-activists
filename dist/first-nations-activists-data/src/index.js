const firstNationsActivistsData = {
    metadata: {
        containsFirstNationsPeople: true
    },
    people: [
        // US Native American Activists
        {
            id: 'person-01',
            fullName: 'Winona LaDuke',
            dateOfBirth: new Date('1959-08-18'),
            pronouns: 'she/her',
            bio: 'Winona LaDuke has spent her life defending what colonization tried to destroy. An Anishinaabe economist and environmental activist, she founded Honor the Earth to protect Indigenous lands from corporate exploitation, later becoming the Green Party\\u0027s vice presidential candidate to bring Native voices to national politics.',
            email: 'winona.laduke@honorearth.test',
            phone: '+1-555-0101',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Eric_Janus_and_Winona_LaDuke_%283x4_cropped%29.jpg',
            tags: ["environmental", "renewable-energy", "anishinaabe", "green-party", "food-sovereignty"],
            groupMemberships: ["honor-the-earth", "white-earth-land-recovery"],
            reference: 'https://en.wikipedia.org/wiki/Winona_LaDuke',
            address: {
                street: '123 Maple Grove Lane',
                city: 'Callaway',
                state: 'Minnesota',
                country: 'United States',
                zipCode: '56521'
            },
            quote: "What we need is to think about the next seven generations. We need to think about the future we are creating for our children and our children's children."
        },
        {
            id: 'person-02',
            fullName: 'Dennis Banks',
            dateOfBirth: new Date('1937-04-12'),
            pronouns: 'he/him',
            bio: 'Dennis Banks understood that Native people needed to reclaim their power, not just ask for it. An Anishinaabe leader who co-founded the American Indian Movement, he organized the occupation of Wounded Knee in 1973, confronting centuries of broken treaties and demanding recognition of Indigenous sovereignty.',
            email: 'dennis.banks@aim.test',
            phone: '+1-555-0102',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Dennis_Banks_%288673602267%29_%28cropped%29.jpg',
            tags: ["civil-rights", "aim", "anishinaabe", "wounded-knee", "activism"],
            groupMemberships: ["american-indian-movement", "honor-the-earth"],
            reference: 'https://en.wikipedia.org/wiki/Dennis_Banks',
            address: {
                street: '456 Thunder Bay Road',
                city: 'Minneapolis',
                state: 'Minnesota',
                country: 'United States',
                zipCode: '55404'
            },
            quote: 'We have to use our culture, we have to use our spirituality, and we have to use our ceremonies to heal ourselves and to heal the Earth.'
        },
        {
            id: 'person-03',
            fullName: 'Russell Means',
            dateOfBirth: new Date('1939-11-10'),
            pronouns: 'he/him',
            bio: 'Russell Means never separated his art from his activism. An Oglala Lakota leader and AIM co-founder, he fought for Indigenous rights through direct action and later brought authentic Native representation to Hollywood films, refusing to let either arena compromise his commitment to his people\\u0027s sovereignty.',
            email: 'russell.means@aim.test',
            phone: '+1-555-0103',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/RussellMeans1987.jpg',
            tags: ["civil-rights", "aim", "oglala-lakota", "wounded-knee", "actor"],
            groupMemberships: ["american-indian-movement"],
            reference: 'https://en.wikipedia.org/wiki/Russell_Means',
            address: {
                street: '789 Sacred Mountains Drive',
                city: 'Porcupine',
                state: 'South Dakota',
                country: 'United States',
                zipCode: '57772'
            },
            quote: 'The only way Indians will survive is by taking political power.'
        },
        // Canadian First Nations Activists
        {
            id: 'person-04',
            fullName: 'Cindy Blackstock',
            dateOfBirth: new Date('1964-01-01'),
            pronouns: 'she/her',
            bio: 'Cindy Blackstock has dedicated her career to protecting Indigenous children from systemic discrimination. A Gitxsan social worker and advocate, she challenged the Canadian government in court over underfunding of child welfare services on reserves, exposing decades of institutional neglect that violated Indigenous children\\u0027s human rights.',
            email: 'cindy.blackstock@fncaringsociety.test',
            phone: '+1-555-0104',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ["child-welfare", "human-rights", "gitxsan", "social-work"],
            groupMemberships: ["first-nations-caring-society"],
            reference: 'https://en.wikipedia.org/wiki/Cindy_Blackstock',
            address: {
                street: '321 Justice Boulevard',
                city: 'Ottawa',
                state: 'Ontario',
                country: 'Canada',
                zipCode: 'K1P 6L1'
            },
            quote: 'Every child is sacred and deserves the best that we can give them. When we prioritize their well-being, we honor our responsibilities as human beings.'
        },
        {
            id: 'person-05',
            fullName: 'Leonard Peltier',
            dateOfBirth: new Date('1944-09-12'),
            pronouns: 'he/him',
            bio: 'Leonard Peltier became a symbol of Indigenous resistance during nearly five decades of imprisonment. An Anishinaabe-Dakota activist and member of the American Indian Movement, he was convicted in the 1975 shooting deaths of two FBI agents on the Pine Ridge Reservation amid a period of intense conflict and government surveillance of Native activists. His case became internationally recognized as emblematic of injustices faced by Indigenous people within the American legal system. In January 2025, President Biden granted him clemency, acknowledging the controversy surrounding his conviction and his status as one of the world\\u0027s longest-serving Indigenous political prisoners.',
            email: 'leonard.peltier@freeleonard.test',
            phone: '+1-555-0105',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Leonard_Peltier_mug_shot_%28cropped%29.jpg',
            tags: ["political-prisoner", "aim", "civil-rights", "clemency"],
            groupMemberships: ["american-indian-movement"],
            reference: 'https://en.wikipedia.org/wiki/Leonard_Peltier',
            address: {
                street: '555 Freedom Road',
                city: 'Belcourt',
                state: 'North Dakota',
                country: 'United States',
                zipCode: '58316'
            },
            quote: 'I am innocent. But I am also a victim of the persecution and harassment that has been inflicted upon Indian people.'
        },
        {
            id: 'person-06',
            fullName: 'Autumn Peltier',
            dateOfBirth: new Date('2004-09-27'),
            pronouns: 'she/her',
            bio: 'Autumn Peltier has devoted her young life to protecting the waters that sustain all life. An Anishinaabe water protector from Wikwemikong Unceded Territory, she began speaking out about water crises affecting Indigenous communities when she was just eight years old. Following in the footsteps of her great-aunt Josephine Mandamin, a respected water walker, Peltier has addressed the United Nations General Assembly and other international forums about the sacred relationship between Indigenous peoples and water. Her advocacy has brought global attention to the water crises facing many First Nations communities across Canada.',
            email: 'autumn.peltier@anishinabek.test',
            phone: '+1-555-0106',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ["water-rights", "youth-activism", "anishinaabe", "united-nations"],
            groupMemberships: ["anishinabek-nation", "honor-the-earth"],
            reference: 'https://en.wikipedia.org/wiki/Autumn_Peltier',
            address: {
                street: '777 Water Ceremony Circle',
                city: 'Manitoulin Island',
                state: 'Ontario',
                country: 'Canada',
                zipCode: 'P0P 1M0'
            },
            quote: "We can't eat money or drink oil. The future of our people depends on the protection of water."
        },
        // Indigenous Australian Activists
        {
            id: 'person-07',
            fullName: 'Noel Pearson',
            dateOfBirth: new Date('1965-06-25'),
            pronouns: 'he/him',
            bio: 'Noel Pearson has never accepted that Aboriginal people should remain trapped in cycles of welfare dependency. A Cape York leader and constitutional lawyer, he advocates for Indigenous economic empowerment and educational reform, arguing that true reconciliation requires Aboriginal people to reclaim agency over their own communities.',
            email: 'noel.pearson@capeyork.test',
            phone: '+61-555-0107',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Noel_Pearson_8Feb10.jpg',
            tags: ["land-rights", "education", "aboriginal", "constitutional-recognition"],
            groupMemberships: ["cape-york-partnership"],
            reference: 'https://en.wikipedia.org/wiki/Noel_Pearson',
            address: {
                street: '888 Hope Vale Way',
                city: 'Cooktown',
                state: 'Queensland',
                country: 'Australia',
                zipCode: '4895'
            },
            quote: 'We have to take responsibility for our own future. We cannot continue to blame everyone else for our problems.'
        },
        {
            id: 'person-08',
            fullName: 'Ocean Wave Torres',
            dateOfBirth: new Date('1985-03-15'),
            pronouns: 'she/her',
            bio: 'Ocean Wave Torres has dedicated her life to protecting the marine ecosystems that sustain her people. A Torres Strait Islander marine conservation advocate, she works to safeguard coral reefs and traditional fishing grounds from the devastating impacts of climate change. Her advocacy bridges Indigenous knowledge systems with modern conservation science, demonstrating that traditional ecological wisdom is essential for environmental protection. Torres fights tirelessly to ensure that rising sea levels and ocean acidification do not destroy the islands and waters that have sustained her ancestors for thousands of years.',
            email: 'ocean.wave@torresstraitmarine.test',
            phone: '+61-555-0108',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ["marine-conservation", "coral-reefs", "torres-strait-islander", "fishing-rights"],
            groupMemberships: ["torres-strait-conservation", "pacific-islander-alliance"]
        },
        // Central American Indigenous Activists
        {
            id: 'person-09',
            fullName: 'Rigoberta Menchú',
            dateOfBirth: new Date('1959-01-09'),
            pronouns: 'she/her',
            bio: 'Rigoberta Menchú emerged from unimaginable tragedy to become a powerful voice for Indigenous rights worldwide. A K\\u0027iche\\u0027 Maya woman from Guatemala, she witnessed the brutal murder of her family members during the Guatemalan Civil War, including her brother and mother who were tortured and killed by government forces. Rather than succumb to despair, Menchú channeled her grief into advocacy, documenting the systematic persecution of Maya communities and working to preserve Indigenous culture. Her testimony about the genocide against Guatemala\\u0027s Indigenous population brought international attention to their struggle and earned her the Nobel Peace Prize in 1992, making her the youngest recipient at the time.',
            email: 'rigoberta.menchu@nobelpeace.test',
            phone: '+502-555-0108',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/8/81/20240620_NP_PRESIDENTE_BERNARDO_AREVALO_Y_KARIN_HERRERA_PARTICIPAN_EN_DIALOGO_PREMIO_NOBEL_DE_LA_PAZ_054_%28cropped%29.jpg',
            tags: ["human-rights", "nobel-laureate", "maya", "social-justice"],
            groupMemberships: ["rigoberta-menchu-foundation"],
            reference: 'https://en.wikipedia.org/wiki/Rigoberta_Mench%C3%BA',
            address: {
                street: '999 Peace Avenue',
                city: 'Guatemala City',
                state: 'Guatemala Department',
                country: 'Guatemala',
                zipCode: '01001'
            },
            quote: 'I have lived with the Indian people, and I have seen their suffering. They cannot speak for themselves, so I must speak for them.'
        },
        // More US Native American Activists
        {
            id: 'person-10',
            fullName: 'Clyde Bellecourt',
            dateOfBirth: new Date('1936-05-08'),
            pronouns: 'he/him',
            bio: 'Clyde Bellecourt understood that Indigenous people in cities faced the same oppression as those on reservations, just in different forms. An Anishinaabe activist and co-founder of the American Indian Movement, he organized Native communities in Minneapolis to fight police brutality and systemic discrimination. His work transformed urban Indigenous activism and proved that Native identity could thrive in concrete jungles as powerfully as on ancestral lands. Bellecourt\\u0027s organizing laid the groundwork for AIM\\u0027s later nationwide actions, making Minneapolis the birthplace of modern Native American civil rights.',
            email: 'clyde.bellecourt@aim.test',
            phone: '+1-555-0109',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/C_Bellecourt_by_M_Spencer.jpg',
            tags: ["civil-rights", "aim", "anishinaabe", "urban-activism"],
            groupMemberships: ["american-indian-movement", "honor-the-earth"],
            reference: 'https://en.wikipedia.org/wiki/Clyde_Bellecourt',
            address: {
                street: '1010 Thunder Bay Street',
                city: 'Minneapolis',
                state: 'Minnesota',
                country: 'United States',
                zipCode: '55411'
            },
            quote: 'We are the landlords of the country, it is the end of the month, the rent is due, and AIM is going to collect.'
        },
        {
            id: 'person-010',
            fullName: 'Mary Brave Bird',
            dateOfBirth: new Date('1954-09-26'),
            pronouns: 'she/her',
            bio: 'Mary Brave Bird lived through one of the most intense moments of Native American resistance when she gave birth to her son during the 1973 occupation of Wounded Knee. A Lakota activist and member of AIM, she faced federal agents and military forces while bringing new life into a community under siege. Her experience became a powerful symbol of Indigenous women\\u0027s strength and the continuation of Native life despite government attempts at suppression. Brave Bird later wrote about her experiences in powerful memoirs that documented both the brutality of government boarding schools and the fierce resistance of her generation.',
            email: 'mary.bravebird@aim.test',
            phone: '+1-555-0110',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ["civil-rights", "aim", "lakota", "wounded-knee", "author"],
            groupMemberships: ["american-indian-movement"],
            reference: 'https://en.wikipedia.org/wiki/Mary_Brave_Bird',
            address: {
                street: '1111 Brave Heart Road',
                city: 'Mission',
                state: 'South Dakota',
                country: 'United States',
                zipCode: '57555'
            },
            quote: 'I could not help noticing the great role women played in Pueblo society. Women owned the houses and actually built them.'
        },
        {
            id: 'person-011',
            fullName: 'Charlene Teters',
            dateOfBirth: new Date('1952-02-18'),
            pronouns: 'she/her',
            bio: 'Charlene Teters confronted racism when she least expected it - at her son\\u0027s University of Illinois basketball game, where she witnessed the degrading spectacle of the "Chief Illiniwek" mascot. A Spokane artist and activist, she organized protests against Native American sports mascots, challenging institutions across the country to abandon these harmful stereotypes. Her advocacy sparked a national movement that forced some universities and professional teams to change their practices, though many continue to resist. Teters\\u0027 work exposed how deeply embedded these racist representations were in American sports culture.',
            email: 'charlene.teters@spokane.test',
            phone: '+1-555-0111',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Charlene_Teters_-_Senate_Hearing_on_05_May_2011.jpg',
            tags: ["artist", "anti-racism", "spokane", "mascot-activism"],
            groupMemberships: ["national-coalition-racism-sports"],
            reference: 'https://en.wikipedia.org/wiki/Charlene_Teters',
            address: {
                street: '1212 Artist Way',
                city: 'Spokane',
                state: 'Washington',
                country: 'United States',
                zipCode: '99201'
            },
            quote: 'My art was a vehicle to make my voice bigger.'
        },
        {
            id: 'person-012',
            fullName: 'Sharice Davids',
            dateOfBirth: new Date('1980-05-22'),
            pronouns: 'she/her',
            bio: 'Sharice Davids broke barriers both in the octagon and in Congress, bringing her diverse background to bear on policy issues affecting Indigenous communities. A Ho-Chunk attorney and former mixed martial arts fighter, she made history in 2018 by becoming one of the first Native American women elected to Congress, representing Kansas\\u0027s third congressional district. Her path to Capitol Hill included time as a White House Fellow and work on economic development projects in Indian Country. In Congress, Davids has focused on infrastructure, healthcare, and economic issues while advocating for tribal sovereignty and Indigenous rights.',
            email: 'sharice.davids@congress.test',
            phone: '+1-555-0112',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Sharice_Davids.jpg',
            tags: ["congress", "ho-chunk", "politics", "lawyer", "lgbtq"],
            groupMemberships: ["us-congress-native-caucus"],
            reference: 'https://en.wikipedia.org/wiki/Sharice_Davids',
            address: {
                street: '1313 Capitol Hill Drive',
                city: 'Olathe',
                state: 'Kansas',
                country: 'United States',
                zipCode: '66061'
            },
            quote: 'As a woman and a Native American, I know how to stand up and fight for equity.'
        },
        // Additional activists from all around the world to reach 40+
        // More Canadian First Nations
        {
            id: 'person-013',
            fullName: 'Buffy Sainte-Marie',
            dateOfBirth: new Date('1941-02-20'),
            pronouns: 'she/her',
            bio: 'Buffy Sainte-Marie used her music as a vehicle for social change and Indigenous rights advocacy throughout her decades-long career. A Cree singer-songwriter and educator, she wrote powerful protest songs that addressed war, social injustice, and the struggles facing Indigenous peoples. Her 1964 song "Universal Soldier" became an anti-war anthem, while tracks like "Now That the Buffalo\\u0027s Gone" brought attention to the ongoing displacement and oppression of Native Americans. Beyond music, Sainte-Marie pioneered the use of digital technology in Indigenous education and spent years working to improve educational opportunities for Native children.',
            email: 'buffy.saintemarie@music.test',
            phone: '+1-555-0113',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/1970_Buffy_Sainte-Marie.jpg',
            tags: ["musician", "cree", "activist", "folk-singer"],
            groupMemberships: ["indigenous-musicians-collective"],
            reference: 'https://en.wikipedia.org/wiki/Buffy_Sainte-Marie',
            address: {
                street: '1414 Harmony Lane',
                city: 'Saskatoon',
                state: 'Saskatchewan',
                country: 'Canada',
                zipCode: 'S7K 3J7'
            },
            quote: 'Soldiers are dreamers; when the guns begin they think of firelit homes, clean beds, and wives.'
        },
        {
            id: 'person-014',
            fullName: 'Ovide Mercredi',
            dateOfBirth: new Date('1946-01-30'),
            pronouns: 'he/him',
            bio: 'Ovide Mercredi transformed Indigenous political organizing in Canada during his tenure as National Chief of the Assembly of First Nations from 1991 to 1997. A Cree lawyer and political leader from Manitoba, he worked to build consensus among the diverse First Nations communities across Canada, representing over 630 bands with different languages, cultures, and political priorities. Mercredi played a crucial role in constitutional negotiations during the early 1990s, advocating for Indigenous self-government and the recognition of inherent Aboriginal rights. His leadership helped establish the Assembly of First Nations as a more unified and effective political voice for Indigenous peoples in their relationship with the Canadian government.',
            email: 'ovide.mercredi@afn.test',
            phone: '+1-555-0114',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Ovide_Mercredi.JPG',
            tags: ["politics", "cree", "assembly-first-nations", "grand-chief"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ovide_Mercredi',
            address: {
                street: '1515 Chiefs Road',
                city: 'Winnipeg',
                state: 'Manitoba',
                country: 'Canada',
                zipCode: 'R3B 0T6'
            },
            quote: 'We want to be partners in this country, not wards of the state.'
        },
        // More US Activists
        {
            id: 'person-015',
            fullName: 'Suzan Shown Harjo',
            dateOfBirth: new Date('1945-06-02'),
            pronouns: 'she/her',
            bio: 'Suzan Shown Harjo has dedicated her career to protecting Indigenous cultural heritage and advancing tribal sovereignty through policy and legal advocacy. A Cheyenne and Hodulgee Muscogee activist, writer, and curator, she played pivotal roles in the passage of landmark legislation including the American Indian Religious Freedom Act and the Native American Graves Protection and Repatriation Act. Her work has focused on returning sacred items and ancestral remains to tribal communities, challenging racist sports mascots, and advocating for the protection of sacred sites. Harjo has served in various government positions and continues to write and speak about Indigenous rights and cultural preservation.',
            email: 'suzan.harjo@nmai.test',
            phone: '+1-555-0115',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Suzan_shown_harjo_09.jpg',
            tags: ["policy", "cheyenne", "muscogee", "repatriation"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Suzan_Shown_Harjo',
            address: {
                street: '1616 Constitution Avenue',
                city: 'Washington',
                state: 'District of Columbia',
                country: 'United States',
                zipCode: '20002'
            },
            quote: 'Our ancestors are not artifacts. They are human beings who deserve to rest in peace.'
        },
        {
            id: 'person-016',
            fullName: 'John Trudell',
            dateOfBirth: new Date('1946-02-15'),
            pronouns: 'he/him',
            bio: 'John Trudell channeled his activism through poetry, music, and spoken word, becoming one of the most compelling voices in the American Indian Movement. A Santee Dakota activist, he served as AIM\\u0027s national chairman for many years and was a constant presence at protests and occupations throughout the 1970s. After the suspicious deaths of his wife, three children, and mother-in-law in a house fire in 1979, Trudell turned increasingly to artistic expression as a form of resistance. His poetry and music explored themes of Indigenous identity, spirituality, and the ongoing struggle against colonization, creating works that resonated far beyond Native communities.',
            email: 'john.trudell@aim.test',
            phone: '+1-555-0116',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/John_Trudell_1997-09-24_61232-37.jpg',
            tags: ["poet", "santee-dakota", "aim", "musician", "spokesman"],
            groupMemberships: ["american-indian-movement", "indigenous-musicians-collective"],
            reference: 'https://en.wikipedia.org/wiki/John_Trudell',
            address: {
                street: '1717 Poetry Path',
                city: 'Santa Fe',
                state: 'New Mexico',
                country: 'United States',
                zipCode: '87501'
            },
            quote: 'We are not Indians and we are not Native Americans. We are older than both concepts. We are the people, we are the human beings.'
        },
        {
            id: 'person-017',
            fullName: 'Deb Haaland',
            dateOfBirth: new Date('1960-12-02'),
            pronouns: 'she/her',
            bio: "The first Native American Cabinet Secretary in US history. This Laguna Pueblo powerhouse climbed from state politics to managing America's public lands, proving Indigenous women belong in the highest halls of power.",
            email: 'deb.haaland@interior.test',
            phone: '+1-555-0117',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Deb_Haaland%2C_official_portrait%2C_116th_Congress_%28cropped%29.jpg',
            tags: ["congress", "laguna-pueblo", "cabinet", "interior-secretary", "politician"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Deb_Haaland',
            address: {
                street: '1818 Federal Way',
                city: 'Albuquerque',
                state: 'New Mexico',
                country: 'United States',
                zipCode: '87102'
            },
            quote: "A voice was needed to ensure that this country's first peoples have a seat at the table when decisions are being made about our lands, our waters, our sacred sites and our people."
        },
        {
            id: 'person-018',
            fullName: 'LaDonna Harris',
            dateOfBirth: new Date('1931-02-15'),
            pronouns: 'she/her',
            bio: 'LaDonna Harris has devoted her life to advancing Indigenous rights through coalition-building and political engagement spanning over seven decades. A Comanche activist and the founder of Americans for Indian Opportunity, she has worked tirelessly to create opportunities for Native Americans in education, economic development, and political participation. Harris served on numerous federal commissions and advisory boards, helping to shape policy on Indian affairs during multiple presidential administrations. Her approach has emphasized building bridges between Indigenous communities and mainstream institutions while always maintaining focus on tribal sovereignty and self-determination.',
            email: 'ladonna.harris@ait.test',
            phone: '+1-555-0118',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/LaDonnaHarris.png',
            tags: ["comanche", "activism", "diplomacy", "tribal-relations"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/LaDonna_Harris',
            address: {
                street: '1919 Opportunity Street',
                city: 'Bernalillo',
                state: 'New Mexico',
                country: 'United States',
                zipCode: '87004'
            },
            quote: 'We have to learn how to be Indians in the 20th century and beyond, maintaining our values and our culture.'
        },
        // International Indigenous Activists
        {
            id: 'person-019',
            fullName: 'Ailton Krenak',
            dateOfBirth: new Date('1953-09-29'),
            pronouns: 'he/him',
            bio: 'Ailton Krenak has emerged as one of Brazil\\u0027s most important Indigenous intellectuals, advocating for a fundamental shift in humanity\\u0027s relationship with nature. A Krenak leader, philosopher, and writer from Minas Gerais, he has spent decades challenging Western notions of progress and development that prioritize economic growth over environmental sustainability. His writings and speeches emphasize the urgent need to reconnect with Indigenous knowledge systems that view humans as part of, rather than separate from, the natural world. Krenak argues that Indigenous peoples have been "postponing the end of the world" since colonization began, and their wisdom is essential for addressing the climate crisis.',
            email: 'ailton.krenak@krenak.test',
            phone: '+55-555-0119',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Ailton_Krenak_%285269420566%29_%28cropped%29.jpg',
            tags: ["philosopher", "krenak", "environmental", "author"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ailton_Krenak',
            address: {
                street: '2020 River Doce Avenue',
                city: 'Resplendor',
                state: 'Minas Gerais',
                country: 'Brazil',
                zipCode: '39737-000'
            },
            quote: 'We need to postpone the end of the world. Indigenous peoples have been postponing the end of the world since 1500.'
        },
        {
            id: 'person-020',
            fullName: 'Sonia Guajajara',
            dateOfBirth: new Date('1974-03-06'),
            pronouns: 'she/her',
            bio: 'Sonia Guajajara has become Brazil\\u0027s most prominent Indigenous political leader, advocating for forest protection and Indigenous rights on both national and international stages. A Guajajara leader from the Amazon rainforest, she has coordinated the Articulation of Indigenous Peoples of Brazil, representing over 300 ethnic groups in their fight against deforestation, land grabbing, and cultural destruction. In 2018, she made history by running for Vice President of Brazil on the ticket with Guilherme Boulos, bringing Indigenous perspectives to mainstream political discourse. Her leadership has been crucial in organizing resistance to policies that threaten Indigenous territories and in building international solidarity for Amazon protection.',
            email: 'sonia.guajajara@apib.test',
            phone: '+55-555-0120',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/11.01.2023_-_Cerim%C3%B4nias_de_assun%C3%A7%C3%A3o_nos_cargos_das_ministras_da_Igualdade_Racial%2C_Anielle_Franco%2C_e_dos_Povos_Ind%C3%ADgenas%2C_S%C3%B4nia_Guajajara_%2852650320567%29_%28cropped%29.jpg',
            tags: ["guajajara", "politics", "vice-president-candidate", "forest-defender"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Sonia_Guajajara',
            address: {
                street: '2121 Indigenous Rights Boulevard',
                city: 'Brasília',
                state: 'Distrito Federal',
                country: 'Brazil',
                zipCode: '70040-010'
            },
            quote: 'Our struggle is to remain alive, it is to guarantee the continuity of life, of the forest, of the rivers, of the animals.'
        },
        // More activists to reach 40+
        {
            id: 'person-021',
            fullName: 'Anna Mae Aquash',
            dateOfBirth: new Date('1945-03-27'),
            pronouns: 'she/her',
            bio: "The AIM activist whose murder became a movement. This Mi'kmaq woman paid the ultimate price for her dedication to Indigenous rights, her death exposing the dangerous intersection of activism and violence.",
            email: 'annamae.aquash@aim.test',
            phone: '+1-555-0121',
            picture: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Anna_Mae_Pictou-Aquash.jpg',
            tags: ["mikmaq", "aim", "civil-rights", "martyr"],
            groupMemberships: ["american-indian-movement"],
            reference: 'https://en.wikipedia.org/wiki/Anna_Mae_Aquash',
            address: {
                street: '2222 Justice Lane',
                city: 'Boston',
                state: 'Massachusetts',
                country: 'United States',
                zipCode: '02101'
            },
            quote: 'I will die, if necessary, as a proud Ojibway woman.'
        },
        {
            id: 'person-022',
            fullName: 'Ada Deer',
            dateOfBirth: new Date('1935-08-07'),
            pronouns: 'she/her',
            bio: "The first Native American woman to head the Bureau of Indian Affairs. This Menominee leader fought to restore her tribe's federal recognition, then took charge of the very agency that had tried to terminate them.",
            email: 'ada.deer@bia.test',
            phone: '+1-555-0122',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Ada_E._Deer.jpg',
            tags: ["menominee", "bia", "termination-restoration", "federal-recognition"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ada_Deer',
            address: {
                street: '2323 Federal Circle',
                city: 'Keshena',
                state: 'Wisconsin',
                country: 'United States',
                zipCode: '54135'
            },
            quote: 'My proudest moments have not been winning this or that award, but making a difference.'
        },
        {
            id: 'person-023',
            fullName: 'Ben Nighthorse Campbell',
            dateOfBirth: new Date('1933-04-13'),
            pronouns: 'he/him',
            bio: 'Ben Nighthorse Campbell broke barriers as the first Native American elected to the U.S. Senate in more than 60 years, serving Colorado from 1993 to 2005. A Northern Cheyenne member who grew up in poverty in California, Campbell\\u0027s path to Capitol Hill was unconventional - he was an Olympic judo competitor in 1964, a jewelry designer, and a rancher before entering politics. In the Senate, he chaired the Indian Affairs Committee and worked on legislation affecting tribal sovereignty, cultural preservation, and veterans\\u0027 affairs. Campbell\\u0027s independent spirit led him to switch from Democrat to Republican in 1995, always prioritizing his constituents and Indigenous issues over party politics.',
            email: 'ben.campbell@senate.test',
            phone: '+1-555-0123',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/75/BenNCampbell.jpg',
            tags: ["northern-cheyenne", "senator", "olympian", "jewelry-maker"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ben_Nighthorse_Campbell',
            address: {
                street: '2424 Senate Drive',
                city: 'Ignacio',
                state: 'Colorado',
                country: 'United States',
                zipCode: '81137'
            },
            quote: 'I have always been prouder of my Indian heritage than anything else in my life.'
        },
        {
            id: 'person-024',
            fullName: 'Vine Deloria Jr.',
            dateOfBirth: new Date('1933-03-26'),
            pronouns: 'he/him',
            bio: 'Vine Deloria Jr. revolutionized Indigenous scholarship and challenged American assumptions about Native peoples through his groundbreaking writings. A Standing Rock Sioux author and activist, his 1969 book "Custer Died for Your Sins" used sharp wit and incisive analysis to expose the absurdities of federal Indian policy and the romanticized stereotypes that obscured the reality of Indigenous experiences. Deloria combined legal expertise with traditional Indigenous knowledge, helping establish Native American studies as an academic discipline while advocating for tribal sovereignty and religious freedom. His prolific writing career produced over 20 books that fundamentally changed how Americans understand Indigenous history and contemporary issues.',
            email: 'vine.deloria@colorado.test',
            phone: '+1-555-0124',
            picture: 'https://upload.wikimedia.org/wikipedia/en/6/63/Vine_Deloria.jpg',
            tags: ["standing-rock-sioux", "author", "scholar", "custer-died"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Vine_Deloria_Jr.',
            address: {
                street: '2525 Academic Way',
                city: 'Boulder',
                state: 'Colorado',
                country: 'United States',
                zipCode: '80309'
            },
            quote: 'Custer died for your sins.'
        },
        {
            id: 'person-025',
            fullName: 'Wilma Mankiller',
            dateOfBirth: new Date('1945-11-18'),
            pronouns: 'she/her',
            bio: 'Wilma Mankiller served as the first female Principal Chief of the Cherokee Nation from 1985 to 1995, transforming tribal governance and community development during her tenure. Growing up in poverty in Oklahoma, she later moved to San Francisco where she became involved in Indigenous activism during the 1969 occupation of Alcatraz. Returning to Cherokee territory in the 1970s, she focused on community development projects, including bringing running water to rural Cherokee communities. As Principal Chief, Mankiller oversaw significant economic growth, improved healthcare and education services, and strengthened tribal sovereignty while maintaining Cherokee cultural values and traditions.',
            email: 'wilma.mankiller@cherokee.test',
            phone: '+1-555-0125',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Wilma_Mankiller_1998.jpg',
            tags: ["cherokee", "chief", "first-woman-chief", "tribal-development"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Wilma_Mankiller',
            address: {
                street: '2525 Cherokee Drive',
                city: 'Tahlequah',
                state: 'Oklahoma',
                country: 'United States',
                zipCode: '74464'
            },
            quote: 'Prior to my election, young Cherokee girls would never have thought that they might grow up and become chief.'
        },
        {
            id: 'person-026',
            fullName: 'Leslie Marmon Silko',
            dateOfBirth: new Date('1948-03-05'),
            pronouns: 'she/her',
            bio: 'Leslie Marmon Silko transformed American literature through her innovative blend of Laguna Pueblo oral traditions and contemporary narrative techniques. Growing up at Laguna Pueblo in New Mexico, she learned traditional stories from her grandmother and aunts, which profoundly influenced her writing. Her 1977 novel "Ceremony" became a landmark work in Native American literature, exploring themes of trauma, healing, and cultural continuity through the story of a World War II veteran returning to the reservation. Silko\\u0027s poetry and fiction have challenged literary conventions while preserving and revitalizing Indigenous storytelling traditions for new generations.',
            email: 'leslie.silko@laguna.test',
            phone: '+1-555-0126',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Headliner_Leslie_Marmon_Silko_at_the_banquet_reading_%286233509362%29_%28cropped%29.jpg',
            tags: ["laguna-pueblo", "author", "storyteller", "ceremony"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Leslie_Marmon_Silko',
            address: {
                street: '2626 Story Circle',
                city: 'Laguna',
                state: 'New Mexico',
                country: 'United States',
                zipCode: '87026'
            },
            quote: "You don't have anything if you don't have the stories."
        },
        {
            id: 'person-027',
            fullName: 'N. Scott Momaday',
            dateOfBirth: new Date('1934-02-27'),
            pronouns: 'he/him',
            bio: 'N. Scott Momaday made literary history in 1969 when he became the first Native American to win the Pulitzer Prize for Fiction for his novel "House Made of Dawn." A Kiowa author, poet, and professor, Momaday grew up between two worlds - his father\\u0027s Kiowa heritage and his mother\\u0027s European-American background - experiences that deeply influenced his writing. His work explores themes of identity, place, and the relationship between traditional and modern ways of life. Beyond his literary achievements, Momaday has been a influential educator, helping establish Native American studies programs and mentoring countless Indigenous writers and scholars.',
            email: 'scott.momaday@kiowa.test',
            phone: '+1-555-0127',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/N_Scott_Momaday_George_W_Bush.jpg',
            tags: ["kiowa", "pulitzer", "author", "house-made-dawn"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/N._Scott_Momaday',
            address: {
                street: '2727 Dawn House Road',
                city: 'Lawton',
                state: 'Oklahoma',
                country: 'United States',
                zipCode: '73501'
            },
            quote: 'We are what we imagine. Our very existence consists in our imagination of ourselves.'
        },
        {
            id: 'person-028',
            fullName: 'Maria Tallchief',
            dateOfBirth: new Date('1925-01-24'),
            pronouns: 'she/her',
            bio: 'Maria Tallchief revolutionized American ballet as the first major prima ballerina of Native American descent, performing on the world\\u0027s most prestigious stages. Born Elizabeth Marie Tall Chief on the Osage reservation in Oklahoma, she began dancing as a child and later moved to New York to pursue her career. As the principal dancer for the New York City Ballet under George Balanchine, she helped establish the company\\u0027s international reputation through her performances in ballets like "Firebird" and "Swan Lake." Tallchief\\u0027s artistry and technical brilliance opened doors for other Native American dancers while challenging stereotypes about Indigenous people in classical arts.',
            email: 'maria.tallchief@ballet.test',
            phone: '+1-555-0128',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Maria_Tallchief_1961.png',
            tags: ["osage", "ballet", "prima-ballerina", "dance"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Maria_Tallchief',
            address: {
                street: '2828 Lincoln Center Plaza',
                city: 'New York',
                state: 'New York',
                country: 'United States',
                zipCode: '10023'
            },
            quote: 'The important thing is dancing, and before it withers away from my body, I will keep dancing till the last moment.'
        },
        {
            id: 'person-029',
            fullName: 'Jim Thorpe',
            dateOfBirth: new Date('1887-05-28'),
            pronouns: 'he/him',
            bio: 'Jim Thorpe is widely considered one of the greatest athletes in history, excelling in multiple sports during the early 20th century. A member of the Sac and Fox Nation, Thorpe attended the Carlisle Indian Industrial School where he first gained national attention for his athletic abilities. At the 1912 Stockholm Olympics, he won gold medals in both the pentathlon and decathlon, leading King Gustav V of Sweden to declare him "the world\\u0027s greatest athlete." Thorpe went on to play professional football and baseball, helping establish the National Football League and proving that Indigenous athletes could compete at the highest levels in any sport.',
            email: 'jim.thorpe@olympic.test',
            phone: '+1-555-0129',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Jim_Thorpe_1913b-cr.jpg',
            tags: ["sac-fox", "olympics", "athlete", "football", "baseball"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Jim_Thorpe',
            address: {
                street: '2929 Champion Boulevard',
                city: 'Shawnee',
                state: 'Oklahoma',
                country: 'United States',
                zipCode: '74801'
            },
            quote: 'I never passed up a chance to play baseball.'
        },
        {
            id: 'person-030',
            fullName: 'Ira Hayes',
            dateOfBirth: new Date('1923-01-12'),
            pronouns: 'he/him',
            bio: 'Ira Hayes became an American icon as one of the six Marines who raised the flag at Iwo Jima during World War II, immortalized in the famous photograph by Joe Rosenthal. A Pima Marine from Arizona, Hayes served with distinction in the Pacific Theater, participating in some of the war\\u0027s bloodiest battles. Despite his hero status, Hayes struggled with the contradictions of fighting for a country that had historically oppressed Indigenous peoples, and he battled alcoholism and poverty after the war. His story highlights both the patriotic service of Native Americans in the military and the ongoing challenges they faced in achieving equality at home.',
            email: 'ira.hayes@marines.test',
            phone: '+1-555-0130',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ira_Hayes.jpg',
            tags: ["pima", "marine", "iwo-jima", "world-war-ii"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ira_Hayes',
            address: {
                street: '3030 Flag Raiser Way',
                city: 'Sacaton',
                state: 'Arizona',
                country: 'United States',
                zipCode: '85147'
            },
            quote: "I was sick. I guess I was about to crack up thinking about all my good buddies. They were better men than me and they're not coming back."
        },
        // Final activists to reach 40+
        {
            id: 'person-031',
            fullName: 'Code Talkers (Collective)',
            dateOfBirth: new Date('1920-01-01'),
            pronouns: 'they/them',
            bio: 'The unsung heroes who won World War II with their voices. These Navajo Marines created an unbreakable code from their sacred language, proving that Indigenous culture could save America itself.',
            email: 'codetalkers@navajo.test',
            phone: '+1-555-0131',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ["navajo", "code-talkers", "world-war-ii", "marines"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Code_talker',
            address: {
                street: '3131 Sacred Code Way',
                city: 'Window Rock',
                state: 'Arizona',
                country: 'United States',
                zipCode: '86515'
            },
            quote: 'The Navajo language was our weapon.'
        },
        {
            id: 'person-032',
            fullName: 'Sarah Winnemucca',
            dateOfBirth: new Date('1844-01-01'),
            pronouns: 'she/her',
            bio: 'The first Native American woman to publish an autobiography. This Northern Paiute interpreter bridged two worlds during the Indian Wars, using her voice to advocate for peace when others chose violence.',
            email: 'sarah.winnemucca@paiute.test',
            phone: '+1-555-0132',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Sarah_Winnemucca.jpg',
            tags: ["northern-paiute", "interpreter", "author", "peace-advocate"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Sarah_Winnemucca',
            address: {
                street: '3232 Interpreter Lane',
                city: 'Nixon',
                state: 'Nevada',
                country: 'United States',
                zipCode: '89424'
            },
            quote: 'If women could go into your Congress, I think justice would soon be done to the Indians.'
        },
        {
            id: 'person-033',
            fullName: 'Sitting Bull',
            dateOfBirth: new Date('1831-01-01'),
            pronouns: 'he/him',
            bio: 'The holy man who defeated Custer and refused to surrender. This Hunkpapa Lakota leader combined spiritual vision with military genius, becoming the symbol of Indigenous resistance that echoes through history.',
            email: 'sitting.bull@lakota.test',
            phone: '+1-555-0133',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Sitting_Bull_by_D_F_Barry_ca_1883_Dakota_Territory.jpg',
            tags: ["hunkpapa-lakota", "holy-man", "little-bighorn", "resistance"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Sitting_Bull',
            address: {
                street: '3333 Medicine Lodge Circle',
                city: 'Fort Yates',
                state: 'North Dakota',
                country: 'United States',
                zipCode: '58538'
            },
            quote: 'I wish it to be remembered that I was the last man of my tribe to surrender my rifle.'
        },
        {
            id: 'person-034',
            fullName: 'Crazy Horse',
            dateOfBirth: new Date('1840-01-01'),
            pronouns: 'he/him',
            bio: 'The war leader who never signed a treaty and never lived on a reservation. This Oglala Lakota warrior embodied uncompromising resistance, choosing death over surrender in defense of the Black Hills.',
            email: 'crazy.horse@oglala.test',
            phone: '+1-555-0134',
            picture: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Crazy_Horse_drawing.jpg',
            tags: ["oglala-lakota", "war-leader", "little-bighorn", "never-surrender"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Crazy_Horse',
            address: {
                street: '3434 Black Hills Road',
                city: 'Pine Ridge',
                state: 'South Dakota',
                country: 'United States',
                zipCode: '57770'
            },
            quote: 'One does not sell the earth upon which the people walk.'
        },
        {
            id: 'person-035',
            fullName: 'Tecumseh',
            dateOfBirth: new Date('1768-03-01'),
            pronouns: 'he/him',
            bio: 'The Shawnee leader who envisioned a united Indigenous nation. This brilliant orator and strategist nearly created a pan-Indian confederacy that could have changed the course of American history.',
            email: 'tecumseh@shawnee.test',
            phone: '+1-555-0135',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tecumseh02.jpg',
            tags: ["shawnee", "confederacy", "pan-indian", "war-of-1812"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Tecumseh',
            address: {
                street: '3535 Confederacy Trail',
                city: 'Chillicothe',
                state: 'Ohio',
                country: 'United States',
                zipCode: '45601'
            },
            quote: 'When you rise in the morning, give thanks for the light, for your life, for your strength.'
        },
        {
            id: 'person-036',
            fullName: 'Geronimo',
            dateOfBirth: new Date('1829-06-16'),
            pronouns: 'he/him',
            bio: 'The Apache warrior whose name became a battle cry. This medicine man and military leader led the last armed resistance to US expansion, holding out for decades in the desert Southwest.',
            email: 'geronimo@apache.test',
            phone: '+1-555-0136',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/54/GeronimoRinehart.jpg',
            tags: ["apache", "medicine-man", "warrior", "last-resistance"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Geronimo',
            address: {
                street: '3636 Desert Resistance Way',
                city: 'Fort Sill',
                state: 'Oklahoma',
                country: 'United States',
                zipCode: '73503'
            },
            quote: 'I cannot think that we are useless or God would not have created us.'
        },
        {
            id: 'person-037',
            fullName: 'Chief Joseph',
            dateOfBirth: new Date('1840-03-03'),
            pronouns: 'he/him',
            bio: 'The Nez Perce leader who fought with honor and surrendered with dignity. This eloquent chief led his people on an epic retreat toward Canada, earning respect even from his enemies.',
            email: 'chief.joseph@nezperce.test',
            phone: '+1-555-0137',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Chief_Joseph_by_Edward_Sheriff_Curtis.jpg',
            tags: ["nez-perce", "chief", "retreat", "honor"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Chief_Joseph',
            address: {
                street: '3737 Bear Paw Trail',
                city: 'Lapwai',
                state: 'Idaho',
                country: 'United States',
                zipCode: '83540'
            },
            quote: 'I will fight no more forever.'
        },
        {
            id: 'person-038',
            fullName: 'Pocahontas',
            dateOfBirth: new Date('1596-01-01'),
            pronouns: 'she/her',
            bio: 'The Powhatan woman who bridged two worlds. This diplomatic princess navigated the treacherous waters between her people and English colonists, becoming a symbol of cultural exchange and survival.',
            email: 'pocahontas@powhatan.test',
            phone: '+1-555-0138',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Pocahontas_by_Simon_van_de_Passe_%281616%29.png',
            tags: ["powhatan", "diplomat", "cultural-bridge", "jamestown"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Pocahontas',
            address: {
                street: '3838 Jamestown Road',
                city: 'Jamestown',
                state: 'Virginia',
                country: 'United States',
                zipCode: '23081'
            },
            quote: 'Come not into our country to destroy us, but to teach us good things.'
        },
        {
            id: 'person-039',
            fullName: 'Sequoyah',
            dateOfBirth: new Date('1770-01-01'),
            pronouns: 'he/him',
            bio: 'The Cherokee genius who created a writing system for his people. This silversmith and inventor gave his nation the gift of literacy, proving that Indigenous minds could innovate in ways the world had never seen.',
            email: 'sequoyah@cherokee.test',
            phone: '+1-555-0139',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Henry_Inman_-_Sequoyah_-_Google_Art_Project.jpg',
            tags: ["cherokee", "syllabary", "inventor", "literacy"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Sequoyah',
            address: {
                street: '3939 Syllabary Street',
                city: 'Sallisaw',
                state: 'Oklahoma',
                country: 'United States',
                zipCode: '74955'
            },
            quote: 'All I accomplished was to design a system by which the Cherokee language could be put into writing.'
        },
        {
            id: 'person-040',
            fullName: 'Black Elk',
            dateOfBirth: new Date('1863-12-01'),
            pronouns: 'he/him',
            bio: 'The holy man whose vision became a book that changed the world. This Oglala Lakota medicine man shared sacred knowledge with a white author, creating a bridge between Indigenous spirituality and global consciousness.',
            email: 'black.elk@oglala.test',
            phone: '+1-555-0140',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Black_Elk.jpg',
            tags: ["oglala-lakota", "holy-man", "vision", "spiritual-teacher"],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Black_Elk',
            address: {
                street: '4040 Sacred Hoop Circle',
                city: 'Pine Ridge',
                state: 'South Dakota',
                country: 'United States',
                zipCode: '57770'
            },
            quote: 'Peace comes within the souls of men when they realize their relationship, their oneness, with the universe and all its powers.'
        },
        // New Zealand Māori Activists
        {
            id: 'person-041',
            fullName: 'Te Whiti-o-Rongomai',
            dateOfBirth: new Date('1830-01-01'),
            pronouns: 'he/him',
            bio: 'Te Whiti-o-Rongomai established Parihaka as a beacon of peaceful resistance when the New Zealand government sought to crush Māori independence through force. This Taranaki leader and his people practiced nonviolent resistance against colonial land confiscation, welcoming government troops with children offering food even as their village was invaded in 1881. His philosophy of passive resistance influenced Mahatma Gandhi and demonstrated that Indigenous peoples could resist colonization through spiritual strength rather than violence. Te Whiti proved that moral authority could challenge military might, though the cost was the destruction of his thriving community.',
            email: 'te.whiti@parihaka.test',
            phone: '+64-555-0141',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['maori', 'parihaka', 'nonviolent-resistance', 'taranaki', 'spiritual-leader'],
            groupMemberships: ['parihaka-settlement', 'maori-peace-movement'],
            reference: 'https://en.wikipedia.org/wiki/Te_Whiti_o_Rongomai',
            address: {
                street: '123 Peaceful Resistance Road',
                city: 'Parihaka',
                state: 'Taranaki',
                country: 'New Zealand',
                zipCode: '4374'
            },
            quote: "Though some, in darkness of heart, seeing their land ravished, might wish to take arms and kill the aggressors, I say it must not be."
        },
        {
            id: 'person-042',
            fullName: 'Dame Whina Cooper',
            dateOfBirth: new Date('1895-12-09'),
            pronouns: 'she/her',
            bio: 'Dame Whina Cooper transformed from an 18-year-old challenging mudflat leases to the revered mother of a nation leading a 1,100-kilometer march at age 79. This Te Rarawa leader organized the 1975 Māori Land March from Cape Reinga to Parliament, walking the length of New Zealand with the simple demand: "Not one more acre of Māori land." Her march grew from 50 to 5,000 supporters and delivered a petition signed by 60,000 people, forcing land rights back into national consciousness. Cooper proved that moral leadership could move mountains, earning the title Te Whaea o te Motu\u2014Mother of the Nation.',
            email: 'whina.cooper@landmarch.test',
            phone: '+64-555-0142',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Whina_Cooper_in_Hamilton.jpg',
            tags: ['maori', 'land-march', 'te-rarawa', 'kuia', 'land-rights'],
            groupMemberships: ['maori-land-march-committee', 'maori-womens-welfare-league'],
            reference: 'https://en.wikipedia.org/wiki/Whina_Cooper',
            address: {
                street: '456 Land Rights Avenue',
                city: 'Panguru',
                state: 'Northland',
                country: 'New Zealand',
                zipCode: '0478'
            },
            quote: "The land is precious. The land is our life. The land must never be sold."
        },
        {
            id: 'person-043',
            fullName: 'Tainui Stephens',
            dateOfBirth: new Date('1952-08-15'),
            pronouns: 'he/him',
            bio: 'Tainui Stephens spent decades ensuring that Māori stories reached television screens and cinema audiences, refusing to let his people remain invisible in their own country. This Te Rarawa filmmaker and producer worked on groundbreaking programs from Koha to Waka Huia, creating a permanent space for Māori voices in New Zealand media. His documentaries about the New Zealand Wars and Māori Battalion brought Indigenous perspectives to national conversations about history and identity. Stephens understood that controlling the narrative was essential to cultural survival, making him a storyteller whose work preserved whakapapa for future generations.',
            email: 'tainui.stephens@maorimedia.test',
            phone: '+64-555-0143',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['maori', 'filmmaker', 'te-rarawa', 'television', 'storyteller'],
            groupMemberships: ['maori-television-collective', 'indigenous-filmmakers-aotearoa'],
            address: {
                street: '789 Media House Lane',
                city: 'Auckland',
                state: 'Auckland',
                country: 'New Zealand',
                zipCode: '1010'
            },
            quote: "I prefer to call myself a storyteller who is fortunate to work in a fascinating and important industry."
        },
        {
            id: 'person-044',
            fullName: 'Donna Awatere Huata',
            dateOfBirth: new Date('1949-10-21'),
            pronouns: 'she/her',
            bio: 'Donna Awatere Huata challenged both white feminists and Māori men to confront their own limitations, writing "Māori Sovereignty" in 1984 as a revolutionary text that demanded complete Indigenous self-determination. This Ngāti Whakaue activist and founding member of Ngā Tamatoa protested against the 1981 Springbok Tour and argued that racism was a more pressing issue than sexism for Māori women. Her journey from radical activism to parliamentary politics and eventual fraud conviction illustrates the complex paths that resistance can take. Awatere Huata proved that Indigenous women could challenge multiple systems of oppression simultaneously, even when those challenges came at personal cost.',
            email: 'donna.awatere@maorisovereignty.test',
            phone: '+64-555-0144',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Donna_Awatere_Huata.jpg',
            tags: ['maori', 'feminist', 'ngati-whakaue', 'sovereignty', 'activist'],
            groupMemberships: ['ngā-tamatoa', 'maori-sovereignty-movement'],
            reference: 'https://en.wikipedia.org/wiki/Donna_Awatere_Huata',
            address: {
                street: '321 Sovereignty Street',
                city: 'Rotorua',
                state: 'Bay of Plenty',
                country: 'New Zealand',
                zipCode: '3010'
            },
            quote: "The time had come to honour Te Tiriti o Waitangi and restore the power of Māori to control their resources, lives and destinies."
        },
        // Australian Aboriginal and Torres Strait Islander Activists
        {
            id: 'person-045',
            fullName: 'Patrick Dodson',
            dateOfBirth: new Date('1948-01-29'),
            pronouns: 'he/him',
            bio: 'Patrick Dodson earned the title "Father of Reconciliation" through decades of building bridges between Indigenous and non-Indigenous Australians, refusing to accept that these communities were destined for permanent division. This Yawuru man left the Catholic priesthood to dedicate himself fully to Aboriginal rights, serving as inaugural chair of the Council for Aboriginal Reconciliation and helping negotiate the return of Uluru to its traditional owners. His work as a royal commissioner investigating Aboriginal deaths in custody exposed systemic injustices that demanded immediate action. Dodson proved that reconciliation required more than good intentions\u2014it demanded structural change and genuine recognition of Aboriginal sovereignty.',
            email: 'pat.dodson@reconciliation.test',
            phone: '+61-555-0145',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Senator_Patrick_Dodson_in_New_York_-_2023_%28000085339%29_%28cropped%29.jpg',
            tags: ['aboriginal', 'yawuru', 'reconciliation', 'senator', 'peace-prize'],
            groupMemberships: ['council-aboriginal-reconciliation', 'senate-australia'],
            reference: 'https://en.wikipedia.org/wiki/Pat_Dodson',
            address: {
                street: '654 Reconciliation Way',
                city: 'Broome',
                state: 'Western Australia',
                country: 'Australia',
                zipCode: '6725'
            },
            quote: "Reconciliation is a practical reality and a future that all should be working towards."
        },
        {
            id: 'person-046',
            fullName: 'Linda Burney',
            dateOfBirth: new Date('1957-04-25'),
            pronouns: 'she/her',
            bio: 'Linda Burney blazed trails through Australian parliaments as the first person identifying as Aboriginal to serve in the New South Wales Parliament and later as the first Aboriginal woman in the House of Representatives. This Wiradjuri educator turned politician carried her clan and personal totems into Parliament House, wearing a kangaroo skin cloak that announced her identity to a chamber that had long excluded her people. Her ministerial role overseeing Indigenous affairs allowed her to shape policy affecting her communities from the highest levels of government. Burney demonstrated that Indigenous women belonged in the halls of power, opening doors that had been closed for over a century.',
            email: 'linda.burney@parliament.test',
            phone: '+61-555-0146',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Linda_Burney.jpg',
            tags: ['aboriginal', 'wiradjuri', 'parliament', 'education', 'minister'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Linda_Burney',
            address: {
                street: '987 Parliament Place',
                city: 'Canberra',
                state: 'Australian Capital Territory',
                country: 'Australia',
                zipCode: '2600'
            },
            quote: "As a woman and a mother, I know how to stand up and fight for equity."
        },
        {
            id: 'person-047',
            fullName: 'Eddie Mabo',
            dateOfBirth: new Date('1936-06-29'),
            pronouns: 'he/him',
            bio: 'Eddie Mabo discovered that according to Australian law, his family had no legal claim to the land where generations of his ancestors were buried, sparking a legal challenge that would transform the continent. This Torres Strait Islander from Mer fought for ten years through the courts to prove that terra nullius\\u2014the fiction that Australia was uninhabited before British colonization\\u2014had no basis in law or justice. His case established that Native title existed across Australia, overturning two centuries of legal doctrine that denied Indigenous peoples\\u0027 connection to country. Tragically, Mabo died months before his victory was announced, never seeing the landmark decision that bore his name and opened pathways for land rights claims across Australia.',
            email: 'eddie.mabo@nativetitle.test',
            phone: '+61-555-0147',
            picture: 'https://upload.wikimedia.org/wikipedia/en/a/ad/EddieMaboportrait.gif',
            tags: ['torres-strait-islander', 'native-title', 'land-rights', 'mer-island', 'legal-victory'],
            groupMemberships: ['meriam-people', 'native-title-claimants'],
            reference: 'https://en.wikipedia.org/wiki/Eddie_Mabo',
            address: {
                street: '111 Native Title Road',
                city: 'Murray Island',
                state: 'Queensland',
                country: 'Australia',
                zipCode: '4875'
            },
            quote: "This land has been ours for thousands of years. We just want recognition of that fact."
        },
        // Pacific Islander Activists
        {
            id: 'person-048',
            fullName: 'John Momis',
            dateOfBirth: new Date('1942-08-30'),
            pronouns: 'he/him',
            bio: 'John Momis dedicated his life to Bougainville\\u0027s struggle for self-determination, moving from Catholic priesthood to constitutional drafting to leading his island through a historic independence referendum. This Bougainvillean leader helped write Papua New Guinea\\u0027s constitution in the 1970s before joining the secessionist movement that sought to protect his people from exploitation by foreign mining companies. As President of the Autonomous Region of Bougainville, he oversaw the 2019 independence referendum where 98% voted for independence from Papua New Guinea. Momis proved that Indigenous Pacific peoples could chart their own political future, even when facing powerful colonial and corporate interests.',
            email: 'john.momis@bougainville.test',
            phone: '+675-555-0148',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/b/be/John_Momis_ArawaHospital03_%28cropped%29.jpg',
            tags: ['bougainvillean', 'independence', 'president', 'constitutional-law', 'referendum'],
            groupMemberships: ['autonomous-bougainville-government', 'new-bougainville-party'],
            reference: 'https://en.wikipedia.org/wiki/John_Momis',
            address: {
                street: '222 Independence Avenue',
                city: 'Buka',
                state: 'Bougainville',
                country: 'Papua New Guinea',
                zipCode: '613'
            },
            quote: "At least psychologically, we feel liberated."
        },
        {
            id: 'person-049',
            fullName: 'Queen Liliuokalani',
            dateOfBirth: new Date('1838-09-02'),
            pronouns: 'she/her',
            bio: 'Queen Liliuokalani refused to accept that American businessmen could simply steal the Hawaiian Kingdom, fighting through courts, Congress, and international opinion to restore her people\\u0027s sovereignty. As Hawaii\\u0027s first and only reigning queen, she attempted to implement a new constitution that would restore power to Native Hawaiians after the so-called Bayonet Constitution had transferred control to foreign settlers. When a group of American businessmen overthrew her government in 1893, she chose to surrender rather than shed blood, then spent the rest of her life advocating for Hawaiian independence through legal and political channels. Liliuokalani composed over 160 songs including "Aloha Oe" while demonstrating that Indigenous monarchs could resist colonization through diplomacy, culture, and unwavering commitment to their people\\u0027s future.',
            email: 'liliuokalani@hawaiiankingdom.test',
            phone: '+1-808-555-0149',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Liliuokalani%2C_c._1891.jpg',
            tags: ['hawaiian', 'queen', 'sovereignty', 'musician', 'monarchy'],
            groupMemberships: ['hawaiian-kingdom', 'hui-aloha-aina'],
            reference: 'https://en.wikipedia.org/wiki/Liliuokalani',
            address: {
                street: '333 Palace Circle',
                city: 'Honolulu',
                state: 'Hawaii',
                country: 'United States',
                zipCode: '96813'
            },
            quote: "Hawaii for the Hawaiians. The voice of the people is the voice of God."
        },
        {
            id: 'person-050',
            fullName: 'Sitiveni Rabuka',
            dateOfBirth: new Date('1948-09-13'),
            pronouns: 'he/him',
            bio: 'Sitiveni Rabuka justified his 1987 military coups as necessary to protect indigenous Fijian rights from Indian political dominance, later evolving to embrace multiracial democracy and constitutional reform. This former soldier claimed he acted to "safeguard the Fijian way of life" when he overthrew the elected Labour coalition government, leading to years of racial discrimination enshrined in Fiji\\u0027s constitution. His democratic political career from 1992-1999 saw him work with Indo-Fijian leaders to create the more equitable 1997 Constitution, demonstrating a remarkable transformation from coup leader to reconciliation advocate. Rabuka\\u0027s complex legacy illustrates how Indigenous Pacific leaders sometimes used undemocratic means to protect their people\\u0027s interests, before learning that true security required inclusive governance.',
            email: 'sitiveni.rabuka@fiji.test',
            phone: '+679-555-0150',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Sitiveni_Rabuka_PIF_2023.jpg',
            tags: ['fijian', 'military', 'prime-minister', 'coups', 'reconciliation'],
            groupMemberships: ['peoples-alliance-fiji', 'fiji-military-forces'],
            reference: 'https://en.wikipedia.org/wiki/Sitiveni_Rabuka',
            address: {
                street: '444 Government House Road',
                city: 'Suva',
                state: 'Central Division',
                country: 'Fiji',
                zipCode: 'FJ'
            },
            quote: "There is hope: even I changed to team up with my former adversaries to implement a more equitable Constitution."
        },
        // South American Indigenous Activists
        {
            id: 'person-051',
            fullName: 'Davi Kopenawa Yanomami',
            dateOfBirth: new Date('1956-01-01'),
            pronouns: 'he/him',
            bio: 'Davi Kopenawa became the voice of the Amazon rainforest and its Indigenous peoples, translating the spiritual wisdom of Yanomami shamanism into warnings the modern world desperately needed to hear. This Yanomami leader and shaman founded the Hutukara Association to defend his people\\u0027s territory from gold miners and cattle ranchers while arguing that Indigenous knowledge systems offer humanity\\u0027s best hope for avoiding ecological collapse. His book "The Falling Sky" bridged two worlds, explaining to "white people" how their endless consumption threatens not just the Amazon but all life on Earth. Kopenawa proved that Indigenous voices carry essential wisdom for global survival, earning recognition as "Brazil\\u0027s Dalai Lama of the Rainforest" for his tireless advocacy.',
            email: 'davi.kopenawa@hutukara.test',
            phone: '+55-555-0151',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Davi_Kopenawa_Yanomami_at_2024_Cannes_Film_Festival_for_The_Falling_Sky_%28cropped%29.jpg',
            tags: ['yanomami', 'shaman', 'amazon', 'environmental', 'right-livelihood'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Davi_Kopenawa_Yanomami',
            address: {
                street: '555 Forest Guardian Trail',
                city: 'Watoriki',
                state: 'Roraima',
                country: 'Brazil',
                zipCode: '69343-000'
            },
            quote: "We need to think about the next seven generations and protect the forest for our children."
        },
        {
            id: 'person-052',
            fullName: 'Nina Pacari',
            dateOfBirth: new Date('1961-02-10'),
            pronouns: 'she/her',
            bio: 'Nina Pacari transformed from María Estela Vega Conejo into a powerful advocate for Indigenous nationality rights, officially changing her name to reflect her commitment to Kichwa identity and sovereignty. This Ecuadorian lawyer and politician became the first Indigenous woman elected to Ecuador\\u0027s parliament in 1998, using her legal expertise to push constitutional reforms recognizing Indigenous peoples as distinct nationalities rather than ethnic minorities. Her brief tenure as foreign minister in 2003 ended when she resigned over the government\\u0027s neoliberal policies, demonstrating that Indigenous leaders would not compromise their principles for political power. Pacari proved that Indigenous women could reshape national constitutions and legal frameworks while maintaining their cultural integrity.',
            email: 'nina.pacari@kichwa.test',
            phone: '+593-555-0152',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Nina_pacari_RADIO_CENTRO.png',
            tags: ['kichwa', 'lawyer', 'foreign-minister', 'constitutional-law', 'pachakutik'],
            groupMemberships: ['pachakutik-movement', 'confederation-nationalities-ecuador'],
            reference: 'https://en.wikipedia.org/wiki/Nina_Pacari',
            address: {
                street: '666 Indigenous Rights Plaza',
                city: 'Quito',
                state: 'Pichincha',
                country: 'Ecuador',
                zipCode: '170150'
            },
            quote: "Indigenous populations are not ethnic minorities, but distinct nationalities with their own language, history and territory."
        },
        {
            id: 'person-053',
            fullName: 'Evo Morales',
            dateOfBirth: new Date('1959-10-26'),
            pronouns: 'he/him',
            bio: 'Evo Morales rose from coca farmer to become Bolivia\\u0027s first Indigenous president, implementing constitutional reforms that recognized Indigenous peoples as distinct nations with rights to self-governance and ancestral territories. This Aymara leader redistributed 134 million acres of land to Indigenous families, many of whom had been forced to work as sharecroppers or slaves on estates stolen from their ancestors. His presidency marked a historic reversal of five centuries of colonial domination, proving that Indigenous peoples could reclaim political power and use it to benefit their communities. Morales\\u0027 complex legacy demonstrates both the possibilities and challenges of Indigenous political leadership in settler colonial states.',
            email: 'evo.morales@bolivia.test',
            phone: '+591-555-0153',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Evo_Morales_Ayma_%28cropped_3%29.jpg',
            tags: ['aymara', 'president', 'coca-farmers', 'mas-party', 'bolivia'],
            groupMemberships: ['movement-towards-socialism', 'confederation-coca-producers'],
            reference: 'https://en.wikipedia.org/wiki/Evo_Morales',
            address: {
                street: '777 Presidential Palace Square',
                city: 'La Paz',
                state: 'La Paz Department',
                country: 'Bolivia',
                zipCode: '0000'
            },
            quote: "Aymaras, Quechuas, and Mojeños, we are presidents."
        },
        {
            id: 'person-054',
            fullName: 'Lourdes Huanca Atencio',
            dateOfBirth: new Date('1960-05-20'),
            pronouns: 'she/her',
            bio: 'Lourdes Huanca Atencio built a movement of 160,000 rural women across Peru, organizing peasant, artisan, and Indigenous women to fight for land rights, gender equality, and political representation. This Aymara activist founded FENMUCARINAP in 2008, creating an organization that addresses the intersecting challenges of Indigenous identity, rural poverty, and gender-based violence in Peru\\u0027s highlands. Her work connects traditional Andean concepts of community autonomy with modern struggles for women\\u0027s bodily autonomy and land sovereignty. Huanca Atencio demonstrates that Indigenous women\\u0027s leadership can challenge both patriarchal and colonial systems simultaneously, building power from the grassroots up.',
            email: 'lourdes.huanca@fenmucarinap.test',
            phone: '+51-555-0154',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Lourdes_Huanca_Atencio.jpg',
            tags: ['aymara', 'peasant-rights', 'womens-rights', 'peru', 'fenmucarinap'],
            groupMemberships: ['fenmucarinap', 'andean-womens-federation'],
            reference: 'https://en.wikipedia.org/wiki/Lourdes_Huanca_Atencio',
            address: {
                street: '888 Rural Women\\u0027s Rights Road',
                city: 'Cusco',
                state: 'Cusco Region',
                country: 'Peru',
                zipCode: '08000'
            },
            quote: "Our demands are now political. We can no longer even walk freely under this dictatorial regime of terror."
        },
        // Sami Activists
        {
            id: 'person-055',
            fullName: 'Lars-Anders Baer',
            dateOfBirth: new Date('1955-03-12'),
            pronouns: 'he/him',
            bio: 'Lars-Anders Baer has spent decades fighting what he calls "windmill colonialism," challenging Sweden\\u0027s failure to properly consult Sami communities about industrial development affecting their traditional reindeer herding territories. This former president of the Swedish Sami Parliament and current vice-president of the Saami Council represents the 80,000 Sami people scattered across Norway, Sweden, Finland, and Russia in their ongoing struggle for land rights and cultural preservation. His leadership of the Union of Saami People in Sweden has focused on protecting reindeer migration routes from mining, wind farms, and other development projects that threaten traditional livelihoods. Baer argues that Sweden must confront its colonial past and recognize Sami rights to their ancestral lands, just as other settler states have been forced to acknowledge Indigenous sovereignty.',
            email: 'lars.baer@saamicouncil.test',
            phone: '+46-555-0155',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['sami', 'reindeer-herding', 'parliament', 'sweden', 'land-rights'],
            groupMemberships: ['saami-council', 'swedish-sami-parliament', 'union-saami-people-sweden'],
            address: {
                street: '999 Reindeer Migration Route',
                city: 'Jokkmokk',
                state: 'Norrbotten',
                country: 'Sweden',
                zipCode: '962 31'
            },
            quote: "The problem is that Sweden hasn\\u0027t come to terms with its colonial past."
        },
        {
            id: 'person-056',
            fullName: 'Niillas Somby',
            dateOfBirth: new Date('1948-10-15'),
            pronouns: 'he/him',
            bio: 'Niillas Somby lost his arm attempting to sabotage the Alta Dam project in Norway, sacrificing his body to protect Sami territories from flooding by hydroelectric development that would have destroyed an entire village. This Sami activist and photographer was one of seven hunger strikers during the Alta controversy in the late 1970s, participating in protests that became a symbol of Indigenous resistance across the Arctic. After his imprisonment and escape to Canada, where he was adopted by the Nuxalk Nation, Somby returned to Norway to continue advocating for Sami rights and the return of his ancestors\\u0027 remains from university collections. His quest to reclaim the heads of Mons Somby and Aslak Hætta, executed after the 1852 Kautokeino rebellion, demonstrates the ongoing fight for dignity and justice that spans generations of Sami resistance.',
            email: 'niillas.somby@samiactivist.test',
            phone: '+47-555-0156',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Niillas_Aslaksen_Somby.jpg',
            tags: ['sami', 'alta-dam', 'activist', 'photographer', 'hunger-striker'],
            groupMemberships: ['sami-rights-movement', 'alta-action-group'],
            reference: 'https://en.wikipedia.org/wiki/Niillas_Somby',
            address: {
                street: '100 Resistance Lane',
                city: 'Alta',
                state: 'Finnmark',
                country: 'Norway',
                zipCode: '9510'
            },
            quote: "We are not terrorists! We are defending our land and our people\\u0027s future."
        },
        // AFRICA - Indigenous Activists
        {
            id: 'person-057',
            fullName: 'Anthony Phillip Williams',
            dateOfBirth: new Date('1965-07-08'),
            pronouns: 'he/him',
            bio: "Anthony Phillip Williams serves as the national coordinator of the Khoisan Liberation and Mass Movement in South Africa. He left his career as a pastor and business consultant to become a full-time activist for Khoikhoi land rights and cultural preservation. Williams argues that land is a prerequisite for cultural identity, asking 'How can our culture survive if we have no place where to practice it?' His work focuses on securing recognition of the Khoikhoi as South Africa's First Nations and addressing the ongoing legacy of colonial dispossession.",
            email: 'anthony.williams@khoisanliberation.test',
            phone: '+27-55-501-0157',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['khoikhoi', 'land-rights', 'cultural-preservation', 'south-africa', 'first-nations'],
            groupMemberships: [],
            address: {
                street: '789 Heritage Road',
                city: 'Cape Town',
                state: 'Western Cape',
                country: 'South Africa',
                zipCode: '8001'
            },
            quote: "How can our culture survive if we have no place where to practice it? Land is a prerequisite for cultural identity."
        },
        {
            id: 'person-058',
            fullName: 'Stanley Peterson',
            dateOfBirth: new Date('1970-04-22'),
            pronouns: 'he/him',
            bio: 'Stanley Peterson serves on the National Khoi & San Council and was a key negotiator in the historic Rooibos case that resulted in the world\'s first industry-wide benefit-sharing agreement between Indigenous peoples and a commercial industry. After nine years of negotiations and advocacy, this groundbreaking agreement established a precedent for Indigenous intellectual property rights related to traditional plant knowledge. Peterson\'s work demonstrates how persistent advocacy can transform centuries of exploitation into models of equitable partnership. His efforts have inspired similar benefit-sharing initiatives across Africa.',
            email: 'stanley.peterson@khoisancouncil.test',
            phone: '+27-55-502-0158',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['san', 'traditional-knowledge', 'benefit-sharing', 'rooibos', 'intellectual-property'],
            groupMemberships: [],
            address: {
                street: '234 Rooibos Lane',
                city: 'Clanwilliam',
                state: 'Western Cape',
                country: 'South Africa',
                zipCode: '8135'
            },
            quote: "Traditional knowledge is not free for the taking. It belongs to our people and must benefit our communities."
        },
        {
            id: 'person-059',
            fullName: 'Edward Loure',
            dateOfBirth: new Date('1968-03-15'),
            pronouns: 'he/him',
            bio: 'Edward Loure was awarded the Goldman Environmental Prize in 2016 for his innovative approach to community land titling that protected over 200,000 acres of Maasai land from conversion to hunting concessions and game parks. This Maasai leader developed a groundbreaking model that allows communities to receive legal title to their ancestral lands while maintaining traditional pastoralist practices. Loure\'s work has reduced the threat of forced eviction and urbanization for countless Maasai families. His approach has been replicated across East Africa, demonstrating how Indigenous-led conservation can protect both people and wildlife.',
            email: 'edward.loure@maasailand.test',
            phone: '+255-555-0159',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Edward_Loure.jpg',
            tags: ['maasai', 'land-titling', 'conservation', 'goldman-prize', 'pastoralism'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Edward_Loure',
            address: {
                street: '456 Savanna Drive',
                city: 'Arusha',
                state: 'Arusha Region',
                country: 'Tanzania',
                zipCode: '23101'
            },
            quote: "Land is life. When you protect the land, you protect the people and the wildlife together."
        },
        {
            id: 'person-060',
            fullName: 'Joseph Oleshangay',
            dateOfBirth: new Date('1955-09-10'),
            pronouns: 'he/him',
            bio: 'Joseph Oleshangay is a Maasai human rights lawyer with the Legal and Human Rights Center who became a vocal critic of forced relocations in Tanzania\'s Ngorongoro Conservation Area. His legal advocacy exposed government violations of Indigenous rights and international law, making him a target of intimidation and harassment. In March 2024, Oleshangay was forced to flee Tanzania to Kenya, fearing for his safety after his criticism of the NCA relocations intensified government pressure. His courage in speaking truth to power exemplifies the personal risks faced by Indigenous rights defenders across Africa.',
            email: 'joseph.oleshangay@lhrc.test',
            phone: '+254-555-0160',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['maasai', 'human-rights-lawyer', 'ngorongoro', 'forced-relocation', 'legal-advocacy'],
            groupMemberships: [],
            address: {
                street: '123 Refugee Road',
                city: 'Nairobi',
                state: 'Nairobi County',
                country: 'Kenya',
                zipCode: '00100'
            },
            quote: "Speaking for our people\'s rights should not make us refugees in our own region."
        },
        {
            id: 'person-061',
            fullName: 'Dismas Partalala',
            dateOfBirth: new Date('1962-11-25'),
            pronouns: 'he/him',
            bio: 'Dismas Partalala is a Maasai grassroots conservationist based in the Loliondo district of Tanzania who has spent over two decades securing land rights for the Hadzabe community, one of the last remaining hunter-gatherer peoples in Africa. His work protects the Yaeda Valley forests where the Hadzabe have lived sustainably for centuries, depending on plants for food and medicine near the Ngorongoro Crater. Partalala\'s advocacy bridges traditional Maasai pastoralism and Hadzabe hunting-gathering practices, demonstrating how different Indigenous groups can support each other. His efforts preserve not only land but entire ways of life that represent humanity\'s oldest relationships with the natural world.',
            email: 'dismas.partalala@loliondo.test',
            phone: '+255-555-0161',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['maasai', 'hadzabe-support', 'hunter-gatherer', 'yaeda-valley', 'traditional-conservation'],
            groupMemberships: [],
            address: {
                street: '789 Valley Road',
                city: 'Loliondo',
                state: 'Arusha Region',
                country: 'Tanzania',
                zipCode: '23201'
            },
            quote: "The Hadzabe are our neighbors and teachers. Their ancient wisdom must be protected for all humanity."
        },
        {
            id: 'person-062',
            fullName: 'Toroxa Breda',
            dateOfBirth: new Date('1965-04-18'),
            pronouns: 'she/her',
            bio: 'Toroxa Breda teaches Khoikhoi language in Supusupu and leads language revitalization efforts during the UN International Decade of Indigenous Languages. As one of the few fluent speakers of Khoikhoi dialects, Breda works tirelessly to document and teach the language to younger generations who were forbidden from speaking it during apartheid. Her work with the Supusupu Khoikhoi First Language Project represents a race against time to preserve linguistic diversity. Breda argues that language carries the soul of a people, and without it, cultural identity cannot survive.',
            email: 'toroxa.breda@khoisanlanguage.test',
            phone: '+27-55-503-0162',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['khoikhoi', 'language-revitalization', 'supusupu', 'cultural-identity', 'education'],
            groupMemberships: [],
            address: {
                street: '567 Language Lane',
                city: 'Upington',
                state: 'Northern Cape',
                country: 'South Africa',
                zipCode: '8800'
            },
            quote: "Language carries the soul of a people. When we lose our words, we lose ourselves."
        },
        {
            id: 'person-063',
            fullName: 'Jumanda Gakelebone',
            dateOfBirth: new Date('1950-08-12'),
            pronouns: 'he/him',
            bio: 'Jumanda Gakelebone advocates for San communities in Botswana\'s Central Kalahari Game Reserve, fighting against forced relocations that began in the 1990s. As a traditional leader of the Gana and Gwi San peoples, Gakelebone has challenged government claims that the relocations were voluntary, documenting how communities were cut off from water and basic services to force them to leave. His testimony in international courts helped establish that the relocations violated constitutional rights. Gakelebone continues to support San families who wish to return to their ancestral lands while maintaining their traditional hunting and gathering practices.',
            email: 'jumanda.gakelebone@kalaharisurvival.test',
            phone: '+267-555-0163',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['san', 'kalahari', 'forced-relocation', 'traditional-leader', 'hunting-gathering'],
            groupMemberships: [],
            address: {
                street: '890 Desert Road',
                city: 'Ghanzi',
                state: 'Ghanzi District',
                country: 'Botswana',
                zipCode: '11041'
            },
            quote: "The Kalahari is not empty land. It is our home, our church, our pharmacy, our everything."
        },
        {
            id: 'person-064',
            fullName: 'Helena !Kheisis',
            dateOfBirth: new Date('1960-12-03'),
            pronouns: 'she/her',
            bio: 'Helena !Kheisis is a Nama traditional healer and activist in Namibia who advocates for the protection of sacred sites and traditional medicine practices. She leads efforts to document traditional healing knowledge while fighting against mining operations that threaten sacred mountains and medicinal plant habitats. !Kheisis bridges traditional leadership roles with modern advocacy, serving on community conservancy boards that manage natural resources according to both traditional law and contemporary conservation science. Her work ensures that Nama cultural practices remain central to land management decisions in her region.',
            email: 'helena.kheisis@namahealing.test',
            phone: '+264-555-0164',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['nama', 'traditional-healing', 'sacred-sites', 'mining-resistance', 'conservancy'],
            groupMemberships: [],
            address: {
                street: '321 Sacred Mountain Road',
                city: 'Keetmanshoop',
                state: 'Karas Region',
                country: 'Namibia',
                zipCode: '10005'
            },
            quote: "The mountains hold our medicines and our ancestors. They cannot be replaced by mines."
        },
        // ASIA - Indigenous Activists
        {
            id: 'person-065',
            fullName: 'Soni Sori',
            dateOfBirth: new Date('1975-01-15'),
            pronouns: 'she/her',
            bio: 'Soni Sori is a fearless Adivasi rights activist from Chhattisgarh who has become a vocal critic of police violence and brutality against tribal communities. Despite facing arrest, torture, and ongoing harassment for her activism, she continues to document human rights abuses and support families affected by conflict between security forces and Maoist groups. Sori has inspired Adivasi women across India to speak out against sexual violence and assault at the hands of police. In 2018, she received the Front Line Defenders Award for Human Rights Defenders at Risk, recognizing her courage in the face of extreme personal danger.',
            email: 'soni.sori@adivasisrights.test',
            phone: '+91-555-0165',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Soni_Sori_at_Bhopal_Jan_Utsav_2017.jpg',
            tags: ['adivasi', 'human-rights', 'police-brutality', 'women-rights', 'chhattisgarh'],
            groupMemberships: [],
            address: {
                street: '456 Tribal Rights Road',
                city: 'Jagdalpur',
                state: 'Chhattisgarh',
                country: 'India',
                zipCode: '494001'
            },
            quote: "They can arrest my body, but they cannot arrest the truth or our people\'s struggle for justice."
        },
        {
            id: 'person-066',
            fullName: 'Dayamani Barla',
            dateOfBirth: new Date('1966-07-28'),
            pronouns: 'she/her',
            bio: 'Dayamani Barla is a fearless tribal journalist from Jharkhand who raised her voice against Arcelor Mittal\'s steel plant in Eastern Jharkhand, which tribal activists say would displace forty villages. She founded Jan Hak Patrika to highlight and amplify the voices of Adivasis, Dalits, and women who are often excluded from mainstream media coverage. Barla continues to fight for Jal, Jungle, Jamin (Water, Forest, Land) rights of Indigenous peoples while working as a journalist at Prabhat Khabar. Her dual role as journalist and activist ensures that Adivasi struggles receive the documentation and attention they deserve.',
            email: 'dayamani.barla@janhakpatrika.test',
            phone: '+91-555-0166',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Dayamani_Barla_in_ViBGYOR2012.jpg',
            tags: ['adivasi', 'journalism', 'mining-resistance', 'jharkhand', 'media-activism'],
            groupMemberships: [],
            address: {
                street: '789 Press Freedom Lane',
                city: 'Ranchi',
                state: 'Jharkhand',
                country: 'India',
                zipCode: '834001'
            },
            quote: "Our pen is our weapon. We will write the truth until the forests and our people are free."
        },
        {
            id: 'person-067',
            fullName: 'C.K. Janu',
            dateOfBirth: new Date('1964-02-10'),
            pronouns: 'she/her',
            bio: 'C.K. Janu was among the Adivasi and Dalit activists who formed the Adivasi Gotra Maha Sabha around 2000 to demand land rights and implementation of tribal welfare laws in Kerala. As a long-time president of AGMS, she led protests and agitations demanding land redistribution and recognition of tribal rights, challenging the state government to fulfill its promises to Indigenous communities. In 2016, Janu broke from AGMS to launch the Janadhipathya Rashtriya Sabha as a BJP-led NDA ally, demonstrating the complex political choices faced by Indigenous leaders. Her decades of activism helped establish Adivasi political representation in Kerala state politics.',
            email: 'ck.janu@adivasisabha.test',
            phone: '+91-555-0167',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/CK_janu.jpg',
            tags: ['adivasi', 'land-rights', 'kerala', 'political-activism', 'tribal-welfare'],
            groupMemberships: [],
            address: {
                street: '123 Tribal Unity Road',
                city: 'Kalpetta',
                state: 'Kerala',
                country: 'India',
                zipCode: '673121'
            },
            quote: "Land is not just soil to us. It is our identity, our culture, our very existence."
        },
        {
            id: 'person-068',
            fullName: 'Tulasi Munda',
            dateOfBirth: new Date('1947-05-22'),
            pronouns: 'she/her',
            bio: 'Tulasi Munda dedicated her life to education and started an informal school in 1964 in Odisha\'s iron ore mining area to educate children from local Adivasi communities who would otherwise have ended up as child laborers in the mines. For over five decades, she has provided education to thousands of tribal children, ensuring they have alternatives to dangerous mining work. Munda\'s grassroots approach to education combines traditional Adivasi knowledge with formal learning, helping children maintain their cultural identity while gaining skills for the modern world. Her work demonstrates how education can be a form of resistance against exploitation and marginalization.',
            email: 'tulasi.munda@tribalEducation.test',
            phone: '+91-555-0168',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['adivasi', 'education', 'child-labor', 'odisha', 'mining-resistance'],
            groupMemberships: [],
            address: {
                street: '567 Education Road',
                city: 'Keonjhar',
                state: 'Odisha',
                country: 'India',
                zipCode: '758001'
            },
            quote: "Education is the light that can free our children from the darkness of exploitation."
        },
        {
            id: 'person-069',
            fullName: 'Kaori Tahara',
            dateOfBirth: new Date('1978-09-14'),
            pronouns: 'she/her',
            bio: 'Kaori Tahara is an Ainu rights activist and educator who teaches Ainu history at Tokyo University, highlighting the ongoing challenges faced by the Ainu community despite recent government recognition. She emphasizes how "Ainu people were officially forbidden to speak their language and were forced to take Japanese names," and documents how discrimination persists today. Tahara\'s academic work provides crucial documentation of Ainu experiences while her activism pushes for meaningful implementation of Indigenous rights. Her dual role as scholar and advocate ensures that Ainu voices remain central to discussions of Japanese Indigenous rights.',
            email: 'kaori.tahara@ainustudies.test',
            phone: '+81-555-0169',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['ainu', 'academic-activism', 'language-rights', 'discrimination', 'tokyo'],
            groupMemberships: [],
            address: {
                street: '890 University Avenue',
                city: 'Tokyo',
                state: 'Tokyo',
                country: 'Japan',
                zipCode: '113-0033'
            },
            quote: "Recognition without action is empty. We need real change, not just symbolic gestures."
        },
        {
            id: 'person-070',
            fullName: 'Shigeru Kayano',
            dateOfBirth: new Date('1926-06-28'),
            pronouns: 'he/him',
            bio: 'Shigeru Kayano was a pioneering Ainu folklorist, activist, and former Diet member who opened the first Ainu language school in 1987, laying crucial groundwork for language revitalization efforts. As the first Ainu member of the Japanese Diet, he brought Indigenous voices to the national political stage and advocated for formal recognition of Ainu as Indigenous peoples. Kayano\'s lifework included documenting Ainu oral traditions, stories, and language at a time when the culture faced extinction. His recordings and writings preserved invaluable cultural knowledge while his political activism secured legal foundations for contemporary Ainu rights movements.',
            email: 'memory.kayano@ainuheritage.test',
            phone: '+81-555-0170',
            picture: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Shigeru_Kayano.jpg',
            tags: ['ainu', 'language-preservation', 'politics', 'folklorist', 'diet-member'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Shigeru_Kayano',
            address: {
                street: '234 Heritage Lane',
                city: 'Nibutani',
                state: 'Hokkaido',
                country: 'Japan',
                zipCode: '055-0101'
            },
            quote: "If we lose our language, we lose our soul. I will not let that happen to my people."
        },
        {
            id: 'person-071',
            fullName: 'Joan Carling',
            dateOfBirth: new Date('1970-03-18'),
            pronouns: 'she/her',
            bio: 'Joan Carling is an Indigenous rights activist from the Cordillera region of the Philippines who served as Secretary General of the Asia Indigenous Peoples Pact and co-convener of the Indigenous Peoples Major Group for Sustainable Development. She advocates for Indigenous peoples\' rights to land, territories, and resources while promoting their role in environmental conservation and sustainable development. Carling has been recognized globally for her work bridging Indigenous knowledge systems with international policy frameworks. Her advocacy spans from local community organizing to United Nations forums, ensuring Indigenous voices shape global discussions on climate change and human rights.',
            email: 'joan.carling@cordillera.test',
            phone: '+63-555-0171',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Joan_Carling_beim_Champions_of_the_Earth_2018_Award.jpg',
            tags: ['cordillera', 'sustainable-development', 'un-advocacy', 'environmental-conservation', 'philippines'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Joan_Carling',
            address: {
                street: '345 Mountain Road',
                city: 'Baguio',
                state: 'Benguet',
                country: 'Philippines',
                zipCode: '2600'
            },
            quote: "We are not just beneficiaries of development, we are partners in creating sustainable futures."
        },
        // OCEANIA - Pacific Islands Activists
        {
            id: 'person-072',
            fullName: 'Moana Carcasses Kalosil',
            dateOfBirth: new Date('1963-12-25'),
            pronouns: 'he/him',
            bio: 'Moana Carcasses Kalosil served as Prime Minister of Vanuatu and has been a prominent advocate for climate justice and Indigenous rights in the Pacific. As a leader from Vanuatu, one of the countries most vulnerable to climate change, he has championed small island developing states in international forums and pushed for stronger climate action from industrialized nations. Kalosil\'s work bridging traditional Melanesian governance with modern political leadership demonstrates how Indigenous leaders can address global challenges while maintaining cultural values. His advocacy has been crucial in bringing Pacific voices to international climate negotiations.',
            email: 'moana.carcasses@vanuatugov.test',
            phone: '+678-555-0172',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Moana_Carcasses_Kalosil_2013_%28cropped%29.jpg',
            tags: ['melanesian', 'climate-justice', 'prime-minister', 'small-islands', 'vanuatu'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Moana_Carcasses_Kalosil',
            address: {
                street: '123 Independence Avenue',
                city: 'Port Vila',
                state: 'Shefa Province',
                country: 'Vanuatu',
                zipCode: '0001'
            },
            quote: "The Pacific Ocean connects us all. When our islands disappear, humanity loses part of its soul."
        },
        {
            id: 'person-073',
            fullName: 'Ruth Liloqula',
            dateOfBirth: new Date('1958-04-07'),
            pronouns: 'she/her',
            bio: 'Ruth Liloqula advocates for Indigenous women\'s rights and traditional governance systems in the Solomon Islands, where customary land tenure covers over 87% of the country. She works with rural communities to strengthen traditional decision-making processes while ensuring women\'s voices are heard in land and resource management. Liloqula\'s approach recognizes that Indigenous governance systems can adapt to contemporary challenges while maintaining their cultural integrity. Her work demonstrates how traditional leaders can address modern issues like logging, mining, and climate change through Indigenous knowledge systems.',
            email: 'ruth.liloqula@solomonwomen.test',
            phone: '+677-555-0173',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['melanesian', 'women-rights', 'customary-land', 'traditional-governance', 'solomon-islands'],
            groupMemberships: [],
            address: {
                street: '456 Kastom Road',
                city: 'Honiara',
                state: 'Guadalcanal Province',
                country: 'Solomon Islands',
                zipCode: '10001'
            },
            quote: "Our custom is not backward. It is wisdom that has sustained us for thousands of years."
        },
        {
            id: 'person-074',
            fullName: 'David Tong',
            dateOfBirth: new Date('1972-11-11'),
            pronouns: 'he/him',
            bio: 'David Tong is a climate activist and traditional leader from Kiribati who advocates for the rights of climate refugees and the preservation of Pacific Island cultures threatened by sea level rise. As his nation faces the possibility of becoming uninhabitable due to climate change, Tong works to ensure that I-Kiribati people maintain their cultural identity and rights even if forced to relocate. His advocacy combines traditional navigation knowledge with modern climate science to document environmental changes. Tong\'s work highlights how climate change represents cultural genocide for Pacific Island peoples.',
            email: 'david.tong@kiribaticlimate.test',
            phone: '+686-555-0174',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['i-kiribati', 'climate-refugee', 'sea-level-rise', 'cultural-preservation', 'navigation'],
            groupMemberships: [],
            address: {
                street: '789 Atoll Road',
                city: 'South Tarawa',
                state: 'Gilbert Islands',
                country: 'Kiribati',
                zipCode: '0001'
            },
            quote: "When our islands disappear beneath the waves, where will our ancestors rest? This is not just climate change - it is cultural extinction."
        },
        {
            id: 'person-075',
            fullName: 'Kathy Jetnil-Kijiner',
            dateOfBirth: new Date('1987-05-12'),
            pronouns: 'she/her',
            bio: 'Kathy Jetnil-Kijiner is a poet and climate activist from the Marshall Islands who gained international recognition for her powerful spoken word poetry about climate change impacts on Pacific Island communities. Her poem "Dear Matafele Peinam," addressed to her daughter, was performed at the UN Climate Summit and brought global attention to how climate change threatens Pacific Island cultures and identities. Jetnil-Kijiner co-founded the Marshall Islands Poetry and Performance nonprofit to use creative arts as tools for climate advocacy. Her work demonstrates how Indigenous artists can transform climate science into emotional truths that inspire action.',
            email: 'kathy.jetnil@marshallpoetry.test',
            phone: '+692-555-0175',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Kathy_Jetn%CC%84il-Kijiner%2C_2018.jpg',
            tags: ['marshallese', 'climate-poetry', 'spoken-word', 'un-summit', 'creative-activism'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Kathy_Jetnil-Kijiner',
            address: {
                street: '234 Poetry Lane',
                city: 'Majuro',
                state: 'Marshall Islands',
                country: 'Marshall Islands',
                zipCode: '96960'
            },
            quote: "We are not drowning. We are fighting. And we are here to tell our stories."
        },
        {
            id: 'person-076',
            fullName: 'Mere Ratunabuabua',
            dateOfBirth: new Date('1955-08-30'),
            pronouns: 'she/her',
            bio: 'Mere Ratunabuabua advocates for Indigenous Fijian women\'s rights and traditional ecological knowledge in climate adaptation strategies. She works with rural communities to document and preserve traditional farming and fishing practices that have sustained Pacific Island communities for generations. Ratunabuabua\'s advocacy emphasizes how Indigenous women hold critical knowledge for climate resilience but are often excluded from formal climate planning processes. Her work bridges traditional iTaukei governance systems with contemporary environmental policy, ensuring that climate solutions honor Indigenous knowledge and practices.',
            email: 'mere.ratunabuabua@fijiwomen.test',
            phone: '+679-555-0176',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['fijian', 'traditional-knowledge', 'climate-adaptation', 'women-rights', 'itaukei'],
            groupMemberships: [],
            address: {
                street: '567 Bose Road',
                city: 'Suva',
                state: 'Central Division',
                country: 'Fiji',
                zipCode: '10001'
            },
            quote: "Our grandmothers knew how to read the sea and sky. We must honor this knowledge in our fight against climate change."
        },
        {
            id: 'person-077',
            fullName: 'Foua Toloa',
            dateOfBirth: new Date('1962-01-20'),
            pronouns: 'he/him',
            bio: 'Foua Toloa is a Samoan traditional leader and environmental activist who advocates for the protection of customary marine tenure and traditional fishing practices in Samoa. She leads efforts to revive fa\'a Samoa (the Samoan way) approaches to ocean conservation, demonstrating how traditional tapu (sacred restrictions) can be more effective than modern regulations in protecting marine ecosystems. Toloa\'s work shows how Indigenous governance systems can address contemporary environmental challenges while maintaining cultural integrity. Her advocacy has influenced Pacific regional policies on Indigenous rights and ocean conservation.',
            email: 'foua.toloa@samoamarine.test',
            phone: '+685-555-0177',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Foua_Toloa.jpg',
            tags: ['samoan', 'marine-conservation', 'customary-tenure', 'faa-samoa', 'traditional-fishing'],
            groupMemberships: [],
            address: {
                street: '890 Coastal Road',
                city: 'Apia',
                state: 'Tuamasaga',
                country: 'Samoa',
                zipCode: '10001'
            },
            quote: "The ocean is our ancestor. We do not own it, we belong to it."
        },
        // MORE SOUTH AMERICA - Indigenous Activists
        {
            id: 'person-078',
            fullName: 'Elisa Loncón',
            dateOfBirth: new Date('1963-01-23'),
            pronouns: 'she/her',
            bio: 'Elisa Loncón served as President of Chile\'s Constitutional Convention, working to present an inclusive constitutional process that would have recognized Indigenous peoples\' rights for the first time in Chilean history. This Mapuche linguist and educator has dedicated her career to defending Indigenous language rights and intercultural education, believing that Indigenous peoples can remain Indigenous while participating in plural societies. Loncón\'s leadership of the constitutional process demonstrated how Indigenous knowledge can guide national transformation. Though the new constitution was ultimately rejected, her work advanced national conversations about Indigenous rights and plurinational democracy.',
            email: 'elisa.loncon@mapucheducation.test',
            phone: '+56-555-0178',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Elisa_Loncon_Antileo.jpg',
            tags: ['mapuche', 'constitutional-convention', 'language-rights', 'intercultural-education', 'plurinational'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Elisa_Loncón',
            address: {
                street: '123 Constitution Avenue',
                city: 'Santiago',
                state: 'Santiago Metropolitan',
                country: 'Chile',
                zipCode: '8320000'
            },
            quote: "Indigenous peoples can continue to be Indigenous with our languages and philosophy, exercising our rights in a plural society."
        },
        {
            id: 'person-079',
            fullName: 'Betiana Colhuan',
            dateOfBirth: new Date('1980-07-15'),
            pronouns: 'she/her',
            bio: 'Betiana Colhuan is a Mapuche leader leading efforts to reclaim national park land considered sacred to her people, including areas that hold deep spiritual significance for traditional healing practices. Since childhood, she was trained by Mapuche elders to become a machi, a spiritual leader and healer, becoming the first to earn this title on the Argentinian side of the Andes Mountains in nearly 100 years. Colhuan\'s work bridges spiritual leadership with land rights activism, arguing that sacred sites are essential for maintaining Indigenous cultural and healing practices. Her efforts demonstrate how traditional authority can guide contemporary struggles for territorial sovereignty.',
            email: 'betiana.colhuan@machimapuche.test',
            phone: '+54-555-0179',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['mapuche', 'machi', 'sacred-sites', 'traditional-healing', 'argentina'],
            groupMemberships: [],
            address: {
                street: '456 Sacred Mountain Road',
                city: 'San Carlos de Bariloche',
                state: 'Río Negro',
                country: 'Argentina',
                zipCode: '8400'
            },
            quote: "These mountains are not just landscape. They are our pharmacy, our university, our temple."
        },
        {
            id: 'person-080',
            fullName: 'Ailton Krenak',
            dateOfBirth: new Date('1953-09-29'),
            pronouns: 'he/him',
            bio: 'Ailton Krenak is a Krenak indigenous leader, journalist, and philosopher from Brazil who advocates for Indigenous cosmovisions as alternatives to destructive development models. He gained national prominence during Brazil\'s constitutional assembly in the 1980s when he painted his face black to protest discrimination against Indigenous peoples. Krenak\'s writings and speeches challenge Western notions of progress and development, offering Indigenous perspectives on sustainability and human relationships with nature. His work influences environmental movements across Latin America and demonstrates how Indigenous philosophy can address global crises.',
            email: 'ailton.krenak@indigenousphilosophy.test',
            phone: '+55-555-0180',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Ailton_Krenak_%285269420566%29_%28cropped%29.jpg',
            tags: ['krenak', 'indigenous-philosophy', 'constitutional-assembly', 'environmental-thought', 'brazil'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ailton_Krenak',
            address: {
                street: '789 Philosophy Road',
                city: 'Resplendor',
                state: 'Minas Gerais',
                country: 'Brazil',
                zipCode: '35230-000'
            },
            quote: "We need to postpone the end of the world. Indigenous peoples know how to live without destroying life."
        },
        {
            id: 'person-081',
            fullName: 'Lourdes Tibán',
            dateOfBirth: new Date('1959-03-15'),
            pronouns: 'she/her',
            bio: 'Lourdes Tibán is a Kichwa lawyer and former Congress member from Ecuador who has spent decades advocating for Indigenous rights, women\'s rights, and plurinational democracy. She played a crucial role in Ecuador\'s 2008 constitution that recognized the Rights of Nature and Indigenous territorial rights. Tibán\'s legal work has challenged discriminatory laws and defended Indigenous communities facing extractive industry pressures. Her advocacy combines traditional Indigenous governance principles with modern legal frameworks, demonstrating how Indigenous women can lead constitutional transformation.',
            email: 'lourdes.tiban@kichwalaw.test',
            phone: '+593-555-0181',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Lourdes_Tib%C3%A1n_in_Feb_2012.jpg',
            tags: ['kichwa', 'lawyer', 'congress-member', 'rights-of-nature', 'ecuador'],
            groupMemberships: [],
            address: {
                street: '234 Plurinational Road',
                city: 'Quito',
                state: 'Pichincha',
                country: 'Ecuador',
                zipCode: '170150'
            },
            quote: "The earth is not a commodity. It is our mother, and she has rights that must be respected."
        },
        {
            id: 'person-082',
            fullName: 'Nemonte Nenquimo',
            dateOfBirth: new Date('1986-12-05'),
            pronouns: 'she/her',
            bio: 'Nemonte Nenquimo is a Waorani leader from the Ecuadorian Amazon who led a historic legal victory protecting 500,000 acres of rainforest from oil drilling. In 2019, she received the Goldman Environmental Prize for her work organizing Indigenous communities to defend their territories against government and corporate encroachment. Nenquimo\'s advocacy demonstrates how Indigenous women\'s leadership can protect biodiversity and combat climate change. Her victory established important legal precedents for Indigenous consent and territorial rights in Ecuador, inspiring similar movements across the Amazon.',
            email: 'nemonte.nenquimo@waorani.test',
            phone: '+593-555-0182',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Nemonte_Nenquimo_2020_UNEP_Champions_of_the_Earth_laureate_credit_UNEP020-compressed.jpg',
            tags: ['waorani', 'amazon-protection', 'goldman-prize', 'oil-resistance', 'ecuador'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Nemonte_Nenquimo',
            address: {
                street: '567 Rainforest Road',
                city: 'Puyo',
                state: 'Pastaza',
                country: 'Ecuador',
                zipCode: '160150'
            },
            quote: "The rainforest is not for sale. It is our life, and we will defend it with our lives."
        },
        {
            id: 'person-083',
            fullName: 'Aída Quilcué',
            dateOfBirth: new Date('1961-11-22'),
            pronouns: 'she/her',
            bio: 'Aída Quilcué is a Nasa Indigenous leader from Colombia who has advocated for peace, territorial rights, and Indigenous autonomy during decades of armed conflict. As executive coordinator of the National Indigenous Organization of Colombia (ONIC), she has led efforts to protect Indigenous communities caught between paramilitary groups, guerrillas, and state forces. Quilcué\'s work demonstrates how Indigenous leaders navigate complex conflicts while maintaining cultural integrity and territorial sovereignty. Her advocacy for Indigenous jurisdiction and autonomous governance has influenced Colombia\'s peace process and transitional justice mechanisms.',
            email: 'aida.quilcue@onicolombia.test',
            phone: '+57-555-0183',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Aida_Quilcu%C3%A9_2017.jpg',
            tags: ['nasa', 'peace-process', 'territorial-rights', 'armed-conflict', 'colombia'],
            groupMemberships: [],
            address: {
                street: '890 Autonomy Road',
                city: 'Popayán',
                state: 'Cauca',
                country: 'Colombia',
                zipCode: '190001'
            },
            quote: "We want peace, but not the peace of cemeteries. We want the peace of dignity and territorial autonomy."
        },
        // MORE EUROPE - Sami and Other Indigenous Activists
        {
            id: 'person-084',
            fullName: 'Aili Keskitalo',
            dateOfBirth: new Date('1968-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Aili Keskitalo serves as President of the Sami Parliament of Norway and has been a leading voice in Arctic Indigenous rights and reindeer herding protection. She has advocated against wind farm developments on traditional Sami lands, arguing that the green energy transition should not come at the expense of Indigenous peoples\' rights. Keskitalo\'s leadership spans from local reindeer herding issues to international Arctic Council forums where she advocates for Indigenous perspectives on climate change and sustainable development. Her work demonstrates how traditional leaders can influence both national policies and international agreements.',
            email: 'aili.keskitalo@samiparlament.test',
            phone: '+47-555-0184',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['sami', 'parliament-president', 'reindeer-herding', 'wind-farms', 'arctic-council'],
            groupMemberships: [],
            address: {
                street: '123 Parliament Road',
                city: 'Karasjok',
                state: 'Finnmark',
                country: 'Norway',
                zipCode: '9730'
            },
            quote: "The green transition cannot be built on the destruction of Indigenous peoples\' livelihoods and cultures."
        },
        {
            id: 'person-085',
            fullName: 'Lars-Anders Baer',
            dateOfBirth: new Date('1955-03-12'),
            pronouns: 'he/him',
            bio: 'Lars-Anders Baer is a Sami reindeer herder and activist from Sweden who has challenged mining operations and forestry practices that threaten traditional grazing lands. He represents the Sirges Sami village in legal battles against the state and private companies over land use rights that affect seasonal reindeer migration routes. Baer\'s activism combines traditional ecological knowledge with legal advocacy, documenting how industrial development disrupts reindeer behavior and Sami livelihoods. His work highlights the ongoing colonization of Sami territories through resource extraction and the need for effective Indigenous consent mechanisms.',
            email: 'lars.baer@sirgessami.test',
            phone: '+46-555-0185',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['sami', 'reindeer-herding', 'mining-resistance', 'forestry', 'sweden'],
            groupMemberships: [],
            address: {
                street: '456 Migration Route',
                city: 'Gällivare',
                state: 'Norrbotten',
                country: 'Sweden',
                zipCode: '982 31'
            },
            quote: "The reindeer know these paths for thousands of years. We cannot let machines destroy what our ancestors built."
        },
        {
            id: 'person-086',
            fullName: 'Pauliina Feodoroff',
            dateOfBirth: new Date('1973-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Pauliina Feodoroff is a Skolt Sami documentary filmmaker and cultural activist from Finland who documents traditional knowledge and advocates for Sami language preservation. Her films capture the lived experiences of Sami communities facing cultural assimilation and environmental threats to traditional livelihoods. Feodoroff\'s work bridges art and activism, using storytelling to preserve cultural knowledge while advocating for Indigenous rights. Her documentaries have brought international attention to how climate change and development pressures affect Arctic Indigenous communities, demonstrating the power of Indigenous media to shape global conversations.',
            email: 'pauliina.feodoroff@skoltmedia.test',
            phone: '+358-555-0186',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['skolt-sami', 'documentary-filmmaker', 'cultural-preservation', 'language-rights', 'finland'],
            groupMemberships: [],
            address: {
                street: '789 Cultural Road',
                city: 'Inari',
                state: 'Lapland',
                country: 'Finland',
                zipCode: '99870'
            },
            quote: "Our stories are our resistance. When we tell them, we keep our culture alive for future generations."
        },
        {
            id: 'person-087',
            fullName: 'Dmitri Berezhkov',
            dateOfBirth: new Date('1975-01-01'), // Approximate year
            pronouns: 'he/him',
            bio: 'Dmitri Berezhkov advocates for Nenets reindeer herders\' rights in the Russian Arctic, where oil and gas development threatens traditional nomadic practices on the Yamal Peninsula. He documents how industrial development disrupts migration routes that Nenets families have used for centuries, forcing herders to adapt to shrinking territories and changing climate conditions. Berezhkov\'s work operating within Russia\'s restrictive political environment demonstrates the courage required for Indigenous activism under authoritarian governments. His advocacy focuses on preserving traditional knowledge and ensuring Nenets communities benefit from resource development on their territories.',
            email: 'dmitri.berezhkov@nenetsrights.test',
            phone: '+7-555-0187',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['nenets', 'reindeer-herding', 'oil-gas-resistance', 'yamal-peninsula', 'russia'],
            groupMemberships: [],
            address: {
                street: '234 Tundra Road',
                city: 'Salekhard',
                state: 'Yamalo-Nenets Autonomous Okrug',
                country: 'Russia',
                zipCode: '629008'
            },
            quote: "The tundra feeds our reindeer and our reindeer feed our families. Without the land, we are nothing."
        },
        {
            id: 'person-088',
            fullName: 'Galina Diatchkova',
            dateOfBirth: new Date('1968-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Galina Diatchkova is an Even traditional healer and cultural preservation activist from the Sakha Republic who advocates for the protection of sacred sites and traditional medicine practices threatened by gold mining operations. She leads efforts to document traditional healing knowledge while challenging Russian federal policies that undermine Indigenous land rights. Diatchkova\'s work demonstrates how Indigenous women maintain cultural continuity in the face of state assimilation policies and industrial development. Her advocacy bridges traditional authority structures with contemporary human rights frameworks, working within Russia\'s constraints to protect Indigenous knowledge systems.',
            email: 'galina.diatchkova@evenhealing.test',
            phone: '+7-555-0188',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['even', 'traditional-healing', 'sacred-sites', 'mining-resistance', 'sakha-republic'],
            groupMemberships: [],
            address: {
                street: '567 Healing Road',
                city: 'Yakutsk',
                state: 'Sakha Republic',
                country: 'Russia',
                zipCode: '677000'
            },
            quote: "Our medicines come from the land our ancestors knew. When they destroy the forest, they destroy our pharmacy."
        },
        // ADDITIONAL GLOBAL ACTIVISTS
        {
            id: 'person-089',
            fullName: 'Tshering Dolma',
            dateOfBirth: new Date('1985-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Tshering Dolma is a Tibetan environmental activist and traditional medicine practitioner who advocates for the protection of high-altitude ecosystems and traditional Tibetan healing practices. She works with nomadic communities to document climate change impacts on traditional grazing patterns and medicinal plant availability. Dolma\'s activism combines environmental science with traditional ecological knowledge, demonstrating how Indigenous knowledge can inform climate adaptation strategies. Her work bridges Tibetan Buddhist concepts of environmental stewardship with contemporary conservation efforts, showing how spiritual traditions can guide environmental activism.',
            email: 'tshering.dolma@tibetanhealing.test',
            phone: '+91-555-0189',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['tibetan', 'traditional-medicine', 'high-altitude-ecosystems', 'climate-adaptation', 'nomadic-communities'],
            groupMemberships: [],
            address: {
                street: '890 High Plateau Road',
                city: 'Dharamshala',
                state: 'Himachal Pradesh',
                country: 'India',
                zipCode: '176215'
            },
            quote: "The mountains teach us patience and resilience. We must learn from them to heal our relationship with nature."
        },
        {
            id: 'person-090',
            fullName: 'Hindou Oumarou Ibrahim',
            dateOfBirth: new Date('1984-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Hindou Oumarou Ibrahim is a Mbororo pastoralist and climate activist from Chad who advocates for Indigenous peoples\' role in climate change adaptation and environmental conservation. She serves on the UN Sustainable Development Solutions Network and uses traditional weather forecasting knowledge to develop climate adaptation strategies. Ibrahim\'s work demonstrates how nomadic pastoralist knowledge can inform drought early warning systems and sustainable land management. Her advocacy bridges traditional governance systems with international climate policy, ensuring Indigenous voices shape global environmental agreements.',
            email: 'hindou.ibrahim@mbororo.test',
            phone: '+235-555-0190',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Hindou_Oumarou_Ibrahim.jpg',
            tags: ['mbororo', 'pastoralist', 'climate-adaptation', 'traditional-forecasting', 'chad'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Hindou_Oumarou_Ibrahim',
            address: {
                street: '123 Pastoral Road',
                city: 'N\'Djamena',
                state: 'N\'Djamena',
                country: 'Chad',
                zipCode: '1001'
            },
            quote: "Traditional knowledge is not primitive. It is sophisticated science developed over thousands of years."
        },
        {
            id: 'person-091',
            fullName: 'Patricia Gualinga',
            dateOfBirth: new Date('1969-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Patricia Gualinga is a Kichwa human rights defender from the Ecuadorian Amazon who has spent decades fighting to protect Indigenous territories from extractive industries and advocating for the rights of Indigenous women. She played a crucial role in the Inter-American Court of Human Rights case that established important precedents for Indigenous territorial rights and cultural survival. Gualinga\'s advocacy combines traditional Indigenous governance with international human rights law, demonstrating how Indigenous women can lead transnational justice movements. Her work has influenced Indigenous rights jurisprudence across Latin America.',
            email: 'patricia.gualinga@kichwarights.test',
            phone: '+593-555-0191',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Patricia_Gualinga_%28cropped%29.jpg',
            tags: ['kichwa', 'human-rights-defender', 'inter-american-court', 'extractive-resistance', 'ecuador'],
            groupMemberships: [],
            address: {
                street: '456 Resistance Road',
                city: 'Puyo',
                state: 'Pastaza',
                country: 'Ecuador',
                zipCode: '160250'
            },
            quote: "We defend the forest not just for ourselves, but for all humanity. The jungle is the lung of the world."
        },
        {
            id: 'person-092',
            fullName: 'Phoolman Chaudhary',
            dateOfBirth: new Date('1962-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: 'Phoolman Chaudhary is a Tharu Indigenous rights activist from Nepal who advocates for the rights of Indigenous peoples in the Terai lowlands and works to preserve traditional Tharu culture and language. She leads efforts to secure land rights for Tharu communities who have faced displacement from the creation of national parks and commercial agriculture expansion. Chaudhary\'s work addresses how conservation policies can marginalize Indigenous peoples while fighting for models that recognize Indigenous land stewardship. Her advocacy demonstrates how Indigenous women can challenge both feudal and modern forms of oppression.',
            email: 'phoolman.chaudhary@tharuRights.test',
            phone: '+977-555-0192',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['tharu', 'land-rights', 'terai-lowlands', 'cultural-preservation', 'nepal'],
            groupMemberships: [],
            address: {
                street: '789 Lowland Road',
                city: 'Bharatpur',
                state: 'Chitwan',
                country: 'Nepal',
                zipCode: '44200'
            },
            quote: "Our ancestors lived in harmony with the forests and rivers. We can teach the world how to do this again."
        },
        {
            id: 'person-093',
            fullName: 'Vandana Shiva',
            dateOfBirth: new Date('1952-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Vandana Shiva fights against corporate control of agriculture and seeds that threatens Indigenous farming communities worldwide. An Indian scholar and activist, she established Navdanya to protect traditional seeds and farming practices from genetic engineering and corporate patents. Her work defending biodiversity connects directly with Indigenous rights, as traditional farmers and Indigenous peoples are the original guardians of genetic diversity. Shiva argues that seed freedom is fundamental to food sovereignty and cultural survival.",
            email: 'vandana.shiva@navdanya.test',
            phone: '+91-555-0193',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Dr._Vandana_Shiva_DS.jpg',
            tags: ['seed-sovereignty', 'biodiversity', 'agriculture', 'india', 'environmental'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Vandana_Shiva',
            address: {
                street: '892 Seed Sovereignty Lane',
                city: 'Dehradun',
                state: 'Uttarakhand',
                country: 'India',
                zipCode: '248001'
            },
            quote: "Seed is the source of life, and the first link in the food chain."
        },
        {
            id: 'person-094',
            fullName: 'Greta Thunberg',
            dateOfBirth: new Date('2003-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Greta Thunberg has become a global voice for climate action that resonates with Indigenous communities fighting environmental destruction. A Swedish climate activist with Asperger's syndrome, she began school strikes for climate that inspired millions worldwide. Her direct speaking style and uncompromising demands for climate justice echo the urgency expressed by Indigenous environmental defenders. Though not Indigenous herself, Thunberg frequently amplifies Indigenous voices and acknowledges their leadership in environmental protection.",
            email: 'greta.thunberg@fridaysforfuture.test',
            phone: '+46-555-0194',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Greta_Thunberg_Stockholm_2024_%283x4_cropped%29.jpg',
            tags: ['climate-activism', 'youth-activism', 'sweden', 'environmental'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Greta_Thunberg',
            address: {
                street: '456 Climate Action Street',
                city: 'Stockholm',
                state: 'Stockholm County',
                country: 'Sweden',
                zipCode: '10412'
            },
            quote: "How dare you! You have stolen my dreams and my childhood with your empty words."
        },
        {
            id: 'person-095',
            fullName: 'Chico Mendes',
            dateOfBirth: new Date('1944-01-01'), // Approximate year
            pronouns: 'he/him',
            bio: "Chico Mendes gave his life defending the Amazon rainforest and the rubber tappers who depended on it for survival. A Brazilian environmental activist and union leader, he organized rubber tappers to resist cattle ranchers and developers who were destroying their forest-based livelihoods. His work built bridges between environmentalists and Indigenous communities, recognizing that forest protection required supporting the people who lived there sustainably. Mendes was assassinated in 1988, but his legacy continues to inspire forest defenders worldwide.",
            email: 'chico.mendes@rubbertappers.test',
            phone: '+55-555-0195',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Chico_Mendes_in_1988.jpg',
            tags: ['amazon', 'environmental', 'rubber-tappers', 'brazil', 'forest-protection'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Chico_Mendes',
            address: {
                street: '789 Forest Defender Road',
                city: 'Xapuri',
                state: 'Acre',
                country: 'Brazil',
                zipCode: '69930-000'
            },
            quote: "At first I thought I was fighting to save rubber trees, then I thought I was fighting to save the Amazon rainforest. Now I realize I was fighting for humanity."
        },
        {
            id: 'person-096',
            fullName: 'Wangari Maathai',
            dateOfBirth: new Date('1940-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Wangari Maathai connected environmental restoration with women's empowerment and democratic rights in Kenya. The first African woman to win the Nobel Peace Prize, she founded the Green Belt Movement to combat deforestation while providing income for rural women. Her approach recognized that environmental degradation and social injustice were interconnected, and that communities needed to control their own resources. Maathai's grassroots organizing inspired environmental movements across Africa and demonstrated how tree planting could become an act of resistance.",
            email: 'wangari.maathai@greenbelt.test',
            phone: '+254-555-0196',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Wangari_Maathai_in_2001.jpg',
            tags: ['environmental', 'women-empowerment', 'kenya', 'reforestation', 'nobel-laureate'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Wangari_Maathai',
            address: {
                street: '234 Green Belt Avenue',
                city: 'Nairobi',
                state: 'Nairobi County',
                country: 'Kenya',
                zipCode: '00100'
            },
            quote: "It's the little things citizens do. That's what will make the difference. My little thing is planting trees."
        },
        {
            id: 'person-097',
            fullName: 'Ken Saro-Wiwa',
            dateOfBirth: new Date('1941-01-01'), // Approximate year
            pronouns: 'he/him',
            bio: "Ken Saro-Wiwa led the Ogoni people's struggle against oil companies devastating their homeland in Nigeria. A writer and environmental activist, he organized non-violent resistance against Shell and other corporations whose oil extraction poisoned Ogoni lands and waters. His Movement for the Survival of the Ogoni People demanded environmental cleanup, fair compensation, and political autonomy for his community. The Nigerian military government executed Saro-Wiwa and eight other Ogoni leaders in 1995, making them martyrs for environmental justice.",
            email: 'ken.saroviwa@ogoni.test',
            phone: '+234-555-0197',
            picture: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Ken_Saro-Wiwa.jpg',
            tags: ['ogoni', 'oil-resistance', 'nigeria', 'environmental-justice', 'writer'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Ken_Saro-Wiwa',
            address: {
                street: '567 Ogoni Liberation Street',
                city: 'Port Harcourt',
                state: 'Rivers State',
                country: 'Nigeria',
                zipCode: '500001'
            },
            quote: "The environment is man's first right. Without a safe environment, man cannot exist to claim other rights."
        },
        {
            id: 'person-098',
            fullName: 'Berta Cáceres',
            dateOfBirth: new Date('1971-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Berta Cáceres spent her life defending Lenca territory from destructive development projects in Honduras. An Indigenous environmental activist and Goldman Prize winner, she led the fight against the Agua Zarca hydroelectric dam that threatened to destroy sacred Lenca lands and the Gualcarque River. Her resistance forced international funders to withdraw from the project, demonstrating how Indigenous organizing could challenge powerful corporate interests. Cáceres was assassinated in 2016, but her example continues to inspire environmental defenders across Latin America.",
            email: 'berta.caceres@copinh.test',
            phone: '+504-555-0198',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Berta_C%C3%A1ceres_%28cropped%29.jpg',
            tags: ['lenca', 'environmental-defender', 'honduras', 'anti-dam', 'goldman-prize'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Berta_C%C3%A1ceres',
            address: {
                street: '891 Gualcarque River Road',
                city: 'La Esperanza',
                state: 'Intibucá',
                country: 'Honduras',
                zipCode: '13201'
            },
            quote: "Let us wake up! We're out of time. We must shake our conscience free of the rapacious capitalism, racism and patriarchy that will only assure our own self-destruction."
        },
        {
            id: 'person-099',
            fullName: 'Marina Silva',
            dateOfBirth: new Date('1958-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Marina Silva represents the intersection of Indigenous advocacy and national politics in Brazil. Born into a rubber tapper family in the Amazon, she worked alongside Chico Mendes before becoming a senator and presidential candidate. As Environment Minister, she created protected areas and fought against deforestation, often clashing with agribusiness interests. Silva's political career demonstrates how Indigenous knowledge and environmental protection can be brought into mainstream governance, though she faces constant resistance from extractive industries.",
            email: 'marina.silva@sustentabilidade.test',
            phone: '+55-555-0199',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/31.07.2024_-_Visita_%C3%A0_Base_Prevfogo_Ibama_de_Corumb%C3%A1_%2853893982568%29_%28cropped%29.jpg',
            tags: ['amazon', 'politics', 'environmental', 'brazil', 'rubber-tapper'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Marina_Silva',
            address: {
                street: '123 Sustainability Boulevard',
                city: 'Rio Branco',
                state: 'Acre',
                country: 'Brazil',
                zipCode: '69900-000'
            },
            quote: "We cannot have environmental protection without social justice, and we cannot have social justice without environmental protection."
        },
        {
            id: 'person-0100',
            fullName: 'Dorothy Stang',
            dateOfBirth: new Date('1931-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Dorothy Stang, an American nun, dedicated her life to defending Amazon communities and forest protection in Brazil. Working with the Pastoral Land Commission, she supported small farmers and environmental defenders against logging and cattle ranching interests. Her advocacy for sustainable development and land reform made her a target of powerful agribusiness groups who saw her as an obstacle to profit. Stang was murdered in 2005 while walking to a community meeting, becoming a martyr for Amazon protection and social justice.",
            email: 'dorothy.stang@cpt.test',
            phone: '+55-555-0200',
            picture: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dorothy_Stang.jpg',
            tags: ['amazon-defender', 'nun', 'land-reform', 'brazil', 'environmental-martyr'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Dorothy_Stang',
            address: {
                street: '456 Forest Protection Lane',
                city: 'Anapu',
                state: 'Pará',
                country: 'Brazil',
                zipCode: '68365-000'
            },
            quote: "The death of the forest is the end of our life."
        },
        {
            id: 'person-0101',
            fullName: 'Isatou Ceesay',
            dateOfBirth: new Date('1972-01-01'), // Approximate year
            pronouns: 'she/her',
            bio: "Isatou Ceesay transformed plastic waste into economic opportunity for women in rural Gambia. Known as the 'Queen of Recycling,' she organized women to collect and upcycle plastic bags that were polluting their communities and killing livestock. Her initiative not only cleaned up the environment but provided income for hundreds of women through handicraft production. Ceesay's approach demonstrates how environmental solutions can emerge from grassroots organizing and traditional knowledge systems.",
            email: 'isatou.ceesay@womenrecycling.test',
            phone: '+220-555-0201',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg',
            tags: ['recycling', 'women-empowerment', 'gambia', 'environmental', 'waste-management'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Isatou_Ceesay',
            address: {
                street: '789 Recycling Centre Road',
                city: 'Njau',
                state: 'North Bank Region',
                country: 'Gambia',
                zipCode: 'NB001'
            },
            quote: "We cannot just talk about the environment. We have to act."
        },
        {
            id: 'person-0102',
            fullName: 'Evaristo Nugkuag',
            dateOfBirth: new Date('1950-01-01'), // Approximate year
            pronouns: 'he/him',
            bio: "Evaristo Nugkuag spent decades organizing Indigenous peoples across the Amazon basin to defend their territories from colonization and development. An Aguaruna leader from Peru, he founded the Interethnic Association for Rainforest Development to unite diverse Indigenous groups in protecting their lands. His work helped establish Indigenous territorial rights in Peruvian law and connected local struggles to international Indigenous rights movements. Nugkuag demonstrated how Indigenous organizing could transcend tribal boundaries while respecting cultural differences.",
            email: 'evaristo.nugkuag@aidesep.test',
            phone: '+51-555-0202',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Evaristo_Nugkuag%2C_2010_%28cropped%29.jpg',
            tags: ['aguaruna', 'amazon', 'indigenous-rights', 'peru', 'territorial-defense'],
            groupMemberships: [],
            reference: 'https://en.wikipedia.org/wiki/Evaristo_Nugkuag',
            address: {
                street: '234 Indigenous Territory Avenue',
                city: 'Lima',
                state: 'Lima',
                country: 'Peru',
                zipCode: '15001'
            },
            quote: "The forest is our life, our pharmacy, our supermarket. We cannot live without it."
        }
    ],
    groups: [
        {
            id: 'american-indian-movement',
            name: 'American Indian Movement',
            about: 'Indigenous grassroots movement founded in Minneapolis in 1968 to address issues of poverty, discrimination, and police brutality against American Indians, and to fight for Indigenous sovereignty and civil rights.',
            email: 'contact@aimovement.test',
            website: 'https://aimovement.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgaim-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/American_Indian_Movement'
        },
        {
            id: 'honor-the-earth',
            name: 'Honor the Earth',
            about: 'Indigenous environmental advocacy organization co-founded by Winona LaDuke and the Indigo Girls, focusing on climate change, renewable energy, and environmental justice for Native communities.',
            email: 'info@honorearth.test',
            website: 'https://honorearth.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svghte-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/Honor_the_Earth'
        },
        {
            id: 'white-earth-land-recovery',
            name: 'White Earth Land Recovery Project',
            about: 'Indigenous organization founded by Winona LaDuke working to recover land for the Anishinaabeg people and develop sustainable, culturally appropriate economic enterprises.',
            email: 'info@welrp.test',
            website: 'https://welrp.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgwelrp-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/White_Earth_Land_Recovery_Project'
        },
        {
            id: 'native-american-voters',
            name: 'Native American Voting Rights Coalition',
            about: 'Advocacy group working to increase Native American political participation and remove barriers to voting in tribal communities.',
            email: 'votes@nativevoting.test',
            website: 'https://nativevoting.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgnavrc-logo.jpg'
        },
        {
            id: 'tribal-democracy-coalition',
            name: 'Tribal Democracy Coalition',
            about: 'Multi-tribal organization promoting democratic participation and Indigenous representation in government at all levels.',
            email: 'democracy@tribaldemocracy.test',
            website: 'https://tribaldemocracy.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgtdc-logo.jpg'
        },
        {
            id: 'first-nations-caring-society',
            name: 'First Nations Child and Family Caring Society',
            about: 'Canadian organization led by Cindy Blackstock that conducts research and advocates for equitable funding and services for First Nations children and families.',
            email: 'info@fncaringsociety.test',
            website: 'https://fncaringsociety.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgfncs-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/First_Nations_Child_and_Family_Caring_Society'
        },
        {
            id: 'canadian-land-protectors',
            name: 'Canadian Indigenous Land Protectors',
            about: 'Network of Indigenous land defenders working to protect traditional territories from resource extraction and development.',
            email: 'protect@landprotectors.test',
            website: 'https://canadianlandprotectors.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgcilp-logo.jpg'
        },
        {
            id: 'indigenous-health-network',
            name: 'Indigenous Health Equity Network',
            about: 'Healthcare advocacy organization addressing health disparities and promoting culturally appropriate healthcare for Indigenous communities.',
            email: 'health@indigenoushealth.test',
            website: 'https://indigenoushealth.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgihen-logo.jpg'
        },
        {
            id: 'traditional-healers-circle',
            name: 'Traditional Healers Circle',
            about: 'Council of Indigenous traditional healers preserving and sharing ancestral healing knowledge and practices.',
            email: 'healers@traditionalcircle.test',
            website: 'https://traditionalhealers.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgthc-logo.jpg'
        },
        {
            id: 'anishinabek-nation',
            name: 'Anishinabek Nation',
            about: 'Political organization representing 39 First Nations across Ontario, Canada. Advocates for Anishinaabe rights, including water protection and environmental justice led by Chief Water Commissioner Autumn Peltier.',
            email: 'info@anishinabek.test',
            website: 'https://anishinabek.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgan-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/Anishinabek_Nation'
        },
        {
            id: 'indigenous-knowledge-network',
            name: 'Indigenous Knowledge Network',
            about: 'Indigenous research network promoting the integration of traditional ecological knowledge into climate science and policy.',
            email: 'knowledge@indigenousknowledge.test',
            website: 'https://indigenousknowledge.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgikn-logo.jpg'
        },
        {
            id: 'cape-york-partnership',
            name: 'Cape York Partnership',
            about: 'Australian Indigenous organization founded by Noel Pearson promoting economic and social development of Cape York Peninsula while maintaining cultural values and Indigenous self-determination.',
            email: 'info@capeyork.test',
            website: 'https://capeyork.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgcyp-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/Cape_York_Partnership'
        },
        {
            id: 'sacred-sites-protection',
            name: 'Sacred Sites Protection Alliance',
            about: 'Indigenous alliance working to protect sacred sites and cultural landscapes from destruction and desecration.',
            email: 'protect@sacredsites.test',
            website: 'https://sacredsitesprotection.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgsspa-logo.jpg'
        },
        {
            id: 'torres-strait-conservation',
            name: 'Torres Strait Conservation Alliance',
            about: 'Indigenous marine conservation organization led by Torres Strait Islanders protecting coral reefs and traditional fishing areas.',
            email: 'marine@torresconservation.test',
            website: 'https://torresstraitconservation.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgtsca-logo.jpg'
        },
        {
            id: 'pacific-islander-alliance',
            name: 'Pacific Islander Environmental Alliance',
            about: 'Regional network of Indigenous Pacific Islander communities addressing climate change and marine conservation issues.',
            email: 'pacific@islanderalliance.test',
            website: 'https://pacificislanderalliance.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgpiea-logo.jpg'
        },
        {
            id: 'rigoberta-menchu-foundation',
            name: 'Rigoberta Menchú Tum Foundation',
            about: 'Guatemalan Indigenous rights organization founded by Nobel laureate Rigoberta Menchú, advocating for Maya communities and survivors of genocide while seeking justice and cultural preservation.',
            email: 'info@frmt.test',
            website: 'https://frmt.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgfrmt-logo.jpg',
            reference: 'https://en.wikipedia.org/wiki/Rigoberta_Mench%C3%BA'
        },
        {
            id: 'traditional-medicine-keepers',
            name: 'Traditional Medicine Keepers Alliance',
            about: 'Global network of Indigenous medicine keepers preserving traditional healing knowledge and medicinal plant conservation.',
            email: 'medicine@traditionalmedicine.test',
            website: 'https://traditionalmedicinekeepers.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgtmka-logo.jpg'
        },
        {
            id: 'indigenous-youth-network',
            name: 'Global Indigenous Youth Network',
            about: 'International network of Indigenous youth leaders promoting cultural preservation and environmental activism.',
            email: 'youth@indigenousyouth.test',
            website: 'https://indigenousyouthnetwork.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svggiyn-logo.jpg'
        },
        {
            id: 'andean-water-council',
            name: 'Andean Indigenous Water Council',
            about: 'Council of Andean Indigenous communities protecting mountain watersheds and traditional water management systems.',
            email: 'water@andeanwater.test',
            website: 'https://andeanwatercouncil.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgaiwc-logo.jpg'
        },
        {
            id: 'indigenous-water-alliance',
            name: 'Indigenous Water Rights Alliance',
            about: 'International alliance advocating for Indigenous water rights and traditional water governance systems.',
            email: 'rights@wateralliance.test',
            website: 'https://indigenouswateralliance.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgiwra-logo.jpg'
        },
        {
            id: 'indigenous-farmers-union',
            name: 'Indigenous Farmers Union',
            about: 'Union of Indigenous farmers promoting traditional agriculture and fighting for land and seed sovereignty.',
            email: 'farmers@indigenousfarmers.test',
            website: 'https://indigenousfarmersunion.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgifu-logo.jpg'
        },
        {
            id: 'seed-sovereignty-network',
            name: 'Seed Sovereignty Network',
            about: 'Network dedicated to preserving Indigenous seed varieties and promoting traditional crop diversity.',
            email: 'seeds@seedsovereignty.test',
            website: 'https://seedsovereigntynetwork.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgssn-logo.jpg'
        },
        {
            id: 'indigenous-climate-council',
            name: 'Indigenous Climate Council',
            about: 'International council bringing Indigenous perspectives to global climate policy and negotiations.',
            email: 'council@indigenousclimate.test',
            website: 'https://indigenousclimatecouncil.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgicc-logo.jpg'
        },
        {
            id: 'sami-cultural-council',
            name: 'Sami Cultural Rights Council',
            about: 'Organization advocating for Sami cultural rights, language preservation, and traditional livelihoods.',
            email: 'culture@samiculture.test',
            website: 'https://samiculturalcouncil.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgscrc-logo.jpg'
        },
        {
            id: 'arctic-indigenous-alliance',
            name: 'Arctic Indigenous Peoples Alliance',
            about: 'Circumpolar alliance of Arctic Indigenous peoples addressing climate change and cultural preservation.',
            email: 'arctic@arcticindigenous.test',
            website: 'https://arcticindigenousalliance.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgaipa-logo.jpg'
        },
        {
            id: 'khoikhoi-heritage-foundation',
            name: 'Khoikhoi Heritage Foundation',
            about: 'Foundation working to preserve Khoikhoi cultural heritage and reclaim traditional lands in southern Africa.',
            email: 'heritage@khoikhoiheritage.test',
            website: 'https://khoikhoiheritage.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgkhf-logo.jpg'
        },
        {
            id: 'african-indigenous-council',
            name: 'African Indigenous Peoples Council',
            about: 'Continental organization representing Indigenous African peoples and advocating for their rights and recognition.',
            email: 'council@africanindigenous.test',
            website: 'https://africanindigenouscouncil.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgaipc-logo.jpg'
        },
        // New Zealand Māori Organizations
        {
            id: 'parihaka-settlement',
            name: 'Parihaka Peace Settlement',
            about: 'Historic Indigenous Māori settlement founded by Te Whiti-o-Rongomai and Tohu Kākahi, known for its commitment to nonviolent resistance and peaceful coexistence.',
            email: 'peace@parihaka.test',
            website: 'https://parihaka.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgparihaka-logo.jpg'
        },
        {
            id: 'maori-peace-movement',
            name: 'Māori Peace Movement',
            about: 'Indigenous movement promoting nonviolent resistance and peaceful solutions to Māori rights issues, inspired by the example of Parihaka.',
            email: 'info@maoripeace.test',
            website: 'https://maoripeacemovement.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmpm-logo.jpg'
        },
        {
            id: 'maori-land-march-committee',
            name: 'Māori Land March Committee',
            about: 'Indigenous organization that coordinated the historic 1975 Māori Land March from Cape Reinga to Parliament, demanding "Not one more acre of Māori land."',
            email: 'march@maoriland.test',
            website: 'https://maorilandmarch.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmlmc-logo.jpg'
        },
        {
            id: 'maori-womens-welfare-league',
            name: 'Māori Women\\u0027s Welfare League',
            about: 'National organization of Māori women working to improve the lives of Māori families and preserve Māori culture and values.',
            email: 'welfare@maoriwomen.test',
            website: 'https://maoriwomenswelfare.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmwwl-logo.jpg'
        },
        {
            id: 'maori-television-collective',
            name: 'Māori Television Collective',
            about: 'Media organization promoting Māori stories, language, and perspectives in New Zealand broadcasting and film.',
            email: 'media@maoritv.test',
            website: 'https://maoritelevision.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmtc-logo.jpg'
        },
        {
            id: 'indigenous-filmmakers-aotearoa',
            name: 'Indigenous Filmmakers Aotearoa',
            about: 'Network of Indigenous filmmakers in New Zealand working to tell authentic Māori and Pacific stories through cinema and documentary.',
            email: 'film@indigenousaotearoa.test',
            website: 'https://indigenousfilmmakers.nz',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgifa-logo.jpg'
        },
        {
            id: 'ngā-tamatoa',
            name: 'Ngā Tamatoa',
            about: 'Māori activist group founded in 1970 that challenged racial discrimination and advocated for Māori rights through protest and political action.',
            email: 'warriors@ngātamatoa.test',
            website: 'https://ngātamatoa.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgnt-logo.jpg'
        },
        {
            id: 'maori-sovereignty-movement',
            name: 'Māori Sovereignty Movement',
            about: 'Political movement advocating for Māori self-determination and the restoration of Māori political authority under Te Tiriti o Waitangi.',
            email: 'sovereignty@maori.test',
            website: 'https://maorisovereignty.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmsm-logo.jpg'
        },
        // Australian Aboriginal Organizations
        {
            id: 'council-aboriginal-reconciliation',
            name: 'Council for Aboriginal Reconciliation',
            about: 'Australian organization established to promote reconciliation between Indigenous and non-Indigenous Australians through education and dialogue.',
            email: 'reconcile@car.test',
            website: 'https://reconciliation.org.au',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgcar-logo.jpg'
        },
        {
            id: 'senate-australia',
            name: 'Australian Senate',
            about: 'Upper house of the Australian Parliament, representing the states and territories of Australia in the federal legislative process.',
            email: 'info@senate.test',
            website: 'https://senate.gov.au',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgsenate-logo.jpg'
        },
        {
            id: 'indigenous-parliamentary-caucus',
            name: 'Indigenous Parliamentary Caucus',
            about: 'Cross-party group of parliamentarians working to advance Indigenous rights and representation in Australian government.',
            email: 'caucus@indigenous.test',
            website: 'https://indigenouscaucus.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgipc-logo.jpg'
        },
        {
            id: 'meriam-people',
            name: 'Meriam People',
            about: 'Traditional owners of the Murray Islands in the Torres Strait, who successfully challenged terra nullius in the landmark Mabo case.',
            email: 'culture@meriam.test',
            website: 'https://meriampeople.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmeriam-logo.jpg'
        },
        {
            id: 'native-title-claimants',
            name: 'Native Title Claimants Network',
            about: 'Network of Indigenous Australian groups pursuing native title claims and land rights recognition across Australia.',
            email: 'claims@nativetitle.test',
            website: 'https://nativetitle.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgntc-logo.jpg'
        },
        // Pacific Islander Organizations
        {
            id: 'autonomous-bougainville-government',
            name: 'Autonomous Bougainville Government',
            about: 'Government of the Autonomous Region of Bougainville, working toward independence from Papua New Guinea through peaceful political processes.',
            email: 'government@bougainville.test',
            website: 'https://abg.gov.pg',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgabg-logo.jpg'
        },
        {
            id: 'new-bougainville-party',
            name: 'New Bougainville Party',
            about: 'Political party in Bougainville advocating for gradual independence and sustainable development of the island.',
            email: 'party@newbougainville.test',
            website: 'https://newbougainvilleparty.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgnbp-logo.jpg'
        },
        {
            id: 'hawaiian-kingdom',
            name: 'Hawaiian Kingdom',
            about: 'Historic sovereign nation of the Hawaiian Islands, overthrown in 1893 by American businessmen, with ongoing movements seeking restoration.',
            email: 'kingdom@hawaii.test',
            website: 'https://hawaiiankingdom.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svghk-logo.jpg'
        },
        {
            id: 'hui-aloha-aina',
            name: 'Hui Aloha \\u0027Aina',
            about: 'Hawaiian organization that opposed American annexation, collecting over 21,000 signatures against the annexation treaty in the 1890s.',
            email: 'aloha@huialohaaina.test',
            website: 'https://huialohaaina.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svghaa-logo.jpg'
        },
        {
            id: 'peoples-alliance-fiji',
            name: 'People\\u0027s Alliance',
            about: 'Fijian political party committed to multiracial democracy and constitutional governance, led by Sitiveni Rabuka.',
            email: 'alliance@peoplesfiji.test',
            website: 'https://peoplesalliance.com.fj',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgpaf-logo.jpg'
        },
        {
            id: 'fiji-military-forces',
            name: 'Republic of Fiji Military Forces',
            about: 'Armed forces of Fiji, historically involved in coups but now committed to constitutional governance and regional peacekeeping.',
            email: 'military@rfmf.test',
            website: 'https://rfmf.mil.fj',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgrfmf-logo.jpg'
        },
        // South American Indigenous Organizations
        {
            id: 'hutukara-yanomami-association',
            name: 'Hutukara Yanomami Association',
            about: 'Indigenous rights organization founded by Davi Kopenawa to defend Yanomami territory and culture in the Brazilian Amazon.',
            email: 'protect@hutukara.test',
            website: 'https://hutukara.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svghutukara-logo.jpg'
        },
        {
            id: 'pachakutik-movement',
            name: 'Pachakutik Plurinational Unity Movement',
            about: 'Indigenous political movement in Ecuador advocating for indigenous rights, environmental protection, and political plurinationalism.',
            email: 'unity@pachakutik.test',
            website: 'https://pachakutik.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgpachakutik-logo.jpg'
        },
        {
            id: 'confederation-nationalities-ecuador',
            name: 'Confederation of Peoples and Nationalities of Ecuador',
            about: 'Organization representing Ecuador\\u0027s indigenous peoples and nationalities in their struggle for political and cultural rights.',
            email: 'nations@conaie.test',
            website: 'https://conaie.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgconaie-logo.jpg'
        },
        {
            id: 'movement-towards-socialism',
            name: 'Movement for Socialism (MAS)',
            about: 'Bolivian political party founded by Evo Morales, representing indigenous peoples, coca farmers, and the political left.',
            email: 'socialism@mas.test',
            website: 'https://mas-ipsp.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgmas-logo.jpg'
        },
        {
            id: 'confederation-coca-producers',
            name: 'Confederation of Coca Producers',
            about: 'Union representing coca farmers in Bolivia, defending traditional coca cultivation and opposing forced eradication programs.',
            email: 'coca@cocaleros.test',
            website: 'https://cocaproducers.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgccp-logo.jpg'
        },
        {
            id: 'fenmucarinap',
            name: 'FENMUCARINAP',
            about: 'National Federation of Female Peasants, Artisans, Indigenous, Native and Salaried Workers of Peru, fighting for women\\u0027s and indigenous rights.',
            email: 'women@fenmucarinap.test',
            website: 'https://fenmucarinap.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgfenmucarinap-logo.jpg'
        },
        {
            id: 'andean-womens-federation',
            name: 'Andean Women\\u0027s Rights Federation',
            about: 'Regional organization advocating for indigenous women\\u0027s rights across the Andean countries of South America.',
            email: 'andean@womensrights.test',
            website: 'https://andeanwomen.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgawf-logo.jpg'
        },
        // Sami Organizations
        {
            id: 'saami-council',
            name: 'Saami Council',
            about: 'Pan-Saami organization representing Sami people across Norway, Sweden, Finland, and Russia in their struggle for indigenous rights.',
            email: 'council@saamicouncil.test',
            website: 'https://saamicouncil.net',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgsc-logo.jpg'
        },
        {
            id: 'swedish-sami-parliament',
            name: 'Swedish Sami Parliament',
            about: 'Representative body for Sami people in Sweden, working on issues affecting Sami language, culture, and traditional livelihoods.',
            email: 'parliament@sametinget.test',
            website: 'https://sametinget.se',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgssp-logo.jpg'
        },
        {
            id: 'union-saami-people-sweden',
            name: 'Union of Saami People in Sweden',
            about: 'Advocacy organization defending Sami land rights and traditional reindeer herding practices in Sweden.',
            email: 'union@samernas.test',
            website: 'https://sapmi.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgusps-logo.jpg'
        },
        {
            id: 'sami-rights-movement',
            name: 'Sami Rights Movement',
            about: 'Grassroots movement advocating for Sami self-determination and protection of traditional territories across the Arctic.',
            email: 'rights@samirights.test',
            website: 'https://samirights.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgsrm-logo.jpg'
        },
        {
            id: 'alta-action-group',
            name: 'Alta Action Group',
            about: 'Environmental and indigenous rights group that protested the Alta Dam project in Norway during the late 1970s and early 1980s.',
            email: 'action@altaaction.test',
            website: 'https://altaaction.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgaag-logo.jpg'
        },
        {
            id: 'national-coalition-racism-sports',
            name: 'National Coalition on Racism in Sports and Media',
            about: 'Coalition working to eliminate offensive Native American caricatures, logos, and nicknames from sports teams and media representations.',
            email: 'coalition@antiracismsports.test',
            website: 'https://antiracismsports.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svgncrsm-logo.jpg'
        },
        {
            id: 'us-congress-native-caucus',
            name: 'Congressional Native American Caucus',
            about: 'Bipartisan caucus in the U.S. Congress working to advance Native American interests and address issues affecting tribal communities.',
            email: 'caucus@nativecongress.test',
            website: 'https://nativecongress.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'
        },
        {
            id: 'indigenous-musicians-collective',
            name: 'Indigenous Musicians Collective',
            about: 'Network of Indigenous musicians and artists preserving and promoting traditional music while creating contemporary Indigenous art.',
            email: 'collective@indigenousmusic.test',
            website: 'https://indigenousmusic.test',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'
        }
    ],
    events: [
        {
            id: 'event-001',
            name: 'Global Indigenous Environmental Summit',
            date: new Date('2024-06-21'),
            attendeeIds: ["person-01", "person-02", "person-07", "person-09", "person-013"]
        },
        {
            id: 'event-002',
            name: 'Arctic Climate Action Conference',
            date: new Date('2024-03-15'),
            attendeeIds: ["person-06", "person-013", "person-014"]
        },
        {
            id: 'event-003',
            name: 'Indigenous Water Rights Symposium',
            date: new Date('2024-08-10'),
            attendeeIds: ["person-01", "person-04", "person-011"]
        },
        {
            id: 'event-004',
            name: 'Traditional Medicine Keepers Gathering',
            date: new Date('2024-09-22'),
            attendeeIds: ["person-05", "person-09", "person-012"]
        },
        {
            id: 'event-005',
            name: 'Youth Indigenous Leadership Workshop',
            date: new Date('2024-07-01'),
            attendeeIds: ["person-03", "person-010", "person-08"]
        },
        {
            id: 'event-006',
            name: 'Sacred Sites Protection Rally',
            date: new Date('2024-04-22'),
            attendeeIds: ["person-07", "person-015", "person-04"]
        },
        {
            id: 'event-007',
            name: 'Amazon Forest Defenders Conference',
            date: new Date('2024-05-30'),
            attendeeIds: ["person-09", "person-010"]
        },
        {
            id: 'event-008',
            name: 'Indigenous Democracy and Voting Rights Summit',
            date: new Date('2024-10-15'),
            attendeeIds: ["person-03", "person-05"]
        }
    ]
};
export default firstNationsActivistsData;
//# sourceMappingURL=index.js.map