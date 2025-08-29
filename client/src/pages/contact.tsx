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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact, InsertPrayerRequest, InsertVolunteer } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Contact Form
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

  // Prayer Request Form
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

  // Volunteer Form
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

  // Mutations
  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      contactForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const submitPrayerMutation = useMutation({
    mutationFn: async (data: InsertPrayerRequest) => {
      return await apiRequest("POST", "/api/prayer-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Prayer request submitted!",
        description: "We'll be praying for you. You're not alone.",
      });
      prayerForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/prayer-requests"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit prayer request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const submitVolunteerMutation = useMutation({
    mutationFn: async (data: InsertVolunteer) => {
      return await apiRequest("POST", "/api/volunteers", data);
    },
    onSuccess: () => {
      toast({
        title: "Volunteer registration complete!",
        description: "Thank you for your heart to serve. We'll contact you soon.",
      });
      volunteerForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/volunteers"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
    },
  });

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We're here to listen, pray with you, and help you connect with our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
                      <form onSubmit={contactForm.handleSubmit((data) => submitContactMutation.mutate(data))} className="space-y-4">
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
                                  <SelectItem value="Program Enrollment">Program Enrollment</SelectItem>
                                  <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                                  <SelectItem value="Media Request">Media Request</SelectItem>
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
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={submitContactMutation.isPending}
                          data-testid="contact-button-submit"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="prayer" className="mt-6">
                    <Form {...prayerForm}>
                      <form onSubmit={prayerForm.handleSubmit((data) => submitPrayerMutation.mutate(data))} className="space-y-4">
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
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={submitPrayerMutation.isPending}
                          data-testid="prayer-button-submit"
                        >
                          {submitPrayerMutation.isPending ? "Submitting..." : "Submit Prayer Request"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="volunteer" className="mt-6">
                    <Form {...volunteerForm}>
                      <form onSubmit={volunteerForm.handleSubmit((data) => submitVolunteerMutation.mutate(data))} className="space-y-4">
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
                                <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="volunteer-input-phone" />
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
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={submitVolunteerMutation.isPending}
                          data-testid="volunteer-button-submit"
                        >
                          {submitVolunteerMutation.isPending ? "Registering..." : "Register as Volunteer"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Address</h4>
                        <p className="text-muted-foreground">123 Faith Avenue<br />Community City, CC 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-secondary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-PRAY<br />Emergency: +1 (555) 911-HELP</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">info@covenantcare.org<br />prayers@covenantcare.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-secondary-foreground h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Office Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: After Service - 2:00 PM</p>
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
                    Emergency Hotline: (555) 911-HELP
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
