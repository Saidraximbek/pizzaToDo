# 🍕 Pizza CRUD Loyihasi

## 1. Texnik Topshiriq (TZ)

### 📌 Loyiha nomi:

Pizza CRUD (Create, Read, Delete)

### 🎯 Maqsad:

Foydalanuvchi `pizza` elementlarini yaratishi, ko‘rishi va o‘chira olishi mumkin bo‘lgan oddiy front-end CRUD tizimini yaratish.

### 🛠 Texnologiyalar:

- TypeScript
- DOM manipulation
- JSON-server yoki o‘xshash REST API
- Fetch API

### 🗂 Tuzilishi:

**Papkalar:**

```
src/
│
├── index.ts         → Pizza ro‘yxatini ko‘rsatish
├── create.ts        → Pizza qo‘shish formasi
├── model/
│   └── model.ts     → Interfeys va resurs modeli
├── services/
│   └── DataResource.ts → API bilan ishlash uchun generic class
```

---

## 2. Topshiriqlar

### ✅ Topshiriq 1: Vizualni o‘zgartiring

- `div` elementini `article` elementiga almashtiring.
- Narxni `£` belgisi o‘rniga `Narxi: {price} so‘m` tarzida chiqaring.

### ✅ Topshiriq 2: O‘chirish funksiyasini qo‘shing

- Har bir pizzaning pastiga “❌ O‘chirish” tugmasi qo‘shilsin.
- Tugmaga bosilganda pizza API’dan o‘chirilishi va sahifa yangilanishi kerak.

### ✅ Topshiriq 3: Narx xatoliklarini tekshirish

- Narx noto‘g‘ri yoki kiritilmagan bo‘lsa `alert` orqali foydalanuvchiga ko‘rsating.

### ✅ Topshiriq 4: `loadOne()` funksiyasidan foydalanish

- `index.ts` faylida `Pizza.loadOne(1)` orqali konsolga birinchi pizza chiqsin.

---
