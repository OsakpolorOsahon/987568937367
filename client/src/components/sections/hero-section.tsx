import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, HandHeart } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import logoImage from "@assets/CPP_LOGO_(1)_1771413757122.png";

export default function HeroSection() {
  return (
    <section className="relative text-primary-foreground overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logoImage})`,
          filter: 'blur(1px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/85 to-green-950/90" />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            United in <span className="text-orange-400">Prayer</span>,<br />
            Serving with <span className="text-orange-400">Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg">
            An inter-denominational prayer ministry raising a people of prayer, wisdom and power of God with purity and holiness in readiness for the second coming of our Lord and Saviour Jesus Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Button 
              size="lg"
              className="bg-orange-500 text-white font-semibold text-lg shadow-xl border-orange-600"
              data-testid="button-join-mission"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Join Our Mission
            </Button>
            <a href="https://t.me/+sF8-2UwQoXxkNDdk" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-sky-500 text-white font-semibold text-lg shadow-xl border-sky-600"
                data-testid="button-join-telegram"
              >
                <SiTelegram className="mr-2 h-5 w-5" />
                Join Our Telegram Prayer Group
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 font-semibold text-lg backdrop-blur-sm bg-white/5"
              data-testid="button-watch-story"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-400/10 rounded-full"></div>
      </div>
    </section>
  );
}
