import React, { useState, useEffect } from 'react';
import { Server, Link2, Headphones, BarChart3, Database, Shield, Globe, Settings, AlertTriangle, CheckCircle, XCircle, Activity, Clock, TrendingUp, Wifi } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import MonitoringCard from './components/MonitoringCard';

function App() {
    // Dados dos sistemas de monitoramento
    const monitoringSystems = [
        {
            id: 1,
            title: 'Zabbix',
            description: 'Monitoramento completo de servidores, infraestrutura e performance em tempo real.',
            url: 'https://seu-zabbix.com.br', // Substitua pela URL real
            icon: Server,
            color: 'from-red-500 to-red-600',
            category: 'Servidores'
        },
        {
            id: 2,
            title: 'Visidata',
            description: 'Monitoramento e gerenciamento de links de rede e conectividade.',
            url: 'https://seu-visidata.com.br', // Substitua pela URL real
            icon: Link2,
            color: 'from-blue-500 to-blue-600',
            category: 'Links'
        },
        {
            id: 3,
            title: 'CEC',
            description: 'Sistema de gerenciamento e acompanhamento de chamados.',
            url: 'https://seu-cec.com.br', // Substitua pela URL real
            icon: Headphones,
            color: 'from-green-500 to-green-600',
            category: 'Chamados'
        },
        {
            id: 4,
            title: 'Qlik',
            description: 'Análise e monitoramento de notas fiscais, tesouraria e indicadores técnicos.',
            url: 'https://seu-qlik.com.br', // Substitua pela URL real
            icon: BarChart3,
            color: 'from-purple-500 to-purple-600',
            category: 'Analytics'
        },
        {
            id: 5,
            title: 'Database Monitor',
            description: 'Monitoramento de bancos de dados, queries e performance.',
            url: 'https://seu-db-monitor.com.br', // Substitua pela URL real
            icon: Database,
            color: 'from-orange-500 to-orange-600',
            category: 'Banco de Dados'
        },
        {
            id: 6,
            title: 'Security Center',
            description: 'Central de segurança, logs e alertas de segurança da informação.',
            url: 'https://seu-security.com.br', // Substitua pela URL real
            icon: Shield,
            color: 'from-indigo-500 to-indigo-600',
            category: 'Segurança'
        },
        {
            id: 7,
            title: 'Network Monitor',
            description: 'Monitoramento de tráfego de rede, bandwidth e conectividade.',
            url: 'https://seu-network.com.br', // Substitua pela URL real
            icon: Globe,
            color: 'from-cyan-500 to-cyan-600',
            category: 'Rede'
        },
        {
            id: 8,
            title: 'Config Manager',
            description: 'Gerenciamento de configurações e inventário de ativos de TI.',
            url: 'https://seu-config.com.br', // Substitua pela URL real
            icon: Settings,
            color: 'from-pink-500 to-pink-600',
            category: 'Configuração'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Filtrar sistemas baseado na busca e categoria
    const categories = ['Todos', ...new Set(monitoringSystems.map(system => system.category))];

    const filteredSystems = monitoringSystems.filter(system => {
        const matchesSearch = system.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            system.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || system.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-6 py-12">
                {/* Search and Filter Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar sistema de monitoramento..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all shadow-sm text-lg"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Monitoring Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-fade-in">
                    {filteredSystems.map((system) => (
                        <MonitoringCard key={system.id} {...system} />
                    ))}
                </div>

                {/* No results message */}
                {filteredSystems.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-xl">
                            Nenhum sistema encontrado com os filtros aplicados.
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;
