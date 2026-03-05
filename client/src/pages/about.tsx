import { motion } from "framer-motion";
import { Users, Heart, Award, Globe, BookOpen, Utensils, Baby, HandHeart } from "lucide-react";
import logoImg from "@assets/IMG-20260304-WA0071_1772706223266.jpg";

export default function About() {
  const stats = [
    { icon: Users, label: "Lives Impacted", value: "2,500+" },
    { icon: Baby, label: "Orphans Supported", value: "300+" },
    { icon: Award, label: "Years of Service", value: "12+" },
    { icon: Globe, label: "Communities Served", value: "50+" },
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "We believe every person — orphan, widow, the sick, or the vulnerable — deserves dignity and genuine care. Compassion drives every outreach we do.",
      icon: Heart,
    },
    {
      title: "Community Transformation",
      description: "We partner with communities to address real needs: healthcare, food, education, and shelter — creating lasting change from the ground up.",
      icon: Globe,
    },
    {
      title: "Integrity & Service",
      description: "Every donation and resource entrusted to us is managed with accountability and directed fully towards those we serve.",
      icon: Award,
    }
  ];

  const outreachAreas = [
    {
      icon: Heart,
      title: "Medical Outreaches",
      description: "Free medical consultations, health screenings, and medication distribution to underserved communities across Nigeria."
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Regular feeding events ensuring vulnerable children, widows, and families have access to nutritious meals."
    },
    {
      icon: Baby,
      title: "Orphanage & Child Care",
      description: "Establishing and supporting motherless babies homes, giving children shelter, love, and a future."
    },
    {
      icon: HandHeart,
      title: "Widow Care",
      description: "Practical support, provisions, and empowerment programs that restore dignity to widows and help them rebuild."
    },
    {
      icon: BookOpen,
      title: "Academic Sponsorship",
      description: "Sponsoring children and young people through school — because every child deserves the chance to learn."
    },
    {
      icon: Globe,
      title: "Mission & Missionary Outreach",
      description: "Reaching remote and underserved communities across Nigeria and abroad with care, relief, and support."
    },
  ];

  return (
    <div>
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Covenant Care</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A foundation built on compassion — serving orphans, widows, the sick, and the vulnerable across Nigeria and beyond
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Covenant Care Christian Prayer Partner Foundation, headquartered in Lagos State, Nigeria, was established with a clear calling: to reach out to the most vulnerable members of society with genuine, practical care.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                From feeding the hungry and sponsoring children's education, to establishing orphanages and caring for widows — our work is rooted in the belief that every person deserves dignity, compassion, and opportunity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we have grown our outreach to include medical missions, donation drives, missionary care programs, and partnerships with like-minded organisations — all in service of the communities that need it most.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={logoImg}
                alt="Covenant Care Foundation"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through dedication and the generosity of our supporters, we have made a meaningful difference in thousands of lives.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our care reaches across multiple areas, each designed to address real needs in the communities we serve.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {outreachAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  className="card-hover bg-card p-7 rounded-2xl shadow-lg text-center"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values shape everything we do and every life we touch.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="card-hover bg-muted p-7 rounded-2xl shadow-lg text-center"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
