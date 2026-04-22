const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const ziel = document.getElementById('ziel')?.value.trim();

    if (!name || !ziel) {
      return;
    }

    const subject = encodeURIComponent('Anfrage kostenlose Probelektion - Gnusch Sprachschule');
    const body = encodeURIComponent(
      `Hoi Lara,\n\nich heisse ${name} und moechte gerne eine kostenlose Probelektion anfragen.\n\nMein Ziel:\n${ziel}\n\nLiebe Gruesse\n${name}`
    );

    // Update the recipient email if needed.
    window.location.href = `mailto:hallo@gnusch.ch?subject=${subject}&body=${body}`;
  });
}
