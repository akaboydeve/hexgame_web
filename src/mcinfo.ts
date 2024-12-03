export const serverName = 'Hexgame'
export const serverIp = 'play.hexgame.in'
export const discordLink = "https://discord.gg/J6DfuSsuXV"
export const websiteLink = "https://hexgame.in"

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
  { name: 'Soon', amount: 0, avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P1' },
  { name: 'Soon', amount: 0, avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P2' },
  { name: 'Soon', amount: 5, avatar: 'https://placehold.co/100/1A1A1A/FFD700.png?text=P3' },
]


export const upcomingEvents = [
  { name: 'Coming Soon', date: 'Dec 0-0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Coming Soon', date: 'Dec 0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Coming Soon', date: 'Dec 0-0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]


export const initialStaff = [
  { name: 'AkaBoy', role: 'Server Owner', avatar: 'https://mc-heads.net/avatar/hypixel/100' },
  { name: 'Tegbir', role: 'Management', avatar: 'https://mc-heads.net/avatar/TommyInnit/100' },
  { name: '!NotVe4n', role: 'Head Admin', avatar: 'https://mc-heads.net/avatar/Technoblade/100' },
  { name: '! kabeer123', role: 'Head Admin', avatar: 'https://mc-heads.net/avatar/Proiit/100' },
  { name: 'vryoal', role: 'Head Admin', avatar: 'https://mc-heads.net/avatar/Ph1lza/100' },
  { name: 'Tanmay2456', role: 'Staff', avatar: 'https://mc-heads.net/avatar/noobie/100' },
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
