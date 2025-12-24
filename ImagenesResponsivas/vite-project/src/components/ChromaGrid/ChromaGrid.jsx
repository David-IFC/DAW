import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';


export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
  {
    image: 'https://cdnb.artstation.com/p/assets/images/images/058/907/767/large/quentin-bouilhol-space-marines-g.jpg?1675220193',
    title: 'Ultramarine Intercessor',
    subtitle: 'Adeptus Astartes Frontline Warrior',
    
    borderColor: '#1E3A8A',
    gradient: 'linear-gradient(145deg, #1E3A8A, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Ultramarines'
  },
  {
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/warhammer-40k-strongest-orks-ranked.jpg?w=1600&h=900&fit=crop',
    title: 'Ork Boyz',
    subtitle: 'Green Tide Berserker',
   
    borderColor: '#6B8E23',
    gradient: 'linear-gradient(210deg, #6B8E23, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Orks'
  },
  {
    image: 'https://wallup.net/wp-content/uploads/2019/10/53159-warhammer-40k-necrons-army-warrior-sci-fi-armor-robots-weapons.jpg',
	title: 'Necron Warrior',
    subtitle: 'Ancient Tomb World Soldier',
    
    borderColor: '#0F766E',
    gradient: 'linear-gradient(165deg, #0F766E, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Necrons'
  },
  {
    image: 'https://wallpapers.com/images/hd/dawn-of-war-eldar-warhammer-40k-hd-gv7z13p2yu8c7xoe.jpg',
    title: 'Eldar Guardian',
    subtitle: 'Craftworld Protector',
    
    borderColor: '#7C3AED',
    gradient: 'linear-gradient(195deg, #7C3AED, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Eldar'
  },
  {
    image: 'https://img.goodfon.com/original/2374x1518/a/6b/warhammer-40-000-astra-militarum-imperial-guard-war-flag-hum.jpg',
    title: 'Astra Militarum Veteran',
    subtitle: 'Imperial Guard Sharpshooter',
    
    borderColor: '#B91C1C',
    gradient: 'linear-gradient(225deg, #B91C1C, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Astra_Militarum'
  },
  {
    image: 'https://wallpapers.com/images/hd/warhammer-40k-night-lords-chaos-space-marines-1hwkd19of5gx34r1.jpg',
    title: 'Chaos Space Marine',
    subtitle: 'Heretic Astartes Champion',
    borderColor: '#9A3412',
    gradient: 'linear-gradient(135deg, #9A3412, #000)',
    url: 'https://warhammer40k.fandom.com/wiki/Chaos_Space_Marines'
  }
]

;
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: c.url ? 'pointer' : 'default'
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
