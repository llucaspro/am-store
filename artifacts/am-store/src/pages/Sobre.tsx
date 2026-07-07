import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Shield, Diamond, Target } from 'lucide-react';
import feat1 from '@/assets/feat-1.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function SobrePage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src={feat1} alt="História AM Store" className="w-full h-full object-cover object-center opacity-40 scale-105" />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-display tracking-widest mb-6 mt-16"
          >
            NOSSA HISTÓRIA
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-display mb-6">A Essência da Presença</h2>
            <p className="text-white/70 font-sans leading-relaxed mb-6">
              Fundada em São Paulo, a AM Store nasceu da insatisfação com a moda masculina genérica. Percebemos que faltava uma marca que unisse o rigor da alfaiataria clássica com a estética urbana contemporânea.
            </p>
            <p className="text-white/70 font-sans leading-relaxed">
              Cada peça nossa é pensada não apenas para vestir, mas para projetar intenção. Trabalhamos exclusivamente com matérias-primas premium e produção 100% nacional, garantindo controle absoluto sobre cada costura.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2 aspect-square md:aspect-video lg:aspect-[4/5] relative"
          >
            <img src={feat1} alt="AM Store Atelier" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center p-4">
              <span className="font-display text-3xl text-primary">EST. 2021</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Shield, title: 'Qualidade', desc: 'Acabamentos impecáveis e durabilidade projetada para anos, não meses.' },
              { icon: Target, title: 'Presença', desc: 'Caimentos milimetricamente calculados para valorizar a silhueta.' },
              { icon: Diamond, title: 'Exclusividade', desc: 'Tiragens limitadas para garantir que seu estilo permaneça único.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full border border-primary flex items-center justify-center mb-6 text-primary hover:bg-primary hover:text-black transition-colors duration-500">
                  <value.icon strokeWidth={1} size={40} />
                </div>
                <h3 className="text-2xl font-display tracking-widest mb-4">{value.title}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-7xl font-display tracking-widest leading-tight mb-8">
            VISTA SUA <span className="text-primary italic">MELHOR VERSÃO</span>
          </h2>
          <div className="w-1 h-16 bg-primary mx-auto"></div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            {[
              { label: 'Coleções', value: '+180 peças' },
              { label: 'Produção', value: '100% nacional' },
              { label: 'Satisfação', value: '4.9/5' },
              { label: 'Experiência', value: '5 anos' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-display font-bold mb-2">{stat.value}</span>
                <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-70 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
