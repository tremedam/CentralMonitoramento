/**
 * Serviço de APIs - Mock de dados genéricos
 * Simula respostas de APIs para demonstração
 * 
 * IMPORTANTE: Substitua essas funções por chamadas reais quando conectar APIs
 */

import { apiConfig } from '../data/apiConfig';

/**
 * Simula delay de rede
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Gera número aleatório entre min e max
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Busca status global consolidado de todos os sistemas
 * 
 * @returns {Promise<Object>} Dados consolidados
 * 
 * Estrutura de retorno:
 * {
 *   systemsOnline: { current: 7, total: 8 },
 *   activeAlerts: 3,
 *   activeUsers: 450,
 *   availability: 98.5,
 *   openIncidents: 2,
 *   avgPerformance: 85.7,
 *   lastUpdate: '2026-03-10T11:30:00.000Z',
 *   status: 'healthy' | 'warning' | 'critical'
 * }
 */
export const fetchGlobalStatus = async () => {
    try {
        // Simula delay de rede (200-600ms)
        await delay(random(200, 600));

        // Simula falha ocasional (2% de chance)
        if (Math.random() < 0.02) {
            throw new Error('Network timeout');
        }

        // DADOS MOCKADOS - Substitua por chamada real:
        // const response = await fetch(`${apiConfig.apiBaseUrl}${apiConfig.endpoints.globalStatus}`);
        // const data = await response.json();
        
        const totalSystems = 8;
        const onlineSystems = random(6, 8);
        const alerts = random(0, 5);
        const incidents = random(0, 3);
        
        // Calcula status geral baseado nos dados
        let overallStatus = 'healthy';
        if (incidents > 2 || onlineSystems < 6) {
            overallStatus = 'critical';
        } else if (alerts > 2 || onlineSystems < 8) {
            overallStatus = 'warning';
        }

        return {
            // KPIs Genéricos
            systemsOnline: {
                current: onlineSystems,
                total: totalSystems
            },
            activeAlerts: alerts,
            activeUsers: random(200, 600),
            availability: parseFloat((95 + Math.random() * 5).toFixed(1)),
            openIncidents: incidents,
            avgPerformance: parseFloat((70 + Math.random() * 30).toFixed(1)),
            
            // Metadados
            lastUpdate: new Date().toISOString(),
            status: overallStatus,
            
            // Dados adicionais (podem ser expandidos)
            details: {
                cpuUsage: random(20, 80),
                memoryUsage: random(40, 90),
                networkTraffic: random(100, 1000)
            }
        };

    } catch (error) {
        console.error('Erro ao buscar status global:', error);
        
        // Retorna dados de fallback em caso de erro
        return {
            systemsOnline: { current: 0, total: 8 },
            activeAlerts: 0,
            activeUsers: 0,
            availability: 0,
            openIncidents: 0,
            avgPerformance: 0,
            lastUpdate: new Date().toISOString(),
            status: 'error',
            error: error.message
        };
    }
};

/**
 * Busca alertas ativos do sistema
 * 
 * @returns {Promise<Array>} Lista de alertas
 * 
 * Estrutura de retorno:
 * [
 *   {
 *     id: 1,
 *     type: 'critical' | 'warning' | 'info' | 'success',
 *     message: 'Mensagem do alerta',
 *     system: 'Nome do sistema',
 *     timestamp: '2026-03-10T11:30:00.000Z'
 *   }
 * ]
 */
export const fetchActiveAlerts = async () => {
    try {
        await delay(random(200, 500));

        // DADOS MOCKADOS - Substitua por chamada real:
        // const response = await fetch(`${apiConfig.apiBaseUrl}${apiConfig.endpoints.alerts}`);
        // const data = await response.json();

        const possibleAlerts = [
            {
                id: 1,
                type: 'critical',
                message: 'Servidor Zabbix com alta utilização de CPU (92%)',
                system: 'Zabbix',
                timestamp: new Date(Date.now() - 5 * 60000).toISOString()
            },
            {
                id: 2,
                type: 'warning',
                message: '3 chamados próximos do SLA no CEC',
                system: 'CEC',
                timestamp: new Date(Date.now() - 15 * 60000).toISOString()
            },
            {
                id: 3,
                type: 'warning',
                message: 'Link de backup com latência elevada (250ms)',
                system: 'Visidata',
                timestamp: new Date(Date.now() - 30 * 60000).toISOString()
            },
            {
                id: 4,
                type: 'info',
                message: 'Atualização de segurança disponível',
                system: 'Security Center',
                timestamp: new Date(Date.now() - 60 * 60000).toISOString()
            },
            {
                id: 5,
                type: 'success',
                message: 'Backup concluído com sucesso',
                system: 'Database Monitor',
                timestamp: new Date(Date.now() - 120 * 60000).toISOString()
            }
        ];

        // Retorna quantidade aleatória de alertas
        const numAlerts = random(0, 4);
        return possibleAlerts.slice(0, numAlerts);

    } catch (error) {
        console.error('Erro ao buscar alertas:', error);
        return [];
    }
};

/**
 * Função auxiliar para quando as APIs reais estiverem prontas
 * Exemplo de como fazer uma chamada real
 */
export const fetchRealAPI = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${apiConfig.apiBaseUrl}${endpoint}`, {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN || ''}`,
                ...options.headers
            },
            body: options.body ? JSON.stringify(options.body) : undefined
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Erro na requisição para ${endpoint}:`, error);
        throw error;
    }
};
