import { m } from 'framer-motion';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <m.div
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
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-4 border-l-4 border-brand-yellow-primary bg-brand-yellow-primary/5">
                <div className="text-3xl font-bold mb-1">Humanismo</div>
                <div className="text-sm text-gray-600 uppercase tracking-widest font-bold">
                  Nossa Base
                </div>
              </div>
              <div className="p-4 border-l-4 border-brand-purple-primary bg-brand-purple-primary/5">
                <div className="text-3xl font-bold mb-1">Inovação</div>
                <div className="text-sm text-gray-600 uppercase tracking-widest font-bold">
                  Nossa Prática
                </div>
              </div>
            </div>
          </m.div>

          <m.div
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
          </m.div>
        </div>
      </div>
    </section>
  );
};
