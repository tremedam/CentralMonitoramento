# Guia: Como Adicionar um Novo Sistema

Este guia explica como adicionar um novo sistema de monitoramento ao projeto.

## Passos

### 1. Adicionar a URL no arquivo `.env`

Edite o arquivo `.env` e adicione a URL do novo sistema:

```env
VITE_MEU_NOVO_SISTEMA_URL=https://meu-sistema.com.br
```

**⚠️ Importante:** Sempre use o prefixo `VITE_` para que a variável seja acessível no frontend.

### 2. Atualizar `.env.example`

Adicione a mesma variável no `.env.example` (com URL de exemplo):

```env
VITE_MEU_NOVO_SISTEMA_URL=https://seu-sistema.com.br
```

### 3. Adicionar o sistema em `src/data/monitoringSystems.js`

```javascript
import { MinhaIcon } from 'lucide-react'; // Escolha um ícone do lucide-react

export const monitoringSystems = [
    // ... sistemas existentes ...
    {
        id: 9, // Incremente o ID
        title: 'Meu Novo Sistema',
        description: 'Descrição clara do que o sistema faz.',
        url: import.meta.env.VITE_MEU_NOVO_SISTEMA_URL || 'https://url-padrao.com.br',
        icon: MinhaIcon,
        color: 'from-teal-500 to-teal-600', // Escolha uma cor do Tailwind
        category: 'Minha Categoria'
    }
];
```

### 4. Escolher um Ícone

Veja todos os ícones disponíveis em: https://lucide.dev/icons/

Exemplos populares:
- `Server` - Servidores
- `Database` - Bancos de dados
- `Shield` - Segurança
- `Activity` - Monitoramento
- `Cloud` - Nuvem
- `Terminal` - CLI
- `FileText` - Documentos

### 5. Escolher Cores

Use gradientes do Tailwind CSS. Exemplos:

```javascript
'from-red-500 to-red-600'      // Vermelho
'from-blue-500 to-blue-600'    // Azul
'from-green-500 to-green-600'  // Verde
'from-purple-500 to-purple-600' // Roxo
'from-orange-500 to-orange-600' // Laranja
'from-pink-500 to-pink-600'    // Rosa
'from-teal-500 to-teal-600'    // Azul-esverdeado
'from-indigo-500 to-indigo-600' // Índigo
'from-cyan-500 to-cyan-600'    // Ciano
'from-amber-500 to-amber-600'  // Âmbar
```

### 6. Reiniciar o Servidor

Após fazer as alterações, reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl + C)
npm run dev
```

## Exemplo Completo

```javascript
// Adicionar no .env
VITE_GRAFANA_URL=https://grafana.empresa.com.br

// Adicionar em monitoringSystems.js
import { Activity } from 'lucide-react';

{
    id: 9,
    title: 'Grafana',
    description: 'Dashboards e visualização de métricas em tempo real.',
    url: import.meta.env.VITE_GRAFANA_URL || 'https://seu-grafana.com.br',
    icon: Activity,
    color: 'from-orange-500 to-orange-600',
    category: 'Analytics'
}
```

## Dicas

- Use nomes de variáveis descritivos em UPPERCASE
- Sempre forneça uma URL padrão como fallback
- Escolha categorias que façam sentido (elas aparecem nos filtros)
- Teste o link antes de commitar
- Mantenha as descrições curtas e claras (máximo 2 linhas)
