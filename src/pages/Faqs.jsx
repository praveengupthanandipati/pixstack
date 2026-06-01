import React, { useState } from "react";
import "../styles/Faqs.scss";

const FAQ_CATEGORIES = [
  {
    icon: "🌐",
    label: "General",
    subtitle: "About Pixstack and how the platform works",
    items: [
      {
        q: "What is Pixstack?",
        a: "Pixstack is India's first dedicated online marketplace for the photography industry. It connects clients who need photography services with verified photographers, studios, digital labs, album vendors, camera sellers, trainers, and rental services — all in one trusted platform.",
      },
      {
        q: "How does Pixstack work?",
        a: "Pixstack works in three simple steps: (1) Clients search by category and city to browse verified vendor listings. (2) They compare portfolios, ratings, and reviews to shortlist the best fit. (3) They contact the vendor directly through the platform — no middlemen involved.",
      },
      {
        q: "What types of businesses are listed on Pixstack?",
        a: (
          <>
            <p>Pixstack covers the entire photography ecosystem, including:</p>
            <ul>
              <li>Photographers (wedding, candid, portrait, commercial, fashion, etc.)</li>
              <li>Freelance photographers</li>
              <li>Digital print labs</li>
              <li>Photo studios</li>
              <li>Album and photo book vendors</li>
              <li>Camera sellers and dealers</li>
              <li>Photography trainers and institutes</li>
              <li>Camera and equipment rental services</li>
              <li>Studio rental spaces</li>
            </ul>
          </>
        ),
      },
      {
        q: "Is Pixstack available across India?",
        a: "Yes. Pixstack currently covers 50+ cities across India including Hyderabad, Mumbai, Delhi, Bangalore, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, and more. We are rapidly expanding to new cities every month.",
      },
      {
        q: "Is Pixstack a booking platform?",
        a: "Pixstack is a discovery and lead-generation marketplace, not a direct booking platform. Clients use Pixstack to find and contact vendors, but the actual booking and payment is arranged directly between the client and the vendor. This keeps things transparent and flexible for both parties.",
      },
    ],
  },
  {
    icon: "🔍",
    label: "For Clients",
    subtitle: "Finding, comparing and connecting with vendors",
    items: [
      {
        q: "How do I find a photographer in my city?",
        a: "Simply select your city using the city selector at the top of the page, then browse the listings by category — Photographers, Studios, Digital Labs, and more. You can filter results by rating, service type, and location to find the best match for your needs.",
      },
      {
        q: "Can I contact vendors directly on Pixstack?",
        a: "Yes. Every vendor listing on Pixstack has a contact number, email, and an enquiry form. You can send a direct message through the enquiry form, call the number, or email them — whichever is most convenient for you. There is no booking fee or commission charged to clients.",
      },
      {
        q: "How do I know if a vendor is reliable?",
        a: "Pixstack helps you assess vendor reliability in multiple ways: (1) All listings are manually verified before going live. (2) Each vendor has a star rating and client reviews visible on their profile. (3) Vendor portfolios, years of experience, and project counts are displayed so you can make an informed decision.",
      },
      {
        q: "Can I save vendors and compare them?",
        a: "Yes. You can click the heart icon on any listing to add it to your wishlist. This lets you shortlist multiple vendors, compare their portfolios and pricing side by side, and reach out to your favourites.",
      },
      {
        q: "Is it free for clients to use Pixstack?",
        a: "Absolutely. Searching, viewing profiles, sending enquiries, and contacting vendors on Pixstack is 100% free for clients. There are no hidden charges, subscription fees, or booking commissions.",
      },
      {
        q: "How do I leave a review for a vendor I hired?",
        a: "After your project is complete, you can visit the vendor's profile on Pixstack and submit a star rating and written review. Reviews are linked to your verified account to ensure authenticity. We encourage clients to leave honest, detailed feedback to help the community.",
      },
    ],
  },
  {
    icon: "💼",
    label: "For Vendors",
    subtitle: "Listing your business and managing enquiries",
    items: [
      {
        q: "How do I list my business on Pixstack?",
        a: "Click the '+ Business Profile' button at the top of the site or visit the Business Sign Up page. Fill in your business details — name, city, category, phone, and email — verify your mobile number with OTP, and your listing request will be reviewed and published within 24 hours.",
      },
      {
        q: "Is listing my business on Pixstack free?",
        a: "Yes. Creating a basic business listing on Pixstack is completely free. There are no setup fees, listing fees, or commissions on bookings. We believe talented photographers and photography businesses deserve to be discovered without financial barriers.",
      },
      {
        q: "How do client enquiries reach me?",
        a: "When a client submits an enquiry from your listing page, it is delivered directly to your registered email and phone number. You will also receive notifications through the Pixstack dashboard. You can respond directly to the client — Pixstack does not intercept or moderate conversations.",
      },
      {
        q: "Can I manage and update my business profile?",
        a: "Yes. Once logged in to your Pixstack business account, you can update your business name, description, services offered, portfolio photos, videos, working hours, social links, and contact details at any time. Keeping your profile up to date helps you rank higher in search results.",
      },
      {
        q: "How long does it take for my listing to go live?",
        a: "After submitting your business profile, our team reviews it for completeness and accuracy within 24 hours on business days. Once approved, your listing goes live and becomes searchable immediately.",
      },
      {
        q: "Can I have multiple service categories under one listing?",
        a: "Yes. A single Pixstack business profile can include multiple services. For example, a studio can list both 'Photo Studio Services' and 'Studio Rental' under the same profile. You can add all relevant service tags to ensure clients searching for any of those services find your listing.",
      },
    ],
  },
  {
    icon: "📷",
    label: "Photographers",
    subtitle: "Specific to photographers and freelancers",
    items: [
      {
        q: "Can individual freelance photographers register on Pixstack?",
        a: "Absolutely. Pixstack welcomes individual freelance photographers as well as established studios. When creating your profile, simply select 'Freelancer' as your business type. Your profile will appear in both the Photographers and Freelancers categories in your city.",
      },
      {
        q: "How do I showcase my photography portfolio?",
        a: "Your Pixstack business profile includes a dedicated portfolio gallery where you can upload your best photos. You can also add YouTube video links to showcase highlight reels, behind-the-scenes footage, or client testimonials. A strong, varied portfolio significantly increases your enquiry rate.",
      },
      {
        q: "What photography categories can I list my services under?",
        a: (
          <>
            <p>You can list services across a wide range of photography specialisations, including:</p>
            <ul>
              <li>Wedding & Candid Photography</li>
              <li>Pre-wedding & Engagement Shoots</li>
              <li>Portrait & Maternity Photography</li>
              <li>Fashion & Editorial Photography</li>
              <li>Product & Commercial Photography</li>
              <li>Corporate Events & Conferences</li>
              <li>Architectural & Real Estate Photography</li>
              <li>Food & Lifestyle Photography</li>
              <li>Photo Journalism & Documentary</li>
            </ul>
          </>
        ),
      },
      {
        q: "How can I get more enquiries as a photographer?",
        a: "To maximise enquiries on Pixstack: (1) Upload at least 15–20 high-quality portfolio images. (2) Write a detailed, keyword-rich business description. (3) List all your service categories. (4) Keep your working hours and contact information current. (5) Encourage satisfied clients to leave reviews. Profiles with more content and higher ratings consistently receive more enquiries.",
      },
    ],
  },
  {
    icon: "🖨️",
    label: "Digital Labs & Studios",
    subtitle: "For print labs, photo studios and rental spaces",
    items: [
      {
        q: "Can digital print labs list on Pixstack?",
        a: "Yes. Digital print labs are one of the core categories on Pixstack. You can list your lab under 'Digital Print Labs' and detail the types of printing services you offer — photo albums, canvas prints, frames, large-format printing, and more. Clients searching for printing services in your city will discover your listing.",
      },
      {
        q: "What services can a photo studio list?",
        a: "Photo studios can list a full range of in-studio services including portrait sessions, product shoots, food photography, fashion shoots, corporate headshots, newborn and maternity shoots, and post-production services. You can also list the types of backdrops, lighting equipment, and props available.",
      },
      {
        q: "Can I list both studio services and studio rental on one profile?",
        a: "Yes. A single Pixstack business profile supports multiple service categories. A studio can list both 'Photo Studio Services' (for in-house shoots) and 'Studio Rental' (for photographers who want to rent your space) under the same account. This maximises your discoverability to different types of clients.",
      },
      {
        q: "How do I update my lab's pricing and turnaround times?",
        a: "You can update your pricing, turnaround times, and service descriptions at any time from your Pixstack business dashboard. We recommend including indicative price ranges in your description — clients are more likely to enquire when they have a sense of your pricing structure.",
      },
    ],
  },
  {
    icon: "💳",
    label: "Payments & Pricing",
    subtitle: "Costs, commissions and subscription plans",
    items: [
      {
        q: "Is there any fee to list a business on Pixstack?",
        a: "The basic Pixstack business listing is completely free. You can create a profile, upload portfolio images, and receive client enquiries at no cost. Premium plans with enhanced visibility and additional features may be introduced in the future, and existing free listings will always be honoured.",
      },
      {
        q: "Does Pixstack charge commission on bookings?",
        a: "No. Pixstack does not charge any commission or transaction fee on bookings made through the platform. When a client contacts you via Pixstack and you complete a project, 100% of the payment goes directly to you. There is no revenue sharing or middleman fee.",
      },
      {
        q: "How are payments between clients and vendors handled?",
        a: "Pixstack is a discovery marketplace — we facilitate the connection between clients and vendors, but do not process or handle payments. All payment terms, pricing, advances, and final settlements are arranged directly between the client and the vendor. We recommend always agreeing on clear written terms before starting any project.",
      },
      {
        q: "Will Pixstack introduce paid plans in the future?",
        a: "We may introduce optional premium plans that offer enhanced features like priority placement in search results, verified badges, and advanced analytics. However, free listings will always remain available, and no existing feature will be locked behind a paywall without prior notice to vendors.",
      },
    ],
  },
  {
    icon: "👤",
    label: "Account & Profile",
    subtitle: "Login, OTP, and account management",
    items: [
      {
        q: "How do I create an account on Pixstack?",
        a: "You can sign up on Pixstack using your mobile number. Enter your 10-digit Indian mobile number, receive a 6-digit OTP via SMS, and verify it to create your account. For business accounts, you will also need to provide your business name, city, and email during sign-up.",
      },
      {
        q: "How does OTP login work?",
        a: "Pixstack uses a passwordless, OTP-based login system for security and convenience. When you want to log in, enter your registered mobile number and you will receive a 6-digit OTP via SMS. Enter the OTP within 30 seconds to authenticate your session. No passwords to remember — just your phone.",
      },
      {
        q: "Can I log in with Google or Facebook?",
        a: "Yes. Client accounts can sign up and log in using Google or Facebook as an alternative to the OTP method. Business accounts are authenticated via mobile OTP only, to ensure that every vendor account is linked to a verified phone number.",
      },
      {
        q: "Can I have both a client account and a business account?",
        a: "Yes. You can have a separate client account and a business account on Pixstack, even using the same mobile number. The client and business dashboards are separate interfaces with different features. You can switch between them as needed.",
      },
      {
        q: "How do I update my profile or contact details?",
        a: "Log in to your Pixstack account, go to your profile or business dashboard, and edit your details directly. Changes to your business listing take effect immediately. If you need to change your registered mobile number, please contact our support team as this requires identity re-verification.",
      },
    ],
  },
  {
    icon: "🛡️",
    label: "Safety & Trust",
    subtitle: "Verification, reviews and data safety",
    items: [
      {
        q: "How does Pixstack verify businesses?",
        a: "Every business listing on Pixstack goes through a manual review process before it is published. Our team checks that the business name, contact details, location, and category are accurate and consistent. We also check portfolio images for quality and authenticity. Only listings that pass this review are published as verified listings.",
      },
      {
        q: "What if I encounter a fake or misleading listing?",
        a: "If you come across a listing that appears fake, misleading, or fraudulent, please report it immediately using the 'Report' button on the listing page or email our support team. We take all reports seriously and will investigate and remove any listing that violates our platform guidelines within 24 hours.",
      },
      {
        q: "How are client reviews verified on Pixstack?",
        a: "Reviews on Pixstack are tied to verified client accounts authenticated by mobile number. This means anonymous or fake reviews cannot be posted. We also monitor reviews for unusual patterns and may remove reviews that appear to violate our community guidelines. Vendors cannot delete or edit client reviews.",
      },
      {
        q: "Is my personal information safe on Pixstack?",
        a: "Yes. Pixstack takes data privacy seriously. Your personal details — name, email, and mobile number — are stored securely and are never sold to third parties. Your contact information is only shared with vendors when you choose to send an enquiry. Please review our Privacy Policy for full details on how your data is used and protected.",
      },
    ],
  },
];

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState({});

  const toggle = (itemIdx) => {
    const key = `${activeCategory}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpen = (itemIdx) => !!openItems[`${activeCategory}-${itemIdx}`];

  const current = FAQ_CATEGORIES[activeCategory];

  return (
    <div className="faqs">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="faqs__hero">
        <span className="faqs__hero-eyebrow">Help Centre</span>
        <h1 className="faqs__hero-title">
          Frequently Asked <span>Questions</span>
        </h1>
        <p className="faqs__hero-sub">
          Everything you need to know about Pixstack — for clients and businesses.
        </p>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="faqs__body">

        {/* Sidebar — category selector */}
        <nav className="faqs__sidebar" aria-label="FAQ categories">
          <div className="faqs__cat-list">
            {FAQ_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.label}
                className={`faqs__cat-btn${activeCategory === idx ? " is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(idx);
                  setOpenItems({});
                }}
              >
                <span className="faqs__cat-label">{cat.label}</span>
                <span className="faqs__cat-count">{cat.items.length}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main — accordion */}
        <div className="faqs__main">
          <div className="faqs__cat-header">
            <h2 className="faqs__cat-title">
              {current.icon}&nbsp; {current.label}
            </h2>
            <p className="faqs__cat-subtitle">{current.subtitle}</p>
          </div>

          <div className="faqs__accordion">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className={`faqs__item${isOpen(idx) ? " is-open" : ""}`}
              >
                <button
                  className="faqs__question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen(idx)}
                >
                  <span className="faqs__q-text">{item.q}</span>
                  <span className="faqs__chevron">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className={`faqs__answer-wrap${isOpen(idx) ? " is-open" : ""}`}>
                  <div className="faqs__answer">
                    {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Still have questions? ─────────────────────────────────────────── */}
      <div className="faqs__contact">
        <div className="faqs__contact-inner">
          <div className="faqs__contact-text">
            <h3 className="faqs__contact-title">Still have questions?</h3>
            <p className="faqs__contact-sub">
              Can't find the answer you're looking for? Our support team is happy to help.
            </p>
          </div>
          <a href="mailto:support@pixstack.in" className="faqs__contact-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>

    </div>
  );
};

export default Faqs;
