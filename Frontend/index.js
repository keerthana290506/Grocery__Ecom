// Cart logic
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    showToast('Added to cart!');
  });
});

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'position-fixed bottom-0 end-0 bg-warning text-dark px-4 py-2 rounded fw-bold shadow';
  toast.style.zIndex = 9999;
  toast.style.bottom = '60px';
  toast.style.right = '30px';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Simple filter logic for demo
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});
