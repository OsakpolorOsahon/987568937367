import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "wouter";
import logoImage from "@assets/CPP_LOGO_(1)_1771413757122.png";
import { getWhatsAppLink } from "@/lib/whatsapp";

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

const socialLinks = [
  { href: "https://x.com/cccppfoundation", icon: FaXTwitter, label: "X" },
  { href: "https://www.instagram.com/covenantcarefoundation?igsh=MWl0bGl4NnpsYnZwMg%3D%3D&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@covenantcarefoundation?si=E30ASWbEnCJgLQQC", icon: Youtube, label: "YouTube" },
  { href: "https://t.me/+sF8-2UwQoXxkNDdk", icon: SiTelegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-5">
              <img 
                src={logoImage} 
                alt="Covenant Care Christian Prayer Partner Foundation" 
                className="h-14 w-auto object-contain bg-white/90 rounded-md p-1"
              />
            </div>
            <p className="text-background/80 mb-5 leading-relaxed">
              Covenant Care Christian Prayer Partner Foundation, headquartered in Lagos State, Nigeria, reaching the vulnerable with healthcare, feeding, education, and compassionate care.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
                    data-testid={`footer-link-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-programs">Our Programs</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to volunteer my time and talents. Please tell me how I can serve.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-volunteer">Volunteer</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to make a donation to support your care outreach. Please share the details.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-donate">Donate</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-5">Our Programs</h4>
            <ul className="space-y-2.5">
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Healthcare Outreach program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-healthcare">Healthcare Outreach</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Care Outreach & Missions.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-care-outreach">Care Outreach & Missions</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Orphanage & Child Care program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-orphanage">Orphanage & Child Care</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Widow Care program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-widow">Widow Care</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Academic Sponsorship program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-education">Academic Sponsorship</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Feeding Programs.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-feeding">Feeding Programs</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-5">Contact Information</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="text-background/80 mt-1 h-4 w-4 flex-shrink-0" />
                <p className="text-background/80">141 Ikotun - Idimu Rd, Egbe, Lagos, Nigeria</p>
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
          className="border-t border-background/20 mt-10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Covenant Care Christian Prayer Partner Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link>
            <Link href="/terms" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-terms">Terms of Service</Link>
            <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to make a donation to support your care outreach. Please share the details.")} target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-donate-bottom">Donate</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
