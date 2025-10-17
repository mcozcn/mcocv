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
  return <section id="contact" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Holographic Data Streams */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => <div key={i} className="absolute w-px h-full bg-gradient-to-b from-transparent via-violet-400/50 to-transparent animate-data-stream" style={{
        left: `${8 + i * 8}%`,
        animationDelay: `${i * 0.4}s`,
        animationDuration: `${2 + i % 3}s`
      }}></div>)}
      </div>

      {/* Interactive Mouse Follower */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" style={{
      left: `${mousePosition.x}%`,
      top: `${mousePosition.y}%`,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.3s ease-out'
    }}></div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-violet-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-transparent rotate-12 animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Advanced Effects */}
        <div className="text-center mb-32 relative py-px">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-purple-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram">
              {content[language].title}
            </h2>
            {/* Electric Effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-violet-400/30 transform animate-glitch py-0">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-violet-500 via-pink-500 to-purple-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-violet-300 tracking-widest animate-fade-in delay-200 neon-purple">
            {content[language].subtitle}
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              {/* Form Card */}
              <Card className="glass border-2 border-cyan-500/30 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-700 group">
                <CardContent className="p-12">
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-4">
                      {content[language].formTitle}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {content[language].formSubtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <Input placeholder={content[language].name} className="glass border-blue-500/30 text-white placeholder-gray-400 h-14 text-lg" />
                      <Input type="email" placeholder={content[language].email} className="glass border-blue-500/30 text-white placeholder-gray-400 h-14 text-lg" />
                      <Textarea placeholder={content[language].message} rows={6} className="glass border-blue-500/30 text-white placeholder-gray-400 text-lg resize-none" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-6 text-xl skew-x-[-15deg] transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 overflow-hidden group">
                      <span className="skew-x-[15deg] block relative z-10">{content[language].send}</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              {/* Email Card */}
              <Card className="glass border-2 border-cyan-500/30 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-105 hover:-translate-y-4">
                <CardContent className="p-10 text-center">
                  <div className="text-6xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                    📧
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    {content[language].contactInfo.email.title}
                  </h3>
                  <p className="text-xl text-cyan-400 mb-4 font-mono">
                    {content[language].contactInfo.email.value}
                  </p>
                  <p className="text-gray-400">
                    {content[language].contactInfo.email.description}
                  </p>
                </CardContent>
              </Card>

              {/* LinkedIn Card */}
              <Card className="glass border-2 border-blue-500/30 backdrop-blur-xl hover:border-blue-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-105 hover:-translate-y-4" onClick={() => window.open('https://www.linkedin.com/in/mcozcn/', '_blank')}>
                <CardContent className="p-10 text-center">
                  <div className="flex justify-center mb-8">
                    <Linkedin size={64} className="text-blue-400 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                    {content[language].contactInfo.linkedin.title}
                  </h3>
                  <p className="text-xl text-blue-400 mb-4">
                    {content[language].contactInfo.linkedin.value}
                  </p>
                  <p className="text-gray-400">
                    {content[language].contactInfo.linkedin.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bottom Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse"></div>
    </section>;
};
export default ContactSection;