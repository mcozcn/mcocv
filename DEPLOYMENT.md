# GitHub Pages Deployment Guide

Bu proje GitHub Pages'e deploy edilmek için hazırlanmıştır.

## 🚀 Deployment Adımları

### 1. GitHub'a Repository Oluşturma

**Repo oluşturma (Manuel)**
1. GitHub'da yeni bir public repository oluşturun
2. Yerelde projeyi klonlayın
3. GitHub reposuna push edin

### 2. GitHub Pages Ayarlarını Yapma

1. GitHub'daki repository sayfanıza gidin
2. **Settings** > **Pages** sekmesine gidin
3. **Source** olarak **GitHub Actions** seçeneğini seçin
4. Ayarları kaydedin

### 3. Otomatik Deployment

✅ Artık her `main` branch'e push yaptığınızda:
- GitHub Actions otomatik olarak build alacak
- Projeniz otomatik olarak yayınlanacak
- Siteniz `https://<kullanıcı-adı>.github.io/<repo-adı>/` adresinde yayında olacak

### 4. İlk Deployment

İlk deployment için:
1. Repository'ye herhangi bir değişiklik push edin VEYA
2. GitHub'da **Actions** sekmesine gidin
3. "Deploy to GitHub Pages" workflow'unu seçin
4. **Run workflow** butonuna tıklayın

⏱️ İlk deployment 2-5 dakika sürebilir.

## 🔧 Özellikler

Proje aşağıdaki özelliklerle hazırlanmıştır:

✅ **SPA Routing Desteği**: React Router için 404.html yönlendirmesi
✅ **SEO Optimizasyonu**: Meta tags ve structured data
✅ **Jekyll Bypass**: `.nojekyll` dosyası ile Jekyll işleme engellendi
✅ **Otomatik Build**: GitHub Actions ile otomatik deployment
✅ **Production Build**: Optimize edilmiş ve minify edilmiş kod

## 📁 Kritik Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `.github/workflows/deploy.yml` | GitHub Actions deployment workflow'u |
| `vite.config.ts` | Vite build konfigürasyonu |
| `public/404.html` | SPA routing için fallback |
| `public/.nojekyll` | Jekyll işleme engelleyici |
| `index.html` | SPA redirect script içerir |

## 🌐 Custom Domain (Opsiyonel)

Kendi domain'inizi bağlamak için:

1. **GitHub'da Custom Domain Ayarlama:**
   - Settings > Pages > Custom domain
   - Domain'inizi girin (örn: `mucahitozcan.com`)
   - **Enforce HTTPS** seçeneğini etkinleştirin

2. **DNS Ayarları:**
   
   **A Records (Root domain için):**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   
   **CNAME Record (Subdomain için):**
   ```
   www -> <kullanıcı-adı>.github.io
   ```

3. **Bekleyin:**
   - DNS değişiklikleri 24-48 saat sürebilir
   - HTTPS sertifikası otomatik oluşturulacak

## 🐛 Sorun Giderme

### Build Hatası

**Hata:** "npm ci" komutu başarısız
```bash
# Çözüm: package-lock.json'ı yenileyin
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push
```

**Hata:** Build sırasında TypeScript hatası
```bash
# Yerel olarak test edin:
npm run build

# Hataları düzeltin ve tekrar push edin
```

### Deployment Hatası

**Hata:** "Actions" sekmesinde başarısız workflow
1. Actions sekmesinde failed workflow'a tıklayın
2. Hata loglarını inceleyin
3. Genellikle build hatası veya permissions problemi

**Çözüm - Permissions:**
1. Settings > Actions > General
2. "Workflow permissions" bölümünde
3. "Read and write permissions" seçin
4. Kaydedin ve workflow'u yeniden çalıştırın

### 404 Hatası

**Hata:** Site yükleniyor ama sayfa bulunamıyor

**Çözüm 1 - Base Path:**
```typescript
// vite.config.ts dosyasını kontrol edin
base: '/'  // Root domain için
// VEYA
base: '/repo-adı/'  // Subdirectory için
```

**Çözüm 2 - GitHub Pages Ayarı:**
- Settings > Pages'de Source'un "GitHub Actions" olduğunu doğrulayın

### Stil Sorunları

**Hata:** CSS yüklenmiyor veya görünüm bozuk

**Çözüm:**
1. Browser cache temizleyin (Ctrl+Shift+R)
2. `vite.config.ts` base path ayarını kontrol edin
3. Console'da 404 hatası var mı kontrol edin

### Routing Sorunları

**Hata:** Direct link çalışmıyor (örn: `/about` 404 veriyor)

**Çözüm:**
- `public/404.html` dosyasının mevcut olduğundan emin olun
- `index.html`'de SPA redirect script'inin olduğunu kontrol edin

## 📊 Deployment Durumunu Kontrol

1. **Actions Sekmesi:**
   - Tüm workflow çalışmalarını görebilirsiniz
   - Build loglarını inceleyebilirsiniz
   - Başarılı/başarısız durumları takip edebilirsiniz

2. **Environments:**
   - Settings > Environments > github-pages
   - Deployment geçmişini ve URL'yi görebilirsiniz

## 🔄 Güncelleme

Sitenizi güncellemek için:

```bash
git add .
git commit -m "Site güncelleme"
git push
```

GitHub Actions otomatik olarak yeni version'ı deploy edecek.

## 📱 Yerel Test

Production build'i yerel olarak test etmek için:

```bash
# Build alın
npm run build

# Preview modunda çalıştırın
npm run preview

# Tarayıcıda http://localhost:4173 açın
```

## 🚀 İleri Seviye

### Branch'ler ile Çalışma

Geliştirme için:
```bash
# Yeni branch oluştur
git checkout -b feature/yeni-ozellik

# Değişiklikleri commit et
git commit -am "Yeni özellik eklendi"

# Branch'i push et
git push origin feature/yeni-ozellik

# GitHub'da Pull Request oluştur
# Merge edilince otomatik deploy olur
```

### Multiple Environments

Farklı ortamlar için:
- `main` branch -> Production (github-pages)
- `staging` branch -> Staging (ayrı domain)
- `dev` branch -> Development (sadece local)

## 📚 Kaynaklar

- [GitHub Pages Dokümantasyonu](https://docs.github.com/pages)
- [GitHub Actions Dokümantasyonu](https://docs.github.com/actions)
- [Vite Dokümantasyonu](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Custom Domain Rehberi](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 💡 İpuçları

1. **Repository Public olmalı** (GitHub Free plan için)
2. **İlk deployment 2-5 dakika** sürebilir
3. **Cache sorunları** için hard refresh yapın (Ctrl+Shift+R)
4. **HTTPS otomatik** olarak etkinleşir
5. **Custom domain** için DNS değişikliği 24-48 saat sürebilir

## 🆘 Destek

Sorun yaşarsanız:
- [GitHub Pages Sorun Giderme](https://docs.github.com/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
