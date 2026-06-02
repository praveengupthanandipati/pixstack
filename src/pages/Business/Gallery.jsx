import React, { useState, useRef } from "react";
import Leftnav from "./Leftnav";
import img01 from "../../assets/list-itemsimg/listitemimg01.jpg";
import img02 from "../../assets/list-itemsimg/listitemimg02.jpg";
import img03 from "../../assets/list-itemsimg/listitemimg03.jpg";
import img04 from "../../assets/list-itemsimg/listitemimg04.jpg";
import img05 from "../../assets/list-itemsimg/listitemimg05.jpg";
import img06 from "../../assets/list-itemsimg/listitemimg06.jpg";
import img07 from "../../assets/list-itemsimg/listitemimg07.jpg";
import img08 from "../../assets/list-itemsimg/listitemimg08.jpg";
import img09 from "../../assets/list-itemsimg/listitemimg09.jpg";
import img10 from "../../assets/list-itemsimg/listitemimg10.jpg";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Gallery.scss";

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED_PHOTOS = [
  img01, img02, img03, img04, img05,
  img06, img07, img08, img09, img10,
].map((src, i) => ({ id: i + 1, src }));

const SEED_VIDEOS = [
  { id: 1, ytId: "ZOmECGBCBdo", title: "Wedding Highlight Reel — Sai & Priya | Focus Snaps" },
  { id: 2, ytId: "Hq1X0Rmz5nI", title: "Corporate Event Coverage — TechSummit Hyderabad 2024" },
  { id: 3, ytId: "_HvLxkiI6ic", title: "Portrait Photography — Behind the Lens with Focus Snaps" },
  { id: 4, ytId: "J0e8nK-9MuQ", title: "Product & Commercial Shoot — Jewellery Brand Collab" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconTrash = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const IconUpload = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const IconAdd = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconYouTube = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ─── YouTube ID extractor ─────────────────────────────────────────────────────
const extractYtId = (url) => {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return m ? m[1] : null;
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [photos, setPhotos]         = useState(SEED_PHOTOS);
  const [videos, setVideos]         = useState(SEED_VIDEOS);
  const [videoUrl, setVideoUrl]     = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoError, setVideoError] = useState("");
  const photoInputRef               = useRef(null);

  // ── Photos ──────────────────────────────────────────────────────────────────
  const handlePhotoFiles = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const newPhotos = files.map((file) => ({
      id: Date.now() + Math.random(),
      src: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
    e.target.value = "";
  };

  // ── Confirm dialog ──────────────────────────────────────────────────────────
  const [confirm, setConfirm] = useState(null); // { type:'photo'|'video', id, label }

  const requestDelete = (type, id, label) => setConfirm({ type, id, label });

  const handleConfirmDelete = () => {
    if (confirm.type === "photo")
      setPhotos((prev) => prev.filter((p) => p.id !== confirm.id));
    else
      setVideos((prev) => prev.filter((v) => v.id !== confirm.id));
    setConfirm(null);
  };

  const handleCancelDelete = () => setConfirm(null);

  // ── Videos ──────────────────────────────────────────────────────────────────
  const handleAddVideo = () => {
    const trimUrl = videoUrl.trim();
    if (!trimUrl) { setVideoError("Please enter a YouTube URL"); return; }

    const ytId = extractYtId(trimUrl);
    if (!ytId) {
      setVideoError("Invalid YouTube URL. Accepted formats: youtube.com/watch?v=… or youtu.be/…");
      return;
    }
    if (videos.some((v) => v.ytId === ytId)) {
      setVideoError("This video is already in your gallery");
      return;
    }

    setVideos((prev) => [
      ...prev,
      { id: Date.now(), ytId, title: videoTitle.trim() || `YouTube Video (${ytId})` },
    ]);
    setVideoUrl("");
    setVideoTitle("");
    setVideoError("");
  };

  const deleteVideo = (id) =>
    setVideos((prev) => prev.filter((v) => v.id !== id));

  return (
    <div className="biz-profile">
      <div className="biz-profile__wrapper">

        {/* Sidebar */}
        <div className="biz-profile__sidebar">
          <Leftnav />
        </div>

        {/* Main */}
        <div className="biz-profile__main">

          {/* ══ Photo Gallery ════════════════════════════════════════════════ */}
          <div className="biz-profile__card">
            <div className="bb-hd">
              <div>
                <h2 className="bb-hd__title">Photo <span>Gallery</span></h2>
                <p className="bb-hd__sub">{photos.length} {photos.length === 1 ? "photo" : "photos"}</p>
              </div>
              <button className="bb-hd__edit-btn gal-upload-btn"
                onClick={() => photoInputRef.current?.click()}>
                {IconUpload}
                Add Photos
              </button>
              <input type="file" accept="image/*" multiple ref={photoInputRef}
                hidden onChange={handlePhotoFiles} />
            </div>

            <div className="bb-body">
              <div className="bb-section" style={{ borderBottom: "none" }}>
                {photos.length > 0 ? (
                  <div className="gal-photo-grid">
                    {photos.map((photo) => (
                      <div key={photo.id} className="gal-photo">
                        <img src={photo.src} alt="Gallery" loading="lazy" />
                        <div className="gal-photo__overlay">
                          <button className="gal-delete-btn"
                            onClick={() => requestDelete("photo", photo.id, "this photo")}
                            aria-label="Delete photo">
                            {IconTrash}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="gal-empty">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor"
                      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p>No photos yet. Click "Add Photos" to upload.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ══ Video Gallery ════════════════════════════════════════════════ */}
          <div className="biz-profile__card">
            <div className="bb-hd">
              <div>
                <h2 className="bb-hd__title">Video <span>Gallery</span></h2>
                <p className="bb-hd__sub">{videos.length} {videos.length === 1 ? "video" : "videos"}</p>
              </div>
            </div>

            <div className="bb-body">

              {/* Add video form */}
              <div className="bb-section">
                <h3 className="bb-section-title">
                  <span className="gal-yt-icon">{IconYouTube}</span>
                  Add YouTube Video
                </h3>
                <div className="gal-video-form">
                  <div className="gal-video-inputs">
                    <div className="gal-video-url-wrap">
                      <input type="url"
                        className={`bb-input${videoError ? " has-error" : ""}`}
                        placeholder="https://www.youtube.com/watch?v=… or https://youtu.be/…"
                        value={videoUrl}
                        onChange={(e) => { setVideoUrl(e.target.value); setVideoError(""); }}
                        onKeyDown={(e) => e.key === "Enter" && handleAddVideo()}
                      />
                      {videoError && <p className="bb-error">{videoError}</p>}
                    </div>
                    <input type="text" className="bb-input"
                      placeholder="Video title (optional)"
                      value={videoTitle}
                      onChange={(e) => setVideoTitle(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddVideo()}
                    />
                  </div>
                  <button className="svc-add-btn gal-add-btn" onClick={handleAddVideo}>
                    {IconAdd}
                    Add Video
                  </button>
                </div>
              </div>

              {/* Video grid */}
              <div className="bb-section" style={{ borderBottom: "none" }}>
                {videos.length > 0 ? (
                  <div className="gal-video-grid">
                    {videos.map((v) => (
                      <div key={v.id} className="gal-video-card">
                        <div className="gal-video-frame">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${v.ytId}?rel=0&modestbranding=1`}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="gal-video-footer">
                          <p className="gal-video-title">{v.title}</p>
                          <button className="gal-video-del"
                            onClick={() => requestDelete("video", v.id, v.title)}
                            aria-label="Delete video">
                            {IconTrash}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="gal-empty">
                    <span className="gal-empty__yt">{IconYouTube}</span>
                    <p>No videos yet. Paste a YouTube URL above to add one.</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Confirm delete dialog ──────────────────────────────────────────── */}
      {confirm && (
        <div className="gal-confirm-overlay" onClick={handleCancelDelete}>
          <div className="gal-confirm" onClick={(e) => e.stopPropagation()}>
            <div className="gal-confirm__icon">
              {IconTrash}
            </div>
            <h3 className="gal-confirm__title">
              Delete {confirm.type === "photo" ? "Photo" : "Video"}?
            </h3>
            <p className="gal-confirm__msg">
              {confirm.type === "photo"
                ? "This photo will be permanently removed from your gallery."
                : <><strong>{confirm.label}</strong> will be permanently removed from your gallery.</>}
            </p>
            <div className="gal-confirm__actions">
              <button className="gal-confirm__delete-btn" onClick={handleConfirmDelete}>
                Yes, Delete
              </button>
              <button className="gal-confirm__cancel-btn" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
