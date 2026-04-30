import React, { useState } from 'react';
import { CheckCircle, ShieldAlert, Scale, Users, DollarSign, HelpCircle } from 'lucide-react';

export default function ExtraSections({ t }) {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (idx) => {
        setActiveFaq(activeFaq === idx ? null : idx);
    };

    const faqs = [
        { q: 'faq_1_q', a: 'faq_1_a' },
        { q: 'faq_2_q', a: 'faq_2_a' },
        { q: 'faq_3_q', a: 'faq_3_a' }
    ];

    const pricingTiers = [
        { title: 'price_1_title', cost: 'price_1_cost', desc: 'price_1_desc' },
        { title: 'price_2_title', cost: 'price_2_cost', desc: 'price_2_desc' }
    ];

    return (
        <>
            {/* Metodología */}
            <section id="metodologia" className="extra-section">
                <div className="container">
                    <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('methodology_title') }}></h2>
                    <div className="roadmap">
                        <div className="roadmap-item">
                            <div className="roadmap-num">1</div>
                            <h3>{t('methodology_1_title')}</h3>
                            <p>{t('methodology_1_desc')}</p>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-num">2</div>
                            <h3>{t('methodology_2_title')}</h3>
                            <p>{t('methodology_2_desc')}</p>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-num">3</div>
                            <h3>{t('methodology_3_title')}</h3>
                            <p>{t('methodology_3_desc')}</p>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-num">4</div>
                            <h3>{t('methodology_4_title')}</h3>
                            <p>{t('methodology_4_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section id="precios" className="extra-section darker">
                <div className="container">
                    <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('pricing_title') }}></h2>
                    <div className="pricing-grid">
                        {pricingTiers.map((tier, idx) => (
                            <div className="pricing-card" key={idx}>
                                <h3>{t(tier.title)}</h3>
                                <div className="price">{t(tier.cost)}</div>
                                <p>{t(tier.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manifiesto & Seguridad */}
            <section id="manifiesto" className="extra-section">
                <div className="container manifesto-flex">
                    <div className="manifesto-block">
                        <ShieldAlert className="gold-text" size={48} />
                        <h3>{t('manifesto_title')}</h3>
                        <p>{t('manifesto_desc')}</p>
                    </div>
                    <div className="manifesto-block">
                        <Scale className="gold-text" size={48} />
                        <h3>{t('security_title')}</h3>
                        <p>{t('security_desc')}</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="extra-section darker">
                <div className="container">
                    <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('faq_title') }}></h2>
                    <div className="faq-list">
                        {faqs.map((faq, idx) => (
                            <div className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx} onClick={() => toggleFaq(idx)}>
                                <div className="faq-question">
                                    <h4>{t(faq.q)}</h4>
                                    <HelpCircle className="faq-icon" size={20} />
                                </div>
                                <div className="faq-answer">
                                    <p>{t(faq.a)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
