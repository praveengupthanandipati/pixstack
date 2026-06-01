import React from "react";
import { Link } from "react-router-dom";
import "../styles/Legal.scss";

const SECTIONS = [
  { id: "s1",  num: "01", title: "Acceptance of Terms" },
  { id: "s2",  num: "02", title: "About Pixstack" },
  { id: "s3",  num: "03", title: "Eligibility" },
  { id: "s4",  num: "04", title: "User Accounts" },
  { id: "s5",  num: "05", title: "Use of the Platform" },
  { id: "s6",  num: "06", title: "Vendor Listings & Business Profiles" },
  { id: "s7",  num: "07", title: "Client Responsibilities" },
  { id: "s8",  num: "08", title: "Prohibited Activities" },
  { id: "s9",  num: "09", title: "Intellectual Property" },
  { id: "s10", num: "10", title: "User-Submitted Content" },
  { id: "s11", num: "11", title: "Reviews & Ratings" },
  { id: "s12", num: "12", title: "Payments & Transactions" },
  { id: "s13", num: "13", title: "Third-Party Links & Services" },
  { id: "s14", num: "14", title: "Disclaimers & Limitation of Liability" },
  { id: "s15", num: "15", title: "Indemnification" },
  { id: "s16", num: "16", title: "Termination" },
  { id: "s17", num: "17", title: "Governing Law & Disputes" },
  { id: "s18", num: "18", title: "Changes to These Terms" },
  { id: "s19", num: "19", title: "Contact Us" },
];

const Legalterms = () => (
  <div className="legal">

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <div className="legal__hero">
      <div className="legal__hero-inner">
        <span className="legal__hero-eyebrow">Legal</span>
        <h1 className="legal__hero-title">Terms &amp; Conditions</h1>
        <div className="legal__hero-meta">
          <span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Effective Date: 1 June 2025
          </span>
          <span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Last Updated: 1 June 2025
          </span>
          <span>Applies to: pixstack.in</span>
        </div>
      </div>
    </div>

    <div className="legal__outer">

      {/* ── Table of Contents ─────────────────────────────────────────────── */}
      <div className="legal__toc">
        <p className="legal__toc-title">Contents</p>
        <ul className="legal__toc-list">
          {SECTIONS.map((s) => (
            <li key={s.id} className="legal__toc-item">
              <a href={`#${s.id}`} className="legal__toc-link" data-num={s.num}>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Document ──────────────────────────────────────────────────────── */}
      <div className="legal__doc">

        {/* 01 */}
        <section className="legal__section" id="s1">
          <p className="legal__section-num">01</p>
          <h2 className="legal__section-heading">Acceptance of Terms</h2>
          <p className="legal__p">
            Please read these Terms &amp; Conditions ("Terms", "Agreement") carefully
            before using the Pixstack platform, accessible at{" "}
            <strong>pixstack.in</strong> and its associated mobile or web applications
            (collectively the "Platform"). These Terms constitute a legally binding
            agreement between you ("User", "Client", "Vendor") and{" "}
            <strong>Pixstack Technologies</strong> ("Pixstack", "we", "our", "us").
          </p>
          <p className="legal__p">
            By accessing or using the Platform in any way — including browsing,
            creating an account, listing a business, submitting an enquiry, or posting
            a review — you acknowledge that you have read, understood, and agree to be
            bound by these Terms and our{" "}
            <Link to="/privacy">Privacy Policy</Link> and{" "}
            <Link to="/cookies-policy">Cookies Policy</Link>, all of which are
            incorporated herein by reference.
          </p>
          <div className="legal__highlight">
            <p>
              <strong>If you do not agree to these Terms, you must not access or
              use the Pixstack Platform.</strong> Your continued use of the Platform
              following the posting of revised Terms constitutes your acceptance of
              those changes.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="legal__section" id="s2">
          <p className="legal__section-num">02</p>
          <h2 className="legal__section-heading">About Pixstack</h2>
          <p className="legal__p">
            Pixstack is India's dedicated online marketplace for the photography
            industry. The Platform connects clients who require photography-related
            services with verified photographers, studios, digital print labs, album
            vendors, camera dealers, photography trainers, camera rental services,
            and studio rental providers (collectively "Vendors").
          </p>
          <p className="legal__p">
            Pixstack acts solely as an <strong>intermediary platform</strong> that
            facilitates discovery and communication between clients and vendors. Pixstack
            is not a party to any contract, booking, or financial transaction entered
            into between a client and a vendor through the Platform. We do not employ
            vendors, provide photography services, or process payments on behalf of
            any party.
          </p>
        </section>

        {/* 03 */}
        <section className="legal__section" id="s3">
          <p className="legal__section-num">03</p>
          <h2 className="legal__section-heading">Eligibility</h2>
          <p className="legal__p">
            To access and use the Pixstack Platform, you must:
          </p>
          <ul className="legal__ul">
            <li>Be at least <strong>18 years of age</strong>.</li>
            <li>
              Have the legal capacity to enter into a binding agreement under applicable
              Indian law.
            </li>
            <li>
              Not have been previously suspended or removed from the Platform by
              Pixstack for violating these Terms or any other policy.
            </li>
            <li>
              Provide accurate, complete, and current information when creating an
              account or listing a business.
            </li>
          </ul>
          <p className="legal__p">
            Vendors who are businesses or companies represent that they are duly
            authorised to act on behalf of the entity and to bind that entity to
            these Terms. Use of the Platform by minors is strictly prohibited.
          </p>
        </section>

        {/* 04 */}
        <section className="legal__section" id="s4">
          <p className="legal__section-num">04</p>
          <h2 className="legal__section-heading">User Accounts</h2>
          <p className="legal__p">
            To access certain features of the Platform — including submitting enquiries,
            leaving reviews, and managing a business profile — you must register for a
            Pixstack account by verifying your mobile number via OTP.
          </p>
          <p className="legal__p">
            By creating an account, you agree to:
          </p>
          <ul className="legal__ul">
            <li>Provide truthful, accurate, and complete registration information.</li>
            <li>
              Keep your account information up to date, particularly your contact
              details and business information.
            </li>
            <li>
              Maintain the confidentiality and security of your account. You are
              solely responsible for all activities that occur under your account.
            </li>
            <li>
              Notify Pixstack immediately at{" "}
              <a href="mailto:support@pixstack.in">support@pixstack.in</a> if you
              suspect any unauthorised use of your account.
            </li>
            <li>
              Not share your login credentials with any third party or allow others
              to access your account.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack reserves the right to suspend or terminate any account that is
            found to contain false, misleading, or fraudulent information, or that
            violates these Terms.
          </p>
        </section>

        {/* 05 */}
        <section className="legal__section" id="s5">
          <p className="legal__section-num">05</p>
          <h2 className="legal__section-heading">Use of the Platform</h2>
          <p className="legal__p">
            The Platform is provided for lawful purposes only. You agree to use
            Pixstack solely to connect with photography service providers or to
            promote your photography-related business to potential clients.
          </p>
          <p className="legal__p">
            You agree not to use the Platform for any purpose that is:
          </p>
          <ul className="legal__ul">
            <li>Unlawful, harmful, threatening, abusive, harassing, or defamatory.</li>
            <li>
              Misleading, deceptive, or likely to deceive other users or Pixstack.
            </li>
            <li>
              In violation of any applicable law, regulation, or the rights of any
              third party, including intellectual property rights and privacy rights.
            </li>
            <li>
              Disruptive to the normal operation of the Platform or infrastructure
              supporting it.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack grants you a limited, non-exclusive, non-transferable, revocable
            licence to access and use the Platform strictly in accordance with these
            Terms. No rights or licences are granted except as expressly set out
            in these Terms.
          </p>
        </section>

        {/* 06 */}
        <section className="legal__section" id="s6">
          <p className="legal__section-num">06</p>
          <h2 className="legal__section-heading">Vendor Listings &amp; Business Profiles</h2>
          <p className="legal__p">
            Vendors may create a business profile on Pixstack to promote their
            photography services. By submitting a listing, the vendor represents
            and warrants that:
          </p>
          <ul className="legal__ul">
            <li>
              All information provided — including business name, address, contact
              details, services, and portfolio content — is accurate, truthful, and
              not misleading.
            </li>
            <li>
              They hold all necessary licences, registrations, and permissions
              required to operate their business and provide the services listed.
            </li>
            <li>
              Portfolio images and videos uploaded are original works owned by the
              vendor or used with the appropriate permissions and licences.
            </li>
            <li>
              They will keep their business information current and will promptly
              remove or update any outdated or inaccurate information.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack reserves the right to review, approve, reject, edit, or remove
            any business listing at its sole discretion, including listings that
            violate these Terms, contain inaccurate information, or are deemed
            inappropriate for the Platform.
          </p>
          <p className="legal__p">
            A basic Pixstack listing is free. Pixstack may introduce optional paid
            plans with enhanced features in the future, and their use will be governed
            by separate terms communicated at the time of purchase.
          </p>
        </section>

        {/* 07 */}
        <section className="legal__section" id="s7">
          <p className="legal__section-num">07</p>
          <h2 className="legal__section-heading">Client Responsibilities</h2>
          <p className="legal__p">
            Clients using Pixstack to discover and contact vendors are responsible for:
          </p>
          <ul className="legal__ul">
            <li>
              Conducting their own due diligence before hiring any vendor, including
              verifying credentials, confirming pricing, and reviewing portfolios.
            </li>
            <li>
              Communicating clearly and professionally with vendors regarding project
              requirements, timelines, deliverables, and payment.
            </li>
            <li>
              Entering into a clear written agreement directly with the vendor before
              commencing any project. Pixstack is not a party to any such agreement.
            </li>
            <li>
              Handling all payment arrangements — including advances, milestones, and
              final payments — directly with the vendor. Pixstack does not process
              or hold payments on behalf of either party.
            </li>
            <li>
              Submitting only honest and accurate reviews based on their genuine
              experience with the vendor.
            </li>
          </ul>
        </section>

        {/* 08 */}
        <section className="legal__section" id="s8">
          <p className="legal__section-num">08</p>
          <h2 className="legal__section-heading">Prohibited Activities</h2>
          <p className="legal__p">
            The following activities are strictly prohibited on the Pixstack Platform.
            Engaging in any of these activities may result in immediate account
            suspension or termination, and may expose you to legal liability:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Fake or duplicate listings:</strong> Creating multiple business
              profiles for the same business, or creating listings for businesses you
              do not own or represent.
            </li>
            <li>
              <strong>False information:</strong> Providing inaccurate business details,
              fake contact numbers, fabricated reviews, or misleading portfolio content.
            </li>
            <li>
              <strong>Spam &amp; unsolicited communication:</strong> Using the Platform's
              enquiry or messaging features to send bulk, automated, or unsolicited
              commercial messages.
            </li>
            <li>
              <strong>Scraping &amp; data harvesting:</strong> Using automated bots,
              scrapers, crawlers, or other tools to extract data from the Platform
              without Pixstack's express written permission.
            </li>
            <li>
              <strong>Intellectual property infringement:</strong> Uploading or sharing
              content — images, videos, text — that infringes the copyright, trademark,
              or other intellectual property rights of any third party.
            </li>
            <li>
              <strong>Platform manipulation:</strong> Attempting to manipulate search
              rankings, review scores, or any other feature of the Platform through
              artificial means.
            </li>
            <li>
              <strong>Harmful content:</strong> Posting offensive, obscene, violent,
              or otherwise inappropriate content on the Platform.
            </li>
            <li>
              <strong>Circumventing the Platform:</strong> Encouraging users met through
              Pixstack to conduct all future business exclusively off-platform solely
              to avoid Pixstack's terms; while direct contact is permitted, actively
              deceptive circumvention is not.
            </li>
          </ul>
        </section>

        {/* 09 */}
        <section className="legal__section" id="s9">
          <p className="legal__section-num">09</p>
          <h2 className="legal__section-heading">Intellectual Property</h2>
          <p className="legal__p">
            The Pixstack name, logo, brand identity, website design, user interface,
            software code, databases, and all original content created by Pixstack
            (collectively "Pixstack IP") are the exclusive intellectual property of
            Pixstack Technologies and are protected by Indian and international
            copyright, trademark, and other intellectual property laws.
          </p>
          <p className="legal__p">
            You may not copy, reproduce, modify, distribute, publish, display,
            perform, or create derivative works of any Pixstack IP without our
            express prior written consent. Unauthorised use of Pixstack IP may
            result in civil and criminal liability.
          </p>
          <p className="legal__p">
            Vendors retain ownership of the original photographs, videos, and
            written content they upload to their Pixstack profiles. By uploading
            content to the Platform, vendors grant Pixstack a non-exclusive,
            royalty-free, worldwide licence to display, reproduce, and distribute
            that content solely for the purpose of operating and promoting the
            Pixstack Platform.
          </p>
        </section>

        {/* 10 */}
        <section className="legal__section" id="s10">
          <p className="legal__section-num">10</p>
          <h2 className="legal__section-heading">User-Submitted Content</h2>
          <p className="legal__p">
            Users may submit content to the Platform including business descriptions,
            portfolio images, videos, and other materials. By submitting content,
            you represent and warrant that:
          </p>
          <ul className="legal__ul">
            <li>You own the content or have the right to submit it.</li>
            <li>
              The content does not infringe any third-party intellectual property,
              privacy, or other rights.
            </li>
            <li>
              The content is accurate, not misleading, and complies with these Terms
              and all applicable laws.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack reserves the right to remove any user-submitted content at its
            sole discretion, without notice, if it determines the content violates
            these Terms or is otherwise harmful to the Platform or its users.
            Pixstack is not responsible for any user-submitted content and does not
            endorse any views expressed by users.
          </p>
        </section>

        {/* 11 */}
        <section className="legal__section" id="s11">
          <p className="legal__section-num">11</p>
          <h2 className="legal__section-heading">Reviews &amp; Ratings</h2>
          <p className="legal__p">
            Pixstack allows clients to post reviews and star ratings for vendors they
            have engaged with through the Platform. Reviews are an important part of
            the Pixstack trust ecosystem and must be genuine, honest, and based on
            first-hand experience.
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Authenticity:</strong> Reviews must reflect the reviewer's
              genuine experience. Fake, incentivised, or misleading reviews are
              strictly prohibited.
            </li>
            <li>
              <strong>No manipulation:</strong> Vendors must not solicit, pressure,
              or offer incentives for positive reviews, or discourage clients from
              leaving honest negative reviews.
            </li>
            <li>
              <strong>No retaliation:</strong> Vendors must not retaliate against
              clients who leave negative reviews.
            </li>
            <li>
              <strong>Removal:</strong> Pixstack may remove reviews that violate
              these Terms, contain prohibited content, or are suspected to be
              fraudulent. Vendors cannot request the deletion of reviews simply
              because they disagree with the content.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack does not verify that reviewers have actually transacted with
            the vendor unless the Platform implements a verified-purchase mechanism.
            Reviews represent the personal opinion of the reviewer and do not
            constitute an endorsement by Pixstack.
          </p>
        </section>

        {/* 12 */}
        <section className="legal__section" id="s12">
          <p className="legal__section-num">12</p>
          <h2 className="legal__section-heading">Payments &amp; Transactions</h2>
          <p className="legal__p">
            Pixstack is a <strong>discovery and lead-generation marketplace only</strong>.
            The Platform does not facilitate, process, hold, or guarantee any payment
            transactions between clients and vendors.
          </p>
          <p className="legal__p">
            All financial arrangements — including advance payments, service fees,
            cancellation refunds, and final settlements — are made directly between
            the client and the vendor, entirely outside the Pixstack Platform.
            Pixstack bears no responsibility for any financial disputes, losses,
            fraud, or chargebacks arising from such transactions.
          </p>
          <p className="legal__p">
            We strongly recommend that both parties agree on clear, written payment
            terms before any project commences. Pixstack is not liable for any failure
            of a vendor to deliver services or for a client's failure to make payment.
          </p>
          <div className="legal__highlight">
            <p>
              <strong>Important:</strong> Pixstack will never ask you to make a payment
              to "verify" your listing or to receive client leads. If you receive such
              a request, please report it immediately to{" "}
              <a href="mailto:support@pixstack.in">support@pixstack.in</a>.
            </p>
          </div>
        </section>

        {/* 13 */}
        <section className="legal__section" id="s13">
          <p className="legal__section-num">13</p>
          <h2 className="legal__section-heading">Third-Party Links &amp; Services</h2>
          <p className="legal__p">
            The Pixstack Platform may contain links to third-party websites, social
            media platforms, or services (such as Google Maps, YouTube, or vendor
            social media profiles). These links are provided for convenience and
            informational purposes only.
          </p>
          <p className="legal__p">
            Pixstack does not endorse, control, or assume any responsibility for the
            content, privacy policies, or practices of any third-party websites or
            services. Your use of such third-party sites is governed by their
            respective terms and privacy policies. Pixstack is not liable for any
            loss or damage arising from your use of third-party services accessed
            through the Platform.
          </p>
        </section>

        {/* 14 */}
        <section className="legal__section" id="s14">
          <p className="legal__section-num">14</p>
          <h2 className="legal__section-heading">Disclaimers &amp; Limitation of Liability</h2>
          <p className="legal__p">
            <strong>Platform provided "as is":</strong> The Pixstack Platform is
            provided on an "as is" and "as available" basis without warranties of
            any kind, whether express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose,
            or non-infringement. We do not warrant that the Platform will be
            uninterrupted, error-free, secure, or free of viruses or other harmful
            components.
          </p>
          <p className="legal__p">
            <strong>No guarantee of results:</strong> Pixstack does not guarantee
            that using the Platform will result in any specific number of enquiries,
            bookings, or revenue for vendors, or that clients will find a vendor that
            meets their specific requirements.
          </p>
          <p className="legal__p">
            <strong>Vendor conduct:</strong> Pixstack is not responsible for the
            actions, omissions, quality of work, conduct, or professional standards
            of any vendor listed on the Platform. All reliance on vendor listings
            is at the client's own risk.
          </p>
          <p className="legal__p">
            <strong>Limitation of liability:</strong> To the fullest extent permitted
            by applicable law, Pixstack and its directors, employees, partners, and
            agents shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages — including loss of profits, data,
            goodwill, or business opportunity — arising out of or in connection with
            your use of or inability to use the Platform, even if advised of the
            possibility of such damages.
          </p>
        </section>

        {/* 15 */}
        <section className="legal__section" id="s15">
          <p className="legal__section-num">15</p>
          <h2 className="legal__section-heading">Indemnification</h2>
          <p className="legal__p">
            You agree to defend, indemnify, and hold harmless Pixstack Technologies
            and its officers, directors, employees, contractors, agents, licensors,
            and partners from and against any and all claims, damages, obligations,
            losses, liabilities, costs, and expenses (including reasonable legal fees)
            arising out of or related to:
          </p>
          <ul className="legal__ul">
            <li>Your use of or inability to use the Platform.</li>
            <li>Your violation of any provision of these Terms.</li>
            <li>
              Your violation of any third-party rights, including intellectual
              property rights, privacy rights, or any applicable law or regulation.
            </li>
            <li>
              Any content you submit, post, or transmit through the Platform,
              including your business listing, portfolio, or reviews.
            </li>
            <li>
              Any dispute between you and another user (client or vendor) arising
              from transactions or interactions facilitated through the Platform.
            </li>
          </ul>
        </section>

        {/* 16 */}
        <section className="legal__section" id="s16">
          <p className="legal__section-num">16</p>
          <h2 className="legal__section-heading">Termination</h2>
          <p className="legal__p">
            Pixstack reserves the right to suspend or permanently terminate your
            access to the Platform, with or without notice, at its sole discretion,
            for any reason including but not limited to:
          </p>
          <ul className="legal__ul">
            <li>Violation of any provision of these Terms.</li>
            <li>Providing false, inaccurate, or misleading information.</li>
            <li>Engaging in any prohibited activity as described in Section 08.</li>
            <li>
              Conduct that Pixstack determines, in its sole discretion, is harmful
              to the Platform, its users, or its reputation.
            </li>
          </ul>
          <p className="legal__p">
            You may terminate your account at any time by contacting us at{" "}
            <a href="mailto:support@pixstack.in">support@pixstack.in</a> and
            requesting account deletion. Upon termination, your right to use the
            Platform ceases immediately. Provisions of these Terms that by their
            nature should survive termination — including intellectual property,
            disclaimers, indemnification, and dispute resolution — shall survive.
          </p>
        </section>

        {/* 17 */}
        <section className="legal__section" id="s17">
          <p className="legal__section-num">17</p>
          <h2 className="legal__section-heading">Governing Law &amp; Dispute Resolution</h2>
          <p className="legal__p">
            These Terms shall be governed by and construed in accordance with the
            laws of <strong>India</strong>, without regard to its conflict of law
            provisions. Any disputes arising out of or in connection with these Terms
            or your use of the Pixstack Platform shall be subject to the exclusive
            jurisdiction of the courts of <strong>Hyderabad, Telangana, India</strong>.
          </p>
          <p className="legal__p">
            <strong>Dispute resolution process:</strong> Before initiating any formal
            legal proceedings, both parties agree to attempt to resolve the dispute
            amicably by contacting Pixstack at{" "}
            <a href="mailto:legal@pixstack.in">legal@pixstack.in</a>. Pixstack will
            use reasonable efforts to resolve the dispute within 30 days of receiving
            written notice.
          </p>
          <p className="legal__p">
            If the dispute cannot be resolved amicably within 30 days, it may be
            referred to binding arbitration under the Arbitration and Conciliation
            Act, 1996 of India. The arbitration shall be conducted in English,
            in Hyderabad, Telangana.
          </p>
        </section>

        {/* 18 */}
        <section className="legal__section" id="s18">
          <p className="legal__section-num">18</p>
          <h2 className="legal__section-heading">Changes to These Terms</h2>
          <p className="legal__p">
            Pixstack reserves the right to revise, modify, or replace these Terms at
            any time. When we make material changes, we will update the{" "}
            <strong>"Last Updated"</strong> date at the top of this page. Where
            appropriate, we will also notify registered users by email or via a
            prominent notice on the Platform.
          </p>
          <p className="legal__p">
            It is your responsibility to review these Terms periodically. Your
            continued use of the Platform after any revised Terms are posted
            constitutes your acceptance of those changes. If you disagree with
            the revised Terms, you must stop using the Platform and may request
            account deletion as described in Section 16.
          </p>
        </section>

        {/* 19 */}
        <section className="legal__section" id="s19">
          <p className="legal__section-num">19</p>
          <h2 className="legal__section-heading">Contact Us</h2>
          <p className="legal__p">
            If you have any questions, concerns, or notices regarding these Terms
            &amp; Conditions, please contact us through any of the following channels:
          </p>
          <ul className="legal__ul">
            <li><strong>General Enquiries:</strong> support@pixstack.in</li>
            <li><strong>Legal &amp; Compliance:</strong> legal@pixstack.in</li>
            <li><strong>Privacy Matters:</strong> privacy@pixstack.in</li>
            <li>
              <strong>Postal Address:</strong> Pixstack Technologies, Hyderabad,
              Telangana – 500034, India
            </li>
          </ul>
          <p className="legal__p">
            You may also visit our <Link to="/faqs">FAQs page</Link> for answers
            to common questions, or refer to our{" "}
            <Link to="/privacy">Privacy Policy</Link> and{" "}
            <Link to="/cookies-policy">Cookies Policy</Link> for information on
            how we handle your data.
          </p>
        </section>

        {/* Contact box */}
        <div className="legal__contact-box">
          <h3 className="legal__contact-title">Questions about these Terms?</h3>
          <p className="legal__contact-sub">
            Our legal team is available to help clarify any clause or concern
            regarding your use of the Pixstack platform.
          </p>
          <a href="mailto:legal@pixstack.in" className="legal__contact-email">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            legal@pixstack.in
          </a>
        </div>

      </div>
    </div>
  </div>
);

export default Legalterms;
