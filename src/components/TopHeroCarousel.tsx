import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Flame, Clock, MapPin, Sparkles } from 'lucide-react';
import { FloralFleuronDivider } from './FloralMotifs';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  alt: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'rotisserie-order',
    image: '/assets/images/hero_banner_1.png',
    title: 'Rotisserie Chicken',
    subtitle: 'Slow-Roasted · Indian Spiced · Fire Grilled',
    alt: 'Dasari Fusion Grill Rotisserie Chicken with bold flavors, fresh ingredients, chutneys and naan',
    badge: 'SIGNATURE SPECIAL',
    ctaText: 'ORDER NOW',
    ctaLink: '#menu'
  },
  {
    id: 'rotisserie-flame',
    image: '/assets/images/hero_banner_2.png',
    title: 'Fresh Tandoori Naan & Rotisserie',
    subtitle: 'Flames Roasting · Garlic Butter Naan Baked to Order',
    alt: 'Dasari Fusion Grill rotisserie oven with flame-roasted chickens and freshly baked tandoori naan',
    badge: 'FRESH-BAKED DAILY',
    ctaText: 'EXPLORE MENU',
    ctaLink: '#chef-select'
  },
  {
    id: 'feast-spread',
    image: '/assets/images/hero_banner_3.png',
    title: 'Great Food Better Together',
    subtitle: 'Curry Bowls · Biryani · Dal Tadka · Family Feasts',
    alt: 'Dasari Fusion Grill Indian feast table spread with rotisserie chicken, biryani, curries, lentils and naan',
    badge: 'FAMILY & CATERING',
    ctaText: 'BUILD YOUR BOWL',
    ctaLink: '#menu'
  },
  {
    id: 'flavor-fire-fresh',
    image: '/assets/images/hero_banner_4.png',
    title: 'Flavor · Fire · Fresh',
    subtitle: 'Bowls, Fresh Tandoori Naan, Succulent Carved Chicken Plates',
    alt: 'Dasari Fusion Grill Rotisserie Chicken platter, sliced roasted chicken and fresh tandoori naan',
    badge: 'CHEF PICKS',
    ctaText: 'SEE POPULAR PICKS',
    ctaLink: '#popular'
  }
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds

export function TopHeroCarousel() {
  // Clones: [slide4, slide1, slide2, slide3, slide4, slide1]
  // Indices:  0        1       2       3       4       5
  const slideCount = HERO_SLIDES.length;
  const extendedSlides = [
    HERO_SLIDES[slideCount - 1],
    ...HERO_SLIDES,
    HERO_SLIDES[0]
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, []);

  // Handle seamless infinite loop jump on transition end
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= slideCount + 1) {
      // Reached the right clone (slide 1) -> jump back to real slide 1
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // Reached the left clone (slide 4) -> jump back to real slide 4
      setIsTransitioning(false);
      setCurrentIndex(slideCount);
    }
  }, [currentIndex, slideCount]);

  // Autoplay loop
  useEffect(() => {
    if (isPaused || isDragging) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = window.setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, isDragging, goToNext]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    const threshold = 45; // min px drag to trigger slide
    if (dragOffset < -threshold) {
      goToNext();
    } else if (dragOffset > threshold) {
      goToPrev();
    }
    setTouchStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    setTouchStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStartX === null) return;
    const diff = e.clientX - touchStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const threshold = 55;
    if (dragOffset < -threshold) {
      goToNext();
    } else if (dragOffset > threshold) {
      goToPrev();
    }
    setTouchStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Transform calculation
  const slidePercent = -currentIndex * 100;
  const transformStyle = isDragging && touchStartX !== null && containerRef.current
    ? `translateX(calc(${slidePercent}% + ${dragOffset}px))`
    : `translateX(${slidePercent}%)`;

  return (
    <section 
      className="top-hero-carousel-section" 
      aria-label="Featured Rotisserie and Fusion Grill Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsPaused(false);
      }}
    >
      {/* Background ambient lighting */}
      <div className="top-hero-ambient-glow" aria-hidden="true" />

      {/* Section Head for Second Section */}
      <div className="top-hero-section-head">
        <p className="eyebrow top-hero-head-eyebrow">FEATURED HIGHLIGHTS &amp; SPECIALS</p>
        <h2 className="top-hero-head-title">Fresh Off the Spit &amp; <i>Tandoor.</i></h2>
        <FloralFleuronDivider color="#d4a74a" size={36} opacity={0.75} />
      </div>

      {/* Main Carousel Viewport */}
      <div 
        className="top-hero-carousel-viewport"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Slides Track */}
        <div 
          className="top-hero-carousel-track"
          style={{
            transform: transformStyle,
            transition: isTransitioning && !isDragging ? 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, idx) => (
            <div 
              key={`${slide.id}-${idx}`} 
              className="top-hero-carousel-slide"
              aria-hidden={idx !== currentIndex}
            >
              <a 
                href={slide.ctaLink} 
                className="top-hero-slide-link"
                tabIndex={idx === currentIndex ? 0 : -1}
                aria-label={`${slide.title}: ${slide.subtitle}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="top-hero-image-main"
                  loading={idx === 1 || idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button 
          type="button"
          className="top-hero-nav-btn top-hero-prev-btn" 
          onClick={(e) => { e.preventDefault(); goToPrev(); }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button 
          type="button"
          className="top-hero-nav-btn top-hero-next-btn" 
          onClick={(e) => { e.preventDefault(); goToNext(); }}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Minimal Clean Dots */}
      <div className="top-hero-minimal-dots" role="tablist" aria-label="Slide indicators">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === ((currentIndex - 1 + slideCount) % slideCount);
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Slide ${idx + 1}`}
              className={`top-hero-dot ${isActive ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx + 1);
              }}
            />
          );
        })}
      </div>

      {/* Quick Action Ribbon Bar directly under carousel */}
      <div className="top-hero-action-ribbon">
        <div className="top-hero-ribbon-item">
          <Flame size={16} className="ribbon-icon-fire" />
          <span>Slow-Roasted Rotisserie · Fresh Tandoori Naan</span>
        </div>
        <div className="top-hero-ribbon-actions">
          <a href="#menu" className="top-hero-ribbon-btn primary-btn">
            EXPLORE MENU <ArrowRight size={15} />
          </a>
          <a href="#chef-select" className="top-hero-ribbon-btn secondary-btn">
            BUILD YOUR BOWL
          </a>
          <a 
            href="https://maps.app.goo.gl/sFDW3pSq3YrCTpS77" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-hero-ribbon-btn ghost-btn"
          >
            <MapPin size={14} /> GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  );
}
