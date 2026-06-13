export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
  notes?: string;
  image?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface SpaceActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  price: string;
  spotsLeft: number;
  maxSpots: number;
  instructor: string;
  tag: string;
  image: string;
}

export interface Soundscape {
  id: string;
  name: string;
  description: string;
  url: string; // Will use synthetic oscillator or royalty-free audio mock
  iconName: string;
}

export interface EventSpace {
  id: string;
  title: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
  features: string[];
  suitedFor: string[];
}

export interface ReservationInquiry {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
  type: "workshop" | "relaxation" | "co-work";
  targetActivityId?: string;
}
