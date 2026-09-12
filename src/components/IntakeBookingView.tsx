import React from 'react';
import { GuestProfile, NatalChartData, GuestStayPreferences } from '../types';
import { SAMPLE_GUEST_PROFILES } from '../services/astrology';
import { ArchetypeVisualizer } from './ArchetypeVisualizer';
import {
  Sparkles,
  User,
  Calendar,
  Clock,
  MapPin,
  Coffee,
  HeartHandshake,
  Moon,
  Wind,
  Thermometer,
  Bed,
  Target,
  ArrowRight,
  Sliders
} from 'lucide-react';

interface Props {
  profile: GuestProfile;
  chart: NatalChartData;
  onUpdateProfile: (updated: Partial<GuestProfile>) => void;
  onSelectPreset: (preset: GuestProfile) => void;
  onProceedToOrchestrator: () => void;
}

export const IntakeBookingView: React.FC<Props> = ({
  profile,
  chart,
  onUpdateProfile,
  onSelectPreset,
  onProceedToOrchestrator
}) => {
  const updatePref = <K extends keyof GuestStayPreferences>(key: K, val: GuestStayPreferences[K]) => {
    onUpdateProfile({
      preferences: {
        ...profile.preferences,
        [key]: val,
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Executive Intro Banner - Plain English, Zero Jargon */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Boutique Luxury Prototype · Astrological Guest Personalization</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal leading-tight">
            How a Guest's Birth Chart Turns a Stay into a <span className="italic text-amber-400">Customized, Memorable Experience</span>
          </h2>
          <p className="text-sm text-stone-300 mt-2.5 leading-relaxed">
            Standard luxury hotels ask for generic preferences: <em>"high floor, king bed, quiet room."</em> When guests share their birth date, time, and city at booking, our system decodes their <strong>core archetype (Sun)</strong>, <strong>sleep and comfort style (Moon)</strong>, and <strong>first-impression rhythm (Rising)</strong>. A 30-room boutique hotel can execute this realistically with 4 signature room scents, curated lighting scenes, tailored turn-down surprises, and clear staff service notes.
          </p>
        </div>

        {/* Quick VIP Presets */}
        <div className="mt-5 pt-4 border-t border-stone-800">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5">
            Test Different Guest Archetypes:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SAMPLE_GUEST_PROFILES.map((preset) => {
              const isSelected = profile.id === preset.id;
              const signName = preset.birthDate.includes('04-06') ? 'Aries (Fire)' :
                               preset.birthDate.includes('05-12') ? 'Taurus (Earth)' :
                               preset.birthDate.includes('06-08') ? 'Gemini (Air)' : 'Scorpio (Water)';
              return (
                <button
                  key={preset.id}
                  id={`preset-${preset.id}`}
                  onClick={() => onSelectPreset(preset)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 text-stone-100 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-stone-950/70 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-sm text-stone-100 font-medium">{preset.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-900 text-amber-400 border border-stone-700">
                      {signName}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-400 line-clamp-1">{preset.preferences.tripPurpose}</div>
                  <div className="text-[10px] text-stone-500 mt-1">{preset.roomNumber}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Component: The Birth Chart Archetype Visualizer */}
      <ArchetypeVisualizer
        chart={chart}
        preferences={profile.preferences}
        guestName={profile.name}
        roomNumber={profile.roomNumber}
        onSelectSign={(signName) => {
          // Quick set birth date to match sign
          const signDateMap: Record<string, string> = {
            Aries: '1990-04-05',
            Taurus: '1992-05-10',
            Gemini: '1995-06-08',
            Cancer: '1993-07-12',
            Leo: '1989-08-10',
            Virgo: '1994-09-08',
            Libra: '1991-10-05',
            Scorpio: '1990-11-14',
            Sagittarius: '1996-12-05',
            Capricorn: '1988-01-10',
            Aquarius: '1997-02-08',
            Pisces: '1993-03-05'
          };
          if (signDateMap[signName]) {
            onUpdateProfile({ birthDate: signDateMap[signName] });
          }
        }}
      />

      {/* Two Columns: Intake Form with Specific Stay Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Guest Intake Information */}
        <div className="lg:col-span-6 bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
          <div className="border-b border-stone-800 pb-3">
            <h3 className="font-serif text-lg text-stone-100 flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              <span>Step 1: Reservation & Birth Chart Information</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Provided securely by the guest at booking or via pre-arrival concierge link.
            </p>
          </div>

          <div className="space-y-4">
            {/* Guest Name & Room */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-medium">
                  Guest Full Name
                </label>
                <input
                  id="input-guest-name"
                  type="text"
                  value={profile.name}
                  onChange={(e) => onUpdateProfile({ name: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  placeholder="e.g., Julian Sterling"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-medium">
                  Allocated Room
                </label>
                <input
                  id="input-room-number"
                  type="text"
                  value={profile.roomNumber}
                  onChange={(e) => onUpdateProfile({ roomNumber: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  placeholder="e.g., Suite 404"
                />
              </div>
            </div>

            {/* Arrival Time & Nights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-medium">
                  Expected Arrival Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3 top-2.5 text-stone-500" />
                  <input
                    id="input-arrival-time"
                    type="time"
                    value={profile.arrivalTime}
                    onChange={(e) => onUpdateProfile({ arrivalTime: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-medium">
                  Length of Stay (Nights)
                </label>
                <input
                  id="input-nights"
                  type="number"
                  min="1"
                  max="14"
                  value={profile.nights}
                  onChange={(e) => onUpdateProfile({ nights: Math.max(1, parseInt(e.target.value) || 1) })}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Birth Information */}
            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Birth Chart Details
                </span>
                <span className="text-[10px] text-stone-400">Used strictly to personalize stay amenities</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    Date of Birth (Sun Sign)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-2.5 text-stone-500" />
                    <input
                      id="input-birth-date"
                      type="date"
                      value={profile.birthDate}
                      onChange={(e) => onUpdateProfile({ birthDate: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">
                    Approximate Birth Time (Rising Sign)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-2.5 text-stone-500" />
                    <input
                      id="input-birth-time"
                      type="time"
                      value={profile.birthTime}
                      onChange={(e) => onUpdateProfile({ birthTime: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-stone-400 mb-1">
                  Birth City & Country (Locates Ascendant)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-2.5 text-stone-500" />
                  <input
                    id="input-birth-city"
                    type="text"
                    value={profile.birthCity}
                    onChange={(e) => onUpdateProfile({ birthCity: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    placeholder="e.g., London, UK"
                  />
                </div>
              </div>
            </div>

            {/* Dietary notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-medium">
                Dietary & Beverage Allergies / Preferences
              </label>
              <input
                id="input-dietary"
                type="text"
                value={profile.dietaryNotes}
                onChange={(e) => onUpdateProfile({ dietaryNotes: e.target.value })}
                className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                placeholder="e.g., No dairy, prefers herbal decoctions, single-origin coffee"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Specific Stay Preferences */}
        <div className="lg:col-span-6 bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
          <div className="border-b border-stone-800 pb-3">
            <h3 className="font-serif text-lg text-stone-100 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-amber-400" />
              <span>Step 2: Specific Stay Preferences</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Specific, realistic hospitality levers tailored to the guest's archetype.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Question 1: Morning Beverage */}
            <div>
              <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                1. Preferred Morning Beverage (Prepared at requested wake time)
              </label>
              <select
                id="select-morning-beverage"
                value={profile.preferences.morningBeverage}
                onChange={(e) => updatePref('morningBeverage', e.target.value as any)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Pour-Over Dark Roast Coffee">Pour-Over Dark Roast Coffee (Freshly ground single-origin)</option>
                <option value="Oat Milk Flat White">Oat Milk Flat White (Double espresso with velvety foam)</option>
                <option value="Ceremonial Matcha">Ceremonial Matcha (Hand-whisked Uji green tea)</option>
                <option value="English Breakfast Tea">English Breakfast Tea (Organic whole leaf with lemon/honey)</option>
                <option value="Fresh Mint Herbal Tea">Fresh Mint Herbal Tea (Garden spearmint & verbena)</option>
              </select>
            </div>

            {/* Question 2: Staff Interaction Style */}
            <div>
              <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-sky-400" />
                2. Staff Service Style (How the hotel team interacts with you)
              </label>
              <select
                id="select-interaction-style"
                value={profile.preferences.interactionStyle}
                onChange={(e) => updatePref('interactionStyle', e.target.value as any)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Discreet & Seamless (respect quiet time)">Discreet & Seamless (Fast check-in, minimal contact, respect quiet time)</option>
                <option value="Warm & Curated (love insider tips & friendly chat)">Warm & Curated (Friendly conversation, local restaurant and cultural tips)</option>
                <option value="Absolute Privacy (sanctuary mode, minimal contact)">Absolute Privacy (Sanctuary mode, zero unprompted staff visits)</option>
              </select>
            </div>

            {/* Question 3: Evening Wind-Down */}
            <div>
              <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                3. Nightly Turn-Down Ritual (Delivered during evening service)
              </label>
              <select
                id="select-evening-winddown"
                value={profile.preferences.eveningWindDown}
                onChange={(e) => updatePref('eveningWindDown', e.target.value as any)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Chamomile & Lavender Bedtime Tea">Steaming Chamomile & Lavender Herbal Tea with Local Honey</option>
                <option value="Spiced Artisanal Nightcap Cocktail">Spiced Artisanal Nightcap (Small-batch bourbon or herbal amaro)</option>
                <option value="Chilled Sparkling Mineral Water with Lemon">Chilled Sparkling Mineral Water with Fresh Meyer Lemon</option>
                <option value="Warm Golden Oat Milk with Cinnamon">Warm Golden Oat Milk with Turmeric, Vanilla, and Cinnamon</option>
              </select>
            </div>

            {/* Question 4: Scent Tolerance */}
            <div>
              <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
                4. In-Room Scent Preference (Cold-air micro-diffusion)
              </label>
              <select
                id="select-scent-tolerance"
                value={profile.preferences.scentTolerance}
                onChange={(e) => updatePref('scentTolerance', e.target.value as any)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Signature Astrological Scent">Signature Astrological Blend (Calibrated to your natal element)</option>
                <option value="Subtle & Fresh Only">Subtle & Fresh Only (Very light eucalyptus & bergamot)</option>
                <option value="100% Unscented / Hypoallergenic">100% Unscented / Hypoallergenic (No diffusers or linen sprays)</option>
              </select>
            </div>

            {/* Question 5 & 6: Temperature & Pillows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-red-400" />
                  5. Room Temperature
                </label>
                <select
                  id="select-room-temp"
                  value={profile.preferences.roomTemperature}
                  onChange={(e) => updatePref('roomTemperature', e.target.value as any)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Crisp & Cool (67°F)">Crisp & Cool (67°F)</option>
                  <option value="Balanced Comfort (69°F)">Balanced Comfort (69°F)</option>
                  <option value="Warm & Cozy (72°F)">Warm & Cozy (72°F)</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-purple-400" />
                  6. Pillow Selection
                </label>
                <select
                  id="select-pillow-type"
                  value={profile.preferences.pillowType}
                  onChange={(e) => updatePref('pillowType', e.target.value as any)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Plush Goose Down">Plush European Goose Down</option>
                  <option value="Firm Natural Latex">Firm Natural Aerated Latex</option>
                  <option value="Cooling Memory Foam">Cooling Memory Foam</option>
                  <option value="Organic Buckwheat">Organic Buckwheat Hull</option>
                </select>
              </div>
            </div>

            {/* Question 7: Primary Purpose of This Stay */}
            <div>
              <label className="block uppercase tracking-wider text-stone-400 mb-1.5 font-medium flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                7. Purpose of This Stay
              </label>
              <select
                id="select-trip-purpose"
                value={profile.preferences.tripPurpose}
                onChange={(e) => updatePref('tripPurpose', e.target.value as any)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Deep Rest & Unplugging">Deep Rest & Unplugging (Need quiet downtime and restoration)</option>
                <option value="Celebration & Weekend Indulgence">Celebration & Weekend Indulgence (Festive dining, cocktails, spa)</option>
                <option value="Creative Focus / Solo Work">Creative Focus / Solo Work (Quiet space, coffee, no interruptions)</option>
                <option value="Exploration & Dining">Exploration & Dining (Out exploring neighborhoods, art, and local food)</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              id="btn-orchestrate-stay"
              onClick={onProceedToOrchestrator}
              className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm tracking-wide shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Apply to Room Ambiance & Staff Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
