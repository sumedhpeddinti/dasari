function TempleWireframe({ className = "", light = false }: { className?: string; light?: boolean }) {
  const strokeColor = light ? "#d4a74a" : "#3a5c3a";
  return (
    <svg
      className={`temple-wireframe-svg ${className}`}
      viewBox="0 0 400 650"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Blueprint Construction Grid */}
      <g strokeDasharray="3 3" opacity="0.25" strokeWidth="0.75">
        <line x1="200" y1="10" x2="200" y2="620" />
        <line x1="10" y1="575" x2="390" y2="575" />
        <line x1="30" y1="480" x2="370" y2="480" />
        <line x1="60" y1="360" x2="340" y2="360" />
        <line x1="100" y1="220" x2="300" y2="220" />
        <line x1="130" y1="120" x2="270" y2="120" />
      </g>

      {/* 1. SACRED DHVAJA (TEMPLE FLAG) & KALASH FINIAL */}
      <path d="M200 8 L200 45 M200 12 L235 22 L200 32 Z" strokeWidth="1.4" />
      <path d="M200 45 C212 52 212 62 200 70 C188 62 188 52 200 45 Z" strokeWidth="1.3" />
      <path d="M192 70 L208 70 M190 60 L210 60" />

      {/* 2. AMALAKA (RIBBED CROWN WHEEL) */}
      <ellipse cx="200" cy="76" rx="28" ry="8" strokeWidth="1.4" />
      <ellipse cx="200" cy="80" rx="34" ry="10" strokeWidth="1.4" />
      <path d="M172 80 Q200 72 228 80 M176 77 L176 83 M188 74 L188 84 M200 72 L200 85 M212 74 L212 84 M224 77 L224 83" opacity="0.8" />

      {/* 3. NAGARA SHIKHARA TOWER SPIRE */}
      <path d="M166 80 C130 180 115 250 110 320 L290 320 C285 250 270 180 234 80 Z" strokeWidth="1.6" />
      <path d="M180 120 C165 170 155 220 150 280 L250 280 C245 220 235 170 220 120 Z" strokeWidth="1.1" />
      <path d="M188 150 C180 190 175 230 170 280 L230 280 C225 230 220 190 212 150 Z" strokeWidth="0.9" />

      {/* Horizontal Bhumi Stepped Tiers */}
      <path d="M156 120 L244 120 M150 145 L250 145 M144 170 L256 170 M138 195 L262 195 M132 220 L268 220 M126 245 L274 245 M120 270 L280 270 M114 295 L286 295" opacity="0.85" />

      {/* Vertical Lattice Mesh */}
      <path d="M200 80 L200 320" strokeWidth="1.3" />
      <path d="M180 80 C160 170 150 240 145 320 M220 80 C240 170 250 240 255 320" opacity="0.75" />

      {/* Gavaksha Arch Windows on Shikhara */}
      <path d="M190 145 Q200 130 210 145 Q200 142 190 145 Z" />
      <path d="M185 195 Q200 175 215 195 Q200 190 185 195 Z" />
      <path d="M180 245 Q200 220 220 245 Q200 238 180 245 Z" />
      <path d="M175 295 Q200 268 225 295 Q200 286 175 295 Z" />

      {/* 4. CORNICE / SHIKHARA BASE MOLDING */}
      <rect x="95" y="320" width="210" height="18" rx="3" strokeWidth="1.5" />
      <path d="M95 329 L305 329" />
      <path d="M105 338 L105 342 M125 338 L125 342 M145 338 L145 342 M165 338 L165 342 M185 338 L185 342 M205 338 L205 342 M225 338 L225 342 M245 338 L245 342 M265 338 L265 342 M285 338 L285 342" />

      {/* 5. MAIN MANDAPAM (PILLARED HALL & SANCTUM) */}
      <path d="M85 338 L315 338 L330 460 L70 460 Z" strokeWidth="1.4" />
      <path d="M95 338 L88 460 M105 338 L98 460" />
      <rect x="91" y="348" width="18" height="10" rx="1" />
      <circle cx="100" cy="400" r="5" />
      <path d="M135 338 L130 460 M145 338 L140 460" />
      <rect x="133" y="348" width="14" height="10" rx="1" />
      <path d="M255 338 L260 460 M265 338 L270 460" />
      <rect x="253" y="348" width="14" height="10" rx="1" />
      <path d="M295 338 L302 460 M305 338 L312 460" />
      <rect x="291" y="348" width="18" height="10" rx="1" />
      <circle cx="300" cy="400" r="5" />
      <path d="M82 352 L112 352 M124 352 L154 352 M246 352 L276 352 M286 352 L316 352" strokeWidth="1.3" />

      {/* 6. MAKAR TORANA (ORNATE TEMPLE ARCH) & HANGING BELL */}
      <path d="M150 460 L150 395 C150 355 250 355 250 395 L250 460 Z" strokeWidth="1.8" />
      <path d="M158 460 L158 400 C158 367 242 367 242 400 L242 460 Z" strokeWidth="1.2" />
      <path d="M200 365 L200 380 M194 380 Q200 376 206 380 M192 388 C192 380 208 380 208 388 L210 394 L190 394 Z M200 394 L200 398" strokeWidth="1.3" />
      <circle cx="200" cy="399" r="1.8" />
      <line x1="200" y1="400" x2="200" y2="460" strokeWidth="1.4" />
      <rect x="166" y="405" width="28" height="55" rx="1" opacity="0.85" />
      <rect x="206" y="405" width="28" height="55" rx="1" opacity="0.85" />
      <circle cx="180" cy="420" r="1.5" />
      <circle cx="180" cy="435" r="1.5" />
      <circle cx="180" cy="450" r="1.5" />
      <circle cx="220" cy="420" r="1.5" />
      <circle cx="220" cy="435" r="1.5" />
      <circle cx="220" cy="450" r="1.5" />

      {/* 7. ADHISTHANA (PLINTH & LOTUS PATTERN BASE) */}
      <rect x="60" y="460" width="280" height="22" rx="2" strokeWidth="1.5" />
      <path d="M60 471 L340 471" />
      <path d="M55 482 Q65 470 75 482 Q85 470 95 482 Q105 470 115 482 Q125 470 135 482 Q145 470 155 482 Q165 470 175 482 Q185 470 195 482 Q205 470 215 482 Q225 470 235 482 Q245 470 255 482 Q265 470 275 482 Q285 470 295 482 Q305 470 315 482 Q325 470 335 482 Q345 470 355 482" strokeWidth="1.1" opacity="0.85" />
      <rect x="45" y="482" width="310" height="28" rx="3" strokeWidth="1.6" />
      <path d="M45 496 L355 496" />
      <rect x="30" y="510" width="340" height="30" rx="4" strokeWidth="1.8" />
      <path d="M30 525 L370 525" />
      <rect x="15" y="540" width="370" height="35" rx="5" strokeWidth="2" />
      <path d="M15 558 L385 558" />
      <line x1="0" y1="575" x2="400" y2="575" strokeWidth="2.8" />
      <line x1="0" y1="582" x2="400" y2="582" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Leaf, MapPin, Menu, X } from 'lucide-react';
import {
  PuneFloralBorder,
  FloralFleuronDivider,
  FloralCornerAccent,
  SerlioArabesqueTailpiece
} from './components/FloralMotifs';
import { TopHeroCarousel } from './components/TopHeroCarousel';

function AppleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 170 170" width={size} height={size} fill="currentColor" style={{ display: 'inline-block', verticalAlign: '-0.15em' }}>
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.7.13-9.43-1.92-14.19-6.14-3.23-2.76-7.14-7.46-11.75-14.1-6.19-8.9-11.01-18.78-14.46-29.62-3.46-10.84-5.19-21.2-5.19-31.08 0-14.54 3.73-26.6 11.2-36.19 7.47-9.59 16.9-14.48 28.29-14.67 4.96 0 10.38 1.25 16.27 3.74 5.89 2.49 9.87 3.74 11.94 3.74 1.8 0 5.86-1.32 12.18-3.97 6.32-2.65 11.76-3.83 16.32-3.54 8.71.61 16.03 3.66 21.95 9.15 5.92 5.49 9.87 12.21 11.85 20.16-10.6 6.4-15.8 15.22-15.6 26.46.2 9.07 3.74 16.7 10.63 22.89 6.89 6.19 14.88 9.77 23.97 10.74-2.22 6.64-5.16 13.06-8.82 19.26zM119.22 31.08c0-7.25 2.68-14.28 8.04-21.09 5.36-6.81 12.1-10.87 20.22-12.18.23 1.18.35 2.23.35 3.17 0 7.37-2.74 14.47-8.22 21.3-5.48 6.83-12.3 10.92-20.46 12.27-.12-.82-.18-1.98-.18-3.47z" />
    </svg>
  );
}

type FoodItem = { name: string; price: string; description: string; image: string; calories?: string; badge?: 'V' | 'VE' | 'GF' };
type MenuItem = { name: string; price: string; description?: string; calories?: string; badge?: 'V' | 'VE' | 'GF' };

const mapsUrl = 'https://maps.app.goo.gl/sFDW3pSq3YrCTpS77?g_st=iw';
const appleMapsUrl = 'https://maps.apple/p/CSG~CZN8E23uHd';
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.482845341209!2d-81.4762186!3d41.1020812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88312944ddfd8a29%3A0x6ee709f8b7c5ea11!2s1163%20E%20Tallmadge%20Ave%2C%20Akron%2C%20OH%2044310!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus';
const storePhone = '+1 (234) 208-8523';
const storeEmail = 'info@dasarifusiongrill.com';
const photos = {
  feast: '/assets/images/curry_masala_bowls.jpg',
  tikka: '/assets/images/tikka_masala_bowl.jpg',
  butterChicken: '/assets/images/butter_chicken_bowl.jpg',
  lambBowl: '/assets/images/lamb_bowl.jpg',
  paneer: '/assets/images/paneer_bowl.jpg',
  vegan: '/assets/images/vegan_bowl.jpg',
  pavBhaji: '/assets/images/pav_bhaji.jpg',
  samosa: '/assets/images/samosas_plate.jpg',
  rotisserie: '/assets/images/rotisserie_chicken_dish.jpg',
  curry: '/assets/images/curry_masala_bowls.jpg',
};

const popular: FoodItem[] = [
  { name: 'Chicken Tikka Masala Bowl', price: '$10.99', calories: '680 cal', description: 'Chicken tikka, tikka masala, white basmati, spicy mango and hot sauce.', image: photos.tikka },
  { name: 'Butter Chicken Bowl', price: '$10.99', calories: '710 cal', description: 'Chicken in butter masala over white basmati, with DASARI ranch and hot sauce.', image: photos.butterChicken },
  { name: 'Spiced Lamb Bowl', price: '$12.99', calories: '690 cal', description: 'Tender spiced lamb, white basmati, roasted vegetables, chickpea masala and mint yogurt.', image: photos.lambBowl },
  { name: 'Vegetarian Paneer Bowl', price: '$10.99', calories: '640 cal', description: 'Paneer, butter masala, chickpea masala, white basmati and mint yogurt.', image: photos.paneer, badge: 'V' },
  { name: 'Vegan Bowl', price: '$10.99', calories: '540 cal', description: 'Tofu, roasted vegetables, chickpea masala, yellow lentils and brown basmati.', image: photos.vegan, badge: 'VE' },
];

const snackItems: FoodItem[] = [
  { name: 'Samosas', price: '$3.35', calories: '290 cal / 2 pcs', description: 'Savory pastries filled with potatoes, peas and spices.', image: photos.samosa, badge: 'V' },
];

const rotisserieItems: FoodItem[] = [
  { name: 'Half Rotisserie Chicken', price: '$9.99', calories: '540 cal', description: 'Slow-roasted Indian-spiced chicken with your choice of sauce.', image: photos.rotisserie },
  { name: 'Whole Rotisserie Chicken', price: '$18.99', calories: '1,080 cal', description: 'Perfect for sharing. Served with your choice of two sides.', image: photos.rotisserie },
  { name: 'Rotisserie Chicken Plate', price: '$13.99', calories: '720 cal', description: 'Rotisserie chicken, basmati rice, roasted vegetables and your choice of sauce.', image: photos.rotisserie },
  { name: 'Rotisserie Chicken Family Meal', price: '$34.99', calories: '2,250 cal', description: 'Whole chicken, large basmati rice, large roasted vegetables, 4 naan and 2 sauces.', image: photos.rotisserie },
];

const lentilItems: FoodItem[] = [
  { name: 'Butter Masala', price: '$9.95 | $19.90', calories: '240 cal / 8 oz', description: 'Creamy tomato-based masala.', image: photos.curry, badge: 'V' },
  { name: 'Tikka Masala', price: '$9.95 | $19.90', calories: '220 cal / 8 oz', description: 'Classic Indian spiced tomato masala.', image: photos.curry },
  { name: 'Chickpea Masala', price: '$9.95 | $19.90', calories: '180 cal / 8 oz', description: 'Chickpeas simmered in aromatic spices.', image: photos.curry, badge: 'VE' },
  { name: 'Yellow Lentil', price: '$9.95 | $19.90', calories: '150 cal / 8 oz', description: 'Comforting yellow lentil dal.', image: photos.curry, badge: 'VE' },
  { name: 'Black Lentil', price: '$9.95 | $19.90', calories: '190 cal / 8 oz', description: 'Rich, slow-cooked lentils.', image: photos.curry, badge: 'VE' },
  { name: 'Veggie Bhaji', price: '$13.95 | $21.90', calories: '160 cal / 8 oz', description: 'Flavorful vegetable bhaji.', image: photos.pavBhaji, badge: 'VE' },
];

const categories = ['BUILD YOUR BOWL', 'CHEF SELECT', 'STREET SNACKS', 'ROTISSERIE', 'FAMILY MEALS', 'LENTILS & MASALAS', 'SIDES & EXTRAS', 'BEVERAGES'];

const bowlSteps = [
  {
    number: '01',
    title: 'Base',
    note: 'Pick one or two',
    items: [
      ['White Basmati Rice', 'Fragrant basmati rice (210 cal).'],
      ['Brown Basmati Rice', 'Whole-grain basmati rice (190 cal).'],
      ['Field Greens', 'Fresh greens (25 cal).'],
      ['Roasted Vegetables', 'Seasoned roasted vegetables (90 cal).'],
    ],
    price: '+$2.50 | $5',
  },
  {
    number: '02',
    title: 'Proteins',
    note: 'Pick one or two',
    items: [
      ['Rotisserie Chicken', 'DASARI-style slow-roasted chicken (240 cal, +$2).'],
      ['Chicken Tikka', 'Marinated chicken with authentic Indian spices (220 cal).'],
      ['Spicy Chicken', 'Bold, spicy grilled chicken (230 cal).'],
      ['Lamb Meatballs', 'Seasoned lamb meatballs (280 cal, +$1.50 | $3).'],
      ['Paneer', 'Indian cheese, grilled and seasoned (260 cal, V).'],
      ['Tofu', 'Seasoned plant-based protein (170 cal, VE).'],
      ['Roasted Vegetables', 'Seasoned roasted vegetables (90 cal).'],
    ],
    price: '+$2 / +$1.50 | $3',
  },
  {
    number: '03',
    title: 'Lentils & Masalas',
    note: 'Pick one or two',
    items: [
      ['Butter Masala', 'Creamy tomato-based masala (220 cal, V).'],
      ['Tikka Masala', 'Classic Indian spiced tomato masala (200 cal).'],
      ['Chickpea Masala', 'Chickpeas simmered in aromatic spices (160 cal, VE).'],
      ['Black Lentil', 'Rich, slow-cooked lentils (170 cal, VE).'],
      ['Yellow Lentil', 'Comforting yellow lentil dal (140 cal, VE).'],
    ],
  },
  {
    number: '04',
    title: 'Sauces',
    note: 'Pick one to drizzle',
    items: [
      ['Spicy Mango', 'Sweet heat with mango (60 cal).'],
      ['Mint Yogurt', 'Cool, fresh and creamy (50 cal).'],
      ['Sweet Tango', 'Sweet signature sauce (70 cal).'],
      ['DASARI Ranch', 'Creamy house ranch (110 cal).'],
      ['Tamarind Ginger', 'Tangy tamarind with ginger (65 cal).'],
      ['Raita', 'Cool yogurt sauce (45 cal).'],
    ],
  },
  {
    number: '05',
    title: 'Hot Stuff',
    note: 'Pick one',
    items: [
      ['WHOA (5/10)', 'A little kick (10 cal).'],
      ['OMG (10/10)', 'Bring the heat (15 cal).'],
      ['OUCH (8/10)', 'For serious heat lovers (10 cal).'],
      ['Serrano Peppers (10/10)', 'Fresh serrano heat (5 cal).'],
    ],
  },
  {
    number: '06',
    title: 'Garnishes',
    note: 'Choose all, a few or none',
    items: [
      ['Romaine Lettuce', 'Fresh crunchy romaine (5 cal).'],
      ['Purple Slaw', 'Crispy spiced purple slaw (35 cal).'],
      ['Pickled Onions', 'Tangy house-pickled onions (20 cal).'],
      ['Roasted Corn', 'Sweet fire-roasted corn (45 cal).'],
      ['Diced Onions', 'Fresh diced red onions (10 cal).'],
      ['Fresh Herbs', 'Chipped mint & coriander (5 cal).'],
    ],
  },
];

const chefBowls: MenuItem[] = [
  { name: 'Chicken Tikka Masala Bowl', price: '$10.99', calories: '680 cal', description: 'Chicken tikka and tikka masala over white basmati, finished with spicy mango drizzle and hot sauce.' },
  { name: 'Butter Chicken Bowl', price: '$10.99', calories: '710 cal', description: 'Chicken in butter masala over white basmati, with DASARI ranch drizzle and hot sauce.' },
  { name: 'Spiced Lamb Bowl', price: '$12.99', calories: '690 cal', description: 'Tender spiced lamb, white basmati, roasted vegetables, chickpea masala, mint yogurt, hot sauce.' },
  { name: 'Vegetarian Paneer Bowl', price: '$10.99', calories: '640 cal', description: 'Paneer, butter masala, chickpea masala, white basmati, mint yogurt, hot sauce.', badge: 'V' },
  { name: 'Vegan Bowl', price: '$10.99', calories: '540 cal', description: 'Tofu, roasted vegetables, chickpea masala, yellow lentils, brown basmati, spicy mango, hot sauce.', badge: 'VE' },
  { name: 'Pro Bowl', price: '$13.77', calories: '820 cal', description: 'Double roasted vegetables, your choice of protein, signature sauce, and hot stuff. Lamb +$3 · Salmon +$4.' },
  { name: 'Dasari Salad', price: '$12.99', calories: '420 cal', description: 'Choice of protein over greens, roasted broccoli 🥦, tomatoes, roasted corn, chickpeas, cranberries, cheese, pickled onions, slaw and dressing.' },
];

const familyItems: MenuItem[] = [
  { name: 'Chicken Tikka Masala', price: 'Pint $12.75 · Quart $25.50', calories: '320 cal / 4 oz' },
  { name: 'Butter Chicken', price: 'Pint $12.75 · Quart $25.50', calories: '340 cal / 4 oz' },
  { name: 'Paneer Tikka Masala', price: 'Pint $12.75 · Quart $25.50', calories: '310 cal / 4 oz', badge: 'V' },
  { name: 'Butter Paneer', price: 'Pint $12.75 · Quart $25.50', calories: '330 cal / 4 oz', badge: 'V' },
  { name: 'Rotisserie Chicken', price: 'Pint $16 · Quart $32', calories: '280 cal / 4 oz' },
  { name: 'Chicken', price: 'Pint $15 · Quart $30', calories: '240 cal / 4 oz' },
  { name: 'Spicy Chicken', price: 'Pint $15 · Quart $30', calories: '250 cal / 4 oz' },
  { name: 'Paneer', price: 'Pint $15 · Quart $30', calories: '290 cal / 4 oz', badge: 'V' },
  { name: 'Tofu', price: 'Pint $15 · Quart $30', calories: '180 cal / 4 oz', badge: 'VE' },
];

const sideItems: MenuItem[] = [
  { name: 'Basmati Rice', price: '$3.25 pint | $6.50 quart', calories: '210 cal', description: 'Fragrant basmati rice' },
  { name: 'Naan', price: '5 for $9 · 10 for $18', calories: '290 cal', description: 'Housemade. Pillowy soft. Fresh baked.' },
  { name: 'Wheat Naan', price: '5 for $9 · 10 for $18', calories: '270 cal', description: 'Fresh-baked wheat naan.' },
  { name: 'Samosas', price: '10 for $11.50', calories: '140 cal / pc', description: 'Savory pastries filled with potatoes, peas and spices.' },
  { name: 'Sauces', price: '$5', calories: '80 cal / 2 oz', description: '8 oz signature sauce bottle' },
  { name: 'Hot Sauce Bottle', price: '$5.99', calories: '15 cal / tbsp', description: 'Dasari signature spicy hot sauce bottle' },
];

const beverageItems: MenuItem[] = [
  { name: 'Pepsi', price: '', calories: '150 cal', description: 'Fountain soda' },
  { name: 'Dr Pepper', price: '', calories: '150 cal', description: 'Fountain soda' },
  { name: 'Mountain Dew', price: '', calories: '170 cal', description: 'Fountain soda' },
  { name: 'Pink Lemonade', price: '', calories: '140 cal', description: 'Groves Best lemonade' },
  { name: 'Water', price: '', calories: '0 cal', description: 'Filtered ice water' },
  { name: 'Coca-Cola Zero Sugar', price: '', calories: '0 cal', description: 'Zero sugar fountain soda' },
  { name: 'Orange Soda', price: '', calories: '160 cal', description: 'Groves Best orange' },
  { name: 'Coca-Cola', price: '', calories: '140 cal', description: 'Original taste fountain soda' },
  { name: 'Unsweetened Black Tea', price: '', calories: '0 cal', description: 'Groves Best fresh brewed black tea' },
  { name: 'Sweet Black Tea', price: '', calories: '110 cal', description: 'Groves Best fresh brewed sweet tea' },
  { name: 'Raspberry Tea', price: '', calories: '120 cal', description: 'Groves Best brewed raspberry tea' },
  { name: 'Strawberry Lemonade', price: '', calories: '150 cal', description: 'Craft \'62 pure cane beverage' },
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="#top" aria-label="Dasari Fusion Grill home"><img className="brand-banner-logo" src="/assets/images/dasari-logo-banner.png" alt="Dasari Fusion Grill Indian Cuisine" /></a>;
}

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadingOut(true), 350);
          setTimeout(() => setLoaded(true), 1050);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className={`loading-screen ${fadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-art-wrapper">
          <img src="/assets/images/dasari-loading-art.png" alt="Dasari Tandoor Artwork" className="loading-art-img" />
          <div className="loading-art-glow" />
        </div>
        <div className="loading-text">
          <h2>DASARI FUSION GRILL</h2>
          <p className="loading-tag">AUTHENTIC FLAVORS · FUSION EXPERIENCE</p>
          <div className="loading-bar-container">
            <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="loading-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

function Badge({ value }: { value?: 'V' | 'VE' | 'GF' }) {
  return value ? <span className={`badge badge-${value.toLowerCase()}`}>{value}</span> : null;
}

function PlateCard({ item, active }: { item: FoodItem; active?: boolean }) {
  return (
    <article className={`plate-card ${active ? 'plate-active' : ''}`}>
      <div className="plate">
        <div className="plate-inner">
          <img src={item.image} alt={`Dasari Fusion Grill ${item.name} - ${item.description}`} loading="lazy" />
        </div>
      </div>
      <div className="plate-copy">
        <div className="item-heading">
          <h3>{item.name}</h3>
          <Badge value={item.badge} />
        </div>
        <div className="item-price-row">
          <strong>{item.price}</strong>
          {item.calories && <span className="calorie-tag">{item.calories}</span>}
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function PlateCarousel({ items, id }: { items: FoodItem[]; id?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  if (items.length <= 1) {
    return (
      <div className="single-plate-wrapper" id={id}>
        {items.map((item, idx) => (
          <PlateCard key={`${item.name}-${idx}`} item={item} active={false} />
        ))}
      </div>
    );
  }

  // Repeat items to create a seamless infinite loop (at least 18 cards)
  const totalCopies = Math.max(6, Math.ceil(18 / (items.length || 1)));
  const displayItems = Array.from({ length: totalCopies }, () => items).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const setInitialPos = () => {
      if (!track || track.scrollWidth === 0) return;
      const singleSetWidth = track.scrollWidth / totalCopies;
      const middleIndex = Math.floor(totalCopies / 2);
      track.scrollLeft = singleSetWidth * middleIndex;
    };

    setInitialPos();
    const raf = requestAnimationFrame(setInitialPos);
    const timer = setTimeout(setInitialPos, 150);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [items, totalCopies]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || dragging) return;

    const singleSetWidth = track.scrollWidth / totalCopies;
    const middleIndex = Math.floor(totalCopies / 2);

    if (track.scrollLeft < singleSetWidth * 1) {
      track.scrollLeft += singleSetWidth * middleIndex;
    } else if (track.scrollLeft > singleSetWidth * (totalCopies - 2)) {
      track.scrollLeft -= singleSetWidth * middleIndex;
    }
  };

  const scrollByCard = (direction: number) => {
    if (!trackRef.current) return;
    const cardWidth = 338; // 310px width + 28px gap
    trackRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    setDragging(true);
    dragStart.current = event.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !trackRef.current) return;
    const delta = event.clientX - dragStart.current;
    const track = trackRef.current;
    track.scrollLeft = scrollStart.current - delta;

    const singleSetWidth = track.scrollWidth / totalCopies;
    const middleIndex = Math.floor(totalCopies / 2);

    if (track.scrollLeft < singleSetWidth * 1) {
      track.scrollLeft += singleSetWidth * middleIndex;
      dragStart.current = event.clientX;
      scrollStart.current = track.scrollLeft;
    } else if (track.scrollLeft > singleSetWidth * (totalCopies - 2)) {
      track.scrollLeft -= singleSetWidth * middleIndex;
      dragStart.current = event.clientX;
      scrollStart.current = track.scrollLeft;
    }
  };

  return (
    <div className="carousel" id={id}>
      <div className="carousel-controls">
        <span>Drag the plates to explore</span>
        <div>
          <button aria-label="Previous dish" onClick={() => scrollByCard(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button aria-label="Next dish" onClick={() => scrollByCard(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        className={`plate-track ${dragging ? 'is-dragging' : ''}`}
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        {displayItems.map((item, idx) => (
          <PlateCard key={`${item.name}-${idx}`} item={item} active={false} />
        ))}
      </div>
    </div>
  );
}

function MenuRows({ items }: { items: MenuItem[] }) {
  return (
    <div className="menu-rows">
      {items.map((item) => (
        <article className="menu-row" key={item.name}>
          <div>
            <div className="row-title">
              <h3>{item.name}</h3>
              <Badge value={item.badge} />
              {item.calories && <span className="calorie-tag">{item.calories}</span>}
            </div>
            {item.description && <p>{item.description}</p>}
          </div>
          {item.price && <strong>{item.price}</strong>}
        </article>
      ))}
    </div>
  );
}

function Header({ scrolled, onMenuToggle }: { scrolled: boolean; onMenuToggle?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const links = [['MENU', '#menu'], ['POPULAR', '#popular'], ['ABOUT', '#about'], ['LOCATION', '#location']];
  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    onMenuToggle?.(next);
  };
  const closeMenu = () => {
    setOpen(false);
    onMenuToggle?.(false);
  };
  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''} ${open ? 'header-menu-open' : ''}`}>
      <div className="header-inner">
        <Logo light />
        <nav>
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS</a>
          <a className="button button-small" href="#menu">VIEW MENU <ArrowRight size={15} /></a>
        </div>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}<ArrowRight size={18} />
            </a>
          ))}
          <a href={mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            GET DIRECTIONS<ArrowRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}

function ElephantFloralArt({ className = "", light = false }: { className?: string; light?: boolean }) {
  const strokeColor = light ? "#d4a74a" : "#3a5c3a";
  return (
    <svg
      className={`temple-wireframe-svg elephant-wireframe-svg ${className}`}
      viewBox="0 0 380 460"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ── 1. ORNATE INDIAN TORANA (HAVELI ARCHWAY) ── */}
      <g strokeWidth="1.2">
        <path d="M 40 450 L 40 180 C 40 100 110 40 190 40 C 270 40 340 100 340 180 L 340 450" strokeWidth="1.4" opacity="0.8" />
        <path d="M 52 450 L 52 185 C 52 110 115 54 190 54 C 265 54 328 110 328 185 L 328 450" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
        
        {/* Multi-Cusped Mughal / Rajasthani Arch */}
        <path d="M 60 210 C 60 170 85 155 105 160 C 125 140 150 135 168 148 C 178 128 202 128 212 148 C 230 135 255 140 275 160 C 295 155 320 170 320 210" strokeWidth="1.5" />
        <path d="M 70 210 C 70 178 92 165 110 170 C 128 152 150 148 166 158 C 176 140 204 140 214 158 C 230 148 252 152 270 170 C 288 165 310 178 310 210" strokeWidth="0.8" opacity="0.7" />

        {/* Arch Finial & Top Lotus Crest */}
        <path d="M 190 40 L 190 16 M 182 28 C 182 18 190 14 190 14 C 190 14 198 18 198 28 Z" strokeWidth="1.3" />
        <circle cx="190" cy="12" r="2.5" />
        
        {/* Hanging Palace Bells (Ghanta) from Arch Cusps */}
        <line x1="105" y1="160" x2="105" y2="185" strokeWidth="0.9" />
        <path d="M 100 193 C 100 185 110 185 110 193 Z" strokeWidth="1.1" />
        <line x1="97" y1="193" x2="113" y2="193" strokeWidth="1.3" />
        <circle cx="105" cy="196" r="1.5" />

        <line x1="190" y1="130" x2="190" y2="152" strokeWidth="0.9" />
        <path d="M 184 162 C 184 152 196 152 196 162 Z" strokeWidth="1.2" />
        <line x1="181" y1="162" x2="199" y2="162" strokeWidth="1.4" />
        <circle cx="190" cy="166" r="2" />

        <line x1="275" y1="160" x2="275" y2="185" strokeWidth="0.9" />
        <path d="M 270 193 C 270 185 280 185 280 193 Z" strokeWidth="1.1" />
        <line x1="267" y1="193" x2="283" y2="193" strokeWidth="1.3" />
        <circle cx="275" cy="196" r="1.5" />

        {/* Jasmine Flower Festoons */}
        <path d="M 105 165 Q 148 180 190 145 Q 232 180 275 165" strokeWidth="0.9" strokeDasharray="2 3" opacity="0.6" />
      </g>

      {/* ── 2. THE SACRED ROYAL ELEPHANT (GAJA) ── */}
      <g strokeWidth="1.2">
        {/* Head & Forehead */}
        <path d="M 172 230 C 158 210 128 210 112 226 C 100 238 96 254 94 276 C 92 298 80 312 66 310 C 56 308 54 296 61 286 C 68 274 84 276 83 290 C 82 296 77 298 72 296" strokeWidth="1.8" />
        <path d="M 112 254 C 106 268 102 282 100 298 C 98 308 92 314 80 314" strokeWidth="1.4" />
        
        {/* Trunk Ridges */}
        <path d="M 98 264 Q 104 268 108 263" strokeWidth="1" />
        <path d="M 96 276 Q 102 280 106 275" strokeWidth="1" />
        <path d="M 95 288 Q 100 292 104 287" strokeWidth="1" />
        <path d="M 94 300 Q 98 304 102 299" strokeWidth="1" />

        {/* Sacred Blooming Lotus held high in Trunk */}
        <path d="M 64 286 C 58 272 52 256 56 244" strokeWidth="1.5" />
        <path d="M 56 244 C 50 234 50 222 56 214 C 62 222 62 234 56 244 Z" strokeWidth="1.4" />
        <path d="M 56 244 C 44 238 40 228 46 220 C 52 227 54 236 56 244 Z" strokeWidth="1.2" />
        <path d="M 56 244 C 36 244 32 236 38 228 C 44 235 50 240 56 244 Z" strokeWidth="0.9" opacity="0.8" />
        <path d="M 56 244 C 68 238 72 228 66 220 C 60 227 58 236 56 244 Z" strokeWidth="1.2" />
        <path d="M 56 244 C 76 244 80 236 74 228 C 68 235 62 240 56 244 Z" strokeWidth="0.9" opacity="0.8" />
        <path d="M 48 245 Q 56 250 64 245" strokeWidth="1.4" />

        {/* Tusk with Royal Carved Bands */}
        <path d="M 115 256 C 101 262 90 256 83 246 C 93 249 106 251 118 248 Z" strokeWidth="1.5" />
        <line x1="97" y1="252" x2="100" y2="257" strokeWidth="1.2" />
        <line x1="104" y1="251" x2="107" y2="255" strokeWidth="1.2" />

        {/* Eye & Royal Forehead Ornament (Mathabana) */}
        <path d="M 126 238 Q 132 234 139 238 Q 132 243 126 238 Z" strokeWidth="1.3" />
        <circle cx="132" cy="238" r="1.5" fill="currentColor" />
        <path d="M 114 222 C 122 232 136 232 144 222" strokeWidth="1.4" />
        <path d="M 117 216 C 124 224 138 224 146 216" strokeWidth="0.9" opacity="0.7" />
        <circle cx="129" cy="228" r="2" />
        <circle cx="129" cy="234" r="1.3" />

        {/* Ornate Ear with Indian Paisley Curves */}
        <path d="M 148 224 C 168 228 180 246 172 272 C 164 284 148 282 142 268" strokeWidth="1.6" />
        <path d="M 150 234 C 162 240 166 254 160 266" strokeWidth="1" opacity="0.75" />
        <path d="M 154 242 C 160 248 162 254 158 260" strokeWidth="0.8" opacity="0.6" />

        {/* Neck Bell Garland */}
        <path d="M 140 274 C 146 284 158 290 170 290" strokeWidth="1.4" />
        <circle cx="148" cy="282" r="2" />
        <circle cx="158" cy="287" r="2.2" />
        <circle cx="168" cy="290" r="2" />

        {/* Back, Body Arch, Rump */}
        <path d="M 172 230 C 190 224 212 227 230 234 C 248 242 258 260 260 280 C 262 298 255 318 252 334" strokeWidth="1.8" />
        <path d="M 148 316 C 172 322 198 322 220 314" strokeWidth="1.5" />

        {/* Tail */}
        <path d="M 260 282 C 265 300 266 318 263 334" strokeWidth="1.4" />
        <path d="M 263 334 C 267 342 261 350 266 358 C 262 352 258 344 263 334 Z" strokeWidth="1.3" />

        {/* Front Legs */}
        <path d="M 121 285 L 118 350 L 129 350 L 132 305" strokeWidth="1.2" opacity="0.6" />
        <path d="M 136 292 C 134 312 133 330 131 360 L 146 360 C 147 342 148 324 151 306" strokeWidth="1.8" />
        <rect x="131" y="348" width="15" height="4" rx="1.5" strokeWidth="1.2" />
        <circle cx="134" cy="355" r="1.2" />
        <circle cx="139" cy="355" r="1.2" />
        <circle cx="144" cy="355" r="1.2" />
        <path d="M 131 358 Q 135 354 139 358" strokeWidth="1.1" />
        <path d="M 139 358 Q 143 354 146 358" strokeWidth="1.1" />

        {/* Hind Legs */}
        <path d="M 248 315 L 253 350 L 261 350 L 258 310" strokeWidth="1.2" opacity="0.6" />
        <path d="M 228 304 C 232 320 234 336 236 360 L 251 360 C 250 344 247 326 241 306" strokeWidth="1.8" />
        <rect x="236" y="348" width="15" height="4" rx="1.5" strokeWidth="1.2" />
        <circle cx="239" cy="355" r="1.2" />
        <circle cx="244" cy="355" r="1.2" />
        <circle cx="248" cy="355" r="1.2" />
        <path d="M 236 358 Q 240 354 244 358" strokeWidth="1.1" />
        <path d="M 244 358 Q 248 354 251 358" strokeWidth="1.1" />

        {/* ── CEREMONIAL SADDLE BLANKET (JHOOL) ── */}
        <path d="M 170 238 C 188 234 210 237 226 242 L 232 294 C 212 302 186 302 165 294 Z" strokeWidth="1.6" />
        <path d="M 168 244 C 186 240 208 243 223 248 L 228 288 C 211 295 188 295 170 288 Z" strokeWidth="1" opacity="0.8" />
        
        {/* Intricate Diamond Jaali & Lotus Center on Saddle */}
        <g opacity="0.85">
          <line x1="174" y1="250" x2="222" y2="284" strokeWidth="0.8" />
          <line x1="186" y1="246" x2="226" y2="272" strokeWidth="0.8" />
          <line x1="170" y1="262" x2="208" y2="291" strokeWidth="0.8" />
          <line x1="218" y1="246" x2="171" y2="282" strokeWidth="0.8" />
          <line x1="206" y1="244" x2="168" y2="270" strokeWidth="0.8" />
          <line x1="226" y1="258" x2="182" y2="291" strokeWidth="0.8" />
          <circle cx="198" cy="268" r="6" strokeWidth="1.2" />
          <circle cx="198" cy="268" r="2.5" />
          <path d="M 198 262 L 198 274 M 192 268 L 204 268" strokeWidth="0.8" />
        </g>

        {/* Fringed Beaded Tassels */}
        <path d="M 165 294 Q 172 301 179 294 Q 186 301 193 294 Q 200 301 207 294 Q 214 301 221 294 Q 227 301 232 294" strokeWidth="1.2" />
        <circle cx="172" cy="303" r="1.5" />
        <circle cx="186" cy="303" r="1.5" />
        <circle cx="200" cy="303" r="1.5" />
        <circle cx="214" cy="303" r="1.5" />
        <circle cx="227" cy="303" r="1.5" />

        {/* Royal Howdah Cushion & Canopy Finial */}
        <rect x="184" y="226" width="28" height="8" rx="2" strokeWidth="1.4" />
        <path d="M 190 226 Q 198 216 206 226 Z" strokeWidth="1.2" />
        <line x1="198" y1="216" x2="198" y2="208" strokeWidth="1.4" />
        <circle cx="198" cy="206" r="2.5" strokeWidth="1.2" />
      </g>

      {/* ── 3. STEPPED INDIAN LOTUS PEDESTAL (PADMASANA) ── */}
      <g strokeWidth="1.3">
        <rect x="75" y="360" width="230" height="14" rx="2" strokeWidth="1.4" />
        <path d="M 75 367 L 305 367" strokeWidth="0.8" />

        <path d="M 78 374 Q 86 384 94 374 Q 102 384 110 374 Q 118 384 126 374 Q 134 384 142 374 Q 150 384 158 374 Q 166 384 174 374 Q 182 384 190 374 Q 198 384 206 374 Q 214 384 222 374 Q 230 384 238 374 Q 246 384 254 374 Q 262 384 270 374 Q 278 384 286 374 Q 294 384 302 374" strokeWidth="1.2" />

        <rect x="60" y="386" width="260" height="16" rx="3" strokeWidth="1.5" />
        <path d="M 60 394 L 320 394" strokeWidth="0.8" />

        <rect x="42" y="412" width="296" height="20" rx="3" strokeWidth="1.7" />
        <path d="M 42 422 L 338 422" strokeWidth="0.8" />
        <line x1="25" y1="440" x2="355" y2="440" strokeWidth="2.2" />
        <line x1="15" y1="446" x2="365" y2="446" strokeWidth="1.2" opacity="0.6" />
      </g>

      {/* ── 4. FLANKING SACRED LOTUS PLANTS & VINES ── */}
      <g strokeWidth="1.1" opacity="0.85">
        <path d="M 70 410 C 50 380 44 330 52 280" strokeWidth="1.2" />
        <path d="M 48 340 C 30 330 30 355 46 360 C 56 362 58 350 48 340 Z" />
        <path d="M 48 340 L 42 352" strokeWidth="0.8" />

        <path d="M 310 410 C 330 370 335 320 324 265" strokeWidth="1.2" />
        <path d="M 324 265 C 330 252 338 252 344 265 C 338 274 330 274 324 265 Z" strokeWidth="1.2" />
        <path d="M 324 265 C 314 260 316 250 326 248 C 330 254 328 260 324 265 Z" strokeWidth="1" />
        <path d="M 344 265 C 354 260 352 250 342 248 C 338 254 340 260 344 265 Z" strokeWidth="1" />
        <circle cx="334" cy="260" r="2" />
        <path d="M 326 335 C 345 325 345 350 329 355 C 319 357 317 345 326 335 Z" />
      </g>
    </svg>
  );
}


/* ── Lotus Flower Wireframe Decorator ── */


/* ── Royal Indian Floral Scroll Frieze (Directly modeled on the reference wireframe) ── */
function RoyalFloralFrieze({
  className = "",
  light = false,
  color,
  flipY = false
}: {
  className?: string;
  light?: boolean;
  color?: string;
  flipY?: boolean;
}) {
  const strokeColor = color || (light ? "#d4a74a" : "#2d4e30");
  return (
    <div
      className={`royal-floral-frieze ${className}`}
      aria-hidden="true"
      style={{ transform: flipY ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1000 220"
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 1. HORIZONTAL BEADED SPINES */}
        <g opacity="0.6" strokeWidth="1">
          <line x1="20" y1="115" x2="330" y2="115" strokeWidth="0.8" />
          <line x1="20" y1="115" x2="330" y2="115" strokeDasharray="2 8" strokeWidth="2.5" />
          <line x1="670" y1="115" x2="980" y2="115" strokeWidth="0.8" />
          <line x1="670" y1="115" x2="980" y2="115" strokeDasharray="2 8" strokeWidth="2.5" />
        </g>

        {/* 2. UPPER FLOATING FLORAL BRANCH SWAGS */}
        <g transform="translate(190, 68)" strokeWidth="1.1">
          <path d="M -130 15 C -90 -10 -40 -15 0 0 C 40 -15 90 -10 130 15" strokeWidth="1.3" />
          <path d="M -90 -4 C -70 -25 -50 -15 -40 2" />
          <path d="M 90 -4 C 70 -25 50 -15 40 2" />
          <path d="M 0 0 C -12 -18 -4 -30 0 -32 C 4 -30 12 -18 0 0 Z" strokeWidth="1.2" />
          <path d="M 0 0 C -22 -10 -25 -25 -10 -28 C -4 -25 -2 -14 0 0 Z" strokeWidth="1" />
          <path d="M 0 0 C 22 -10 25 -25 10 -28 C 4 -25 2 -14 0 0 Z" strokeWidth="1" />
          <circle cx="0" cy="-35" r="2" fill={strokeColor} />
          <path d="M -70 -8 C -85 -22 -100 -12 -92 2 C -85 2 -78 -2 -70 -8 Z" />
          <path d="M -115 10 C -130 0 -140 12 -125 20 C -120 18 -118 12 -115 10 Z" />
          <path d="M 70 -8 C 85 -22 100 -12 92 2 C 85 2 78 -2 70 -8 Z" />
          <path d="M 115 10 C 130 0 140 12 125 20 C 120 18 118 12 115 10 Z" />
          <path d="M -130 15 C -145 22 -150 15 -142 8" />
          <path d="M 130 15 C 145 22 150 15 142 8" />
        </g>

        <g transform="translate(810, 68)" strokeWidth="1.1">
          <path d="M -130 15 C -90 -10 -40 -15 0 0 C 40 -15 90 -10 130 15" strokeWidth="1.3" />
          <path d="M -90 -4 C -70 -25 -50 -15 -40 2" />
          <path d="M 90 -4 C 70 -25 50 -15 40 2" />
          <path d="M 0 0 C -12 -18 -4 -30 0 -32 C 4 -30 12 -18 0 0 Z" strokeWidth="1.2" />
          <path d="M 0 0 C -22 -10 -25 -25 -10 -28 C -4 -25 -2 -14 0 0 Z" strokeWidth="1" />
          <path d="M 0 0 C 22 -10 25 -25 10 -28 C 4 -25 2 -14 0 0 Z" strokeWidth="1" />
          <circle cx="0" cy="-35" r="2" fill={strokeColor} />
          <path d="M -70 -8 C -85 -22 -100 -12 -92 2 C -85 2 -78 -2 -70 -8 Z" />
          <path d="M -115 10 C -130 0 -140 12 -125 20 C -120 18 -118 12 -115 10 Z" />
          <path d="M 70 -8 C 85 -22 100 -12 92 2 C 85 2 78 -2 70 -8 Z" />
          <path d="M 115 10 C 130 0 140 12 125 20 C 120 18 118 12 115 10 Z" />
          <path d="M -130 15 C -145 22 -150 15 -142 8" />
          <path d="M 130 15 C 145 22 150 15 142 8" />
        </g>

        {/* 3. LOWER OUTER FLOURISH WINGS */}
        <g strokeWidth="1.2">
          <path d="M 15 180 C 40 150 80 165 120 175 C 160 185 210 155 250 145 C 280 138 310 135 340 142" strokeWidth="1.6" />
          <path d="M 25 185 C 55 160 95 175 130 182 C 170 190 215 165 250 152" strokeWidth="0.8" opacity="0.7" />
          
          <g transform="translate(65, 168)" strokeWidth="1">
            <circle cx="0" cy="0" r="4" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="1.5" fill={strokeColor} />
            <path d="M 0 -4 C -3 -9 3 -9 0 -4 Z" />
            <path d="M 3.5 -2 C 8 -5 9 1 3.5 -2 Z" />
            <path d="M 3.5 2 C 9 -1 8 5 3.5 2 Z" />
            <path d="M 0 4 C 3 9 -3 9 0 4 Z" />
            <path d="M -3.5 2 C -8 5 -9 -1 -3.5 2 Z" />
            <path d="M -3.5 -2 C -9 1 -8 -5 -3.5 -2 Z" />
          </g>

          <g transform="translate(145, 172)" strokeWidth="1">
            <circle cx="0" cy="0" r="5" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="2" fill={strokeColor} />
            <path d="M 0 -5 C -4 -12 4 -12 0 -5 Z" />
            <path d="M 4 -3 C 11 -7 12 1 4 -3 Z" />
            <path d="M 4 3 C 12 -1 11 7 4 3 Z" />
            <path d="M 0 5 C 4 12 -4 12 0 5 Z" />
            <path d="M -4 3 C -11 7 -12 -1 -4 3 Z" />
            <path d="M -4 -3 C -12 1 -11 -7 -4 -3 Z" />
          </g>

          <g transform="translate(275, 142)" strokeWidth="1.1">
            <circle cx="0" cy="0" r="7" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="3" />
            <circle cx="0" cy="0" r="1.2" fill={strokeColor} />
            <path d="M 0 -7 C -4 -16 4 -16 0 -7 Z" strokeWidth="1.2" />
            <path d="M 5 -5 C 13 -13 16 -4 5 -5 Z" />
            <path d="M 7 0 C 16 -4 16 4 7 0 Z" strokeWidth="1.2" />
            <path d="M 5 5 C 16 4 13 13 5 5 Z" />
            <path d="M 0 7 C 4 16 -4 16 0 7 Z" strokeWidth="1.2" />
            <path d="M -5 5 C -13 13 -16 4 -5 5 Z" />
            <path d="M -7 0 C -16 4 -16 -4 -7 0 Z" strokeWidth="1.2" />
            <path d="M -5 -5 C -16 -4 -13 -13 -5 -5 Z" />
          </g>

          <path d="M 15 180 C 2 188 -6 178 0 168 C 6 158 18 162 14 172 C 10 178 2 174 4 168" strokeWidth="1.3" />
          <path d="M 100 168 C 95 152 80 148 85 162 C 90 170 95 168 100 168 Z" />
          <path d="M 180 178 C 175 162 160 160 168 174" />
          <path d="M 215 168 C 225 150 240 152 232 165" />
        </g>

        <g strokeWidth="1.2">
          <path d="M 985 180 C 960 150 920 165 880 175 C 840 185 790 155 750 145 C 720 138 690 135 660 142" strokeWidth="1.6" />
          <path d="M 975 185 C 945 160 905 175 870 182 C 830 190 785 165 750 152" strokeWidth="0.8" opacity="0.7" />

          <g transform="translate(935, 168)" strokeWidth="1">
            <circle cx="0" cy="0" r="4" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="1.5" fill={strokeColor} />
            <path d="M 0 -4 C -3 -9 3 -9 0 -4 Z" />
            <path d="M 3.5 -2 C 8 -5 9 1 3.5 -2 Z" />
            <path d="M 3.5 2 C 9 -1 8 5 3.5 2 Z" />
            <path d="M 0 4 C 3 9 -3 9 0 4 Z" />
            <path d="M -3.5 2 C -8 5 -9 -1 -3.5 2 Z" />
            <path d="M -3.5 -2 C -9 1 -8 -5 -3.5 -2 Z" />
          </g>

          <g transform="translate(855, 172)" strokeWidth="1">
            <circle cx="0" cy="0" r="5" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="2" fill={strokeColor} />
            <path d="M 0 -5 C -4 -12 4 -12 0 -5 Z" />
            <path d="M 4 -3 C 11 -7 12 1 4 -3 Z" />
            <path d="M 4 3 C 12 -1 11 7 4 3 Z" />
            <path d="M 0 5 C 4 12 -4 12 0 5 Z" />
            <path d="M -4 3 C -11 7 -12 -1 -4 3 Z" />
            <path d="M -4 -3 C -12 1 -11 -7 -4 -3 Z" />
          </g>

          <g transform="translate(725, 142)" strokeWidth="1.1">
            <circle cx="0" cy="0" r="7" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="3" />
            <circle cx="0" cy="0" r="1.2" fill={strokeColor} />
            <path d="M 0 -7 C -4 -16 4 -16 0 -7 Z" strokeWidth="1.2" />
            <path d="M 5 -5 C 13 -13 16 -4 5 -5 Z" />
            <path d="M 7 0 C 16 -4 16 4 7 0 Z" strokeWidth="1.2" />
            <path d="M 5 5 C 16 4 13 13 5 5 Z" />
            <path d="M 0 7 C 4 16 -4 16 0 7 Z" strokeWidth="1.2" />
            <path d="M -5 5 C -13 13 -16 4 -5 5 Z" />
            <path d="M -7 0 C -16 4 -16 -4 -7 0 Z" strokeWidth="1.2" />
            <path d="M -5 -5 C -16 -4 -13 -13 -5 -5 Z" />
          </g>

          <path d="M 985 180 C 998 188 1006 178 1000 168 C 994 158 982 162 986 172 C 990 178 998 174 996 168" strokeWidth="1.3" />
          <path d="M 900 168 C 905 152 920 148 915 162 C 910 170 905 168 900 168 Z" />
          <path d="M 820 178 C 825 162 840 160 832 174" />
          <path d="M 785 168 C 775 150 760 152 768 165" />
        </g>

        {/* 4. CENTERPIECE: ORNATE ROYAL DAMASK CREST */}
        <g transform="translate(500, 95)">
          <g strokeWidth="1.3">
            <path d="M 0 -88 C -8 -75 -12 -65 0 -45 C 12 -65 8 -75 0 -88 Z" strokeWidth="1.5" />
            <path d="M 0 -88 L 0 -45" strokeWidth="0.9" />
            <circle cx="0" cy="-92" r="2.5" fill={strokeColor} />
            <circle cx="0" cy="-98" r="1.5" />

            <path d="M 0 -65 C -16 -62 -22 -50 -12 -40 C -6 -44 0 -46 0 -65 Z" strokeWidth="1.2" />
            <path d="M 0 -65 C 16 -62 22 -50 12 -40 C 6 -44 0 -46 0 -65 Z" strokeWidth="1.2" />
            <path d="M -12 -40 C -28 -38 -34 -25 -20 -15 C -12 -22 -6 -28 -12 -40 Z" />
            <path d="M 12 -40 C 28 -38 34 -25 20 -15 C 12 -22 6 -28 12 -40 Z" />
            <path d="M -20 -15 C -36 -12 -42 4 -26 15 C -18 7 -14 0 -20 -15 Z" />
            <path d="M 20 -15 C 36 -12 42 4 26 15 C 18 7 14 0 20 -15 Z" />
          </g>

          <g strokeWidth="1.2">
            <ellipse cx="0" cy="0" rx="14" ry="18" strokeWidth="1.5" />
            <ellipse cx="0" cy="0" rx="8" ry="11" strokeWidth="1" />
            <circle cx="0" cy="0" r="3.5" fill={strokeColor} />
            <path d="M 0 -18 L 0 18 M -14 0 L 14 0" strokeWidth="0.8" opacity="0.7" />

            <path d="M 0 -18 C -18 -32 18 -32 0 -18 Z" strokeWidth="1.2" />
            <path d="M -14 0 C -28 -14 -28 14 -14 0 Z" strokeWidth="1.1" />
            <path d="M 14 0 C 28 -14 28 14 14 0 Z" strokeWidth="1.1" />
            <path d="M 0 18 C -18 32 18 32 0 18 Z" strokeWidth="1.2" />

            <path d="M -14 -12 C -24 -24 -36 -16 -32 -2 C -24 -4 -18 -8 -14 -12 Z" />
            <path d="M 14 -12 C 24 -24 36 -16 32 -2 C 24 -4 18 -8 14 -12 Z" />
            <path d="M -14 12 C -24 24 -36 16 -32 2 C -24 4 -18 8 -14 12 Z" />
            <path d="M 14 12 C 24 24 36 16 32 2 C 24 4 18 8 14 12 Z" />
          </g>

          <g strokeWidth="1.4">
            <path d="M -10 25 C -50 35 -110 40 -160 22 C -185 14 -210 -2 -225 -25" strokeWidth="1.8" />
            <path d="M -20 32 C -60 42 -115 45 -155 30" strokeWidth="0.9" opacity="0.75" />
            <path d="M 10 25 C 50 35 110 40 160 22 C 185 14 210 -2 225 -25" strokeWidth="1.8" />
            <path d="M 20 32 C 60 42 115 45 155 30" strokeWidth="0.9" opacity="0.75" />
            <path d="M -30 20 C -45 12 -52 24 -44 32 C -36 40 -20 30 -28 18 C -32 12 -40 15 -38 22" strokeWidth="1.2" />
            <path d="M 30 20 C 45 12 52 24 44 32 C 36 40 20 30 28 18 C 32 12 40 15 38 22" strokeWidth="1.2" />
          </g>

          <g transform="translate(-115, 12) rotate(-22)" strokeWidth="1.1">
            <circle cx="0" cy="0" r="7" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="3" fill={strokeColor} />
            <path d="M 0 -7 C -4 -15 4 -15 0 -7 Z" />
            <path d="M 5 -5 C 13 -13 15 -4 5 -5 Z" />
            <path d="M 7 0 C 15 -4 15 4 7 0 Z" />
            <path d="M 5 5 C 15 4 13 13 5 5 Z" />
            <path d="M 0 7 C 4 15 -4 15 0 7 Z" />
            <path d="M -5 5 C -13 13 -15 4 -5 5 Z" />
            <path d="M -7 0 C -15 4 -15 -4 -7 0 Z" />
            <path d="M -5 -5 C -15 -4 -13 -13 -5 -5 Z" />
            <path d="M -10 -10 C -18 -22 -6 -24 -4 -12" />
            <path d="M 10 -10 C 18 -22 6 -24 4 -12" />
          </g>

          <g transform="translate(115, 12) rotate(22)" strokeWidth="1.1">
            <circle cx="0" cy="0" r="7" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="3" fill={strokeColor} />
            <path d="M 0 -7 C -4 -15 4 -15 0 -7 Z" />
            <path d="M 5 -5 C 13 -13 15 -4 5 -5 Z" />
            <path d="M 7 0 C 15 -4 15 4 7 0 Z" />
            <path d="M 5 5 C 15 4 13 13 5 5 Z" />
            <path d="M 0 7 C 4 15 -4 15 0 7 Z" />
            <path d="M -5 5 C -13 13 -15 4 -5 5 Z" />
            <path d="M -7 0 C -15 4 -15 -4 -7 0 Z" />
            <path d="M -5 -5 C -15 -4 -13 -13 -5 -5 Z" />
            <path d="M -10 -10 C -18 -22 -6 -24 -4 -12" />
            <path d="M 10 -10 C 18 -22 6 -24 4 -12" />
          </g>

          <g transform="translate(0, 68)" strokeWidth="1.1">
            <line x1="0" y1="-36" x2="0" y2="-8" strokeWidth="1.3" />
            <circle cx="0" cy="-22" r="1.5" />
            <circle cx="0" cy="-14" r="2" />
            <circle cx="0" cy="0" r="6" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="2" fill={strokeColor} />
            <path d="M 0 -6 C -3 -12 3 -12 0 -6 Z" />
            <path d="M 4 -4 C 10 -10 12 -2 4 -4 Z" />
            <path d="M 6 0 C 12 -3 12 3 6 0 Z" />
            <path d="M 4 4 C 12 2 10 10 4 4 Z" />
            <path d="M 0 6 C 3 12 -3 12 0 6 Z" />
            <path d="M -4 4 C -10 10 -12 2 -4 4 Z" />
            <path d="M -6 0 C -12 3 -12 -3 -6 0 Z" />
            <path d="M -4 -4 C -12 -2 -10 -10 -4 -4 Z" />
            <path d="M 0 6 L 0 16 M -3 12 Q 0 18 3 12" strokeWidth="1.1" />
            <circle cx="0" cy="18" r="1.5" fill={strokeColor} />

            <path d="M -8 -4 C -25 -12 -38 0 -48 10 C -38 8 -22 5 -8 -4 Z" />
            <path d="M -30 2 C -42 -5 -50 5 -40 10" />
            <path d="M 8 -4 C 25 -12 38 0 48 10 C 38 8 22 5 8 -4 Z" />
            <path d="M 30 2 C 42 -5 50 5 40 10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LotusBorderTop({ className = "" }: { className?: string }) {
  return <RoyalFloralFrieze className={`lotus-border-top ${className}`} color="#3a5c3a" />;
}

function LotusBorderBottom({ className = "" }: { className?: string }) {
  return <RoyalFloralFrieze className={`lotus-border-bottom ${className}`} color="#3a5c3a" flipY />;
}

function IndianFloralDivider({ className = "", light = false }: { className?: string; light?: boolean }) {
  return <RoyalFloralFrieze className={`indian-floral-divider ${className}`} light={light} />;
}

function EdgeFiligreeDecor({ className = "", light = false, flip = false }: { className?: string; light?: boolean; flip?: boolean }) {
  const strokeColor = light ? "#d4a74a" : "#3a5c3a";
  return (
    <div
      className={`edge-filigree-decor ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg viewBox="0 0 280 130" fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
        {/* Horizontal beaded line */}
        <line x1="10" y1="65" x2="270" y2="65" strokeWidth="0.8" opacity="0.6" />
        <line x1="10" y1="65" x2="270" y2="65" strokeDasharray="2 6" strokeWidth="2.2" opacity="0.6" />

        {/* Upper branch */}
        <g strokeWidth="1.1">
          <path d="M 20 65 C 60 40 120 30 180 45 C 220 55 250 45 270 30" strokeWidth="1.3" />
          <path d="M 120 38 C 105 20 125 10 135 25" />
          <path d="M 180 45 C 170 25 190 15 205 32" />
          {/* Small Rosette */}
          <g transform="translate(155, 32)">
            <circle cx="0" cy="0" r="4" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="1.5" fill={strokeColor} />
            <path d="M 0 -4 C -2 -8 2 -8 0 -4 Z" />
            <path d="M 3.5 -2 C 7 -4 8 1 3.5 -2 Z" />
            <path d="M 3.5 2 C 8 -1 7 4 3.5 2 Z" />
            <path d="M 0 4 C 2 8 -2 8 0 4 Z" />
            <path d="M -3.5 2 C -7 4 -8 -1 -3.5 2 Z" />
            <path d="M -3.5 -2 C -7 1 -8 -4 -3.5 -2 Z" />
          </g>
        </g>

        {/* Lower sweeping main flourish */}
        <g strokeWidth="1.2">
          <path d="M 10 65 C 40 95 90 110 140 100 C 190 90 230 105 260 120" strokeWidth="1.5" />
          <path d="M 25 72 C 55 98 100 108 145 96" strokeWidth="0.8" opacity="0.7" />

          {/* Main Rosette at (110, 95) */}
          <g transform="translate(110, 92)" strokeWidth="1.1">
            <circle cx="0" cy="0" r="6" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="2.5" />
            <circle cx="0" cy="0" r="1" fill={strokeColor} />
            <path d="M 0 -6 C -3 -13 3 -13 0 -6 Z" />
            <path d="M 4 -3 C 11 -7 12 1 4 -3 Z" />
            <path d="M 4 3 C 12 -1 11 7 4 3 Z" />
            <path d="M 0 6 C 3 13 -3 13 0 6 Z" />
            <path d="M -4 3 C -11 7 -12 -1 -4 3 Z" />
            <path d="M -4 -3 C -12 1 -11 -7 -4 -3 Z" />
          </g>

          {/* Acanthus Leaves */}
          <path d="M 70 85 C 62 70 48 72 54 84 Z" />
          <path d="M 170 95 C 160 80 178 75 182 88 Z" />
          <path d="M 220 102 C 215 88 232 85 235 98 Z" />

          {/* Terminal spiral flourish at tip */}
          <path d="M 260 120 C 272 126 278 118 272 110 C 266 102 254 106 258 114" strokeWidth="1.3" />
        </g>
      </svg>
    </div>
  );
}

function LotusDecor({ size = 120, className = "", light = false }: { size?: number; className?: string; light?: boolean }) {
  const c = light ? "rgba(212,167,74,0.22)" : "rgba(58,92,58,0.18)";
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none" stroke={c} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`flower-decor ${className}`} aria-hidden="true">
      {/* Outer petals */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>{
        const r = a * Math.PI / 180;
        const x = 60 + 40 * Math.cos(r), y = 60 + 40 * Math.sin(r);
        const cx1 = 60 + 28*Math.cos(r-0.4), cy1 = 60 + 28*Math.sin(r-0.4);
        const cx2 = 60 + 28*Math.cos(r+0.4), cy2 = 60 + 28*Math.sin(r+0.4);
        return <path key={i} d={`M60 60 C${cx1} ${cy1} ${x-4*Math.cos(r+1.2)} ${y-4*Math.sin(r+1.2)} ${x} ${y} C${x-4*Math.cos(r-1.2)} ${y-4*Math.sin(r-1.2)} ${cx2} ${cy2} 60 60`} />;
      })}
      {/* Inner petals */}
      {[15,75,135,195,255,315].map((a,i)=>{
        const r = a * Math.PI / 180;
        const x = 60 + 22 * Math.cos(r), y = 60 + 22 * Math.sin(r);
        return <path key={i} d={`M60 60 Q${60+15*Math.cos(r-0.5)} ${60+15*Math.sin(r-0.5)} ${x} ${y} Q${60+15*Math.cos(r+0.5)} ${60+15*Math.sin(r+0.5)} 60 60`} />;
      })}
      <circle cx="60" cy="60" r="8" />
      <circle cx="60" cy="60" r="4" />
      <circle cx="60" cy="60" r="1.5" />
    </svg>
  );
}

/* ── Mandala Decor ── */
function MandalaDecor({ size = 180, className = "", light = false }: { size?: number; className?: string; light?: boolean }) {
  const c = light ? "rgba(212,167,74,0.18)" : "rgba(58,92,58,0.15)";
  const rings = [12, 20, 30, 42, 54];
  return (
    <svg viewBox="0 0 140 140" width={size} height={size} fill="none" stroke={c} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" className={`flower-decor ${className}`} aria-hidden="true">
      {rings.map((r,ri)=>(
        <g key={ri}>
          <circle cx="70" cy="70" r={r} />
          {Array.from({length: 6+ri*3},(_,i)=>{
            const a = (i/(6+ri*3))*2*Math.PI;
            return <line key={i} x1={70+r*Math.cos(a)} y1={70+r*Math.sin(a)} x2={70+(r+4)*Math.cos(a)} y2={70+(r+4)*Math.sin(a)} strokeWidth="0.7" />;
          })}
        </g>
      ))}
      {/* Petal ring */}
      {Array.from({length:12},(_,i)=>{
        const a = i/12*2*Math.PI, r1=42, r2=58;
        const x1=70+r1*Math.cos(a), y1=70+r1*Math.sin(a);
        const x2=70+r2*Math.cos(a), y2=70+r2*Math.sin(a);
        const cx=70+(r1+r2)/2*Math.cos(a-0.25)+8*Math.cos(a+Math.PI/2), cy=70+(r1+r2)/2*Math.sin(a-0.25)+8*Math.sin(a+Math.PI/2);
        const cx2=70+(r1+r2)/2*Math.cos(a+0.25)+8*Math.cos(a-Math.PI/2), cy2=70+(r1+r2)/2*Math.sin(a+0.25)+8*Math.sin(a-Math.PI/2);
        return <path key={i} d={`M${x1} ${y1} C${cx} ${cy} ${cx2} ${cy2} ${x2} ${y2}`} />;
      })}
      <circle cx="70" cy="70" r="6" />
      <circle cx="70" cy="70" r="2" />
    </svg>
  );
}

/* ── Kolam / Rangoli Grid Pattern ── */
function KolamDecor({ size = 100, className = "", light = false }: { size?: number; className?: string; light?: boolean }) {
  const c = light ? "rgba(212,167,74,0.2)" : "rgba(58,92,58,0.16)";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none" stroke={c} strokeWidth="0.9" className={`flower-decor ${className}`} aria-hidden="true">
      {/* Diamond grid */}
      {[20,35,50,65,80].map(x=>[20,35,50,65,80].map(y=>(
        <g key={`${x}-${y}`}>
          <rect x={x-6} y={y-6} width="12" height="12" transform={`rotate(45 ${x} ${y})`} strokeWidth="0.8" />
          <circle cx={x} cy={y} r="2" />
        </g>
      )))}
      {/* Connecting lines */}
      {[20,35,50,65,80].map(x=><line key={x} x1={x} y1="14" x2={x} y2="86" strokeWidth="0.5" opacity="0.5" />)}
      {[20,35,50,65,80].map(y=><line key={y} x1="14" y1={y} x2="86" y2={y} strokeWidth="0.5" opacity="0.5" />)}
    </svg>
  );
}

/* ── Vine/Flower corner decoration ── */
function VineDecor({ className = "", light = false, flip = false }: { className?: string; light?: boolean; flip?: boolean }) {
  const c = light ? "rgba(212,167,74,0.2)" : "rgba(58,92,58,0.16)";
  return (
    <svg viewBox="0 0 160 160" width="160" height="160" fill="none" stroke={c} strokeWidth="1" strokeLinecap="round" className={`flower-decor vine-decor ${className}`} aria-hidden="true" style={{ transform: flip ? 'scaleX(-1)' : undefined }}>
      {/* Main vine curve */}
      <path d="M10 150 C40 120 80 100 100 60 C115 30 100 10 80 15" strokeWidth="1.2" />
      {/* Flower buds along vine */}
      {[[45,115],[65,90],[85,65],[95,45]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r={8-i} />
          {[0,60,120,180,240,300].map((a,j)=>{
            const r = a*Math.PI/180, r2=7-i;
            return <path key={j} d={`M${x} ${y} Q${x+r2*0.7*Math.cos(r-0.5)} ${y+r2*0.7*Math.sin(r-0.5)} ${x+r2*Math.cos(r)} ${y+r2*Math.sin(r)} Q${x+r2*0.7*Math.cos(r+0.5)} ${y+r2*0.7*Math.sin(r+0.5)} ${x} ${y}`} strokeWidth="0.8" />;
          })}
        </g>
      ))}
      {/* Leaves */}
      <path d="M45 115 C35 100 25 108 30 118 C35 128 50 120 45 115" />
      <path d="M70 88 C80 78 90 85 85 96 C80 107 65 98 70 88" />
      <path d="M87 62 C78 52 68 58 72 68 C76 78 92 72 87 62" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow?: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="section-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <FloralFleuronDivider color={light ? "#d4a74a" : "#3a5c3a"} size={36} opacity={light ? 0.75 : 0.65} />
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState<'google' | 'apple'>('google');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="top" className="app"><LoadingScreen /><Header scrolled={scrolled} onMenuToggle={setMenuOpen} />
    <main>
      <section className="hero"><div className="hero-bg"><img src="/assets/images/hero_farm_mountains_bg.jpg" alt="Dasari Fusion Grill farm feast with rotisserie machine, Indian mountains, and table spread" /></div><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow hero-eyebrow">INDIAN FUSION · INDIAN FLAVORS · BOWLS · NAAN</p><h1><span>DASARI</span><em>FUSION GRILL</em></h1><p className="hero-subtitle">AUTHENTIC INDIAN FLAVORS.<br />BUILT YOUR WAY.</p><p className="hero-body">Slow-roasted and spice-simmered.</p><div className="hero-actions"><a className="button" href="#menu">EXPLORE MENU <ArrowRight size={17} /></a><a className="button button-ghost" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <MapPin size={16} /></a></div></div><div className="hero-mark">EST. IN FLAVOR<br /><span>01</span></div></section>

      {/* Section 2: Featured Banners Infinite Carousel */}
      <TopHeroCarousel />

      <section className="intro section-pad" id="intro">
        <div className="intro-mark" title="Sacred Indian Temple Architecture">
          <TempleWireframe />
        </div>
        <div className="intro-content">
          <p className="eyebrow">THE DASARI WAY</p>
          <h2>Authentic flavors.<br /><i>Modern fusion.</i></h2>
          <p>Indian classics meet a fast, fresh fusion format. Build a bowl, savor hot tandoori naan, share street snacks or bring home a family meal.</p>
          <div style={{ margin: '14px 0 16px 0' }}>
            <FloralFleuronDivider color="#3a5c3a" size={42} opacity={0.6} />
          </div>
          <a className="underlined-link" href="#about">OUR STORY <ArrowRight size={16} /></a>
        </div>
        <div className="intro-right" title="Royal Indian Ceremonial Elephant">
          <ElephantFloralArt />
        </div>
      </section>

      <section className="popular section-pad section-dark" id="popular">
        <div className="section-head">
          <SectionIntro eyebrow="THE CROWD FAVORITES" title="Popular picks" copy="The plates people come back for." light />
          <div className="section-number">01 <span>/ 04</span></div>
        </div>
        <PlateCarousel items={popular} />
      </section>

      <section className="bowl-section section-pad" id="menu">
        <FloralCornerAccent position="top-left" size={64} color="#d4a74a" opacity={0.35} />
        <FloralCornerAccent position="top-right" size={64} color="#d4a74a" opacity={0.35} />
        <div className="bowl-edge-decor-left">
          <EdgeFiligreeDecor />
        </div>
        <div className="bowl-edge-decor-right">
          <EdgeFiligreeDecor flip />
        </div>

        <LotusBorderTop />
        <PuneFloralBorder color="#3a5c3a" opacity={0.28} className="pune-rim-top" />

        <div className="bowl-heading">
          <div>
            <p className="eyebrow">THE SIGNATURE FORMAT</p>
            <h2>Build your <i>bowl.</i></h2>
          </div>
          <div className="price-callout">
            <span>STARTING AT</span>
            <strong>$10.99<span>+</span></strong>
          </div>
        </div>
        <p className="bowl-lede">Choose your base, protein, masala, sauce, heat &amp; garnishes. Work your way down — we'll handle the rest.</p>
        
        <div className="bowl-steps">
          {bowlSteps.map((step) => (
            <div className="bowl-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-title">
                  <h3>{step.title}</h3>
                  <span>{step.note}</span>
                </div>
                <div className="ingredient-grid">
                  {step.items.map(([name, desc]) => (
                    <div className="ingredient" key={name}>
                      <strong>{name}</strong>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
                {step.price && <div className="step-price">{step.price}</div>}
              </div>
            </div>
          ))}
        </div>

        <PuneFloralBorder color="#3a5c3a" opacity={0.28} flipY className="pune-rim-bottom" />
        <LotusBorderBottom />
        <FloralCornerAccent position="bottom-left" size={64} color="#d4a74a" opacity={0.35} />
        <FloralCornerAccent position="bottom-right" size={64} color="#d4a74a" opacity={0.35} />
      </section>

      <section className="menu-section section-pad"><div className="category-bar">{categories.map((category, index) => <a key={category} className={index === 0 ? 'active' : ''} href={index === 0 ? '#menu' : `#${category.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}>{category}</a>)}</div><section className="menu-block" id="chef-select"><div className="menu-block-head"><SectionIntro eyebrow="CHOOSE A DASARI FAVORITE" title="Chef select bowls" copy="Already built, already balanced. A Dasari favorite in one order." /><span className="menu-index">02</span></div><MenuRows items={chefBowls} /></section>
        <div className="visual-break"><img src={photos.feast} alt="Dasari Fusion Grill Indian food spread with curries, basmati rice and fresh tandoori naan" loading="lazy" /><div><p>Slow-roasted.<br /><i>Fresh-baked.</i><br />Spice-simmered.</p><FloralFleuronDivider color="#d4a74a" size={38} opacity={0.75} /><span>DASARI FUSION GRILL</span></div></div>
        <section className="menu-block snack-block" id="street-snacks"><div className="menu-block-head"><SectionIntro eyebrow="SMALL PLATES FOR THE TABLE" title="Street snacks" copy="Or for one determined person." /><span className="menu-index">03</span></div><PlateCarousel items={snackItems} /></section>
        <section className="rotisserie-showcase-section" id="rotisserie">
          <div className="rotisserie-showcase-bg">
            <img src="/assets/images/rotisserie_farm_bg.jpg" alt="Dasari farm feast background" className="rotisserie-bg-img" />
            <div className="rotisserie-bg-overlay" />
          </div>
          <div className="rotisserie-showcase-container">
            <div className="rotisserie-machine-col">
              <div className="rotisserie-machine-card">
                <div className="rotisserie-oven-glow" />
                <img
                  src="/assets/images/rotisserie_machine.jpg"
                  alt="Articia Rotisserie Oven with golden roasted chickens at Dasari Fusion Grill"
                  className="rotisserie-machine-img"
                />
              </div>
            </div>
            <div className="rotisserie-content-col">
              <h2 className="rotisserie-hero-title">
                <span>OUR SIGNATURE</span>
                <em>ROTISSERIE CHICKEN</em>
              </h2>
              <p className="rotisserie-hero-subtitle">Slow-Roasted · Spice-Marinated · Flame-Seared</p>
              <p className="rotisserie-hero-description">
                Slow-roasted daily in our open-flame rotisserie oven. Marinated for 24 hours in authentic Indian aromatics, yielding golden crispy skin and exceptionally tender, juicy meat.
              </p>
              
              <div className="rotisserie-clean-specs">
                <div className="spec-bullet">
                  <Flame size={18} className="spec-icon" />
                  <div>
                    <strong>Slow Open-Flame Roasting</strong>
                    <span>Cooked naturally over open heat with zero heavy oils or greases.</span>
                  </div>
                </div>
                <div className="spec-bullet">
                  <Leaf size={18} className="spec-icon" />
                  <div>
                    <strong>100% Whole Spices &amp; Real Ingredients</strong>
                    <span>House-ground Indian masala rub, free from artificial colors or flavorings.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rotisserie-dishes-header">
            <SectionIntro eyebrow="SERVED FRESH FROM THE ROTISSERIE" title="Rotisserie Chicken Plates" copy="Served whole, half, or over basmati rice with your choice of signature sauces." />
          </div>
          <PlateCarousel items={rotisserieItems} />
        </section>
        <section className="menu-block compact-block" id="family-meals"><div className="menu-block-head"><SectionIntro eyebrow="SERVES THE TABLE · SOLD BY THE PINT OR QUART" title="Family meals" /><span className="menu-index">04</span></div><MenuRows items={familyItems} /></section>
        <section className="menu-block compact-block" id="lentils-and-masalas"><div className="menu-block-head"><SectionIntro eyebrow="PINT OR QUART · ON THEIR OWN OR PILED OVER RICE" title="Lentils & masalas" /><span className="menu-index">05</span></div><MenuRows items={lentilItems} /></section>
        <section className="menu-block compact-block" id="sides-and-extras"><div className="menu-block-head"><SectionIntro eyebrow="ROUND OUT ANY ORDER" title="Sides & extras" /><span className="menu-index">06</span></div><MenuRows items={sideItems} /></section>
        <section className="menu-block compact-block" id="beverages"><div className="menu-block-head"><SectionIntro eyebrow="FOUNTAIN & CRAFT BREWED BEVERAGES" title="Beverages" copy="Refreshing fountain sodas, fresh brewed iced teas, and craft lemonades." /><span className="menu-index">07</span></div><MenuRows items={beverageItems} /></section>
      </section>

      <section className="about-section section-pad" id="about"><div className="about-art"><div className="art-circle"><img src="/assets/images/dasari-loading-art.png" alt="Dasari Fusion Grill brand artwork" loading="lazy" onError={(event) => { event.currentTarget.src = photos.feast; }} /></div><span className="art-label">AUTHENTIC<br />TASTE</span></div><div className="about-copy"><p className="eyebrow">MORE THAN A MEAL</p><h2>Authentic Indian taste,<br /><i>your way.</i></h2><p>We keep the classics close and give you room to make them yours. Fresh ingredients, slow-roasted meats, fresh-baked naan and masalas that take their time.</p><div className="service-list"><span>DINE IN</span><span>TAKE OUT</span><span>CATERING</span><span>100% HALAL</span></div><p className="small-note">Ask us about family meals, catering trays and party-size orders.</p></div></section>

      <section className="location-section section-pad" id="location">
        <div className="location-panel">
          <div className="location-copy">
            <p className="eyebrow">MAKE A LITTLE ROOM</p>
            <h2>Come find us.</h2>
            <div className="location-address-block">
              <p className="location-restaurant-title">DASARI FUSION GRILL</p>
              <p className="location-street-address">
                <MapPin size={18} className="location-pin-icon" /> 1163 E Tallmadge Ave
              </p>
              <p className="location-city-state">Akron, OH 44310</p>
              <span className="location-subtag">Indian fusion · Indian flavors · Bowls · Naan</span>
            </div>
            <div className="location-actions">
              <div className="location-buttons-row">
                <a
                  className={`button map-select-btn ${selectedMap === 'google' ? 'active-google-btn' : 'inactive-map-btn'}`}
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedMap('google')}
                >
                  <MapPin size={16} /> GOOGLE MAPS ↗
                </a>
                <a
                  className={`button map-select-btn button-apple-maps ${selectedMap === 'apple' ? 'active-apple-btn' : 'inactive-map-btn'}`}
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedMap('apple')}
                >
                  <AppleIcon size={14} /> APPLE MAPS ↗
                </a>
              </div>
            </div>
          </div>
          <div className="map-art">
            <div className="map-switch-tab-bar">
              <button
                type="button"
                className={`map-switch-tab ${selectedMap === 'google' ? 'tab-active-google' : ''}`}
                onClick={() => setSelectedMap('google')}
              >
                <MapPin size={14} /> Google Maps
              </button>
              <button
                type="button"
                className={`map-switch-tab ${selectedMap === 'apple' ? 'tab-active-apple' : ''}`}
                onClick={() => setSelectedMap('apple')}
              >
                <AppleIcon size={13} /> Apple Maps
              </button>
            </div>
            {selectedMap === 'google' ? (
              <iframe
                src={mapEmbedUrl}
                title="Dasari Fusion Grill location on Google Maps - 1163 E Tallmadge Ave, Akron, OH 44310"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="apple-map-view">
                <img
                  src="/assets/images/apple-map-preview.png"
                  alt="Apple Maps preview for Dasari Fusion Grill"
                  className="apple-map-bg-img"
                />
                <div className="apple-map-content-overlay">
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-map-pin-marker"
                    title="Open Dasari Fusion Grill in Apple Maps"
                  >
                    <div className="apple-pin-pulse" />
                    <div className="apple-pin-head">
                      <MapPin size={22} className="apple-pin-icon" />
                    </div>
                    <div className="apple-pin-callout">
                      <strong>DASARI FUSION GRILL</strong>
                      <span>1163 E Tallmadge Ave, Akron, OH 44310</span>
                    </div>
                  </a>

                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-map-launch-btn"
                    title="Open in Apple Maps"
                  >
                    <AppleIcon size={15} /> Open in Apple Maps ↗
                  </a>
                </div>
              </div>
            )}
            <div className="map-overlay-note">
              <MapPin size={17} />
              <div>
                <strong>DASARI FUSION GRILL</strong>
                <span>1163 E Tallmadge Ave, Akron, OH 44310</span>
                <a href={`tel:${storePhone.replace(/\s/g,'')}`} className="map-contact-link">📞 {storePhone}</a>
                <a href={`mailto:${storeEmail}`} className="map-contact-link">✉ {storeEmail}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <PuneFloralBorder color="#d4a74a" opacity={0.3} className="footer-pune-border" />
      <div className="footer-top">
        <div className="footer-brand-col">
          <Logo light />
          <p className="footer-tag">INDIAN FUSION · INDIAN FLAVORS · BOWLS · NAAN</p>
          <div className="footer-contact">
            <a href={`tel:${storePhone.replace(/\s/g,'')}`} className="footer-contact-link">
              <span className="footer-contact-icon">📞</span>{storePhone}
            </a>
            <a href={`mailto:${storeEmail}`} className="footer-contact-link">
              <span className="footer-contact-icon">✉</span>{storeEmail}
            </a>
          </div>
        </div>
        <div className="footer-halal-badge">
          <img
            src="/assets/images/halal-certified-badge.png"
            alt="Halal Food Certified"
            className="halal-badge-img"
          />
          <div className="halal-badge-copy">
            <span className="halal-pill-label">100% CERTIFIED</span>
            <strong>HALAL FOOD</strong>
            <small>All meats &amp; ingredients certified Halal</small>
          </div>
        </div>
        <p className="footer-services">DINE IN · TAKE OUT · CATERING</p>
        <a className="button button-cream" href={mapsUrl} target="_blank" rel="noreferrer">
          GET DIRECTIONS <ArrowRight size={16} />
        </a>
      </div>
      <div className="footer-arabesque">
        <SerlioArabesqueTailpiece size={64} color="#d4a74a" opacity={0.65} />
      </div>
      <div className="footer-bottom">
        <div className="footer-halal-inline">
          <img
            src="/assets/images/halal-certified-badge.png"
            alt="Halal Food Certified"
            className="halal-badge-inline-img"
          />
          <span>100% Halal Food Certified · Authentic Indian taste, your way.</span>
        </div>
        <div className="footer-nav">
          {[['MENU', '#menu'], ['ABOUT', '#about'], ['POPULAR', '#popular'], ['LOCATION', '#location']].map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <span>GF = Gluten Free · V = Vegetarian · VE = Vegan</span>
      </div>
    </footer>
    {/* Floating Halal badge on right side - clean badge only, hidden when mobile menu is open */}
    {!menuOpen && (
      <a href="#about" className="floating-halal-badge" title="100% Halal Food Certified" aria-label="100% Halal Food Certified">
        <img
          src="/assets/images/halal-certified-badge.png"
          alt="Halal Food Certified"
          className="floating-halal-img"
        />
      </a>
    )}
  </div>;
}

export default App;
