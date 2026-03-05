import { motion } from "framer-motion";
import { Check } from "lucide-react";
import medicalImg from "@assets/IMG-20260301-WA0085_1772706223404.jpg";
import orphanageImg from "@assets/IMG-20260301-WA0087_1772706223343.jpg";
import childrenImg from "@assets/IMG-20260301-WA0083_1772706223455.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection() {
  const programs = [
    {
      title: "Medical & Healthcare Outreach",
      description: "Bringing free medical care directly to underserved communities through mobile clinics, health screenings, and essential medication distribution.",
      image: medicalImg,
      features: [
        "Free medical consultations",
        "Health screenings & medication",
        "Community health awareness campaigns"
      ]
    },
    {
      title: "Orphanage & Child Care",
      description: "Establishing and supporting motherless babies homes and orphanages, giving children shelter, nutrition, education, and a loving environment to thrive.",
      image: orphanageImg,
      features: [
        "Motherless babies homes",
        "Orphanage establishment & support",
        "Child nutrition & education"
      ]
    },
    {
      title: "Widow Care & Support",
      description: "Providing widows with practical assistance, emotional support, and resources that restore dignity and empower them to rebuild their lives.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Widow welfare & provisions",
        "Skills empowerment programs",
        "Community integration support"
      ]
    },
    {
      title: "Feeding & Donation Outreach",
      description: "Running feeding programs and donation drives that ensure no family in our communities goes to bed hungry or lacking basic necessities.",
      image: childrenImg,
      features: [
        "Community feeding programs",
        "Food & essentials distribution",
        "Partnership with donor organisations"
      ]
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Programs & Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From medical outreaches to orphan care and widow support, every program is designed to bring genuine, lasting change to those who need it most.
          </p>
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              className="card-hover bg-card p-7 rounded-2xl shadow-lg"
              variants={cardVariants}
            >
              <div className="flex items-start gap-6">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-32 h-24 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {program.description}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
