import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "Villa" | "Apartment" | "Penthouse" | "Commercial" | "Condo";
  status: "Active" | "Sold" | "Pending";
  image: string;
  images: string[];
  description: string;
  features: string[];
  agentId: number;
  createdAt: string;
}

export interface Agent {
  id: number;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  listings: number;
  experience: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Oceanview Modern Villa",
    price: 2450000,
    location: "Malibu, California",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    type: "Villa",
    status: "Active",
    image: property1,
    images: [property1, property2, property3],
    description: "A stunning modern villa with panoramic ocean views, featuring floor-to-ceiling windows, infinity pool, and state-of-the-art smart home technology. This architectural masterpiece sits on a private hillside lot with lush landscaping.",
    features: ["Swimming Pool", "Garden", "Smart Home", "Security System", "Wine Cellar", "Home Theater"],
    agentId: 1,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    price: 1890000,
    location: "Manhattan, New York",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    type: "Penthouse",
    status: "Active",
    image: property2,
    images: [property2, property1, property4],
    description: "Experience luxury living at its finest in this stunning penthouse with wraparound terrace offering 360-degree city views. Premium finishes throughout including marble floors, custom cabinetry, and designer fixtures.",
    features: ["Terrace", "Concierge", "Gym Access", "Parking", "Security", "Rooftop Access"],
    agentId: 2,
    createdAt: "2024-02-20",
  },
  {
    id: 3,
    title: "Mediterranean Estate",
    price: 3200000,
    location: "Beverly Hills, California",
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    type: "Villa",
    status: "Active",
    image: property3,
    images: [property3, property5, property6],
    description: "An exquisite Mediterranean-style estate nestled in the prestigious hills of Beverly Hills. Features include a grand foyer, gourmet kitchen, resort-style pool, and meticulously landscaped grounds.",
    features: ["Pool", "Tennis Court", "Guest House", "Garden", "Security Gate", "3-Car Garage"],
    agentId: 1,
    createdAt: "2024-03-10",
  },
  {
    id: 4,
    title: "Corporate Tower Suite",
    price: 4500000,
    location: "Financial District, NYC",
    bedrooms: 0,
    bathrooms: 4,
    area: 8000,
    type: "Commercial",
    status: "Pending",
    image: property4,
    images: [property4, property2, property1],
    description: "Premium commercial space in the heart of the financial district. Full floor suite with panoramic city views, modern infrastructure, and prestigious address perfect for corporate headquarters.",
    features: ["Conference Rooms", "Reception Area", "Server Room", "Parking", "24/7 Security", "High-Speed Internet"],
    agentId: 3,
    createdAt: "2024-01-28",
  },
  {
    id: 5,
    title: "Beachfront Paradise Condo",
    price: 1250000,
    location: "Miami Beach, Florida",
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    type: "Condo",
    status: "Active",
    image: property5,
    images: [property5, property6, property1],
    description: "Wake up to the sound of waves in this stunning beachfront condo. Features include a private balcony, modern open-concept living, and access to world-class resort amenities.",
    features: ["Beach Access", "Pool", "Spa", "Gym", "Concierge", "Valet Parking"],
    agentId: 2,
    createdAt: "2024-04-05",
  },
  {
    id: 6,
    title: "Modern Minimalist Retreat",
    price: 1750000,
    location: "Austin, Texas",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "Villa",
    status: "Active",
    image: property6,
    images: [property6, property3, property5],
    description: "A contemporary masterpiece blending clean lines with warm natural materials. This home features open-plan living, chef's kitchen, private courtyard, and sustainable design elements.",
    features: ["Solar Panels", "Smart Home", "Courtyard", "Home Office", "Garage", "Garden"],
    agentId: 3,
    createdAt: "2024-03-22",
  },
  {
    id: 7,
    title: "Skyline Apartment",
    price: 980000,
    location: "Chicago, Illinois",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: "Apartment",
    status: "Active",
    image: property2,
    images: [property2, property4, property5],
    description: "Sleek urban apartment with stunning skyline views. Features include hardwood floors, gourmet kitchen, and floor-to-ceiling windows flooding the space with natural light.",
    features: ["City Views", "Gym", "Doorman", "Laundry", "Storage", "Bike Room"],
    agentId: 1,
    createdAt: "2024-02-14",
  },
  {
    id: 8,
    title: "Tuscan-Inspired Villa",
    price: 2900000,
    location: "Napa Valley, California",
    bedrooms: 5,
    bathrooms: 4,
    area: 4800,
    type: "Villa",
    status: "Sold",
    image: property3,
    images: [property3, property1, property6],
    description: "An authentic Tuscan-inspired villa surrounded by vineyards. This estate features a wine tasting room, outdoor kitchen, infinity pool, and breathtaking valley views.",
    features: ["Vineyard", "Wine Cellar", "Pool", "Outdoor Kitchen", "Guest Suite", "Stables"],
    agentId: 2,
    createdAt: "2024-01-05",
  },
];

export const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    specialization: "Luxury Residential",
    phone: "+1 (310) 555-0101",
    email: "sarah@premiumestates.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "With over 15 years of experience in luxury real estate, Sarah has helped hundreds of clients find their dream properties across California's most prestigious neighborhoods.",
    listings: 24,
    experience: 15,
  },
  {
    id: 2,
    name: "James Rodriguez",
    specialization: "Commercial & Investment",
    phone: "+1 (212) 555-0202",
    email: "james@premiumestates.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "James specializes in high-value commercial properties and investment portfolios. His strategic approach has generated millions in returns for his clients.",
    listings: 18,
    experience: 12,
  },
  {
    id: 3,
    name: "Emily Chen",
    specialization: "Waterfront Properties",
    phone: "+1 (305) 555-0303",
    email: "emily@premiumestates.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Emily is the go-to expert for waterfront and beachfront properties. Her deep knowledge of coastal markets ensures clients find the perfect property with a view.",
    listings: 31,
    experience: 10,
  },
  {
    id: 4,
    name: "Michael Torres",
    specialization: "New Developments",
    phone: "+1 (415) 555-0404",
    email: "michael@premiumestates.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Michael partners with top developers to bring exclusive new construction opportunities to discerning buyers. His network provides early access to premier developments.",
    listings: 15,
    experience: 8,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert & Claire Johnson",
    role: "Homeowners",
    content: "Premium Estates made our dream of owning a beachfront property a reality. Their team's attention to detail and market knowledge is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Park",
    role: "Investor",
    content: "I've worked with many brokerages, but none compare to the level of professionalism and ROI that Premium Estates consistently delivers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "First-time Buyer",
    content: "As a first-time buyer, I was nervous about the process. The team guided me every step of the way and found me the perfect starter home.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2024 Luxury Real Estate Market Trends",
    excerpt: "Discover the key trends shaping the luxury real estate market this year, from sustainable design to smart home integration.",
    date: "2024-03-15",
    author: "Sarah Mitchell",
    category: "Market Insights",
    image: property1,
  },
  {
    id: 2,
    title: "Investment Guide: Commercial Properties",
    excerpt: "A comprehensive guide to investing in commercial real estate, including risk assessment and portfolio diversification strategies.",
    date: "2024-03-01",
    author: "James Rodriguez",
    category: "Investment",
    image: property4,
  },
  {
    id: 3,
    title: "Staging Your Home for Maximum Impact",
    excerpt: "Learn the secrets of professional home staging that can increase your property's value and reduce time on market.",
    date: "2024-02-18",
    author: "Emily Chen",
    category: "Selling Tips",
    image: property6,
  },
];

export const faqs: FAQ[] = [
  { question: "How do I start the buying process?", answer: "Begin by getting pre-approved for a mortgage, then contact one of our agents to discuss your preferences, budget, and desired locations. We'll schedule property viewings and guide you through every step.", category: "Buying" },
  { question: "What documents do I need to buy a property?", answer: "You'll need proof of identity, proof of income, bank statements, tax returns, and mortgage pre-approval. Our agents will provide a complete checklist tailored to your situation.", category: "Buying" },
  { question: "How long does the buying process take?", answer: "Typically 30-60 days from offer acceptance to closing. Factors like financing, inspections, and negotiations can affect the timeline.", category: "Buying" },
  { question: "How do I determine my property's value?", answer: "We provide complimentary property valuations using comparative market analysis, recent sales data, and our expert knowledge of local markets.", category: "Selling" },
  { question: "What are the costs involved in selling?", answer: "Typical costs include agent commission, staging, minor repairs, and closing costs. We provide a detailed breakdown during our initial consultation.", category: "Selling" },
  { question: "How do you market properties?", answer: "We use a multi-channel approach including professional photography, virtual tours, social media marketing, print advertising, and our extensive network of qualified buyers.", category: "Selling" },
  { question: "Do you offer mortgage assistance?", answer: "Yes, we partner with leading mortgage brokers to help our clients secure the best financing options. We can connect you with trusted lenders for pre-approval.", category: "Loans" },
  { question: "What types of loans are available?", answer: "Options include conventional loans, FHA loans, VA loans, jumbo loans, and adjustable-rate mortgages. Our partners can help determine the best fit for your situation.", category: "Loans" },
];

export const services = [
  {
    title: "Buy Property",
    description: "Find your perfect home from our curated selection of premium properties. Our expert agents guide you through every step of the buying process.",
    icon: "Home" as const,
  },
  {
    title: "Sell Property",
    description: "Maximize your property's value with our comprehensive marketing strategies, professional staging, and access to qualified buyers.",
    icon: "DollarSign" as const,
  },
  {
    title: "Property Management",
    description: "Leave the management to us. From tenant screening to maintenance, we handle everything so you can enjoy passive income.",
    icon: "Building" as const,
  },
  {
    title: "Investment Consultation",
    description: "Leverage our market expertise to build a profitable real estate portfolio. We identify opportunities that align with your financial goals.",
    icon: "TrendingUp" as const,
  },
];

export const adminPages = [
  { id: 1, title: "Home", slug: "/", status: "Published", lastModified: "2024-03-15" },
  { id: 2, title: "About Us", slug: "/about", status: "Published", lastModified: "2024-03-10" },
  { id: 3, title: "Services", slug: "/services", status: "Published", lastModified: "2024-02-28" },
  { id: 4, title: "Contact", slug: "/contact", status: "Published", lastModified: "2024-03-12" },
  { id: 5, title: "Blog", slug: "/blog", status: "Draft", lastModified: "2024-03-14" },
];
