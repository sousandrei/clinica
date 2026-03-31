import { MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img
              src="/logo-light.svg"
              alt="Equilíbrio do Ser"
              className="h-12 w-auto opacity-90"
              width="88"
              height="48"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Um espaço dedicado à sua saúde integral em Brasília. Transformando
              vidas através do equilíbrio e cuidado especializado.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-brand-yellow-light uppercase tracking-widest">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-brand-yellow-light shrink-0"
                  size={18}
                />
                <span className="text-gray-300 text-sm">
                  Setor Bancário Sul, quadra 2<br />
                  Bloco S, Sala 507/511 e 805
                  <br />
                  Brasília - DF, 70070-120
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/5561996811702"
                  className="flex items-center space-x-3 group hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon
                    className="text-brand-yellow-light shrink-0"
                    size={18}
                  />
                  <span className="text-gray-300 text-sm group-hover:text-brand-yellow-light transition-colors">
                    +55 61 99681-1702
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Map (The "Middle") */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-brand-yellow-light uppercase tracking-widest">
              Localização
            </h3>
            <a
              href="https://maps.app.goo.gl/2HurDCuLm4Sso8ju7"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 relative group h-32 bg-[#e5e3df]"
            >
              <iframe
                src="https://maps.google.com/maps?q=Edif%C3%ADcio%20Empire%20Center%20Bras%C3%ADlia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="240"
                className="-mt-16 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                title="Mapa da Clínica"
              />
              <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/10 transition-colors flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur text-brand-navy px-4 py-2 rounded-full font-bold text-xs shadow-xl transform group-hover:scale-105 transition-all">
                  Ver no Mapa
                </div>
              </div>
            </a>
          </div>

          {/* Column 4: Hours */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold mb-6 text-brand-yellow-light uppercase tracking-widest">
              Horários
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex justify-between">
                <span>Seg - Sex:</span>
                <span className="text-white">08h - 20h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">08h - 13h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-white font-medium">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-sm text-gray-400">
          <p>© 2026 Clínica Equilíbrio do Ser. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
