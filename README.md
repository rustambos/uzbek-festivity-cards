# O'zbekiston Davlat Bayrami

MA'LUMOTLAR: Mavzu: O'zbekiston Respublikasi Mustaqilligining 35 yilligiga bag'ishlangan tabriknoma sahifasi (React + TS + Tailwind + Vite) Musiqa: YouTube audio — https://youtu.be/oBxopeWP22w (mute holda avtoplay, pastda play/pause tugma) Tillar: UZ / RU / EN almashtirish tugmasi

DIZAYN: Cover/birinchi ekran: men yuborgan 2-rasm (o'zbekcha ornament uslubidagi "35 yillik" grafikasi) fon sifatida, kirish animatsiyasi bilan (fade/scale) Hero bo'lim: men yuborgan 1-rasm (bayroq, Mustaqillik minorasi, Tinchlik yodgorligi) fon sifatida, uning ustiga tabrik matni glassmorphism kartada chiqadi Umumiy uslub: milliy ranglar (ko'k-oq-yashil-oltin), nafis, tantanali, davlat bayrami uslubida Sekin harakatlanuvchi zarralar: yulduzchalar, konfetti (ko'k-oq-yashil ranglarda) Shrift: zamonaviy, tantanali, serif/sans aralash (rasmiy tabriknoma uslubi)

BO'LIMLAR:

Cover ekran (2-rasm foni) — sahifaga kirish animatsiyasi

Hero (1-rasm foni) — tabrik matni:

"Hurmatli Vatandoshlar! 🇺🇿 Sizni va yaqinlaringizni O'zbekiston Respublikasi Mustaqilligining 35 yilligi bilan muborakbod etamiz! Mustaqillik — bu biz uchun o'z uyimizda xotirjam yashash, yaqinlarimiz bilan birga bo'lish va kelajakka ishonch bilan qarash imkonidir. Shu bayram kunida sizga va oilangizga tinchlik, sog'lik, farovonlik va ko'plab quvonchli kunlar tilaymiz. Har bir xonadonda bayram kayfiyati, har bir qalbda Vatanga mehr bo'lsin. Mustaqillik bayrami muborak bo'lsin! 🇺🇿 Siz uchun eng samimiy tilaklar bilan, WebInvite jamoasi"

Foto galereya bo'limi (rasmlar uchun joy, keyinroq qo'shiladi)

Til almashtirish tugmasi (UZ/RU/EN) — matn barcha tillarga tarjima qilingan bo'lsin

SHAXSIYLASHTIRISH (tahrirlash funksiyasi): Kalit ikonkasi o'rniga qalam (✏️) ikonkasi bo'lsin, pastki burchakda Qalam bosilganda tahrirlash oynasi ochiladi, unda 2 ta maydon:

"Kimga tabriklamoqchisiz?" — matndagi "Vatandoshlar" so'zi shu ism/familiya bilan almashadi

"Sizning ismingiz" — matndagi "WebInvite jamoasi" so'zi shu ism bilan almashadi "Saqlash" bosilganda: Supabase'dagi "greetings" jadvaliga yangi yozuv qo'shiladi (recipient_name, sender_name, unique slug, created_at), va foydalanuvchiga shu yangi tabriknomaning o'z havolasi (masalan /tabrik/:slug) beriladi Shu havola ochilganda — asl dizayn, rasmlar va musiqa bilan bir xil sahifa ochiladi, lekin matnda "Vatandoshlar" o'rniga kiritilgan ism, "WebInvite jamoasi" o'rniga kiritilgan ism ko'rinadi Har bir yangi saqlash — mustaqil, boshqa foydalanuvchilarga ta'sir qilmaydigan yangi nusxa (klon) yaratadi Pastki burchakda kichik "WI" ikonkasi/belgisi bo'lsin (WebInvite brendi sifatida, doimiy ko'rinadi)

TEXNIK: Mobil-responsive, tez yuklanadigan, silliq animatsiyalar RSVP kerak emas Supabase: faqat "greetings" jadvali (id, slug, recipient_name, sender_name, created_at) Har bir slug uchun route dinamik generatsiya qilinsin (masalan React Router bilan /:slug)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://uzbek-festivity-cards.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ceec89f-ae3e-4ca8-a8d8-be09b6ad1f6c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
