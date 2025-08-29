import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-card py-16" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story of Faith</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how prayer and community service come together to create lasting change in our world.
          </p>
        </motion.div>
        
        {/* YouTube Video Embed */}
        <motion.div 
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/XqZsoesa55w"
            title="Covenant Care Christian Prayer Partner Foundation Story"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="youtube-video"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
