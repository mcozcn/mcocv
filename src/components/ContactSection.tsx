import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
interface ContactSectionProps {
  language: 'tr' | 'en';
}
const ContactSection = ({
  language
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const {
    toast
  } = useToast();
  const content = {
    tr: {
      title: 'İLETİŞİM',
      subtitle: 'LET\'S CREATE SOMETHING AMAZING',
      formTitle: 'Projenizi Konuşalım',
      formSubtitle: 'Dijital dönüşüm yolculuğunuzda size rehberlik edebilirim',
      name: 'İsim',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'MESAJ GÖNDER',
      myEmail: 'mcozcn@gmail.com',
      errorMessage: 'Lütfen tüm alanları doldurun',
      successMessage: 'Mesajınız başarıyla gönderildi!',
      contactInfo: {
        email: {
          title: 'E-posta',
          value: 'mcozcn@gmail.com',
          description: 'Projeleriniz için benimle iletişime geçin'
        },
        linkedin: {
          title: 'LinkedIn',
          value: 'Profesyonel Ağ',
          description: 'Profesyonel bağlantı kuralım'
        }
      }
    },
    en: {
      title: 'CONTACT',
      subtitle: 'LET\'S CREATE SOMETHING AMAZING',
      formTitle: 'Let\'s Discuss Your Project',
      formSubtitle: 'I can guide you on your digital transformation journey',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'SEND MESSAGE',
      myEmail: 'mcozcn@gmail.com',
      errorMessage: 'Please fill in all fields',
      successMessage: 'Your message has been sent successfully!',
      contactInfo: {
        email: {
          title: 'Email',
          value: 'mcozcn@gmail.com',
          description: 'Get in touch for your projects'
        },
        linkedin: {
          title: 'LinkedIn',
          value: 'Professional Network',
          description: 'Let\'s connect professionally'
        }
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: content[language].errorMessage,
        variant: "destructive"
      });
      return;
    }
    console.log('Form submitted:', formData);
    toast({
      title: "Başarılı",
      description: content[language].successMessage
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="relative py-20 sm:py-32 md:py-40 bg-transparent overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header with Advanced Effects */}
        <div className="text-center mb-16 sm:mb-24 md:mb-32 relative py-px">
          <div className="inline-block mb-6 sm:mb-8 relative">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white tracking-tight">
              {content[language].title}
            </h2>
            <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 md:w-64 h-px bg-white/20"></div>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-white/75 tracking-tight mt-4 sm:mt-6 md:mt-8 px-4">
            {content[language].subtitle}
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {/* Form Card */}
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 md:p-12">
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
                      {content[language].formTitle}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base md:text-lg font-light">
                      {content[language].formSubtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                      <Input placeholder={content[language].name} name="name" value={formData.name} onChange={handleInputChange} className="border-white/10 bg-white/5 text-white placeholder-white/40 h-12 sm:h-14 text-sm sm:text-base md:text-lg font-light backdrop-blur-sm" />
                      <Input type="email" placeholder={content[language].email} name="email" value={formData.email} onChange={handleInputChange} className="border-white/10 bg-white/5 text-white placeholder-white/40 h-12 sm:h-14 text-sm sm:text-base md:text-lg font-light backdrop-blur-sm" />
                      <Textarea placeholder={content[language].message} name="message" value={formData.message} onChange={handleInputChange} rows={5} className="border-white/10 bg-white/5 text-white placeholder-white/40 text-sm sm:text-base md:text-lg resize-none font-light backdrop-blur-sm" />
                    </div>
                    
                    <button type="submit" className="w-full border border-white/10 bg-white/10 text-white font-light py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-xl tracking-tight transition-all duration-300 hover:bg-white/20 backdrop-blur-sm">
                      {content[language].send}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {/* Email Card */}
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 md:mb-8 transform group-hover:scale-110 transition-all duration-300">
                    📧
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extralight text-white mb-3 sm:mb-4 transition-colors duration-300">
                    {content[language].contactInfo.email.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4 font-light tracking-tight">
                    {content[language].contactInfo.email.value}
                  </p>
                  <p className="text-white/60 text-sm sm:text-base font-light">
                    {content[language].contactInfo.email.description}
                  </p>
                </CardContent>
              </Card>

              {/* LinkedIn Card */}
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group cursor-pointer transform hover:scale-105" onClick={() => window.open('https://www.linkedin.com/in/mcozcn/', '_blank')}>
                <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                  <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                    <Linkedin size={48} className="sm:w-16 sm:h-16 md:w-16 md:h-16 text-white/80 transform group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extralight text-white mb-3 sm:mb-4 transition-colors duration-300">
                    {content[language].contactInfo.linkedin.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4 font-light">
                    {content[language].contactInfo.linkedin.value}
                  </p>
                  <p className="text-white/60 text-sm sm:text-base font-light">
                    {content[language].contactInfo.linkedin.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bottom Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>;
};
export default ContactSection;