import React, { useState } from 'react';
import { NatalChartData, ZodiacSignInfo } from '../types';
import { ZODIAC_SIGNS } from '../services/astrology';

interface Props {
  chart: NatalChartData;
  onSelectSign?: (sign: ZodiacSignInfo) => void;
}

export const CelestialWheel: React.FC<Props> = ({ chart, onSelectSign }) => {
  const [hoveredSign, setHoveredSign] = useState<ZodiacSignInfo | null>(null);

  const signs = Object.values(ZODIAC_SIGNS);
  const size = 380;
  const center = size / 2;
  const radius = center - 24;
  const innerRadius = radius - 48;
  const coreRadius = innerRadius - 48;

  // Calculate sector angles (each sign is 30 degrees = PI/6)
  const getCoordinatesForPercent = (percent: number, r: number) => {
    const x = center + r * Math.cos(2 * Math.PI * percent - Math.PI / 2);
    const y = center + r * Math.sin(2 * Math.PI * percent - Math.PI / 2);
    return [x, y];
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full transform transition-transform duration-700 select-none"
        >
          <defs>
            <radialGradient id="celestialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#c4a35a" stopOpacity="0.02" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5c882" />
              <stop offset="50%" stopColor="#c4a35a" />
              <stop offset="100%" stopColor="#876b2c" />
            </linearGradient>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx={center} cy={center} r={radius + 15} fill="url(#celestialGlow)" />

          {/* Outer Decorative Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="#12131a"
            stroke="url(#goldRing)"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            opacity="0.8"
          />

          {/* 12 Zodiac Sign Sectors */}
          {signs.map((sign, index) => {
            const startAngle = index / 12;
            const endAngle = (index + 1) / 12;
            const midAngle = (index + 0.5) / 12;

            const [x1, y1] = getCoordinatesForPercent(startAngle, radius);
            const [x2, y2] = getCoordinatesForPercent(endAngle, radius);
            const [ix1, iy1] = getCoordinatesForPercent(startAngle, innerRadius);
            const [ix2, iy2] = getCoordinatesForPercent(endAngle, innerRadius);

            const [symbolX, symbolY] = getCoordinatesForPercent(midAngle, (radius + innerRadius) / 2);

            const isSun = chart.sunSign.name === sign.name;
            const isMoon = chart.moonSign.name === sign.name;
            const isRising = chart.risingSign.name === sign.name;
            const isHovered = hoveredSign?.name === sign.name;
            const isActive = isSun || isMoon || isRising || isHovered;

            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 0 1 ${x2} ${y2}`,
              `L ${ix2} ${iy2}`,
              `A ${innerRadius} ${innerRadius} 0 0 0 ${ix1} ${iy1}`,
              'Z'
            ].join(' ');

            return (
              <g
                key={sign.name}
                className="cursor-pointer transition-all duration-300 group"
                onMouseEnter={() => setHoveredSign(sign)}
                onMouseLeave={() => setHoveredSign(null)}
                onClick={() => onSelectSign && onSelectSign(sign)}
              >
                <path
                  d={pathData}
                  fill={
                    isSun
                      ? 'rgba(224, 109, 83, 0.35)'
                      : isMoon
                      ? 'rgba(91, 124, 153, 0.35)'
                      : isRising
                      ? 'rgba(196, 163, 90, 0.3)'
                      : isHovered
                      ? 'rgba(196, 163, 90, 0.2)'
                      : 'rgba(20, 22, 31, 0.6)'
                  }
                  stroke={isActive ? '#c4a35a' : '#272a38'}
                  strokeWidth={isActive ? '1.5' : '0.8'}
                  className="transition-colors duration-200"
                />
                <text
                  x={symbolX}
                  y={symbolY + 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isActive ? '#fdfaf5' : '#8a8898'}
                  fontSize={isActive ? '14' : '12'}
                  fontWeight={isActive ? 'bold' : 'normal'}
                  className="transition-all pointer-events-none"
                >
                  {sign.symbol}
                </text>
              </g>
            );
          })}

          {/* Inner Aspect Ring */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius}
            fill="#0f1016"
            stroke="#323547"
            strokeWidth="1"
          />

          {/* Aspect Lines between Sun, Moon, and Rising */}
          {(() => {
            const sunIdx = signs.findIndex(s => s.name === chart.sunSign.name);
            const moonIdx = signs.findIndex(s => s.name === chart.moonSign.name);
            const risingIdx = signs.findIndex(s => s.name === chart.risingSign.name);

            const [sx, sy] = getCoordinatesForPercent((sunIdx + 0.5) / 12, coreRadius + 12);
            const [mx, my] = getCoordinatesForPercent((moonIdx + 0.5) / 12, coreRadius + 12);
            const [rx, ry] = getCoordinatesForPercent((risingIdx + 0.5) / 12, coreRadius + 12);

            return (
              <g className="transition-all duration-700">
                {/* Sun to Moon connection */}
                <line x1={sx} y1={sy} x2={mx} y2={my} stroke="#e06d53" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
                {/* Sun to Rising connection */}
                <line x1={sx} y1={sy} x2={rx} y2={ry} stroke="#c4a35a" strokeWidth="1.5" opacity="0.8" />
                {/* Moon to Rising connection */}
                <line x1={mx} y1={my} x2={rx} y2={ry} stroke="#5b7c99" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.75" />

                {/* Markers */}
                <circle cx={sx} cy={sy} r="5" fill="#e06d53" stroke="#fdfaf5" strokeWidth="1.5" />
                <circle cx={mx} cy={my} r="4" fill="#5b7c99" stroke="#fdfaf5" strokeWidth="1.5" />
                <circle cx={rx} cy={ry} r="4" fill="#c4a35a" stroke="#fdfaf5" strokeWidth="1.5" />
              </g>
            );
          })()}

          {/* Core Circle & Center Node */}
          <circle
            cx={center}
            cy={center}
            r={coreRadius}
            fill="#141620"
            stroke="#c4a35a"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Center Brand / Zodiac Identity Text */}
          <text
            x={center}
            y={center - 16}
            textAnchor="middle"
            fill="#c4a35a"
            fontSize="9"
            letterSpacing="2"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            className="uppercase font-semibold tracking-widest"
          >
            NATAL ENGINE
          </text>
          <text
            x={center}
            y={center + 6}
            textAnchor="middle"
            fill="#f5f1e8"
            fontSize="18"
            fontFamily="'Cormorant Garamond', serif"
            className="font-semibold"
          >
            {chart.dominantElement}
          </text>
          <text
            x={center}
            y={center + 24}
            textAnchor="middle"
            fill="#9b978e"
            fontSize="10"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            {chart.modality} Pacing
          </text>
        </svg>

        {/* Hover Sign Tooltip badge */}
        {hoveredSign && (
          <div className="absolute -bottom-2 bg-[#171922] border border-[#c4a35a]/50 text-xs px-3 py-1.5 rounded shadow-xl text-center z-20 pointer-events-none backdrop-blur-md">
            <span className="text-[#c4a35a] font-serif font-bold text-sm mr-1.5">{hoveredSign.name}</span>
            <span className="text-[#a4a095]">({hoveredSign.element} · {hoveredSign.modality})</span>
          </div>
        )}
      </div>

      {/* Triad Key Legend Below Chart */}
      <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
        <div className="bg-[#12141c] border border-[#e06d53]/30 rounded-lg p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-[#e06d53] font-semibold flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#e06d53] inline-block"></span> Sun
          </div>
          <div className="font-serif text-base text-[#f5f1e8] font-medium">{chart.sunSign.name}</div>
          <div className="text-[10px] text-[#8e8c97]">{chart.sunSign.element}</div>
        </div>

        <div className="bg-[#12141c] border border-[#5b7c99]/30 rounded-lg p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-[#5b7c99] font-semibold flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#5b7c99] inline-block"></span> Moon
          </div>
          <div className="font-serif text-base text-[#f5f1e8] font-medium">{chart.moonSign.name}</div>
          <div className="text-[10px] text-[#8e8c97]">{chart.moonSign.element}</div>
        </div>

        <div className="bg-[#12141c] border border-[#c4a35a]/30 rounded-lg p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-[#c4a35a] font-semibold flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#c4a35a] inline-block"></span> Rising
          </div>
          <div className="font-serif text-base text-[#f5f1e8] font-medium">{chart.risingSign.name}</div>
          <div className="text-[10px] text-[#8e8c97]">{chart.risingSign.element}</div>
        </div>
      </div>
    </div>
  );
};
