export default function Hero({ t }) {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="fade-in" dangerouslySetInnerHTML={{ __html: t('hero_title') }}></h1>
                <p className="subtitle fade-in-delay">{t('hero_subtitle')}</p>
                <div className="hero-actions fade-in-delay-2">
                    <a href="#contacto" className="btn btn-gold">{t('hero_btn_start')}</a>
                    <a href="#soluciones" className="btn btn-outline">{t('hero_btn_solutions')}</a>
                </div>
            </div>
        </section>
    );
}
