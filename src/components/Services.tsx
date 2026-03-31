import { m } from 'framer-motion';
import {
  Activity,
  Apple,
  BookOpen,
  Brain,
  BrainCircuit,
  HandHeart,
  Stethoscope,
  Wind,
} from 'lucide-react';

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
    desc: 'Acolhimento emocional e autoconhecimento em um ambiente seguro (Adultos e crianças).',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-brand-purple-primary/10 text-brand-purple-primary',
  },
  {
    title: 'Neuropsicologia',
    desc: 'Avaliação e reabilitação das funções cognitivas, comportamentais e emocionais (Adultos e crianças).',
    icon: <BrainCircuit className="w-8 h-8" />,
    color: 'bg-purple-600/10 text-purple-700',
  },
  {
    title: 'Psicopedagogia',
    desc: 'Diagnóstico e intervenção nos processos de aprendizagem e suas dificuldades (Adultos e crianças).',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'bg-blue-600/10 text-blue-700',
  },
  {
    title: 'Terapia Ocupacional',
    desc: 'Promoção de autonomia, independência e qualidade de vida no dia a dia (Adultos e crianças).',
    icon: <HandHeart className="w-8 h-8" />,
    color: 'bg-teal-500/10 text-teal-600',
  },
  {
    title: 'Clínica Médica',
    desc: 'Atendimento médico focado na prevenção, diagnóstico e tratamento de saúde (Adultos e crianças).',
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'bg-red-500/10 text-red-600',
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
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-brand-teal/10 text-brand-teal',
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossas Especialidades</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma abordagem multidisciplinar para garantir que você
            receba o melhor cuidado em todas as áreas da saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <m.div
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
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
