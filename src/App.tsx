import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Leaf, MapPin, Menu, X } from 'lucide-react';

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
const photos = {
  feast: '/assets/images/curry_masala_bowls.jpg',
  tikka: '/assets/images/tikka_masala_bowl.jpg',
  butterChicken: '/assets/images/butter_chicken_bowl.jpg',
  rotisserieBowl: '/assets/images/rotisserie_chicken_bowl.jpg',
  paneer: '/assets/images/paneer_bowl.jpg',
  vegan: '/assets/images/vegan_bowl.jpg',
  samosaChaat: '/assets/images/samosa_chaat.jpg',
  naanWrap: '/assets/images/naan_wrap.jpg',
  pavBhaji: '/assets/images/pav_bhaji.jpg',
  samosa: '/assets/images/samosas_plate.jpg',
  rotisserie: '/assets/images/rotisserie_chicken_dish.jpg',
  curry: '/assets/images/curry_masala_bowls.jpg',
};

const popular: FoodItem[] = [
  { name: 'Chicken Tikka Masala Bowl', price: '$10.99', calories: '680 cal', description: 'Chicken tikka, tikka masala, white basmati, spicy mango and hot sauce.', image: photos.tikka },
  { name: 'Butter Chicken Bowl', price: '$10.99', calories: '710 cal', description: 'Chicken in butter masala over white basmati, with DASARI ranch and hot sauce.', image: photos.butterChicken },
  { name: 'Rotisserie Chicken Bowl', price: '$11.99', calories: '610 cal', description: 'DASARI rotisserie chicken, white basmati, roasted vegetables and mint yogurt.', image: photos.rotisserieBowl },
  { name: 'Vegetarian Paneer Bowl', price: '$10.99', calories: '640 cal', description: 'Paneer, butter masala, chickpea masala, white basmati and mint yogurt.', image: photos.paneer, badge: 'V' },
  { name: 'Vegan Bowl', price: '$10.99', calories: '540 cal', description: 'Tofu, roasted vegetables, chickpea masala, yellow lentils and brown basmati.', image: photos.vegan, badge: 'VE' },
  { name: 'Samosa Chaat', price: '$8.99', calories: '450 cal', description: 'Samosas topped with chickpea masala, sweet yogurt and signature sauces.', image: photos.samosaChaat, badge: 'V' },
];

const wrapItems: FoodItem[] = [
  { name: 'Rotisserie Chicken Wrap', price: '$9.99', calories: '670 cal', description: 'Slow-roasted chicken, rice, sauce and red onions.', image: '/assets/images/rotisserie_wrap.jpg' },
  { name: 'Chicken Wrap', price: '$8.99', calories: '630 cal', description: 'Chicken, rice, sauce and red onions.', image: '/assets/images/grilled_chicken_wrap.jpg' },
  { name: 'Spicy Chicken Wrap', price: '$8.99', calories: '640 cal', description: 'Spicy chicken, rice, sauce and red onions.', image: '/assets/images/spicy_chicken_wrap.jpg' },
  { name: 'Lamb Wrap', price: '$9.99', calories: '720 cal', description: 'Lamb, rice, sauce and red onions.', image: '/assets/images/lamb_wrap.jpg' },
  { name: 'Paneer Wrap', price: '$8.99', calories: '680 cal', description: 'Paneer, rice, sauce and red onions.', image: '/assets/images/paneer_wrap.jpg', badge: 'V' },
  { name: 'Broccoli-Chickpea Wrap 🥦', price: '$8.99', calories: '560 cal', description: 'Roasted broccoli, chickpea masala, rice and sauce.', image: '/assets/images/cauli_chickpea_wrap.jpg', badge: 'VE' },
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

const categories = ['BUILD YOUR BOWL', 'CHEF SELECT', 'NAAN WRAPS', 'STREET SNACKS', 'ROTISSERIE', 'FAMILY MEALS', 'LENTILS & MASALAS', 'SIDES & EXTRAS', 'BEVERAGES'];

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
  { name: 'Rotisserie Chicken Bowl', price: '$11.99', calories: '610 cal', description: 'DASARI rotisserie chicken, white basmati, roasted vegetables, mint yogurt, hot sauce.' },
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

function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const links = [['MENU', '#menu'], ['POPULAR', '#popular'], ['ABOUT', '#about'], ['LOCATION', '#location']];
  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}><div className="header-inner"><Logo light /><nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="button button-small" href="#menu">VIEW MENU <ArrowRight size={15} /></a></div><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-nav">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={18} /></a>)}<a href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS<ArrowRight size={18} /></a></div>}</header>;
}

function TempleWireframe({ className = "", light = false }: { className?: string; light?: boolean }) {
  const color = light ? "rgba(201, 154, 72, 0.18)" : "rgba(74, 44, 29, 0.15)";
  return (
    <svg
      className={`temple-wireframe-svg ${className}`}
      viewBox="0 0 200 300"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M100 12 L100 24 M96 24 L104 24 M94 30 Q100 24 106 30 Q100 36 94 30 Z M97 36 L103 36 L100 42 Z" />
      <path d="M100 42 L80 70 L120 70 Z M88 56 L112 56" />
      <path d="M85 70 L85 90 L115 90 L115 70 M92 70 L92 90 M108 70 L108 90" />
      <path d="M72 90 L128 90 L136 115 L64 115 Z M78 102 L122 102" />
      <path d="M70 115 L70 145 L130 145 L130 115 M82 115 L82 145 M100 115 L100 145 M118 115 L118 145" />
      <path d="M54 145 L146 145 L156 175 L44 175 Z M62 160 L138 160" />
      <path d="M50 175 L50 220 L150 220 L150 175 M66 175 L66 220 M84 175 L84 220 M116 175 L116 220 M134 175 L134 220" />
      <path d="M86 220 L86 185 Q100 170 114 185 L114 220 Z M92 220 L92 192 Q100 180 108 192 L108 220 Z" />
      <path d="M34 220 L166 220 L174 245 L26 245 Z M42 232 L158 232" />
      <path d="M20 245 L180 245 L180 260 L20 260 Z" />
      <circle cx="100" cy="130" r="8" />
      <circle cx="100" cy="130" r="4" />
      <path d="M100 118 L100 142 M88 130 L112 130" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return <div className="section-intro">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedMap, setSelectedMap] = useState<'google' | 'apple'>('google');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="top" className="app"><LoadingScreen /><Header scrolled={scrolled} />
    <main>
      <section className="hero"><div className="hero-bg"><img src="/assets/images/hero_farm_mountains_bg.jpg" alt="Dasari Fusion Grill farm feast with rotisserie machine, Indian mountains, and table spread" /></div><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow hero-eyebrow">INDIAN FUSION · INDIAN FLAVORS · BOWLS · NAAN</p><h1><span>DASARI</span><em>FUSION GRILL</em></h1><p className="hero-subtitle">AUTHENTIC INDIAN FLAVORS.<br />BUILT YOUR WAY.</p><p className="hero-body">Slow-roasted and spice-simmered.</p><div className="hero-actions"><a className="button" href="#menu">EXPLORE MENU <ArrowRight size={17} /></a><a className="button button-ghost" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <MapPin size={16} /></a></div></div><div className="hero-mark">EST. IN FLAVOR<br /><span>01</span></div></section>

      <section className="intro section-pad" id="intro"><div className="intro-mark"><TempleWireframe /></div><div className="intro-content"><p className="eyebrow">THE DASARI WAY</p><h2>Authentic flavors.<br /><i>Modern fusion.</i></h2><p>Indian classics meet a fast, fresh fusion format. Build a bowl, grab a naan wrap, share street snacks or bring home a family meal.</p><a className="underlined-link" href="#about">OUR STORY <ArrowRight size={16} /></a></div><div className="intro-stamp"><span>FRESH</span><span>SPICED</span><span>DAILY</span></div></section>

      <section className="popular section-pad section-dark" id="popular"><div className="section-head"><SectionIntro eyebrow="THE CROWD FAVORITES" title="Popular picks" copy="The plates people come back for." /><div className="section-number">01 <span>/ 04</span></div></div><PlateCarousel items={popular} /></section>

      <section className="bowl-section section-pad" id="menu"><div className="bowl-heading"><div><p className="eyebrow">THE SIGNATURE FORMAT</p><h2>Build your <i>bowl.</i></h2></div><div className="price-callout"><span>STARTING AT</span><strong>$10.99<span>+</span></strong></div></div><p className="bowl-lede">Choose your base, protein, masala, sauce, heat &amp; garnishes. Work your way down — we'll handle the rest.</p><div className="bowl-steps">{bowlSteps.map((step) => <div className="bowl-step" key={step.number}><div className="step-number">{step.number}</div><div className="step-content"><div className="step-title"><h3>{step.title}</h3><span>{step.note}</span></div><div className="ingredient-grid">{step.items.map(([name, desc]) => <div className="ingredient" key={name}><strong>{name}</strong><span>{desc}</span></div>)}</div>{step.price && <div className="step-price">{step.price}</div>}</div></div>)}</div></section>

      <section className="menu-section section-pad"><div className="category-bar">{categories.map((category, index) => <a key={category} className={index === 0 ? 'active' : ''} href={index === 0 ? '#menu' : `#${category.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}>{category}</a>)}</div><section className="menu-block" id="chef-select"><div className="menu-block-head"><SectionIntro eyebrow="CHOOSE A DASARI FAVORITE" title="Chef select bowls" copy="Already built, already balanced. A Dasari favorite in one order." /><span className="menu-index">02</span></div><MenuRows items={chefBowls} /></section>
        <div className="visual-break"><img src={photos.feast} alt="Dasari Fusion Grill Indian food spread with curries, basmati rice and fresh tandoori naan" loading="lazy" /><div><p>Slow-roasted.<br /><i>Fresh-baked.</i><br />Spice-simmered.</p><span>DASARI FUSION GRILL</span></div></div>
        <section className="menu-block" id="naan-wraps"><div className="menu-block-head"><SectionIntro eyebrow="FRESH-BAKED · ROLLED TO ORDER" title="Naan wraps" copy="House-made naan, white basmati rice, our signature wrap sauce and red onions, wrapped around your choice of protein." /><span className="menu-index">03</span></div><PlateCarousel items={wrapItems} /></section>
        <section className="menu-block snack-block" id="street-snacks"><div className="menu-block-head"><SectionIntro eyebrow="SMALL PLATES FOR THE TABLE" title="Street snacks" copy="Or for one determined person." /><span className="menu-index">04</span></div><PlateCarousel items={snackItems} /></section>
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
        <section className="menu-block compact-block" id="family-meals"><div className="menu-block-head"><SectionIntro eyebrow="SERVES THE TABLE · SOLD BY THE PINT OR QUART" title="Family meals" /><span className="menu-index">06</span></div><MenuRows items={familyItems} /></section>
        <section className="menu-block compact-block" id="lentils-and-masalas"><div className="menu-block-head"><SectionIntro eyebrow="PINT OR QUART · ON THEIR OWN OR PILED OVER RICE" title="Lentils & masalas" /><span className="menu-index">07</span></div><MenuRows items={lentilItems} /></section>
        <section className="menu-block compact-block" id="sides-and-extras"><div className="menu-block-head"><SectionIntro eyebrow="ROUND OUT ANY ORDER" title="Sides & extras" /><span className="menu-index">08</span></div><MenuRows items={sideItems} /></section>
        <section className="menu-block compact-block" id="beverages"><div className="menu-block-head"><SectionIntro eyebrow="FOUNTAIN & CRAFT BREWED BEVERAGES" title="Beverages" copy="Refreshing fountain sodas, fresh brewed iced teas, and craft lemonades." /><span className="menu-index">09</span></div><MenuRows items={beverageItems} /></section>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Logo light />
          <p className="footer-tag">INDIAN FUSION · INDIAN FLAVORS · BOWLS · NAAN</p>
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
    {/* Floating Halal badge on right side - clean badge only */}
    <a href="#about" className="floating-halal-badge" title="100% Halal Food Certified" aria-label="100% Halal Food Certified">
      <img
        src="/assets/images/halal-certified-badge.png"
        alt="Halal Food Certified"
        className="floating-halal-img"
      />
    </a>
  </div>;
}

export default App;
