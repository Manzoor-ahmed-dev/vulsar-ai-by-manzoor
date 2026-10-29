
import { useEffect, useState } from "react";
import "./App.css";

const characters = [
  {
    image: "/characters/character-1.jpg",
    name: "MUBASHIR PIRZADO",
    role: "The King",
    number: "01",
  },
  {
    image: "/characters/character-2.jpg",
    name: "MANZOOR AHMED",
    role: "The undefeated soilder",
    number: "02",
  },
  {
    image: "/characters/character-3.jpg",
    name: "KAPIL CHAWLA",
    role: "The helper",
    number: "03",
  },
  {
    image: "/characters/character%204.jpg",
    name: "shaham",
    role: "The friend and doctor",
    number: "04",
  },
  {
    image: "/characters/character-5.jpg",
    name: "suleman khan",
    role: "The warrior",
    number: "05",
  },
];

  function App() {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showStories, setShowStories] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (showCharacters) return;

    const canvas = document.getElementById("arabian-particles");
    const hero = document.querySelector(".hero");

    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let particles = [];
    let width = 0;
    let height = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(80, Math.floor(width / 12));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        cyan: Math.random() < 0.12,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.y -= particle.speed;
        particle.x += particle.drift;

        if (particle.y < -5) {
          particle.y = height + 5;
          particle.x = Math.random() * width;
        }

        if (particle.x < -5) particle.x = width + 5;
        if (particle.x > width + 5) particle.x = -5;

        const color = particle.cyan
          ? `rgba(65, 220, 255, ${particle.alpha})`
          : `rgba(255, 193, 91, ${particle.alpha})`;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      if (!reducedMotion.matches) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [showCharacters]);

  const openCharacters = () => {
    setShowCharacters(true);
  };

  
const goHome = () => {
  setShowCharacters(false);
  setShowStories(false);
  window.scrollTo({ top: 0, behavior: "instant" });
};


  return (
    <div className="website">
      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
        >
          <span className="logo-mark">✦</span>
          MANZOOR <span>THE NIGHT</span>
        </a>

        <div className="nav-links">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              goHome();
            }}
          >
            Home
          </a>

          {showCharacters ? (
            <a
              href="#characters"
              onClick={(event) => {
                event.preventDefault();
                goHome();
              }}
            >
              ← Back
            </a>
          ) : (
            <>
              <a href="#world">The World</a>

              <a
                href="#characters"
                onClick={(event) => {
                  event.preventDefault();
                  openCharacters();
                }}
              >
                Characters
              </a>

              <a
  href="#stories"
  onClick={(event) => {
    event.preventDefault();
    setShowCharacters(false);
    setShowStories(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  }}
>
  Stories
</a>
              <a href="#about">About</a>
            </>
          )}
        </div>

        <button
          type="button"
          className="nav-button"
          onClick={showCharacters ? goHome : openCharacters}
        >
          {showCharacters ? "← Back to Home" : "Meet the Legends"}
          <span>{showCharacters ? "↩" : "↗"}</span>
        </button>
      </nav>

      {showCharacters ? (
        <main className="character-page">
          <section className="characters-section" id="characters">
            <div className="section-heading">
              <p className="eyebrow">THE PEOPLE OF THE KINGDOM</p>

              <h2>MEET THE CHARACTERS</h2>

              <p>
                Five faces. Five destinies. One extraordinary world.
                Discover the characters who bring these legends to life.
              </p>

              <button
                type="button"
                className="secondary-button character-back-button"
                onClick={goHome}
              >
                ← Return to the Front Page
              </button>
            </div>

            <div className="characters-grid">
              {characters.map((character) => (
                <article
                  className="character-card"
                  key={character.number}
                >
                  <div className="character-image">
                    <img
                      src={character.image}
                      alt={character.name}
                    />

                    <span className="character-number">
                      {character.number}
                    </span>
                  </div>

                  <div className="character-info">
                    <p className="character-role">{character.role}</p>
                    <h3>{character.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        
        </main>
      ) : showStories ? (
        <main className="character-page story-page">
          <section className="story-video-section" id="stories">
            <div className="story-video-heading">
              <p className="eyebrow">03 / THE CINEMATIC ARCHIVE</p>
              <h2>Stories Beyond Time</h2>
              <p>
                Enter the world of Vulsar AI through cinematic stories
                and unforgettable moments.
              </p>

              <button
                type="button"
                className="secondary-button character-back-button"
                onClick={goHome}
              >
                ← Back to Home
              </button>
            </div>

            <div className="story-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/CZkk4EjbIPM"
                title="Vulsar AI - Cinematic Story 1"
                allow="encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="story-video-frame second-story-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/CJvcB4WvrHw"
                title="Vulsar AI - Cinematic Story 2"
                allow="encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </main>
      ) : (
        <>
          <main>

            <section className="hero" id="home">
              <div className="hero-overlay"></div>

              <canvas
                id="arabian-particles"
                className="arabian-particles"
                aria-hidden="true"
              />

              <div className="ai-glow" aria-hidden="true">
                <div className="ai-orb">AI</div>
              </div>

              <div className="fire-lantern lantern-one" aria-hidden="true">
                <div className="lantern-handle"></div>
                <div className="lantern-top"></div>
                <div className="lantern-glass">
                  <div className="flame">
                    <span className="flame-core"></span>
                  </div>
                </div>
                <div className="lantern-base"></div>
                <div className="lantern-light"></div>
              </div>

              <div className="hero-content">
                <p className="eyebrow">
                  AN ANCIENT WORLD • A NEW LEGEND
                </p>

                <h1>
                  ENTER THE
                  <br />
                  <span>WORLD OF LEGENDS</span>
                </h1>

                <p className="hero-description">
                  Beyond the golden dunes lies a world of forgotten
                  kingdoms, brave warriors, mysterious characters,
                  and stories waiting to come alive.
                </p>

                <div className="hero-actions">
                  <button
                    type="button"
                    className="primary-button"
                    onClick={openCharacters}
                  >
                    Discover the Characters <span>↗</span>
                  </button>

                  <a href="#world" className="secondary-button">
                    Explore the World
                  </a>
                </div>
              </div>

              <div className="hero-bottom">
                <span>THE LAND OF SAND & STORIES</span>
                <span>EST. IN IMAGINATION</span>
              </div>
            </section>

            <section className="intro-section" id="world">
              <p className="eyebrow">THE GATES ARE OPEN</p>

              <h2>A LEGEND WAITS BEYOND THE SANDS</h2>

              <p>
                Enter a world of ancient palaces, mysterious deserts,
                legendary characters, and stories waiting to be told.
                Inspired by the atmosphere of ancient Arabia and
                brought into a modern cinematic experience.
              </p>
            </section>

            <section className="world-grid" id="world-cards">
              <article className="world-card">
                <span>01 / THE KINGDOMS</span>
                <h3>Ancient Worlds</h3>
                <p>
                  Explore golden deserts, hidden cities, grand palaces,
                  and forgotten places.
                </p>
              </article>

             
<article className="world-card" id="stories">
  <span>02 / THE CHRONICLES</span>
  <h3>Stories & Scenes</h3>
  <p>
    Follow extraordinary journeys, emotional moments,
    and unforgettable tales.
  </p>
  <a
    href="#story-video"
    className="story-video-link"
  >
    Watch Our Story <span>↗</span>
  </a>
</article>


              <article className="world-card">
                <span>03 / THE CREATIVE REALM</span>
                <h3>Cinematic Studio</h3>
                <p>
                  A growing creative space for AI video concepts,
                  cinematic scenes, and original stories.
                </p>
              </article>
            </section>
            


           
<section className="about-section" id="about">
  <p className="eyebrow">OUR VISION</p>

  <h2>WHERE IMAGINATION BECOMES LEGEND</h2>

  <p>
    Vulsar AI brings the mystery and timeless beauty of
    ancient Arabia into a modern cinematic experience.
    Through artificial intelligence, creativity, and
    storytelling, we transform imagination into
    unforgettable worlds, characters, and stories.
  </p>

  <div className="about-credits">
    <p className="eyebrow">THE CREATIVE TEAM</p>
    <h3>Created By</h3>

    <div className="creator-list">
      <span>Manzoor Ahmed</span>
      <span>Munashir Pirzada</span>
      <span>Kapil Chawla</span>
      <span>Mudasir</span>
      <span>Shaham</span>
    </div>

    <div className="presented-credit">
      <p className="eyebrow">ACADEMIC PRESENTATION</p>
      <h3>Presented To</h3>
      <p className="professor-name">
        Assistant Professor Sir Imran Alvi
      </p>
    </div>

    <p className="about-tagline">
      Five Minds. One Vision. A World Beyond Imagination.
    </p>
  </div>

  <button
    type="button"
    className="secondary-button"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    Return to the Beginning ↑
  </button>
</section>

          </main>

          <footer className="footer">
            <a href="#home" className="logo">
              ✦ MANZOOR <span>THE NIGHT</span>
            </a>

            <p>A WORLD OF STORIES, WRITTEN IN THE NIGHT.</p>

            <span>
              © {new Date().getFullYear()} MANZOOR THE NIGHT
            </span>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
