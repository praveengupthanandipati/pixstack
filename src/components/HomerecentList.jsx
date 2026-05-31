import React, { useState, useEffect, useRef } from "react";
import Listitem from "./Listitem";
import "../styles/HomerecentList.scss";

// ── Replace any import path below to swap the image for that specific listing ─
import imgPhotomagicalHyd from "../assets/list-itemsimg/listitemimg01.jpg";
import imgPraveenMumbai from "../assets/list-itemsimg/listitemimg02.jpg";
import imgShutterMagicBhopal from "../assets/list-itemsimg/listitemimg03.jpg";
import imgGreatDigitalHyd from "../assets/list-itemsimg/listitemimg04.jpg";
import imgShutterLensChennai from "../assets/list-itemsimg/listitemimg05.jpg";
import imgPhotomagicalHyd2 from "../assets/list-itemsimg/listitemimg06.jpg";
import imgLensLightPune from "../assets/list-itemsimg/listitemimg07.jpg";
import imgShutterMagicHyd2 from "../assets/list-itemsimg/listitemimg08.jpg";
import imgGreatDigitalHyd2 from "../assets/list-itemsimg/listitemimg09.jpg";
import imgClickCaptureBglr from "../assets/list-itemsimg/listitemimg10.jpg";

const ITEMS = [
  {
    id: 1,
    image: imgPhotomagicalHyd,
    businessType: "STUDIO",
    businessName: "Photomagical Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 2,
    image: imgPraveenMumbai,
    businessType: "FREELANCER",
    businessName: "Praveen Kumar Nandipati",
    city: "Mumbai",
    state: "Maharashtra",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 3,
    image: imgShutterMagicBhopal,
    businessType: "STUDIO",
    businessName: "Shutter Magic",
    city: "Bhopal",
    state: "Madhya Pradesh",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 4,
    image: imgGreatDigitalHyd,
    businessType: "DIGITAL LAB",
    businessName: "Great Digital Lab",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 5,
    image: imgShutterLensChennai,
    businessType: "FREELANCERS",
    businessName: "Shutter Lens Studio",
    city: "Chennai",
    state: "Tamil Nadu",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 6,
    image: imgPhotomagicalHyd2,
    businessType: "STUDIO",
    businessName: "Photomagical Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 7,
    image: imgLensLightPune,
    businessType: "FREELANCERS",
    businessName: "Lens & Light Studio",
    city: "Pune",
    state: "Maharashtra",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 8,
    image: imgShutterMagicHyd2,
    businessType: "DIGITAL LAB",
    businessName: "Shutter Magic",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 9,
    image: imgGreatDigitalHyd2,
    businessType: "DIGITAL LAB",
    businessName: "Great Digital Lab",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 6,
    rating: 5.0,
  },
  {
    id: 10,
    image: imgClickCaptureBglr,
    businessType: "STUDIO",
    businessName: "Click & Capture Studio",
    city: "Bengaluru",
    state: "Karnataka",
    reviews: 6,
    rating: 5.0,
  },
];

const HomerecentList = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const timerRef = useRef(null);

  const handleLike = (isLiked) => {
    setToastMessage(
      isLiked ? "Added to Wishlist" : "Removed from Wishlist items",
    );
    setShowToast(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <section className="recent-listings">
      <div
        className={`recent-listings__toast${showToast ? " recent-listings__toast--visible" : ""}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {toastMessage}
      </div>

      <div className="recent-listings__header">
        <h2 className="recent-listings__title">
          <strong>Recent</strong> Listings
        </h2>
        <button className="recent-listings__view-all">VIEW ALL &nbsp;→</button>
      </div>

      <div className="recent-listings__grid">
        {ITEMS.map((item) => (
          <Listitem
            key={item.id}
            image={item.image}
            businessType={item.businessType}
            businessName={item.businessName}
            city={item.city}
            state={item.state}
            reviews={item.reviews}
            rating={item.rating}
            onLike={handleLike}
          />
        ))}
      </div>
    </section>
  );
};

export default HomerecentList;
