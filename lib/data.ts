import Papa from 'papaparse';
import { DATA_URLS } from './config';

export type Row = Record<string, string>;

export function parseNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  const text = String(value).trim();
  if (!text || text === 'غير معبأة' || text === '-' || text === '—') return null;
  const normalized = text
    .replace(/[٬,\s]/g, '')
    .replace(/٫/g, '.')
    .replace(/%/g, '')
    .replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

export async function fetchCsv(kind: 'OV' | 'EI'): Promise<Row[]> {
  const cacheBust = `&_=${Date.now()}`;
  const fallback = `./data/${kind.toLowerCase()}.csv`;
  let text: string;
  try {
    const res = await fetch(DATA_URLS[kind] + cacheBust, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    text = await res.text();
  } catch {
    const res = await fetch(fallback, { cache: 'no-store' });
    if (!res.ok) throw new Error('تعذر تحميل البيانات الحية والنسخة الاحتياطية');
    text = await res.text();
  }
  return Papa.parse<Row>(text, { header: true, skipEmptyLines: true }).data;
}

export const sum = (rows: Row[], field: string) => rows.reduce((a, r) => a + (parseNumber(r[field]) || 0), 0);
export const uniq = (rows: Row[], field: string) => [...new Set(rows.map(r => r[field]).filter(Boolean))];
export const format = (n: number, max = 0) => new Intl.NumberFormat('ar-SY', { maximumFractionDigits: max }).format(n);
