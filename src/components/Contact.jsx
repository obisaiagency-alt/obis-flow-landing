export default function Contact({ t }) {
    return (
        <section id="contacto" className="cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>{t('cta_title')}</h2>
                        <p>{t('cta_desc')}</p>
                        <form action="https://formsubmit.co/obis.ai.agency@gmail.com" method="POST" className="cta-form">
                            <input type="hidden" name="_subject" value="Nuevo Contacto - Obis Agency" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div className="form-group">
                                <label htmlFor="name">{t('form_name_label')}</label>
                                <input type="text" name="nombre" id="name" placeholder={t('form_name_placeholder')} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('form_email_label')}</label>
                                <input type="email" name="email" id="email" placeholder={t('form_email_placeholder')} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">{t('form_phone_label')}</label>
                                <input type="tel" name="telefono" id="phone" placeholder={t('form_phone_placeholder')} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">{t('form_time_label')}</label>
                                <select name="horario" id="time" required defaultValue="">
                                    <option value="" disabled>{t('form_time_placeholder')}</option>
                                    <option value="morning">{t('form_time_morning')}</option>
                                    <option value="midday">{t('form_time_midday')}</option>
                                    <option value="afternoon">{t('form_time_afternoon')}</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-gold full-width">{t('form_submit')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
