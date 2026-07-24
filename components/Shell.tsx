'use client';
import { BarChart3, Building2, RefreshCw } from 'lucide-react';
export default function Shell({page,setPage,onRefresh,lastUpdated,loading,children}:{page:'overview'|'financial';setPage:(p:'overview'|'financial')=>void;onRefresh:()=>void;lastUpdated?:Date;loading:boolean;children:React.ReactNode}){
 return <main className="min-h-screen">
  <header className="luxury-bg text-white px-5 md:px-10 py-7">
   <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
    <div><p className="text-amber-200 text-sm mb-1 tracking-wider">EXECUTIVE INTELLIGENCE</p><h1 className="text-2xl md:text-4xl font-semibold">لوحة مؤشرات الجامعات الخاصة</h1><p className="text-slate-300 mt-2">عرض تنفيذي موحّد للبيانات التشغيلية والمالية</p></div>
    <button onClick={onRefresh} disabled={loading} className="rounded-xl border border-amber-200/40 bg-white/10 px-4 py-3 flex items-center gap-2 hover:bg-white/15 disabled:opacity-50"><RefreshCw size={18} className={loading?'animate-spin':''}/> تحديث البيانات</button>
   </div>
  </header>
  <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-4">
   <nav className="panel p-2 flex gap-2 w-fit">
    <button onClick={()=>setPage('overview')} className={`px-4 py-2 rounded-xl flex gap-2 ${page==='overview'?'bg-[#10233f] text-white':'hover:bg-slate-100'}`}><Building2 size={18}/> الرئيسية OV</button>
    <button onClick={()=>setPage('financial')} className={`px-4 py-2 rounded-xl flex gap-2 ${page==='financial'?'bg-[#10233f] text-white':'hover:bg-slate-100'}`}><BarChart3 size={18}/> المالية EI</button>
   </nav>
   <div className="text-xs text-slate-500 mt-3">آخر تحديث: {lastUpdated?lastUpdated.toLocaleString('ar-SY'):'—'} · تحديث تلقائي كل 10 دقائق</div>
   {children}
  </div>
 </main>
}
