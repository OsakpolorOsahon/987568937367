import { motion } from "framer-motion";
import { Heart, HandHeart, Sprout, Phone, Users, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Prayer Ministry",
      description: "24/7 prayer support and intercession for individuals, families, and communities in need.",
      features: [
        "Online prayer request submission",
        "Weekly corporate prayer meetings",
        "Emergency prayer hotline",
        "Prayer partner matching",
        "Healing prayer sessions"
      ],
      schedule: "24/7 availability, Weekly meetings: Wednesdays 7PM",
      contact: "prayers@covenantcare.org"
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      description: "Practical assistance and support for local communities through various aid programs.",
      features: [
        "Monthly food distribution",
        "Clothing and essentials drive",
        "Homeless shelter partnerships",
        "Emergency financial assistance",
        "Back-to-school supply drives"
      ],
      schedule: "Monthly events, Emergency assistance: As needed",
      contact: "outreach@covenantcare.org"
    },
    {
      icon: Sprout,
      title: "Discipleship Programs",
      description: "Spiritual growth opportunities through Bible studies, mentorship, and faith development.",
      features: [
        "Small group Bible studies",
        "One-on-one mentorship",
        "Youth discipleship programs",
        "New believer classes",
        "Leadership development"
      ],
      schedule: "Various times throughout the week",
      contact: "discipleship@covenantcare.org"
    },
    {
      icon: Users,
      title: "Counseling Support",
      description: "Professional Christian counseling services for individuals, couples, and families.",
      features: [
        "Individual counseling sessions",
        "Marriage and family therapy",
        "Crisis intervention support",
        "Grief counseling",
        "Addiction recovery support"
      ],
      schedule: "By appointment: Mon-Fri 9AM-6PM",
      contact: "counseling@covenantcare.org"
    },
    {
      icon: Calendar,
      title: "Youth & Family Programs",
      description: "Engaging programs designed to strengthen families and nurture young believers.",
      features: [
        "Youth group activities",
        "Family devotion resources",
        "Summer camp programs",
        "Parent support groups",
        "Children's ministry"
      ],
      schedule: "Youth group: Fridays 6PM, Family events: Monthly",
      contact: "youth@covenantcare.org"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Immediate assistance and spiritual support during times of crisis and urgent need.",
      features: [
        "24/7 crisis hotline",
        "Emergency financial aid",
        "Disaster relief coordination",
        "Hospital visitation",
        "Bereavement support"
      ],
      schedule: "24/7 emergency line available",
      contact: "emergency@covenantcare.org"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services & Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Comprehensive spiritual and practical support for individuals, families, and communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="card-hover bg-card p-8 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-primary-foreground h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">What We Offer:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{service.schedule}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2 text-primary" />
                          <span>{service.contact}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-card py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Support or Want to Get Involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're seeking spiritual guidance, need practical assistance, or want to volunteer your time and talents, we're here to help and welcome your participation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-get-help"
              >
                Get Help Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-testid="button-volunteer"
              >
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
