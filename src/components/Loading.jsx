import React from 'react';

function Loader() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex items-center justify-between w-[120px]">
                <div className="w-1 h-5 bg-colorCustom animate-sciFiLoading opacity-20" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-5 bg-colorCustom animate-sciFiLoading opacity-20" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-5 bg-colorCustom animate-sciFiLoading opacity-20" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-1 h-5 bg-colorCustom animate-sciFiLoading opacity-20" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-1 h-5 bg-colorCustom animate-sciFiLoading opacity-20" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
}

export default Loader;
