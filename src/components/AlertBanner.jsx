/**
 * Componente AlertBanner - Exibe alertas e avisos do sistema
 */

import React from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

const AlertBanner = ({ alerts = [], onDismiss }) => {
    if (!alerts || alerts.length === 0) {
        return null;
    }

    // Configuração de ícones e cores por tipo
    const alertStyles = {
        critical: {
            icon: AlertCircle,
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
            textColor: 'text-red-800',
            iconColor: 'text-red-600'
        },
        warning: {
            icon: AlertTriangle,
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            textColor: 'text-yellow-800',
            iconColor: 'text-yellow-600'
        },
        info: {
            icon: Info,
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            textColor: 'text-blue-800',
            iconColor: 'text-blue-600'
        },
        success: {
            icon: CheckCircle,
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            textColor: 'text-green-800',
            iconColor: 'text-green-600'
        }
    };

    // Formatar timestamp
    const formatTime = (isoString) => {
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);

        if (diffMins < 1) return 'agora';
        if (diffMins < 60) return `há ${diffMins} min`;
        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) return `há ${diffHours}h`;
        return date.toLocaleDateString('pt-BR');
    };

    return (
        <div className="space-y-3 mb-6">
            {alerts.map((alert) => {
                const style = alertStyles[alert.type] || alertStyles.info;
                const Icon = style.icon;

                return (
                    <div
                        key={alert.id}
                        className={`
                            ${style.bgColor} ${style.borderColor} ${style.textColor}
                            border-l-4 p-4 rounded-lg shadow-sm
                            animate-fade-in
                        `}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                                {/* Ícone */}
                                <Icon className={`w-5 h-5 ${style.iconColor} mt-0.5 flex-shrink-0`} />
                                
                                {/* Conteúdo */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-sm">
                                            {alert.system}
                                        </span>
                                        <span className="text-xs opacity-75">
                                            {formatTime(alert.timestamp)}
                                        </span>
                                    </div>
                                    <p className="text-sm">
                                        {alert.message}
                                    </p>
                                </div>
                            </div>

                            {/* Botão de fechar (opcional) */}
                            {onDismiss && (
                                <button
                                    onClick={() => onDismiss(alert.id)}
                                    className={`
                                        ${style.iconColor} opacity-50 hover:opacity-100
                                        transition-opacity ml-2 flex-shrink-0
                                    `}
                                    aria-label="Dispensar alerta"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AlertBanner;
