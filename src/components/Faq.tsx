import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in CodeSurge 2024?",
    answer: "CodeSurge is open to all students, professionals, and tech enthusiasts. Whether you're a beginner or an experienced developer, we welcome participants from all skill levels and backgrounds.",
  },
  {
    question: "How do I register for the hackathon?",
    answer: "Click on the 'Register' button in the navigation menu, choose your track, and fill out the registration form. You can register as an individual or as a team. Make sure to complete your registration before the deadline!",
  },
  {
    question: "What tracks are available?",
    answer: "We have four exciting tracks: Healthcare Innovation, Open Innovation Hub (OIH), Open Innovation Space (OIS), and Wealth Management. Each track focuses on solving real-world problems in their respective domains.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No! CodeSurge is completely free to participate. We believe in making innovation accessible to everyone.",
  },
  {
    question: "Can I participate remotely?",
    answer: "Yes! CodeSurge supports both in-person and remote participation. You can choose your preferred mode during registration.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, chargers, any hardware you might need, and most importantly, your creativity and enthusiasm! We'll provide food, drinks, and internet connectivity.",
  },
  {
    question: "How are teams formed?",
    answer: "You can register with a pre-formed team of up to 4 members, or you can join as an individual and we'll help you find teammates during the team formation session at the start of the event.",
  },
  {
    question: "What are the prizes?",
    answer: "Winners in each track will receive cash prizes, certificates, and potential opportunities for mentorship and funding. The grand prize winner gets additional recognition and exclusive perks!",
  },
  {
    question: "Will there be mentors available?",
    answer: "Absolutely! Industry experts and experienced mentors will be available throughout the hackathon to guide you, answer questions, and provide technical support.",
  },
  {
    question: "What happens after I submit my project?",
    answer: "All submissions will be reviewed by our panel of judges. Results will be announced on the final day of the event, and winners will be notified via email and displayed on our results page.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-effect rounded-lg border border-border overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-smooth">
                <span className="text-left font-heading font-semibold">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
