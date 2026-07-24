import './globals.css';
export const metadata = { title: 'لوحة مؤشرات الجامعات الخاصة', description: 'لوحة تنفيذية تفاعلية' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
