import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import logoImage from "@assets/CPP_LOGO_(1)_1771413757122.png";
import { getWhatsAppLink } from "@/lib/whatsapp";

function FloatingOrb({ 
  size, 
  color, 
  x, 
  y, 
  duration, 
  delay,
  moveX,
  moveY,
  scale,
}: { 
  size: string; 
  color: string; 
  x: string; 
  y: string; 
  duration: number; 
  delay: number;
  moveX: number[];
  moveY: number[];
  scale?: number[];
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${size} ${color}`}
      style={{ left: x, top: y, filter: "blur(30px)" }}
      animate={{
        x: moveX,
        y: moveY,
        scale: scale || [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

function PulsingRing({
  size,
  x,
  y,
  duration,
  delay,
}: {
  size: string;
  x: string;
  y: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${size} border-2 border-white/15`}
      style={{ left: x, top: y }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.4, 0.1, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function FloatingParticle({
  x,
  y,
  duration,
  delay,
}: {
  x: string;
  y: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute w-2.5 h-2.5 md:w-4 md:h-4 bg-orange-400/40 rounded-full"
      style={{ left: x, top: y }}
      animate={{
        y: [-25, -70, -25],
        x: [-15, 20, -15],
        opacity: [0.3, 0.7, 0.3],
        scale: [0.8, 1.5, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

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
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb
          size="w-72 h-72 md:w-[26rem] md:h-[26rem]"
          color="bg-green-400/25"
          x="-5%"
          y="10%"
          duration={8}
          delay={0}
          moveX={[0, 100, 40, 0]}
          moveY={[0, 50, -40, 0]}
          scale={[1, 1.4, 0.85, 1]}
        />

        <FloatingOrb
          size="w-80 h-80 md:w-[30rem] md:h-[30rem]"
          color="bg-orange-500/20"
          x="55%"
          y="-10%"
          duration={10}
          delay={1}
          moveX={[0, -80, 30, 0]}
          moveY={[0, 100, 50, 0]}
          scale={[1, 1.2, 1.35, 1]}
        />

        <FloatingOrb
          size="w-56 h-56 md:w-96 md:h-96"
          color="bg-emerald-300/18"
          x="30%"
          y="55%"
          duration={12}
          delay={2}
          moveX={[0, 60, -50, 0]}
          moveY={[0, -70, 30, 0]}
          scale={[1, 1.25, 1.1, 1]}
        />

        <FloatingOrb
          size="w-48 h-48 md:w-80 md:h-80"
          color="bg-orange-400/18"
          x="78%"
          y="45%"
          duration={9}
          delay={0.5}
          moveX={[0, -90, -30, 0]}
          moveY={[0, -50, 40, 0]}
          scale={[1, 1.3, 0.9, 1]}
        />

        <FloatingOrb
          size="w-40 h-40 md:w-64 md:h-64"
          color="bg-white/10"
          x="15%"
          y="65%"
          duration={11}
          delay={3}
          moveX={[0, 50, -40, 0]}
          moveY={[0, -60, 15, 0]}
        />

        <FloatingOrb
          size="w-56 h-56 md:w-80 md:h-80"
          color="bg-green-300/15"
          x="45%"
          y="15%"
          duration={14}
          delay={1.5}
          moveX={[0, -50, 70, 0]}
          moveY={[0, 40, -50, 0]}
          scale={[1, 1.15, 1.3, 1]}
        />

        <PulsingRing
          size="w-56 h-56 md:w-96 md:h-96"
          x="18%"
          y="25%"
          duration={6}
          delay={0}
        />
        <PulsingRing
          size="w-72 h-72 md:w-[28rem] md:h-[28rem]"
          x="50%"
          y="35%"
          duration={8}
          delay={2}
        />
        <PulsingRing
          size="w-44 h-44 md:w-72 md:h-72"
          x="72%"
          y="12%"
          duration={7}
          delay={1}
        />

        <FloatingParticle x="10%" y="20%" duration={5} delay={0} />
        <FloatingParticle x="25%" y="60%" duration={6} delay={1} />
        <FloatingParticle x="40%" y="35%" duration={4.5} delay={0.5} />
        <FloatingParticle x="55%" y="75%" duration={5.5} delay={2} />
        <FloatingParticle x="70%" y="25%" duration={6.5} delay={1.5} />
        <FloatingParticle x="85%" y="55%" duration={5} delay={0.8} />
        <FloatingParticle x="15%" y="85%" duration={7} delay={2.5} />
        <FloatingParticle x="65%" y="10%" duration={4} delay={0.3} />
        <FloatingParticle x="90%" y="80%" duration={5.5} delay={1.2} />
        <FloatingParticle x="45%" y="90%" duration={6} delay={3} />

        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(251,146,60,0.12) 0%, transparent 60%)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 70% 40%, rgba(74,222,128,0.1) 0%, transparent 55%)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 7,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-2xl" style={{ fontFamily: "'Anton', sans-serif" }}>
            Caring for <span className="text-orange-400">Communities</span>,<br />
            Changing <span className="text-orange-400">Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg">
            Covenant Care Christian Prayer Partner Foundation — reaching the vulnerable through medical outreaches, feeding programs, orphan care, widow support, and educational sponsorship across Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to join your mission and be part of your community. Please tell me how I can get involved.")} target="_blank" rel="noopener noreferrer" data-testid="link-join-mission">
              <Button 
                size="lg"
                className="bg-orange-500 text-white font-semibold text-lg shadow-xl border-orange-600"
                data-testid="button-join-mission"
              >
                <HandHeart className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
            </a>
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
            <a
              href="#support-our-mission"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("support-our-mission")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="link-donate"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 font-semibold text-lg backdrop-blur-sm bg-white/5"
                data-testid="button-donate"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
