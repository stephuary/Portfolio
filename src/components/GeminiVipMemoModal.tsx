import React, { useState } from 'react';
import { GuestProfile, NatalChartData } from '../types';
import { Sparkles, X, Bot, FileText, Send, Copy, Check, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: GuestProfile;
  chart: NatalChartData;
}

export const GeminiVipMemoModal: React.FC<Props> = ({ isOpen, onClose, profile, chart }) => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<{ gmDossier: string; guestWelcomeLetter: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/gemini/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guestName: profile.name,
          roomNumber: profile.roomNumber,
          sunSign: chart.sunSign.name,
          moonSign: chart.moonSign.name,
          risingSign: chart.risingSign.name,
          dominantElement: chart.dominantElement,
          modality: chart.modality,
          travelIntent: profile.travelIntent,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult({
          gmDossier: data.gmDossier,
          guestWelcomeLetter: data.guestWelcomeLetter,
        });
      } else {
        throw new Error(data.error || 'Failed to generate');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Unable to connect to AI server. Using standard CEI protocol.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `--- GENERAL MANAGER VIP DOSSIER ---\n${result.gmDossier}\n\n--- BESPOKE GUEST LETTER ---\n${result.guestWelcomeLetter}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#12141d] border border-[#c4a35a]/50 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252838] bg-[#0c0d12]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#c4a35a]/20 text-[#c4a35a] flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#f7f3ec] font-medium">
                Gemini Astrological VIP Memo Engine
              </h3>
              <p className="text-[10px] text-[#8e8a7f]">
                AI-synthesized General Manager brief and customized handwritten welcome scroll
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8e8a7f] hover:text-white hover:bg-[#1a1c28] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Guest Context Bar */}
          <div className="bg-[#181a26] p-3.5 rounded-xl border border-[#2b2e40] flex items-center justify-between text-xs">
            <div>
              <span className="text-[#8e8a7f] block text-[10px] uppercase">Guest & Astral Archetype</span>
              <span className="text-[#f5f1e8] font-medium">{profile.name} · {chart.sunSign.name} Sun ({chart.dominantElement})</span>
            </div>
            <div className="text-right">
              <span className="text-[#8e8a7f] block text-[10px] uppercase">Pacing Cadence</span>
              <span className="text-[#c4a35a] font-medium">{chart.modality} Pacing</span>
            </div>
          </div>

          {!result && !loading && (
            <div className="text-center py-8 px-4 space-y-3">
              <Sparkles className="w-10 h-10 text-[#c4a35a] mx-auto animate-pulse" />
              <h4 className="font-serif text-xl text-[#f7f3ec]">
                Generate Bespoke Executive Memo
              </h4>
              <p className="text-xs text-[#9d998e] max-w-md mx-auto leading-relaxed">
                Click below to synthesize a tailored General Manager operational brief and an evocative, personalized welcome letter referencing {profile.name}’s celestial coordinates.
              </p>
              <button
                onClick={handleGenerate}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#c4a35a] text-[#0b0c10] font-semibold text-xs tracking-wide shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                Generate VIP Dossier with Gemini
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-12 space-y-3">
              <Loader2 className="w-8 h-8 text-[#c4a35a] animate-spin mx-auto" />
              <p className="text-xs text-[#aba79c]">Consulting celestial ephemeris and luxury hotel protocols...</p>
            </div>
          )}

          {error && (
            <div className="bg-[#2d1b1b] border border-[#e06d53]/50 text-[#f5c2b8] p-3 rounded-lg text-xs">
              {error}
            </div>
          )}

          {result && (
            <div className="space-y-5 animate-fade-in">
              {/* GM Operational Dossier */}
              <div className="bg-[#161824] border border-[#2d3248] rounded-xl p-4">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#c4a35a] font-semibold mb-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Confidential General Manager VIP Briefing</span>
                </div>
                <p className="text-xs text-[#dedbd2] leading-relaxed whitespace-pre-line">
                  {result.gmDossier}
                </p>
              </div>

              {/* Guest Handwritten-Style Letter */}
              <div className="bg-[#0f1118] border border-[#c4a35a]/30 rounded-xl p-5 relative">
                <div className="text-[10px] uppercase tracking-widest text-[#8e8a7f] mb-3">
                  In-Suite Handwritten Welcome Scroll (Wax-Sealed)
                </div>
                <div className="font-serif text-sm text-[#f5f1e8] leading-relaxed whitespace-pre-line border-l-2 border-[#c4a35a] pl-4 italic">
                  {result.guestWelcomeLetter}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {result && (
          <div className="px-6 py-3 border-t border-[#252838] bg-[#0c0d12] flex items-center justify-between">
            <button
              onClick={handleGenerate}
              className="text-xs text-[#8e8a7f] hover:text-[#c4a35a] transition-colors"
            >
              Regenerate Brief
            </button>
            <button
              onClick={copyToClipboard}
              className="px-4 py-1.5 rounded bg-[#1f2232] border border-[#373c54] hover:border-[#c4a35a] text-xs text-[#f5f1e8] flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#3cd070]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Full Memo'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
