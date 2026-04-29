import { AlertCircle } from 'lucide-react';

export default function PainSection({ t }) {
    return (
        <section id="beneficios" className="pain-section">
            <div className="container">
                <div className="pain-grid">
                    <div className="pain-text">
                        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('pain_title') }}></h2>
                        <p>{t('pain_desc')}</p>
                        <ul className="pain-list">
                            <li><AlertCircle /> <span>{t('pain_feature_1')}</span></li>
                            <li><AlertCircle /> <span>{t('pain_feature_2')}</span></li>
                            <li><AlertCircle /> <span>{t('pain_feature_3')}</span></li>
                        </ul>
                    </div>
                    <div className="pain-image-placeholder">
                        <div className="stats-card">
                            <span className="gold-text big-number">75%</span>
                            <p>{t('stat_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
