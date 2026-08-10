# olsot-web

Ol-sot ilovasining rasmiy sayti — Google Play Console uchun **Support URL** va
**Privacy Policy URL** manzillarini beradi.

Vite (MPA, ko'p sahifali) — React ishlatilmagan, faqat statik HTML/CSS.

## Sahifalar

| Fayl                 | URL         | Play Console maydoni |
| -------------------- | ----------- | -------------------- |
| `index.html`         | `/`         | Website (ixtiyoriy)  |
| `support/index.html` | `/support/` | Support URL          |
| `privacy/index.html` | `/privacy/` | Privacy Policy URL   |

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # natija: dist/
npm run preview  # dist/ ni tekshirish
```

## Deploy

`npm run build` dan keyin `dist/` papkasini istalgan statik hostingga
joylashtiring:

- **Netlify** — https://app.netlify.com/drop ga `dist/` papkasini sudrab
  tashlang (eng tez yo'l, ro'yxatdan o'tish shart emas).
- **Vercel** — `npx vercel --prod` (root: shu papka, framework: Vite).
- **GitHub Pages** — `dist/` ni `gh-pages` branchiga push qiling.
- **Cloudflare Pages** — build command `npm run build`, output `dist`.

Deploydan keyin manzillar quyidagicha bo'ladi:

```
https://<sizning-domeningiz>/support/
https://<sizning-domeningiz>/privacy/
```

Shu ikkitasini Play Console → "Основные сведения о приложении" bo'limiga
kiritasiz.

## Deploydan OLDIN o'zgartirish shart

`support@olsot.uz` — bu **vaqtinchalik** manzil. Barcha uchta HTML faylda
uchraydi; uni haqiqiy, ishlaydigan pochtangizga almashtiring:

```bash
# Windows PowerShell
Get-ChildItem -Recurse -Include *.html |
  ForEach-Object { (Get-Content $_ -Raw) -replace 'support@olsot.uz','sizning@pochtangiz' |
  Set-Content $_ -Encoding utf8 }
```

Google Play ko'rsatilgan manzilga xat yuborib tekshiradi — javob bermaydigan
pochta tufayli ilova rad etilishi mumkin.

## Eslatma

Maxfiylik siyosati matni ilovaning haqiqiy xatti-harakatiga qarab yozilgan
(telefon raqami + parol bilan ro'yxatdan o'tish, e'lonlar, sevimlilar,
push-token, AI-yordamchi, SecureStore). Backendda bulardan tashqari ma'lumot
yig'ilsa yoki analitika (masalan Google Analytics, Sentry) qo'shilsa, siyosatga
ham qo'shish kerak — aks holda Play Console'dagi "Data safety" formasi bilan
mos kelmay qoladi.
