/**
 * Componente DashboardKPIs - Dashboard principal com métricas consolidadas
 */

import React from 'react';
import { 
    Server, 
    AlertTriangle, 
    Users, 
    Activity, 
    AlertCircle, 
    Zap, 
    RefreshCw,
    Clock
} from 'lucide-react';
import { useGlobalStatus } from '../hooks/useGlobalStatus';
import AlertBanner from './AlertBanner';

const DashboardKPIs = () => {
    const {
        systemsOnline,
        activeAlerts,
        activeUsers,
        availability,
        openIncidents,
        avgPerformance,
        lastUpdate,
        status,
        alerts,
        isLoading,
        error,
        refresh
    } = useGlobalStatus();

    // Mapeamento de ícones
    const icons = {
        server: Server,
        alert: AlertTriangle,
        users: Users,
        activity: Activity,
        alertCircle: AlertCircle,
        zap: Zap
    };

    // Estrutura dos KPIs a serem exibidos
    const kpis = [
        {
            id: 'systemsOnline',
            label: 'Sistemas Online',
            value: systemsOnline ? `${systemsOnline.current}/${systemsOnline.total}` : '0/0',
            icon: Server,
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700'
        },
        {
            id: 'activeAlerts',
            label: 'Alertas Ativos',
            value: activeAlerts || 0,
            icon: AlertTriangle,
            color: 'from-yellow-500 to-yellow-600',
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-700',
            highlight: activeAlerts > 0
        },
        {
            id: 'activeUsers',
            label: 'Usuários Ativos',
            value: activeUsers || 0,
            icon: Users,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700'
        },
        {
            id: 'availability',
            label: 'Disponibilidade',
            value: `${availability || 0}%`,
            icon: Activity,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700'
        },
        {
            id: 'openIncidents',
            label: 'Incidentes',
            value: openIncidents || 0,
            icon: AlertCircle,
            color: 'from-red-500 to-red-600',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700',
            highlight: openIncidents > 0
        },
        {
            id: 'avgPerformance',
            label: 'Performance',
            value: `${avgPerformance || 0}%`,
            icon: Zap,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700'
        }
    ];

    // Formatar timestamp
    const formatTime = (isoString) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        return date.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
    };

    // Status badge
    const getStatusBadge = () => {
        const statusConfig = {
            healthy: { color: 'bg-green-500', text: '✓ Todos os sistemas operacionais' },
            warning: { color: 'bg-yellow-500', text: '⚠ Alguns sistemas requerem atenção' },
            critical: { color: 'bg-red-500', text: '✕ Problemas críticos detectados' },
            error: { color: 'bg-gray-500', text: '○ Erro ao carregar dados' },
            loading: { color: 'bg-blue-500', text: '◌ Carregando...' }
        };

        const config = statusConfig[status] || statusConfig.loading;

        return (
            <div className="flex items-center gap-2 text-sm">
                <span className={`w-2 h-2 rounded-full ${config.color} ${status === 'loading' ? 'animate-pulse' : ''}`}></span>
                <span className="text-gray-600">{config.text}</span>
            </div>
        );
    };

    return (
        <div className="mb-8">
            {/* Header do Dashboard */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            📊 Dashboard de Monitoramento
                        </h2>
                        {getStatusBadge()}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {/* Timestamp */}
                        {lastUpdate && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span>Atualizado: {formatTime(lastUpdate)}</span>
                            </div>
                        )}
                        
                        {/* Botão Refresh */}
                        <button
                            onClick={refresh}
                            disabled={isLoading}
                            className={`
                                p-2 rounded-lg bg-primary-50 text-primary-600 
                                hover:bg-primary-100 transition-all
                                ${isLoading ? 'animate-spin' : 'hover:scale-110'}
                            `}
                            title="Atualizar dados"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Grid de KPIs */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {kpis.map((kpi) => {
                        const Icon = kpi.icon;
                        
                        return (
                            <div
                                key={kpi.id}
                                className={`
                                    ${kpi.bgColor} rounded-lg p-4
                                    transition-all duration-300 hover:shadow-md
                                    ${kpi.highlight ? 'ring-2 ring-offset-2 ring-yellow-400 animate-pulse' : ''}
                                    ${isLoading ? 'opacity-50' : ''}
                                `}
                            >
                                {/* Ícone */}
                                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${kpi.color} mb-3`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                
                                {/* Valor */}
                                <div className={`text-2xl font-bold ${kpi.textColor} mb-1`}>
                                    {isLoading ? (
                                        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                    ) : (
                                        kpi.value
                                    )}
                                </div>
                                
                                {/* Label */}
                                <div className="text-xs text-gray-600 font-medium">
                                    {kpi.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mensagem de erro */}
                {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        ⚠️ Erro ao carregar dados: {error}
                    </div>
                )}
            </div>

            {/* Alertas */}
            {alerts && alerts.length > 0 && (
                <AlertBanner alerts={alerts} />
            )}
        </div>
    );
};

export default DashboardKPIs;
