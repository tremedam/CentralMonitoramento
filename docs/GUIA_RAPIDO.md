# 🚀 Guia Rápido - Dashboard Global de KPIs

## Como Ficou

```
╔═══════════════════════════════════════════════════════════════╗
║  # Central de Monitoramento TI                                ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║ 📊 Dashboard de Monitoramento                                 ║
║ ✓ Todos os sistemas operacionais   🕐 Atualizado: 11:30:45   ║
║                                                                ║
║ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        ║
║ │ 🟢 7/8   │ │ ⚠️ 3     │ │ 👥 450   │ │ 📊 98.5% │        ║
║ │ Sistemas │ │ Alertas  │ │ Usuários │ │ Disponib.│        ║
║ └──────────┘ └──────────┘ └──────────┘ └──────────┘        ║
║                                                                ║
║ ┌──────────┐ ┌──────────┐                                    ║
║ │ 🚨 2     │ │ ⚡ 85.7% │                                    ║
║ │ Incident.│ │ Perform. │                                    ║
║ └──────────┘ └──────────┘                                    ║
╚═══════════════════════════════════════════════════════════════╝

┌───────────────────────────────────────────────────────────────┐
│ 🔴 CRÍTICO - Zabbix                             há 5 min      │
│ Servidor Zabbix com alta utilização de CPU (92%)             │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 🟡 ATENÇÃO - CEC                                há 15 min     │
│ 3 chamados próximos do SLA no CEC                             │
└───────────────────────────────────────────────────────────────┘

╔═══════════════════════════════════════════════════════════════╗
║ 🔍 Buscar sistema de monitoramento...                        ║
╚═══════════════════════════════════════════════════════════════╝

[Todos] [Servidores] [Links] [Chamados] [Analytics]

┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ 🖥️ Zabbix  │ │ 🔗 Visidata │ │ 🎧 CEC      │ │ 📊 Qlik     │
│ Categoria   │ │ Categoria   │ │ Categoria   │ │ Categoria   │
│ Descrição   │ │ Descrição   │ │ Descrição   │ │ Descrição   │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

## 🎯 O que foi implementado

### ✅ Dashboard Global (Topo da Página)
- **6 KPIs Genéricos** configuráveis
- **Status geral** do sistema
- **Timestamp** de atualização
- **Botão de refresh** manual
- **Loading states** com animação

### ✅ Sistema de Alertas
- **4 tipos**: Crítico, Atenção, Info, Sucesso
- **Cores distintas** por tipo
- **Timestamp** relativo (há X minutos)
- **Sistema de origem** identificado

### ✅ Dados Mockados
- **Totalmente funcional** para demonstração
- **Variação aleatória** para parecer real
- **Fácil substituição** por APIs reais

### ✅ Auto-atualização
- **30 segundos** por padrão (configurável)
- **Atualização silenciosa** em background
- **Não interrompe** uso do usuário

## 🚀 Próximos Passos

### Para Usar Agora (Demo)
```bash
npm run dev
```
✅ Funciona imediatamente com dados mockados!

### Para APIs Reais (Produção)

1. **Configure .env**
```env
VITE_API_BASE_URL=https://api.suaempresa.com
VITE_API_TOKEN=seu-token
```

2. **Edite apisService.js**
```javascript
// Substitua os mocks por:
const response = await fetch(apiConfig.apiBaseUrl + '/status');
return response.json();
```

3. **Reinicie o servidor**
```bash
npm run dev
```

## 📊 KPIs Implementados

| KPI | Descrição | Formato |
|-----|-----------|---------|
| **Sistemas Online** | Quantos sistemas estão online | 7/8 |
| **Alertas Ativos** | Total de alertas não resolvidos | 3 |
| **Usuários Ativos** | Usuários usando os sistemas | 450 |
| **Disponibilidade** | Uptime geral dos sistemas | 98.5% |
| **Incidentes** | Incidentes abertos | 2 |
| **Performance** | Performance média | 85.7% |

**Todos 100% configuráveis e expandíveis!**

## 🎨 Personalização Rápida

### Mudar Intervalo de Atualização
`src/data/apiConfig.js`:
```javascript
refreshInterval: 60000  // 60 segundos
```

### Adicionar Novo KPI
`src/components/DashboardKPIs.jsx`:
```javascript
{
    id: 'meuKPI',
    label: 'Meu KPI',
    value: meuValor,
    icon: Star,
    color: 'from-teal-500 to-teal-600'
}
```

### Mudar Cores
```javascript
color: 'from-red-500 to-red-600'
     // red, blue, green, yellow, purple, etc
```

## 📖 Documentação Completa

- **Dashboard KPIs**: [docs/DASHBOARD_KPIS.md](../DASHBOARD_KPIS.md)
- **Adicionar Sistemas**: [docs/ADICIONAR_SISTEMA.md](../ADICIONAR_SISTEMA.md)
- **README Geral**: [README.md](../../README.md)

## 💡 Dicas

✅ **Dashboard aparece automaticamente** ao carregar a página  
✅ **Alertas aparecem** quando há problemas  
✅ **Clique no 🔄** para forçar atualização  
✅ **Totalmente responsivo** - funciona no mobile  
✅ **Funciona offline** com dados mockados  

## 🎉 Pronto para usar!

O sistema está **100% funcional** com dados de demonstração e **pronto para conectar** APIs reais quando disponíveis!

---

**Desenvolvido com ❤️ para facilitar o monitoramento de TI**
