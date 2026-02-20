import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div>
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Please read these terms carefully before using our website
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Covenant Care Christian Prayer Partner Foundation website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. About Our Organisation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Covenant Care Christian Prayer Partner Foundation is an inter-denominational prayer ministry with headquarters in Lagos State, Nigeria. Our mission is to raise a people of prayer, wisdom, and power of God with purity and holiness in readiness for the second coming of our Lord and Saviour Jesus Christ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the website in any way that could damage, disable, or impair the website</li>
                  <li>Attempt to gain unauthorised access to any part of the website</li>
                  <li>Use the website to transmit harmful, offensive, or inappropriate content</li>
                  <li>Use the website to distribute unsolicited communications or spam</li>
                  <li>Misrepresent your identity or affiliation with any person or organisation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Prayer Requests & Communications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When submitting prayer requests or contacting us through our website, you acknowledge that your messages will be shared with our prayer team for the purpose of intercession. We treat all prayer requests with care and confidentiality, though we cannot guarantee absolute privacy when messages are shared within our prayer network for the purpose of collective prayer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Volunteer Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By registering as a volunteer through our website, you express your interest in serving with our foundation. Volunteer placement is subject to availability and suitability. We reserve the right to accept or decline volunteer applications at our discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Donations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All donations made to Covenant Care Christian Prayer Partner Foundation are voluntary and will be used to support our ministry activities including gospel outreach, orphanage care, widow support, healing ministry, and educational institutions. Donation arrangements are handled directly through our communication channels.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, images, logos, and design elements, is the property of Covenant Care Christian Prayer Partner Foundation and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites and services, including WhatsApp, Telegram, and social media platforms. We are not responsible for the content, privacy practices, or terms of service of these external sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Covenant Care Christian Prayer Partner Foundation provides this website on an "as is" basis. We make no warranties regarding the availability, accuracy, or completeness of the information provided. We shall not be liable for any damages arising from the use of this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes your acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="list-none space-y-1 text-muted-foreground mt-3">
                  <li>Email: info@covenantcarefoundation.com.ng</li>
                  <li>Phone: +234 802 381 8547</li>
                  <li>WhatsApp: +234 903 787 7197</li>
                  <li>Location: Lagos State, Nigeria</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Last updated: February 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
