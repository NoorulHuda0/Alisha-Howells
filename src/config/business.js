/**
 * Business Configuration File
 *
 * CRITICAL: All business content, typography details, colors, service descriptions,
 * contact actions, and image references live strictly in this file.
 * Any non-technical owner can edit this single file to update the entire website.
 */

// Image assets (using local high-fidelity assets)
import heroImg from '../assets/images/hero_software_training_1790749187430.jpg';
import officeImg from '../assets/images/office_productivity_1790749204857.jpg';
import designCodeImg from '../assets/images/coding_design_studio_1790749222318.jpg';
import aboutStudioImg from '../assets/images/software_learning_lab_1790749236054.jpg';

export const business = {
  // Brand & Identity
  name: "Alisha Howells",
  type: "Software Training Institute",
  tagline: "Learn Software Skills Faster",
  
  // Theme & Color Tokens
  theme: {
    primaryColor: "#153e2d",
    primaryHover: "#1b4d36",
    secondaryColor: "#ffffff",
    accentColor: "#236345",
    backgroundColor: "#f9faf8",
    surfaceColor: "#ffffff",
    surfaceAltColor: "#f1f4f1",
    textColor: "#111915",
    textMuted: "#4e5e54",
    borderColor: "#e2e7e3",
  },

  // Location & Contact
  contact: {
    city: "Birmingham, United Kingdom",
    area: "Bierton Road, Birmingham",
    fullAddress: "First Floor Flat - B, 12 Bierton Road, Birmingham, United Kingdom, B25 8PY",
    phoneDisplay: "+44 7915 925681",
    phoneRaw: "447915925681",
    phoneTel: "tel:447915925681",
    whatsappDisplay: "+44 7915 925681",
    whatsappRaw: "447915925681",
    whatsappUrl: "https://wa.me/447915925681",
    // Note: Email was not provided in the brief ({{EMAIL_ADDRESS}}), so it is omitted cleanly.
    email: null,
    // Google Maps link with query fallback
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=First+Floor+Flat+-+B,+12+Bierton+Road,+Birmingham,+United+Kingdom,+B25+8PY",
    hoursNotice: "Sessions arranged by appointment · Inquire via WhatsApp or phone",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Primary Call-to-Actions
  actions: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447915925681",
      isExternal: true,
    },
    secondary: {
      label: "Contact Us",
      href: "#contact",
      isExternal: false,
    },
    callDirect: {
      label: "Call Now",
      href: "tel:447915925681",
      isExternal: false,
    },
    getDirections: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=First+Floor+Flat+-+B,+12+Bierton+Road,+Birmingham,+United+Kingdom,+B25+8PY",
      isExternal: true,
    },
  },

  // Hero Section
  hero: {
    eyebrow: "Birmingham · Software Training Institute",
    title: "Learn Software Skills Faster.",
    lead: "Focused, practical computer and software training tailored to help you build real confidence and master modern digital tools.",
    locationNote: "First Floor Flat - B, 12 Bierton Road, Birmingham, B25 8PY",
    image: heroImg,
    imageAlt: "Alisha Howells software training workspace in Birmingham",
  },

  // Services Section
  services: {
    eyebrow: "Practical Curriculum",
    title: "Focused software instruction built around your pace.",
    subtitle: "From core daily office applications to modern web and design tools, each course is structured to deliver immediate competence without unnecessary filler.",
    items: [
      {
        id: "microsoft-office",
        title: "Microsoft Office Suite",
        category: "Productivity",
        description: "Master Excel formulas and data handling, Word document structuring, and professional PowerPoint presentations for everyday workplace tasks.",
        tools: ["Excel Training", "Word Training", "PowerPoint Training"],
        image: officeImg,
        imageAlt: "Microsoft Excel and office spreadsheet training workstation",
      },
      {
        id: "web-design",
        title: "Web Design Training",
        category: "Development",
        description: "Learn modern website structuring, responsive layout principles, and practical publishing to build clean, functional sites from scratch.",
        tools: ["HTML/CSS", "Responsive Layouts", "Modern Web Tools"],
        image: designCodeImg,
        imageAlt: "Web design and front-end layout coaching monitor",
      },
      {
        id: "graphic-design",
        title: "Graphic Design Training",
        category: "Creative",
        description: "Develop practical skills in visual composition, asset creation, branding fundamentals, and digital editing for marketing and business use.",
        tools: ["Layout Composition", "Digital Image Editing", "Brand Graphics"],
        image: aboutStudioImg,
        imageAlt: "Graphic design studio training workstation",
      },
      {
        id: "programming-database",
        title: "Programming & Database Training",
        category: "Technical",
        description: "Structured introduction to logic, software programming fundamentals, and database organization to manage and query records efficiently.",
        tools: ["Programming Fundamentals", "Database Design", "Data Queries"],
        image: heroImg,
        imageAlt: "Database and software programming learning terminal",
      },
      {
        id: "digital-marketing-seo",
        title: "Digital Marketing & SEO Training",
        category: "Marketing",
        description: "Practical steps to optimize search visibility, manage online channels, and reach local audiences effectively through organic search best practices.",
        tools: ["SEO Fundamentals", "Keyword Research", "Channel Promotion"],
        image: officeImg,
        imageAlt: "Digital marketing and search optimization training desk",
      },
      {
        id: "computer-software-fundamentals",
        title: "Computer & Software Training",
        category: "Core Essentials",
        description: "Hands-on guidance for beginners and professionals seeking clarity with daily computer operations, system navigation, and file management.",
        tools: ["Computer Literacy", "System Navigation", "File Workflows"],
        image: aboutStudioImg,
        imageAlt: "Computer literacy and daily workflow coaching setup",
      },
    ],
  },

  // About Section
  about: {
    eyebrow: "Personalized Instruction",
    title: "Direct, hands-on software guidance in Birmingham.",
    paragraphs: [
      "At Alisha Howells Software Training Institute, training is kept direct, clear, and distraction-free. Rather than sitting through generic, impersonal tutorials, you work step-by-step through practical tasks relevant to your personal goals.",
      "Located at 12 Bierton Road in Birmingham, sessions focus on practical skills you can apply immediately — whether you are preparing for a new job, streamlining office work, or learning creative software tools."
    ],
    details: [
      { label: "Location", value: "Bierton Road, Birmingham B25 8PY" },
      { label: "Instruction Format", value: "Direct, step-by-step coaching" },
      { label: "Curriculum", value: "Office, Design, Web & Code" },
    ],
    image: aboutStudioImg,
    imageAlt: "Alisha Howells software instruction studio in Birmingham",
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "The Approach",
    title: "Why learners choose our Birmingham institute.",
    subtitle: "A focused environment built for retention, speed, and real-world execution.",
    points: [
      {
        number: "01",
        title: "Learn at an Accelerated Pace",
        description: "Curriculum is trimmed of unnecessary theory so you spend time practicing the exact software workflows you need.",
      },
      {
        number: "02",
        title: "Hands-On Practical Exercises",
        description: "Every topic is reinforced through immediate execution on real files, spreadsheets, designs, and code samples.",
      },
      {
        number: "03",
        title: "Comprehensive Software Coverage",
        description: "From daily Microsoft Office essentials to graphic design, web design, SEO, and database management under one roof.",
      },
      {
        number: "04",
        title: "Accessible Birmingham Location",
        description: "Conveniently based on Bierton Road in Birmingham with flexible session coordination arranged directly via WhatsApp.",
      },
    ],
  },

  // Testimonials: Omitted cleanly because none were provided in the brief.
  testimonials: null,

  // FAQ Section
  faq: {
    eyebrow: "Questions & Answers",
    title: "Common questions about our software training.",
    subtitle: "Everything you need to know before booking your first session.",
    items: [
      {
        question: "Do I need prior experience before starting a course?",
        answer: "No previous experience is required. We offer beginner-friendly fundamentals for computer literacy and Microsoft Office, as well as intermediate modules for web design, graphics, and programming.",
      },
      {
        question: "How do I schedule or inquire about a training session?",
        answer: "The quickest way is to message directly on WhatsApp (+44 7915 925681) or call our phone number. We will discuss your goals, current skill level, and suitable time slots.",
      },
      {
        question: "What software tools do you train in?",
        answer: "We cover Microsoft Office (Excel, Word, PowerPoint), Web Design, Graphic Design, Digital Marketing & SEO, Database concepts, and Programming fundamentals.",
      },
      {
        question: "Where are the training sessions held?",
        answer: "Sessions are held at First Floor Flat - B, 12 Bierton Road, Birmingham, United Kingdom, B25 8PY. You can view our location or get direct directions on Google Maps.",
      },
    ],
  },

  // Contact Section
  contactSection: {
    eyebrow: "Get in Touch",
    title: "Ready to accelerate your software skills?",
    subtitle: "Reach out directly to discuss your learning goals or schedule your first session.",
    formTitle: "Send an Inquiry",
    formDescription: "Leave a quick note with the software tools you wish to learn, and we will get back to you promptly.",
  },

  // Footer
  footer: {
    copyright: "Alisha Howells. All rights reserved.",
    rightsStatement: "Software Training Institute · Birmingham, United Kingdom",
  },
};
