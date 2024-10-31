import { useEffect } from 'react';

interface CalendlyButtonProps {
    url?: string;
    className?: string;
    children: React.ReactNode;
}

const CALENDLY_URL = "https://calendly.com/rcv-1/30min?hide_event_type_details=1&hide_gdpr_banner=1";

const CalendlyButton = ({
    url = CALENDLY_URL,
    className = "btn btn-primary",
    children
}: CalendlyButtonProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = () => {
        // @ts-ignore
        window.Calendly?.initPopupWidget({
            url: url,
            text: 'Schedule time with me',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: false,
            hideEventTypeDetails: true,
            hideGdprBanner: true
        });
    };

    return (
        <button
            onClick={openCalendly}
            className={className}
            type="button"
        >
            {children}
        </button>
    );
};

export default CalendlyButton; 