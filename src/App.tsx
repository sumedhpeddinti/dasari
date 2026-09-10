import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Leaf, MapPin, Menu, X } from 'lucide-react';

type FoodItem = { name: string; price: string; description: string; image: string; badge?: 'V' | 'VE' | 'GF' };
type MenuItem = { name: string; price: string; description?: string; badge?: 'V' | 'VE' | 'GF' };

const mapsUrl = 'https://maps.app.goo.gl/sFDW3pSq3YrCTpS77?g_st=iw';
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
  { name: 'Chicken Tikka Masala Bowl', price: '$10.99', description: 'Chicken tikka, tikka masala, white basmati, spicy mango and hot sauce.', image: photos.tikka },
  { name: 'Butter Chicken Bowl', price: '$10.99', description: 'Chicken in butter masala over white basmati, with DASARI ranch and hot sauce.', image: photos.butterChicken },
  { name: 'Rotisserie Chicken Bowl', price: '$11.99', description: 'DASARI rotisserie chicken, white basmati, roasted vegetables and mint yogurt.', image: photos.rotisserieBowl },
  { name: 'Vegetarian Paneer Bowl', price: '$10.99', description: 'Paneer, butter masala, chickpea masala, white basmati and mint yogurt.', image: photos.paneer, badge: 'V' },
  { name: 'Vegan Bowl', price: '$10.99', description: 'Tofu, roasted vegetables, chickpea masala, yellow lentils and brown basmati.', image: photos.vegan, badge: 'VE' },
  { name: 'Samosa Chaat', price: '$8.99', description: 'Samosas topped with chickpea masala, sweet yogurt and signature sauces.', image: photos.samosaChaat, badge: 'V' },
];

const wrapItems: FoodItem[] = [
  { name: 'Rotisserie Chicken Wrap', price: '$9.99', description: 'Slow-roasted chicken, rice, sauce and red onions.', image: '/assets/images/rotisserie_wrap.jpg' },
  { name: 'Chicken Wrap', price: '$8.99', description: 'Chicken, rice, sauce and red onions.', image: '/assets/images/grilled_chicken_wrap.jpg' },
  { name: 'Spicy Chicken Wrap', price: '$8.99', description: 'Spicy chicken, rice, sauce and red onions.', image: '/assets/images/spicy_chicken_wrap.jpg' },
  { name: 'Lamb Wrap', price: '$9.99', description: 'Lamb, rice, sauce and red onions.', image: '/assets/images/lamb_wrap.jpg' },
  { name: 'Paneer Wrap', price: '$8.99', description: 'Paneer, rice, sauce and red onions.', image: '/assets/images/paneer_wrap.jpg', badge: 'V' },
  { name: 'Cauli-Chickpea Wrap', price: '$8.99', description: 'Roasted cauliflower, chickpea masala, rice and sauce.', image: '/assets/images/cauli_chickpea_wrap.jpg', badge: 'VE' },
];

const snackItems: FoodItem[] = [
  { name: 'Pav Bhaji', price: '$9.99', description: 'Flavorful vegetable bhaji with buttered toasted pav.', image: photos.pavBhaji, badge: 'V' },
  { name: 'Samosas', price: '$3.35', description: 'Savory pastries filled with potatoes, peas and spices.', image: photos.samosa, badge: 'V' },
  { name: 'Samosa Chaat', price: '$8.99', description: 'Samosas topped with chickpea masala, sweet yogurt and signature sauces.', image: photos.samosaChaat, badge: 'V' },
];

const rotisserieItems: FoodItem[] = [
  { name: 'Half Rotisserie Chicken', price: '$9.99', description: 'Slow-roasted Indian-spiced chicken with your choice of sauce.', image: photos.rotisserie },
  { name: 'Whole Rotisserie Chicken', price: '$18.99', description: 'Perfect for sharing. Served with your choice of two sides.', image: photos.rotisserie },
  { name: 'Rotisserie Chicken Plate', price: '$13.99', description: 'Rotisserie chicken, basmati rice, roasted vegetables and your choice of sauce.', image: photos.rotisserie },
  { name: 'Rotisserie Chicken Family Meal', price: '$34.99', description: 'Whole chicken, large basmati rice, large roasted vegetables, 4 naan and 2 sauces.', image: photos.rotisserie },
];

const lentilItems: FoodItem[] = [
  { name: 'Butter Masala', price: '$9.95 | $19.90', description: 'Creamy tomato-based masala.', image: photos.curry, badge: 'V' },
  { name: 'Tikka Masala', price: '$9.95 | $19.90', description: 'Classic Indian spiced tomato masala.', image: photos.curry },
  { name: 'Chickpea Masala', price: '$9.95 | $19.90', description: 'Chickpeas simmered in aromatic spices.', image: photos.curry, badge: 'VE' },
  { name: 'Yellow Lentil', price: '$9.95 | $19.90', description: 'Comforting yellow lentil dal.', image: photos.curry, badge: 'VE' },
  { name: 'Black Lentil', price: '$9.95 | $19.90', description: 'Rich, slow-cooked lentils.', image: photos.curry, badge: 'VE' },
  { name: 'Veggie Bhaji', price: '$13.95 | $21.90', description: 'Flavorful vegetable bhaji.', image: photos.pavBhaji, badge: 'VE' },
];

const categories = ['BUILD YOUR BOWL', 'CHEF SELECT', 'NAAN WRAPS', 'STREET SNACKS', 'ROTISSERIE', 'FAMILY MEALS', 'LENTILS & MASALAS', 'SIDES & EXTRAS'];

const bowlSteps = [
  {
    number: '01',
    title: 'Base',
    note: 'Pick one or two',
    items: [
      ['White Basmati Rice', 'Fragrant basmati rice.'],
      ['Brown Basmati Rice', 'Whole-grain basmati rice.'],
      ['Field Greens', 'Fresh greens.'],
      ['Roasted Vegetables', 'Seasoned roasted vegetables.'],
    ],
    price: '+$2.50 | $5',
  },
  {
    number: '02',
    title: 'Proteins',
    note: 'Pick one or two',
    items: [
      ['Rotisserie Chicken', 'DASARI-style slow-roasted chicken (+$2).'],
      ['Chicken Tikka', 'Marinated chicken with authentic Indian spices.'],
      ['Spicy Chicken', 'Bold, spicy grilled chicken.'],
      ['Lamb Meatballs', 'Seasoned lamb meatballs (+$1.50 | $3).'],
      ['Paneer', 'Indian cheese, grilled and seasoned (V).'],
      ['Tofu', 'Seasoned plant-based protein (VE).'],
      ['Roasted Vegetables', 'Seasoned roasted vegetables.'],
    ],
    price: '+$2 / +$1.50 | $3',
  },
  {
    number: '03',
    title: 'Lentils & Masalas',
    note: 'Pick one or two',
    items: [
      ['Butter Masala', 'Creamy tomato-based masala (V).'],
      ['Tikka Masala', 'Classic Indian spiced tomato masala.'],
      ['Chickpea Masala', 'Chickpeas simmered in aromatic spices (VE).'],
      ['Black Lentil', 'Rich, slow-cooked lentils (VE).'],
      ['Yellow Lentil', 'Comforting yellow lentil dal (VE).'],
    ],
  },
  {
    number: '04',
    title: 'Sauces',
    note: 'Pick one to drizzle',
    items: [
      ['Spicy Mango', 'Sweet heat with mango.'],
      ['Mint Yogurt', 'Cool, fresh and creamy.'],
      ['Sweet Tango', 'Sweet signature sauce.'],
      ['DASARI Ranch', 'Creamy house ranch.'],
      ['Tamarind Ginger', 'Tangy tamarind with ginger.'],
      ['Raita', 'Cool yogurt sauce.'],
    ],
  },
  {
    number: '05',
    title: 'Hot Stuff',
    note: 'Pick one',
    items: [
      ['WHOA (5/10)', 'A little kick.'],
      ['OMG (10/10)', 'Bring the heat.'],
      ['OUCH (8/10)', 'For serious heat lovers.'],
      ['Serrano Peppers (10/10)', 'Fresh serrano heat.'],
    ],
  },
  {
    number: '06',
    title: 'Garnishes',
    note: 'Choose all, a few or none',
    items: [
      ['Romaine Lettuce', 'Fresh crunchy romaine.'],
      ['Purple Slaw', 'Crispy spiced purple slaw.'],
      ['Pickled Onions', 'Tangy house-pickled onions.'],
      ['Roasted Corn', 'Sweet fire-roasted corn.'],
      ['Diced Onions', 'Fresh diced red onions.'],
      ['Fresh Herbs', 'Chipped mint & coriander.'],
    ],
  },
];

const chefBowls: MenuItem[] = [
  { name: 'Chicken Tikka Masala Bowl', price: '$10.99', description: 'Chicken tikka and tikka masala over white basmati, finished with spicy mango drizzle and hot sauce.' },
  { name: 'Butter Chicken Bowl', price: '$10.99', description: 'Chicken in butter masala over white basmati, with DASARI ranch drizzle and hot sauce.' },
  { name: 'Rotisserie Chicken Bowl', price: '$11.99', description: 'DASARI rotisserie chicken, white basmati, roasted vegetables, mint yogurt, hot sauce.' },
  { name: 'Vegetarian Paneer Bowl', price: '$10.99', description: 'Paneer, butter masala, chickpea masala, white basmati, mint yogurt, hot sauce.', badge: 'V' },
  { name: 'Vegan Bowl', price: '$10.99', description: 'Tofu, roasted vegetables, chickpea masala, yellow lentils, brown basmati, spicy mango, hot sauce.', badge: 'VE' },
  { name: 'Pro Bowl', price: '$13.77', description: 'Double roasted vegetables, your choice of protein, signature sauce, and hot stuff. Lamb +$3 · Salmon +$4.' },
  { name: 'Dasari Salad', price: '$12.99', description: 'Choice of protein over greens, roasted cauliflower, tomatoes, roasted corn, chickpeas, cranberries, cheese, pickled onions, slaw and dressing.' },
];

const familyItems: MenuItem[] = [
  { name: 'Chicken Tikka Masala', price: 'Pint $12.75 · Quart $25.50' },
  { name: 'Butter Chicken', price: 'Pint $12.75 · Quart $25.50' },
  { name: 'Paneer Tikka Masala', price: 'Pint $12.75 · Quart $25.50', badge: 'V' },
  { name: 'Butter Paneer', price: 'Pint $12.75 · Quart $25.50', badge: 'V' },
  { name: 'Rotisserie Chicken', price: 'Pint $16 · Quart $32' },
  { name: 'Chicken', price: 'Pint $15 · Quart $30' },
  { name: 'Spicy Chicken', price: 'Pint $15 · Quart $30' },
  { name: 'Paneer', price: 'Pint $15 · Quart $30', badge: 'V' },
  { name: 'Tofu', price: 'Pint $15 · Quart $30', badge: 'VE' },
];

const sideItems: MenuItem[] = [
  { name: 'Basmati Rice', price: '$3.25 pint | $6.50 quart', description: 'Fragrant basmati rice' },
  { name: 'Naan', price: '5 for $9 · 10 for $18', description: 'Housemade. Pillowy soft. Fresh baked.' },
  { name: 'Wheat Naan', price: '5 for $9 · 10 for $18', description: 'Fresh-baked wheat naan.' },
  { name: 'Samosas', price: '10 for $11.50', description: 'Savory pastries filled with potatoes, peas and spices.' },
  { name: 'Sauces', price: '$5', description: '8 oz signature sauce bottle' },
  { name: 'Hot Sauce Bottle', price: '$5.99', description: 'Dasari signature spicy hot sauce bottle' },
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
  return <article className={`plate-card ${active ? 'plate-active' : ''}`}>
    <div className="plate"><div className="plate-inner"><img src={item.image} alt={`Dasari Fusion Grill ${item.name} - ${item.description}`} loading="lazy" /></div></div>
    <div className="plate-copy"><div className="item-heading"><h3>{item.name}</h3><Badge value={item.badge} /></div><strong>{item.price}</strong><p>{item.description}</p></div>
  </article>;
}

function PlateCarousel({ items, id }: { items: FoodItem[]; id?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

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
  return <div className="menu-rows">{items.map((item) => <article className="menu-row" key={item.name}><div><div className="row-title"><h3>{item.name}</h3><Badge value={item.badge} /></div>{item.description && <p>{item.description}</p>}</div><strong>{item.price}</strong></article>)}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const links = [['MENU', '#menu'], ['POPULAR', '#popular'], ['ABOUT', '#about'], ['LOCATION', '#location']];
  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}><div className="header-inner"><Logo light /><nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="button button-small" href="#menu">VIEW MENU <ArrowRight size={15} /></a></div><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-nav">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={18} /></a>)}<a href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS<ArrowRight size={18} /></a></div>}</header>;
}





function SectionIntro({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return <div className="section-intro">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function App() {
  return <div id="top" className="app"><LoadingScreen /><Header />
    <main>
      <section className="hero"><div className="hero-bg"><img src={photos.feast} alt="Dasari Fusion Grill authentic Indian feast banquet table with butter chicken, tikka masala, and garlic naan" /></div><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow hero-eyebrow">INDIAN FUSION · INDIAN FLAVORS · BOWLS · NAAN</p><h1><span>DASARI</span><em>FUSION GRILL</em></h1><p className="hero-subtitle">AUTHENTIC INDIAN FLAVORS.<br />BUILT YOUR WAY.</p><p className="hero-body">Slow-roasted and spice-simmered.</p><div className="hero-actions"><a className="button" href="#menu">EXPLORE MENU <ArrowRight size={17} /></a><a className="button button-ghost" href={mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <MapPin size={16} /></a></div></div><div className="hero-mark">EST. IN FLAVOR<br /><span>01</span></div></section>

      <section className="intro section-pad" id="intro"><div className="intro-mark">D</div><div className="intro-content"><p className="eyebrow">THE DASARI WAY</p><h2>Authentic flavors.<br /><i>Modern fusion.</i></h2><p>Indian classics meet a fast, fresh fusion format. Build a bowl, grab a naan wrap, share street snacks or bring home a family meal.</p><a className="underlined-link" href="#about">OUR STORY <ArrowRight size={16} /></a></div><div className="intro-stamp"><span>FRESH</span><span>SPICED</span><span>DAILY</span></div></section>

      <section className="popular section-pad section-dark" id="popular"><div className="section-head"><SectionIntro eyebrow="THE CROWD FAVORITES" title="Popular picks" copy="The plates people come back for." /><div className="section-number">01 <span>/ 04</span></div></div><PlateCarousel items={popular} /></section>

      <section className="bowl-section section-pad" id="menu"><div className="bowl-heading"><div><p className="eyebrow">THE SIGNATURE FORMAT</p><h2>Build your <i>bowl.</i></h2></div><div className="price-callout"><span>STARTING AT</span><strong>$10.99<span>+</span></strong></div></div><p className="bowl-lede">Choose your base, protein, masala, sauce, heat &amp; garnishes. Work your way down — we'll handle the rest.</p><div className="bowl-steps">{bowlSteps.map((step) => <div className="bowl-step" key={step.number}><div className="step-number">{step.number}</div><div className="step-content"><div className="step-title"><h3>{step.title}</h3><span>{step.note}</span></div><div className="ingredient-grid">{step.items.map(([name, desc]) => <div className="ingredient" key={name}><strong>{name}</strong><span>{desc}</span></div>)}</div>{step.price && <div className="step-price">{step.price}</div>}</div></div>)}</div></section>

      <section className="menu-section section-pad"><div className="category-bar">{categories.map((category, index) => <a key={category} className={index === 0 ? 'active' : ''} href={index === 0 ? '#menu' : `#${category.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}>{category}</a>)}</div><section className="menu-block" id="chef-select"><div className="menu-block-head"><SectionIntro eyebrow="CHOOSE A DASARI FAVORITE" title="Chef select bowls" copy="Already built, already balanced. A Dasari favorite in one order." /><span className="menu-index">02</span></div><MenuRows items={chefBowls} /></section>
        <div className="visual-break"><img src={photos.feast} alt="Dasari Fusion Grill Indian food spread with curries, basmati rice and fresh tandoori naan" loading="lazy" /><div><p>Slow-roasted.<br /><i>Fresh-baked.</i><br />Spice-simmered.</p><span>DASARI FUSION GRILL</span></div></div>
        <section className="menu-block" id="naan-wraps"><div className="menu-block-head"><SectionIntro eyebrow="FRESH-BAKED · ROLLED TO ORDER" title="Naan wraps" copy="House-made naan, white basmati rice, our signature wrap sauce and red onions, wrapped around your choice of protein." /><span className="menu-index">03</span></div><PlateCarousel items={wrapItems} /></section>
        <section className="menu-block snack-block" id="street-snacks"><div className="menu-block-head"><SectionIntro eyebrow="SMALL PLATES FOR THE TABLE" title="Street snacks" copy="Or for one determined person." /><span className="menu-index">04</span></div><PlateCarousel items={snackItems} /></section>
        <section className="menu-block" id="rotisserie"><div className="menu-block-head"><SectionIntro eyebrow="SLOW-ROASTED · INDIAN-SPICED · JUICY" title="Rotisserie chicken" copy="Made for the middle of the table." /><span className="menu-index">05</span></div><PlateCarousel items={rotisserieItems} /></section>
        <section className="menu-block compact-block" id="family-meals"><div className="menu-block-head"><SectionIntro eyebrow="SERVES THE TABLE · SOLD BY THE PINT OR QUART" title="Family meals" /><span className="menu-index">06</span></div><MenuRows items={familyItems} /></section>
        <section className="menu-block compact-block" id="lentils-and-masalas"><div className="menu-block-head"><SectionIntro eyebrow="PINT OR QUART · ON THEIR OWN OR PILED OVER RICE" title="Lentils & masalas" /><span className="menu-index">07</span></div><MenuRows items={lentilItems} /></section>
        <section className="menu-block compact-block" id="sides-and-extras"><div className="menu-block-head"><SectionIntro eyebrow="ROUND OUT ANY ORDER" title="Sides & extras" /><span className="menu-index">08</span></div><MenuRows items={sideItems} /></section>
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
              <a className="button" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                GET DIRECTIONS <ArrowRight size={17} />
              </a>
              <a className="underlined-link light-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                OPEN IN GOOGLE MAPS <MapPin size={16} />
              </a>
            </div>
          </div>
          <div className="map-art">
            <iframe
              src={mapEmbedUrl}
              title="Dasari Fusion Grill location on Google Maps - 1163 E Tallmadge Ave, Akron, OH 44310"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Clickable overlay covering 100% of the map: pressing ANYWHERE opens Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-click-overlay"
              aria-label="Open Dasari Fusion Grill at 1163 E Tallmadge Ave, Akron, OH 44310 in Google Maps"
              title="Click anywhere to open in Google Maps"
            >
              <div className="map-pill-badge">
                <MapPin size={14} />
                <span>Open in Google Maps</span>
                <ArrowRight size={13} />
              </div>
              <div className="map-overlay-note">
                <MapPin size={17} />
                <div>
                  <strong>DASARI FUSION GRILL</strong>
                  <span>1163 E Tallmadge Ave, Akron, OH 44310</span>
                </div>
              </div>
              <div className="map-click-hint">
                <span>Tap anywhere to open Maps ↗</span>
              </div>
            </a>
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
    {/* Small floating Halal badge visible across all scroll positions on Mobile and PC */}
    <a href="#about" className="floating-halal-badge" title="100% Halal Food Certified" aria-label="100% Halal Food Certified">
      <img
        src="/assets/images/halal-certified-badge.png"
        alt="Halal Certified Badge"
        className="floating-halal-img"
      />
      <div className="floating-halal-text">
        <strong>HALAL CERTIFIED</strong>
        <span>100% Halal Food</span>
      </div>
    </a>
  </div>;
}

export default App;
