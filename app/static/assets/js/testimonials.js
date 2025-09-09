const testimonials = [
    {
      name: "Sarah K.",
      role: "UX Designer",
      company: "Brello",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      testimonial: "I was looking for a way to streamline my design process and the Anima's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"
    },
    {
      name: "Michael L.",
      role: "Creative Director",
      company: "Yo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 4,
      testimonial: "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"
    },
    {
      name: "Lauren M.",
      role: "UI Designer",
      company: "Boo",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      testimonial: "Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."
    }
  ];
  
  const starSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  `;
  
  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
  
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = testimonial.name;
    img.className = 'testimonial-image';
  
    const name = document.createElement('h3');
    name.className = 'testimonial-name';
    name.textContent = testimonial.name;
  
    const role = document.createElement('p');
    role.className = 'testimonial-role';
    role.textContent = `${testimonial.role} @${testimonial.company}`;
  
    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = `"${testimonial.testimonial}"`;
  
    const rating = document.createElement('div');
    rating.className = 'rating';
    
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('div');
      star.className = `star ${i < testimonial.rating ? 'filled' : 'empty'}`;
      star.innerHTML = starSVG;
      rating.appendChild(star);
    }
  
    card.append(img, name, role, text, rating);
    return card;
  }
  
  function initTestimonials() {
    const container = document.querySelector('.testimonials-grid');
    testimonials.forEach(testimonial => {
      container.appendChild(createTestimonialCard(testimonial));
    });
  }
  
  document.addEventListener('DOMContentLoaded', initTestimonials);