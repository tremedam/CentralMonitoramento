import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 mt-16">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <p className="text-sm">
                        © {currentYear} Central de Monitoramento TI. Todos os direitos reservados.
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                        Desenvolvido para equipes de TI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
