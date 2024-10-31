import CalendlyButton from './CalendlyButton';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <div className="logo">FunnelVentures</div>
            <CalendlyButton
                url="https://calendly.com/rcv-1/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
                Book a Call <span className="text-xl">→</span>
            </CalendlyButton>
        </header>
    );
};

export default Header; 