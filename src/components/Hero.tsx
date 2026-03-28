import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ChevronRight, Flower2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = [
  '/assets/acump.webp',
  '/assets/fisio.webp',
  '/assets/pilates.webp',
  '/assets/psico.webp',
  '/assets/rpg.webp',
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-brand-yellow-primary/10">
            <div className="aspect-[4/5] flex items-center justify-center relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Clínica Equilíbrio do Ser"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  {...(currentImageIndex === 0 ? { 
                    fetchPriority: "high",
                    loading: "eager"
                  } : {})}
                />
              </AnimatePresence>

              {/* Subtle overlay gradient to ensure it looks integrated */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/30 to-transparent pointer-events-none mix-blend-multiply" />
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
