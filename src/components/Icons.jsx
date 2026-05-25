const IconBase = ({ children, size = 24, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

export const IconArrowUpRight = (p) => (<IconBase {...p}><path d="M7 17L17 7"/><path d="M8 7h9v9"/></IconBase>);
export const IconArrowRight = (p) => (<IconBase {...p}><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></IconBase>);
export const IconArrowDown = (p) => (<IconBase {...p}><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></IconBase>);
export const IconPlay = (p) => (<IconBase {...p}><path d="M6 4l14 8-14 8V4z" fill="currentColor"/></IconBase>);
export const IconStar = (p) => (<IconBase {...p}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" fill="currentColor"/></IconBase>);
export const IconQuote = (p) => (<svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h3v4H7v6H4V7c0-1.1.9-2 2-2h1v2zm9 0h3v4h-3v6h-3V7c0-1.1.9-2 2-2h1v2z"/></svg>);

export const IconBuilding = (p) => (<IconBase {...p}><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 7v.01M15 7v.01M9 11v.01M15 11v.01M9 15v.01M15 15v.01"/></IconBase>);
export const IconHouse = (p) => (<IconBase {...p}><path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"/><path d="M9 21V12h6v9"/></IconBase>);
export const IconRuler = (p) => (<IconBase {...p}><path d="M14.5 2.5l7 7-12 12-7-7 12-12z"/><path d="M5.5 7.5l2 2M7.5 5.5l2 2M9.5 3.5l2 2M3.5 9.5l2 2M11.5 13.5l2 2M13.5 11.5l2 2M15.5 9.5l2 2M17.5 7.5l2 2"/></IconBase>);
export const IconHardHat = (p) => (<IconBase {...p}><path d="M2 18h20"/><path d="M4 18a8 8 0 0116 0"/><path d="M9 18V8a3 3 0 016 0v10"/></IconBase>);
export const IconRoad = (p) => (<IconBase {...p}><path d="M4 20L8 4M20 20L16 4M12 4v2M12 10v2M12 16v2"/></IconBase>);

export const IconBinoculars = (p) => (<IconBase {...p}><circle cx="6" cy="16" r="4"/><circle cx="18" cy="16" r="4"/><path d="M10 16l-1-8h-3l1 4M14 16l1-8h3l-1 4M10 12h4"/></IconBase>);
export const IconPencilRuler = (p) => (<IconBase {...p}><path d="M3 17l3 3 11-11-3-3L3 17z"/><path d="M13 6l5 5"/><path d="M14 21h7M16 18h5"/></IconBase>);
export const IconBuilding2 = (p) => (<IconBase {...p}><path d="M3 21V8l9-5 9 5v13"/><path d="M3 21h18M9 9v.01M15 9v.01M9 13v.01M15 13v.01M9 17v.01M15 17v.01"/></IconBase>);
export const IconHandshake = (p) => (<IconBase {...p}><path d="M11 17l-3-3-2 2 4 4 3-3"/><path d="M22 11l-3-3a3 3 0 00-4 0l-1 1-1-1a3 3 0 00-4 0L2 13l3 3 2-2 2 2 2-2 4 4 2-2 5-5z"/></IconBase>);

export const IconMail = (p) => (<IconBase {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></IconBase>);
export const IconPhone = (p) => (<IconBase {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></IconBase>);
export const IconPin = (p) => (<IconBase {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></IconBase>);

export const IconInstagram = (p) => (<IconBase {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></IconBase>);
export const IconLinkedIn = (p) => (<IconBase {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6M8 7.5v.01M12 17v-4a2 2 0 014 0v4M12 11v6"/></IconBase>);
export const IconFacebook = (p) => (<IconBase {...p}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></IconBase>);
export const IconYouTube = (p) => (<IconBase {...p}><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9.5v5l4-2.5-4-2.5z" fill="currentColor"/></IconBase>);

export const BrandMark = ({ color = 'currentColor', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M6 32 L20 8 L34 32 Z" stroke={color} strokeWidth="2.4" strokeLinejoin="round" fill="none"/>
    <path d="M14 24 L20 14 L26 24" stroke={color} strokeWidth="2.4" strokeLinejoin="round" fill="none"/>
    <circle cx="20" cy="32" r="1.6" fill={color}/>
  </svg>
);

export const PartnerLogo = ({ kind = 'circle', label = 'Logoipsum' }) => {
  const stroke = '#1A1A1A';
  return (
    <svg viewBox="0 0 160 32" width="140" height="28">
      <g>
        {kind === 'circle' && <g><circle cx="14" cy="16" r="10" fill="none" stroke={stroke} strokeWidth="2.2"/><circle cx="14" cy="16" r="3.4" fill={stroke}/></g>}
        {kind === 'wave' && <g><path d="M4 18 Q10 8, 16 14 T28 14" stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round"/></g>}
        {kind === 'gear' && <g><circle cx="14" cy="16" r="9" fill="none" stroke={stroke} strokeWidth="2.2"/><circle cx="14" cy="16" r="4" fill={stroke}/><path d="M14 5v3M14 24v3M5 16h3M20 16h3" stroke={stroke} strokeWidth="2.2"/></g>}
        {kind === 'lines' && <g><path d="M4 24 L14 8 M10 24 L20 8 M16 24 L26 8" stroke={stroke} strokeWidth="2.6" strokeLinecap="round"/></g>}
        {kind === 'dot' && <g><circle cx="14" cy="16" r="4.5" fill={stroke}/></g>}
        {kind === 'tri' && <g><path d="M5 24 L14 7 L23 24 Z" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/></g>}
        {kind === 'knot' && <g><path d="M4 16 Q14 4, 24 16 T44 16" stroke={stroke} strokeWidth="2.4" fill="none"/></g>}
        {kind === 'm' && <g><path d="M4 24 L9 8 L14 18 L19 8 L24 24" stroke={stroke} strokeWidth="2.6" fill="none" strokeLinejoin="round"/></g>}
        {kind === 'globe' && <g><circle cx="14" cy="16" r="9" fill="none" stroke={stroke} strokeWidth="2"/><ellipse cx="14" cy="16" rx="4" ry="9" fill="none" stroke={stroke} strokeWidth="2"/><path d="M5 16h18" stroke={stroke} strokeWidth="2"/></g>}
        {kind === 'bars' && <g><rect x="4" y="10" width="3" height="12" fill={stroke}/><rect x="10" y="6" width="3" height="16" fill={stroke}/><rect x="16" y="14" width="3" height="8" fill={stroke}/></g>}
        <text x="34" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" fill={stroke}>{label}</text>
      </g>
    </svg>
  );
};
