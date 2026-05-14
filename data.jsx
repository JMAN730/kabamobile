// data.jsx — content for Kaba Mobile Mechanic

const SERVICES = [
  { id: 'oil',   name: 'Oil & Fluid Change',     desc: 'Full-synthetic, conventional, or blend. Includes filter, top-offs, and 21-point check.', from: 79,  num: '01' },
  { id: 'brakes',name: 'Brakes',                 desc: 'Pads, rotors, calipers. Front, rear, or both. Lifetime warranty on parts we install.', from: 189, num: '02' },
  { id: 'batt',  name: 'Batteries & Alternators',desc: 'On-site test, replacement, and proper disposal. AGM, lead-acid, EFB.', from: 149, num: '03' },
  { id: 'diag',  name: 'Diagnostics',            desc: 'Check-engine, ABS, SRS scan with OEM-level tools. Detailed code report in 30 min.', from: 95,  num: '04' },
  { id: 'start', name: 'Starters & Ignition',    desc: 'No-start fixes, ignition switches, solenoids. Most repairs same-day curbside.', from: 219, num: '05' },
  { id: 'tune',  name: 'Tune-Ups',               desc: 'Spark plugs, coils, filters, fuel system clean. Restores throttle response.', from: 159, num: '06' },
  { id: 'ppi',   name: 'Pre-Purchase Inspection',desc: '142-point used-car inspection. Photo report + verbal walk-through.', from: 149, num: '07' },
  { id: 'ac',    name: 'A/C Service',            desc: 'Recharge, leak detection, compressor swaps. R-134a and R-1234yf.', from: 129, num: '08' },
  { id: 'tires', name: 'Tires — Mount & Balance',desc: 'Bring your tires, we mount and balance on-site. TPMS reset included.', from: 89,  num: '09' },
];

const REVIEWS = [
  {
    name: 'Marcus T.',
    initials: 'MT',
    vehicle: '2018 Honda Accord',
    stars: 5,
    source: 'Google',
    quote: 'Truck wouldn\'t start before a 7AM shift. Texted Kaba at 5:45, he was in my driveway by 6:30 with a new starter. Charged less than my last tow.',
  },
  {
    name: 'Priya R.',
    initials: 'PR',
    vehicle: '2020 Subaru Outback',
    stars: 5,
    source: 'Yelp',
    quote: 'Used him three times for brakes, oil, and an AC recharge. Shows up exactly when he says, explains everything, never upsells. South Philly mom approved.',
  },
  {
    name: 'Devon W.',
    initials: 'DW',
    vehicle: '2014 Ford F-150',
    stars: 5,
    source: 'Google',
    quote: 'I run a small delivery fleet — 4 vans. Kaba keeps all of them on the road. PMs done overnight in my parking lot. Saves me a full day of downtime per truck.',
  },
];

const FAQ = [
  {
    q: 'Where exactly do you service?',
    a: 'All of Philadelphia plus a 15-mile radius — Lower Merion, Cherry Hill, Camden, Upper Darby, Bensalem. No travel fee inside Philly proper. Outside, $1.50/mi one-way past 15 miles.',
  },
  {
    q: 'How do payments work?',
    a: 'Paid on-site after the work is complete. We accept cards, Cash App, Zelle, Venmo, Apple Pay, and good old cash. Invoice texted to you within 5 minutes.',
  },
  {
    q: 'Do you bring parts with you?',
    a: 'For booked jobs, yes — we order parts after confirming your VIN/year/make/model so we arrive ready. For diagnostics-first calls, we return next-day with the right parts at no extra trip charge.',
  },
  {
    q: 'What\'s your warranty?',
    a: '12 months / 12,000 miles on labor for any repair we perform. Parts carry the manufacturer warranty, which we honor and handle for you.',
  },
  {
    q: 'Can you do bigger jobs like timing belts or head gaskets?',
    a: 'Most things, yes. Anything that needs a lift (transmission drops, full exhaust) we refer to a vetted partner shop and stay your point-of-contact. No bait-and-switch.',
  },
  {
    q: 'I have a fleet — do you offer ongoing maintenance?',
    a: 'Yes. Flat monthly rates per vehicle covering scheduled PMs, with priority dispatch on breakdowns. Built for small businesses with 3–20 vehicles.',
  },
];

const PHILLY_ZIPS = [
  '19102', '19103', '19104', '19106', '19107', '19111', '19114', '19115',
  '19118', '19119', '19121', '19122', '19123', '19125', '19127', '19128',
  '19130', '19134', '19143', '19146', '19147', '19148', '19149', '19152',
];

const NEIGHBORHOODS = [
  'Center City', 'Fishtown', 'South Philly', 'University City',
  'Northern Liberties', 'Manayunk', 'Chestnut Hill', 'Roxborough',
  'Bella Vista', 'Passyunk', 'Old City', 'Brewerytown',
];

window.KABA_DATA = { SERVICES, REVIEWS, FAQ, PHILLY_ZIPS, NEIGHBORHOODS };
