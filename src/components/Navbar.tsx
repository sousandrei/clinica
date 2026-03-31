import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-yellow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/logo-dark.svg"
              alt="Equilíbrio do Ser"
              className="h-12 w-auto"
            />
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
              href="https://wa.me/5561996811702"
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
              href="https://wa.me/5561996811702"
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
