# Central de Monitoramento TI

Hub centralizado para acesso aos sistemas de monitoramento da empresa.

## 🚀 Características

- ✨ Interface moderna e responsiva
- 🎨 Design atrativo com Tailwind CSS
- 🔍 Busca e filtros por categoria
- 🎯 Cards interativos com hover effects
- 📱 Totalmente responsivo
- ⚡ Performance otimizada com Vite

## 🛠️ Tecnologias

- React 18
- Tailwind CSS 3
- Vite
- Lucide React (ícones)

## 📦 Instalação

```bash
npm install
```

## 🏃‍♂️ Executar o projeto

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build para produção

```bash
npm run build
```

## ⚙️ Configuração

Para personalizar os sistemas de monitoramento, edite o arquivo `src/App.jsx` e altere o array `monitoringSystems` com suas URLs reais:

```javascript
{
  id: 1,
  title: 'Zabbix',
  description: 'Monitoramento completo de servidores...',
  url: 'https://seu-zabbix.com.br', // Altere aqui
  icon: Server,
  color: 'from-red-500 to-red-600',
  category: 'Servidores'
}
```

## 📂 Estrutura do Projeto

```
CentralMonitoramento/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MonitoringCard.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js` na seção `theme.extend.colors`.

### Sistemas
Adicione ou remova sistemas editando o array `monitoringSystems` em `src/App.jsx`.

## 📝 Licença

Licença MIT
Desenvolvido para equipes de TI.
