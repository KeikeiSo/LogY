import React, { useContext } from 'react';
import { TranslationsContext } from '../../App';
import './ReserveButton.css';

const ReserveButton = () => {
    const { translations } = useContext(TranslationsContext);
    
    return (
        <div className="reserve-button">
            <button onClick={() => window.location.href = 'https://example.com'}>
                {translations.reserve}
            </button>
        </div>
    )
}

export default ReserveButton;
