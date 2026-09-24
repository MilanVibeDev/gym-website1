export const navigation = [
  ['Home', '/'],
  ['Memberships', '/#memberships'],
  ['Personal Training', '/#training'],
  ['Classes', '/#classes'],
  ['Trainers', '/#trainers'],
  ['About', '/#about'],
  ['FAQ', '/#faq'],
]

export const features = [
  { number: '01', title: 'Premium Strength Equipment', description: 'Competition-grade racks, platforms, benches, machines, and free weights.' },
  { number: '02', title: 'Cardio Zone', description: 'Treadmills, stair climbers, bikes, rowers, and assault bikes.' },
  { number: '03', title: 'Personal Training', description: 'One-on-one coaching with programming built around your goals.' },
  { number: '04', title: 'Group Classes', description: 'Strength, conditioning, mobility, HIIT, and functional fitness.' },
  { number: '05', title: 'Recovery Area', description: 'Stretching space, mobility tools, massage equipment, and recovery stations.' },
  { number: '06', title: 'Clean Locker Rooms', description: 'Showers, lockers, changing areas, and daily professional cleaning.' },
]

export const plans = [
  {
    name: 'Essential', price: 39, description: 'Everything you need to build a consistent routine.',
    includes: ['Full gym access', 'Cardio and strength equipment', 'Locker rooms', 'Member app', 'Free fitness assessment'],
  },
  {
    name: 'Performance', price: 69, description: 'More guidance, more variety, more ways to progress.', popular: true,
    includes: ['Everything in Essential', 'Unlimited group classes', 'Monthly body composition check', 'One guest pass each month', 'Recovery area access', 'Priority class booking'],
  },
  {
    name: 'Elite', price: 119, description: 'A complete training plan with expert support.',
    includes: ['Everything in Performance', '2 personal training sessions/month', 'Custom training program', 'Nutrition consultation', 'Premium recovery access', 'Quarterly performance assessment'],
  },
]

export const trainers = [
  {
    name: 'Marcus Reed', role: 'Head Strength Coach', experience: '9 years', portrait: 'marcus',
    specialties: ['Strength training', 'Powerlifting', 'Athletic performance'], certifications: ['NASM-CPT', 'USAW Level 1'],
    bio: 'Marcus specializes in helping intermediate lifters build strength with structured, sustainable programming.',
  },
  {
    name: 'Olivia Carter', role: 'Personal Trainer', experience: '6 years', portrait: 'olivia',
    specialties: ['Beginner fitness', 'Body recomposition', 'Mobility'], certifications: ['ACE-CPT', 'Precision Nutrition Level 1'],
    bio: 'Olivia helps members build confidence in the gym while developing long-term training habits.',
  },
  {
    name: 'Daniel Brooks', role: 'Performance Coach', experience: '7 years', portrait: 'daniel',
    specialties: ['Sports performance', 'Conditioning', 'Functional strength'], certifications: ['NSCA-CSCS', 'CPR/AED Certified'],
    bio: 'Daniel works with recreational and competitive athletes to improve strength, speed, and conditioning.',
  },
  {
    name: 'Maya Thompson', role: 'Group Fitness Coach', experience: '5 years', portrait: 'maya',
    specialties: ['HIIT', 'Functional fitness', 'Core training', 'Group coaching'], certifications: ['NASM-CPT', 'Group Fitness Specialist'],
    bio: 'Maya leads high-energy training sessions focused on effective, scalable workouts.',
  },
]

export const classes = [
  { name: 'Iron Strength', category: 'STRENGTH', description: 'Structured full-body strength training.', duration: '60 min', level: 'Beginner–Intermediate' },
  { name: 'Peak HIIT', category: 'CONDITIONING', description: 'High-intensity work with bikes, sleds, kettlebells, and bodyweight exercises.', duration: '45 min', level: 'All Levels' },
  { name: 'Mobility Reset', category: 'RECOVERY', description: 'Mobility and flexibility work focused on recovery.', duration: '40 min', level: 'All Levels' },
  { name: 'Athletic Performance', category: 'PERFORMANCE', description: 'Speed, strength, agility, and conditioning.', duration: '60 min', level: 'Intermediate' },
  { name: 'Core & Conditioning', category: 'FUNCTIONAL', description: 'Functional core work mixed with conditioning circuits.', duration: '45 min', level: 'All Levels' },
]

export const schedule = [
  { day: 'Monday', sessions: [['6:00 AM', 'Peak HIIT'], ['12:00 PM', 'Mobility Reset'], ['5:30 PM', 'Iron Strength'], ['7:00 PM', 'Core & Conditioning']] },
  { day: 'Tuesday', sessions: [['6:00 AM', 'Iron Strength'], ['5:30 PM', 'Athletic Performance'], ['7:00 PM', 'Peak HIIT']] },
  { day: 'Wednesday', sessions: [['6:00 AM', 'Peak HIIT'], ['12:00 PM', 'Mobility Reset'], ['5:30 PM', 'Iron Strength']] },
]

export const equipment = ['12 squat racks', '8 lifting platforms', 'Dumbbells up to 150 lb', 'Olympic barbells', 'Plate-loaded machines', 'Cable systems', 'Sled track', 'Kettlebells', 'Resistance equipment']

export const testimonials = [
  { name: 'Ethan Miller', quote: 'Best gym I’ve joined in Austin. The equipment is excellent and I rarely have to wait for a rack.' },
  { name: 'Jessica Morgan', quote: 'I started as a complete beginner and the trainers made everything much less intimidating.' },
  { name: 'Chris Walker', quote: 'The Performance membership has been worth it just for the classes and recovery area.' },
  { name: 'Rachel Adams', quote: 'Clean facility, helpful staff, and a much better atmosphere than the big commercial gyms I used before.' },
]

export const faqs = [
  ['Do I need gym experience?', 'No. The gym welcomes complete beginners as well as experienced lifters.'],
  ['Is there a long-term contract?', 'Memberships are billed monthly unless otherwise specified.'],
  ['Can I cancel my membership?', 'Yes. Members can cancel according to the fictional membership agreement and notice period.'],
  ['Is personal training included?', 'Personal training is included only with certain plans or can be purchased separately.'],
  ['Do you offer a free trial?', 'New visitors can book a complimentary facility tour and introductory workout. On this demo site, the form does not submit a booking.'],
  ['Are classes included?', 'Classes are included in Performance and Elite memberships.'],
  ['Is parking available?', 'Yes. Free member parking is available in the fictional gym parking lot.'],
]
