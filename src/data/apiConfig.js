/**
 * Configuração das APIs - Dashboard Global
 * Sistema totalmente genérico e configurável
 */

export const apiConfig = {
    // Habilitar/desabilitar monitoramento global
    enabled: true,
    
    // Intervalo de atualização em milissegundos (padrão: 30 segundos)
    refreshInterval: 30000,
    
    // Timeout para requisições
    timeout: 5000,
    
    // URL base da API (configurável via .env)
    // Em produção: substitua pelos endpoints reais
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    
    // Endpoints das APIs
    endpoints: {
        globalStatus: '/status/global',      // Status consolidado de todos os sistemas
        alerts: '/alerts/current',           // Alertas ativos
        metrics: '/metrics/summary'          // Métricas agregadas
    }
};

/**
 * Estrutura de KPIs Genéricos
 * Totalmente configurável - adapte conforme dados da sua API
 */
export const kpiStructure = {
    // KPI: Sistemas Online
    systemsOnline: {
        label: 'Sistemas Online',
        icon: 'server',
        color: 'green',
        format: 'ratio', // X/Y
        priority: 1
    },
    
    // KPI: Alertas Ativos
    activeAlerts: {
        label: 'Alertas',
        icon: 'alert',
        color: 'yellow',
        format: 'number',
        priority: 2
    },
    
    // KPI: Usuários Ativos
    activeUsers: {
        label: 'Usuários Ativos',
        icon: 'users',
        color: 'blue',
        format: 'number',
        priority: 3
    },
    
    // KPI: Disponibilidade Geral
    availability: {
        label: 'Disponibilidade',
        icon: 'activity',
        color: 'purple',
        format: 'percentage',
        priority: 4
    },
    
    // KPI: Incidentes Abertos
    openIncidents: {
        label: 'Incidentes Abertos',
        icon: 'alertCircle',
        color: 'red',
        format: 'number',
        priority: 5
    },
    
    // KPI: Performance Média
    avgPerformance: {
        label: 'Performance Média',
        icon: 'zap',
        color: 'orange',
        format: 'percentage',
        priority: 6
    }
};

/**
 * Configuração de Alertas
 */
export const alertConfig = {
    // Tipos de alerta
    types: {
        critical: {
            label: 'Crítico',
            icon: 'alertCircle',
            color: 'red',
            priority: 1
        },
        warning: {
            label: 'Atenção',
            icon: 'alertTriangle',
            color: 'yellow',
            priority: 2
        },
        info: {
            label: 'Informação',
            icon: 'info',
            color: 'blue',
            priority: 3
        },
        success: {
            label: 'Sucesso',
            icon: 'checkCircle',
            color: 'green',
            priority: 4
        }
    },
    
    // Número máximo de alertas exibidos
    maxVisible: 3,
    
    // Auto-dismiss após X segundos (0 = não dismiss automático)
    autoDismissAfter: 0
};
