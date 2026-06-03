import React, { useState } from "react";
import "../styles/Jobs.scss";

const CITY = "Hyderabad";

const ALL_JOBS = [
  // ── Photographer ──────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Wedding Photographer",
    company: "Photomagical Studios",
    location: "Banjara Hills, Hyderabad",
    category: "Photographer",
    type: "Full-time",
    experience: "2–5 yrs",
    salary: "₹30,000 – ₹50,000 / mo",
    posted: "2 days ago",
    contact: {
      name: "Ramesh Kumar",
      phone: "+91 98490 12345",
      email: "careers@photomagical.in",
      website: "www.photomagical.in",
    },
    description:
      "We are looking for an experienced Wedding Photographer to join our growing studio. You will be responsible for capturing wedding ceremonies, receptions, and pre-wedding shoots across Hyderabad and nearby locations. The ideal candidate must be proficient in both candid and traditional photography styles, with strong post-processing skills in Lightroom and Photoshop. You should be comfortable working in low-light environments, managing multiple cameras, and delivering a polished set of edited images within agreed turnaround times. Strong interpersonal skills to work with clients and coordinate on shoot day are essential. A portfolio demonstrating high-quality wedding work is mandatory.",
  },
  {
    id: 2,
    title: "Product & Commercial Photographer",
    company: "PixelCraft Media",
    location: "Madhapur, Hyderabad",
    category: "Photographer",
    type: "Full-time",
    experience: "1–3 yrs",
    salary: "₹25,000 – ₹40,000 / mo",
    posted: "5 days ago",
    contact: {
      name: "Sneha Reddy",
      phone: "+91 91000 67890",
      email: "hr@pixelcraftmedia.com",
      website: "www.pixelcraftmedia.com",
    },
    description:
      "PixelCraft Media is hiring a Product & Commercial Photographer to handle product catalogues, e-commerce listings, and brand campaigns for our clients. You will work in our in-house studio with professional lighting rigs and be expected to maintain visual consistency across large product batches. Proficiency with tethered shooting, colour calibration, and efficient file management is required. Familiarity with food, jewellery, or fashion product photography is a strong advantage. You will collaborate closely with the creative team and clients to ensure deliverables meet brand guidelines. Candidates must have a strong portfolio showcasing clean, commercial-grade product imagery.",
  },
  {
    id: 3,
    title: "Event & Corporate Photographer",
    company: "Lens & Life Photography",
    location: "Gachibowli, Hyderabad",
    category: "Photographer",
    type: "Freelance",
    experience: "1–3 yrs",
    salary: "₹3,000 – ₹6,000 / event",
    posted: "1 week ago",
    contact: {
      name: "Arjun Sharma",
      phone: "+91 93456 11223",
      email: "bookings@lensandlife.in",
      website: "www.lensandlife.in",
    },
    description:
      "We are looking for freelance photographers to cover corporate conferences, award ceremonies, product launches, and brand activations across Hyderabad. You must be skilled in capturing key moments quickly in fast-paced, candid environments with minimal direction. Ability to deliver a fully edited gallery of images within 48 hours of the event is non-negotiable. You should be comfortable with available light as well as on-camera flash in ballroom and outdoor settings. Basic knowledge of event photography etiquette and professional client behaviour is expected. Assignments will be offered on a per-event basis with potential for regular long-term engagements.",
  },
  {
    id: 4,
    title: "Portrait & Fashion Photographer",
    company: "Studio Iris",
    location: "Jubilee Hills, Hyderabad",
    category: "Photographer",
    type: "Part-time",
    experience: "2–4 yrs",
    salary: "₹20,000 – ₹35,000 / mo",
    posted: "3 days ago",
    contact: {
      name: "Priya Nair",
      phone: "+91 88001 44556",
      email: "hello@studioiris.in",
      website: "www.studioiris.in",
    },
    description:
      "Studio Iris is seeking a talented Portrait & Fashion Photographer for weekend and weekday shoots. You will work on model portfolios, maternity sessions, lifestyle shoots, and fashion editorials for brands and individual clients. A strong eye for composition, flattering light placement, and refined colour grading is essential. You must be able to guide subjects comfortably in front of the camera to bring out natural expressions and confident poses. Proficiency in retouching using Photoshop is required. Experience shooting for fashion magazines or clothing brands will be considered a significant advantage during the selection process.",
  },

  // ── Videographer ──────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Wedding Videographer / Cinematographer",
    company: "Frames & Stories",
    location: "Secunderabad, Hyderabad",
    category: "Videographer",
    type: "Full-time",
    experience: "2–5 yrs",
    salary: "₹35,000 – ₹55,000 / mo",
    posted: "1 day ago",
    contact: {
      name: "Vikram Rao",
      phone: "+91 97000 33221",
      email: "join@framesandstories.in",
      website: "www.framesandstories.in",
    },
    description:
      "Frames & Stories is one of Hyderabad's leading wedding film studios and we are hiring a full-time Wedding Videographer. You will be responsible for filming ceremonies, receptions, mehendi functions, and pre-wedding shoots, and delivering polished highlight reels and full-length wedding films. Proficiency with Sony FX or Canon Cinema cameras, DJI gimbals, and drone operation is required. Experience with cinematic storytelling, same-day-edits, and multi-camera coordination is highly valued. You should be comfortable working in low-light, fast-paced situations and collaborating closely with photographers on the shoot day. Prior wedding cinematography portfolio is mandatory.",
  },
  {
    id: 6,
    title: "Corporate Video Producer",
    company: "Reel Vision Media",
    location: "Hitec City, Hyderabad",
    category: "Videographer",
    type: "Full-time",
    experience: "3–6 yrs",
    salary: "₹40,000 – ₹65,000 / mo",
    posted: "4 days ago",
    contact: {
      name: "Anand Mehta",
      phone: "+91 90001 77654",
      email: "talent@reelvision.in",
      website: "www.reelvision.in",
    },
    description:
      "Reel Vision Media produces high-quality corporate films, training videos, product demos, and advertising content for top brands. We need an experienced Corporate Video Producer to lead shoots from pre-production through to final delivery. You will handle scripting, storyboarding, shoot coordination, and client communication. Proficiency with professional cinema cameras, studio and location lighting setups, and post-production workflows is expected. Experience producing executive interviews, testimonial videos, or brand documentaries is a strong advantage. You should be confident managing small to medium production crews and delivering projects on tight deadlines.",
  },
  {
    id: 7,
    title: "Freelance Reels & Content Videographer",
    company: "CloudShot Digital",
    location: "Kondapur, Hyderabad",
    category: "Videographer",
    type: "Freelance",
    experience: "1–2 yrs",
    salary: "₹1,500 – ₹4,000 / day",
    posted: "6 days ago",
    contact: {
      name: "Divya Srinivas",
      phone: "+91 86008 99001",
      email: "work@cloudshotdigital.com",
      website: "www.cloudshotdigital.com",
    },
    description:
      "CloudShot Digital works with growing brands and influencers to create engaging short-form video content. We are looking for a freelance videographer comfortable shooting and delivering Instagram Reels, YouTube Shorts, and brand content on flexible daily assignments. You should be confident with natural-light handheld shooting and be able to conceptualise simple shot lists independently. Basic on-site audio recording and colour grading skills are required. Turnaround times are fast — typically same day or next morning — so reliability and speed are critical. Ability to bring your own equipment (mirrorless or smartphone rig) is preferred.",
  },

  // ── Video Editor ──────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Wedding Film Editor",
    company: "Timeless Clicks Studio",
    location: "Kukatpally, Hyderabad",
    category: "Video Editor",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹28,000 – ₹45,000 / mo",
    posted: "3 days ago",
    contact: {
      name: "Suresh Babu",
      phone: "+91 99000 55443",
      email: "edit@timelessclicks.in",
      website: "www.timelessclicks.in",
    },
    description:
      "Timeless Clicks Studio is hiring a skilled Wedding Film Editor to work on highlight reels, full-length wedding films, pre-wedding videos, and drone sequences. You will work with footage shot on Sony, Canon, and DJI cameras and must be expert-level in Adobe Premiere Pro and DaVinci Resolve. Colour grading, audio mixing, multi-cam syncing, and creative storytelling are core responsibilities. You should be capable of meeting delivery deadlines without compromising quality and able to manage a queue of 10–20 projects per month. A strong reel demonstrating wedding cinematography edits is mandatory. Cinematic music synchronisation skills will be a key evaluation criterion.",
  },
  {
    id: 9,
    title: "Social Media Video Editor",
    company: "Buzz Content Studio",
    location: "Madhapur, Hyderabad",
    category: "Video Editor",
    type: "Full-time",
    experience: "1–3 yrs",
    salary: "₹20,000 – ₹35,000 / mo",
    posted: "1 week ago",
    contact: {
      name: "Kavitha Rao",
      phone: "+91 82000 12345",
      email: "hire@buzzcontent.in",
      website: "www.buzzcontent.in",
    },
    description:
      "Buzz Content Studio delivers daily social media content for a portfolio of brand clients. We need a fast and creative Video Editor who can cut Reels, Shorts, and YouTube content to a high standard, often with same-day turnarounds. You must be proficient in Premiere Pro and CapCut (or similar mobile editing tools). Experience with motion graphics in After Effects is a significant advantage. You will work closely with the content and design teams to ensure consistent visual identity across platforms. Ability to handle multiple brands simultaneously and adapt quickly to different styles and tones is essential.",
  },
  {
    id: 10,
    title: "Freelance Post-Production Editor",
    company: "EditPro Media",
    location: "Remote / Hyderabad",
    category: "Video Editor",
    type: "Freelance",
    experience: "2–5 yrs",
    salary: "₹500 – ₹1,200 / hr",
    posted: "2 days ago",
    contact: {
      name: "Rajesh Pillai",
      phone: "+91 94400 88776",
      email: "projects@editpromedia.com",
      website: "www.editpromedia.com",
    },
    description:
      "EditPro Media connects production houses and photography studios with skilled post-production editors. We are looking for a freelance editor to handle multi-cam event edits, colour correction, audio clean-up, and final delivery. Proficiency in DaVinci Resolve and Premiere Pro is required. You should be able to interpret a rough cut brief independently and deliver a polished result with minimal revision rounds. Previous experience editing for corporate events, concerts, or studio productions is preferred. Flexible hourly engagements with potential to grow into monthly retainer contracts based on quality and reliability.",
  },

  // ── Album Designer ────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Wedding Album Designer",
    company: "Golden Frame Digital Lab",
    location: "Dilsukhnagar, Hyderabad",
    category: "Album Designer",
    type: "Full-time",
    experience: "1–3 yrs",
    salary: "₹18,000 – ₹30,000 / mo",
    posted: "5 days ago",
    contact: {
      name: "Lakshmi Devi",
      phone: "+91 97600 22334",
      email: "lab@goldenframe.in",
      website: "www.goldenframe.in",
    },
    description:
      "Golden Frame Digital Lab is a busy photo lab handling album production for over 50 studios in Hyderabad. We are hiring a Wedding Album Designer proficient in Fundy Designer, Fotovybe, or SmartAlbums. You will be responsible for creating flush-mount album layouts, canvas designs, and photobook spreads from client-supplied galleries. A keen eye for visual balance, typography, and colour management is essential. You must be comfortable handling high volumes — typically 15–25 album projects per month — while maintaining quality and turnaround times. Prior experience working in a digital lab environment is strongly preferred.",
  },
  {
    id: 12,
    title: "Senior Album & Photobook Designer",
    company: "Capture Moments Lab",
    location: "LB Nagar, Hyderabad",
    category: "Album Designer",
    type: "Full-time",
    experience: "3–6 yrs",
    salary: "₹28,000 – ₹42,000 / mo",
    posted: "4 days ago",
    contact: {
      name: "Mohan Reddy",
      phone: "+91 88500 66778",
      email: "careers@capturemoments.in",
      website: "www.capturemoments.in",
    },
    description:
      "Capture Moments Lab is growing and we need a Senior Album Designer to lead our production team. You will design premium flush-mount and lay-flat albums, mentor junior designers, conduct quality checks, and liaise directly with client studios to understand their preferences. Expert knowledge of album design software (Fundy, Pixellu, InDesign) is required. You must have experience with ICC colour profiles, bleed setup, and pre-press file preparation for large-format printing. Strong project management skills to handle 30+ concurrent album projects and maintain on-time delivery rates are essential.",
  },

  // ── Graphic Designer ──────────────────────────────────────────────────────
  {
    id: 13,
    title: "Photography Brand & Social Graphic Designer",
    company: "Pixstack",
    location: "Hitec City, Hyderabad",
    category: "Graphic Designer",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹25,000 – ₹40,000 / mo",
    posted: "Today",
    contact: {
      name: "Careers Team",
      phone: "+91 92000 10101",
      email: "careers@pixstack.in",
      website: "www.pixstack.in",
    },
    description:
      "Pixstack is India's dedicated photography marketplace and we are hiring a Graphic Designer to create social media posts, marketing collateral, email campaigns, and branding assets for photography businesses on the platform. You will work within established brand guidelines and collaborate with the product and marketing teams to deliver pixel-perfect designs on tight timelines. Proficiency in Figma, Adobe Illustrator, and Photoshop is required. Motion design skills using After Effects for animated social posts will be treated as a significant advantage. You should be a self-starter who can manage multiple projects simultaneously and deliver consistent, high-quality work.",
  },
  {
    id: 14,
    title: "UI/UX & Marketing Designer",
    company: "ShutterSpark Creative",
    location: "Kondapur, Hyderabad",
    category: "Graphic Designer",
    type: "Full-time",
    experience: "2–5 yrs",
    salary: "₹30,000 – ₹50,000 / mo",
    posted: "3 days ago",
    contact: {
      name: "Kiran Verma",
      phone: "+91 96600 55432",
      email: "design@shutterspark.in",
      website: "www.shutterspark.in",
    },
    description:
      "ShutterSpark Creative is a design agency focused exclusively on the photography and events industry. We are hiring a UI/UX & Marketing Designer to create landing pages, brochures, studio branding kits, and social media campaigns for our studio clients. You should be comfortable working from brand briefs, producing wireframes and final assets efficiently, and presenting concepts to clients. Proficiency in Figma for UI work and the Adobe Creative Suite for print and digital marketing is essential. Experience designing for photography businesses or creative agencies is strongly preferred. Animated content for social platforms (Reels, Stories) is a regular deliverable.",
  },
  {
    id: 15,
    title: "Freelance Graphic Designer — Photography Niche",
    company: "Various Studios",
    location: "Remote / Hyderabad",
    category: "Graphic Designer",
    type: "Freelance",
    experience: "1–3 yrs",
    salary: "₹400 – ₹900 / hr",
    posted: "1 week ago",
    contact: {
      name: "Studio Collective HYD",
      phone: "+91 80000 44321",
      email: "freelance@studiocollectivehyd.in",
      website: "www.studiocollectivehyd.in",
    },
    description:
      "A collective of Hyderabad-based photography studios is seeking a freelance graphic designer on an ongoing basis. Projects include price-lists, service menus, thank-you cards, Instagram feed templates, album cover art, and event invitation designs. You should be proficient in Canva Pro, Adobe Illustrator, and Photoshop. Ability to adapt your style to match different studio brand identities is key, as you will be working across multiple clients simultaneously. Turnarounds are typically 24–48 hours for standard assets. Reliable communication, attention to detail, and a strong portfolio of photography-industry design work are required to be considered.",
  },

  // ── Photography Faculty ───────────────────────────────────────────────────
  {
    id: 16,
    title: "Photography Trainer — Basic to Advanced",
    company: "Focus Institute of Photography",
    location: "Ameerpet, Hyderabad",
    category: "Photography Faculty",
    type: "Full-time",
    experience: "4–8 yrs",
    salary: "₹35,000 – ₹55,000 / mo",
    posted: "2 days ago",
    contact: {
      name: "Dr. Ravi Shankar",
      phone: "+91 91500 77889",
      email: "admissions@focusinstitute.in",
      website: "www.focusinstitute.in",
    },
    description:
      "Focus Institute of Photography is one of Hyderabad's most respected photography training centres and we are seeking an experienced Photography Trainer to teach batches of 10–20 students at basic, intermediate, and advanced levels. Curriculum covers DSLR and mirrorless fundamentals, exposure triangle, composition, studio and natural lighting, and post-processing in Lightroom and Photoshop. You will be responsible for lesson planning, student assessments, and practical workshop sessions. Curriculum development experience is preferred. The ideal candidate has a strong personal photographic portfolio and a genuine passion for nurturing emerging photographers. Prior teaching or mentoring experience is mandatory.",
  },
  {
    id: 17,
    title: "Wedding Photography Mentor",
    company: "LensLight Academy",
    location: "Banjara Hills, Hyderabad",
    category: "Photography Faculty",
    type: "Part-time",
    experience: "5+ yrs",
    salary: "₹20,000 – ₹35,000 / mo",
    posted: "1 week ago",
    contact: {
      name: "Sunita Krishnan",
      phone: "+91 87700 33221",
      email: "mentor@lenslightacademy.in",
      website: "www.lenslightacademy.in",
    },
    description:
      "LensLight Academy conducts weekend intensive workshops for aspiring wedding and candid photographers. We are looking for an experienced Wedding Photography Mentor to lead hands-on sessions covering lighting, posing, reception photography, and cinematic editing. You will work with batches of 6–12 students, guide them through live demonstrations, and review their practical assignments. A strong real-world wedding photography portfolio with at least 5 years of active shooting experience is required. Excellent communication and the ability to simplify complex techniques for beginners are equally important. Candidates comfortable conducting outdoor field sessions and mock shoot setups are preferred.",
  },
  {
    id: 18,
    title: "Videography & Drone Faculty",
    company: "Shutter Arts Training Centre",
    location: "Gachibowli, Hyderabad",
    category: "Photography Faculty",
    type: "Full-time",
    experience: "3–6 yrs",
    salary: "₹30,000 – ₹48,000 / mo",
    posted: "5 days ago",
    contact: {
      name: "Naveen Reddy",
      phone: "+91 99800 11230",
      email: "faculty@shutterarts.in",
      website: "www.shutterarts.in",
    },
    description:
      "Shutter Arts Training Centre is expanding its videography programme and we need a Videography & Drone Faculty member to teach cinematography, drone operations, and cinematic editing to batches of students. You will cover camera handling, gimbal operations, aerial composition, colour grading in DaVinci Resolve, and client delivery workflows. DGCA-certified drone pilot certification is preferred and will be a key differentiator. You must be comfortable conducting outdoor flight sessions and managing the safety aspects of drone training. Strong communication skills and patience in explaining technical concepts to beginners are essential. Experience training students or conducting workshops is mandatory.",
  },

  // ── Others ────────────────────────────────────────────────────────────────
  {
    id: 19,
    title: "Photography Studio Manager",
    company: "Royal Frame Photography",
    location: "Jubilee Hills, Hyderabad",
    category: "Others",
    type: "Full-time",
    experience: "3–5 yrs",
    salary: "₹30,000 – ₹45,000 / mo",
    posted: "3 days ago",
    contact: {
      name: "Anil Kumar",
      phone: "+91 93300 22110",
      email: "admin@royalframephoto.in",
      website: "www.royalframephoto.in",
    },
    description:
      "Royal Frame Photography is a premium studio in Jubilee Hills and we are hiring a Studio Manager to oversee all day-to-day operations. Responsibilities include managing client bookings and enquiries, coordinating photographer and videographer schedules, maintaining studio equipment, and ensuring a world-class client experience at every touchpoint. You will also supervise support staff and handle vendor relationships for printing and album production. Prior experience in a creative studio, event company, or hospitality environment is strongly preferred. Excellent communication skills, proficiency in studio management or CRM tools, and strong organisational ability are essential requirements.",
  },
  {
    id: 20,
    title: "Photo Retoucher / Color Grading Artist",
    company: "Vivid Pixels Lab",
    location: "Madhapur, Hyderabad",
    category: "Others",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹22,000 – ₹38,000 / mo",
    posted: "6 days ago",
    contact: {
      name: "Swathi Menon",
      phone: "+91 89900 66543",
      email: "retouch@vividpixels.in",
      website: "www.vividpixels.in",
    },
    description:
      "Vivid Pixels Lab provides post-processing services to wedding and commercial photographers across India. We are hiring a Photo Retoucher and Colour Grading Artist to handle portrait retouching, skin smoothing, blemish removal, background replacements, and cinematic colour grading for wedding and product galleries. Expert-level Lightroom and Photoshop skills are non-negotiable. Experience with frequency separation, dodge-and-burn, and luminosity masking is highly valued. You will work on galleries of 300–1,000 images per project and must maintain consistent colour and tone throughout. High attention to detail, speed, and the ability to match a client's reference style accurately are critical.",
  },
  {
    id: 21,
    title: "Camera & Equipment Sales Executive",
    company: "Citylens Camera Store",
    location: "Ameerpet, Hyderabad",
    category: "Others",
    type: "Full-time",
    experience: "1–3 yrs",
    salary: "₹18,000 – ₹28,000 + incentives",
    posted: "4 days ago",
    contact: {
      name: "Harish Goud",
      phone: "+91 86600 44321",
      email: "sales@citylenscamera.in",
      website: "www.citylenscamera.in",
    },
    description:
      "Citylens Camera Store is a leading photography equipment retailer in Hyderabad and we are hiring a Sales Executive to assist customers in selecting cameras, lenses, lighting, and accessories. You should have strong knowledge of major brands including Sony, Canon, Nikon, Fujifilm, and DJI, and be able to confidently explain the differences between camera systems to both beginners and professional photographers. Responsibilities include managing in-store demonstrations, processing sales, handling trade-ins, and building long-term customer relationships. Performance-based incentives on monthly sales targets are part of the package. Prior retail or photography equipment experience is strongly preferred.",
  },
  {
    id: 22,
    title: "Photography Studio Receptionist & Coordinator",
    company: "Memories Forever Studio",
    location: "Secunderabad, Hyderabad",
    category: "Others",
    type: "Full-time",
    experience: "0–2 yrs",
    salary: "₹15,000 – ₹22,000 / mo",
    posted: "2 days ago",
    contact: {
      name: "Padma Lakshmi",
      phone: "+91 90000 11998",
      email: "hello@memoriesforeverstudio.in",
      website: "www.memoriesforeverstudio.in",
    },
    description:
      "Memories Forever Studio is a popular portrait and wedding photography studio in Secunderabad. We are hiring a Studio Receptionist & Coordinator to manage client inquiries, appointment scheduling, front-desk management, and basic administrative tasks. You will be the first point of contact for walk-in and phone clients, so a warm, professional demeanour is essential. Proficiency in MS Office and Google Workspace is required. Familiarity with basic billing, invoice management, and social media handling is an added advantage. No prior photography knowledge is needed, but a genuine interest in the creative industry will make you a better cultural fit for our team.",
  },
];

const CATEGORIES = [
  "All",
  "Photographer",
  "Videographer",
  "Video Editor",
  "Album Designer",
  "Graphic Designer",
  "Photography Faculty",
  "Others",
];

const TYPE_COLORS = {
  "Full-time": "full-time",
  "Part-time": "part-time",
  Freelance: "freelance",
};

const PREVIEW_LENGTH = 160;

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = job.description.length > PREVIEW_LENGTH;

  return (
    <div className="job-card">
      {/* Top row */}
      <div className="job-card__top">
        <div className="job-card__meta">
          <span className={`job-card__type job-card__type--${TYPE_COLORS[job.type]}`}>
            {job.type}
          </span>
          <span className="job-card__category">{job.category}</span>
        </div>
        <span className="job-card__posted">{job.posted}</span>
      </div>

      <h2 className="job-card__title">{job.title}</h2>
      <p className="job-card__company">{job.company}</p>

      {/* Detail chips */}
      <div className="job-card__details">
        <span className="job-card__detail">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          {job.location}
        </span>
        <span className="job-card__detail">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
          {job.experience}
        </span>
        <span className="job-card__detail job-card__detail--salary">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {job.salary}
        </span>
      </div>

      {/* Job description */}
      <div className="job-card__desc-block">
        <h3 className="job-card__desc-title">Job Description</h3>
        <p className="job-card__desc">
          {expanded || !isLong
            ? job.description
            : job.description.slice(0, PREVIEW_LENGTH).trimEnd() + "…"}
          {isLong && (
            <button
              className="job-card__read-more"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>

      {/* Contact details */}
      <div className="job-card__contact">
        <h3 className="job-card__contact-title">Contact Details</h3>
        <div className="job-card__contact-grid">
          <div className="job-card__contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="job-card__contact-label">Contact</span>
            <span className="job-card__contact-value">{job.contact.name}</span>
          </div>
          <div className="job-card__contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="job-card__contact-label">Phone</span>
            <a href={`tel:${job.contact.phone}`} className="job-card__contact-value job-card__contact-link">
              {job.contact.phone}
            </a>
          </div>
          <div className="job-card__contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="job-card__contact-label">Email</span>
            <a href={`mailto:${job.contact.email}`} className="job-card__contact-value job-card__contact-link">
              {job.contact.email}
            </a>
          </div>
          <div className="job-card__contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="job-card__contact-label">Website</span>
            <a href={`https://${job.contact.website}`} target="_blank" rel="noopener noreferrer" className="job-card__contact-value job-card__contact-link">
              {job.contact.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ALL_JOBS
      : ALL_JOBS.filter((j) => j.category === activeCategory);

  return (
    <div className="jobs-page">
      <div className="jobs-page__header">
        <div className="jobs-page__title-row">
          <h1 className="jobs-page__title">
            Current Jobs in
            <span className="jobs-page__city"> {CITY}</span>
          </h1>
          <span className="jobs-page__count">{filtered.length} openings</span>
        </div>
        <p className="jobs-page__subtitle">
          Discover photography &amp; creative jobs at studios, labs, agencies and
          platforms across {CITY}.
        </p>
        <div className="jobs-page__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`jobs-page__filter-btn${activeCategory === cat ? " jobs-page__filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="jobs-page__list">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
