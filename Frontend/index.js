// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('shadow');
    navbar.classList.add('position-fixed', 'top-0', 'w-100');
    navbar.style.zIndex = 9999;
  } else {
    navbar.classList.remove('shadow', 'position-fixed', 'top-0', 'w-100');
    navbar.style.zIndex = '';
  }
});

// Back to Top Button
(function() {
  const btn = document.createElement('button');
  btn.innerText = "↑ Top";
  btn.className = "btn btn-warning position-fixed";
  btn.style.display = 'none';
  btn.style.bottom = '30px';
  btn.style.right = '30px';
  btn.style.zIndex = '9999';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// Fade-In Customer Reviews on Page Load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach((card, idx) => {
    card.style.opacity = 0;
    card.style.transition = 'opacity 0.7s ease';
    setTimeout(() => card.style.opacity = 1, 250 * idx);
  });
});

// Example: Toast Notification (for possible future buttons)
function showToast(msg) {
  let toast = document.createElement('div');
  toast.className = 'position-fixed bg-warning text-dark fw-bold px-3 py-2 rounded shadow';
  toast.style.bottom = '80px';
  toast.style.right = '30px';
  toast.style.zIndex = 9999;
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Example: (Future) Add to Cart Button Demo
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    showToast('Product added to cart!');
  });
});

// Example: (Future) Filtering for Categories
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.dataset.category;
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
  });
});

