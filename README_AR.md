# لوحة مؤشرات الجامعات — Next.js

لوحة تنفيذية عربية من صفحتين، تتصل مباشرة بورقتي Google Sheets المنشورتين بصيغة CSV. تتضمن تحديثًا يدويًا وتلقائيًا كل عشر دقائق، وفصلًا كاملًا بين الدولار والليرة السورية.

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:3000`.

## النشر على Vercel

1. ارفع المجلد إلى مستودع GitHub.
2. افتح Vercel واختر Add New Project.
3. اربط المستودع واضغط Deploy. لا تحتاج إلى إعدادات إضافية.

## النشر على GitHub Pages

ملف GitHub Actions موجود مسبقًا داخل `.github/workflows/deploy-pages.yml`.

1. ارفع المشروع إلى فرع `main`.
2. من Settings → Pages اختر Source: GitHub Actions.
3. سيبدأ النشر تلقائيًا.

## مصادر البيانات

الروابط موجودة في `lib/config.ts`. توجد نسخة CSV احتياطية في `public/data` تستخدم إذا تعذر الوصول إلى Google Sheets.
