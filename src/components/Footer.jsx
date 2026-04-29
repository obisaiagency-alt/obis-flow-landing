import { Scale, Mail } from 'lucide-react';

export default function Footer({ t, openModal }) {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <div className="logo">
                        <Scale className="gold-text" style={{ marginRight: '8px', width: '28px', height: '28px' }} />
                        <span className="gold-text">OBIS</span> AGENCY
                    </div>
                    <p>{t('footer_desc')}</p>
                    <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail className="gold-text" style={{ width: '18px', height: '18px' }} />
                        <a href="mailto:obis.ai.agency@gmail.com" 
                           style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} 
                           onMouseOver={(e) => e.target.style.color='#c5a059'} 
                           onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>
                            obis.ai.agency@gmail.com
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <p>{t('footer_rights')}</p>
                    <div className="legal-links">
                        <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }}>{t('footer_privacy')}</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); openModal('terms'); }}>{t('footer_terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
