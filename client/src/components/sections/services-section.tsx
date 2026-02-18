import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const programs = [
    {
      title: "Community Outreach & Missions",
      description: "Establishing and maintaining missions in Nigeria and abroad, delivering the oppressed and providing practical help to communities in need.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Gospel outreach across nations",
        "Food and essentials distribution",
        "Partnership with charitable organisations"
      ]
    },
    {
      title: "Prayer & Intercession Ministry",
      description: "24/7 prayer support and intercession for all humanity, connecting believers worldwide through united prayer and spiritual warfare.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Online prayer requests",
        "Telegram prayer group",
        "Emergency intercession"
      ]
    },
    {
      title: "Orphanage & Widow Care",
      description: "Establishing motherless babies homes, orphanages, young and old person homes, and providing for the needs of widows and orphans.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Motherless babies homes",
        "Widow support programs",
        "Young and old person care"
      ]
    },
    {
      title: "Healing & Deliverance",
      description: "Ministering healing to the sick, setting the captives free, and bringing restoration to the broken-hearted through the power of Jesus Christ.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Healing services",
        "Deliverance ministry",
        "Christian counselling support"
      ]
    }
  ];

  return (
    <section className="bg-background py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs & Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From prayer support to community outreach, we offer various programs designed to fulfil the Great Commission and serve those in need.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-hover bg-card p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-32 h-24 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
