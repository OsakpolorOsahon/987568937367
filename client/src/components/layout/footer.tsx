import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { SiTelegram, SiTiktok } from "react-icons/si";
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
  { href: "https://www.facebook.com/covenantcarefoundation", icon: Facebook, label: "Facebook" },
  { href: "https://x.com/covenantcarecpp", icon: FaXTwitter, label: "X" },
  { href: "https://www.instagram.com/covenantcarefoundation", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@covenantcarefoundation", icon: Youtube, label: "YouTube" },
  { href: "https://www.tiktok.com/@covenantcarefoundation", icon: SiTiktok, label: "TikTok" },
  { href: "https://t.me/+sF8-2UwQoXxkNDdk", icon: SiTelegram, label: "Telegram" },
];

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
            <h4 className="font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-programs">Our Programs</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I would like to submit a prayer request.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-prayer">Prayer Requests</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to volunteer my time and talents. Please tell me how I can serve.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-volunteer">Volunteer</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-background mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Gospel Outreach program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-gospel-outreach">Gospel Outreach</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Intercession Ministry.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-intercession">Intercession Ministry</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Missions program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-missions">Missions (Nigeria & Abroad)</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Healing & Deliverance ministry.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-healing">Healing & Deliverance</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Orphanage & Widow Care program.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-orphanage">Orphanage & Widow Care</a></li>
              <li><a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to learn more about your Educational Institutions.")} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-education">Educational Institutions</a></li>
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
            <Link href="/privacy" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link>
            <Link href="/terms" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-terms">Terms of Service</Link>
            <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to make a donation to support your ministry. Please share the details.")} target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="footer-link-donate">Donate</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
