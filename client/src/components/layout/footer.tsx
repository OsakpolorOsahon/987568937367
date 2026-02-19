import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import logoImage from "@assets/CPP_LOGO_(1)_1771413757122.png";

const columnVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Covenant Care Christian Prayer Partner Foundation" 
                className="h-14 w-auto object-contain bg-white/90 rounded-md p-1"
              />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              An inter-denominational prayer ministry with headquarters in Lagos State, Nigeria, interceding for all humanity and preaching the gospel of our Lord Jesus Christ all over the world.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="#" 
                className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a 
                href="https://t.me/+sF8-2UwQoXxkNDdk" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                data-testid="link-telegram"
              >
                <SiTelegram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-background/80 hover:text-background transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-background transition-colors">Our Programs</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors">Contact</Link></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Prayer Requests</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Volunteer</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Gospel Outreach</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Intercession Ministry</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Missions (Nigeria & Abroad)</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Healing & Deliverance</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Orphanage & Widow Care</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Educational Institutions</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-background/80 mt-1 h-4 w-4 flex-shrink-0" />
                <p className="text-background/80">Lagos State, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-background/80 h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="text-background/80">+234 802 381 8547</p>
                  <p className="text-background/80">+234 903 787 7197</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-background/80 h-4 w-4 flex-shrink-0" />
                <p className="text-background/80 break-all">info@covenantcarefoundation.com.ng</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-background/80 mt-1 h-4 w-4 flex-shrink-0" />
                <p className="text-background/80">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Covenant Care Christian Prayer Partner Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Donate</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
