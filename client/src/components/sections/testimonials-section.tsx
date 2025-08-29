import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: "Maria Johnson",
      role: "Community Member",
      content: "The prayer support I received during my difficult time was incredible. The community truly cares and demonstrates God's love in action.",
      initials: "MJ",
      bgColor: "bg-primary"
    },
    {
      name: "David Thompson",
      role: "Volunteer",
      content: "Serving with Covenant Care has been life-changing. It's amazing to see how small acts of kindness can make such a big difference.",
      initials: "DT",
      bgColor: "bg-secondary"
    },
    {
      name: "Sarah Rodriguez",
      role: "Prayer Partner",
      content: "Being part of the prayer ministry has strengthened my faith tremendously. There's power in united prayer and genuine Christian fellowship.",
      initials: "SR",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section className="bg-muted py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lives Transformed</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from community members whose lives have been touched through prayer and service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-hover bg-card p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-primary-foreground font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
