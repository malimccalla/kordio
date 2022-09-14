import { nanoid } from 'nanoid';
import { v4 } from 'uuid';

import * as categories from '../categories';
import { jobsTrainingAndCareersCompanies } from './jobsTrainingAndCareers';
import { lawAndBusinessCompanies } from './lawAndBusiness';
import { livePerformanceCompanies } from './livePerformance';
import { merchAndPhysicalCompanies } from './merchAndPhysical';
import { pressAndPRCompanies } from './pressAndPR';
import { publishingAndSyncCompanies } from './publishingAndSync';
import { radioBlogsAndMediaCompanies } from './radioBlogsAndMedia';
import { recordLabelCompanies } from './recordLabels';
import { studiosAndProductionCompanies } from './studiosAndProduction';
import { technologyCompanies } from './technology';

export const companies = [
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c57 }] },
    name: 'CD Baby',
    website: 'http://welcome.cdbaby.com/succeed-on-your-terms/',
    contactEmail: 'uk@cdbaby.com',
    phoneNumber: '',
    note: 'Sign up for a free CD Baby account and distribute a free single to digital platforms! Just enter code "KORDIO22" at the checkout stage. No subscription fees or recurring costs.',
    description:
      'Proudly working on behalf of over 1 million independent artists worldwide, CD Baby gets independent artists paid in all the ways musicians earn money today, across streaming, download, video monetisation, physical sales, publishing royalties, sync licensing and more.',
    address: 'Tileyard Rd, London N7 9AH, United Kingdom',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c47 },
        { categoryId: categories.c20 },
        { categoryId: categories.c56 },
      ],
    },
    name: '!K7 Music',
    website: 'http://www.k7.com/',
    contactEmail: 'http://k7.com/contact/',
    phoneNumber: '+49 (0) 30 469 05 05 – 0',
    note: '',
    description:
      '!K7 Music is a multi-faceted music company in Berlin, London and New York. Provide global marketing, sales and distribution services to a like-minded group of labels and artists from around the globe. Also provide artist management and licensing services, as well as running a group of labels. Refer to listings in Artist Managers and Music Publishing sections for details. See also listing for !K7 Records in Record Labels section.',
    address:
      '217, Chester House Kennington Park,\n1-3 Brixton Road SW9 6DE, London, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c58 }, { categoryId: categories.c57 }],
    },
    name: 'EPM Music',
    website: 'http://www.epm-music.com/',
    contactEmail: 'jonas@epm-music.com',
    phoneNumber: '020 8931 5046',
    note: '',
    description:
      'Digital distribution service of Electronic releases on a global level. Also deal in promotions and rights management, contact for further details.',
    address: '141 Framfield Rd, London W7 1NQ, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c57 }] },
    name: 'FreshTunes',
    website: 'http://www.freshtunes.com/',
    contactEmail: 'info@freshtunes.com',
    phoneNumber: '',
    note: '',
    description:
      'Digital music distribution platform that helps artists get their tracks on major streaming services like Spotify, iTunes, Amazon Music and many more for free. No fees or hidden costs.',
    address: 'London, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    name: 'Outpost Distribution',
    categories: {
      create: [{ categoryId: categories.c57 }, { categoryId: categories.c27 }],
    },
    website: 'http://www.outpostmedia.co.uk/',
    contactEmail: 'hi@outpostmedia.co.uk',
    phoneNumber: '',
    note: '',
    description:
      'Digital distribution and playlist pitching. Submit music links via email, alongside a bio and any other supporting info. Also provide PR services under the same name, refer to separate listing for details.',
    address:
      "Impact Hub King's Cross\n34b York Wy, London N1 9AB, United Kingdom",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c57 }, { categoryId: categories.c44 }],
    },
    name: 'Cargo Records',
    website: 'http://www.cargorecords.co.uk/',
    contactEmail: 'info@cargorecords.co.uk',
    phoneNumber: '020 7731 5125',
    note: '',
    description:
      "One of the UK's leading distributors, dealing with independent acts and small labels, as well as more established labels and artists. Services cover both physical and digital distribution.",
    address: "17 Heathman's Rd, London SW6 4TJ, UK",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c57 }, { categoryId: categories.c49 }],
    },
    name: 'Pressology',
    website: 'http://www.pressology.net/',
    contactEmail: 'info@pressology.net',
    phoneNumber: '+393497840021',
    note: '',
    description:
      'International physical distribution including vinyl pressing, CDs and cassettes, and digital distribution to all major platforms. Specialise in distribution for Electronic, Dance, Hip-Hop and Trap but can work with any genre. Previous experience in working with emerging bands and small labels, along with larger operations. Also provide artist management services, see separate listing for details.',
    address: '36 Falmer Rd, London N15 5BA, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c57 }] },
    name: 'Stem',
    website: 'http://www.stem.is/',
    contactEmail: 'hello@stem.is',
    phoneNumber: '',
    note: '',
    description:
      'Stem offers digital distribution to all of the major platforms, working primarily with independent artists and labels, across the spectrum of genres. Currently work with a handful of Hip-Hop, Country labels, as well as labels and hundreds of independent musicians of all genres. Stem provides playlist pitching services, and can offer introductions to PR companies, agents, creative directors and lawyers.',
    address: 'London, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c57 }, { categoryId: categories.c28 }],
    },
    name: 'Ingrooves',
    website: 'http://www.ingrooves.com/',
    contactEmail: 'info@ingrooves.com',
    phoneNumber: '020 3540 6290',
    note: '',
    description:
      'Worldwide digital and physical distribution. Artists and record labels enquiring about the service can fill in the appropriate forms via the website above. Accept all genres.',
    address: "The Loom\n14 Gower's Walk, London E1 8PY, United Kingdom",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c56 }],
    },
    name: 'MN2S',
    website: 'http://www.mn2s.com/',
    contactEmail: 'chris@mn2s.com',
    phoneNumber: '020 7234 9458',
    note: '',
    description:
      'MN2S provide digital music distribution and label services to a select group of independent record labels and artists ambitious to grow in a global market. Their services aim to maximise royalties while realising creative vision. Work with carefully chosen labels/artists across a broad spectrum of genres, assisting with digital music distribution, rights management, licensing, sync, social media and design services. For music submissions, send links to streams or downloads via the above email address. Do not accept MP3 attachments. See also separate listing in Booking Agents section.',
    address: 'The Ministry\n79-81 Borough Rd, London SE1 1DN, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c51 }, { categoryId: categories.c41 }],
    },
    name: 'The Academy Of Contemporary Music (London)',
    website: 'http://www.acm.ac.uk/',
    contactEmail: 'enquiries@acm.ac.uk',
    phoneNumber: '01483\n  500800',
    description:
      "ACM is made up of more than 2,300 performers, producers, songwriters, artists, business executives, game developers and technical services personnel across their 3 campuses in London, Guildford and Birmingham. Over 550 staff members available to guide students through their studies. ACM's dual professional tutors hold collective credits that include Queen, Motorhead, Johnny Marr, Chase & Status, Stormzy, The Spice Girls, David Bowie, to name a few. Students also get free bookable rehearsal and recording space in their state of the art facilities, plus exclusive excess to recording studio environments. For further information information and details of the courses ACM offer, refer to the above website or contact the Academy.",
    address: "Biko House\nBiko House, 16 Bromell's Rd, London SW4 0BG, UK",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c59 }, { categoryId: categories.c41 }],
    },
    name: 'Garnish Music Production School',
    website: 'http://www.garnishmusicproduction.com/',
    contactEmail: '',
    phoneNumber: '020 8638 5587',
    description:
      'Boutique music production and sound engineering college specialising in music production courses. Courses offered for beginners through to professionals. All genres covered. Music business and songwriting courses also offered.',
    address: 'ARTHAUS\n203 Richmond Rd, London E8 3NJ, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c59 }, { categoryId: categories.c60 }],
    },
    name: 'The Songwriting Academy Ltd.',
    website: 'http://www.thesongwritingacademy.co.uk/',
    contactEmail: 'admin@thesongwritingacademy.co.uk',
    phoneNumber: '0330 010 0500',
    description:
      "The Songwriting Academy provides everything a songwriter needs to know about songwriting, production and the music business. Able to guide students through the entire songwriting process from the spark of creation to getting your songs 'out there'. Provide workshops, retreats, seminars, song appraisals, networking opportunities and mentoring to help you with writing, producing, publishing, record deals, management and understanding today's music business. Diverse and passionate team of experts with proven track records and decades of experience. The team includes Grammy and Ivor Novello winning writers that have written hits for Beyonce, Shakira, Christina Aguilera, Backstreet Boys, Kylie Minogue, LeAnn Rimes, Jennifer Lopez, George Benson, Will Young, EMF, Kenny Rogers, The Saturdays, Lulu, Celine Dion, Seal, Leona Lewis and X-Factor/Idol winners worldwide.",
    address:
      'Resource Groups Company\v4() House, 152 - 160 City Rd, London EC1V 2NX, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c59 },
        { categoryId: categories.c60 },
        { categoryId: categories.c41 },
      ],
    },
    name: 'SoundSkool',
    website: 'http://www.soundskool.co.uk/',
    contactEmail: 'sam.conley@soundskool.co.uk',
    phoneNumber: '07539 538850',
    description:
      'Music industry access college offering courses at level 3; Music Production & Business (covering tuition in Logic Pro etc.) and Artist Development & Business (covering singing, songwriting, rapping and performance). Students can be between 16 and 18 years old. All courses are free of charge.',
    address: '213 Haverstock Hill, Belsize Park, London NW3 4QP, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c59 }, { categoryId: categories.c41 }],
    },
    name: 'Tileyard Education',
    website: 'http://www.tileyardeducation.co.uk/',
    contactEmail: 'info@tileyardeducation.co.uk',
    phoneNumber: '07902 792740',
    description:
      'Tileyard Education is a postgraduate and professional education centre based at Tileyard London, the largest independent music community in Europe. Their validated, full-time Master of Arts Programmes and short courses exclusively connect you with artists, producers and businesses based at Tileyard, including Spitfire Audio, Autonomy, Beats One, The Prodigy, Lily Allen, Sigala, Platoon, Dru Masters, Sondr, Martyn Ware, Maverick, Notting Hill Music, Focusrite, Key Production, Sound Advice and many more.',
    address: 'Tileyard London\nTileyard Rd, London N7 9AH, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    name: 'Sounds Red Studios',
    categories: {
      create: [{ categoryId: categories.c40 }],
    },
    website: '',
    contactEmail: 'soundsred@ntlworld.com',
    phoneNumber: '07956 420 711',
    description:
      'Guitar and vocal tuition. Either individual lessons or friendly group singing classes. Can provide vocal coaching for musical theatre productions, assistance with microphoneNumber techniques for stage and studio, plus preparation for auditions and recording sessions. Guitar tuition and help with songwriting. Multi-track digital recording facilities.',
    address: 'Beckenshaw Gardens\nBanstead SM7 3NB, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c59 }, { categoryId: categories.c40 }],
    },
    name: 'London School of Sound',
    website: 'http://www.londonschoolofsound.co.uk/',
    contactEmail: 'info@londonschoolofsound.co.uk',
    phoneNumber: '',
    description:
      'Non-profit independent college specialised in adult education for the creative industries. Courses and individual training in music technology, production and engineering. Wide range of professional training and education solutions in sound-related subjects from customised sessions of just a few hours to a full time 2 year Diploma, and everything in between. Contact during office hours to arrange a visit and discuss your needs.',
    address: "Biko House\nBiko House, 16 Bromell's Rd, London SW4 0BG, UK",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c61 }, { categoryId: categories.c62 }],
    },
    name: 'London Music Conference',
    website: 'http://www.londonmusicconference.org/',
    contactEmail: 'info@londonmusicconference.org',
    phoneNumber: '',
    description:
      'Conference and showcase festival for Electronic music, featuring a diverse range of experiences and events incorporating gigs, networking and industry panels.',
    address: 'London, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c59 }],
    },
    name: 'Music Business School (London) Ltd.',
    website: 'http://www.musicbusinessschool.co.uk/',
    contactEmail: 'steve@musicbusinessschool.co.uk',
    phoneNumber: '',
    description:
      "Offer Managing a Music Business Enterprise (MMBE), a fast track short course recognised by the music industry. The course lasts a total of 13 weeks, committing to 1 day per week. It covers an A to Z of the music business and how the industry works, with real issues and debates every week. From copyright to contracts to contacts, all is covered. All courses include Music Business School's exclusive Guest Presenter Programme which puts you in a room with some of the UK's leading music business executives, providing direct answers relevant to your situation.",
    address: '41 Tileyard Rd, London N7 9AH, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c41 }, { categoryId: categories.c63 }],
    },
    name: 'The Midi Music Company',
    website: 'http://www.themidimusiccompany.co.uk/',
    contactEmail: 'admin@themidimusiccompany.co.uk',
    phoneNumber: '020 8694 6093',
    description:
      'The Midi Music Company (MMC) is a music education and artist development charity established in 1995 to provide instrumental tuition, evening short courses for 16+ years, bespoke outreach projects, music business seminars, events and a unique creative industries careers advice service, CICAS, specifically for 16-30s interested in developing professional careers in the music industry, theatre, film, TV and the performing arts.',
    address: "77 Watson's St, London SE8 4AU, UK",
  },
  ...lawAndBusinessCompanies,
  ...livePerformanceCompanies,
  ...merchAndPhysicalCompanies,
  ...pressAndPRCompanies,
  ...publishingAndSyncCompanies,
  ...radioBlogsAndMediaCompanies,
  ...recordLabelCompanies,
  ...studiosAndProductionCompanies,
  ...technologyCompanies,
];
