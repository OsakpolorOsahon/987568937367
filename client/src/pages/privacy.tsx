import { motion } from "framer-motion";

export default function Privacy() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              How we collect, use, and protect your information
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Covenant Care Christian Prayer Partner Foundation ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us through our communication channels.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect the following types of information when you interact with our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Contact Information:</strong> Name, email address, phone number when you fill out our contact forms</li>
                  <li><strong>Prayer Request Details:</strong> The content of prayer requests you submit, including the type and urgency</li>
                  <li><strong>Volunteer Information:</strong> Name, contact details, areas of interest, availability, and experience when you register as a volunteer</li>
                  <li><strong>Communication Data:</strong> Messages sent through our website forms which are directed to WhatsApp</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information collected for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To respond to your enquiries and communications</li>
                  <li>To process and share prayer requests with our prayer team</li>
                  <li>To coordinate volunteer activities and placements</li>
                  <li>To keep you informed about our ministry activities and events</li>
                  <li>To improve our website and services</li>
                  <li>To process and acknowledge donations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. WhatsApp Communication</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses WhatsApp as a primary communication channel. When you submit a form or click action buttons on our website, you will be redirected to WhatsApp with a pre-filled message. The message is only sent when you choose to send it in WhatsApp. Your WhatsApp communication is subject to WhatsApp's own privacy policy and terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With our prayer team members for the purpose of intercession (prayer requests)</li>
                  <li>With ministry coordinators for volunteer placement</li>
                  <li>When required by law or to protect the rights of our organisation</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies & Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar technologies to improve your browsing experience. Cookies are small text files stored on your device that help us understand how you use our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for us to process your information</li>
                  <li>Lodge a complaint with a relevant data protection authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
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
