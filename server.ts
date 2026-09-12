import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Gemini AI VIP Astrological Synthesis Endpoint
app.post('/api/gemini/synthesize', async (req, res) => {
  try {
    const { guestName, sunSign, moonSign, risingSign, dominantElement, modality, roomNumber, travelIntent } = req.body;

    const ai = getGeminiClient();

    if (!ai) {
      // Graceful high-end algorithmic fallback if API key is not yet configured in AI Studio Secrets
      return res.json({
        success: true,
        source: 'fallback',
        gmDossier: `CONFIDENTIAL GM BRIEFING: Guest ${guestName || 'VIP Guest'} arrives with a dominant ${dominantElement || 'Fire'} elemental signature (${sunSign || 'Aries'} Sun, ${moonSign || 'Sagittarius'} Moon, ${risingSign || 'Leo'} Ascendant). Their travel intent centers on "${travelIntent || 'Restoration'}". In accordance with the ${modality || 'Cardinal'} pacing philosophy, dispatch the flagship sensory arrival pour within 90 minutes of in-suite check-in. The Butler team should modulate conversation to be refined, unhurried, and authentic without corporate scripts.`,
        guestWelcomeLetter: `Dear ${guestName || 'Distinguished Guest'},\n\nWelcome to your sanctuary at ${roomNumber || 'The Penthouse'}. The alignment of your ${sunSign || 'Aries'} Sun with the ${dominantElement || 'Fire'} element brings a vibrant creative cadence to our halls this evening. We have tailored your suite with bespoke ${dominantElement || 'Fire'} botanicals, attuned acoustic frequencies, and evening herbal infusions designed to honor your natural rhythm.\n\nMay your stay offer profound renewal and moments of quiet revelation.\n\nWarmest regards,\nThe General Manager & Experience Concierge`,
      });
    }

    const prompt = `
You are the Executive Director of Cultural Experience Intelligence and General Manager at an ultra-luxury 6-star boutique hotel.
A VIP guest has provided their birth chart coordinates at booking.
Synthesize a bespoke, ultra-luxurious, poetic yet operationally precise briefing for the hotel staff and a warm, personalized handwritten-style welcome note for the guest.

Guest Details:
- Name: ${guestName}
- Room: ${roomNumber}
- Sun Sign: ${sunSign}
- Moon Sign: ${moonSign}
- Ascendant/Rising: ${risingSign}
- Dominant Element: ${dominantElement}
- Modality: ${modality}
- Travel Intent: ${travelIntent}

Output JSON with exact format:
{
  "gmDossier": "Executive briefing (3-4 sentences) outlining guest temperament, energy needs, and key staff instructions.",
  "guestWelcomeLetter": "An elegant, evocative, warm welcome note (2 paragraphs) addressed to the guest, subtly celebrating their celestial alignment and customized suite sensory setup without being cheesy or overtly occult."
}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.8,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      success: true,
      source: 'gemini',
      gmDossier: parsed.gmDossier,
      guestWelcomeLetter: parsed.guestWelcomeLetter,
    });
  } catch (error: any) {
    console.error('Error generating astrological synthesis from Gemini, utilizing luxury algorithmic synthesis fallback:', error);
    const { guestName, sunSign, moonSign, risingSign, dominantElement, modality, roomNumber, travelIntent } = req.body;
    return res.json({
      success: true,
      source: 'fallback',
      gmDossier: `CONFIDENTIAL GM BRIEFING: Guest ${guestName || 'VIP Guest'} arrives with a dominant ${dominantElement || 'Fire'} elemental signature (${sunSign || 'Aries'} Sun, ${moonSign || 'Sagittarius'} Moon, ${risingSign || 'Leo'} Ascendant). Their primary travel intent is "${travelIntent || 'Restoration & Quiet'}". Under the ${modality || 'Cardinal'} pacing philosophy, ensure the arrival sensory pour is presented within 90 minutes. Staff should modulate their communication to be unhurried, grounded, and anticipatory with zero corporate scripts.`,
      guestWelcomeLetter: `Dear ${guestName || 'Distinguished Guest'},\n\nWelcome to your sanctuary at ${roomNumber || 'The Penthouse'}. The alignment of your ${sunSign || 'Aries'} Sun and ${dominantElement || 'Fire'} elemental nature introduces an inspiring, dynamic cadence to our halls this week. In anticipation of your journey, we have calibrated your suite with custom ${dominantElement || 'Fire'} botanical diffusion, harmonic sound architecture, and bespoke evening rituals crafted exclusively for you.\n\nMay your stay offer profound rejuvenation, clarity, and moments of quiet wonder.\n\nWarmest regards,\nThe General Manager & Experience Concierge`,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Celestial Sensory Signature Engine running on http://localhost:${PORT}`);
  });
}

startServer();
