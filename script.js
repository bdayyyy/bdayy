/* ═══════════════════════════════════════════
   LIVANSHI BEST FRIENDS DAY WEBSITE — SCRIPT.JS
   Dreamy Scrapbook Experience
═══════════════════════════════════════════ */

'use strict';

// ═══════════════════════════════════════════
// ════ EDITABLE CONTENT CONFIG ════
// ═══════════════════════════════════════════

const CONFIG = {

  loveItems: [
    { emoji: '😊', text: 'Your Smile' },
    { emoji: '🤣', text: 'Your Laugh' },
    { emoji: '🫂', text: 'Your Hugs' },
    { emoji: '💛', text: 'Your Kindness' },
    { emoji: '🌙', text: 'Your Weirdness' },
    { emoji: '💬', text: 'How You Talk' },
    { emoji: '🤝', text: 'Your Loyalty' },
    { emoji: '✨', text: 'Your Vibe' },
    { emoji: '🌸', text: 'Your Heart' },
    { emoji: '🦋', text: 'Your Spirit' },
  ],

  photos: [
    { src: 'images/photo1.png', emoji: '📸', caption: 'Always with you in your ups and downs ❤️' },
    { src: 'images/photo2.jpg', emoji: '🎉', caption: 'We fight, we fix, we stay ♥' },
    { src: 'images/photo3.jpg', emoji: '🌸', caption: 'We have been together and we always will be 💕' },
    { src: 'images/photo4.jpg', emoji: '🫶', caption: 'We have fought many times but we are still together 💖' }
  ],

  memories: [
    {
      date: 'The Very Beginning',
      emoji: '🌟',
      title: 'When It All Started',
      desc: 'Some friendships begin quietly, without fanfare. But looking back, that moment was everything — the first page of our favourite story.'
    },
    {
      date: 'That Unforgettable Day',
      emoji: '🌸',
      title: 'Laughing Until We Couldn\'t Breathe',
      desc: 'We laughed so hard that evening. About what? Doesn\'t even matter. The laughing was everything.'
    },
    {
      date: 'A Random Afternoon',
      emoji: '☁️',
      title: 'Doing Nothing, Together',
      desc: 'Some of the best memories aren\'t big adventures. They\'re just being together on a lazy day, and it feeling like the whole world.'
    },
    {
      date: 'The Time You Showed Up',
      emoji: '💛',
      title: 'You Were There Without Being Asked',
      desc: 'That\'s who you are. You show up. Quietly. Completely. Without needing a reason. That\'s the kind of friend you are.'
    },
    {
      date: 'Right Now',
      emoji: '🎀',
      title: 'Still Going Strong',
      desc: 'Time passes, things change — but not us. Some things just get better. We are one of those things.'
    },
  ],

  song: {
    title: 'Rakhlo Tum Chupaake',
    artist: 'Arpit Bala, Adil',
    src: 'song.mp3',
    cover: 'images/song_album.jfif',
    coverEmoji: '🎵',
  },

  reasons: [
    { text: 'Because you make me feel understood without having to explain everything', emoji: '💛' },
    { text: 'Because your laugh is literally the best sound', emoji: '😂' },
    { text: 'Because you love with your whole heart, no half-measures', emoji: '❤️' },
    { text: 'Because you\'re weird in the most perfect, irreplaceable way', emoji: '🌀' },
    { text: 'Because you never give up — on anything or anyone, including me', emoji: '🦁' },
    { text: 'Because you somehow make hard days easier just by existing', emoji: '☀️' },
    { text: 'Because choosing you as my best friend is the easiest thing I\'ve ever done', emoji: '✨' },
  ],

};

// ═══════════════════════════════════════════
// ════ THEME MANAGER ════
// ═══════════════════════════════════════════

const ThemeManager = {
  init() {
    const saved = localStorage.getItem('livanshi-theme') || 'day';
    this.set(saved, false);
    document.getElementById('themeToggle').addEventListener('click', () => this.toggle());
  },
  toggle() {
    const current = document.body.classList.contains('day-theme') ? 'day' : 'night';
    this.set(current === 'day' ? 'night' : 'day', true);
  },
  set(theme, animate = true) {
    if (animate) {
      document.body.style.transition = 'background 1.2s ease';
    }
    document.body.classList.remove('day-theme', 'night-theme');
    document.body.classList.add(theme + '-theme');
    localStorage.setItem('livanshi-theme', theme);
  }
};

// ═══════════════════════════════════════════
// ════ AMBIENT EFFECTS ════
// ═══════════════════════════════════════════

const AmbientFX = {
  init() {
    this.createStars();
    this.createSparkles();
    this.createPetals();
  },

  createStars() {
    const layer = document.getElementById('starsLayer');
    for (let i = 0; i < 60; i++) {
      const el = document.createElement('div');
      el.className = 'star-dot';
      const size = Math.random() * 3 + 1.5;
      el.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --dur:${(Math.random() * 3 + 2).toFixed(1)}s;
        --del:${(Math.random() * 4).toFixed(1)}s;
      `;
      layer.appendChild(el);
    }
  },

  createSparkles() {
    const layer = document.getElementById('sparklesLayer');
    const sparkleChars = ['✨', '⭐', '🌟', '💫'];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'sparkle-dot';
      el.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
      el.style.cssText = `
        left:${Math.random() * 95}%;
        top:${Math.random() * 90}%;
        font-size:${Math.random() * 10 + 10}px;
        --del:${(Math.random() * 5).toFixed(1)}s;
      `;
      layer.appendChild(el);
    }
  },

  createPetals() {
    const layer = document.getElementById('petalsLayer');
    for (let i = 0; i < 14; i++) {
      const el = document.createElement('div');
      el.className = 'petal';
      el.style.cssText = `
        left:${Math.random() * 100}%;
        top:-20px;
        --dur:${(Math.random() * 6 + 6).toFixed(1)}s;
        --del:${(Math.random() * 8).toFixed(1)}s;
        transform: rotate(${Math.random() * 360}deg);
      `;
      layer.appendChild(el);
    }
  }
};

// ═══════════════════════════════════════════
// ════ LANDING PAGE ════
// ═══════════════════════════════════════════

const Landing = {
  init() {
    const openBtn = document.getElementById('openBtn');
    const envelope = document.getElementById('envelope');

    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
    });

    openBtn.addEventListener('click', () => {
      envelope.classList.add('open');
      setTimeout(() => {
        this.launch();
      }, 800);
    });
  },

  launch() {
    const landing = document.getElementById('landingPage');
    const scrapbook = document.getElementById('scrapbook');
    const player = document.getElementById('musicPlayer');

    landing.classList.add('exit');

    SparkleEffect.burst(window.innerWidth / 2, window.innerHeight / 2, 20);

    setTimeout(() => {
      landing.classList.add('hidden');
      scrapbook.classList.remove('hidden');
      player.classList.remove('hidden');
      Slides.init();
    }, 800);
  }
};

// ═══════════════════════════════════════════
// ════ SPARKLE EFFECT ════
// ═══════════════════════════════════════════

const SparkleEffect = {
  burst(x, y, count = 12) {
    const chars = ['✨', '⭐', '💫', '🌟', '🎊'];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed; left:${x}px; top:${y}px; z-index:9999;
        font-size:${Math.random() * 16 + 12}px;
        pointer-events:none;
        animation: sparkBurst ${(Math.random() * 0.8 + 0.8).toFixed(2)}s ease-out forwards;
        --dx:${(Math.random() - 0.5) * 200}px;
        --dy:${(Math.random() - 0.5) * 200}px;
      `;
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }
    if (!document.getElementById('sparkBurstKF')) {
      const style = document.createElement('style');
      style.id = 'sparkBurstKF';
      style.textContent = `
        @keyframes sparkBurst {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
};

// ═══════════════════════════════════════════
// ════ SLIDES ════
// ═══════════════════════════════════════════

const Slides = {
  current: 1,
  total: 0,
  slides: [],

  init() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.total = this.slides.length;

    document.getElementById('totalSlides').textContent = this.total;

    this.buildLoveGrid();
    this.buildPolaroids();
    this.buildTimeline();
    this.buildReasons();
    this.initGiftBox();

    this.slides.forEach(s => s.classList.remove('active', 'exit-left', 'exit-right'));

    this.current = 1;
    this.slides[0].classList.add('active');
    document.getElementById('currentSlide').textContent = 1;
    this.updateNavButtons();

    document.getElementById('prevBtn').addEventListener('click', () => this.prev());
    document.getElementById('nextBtn').addEventListener('click', () => this.next());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') this.next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   this.prev();
    });

    this.initSwipe();
  },

  goTo(n, direction = 'right') {
    if (n < 1 || n > this.total || n === this.current) return;

    const prevIdx = this.current - 1;
    const nextIdx = n - 1;

    this.slides.forEach(s => s.classList.remove('active', 'exit-left', 'exit-right'));

    this.slides[prevIdx].classList.add(direction === 'right' ? 'exit-left' : 'exit-right');
    this.slides[nextIdx].classList.add('active');

    this.slides[nextIdx]
      .querySelectorAll('.love-card, .memory-item, .reason-card')
      .forEach((el, j) => {
        el.style.animationDelay = `${j * 0.08}s`;
      });

    this.current = n;
    document.getElementById('currentSlide').textContent = this.current;
    this.updateNavButtons();
  },

  updateNavButtons() {
    document.getElementById('prevBtn').disabled = this.current === 1;
    document.getElementById('nextBtn').disabled = this.current === this.total;
  },

  next() {
    if (this.current < this.total) this.goTo(this.current + 1, 'right');
  },

  prev() {
    if (this.current > 1) this.goTo(this.current - 1, 'left');
  },

  initSwipe() {
    let startX = 0, startY = 0;
    const container = document.getElementById('slidesContainer');

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) this.next();
        else this.prev();
      }
    }, { passive: true });
  },

  buildLoveGrid() {
    const grid = document.getElementById('loveGrid');
    if (!grid) return;
    CONFIG.loveItems.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'love-card';
      card.style.animationDelay = `${i * 0.1}s`;
      card.innerHTML = `
        <span class="love-card-emoji">${item.emoji}</span>
        <span class="love-card-text">${item.text}</span>
      `;
      grid.appendChild(card);
    });
  },

  buildPolaroids() {
    const track = document.getElementById('polaroidTrack');
    if (!track) return;

    CONFIG.photos.forEach((photo, i) => {
      const pol = document.createElement('div');
      pol.className = 'polaroid';
      pol.style.setProperty('--rot', `${(Math.random() - 0.5) * 6}deg`);
      pol.dataset.idx = i;

      const imgEl = photo.src
        ? `<img src="${photo.src}" alt="Memory ${i + 1}" class="polaroid-img">`
        : `<div class="polaroid-img-placeholder">${photo.emoji}</div>`;

      pol.innerHTML = `${imgEl}<div class="polaroid-caption">${photo.caption}</div>`;

      if (i === 0) pol.classList.add('active-pol');
      track.appendChild(pol);
    });

    Polaroid.init();
  },

  buildTimeline() {
    const el = document.getElementById('timelineEl');
    if (!el) return;
    CONFIG.memories.forEach((mem, i) => {
      const item = document.createElement('div');
      item.className = 'memory-item';
      item.style.animationDelay = `${i * 0.12}s`;
      item.innerHTML = `
        <div class="memory-card">
          <div class="memory-date">${mem.date}</div>
          <div class="memory-title">${mem.title} <span class="memory-emoji">${mem.emoji}</span></div>
          <div class="memory-desc">${mem.desc}</div>
        </div>
      `;
      el.appendChild(item);
    });
  },

  buildReasons() {
    const el = document.getElementById('reasonsEl');
    if (!el) return;
    CONFIG.reasons.forEach((r, i) => {
      const card = document.createElement('div');
      card.className = 'reason-card';
      card.style.animationDelay = `${i * 0.1}s`;
      card.innerHTML = `
        <span class="reason-num">${i + 1 < 10 ? '0' + (i + 1) : i + 1}</span>
        <span class="reason-text">${r.text}</span>
        <span class="reason-emoji">${r.emoji}</span>
      `;
      el.appendChild(card);
    });
  },

  initGiftBox() {
    const openBtn      = document.getElementById('openGiftBtn');
    const giftBox      = document.getElementById('giftBox');
    const secretMessage = document.getElementById('secretMessage');

    if (!openBtn) return;

    openBtn.addEventListener('click', () => {
      giftBox.classList.add('opened');
      openBtn.classList.add('hidden');

      Confetti.rain();
      SparkleEffect.burst(window.innerWidth / 2, window.innerHeight / 3, 24);

      setTimeout(() => {
        secretMessage.classList.remove('hidden');
      }, 700);
    });
  }
};

// ═══════════════════════════════════════════
// ════ POLAROID CAROUSEL ════
// ═══════════════════════════════════════════

const Polaroid = {
  current: 0,
  total: 0,

  init() {
    const pols = document.querySelectorAll('.polaroid');
    this.total = pols.length;
    this.goTo(0);

    document.getElementById('polPrev').addEventListener('click', () => this.prev());
    document.getElementById('polNext').addEventListener('click', () => this.next());
  },

  goTo(n) {
    const pols = document.querySelectorAll('.polaroid');
    this.current = (n + this.total) % this.total;

    pols.forEach((pol, i) => {
      pol.classList.remove('active-pol', 'prev-pol', 'next-pol');
      if (i === this.current) pol.classList.add('active-pol');
      else if (i === (this.current - 1 + this.total) % this.total) pol.classList.add('prev-pol');
      else pol.classList.add('next-pol');
    });

    const counter = document.getElementById('polCounter');
    if (counter) {
      counter.textContent = `${String(this.current + 1).padStart(2, '0')} / ${String(this.total).padStart(2, '0')}`;
    }
  },

  next() { this.goTo(this.current + 1); },
  prev() { this.goTo(this.current - 1); }
};

// ═══════════════════════════════════════════
// ════ MUSIC PLAYER ════
// ═══════════════════════════════════════════

const MusicPlayer = {
  isPlaying: false,
  audio: null,

  init() {
    this.audio = document.getElementById('audioEl');
    const song = CONFIG.song;

    document.getElementById('mpSong').textContent   = song.title;
    document.getElementById('mpArtist').textContent = song.artist;

    const cover = document.getElementById('mpCover');
    if (song.cover) {
      cover.src = song.cover;
    } else {
      cover.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90' style='background:%23EDE6FF;border-radius:16px'><text y='62' font-size='56' x='50%' text-anchor='middle'>${song.coverEmoji}</text></svg>`;
    }

    if (song.src) this.audio.src = song.src;

    document.getElementById('mpPlay').addEventListener('click', () => this.togglePlay());

    const progress = document.getElementById('mpProgress');
    progress.addEventListener('input', () => {
      if (this.audio.duration) {
        this.audio.currentTime = (progress.value / 100) * this.audio.duration;
      }
    });

    const volume = document.getElementById('mpVolume');
    volume.addEventListener('input', () => {
      this.audio.volume = parseFloat(volume.value);
    });
    this.audio.volume = 0.7;

    this.audio.addEventListener('timeupdate', () => this.updateProgress());

    document.getElementById('mpToggle').addEventListener('click', () => {
      document.getElementById('musicPlayer').classList.toggle('collapsed');
    });
  },

  play() {
    if (!CONFIG.song.src) {
      this.isPlaying = true;
      this.updatePlayUI();
      return;
    }
    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updatePlayUI();
    }).catch(() => { this.isPlaying = false; });
  },

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayUI();
  },

  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
  },

  updatePlayUI() {
    document.getElementById('mpPlay').textContent = this.isPlaying ? '⏸' : '▶';
  },

  updateProgress() {
    if (!this.audio.duration) return;
    const pct = (this.audio.currentTime / this.audio.duration) * 100;
    document.getElementById('mpProgress').value = pct;
    document.getElementById('mpCurrentTime').textContent = this.formatTime(this.audio.currentTime);
    document.getElementById('mpTotalTime').textContent   = this.formatTime(this.audio.duration);
  },

  formatTime(s) {
    if (isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  }
};

// ═══════════════════════════════════════════
// ════ CONFETTI ════
// ═══════════════════════════════════════════

const Confetti = {
  colors: ['#FFB6C1', '#A6C8FF', '#C4A8E8', '#FFD700', '#98FB98', '#E7B8A5', '#DDA0DD'],

  rain() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 80; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const shape = Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '0%' : '0 50%';
      el.style.cssText = `
        left:${Math.random() * 100}%;
        top:-10px;
        background:${color};
        width:${Math.random() * 8 + 4}px;
        height:${Math.random() * 10 + 5}px;
        border-radius:${shape};
        --dur:${(Math.random() * 2 + 2).toFixed(1)}s;
        --del:${(Math.random() * 2).toFixed(1)}s;
        --dx:${((Math.random() - 0.5) * 150).toFixed(0)}px;
      `;
      container.appendChild(el);
    }

    setTimeout(() => { container.innerHTML = ''; }, 6000);
  }
};

// ═══════════════════════════════════════════
// ════ INIT ════
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  AmbientFX.init();
  Landing.init();
  MusicPlayer.init();

  document.querySelectorAll('.card-sticker, .landing-sticker').forEach(el => {
    el.addEventListener('click', (e) => {
      SparkleEffect.burst(e.clientX, e.clientY, 8);
    });
  });
});
