import { motion } from "framer-motion";
import { Heart, HandHeart, Sprout, Phone, Users, Calendar, Clock, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare Outreach",
      description: "Bringing free medical care directly to underserved communities through mobile clinics, health screenings, and essential medication — ensuring no one is left behind due to lack of access.",
      features: [
        "Free medical consultations & screenings",
        "Essential medication distribution",
        "Mobile clinic outreaches to remote communities",
        "Community health awareness campaigns",
        "Referral support for critical cases"
      ],
      schedule: "Monthly outreaches; emergency cases handled promptly",
      contact: "info@covenantcarefoundation.com.ng"
    },
    {
      icon: HandHeart,
      title: "Care Outreach & Missions",
      description: "Reaching communities across Nigeria and beyond with practical care — food, essentials, and relief — through organised outreach missions and partnerships with charitable organisations.",
      features: [
        "Community food and essentials distribution",
        "Donation drives and relief missions",
        "Partnership with NGOs and charitable organisations",
        "Emergency humanitarian assistance",
        "Mission station establishment"
      ],
      schedule: "Ongoing missions and monthly outreach events",
      contact: "info@covenantcarefoundation.com.ng"
    },
    {
      icon: Users,
      title: "Orphanage & Widow Care",
      description: "Establishing motherless babies homes, orphanages, and providing for the needs of widows — giving them shelter, dignity, and the practical support they need to thrive.",
      features: [
        "Motherless babies homes",
        "Orphanage establishment and support",
        "Widow welfare, provisions, and empowerment",
        "Young and old persons' homes",
        "Partnership with charitable organisations"
      ],
      schedule: "Ongoing support programs",
      contact: "info@covenantcarefoundation.com.ng"
    },
    {
      icon: Sprout,
      title: "Academic Sponsorship & Education",
      description: "Sponsoring children and young people through education — from primary school to tertiary level — so that poverty never robs a child of their future.",
      features: [
        "School fees and tuition sponsorship",
        "Learning materials and uniforms",
        "Youth mentorship and guidance programs",
        "Scholarship programs",
        "Vocational training support"
      ],
      schedule: "Per academic term and as need arises",
      contact: "info@covenantcarefoundation.com.ng"
    },
    {
      icon: Calendar,
      title: "Feeding Programs",
      description: "Running regular feeding initiatives that ensure vulnerable children, widows, the elderly, and families in need have access to nutritious meals.",
      features: [
        "Regular community feeding events",
        "School feeding support for sponsored children",
        "Food packs and grocery distribution",
        "Partnership with food donors",
        "Emergency food relief"
      ],
      schedule: "Weekly and monthly feeding programs",
      contact: "info@covenantcarefoundation.com.ng"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Immediate practical assistance during times of crisis — whether financial need, displacement, bereavement, or disaster — we show up with care and resources.",
      features: [
        "Emergency financial aid",
        "Disaster relief coordination",
        "Hospital visitation and support",
        "Bereavement care and support",
        "24/7 welfare emergency line"
      ],
      schedule: "24/7 emergency line available",
      contact: "+234 802 381 8547"
    }
  ];

  return (
    <div>
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Care Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Serving communities through healthcare, feeding, education, orphan care, widow support, and humanitarian outreach
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="card-hover bg-card p-4 sm:p-7 rounded-2xl shadow-lg overflow-hidden"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                      <IconComponent className="text-primary-foreground h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">What We Offer:</h4>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2"></div>
                              <span className="break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                          <span>{service.schedule}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                          <span className="break-all">{service.contact}</span>
                        </div>
                      </div>
                      
                      <a href={getWhatsAppLink(`Hello Covenant Care Foundation! I'd like to learn more about your ${service.title} program. Please share more details with me.`)} target="_blank" rel="noopener noreferrer">
                        <Button 
                          className="bg-primary text-primary-foreground"
                          data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Learn More
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Support or Want to Get Involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-7 max-w-2xl mx-auto">
              Whether you need practical assistance or want to volunteer your time and resources, we welcome you to be part of what we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppLink("Hello Covenant Care Foundation! I need help and support. Please assist me.")} target="_blank" rel="noopener noreferrer" data-testid="link-get-help">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground"
                  data-testid="button-get-help"
                >
                  Get Help Now
                </Button>
              </a>
              <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to volunteer my time and talents. Please tell me how I can serve.")} target="_blank" rel="noopener noreferrer" data-testid="link-volunteer">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary"
                  data-testid="button-volunteer"
                >
                  Volunteer With Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
