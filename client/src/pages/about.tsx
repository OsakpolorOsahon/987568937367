import { motion } from "framer-motion";
import { Users, Heart, Award, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Community Members", value: "2,500+" },
    { icon: Heart, label: "Prayers Answered", value: "15,000+" },
    { icon: Award, label: "Years of Service", value: "12+" },
    { icon: Globe, label: "Communities Served", value: "50+" },
  ];

  const values = [
    {
      title: "Prayer & Intercession",
      description: "We intercede for all humanity in the entire world, connecting believers through united prayer.",
      icon: Heart,
    },
    {
      title: "Gospel Outreach",
      description: "We preach the gospel of our Lord Jesus Christ all over the world, establishing missions in Nigeria and abroad.",
      icon: Globe,
    },
    {
      title: "Compassionate Service",
      description: "We care for orphans, widows, and the vulnerable, providing for their needs and comforting them through Christ.",
      icon: Award,
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Covenant Care</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              An inter-denominational prayer ministry propelled by the Holy Spirit, interceding for all humanity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Covenant Prayer Partner International, with headquarters in Lagos State, Nigeria, was founded to pray, intercede and preach the gospel of our Lord Jesus Christ all over the world -- delivering the oppressed, setting the captives free, healing the broken-hearted, setting at liberty all who are bruised and hurting.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are an inter-denominational prayer ministry of truly born again believers propelled by the Holy Spirit to know the only true God and His Son Jesus Christ and to join Him in the intercession ministry for the entire world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is raising a people of prayer, wisdom and power of God with purity and holiness in readiness for the second coming of our Lord and Saviour Jesus Christ of Nazareth. We give hope to motherless children and widows, comforting and supplying their needs, and preparing a people for the eternal kingdom of God.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Church community gathering" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through God's grace and the dedication of our community, we've been able to make a meaningful difference.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by the Holy Spirit, these values drive everything we do as a ministry.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="card-hover bg-card p-8 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
