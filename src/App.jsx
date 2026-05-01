import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { useLanguage } from './hooks/useLanguage';
import WhatsAppButton from './components/WhatsAppButton';
import ExtraSections from './components/ExtraSections';
import './index.css';

function App() {
    const { lang, setLang, t } = useLanguage();
    const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null });

    useEffect(() => {
        if (modalConfig.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalConfig.isOpen]);

    const [selectedService, setSelectedService] = useState('');

    const openModal = (type) => {
        setModalConfig({ isOpen: true, type });
    };

    const closeModal = () => {
        setModalConfig({ isOpen: false, type: null });
    };

    return (
        <>
            <Header lang={lang} setLang={setLang} t={t} />
            <main>
                <Hero t={t} />
                <PainSection t={t} />
                <ExtraSections t={t} onSelectService={setSelectedService} />
                <Contact t={t} selectedService={selectedService} setSelectedService={setSelectedService} />
            </main>
            <Footer t={t} openModal={openModal} />
            
            <LegalModal 
                isOpen={modalConfig.isOpen} 
                onClose={closeModal}
                title={modalConfig.type ? t(`legal_${modalConfig.type}_title`) : ''}
                content={modalConfig.type ? t(`legal_${modalConfig.type}_text`) : ''}
            />
            
            <WhatsAppButton />
        </>
    );
}

export default App;
