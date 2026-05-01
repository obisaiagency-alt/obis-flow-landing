import { useState } from 'react';

export default function Contact({ t, selectedService, setSelectedService }) {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/obis.ai.agency@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                
                // Disparar evento de conversión en Google Analytics
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'generate_lead', {
                        'event_category': 'engagement',
                        'event_label': 'Formulario Auditoría'
                    });
                }

                form.reset();
                setTimeout(() => setStatus(''), 5000); // Ocultar mensaje de éxito después de 5 seg
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contacto" className="cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>{t('cta_title')}</h2>
                        <p>{t('cta_desc')}</p>
                        <form onSubmit={handleSubmit} className="cta-form">
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
                                <label htmlFor="service">{t('form_service_label')}</label>
                                <select 
                                    name="servicio" 
                                    id="service" 
                                    value={selectedService} 
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>{t('form_service_placeholder')}</option>
                                    <option value="solution_1_title">{t('solution_1_title')}</option>
                                    <option value="solution_4_title">{t('solution_4_title')}</option>
                                    <option value="solution_2_title">{t('solution_2_title')}</option>
                                    <option value="solution_3_title">{t('solution_3_title')}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">{t('form_time_label')}</label>
                                <select name="horario" id="time" defaultValue="">
                                    <option value="" disabled>{t('form_time_placeholder')}</option>
                                    <option value="morning">{t('form_time_morning')}</option>
                                    <option value="midday">{t('form_time_midday')}</option>
                                    <option value="afternoon">{t('form_time_afternoon')}</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-gold full-width" disabled={status === 'loading'}>
                                {status === 'loading' ? t('form_sending') : t('form_submit')}
                            </button>
                            
                            {status === 'success' && <div className="form-message success fade-in">{t('form_success')}</div>}
                            {status === 'error' && <div className="form-message error fade-in">{t('form_error')}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
