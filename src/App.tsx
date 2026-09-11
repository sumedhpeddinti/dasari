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
  const strokeColor = light ? "#d4a74a" : "#452618";
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

      {/* Vertical Lattice Mesh (Lata Mesh Grid) */}
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

      {/* Hanging Temple Bell (Ghanti) */}
      <path d="M200 365 L200 380 M194 380 Q200 376 206 380 M192 388 C192 380 208 380 208 388 L210 394 L190 394 Z M200 394 L200 398" strokeWidth="1.3" />
      <circle cx="200" cy="399" r="1.8" />

      {/* Sanctum Doors (Garbhagriha Dwaram) */}
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

function LotusMandalaOrnament({ className = "", light = false }: { className?: string; light?: boolean }) {
  const strokeColor = light ? "#d4a74a" : "#452618";
  return (
    <svg className={`lotus-mandala-svg ${className}`} viewBox="0 0 200 200" fill="none" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="100" cy="100" r="18" strokeWidth="1.4" />
      <circle cx="100" cy="100" r="12" strokeDasharray="2 2" />
      <circle cx="100" cy="100" r="6" />
      {/* Inner Petals */}
      <path d="M100 70 Q108 55 116 70 Q108 85 100 70 Z" />
      <path d="M130 100 Q145 108 130 116 Q115 108 130 100 Z" />
      <path d="M100 130 Q92 145 84 130 Q92 115 100 130 Z" />
      <path d="M70 100 Q55 92 70 84 Q85 92 70 100 Z" />
      <path d="M121 79 Q136 71 136 86 Q121 94 121 79 Z" />
      <path d="M121 121 Q136 129 121 136 Q113 121 121 121 Z" />
      <path d="M79 121 Q64 129 64 114 Q79 106 79 121 Z" />
      <path d="M79 79 Q64 71 79 64 Q87 79 79 79 Z" />
      {/* Outer Petals Layer */}
      <path d="M100 40 C125 15 150 40 135 70 C120 50 110 40 100 40 Z" strokeWidth="1.3" />
      <path d="M160 100 C185 125 160 150 130 135 C150 120 160 110 160 100 Z" strokeWidth="1.3" />
      <path d="M100 160 C75 185 50 160 65 130 C80 150 90 160 100 160 Z" strokeWidth="1.3" />
      <path d="M40 100 C15 75 40 50 70 65 C50 80 40 90 40 100 Z" strokeWidth="1.3" />
      {/* Paisley Swirl Accent Rays */}
      <path d="M140 40 C170 30 185 70 160 90" />
      <path d="M160 160 C170 190 130 205 110 180" />
      <path d="M60 160 C30 170 15 130 40 110" />
      <path d="M40 40 C30 10 70 -5 90 20" />
    </svg>
  );
}

function PaisleyFloralOrnament({ className = "", light = false }: { className?: string; light?: boolean }) {
  const strokeColor = light ? "#d4a74a" : "#452618";
  return (
    <svg className={`paisley-floral-svg ${className}`} viewBox="0 0 240 160" fill="none" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 140 C50 130 80 80 120 100 C160 120 180 60 220 40" strokeWidth="1.5" />
      <path d="M60 115 C90 100 120 50 150 70" />
      {/* Paisley Leaves */}
      <path d="M80 90 C70 60 100 40 110 70 Z" strokeWidth="1.3" />
      <path d="M130 75 C120 45 150 25 160 55 Z" strokeWidth="1.3" />
      <path d="M180 50 C170 20 200 0 210 30 Z" strokeWidth="1.3" />
      {/* Flower Buds */}
      <circle cx="110" cy="45" r="8" />
      <circle cx="160" cy="30" r="8" />
      <circle cx="210" cy="15" r="8" />
      <path d="M106 37 Q110 30 114 37 M156 22 Q160 15 164 22 M206 7 Q210 0 214 7" />
    </svg>
  );
}

function BrihadeeswararTempleIllustration({ className = "", light = false }: { className?: string; light?: boolean }) {
  const color = light ? "#d4a74a" : "#452618";
  return (
    <svg
      className={`brihadeeswarar-illustration-svg ${className}`}
      viewBox="0 0 900 480"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* TOP-LEFT TRADITIONAL KOLAM / RANGOLI PATTERN */}
      <g opacity="0.75" strokeWidth="1">
        <rect x="30" y="20" width="160" height="100" rx="4" strokeDasharray="3 3" opacity="0.4" />
        <path d="M40 30 Q55 20 70 30 Q85 40 100 30 Q115 20 130 30 Q145 40 160 30 M40 50 Q55 40 70 50 Q85 60 100 50 Q115 40 130 50 Q145 60 160 50 M40 70 Q55 60 70 70 Q85 80 100 70 Q115 60 130 70 Q145 80 160 70 M40 90 Q55 80 70 90 Q85 100 100 90 Q115 80 130 90 Q145 100 160 90" />
        <path d="M50 25 Q40 40 50 55 Q60 70 50 85 M70 25 Q60 40 70 55 Q80 70 70 85 M90 25 Q80 40 90 55 Q100 70 90 85 M110 25 Q100 40 110 55 Q120 70 110 85 M130 25 Q120 40 130 55 Q140 70 130 85 M150 25 Q140 40 150 55 Q160 70 150 85" />
        <circle cx="50" cy="35" r="2" fill={color} />
        <circle cx="70" cy="35" r="2" fill={color} />
        <circle cx="90" cy="35" r="2" fill={color} />
        <circle cx="110" cy="35" r="2" fill={color} />
        <circle cx="130" cy="35" r="2" fill={color} />
        <circle cx="150" cy="35" r="2" fill={color} />
        <circle cx="50" cy="55" r="2" fill={color} />
        <circle cx="70" cy="55" r="2" fill={color} />
        <circle cx="90" cy="55" r="2" fill={color} />
        <circle cx="110" cy="55" r="2" fill={color} />
        <circle cx="130" cy="55" r="2" fill={color} />
        <circle cx="150" cy="55" r="2" fill={color} />
        <circle cx="50" cy="75" r="2" fill={color} />
        <circle cx="70" cy="75" r="2" fill={color} />
        <circle cx="90" cy="75" r="2" fill={color} />
        <circle cx="110" cy="75" r="2" fill={color} />
        <circle cx="130" cy="75" r="2" fill={color} />
        <circle cx="150" cy="75" r="2" fill={color} />
      </g>

      {/* TOP-RIGHT FLOWING INDIAN LOTUS MANDALA & PAISLEY FLORAL ART */}
      <g opacity="0.85" strokeWidth="1.2">
        <circle cx="750" cy="110" r="35" />
        <circle cx="750" cy="110" r="25" strokeDasharray="3 3" />
        <circle cx="750" cy="110" r="14" />

        <path d="M750 75 Q765 60 780 75 Q765 90 750 75 Z" />
        <path d="M785 110 Q800 125 785 140 Q770 125 785 110 Z" />
        <path d="M750 145 Q735 160 720 145 Q735 130 750 145 Z" />
        <path d="M715 110 Q700 95 715 80 Q730 95 715 110 Z" />

        <path d="M775 85 Q795 75 795 95 Q775 105 775 85 Z" />
        <path d="M775 135 Q795 145 775 155 Q765 135 775 135 Z" />
        <path d="M725 135 Q705 145 705 125 Q725 115 725 135 Z" />
        <path d="M725 85 Q705 75 725 65 Q735 85 725 85 Z" />

        <path d="M750 40 C790 10 830 50 810 90 C780 70 760 50 750 40 Z" strokeWidth="1.4" />
        <path d="M820 110 C860 140 830 190 780 180 C780 140 800 120 820 110 Z" strokeWidth="1.4" />
        <path d="M750 180 C710 210 670 170 690 130 C720 150 740 170 750 180 Z" strokeWidth="1.4" />
        <path d="M680 110 C640 80 670 30 720 40 C720 80 700 100 680 110 Z" strokeWidth="1.4" />

        <path d="M650 100 C600 80 580 140 630 180 C670 210 700 170 680 130" strokeWidth="1.3" />
        <path d="M630 60 C580 40 560 100 610 140" strokeWidth="1" />
        <path d="M780 30 C820 10 870 50 840 90" strokeWidth="1" />

        <path d="M755 52 Q775 35 795 55 M765 62 Q785 45 802 65" opacity="0.6" />
        <path d="M805 125 Q825 145 805 165 M795 135 Q815 155 795 172" opacity="0.6" />
      </g>

      {/* === MAIN BRIHADEESWARAR TEMPLE SILHOUETTE (DRAVIDIAN VIMANA) === */}
      <path d="M335 30 L335 50 M330 50 L340 50 M332 40 L338 40 M335 50 C342 56 342 64 335 70 C328 64 328 56 335 50 Z" strokeWidth="1.4" />
      <path d="M320 70 C335 60 335 60 350 70 L355 90 L315 90 Z" strokeWidth="1.5" />
      <rect x="310" y="90" width="50" height="10" rx="2" strokeWidth="1.3" />

      {/* DRAVIDIAN VIMANA TIERED TOWER */}
      <path d="M320 100 L350 100 L354 118 L316 118 Z" />
      <path d="M316 118 L354 118 L358 136 L312 136 Z" />
      <path d="M312 136 L358 136 L362 154 L308 154 Z" />
      <path d="M308 154 L362 154 L366 172 L304 172 Z" />
      <path d="M304 172 L366 172 L370 190 L300 190 Z" />
      <path d="M300 190 L370 190 L374 208 L296 208 Z" />
      <path d="M296 208 L374 208 L378 226 L292 226 Z" />
      <path d="M292 226 L378 226 L382 244 L288 244 Z" />
      <path d="M288 244 L382 244 L386 262 L284 262 Z" />
      <path d="M284 262 L386 262 L390 280 L280 280 Z" />
      <path d="M280 280 L390 280 L395 300 L275 300 Z" strokeWidth="1.5" />
      <path d="M275 300 L395 300 L400 322 L270 322 Z" strokeWidth="1.6" />

      <path d="M322 100 L322 118 M335 100 L335 118 M348 100 L348 118" opacity="0.6" />
      <path d="M318 118 L318 136 M335 118 L335 136 M352 118 L352 136" opacity="0.6" />
      <path d="M314 136 L314 154 M335 136 L335 154 M356 136 L356 154" opacity="0.6" />
      <path d="M310 154 L310 172 M335 154 L335 172 M360 154 L360 172" opacity="0.6" />
      <path d="M306 172 L306 190 M335 172 L335 190 M364 172 L364 190" opacity="0.6" />
      <path d="M302 190 L302 208 M335 190 L335 208 M368 190 L368 208" opacity="0.6" />
      <path d="M298 208 L298 226 M335 208 L335 226 M372 208 L372 226" opacity="0.6" />
      <path d="M294 226 L294 244 M335 226 L335 244 M376 226 L376 244" opacity="0.6" />
      <path d="M290 244 L290 262 M335 244 L335 262 M380 244 L380 262" opacity="0.6" />
      <path d="M286 262 L286 280 M335 262 L335 280 M384 262 L384 280" opacity="0.6" />

      <rect x="260" y="322" width="150" height="48" rx="2" strokeWidth="1.6" />
      <path d="M260 338 L410 338 M260 354 L410 354" />
      <path d="M278 322 L278 370 M300 322 L300 370 M335 322 L335 370 M370 322 L370 370 M392 322 L392 370" opacity="0.75" />

      {/* === LONG COLONNADED MANDAPA === */}
      <path d="M310 290 L680 290 L710 325 L310 325 Z" strokeWidth="1.5" />
      <path d="M310 300 L690 300 M310 312 L700 312" />

      <path d="M520 265 L700 265 L715 290 L520 290 Z" strokeWidth="1.4" />
      <path d="M520 277 L708 277" />

      <path d="M330 325 L330 380 M360 325 L360 380 M390 325 L390 380 M420 325 L420 380 M450 325 L450 380 M480 325 L480 380 M510 325 L510 380 M540 325 L540 380 M570 325 L570 380 M600 325 L600 380 M630 325 L630 380 M660 325 L660 380 M690 325 L690 380" strokeWidth="1.2" />
      <path d="M325 335 L700 335" strokeWidth="1.3" />

      <rect x="290" y="370" width="425" height="28" rx="2" strokeWidth="1.6" />
      <path d="M290 384 L715 384" />

      {/* FRONT ENTRANCE GRAND STAIRCASE */}
      <path d="M680 370 L770 420 L770 435 L680 398 Z" strokeWidth="1.5" />
      <path d="M690 375 L770 419 M700 380 L770 418 M710 385 L770 417 M720 390 L770 416 M730 395 L770 415" opacity="0.8" />
      <path d="M680 398 L770 435 L680 435 Z" strokeWidth="1.3" />

      <path d="M260 360 L230 385 L230 398 L260 375 Z" strokeWidth="1.4" />
      <line x1="230" y1="398" x2="260" y2="398" strokeWidth="1.3" />

      <rect x="250" y="398" width="440" height="25" rx="3" strokeWidth="1.8" />
      <path d="M250 410 L690 410" />

      <rect x="235" y="423" width="550" height="22" rx="4" strokeWidth="2" />
      <path d="M235 434 L785 434" />

      <line x1="20" y1="445" x2="880" y2="445" strokeWidth="2.5" />
      <path d="M100 445 C150 455 200 460 300 460 M220 445 C280 460 380 470 550 470 M50 445 C80 460 120 470 200 475" opacity="0.75" strokeWidth="1.2" />

      {/* LANDSCAPE TREES */}
      <path d="M115 445 L115 340 M113 445 L113 340" strokeWidth="1.5" />
      <path d="M115 360 C90 350 70 330 85 300 C100 270 140 280 145 310 C150 340 130 360 115 360 Z" strokeWidth="1.3" />
      <path d="M95 320 Q115 300 130 320 M85 340 Q115 325 135 340" opacity="0.6" />

      <path d="M155 445 L155 380" strokeWidth="1.3" />
      <path d="M155 390 C140 380 135 360 150 350 C165 340 180 350 175 370 Z" strokeWidth="1.1" />
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

      <section className="intro section-pad" id="intro">
        <LotusMandalaOrnament className="intro-floating-lotus-left" />
        <PaisleyFloralOrnament className="intro-floating-paisley-right" />
        <div className="intro-top-grid">
          <div className="intro-content">
            <p className="eyebrow">THE DASARI WAY</p>
            <h2>Authentic flavors.<br /><i>Modern fusion.</i></h2>
            <p>Indian classics meet a fast, fresh fusion format. Build a bowl, grab a naan wrap, share street snacks or bring home a family meal.</p>
            <a className="underlined-link" href="#about">OUR STORY <ArrowRight size={16} /></a>
          </div>
          <div className="intro-stamp">
            <LotusMandalaOrnament className="stamp-lotus-icon" />
            <span>FRESH</span><span>SPICED</span><span>DAILY</span>
          </div>
        </div>

        {/* Brihadeeswarar Hindu Temple Dravidian Wireframe Line Art (Matching User Reference Drawing Exactly) */}
        <div className="temple-drawing-banner" title="Brihadeeswarar Dravidian Temple Wireframe Blueprint Drawing">
          <BrihadeeswararTempleIllustration />
        </div>
      </section>

      <section className="popular section-pad section-dark" id="popular">
        <LotusMandalaOrnament className="popular-bg-flower" light />
        <div className="section-head">
          <SectionIntro eyebrow="THE CROWD FAVORITES" title="Popular picks" copy="The plates people come back for." />
          <div className="section-number">01 <span>/ 04</span></div>
        </div>
        <PlateCarousel items={popular} />
      </section>

      <section className="bowl-section section-pad" id="menu">
        <PaisleyFloralOrnament className="bowl-bg-paisley" />
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
        <div className="bowl-steps">{bowlSteps.map((step) => <div className="bowl-step" key={step.number}><div className="step-number">{step.number}</div><div className="step-content"><div className="step-title"><h3>{step.title}</h3><span>{step.note}</span></div><div className="ingredient-grid">{step.items.map(([name, desc]) => <div className="ingredient" key={name}><strong>{name}</strong><span>{desc}</span></div>)}</div>{step.price && <div className="step-price">{step.price}</div>}</div></div>)}</div>
      </section>

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
