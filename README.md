# Mücahit Özcan - Kişisel Portföy Websitesi

Modern, responsive ve etkileyici bir kişisel portföy websitesi. Dijital dönüşüm ve strateji uzmanlığımı sergileyen, React ve modern web teknolojileriyle geliştirilmiş profesyonel bir platform.

## 🌟 Özellikler

- **Modern ve Responsive Tasarım**: Her cihazda mükemmel görünüm
- **Çift Dil Desteği**: Türkçe ve İngilizce içerik
- **Animasyonlu Arayüz**: Etkileyici CSS animasyonları ve geçiş efektleri
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş yapı
- **Hızlı ve Performanslı**: Vite ile optimize edilmiş build
- **Dark Theme**: Modern karanlık tema tasarımı

## 🚀 Teknolojiler

Bu proje aşağıdaki modern teknolojilerle geliştirilmiştir:

- **React 18** - Kullanıcı arayüzü
- **TypeScript** - Tip güvenli kod
- **Vite** - Hızlı build ve geliştirme
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI bileşenleri
- **Lucide Icons** - Modern ikonlar
- **React Router** - Sayfa yönlendirme

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

```bash
# Repository'yi klonlayın
git clone <repository-url>

# Proje klasörüne gidin
cd portfolio

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:8080` adresini açın.

## 🏗️ Build

Production build oluşturmak için:

```bash
npm run build
```

Build çıktısı `dist` klasöründe oluşturulacaktır.

Build'i yerel olarak test etmek için:

```bash
npm run preview
```

## 📄 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── ui/             # shadcn/ui bileşenleri
│   ├── Navigation.tsx  # Ana navigasyon
│   ├── HeroSection.tsx # Ana başlık bölümü
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/              # Sayfa bileşenleri
│   ├── Index.tsx       # Ana sayfa
│   └── NotFound.tsx    # 404 sayfası
├── hooks/              # Custom React hooks
├── lib/                # Yardımcı fonksiyonlar
├── index.css           # Global stiller ve animasyonlar
└── main.tsx            # Uygulama giriş noktası
```

## 🌐 Deployment

### GitHub Pages

Proje GitHub Pages için hazırlanmıştır. Deploy etmek için:

1. GitHub'da repository oluşturun
2. Kodları push edin
3. GitHub Settings > Pages'den "GitHub Actions" seçin
4. Otomatik deployment başlayacaktır

Detaylı bilgi için `DEPLOYMENT.md` dosyasına bakın.

### Lovable ile Deployment

1. [Lovable](https://lovable.dev) editöründe projeyi açın
2. Sağ üstteki "Publish" butonuna tıklayın
3. Siteniz otomatik olarak yayınlanacaktır

## 🎨 Özelleştirme

### Renkler ve Tema

Tüm renkler ve tema ayarları şu dosyalarda tanımlıdır:
- `src/index.css` - CSS değişkenleri ve animasyonlar
- `tailwind.config.ts` - Tailwind tema yapılandırması

### İçerik Düzenleme

Her bölümün içeriği ilgili component dosyasında düzenlenebilir:
- `HeroSection.tsx` - Ana başlık ve istatistikler
- `AboutSection.tsx` - Hakkımda bölümü
- `ExperienceSection.tsx` - Deneyimler
- `ProjectsSection.tsx` - Projeler
- `SkillsSection.tsx` - Yetenekler
- `ContactSection.tsx` - İletişim formu

## 📱 Responsive Tasarım

Proje mobil-first yaklaşımıyla geliştirilmiştir ve şu ekran boyutlarında test edilmiştir:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🔧 Geliştirme

### Yeni Bileşen Ekleme

```bash
# shadcn/ui bileşeni eklemek için
npx shadcn-ui@latest add [component-name]
```

### Kod Standardı

Proje TypeScript strict mode ile çalışır ve ESLint kurallarına uyar.

## 📄 Lisans

Bu proje kişisel kullanım içindir.

## 📞 İletişim

- **Website**: [mucahitozcan.com](https://mucahitozcan.com)
- **Email**: info@mucahitozcan.com
- **LinkedIn**: [linkedin.com/in/mucahitozcan](https://linkedin.com/in/mucahitozcan)

## 🙏 Teşekkürler

Bu proje [Lovable](https://lovable.dev) platformu kullanılarak geliştirilmiştir.

---

**Lovable Proje URL'si**: https://lovable.dev/projects/3b0d08b2-feb2-4adb-8dbd-1a5839ba36ea
