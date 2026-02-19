import { motion } from "framer-motion";
import { Users, Heart, Eye, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Christian prayer group gathering" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Covenant Care</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Covenant Prayer Partner International, with headquarters in Lagos State, Nigeria, exists to pray, intercede and preach the gospel of our Lord Jesus Christ all over the world -- delivering the oppressed, setting the captives free, healing the broken-hearted, and giving hope to motherless children and widows.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are committed to comforting and supplying the needs of the vulnerable, strengthening them through Christ Jesus, and preparing a people for the eternal kingdom of God.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">An inter-denominational prayer ministry of truly born again believers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-secondary-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">Raising a people of prayer, wisdom and power of God</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
