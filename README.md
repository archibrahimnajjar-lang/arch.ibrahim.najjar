# موقع المهندس إبراهيم النجار — دليل النشر على GitHub Pages

هذا المستودع يحتوي على الموقع الإلكتروني التعريفي الكامل للأكاديمية والاستوديو المعماري للمهندس إبراهيم النجار، مبني بتقنيات **React 19 + TypeScript + Tailwind CSS + Vite**.

المشروع جاهز ومُجهّز بالكامل للنشر التلقائي عبر **GitHub Pages** بنقرة واحدة!

---

## 🚀 خطوات الاستضافة السريعة على GitHub Pages

### الطريقة الأولى: النشر التلقائي عبر GitHub Actions (موصى بها ومجهزة بالكامل)

الملف التلقائي موجود مسبقاً في: `.github/workflows/deploy.yml`، وسيقوم ببناء الموقع ونشره تلقائياً بمجرد رفع الكود!

1. **أنشئ مستودعاً جديداً (New Repository) على حسابك في GitHub**:
   - توجه إلى [github.com/new](https://github.com/new).
   - سمّ المستودع مثلاً: `arch-ibrahim` أو `ibrahim-alnajjar`.
   - اجعله **Public** واضغط **Create repository**.

2. **ارفع ملفات المشروع إلى GitHub**:
   افتح موجه الأوامر (Terminal) في مجلد المشروع ونفّذ الأوامر التالية:
   ```bash
   git init
   git add .
   git commit -m "الموقع المعماري للمهندس إبراهيم النجار"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
   *(استبدل `YOUR_USERNAME` باسم حسابك على غيت هوب، و `YOUR_REPOSITORY` باسم المستودع).*

3. **تفعيل GitHub Pages من إعدادات المستودع**:
   - داخل مستودعك على GitHub، اذهب إلى تبويب **Settings** (الإعدادات).
   - من القائمة الجانبية اختر **Pages**.
   - تحت قسم **Build and deployment**، غيّر **Source** من `Deploy from a branch` إلى:
     👉 **GitHub Actions**.

4. **مبروك! موقعك أصبح حياً على الإنترنت 🎉**:
   - خلال دقيقة واحدة سينتهي البناء التلقائي، وستجد رابط موقعك الرسمي بالأعلى:
   - `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY>/`

---

## 🌐 ربط نطاق خاص بك (Custom Domain) مثل `www.arch-ibrahim.com`

إذا أردت لاحقاً شراء دومين خاص بك وربطه بنفس الموقع مجاناً:
1. في صفحة **Settings > Pages** على GitHub، أضف الدومين في خانة **Custom domain** واضغط **Save**.
2. في لوحة تحكم الدومين (Namecheap, GoDaddy, Cloudflare, إلخ):
   - أضف سجل `CNAME` يوجه `www` إلى `<YOUR_USERNAME>.github.io`.
   - أو أضف سجلات `A` للآي بي الخاص بـ GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. قم بتفعيل خيار **Enforce HTTPS** للحصول على شهادة أمان SSL مجانية وتلقائية.

---

## 💻 التشغيل والتطوير محلياً على جهازك

إذا أردت تجربة الموقع على جهازك أو تعديل أي شيء مستقبلاً:
```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير المحلي
npm run dev

# بناء نسخة الإنتاج النهائية
npm run build
```
المجلد الناتج عن البناء هو مجلد `dist`، ويحتوي على ملفات HTML و CSS و JS والصور جاهزة للعمل.
