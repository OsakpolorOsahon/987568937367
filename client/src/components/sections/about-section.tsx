import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-gradient py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Christian prayer group gathering" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Covenant Care</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of faith, hope, and love, Covenant Care Christian Prayer Partner Foundation has been serving communities for over a decade. We believe in the transformative power of prayer and the importance of putting faith into action.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission extends beyond prayer to include practical support for those in need, community outreach programs, and fostering spiritual growth among believers. Every prayer offered and every hand extended reflects our commitment to Christ's love.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Community Focused</h4>
                  <p className="text-sm text-muted-foreground">Serving local and global communities</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Heart className="text-secondary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Love in Action</h4>
                  <p className="text-sm text-muted-foreground">Demonstrating Christ's love daily</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
