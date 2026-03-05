import { motion } from "framer-motion";
import { Building2, CreditCard, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function SupportMissionSection() {
  return (
    <section id="support-our-mission" className="bg-card py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Support Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your donation directly funds medical outreaches, feeding programs, orphan care, academic sponsorship, and widow support. Every gift makes a difference.
          </p>
        </motion.div>

        <motion.div
          className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Bank Transfer Details</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Bank Name</p>
                <p className="text-lg font-bold text-foreground mt-1">Zenith Bank</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Account Number</p>
                <p className="text-lg font-bold text-foreground mt-1">1229003294</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Account Name</p>
                <p className="text-lg font-bold text-foreground mt-1">Covenant Care Christian Prayer Foundation</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={getWhatsAppLink("Hello Covenant Care Foundation! I've just made a donation to your Zenith Bank account (1229003294) and would like to confirm my transfer. Please advise on next steps.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground">
                <Heart className="mr-2 h-5 w-5" />
                Confirm Your Donation via WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
