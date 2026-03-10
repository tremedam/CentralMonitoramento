import {
    Server,
    Link2,
    Headphones,
    BarChart3,
    Database,
    Shield,
    Globe,
    Settings
} from 'lucide-react';

/**
 * Configuração dos sistemas de monitoramento
 * As URLs são carregadas das variáveis de ambiente
 */
export const monitoringSystems = [
    {
        id: 1,
        title: 'Zabbix',
        description: 'Monitoramento completo de servidores, infraestrutura e performance em tempo real.',
        url: import.meta.env.VITE_ZABBIX_URL || 'https://seu-zabbix.com.br',
        icon: Server,
        color: 'from-red-500 to-red-600',
        category: 'Servidores'
    },
    {
        id: 2,
        title: 'Visidata',
        description: 'Monitoramento e gerenciamento de links de rede e conectividade.',
        url: import.meta.env.VITE_VISIDATA_URL || 'https://seu-visidata.com.br',
        icon: Link2,
        color: 'from-blue-500 to-blue-600',
        category: 'Links'
    },
    {
        id: 3,
        title: 'CEC',
        description: 'Sistema de gerenciamento e acompanhamento de chamados.',
        url: import.meta.env.VITE_CEC_URL || 'https://seu-cec.com.br',
        icon: Headphones,
        color: 'from-green-500 to-green-600',
        category: 'Chamados'
    },
    {
        id: 4,
        title: 'Qlik',
        description: 'Análise e monitoramento de notas fiscais, tesouraria e indicadores técnicos.',
        url: import.meta.env.VITE_QLIK_URL || 'https://seu-qlik.com.br',
        icon: BarChart3,
        color: 'from-purple-500 to-purple-600',
        category: 'Analytics'
    },
    {
        id: 5,
        title: 'Database Monitor',
        description: 'Monitoramento de bancos de dados, queries e performance.',
        url: import.meta.env.VITE_DB_MONITOR_URL || 'https://seu-db-monitor.com.br',
        icon: Database,
        color: 'from-orange-500 to-orange-600',
        category: 'Banco de Dados'
    },
    {
        id: 6,
        title: 'Security Center',
        description: 'Central de segurança, logs e alertas de segurança da informação.',
        url: import.meta.env.VITE_SECURITY_URL || 'https://seu-security.com.br',
        icon: Shield,
        color: 'from-indigo-500 to-indigo-600',
        category: 'Segurança'
    },
    {
        id: 7,
        title: 'Network Monitor',
        description: 'Monitoramento de tráfego de rede, bandwidth e conectividade.',
        url: import.meta.env.VITE_NETWORK_URL || 'https://seu-network.com.br',
        icon: Globe,
        color: 'from-cyan-500 to-cyan-600',
        category: 'Rede'
    },
    {
        id: 8,
        title: 'Config Manager',
        description: 'Gerenciamento de configurações e inventário de ativos de TI.',
        url: import.meta.env.VITE_CONFIG_URL || 'https://seu-config.com.br',
        icon: Settings,
        color: 'from-pink-500 to-pink-600',
        category: 'Configuração'
    }
];
