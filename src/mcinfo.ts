export const serverName = 'Hexgame'
export const serverIp = 'play.hexgame.in'

export const serverFeatures = [
  {
    title: 'Survival',
    description: 'Build, explore, and survive in our vast world',
    image: '/grassblock.png'
  },
  {
    title: 'Creative',
    description: 'Let your imagination run wild with unlimited resources',
    image: 'https://placehold.co/300x200/1A1A1A/FFD700.png?text=Creative'
  },
  {
    title: 'Bedwars',
    description: 'Defend your bed and eliminate opponents in this strategic game mode',
    image: '/bw.png'
  },
  {
    title: 'Minigames',
    description: 'Enjoy a variety of fun and exciting minigames',
    image: '/sword.png'
  },
]

export const recentDonors = [
  { name: 'Player123', amount: '$50', avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P1' },
  { name: 'CraftMaster', amount: '$30', avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P2' },
  { name: 'BlockBuilder', amount: '$25', avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P3' },
]


export const upcomingEvents = [
  { name: 'Summer Festival', date: 'Dec 1-3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'PvP Tournament', date: 'Dec 15', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Build Contest', date: 'Dec 22-29', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]

export const initialRanks = [
  { name: 'VIP', price: 5, benefits: 'Priority queue, exclusive prefix' },
  { name: 'MVP', price: 10, benefits: 'All VIP perks + special items' },
  { name: 'Elite', price: 20, benefits: 'All MVP perks + private world access' },
]

export const initialStaff = [
  { name: 'Admin Steve', role: 'Server Owner', avatar: '/placeholder.svg' },
  { name: 'Mod Alex', role: 'Head Moderator', avatar: '/placeholder.svg' },
  { name: 'Builder Creeper', role: 'Lead Builder', avatar: '/placeholder.svg' },
]

export const initialDonors = [
  { name: 'Player1', amount: 50 },
  { name: 'Player2', amount: 75 },
  { name: 'Player3', amount: 100 },
]

export const ranks = [
  {
    id: 1,
    name: 'Elite Rank',
    price: 70, // Price in ₹
    image: 'https://placehold.co/200/1A1A1A/FFD700.png?text=ELITE',
    features: [
      'TempFly',
      'Can set 3 Homes',
      'Create up to 3 auctions',
      'Create own market',
      'Create own team/guild',
      'Special kit (claimable every week)'
    ],
    commands: [
      '/fly',
      '/team',
      '/kit',
      '/sethome 1,2,3',
      '/workbench',
      '/disposal'
    ],
    weeklyRewards: [
      '2k SmP Cash',
      '300 Claim Blocks'
    ]
  },
  {
    id: 2,
    name: 'Legend Rank',
    price: 150, // Price in ₹
    image: 'https://placehold.co/200/1A1A1A/FFD700.png?text=LEGEND',
    features: [
      'Fly',
      'Directly tp to someone',
      'Can set 6 Homes',
      'Create up to 8 auctions',
      'Create own market',
      'Create own team/guild',
      'Special kit (claimable every week)'
    ],
    commands: [
      '/tp',
      '/fly',
      '/team',
      '/kit',
      '/sethome 1,2,3,4,5,6',
      '/workbench',
      '/anvil',
      '/grindstone',
      '/stonecutter',
      '/suicide',
      '/disposal'
    ],
    weeklyRewards: [
      '5k SmP Cash',
      '800 Claim Blocks'
    ]
  },
  {
    id: 3,
    name: 'Champion Rank',
    price: 290, // Price in ₹
    image: 'https://placehold.co/200/1A1A1A/FFD700.png?text=CHAMPION',
    features: [
      'Access to Fly',
      'Access to Vanish',
      'Directly tp to someone',
      'Heal yourself by cmd',
      'Can set 10 Homes',
      'Create up to 12 auctions',
      'Create own market',
      'Create own team/guild',
      'Special kit (claimable every week)'
    ],
    commands: [
      '/tp',
      '/fly',
      '/vanish (invisible)',
      '/team',
      '/heal',
      '/kit',
      '/sethome 1,2,3,4,5,6',
      '/enderchest',
      '/craft',
      '/anvil',
      '/grindstone',
      '/stonecutter',
      '/suicide',
      '/disposal'
    ],
    weeklyRewards: [
      '10k SmP Cash',
      '1200 Claim Blocks'
    ],
    specials: [
      'Can buy mob spawners from staff',
      'Can buy custom enchants from staff'
    ]
  },
  {
    id: 4,
    name: 'Titan Rank',
    price: 400, // Price in ₹
    image: 'https://placehold.co/200/1A1A1A/FFD700.png?text=TITAN',
    features: [
      'Access to Fly',
      'Access to Vanish',
      'GODMODE',
      'Directly tp to someone',
      'Heal yourself by cmd',
      'Can set 15 Homes',
      'Create up to 18 auctions',
      'Create own market',
      'Create own team/guild',
      'Rename your weapons',
      'Special kit (claimable every week)'
    ],
    commands: [
      '/tp',
      '/fly',
      '/god',
      '/fix all',
      '/nick',
      '/vanish (invisible)',
      '/team',
      '/heal',
      '/kit',
      '/sethome 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15',
      '/enderchest',
      '/craft',
      '/anvil',
      '/grindstone',
      '/stonecutter',
      '/suicide',
      '/disposal',
      '/rename'
    ],
    weeklyRewards: [
      '15k SmP Cash',
      '1500 Claim Blocks'
    ],
    specials: [
      'Can buy mob spawners from staff',
      'Can buy custom enchants from staff'
    ]
  }
];
