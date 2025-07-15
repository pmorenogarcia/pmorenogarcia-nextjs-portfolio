import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "emailjs-com"

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target
    const name = form.name.value.trim()
    const email = form.name.value.trim()
    const message = form.name.value.trim()

    if (!name || !email || !message || message.length > 1000) {
      toast({
        title: 'Invalid input',
        description: 'Please fill all fields correctly.',
      })
      return
    }

    const forbidden = ['http://', 'https://', '<script', 'href=', 'src=']
    if (forbidden.some((str) => message.toLowerCase().includes(str))) {
      toast({
        title: 'Blocked content',
        description: 'Your message contains suspicious content.',
      })
      return
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        toast({
          title: 'Message sent!',
          description: "Thank you for your message. I'll get back to you soon.",
        })
        form.reset()
        setIsSubmitting(false)
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: 'There was a problem sending the message.',
        })
        setIsSubmitting(false)
      })
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have a question, want to
          collaborate, or just want to say hi, I'm all ears! I'll do my best to
          get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-left font-medium"> Email</h4>
                  <a
                    href="mailto:pol.moreno.garcia@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pol.moreno.garcia@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-left font-medium"> Phone</h4>
                  <a
                    href="tel:+34651903236"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 651 90 32 36
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-left font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sant Andreu de la Barca, Barcelona, Spain
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://wa.me/34651903236" target="_blank">
                  <MessageCircle />
                </a>
                <a href="https://www.linkedin.com/in/pol-moreno-garcia-878031244/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/pmorenogarcia" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Gimli, son of Glóin..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="gimli_lockbearer@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
