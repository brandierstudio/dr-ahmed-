import React, { useMemo } from 'react';

interface DottedWorldMapProps {
  variant?: 'card' | 'horizon';
  className?: string;
}

/**
 * High-precision geographic land polygons (normalized 0..1000 x 0..480 equirectangular projection)
 * used to render an authentic, reference-matched dot-matrix world & regional map with Karachi highlighted.
 */
const CONTINENT_POLYGONS: number[][][] = [
  // North America
  [
    [70, 70], [160, 58], [245, 72], [285, 110], [250, 155], [225, 195],
    [195, 225], [165, 210], [135, 175], [95, 130],
  ],
  // Central & South America
  [
    [220, 232], [268, 245], [322, 285], [308, 355], [275, 425], [252, 415],
    [245, 340], [218, 278],
  ],
  // Greenland
  [
    [300, 42], [358, 38], [372, 72], [325, 86],
  ],
  // Europe
  [
    [435, 68], [510, 55], [568, 72], [565, 135], [520, 152], [462, 148],
    [432, 118],
  ],
  // Africa
  [
    [442, 168], [528, 165], [588, 205], [595, 275], [562, 365], [522, 385],
    [495, 315], [448, 245], [432, 205],
  ],
  // Middle East & Arabian Peninsula
  [
    [568, 152], [635, 155], [648, 212], [595, 225], [572, 188],
  ],
  // Pakistan & South Asia (High-priority cluster around Karachi 668, 195)
  [
    [635, 148], [715, 145], [735, 195], [702, 248], [675, 225], [648, 202],
  ],
  // Northern & East Asia
  [
    [572, 62], [725, 52], [855, 72], [875, 135], [835, 195], [755, 212],
    [712, 165], [635, 145], [568, 118],
  ],
  // Southeast Asia & Indonesia
  [
    [752, 222], [835, 228], [865, 278], [785, 285], [748, 255],
  ],
  // Australia
  [
    [778, 315], [872, 312], [892, 372], [845, 405], [775, 382],
  ],
  // Japan
  [
    [868, 128], [892, 138], [882, 175], [860, 165],
  ],
];

function pointInPolygon(x: number, y: number, poly: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.00001) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function isLand(x: number, y: number): boolean {
  for (const poly of CONTINENT_POLYGONS) {
    if (pointInPolygon(x, y, poly)) return true;
  }
  return false;
}

// Karachi coordinates in the 1000x480 map space
const KARACHI_X = 664;
const KARACHI_Y = 196;

export const DottedWorldMap: React.FC<DottedWorldMapProps> = ({
  variant = 'card',
  className = '',
}) => {
  const dots = useMemo(() => {
    const result: { x: number; y: number; isRegionalHighlight: boolean }[] = [];
    const step = variant === 'card' ? 13 : 14;
    for (let y = 36; y <= 435; y += step) {
      for (let x = 55; x <= 920; x += step) {
        if (isLand(x, y)) {
          const distToKarachi = Math.hypot(x - KARACHI_X, y - KARACHI_Y);
          result.push({
            x,
            y,
            isRegionalHighlight: distToKarachi < 78,
          });
        }
      }
    }
    return result;
  }, [variant]);

  if (variant === 'card') {
    // Cropped viewBox centered around EMEA + Pakistan/South Asia so the card looks like a rich radar map UI
    return (
      <div
        className={`relative w-full h-[220px] rounded-[18px] bg-gradient-to-b from-[#F8FBFF] via-[#F1F6FC] to-[#E7F0FA] border border-[#E2ECF6] overflow-hidden flex items-center justify-center select-none ${className}`}
      >
        {/* Subtle technical latitude/longitude grid */}
        <svg
          className="w-full h-full"
          viewBox="390 60 470 290"
          fill="none"
          aria-label="Dotted map highlighting Aslam Dental Care in P.E.C.H.S., Karachi"
        >
          <defs>
            <radialGradient id="karachiRadarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E9BF0" stopOpacity="0.34" />
              <stop offset="65%" stopColor="#1E9BF0" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1E9BF0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="arcGradCard" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E9BF0" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#1E9BF0" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* Subtle graticule lines */}
          <line x1="390" y1="130" x2="860" y2="130" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="390" y1="196" x2="860" y2="196" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="390" y1="262" x2="860" y2="262" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="540" y1="60" x2="540" y2="350" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="664" y1="60" x2="664" y2="350" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="780" y1="60" x2="780" y2="350" stroke="#DCE6F2" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Continent dot matrix */}
          {dots.map((d, idx) => (
            <circle
              key={idx}
              cx={d.x}
              cy={d.y}
              r={d.isRegionalHighlight ? 3.1 : 2.5}
              fill={d.isRegionalHighlight ? '#60A5FA' : '#CBD5E1'}
              opacity={d.isRegionalHighlight ? 0.85 : 0.72}
            />
          ))}

          {/* Curved connection arcs converging on Karachi */}
          <path
            d="M 485 115 Q 575 95 664 196"
            stroke="url(#arcGradCard)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            fill="none"
          />
          <path
            d="M 595 205 Q 630 175 664 196"
            stroke="url(#arcGradCard)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M 785 155 Q 725 140 664 196"
            stroke="url(#arcGradCard)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            fill="none"
          />

          {/* Radar glow & concentric rings on Karachi */}
          <circle cx={KARACHI_X} cy={KARACHI_Y} r="58" fill="url(#karachiRadarGlow)" />
          <circle
            cx={KARACHI_X}
            cy={KARACHI_Y}
            r="34"
            stroke="#1E9BF0"
            strokeOpacity="0.25"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <circle
            cx={KARACHI_X}
            cy={KARACHI_Y}
            r="19"
            fill="#1E9BF0"
            fillOpacity="0.16"
            stroke="#1E9BF0"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          <circle
            cx={KARACHI_X}
            cy={KARACHI_Y}
            r="6.5"
            fill="#1E9BF0"
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
        </svg>

        {/* Top-left live GPS telemetry pill */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DCE6F2] shadow-2xs flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[10px] font-semibold text-[#0B0B0C] tracking-tight">
            24.87° N, 67.06° E
          </span>
        </div>

        {/* Floating Karachi Pin Callout */}
        <div
          className="absolute left-[59%] top-[36%] -translate-x-1/2 -translate-y-full pointer-events-none flex flex-col items-center"
          aria-hidden="true"
        >
          <div className="px-3 py-1 rounded-full bg-[#0B0B0C] text-white text-[10.5px] font-semibold shadow-[0_8px_20px_rgba(11,11,12,0.25)] flex items-center gap-1.5 whitespace-nowrap border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#1E9BF0]" />
            <span>P.E.C.H.S., Karachi</span>
          </div>
          <div className="w-2 h-2 bg-[#0B0B0C] rotate-45 -mt-1" />
        </div>

        {/* Bottom-right live clinic badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DCE6F2] text-[10px] font-medium text-[#475569] shadow-2xs">
          Block 2 · Jheel Park Rd
        </div>
      </div>
    );
  }

  // Full-width Horizon Map variant (Section 12 - Find Us in Karachi)
  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1000 440"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="karachiHorizonRadar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E9BF0" stopOpacity="0.32" />
          <stop offset="60%" stopColor="#1E9BF0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1E9BF0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="horizonArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E9BF0" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#1E9BF0" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#1E9BF0" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Subtle latitude & longitude grid curves */}
      <path d="M 60 140 Q 500 165 940 140" stroke="#CBD5E1" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 40 220 Q 500 245 960 220" stroke="#CBD5E1" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 60 300 Q 500 325 940 300" stroke="#CBD5E1" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 4" />

      {/* Authentic World Continent Dot Matrix */}
      {dots.map((d, idx) => (
        <circle
          key={idx}
          cx={d.x}
          cy={d.y}
          r={d.isRegionalHighlight ? 3.2 : 2.6}
          fill={d.isRegionalHighlight ? '#38BDF8' : '#94A3B8'}
          opacity={d.isRegionalHighlight ? 0.85 : 0.46}
        />
      ))}

      {/* Global connection arcs to Karachi (P.E.C.H.S.) */}
      <path
        d="M 225 145 Q 445 55 664 196"
        stroke="url(#horizonArcGrad)"
        strokeWidth="1.8"
        strokeDasharray="5 4"
      />
      <path
        d="M 488 112 Q 576 115 664 196"
        stroke="url(#horizonArcGrad)"
        strokeWidth="1.8"
      />
      <path
        d="M 595 210 Q 630 185 664 196"
        stroke="url(#horizonArcGrad)"
        strokeWidth="1.8"
      />
      <path
        d="M 835 345 Q 755 245 664 196"
        stroke="url(#horizonArcGrad)"
        strokeWidth="1.8"
        strokeDasharray="5 4"
      />

      {/* Origin city nodes */}
      <circle cx="225" cy="145" r="3.5" fill="#64748B" opacity="0.6" />
      <circle cx="488" cy="112" r="3.5" fill="#64748B" opacity="0.6" />
      <circle cx="595" cy="210" r="3.5" fill="#64748B" opacity="0.6" />
      <circle cx="835" cy="345" r="3.5" fill="#64748B" opacity="0.6" />

      {/* Karachi Radar Pulse Rings */}
      <circle cx={KARACHI_X} cy={KARACHI_Y} r="75" fill="url(#karachiHorizonRadar)" />
      <circle
        cx={KARACHI_X}
        cy={KARACHI_Y}
        r="44"
        stroke="#1E9BF0"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />
      <circle
        cx={KARACHI_X}
        cy={KARACHI_Y}
        r="22"
        fill="#1E9BF0"
        fillOpacity="0.15"
        stroke="#1E9BF0"
        strokeOpacity="0.45"
        strokeWidth="1.4"
      />
      <circle
        cx={KARACHI_X}
        cy={KARACHI_Y}
        r="6"
        fill="#1E9BF0"
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
    </svg>
  );
};
