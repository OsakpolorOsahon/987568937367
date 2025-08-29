import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, HandHeart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient text-primary-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/attached_assets/IMG-20250829-WA0003_1756472903831.jpg" 
              alt="Covenant Care Christian Prayer Partner Foundation Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl bg-white/10 p-4 shadow-2xl"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            United in <span className="text-secondary">Prayer</span>,<br />
            Serving with <span className="text-secondary">Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Covenant Care Christian Prayer Partner Foundation connects hearts through prayer and transforms communities through compassionate service. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-testid="button-join-mission"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Join Our Mission
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg"
              data-testid="button-watch-story"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-foreground/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full"></div>
      </div>
    </section>
  );
}
