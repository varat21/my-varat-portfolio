// One-off generator for placeholder assets (SVG images + a valid resume PDF).
// Run: node scripts/generate-assets.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = join(root, 'public', 'images');
mkdirSync(imgDir, { recursive: true });

/* ------------------------------------------------------------------ */
/* Profile avatar                                                       */
/* ------------------------------------------------------------------ */
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="Abstract portrait placeholder">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="55%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  <circle cx="140" cy="150" r="90" fill="#ffffff" opacity="0.08"/>
  <circle cx="680" cy="220" r="140" fill="#ffffff" opacity="0.07"/>
  <circle cx="700" cy="860" r="170" fill="#ffffff" opacity="0.06"/>
  <circle cx="400" cy="360" r="152" fill="#fde7d8"/>
  <path d="M400 190c-96 0-168 66-168 168 0 24 4 46 12 66 10-70 52-118 156-118s146 48 156 118c8-20 12-42 12-66 0-102-72-168-168-168z" fill="#0f172a"/>
  <circle cx="344" cy="368" r="14" fill="#0f172a"/>
  <circle cx="456" cy="368" r="14" fill="#0f172a"/>
  <path d="M360 432q40 30 80 0" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
  <path d="M150 1000 C150 730 650 730 650 1000 Z" fill="url(#shirt)"/>
  <path d="M400 730 l-46 84 46 60 46-60 z" fill="#e2e8f0"/>
</svg>`;
writeFileSync(join(imgDir, 'profile.svg'), profileSvg);

/* ------------------------------------------------------------------ */
/* Project thumbnails                                                   */
/* ------------------------------------------------------------------ */
const projects = [
  { file: 'project-nebula.svg', from: '#4f46e5', mid: '#7c3aed', to: '#14b8a6', letter: 'N', label: 'Nebula Commerce' },
  { file: 'project-pulse.svg', from: '#0d9488', mid: '#06b6d4', to: '#0ea5e9', letter: 'P', label: 'Pulse Analytics' },
  { file: 'project-atlas.svg', from: '#f59e0b', mid: '#f97316', to: '#f43f5e', letter: 'A', label: 'Atlas Trip Planner' },
  { file: 'project-whisper.svg', from: '#c026d3', mid: '#ec4899', to: '#f43f5e', letter: 'W', label: 'Whisper Chat' },
  { file: 'project-forge.svg', from: '#7c3aed', mid: '#4f46e5', to: '#2563eb', letter: 'F', label: 'Forge Design System' },
  { file: 'project-lumen.svg', from: '#10b981', mid: '#14b8a6', to: '#06b6d4', letter: 'L', label: 'Lumen AI Assistant' },
];

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${p.label} placeholder thumbnail">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p.from}"/>
      <stop offset="55%" stop-color="${p.mid}"/>
      <stop offset="100%" stop-color="${p.to}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <circle cx="90" cy="80" r="120" fill="#ffffff" opacity="0.10"/>
  <circle cx="720" cy="430" r="160" fill="#ffffff" opacity="0.08"/>
  <rect x="470" y="90" width="260" height="180" rx="18" fill="#ffffff" opacity="0.12"/>
  <rect x="494" y="118" width="140" height="14" rx="7" fill="#ffffff" opacity="0.45"/>
  <rect x="494" y="146" width="200" height="10" rx="5" fill="#ffffff" opacity="0.30"/>
  <rect x="494" y="168" width="170" height="10" rx="5" fill="#ffffff" opacity="0.30"/>
  <rect x="494" y="200" width="90" height="26" rx="13" fill="#ffffff" opacity="0.40"/>
  <rect x="120" y="300" width="220" height="130" rx="18" fill="#ffffff" opacity="0.10"/>
  <rect x="144" y="326" width="120" height="12" rx="6" fill="#ffffff" opacity="0.40"/>
  <rect x="144" y="352" width="170" height="10" rx="5" fill="#ffffff" opacity="0.28"/>
  <rect x="144" y="374" width="140" height="10" rx="5" fill="#ffffff" opacity="0.28"/>
  <text x="400" y="290" font-family="Space Grotesk, Inter, sans-serif" font-size="150" font-weight="700" fill="#ffffff" opacity="0.22" text-anchor="middle">${p.letter}</text>
</svg>`;
  writeFileSync(join(imgDir, p.file), svg);
}

/* ------------------------------------------------------------------ */
/* Favicon                                                             */
/* ------------------------------------------------------------------ */
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="55%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <text x="32" y="43" font-family="Space Grotesk, Inter, sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">AM</text>
</svg>`;
writeFileSync(join(root, 'public', 'favicon.svg'), favicon);

/* ------------------------------------------------------------------ */
/* Minimal valid one-page resume PDF (correct xref offsets)             */
/* ------------------------------------------------------------------ */
const escapePdfText = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const lines = [
  { text: 'Alex Morgan', size: 26, y: 730, bold: true },
  { text: 'Full-Stack Developer  |  San Francisco, CA', size: 12, y: 706 },
  { text: 'alex.morgan@example.com  |  +1 (555) 123-4567  |  github.com/alexmorgan', size: 10, y: 688 },
  { text: '------------------------------------------------------------------------', size: 10, y: 672 },
  { text: 'SUMMARY', size: 13, y: 648, bold: true },
  { text: 'Full-stack developer with 6+ years of experience shipping scalable web', size: 10, y: 630 },
  { text: 'products with React, TypeScript, Node.js, and AWS. Performance- and', size: 10, y: 616 },
  { text: 'accessibility-focused, with a strong eye for design and detail.', size: 10, y: 602 },
  { text: 'EXPERIENCE', size: 13, y: 572, bold: true },
  { text: 'Senior Full-Stack Developer - Vertex Labs (2023 - Present)', size: 11, y: 554, bold: true },
  { text: '- Led the re-architecture of the customer platform to Next.js (TTI -47%).', size: 10, y: 538 },
  { text: '- Designed a multi-tenant API serving 40M+ requests/month.', size: 10, y: 524 },
  { text: '- Mentored 4 engineers and runs the frontend guild.', size: 10, y: 510 },
  { text: 'Full-Stack Developer - Northwind Digital (2021 - 2023)', size: 11, y: 486, bold: true },
  { text: '- Shipped a HIPAA-compliant patient portal used by 12 clinics.', size: 10, y: 470 },
  { text: '- Cut AWS spend by 30% via right-sizing and autoscaling.', size: 10, y: 456 },
  { text: 'Frontend Developer - BrightByte Agency (2019 - 2021)', size: 11, y: 432, bold: true },
  { text: '- Delivered 20+ marketing sites and web apps, all scoring 95+ Lighthouse.', size: 10, y: 416 },
  { text: 'EDUCATION', size: 13, y: 386, bold: true },
  { text: 'M.S. Computer Science - State University (2017 - 2019)', size: 11, y: 368, bold: true },
  { text: 'B.S. Software Engineering - Pacific Institute of Technology (2013 - 2017)', size: 11, y: 348, bold: true },
  { text: 'SKILLS', size: 13, y: 318, bold: true },
  { text: 'React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL,', size: 10, y: 300 },
  { text: 'MongoDB, Redis, GraphQL, Python, FastAPI, Docker, AWS, CI/CD, Vitest.', size: 10, y: 286 },
];

let contentStream = 'BT\n';
for (const line of lines) {
  contentStream += `/F1 ${line.bold ? '700' : '400'} ${line.size} Tf\n`;
  contentStream += `72 ${line.y} Td\n(${escapePdfText(line.text)}) Tj\n`;
  // reset text matrix position for next line (absolute Td from origin)
  contentStream = contentStream.replace(/Td\n\((?:\\.|[^\\)])*\) Tj\n$/, (m) => m); // no-op guard
}
// Rebuild stream using absolute positioning (Tm) for reliability
contentStream = 'BT\n';
for (const line of lines) {
  contentStream += `/F1 ${line.bold ? '700' : '400'} ${line.size} Tf\n`;
  contentStream += `1 0 0 1 72 ${line.y} Tm\n(${escapePdfText(line.text)}) Tj\n`;
}
contentStream += 'ET\n';

// Note: standard-14 fonts only have one weight; bold via Tj is best-effort.
// We embed Helvetica and use F1 for everything (renderers pick regular).

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
  `<< /Length ${Buffer.byteLength(contentStream, 'latin1')} >>\nstream\n${contentStream}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
];

let pdf = '%PDF-1.4\n';
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf, 'latin1'));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (const off of offsets) {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(join(root, 'public', 'resume.pdf'), Buffer.from(pdf, 'latin1'));

console.log('Assets generated: profile, 6 project thumbs, favicon, resume.pdf');
