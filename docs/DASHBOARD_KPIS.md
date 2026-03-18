# Sistema de Dashboard Global com KPIs - Documentação

## 📊 Visão Geral

Sistema de dashboard centralizado que exibe KPIs consolidados de todos os sistemas de monitoramento, com alertas em tempo real e atualização automática.

## ✨ Características Implementadas

### Dashboard de KPIs
- **6 KPIs Genéricos Configuráveis**:
  - 🟢 Sistemas Online (X/Y)
  - ⚠️ Alertas Ativos
  - 👥 Usuários Ativos
  - 📊 Disponibilidade (%)
  - 🚨 Incidentes Abertos
  - ⚡ Performance Média (%)

### Alertas e Avisos
- **4 Tipos de Alertas**:
  - 🔴 Crítico
  - 🟡 Atenção/Warning
  - 🔵 Informação
  - 🟢 Sucesso

### Recursos Avançados
- ✅ Status geral do sistema (healthy/warning/critical)
- ✅ Atualização automática (configurável)
- ✅ Botão de refresh manual
- ✅ Timestamp da última atualização
- ✅ Loading states com skeleton
- ✅ Tratamento robusto de erros
- ✅ Dados mockados para demonstração
- ✅ Cards com highlight para alertas ativos
- ✅ Animações suaves

## 🎯 Como Funciona

```
┌─────────────────────────────────────────────┐
│  1. Dashboard carrega (DashboardKPIs.jsx)  │
│         ↓                                   │
│  2. Hook busca dados (useGlobalStatus.js)  │
│         ↓                                   │
│  3. API Service retorna mock                │
│     (apisService.js)                        │
│         ↓                                   │
│  4. Dashboard atualiza com dados            │
│         ↓                                   │
│  5. Auto-refresh a cada 30s                 │
└─────────────────────────────────────────────┘
```

## 📁 Estrutura de Arquivos

```
src/
├── data/
│   └── apiConfig.js           # ✨ Configuração de APIs e estrutura
├── utils/
│   └── apisService.js         # ✨ Mock de APIs (dados fake)
├── hooks/
│   └── useGlobalStatus.js     # ✨ Hook para buscar dados
├── components/
│   ├── DashboardKPIs.jsx      # ✨ Dashboard principal
│   ├── AlertBanner.jsx        # ✨ Componente de alertas
│   └── App.jsx                # ♻️ Integrado com dashboard
```

## 📊 Estrutura de Dados

### Retorno da API Global Status

```javascript
{
  // KPIs
  systemsOnline: { current: 7, total: 8 },
  activeAlerts: 3,
  activeUsers: 450,
  availability: 98.5,
  openIncidents: 2,
  avgPerformance: 85.7,
  
  // Metadados
  lastUpdate: '2026-03-10T11:30:00.000Z',
  status: 'healthy' | 'warning' | 'critical' | 'error',
  
  // Opcional: dados adicionais
  details: {
    cpuUsage: 45,
    memoryUsage: 67,
    networkTraffic: 532
  }
}
```

### Retorno da API de Alertas

```javascript
[
  {
    id: 1,
    type: 'critical' | 'warning' | 'info' | 'success',
    message: 'Descrição do alerta',
    system: 'Nome do sistema',
    timestamp: '2026-03-10T11:30:00.000Z'
  }
]
```

## ⚙️ Configuração

### 1. Variáveis de Ambiente (.env)

```env
# URL base da API
VITE_API_BASE_URL=https://api.suaempresa.com.br

# Token de autenticação (opcional)
VITE_API_TOKEN=seu-token-aqui

# Intervalo de atualização (ms) - padrão: 30000 (30s)
VITE_REFRESH_INTERVAL=30000
```

### 2. Configurar apiConfig.js

```javascript
export const apiConfig = {
    enabled: true,
    refreshInterval: 30000,  // 30 segundos
    timeout: 5000,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    endpoints: {
        globalStatus: '/status/global',
        alerts: '/alerts/current',
        metrics: '/metrics/summary'
    }
};
```

### 3. Personalizar KPIs

Edite `apiConfig.js` para alterar os KPIs exibidos:

```javascript
export const kpiStructure = {
    meuKPI: {
        label: 'Meu KPI Customizado',
        icon: 'server',
        color: 'green',
        format: 'number',
        priority: 1
    }
};
```

## 🔄 Conectar APIs Reais

### Passo 1: Substituir Mock no apisService.js

**Antes (Mock):**
```javascript
export const fetchGlobalStatus = async () => {
    // ... dados mockados
    return {
        systemsOnline: { current: 7, total: 8 },
        // ...
    };
};
```

**Depois (API Real):**
```javascript
export const fetchGlobalStatus = async () => {
    try {
        const response = await fetch(
            `${apiConfig.apiBaseUrl}${apiConfig.endpoints.globalStatus}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        // Mapear resposta da API para estrutura esperada
        return {
            systemsOnline: {
                current: data.systems_online,
                total: data.total_systems
            },
            activeAlerts: data.alerts_count,
            activeUsers: data.active_users,
            availability: data.availability_percent,
            openIncidents: data.incidents_open,
            avgPerformance: data.performance_avg,
            lastUpdate: data.timestamp,
            status: data.health_status
        };
        
    } catch (error) {
        console.error('Erro ao buscar status:', error);
        throw error;
    }
};
```

### Passo 2: Fazer o mesmo para alertas

```javascript
export const fetchActiveAlerts = async () => {
    const response = await fetch(
        `${apiConfig.apiBaseUrl}${apiConfig.endpoints.alerts}`,
        {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        }
    );
    
    const data = await response.json();
    
    // Mapear para estrutura esperada
    return data.alerts.map(alert => ({
        id: alert.id,
        type: alert.severity, // 'critical', 'warning', 'info', 'success'
        message: alert.description,
        system: alert.source_system,
        timestamp: alert.created_at
    }));
};
```

## 🎨 Personalização de Cores

### Alterar cores dos KPIs

Edite `DashboardKPIs.jsx`:

```javascript
const kpis = [
    {
        id: 'systemsOnline',
        // ...
        color: 'from-blue-500 to-blue-600',  // Altere aqui
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700'
    }
];
```

### Cores disponíveis no Tailwind

```
red, yellow, green, blue, purple, pink, 
orange, indigo, cyan, teal, lime, etc.
```

## 🧪 Testando

### 1. Ambiente de Desenvolvimento

```bash
npm run dev
```

Abra: http://localhost:5173

### 2. Observar Funcionamento

- Dashboard aparece no topo
- KPIs são atualizados a cada 30s
- Alertas aparecem quando existem
- Status muda conforme dados
- Botão refresh força atualização

### 3. Console do Navegador

```javascript
// Ver logs das requisições
// Verificar erros
// Monitorar atualizações
```

## 📈 Adicionar Novos KPIs

### 1. Adicionar no apisService.js

```javascript
export const fetchGlobalStatus = async () => {
    return {
        // ... KPIs existentes
        meuNovoKPI: 123
    };
};
```

### 2. Adicionar no DashboardKPIs.jsx

```javascript
const kpis = [
    // ... existentes
    {
        id: 'meuNovoKPI',
        label: 'Meu Novo KPI',
        value: meuNovoKPI || 0,
        icon: Star,  // Importe o ícone
        color: 'from-teal-500 to-teal-600',
        bgColor: 'bg-teal-50',
        textColor: 'text-teal-700'
    }
];
```

### 3. Adicionar no useGlobalStatus.js

```javascript
const [data, setData] = useState({
    // ... existentes
    meuNovoKPI: 0
});
```

## 🔍 Troubleshooting

### Dashboard não aparece
- Verifique se `apiConfig.enabled = true`
- Verifique console para erros
- Confirme que DashboardKPIs foi importado

### Dados não atualizam
- Verifique `refreshInterval` em apiConfig.js
- Abra Network tab para ver requisições
- Verifique se há erros no console

### "Erro ao carregar dados"
- Mock pode estar falhando propositalmente (2%)
- Clique no botão refresh para tentar novamente
- Verifique implementação do apisService.js

### KPIs sempre em 0
- Verifique se o mock está retornando dados
- Confirme estrutura de dados no useGlobalStatus
- Veja console para erros de mapeamento

## 🚀 Próximos Passos

1. **Conectar APIs Reais**
   - Substituir mocks por endpoints reais
   - Configurar autenticação
   - Testar com dados reais

2. **Adicionar Gráficos**
   - Chart.js ou Recharts
   - Histórico de métricas
   - Tendências temporais

3. **Notificações Push**
   - Web Push API
   - Alertas sonoros
   - Notificações desktop

4. **Filtros Avançados**
   - Filtrar por período
   - Filtrar por severidade
   - Histórico de alertas

5. **Dashboard Detalhado**
   - Página específica por sistema
   - Drill-down de KPIs
   - Logs detalhados

## 💡 Dicas

- **Performance**: Use `refreshInterval` maior para economizar recursos
- **UX**: Adicione feedback visual durante carregamentos
- **Escalabilidade**: Considere paginação para muitos alertas
- **Segurança**: Use HTTPS e tokens seguros em produção
- **Monitoramento**: Log todas as chamadas de API
- **Cache**: Implemente cache para reduzir requisições

## 📝 Exemplo de Integração Completa

```javascript
// .env
VITE_API_BASE_URL=https://api.empresa.com
VITE_API_TOKEN=abc123xyz

// apisService.js - API Real
export const fetchGlobalStatus = async () => {
    const res = await fetch(`${apiConfig.apiBaseUrl}/status`, {
        headers: { 'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}` }
    });
    return res.json();
};

// Pronto! Dashboard agora usa dados reais
```

---

**Sistema pronto para demonstração com dados mockados!** 🎉  
**Fácil migração para APIs reais quando estiverem prontas!** 🚀
