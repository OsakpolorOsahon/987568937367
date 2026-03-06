import { motion } from "framer-motion";
import { Users, Heart, Eye, Target } from "lucide-react";
import logoImg from "@assets/IMG-20260304-WA0071_1772706223266.jpg";

export default function AboutSection() {
  return (
    <section className="section-gradient py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logoImg}
              alt="Covenant Care Foundation" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Covenant Care</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Covenant Care Christian Prayer Partner Foundation, headquartered in Lagos State, Nigeria, is dedicated to transforming lives through practical care and compassion. We reach the vulnerable: orphans, widows, the sick, and the underprivileged, with tangible support and dignity.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our work spans medical outreaches, feeding programs, academic sponsorship, orphanage support, widow care, and missionary outreach across Nigeria and beyond.
            </p>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">A Nigeria and world transformed by genuine care for every person</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-secondary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">Delivering care outreach that restores dignity and builds futures</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
