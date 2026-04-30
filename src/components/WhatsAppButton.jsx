import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/34619070825" 
            className="whatsapp-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
