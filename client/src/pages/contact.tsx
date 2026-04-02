import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, insertPrayerRequestSchema, insertVolunteerSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp, buildContactMessage, buildPrayerRequestMessage, buildVolunteerMessage } from "@/lib/whatsapp";
import type { InsertContact, InsertPrayerRequest, InsertVolunteer } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const contactForm = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const prayerForm = useForm<InsertPrayerRequest>({
    resolver: zodResolver(insertPrayerRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      requestType: "",
      description: "",
      isUrgent: "false",
    },
  });

  const volunteerForm = useForm<InsertVolunteer>({
    resolver: zodResolver(insertVolunteerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interests: "",
      availability: "",
      experience: "",
    },
  });

  const handleContactSubmit = (data: InsertContact) => {
    openWhatsApp(buildContactMessage(data));
    toast({
      title: "Opening WhatsApp...",
      description: "Your message has been prepared. Just tap Send in WhatsApp!",
    });
    contactForm.reset();
  };

  const handlePrayerSubmit = (data: InsertPrayerRequest) => {
    openWhatsApp(buildPrayerRequestMessage({ ...data, isUrgent: data.isUrgent || "false" }));
    toast({
      title: "Opening WhatsApp...",
      description: "Your prayer request is ready. Just tap Send in WhatsApp!",
    });
    prayerForm.reset();
  };

  const handleVolunteerSubmit = (data: InsertVolunteer) => {
    openWhatsApp(buildVolunteerMessage(data));
    toast({
      title: "Opening WhatsApp...",
      description: "Your registration is ready. Just tap Send in WhatsApp!",
    });
    volunteerForm.reset();
  };

  return (
    <div>
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We're here to listen, pray with you, and help you connect with our community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help You?</h2>
                
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="contact">General Contact</TabsTrigger>
                    <TabsTrigger value="prayer">Prayer Request</TabsTrigger>
                    <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contact" className="mt-6">
                    <Form {...contactForm}>
                      <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={contactForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} data-testid="contact-input-firstName" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={contactForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} data-testid="contact-input-lastName" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="contact-input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="contact-select-subject">
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="General Information">General Information</SelectItem>
                                  <SelectItem value="Missions & Outreach">Missions & Outreach</SelectItem>
                                  <SelectItem value="Orphanage & Widow Care">Orphanage & Widow Care</SelectItem>
                                  <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={4} 
                                  placeholder="How can we help you?" 
                                  {...field} 
                                  data-testid="contact-textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-green-600 text-white"
                          data-testid="contact-button-submit"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send via WhatsApp
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="prayer" className="mt-6">
                    <Form {...prayerForm}>
                      <form onSubmit={prayerForm.handleSubmit(handlePrayerSubmit)} className="space-y-4">
                        <FormField
                          control={prayerForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your name" {...field} data-testid="prayer-input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={prayerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} data-testid="prayer-input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={prayerForm.control}
                          name="requestType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prayer Request Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="prayer-select-type">
                                    <SelectValue placeholder="Select request type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Health & Healing">Health & Healing</SelectItem>
                                  <SelectItem value="Family & Relationships">Family & Relationships</SelectItem>
                                  <SelectItem value="Financial Provision">Financial Provision</SelectItem>
                                  <SelectItem value="Spiritual Growth">Spiritual Growth</SelectItem>
                                  <SelectItem value="Guidance & Direction">Guidance & Direction</SelectItem>
                                  <SelectItem value="Thanksgiving & Praise">Thanksgiving & Praise</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={prayerForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prayer Request Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={4} 
                                  placeholder="Share your prayer request with us..." 
                                  {...field} 
                                  data-testid="prayer-textarea-description"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={prayerForm.control}
                          name="isUrgent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value === "true"}
                                  onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                                  data-testid="prayer-checkbox-urgent"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>This is an urgent prayer request</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-green-600 text-white"
                          data-testid="prayer-button-submit"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Submit via WhatsApp
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="volunteer" className="mt-6">
                    <Form {...volunteerForm}>
                      <form onSubmit={volunteerForm.handleSubmit(handleVolunteerSubmit)} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={volunteerForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} data-testid="volunteer-input-firstName" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={volunteerForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} data-testid="volunteer-input-lastName" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={volunteerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="volunteer-input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+234 XXX XXX XXXX" {...field} data-testid="volunteer-input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="interests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Areas of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="volunteer-select-interests">
                                    <SelectValue placeholder="Select your interests" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Community Outreach">Community Outreach</SelectItem>
                                  <SelectItem value="Prayer Ministry">Prayer Ministry</SelectItem>
                                  <SelectItem value="Youth Programs">Youth Programs</SelectItem>
                                  <SelectItem value="Administrative Support">Administrative Support</SelectItem>
                                  <SelectItem value="Event Planning">Event Planning</SelectItem>
                                  <SelectItem value="Counseling Support">Counseling Support</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Availability</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="volunteer-select-availability">
                                    <SelectValue placeholder="Select your availability" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Weekdays">Weekdays</SelectItem>
                                  <SelectItem value="Weekends">Weekends</SelectItem>
                                  <SelectItem value="Evenings">Evenings</SelectItem>
                                  <SelectItem value="Flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous Experience (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={3} 
                                  placeholder="Tell us about any relevant experience or skills..." 
                                  {...field}
                                  value={field.value || ""}
                                  data-testid="volunteer-textarea-experience"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-green-600 text-white"
                          data-testid="volunteer-button-submit"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Register via WhatsApp
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Headquarters</h4>
                        <p className="text-muted-foreground">141 Ikotun - Idimu Rd, Egbe, Lagos, Nigeria</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-secondary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+234 802 381 8547<br />+234 903 787 7197</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">info@covenantcarefoundation.com.ng</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-secondary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Office Hours</h4>
                        <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 5:00 PM<br />Saturday: 10:00 AM – 2:00 PM<br />Sunday & Public Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/20 p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3">Emergency Support</h4>
                  <p className="text-muted-foreground mb-4">
                    If you're experiencing a crisis and need immediate prayer or support, please don't hesitate to reach out.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Call: +234 802 381 8547
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
