# Biology, clearly — Chapters 1–3

A small, multi-page revision website for AQA GCSE Biology 8461: Cell Biology (4.1), Organisation (4.2), and Infection and response (4.3). Chapters 1 and 2 each have four module pages; Chapter 3 has three with clickable topic contents, original illustrations, practical storyboards, definitions and exam-focused notes.

## Run locally

Open `index.html`, or serve the folder with `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy to Vercel

Import **Abhiram-745/revquick** into Vercel. Keep the root directory at the repository root. `vercel.json` sets **Other**, no build or install command, and output directory `.`. No environment variables are required. If Vercel asks for a preset, select **Other**.

No backend, API keys, dependencies or build process. Nothing has been deployed.

## Pages

- `chapters.html` — chapter picker
- `chapter-2.html` — Chapter 2 module picker
- `digestion.html` — organisation, digestion, enzymes, RP4 food tests, RP5 pH and amylase
- `circulation.html` — blood, vessels, heart, CHD, treatments, health, lifestyle and cancer
- `breathing.html` — lung structure, gas exchange and supporting ventilation notes
- `plant-transport.html` — leaf tissues, roots, xylem/phloem, transpiration and potometer investigation


- `index.html` — Chapter 1 module picker
- `cell-structure.html` — types, structures, specialisation, differentiation, units
- `microscopy.html` — microscopes, RP1, cultures, RP2
- `cell-transport.html` — diffusion, exchange, osmosis, RP3, active transport
- `cell-division.html` — chromosomes, mitosis, stem cells and cloning

Click illustrations to enlarge. Print any module to save a clean PDF. Apple devices use SF Pro Rounded where available; other devices use Nunito Sans when available, with a system sans-serif fallback. Apple's proprietary font is not redistributed.

## Content and accuracy

`coverage.json` maps sections to the AQA specification. All of section 4.1 and RP1–3 are represented. Sources appear at the bottom of every page. Separate-Biology-only culture work is labelled. Notes are original paraphrases, not copied commercial revision notes or a guarantee of marks. The AQA specification and practical handbook remain authoritative; marking depends on the exact question and mark scheme. Diagrams are simplified and not to scale.

## Illustrations

Ten original AI-generated illustrations (WebP exports) use flat pastel textbook graphics. Related concepts and numbered practical steps are combined into panels. No artwork from Save My Exams or Cognito is copied or included. `IMAGE-NOTES.md` records the illustration brief and accuracy notes.

## Revision formatting

Yellow highlights identify key scientific relationships; blue highlights identify practical conditions, measurements and units. Spacing is compact but keeps diagrams readable. Past-paper wording has been checked against AQA Paper 1 Higher mark schemes from June 2022 and June 2023. `coverage.json` preserves all topic mappings across the 12 Cell Biology specification subsections, including RP1–3.

## Chapter 2 coverage and presentation

`chapter-2-coverage.json` maps all ten subsections of AQA section 4.2 to the notes, including required practicals 4 and 5. The four module titles follow Blertly. Health, lifestyle risks and cancer are included in the circulation module to cover the whole AQA Organisation section. Ventilation and air-composition notes support lung function. A potometer is explicitly labelled as an apparatus investigation, **not** another numbered required practical.

Original bullet-point explanations retain the scientific links needed for explain/evaluate questions. Green emphasises definitions and key facts; blue identifies practical conditions; yellow identifies exam wording. Past-paper references provide examples rather than claiming a fixed answer guarantees marks.

Chapter 2 adds nine original AI-generated WebP illustrations plus two authored SVG figures for the exact blood-flow route and illustrative enzyme-rate curves. Images have intrinsic dimensions, responsive widths and display-height caps. Suitable diagrams sit beside notes on desktop and stack on smaller screens; click-to-enlarge preserves access to the original resolution. Chapter 1's oversized comparison sheets use the same treatment.

The specialised-cell table uses explicit named structures (acrosome, myelin sheath, lignin and sieve plates) with bullet-point adaptation links. Mitochondria explanations explicitly connect aerobic respiration to energy release and the named cellular process.

## Chapter 3

Three modules follow Blertly: Communicable diseases, Preventing and treating disease, and Non-communicable diseases. The last revisits AQA 4.2.2.5–7, matching Blertly’s chapter organisation. `chapter-3-coverage.json` maps all 13 subsections of AQA 4.3, with Biology-only and Higher-Tier-only content clearly labelled. RP2 links back to the full Chapter 1 practical.

- `chapter-3.html` — module picker
- `communicable-diseases.html` — pathogens, named diseases, human and plant defences
- `preventing-disease.html` — vaccination, medicines, resistance, drug trials and monoclonal antibodies
- `non-communicable-diseases.html` — health, risk evidence, cancer, smoking, diet, exercise and alcohol

Fifteen original AI-generated illustrations combine short captions and visual explanations. An authored SVG gives precise positive, negative and invalid pregnancy-test results. Hybridoma production, control lines and targeted treatments include step-by-step explanations informed by the June 2022 and 2023 AQA Higher Paper 1 mark schemes and examiner reports.

Practical layouts in Chapters 1–2 align image, method and controls on wide screens and stack on smaller screens; exam bullets remain grouped. Image dimensions and display-height limits reduce layout shifts and oversized diagrams.
