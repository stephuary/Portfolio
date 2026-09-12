import React from 'react';
import { Briefcase, TrendingUp, DollarSign, Users, Award, Shield, CheckCircle, Lightbulb, Target, Check } from 'lucide-react';

export const PortfolioDossierView: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Hero Candidate Pitch */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Portfolio Showcase · Guest Experience Prototype</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-normal leading-tight">
            Personalized Boutique Hospitality <span className="italic text-amber-400">Powered by Birth Chart Archetypes</span>
          </h2>
          <p className="text-base text-stone-300 mt-3 leading-relaxed">
            This interactive prototype proves how a modern boutique hotel (20–60 keys) can move beyond generic guest preferences to deliver true one-of-a-kind hospitality. By collecting birth date, time, and location during intake, we match guests to elemental archetypes and automatically generate tailored sensory room setups, staff interaction tips, and memorable surprise moments.
          </p>
        </div>
      </div>

      {/* The Hospitality Problem vs. The Innovation Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" /> The Standard Problem
          </div>
          <h4 className="font-serif text-xl text-stone-100 font-medium mb-3">
            Superficial, Generic Luxury
          </h4>
          <ul className="space-y-3 text-xs text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold mt-0.5">✕</span>
              <span><strong>Boring Intake Questions:</strong> Hotels only ask for "feather vs. foam pillow" or "high vs. low floor," creating zero emotional connection.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold mt-0.5">✕</span>
              <span><strong>Generic VIP Gifts:</strong> Uninspired fruit baskets or cheap bottles of wine that guests leave behind untouched.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold mt-0.5">✕</span>
              <span><strong>One-Size-Fits-All Staff Service:</strong> Staff speak to energetic extroverts and quiet introverts with identical canned scripts.</span>
            </li>
          </ul>
        </div>

        <div className="bg-stone-900 border border-emerald-500/30 rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> The Boutique Prototype Solution
          </div>
          <h4 className="font-serif text-xl text-stone-100 font-medium mb-3">
            Archetype-Informed Guest Personalization
          </h4>
          <ul className="space-y-3 text-xs text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Instant Archetype Mapping:</strong> Sun (identity), Moon (rest & bedtime), and Rising (arrival impression) decode guest preferences instantly.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Realistic 5-Sense Touchpoints:</strong> 4 signature elemental scents, smart room lighting scenes, curated arrival drinks, and bedtime herbal tonics.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Staff Service Notes:</strong> 3-bullet guidelines tell front desk and housekeeping exactly how to communicate with each guest archetype.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Realistic Boutique Execution Plan */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
          <Shield className="w-4 h-4" />
          <span>Operational Reality on a Boutique Scale (20–60 Rooms)</span>
        </div>
        <h4 className="font-serif text-xl text-stone-100 font-medium">
          How to Execute This Without Adding Staff or Huge Costs
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-300 leading-relaxed">
          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-amber-400 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 4 Core Fragrance Oils
            </div>
            <p>
              The hotel only needs 4 signature essential oil bottles (Fire, Earth, Air, Water). Housekeeping simply sets the cold-air diffuser cartridge before guest arrival.
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-amber-400 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 3 Room Lighting Scenes
            </div>
            <p>
              Pre-programmed into existing smart room keypads: Arrival Glow, Focus & Daylight, and Turn-Down Warmth. Zero custom hardware required.
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-amber-400 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Simple Staff Cheat-Sheets
            </div>
            <p>
              Front desk systems display 2-3 quick bullet points right on the reservation card: communication pace, preferred beverage, and turn-down time.
            </p>
          </div>
        </div>
      </div>

      {/* Business Value & Guest Impact */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <TrendingUp className="w-4 h-4" />
          <span>Business Value & Guest Loyalty Metrics</span>
        </div>
        <h3 className="font-serif text-2xl text-stone-100 font-medium mb-5">
          Why Luxury Boutique Hotels Benefit
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-2xl font-serif text-amber-400 font-bold">+35%</div>
            <div className="text-xs font-semibold text-stone-100 mt-1">Direct Bookings</div>
            <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
              Guests book directly on the hotel website to take advantage of the custom birth-chart intake.
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-2xl font-serif text-amber-400 font-bold">High Share</div>
            <div className="text-xs font-semibold text-stone-100 mt-1">Social Sharing</div>
            <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
              Guests photograph their custom astrological welcome card, bedside sleep tonic, and signature scent.
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-2xl font-serif text-amber-400 font-bold">+28%</div>
            <div className="text-xs font-semibold text-stone-100 mt-1">Bar & Spa Revenue</div>
            <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
              Tailored bath soaks and curated nightcap cocktails encourage guests to spend on on-property amenities.
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <div className="text-2xl font-serif text-amber-400 font-bold">+90 NPS</div>
            <div className="text-xs font-semibold text-stone-100 mt-1">Guest Loyalty</div>
            <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
              Guests feel truly seen and understood, driving repeat bookings whenever they travel to the city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
