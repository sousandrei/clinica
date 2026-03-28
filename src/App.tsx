import { motion } from 'framer-motion';
import {
  Activity,
  Apple,
  Brain,
  ChevronRight,
  Flower2,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  Wind,
  X,
} from 'lucide-react';
import { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-yellow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent gradient-yellow">
              Equilíbrio do Ser
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicos"
              className="text-brand-brown hover:text-brand-yellow-primary transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-brand-brown hover:text-brand-yellow-primary transition-colors font-medium"
            >
              A Clínica
            </a>
            <a
              href="#contato"
              className="text-brand-brown hover:text-brand-yellow-primary transition-colors font-medium"
            >
              Localização
            </a>
            <a
              href="https://wa.me/556198220458"
              className="px-6 py-2.5 rounded-full gradient-yellow text-white font-semibold shadow-lg shadow-brand-yellow-primary/20 hover:scale-105 transition-transform"
            >
              Agendar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-yellow-primary/10 px-4 py-6"
        >
          <div className="flex flex-col space-y-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                window.location.hash = '#servicos';
              }}
              className="text-lg font-medium text-left text-brand-brown"
            >
              Serviços
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                window.location.hash = '#sobre';
              }}
              className="text-lg font-medium text-left text-brand-brown"
            >
              A Clínica
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                window.location.hash = '#contato';
              }}
              className="text-lg font-medium text-left text-brand-brown"
            >
              Localização
            </button>
            <a
              href="https://wa.me/556198220458"
              className="px-6 py-3 rounded-xl gradient-yellow text-white font-semibold text-center"
            >
              Agendar via WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow-primary/5 rounded-l-full -z-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-purple-primary/5 rounded-r-full -z-10 blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow-primary/10 text-brand-yellow-secondary text-sm font-bold mb-6">
            <Flower2 size={16} />
            <span>CUIDADO HUMANIZADO</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Equilíbrio entre <br />
            <span className="text-brand-yellow-primary">
              Corpo, Mente e Espírito
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg">
            A Clínica Equilíbrio do Ser é dedicada ao seu bem-estar integral.
            Ambiente acolhedor e profissionais qualificados para transformar sua
            qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/556198220458"
              className="px-8 py-4 rounded-full gradient-yellow text-white font-bold text-lg shadow-xl shadow-brand-yellow-primary/30 hover:scale-105 transition-transform flex items-center justify-center space-x-2"
            >
              <span>Agendar Avaliação</span>
              <ChevronRight size={20} />
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 rounded-full border-2 border-brand-yellow-primary/20 text-brand-brown font-bold text-lg hover:bg-brand-yellow-primary/5 transition-colors text-center"
            >
              Conhecer Especialidades
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <div className="aspect-[4/5] bg-brand-yellow-primary/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-brand-yellow-primary border-dashed animate-spiral flex items-center justify-center opacity-30">
                <div
                  className="w-32 h-32 rounded-full border-4 border-brand-purple-primary border-dashed animate-spiral opacity-50"
                  style={{ animationDirection: 'reverse' }}
                />
              </div>
              <div className="absolute text-brand-yellow-secondary font-medium text-center">
                [Imagem da Clínica /<br />
                Ambiente de Cura]
              </div>
            </div>
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-brand-yellow-primary/10">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                <Activity size={24} />
              </div>
              <div className="font-bold">+5000</div>
            </div>
            <div className="text-sm text-gray-500">
              Pacientes atendidos com excelência e carinho.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const services = [
  {
    title: 'Acupuntura',
    desc: 'Equilíbrio energético e alívio de dores através da medicina tradicional chinesa.',
    icon: <Wind className="w-8 h-8" />,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Fisioterapia',
    desc: 'Reabilitação física personalizada para recuperar sua mobilidade e força.',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    title: 'Psicologia',
    desc: 'Acolhimento emocional e autoconhecimento em um ambiente seguro.',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-brand-purple-primary/10 text-brand-purple-primary',
  },
  {
    title: 'Nutrição',
    desc: 'Planejamento alimentar consciente para nutrir seu corpo e sua mente.',
    icon: <Apple className="w-8 h-8" />,
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    title: 'Pilates',
    desc: 'Fortalecimento do core, flexibilidade e consciência corporal plena.',
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    title: 'RPG',
    desc: 'Reeducação Postural Global para correção de desequilíbrios estruturais.',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-brand-yellow-primary/10 text-brand-yellow-primary',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossas Especialidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma abordagem multidisciplinar para garantir que você
            receba o melhor cuidado em todas as áreas da saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
              <a
                href="https://wa.me/556198220458"
                className="inline-flex items-center text-brand-yellow-secondary font-bold hover:underline"
              >
                Saiba mais <ChevronRight size={18} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Cuidando do Ser em <br />
                todas as suas dimensões
              </h2>
              <div className="h-1.5 w-24 gradient-yellow rounded-full mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Na Clínica Equilíbrio do Ser, acreditamos que a verdadeira
                  saúde nasce da harmonia entre as três dimensões do ser humano:
                  <span className="font-bold text-brand-brown">
                    {' '}
                    corpo, mente e espírito.
                  </span>
                </p>
                <p>
                  Nossa filosofia é inspirada na "Espiral da Vida", que
                  representa o fluxo constante de energia e evolução. Buscamos
                  não apenas tratar sintomas, mas proporcionar um ambiente onde
                  você possa evoluir e alcançar um estado elevado de bem-estar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 border-l-4 border-brand-yellow-primary bg-brand-yellow-primary/5">
                <div className="text-3xl font-bold mb-1">Humanismo</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Nossa Base
                </div>
              </div>
              <div className="p-4 border-l-4 border-brand-purple-primary bg-brand-purple-primary/5">
                <div className="text-3xl font-bold mb-1">Inovação</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Nossa Prática
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-brand-navy rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-yellow-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center h-full text-white/40 font-bold text-center p-12 italic text-3xl font-cormorant leading-relaxed">
                "O equilíbrio não é algo que você encontra, é algo que você
                cria."
              </div>
              {/* Visual Representation of Spiral */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/5 rounded-full animate-spiral" />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full animate-spiral delay-500"
                style={{ animationDuration: '30s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Equilíbrio do Ser</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              Um espaço dedicado à sua saúde integral em Brasília. Transformando
              vidas através do equilíbrio e cuidado especializado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/556198220458"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-yellow-primary uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-brand-yellow-primary shrink-0"
                  size={20}
                />
                <span className="text-gray-400">
                  Setor Bancário Sul, quadra 2 Bloco S Sala 507/511 e 805
                  Edifício Empire Center, Brasília - DF, 70070-120
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  className="text-brand-yellow-primary shrink-0"
                  size={20}
                />
                <span className="text-gray-400">+55 61 9822-0458</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-yellow-primary uppercase tracking-wider">
              Horários
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda - Sexta: 08h às 20h</li>
              <li>Sábado: 08h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-sm text-gray-500">
          <p>© 2026 Clínica Equilíbrio do Ser. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;
