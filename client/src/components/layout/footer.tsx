import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="text-primary-foreground h-5 w-5" />
              </div>
              <div className="font-bold text-lg text-background">Covenant Care</div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting hearts through prayer and serving communities with the love of Christ. Join us in making a difference in our world.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-background/80 hover:text-background transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-background transition-colors">Our Programs</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors">Contact</Link></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Prayer Requests</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="font-semibold text-background mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community Outreach</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Prayer Ministry</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Discipleship</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Counseling Support</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Youth Programs</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Emergency Aid</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-background/80 mt-1 h-4 w-4" />
                <p className="text-background/80">123 Faith Avenue<br />Community City, CC 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-background/80 h-4 w-4" />
                <p className="text-background/80">+1 (555) 123-PRAY</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-background/80 h-4 w-4" />
                <p className="text-background/80">info@covenantcare.org</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-background/80 mt-1 h-4 w-4" />
                <p className="text-background/80">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Covenant Care Christian Prayer Partner Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Donate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
