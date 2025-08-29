import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const programs = [
    {
      title: "Community Outreach",
      description: "Regular food drives, clothing donations, and support for homeless shelters. We partner with local organizations to maximize our impact.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Monthly food distribution",
        "Clothing and essentials drive",
        "Homeless shelter support"
      ]
    },
    {
      title: "Prayer Ministry",
      description: "24/7 prayer support, prayer request submission, and regular intercession sessions for individuals and families in need.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Online prayer requests",
        "Weekly prayer meetings",
        "Emergency prayer hotline"
      ]
    },
    {
      title: "Discipleship Programs",
      description: "Bible study groups, mentorship programs, and spiritual growth workshops for believers seeking to deepen their faith.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Small group Bible studies",
        "One-on-one mentorship",
        "Youth discipleship programs"
      ]
    },
    {
      title: "Counseling Support",
      description: "Professional Christian counseling services, marriage support, and crisis intervention for individuals and families.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      features: [
        "Individual counseling",
        "Marriage and family therapy",
        "Crisis intervention support"
      ]
    }
  ];

  return (
    <section className="section-gradient py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs & Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From prayer support to community outreach, we offer various programs designed to strengthen faith and serve others.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="card-hover bg-card p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-6">
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
                        <Check className="text-primary mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
