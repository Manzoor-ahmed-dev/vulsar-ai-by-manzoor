
import { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('Text to Video')
  const [duration, setDuration] = useState('5 seconds')
  const [selectedImage, setSelectedImage] = useState('')
  

  function handleImageChange(event) {
  const file = event.target.files?.[0]

  if (file) {
    setSelectedImage(URL.createObjectURL(file))
  }
}
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">
          <span className="logo-icon">V</span>
          <span>vulsar<span className="logo-ai">.ai</span></span>
        </a>

        <div className="nav-links">
          <a href="#create">Create</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button className="sign-in" onClick={() => alert('Account features coming soon!')}>
          Sign in ↗
        </button>
      </nav>

      <main>
        <section className="hero" id="create">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="announcement">
            <span className="live-dot"></span>
            YOUR IMAGINATION, REIMAGINED
          </div>

          <h1>
            Ideas into videos.
            <br />
            <span>Magic into reality.</span>
          </h1>
          <p className="creator-credit">
  Created by <strong>Manzoor Ahmed</strong>
</p>

          <p className="subtitle">
            Create stunning AI videos from simple words.
            <br />
            Your next big idea starts here.
          </p>

          <div className="generator">
            <div className="generator-top">
              <span className="generator-label">✦ CREATE YOUR VIDEO</span>
              <span className="free-badge">FREE TO EXPLORE</span>
            </div>

            <div className="mode-selector">
              {['Text to Video', 'Image to Video'].map((item) => (
                <button
                  key={item}
                  className={mode === item ? 'mode active' : 'mode'}
                  onClick={() => setMode(item)}
                >
                  {item === 'Text to Video' ? '✍' : '▧'} {item}
                </button>
              ))}
            </div>

            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder={
                mode === 'Text to Video'
                  ? 'Describe the video you imagine... A futuristic city floating above the clouds at sunset...'
                  : 'Describe the animation you want to create from your image...'
              }
              rows={4}
            />
               

{mode === 'Image to Video' && (
  <div className="image-upload-area">
    {selectedImage ? (
      <div className="image-preview">
        <img src={selectedImage} alt="Selected image preview" />
        <button
          type="button"
          className="remove-image"
          onClick={() => {
            URL.revokeObjectURL(selectedImage)
            setSelectedImage('')
          }}
        >
          Remove image ×
        </button>
      </div>
    ) : (
      <label className="upload-box">
        <span className="upload-icon">↑</span>
        <strong>Upload an image</strong>
        <span>Click to browse your device</span>
        <span className="upload-formats">PNG, JPG, WEBP</span>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleImageChange}
          hidden
        />
      </label>
    )}
  </div>
)}

  

            <div className="generator-bottom">
              <label className="duration-label">
                Duration
                <select
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                >
                  <option>5 seconds</option>
                  <option>10 seconds</option>
                </select>
              </label>

              <button
                className="generate-button"
                
onClick={() => {
  if (mode === 'Text to Video' && !prompt.trim()) {
    alert('Please describe the video you want to create.')
    return
  }

  if (mode === 'Image to Video' && !selectedImage) {
    alert('Please upload an image first.')
    return
  }

  alert(
    mode === 'Text to Video'
      ? `Your video prompt is ready!\n\nPrompt: ${prompt}\nDuration: ${duration}\n\nAI video generation will be connected in a future step.`
      : `Your image is ready!\nDuration: ${duration}\n\nAI video generation will be connected in a future step.`
  )
}}

              >
                ✦ Generate video <span>→</span>
              </button>
            </div>
          </div>

          <div className="hero-note">
            <span>✧</span> Built for creators, dreamers and storytellers
          </div>
        </section>

       
        <section className="showcase" id="showcase">
          <div className="showcase-heading">
            <span className="eyebrow">IMAGINATION IN MOTION</span>
            <h2>Worlds made from <span>words.</span></h2>
            <p>Explore the kinds of cinematic worlds you can create with Vulsar AI.</p>
          </div>

          <div className="showcase-grid">
            <article className="video-card">
              <div className="video-art art-cosmos">
                <div className="cosmos-orb"></div>
                <div className="cosmos-ring"></div>
                <span className="art-label">01 / COSMIC WORLDS</span>
                <span className="play-button">▶</span>
                <span className="art-caption">Beyond the stars</span>
              </div>
              <div className="video-card-info">
                <div>
                  <h3>Beyond the Universe</h3>
                  <p>Cosmic cinematic · Sci-fi</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>

            <article className="video-card">
              <div className="video-art art-dream">
                <div className="dream-sun"></div>
                <div className="dream-mountain mountain-back"></div>
                <div className="dream-mountain mountain-front"></div>
                <span className="art-label">02 / DREAMSCAPES</span>
                <span className="play-button">▶</span>
                <span className="art-caption">A world of wonder</span>
              </div>
              <div className="video-card-info">
                <div>
                  <h3>Dreamscape</h3>
                  <p>Fantasy atmosphere · Art</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>

            <article className="video-card">
              <div className="video-art art-future">
                <div className="future-sun"></div>
                <div className="future-building building-one"></div>
                <div className="future-building building-two"></div>
                <div className="future-building building-three"></div>
                <div className="future-road"></div>
                <span className="art-label">03 / FUTURE CITIES</span>
                <span className="play-button">▶</span>
                <span className="art-caption">Tomorrow, imagined</span>
              </div>
              <div className="video-card-info">
                <div>
                  <h3>Neon Tomorrow</h3>
                  <p>Future city · Cyberpunk</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>
          </div>

          <p className="showcase-disclaimer">
            ✦ Concept previews created with CSS · AI-generated videos coming in a future step
          </p>
        </section>
        
        <section className="about" id="about">
          <div className="showcase-heading">
            <span className="eyebrow">MEET THE CREATOR</span>
            <h2>Built with <span>vision.</span></h2>
            <p>
              Vulsar AI is a student-led project exploring the future of
              AI-powered video creation.
            </p>
          </div>

          <div className="about-card">
            <h3>Manzoor Ahmed</h3>
            <p className="creator-role">Founder & Developer of Vulsar AI</p>
            <p>
              My goal is to make creative video technology more accessible
              by building a platform where ideas can become cinematic videos.
              This project is part of my journey as a Computer Science student.
            </p>
          </div>
        </section>

 <section className="features" id="features">
          <div className="section-heading">
            <span className="eyebrow">THE FUTURE OF CREATIVITY</span>
            <h2>Your imagination has no limits.</h2>
            <p>Everything you need to bring your creative vision to life.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon purple">✦</div>
              <h3>Text to Video</h3>
              <p>Turn your written ideas into cinematic video concepts.</p>
              <span className="feature-link">Explore creation ↗</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon blue">▧</div>
              <h3>Image to Video</h3>
              <p>Imagine your still images moving with life and motion.</p>
              <span className="feature-link">Bring images to life ↗</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon pink">⌘</div>
              <h3>Made for Creators</h3>
              <p>A simple creative workspace for your next big idea.</p>
              <span className="feature-link">Discover more ↗</span>
            </article>
          </div>
        </section>

        <section className="closing" id="about">
          <span className="eyebrow">YOUR NEXT STORY STARTS HERE</span>
          <h2>Think it. Describe it. <span>Imagine it.</span></h2>
          <button onClick={() => document.getElementById('create')?.scrollIntoView({ behavior: 'smooth' })}>
            Start creating <span>→</span>
          </button>
        </section>
      </main>
      
      <section className="project-overview" id="project">
        <div className="showcase-heading">
          <span className="eyebrow">MY COMPUTER SCIENCE PROJECT</span>
          <h2>Introducing <span>Vulsar AI.</span></h2>
          <p>
            A student-led project by Manzoor Ahmed to explore AI-powered
            video creation and modern web development.
          </p>
        </div>

        <div className="about-card">
          <h3>Project Details</h3>
          <p><strong>Project name:</strong> Vulsar AI</p>
          <p><strong>Creator:</strong> Manzoor Ahmed</p>
          <p><strong>Purpose:</strong> Explore a platform that turns creative ideas into videos.</p>
          <p><strong>Technologies:</strong> React, JavaScript, HTML and CSS.</p>
          <p><strong>Current stage:</strong> Frontend prototype. Real AI video generation has not been connected yet.</p>
          <p>
            <strong>My contribution:</strong> Building the website interface,
            designing the layout, and learning how its components work.
          </p>
        </div>
      </section>

       
      <footer className="site-footer">
        <p>© 2026 Vulsar AI. All rights reserved.</p>
        <p>Designed and developed by <strong>Manzoor Ahmed</strong>.</p>
      </footer>

      <footer>
        <a className="logo footer-logo" href="#">
          <span className="logo-icon">V</span>
          <span>vulsar<span className="logo-ai">.ai</span></span>
        </a>
        <p>Made for the next generation of creators.</p>
        <span>© 2026 Vulsar AI</span>
      </footer>
    </div>
  )
}

export default App
