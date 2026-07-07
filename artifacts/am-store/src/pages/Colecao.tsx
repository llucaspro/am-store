import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';

import feat1 from '@/assets/feat-1.jpg';
import feat2 from '@/assets/feat-2.jpg';
import feat3 from '@/assets/feat-3.jpg';
import feat4 from '@/assets/feat-4.jpg';
import feat5 from '@/assets/feat-5.jpg';
import feat6 from '@/assets/feat-6.jpg';

const allProducts = [
  { id: 1, name: 'Camisa Seda Obsidian', category: 'Camisas', price: 'R$ 489,90', img: feat1 },
  { id: 2, name: 'Calça Cargo Tailored', category: 'Calças', price: 'R$ 529,90', img: feat2 },
  { id: 3, name: 'Bota Chelsea Gold', category: 'Tênis', price: 'R$ 899,90', img: feat3 },
  { id: 4, name: 'Bracelete Minimalista', category: 'Acessórios', price: 'R$ 249,90', img: feat4 },
  { id: 5, name: 'Duffel Bag Couro', category: 'Acessórios', price: 'R$ 1.299,90', img: feat5 },
  { id: 6, name: 'Blazer Estruturado', category: 'Camisas', price: 'R$ 1.150,00', img: feat6 },
  { id: 7, name: 'T-Shirt Essencial Branca', category: 'Camisetas', price: 'R$ 199,90', img: feat1 },
  { id: 8, name: 'Calça Alfaiataria Slim', category: 'Calças', price: 'R$ 459,90', img: feat2 },
  { id: 9, name: 'Sneaker Urbano', category: 'Tênis', price: 'R$ 659,90', img: feat3 },
  { id: 10, name: 'Relógio Chrono Black', category: 'Acessórios', price: 'R$ 1.899,90', img: feat4 },
  { id: 11, name: 'Mochila Executiva', category: 'Acessórios', price: 'R$ 899,90', img: feat5 },
  { id: 12, name: 'Sobretudo Lã Fria', category: 'Camisas', price: 'R$ 2.450,00', img: feat6 },
];

const categories = ['Todos', 'Camisetas', 'Camisas', 'Calças', 'Tênis', 'Acessórios'];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ColecaoPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-black pt-24">
      <Navbar />

      <section className="container mx-auto px-6 py-12">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display tracking-tight mb-4">
            COLEÇÃO 2026
          </motion.h1>
          <motion.div variants={fadeInUp} className="w-24 h-1 bg-primary mx-auto"></motion.div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base font-sans tracking-widest uppercase transition-all duration-300 relative pb-2 ${activeCategory === cat ? 'text-primary' : 'text-white/50 hover:text-white'}`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          key={activeCategory} // forces re-render animation when category changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-secondary">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <Button className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-none">Adicionar</Button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-serif text-white group-hover:text-primary transition-colors">{product.name}</h3>
                <span className="text-white/50 font-sans text-sm mb-1">{product.category}</span>
                <span className="text-primary font-sans font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-primary hover:text-primary transition-colors rounded-none px-8">
            Carregar Mais
          </Button>
        </div>
      </section>
    </div>
  );
}
