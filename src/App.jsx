import logoImg from './assets/logo.png'
import r1 from "./assets/reviews/r1.jpg";
import r2 from "./assets/reviews/r2.jpg";
import r3 from "./assets/reviews/r3.jpg";
import r4 from "./assets/reviews/r4.jpg";
import r5 from "./assets/reviews/r5.jpg";
import r6 from "./assets/reviews/r6.jpg";
import acImg from "./assets/images/ac.jpg";
import fridgeImg from "./assets/images/fridge.jpg";
import washingImg from "./assets/images/washing.jpg";
import tvImg from "./assets/images/tv.jpg";
import roImg from "./assets/images/ro.jpg";
import otherImg from "./assets/images/other.jpg";
import videoBg from "./assets/video.mp4";
import { useState, useEffect, useRef } from 'react'
import './index.css'
import {
  AcIllustration,
  FridgeIllustration,
  WashingMachineIllustration,
  TvIllustration,
  WaterPurifierIllustration,
  OtherAppliancesIllustration,
} from './Illustrations'

/* ─── THEME ────────────────────────────────────────────────────────────────── */
const T = {
  blue:       '#0f4c9e',
  blueDark:   '#092f66',
  blueMid:    '#1a65cc',
  orange:     '#f5820d',
  orangeLight:'#ffa340',
  offWhite:   '#e7ebf0',
  text:       '#1a1f36',
  muted:      '#5a6480',
  border:     '#dde4f0',
}

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id:'ac',
    title:'Air Conditioner (AC) Repair',
    desc:'Not cooling? Unusual noise? Our certified engineers handle split & window ACs — installation, gas refilling, deep cleaning & all-brand servicing.',
    tags:['Split AC','Window AC','Gas Charging','Installation','All Brands'],
    Illustration: acImg,
    accentColor: '#1a65cc',
  },
  {
    id:'fridge',
    title:'Refrigerator Repair',
    desc:'Fridge not cooling? Freezer icing up? Water leaking? We service single-door, double-door and side-by-side models from every leading brand.',
    tags:['Single Door','Double Door','Side-by-Side','Compressor Fix'],
    Illustration: fridgeImg,
    accentColor: '#0891b2',
  },
  {
    id:'wm',
    title:'Washing Machine Repair',
    desc:'Not spinning, leaking, or showing error codes? We fix fully-automatic, semi-automatic, front-load and top-load washing machines.',
    tags:['Front Load','Top Load','Fully Auto','Semi Auto'],
    Illustration: washingImg,
    accentColor: '#0f4c9e',
  },
  {
    id:'tv',
    title:'Television (TV) Repair',
    desc:'Screen issues, no display, backlight failure or sound problems? We repair LED, LCD, OLED and Smart TVs of all sizes and brands at your doorstep.',
    tags:['LED / LCD','OLED','Smart TV','Panel Repair','Backlight'],
    Illustration: tvImg,
    accentColor: '#7c3aed',
  },
  {
    id:'ro',
    title:'Water Purifier (RO) Service',
    desc:'Ensure safe drinking water every day. We offer AMC plans, filter replacement, UV lamp changes, membrane servicing and complete RO repairs.',
    tags:['RO Service','UV Purifier','Filter Change','AMC Plans'],
    Illustration: roImg,
    accentColor: '#0369a1',
  },
  {
    id:'other',
    title:'Other Home Appliances',
    desc:'Microwave oven, geyser, kitchen chimney, water dispenser — our technicians are fully equipped for any home appliance issue you face.',
    tags:['Microwave','Geyser','Chimney','Dispenser'],
    Illustration: otherImg,
    accentColor: '#d97706',
  },
]

const TESTIMONIALS = [
  {
    name:'Rajesh Kumar',
    location:'Koramangala, Bangalore',
    initials:'RK',
    stars:5,
    text:"My Samsung split AC wasn't cooling at all. The UrbanHARS technician arrived within 90 minutes, found a refrigerant leak, fixed it the same afternoon. AC runs perfectly. Very honest team — didn't try to oversell anything!",
    avatarFrom: T.blue,
    avatarTo: T.blueMid,
    image: r1,
  },
  {
    name:'Priya Nagaraj',
    location:'Indiranagar, Bangalore',
    initials:'PN',
    stars:5,
    text:"Booked a refrigerator repair online — so easy. The technician came exactly on time, replaced the start relay, and my LG double-door is cooling like new. Transparent quote before starting. Zero surprise charges. Highly recommend!",
    avatarFrom: T.blueMid,
    avatarTo: T.orange,
    image: r2,
  },
  {
    name:'Anand Shetty',
    location:'Whitefield, Bangalore',
    initials:'AS',
    stars:5,
    text:"Our Whirlpool front-load washing machine stopped mid-cycle. UrbanHARS sent a technician in 2 hours. He had the spare part with him, finished in under an hour. The 30-day warranty gave us great peace of mind.",
    avatarFrom: T.orange,
    avatarTo: T.orangeLight,
    image: r3,
  },
  {
    name:'Deepa Rao',
    location:'JP Nagar, Bangalore',
    initials:'DR',
    stars:5,
    text:"Called for my Sony 55-inch LED TV — complete no-display issue. Technician was knowledgeable, diagnosed a failed T-Con board, showed me the price before replacing. TV works perfectly now. Excellent experience!",
    avatarFrom: '#7c3aed',
    avatarTo: '#a855f7',
    image: r4,
  },
  {
    name:'Vivek Murthy',
    location:'Hebbal, Bangalore',
    initials:'VM',
    stars:5,
    text:"My Kent RO was giving very low output and tasting odd. UrbanHARS changed the membrane and filters, sanitised the whole unit. Water quality is excellent now. Also signed up for their AMC — super affordable for Bangalore!",
    avatarFrom: '#0369a1',
    avatarTo: '#0891b2',
    image: r5,
  },
  {
    name:'Kavitha Reddy',
    location:'Electronic City, Bangalore',
    initials:'KR',
    stars:4,
    text:"Microwave stopped heating completely. The technician replaced the magnetron at a reasonable price with genuine parts. Quick turnaround, polite staff. Booking the service online was very smooth. Will definitely use again!",
    avatarFrom: '#d97706',
    avatarTo: '#f59e0b',
    image: r6,
  },
]

const WHY_POINTS = [
  { icon:'⚡', title:'Same-Day Doorstep Service', desc:'Book before noon and get a certified technician at your Bangalore home the same day. No long waiting, no hassle.' },
  { icon:'🛡️', title:'30-Day Repair Warranty',   desc:'Every job carries a 30-day warranty. If the issue recurs within 30 days, we fix it again — at absolutely no extra charge.' },
  { icon:'💰', title:'Transparent Upfront Pricing', desc:'No surprise bills. We give a clear written quote before any work begins. What you see is exactly what you pay.' },
  { icon:'🔩', title:'Genuine Spare Parts Only', desc:'We only use original, brand-compatible spare parts in every single repair to ensure lasting results and safety.' },
]

const STEPS = [
  { n:'01', title:'Book Online or Call', desc:'Fill our quick form or call us. Tell us the appliance and the problem you are facing.' },
  { n:'02', title:'Technician Assigned',  desc:'We assign the nearest certified technician and confirm your slot within 15 minutes.' },
  { n:'03', title:'Diagnosis & Quote',    desc:'The technician inspects your appliance and gives you a transparent written quote on the spot.' },
  { n:'04', title:'Repair & Warranty',    desc:'We fix it with genuine parts and hand you a 30-day warranty certificate.' },
]

/* ─── HOOK — IntersectionObserver ──────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── SMALL SHARED COMPONENTS ───────────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
  <p style={{ fontSize:'.78rem', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase',
    color: T.orange, marginBottom:'10px' }}>{children}</p>
)
const SectionTitle = ({ children, center }) => (
  <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(1.7rem,3.2vw,2.6rem)',
    fontWeight:800, color: T.blueDark, lineHeight:1.15, marginBottom:'14px',
    textAlign: center ? 'center' : 'left' }}>{children}</h2>
)
const SectionSub = ({ children, center }) => (
  <p style={{ fontSize:'1.02rem', color: T.muted, lineHeight:1.7, maxWidth:'540px',
    margin: center ? '0 auto' : undefined }}>{children}</p>
)

/* ─── NAVBAR ─────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = ['Home','Services','Why Us','Process','Reviews','Contact']
  const navStyle = {
    position:'fixed', top:0, left:0, right:0, zIndex:1000,
    background:'rgba(255,255,255,0.96)',
    backdropFilter:'blur(14px)',
    borderBottom:`1px solid ${T.border}`,
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'0 6%', height:'80px',
    boxShadow: scrolled ? '0 4px 30px rgba(15,76,158,0.10)' : 'none',
    transition:'box-shadow .3s',
  }
  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <a href="#home" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
          <div style={{ width:55, height:55 }}>
  <img 
    src={logoImg} 
    alt="logo" 
    style={{ width:'100%', height:'100%', objectFit:'cover' }} 
  />
</div>
          <div style={{ display:'flex', flexDirection:'column', lineHeight:1 }}>

  <span style={{ fontFamily:"Syne,sans-serif", fontSize:'1.4rem', fontWeight:800 }}>
    Urban<span style={{ color: T.orange }}>HARS</span>
  </span>

  <span style={{ fontSize:'16px', color:'#666' }}>
    Home Appliance Repair Services
  </span>

  </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display:'flex', gap:'28px', listStyle:'none', alignItems:'center' }}
          className="desktop-nav">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(' ','-')}`}
                style={{ fontSize:'.92rem', fontWeight:500, color: T.text,
                  textDecoration:'none', transition:'color .2s' }}
                onMouseEnter={e => e.target.style.color = T.blueMid}
                onMouseLeave={e => e.target.style.color = T.text}>{l}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+919999999999"
          style={{ background: T.orange, color:'white', padding:'10px 22px',
            borderRadius:'8px', fontWeight:700, fontSize:'.9rem', textDecoration:'none',
            transition:'all .2s' }}
          onMouseEnter={e => { e.target.style.background = T.orangeLight; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.background = T.orange; e.target.style.transform = 'none' }}
          className="desktop-nav">
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
  
  {/* Phone Number */}
  <span style={{ fontWeight:600 }}>
    📞 9876543210
  </span>

  {/* Book Now Button */}
  <a
    href="tel:9876543210"
    style={{
      background:'#ff7a00',
      color:'white',
      padding:'10px 16px',
      borderRadius:'8px',
      textDecoration:'none',
      fontWeight:600
    }}
  >
    Book Now
  </a>

</div>
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)}
          style={{ background:'none', border:'none', cursor:'pointer',
            display:'flex', flexDirection:'column', gap:5, padding:4 }}
          className="mobile-nav">
          {[0,1,2].map(i => (
            <span key={i} style={{ width:24, height:2, background: T.text,
              borderRadius:2, display:'block', transition:'.3s',
              transform: open && i===0 ? 'rotate(45deg) translate(5px,5px)' :
                         open && i===1 ? 'scaleX(0)' :
                         open && i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}/>
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{ position:'fixed', top:68, left:0, right:0, background:'white',
          borderBottom:`1px solid ${T.border}`, padding:'20px 6%', zIndex:999 }}>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:16 }}>
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(' ','-')}`}
                  onClick={() => setOpen(false)}
                  style={{ color: T.text, textDecoration:'none', fontWeight:600, fontSize:'1.05rem' }}>
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+919999999999"
                style={{ background: T.orange, color:'white', padding:'12px 20px',
                  borderRadius:8, fontWeight:700, textDecoration:'none', display:'inline-block' }}>
                📞 Call to Book
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media(min-width:769px){ .mobile-nav{display:none!important} }
        @media(max-width:768px){ .desktop-nav{display:none!important} .mobile-nav{display:flex!important} }
      `}</style>
    </>
  )
}

/* ─── HERO ───────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" style={{
      minHeight:'100vh',
      padding:'120px 6% 80px',
      position:'relative', overflow:'hidden',
    }}>

     <video autoPlay loop muted playsInline className="video-bg">
     <source src={videoBg} type="video/mp4" />
     </video>

     <div className="overlay"></div>


      {/* Pattern overlay */}
      <div style={{ position:'absolute', inset:0,
        backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}/>
      {/* Orbs */}
      <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(245,130,13,0.16) 0%, transparent 70%)',
        right:-100, top:-50, animation:'floatOrb 9s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
        left:'35%', bottom:0, animation:'floatOrb 7s 3s ease-in-out infinite' }}/>

      <div style={{ position:'relative', zIndex:2, maxWidth:700, marginLeft: 0, paddingLeft: 0}}>
        {/* Badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:8,
          background:'rgba(255,255,255,0.11)', border:'1px solid rgba(255,255,255,0.2)',
          padding:'6px 18px', borderRadius:100, color:'rgba(255,255,255,0.9)',
          fontSize:'.85rem', fontWeight:500, marginBottom:28,
          animation:'fadeUp .6s ease both' }}>
          <span style={{ width:8, height:8, borderRadius:'50%', background:'#4cff91',
            animation:'pulse 2s infinite', display:'block' }}/>
          Bangalore's Most Trusted Appliance Repair Service
        </div>

        <h1 style={{ fontFamily:"'Syne',sans-serif",
          fontSize:'clamp(2.2rem,4.8vw,3.8rem)', fontWeight:800,
          lineHeight:1.1, color:'white', marginBottom:20,
          animation:'fadeUp .7s .1s ease both' }}>
          Fast & Certified <span style={{ color: T.orangeLight }}>Home Appliance</span> Repairs at Your Doorstep
        </h1>

        <p style={{ fontSize:'1.12rem', color:'rgba(255,255,255,0.8)', lineHeight:1.75,
          maxWidth:520, marginBottom:36, animation:'fadeUp .7s .2s ease both' }}>
          UrbanHARS brings verified technicians to your home in Bangalore for AC, Fridge,
          Washing Machine, TV, Water Purifier &amp; all other appliances. Same-day service available.
        </p>

        <div style={{ display:'flex', gap:14, flexWrap:'wrap', animation:'fadeUp .7s .3s ease both' }}>
          <a href="#contact" style={{ background: T.orange, color:'white',
            padding:'14px 30px', borderRadius:10, fontWeight:700, fontSize:'1rem',
            textDecoration:'none', display:'inline-flex', alignItems:'left', gap:8,
            transition:'all .2s', boxShadow:`0 6px 22px rgba(245,130,13,0.3)` }}
            onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform='none'}>
            ⚡ Book a Repair
          </a>
          <a href="#services" style={{ background:'transparent', color:'white',
            padding:'14px 30px', borderRadius:10, fontWeight:600, fontSize:'1rem',
            border:'2px solid rgba(255,255,255,0.35)', textDecoration:'none', transition:'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='white'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'}>
            View All Services
          </a>
        </div>

        {/* Stats */}
        <div style={{ display:'flex', gap:36, flexWrap:'wrap', marginTop:54,
          animation:'fadeUp .7s .4s ease both' }}>
          {[
            { num:'15K+', label:'Happy Customers' },
            { num:'50+',  label:'Certified Technicians' },
            { num:'30D',  label:'Service Warranty' },
            { num:'4.8★', label:'Average Rating' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'2rem',
                fontWeight:800, color:'white' }}>
                <span style={{ color: T.orangeLight }}>{num}</span>
              </div>
              <div style={{ fontSize:'.82rem', color:'rgba(255,255,255,0.6)', marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TRUST STRIP ────────────────────────────────────────────────────────────── */
function TrustStrip() {
  const items = [
    { icon:'✅', title:'Certified Technicians',    sub:'Trained & background-verified engineers' },
    { icon:'🛡️', title:'30-Day Service Warranty', sub:'Full coverage on every repair job' },
    { icon:'⏱️', title:'Same-Day Service',         sub:'Technician at your door in ≤ 2 hours' },
    { icon:'💳', title:'Transparent Pricing',      sub:'No hidden charges ever — ever' },
  ]
  return (
    <div style={{ background: T.offWhite, borderBottom:`1px solid ${T.border}`,
      padding:'26px 6%', display:'flex', justifyContent:'center',
      flexWrap:'wrap', gap:32 }}>
      {items.map(({ icon, title, sub }) => (
        <div key={title} style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:46, height:46, borderRadius:11,
            background:`linear-gradient(135deg,${T.blue},${T.blueMid})`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'1.2rem', flexShrink:0 }}>
            {icon}
          </div>
          <div>
            <strong style={{ display:'block', fontSize:'.93rem', fontWeight:700, color: T.text }}>{title}</strong>
            <span style={{ fontSize:'.8rem', color: T.muted }}>{sub}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── SERVICE CARD ───────────────────────────────────────────────────────────── */
function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)
  const [ref, visible] = useReveal()
  const { title, desc, tags, Illustration, accentColor } = service

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'white',
        borderRadius:18,
        border:`1px solid ${hovered ? accentColor+'55' : T.border}`,
        overflow:'hidden',
        transition:'all .28s',
        transform: visible ? (hovered ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(28px)',
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? `0 22px 54px ${accentColor}22` : '0 2px 12px rgba(0,0,0,0.04)',
        display:'flex', flexDirection:'column',
      }}>

      {/* Illustration area */}
      <div style={{ height:150, position:'relative', overflow:'hidden',
        borderBottom:`1px solid ${T.border}` }}>
        <img src={Illustration} className="service-img" />
        {/* Gradient bar at top on hover */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:4,
          background:`linear-gradient(90deg,${T.blue},${accentColor})`,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin:'left',
          transition:'transform .3s',
        }}/>
      </div>

      {/* Card content */}
      <div style={{ padding:'24px 26px 22px', flex:1, display:'flex', flexDirection:'column' }}>
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.08rem',
          fontWeight:800, color: T.blueDark, marginBottom:10 }}>{title}</h3>
        <p style={{ fontSize:'.9rem', color: T.muted, lineHeight:1.65, marginBottom:16, flex:1 }}>{desc}</p>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:18 }}>
          {tags.map(t => (
            <span key={t} style={{
              background: hovered ? accentColor+'15' : T.offWhite,
              color: hovered ? accentColor : T.blueMid,
              fontSize:'.72rem', fontWeight:700, padding:'3px 10px',
              borderRadius:100, border:`1px solid ${hovered ? accentColor+'40' : T.border}`,
              transition:'all .25s',
            }}>{t}</span>
          ))}
        </div>

        {/* CTA link */}
        <a href="#contact" style={{
          display:'inline-flex', alignItems:'center', gap:6,
          color: hovered ? accentColor : T.blueMid,
          fontWeight:700, fontSize:'.88rem', textDecoration:'none',
          transition:'all .2s',
        }}>
          Book This Service <span style={{ transition:'transform .2s',
            transform: hovered ? 'translateX(5px)' : 'none', display:'inline-block' }}>→</span>
        </a>
      </div>
    </div>
  )
}

/* ─── SERVICES SECTION ───────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" style={{ padding:'90px 6%', background: T.offWhite }}>
      <div style={{ textAlign:'center', marginBottom:56 }}>
        <SectionLabel>What We Fix</SectionLabel>
        <SectionTitle center>Our Expert Appliance Services in Bangalore</SectionTitle>
        <SectionSub center>From a silent AC to a flickering TV — our certified technicians fix every major home appliance. Doorstep service, 7 days a week across Bangalore.</SectionSub>
      </div>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(310px, 1fr))',
        gap:24,
      }}>
        {SERVICES.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </section>
  )
}

/* ─── WHY US ─────────────────────────────────────────────────────────────────── */
function WhyUsSection() {
  const [ref, visible] = useReveal()
  return (
    <section id="why-us" style={{ padding:'90px 6%', background:'white' }}>
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
      }} className="why-grid">
        {/* Left graphic */}
        <div ref={ref} style={{
          background:`linear-gradient(135deg, ${T.blueDark}, ${T.blue})`,
          borderRadius:24, padding:40, minHeight:440,
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          position:'relative', overflow:'hidden',
          transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          opacity: visible ? 1 : 0,
          transition:'all .7s ease',
        }}>
          <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(245,130,13,0.18), transparent 70%)',
            right:-60, bottom:-60 }}/>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.9rem',
            fontWeight:800, color:'white', lineHeight:1.2, position:'relative', zIndex:1 }}>
            Restore Your Appliances,<br/>
            <span style={{ color: T.orangeLight }}>Restore Your Peace.</span>
          </h3>
          <div style={{ display:'flex', flexDirection:'column', gap:16, position:'relative', zIndex:1 }}>
            {[
              { num:'15K+', label:'Appliances Fixed in Bangalore' },
              { num:'4.8★', label:'Average Customer Rating' },
              { num:'30D',  label:'Warranty on Every Repair' },
              { num:'2 hr', label:'Average Response Time' },
            ].map(({ num, label }) => (
              <div key={label} style={{
                background:'rgba(255,255,255,0.1)',
                border:'1px solid rgba(255,255,255,0.14)',
                borderRadius:12, padding:'14px 18px',
                display:'flex', alignItems:'center', gap:16,
              }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.5rem',
                  fontWeight:800, color: T.orangeLight, minWidth:58 }}>{num}</span>
                <span style={{ color:'rgba(255,255,255,0.8)', fontSize:'.88rem' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right content */}
        <div>
          <SectionLabel>Why Choose UrbanHARS</SectionLabel>
          <SectionTitle>The UrbanHARS Difference</SectionTitle>
          <SectionSub>We don't just repair appliances — we restore the comfort of your Bangalore home, fast and reliably, every time.</SectionSub>
          <div style={{ display:'flex', flexDirection:'column', gap:26, marginTop:36 }}>
            {WHY_POINTS.map(({ icon, title, desc }) => (
              <div key={title} style={{ display:'flex', gap:18, alignItems:'flex-start' }}>
                <div style={{ width:50, height:50, borderRadius:12, flexShrink:0,
                  background:`linear-gradient(135deg, ${T.blue}, ${T.blueMid})`,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem' }}>
                  {icon}
                </div>
                <div>
                  <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1rem',
                    fontWeight:700, color: T.blueDark, marginBottom:5 }}>{title}</h4>
                  <p style={{ fontSize:'.88rem', color: T.muted, lineHeight:1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

/* ─── HOW IT WORKS ───────────────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <section id="process" style={{ padding:'90px 6%', background: T.offWhite }}>
      <div style={{ textAlign:'center', marginBottom:56 }}>
        <SectionLabel>How It Works</SectionLabel>
        <SectionTitle center>Get Your Appliance Fixed in 4 Easy Steps</SectionTitle>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}
        className="steps-grid">
        {STEPS.map(({ n, title, desc }, i) => {
          const [ref, visible] = useReveal()
          return (
            <div key={n} ref={ref} style={{
              background:'white', borderRadius:16,
              padding:'28px 22px', border:`1px solid ${T.border}`,
              textAlign:'center',
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              opacity: visible ? 1 : 0,
              transition:`all .5s ${i * 0.1}s ease`,
            }}>
              <div style={{ width:56, height:56, borderRadius:'50%',
                background:`linear-gradient(135deg, ${T.blue}, ${T.blueMid})`,
                display:'flex', alignItems:'center', justifyContent:'center',
                margin:'0 auto 18px',
                fontFamily:"'Syne',sans-serif", fontSize:'1.15rem', fontWeight:800,
                color:'white', boxShadow:`0 6px 20px ${T.blue}44` }}>
                {n}
              </div>
              <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:'.98rem',
                fontWeight:700, color: T.blueDark, marginBottom:8 }}>{title}</h4>
              <p style={{ fontSize:'.86rem', color: T.muted, lineHeight:1.65 }}>{desc}</p>
            </div>
          )
        })}
      </div>
      <style>{`@media(max-width:900px){.steps-grid{grid-template-columns:1fr 1fr!important}}
               @media(max-width:500px){.steps-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

/* ─── TESTIMONIAL CARD ───────────────────────────────────────────────────────── */
function TestiCard({ t, i }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'white', borderRadius:18,
        padding:'28px', border:`1px solid ${hovered ? T.blueMid+'44' : T.border}`,
        transition:'all .28s',
        transform: visible ? (hovered ? 'translateY(-5px)' : 'translateY(0)') : 'translateY(26px)',
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? `0 18px 44px rgba(15,76,158,0.11)` : '0 2px 8px rgba(0,0,0,0.04)',
        display:'flex', flexDirection:'column',
      }}
      style2={{ transitionDelay:`${i*0.08}s` }}>

      {/* Stars */}
      <div style={{ color:'#f5820d', fontSize:'.95rem', letterSpacing:2, marginBottom:12 }}>
        {'★'.repeat(t.stars)}{'☆'.repeat(5-t.stars)}
      </div>

      {/* Quote mark */}
      <div style={{ fontSize:'2.8rem', lineHeight:1, color: T.border,
        fontFamily:'Georgia,serif', marginBottom:-6 }}>"</div>

      <p style={{ fontSize:'.91rem', color: T.muted, lineHeight:1.72,
        marginBottom:22, fontStyle:'italic', flex:1 }}>{t.text}</p>

      {/* Author */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <img
  src={t.image}
  alt={t.name}
  style={{
    width:46,
    height:46,
    borderRadius:'50%',
    objectFit:'cover'
  }}
/>
        <div>
          <div style={{ fontWeight:700, fontSize:'.92rem', color: T.text }}>{t.name}</div>
          <div style={{ fontSize:'.78rem', color: T.muted }}>📍 {t.location}</div>
        </div>
      </div>
    </div>
  )
}

/* ─── TESTIMONIALS SECTION ───────────────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section id="reviews" style={{ padding:'90px 6%', background:'white' }}>
      <div style={{ textAlign:'center', marginBottom:56 }}>
        <SectionLabel>Customer Reviews</SectionLabel>
        <SectionTitle center>What Bangaloreans Are Saying</SectionTitle>
        <SectionSub center>Rated 4.8 / 5 based on 15,000+ genuine reviews from customers across Bangalore.</SectionSub>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}
        className="testi-grid">
        {TESTIMONIALS.map((t, i) => <TestiCard key={t.name} t={t} i={i} />)}
      </div>
      <style>{`@media(max-width:900px){.testi-grid{grid-template-columns:1fr 1fr!important}}
               @media(max-width:560px){.testi-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

/* ─── CTA BANNER ─────────────────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section style={{
      background:`linear-gradient(135deg, #07234d, ${T.blue})`,
      padding:'80px 6%', textAlign:'center', position:'relative', overflow:'hidden',
    }}>
      <div style={{ position:'absolute', inset:0,
        background:'radial-gradient(ellipse at center, rgba(245,130,13,0.14), transparent 70%)' }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <h2 style={{ fontFamily:"'Syne',sans-serif",
          fontSize:'clamp(1.7rem,3.5vw,2.9rem)', fontWeight:800, color:'white',
          marginBottom:14 }}>
          Ready to Get Your Appliance Fixed Today?
        </h2>
        <p style={{ color:'rgba(255,255,255,0.72)', fontSize:'1.1rem', marginBottom:32 }}>
          Book now and get a same-day certified technician at your Bangalore doorstep —<br/>
          with a 30-day warranty on every single repair.
        </p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <a href="#contact" style={{ background: T.orange, color:'white',
            padding:'14px 30px', borderRadius:10, fontWeight:700, fontSize:'1rem',
            textDecoration:'none', boxShadow:`0 6px 22px rgba(245,130,13,0.35)`,
            transition:'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform='none'}>
            📋 Book a Repair
          </a>
          <a href="tel:+919999999999" style={{ background:'transparent', color:'white',
            padding:'14px 30px', borderRadius:10, fontWeight:600, fontSize:'1rem',
            border:'2px solid rgba(255,255,255,0.35)', textDecoration:'none', transition:'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='white'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'}>
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT SECTION ────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', area:'', appliance:'', message:'' })
 
  const [success, setSuccess] = useState(false)

 const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

const submit = async (e) => {
  e.preventDefault()

  if (!form.name || !form.phone || !form.appliance) {
    alert('Please fill in your name, phone and appliance type.')
    return
  }

  const data = new FormData()
  data.append("name", form.name)
  data.append("phone", form.phone)
  data.append("email", form.email)
  data.append("area", form.area)
  data.append("appliance", form.appliance)
  data.append("message", form.message)

  const res = await fetch("https://formspree.io/f/mpqklajq", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })

  if (res.ok) {
    setSuccess(true)
    setForm({
      name: '',
      phone: '',
      email: '',
      area: '',
      appliance: '',
      message: ''
    })
  } else {
    alert("Something went wrong")
  }
}

  const inputStyle = {
    width:'100%', padding:'11px 14px',
    border:`1px solid ${T.border}`, borderRadius:10,
    background:'white', fontFamily:"'DM Sans',sans-serif",
    fontSize:'.92rem', color: T.text, outline:'none',
    transition:'border-color .2s, box-shadow .2s',
  }
  const labelStyle = { display:'block', fontSize:'.83rem', fontWeight:600,
    color: T.text, marginBottom:5 }

  return (
    <section id="contact" style={{ padding:'90px 6%', background: T.offWhite }}>
      <div style={{ marginBottom:50 }}>
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionTitle>Book a Service or Get a Quote</SectionTitle>
        <SectionSub>Fill out the form and our Bangalore team will call you within 30 minutes to confirm your booking.</SectionSub>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:56, alignItems:'start' }}
        className="contact-grid">

        {/* Info side */}
        <div>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.4rem',
            fontWeight:800, color: T.blueDark, marginBottom:14 }}>
            Contact UrbanHARS
          </h3>
          <p style={{ color: T.muted, lineHeight:1.7, marginBottom:28 }}>
            We service all areas across Bangalore — Koramangala, Indiranagar, Whitefield, HSR Layout, JP Nagar, Hebbal, Yelahanka, Electronic City &amp; more.
          </p>
          {[
            { icon:'📞', label:'Phone / WhatsApp', val:'+91 9108911705' },
            { icon:'✉️', label:'Email',             val:'support@urbanhars.com' },
            { icon:'🌐', label:'Website',           val:'www.urbanhars.com' },
            { icon:'📍', label:'Service Area',      val:'All areas across Bangalore' },
            { icon:'🕐', label:'Working Hours',     val:'Mon – Sun: 8:00 AM – 8:00 PM' },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{ display:'flex', alignItems:'center', gap:14,
              padding:'14px 0', borderBottom:`1px solid ${T.border}` }}>
              <div style={{ width:42, height:42, borderRadius:10,
                background:'white', border:`1px solid ${T.border}`,
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize:'.78rem', color: T.muted }}>{label}</div>
                <div style={{ fontWeight:600, fontSize:'.93rem', color: T.text }}>{val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form side */}
        <div style={{ background:'white', borderRadius:20, padding:36,
          border:`1px solid ${T.border}`,
          boxShadow:'0 4px 24px rgba(15,76,158,0.06)' }}>
          {success ? (
            <div style={{ textAlign:'center', padding:'40px 20px' }}>
              <div style={{ fontSize:'3.5rem', marginBottom:16 }}>✅</div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.4rem',
                fontWeight:800, color: T.blueDark, marginBottom:10 }}>
                Booking Received!
              </h3>
              <p style={{ color: T.muted, lineHeight:1.7 }}>
                Thank you, <strong>{form.name}</strong>! Our Bangalore team will call you at{' '}
                <strong>{form.phone}</strong> within 30 minutes to confirm your appointment.
              </p>
              <button onClick={() => setSuccess(false)}
                style={{ marginTop:24, background: T.blue, color:'white',
                  padding:'10px 22px', borderRadius:8, border:'none',
                  fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                Submit Another Booking
              </button>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.2rem',
                fontWeight:800, color: T.blueDark, marginBottom:22 }}>
                Book Your Repair Now
              </h3>

{success && (
  <div style={{
    background:'#e6f9f0',
    color:'#0a7f42',
    padding:'12px',
    borderRadius:'8px',
    marginBottom:'15px',
    fontWeight:600
  }}>
    <span>✅ Thank you! Your request has been submitted.</span>
  </div>
)}

              <form onSubmit={submit}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:14 }}
                  className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handle}
                      placeholder="Full Name" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                      onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp *</label>
                    <input name="phone" value={form.phone} onChange={handle}
                      placeholder="+91 XXXXX XXXXX" type="tel" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                      onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}/>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:14 }}
                  className="form-row">
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" value={form.email} onChange={handle}
                      placeholder="you@email.com" type="email" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                      onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Your Area / Locality</label>
                    <input name="area" value={form.area} onChange={handle}
                      placeholder="e.g. Koramangala, HSR" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                      onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}/>
                  </div>
                </div>
                <div style={{ marginBottom:14 }}>
                  <label style={labelStyle}>Appliance Type *</label>
                  <select name="appliance" value={form.appliance} onChange={handle}
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                    onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}>
                    <option value="">— Select Appliance —</option>
                    <option>Air Conditioner (AC)</option>
                    <option>Refrigerator / Fridge</option>
                    <option>Washing Machine</option>
                    <option>Television (TV)</option>
                    <option>Water Purifier (RO)</option>
                    <option>Microwave Oven</option>
                    <option>Geyser / Water Heater</option>
                    <option>Kitchen Chimney</option>
                    <option>Water Dispenser</option>
                    <option>Other Appliance</option>
                  </select>
                </div>
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Describe the Issue</label>
                  <textarea name="message" value={form.message} onChange={handle}
                    placeholder="Tell us what's wrong with your appliance..."
                    style={{ ...inputStyle, height:90, resize:'vertical' }}
                    onFocus={e => { e.target.style.borderColor = T.blueMid; e.target.style.boxShadow=`0 0 0 3px ${T.blue}22` }}
                    onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow='none' }}/>
                </div>
                <button type="submit" style={{
                  width:'100%', padding:'14px',
                  background:`linear-gradient(90deg, ${T.blue}, ${T.blueMid})`,
                  color:'white', fontWeight:700, fontSize:'1rem',
                  border:'none', borderRadius:10, cursor:'pointer',
                  fontFamily:"'DM Sans',sans-serif", transition:'all .2s',
                  boxShadow:`0 6px 22px ${T.blue}33`,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity='.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                  ⚡ Submit Booking Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <style>{`@media(max-width:860px){.contact-grid{grid-template-columns:1fr!important}}
               @media(max-width:500px){.form-row{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: T.blueDark, color:'rgba(255,255,255,0.65)', padding:'60px 6% 28px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
        gap:40, marginBottom:44 }} className="footer-grid">

        {/* Brand */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
            <div style={{ width:36, height:36, background:`linear-gradient(135deg,${T.blue},${T.orange})`,
              borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
              </svg>
            </div>
            <span style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.35rem', fontWeight:800, color:'white' }}>
              Urban<span style={{ color: T.orangeLight }}>HARS</span>
            </span>
          </div>
          <p style={{ fontSize:'.88rem', lineHeight:1.7, maxWidth:250, marginBottom:20 }}>
            Bangalore's trusted home appliance repair experts. Fast, certified, and affordable — every single time.
          </p>
          {/* Socials */}
          <div style={{ display:'flex', gap:8 }}>
            {['f','ig','yt','wa'].map(s => (
              <a key={s} href="#" style={{ width:34, height:34, borderRadius:7,
                background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center',
                justifyContent:'center', color:'white', textDecoration:'none',
                fontSize:'.82rem', fontWeight:700, transition:'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = T.orange}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:'.95rem',
            fontWeight:700, color:'white', marginBottom:16 }}>Services</h4>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
            {['AC Repair','Fridge Repair','Washing Machine','TV Repair','Water Purifier','Other Appliances'].map(s => (
              <li key={s}>
                <a href="#contact" style={{ color:'rgba(255,255,255,0.6)', textDecoration:'none',
                  fontSize:'.88rem', transition:'color .2s' }}
                  onMouseEnter={e => e.target.style.color = T.orangeLight}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:'.95rem',
            fontWeight:700, color:'white', marginBottom:16 }}>We Serve</h4>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
            {['Koramangala','Indiranagar','Whitefield','HSR Layout','JP Nagar','Hebbal','Yelahanka','Electronic City'].map(a => (
              <li key={a} style={{ color:'rgba(255,255,255,0.6)', fontSize:'.88rem' }}>📍 {a}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:'.95rem',
            fontWeight:700, color:'white', marginBottom:16 }}>Company</h4>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
            {['About Us','How It Works','30-Day Warranty','Privacy Policy','Terms of Service','FAQs'].map(l => (
              <li key={l}>
                <a href="#" style={{ color:'rgba(255,255,255,0.6)', textDecoration:'none',
                  fontSize:'.88rem', transition:'color .2s' }}
                  onMouseEnter={e => e.target.style.color = T.orangeLight}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:22,
        textAlign:'center', fontSize:'.83rem', color:'rgba(255,255,255,0.38)' }}>
        © 2025{' '}
        <span style={{ color: T.orangeLight, fontWeight:700 }}>UrbanHARS</span>
        {' '}– Home Appliance Repair Services. All rights reserved.{' '}
        <span style={{ color: T.orangeLight }}>urbanhars.com</span>
      </div>
      <style>{`@media(max-width:860px){.footer-grid{grid-template-columns:1fr 1fr!important}}
               @media(max-width:500px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}

/* ─── APP ─────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </>
  )
}
