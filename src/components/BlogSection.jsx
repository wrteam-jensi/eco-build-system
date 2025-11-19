import React from 'react';
import './BlogSection.css';

const posts = [
  {
    date: 'May 31, 2025',
    title: 'What Is Green Building?',
    excerpt:
      'For many, anything that is considered green is considered environmentally friendly and meets the need to prevent as many harmful effects on the planet as possible while providing an ecological and considerate solution...',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500&h=350&fit=crop',
  },
  {
    date: 'May 31, 2025',
    title: 'The Benefits Of Green Building Using The NUDURA Method',
    excerpt:
      'One of the unique methods of green construction is the NUDURA method, a Canadian method with modular and insulated construction forms in which the concrete is poured, but without sacrificing the excellent...',
    image: 'https://images.unsplash.com/photo-1529429617124-aee711a70412?w=500&h=350&fit=crop',
  },
  {
    date: 'May 31, 2025',
    title: 'Design Libraries Made From Ecological Materials',
    excerpt:
      'The ICF method has many advantages, one of the main advantages is a significant saving in construction/installation times, which makes any project extremely fast. The technology allows for stable...',
    image: 'https://images.unsplash.com/photo-1503387801564-843afdae0d1c?w=500&h=350&fit=crop',
  },
];

const BlogSection = () => (
  <section className="blog-section">
    <span className="blog-label">Latest New</span>
    <h2 className="blog-title">Green Building Information</h2>
    <div className="blog-grid">
      {posts.map((post) => (
        <article key={post.title} className="blog-card">
          <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}>
            <span className="blog-date">{post.date}</span>
          </div>
          <div className="blog-content">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more">Read More</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BlogSection;

