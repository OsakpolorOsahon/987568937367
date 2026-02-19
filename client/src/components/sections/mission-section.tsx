import { motion } from "framer-motion";
import { Heart, HandHeart, Sprout, Globe, BookOpen, Home } from "lucide-react";

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
      icon: Globe,
      title: "Gospel Outreach",
      description: "To preach the gospel of our Lord Jesus Christ all over the world, interceding for all humanity in the entire world.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Heart,
      title: "Healing & Deliverance",
      description: "To heal the sick, set the captives free, seek and save the lost, and deliver the oppressed through the power of Christ.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: HandHeart,
      title: "Missions & Intercession",
      description: "To establish and maintain missions in Nigeria and abroad, propelled by the Holy Spirit to know the only true God and His Son Jesus Christ.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Home,
      title: "Orphanage & Widow Care",
      description: "To establish motherless babies homes, orphanages, and care for widows, providing for their needs and working with charitable organisations.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: BookOpen,
      title: "Educational Institutions",
      description: "To establish educational institutions that nurture faith, knowledge and character in the next generation of believers.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Sprout,
      title: "Spiritual Growth",
      description: "Raising a people of prayer, wisdom and power of God with purity and holiness in readiness for the second coming of our Lord Jesus Christ.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    }
  ];

  return (
    <section className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Aims & Objectives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by the Holy Spirit, we strive to fulfil the Great Commission through prayer, service, and compassionate outreach to all humanity.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="card-hover bg-card p-8 rounded-2xl text-center shadow-lg"
                variants={cardVariants}
              >
                <div className={`w-16 h-16 ${objective.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${objective.textColor} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{objective.title}</h3>
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
