export interface Item {
  id: string;
  title: string;
  category: string;
  price: number;
  priceType: 'rent' | 'sell' | 'free';
  condition: string;
  description: string;
  images: string[];
  seller: {
    name: string;
    avatar: string;
    year: string;
    department: string;
    rating: number;
    verified: boolean;
  };
  location: string;
  distance: string;
  deposit: number;
  availability: boolean;
  postedAt: string;
}

export interface Message {
  id: string;
  sender: 'me' | 'other';
  text: string;
  time: string;
  type?: 'system';
}

export const categories = [
  { id: 'books', name: 'Books', icon: '📚', count: 234, startingPrice: 5 },
  { id: 'calculators', name: 'Calculators', icon: '🧮', count: 89, startingPrice: 10 },
  { id: 'electronics', name: 'Electronics', icon: '💻', count: 156, startingPrice: 15 },
  { id: 'dorm', name: 'Dorm Essentials', icon: '🏠', count: 312, startingPrice: 3 },
  { id: 'lab', name: 'Lab Equipment', icon: '🔬', count: 67, startingPrice: 20 },
  { id: 'sports', name: 'Sports Gear', icon: '⚽', count: 98, startingPrice: 8 },
];

export const items: Item[] = [
  {
    id: '1',
    title: 'Engineering Mathematics Textbook',
    category: 'books',
    price: 15,
    priceType: 'rent',
    condition: 'Like New',
    description: 'Complete engineering mathematics textbook by B.S. Grewal. Covers calculus, linear algebra, and differential equations. Perfect for first and second year students.',
    images: [],
    seller: { name: 'Arjun Mehta', avatar: '', year: '3rd Year', department: 'Computer Science', rating: 4.8, verified: true },
    location: 'Hostel Block A',
    distance: '0.3 km',
    deposit: 200,
    availability: true,
    postedAt: '2 hours ago',
  },
  {
    id: '2',
    title: 'Casio FX-991EX Scientific Calculator',
    category: 'calculators',
    price: 25,
    priceType: 'rent',
    condition: 'Good',
    description: 'Casio FX-991EX scientific calculator. Perfect for exams and assignments. All functions working perfectly.',
    images: [],
    seller: { name: 'Priya Sharma', avatar: '', year: '2nd Year', department: 'Electrical Eng.', rating: 4.5, verified: true },
    location: 'Library Wing',
    distance: '0.5 km',
    deposit: 500,
    availability: true,
    postedAt: '5 hours ago',
  },
  {
    id: '3',
    title: 'Laptop Stand - Adjustable Aluminum',
    category: 'electronics',
    price: 0,
    priceType: 'free',
    condition: 'Fair',
    description: 'Adjustable aluminum laptop stand. Slightly scratched but fully functional. Giving away as I got a new one.',
    images: [],
    seller: { name: 'Rahul Verma', avatar: '', year: '4th Year', department: 'Mechanical Eng.', rating: 4.2, verified: false },
    location: 'Hostel Block C',
    distance: '0.8 km',
    deposit: 0,
    availability: true,
    postedAt: '1 day ago',
  },
  {
    id: '4',
    title: 'Desk Lamp with USB Charging',
    category: 'dorm',
    price: 50,
    priceType: 'sell',
    condition: 'Like New',
    description: 'LED desk lamp with built-in USB charging port. 3 brightness levels, adjustable arm. Used for one semester.',
    images: [],
    seller: { name: 'Sneha Patel', avatar: '', year: '3rd Year', department: 'Information Tech.', rating: 4.9, verified: true },
    location: 'Girls Hostel',
    distance: '0.2 km',
    deposit: 0,
    availability: true,
    postedAt: '3 hours ago',
  },
  {
    id: '5',
    title: 'Physics Lab Manual + Equipment Set',
    category: 'lab',
    price: 30,
    priceType: 'rent',
    condition: 'Good',
    description: 'Complete physics lab manual with basic equipment set including vernier calipers, multimeter, and oscilloscope probes.',
    images: [],
    seller: { name: 'Karthik Nair', avatar: '', year: '2nd Year', department: 'Physics', rating: 4.6, verified: true },
    location: 'Science Block',
    distance: '1.0 km',
    deposit: 300,
    availability: true,
    postedAt: '6 hours ago',
  },
  {
    id: '6',
    title: 'Data Structures & Algorithms Book',
    category: 'books',
    price: 10,
    priceType: 'rent',
    condition: 'Good',
    description: 'Introduction to Algorithms by Cormen (CLRS). Highlighted but clean. Essential for CS students.',
    images: [],
    seller: { name: 'Ananya Rao', avatar: '', year: '3rd Year', department: 'Computer Science', rating: 4.7, verified: true },
    location: 'CS Department',
    distance: '0.4 km',
    deposit: 150,
    availability: true,
    postedAt: '12 hours ago',
  },
];

export const chatMessages: Message[] = [
  { id: '1', sender: 'me', text: 'Hi! Is the calculator still available?', time: '10:30 AM' },
  { id: '2', sender: 'other', text: 'Yes, it is! When do you need it?', time: '10:32 AM' },
  { id: '3', sender: 'me', text: 'I have exams next week, so for about 5 days?', time: '10:33 AM' },
  { id: '4', sender: 'other', text: 'Sure! That would be ₹125 for 5 days. Deposit is ₹500, refundable after return.', time: '10:35 AM' },
  { id: '5', sender: 'me', text: 'Sounds good. Can we meet at the library?', time: '10:36 AM' },
  { id: 's1', sender: 'other', text: '📋 Item request sent for Casio FX-991EX', time: '10:37 AM', type: 'system' },
  { id: '6', sender: 'other', text: 'Perfect! Library entrance at 4 PM works for me.', time: '10:38 AM' },
];
