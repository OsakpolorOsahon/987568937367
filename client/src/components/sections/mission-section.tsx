import { motion } from "framer-motion";
import { Heart, HandHeart, Sprout, Globe, BookOpen, Home, Utensils, Stethoscope } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MissionSection() {
  const objectives = [
    {
      icon: Stethoscope,
      title: "Medical Outreach",
      description: "To bring free healthcare — consultations, screenings, and medication — directly to underserved communities where access to medical care is limited.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Home,
      title: "Orphanage & Child Care",
      description: "To establish and support motherless babies homes and orphanages, providing children with shelter, nutrition, education, and a nurturing environment.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: Heart,
      title: "Widow Care & Support",
      description: "To provide widows with practical assistance, provisions, and empowerment programs that restore their dignity and help them rebuild their lives.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "To run regular feeding initiatives ensuring vulnerable children, widows, the elderly, and families in need have access to nutritious meals.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: BookOpen,
      title: "Academic Sponsorship",
      description: "To sponsor children and young people through education — from primary school to tertiary level — so poverty never robs a child of their future.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Globe,
      title: "Mission & Missionary Outreach",
      description: "To reach remote and underserved communities across Nigeria and abroad through organised care missions, relief programs, and humanitarian support.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    }
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Aims & Objectives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every program we run is focused on one goal — bringing genuine, practical care to those who need it most.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {objectives.map((objective) => {
            const IconComponent = objective.icon;
            return (
              <motion.div
                key={objective.title}
                className="card-hover bg-card p-7 rounded-2xl text-center shadow-lg"
                variants={cardVariants}
              >
                <div className={`w-16 h-16 ${objective.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`${objective.textColor} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{objective.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
