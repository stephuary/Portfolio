import React from 'react';
import { SurpriseMoment, NatalChartData, GuestProfile } from '../types';
import { Sparkles, Gift, Star, Calendar } from 'lucide-react';

interface Props {
  moments: SurpriseMoment[];
  chart: NatalChartData;
  profile: GuestProfile;
}

export const SurpriseVaultView: React.FC<Props> = ({ moments, chart, profile }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Curated Hospitality Moments</span>
        </div>
        <h3 className="font-serif text-2xl text-stone-100 font-medium">
          Tailored Surprises for {profile.name}
        </h3>
        <p className="text-xs text-stone-300 mt-1 max-w-2xl leading-relaxed">
          Standard hotels send the same generic fruit plate or boilerplate greeting to every VIP. 
          Our prototype schedules <strong>thoughtful micro-moments</strong> timed to {profile.name}'s stay rhythm and elemental archetype (<strong>{chart.sunSign.name} · {chart.dominantElement}</strong>).
        </p>
      </div>

      {/* Grid of Surprise Moments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all relative overflow-hidden group shadow-lg"
          >
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-950 text-amber-400 font-mono uppercase font-semibold border border-stone-800">
                  {moment.dayLabel}
                </span>
                <span className="text-[10px] text-amber-400 flex items-center gap-1 font-mono">
                  <Star className="w-3 h-3 fill-current text-amber-400" />
                  Delight Score: {moment.impactScore}%
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">{moment.department}</span>
                <span className="text-xs text-stone-600">·</span>
                <span className="text-xs text-amber-400/90">{chart.dominantElement} Element Touch</span>
              </div>

              <h4 className="font-serif text-xl text-stone-100 font-medium mb-2.5 leading-snug">
                {moment.title}
              </h4>

              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {moment.description}
              </p>

              {/* Reveal Mechanism */}
              <div className="space-y-2 bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-xs">
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold mb-0.5">
                    How & When It Is Delivered:
                  </span>
                  <p className="text-stone-300 text-[11px]">{moment.revealMechanism}</p>
                </div>
                <div className="pt-2 border-t border-stone-800/80">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold mb-0.5">
                    Why It Fits This Archetype:
                  </span>
                  <p className="text-stone-400 text-[11px]">{moment.astrologicalTrigger}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-stone-400">
                <Gift className="w-3.5 h-3.5 text-amber-400" />
                <span>Low Operational Friction · High Guest Memory</span>
              </span>
              <span className="text-amber-400 font-medium text-[11px]">Boutique Ready</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
