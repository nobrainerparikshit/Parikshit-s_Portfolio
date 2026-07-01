export const ACTIVE_COUNTRIES = [
  'USA',
  'MEX',
  'KOR',
  'NZL',
  'NPL',
  'GBR',
  'IND',
  'AUS',
  'BRA',
  'CHN',
  'EGY',
  'TUR',
  'ARE',
  'PAK',
] as const

export type Member = {
  name: string
  role: string
  linkedIn?: string
}

export type CountryGroup = {
  country: string
  iso: string
  members: Member[]
}

export const MEMBERS: CountryGroup[] = [
  {
    country: 'United States',
    iso: 'USA',
    members: [
      { name: 'Felipe Q.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'George Z.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Jacob T.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'James S.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Michael G.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Abhay M.', role: 'ITC Researcher', linkedIn: '#' },
      { name: 'Zevi P.', role: 'ITC Researcher; Lead Computational Biology Researcher of the U.S.', linkedIn: '#' },
      { name: 'Aarush D.', role: 'ITC Researcher; Lead Environmental Modeling Researcher of the U.S.', linkedIn: '#' },
      { name: 'Eric Z.', role: 'ITC Researcher; Director of Applied Machine Learning of the U.S.', linkedIn: '#' },
      { name: 'Aarush K.', role: 'ITC Researcher' },
      { name: 'Sai. B.', role: 'ITC Researcher', linkedIn: '#' },
      { name: 'Rohan B.', role: 'ITC Researcher', linkedIn: '#' },
      { name: 'Toyeshh M.', role: 'ITC Researcher', linkedIn: '#' },
      { name: 'Akshay M.', role: 'ITC Researcher', linkedIn: '#' },
    ],
  },
  {
    country: 'India',
    iso: 'IND',
    members: [
      { name: 'Aditya Y.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Roumak D.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Aarav V.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Raj S.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Savyasachi S.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Vaishakh V.', role: 'Agentic AI Researcher of India', linkedIn: '#' },
      { name: 'Himaneesh S.', role: 'Agentic AI Director of India', linkedIn: '#' },
    ],
  },
  {
    country: 'United Kingdom',
    iso: 'GBR',
    members: [
      { name: 'Anirudh P.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Junsu P.', role: 'Senior Chair' },
      { name: 'Adithya R.', role: 'ITC Researcher', linkedIn: '#' },
      { name: 'Oliver P.', role: 'ITC Researcher', linkedIn: '#' },
    ],
  },
  {
    country: 'Mexico',
    iso: 'MEX',
    members: [
      { name: 'Juan N.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Caleb Y.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Emmanuel S.', role: 'Senior Chair' },
      { name: 'Diego R.', role: 'Senior Chair' },
    ],
  },
  {
    country: 'United Arab Emirates',
    iso: 'ARE',
    members: [
      { name: 'Yoochan C.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Anvith Y.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Shinkyeom B.', role: 'Senior Chair', linkedIn: '#' },
    ],
  },
  {
    country: 'Nepal',
    iso: 'NPL',
    members: [
      { name: 'Aayush Y.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Anubhav P.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Himangsu A.', role: 'Senior Chair', linkedIn: '#' },
    ],
  },
  {
    country: 'New Zealand',
    iso: 'NZL',
    members: [
      { name: 'Alston Y.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Jay Z.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Michael L.', role: 'Senior Chair', linkedIn: '#' },
    ],
  },
  {
    country: 'Australia',
    iso: 'AUS',
    members: [
      { name: 'Gary F.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Miles R.', role: 'Senior Chair' },
      { name: 'Gabe K.', role: 'Senior Chair', linkedIn: '#' },
    ],
  },
  {
    country: 'Egypt',
    iso: 'EGY',
    members: [
      { name: 'Omar S.', role: 'Senior Chair', linkedIn: '#' },
      { name: 'Omar A.', role: 'Senior Chair', linkedIn: '#' },
    ],
  },
  {
    country: 'Turkey',
    iso: 'TUR',
    members: [
      { name: 'Eralp K.', role: 'Senior Chair' },
      { name: 'Rüzgar Y.', role: 'Senior Chair' },
    ],
  },
  {
    country: 'China',
    iso: 'CHN',
    members: [{ name: 'Vincent Y.', role: 'Senior Chair', linkedIn: '#' }],
  },
  {
    country: 'South Korea',
    iso: 'KOR',
    members: [{ name: 'Jaehyun W.', role: 'Senior Chair', linkedIn: '#' }],
  },
  {
    country: 'Pakistan',
    iso: 'PAK',
    members: [{ name: 'Zeyad Z.', role: 'Senior Chair', linkedIn: '#' }],
  },
  {
    country: 'Brazil',
    iso: 'BRA',
    members: [{ name: 'Leonardo P.', role: 'Senior Chair', linkedIn: '#' }],
  },
]

export const PARTNERS = [
  { name: 'Non-Trivial', url: '#' },
  { name: 'Cornell AI Strategy Club', url: '#' },
  { name: 'Parasol', url: '#' },
  { name: 'Arcee AI', url: '#' },
  { name: 'Brownian Labs', url: '#' },
  { name: 'Thesis', url: '#' },
]
