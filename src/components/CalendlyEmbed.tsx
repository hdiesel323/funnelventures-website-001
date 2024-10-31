import { useEffect } from 'react';

interface CalendlyEmbedProps {
    url: string;
    height?: number;
}

const CalendlyEmbed = ({ url, height = 700 }: CalendlyEmbedProps) => {
    useEffect(() => {
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth: '320px', height: `${height}px` }}
        />
    );
};

export default CalendlyEmbed; 