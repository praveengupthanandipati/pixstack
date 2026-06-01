import React, { useState } from "react";
import "../styles/Blogs.scss";

import img01 from "../assets/list-itemsimg/listitemimg01.jpg";
import img02 from "../assets/list-itemsimg/listitemimg02.jpg";
import img03 from "../assets/list-itemsimg/listitemimg03.jpg";
import img04 from "../assets/list-itemsimg/listitemimg04.jpg";
import img05 from "../assets/list-itemsimg/listitemimg05.jpg";
import img06 from "../assets/list-itemsimg/listitemimg06.jpg";
import img07 from "../assets/list-itemsimg/listitemimg07.jpg";
import img08 from "../assets/list-itemsimg/listitemimg08.jpg";

const POSTS = [
  {
    id: 1,
    featured: true,
    category: "Wedding Photography",
    title: "10 Tips for Capturing the Perfect Wedding Shot Every Time",
    excerpt:
      "Wedding photography is one of the most rewarding — and demanding — genres in the profession. From golden-hour portraits to candid dance floor moments, a wedding photographer must be ready for anything. In this guide, we break down the 10 essential techniques that separate great wedding photographers from truly exceptional ones.",
    author: "Rohan Mehta",
    authorInitials: "RM",
    date: "May 20, 2025",
    readTime: "7 min read",
    image: img01,
  },
  {
    id: 2,
    category: "Photography Tips",
    title: "Lighting Secrets Every Photographer Should Know",
    excerpt:
      "Light is everything in photography. Whether you shoot with natural sunlight or a complex studio setup, understanding how light behaves is the single most important skill you can develop. We explore the golden hour, diffused window light, and three-point studio setups.",
    author: "Ananya Verma",
    authorInitials: "AV",
    date: "May 14, 2025",
    readTime: "5 min read",
    image: img02,
  },
  {
    id: 3,
    category: "Studios & Labs",
    title: "How to Choose the Right Photo Studio for Your Portrait Session",
    excerpt:
      "Booking a photo studio for the first time can feel overwhelming. With so many options across Hyderabad and other major cities, knowing what to look for — backdrops, lighting rigs, space size, and post-production support — makes all the difference to your final images.",
    author: "Kiran Reddy",
    authorInitials: "KR",
    date: "May 8, 2025",
    readTime: "4 min read",
    image: img03,
  },
  {
    id: 4,
    category: "Print & Albums",
    title: "Digital vs. Print: Why Photo Albums Still Matter in 2025",
    excerpt:
      "In an era of Instagram reels and cloud galleries, the handcrafted photo album has quietly made a powerful comeback. We look at why premium flush-mount albums, leather-bound books, and coffee-table prints are still the most meaningful way to preserve your most important memories.",
    author: "Deepa Nair",
    authorInitials: "DN",
    date: "April 30, 2025",
    readTime: "6 min read",
    image: img04,
  },
  {
    id: 5,
    category: "Hiring a Photographer",
    title: "5 Questions to Ask Before Hiring a Freelance Photographer",
    excerpt:
      "Hiring a freelance photographer is a significant investment. Before you sign a contract or pay an advance, these five essential questions will help you assess their style, experience, deliverables, and professionalism — and avoid costly misunderstandings on your big day.",
    author: "Arjun Singh",
    authorInitials: "AS",
    date: "April 22, 2025",
    readTime: "4 min read",
    image: img05,
  },
  {
    id: 6,
    category: "Pre-Wedding",
    title: "The Complete Guide to Pre-Wedding Photography in India",
    excerpt:
      "Pre-wedding shoots have evolved into a cherished tradition across India. From heritage havelis in Jaipur to misty tea gardens in Coorg, the backdrop choices are limitless. This guide covers locations, wardrobe tips, timing, and how to find a photographer who truly understands your vision.",
    author: "Sneha Gupta",
    authorInitials: "SG",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: img06,
  },
  {
    id: 7,
    category: "Business Growth",
    title: "How to Build a Photography Portfolio That Attracts Clients",
    excerpt:
      "Your portfolio is your most powerful marketing tool. A well-curated set of 15–20 images says more about your capabilities than a hundred mediocre shots ever could. We share practical advice on selecting work, writing compelling captions, and presenting your portfolio online to win more enquiries.",
    author: "Rahul Sharma",
    authorInitials: "RS",
    date: "April 7, 2025",
    readTime: "6 min read",
    image: img07,
  },
  {
    id: 8,
    category: "Industry Trends",
    title: "Top Photography Trends to Watch in 2025",
    excerpt:
      "From dark moody editorial aesthetics to film-simulated presets and drone perspectives, 2025 is shaping up to be an exciting year for photographers and clients alike. We round up the eight biggest trends currently reshaping wedding, portrait, and commercial photography across India.",
    author: "Priya Reddy",
    authorInitials: "PR",
    date: "March 28, 2025",
    readTime: "5 min read",
    image: img08,
  },
];

const CATEGORIES = ["All", "Wedding Photography", "Photography Tips", "Studios & Labs", "Print & Albums", "Pre-Wedding", "Business Growth", "Industry Trends", "Hiring a Photographer"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = POSTS.find((p) => p.featured);
  const filtered = POSTS.filter((p) => !p.featured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <div className="blogs">

      {/* Hero */}
      <div className="blogs__hero">
        <span className="blogs__hero-eyebrow">Pixstack Blog</span>
        <h1 className="blogs__hero-title">
          Photography <span>Insights</span> &amp; Tips
        </h1>
        <p className="blogs__hero-sub">
          Expert advice for photographers, vendors, and clients — from portfolio building to booking your dream photographer.
        </p>
      </div>

      <div className="blogs__body">

        {/* Category filter */}
        <div className="blogs__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blogs__filter-btn${activeCategory === cat ? " is-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {(activeCategory === "All" || activeCategory === featured.category) && featured && (
          <div className="blogs__featured">
            <div className="blogs__featured-img-wrap">
              <img src={featured.image} alt={featured.title} className="blogs__featured-img" />
              <span className="blogs__featured-badge">Featured</span>
            </div>
            <div className="blogs__featured-body">
              <p className="blogs__featured-cat">{featured.category}</p>
              <h2 className="blogs__featured-title">{featured.title}</h2>
              <p className="blogs__featured-excerpt">{featured.excerpt}</p>
              <div className="blogs__featured-meta">
                <div className="blogs__author-info">
                  <div className="blogs__author-avatar">
                    <span>{featured.authorInitials}</span>
                  </div>
                  <span className="blogs__author-name">{featured.author}</span>
                </div>
                <span className="blogs__post-date">{featured.date}</span>
                <span className="blogs__read-time">⏱ {featured.readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Blog grid */}
        <div className="blogs__grid">
          {filtered.map((post) => (
            <div key={post.id} className="blogs__card">
              <div className="blogs__card-img-wrap">
                <img src={post.image} alt={post.title} className="blogs__card-img" loading="lazy" />
                <span className="blogs__card-cat">{post.category}</span>
              </div>
              <div className="blogs__card-body">
                <h3 className="blogs__card-title">{post.title}</h3>
                <p className="blogs__card-excerpt">{post.excerpt}</p>
                <div className="blogs__card-footer">
                  <span className="blogs__card-author">{post.author} · {post.date}</span>
                  <span className="blogs__card-read">⏱ {post.readTime}</span>
                </div>
                <a href="#" className="blogs__card-link" onClick={(e) => e.preventDefault()}>
                  Read More
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "48px 0", fontFamily: "Poppins, sans-serif", color: "#8a8a8a", fontSize: "0.9rem" }}>
              No posts found in this category yet. Check back soon!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Blogs;
