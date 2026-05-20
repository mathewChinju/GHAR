/* Chakki Ghar - small site interactions */

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    menuToggle.classList.add('open');
  });
}
if (menuClose && mobileMenu) {
  menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle?.classList.remove('open');
  });
}

// Reveal on scroll with sibling stagger
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const parent = e.target.parentNode;
      const siblings = parent ? Array.from(parent.children).filter((c) => c.classList.contains('reveal')) : [e.target];
      const idx = siblings.indexOf(e.target);
      e.target.style.transitionDelay = `${Math.min(idx, 5) * 0.09}s`;
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach((el) => io.observe(el));

/* ========== Webflow-style effects ========== */

// 1. Scroll progress indicator (thin yellow bar at top of viewport)
const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress, { passive: true });
updateProgress();

// 2. Hero video parallax + subtle zoom
const heroVideo = document.querySelector('.hero-video');
const hero = document.querySelector('.hero');
if (heroVideo && hero) {
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y < vh * 1.2) {
        const translate = y * 0.35;
        const scale = 1.04 + (y / vh) * 0.06;
        heroVideo.style.transform = `translateY(${translate}px) scale(${scale})`;
      }
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// 3. Magnetic primary buttons — gentle pull toward cursor on hover
const magneticButtons = document.querySelectorAll('.btn-marigold, .btn-primary, .btn-outline-light, .btn-kumkum, .btn-peacock');
magneticButtons.forEach((btn) => {
  btn.style.willChange = 'transform';
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// 4. Animate hero entrance once on load (waits a tick so video begins playing)
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.hero-content');
  if (content) {
    requestAnimationFrame(() => content.classList.add('entered'));
  }
});

// Accordion (product page)
document.querySelectorAll('.accordion-trigger').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    item.classList.toggle('open');
  });
});

// Product options (size, pack)
document.querySelectorAll('.option-row .options').forEach((row) => {
  row.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      row.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});

// Qty stepper
document.querySelectorAll('.qty').forEach((q) => {
  const input = q.querySelector('input');
  const minus = q.querySelector('.minus');
  const plus = q.querySelector('.plus-btn');
  minus?.addEventListener('click', () => {
    input.value = Math.max(1, parseInt(input.value || '1', 10) - 1);
  });
  plus?.addEventListener('click', () => {
    input.value = parseInt(input.value || '1', 10) + 1;
  });
});

// Bundle builder
const bundle = {
  items: [],
  target: 6,
};
function updateBundleUI() {
  const list = document.getElementById('bundleList');
  const totals = document.getElementById('bundleTotals');
  const counter = document.getElementById('bundleCounter');
  if (!list) return;
  list.innerHTML = '';
  let total = 0;
  bundle.items.forEach((it, idx) => {
    total += it.price;
    const li = document.createElement('li');
    li.innerHTML = `<span>${it.name}</span><span>₹${it.price} <span class="x" data-idx="${idx}">✕</span></span>`;
    list.appendChild(li);
  });
  const discount = bundle.items.length >= bundle.target ? Math.round(total * 0.15) : 0;
  const finalTotal = total - discount;
  if (totals) {
    totals.innerHTML = `<span>Total</span><span>₹${finalTotal}${discount ? ` <small style="font-size:0.7em;color:var(--terracotta);">(–₹${discount})</small>` : ''}</span>`;
  }
  if (counter) {
    counter.textContent = `${bundle.items.length} / ${bundle.target}`;
  }
  list.querySelectorAll('.x').forEach((x) => {
    x.addEventListener('click', () => {
      bundle.items.splice(parseInt(x.dataset.idx, 10), 1);
      updateBundleUI();
    });
  });
}
document.querySelectorAll('.b-card .add button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.b-card');
    bundle.items.push({
      name: card.querySelector('.name').textContent,
      price: parseInt(card.dataset.price || '200', 10),
    });
    updateBundleUI();
    btn.textContent = 'Added';
    setTimeout(() => (btn.textContent = 'Add'), 900);
  });
});
updateBundleUI();
