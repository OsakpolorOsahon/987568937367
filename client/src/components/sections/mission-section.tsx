import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, HandHeart, Sprout } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const missions = [
    {
      icon: Heart,
      title: "Prayer Partnership",
      description: "Connecting believers worldwide through prayer, creating a network of spiritual support and intercession for those in need.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: HandHeart,
      title: "Community Service",
      description: "Providing practical assistance to communities through food programs, educational support, and humanitarian aid initiatives.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: Sprout,
      title: "Spiritual Growth",
      description: "Nurturing faith through discipleship programs, Bible studies, and mentorship opportunities for believers at all stages.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    }
  ];

  return (
    <section className="bg-muted py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by Christian principles, we strive to make a meaningful impact through prayer, service, and community engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div
                key={mission.title}
                className="card-hover bg-card p-8 rounded-2xl text-center shadow-lg"
              >
                <div className={`w-16 h-16 ${mission.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${mission.textColor} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
