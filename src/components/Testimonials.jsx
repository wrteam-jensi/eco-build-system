import React, { useEffect, useMemo, useState } from 'react';
import { QuoteIcon } from './Icon';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.',
    author: 'Cody Fisher',
    role: 'CEO Themesflat',
    color: '#f0f5fb',
  },
  {
    quote:
      'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation.',
    author: 'Courtney Henry',
    role: 'CEO Themesflat',
    color: '#fbecea',
  },
  {
    quote:
      'They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    author: 'Esther Howard',
    role: 'CEO Themesflat',
    color: '#eaf6f2',
  },
  {
    quote:
      'Our property management experience has exceeded expectations. The team remains proactive, transparent, and incredibly easy to work with.',
    author: 'Annette Black',
    role: 'CEO Themesflat',
    color: '#f3ecfb',
  },
  {
    quote:
      'Partnering with this team has streamlined our projects immensely. Their communication is clear, timelines are realistic, and the craftsmanship is consistently top-notch.',
    author: 'Robert Fox',
    role: 'Operations Director',
    color: '#e7f1ff',
  },
  {
    quote:
      'From the first consultation through delivery, they provided thoughtful guidance and ensured every compliance detail was handled without stress.',
    author: 'Leslie Alexander',
    role: 'Founder, BuildSmart',
    color: '#fff4e6',
  },
  {
    quote:
      'They bring a rare combination of creativity and practicality. Every recommendation they made had a measurable impact on our sustainability goals.',
    author: 'Jenny Wilson',
    role: 'Sustainability Lead',
    color: '#eaf9f2',
  },
  {
    quote:
      'Professional, responsive, and truly committed to quality. Our entire leadership team enjoys working with them because they make complex builds feel effortless.',
    author: 'Kristin Watson',
    role: 'VP Construction',
    color: '#f4e9ff',
  },
  {
    quote:
      'They handled our multi-phase renovation with precision. Every deliverable was clearly communicated and the timeline stayed exactly where they promised.',
    author: 'Marvin McKinney',
    role: 'Facilities Director',
    color: '#f2f9ff',
  },
  {
    quote:
      'From budgeting to execution, the process felt organized and transparent. Their sustainable material suggestions also lowered our operating costs.',
    author: 'Kathryn Murphy',
    role: 'Chief Strategy Officer',
    color: '#fff5f0',
  },
  {
    quote:
      'The engineering insights we received early on saved weeks of rework. They truly partner with you rather than just delivering a bid.',
    author: 'Arlene McCoy',
    role: 'Project Lead',
    color: '#e9f7ff',
  },
  {
    quote:
      'Their site managers are attentive, safety-focused, and collaborative with our internal teams. We now treat them as an extension of our staff.',
    author: 'Savannah Nguyen',
    role: 'Construction Manager',
    color: '#fef1ff',
  },
  {
    quote:
      'Even under demanding deadlines, they kept quality at the forefront. The finished space exceeded expectations and required minimal punch-list items.',
    author: 'Jerome Bell',
    role: 'Owner, Lighthouse Estates',
    color: '#e8fbf2',
  },
  {
    quote:
      'They consistently propose smart, cost-conscious alternatives that never compromise design intent. That level of care is rare.',
    author: 'Theresa Webb',
    role: 'Design Principal',
    color: '#fff7ea',
  },
  {
    quote:
      'Communication was always proactive. We received weekly visual updates which helped our remote stakeholders stay aligned.',
    author: 'Eleanor Pena',
    role: 'Program Director',
    color: '#eef2ff',
  },
  {
    quote:
      'Our tenants complimented the crew for being courteous and keeping the site tidy. That professionalism matters when work happens in occupied buildings.',
    author: 'Wade Warren',
    role: 'Property Manager',
    color: '#f3ffee',
  },
  {
    quote:
      'Permitting hurdles were resolved swiftly thanks to their deep municipal relationships. It fast-tracked our entire build schedule.',
    author: 'Guy Hawkins',
    role: 'Real Estate Developer',
    color: '#fef0f2',
  },
  {
    quote:
      'We relied on them for both design input and execution. Having a single accountable partner simplified everything.',
    author: 'Courtney Aguilar',
    role: 'Operations VP',
    color: '#ecf7ff',
  },
  {
    quote:
      'Every touchpoint—from procurement to turnover—felt polished. They set the bar for what a modern construction experience should be.',
    author: 'Brittany Elliot',
    role: 'Head of Workplace',
    color: '#fff2ed',
  },
  {
    quote:
      'Their digital coordination tools gave us real-time visibility into progress. Decisions were faster because data was always at our fingertips.',
    author: 'Alison Perry',
    role: 'Innovation Director',
    color: '#edf5ff',
  },
];

const getVisibleCount = (width) => {
  if (width >= 1500) return 4;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
};

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const nextCount = getVisibleCount(window.innerWidth);
      setVisibleCount((prev) => {
        if (prev === nextCount) return prev;
        setCurrentSlide(0);
        return nextCount;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < testimonials.length; i += visibleCount) {
      chunks.push(testimonials.slice(i, i + visibleCount));
    }
    return chunks;
  }, [visibleCount]);

  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));

  const canPrev = currentSlide > 0;
  const canNext = currentSlide < slides.length - 1;

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-label">Our Testimonials</span>
        <h2 className="testimonials-title">What Do The Customers Write About Us?</h2>
        <p className="testimonials-subtitle">
          We don&apos;t just build buildings, we research and develop new products every day to improve and advance
          the construction industry in Israel.
        </p>
      </div>

      <div className="testimonials-viewport">
        <div
          className="testimonials-track"
          data-visible={visibleCount}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((group, slideIndex) => (
            <div className="testimonials-slide" key={slideIndex}>
              {group.map((item) => (
                <article key={item.author} className="testimonial-card">
                  <div className="" aria-hidden="true">
                    <QuoteIcon />
                  </div>
                  <p className="testimonial-text">{item.quote}</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar" style={{ backgroundColor: item.color }} aria-hidden="true" />
                    <div className="testimonial-meta">
                      <span className="testimonial-author">{item.author}</span>
                      <span className="testimonial-role">{item.role}</span>
                      <div className="testimonial-stars" aria-label="5 star rating">
                        {[...Array(5)].map((_, idx) => (
                          <span key={idx} className="star-symbol">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-slider" role="navigation" aria-label="Testimonials slider controls">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Show testimonial slide ${index + 1}`}
              aria-current={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

