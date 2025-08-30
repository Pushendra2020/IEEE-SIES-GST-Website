import { PlusIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"

const items = [
  {
    id: "1",
    title: "What is IEEE SIES GST?",
    content:
     `IEEE SIES GST is the student branch of the Institute of Electrical and 
      Electronics Engineers at SIES Graduate School of Technology. We are dedicated
       to fostering technological innovation,professional development,
      and academic excellence among students.`,
  },
  {
    id: "2",
    title: "How can I become a member of IEEE SIES GST?",
    content:
     `You can join IEEE SIES GST by attending our membership drives 
     or contacting us directly. Membership is open to all students interested in engineering, technology, and innovation. 
     We conduct regular membership drives at the beginning of each academic year.`
  },
  {
    id: "3",
    title: "What are the benefits of joining IEEE SIES GST?",
    content:
      `Members gain access to exclusive workshops, networking opportunities, leadership roles, 
      skill development programs, IEEE digital library, industry connections,
       certificate courses, and the chance to participate in organizing major technical events.`,
  },
  {
    id: "4",
    title: "What are the sub-chapters under IEEE SIES GST?",
    content:
`IEEE SIES GST has three active sub-chapters: Computer Society (CS), Microwave Theory and Techniques Society (MTT-S),
 and Women in Engineering (WiE). Each sub-chapter focuses on specific domains 
 and organizes specialized events and workshops.`
 },
  {
    id: "5",
    title: "What kind of events does IEEE SIES GST organize?",
    content:
`We organize various technical and non-technical events including Techopedia (our flagship event), 
Epsilon (international conference), 
workshops, seminars, webinars, coding competitions, and networking sessions with industry professionals.`
 },
  {
    id: "6",
    title: "How can I participate in IEEE SIES GST events?",
    content:
`You can participate by following our social media channels, joining our WhatsApp groups, or visiting our website for event
 announcements. Most events are open to all students, while some may require prior registration.`
 },
  {
    id: "7",
    title: "What is Techopedia?",
    content:
`Techopedia is our flagship annual technical festival featuring workshops, competitions, and exhibitions. 
It includes our signature competition "Vendetta" and attracts participants from various colleges, celebrating 
innovation and technical excellence.`
 },
  {
    id: "8",
    title: "How can I contact IEEE SIES GST?",
    content:
`You can reach us at ieee@siesgst.ac.in, follow us on our social media platforms, 
or visit us at SIES Graduate School of Technology, Nerul, Navi Mumbai. Check our Linktree for 
all social media links: https://linktr.ee/ieeesiesgst`
 },
]

export default function FAQComponent() {
  return (
    <div className="w-full rounded-3xl bg-white/10 backdrop-blur-lg border border-cyan-400 shadow-lg p-8 space-y-6">
      <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="0">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger
                className="flex flex-1 items-center gap-8 rounded-xl py-3 px-4 text-left text-base font-semibold text-white bg-black/30 hover:bg-cyan-900/30 transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 border border-cyan-400/30 shadow-md"
              >
                <span className="flex-1">{item.title}</span>
                <PlusIcon
                  size={20}
                  className="pointer-events-none shrink-0 text-cyan-400 group-data-[state=open]:rotate-45 transition-transform duration-300"
                  aria-hidden="true" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-gray-200 pt-4 ps-7 pb-2 text-base leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
