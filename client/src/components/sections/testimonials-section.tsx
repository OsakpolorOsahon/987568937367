import { motion } from "framer-motion";

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

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Adaeze Okonkwo",
      role: "Beneficiary, Medical Outreach",
      content: "The free medical outreach came to our community when we had no means to afford a hospital. The team was caring, professional, and genuinely concerned about our wellbeing. God bless Covenant Care.",
      initials: "AO",
      bgColor: "bg-primary"
    },
    {
      name: "Emmanuel Dike",
      role: "Volunteer",
      content: "Volunteering with Covenant Care has opened my eyes to what real service looks like. Seeing children at the orphanage receive supplies and widows getting support truly changes you.",
      initials: "ED",
      bgColor: "bg-secondary"
    },
    {
      name: "Blessing Okoro",
      role: "Beneficiary, Widow Care Program",
      content: "After losing my husband, I didn't know how we would survive. Covenant Care provided food, school fees for my children, and people who genuinely cared. I am forever grateful.",
      initials: "BO",
      bgColor: "bg-primary"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Lives Transformed</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from people whose lives have been touched through our care outreach programs.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="card-hover bg-card p-7 rounded-2xl shadow-lg"
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className="text-primary-foreground font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
