import React from "react";

const videos = [
  {
    title: "Harvard Career Advice",
    embed: "https://www.youtube.com/embed/KmRPqrM9SWM",
  },
  {
    title: "If you’re in your 20s, Watch This.",
    embed: "https://www.youtube.com/embed/cve9H6Vz324",
  },
  {
    title: "How to Find a Career You Genuinely Love",
    embed: "https://www.youtube.com/embed/O3m14PVOq_g",
  },

  {
    title: "Career Tips for Students Who Feel Lost",
    embed: "https://www.youtube.com/embed/Psaf3shBBqs",
  },
  {
    title: "Career Strategy Playlist",
    embed: "https://www.youtube.com/embed/Ok_j5blEywo",
  },
  {
    title: "The BEST CAREER Advice for 2025 That Actually WORKS!",
    embed: "https://www.youtube.com/embed/GSnipy63VX4",
  },
];

const Video = () => (
  <div
    className="video container py-5"
    id="career-videos"
    aria-labelledby="career-videos-heading">
    <header className="text-center mb-5">
      <h2 id="career-videos-heading" className="fw-bold fs-1">
        Top Career Guide Videos
      </h2>
      <p className="lead">
        Expert advice, real stories, and smart strategies for career growth.
      </p>
    </header>

    <div className="row">
      {videos.map((video, idx) => (
        <article
          key={idx}
          className="col-12 col-md-6 col-lg-4 mb-4 video-card"
          aria-label={`Career video: ${video.title}`}>
          <div className="ratio ratio-16x9 shadow rounded-4 overflow-hidden">
            <iframe
              src={video.embed}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label={`Embedded video about ${video.title}`}></iframe>
          </div>
          <p className="mt-2 text-center fs-5 fw-semibold">{video.title}</p>
        </article>
      ))}
    </div>
  </div>
);

export default Video;
