import React from "react";
import { Link } from "react-router-dom";
import "../styles/Legal.scss";

const SECTIONS = [
  { id: "s1",  num: "01", title: "Introduction" },
  { id: "s2",  num: "02", title: "What Are Cookies?" },
  { id: "s3",  num: "03", title: "Why We Use Cookies" },
  { id: "s4",  num: "04", title: "Types of Cookies We Use" },
  { id: "s5",  num: "05", title: "Third-Party Cookies" },
  { id: "s6",  num: "06", title: "Session vs. Persistent Cookies" },
  { id: "s7",  num: "07", title: "How to Manage Cookies" },
  { id: "s8",  num: "08", title: "Do Not Track Signals" },
  { id: "s9",  num: "09", title: "Cookies and Children" },
  { id: "s10", num: "10", title: "Changes to This Policy" },
  { id: "s11", num: "11", title: "Contact Us" },
];

const COOKIE_TABLE = [
  {
    type: "Strictly Necessary",
    purpose: "Essential for the website to function. Enable core features like city selection, login sessions, and security.",
    examples: "Session token, city preference, CSRF protection",
    canOptOut: "No",
  },
  {
    type: "Functional",
    purpose: "Remember your preferences and personalisation choices to provide an enhanced, tailored experience.",
    examples: "Selected city, wishlist items, display preferences",
    canOptOut: "Partial",
  },
  {
    type: "Analytics",
    purpose: "Help us understand how visitors interact with Pixstack — which pages are visited, how long users stay, and where they come from.",
    examples: "Google Analytics (page views, traffic source, session duration)",
    canOptOut: "Yes",
  },
  {
    type: "Performance",
    purpose: "Monitor site performance, load times, and errors to ensure the platform is fast and reliable.",
    examples: "Error tracking, load time monitoring",
    canOptOut: "Yes",
  },
  {
    type: "Marketing",
    purpose: "Used to deliver relevant advertisements on Pixstack and third-party sites. May track browsing across websites.",
    examples: "Google Ads, Meta Pixel",
    canOptOut: "Yes",
  },
];

const Cookiespolicy = () => (
  <div className="legal">

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <div className="legal__hero">
      <div className="legal__hero-inner">
        <span className="legal__hero-eyebrow">Legal</span>
        <h1 className="legal__hero-title">Cookies Policy</h1>
        <div className="legal__hero-meta">
          <span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
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

      {/* Table of Contents */}
      <div className="legal__toc">
        <p className="legal__toc-title">Table of Contents</p>
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

      {/* Document */}
      <div className="legal__doc">

        {/* 01 Introduction */}
        <section className="legal__section" id="s1">
          <p className="legal__section-num">01</p>
          <h2 className="legal__section-heading">Introduction</h2>
          <p className="legal__p">
            Welcome to <strong>Pixstack</strong> ("we", "our", "us"). Pixstack operates
            <strong> pixstack.in</strong> — India's dedicated online marketplace for
            photographers, studios, digital labs, album vendors, camera sellers, trainers,
            and rental services.
          </p>
          <p className="legal__p">
            This Cookies Policy explains what cookies are, the types of cookies
            Pixstack uses, how and why we use them, and how you can manage or
            disable them. This policy should be read alongside our{" "}
            <Link to="/privacy">Privacy Policy</Link>, which provides further detail
            on how we handle your personal data.
          </p>
          <p className="legal__p">
            By continuing to use the Pixstack platform, you consent to our use of
            cookies as described in this policy. If you do not agree to our use of
            cookies, you may disable them through your browser settings or choose not
            to use the platform.
          </p>
        </section>

        {/* 02 What Are Cookies */}
        <section className="legal__section" id="s2">
          <p className="legal__section-num">02</p>
          <h2 className="legal__section-heading">What Are Cookies?</h2>
          <p className="legal__p">
            Cookies are small text files that are placed on your device (computer,
            tablet, or mobile phone) when you visit a website. They are widely used
            to make websites work more efficiently, to remember your preferences, and
            to provide website owners with information about how visitors use their sites.
          </p>
          <p className="legal__p">
            Cookies do not contain personally identifiable information by themselves,
            but they can be linked to personal data we already hold about you. They
            are not programs and cannot carry viruses or install malware on your device.
          </p>
          <div className="legal__highlight">
            <p>
              <strong>In simple terms:</strong> cookies are how Pixstack remembers
              your selected city, keeps you logged in, and helps us understand how
              you use the platform so we can improve it.
            </p>
          </div>
        </section>

        {/* 03 Why We Use Cookies */}
        <section className="legal__section" id="s3">
          <p className="legal__section-num">03</p>
          <h2 className="legal__section-heading">Why We Use Cookies</h2>
          <p className="legal__p">Pixstack uses cookies for the following purposes:</p>
          <ul className="legal__ul">
            <li>
              <strong>Authentication:</strong> To keep you logged in securely across
              pages during your session and to prevent unauthorised access to your account.
            </li>
            <li>
              <strong>Preferences:</strong> To remember your selected city, display
              settings, and other choices so you don't have to re-enter them every visit.
            </li>
            <li>
              <strong>Security:</strong> To protect the platform against cross-site
              request forgery (CSRF) and other web security threats.
            </li>
            <li>
              <strong>Analytics:</strong> To understand how visitors navigate Pixstack
              — which categories are most popular, how long users browse, and where traffic
              comes from — so we can improve the user experience.
            </li>
            <li>
              <strong>Performance monitoring:</strong> To detect errors, measure page
              load times, and ensure the platform runs smoothly for all users.
            </li>
            <li>
              <strong>Marketing &amp; advertising:</strong> To show you relevant
              photography services and business listings, both on Pixstack and on
              third-party platforms, based on your browsing interests.
            </li>
          </ul>
        </section>

        {/* 04 Types of Cookies */}
        <section className="legal__section" id="s4">
          <p className="legal__section-num">04</p>
          <h2 className="legal__section-heading">Types of Cookies We Use</h2>
          <p className="legal__p">
            The table below describes the categories of cookies used on Pixstack,
            their purpose, examples of specific cookies in each category, and whether
            you can opt out.
          </p>
          <div className="legal__table-wrap">
            <table className="legal__table">
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Examples</th>
                  <th>Opt-Out?</th>
                </tr>
              </thead>
              <tbody>
                {COOKIE_TABLE.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.purpose}</td>
                    <td>{row.examples}</td>
                    <td>{row.canOptOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="legal__p">
            <strong>Strictly necessary cookies</strong> cannot be disabled as they
            are essential for the platform to function. All other categories can be
            managed through your browser settings or, where available, through our
            consent preferences panel.
          </p>
        </section>

        {/* 05 Third-Party Cookies */}
        <section className="legal__section" id="s5">
          <p className="legal__section-num">05</p>
          <h2 className="legal__section-heading">Third-Party Cookies</h2>
          <p className="legal__p">
            In addition to our own cookies, Pixstack uses services provided by trusted
            third parties that may also set cookies on your device when you use our
            platform. These third parties include:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to collect
              anonymised data about how visitors interact with Pixstack. This helps
              us understand traffic patterns, popular pages, and user behaviour.
              Google's use of this data is governed by the{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google Privacy Policy
              </a>
              . You can opt out of Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Google Ads (formerly AdWords):</strong> If you click on a
              Pixstack advertisement displayed on Google's network, a cookie may be
              placed to track conversions. This helps us measure the effectiveness of
              our advertising campaigns.
            </li>
            <li>
              <strong>Meta Pixel (Facebook):</strong> We may use the Meta Pixel to
              measure the effectiveness of advertising we run on Facebook and Instagram.
              This tool may set cookies to track actions you take on Pixstack after
              seeing or clicking our ads on Meta platforms.
            </li>
            <li>
              <strong>YouTube:</strong> Vendor business profiles on Pixstack may embed
              YouTube videos to showcase portfolios. When you play an embedded YouTube
              video, YouTube may set cookies on your device. We use YouTube's
              privacy-enhanced embed mode (youtube-nocookie.com) to minimise this.
            </li>
          </ul>
          <p className="legal__p">
            We do not control third-party cookies and are not responsible for the data
            practices of these external services. We encourage you to review the
            privacy policies of any third-party services you interact with through
            Pixstack.
          </p>
        </section>

        {/* 06 Session vs Persistent */}
        <section className="legal__section" id="s6">
          <p className="legal__section-num">06</p>
          <h2 className="legal__section-heading">Session vs. Persistent Cookies</h2>
          <p className="legal__p">
            Cookies on Pixstack can be classified by their lifespan:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Session cookies</strong> are temporary cookies that are deleted
              from your device when you close your browser. Pixstack uses session
              cookies to maintain your login state and to store your city selection
              within a single browsing session. They do not collect information from
              your device.
            </li>
            <li>
              <strong>Persistent cookies</strong> remain on your device for a set
              period of time (defined by the cookie's expiry date) or until you manually
              delete them. Pixstack uses persistent cookies to remember your preferences
              across sessions — such as your chosen city — and to support analytics
              and advertising functions. Persistent cookies on Pixstack typically
              expire within 12 months.
            </li>
          </ul>
        </section>

        {/* 07 How to Manage */}
        <section className="legal__section" id="s7">
          <p className="legal__section-num">07</p>
          <h2 className="legal__section-heading">How to Manage Cookies</h2>
          <p className="legal__p">
            You have the right to accept or refuse non-essential cookies at any time.
            Most web browsers automatically accept cookies, but you can modify your
            browser settings to decline cookies or to alert you each time a cookie is
            being set.
          </p>
          <p className="legal__p">
            Instructions for managing cookies in the most common browsers:
          </p>
          <ul className="legal__ul">
            <li>
              <strong>Google Chrome:</strong> Settings → Privacy and Security →
              Cookies and other site data
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Options → Privacy &amp; Security →
              Cookies and Site Data
            </li>
            <li>
              <strong>Apple Safari:</strong> Preferences → Privacy → Manage Website
              Data
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions
            </li>
            <li>
              <strong>Opera:</strong> Settings → Advanced → Privacy &amp; Security →
              Cookies
            </li>
          </ul>
          <p className="legal__p">
            Please note that restricting cookies may impact your experience on
            Pixstack. Some features — including city selection, login sessions, and
            personalised results — depend on cookies to function correctly. Disabling
            strictly necessary cookies may prevent you from using certain parts of
            the platform.
          </p>
          <div className="legal__highlight">
            <p>
              <strong>Mobile devices:</strong> To manage cookies on mobile, use your
              device's browser settings. For in-app browsers, refer to your app's
              privacy settings. Clearing your browser cache will also remove all
              cookies stored on your device.
            </p>
          </div>
        </section>

        {/* 08 Do Not Track */}
        <section className="legal__section" id="s8">
          <p className="legal__section-num">08</p>
          <h2 className="legal__section-heading">Do Not Track Signals</h2>
          <p className="legal__p">
            Some browsers include a "Do Not Track" (DNT) feature that signals to
            websites that you prefer not to have your online activity tracked.
            Currently, there is no universally accepted standard for how websites
            should respond to DNT signals.
          </p>
          <p className="legal__p">
            Pixstack does not currently alter its data collection or use practices
            in response to DNT signals. However, we respect your privacy choices and
            encourage you to manage cookies directly through your browser settings or
            opt out of analytics and advertising cookies using the methods described
            in Section 07 above.
          </p>
        </section>

        {/* 09 Children */}
        <section className="legal__section" id="s9">
          <p className="legal__section-num">09</p>
          <h2 className="legal__section-heading">Cookies and Children</h2>
          <p className="legal__p">
            Pixstack is not directed at or intended for use by individuals under the
            age of 18. We do not knowingly collect personal data or use cookies to
            track minors. If you are a parent or guardian and believe that your child
            has used Pixstack and had cookies placed on their device without your
            consent, please contact us at{" "}
            <a href="mailto:privacy@pixstack.in">privacy@pixstack.in</a> and we will
            take appropriate steps to address the situation.
          </p>
        </section>

        {/* 10 Changes */}
        <section className="legal__section" id="s10">
          <p className="legal__section-num">10</p>
          <h2 className="legal__section-heading">Changes to This Policy</h2>
          <p className="legal__p">
            We may update this Cookies Policy from time to time to reflect changes
            in technology, legislation, or our business practices. When we make
            material changes, we will update the <strong>"Last Updated"</strong> date
            at the top of this page and, where appropriate, notify registered users
            by email or through a notice on the Pixstack platform.
          </p>
          <p className="legal__p">
            We encourage you to review this Cookies Policy periodically to stay
            informed about how we use cookies. Your continued use of Pixstack after
            any changes are posted constitutes your acceptance of the revised policy.
            If you disagree with any changes, you may manage or disable cookies as
            described in Section 07.
          </p>
        </section>

        {/* 11 Contact */}
        <section className="legal__section" id="s11">
          <p className="legal__section-num">11</p>
          <h2 className="legal__section-heading">Contact Us</h2>
          <p className="legal__p">
            If you have any questions, concerns, or requests regarding this Cookies
            Policy or our use of cookies on Pixstack, please contact us:
          </p>
          <ul className="legal__ul">
            <li><strong>Email:</strong> privacy@pixstack.in</li>
            <li><strong>Support:</strong> support@pixstack.in</li>
            <li><strong>Website:</strong> pixstack.in/cookies-policy</li>
            <li>
              <strong>Postal Address:</strong> Pixstack Technologies, Hyderabad,
              Telangana – 500034, India
            </li>
          </ul>
          <p className="legal__p">
            We aim to respond to all privacy-related queries within <strong>5 business
            days</strong>. For general platform support, please visit our{" "}
            <Link to="/faqs">FAQs page</Link> or write to support@pixstack.in.
          </p>
        </section>

        {/* Contact box */}
        <div className="legal__contact-box">
          <h3 className="legal__contact-title">Questions about this policy?</h3>
          <p className="legal__contact-sub">
            Our privacy team is here to help with any questions about how Pixstack
            uses cookies or handles your data.
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

export default Cookiespolicy;
