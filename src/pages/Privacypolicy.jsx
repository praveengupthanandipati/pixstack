import React from "react";
import { Link } from "react-router-dom";
import "../styles/Legal.scss";

const SECTIONS = [
  { id: "s1",  num: "01", title: "Introduction" },
  { id: "s2",  num: "02", title: "Information We Collect" },
  { id: "s3",  num: "03", title: "How We Use Your Information" },
  { id: "s4",  num: "04", title: "Legal Basis for Processing" },
  { id: "s5",  num: "05", title: "Information We Share" },
  { id: "s6",  num: "06", title: "Data Retention" },
  { id: "s7",  num: "07", title: "Your Rights & Choices" },
  { id: "s8",  num: "08", title: "Data Security" },
  { id: "s9",  num: "09", title: "Children's Privacy" },
  { id: "s10", num: "10", title: "Third-Party Services" },
  { id: "s11", num: "11", title: "Cookies & Tracking" },
  { id: "s12", num: "12", title: "Changes to This Policy" },
  { id: "s13", num: "13", title: "Grievance Officer" },
  { id: "s14", num: "14", title: "Contact Us" },
];

const Privacypolicy = () => (
  <div className="legal">

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <div className="legal__hero">
      <div className="legal__hero-inner">
        <span className="legal__hero-eyebrow">Legal</span>
        <h1 className="legal__hero-title">Privacy Policy</h1>
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
          <h2 className="legal__section-heading">Introduction</h2>
          <p className="legal__p">
            <strong>Pixstack Technologies</strong> ("Pixstack", "we", "our", "us")
            operates the online marketplace at <strong>pixstack.in</strong> and its
            associated web and mobile applications (the "Platform"). We are committed
            to protecting the privacy and personal data of everyone who uses our
            Platform — whether you are a client searching for photography services
            or a vendor listing your business.
          </p>
          <p className="legal__p">
            This Privacy Policy explains what personal data we collect, why we collect
            it, how we use and protect it, and what rights you have over your
            information. This policy applies to all users of the Platform and is
            compliant with the <strong>Information Technology Act, 2000</strong> and
            the <strong>Information Technology (Reasonable Security Practices and
            Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>
            of India.
          </p>
          <div className="legal__highlight">
            <p>
              By using the Pixstack Platform, you consent to the collection and use
              of your personal data as described in this Privacy Policy. If you do
              not agree, please discontinue your use of the Platform immediately.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="legal__section" id="s2">
          <p className="legal__section-num">02</p>
          <h2 className="legal__section-heading">Information We Collect</h2>
          <p className="legal__p">
            We collect information in the following ways:
          </p>
          <p className="legal__p"><strong>A. Information you provide directly:</strong></p>
          <ul className="legal__ul">
            <li>
              <strong>Account registration:</strong> Mobile number (verified via
              OTP), name, and email address when you create a client or business
              account.
            </li>
            <li>
              <strong>Business profile:</strong> Business name, category, city,
              address, phone number, email, website URL, service descriptions,
              portfolio images, videos, working hours, and social media links.
            </li>
            <li>
              <strong>Enquiry forms:</strong> Name, phone number, email address, and
              the content of messages submitted to vendors through the Platform.
            </li>
            <li>
              <strong>Reviews &amp; ratings:</strong> Written reviews, star ratings,
              and associated account information when you submit feedback about a vendor.
            </li>
            <li>
              <strong>Support communications:</strong> Information you provide when
              contacting Pixstack's support team, including the content of your
              messages and any attachments.
            </li>
          </ul>
          <p className="legal__p"><strong>B. Information collected automatically:</strong></p>
          <ul className="legal__ul">
            <li>
              <strong>Usage data:</strong> Pages visited, search queries, categories
              browsed, listings viewed, time spent on each page, and other interaction
              data collected through analytics tools.
            </li>
            <li>
              <strong>Device &amp; technical data:</strong> IP address, browser type
              and version, operating system, device identifiers, screen resolution,
              and referral URL.
            </li>
            <li>
              <strong>Location data:</strong> Your selected city or approximate
              location inferred from your IP address, used to show you relevant
              local vendors. We do not collect precise GPS location without your
              explicit consent.
            </li>
            <li>
              <strong>Cookies &amp; tracking:</strong> Data collected via cookies,
              web beacons, and similar technologies. See our{" "}
              <Link to="/cookies-policy">Cookies Policy</Link> for full details.
            </li>
          </ul>
          <p className="legal__p"><strong>C. Information from third parties:</strong></p>
          <ul className="legal__ul">
            <li>
              <strong>Social login:</strong> If you log in using Google or Facebook,
              we receive your name, email address, and profile picture from that
              service, subject to your privacy settings on that platform.
            </li>
            <li>
              <strong>Analytics providers:</strong> Aggregated and anonymised
              behavioural data from services such as Google Analytics.
            </li>
          </ul>
        </section>

        {/* 03 */}
        <section className="legal__section" id="s3">
          <p className="legal__section-num">03</p>
          <h2 className="legal__section-heading">How We Use Your Information</h2>
          <p className="legal__p">
            Pixstack uses your personal data for the following purposes:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Account management:</strong> To create, authenticate, and
              maintain your account, and to verify your identity via OTP when you
              log in or sign up.
            </li>
            <li>
              <strong>Platform functionality:</strong> To display relevant vendor
              listings, personalise search results based on your selected city, and
              enable you to send and receive enquiries.
            </li>
            <li>
              <strong>Business listings:</strong> To publish and display your
              business profile, portfolio, and contact details to clients searching
              for photography services on Pixstack.
            </li>
            <li>
              <strong>Communication:</strong> To send you transactional messages —
              such as OTP verification codes, enquiry confirmations, and account
              notifications — and, with your consent, marketing or promotional
              communications about Pixstack's features and partner offers.
            </li>
            <li>
              <strong>Reviews:</strong> To publish your review and rating on a
              vendor's profile, linked to your verified account, to help maintain
              the integrity of the review system.
            </li>
            <li>
              <strong>Analytics &amp; improvement:</strong> To analyse how users
              interact with the Platform, identify popular categories, understand
              traffic patterns, and use these insights to improve the user experience
              and Platform features.
            </li>
            <li>
              <strong>Safety &amp; security:</strong> To detect, investigate, and
              prevent fraud, abuse, spam, and other prohibited activities on the
              Platform, and to protect the rights of Pixstack, its users, and
              third parties.
            </li>
            <li>
              <strong>Legal compliance:</strong> To comply with applicable laws,
              regulatory obligations, legal processes, or enforceable government
              requests.
            </li>
            <li>
              <strong>Marketing:</strong> To show you relevant advertisements and
              promotions on Pixstack and on third-party platforms (such as Google
              and Facebook), based on your use of the Platform. You can opt out at
              any time as described in Section 07.
            </li>
          </ul>
        </section>

        {/* 04 */}
        <section className="legal__section" id="s4">
          <p className="legal__section-num">04</p>
          <h2 className="legal__section-heading">Legal Basis for Processing</h2>
          <p className="legal__p">
            Pixstack processes your personal data on the following legal bases under
            Indian law (including the Information Technology Act, 2000 and associated
            Rules):
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Consent:</strong> For optional communications such as
              marketing emails and SMS, and for the placement of non-essential
              cookies on your device. You may withdraw consent at any time without
              affecting the lawfulness of processing prior to withdrawal.
            </li>
            <li>
              <strong>Contractual necessity:</strong> To perform our obligations
              to you — such as maintaining your account, publishing your business
              listing, and facilitating enquiries — as part of the terms of using
              the Platform.
            </li>
            <li>
              <strong>Legitimate interests:</strong> For analytics, Platform
              improvement, fraud prevention, and security, where these interests
              are not overridden by your privacy rights.
            </li>
            <li>
              <strong>Legal obligation:</strong> When required to comply with
              applicable Indian laws, regulations, court orders, or law enforcement
              requests.
            </li>
          </ul>
        </section>

        {/* 05 */}
        <section className="legal__section" id="s5">
          <p className="legal__section-num">05</p>
          <h2 className="legal__section-heading">Information We Share</h2>
          <p className="legal__p">
            Pixstack does <strong>not sell your personal data</strong> to any third
            party. We may share your information only in the following limited
            circumstances:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>With vendors (for clients):</strong> When you submit an
              enquiry through the Platform, your name, phone number, email address,
              and message are shared with the vendor you are contacting. This is
              necessary to facilitate the connection.
            </li>
            <li>
              <strong>With clients (for vendors):</strong> Your publicly-listed
              business information — name, city, category, services, contact details,
              portfolio, and reviews — is visible to all Platform users and visitors.
            </li>
            <li>
              <strong>Service providers:</strong> We engage trusted third-party
              service providers to help us operate the Platform, including cloud
              hosting providers, SMS/OTP delivery services, analytics platforms
              (e.g., Google Analytics), and email delivery services. These providers
              process data only on our behalf and under strict data processing
              agreements.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose your information
              when required to do so by law, court order, or government authority,
              or when we believe in good faith that disclosure is necessary to
              protect the safety of any person, prevent fraud, or enforce our
              legal rights.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger,
              acquisition, restructuring, or sale of all or part of Pixstack's
              assets, your personal data may be transferred to the acquiring entity,
              subject to equivalent privacy protections.
            </li>
          </ul>
          <p className="legal__p">
            In all cases, we limit the data shared to the minimum necessary for
            the stated purpose and require all recipients to protect your data
            in accordance with this Privacy Policy.
          </p>
        </section>

        {/* 06 */}
        <section className="legal__section" id="s6">
          <p className="legal__section-num">06</p>
          <h2 className="legal__section-heading">Data Retention</h2>
          <p className="legal__p">
            We retain your personal data for as long as necessary to fulfil the
            purposes described in this Privacy Policy, unless a longer retention
            period is required or permitted by law.
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Active accounts:</strong> Account data is retained for the
              duration of your account's existence on the Platform. If you delete
              your account, we will remove your personal data within{" "}
              <strong>30 days</strong>, except where retention is required for legal
              or compliance purposes.
            </li>
            <li>
              <strong>Business listings:</strong> Vendor profile data is retained
              while the listing is active. Upon deactivation or account deletion,
              data is removed within 30 days, although aggregated or anonymised
              data may be retained indefinitely.
            </li>
            <li>
              <strong>Enquiry data:</strong> Messages and enquiry details submitted
              through the Platform are retained for up to <strong>12 months</strong>{" "}
              to assist with dispute resolution and to improve Platform quality.
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymised usage and analytics data
              is retained for up to <strong>26 months</strong> in accordance with
              Google Analytics default settings.
            </li>
            <li>
              <strong>Legal holds:</strong> Certain data may be retained longer if
              required for ongoing legal proceedings, regulatory compliance, or to
              enforce our Terms &amp; Conditions.
            </li>
          </ul>
        </section>

        {/* 07 */}
        <section className="legal__section" id="s7">
          <p className="legal__section-num">07</p>
          <h2 className="legal__section-heading">Your Rights &amp; Choices</h2>
          <p className="legal__p">
            As a user of the Pixstack Platform, you have the following rights with
            respect to your personal data:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Access:</strong> You have the right to request a copy of
              the personal data we hold about you and information about how it
              is processed.
            </li>
            <li>
              <strong>Correction:</strong> You have the right to request that
              inaccurate or incomplete personal data be corrected or updated. You
              can update most account information directly from your Pixstack
              dashboard.
            </li>
            <li>
              <strong>Deletion:</strong> You may request the deletion of your
              personal data by contacting us at{" "}
              <a href="mailto:privacy@pixstack.in">privacy@pixstack.in</a>. We
              will delete your data within 30 days, subject to any legal retention
              obligations.
            </li>
            <li>
              <strong>Withdraw consent:</strong> Where processing is based on
              consent — such as marketing communications — you may withdraw your
              consent at any time by clicking "Unsubscribe" in any email or by
              contacting us directly. Withdrawal does not affect the lawfulness
              of processing prior to withdrawal.
            </li>
            <li>
              <strong>Opt out of marketing:</strong> You may opt out of
              promotional SMS and email communications at any time. Transactional
              messages (such as OTP codes and account notifications) cannot be
              opted out of while your account is active.
            </li>
            <li>
              <strong>Manage cookies:</strong> You can manage or disable cookies
              through your browser settings. See our{" "}
              <Link to="/cookies-policy">Cookies Policy</Link> for details.
            </li>
            <li>
              <strong>Data portability:</strong> You may request your personal
              data in a commonly used, machine-readable format where technically
              feasible.
            </li>
          </ul>
          <p className="legal__p">
            To exercise any of these rights, please contact our privacy team at{" "}
            <a href="mailto:privacy@pixstack.in">privacy@pixstack.in</a>. We aim
            to respond to all data rights requests within <strong>30 days</strong>.
            We may ask you to verify your identity before processing your request.
          </p>
        </section>

        {/* 08 */}
        <section className="legal__section" id="s8">
          <p className="legal__section-num">08</p>
          <h2 className="legal__section-heading">Data Security</h2>
          <p className="legal__p">
            Pixstack takes the security of your personal data seriously. We implement
            industry-standard technical and organisational measures to protect your
            data against unauthorised access, loss, misuse, alteration, or disclosure.
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Encryption:</strong> All data transmitted between your browser
              and the Pixstack servers is encrypted using HTTPS/TLS. Sensitive data
              at rest is encrypted using AES-256 or equivalent standards.
            </li>
            <li>
              <strong>Access controls:</strong> Access to personal data is restricted
              to authorised Pixstack personnel on a need-to-know basis. All access
              is logged and periodically reviewed.
            </li>
            <li>
              <strong>OTP authentication:</strong> We use one-time password (OTP)
              verification for all account logins, eliminating the risk associated
              with password-based authentication.
            </li>
            <li>
              <strong>Regular security audits:</strong> Our Platform and
              infrastructure undergo periodic security assessments to identify and
              remediate vulnerabilities.
            </li>
          </ul>
          <p className="legal__p">
            While we take all reasonable steps to protect your data, no method of
            transmission over the internet or electronic storage is 100% secure.
            We cannot guarantee absolute security. If you suspect that your account
            has been compromised, please contact us immediately at{" "}
            <a href="mailto:security@pixstack.in">security@pixstack.in</a>.
          </p>
          <div className="legal__highlight">
            <p>
              In the event of a data breach that is likely to result in a risk to
              your rights, Pixstack will notify affected users and relevant
              authorities in accordance with applicable Indian law and as
              expeditiously as reasonably possible.
            </p>
          </div>
        </section>

        {/* 09 */}
        <section className="legal__section" id="s9">
          <p className="legal__section-num">09</p>
          <h2 className="legal__section-heading">Children's Privacy</h2>
          <p className="legal__p">
            The Pixstack Platform is intended for users who are at least{" "}
            <strong>18 years of age</strong>. We do not knowingly collect, use, or
            disclose personal data from individuals under the age of 18.
          </p>
          <p className="legal__p">
            If you are a parent or legal guardian and you believe your child has
            provided us with personal data without your consent, please contact us
            immediately at{" "}
            <a href="mailto:privacy@pixstack.in">privacy@pixstack.in</a>. Upon
            verification, we will delete all personal data associated with the
            minor's account promptly and without undue delay.
          </p>
        </section>

        {/* 10 */}
        <section className="legal__section" id="s10">
          <p className="legal__section-num">10</p>
          <h2 className="legal__section-heading">Third-Party Services</h2>
          <p className="legal__p">
            The Platform integrates with or links to third-party services, including:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Google Analytics:</strong> For anonymised usage analytics.
              Governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google Sign-In / Meta Login:</strong> For optional social
              authentication. Your use of these services is subject to Google's
              and Meta's respective privacy policies.
            </li>
            <li>
              <strong>YouTube Embeds:</strong> Vendor profiles may include embedded
              YouTube videos. YouTube may collect data when you interact with
              embedded video players, even using the privacy-enhanced mode
              (youtube-nocookie.com).
            </li>
            <li>
              <strong>SMS/OTP providers:</strong> Your mobile number is shared with
              our SMS gateway provider solely to deliver OTP verification codes.
            </li>
            <li>
              <strong>Cloud infrastructure:</strong> Our Platform is hosted on secure
              cloud infrastructure. Hosting providers process data on our behalf
              under data processing agreements and do not use it for their own
              purposes.
            </li>
          </ul>
          <p className="legal__p">
            Pixstack is not responsible for the privacy practices of third-party
            services. We encourage you to review the privacy policies of any
            third-party services you interact with through the Platform.
          </p>
        </section>

        {/* 11 */}
        <section className="legal__section" id="s11">
          <p className="legal__section-num">11</p>
          <h2 className="legal__section-heading">Cookies &amp; Tracking</h2>
          <p className="legal__p">
            Pixstack uses cookies and similar tracking technologies to enhance your
            experience, remember your preferences, and analyse Platform usage. Cookies
            include strictly necessary, functional, analytics, performance, and
            marketing categories.
          </p>
          <p className="legal__p">
            You can manage your cookie preferences through your browser settings
            at any time. Please note that disabling certain cookies may affect the
            functionality of the Platform — for example, your city selection may
            not be remembered between sessions.
          </p>
          <p className="legal__p">
            For a comprehensive explanation of the cookies we use, their purposes,
            third-party cookie providers, and instructions on how to opt out, please
            read our dedicated{" "}
            <Link to="/cookies-policy">Cookies Policy</Link>.
          </p>
        </section>

        {/* 12 */}
        <section className="legal__section" id="s12">
          <p className="legal__section-num">12</p>
          <h2 className="legal__section-heading">Changes to This Policy</h2>
          <p className="legal__p">
            We may update this Privacy Policy from time to time to reflect changes
            in our data practices, applicable law, or Platform features. When we make
            material changes, we will revise the <strong>"Last Updated"</strong> date
            at the top of this page and, where appropriate, notify registered users
            by email or via a notice on the Platform.
          </p>
          <p className="legal__p">
            We encourage you to review this Privacy Policy periodically to stay
            informed about how Pixstack protects your data. Your continued use of
            the Platform after any revised policy is posted constitutes your
            acceptance of the updated terms. If you disagree with any changes,
            please discontinue use of the Platform and contact us to request
            account deletion.
          </p>
        </section>

        {/* 13 */}
        <section className="legal__section" id="s13">
          <p className="legal__section-num">13</p>
          <h2 className="legal__section-heading">Grievance Officer</h2>
          <p className="legal__p">
            In accordance with the <strong>Information Technology Act, 2000</strong>{" "}
            and the <strong>Information Technology (Intermediary Guidelines and
            Digital Media Ethics Code) Rules, 2021</strong>, Pixstack has designated
            a Grievance Officer to address privacy and data-related concerns raised
            by users.
          </p>
          <ul className="legal__ul">
            <li><strong>Name:</strong> Grievance Officer, Pixstack Technologies</li>
            <li><strong>Email:</strong> grievance@pixstack.in</li>
            <li>
              <strong>Address:</strong> Pixstack Technologies, Hyderabad,
              Telangana – 500034, India
            </li>
            <li>
              <strong>Response time:</strong> We will acknowledge your grievance
              within <strong>24 hours</strong> and resolve it within{" "}
              <strong>15 days</strong> of receipt.
            </li>
          </ul>
          <p className="legal__p">
            Any user who has a grievance regarding the content on the Platform or
            with respect to the processing of their personal data may lodge a
            complaint with the Grievance Officer using the contact details above.
          </p>
        </section>

        {/* 14 */}
        <section className="legal__section" id="s14">
          <p className="legal__section-num">14</p>
          <h2 className="legal__section-heading">Contact Us</h2>
          <p className="legal__p">
            If you have any questions, requests, or concerns regarding this Privacy
            Policy or the handling of your personal data, please reach out to us:
          </p>
          <ul className="legal__ul">
            <li><strong>Privacy Team:</strong> privacy@pixstack.in</li>
            <li><strong>General Support:</strong> support@pixstack.in</li>
            <li><strong>Grievance Officer:</strong> grievance@pixstack.in</li>
            <li>
              <strong>Postal Address:</strong> Pixstack Technologies, Hyderabad,
              Telangana – 500034, India
            </li>
          </ul>
          <p className="legal__p">
            You may also find answers to common questions on our{" "}
            <Link to="/faqs">FAQs page</Link>, or review our{" "}
            <Link to="/cookies-policy">Cookies Policy</Link> and{" "}
            <Link to="/legal-terms">Terms &amp; Conditions</Link> for related
            information.
          </p>
        </section>

        {/* Contact box */}
        <div className="legal__contact-box">
          <h3 className="legal__contact-title">Questions about your data?</h3>
          <p className="legal__contact-sub">
            Our privacy team is here to help with any data access, correction,
            or deletion requests, or to answer questions about how your information
            is used on Pixstack.
          </p>
          <a href="mailto:privacy@pixstack.in" className="legal__contact-email">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            privacy@pixstack.in
          </a>
        </div>

      </div>
    </div>
  </div>
);

export default Privacypolicy;
