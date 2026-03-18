/**
 * Hook customizado para buscar status global e alertas
 * Atualiza automaticamente em intervalos configuráveis
 */

import { useState, useEffect, useRef } from 'react';
import { fetchGlobalStatus, fetchActiveAlerts } from '../utils/apisService';
import { apiConfig } from '../data/apiConfig';

export const useGlobalStatus = () => {
    const [data, setData] = useState({
        systemsOnline: { current: 0, total: 0 },
        activeAlerts: 0,
        activeUsers: 0,
        availability: 0,
        openIncidents: 0,
        avgPerformance: 0,
        lastUpdate: null,
        status: 'loading'
    });
    
    const [alerts, setAlerts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const intervalRef = useRef(null);

    /**
     * Busca dados da API
     */
    const fetchData = async () => {
        try {
            setError(null);
            
            // Busca status global e alertas em paralelo
            const [statusData, alertsData] = await Promise.all([
                fetchGlobalStatus(),
                fetchActiveAlerts()
            ]);
            
            setData(statusData);
            setAlerts(alertsData);
            
        } catch (err) {
            console.error('Erro no useGlobalStatus:', err);
            setError(err.message);
            
            // Define dados vazios em caso de erro
            setData({
                systemsOnline: { current: 0, total: 0 },
                activeAlerts: 0,
                activeUsers: 0,
                availability: 0,
                openIncidents: 0,
                avgPerformance: 0,
                lastUpdate: new Date().toISOString(),
                status: 'error'
            });
            setAlerts([]);
            
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Effect para buscar dados inicial e configurar auto-refresh
     */
    useEffect(() => {
        if (!apiConfig.enabled) {
            setIsLoading(false);
            return;
        }

        // Busca inicial
        fetchData();

        // Configura atualização automática
        intervalRef.current = setInterval(() => {
            fetchData();
        }, apiConfig.refreshInterval);

        // Cleanup
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    /**
     * Função para forçar atualização manual
     */
    const refresh = () => {
        setIsLoading(true);
        fetchData();
    };

    return {
        // Dados
        ...data,
        alerts,
        
        // Estados
        isLoading,
        error,
        
        // Ações
        refresh
    };
};
