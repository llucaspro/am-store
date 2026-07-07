import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-black pt-24">
      <Navbar />

      <section className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-display tracking-widest mb-4">ATENDIMENTO</h1>
          <div className="w-24 h-1 bg-primary mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif mb-6 text-primary">Informações</h2>
              <p className="text-white/60 font-sans leading-relaxed mb-8">
                Nossa equipe de concierges está pronta para auxiliar em dúvidas sobre caimento, medidas, envios ou atendimento exclusivo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white/80 hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-sans font-medium">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80 hover:text-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="font-sans font-medium">concierge@amstore.com.br</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-sans font-medium">@amstore.br</span>
                </div>
                <div className="flex items-start space-x-4 text-white/80">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-sans font-medium">
                    Atelier AM Store (Apenas com hora marcada)<br/>
                    Jardins, São Paulo, SP — Brasil
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-[#111] border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
              <MapPin className="w-12 h-12 text-primary/30 absolute" />
              <div className="z-10 text-center mt-16">
                <span className="font-display tracking-widest text-xl text-white/80">SÃO PAULO, SP — BRASIL</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#111] border border-white/5 p-8 md:p-12">
              <h2 className="text-3xl font-display tracking-widest mb-8">Envie uma Mensagem</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-white/50">Nome Completo</label>
                  <Input 
                    className="bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-white/50">E-mail</label>
                  <Input 
                    type="email"
                    className="bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-white/50">Assunto</label>
                  <Input 
                    className="bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-white/50">Mensagem</label>
                  <Textarea 
                    className="bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white min-h-[150px] rounded-none resize-none" 
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>
                <Button className="w-full h-14 bg-primary text-black font-display tracking-widest text-lg hover:bg-white transition-colors rounded-none mt-4">
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
