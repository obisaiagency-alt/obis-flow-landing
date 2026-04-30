import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ t }) {
    const reviewKeys = ['testimonial_1', 'testimonial_2', 'testimonial_3'];

    return (
        <section id="testimonios" className="testimonials-section">
            <div className="container">
                <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('testimonials_title') }}></h2>
                <div className="testimonials-grid">
                    {reviewKeys.map((key, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} className="star-icon" fill="#c5a059" size={18} />)}
                            </div>
                            <p className="testimonial-text">"{t(`${key}_text`)}"</p>
                            <div className="testimonial-author">
                                <h4>{t(`${key}_author`)}</h4>
                                <span>{t(`${key}_role`)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
