import React, { useState } from 'react';
import { CheckCircle, ShieldAlert, Scale, Users, DollarSign, HelpCircle, Search, Cpu, Workflow, FileText, ShieldCheck, Lock, UserCheck } from 'lucide-react';

export default function ExtraSections({ t, onSelectService }) {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (idx) => {
        setActiveFaq(activeFaq === idx ? null : idx);
    };

    const faqs = [
        { q: 'faq_1_q', a: 'faq_1_a' },
        { q: 'faq_2_q', a: 'faq_2_a' },
        { q: 'faq_3_q', a: 'faq_3_a' },
        { q: 'faq_4_q', a: 'faq_4_a' },
        { q: 'faq_5_q', a: 'faq_5_a' },
        { q: 'faq_6_q', a: 'faq_6_a' },
        { q: 'faq_7_q', a: 'faq_7_a' }
    ];

    const pricingTiers = [
        { 
            title: 'solution_1_title', 
            cost: 'price_web', 
            desc: 'solution_1_desc',
            icon: <Search className="gold-text" size={32} />
        },
        { 
            title: 'solution_4_title', 
            cost: 'price_consultation', 
            desc: 'solution_4_desc',
            icon: <FileText className="gold-text" size={32} />
        },
        { 
            title: 'solution_2_title', 
            cost: 'price_support', 
            desc: 'solution_2_desc',
            icon: <Cpu className="gold-text" size={32} />
        },
        { 
            title: 'solution_3_title', 
            cost: 'price_automation', 
            desc: 'solution_3_desc',
            icon: <Workflow className="gold-text" size={32} />
        }
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

            {/* Precios / Servicios Modulares */}
            <section id="soluciones" className="extra-section darker">
                <div className="container">
                    <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('pricing_title') }}></h2>
                    <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
                        Selecciona los módulos que tu despacho necesita. Ofrecemos soluciones independientes y combinables según tus objetivos.
                    </p>
                    <div className="pricing-grid modular">
                        {pricingTiers.map((tier, idx) => (
                            <div className="pricing-card modular-card" key={idx}>
                                <div className="card-icon-small">{tier.icon}</div>
                                <h3>{t(tier.title)}</h3>
                                <div className="price-tag">{t(tier.cost)}</div>
                                <p className="tier-desc">{t(tier.desc)}</p>
                                <a 
                                    href="#contacto" 
                                    className="btn btn-outline full-width" 
                                    style={{ marginTop: 'auto' }}
                                    onClick={() => onSelectService(tier.title)}
                                >
                                    {t('hero_btn_start')}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manifiesto de IA Ética */}
            <section id="manifiesto" className="extra-section">
                <div className="container">
                    <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('manifesto_title') }}></h2>
                    <div className="manifesto-grid">
                        <div className="manifesto-block">
                            <ShieldAlert className="gold-text" size={48} />
                            <h3>{t('manifesto_1_title')}</h3>
                            <p>{t('manifesto_1_desc')}</p>
                        </div>
                        <div className="manifesto-block">
                            <Lock className="gold-text" size={48} />
                            <h3>{t('manifesto_2_title')}</h3>
                            <p>{t('manifesto_2_desc')}</p>
                        </div>
                        <div className="manifesto-block">
                            <UserCheck className="gold-text" size={48} />
                            <h3>{t('manifesto_3_title')}</h3>
                            <p>{t('manifesto_3_desc')}</p>
                        </div>
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
