import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, HandHeart, Sprout, Globe, BookOpen, Home } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    <section className="bg-muted py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Aims & Objectives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by the Holy Spirit, we strive to fulfil the Great Commission through prayer, service, and compassionate outreach to all humanity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective) => {
            const IconComponent = objective.icon;
            return (
              <div
                key={objective.title}
                className="card-hover bg-card p-8 rounded-2xl text-center shadow-lg"
              >
                <div className={`w-16 h-16 ${objective.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${objective.textColor} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{objective.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
