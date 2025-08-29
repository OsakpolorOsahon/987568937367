import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, HandHeart } from "lucide-react";
import logoImage from "@assets/IMG-20250829-WA0003_1756472903831.jpg";

export default function HeroSection() {
  return (
    <section className="relative text-primary-foreground overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logoImage})`,
          filter: 'blur(1px)'
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90" />
      {/* Additional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            United in <span className="text-yellow-400">Prayer</span>,<br />
            Serving with <span className="text-yellow-400">Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg">
            Covenant Care Christian Prayer Partner Foundation connects hearts through prayer and transforms communities through compassionate service. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-testid="button-join-mission"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Join Our Mission
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-semibold text-lg backdrop-blur-sm"
              data-testid="button-watch-story"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full"></div>
      </div>
    </section>
  );
}
