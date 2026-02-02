import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in">
                        Central de Monitoramento TI
                    </h1>
                    <p className="text-primary-100 text-lg md:text-xl animate-slide-up">
                        Acesso centralizado aos sistemas de monitoramento e gestão
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
