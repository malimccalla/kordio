import { nanoid } from 'nanoid';
import { v4 } from 'uuid';

import * as categories from '../categories';

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
  // Law and business
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Angel & Co.',
    website: 'http://www.legalangel-uk.com/',
    contactEmail: 'npa@legalangel-uk.com',
    phoneNumber: '020 7495 0555',
    description:
      'Experienced law firm offering advice on all aspects of the music industry.',
    address:
      'Audley Square House\n5 Audley Square, London W1K 1DS, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c24 }, { categoryId: categories.c23 }],
    },
    name: 'Leonard Lowy & Co. Solicitors',
    website: 'http://www.leonardlowy.co.uk/',
    contactEmail: 'lowy@leonardlowy.co.uk',
    phoneNumber: '020 7788 4333',
    description:
      'Music law and business specialists covering all aspects of the industry, advising labels, publishers, managers, artists, songwriters, producers, online retailers, distributors, promoters, agents, merchandisers and others. Also practical advice for new start-ups. Extensive experience, including "in-house" at major label. 50% discount on band member agreements for bands that also instruct the firm on recording, production, management or publishing contracts. Competitive rates, many jobs can be done for a fixed fee as opposed to hourly rate. Free of charge initial meeting at Leonard Lowy & Co. offices, by appointment only.',
    address: '87 Bayham St, London NW1 0AG, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'New Media Law LLP',
    website: 'http://www.newmedialaw.biz/',
    contactEmail: 'ian.penman@newmedialaw.biz',
    phoneNumber: '020 7291 1670',
    description:
      'Offer expert advice to clients based on first hand experience in the music industry. Advise established record companies, music publishers, managers and internationally recognised artists and songwriters, as well as those trying to break into the music industry.',
    address: '24 Hanover Square, London W1S 1JD, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Music Law Contracts',
    website: 'http://www.musiclawcontracts.com/',
    contactEmail: 'info@musiclawcontracts.com',
    phoneNumber: '07497 544868',
    description:
      'Each year Music Law Contracts supply over 700 labels, studios, agents, songwriters, and other music industry professionals with premium quality music contracts, allowing them to focus on making great music with peace of mind that they are protected. Provide music contract templates, agreement drafting and customisation. Free after-support with a music legal advisor.',
    address: '454 Kingsland Rd, London E8 4AE, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Sound Advice (Legal) LLP',
    website: 'http://www.soundadvicellp.com/',
    contactEmail: 'legal-info@soundadvicellp.com',
    phoneNumber: '020 7619 6400',
    description:
      "Boutique law firm working solely with music industry clients. Offer commercial advice, strategy and contract negotiation in all aspects of an artist's and/or a manager's business, both in the physical and digital worlds. Refer to the above website for full details of services.",
    address: 'Tileyard Rd, London N7 9AH, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Independent Music Law Advice (IMLA)',
    website: 'http://www.musiclawadvice.co.uk/',
    contactEmail: 'elliot@musiclawadvice.co.uk',
    phoneNumber: '07748 593758',
    description:
      'IMLA is run by a fully qualified music law adviser with over 15 years of experience in music, media and entertainment law, specialising in representing artists, labels, management and publishers. Any enquiries from record labels, artists, producers, publishers and management companies, among others can be directed to Elliot. He carries out a lot of contract drafting and analysis work for signed and unsigned acts, and is also available to help with management, online distributors and record company dealings. Elliot provides a variety of services and information on all areas of music law including contract drafting and analysis, copyright law, record deals, management deals, publishing deals, syncing opportunities and band agreements.',
    address: '14 Vane Cl, London NW3 5UN, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c24 }, { categoryId: categories.c20 }],
    },
    name: 'James Joseph Music Management',
    website: 'http://www.jamesjoseph.co.uk/',
    contactEmail: 'jj3@jamesjoseph.co.uk',
    phoneNumber: '020 8874 8647',
    description:
      'As well as providing legal advice James Joseph also provide management services. See separate listing for more details.',
    address: '85 Cicada Rd, London SW18 2PA, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    name: 'NMD Solicitors',
    categories: {
      create: [{ categoryId: categories.c24 }, { categoryId: categories.c23 }],
    },
    website: 'http://www.nmdsolicitors.com/',
    contactEmail: 'nmd@nmdsolicitors.com',
    phoneNumber: '020 3427 3007',
    description:
      'Provide expert advice that is commercial and creative. Areas of expertise include publishing, recording/production and management agreements, producer agreements, artist development, licensing, digital distribution/online exploitation, social media/influencer agreements, clearance/retention and exploitation of rights and royalty collection.',
    address:
      'Workspace® | Canalot Studios\n222 Kensal Rd, London W10 5BN, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Sheridans',
    website: 'http://www.sheridans.co.uk/',
    contactEmail: 'bharvey@sheridans.co.uk',
    phoneNumber: '020 7079 0100',
    description:
      "Specialists in the music and entertainment industry for over 50 years. Primarily represent artists and their management, but also act for independent record companies and music publishers. Many of Sheridan's clients are household names, and have been with them from the start of their careers. Sheridans also have specialist teams across a range of other sectors, see above website for details.",
    address: '76 Wardour St, London W1F 0UR, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c24 }] },
    name: 'Simkins LLP',
    website: 'http://www.simkins.com/people/ed-weidman',
    contactEmail: 'ed.weidman@simkins.com',
    phoneNumber: '020 7874 5648',
    description:
      'Leading media and commercial law firm offering a full range of legal services to corporate and individual clients operating in a broad range of industries. Best known for market-leading practice in media and entertainment including music. Provides contract drafting and negotiation services, undertakes advisory work and handles disputes in all of these areas.',
    address: 'Lynton House\n7-12 Tavistock Square, London WC1H 9LT, UK',
  },
  // ...merchAndPhysicalCompanies,
  {
    slug: nanoid(6),
    id: v4(),
    name: 'Terrible',
    categories: { create: [{ categoryId: categories.c15 }] },
    website: 'https://terrible.group/',
    contactEmail: 'https://terrible.group/sayhi',
    description:
      'We’re artists, apparel designers and entrepreneurs making, managing and moving physical products online and in person for the greatest creators on the planet*',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Teemill',
    website: 'https://teemill.com/',
    contactEmail: 'hello@teemill.com',
    description:
      "Teemill contains all the tech necessary to connect up with it and build a business. Big stuff like access to our print-on-demand t-shirt factories and organic materials. And little stuff like online design tools. And er, medium stuff. Like the ability to design your own products and build your own website and online store for free. It's everything you need to start a sustainable brand online in one handy application. And it's free.",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Teespring',
    website: 'https://teespring.com/',
    contactEmail: 'via website',
    description:
      'A simple solution for creating and selling products that engage your fans and help you monetize your content. No cost, no hassle, no risk.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Gooten',
    website: 'https://www.gooten.com/',
    contactEmail: 'https://help.gooten.com/hc/en-us/requests/new',
    description:
      'Gooten is a globally distributed company that operates a smart supply chain for brands that are looking to utilize on-demand manufacturing to transform the way they do business.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Printful',
    website: 'https://www.printful.com/',
    contactEmail: 'support@printful.com',
    description:
      'Printful is a fast-growing on-demand merch company based in Charlotte. And fun fact: Two Story Melody’s own overwhelmingly dope merch is made and sold using Printful (so unsurprisingly, we’re an affiliate with them).',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Printify',
    website: 'https://printify.com/',
    contactEmail: 'https://help.printify.com/hc/en-us/requests/new',
    description:
      'Printify is a transparent print-on-demand network that helps merchants make more money in a simple and easy way.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Hello, Merch',
    website: 'https://www.hellomerch.com/',
    contactEmail: 'https://www.hellomerch.com/pages/services',
    description:
      'Started in 2008 as an outlet for bands, musicians, creative artists and businesses to manufacture and sell merchandise anywhere, without giving up their rights.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    name: 'Hello Screen Printing',
    categories: { create: [{ categoryId: categories.c15 }] },
    website: 'https://www.helloscreenprinting.com/',
    contactEmail: 'https://www.hellomerch.com/pages/services',
    description:
      'Hello Merch in-house screen printing team and trusted merchandise partners can create unlimited, affordable custom products in no time! Always fair and no rush fees ever.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    name: 'Fanbace',
    categories: { create: [{ categoryId: categories.c15 }] },
    website: 'https://www.fanbace.com/',
    contactEmail: 'mark@fanbace.com',
    description:
      'Monetise an engaged global fanbase. Start selling Merch in minutes, without risk, upfront costs or limits! CONVERT AN ENGAGED AUDIENCE INTO LOYAL CUSTOMERS',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: { create: [{ categoryId: categories.c15 }] },
    name: 'Dreamship',
    website: 'https://dreamship.com/en/',
    contactEmail: 'nick@dreamship.com',
    description: 'The new standard in print-on-demand',
  },
  // ...pressAndPRCompanies,
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c28 }],
    },
    name: 'The Playground PR',
    website: 'http://www.theplayground.co.uk/',
    contactEmail: 'info@theplayground.co.uk',
    phoneNumber: '020 3868 2987',
    note: '',
    address: '86-90 Paul Street London EC2A 4NE',
    description:
      'THE PLAYGROUND PR is a full service traditional PR and Digital Marketing Agency focussing on the cornerstones of a well represented brand. We understand the importance of well crafted Album sleeve, music video using our design skills to to achieve a coherent, consistent and competitive product including Album Artwork, Logo Design, Professional photo shoots with post-production, Professional video shoots, Event/Tour Posters.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c27 }],
    },
    name: 'Copacetic PR',
    website: 'http://www.copaceticpr.com/',
    contactEmail: 'lucius@copaceticpr.com',
    phoneNumber: '07823 880851',
    note: '',
    address: 'London, UK',
    description:
      'Music and events publicity agency based in London and Singapore. Copacetic can provide national promotion for press and online, as well as radio and Spotify playlist plugging. Specialising in Electronic, Indie, Pop and Urban artists, they have worked with the likes of Kitsuné, Goldie, Zero 7, Yamaha, Boys Noize, Libertines, GoGo Penguin, Thievery Corporation and ULTRA Music.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c27 }],
    },
    name: 'Infectious PR',
    website: 'https://infectiouspr.com/',
    contactEmail: 'newbiz@infectiouspr.com',
    phoneNumber: '',
    note: '',
    address: 'Bristol, UK',
    description:
      'We’ve crafted global campaigns for some of the world’s biggest talent across Pop, Dance and Hip Hop, delivering great music to influential ears on a daily basis. Our team has worked on the most streamed record in the world, given a platform for independent artists to launch their own albums to huge success, built record labels from the ground up into the most successful in their lane, and we’ve had an amazing time doing it.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c26 },
        { categoryId: categories.c28 },
        { categoryId: categories.c29 },
      ],
    },
    name: 'Different Sauce',
    website: 'https://www.differentsauce.co.uk/',
    contactEmail: 'aidan@differentsauce.co.uk',
    phoneNumber: '+447896614 744',
    note: '',
    address: 'The Rattle LTD, Tobacco Quay, Wapping Ln, London E1W 2SF',
    description:
      'Our service connects your music with some of the most influential journalists, playlist curators and TikTok creators in the game.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c28 }],
    },
    name: 'Listen Up',
    website: 'http://www.listen-up.biz/v',
    contactEmail: 'info@listen-up.biz',
    phoneNumber: '020 3588 6200',
    note: '',
    address: 'Unit 7 21 Bonny St, London NW1 9PE, UK',
    description:
      'Listen Up provides a bespoke 360 promotional service offering radio, club, online and print campaigns in the UK and worldwide, consistently delivering results to clients in a diverse range of musical genres. Refer to website for a full roster of current clients.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }],
    },
    name: 'Additive PR',
    website: 'http://www.additivepr.com/',
    contactEmail: 'greg@additivepr.com',
    phoneNumber: '07701 045592',
    note: '20% OFF YOUR FIRST CAMPAIGN WITH ADDITIVE MUSIC PR',
    address: 'London, UK',
    description:
      'Provide national press, online and club/radio promotion, specialising in Electronic music but working across various genres including Hip-Hop, Grime and Indie Pop. Previous and current clients include Island Records, Sony Music, Steve Bug, Mark Knight, Noah Carter, Tough Love, DJ Zinc, Doorly, KING, Joey Negro, DJ S.K.T, and Decca.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c29 }],
    },
    name: 'Sliding Doors',
    website: 'http://www.slidingdoors.biz/',
    contactEmail: 'james@slidingdoors.biz',
    phoneNumber: '07957 690652',
    note: '',
    address: 'London, UK',
    description:
      'Since 2000, Sliding Doors has consistently worked with cutting edge music, events and brands. We offer an infectious blend of enthusiasm, creativity and tenacity, alongside years of experience and wide-ranging contacts. We deliver results and do it with a smile.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }],
    },
    name: 'High Violet PR & plugging',
    website: 'https://www.highvioletprandplugging.com/',
    contactEmail: 'sean@highvioletprandplugging.com',
    phoneNumber: '+447366 860680',
    note: '',
    address: 'Manchester, England',
    description:
      "High Violet is run by Seán Crossey and is based in Manchester, England. After running Blue Soap Music successfully for many years, Seán decided to start up High Violet (it was basically a name change). Since then, he's been working with Kool Keith, The Waterfront (The Stone Roses), Soup from Jurassic 5, 808 State, Babybird, The Mouse Outfit, Twisted Wheel, Space, Andy Cooper from Ugly Duckling, Secret Shine, The Winachi Tribe, The High, Aslan's Christy Dignam & Hooligan, Buzzcocks, Alias Kid, Kids On Bridges, Dub Phizix, Crazy P, Northern Uproar, Gary Daly (China Crisis) and Hafdis Huld (Gus Gus, Tricky) amongst  many more.",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c28 }],
    },
    name: 'Saint In The City PR',
    website: 'http://www.saintinthecitypr.com/',
    contactEmail: 'info@saintinthecity.com',
    phoneNumber: '',
    note: '25% OFF PLAYLIST PROMOTION AND/OR RADIO PLUGGING CAMPAIGNS',
    address:
      'LG4U UK First Floor, 85 Great Portland St, London W1W 7LT, United Kingdom',
    description:
      "Saint In The City PR offer streaming, press and radio promotion for your release. Work with Rock, Indie, Pop, Americana, Country, R 'n' B and Folk and specialise in getting fantastic results for independent labels and emerging/unsigned artists. See the website above for sample campaign results/examples including hundreds of major Spotify playlists, BBC Radio 1, BBC Radio 2, BBC 6Music, Radio X, Clash, Kerrang!, Alt Press, Uncut Magazine, Mojo Magazine, Classic Rock Magazine, Billboard and many more. Accept digital submissions only, email with links to SoundCloud, YouTube or Dropbox instead of attachments.",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c26 },
        { categoryId: categories.c28 },
        { categoryId: categories.c23 },
      ],
    },
    name: 'Prescription PR',
    website: 'http://www.prescriptionpr.co.uk/',
    contactEmail: 'https://www.prescriptionmusicpruk.com/general-enquiries/',
    phoneNumber: '+44 (0) 1223 505328',
    note: '',
    address: 'Kemp House, 152 City Rd, London EC1V 2NX, United Kingdom',
    description:
      'Leading UK music PR, music promotion and digital marketing agency based in London, Cambridge and Manchester. Offer innovative, cost-effective campaigns for independent artists and record labels, large and small. Current and recent clients include Andrew Weatherall, IDLES, Fontaines D.C., Vagabon, Black Country, New Road, Dry Cleaning, Black Lips, Sonic Youth, Billy Bragg, Glen Hansard, Placebo, Slint, Broken Social Scene, Richard Thompson, Weezer and record labels including Universal, ANTI-, Mute, Warp, Polyvinyl, Speedy Wunderground and Ninja Tune. Also have offices in Cambridge and Manchester, see separate listings for details.',
  },
  // ...publishingAndSyncCompanies,
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'Notting Hill Music',
    website: 'http://www.nottinghillmusic.com/',
    contactEmail: 'leo@nottinghillmusic.com',
    phoneNumber: '020 7243 2921',
    description:
      'World class music publishing working with musicians from all genres. Submissions are accepted marked FAO Leo by email. Prefer to receive SoundCloud links or similar with short biog. Do not accept MP3s or physical demos.',
    address: 'Tileyard Rd, London N7 9AH, United Kingdom',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'Sony Music Publishing UK Ltd.',
    website: 'http://www.sonymusicpub.com/',
    contactEmail: 'sync_marketing.uk@sonymusicpub.com',
    phoneNumber: '+44 (0) 203 059 3059',
    description:
      'Sony Music Publishing is home to the world’s best songwriters, with classic catalogues including The Beatles, Queen, Motown, Carole King, Leiber & Stoller, Leonard Cohen, Stevie Wonder, Michael Jackson and The Rolling Stones, as well as beloved contemporary songwriters such as Ed Sheeran, Beyoncé, Lady Gaga, Olivia Rodrigo, Calvin Harris, Daddy Yankee, Gabby Barrett, Jay-Z, Ye, Luke Bryan, Maluma, Marc Anthony, Miranda Lambert, Pharrell Williams, Rihanna, Sara Bareilles, Sean "Love" Combs, Travis Scott and many more.',
    address: '22 Berners St, London W1T 3LP, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'Enhanced Music Publishing',
    website: 'https://enhancedmusicpublishing.com/',
    contactEmail: 'info@enhancedmusicpublishing.com',
    phoneNumber: '+44 207 613 2708',
    description:
      'Enhanced Music Publishing is an independent, global music publisher based in London, operating at the forefront of discovering and nurturing talented writers, producers and artists. We pride ourselves with our commitment to providing a personalised, attentive support service to both the writers and clients we work with to maximise results.',
    address: '9 Suna House, 65 Rivington Street London EC2A 3QQ UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    name: 'Universal Music Publishing',
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    website: 'http://www.umusicpub.com/',
    contactEmail: 'holly.boston@umusic.com',
    phoneNumber: '020 3932 6565',
    description:
      'Predominantly work with writers and artists covering all genres of music who write their own material. Do not accept unsolicited material and suggest you submit your material through an established industry source (such as a manager, lawyer, publisher or producer) who has had previous contact with the company.',
    address: 'FourPancras Square\n4 Pancras Sq, London N1C 4AG, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }, { categoryId: categories.c56 }],
    },
    name: 'Kobalt Music Group Ltd.',
    website: 'http://www.kobaltmusic.com/',
    contactEmail: 'info@kobaltmusic.com',
    phoneNumber: '020 7401 5500',
    description:
      'Global independent music services company and leading independent music publisher offering unparalleled transparency, online global copyright administration, creative and sync/licensing services, digital collections and pipeline advances to writers, publishers and other publishing rightsholders. Clients include ZAYN, Tom Misch, Dua Lipa, Neil Finn, Julian Casablancas, De La Soul, Wolf Alice and many more. Refer to website for extensive list of artists. Contact via email before submitting any material.',
    address: 'The River Building\n1 Cousin Ln, London EC4R 3XJ, United Kingdom',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }, { categoryId: categories.c47 }],
    },
    name: 'West One Music Group Ltd.',
    website: 'http://www.westonemusicgroup.com/',
    contactEmail: 'a&r@westonemusic.com',
    phoneNumber: '020 7907 1500',
    description:
      "Global music agency, working in strategic partnership with clients and creating music of the highest calibre for the film, TV and gaming industries. From hard-hitting trailer cues to epic sweeping Hollywood scores, West One's A&R teams are constantly scouring the globe for the latest trends, talented composers and emerging artists to work with on upcoming projects. Submit your 3 strongest tracks via downloadable link (no CDs), plus a short biog to the above email address for consideration.",
    address: '28 Percy St, London W1T 2DB, UK',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }, { categoryId: categories.c58 }],
    },
    name: 'Beggars Music',
    website: 'https://beggarsmusic.com/',
    contactEmail: 'info@beggarsmusic.com',
    phoneNumber: '+44 (0) 20 8870 9912',
    description:
      'Beggars Music is completely focused on its writers and determinedly independent, administering its own rights in a full-service office backed with uniquely experienced management. We believe strongly that a publisher’s role is to add value to a writer’s life and career and that in order to do so we must remain at the forefront of developments in both technology and the industry itself.',
    address: '17-19 Alma Road London SW18 1AA',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'Bucks Music Group',
    website: 'http://www.bucksmusicgroup.com/',
    contactEmail: 'info@bucksmusicgroup.co.uk',
    phoneNumber: '020 7221 4275',
    description:
      'Independent music publisher with rich heritage. Submit a streaming link to your music via the contact form on the website. If the Bucks Music Group team are interested in discussing your demo, they will be in touch, but are unable to provide feedback to all.',
    address:
      "Office bulding (Roundhouse)\n212 Regent's Park Rd, Chalk Farm, London NW1 8AW, United Kingdom",
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'RAK Music',
    website: 'http://www.rakpublishing.com/',
    contactEmail: 'info@rakstudios.co.uk',
    phoneNumber: '+44 (0)20 7586 2012',
    description:
      "RAK Publishing Limited is an independent music publishing company operating from the prestigious RAK Studios building in London's St Johns Wood.",
    address: '42-48 Charlbert Street, St Johns Wood, London NW8 7BU',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c46 }],
    },
    name: 'Warner Chappell Music Ltd.',
    website: 'http://www.warnerchappell.com/',
    contactEmail: 'wcsync@warnerchappell.com',
    phoneNumber: '+44 20 7938 0000',
    description:
      'Global music publishing company of Warner Music Group with a roster including Muse, London Grammar, Royal Blood and Jay-Z. Do not accept unsolicited material and are far more likely to pay attention to bands approaching through an established manager or producer. Send solicited material in the post marked FAO A&R. See also separate listing for Warner Music Group in Record Labels section.',
    address: 'Electric Lighting Station\n46 Kensington Ct, London W8 5DA, UK',
  },
  // ...radioBlogsAndMediaCompanies,
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c38 }],
    },
    name: 'BBC Radio London (94.9 FM)',
    website: 'http://www.bbc.com/introducing',
    contactEmail:
      'https://www.bbc.co.uk/programmes/articles/5lvdZfbkPG7lbdRvDgtpwB7/what-is-bbc-music-introducing',
    phoneNumber: '020 7580 4468',
    description:
      'BBC Music Introducing in London every Saturday night from 8pm featuring the best emerging and unsigned music. Submit tracks via the Uploader.',
    address: 'Broadcasting House\nPortland Pl, London W1A 1AA, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c38 }],
    },
    name: 'Capital FM Network',
    website: 'http://www.capitalfm.com/',
    contactEmail: 'info@capitalfm.com',
    phoneNumber: '020 7054 8000',
    description:
      'Capital is a hit music radio station. Music submissions and biogs can be sent for consideration via the above email or postal address marked FAO Al Smith, Head of Music.',
    address: '30 Leicester Square, London WC2H 7JZ, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c38 }],
    },
    name: 'KISS FM',
    website: 'http://www.kissfmuk.com/',
    contactEmail: 'nathan.thomson@kissfmuk.com',
    phoneNumber: '020 7434 1215',
    description:
      'KISS broadcasts on FM and National DAB and specialises in Dance, Hip-Hop, R&B, and Pop, with specialist music programming each night across its schedule. Music can be submitted through show producers of the KISS team.',
    address: '1 Golden Square, London W1F 9HR, UK',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c38 }],
    },
    name: 'Reprezent',
    website: 'http://www.reprezent.org.uk/',
    contactEmail: 'info@reprezent.org.uk',
    phoneNumber: '020 7639 8512',
    description:
      'Reprezent Radio offer air time to unsigned artists across all shows. Send MP3s and biogs marked FAO Gavin to the email address. All genres considered.',
    address:
      'Pop Brixton\n49 Brixton Station Rd, London SW9 8PQ, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c35 }, { categoryId: categories.c36 }],
    },
    name: 'Line of Best Fit',
    website: 'https://www.thelineofbestfit.com/',
    contactEmail: 'editor@thelineofbestfit.com',
    phoneNumber: '',
    description:
      'As one of the world’s biggest independent music magazines, we are a trusted voice to millions of our readers, searching for their new favourite band.',
    address: '86-90 Paul St, London, Greater London EC2A 4NE, GB',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c36 }],
    },
    name: 'Pop Justice',
    website: 'https://www.popjustice.com/',
    contactEmail: 'peter.w.robinson@popjustice.com',
    phoneNumber: '',
    description:
      'Popjustice is a blog with ideas above its station. Popjustice gives pop precisely the amount of respect it deserves, which differs from song to song, popstar to popstar, week to week. Popjustice, like pop itself, is not as good as it used to be and precisely as good as it ever was depending on who you ask. Popjustice does not think pop = popular. Popjustice enjoys pop with a capital P; Popjustice is one word with a lower case ‘j’.',
    address: 'London, England, United Kingdom',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c35 }, { categoryId: categories.c36 }],
    },
    name: 'Ear Milk',
    website: 'https://earmilk.com/',
    contactEmail: 'david@earmilk.com',
    phoneNumber: '',
    description:
      'EARMILK is an online music publication based out of the United States & Canada which has an international appeal with its top cities being major metropolitan areas all over the world; topping that list – New York, Toronto, Los Angeles, London, Sydney, Chicago, Calgary, Paris, Vancouver and San Francisco.',
    address: 'San Francisco, CA 94114',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c35 }, { categoryId: categories.c39 }],
    },
    name: 'Pop Matters',
    website: 'https://www.popmatters.com/',
    contactEmail: 'editor@popmatters.com',
    phoneNumber: '',
    description:
      'PopMatters is an international magazine of cultural criticism and analysis, which has been independently owned and operated since its inception. With the mission to educate as well as entertain, our scope is broadly cast on all things pop culture and we are the largest site that bridges academic and popular writing in the world',
    address: 'Chicago, IL',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c35 }],
    },
    name: 'Clash Mag',
    website: 'https://www.clashmusic.com/',
    contactEmail: 'robin@clashmusic.com',
    phoneNumber: '',
    description:
      'ClashMusic.com is a definitive online guide to leading music and music trends – covering the best of breaking to established artists alongside news, reviews, features, photo galleries and video exclusives.',
    address: 'Dundee, UK',
  },
  // ...recordLabelCompanies,
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Island Records UK',
    website: 'https://www.islandrecords.co.uk/',
    contactEmail: 'islanddemos@umusic.com',
    address: 'Four Pancras Square\n4 Pancras Sq, London N1C 4AG, UK',
    note: 'If you’re looking to get your music heard by Island, we recommend visiting Spinnup.',
    description:
      'Island Records has spent the past 6 decades blessing the world with truly great artists and incredible music.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }, { categoryId: categories.c56 }],
    },
    name: 'AWAL',
    website: 'https://www.awal.com/',
    contactEmail: 'info@awal.com',
    address: 'The River Building\n1 Cousin Ln, London EC4R 3XJ, United Kingdom',
    note: '',
    description:
      'AWAL also known as "Artists Without A Label" is a British music distribution company owned by Sony Music Entertainment.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Domino Recording Company',
    website: 'https://www.dominomusic.com/uk',
    contactEmail: 'https://www.dominomusic.com/contact',
    address: 'SW18 1WD\nLondon, UK',
    note: '',
    description:
      'Domino Recording Company or simply Domino is a British independent record label based in London.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }, { categoryId: categories.c46 }],
    },
    name: 'B-unique',
    website: 'https://www.b-uniquerecords.com/',
    contactEmail: 'info@b-uniquerecords.com',
    address: '91 Peterborough Rd. London, England, SW6 3BU',
    note: '',
    description:
      'B-Unique Records is a London-based record label, and publishing company founded in 2001 by Mark Lewis and Martin Toher.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Decca Records',
    website: 'https://decca.com/',
    contactEmail: 'info@decca.com',
    address: 'Universal Music, 4 Pancras Sq\nN1C 4AG London, UK',
    note: '',
    description:
      'Decca Records is a British record label established in 1929 by Edward Lewis.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Dirty Hit',
    website: 'https://dirtyhit.co.uk/',
    contactEmail: 'info@dirtyhit.co.uk',
    address: '290-294 Latimer Rd, London W10 6QW, UK',
    note: '',
    description:
      'Dirty Hit is a British independent record label founded in December 2009 by Jamie Oborne, Chuck Waite, Brian Smith, and former England footballer, Ugo Ehiogu.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Ninja Tune',
    website: 'https://ninjatune.net/home',
    contactEmail: 'demos@ninjatune.net',
    address: 'NinjaTune HQ\nPO Box 4296 London SE11 4WW',
    note: '',
    description:
      'Ninja Tune is an English independent record label based in London.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Defected Records',
    website: 'https://defected.com/',
    contactEmail: 'demos@defected.com',
    address: '23 Curtain Rd, London EC2A 3LT, UK',
    note: '',
    description:
      'Defected Records is a British independent record label specialising in house music recordings, compilation albums, events, publishing, artist booking and management.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c44 }],
    },
    name: 'Mute Records',
    website: 'https://mute.com/',
    contactEmail: 'demos@mute.com',
    address: 'London, England',
    note: 'If you are submitting a demo, please do so by contactEmail and send no more than 4 streaming links where your music can be heard. We are unable to accept attachments so please do not send mp3′s or any other files, as they will not be listened to.',
    description:
      'Mute Records Ltd. is a British independent record label owned and founded in 1978 by Daniel Miller.',
  },
  // ...studiosAndProductionCompanies,
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c50 },
        { categoryId: categories.c49 },
        { categoryId: categories.c60 },
      ],
    },
    name: 'Hot Money Studios',
    website: 'https://hotmoneystudios.com/',
    contactEmail: 'info@hotmoneystudios.com',
    phoneNumber: '020 8798 0061',
    address: 'Studio A06 - Mainyard Studios, 92-94 Wallis Rd, London E9 5LN',
    note: '',
    description:
      "Record, mix & master with London's No.1 Recording Studio. We've been working with the biggest names in the industry for over 10 years and we're now open for public bookings so whether you're a major label artist or new to the game, we're here to help.",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c33 }],
    },
    name: 'The Premises',
    website: 'http://www.premisesstudios.com/',
    contactEmail: 'recordings@premisesstudios.com',
    phoneNumber: '020 7729 7593',
    address: '205-209 Hackney Rd, London E2 8JL, UK',
    note: '',
    description:
      "14 studios for recording and rehearsal, including Europe's first solar powered recording studio (Studio A). Vast selection of gear available from vintage outboard to grand pianos, drums, percussion and plug-ins. Engineers available for mixing, production and co-writing.",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c50 },
        { categoryId: categories.c49 },
        { categoryId: categories.c60 },
      ],
    },
    name: 'Metropolis Studios',
    website: 'http://www.thisismetropolis.com/',
    contactEmail: 'hello@thisismetropolis.com',
    phoneNumber: '020 8742 1111',
    address: 'The Power House\n70 Chiswick High Road London W4 1SY',
    note: '',
    description:
      'Metropolis houses 4 recording studios and 5 mastering suites, plus long term rental writing and production rooms. Fully equipped with Pro Tools HDX, lots of outboard, synths and backline. Also provide mastering services.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c33 },
        { categoryId: categories.c49 },
        { categoryId: categories.c50 },
      ],
    },
    name: 'Resident Studios',
    website: 'http://www.residentstudios.com/',
    contactEmail: 'info@residentstudios.com',
    phoneNumber: '020 8830 4321',
    address: '57A Windsor Rd, London NW2 5DT, UK',
    note: '',
    description:
      'Purpose built large studio complex with 3 control rooms, multiple live rooms and rehearsal rooms to suit all budgets and projects. Wide range of desks and monitoring including 32 Channel SSL G+ series equipped with PMC monitoring and Yamaha NS10s. Large live room available featuring Yamaha C3 Grand Piano with connections to multiple control rooms. Mac OS X operating system with Pro Tools HD 12 & Logic X available. Specialist voiceover/ADR capabilities available with LA610 Compressor, multiple screens and acoustically treated vocal booth. Discounted rates available for unsigned artists, including the services of a member of their skilled team of engineers and producers. Equipped to work in a variety of styles and genres for both production and engineering-based work. Previous clients include Sony, EMI and BBC. Guitars, synths, samplers and percussion available including vintage Rogers Kit.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c18 },
        { categoryId: categories.c49 },
        { categoryId: categories.c50 },
      ],
    },
    name: 'Soho Sonic Studios',
    website: 'http://www.sohosonic.com/',
    contactEmail: 'bookings@sohosonic.com',
    phoneNumber: '020 7193 4467',
    address: 'Golderbrock House\n15/19 Great Titchfield Street London W1W 8A',
    note: '',
    description:
      'Lounge and reception area equipped with a sofa, coffee machine and TV. Previous clients include Leona Lewis, Mann, Lethal Bizzle, Usher, Ryan Tedder, So Solid Crew and Idris Elba.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c18 },
        { categoryId: categories.c33 },
        { categoryId: categories.c50 },
      ],
    },
    name: 'Abbey Music Studios',
    website: 'http://www.abbeymusicstudios.co.uk/',
    contactEmail: 'info@abbeymusicstudios.co.uk',
    phoneNumber: '020 8312 4916',
    address: 'Atlas House\nLodge Hill, London SE2 0AY, United Kingdom',
    note: '',
    description:
      'Professionally equipped, clean and spacious studios. Large live rooms, large control room, separate drum and vocal booths. All live room PAs have Soundcraft 200b mixers and ASS speakers, as used in the London Astoria and London Palladium. Ample, free on-site parking.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c50 }],
    },
    name: 'Select Recording Studios',
    website: 'http://selectrecordingstudios.co.uk/',
    contactEmail: 'info@selectrecordingstudios.co.uk',
    phoneNumber: '020 8829 8929',
    address: 'Chocolate Factory 2\n4 Coburg Road Woodgreen London N22 6UJ',
    note: '',
    description:
      'Professional recording studio in North London consisting of control room, live room, drum room and vocal booth. Cater for all styles and have previously worked with the likes of Sinitta, Tom Meighan (Kasabian), James McCartney and Rupert Grint.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    name: 'RAK Studios',
    categories: {
      create: [{ categoryId: categories.c49 }, { categoryId: categories.c50 }],
    },
    website: 'http://www.rakstudios.co.uk/',
    contactEmail: 'helen@rakstudios.co.uk',
    phoneNumber: '020 7586 2012',
    address: '42-48 Charlbert Street, St\nJohns Wood, London NW8 7BU',
    note: '',
    description:
      'RAK houses 3 studios for live bands along with a smaller production studio. Accommodation, parking and catering available.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [
        { categoryId: categories.c49 },
        { categoryId: categories.c50 },
        { categoryId: categories.c60 },
      ],
    },
    name: 'Crown Lane Studio',
    website: 'http://www.crownlanestudio.co.uk/',
    contactEmail: 'john@crownlanestudio.co.uk',
    phoneNumber: '020 8540 5643',
    address: '8b Crown Ln, Morden SM4 5BN, UK',
    note: '10% OFF STUDIO BOOKING & MASTERING SERVICES',
    description:
      "Whether you're popping in to hire the podcast room, or producing a single, you're likely to meet some of the team, who would love to show you round and make sure you feel at home.",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c50 }, { categoryId: categories.c49 }],
    },
    name: 'The Digital Holdings',
    website: 'http://www.thedigitalholdings.com/',
    contactEmail: 'info@thedigitalholdings.com',
    phoneNumber: '020 8691 9191',
    address: 'Unit 3a/Elizabeth Trading Est/Juno Way, London SE14 5RW',
    note: 'SAVE MONEY ON RECORDING, MIXING & MASTERING, PLUS FILM/PHOTOGRAPHY STUDIO HIRE',
    description:
      'The Digital Holdings consists of 2 purpose-built recording spaces, a kitchen and a chillout area. Studio A has a live room and control room and Studio B consists of a control room and a small vocal booth.',
  },
  // ...technologyCompanies,
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Ableton',
    website: 'https://www.ableton.com/en/',
    contactEmail: 'contact@ableton.com',
    description:
      'We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'FL STUDIO',
    website: 'https://www.image-line.com/',
    contactEmail: 'https://www.image-line.com/contact/',
    description:
      "FL Studio is the result of over  20 years of continuous development, to become the fastest way from your brain to your speakers. Many of the world's top DJs and producers started by downloading the FL Studio trial, making their first beats in a bedroom studio",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Apple Logic Pro',
    website: 'https://www.apple.com/logic-pro/',
    contactEmail: 'https://getsupport.apple.com/',
    description:
      'Welcome to the next generation in sound. It’s never been easier to go beyond stereo and create fully immersive spatial audio mixes using integrated Dolby Atmos tools. Expand your songs into a vibrant three-dimensional experience and export to a Dolby Atmos file that’s compatible with Apple Music. Whether you’re working in a recording studio with a Dolby Atmos multispeaker system or using a notebook with AirPods Max for binaural monitoring of your surround mix, Logic Pro provides a spatial audio authoring workflow for everyone.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Steinberg Cubase',
    website: 'https://www.steinberg.net/cubase/',
    contactEmail: 'steinbergussupport@yamaha.com',
    description:
      'Steinberg has spearheaded music software development for over 30 years, and through Cubase, which started as a MIDI sequencer, introduced a whole generation to the block-based arrange screen now used in the majority of today’s DAWs.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'PreSonus Studio One',
    website: 'https://www.presonus.com/products/Studio-One',
    contactEmail: 'https://www.presonus.com/about/contact-us',
    description:
      'Studio One is a digital audio workstation application, used to create, record, mix and master music and other audio, with functionality also available for video.',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Cockos Reaper 6',
    website: 'https://www.reaper.fm/',
    contactEmail: 'support@cockos.com',
    description:
      'REAPER is a complete digital audio production application for computers, offering a full multitrack audio and MIDI recording, editing, processing, mixing and mastering toolset.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Reason Studios Reason',
    website: 'https://www.reasonstudios.com/en/reason',
    contactEmail: 'https://help.reasonstudios.com/hc/en-us',
    description:
      "At Reason Studios we're turning the world's music dreamers into music makers. We've inspired millions of users all over the world to get lost in the fun of serious music making, from making their first beats to producing their next hit song. Whether you want to use Reason as a plugin or a DAW, we've got you covered.",
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Bitwig Studio',
    website: 'https://www.bitwig.com/',
    contactEmail: 'https://www.bitwig.com/support/',
    description:
      'Bitwig Studio is a digital audio workstation (DAW) and music production software. Design sounds. Build instruments. Make music.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    name: 'Apple GarageBand',
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    website: 'https://www.apple.com/ph/mac/garageband/',
    contactEmail: 'https://support.apple.com/en-ph/contact',
    description:
      'GarageBand is a fully equipped music creation studio right inside your Mac — with a complete sound library that includes instruments, presets for guitar and voice, and an incredible selection of session drummers and percussionists. With Touch Bar features for MacBook Pro and an intuitive, modern design, it’s easy to learn, play, record, create, and share your hits worldwide. Now you’re ready to make music like a pro.',
  },
  {
    slug: nanoid(6),
    id: v4(),
    categories: {
      create: [{ categoryId: categories.c48 }, { categoryId: categories.c60 }],
    },
    name: 'Acoustica Mixcraft',
    website: 'https://acoustica.com/mixcraft',
    contactEmail: 'https://acoustica.kayako.com/conversation/new',
    description:
      "Created by musicians, for musicians, Mixcraft is unrivaled in the industry for its ease-of-use and raw power. Record and mix your tracks to perfection, in record time, with Mixcraft's incredibly intuitive interface, lightning-fast sound engine, reality-defying pitch-shifting and time-stretching technology, and nearly-universal support for third-party plug-ins, audio interfaces, and hardware controllers.",
  },
  // ...livePerformanceCompanies,
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c44 }] },
    name: 'Akira',
    contactEmail: 'stevie@akirarecords.com',
    description:
      'Akira Records is a London-based independent record label founded in 2013 by Stevie Red McMinn. Unbound by genre, Akira maintains a varied and colourful roster tied together by creativity, originality and excellence.',
    phoneNumber: '',
    website: 'http://www.akirarecords.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c32 }] },
    description:
      'Black Cat Music promotes gigs, mainly in London, and we are always on the look out for new artsists. We have worked with established artists like Courtney Pine, John Parr and Dan Reed but specialise in helping unsigned and up and coming acts make the step up from pubs and clubs to proper music venues.',
    address: '',
    name: 'Black Cat Music Promotions',
    contactEmail: 'martin.furlong@gmail.com',
    phoneNumber: '07508038866',
    website: 'http://www.blackcatmusicuk.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c30 },
        { categoryId: categories.c44 },
      ],
    },
    description:
      'We are CloseUp, UK national live promoters, booking agents, record label and most recently mangement company. We showcase the best live indie/electronic talent nationwide. Since our first CloseUp event in our hometown of Winchester in 2017, we’ve grown into a multi-faceted music outlet, working with artists we love internationally. Our humble beginnings are never forgotten, and key to the progress of CloseUp moving forward.',
    address: '',
    name: 'CloseUp Promotions',
    contactEmail: 'closeuppromotions@gmail.com',
    phoneNumber: '',
    website: 'http://www.closeuppromo.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c44 },
        { categoryId: categories.c32 },
        { categoryId: categories.c46 },
      ],
    },
    description:
      'Communion is an independent record label, publisher and promoter. We partner with artists and help them tell their stories.',
    address: '',
    name: 'Communion',
    contactEmail: 'presents@communionmusic.co.uk',
    phoneNumber: '',
    website: 'http://www.communionmusic.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: { create: [{ categoryId: categories.c32 }] },
    description:
      'The most exciting music promotion company known to man!!! Up to the minute gig and tour announcements and cheapest tickets from Flag Promotions',
    address: '',
    name: 'Flag Promotions',
    contactEmail: 'frankflag.fd@googlemail.com',
    phoneNumber: '07713126938',
    website: 'http://www.flagpromotions.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c66 },
        { categoryId: categories.c38 },
      ],
    },
    description:
      'We are Get In Her Ears. We are dedicated to promoting and supporting women and non-binary people in music. We aspire to a music industry and gig environment which is free from sexual assault and any form of harassment. Get In Her Ears is a website, monthly Soho Radio show and live night.',
    address: '',
    name: 'Get In Her Ears',
    contactEmail: 'marigetinherears@gmail.com',
    phoneNumber: '',
    website: 'http://www.getinherears.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c65 }],
    },
    description:
      'Glasswerk is a national concert promoter and venue operator based in Liverpool UK. They have been in business since 2005. Glasswerk promote a wide variety of entertainment tours and concerts in various genres; from acoustic to metal, pop to hip hop, comedy to spoken word, mostly in London, Manchester and Liverpool, but also regularly in Birmingham, Leeds, Brighton, Newcastle, Glasgow and other smaller towns and cities.',
    address: '',
    name: 'Glasswerk',
    contactEmail: 'via website: https://glasswerk.co.uk/contact/',
    phoneNumber: '01517079044',
    website: 'http://www.glasswerk.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c30 },
        { categoryId: categories.c20 },
      ],
    },
    description:
      'A MUSIC MANAGEMENT, PROMOTION AND PRODUCTION COMPANY HELPING THE ASPIRATIONS OF BOTH NEW AND ESTABLISHED ARTISTS',
    address: '',
    name: 'HOT VOX',
    contactEmail: 'info@hotvox.co.uk',
    phoneNumber: '',
    website: 'http://www.hotvox.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c25 },
        { categoryId: categories.c67 },
        { categoryId: categories.c32 },
      ],
    },
    description:
      'ILUVLIVE launched in 2004 and is a not for profit live music and artist development platform supported by Arts Council England. Initially a London-based showcase hosted by Ras Kwame and Twin B, we supported Ed Sheeran, Jessie J, Tinie Tempah, Emeli Sande, Chip, Wretch 32, Izzy Bizu, Little Simz, Ms Banks, Kojey Radical, Ella Mai, Krept and Konan, Tom Grennan, Shakka and Mahalia to name a few.',
    address: '',
    name: 'ILUVLIVE',
    contactEmail: 'info@iluvlive.co.uk',
    phoneNumber: '02086712161',
    website: 'http://www.iluvlive.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c27 },
        { categoryId: categories.c26 },
      ],
    },
    description:
      'Live A Little Louder Music specialises in live event production and online media. Based in London, our mission is to showcase and support new musical acts from all around the United Kingdom - producing engaging, entertaining and consistently high quality live experiences / content for music fans to enjoy. We believe that music should know no boundaries, accessible to all - and so proudly work with artists / bands of all shapes and sizes.',
    address: '',
    name: 'Live A Little Louder',
    contactEmail: 'info@livealittlelouder.co.uk',
    phoneNumber: '',
    website: 'http://www.livealittlelouder.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c44 }],
    },
    description:
      'Lost In The Manor is always seeking out new bands, artists, writers, venues, photographers – basically, anyone who has a passion for music and has something to contribute. If you are a band, artist or representative looking for gigs, or seeking to gain exposure via online music blogs and make yourself attractive to management companies and labels, then please drop a line to Chris.',
    address: '',
    name: 'Lost In The Manor',
    contactEmail: 'chris@lostinthemanor.co.uk',
    phoneNumber: '',
    website: 'http://www.lostinthemanor.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c67 },
        { categoryId: categories.c66 },
        { categoryId: categories.c51 },
      ],
    },
    description:
      'LOUD WOMEN is a group for all those who support putting women on stage, and turning up the volume. It’s a not-for-profit initiative run by Cassie Fox of I, Doris, with help from some brilliant friends.',
    address: '',
    name: 'Loud Women',
    contactEmail: 'loudwomenclub@gmail.com',
    phoneNumber: '',
    website: 'http://www.loudwomen.org/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c20 }],
    },
    description:
      'We’re a London based multi divisional entertainment company specialising in PR, Management Consultancy and Events. We’ve worked international campaigns for both Indy and Major labels….Sony, Universal and Warner’s on Digital, Press and Radio campaigns for the likes of ACDC, Michael Jackson ‘Thriller 25th Anniversary’, Garth Brooks, Celine Dion, The Specials, Beth Orton and Beck.',
    address: '',
    name: 'MaDa Music Entertainment',
    contactEmail: 'adam@madamusic.com',
    phoneNumber: '',
    website: 'http://www.madamusic.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c51 },
        { categoryId: categories.c69 },
        { categoryId: categories.c32 },
      ],
    },
    description:
      'The Nest Collective is a leading force in contemporary and cross-cultural folk music. We bring people together to experience extraordinary music, rekindling connections with nature, tradition and community.',
    address: '',
    name: 'The Nest Collective',
    contactEmail: 'info@thenestcollective.co.uk',
    phoneNumber: '',
    website: 'http://www.thenestcollective.co.uk',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description:
      'Over the years The Underworld has marked itself as the heart of the alternative music scene in the UK, a legendary stepping stone to rock-stardom for many artists.',
    address: 'The Underworld, 174 Camden High Street, London, NW1 0NE',
    name: 'The Underworld',
    contactEmail: 'contact@theunderworldcamden.co.uk',
    phoneNumber: '02074821932',
    website: 'http://www.theunderworldcamden.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description:
      'Scared To Dance are independent club night, live music and film screening promoters. The club plays post-punk, indiepop, new wave and art rock music and is on the first Saturday of the month at The Victoria and the third Saturday of the month at The Shacklewell Arms in London. We also host club nights in Berlin, Glasgow and Brighton.',
    address: '',
    name: 'Scared To Dance',
    contactEmail: 'paul@scaredtodance.co.uk',
    phoneNumber: '',
    website: 'http://www.scaredtodance.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c63 },
        { categoryId: categories.c69 },
      ],
    },
    description:
      'Serious are producers of outstanding live cultural experiences, including festivals, concerts, tours, creative engagement projects and talent development schemes. We are a team of passionate and committed professionals, from a variety of creative disciplines, working toward the common goal of making music that matters to the people and communities of our country.',
    address:
      'Serious, 51 Kingsway Place, Sans Walk, Clerkenwell, London EC1R 0LU',
    name: 'Serious',
    contactEmail: 'development@serious.org.uk',
    phoneNumber: '020 7324 1880',
    website: 'http://www.serious.org.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c30 }],
    },
    description:
      "Substance Music is a live bookings and promotions company hosting live music events at one of London's landmark West End pub venues, The Spice of Life.",
    address: '',
    name: 'Substance Gigs',
    contactEmail: 'shaun@substancegigs.com',
    phoneNumber: '',
    website: 'http://www.substancegigs.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description:
      'Since our inception over 10 years ago, Success Express has fast become a leading hub for creatives and audiences alike.  Our DNA and passion for community have helped bring like-minded people together, and together, we have all created one positive voice within the independent music and arts scene. Whether it’s providing artists with a platform to grow and flourish, or cultivating exciting events and new landscapes for audiences to discover a new wave of unique artists, venues and friends. Success Express is a supportive, honest and collaborative platform, providing a beating heart for the creative community.',
    address: '',
    name: 'Success Express',
    contactEmail: 'bookings@semusic.org',
    phoneNumber: '07984338108',
    website: 'http://www.semusic.org/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c69 },
        { categoryId: categories.c14 },
        { categoryId: categories.c16 },
      ],
    },
    description:
      'Part of the Coalition Presents group, Sucker is a music development platform, founded in 2019, with the aim of offering a 360-degree, all-encompassing music development service to artists. This includes, and is not limited to: management, live shows, creative solutions, PR, distribution and merchandise.',
    address: '',
    name: 'Sucker',
    contactEmail: 'info@suckerofficial.co.uk',
    phoneNumber: '',
    website: 'http://www.suckerofficial.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description:
      'An iconic East London institution since 1999, 93 Feet East is situated at the heart of Brick Lane, Shoreditch. Regularly hosting esteemed international and local guests as part of their in-house night 93 Degrees, the venue also provides a space for respected external brands and promoters across the sub-genres of house, techno, garage & disco.',
    address: '93 Feet East, 150 Brick Lane London, E1 6QL',
    name: '93 Feet East',
    contactEmail: 'hello@93feeteast.co.uk',
    phoneNumber: '0207 770 6243',
    website: 'https://www.93feeteast.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c44 }, { categoryId: categories.c32 }],
    },
    description: '',
    address: '',
    name: 'This Feeling',
    contactEmail: 'this_feeling@outlook.com',
    phoneNumber: '',
    website: 'http://www.thisfeeling.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description: '',
    address: '',
    name: 'White Heat',
    contactEmail: 'marcus@whiteheatmayfair.com\nmatty@whiteheatmayfair.com',
    phoneNumber: '',
    website: 'http://www.whiteheatmayfair.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description:
      'We programme, promote and produce a huge range of events. Please contact us if you are in need of live music, and we can discuss our services in more detail.',
    address: '',
    name: 'Woodburner',
    contactEmail: 'theo@woodburner.tv',
    phoneNumber: '',
    website: 'http://www.woodburner.tv/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description:
      'Cultural destination, Printworks London first opened its doors in January 2017. Once home to the largest printing factory in Western Europe, the original aesthetics, giant machines and printing presses have been preserved to create a stunning, industrial environment for a dynamic array of events. Our award-winning seasonal music series showcases the best in live and electronic music, becoming a vital part of the city’s vibrant cultural scene today and garnering global acclaim.',
    address: 'Surrey Quays Rd Rotherhithe London SE16 7PJ',
    name: 'Printworks',
    contactEmail: 'info@printworkslondon.co.uk',
    phoneNumber: '',
    website: 'https://printworkslondon.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [
        { categoryId: categories.c32 },
        { categoryId: categories.c20 },
        { categoryId: categories.c44 },
      ],
    },
    description:
      'Launching in 2007, the Lovejuice concept has always brought like-minded individuals together, who desire to party in the hottest spaces whilst sharing a love for dance music.',
    address: '',
    name: 'LoveJuice',
    contactEmail: 'info@wearelovejuice.com',
    phoneNumber: '',
    website: 'https://wearelovejuice.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description:
      'We welcome a community of like-minded clubbers who want to share a great experience week in, week out – we hope you’ll feel at home.',
    address: '418 Brixton Road, London SW9 7AY',
    name: 'Phonox',
    contactEmail: 'erin@thecolumbogroup.com',
    phoneNumber: '',
    website: 'https://phonox.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description:
      "One of London's most iconic live music venues. The Jazz Cafe. Live music gig venue with restaurant & club nights. Opens 7pm daily, until 3am at weekends.",
    address: '5 Parkway, Camden, London NW1 7PG',
    name: 'The Jazz Café',
    contactEmail: 'info@thejazzcafelondon.com',
    phoneNumber: '',
    website: 'https://thejazzcafelondon.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description: '',
    address: '',
    name: 'Junction 2',
    contactEmail: 'INFO@JUNCTION2.LONDON',
    phoneNumber: '',
    website: 'https://www.junction2.london/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c18 }],
    },
    description:
      'Boiler Room started with a webcam taped to a wall, opening a keyhole into London’s underground. Since 2010, we’ve built a unique archive spanning over 8000 performances by more than 5000 artists across 200 cities. Today, we remain true to that history. We support emerging artists. We tell stories from the fringes. We connect local dance floors to the wider world.',
    address: '',
    name: 'Boiler Room.',
    contactEmail: 'INFO@BOILERROOM.TV',
    phoneNumber: '',
    website: 'https://boilerroom.tv/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c44 }],
    },
    description: '',
    address: '',
    name: 'Percolate.',
    contactEmail: 'info@percolatemusic.co.uk',
    phoneNumber: '',
    website: 'https://percolatemusic.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c70 }],
    },
    description:
      'WeGotTickets started out back in 2000 when a small group of music lovers created a ticketing system for their own events. They pioneered a never-seen-before e-ticket system involving reference numbers, and what was then a slightly weird idea has evolved to become industry standard.',
    address: '',
    name: 'WeGotTickets',
    contactEmail: 'https://www.wegottickets.com/contact',
    phoneNumber: '',
    website: 'https://www.wegottickets.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c18 }],
    },
    description:
      'Conceived in 2009 by founders Clémence Godard and Tim Palmer, BIRD ON THE WIRE is a wholeheartedly independent promotion and production company staging over 150 concerts, festivals and arts events every year in London, occasionally spreading to regions and countries beyond.',
    address: '',
    name: 'BIRD ON THE WIRE',
    contactEmail: 'info@birdonthewire.net',
    phoneNumber: '',
    website: 'https://www.birdonthewire.net/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c44 }],
    },
    description: '',
    address: '',
    name: 'Eat Your Own Ears',
    contactEmail: 'info@eatyourownears.com',
    phoneNumber: '',
    website: 'https://www.eatyourownears.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }],
    },
    description: '',
    address: '',
    name: 'DEEP MEDi Musik',
    contactEmail: 'info@deepmedi.com',
    phoneNumber: '',
    website: 'https://deepmedi.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c62 }, { categoryId: categories.c70 }],
    },
    description: '',
    address: '',
    name: 'Field Day',
    contactEmail: 'info@fielddayfestivals.com',
    phoneNumber: '',
    website: 'https://fielddayfestivals.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c70 }],
    },
    description:
      'AEG Presents is one of the world’s leading companies in live entertainment, promoting memorable sell-out UK tours for the world’s biggest artists including Justin Bieber, Shawn Mendes, Nick Cave, Rammstein, The Rolling Stones & many more, as well as finding emerging and growing new talent.',
    address: '',
    name: 'AEG presents',
    contactEmail: 'https://aegpresents.zendesk.com/hc/en-us/requests/new',
    phoneNumber: '',
    website: 'https://www.aegpresents.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c26 }, { categoryId: categories.c65 }],
    },
    description:
      'Our heritage is in music. We own and operate a portfolio of award-winning venues and entertainment brands and partner with some of the world’s most influential artists to deliver powerful programming and cultural experiences across the world.',
    address: '',
    name: 'Broadwick Live',
    contactEmail: 'info@broadwicklive.com',
    phoneNumber: '',
    website: 'https://broadwicklive.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }, { categoryId: categories.c38 }],
    },
    description:
      "London's iconic venue, live music, club nights, live streams and 24/7 Radio. Plus its newest addition Cafe KOKO, selling NYC style pizza and drinks till late.",
    address: '1A Camden High St, London NW1 7JE',
    name: 'KOKO',
    contactEmail: 'electronic@koko.uk.com',
    phoneNumber: '',
    website: 'https://www.koko.co.uk',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c70 }, { categoryId: categories.c32 }],
    },
    description: '',
    address: '',
    name: 'Lowercase Events UK',
    contactEmail: 'tee@lowercasegroup.co.uk',
    phoneNumber: '',
    website: 'https://www.lowercase-tickets.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c44 }, { categoryId: categories.c32 }],
    },
    description:
      "Chronic Fonk Records is the record Label and event management company set up and run by CLF Art Cafe [The Bussey Building] head Honcho and South London Soul Train Host Jazzheadchronic Mickey Smith. A new label and event co dedicated to putting the Fonk back in yoh soul. From eclectic funk, soul & rare groove  events and compilations [Then to Now] to upcoming shows and releases of journeys in sound by some of the best DJ's and live artists on the planet. London to NYC via Havana and Guyana. ",
    address: '',
    name: 'Chronic Fonk',
    contactEmail: 'info@clfartcafe.org',
    phoneNumber: '',
    website: 'https://www.chronicfonk.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }],
    },
    description: '',
    address: '95 Effra Road, Brixton, London SW2 1DF',
    name: 'Hootananny Brixton',
    contactEmail: 'info@hootananny.co.uk',
    phoneNumber: '',
    website: 'https://hootanannybrixton.co.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c65 }, { categoryId: categories.c44 }],
    },
    description: '',
    address: '',
    name: 'fabric',
    contactEmail: 'info@fabriclondon.com',
    phoneNumber: '',
    website: 'https://www.fabriclondon.com/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c70 }],
    },
    description:
      'Weird Science is one of the UK’s leading independent promoters with a strong focus on Birmingham and London; a collective dedicated to creating amazing events and experiences for amazing people.',
    address: '',
    name: 'Weird Science',
    contactEmail: 'contact@weirdscience.uk',
    phoneNumber: '',
    website: 'https://www.weirdscience.uk/',
  },
  {
    id: v4(),
    slug: nanoid(6),
    categories: {
      create: [{ categoryId: categories.c32 }, { categoryId: categories.c44 }],
    },
    description: '',
    address: '',
    name: 'Anjunadeep',
    contactEmail: 'dom@anjunadeep.com',
    phoneNumber: '',
    website: 'https://anjunadeep.com/us',
  },
];
