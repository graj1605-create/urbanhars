// ─── SVG Illustration Components for each appliance ───────────────────────

export const AcIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Background gradient rect */}
    <rect width="220" height="140" rx="18" fill="url(#acBg)"/>
    <defs>
      <linearGradient id="acBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e8f0fe"/>
        <stop offset="100%" stopColor="#c7deff"/>
      </linearGradient>
    </defs>
    {/* AC unit body */}
    <rect x="30" y="38" width="160" height="58" rx="10" fill="#1a65cc" opacity="0.9"/>
    <rect x="30" y="38" width="160" height="18" rx="10" fill="#0f4c9e"/>
    {/* Vents */}
    {[55,75,95,115,135,155].map((x,i) => (
      <rect key={i} x={x} y="64" width="4" height="24" rx="2" fill="white" opacity="0.35"/>
    ))}
    {/* Display panel */}
    <rect x="148" y="44" width="32" height="10" rx="3" fill="#0a2a5e" opacity="0.6"/>
    <circle cx="156" cy="49" r="3" fill="#4cff91" opacity="0.9"/>
    <rect x="163" y="47" width="14" height="4" rx="2" fill="white" opacity="0.5"/>
    {/* Power button */}
    <circle cx="46" cy="49" r="5" fill="white" opacity="0.2"/>
    <circle cx="46" cy="49" r="3" fill="white" opacity="0.5"/>
    {/* Airflow lines */}
    {[0,1,2,3].map(i => (
      <path key={i} d={`M${50+i*30} 105 Q${65+i*30} 118 ${80+i*30} 105`}
        stroke="#1a65cc" strokeWidth="2" strokeDasharray="4 3" opacity="0.5" fill="none"/>
    ))}
    {/* Snowflakes */}
    <g opacity="0.7">
      <line x1="70" y1="115" x2="70" y2="128" stroke="#1a65cc" strokeWidth="1.5"/>
      <line x1="64" y1="118" x2="76" y2="125" stroke="#1a65cc" strokeWidth="1.5"/>
      <line x1="76" y1="118" x2="64" y2="125" stroke="#1a65cc" strokeWidth="1.5"/>
    </g>
    <g opacity="0.5">
      <line x1="140" y1="112" x2="140" y2="122" stroke="#0f4c9e" strokeWidth="1.5"/>
      <line x1="135" y1="114" x2="145" y2="120" stroke="#0f4c9e" strokeWidth="1.5"/>
      <line x1="145" y1="114" x2="135" y2="120" stroke="#0f4c9e" strokeWidth="1.5"/>
    </g>
    {/* Remote */}
    <rect x="168" y="88" width="18" height="34" rx="6" fill="#0f4c9e" opacity="0.8"/>
    <rect x="172" y="92" width="10" height="6" rx="2" fill="white" opacity="0.4"/>
    <circle cx="177" cy="106" r="3" fill="white" opacity="0.35"/>
    <circle cx="177" cy="114" r="2" fill="white" opacity="0.25"/>
    {/* label */}
    <text x="110" y="134" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="10" fill="#0f4c9e" fontWeight="700" opacity="0.7">AIR CONDITIONER</text>
  </svg>
)

export const FridgeIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="220" height="140" rx="18" fill="url(#fridgeBg)"/>
    <defs>
      <linearGradient id="fridgeBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e0f7fa"/>
        <stop offset="100%" stopColor="#b2ebf2"/>
      </linearGradient>
    </defs>
    {/* Fridge body */}
    <rect x="62" y="12" width="96" height="116" rx="12" fill="#1a65cc" opacity="0.85"/>
    {/* Freezer compartment */}
    <rect x="62" y="12" width="96" height="44" rx="12" fill="#0f4c9e"/>
    <rect x="62" y="44" width="96" height="4" fill="#0a2a5e" opacity="0.4"/>
    {/* Fridge door shine */}
    <rect x="68" y="18" width="12" height="80" rx="6" fill="white" opacity="0.07"/>
    {/* Freezer handle */}
    <rect x="100" y="28" width="20" height="5" rx="2.5" fill="white" opacity="0.5"/>
    {/* Fridge handle */}
    <rect x="100" y="75" width="20" height="5" rx="2.5" fill="white" opacity="0.5"/>
    {/* Freezer items */}
    <rect x="78" y="18" width="22" height="14" rx="4" fill="white" opacity="0.18"/>
    <rect x="106" y="18" width="16" height="14" rx="4" fill="white" opacity="0.12"/>
    <rect x="128" y="20" width="14" height="10" rx="3" fill="#f5820d" opacity="0.3"/>
    {/* Fridge items */}
    <rect x="78" y="56" width="14" height="22" rx="4" fill="white" opacity="0.15"/>
    <rect x="96" y="62" width="18" height="16" rx="4" fill="#4caf50" opacity="0.25"/>
    <rect x="118" y="56" width="14" height="22" rx="4" fill="white" opacity="0.12"/>
    {/* Temperature display */}
    <rect x="136" y="18" width="14" height="10" rx="3" fill="#0a2a5e" opacity="0.5"/>
    <text x="143" y="26" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4cff91" opacity="0.9">-18°</text>
    {/* Side panel decor */}
    <rect x="168" y="30" width="8" height="80" rx="4" fill="#1a65cc" opacity="0.2"/>
    <rect x="44" y="30" width="8" height="80" rx="4" fill="#1a65cc" opacity="0.2"/>
    <text x="110" y="136" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="10" fill="#0f4c9e" fontWeight="700" opacity="0.7">REFRIGERATOR</text>
  </svg>
)

export const WashingMachineIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="220" height="140" rx="18" fill="url(#wmBg)"/>
    <defs>
      <linearGradient id="wmBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e8f4fd"/>
        <stop offset="100%" stopColor="#cce4f7"/>
      </linearGradient>
    </defs>
    {/* Machine body */}
    <rect x="42" y="12" width="136" height="120" rx="14" fill="#1a65cc" opacity="0.85"/>
    {/* Top panel */}
    <rect x="42" y="12" width="136" height="28" rx="14" fill="#0f4c9e"/>
    <rect x="42" y="28" width="136" height="12" fill="#0f4c9e"/>
    {/* Control buttons on top */}
    <circle cx="68" cy="24" r="5" fill="white" opacity="0.3"/>
    <circle cx="84" cy="24" r="5" fill="white" opacity="0.2"/>
    <circle cx="100" cy="24" r="5" fill="#f5820d" opacity="0.7"/>
    <rect x="116" y="19" width="40" height="10" rx="5" fill="#0a2a5e" opacity="0.4"/>
    <text x="136" y="27" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4cff91">30 min</text>
    {/* Door - outer ring */}
    <circle cx="110" cy="88" r="42" fill="#0a2a5e" opacity="0.5"/>
    <circle cx="110" cy="88" r="38" fill="#e8f4fd" opacity="0.9"/>
    {/* Door - glass */}
    <circle cx="110" cy="88" r="32" fill="#1a65cc" opacity="0.25"/>
    <circle cx="110" cy="88" r="28" fill="#0f4c9e" opacity="0.18"/>
    {/* Water/spin effect */}
    <path d="M95 80 Q110 70 125 80 Q110 90 95 80Z" fill="#1a65cc" opacity="0.35"/>
    <path d="M88 92 Q110 78 132 92 Q110 106 88 92Z" fill="#1a65cc" opacity="0.25"/>
    {/* Door shine */}
    <circle cx="98" cy="78" r="8" fill="white" opacity="0.12"/>
    {/* Door handle */}
    <rect x="138" y="85" width="8" height="14" rx="4" fill="white" opacity="0.5"/>
    <text x="110" y="137" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="10" fill="#0f4c9e" fontWeight="700" opacity="0.7">WASHING MACHINE</text>
  </svg>
)

export const TvIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="220" height="140" rx="18" fill="url(#tvBg)"/>
    <defs>
      <linearGradient id="tvBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fce4ec"/>
        <stop offset="100%" stopColor="#e8d5f7"/>
      </linearGradient>
    </defs>
    {/* TV stand */}
    <rect x="96" y="112" width="28" height="8" rx="4" fill="#0f4c9e" opacity="0.5"/>
    <rect x="80" y="118" width="60" height="6" rx="3" fill="#0a2a5e" opacity="0.4"/>
    {/* TV body */}
    <rect x="22" y="16" width="176" height="98" rx="12" fill="#0f4c9e" opacity="0.9"/>
    <rect x="28" y="22" width="164" height="86" rx="8" fill="#0a2a5e"/>
    {/* Screen content - colorful bars like a test pattern */}
    <rect x="32" y="26" width="152" height="78" rx="6" fill="#111827"/>
    {/* Colorful stripes on screen */}
    {[
      ['#f5820d','32','26','22','78'],
      ['#1a65cc','54','26','22','78'],
      ['#4caf50','76','26','22','78'],
      ['#e91e63','98','26','22','78'],
      ['#9c27b0','120','26','22','78'],
      ['#00bcd4','142','26','22','78'],
      ['#ffd600','164','26','8','78'],
    ].map(([c,x,y,w,h],i) => (
      <rect key={i} x={x} y={y} width={w} height={h} fill={c} opacity="0.22"/>
    ))}
    {/* Smart TV interface mockup */}
    <rect x="36" y="30" width="144" height="40" rx="4" fill="white" opacity="0.06"/>
    <circle cx="64" cy="50" r="14" fill="white" opacity="0.08"/>
    <polygon points="60,44 60,56 72,50" fill="white" opacity="0.3"/>
    <rect x="85" y="38" width="88" height="6" rx="3" fill="white" opacity="0.12"/>
    <rect x="85" y="48" width="60" height="4" rx="2" fill="white" opacity="0.08"/>
    <rect x="85" y="56" width="72" height="4" rx="2" fill="white" opacity="0.06"/>
    {/* Bottom bar with time */}
    <rect x="32" y="80" width="152" height="20" rx="4" fill="white" opacity="0.05"/>
    <text x="50" y="93" fontFamily="monospace" fontSize="9" fill="white" opacity="0.4">SMART TV</text>
    <text x="170" y="93" fontFamily="monospace" fontSize="9" fill="white" opacity="0.4" textAnchor="end">HD</text>
    {/* LED indicator */}
    <circle cx="187" cy="106" r="3" fill="#4cff91" opacity="0.8"/>
    {/* Screen shine */}
    <rect x="32" y="26" width="40" height="78" rx="6" fill="white" opacity="0.03"/>
    <text x="110" y="137" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="10" fill="#6b21a8" fontWeight="700" opacity="0.7">TELEVISION</text>
  </svg>
)

export const WaterPurifierIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="220" height="140" rx="18" fill="url(#wpBg)"/>
    <defs>
      <linearGradient id="wpBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e0f2fe"/>
        <stop offset="100%" stopColor="#bae6fd"/>
      </linearGradient>
    </defs>
    {/* Main purifier body */}
    <rect x="72" y="14" width="76" height="106" rx="14" fill="#0f4c9e" opacity="0.85"/>
    {/* Top panel */}
    <rect x="72" y="14" width="76" height="22" rx="14" fill="#0a2a5e" opacity="0.9"/>
    {/* Display */}
    <rect x="82" y="18" width="56" height="14" rx="5" fill="#0a2a5e" opacity="0.6"/>
    <text x="110" y="28" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4cff91" opacity="0.9">PURE ✓</text>
    {/* Filter stages */}
    {[
      {y:42, label:'PRE', color:'#f5820d'},
      {y:66, label:'RO', color:'#1a65cc'},
      {y:90, label:'UV', color:'#9c27b0'},
    ].map(({y,label,color}) => (
      <g key={label}>
        <rect x="84" y={y} width="52" height="18" rx="6" fill={color} opacity="0.25"/>
        <rect x="84" y={y} width="52" height="18" rx="6" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5"/>
        <text x="110" y={y+12} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="white" opacity="0.7">{label} FILTER</text>
      </g>
    ))}
    {/* Water flow lines */}
    <line x1="110" y1="60" x2="110" y2="66" stroke="white" strokeWidth="2" strokeDasharray="3 2" opacity="0.4"/>
    <line x1="110" y1="84" x2="110" y2="90" stroke="white" strokeWidth="2" strokeDasharray="3 2" opacity="0.4"/>
    {/* Tap / spout */}
    <rect x="97" y="112" width="26" height="8" rx="4" fill="#0a2a5e" opacity="0.6"/>
    <path d="M108 120 Q110 128 110 132" stroke="#1a65cc" strokeWidth="3" strokeLinecap="round" opacity="0.6" fill="none"/>
    {/* Water drops */}
    <ellipse cx="110" cy="134" rx="3" ry="4" fill="#1a65cc" opacity="0.5"/>
    {/* Side tanks */}
    <rect x="44" y="36" width="22" height="64" rx="10" fill="#1a65cc" opacity="0.3"/>
    <rect x="44" y="36" width="22" height="34" rx="10" fill="#1a65cc" opacity="0.4"/>
    <rect x="154" y="36" width="22" height="64" rx="10" fill="#1a65cc" opacity="0.2"/>
    <text x="110" y="145" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="9" fill="#0369a1" fontWeight="700" opacity="0.7">WATER PURIFIER (RO)</text>
  </svg>
)

export const OtherAppliancesIllustration = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="220" height="140" rx="18" fill="url(#otherBg)"/>
    <defs>
      <linearGradient id="otherBg" x1="0" y1="0" x2="220" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef3c7"/>
        <stop offset="100%" stopColor="#fde68a"/>
      </linearGradient>
    </defs>
    {/* Microwave */}
    <rect x="12" y="14" width="82" height="56" rx="10" fill="#0f4c9e" opacity="0.85"/>
    <rect x="18" y="20" width="50" height="44" rx="6" fill="#0a2a5e" opacity="0.7"/>
    <rect x="20" y="22" width="46" height="40" rx="5" fill="#111827" opacity="0.8"/>
    <circle cx="88" cy="30" r="6" fill="#1a65cc" opacity="0.5"/>
    <circle cx="88" cy="46" r="6" fill="#f5820d" opacity="0.5"/>
    <circle cx="88" cy="62" r="5" fill="white" opacity="0.2"/>
    <circle cx="43" cy="42" r="14" fill="white" opacity="0.06"/>
    <text x="43" y="46" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="white" opacity="0.4">00:00</text>
    {/* Geyser */}
    <ellipse cx="156" cy="44" rx="22" ry="30" fill="#0f4c9e" opacity="0.75"/>
    <ellipse cx="156" cy="44" rx="16" ry="24" fill="#1a65cc" opacity="0.3"/>
    <line x1="156" y1="14" x2="156" y2="8" stroke="#0f4c9e" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
    <line x1="156" y1="74" x2="156" y2="80" stroke="#0f4c9e" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
    <line x1="134" y1="44" x2="128" y2="44" stroke="#0f4c9e" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    <circle cx="156" cy="44" r="7" fill="#f5820d" opacity="0.5"/>
    <text x="156" y="90" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#0f4c9e" opacity="0.6">GEYSER</text>
    {/* Chimney */}
    <rect x="12" y="88" width="82" height="40" rx="8" fill="#1a65cc" opacity="0.7"/>
    <rect x="18" y="94" width="70" height="6" rx="3" fill="white" opacity="0.15"/>
    <rect x="18" y="104" width="70" height="4" rx="2" fill="white" opacity="0.1"/>
    <rect x="18" y="112" width="70" height="4" rx="2" fill="white" opacity="0.1"/>
    <rect x="18" y="120" width="70" height="4" rx="2" fill="white" opacity="0.1"/>
    <rect x="28" y="84" width="50" height="8" rx="4" fill="#0f4c9e" opacity="0.7"/>
    <path d="M44 84 Q53 74 62 84" fill="#0a2a5e" opacity="0.3"/>
    {/* Toolbox hint */}
    <rect x="134" y="88" width="74" height="40" rx="8" fill="#f5820d" opacity="0.75"/>
    <rect x="148" y="84" width="46" height="8" rx="4" fill="#d97706" opacity="0.8"/>
    <rect x="148" y="82" width="14" height="8" rx="2" fill="#d97706" opacity="0.6"/>
    <rect x="174" y="82" width="14" height="8" rx="2" fill="#d97706" opacity="0.6"/>
    {[0,1,2].map(i => <rect key={i} x={142+i*18} y={97} width={10} height={20} rx={4} fill="white" opacity={0.25}/>)}
    <text x="110" y="137" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="10" fill="#92400e" fontWeight="700" opacity="0.7">OTHER APPLIANCES</text>
  </svg>
)
