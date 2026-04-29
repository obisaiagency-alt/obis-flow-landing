import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal active" onClick={(e) => {
            if (e.target.className === 'modal active') onClose();
        }}>
            <div className="modal-content">
                <span className="close-modal" onClick={onClose}><X /></span>
                <h2 className="gold-text-title" style={{ marginBottom: '20px' }}>{title}</h2>
                <div style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    );
}
