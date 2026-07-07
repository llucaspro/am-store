import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { ThreeScene } from '@/components/ThreeScene';

import { Shield, Truck, Clock, Diamond } from 'lucide-react';

import heroImg from '@assets/hero.jpg';
import logoImg from '@assets/709737226_18084092231149564_1279338615928384912_n_1783384802471.jpg';

// Categories
import catTshirt from '@assets/cat-tshirt.jpg';
import catShirt from '@assets/cat-shirt.jpg';
import catPants from '@assets/cat-pants.jpg';
import catSneakers from '@assets/cat-sneakers.jpg';
import catAcc from '@assets/cat-accessories.jpg';

// Featured
import feat1 from '@assets/feat-1.jpg';
import feat2 from '@assets/feat-2.jpg';
import feat3 from '@assets/feat-3.jpg';
import feat4 from '@assets/feat-4.jpg';
import feat5 from '@assets/feat-5.jpg';
import feat6 from '@assets/feat-6.jpg';

// Instagram
import insta1 from '@assets/insta-1.jpg';
import insta2 from '@assets/insta-2.jpg';
import insta3 from '@assets/insta-3.jpg';
import insta4 from '@assets/insta-4.jpg';
import insta5 from '@assets/insta-5.jpg';
import insta6 from '@assets/insta-6.jpg';

const categories = [
  { name: 'Camisetas', img: catTshirt },
  { name: 'Camisas', img: catShirt },
  { name: 'Calças', img: catPants },
  { name: 'Tênis', img: catSneakers },
  { name: 'Acessórios', img: catAcc },
];

const featuredProducts = [
  { id: 1, name: 'Camisa Seda Obsidian', price: 'R$ 489,90', img: feat1 },
  { id: 2, name: 'Calça Cargo Tailored', price: 'R$ 529,90', img: feat2 },
  { id: 3, name: 'Bota Chelsea Gold', price: 'R$ 899,90', img: feat3 },
  { id: 4, name: 'Bracelete Minimalista', price: 'R$ 249,90', img: feat4 },
  { id: 5, name: 'Duffel Bag Couro', price: 'R$ 1.299,90', img: feat5 },
  { id: 6, name: 'Blazer Estruturado', price: 'R$ 1.150,00', img: feat6 },
];

const benefits = [
  { icon: Shield, title: 'Qualidade Garantida', desc: 'Materiais premium selecionados com rigor absoluto.' },
  { icon: Truck, title: 'Envio para todo Brasil', desc: 'Entrega rápida e segura em embalagem exclusiva.' },
  { icon: Clock, title: 'Atendimento Personalizado', desc: 'Consultoria de estilo dedicada aos nossos clientes.' },
  { icon: Diamond, title: 'Produtos Selecionados', desc: 'Curadoria focada em exclusividade e presença.' },
];

const testimonials = [
  { name: 'Ricardo S.', city: 'São Paulo, SP', text: '"A qualidade das peças é absurda. O caimento da camisa me fez abandonar as marcas internacionais que eu costumava comprar. Presença garantida."' },
  { name: 'Gabriel M.', city: 'Curitiba, PR', text: '"A experiência de unboxing já mostra que a AM Store não é uma loja comum. Cada detalhe transborda luxo e cuidado."' },
  { name: 'Felipe A.', city: 'Rio de Janeiro, RJ', text: '"Comprei o blazer e a bota para um evento. Nunca fui tão elogiado. A marca entrega exatamente o que promete: presença e exclusividade."' },
];

const instagramGrid = [insta1, insta2, insta3, insta4, insta5, insta6];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="AM Store Hero" className="w-full h-full object-cover object-center opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 text-center md:text-left flex flex-col items-center md:items-start justify-center h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Exclusividade e Alta Costura</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-7xl md:text-9xl font-display leading-[0.85] tracking-tight mb-6"
            >
              AM STORE<br />
              <span className="text-transparent text-stroke opacity-80">AM STORE</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-3xl font-serif text-white/90 mb-4 max-w-2xl"
            >
              Moda Masculina com Presença.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-sm md:text-base font-sans text-white/50 mb-10 max-w-lg leading-relaxed"
            >
              Peças selecionadas para homens que valorizam estilo, qualidade e personalidade. O luxo em cada detalhe.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" className="text-lg w-full md:w-auto">
                Ver Coleção
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-primary absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categorias" className="py-32 px-6 container mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="flex flex-col md:flex-row items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-5xl font-display text-white mb-2">Essenciais</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <a href="#" className="text-sm font-sans tracking-widest text-primary hover:text-white transition-colors uppercase mt-6 md:mt-0">
            Explorar Categorias &rarr;
          </a>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div key={i} variants={fadeInUp} className="group relative cursor-pointer overflow-hidden aspect-[3/4]">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 m-2"></div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                <h3 className="text-xl font-display tracking-widest text-white group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3D SHOWCASE SECTION */}
      <section id="destaques" className="py-24 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="w-full lg:w-1/3 z-10 mb-12 lg:mb-0"
          >
            <h2 className="text-6xl font-display leading-none mb-6">A Forma<br/><span className="text-primary">Perfeita</span></h2>
            <p className="text-white/60 font-sans mb-8 leading-relaxed">
              Não fazemos apenas roupas. Esculpimos presença. Cada peça da AM Store é desenhada com precisão matemática para garantir um caimento impecável que transforma a postura de quem veste.
            </p>
            <Button variant="outline" className="border-primary/50 text-white hover:bg-primary hover:text-black">
              Descubra o Caimento
            </Button>
          </motion.div>

          <div className="w-full lg:w-2/3 h-[60vh] lg:h-[80vh] relative cursor-grab active:cursor-grabbing">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20 font-display text-2xl tracking-widest animate-pulse">Carregando Experiência...</div>}>
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ThreeScene />
              </Canvas>
            </Suspense>
            <div className="absolute bottom-8 right-8 text-xs font-sans tracking-widest text-white/30 uppercase pointer-events-none">
              Arraste para interagir
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="colecao" className="py-32 px-6 container mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-display text-white mb-4">Lançamentos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white/50 font-sans max-w-xl mx-auto">
            A nova coleção explora o contraste entre o vazio absoluto do preto e o impacto magnético dos detalhes em ouro.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <Button className="w-full">Adicionar ao Carrinho</Button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-serif text-white group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm mt-1">Exclusivo</p>
                </div>
                <span className="text-primary font-sans font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Ver Todos
          </Button>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="sobre" className="py-24 border-y border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 text-primary">
                  <benefit.icon strokeWidth={1} size={32} />
                </div>
                <h3 className="text-xl font-display tracking-wide mb-3">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display text-white">A Palavra de Quem Veste</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-[#111] border border-white/5 p-10 relative group hover:border-primary/30 transition-colors duration-500">
              <div className="text-primary text-4xl font-serif mb-6 opacity-50">"</div>
              <p className="text-white/80 font-serif italic leading-relaxed mb-8 text-sm md:text-base">
                {test.text}
              </p>
              <div>
                <h4 className="font-display text-xl tracking-wide">{test.name}</h4>
                <p className="text-primary/70 text-xs font-sans uppercase tracking-wider">{test.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section className="py-10 flex flex-col items-center">
        <div className="mb-10 text-center">
          <p className="text-primary font-sans text-xs tracking-[0.2em] uppercase mb-2">Social</p>
          <h2 className="text-3xl font-display tracking-widest hover:text-primary transition-colors cursor-pointer">@AMSTORE.BR</h2>
        </div>
        
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {instagramGrid.map((img, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden">
              <img src={img} alt={`Instagram post ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-display text-xl tracking-widest">VER POST</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-black pt-24 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <img src={logoImg} alt="AM Store" className="h-16 w-auto mb-6 object-contain" />
              <p className="text-white/50 text-sm font-sans mb-6 max-w-xs">
                Moda masculina de alto padrão. Presença, elegância e exclusividade em cada costura.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  <span className="font-serif italic text-sm">In</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  <span className="font-serif italic text-sm">Ig</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  <span className="font-serif italic text-sm">Tw</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-display text-xl mb-6 tracking-wide">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Coleção Atual</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Categorias</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Sobre a Marca</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Lookbook</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-display text-xl mb-6 tracking-wide">Suporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Fale Conosco</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Trocas e Devoluções</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Prazos de Entrega</a></li>
                <li><a href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-sans">Guia de Medidas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-display text-xl mb-6 tracking-wide">Newsletter</h4>
              <p className="text-white/50 text-sm font-sans mb-4">
                Inscreva-se para receber acesso antecipado a lançamentos e convites exclusivos.
              </p>
              <form className="flex border-b border-white/20 focus-within:border-primary transition-colors pb-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-transparent border-none outline-none text-white text-sm w-full font-sans placeholder:text-white/30"
                />
                <button type="submit" className="text-primary font-display tracking-widest text-lg hover:text-white transition-colors">
                  OK
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-white/30 font-sans">
            <p>&copy; {new Date().getFullYear()} AM STORE. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS for text stroke effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          position: absolute;
          left: 5px;
          top: 5px;
          z-index: -1;
        }
      `}} />
    </div>
  );
}
