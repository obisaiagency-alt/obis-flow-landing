import { useState } from 'react';
import { Search, RotateCw, RotateCcw, Cpu, ShieldCheck, Workflow, FileText } from 'lucide-react';

function SolutionCard({ icon: Icon, title, desc }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`solution-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-icon"><Icon /></div>
                    <h3>{title}</h3>
                    <div className="flip-hint"><RotateCw /></div>
                </div>
                <div className="card-back">
                    <div className="card-icon back-icon"><Icon /></div>
                    <p className="card-back-text">{desc}</p>
                    <div className="flip-hint"><RotateCcw /></div>
                </div>
            </div>
        </div>
    );
}

export default function Solutions({ t }) {
    return (
        <section id="soluciones" className="solutions-section">
            <div className="container">
                <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('solutions_title') }}></h2>
                <div className="solutions-grid">
                    <SolutionCard 
                        icon={Search} 
                        title={t('solution_1_title')} 
                        desc={t('solution_1_desc')} 
                    />
                    <SolutionCard 
                        icon={Cpu} 
                        title={t('solution_2_title')} 
                        desc={t('solution_2_desc')} 
                    />
                    <SolutionCard 
                        icon={Workflow} 
                        title={t('solution_3_title')} 
                        desc={t('solution_3_desc')} 
                    />
                    <SolutionCard 
                        icon={FileText} 
                        title={t('solution_4_title')} 
                        desc={t('solution_4_desc')} 
                    />
                    <SolutionCard 
                        icon={ShieldCheck} 
                        title={t('solution_5_title')} 
                        desc={t('solution_5_desc')} 
                    />
                </div>
            </div>
        </section>
    );
}
