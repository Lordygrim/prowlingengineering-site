export const SITE = {
  name: 'Prowling Engineering',
  // ===== EDIT YOUR DETAILS HERE =====
  phone: '+254 720465901',
  email: 'info@prowlingengineering.com',
  address: 'Sharp Centre Complex, Muthaiga, Ground floor, Nairobi, Kenya',
  hours: 'Mon–Fri, 8:00 AM–6:00 PM',
}

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About us' },
  { href: '/ehs', label: 'EHS' },
  { href: '/contact', label: 'Contact' },
]

export type Service = { title: string; text: string }

export const SERVICES: Service[] = [
  { title: 'Electrical engineering', text: 'Power distribution, substations, automation and renewable energy integration, from design through commissioning.' },
  { title: 'Telecommunications', text: 'Network infrastructure, tower and radio installations, and fibre optic builds that carry data across regions.' },
  { title: 'Civil and structural', text: 'Foundations, structures and site works delivered to specification, on schedule and with safety built in.' },
  { title: 'Solar and clean energy', text: 'Solar installations and hybrid systems that reduce energy costs and carbon output.' },
  { title: 'Underground fibre', text: 'Trenching, ducting and fibre laying along pipelines and road corridors.' },
  { title: 'Project management', text: 'One accountable team coordinating design, procurement, construction and handover.' },
]
