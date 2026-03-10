import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MonitoringCard from './components/MonitoringCard';
import { monitoringSystems } from './data/monitoringSystems';

function App() {

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
