📌 📖 Resumo do Projeto

Este projeto implementa um cardápio digital online, onde o cliente escolhe produtos, informa nome e mesa, e envia o pedido diretamente para o servidor. O backend processa o pedido, calcula o valor total, armazena o pedido temporariamente na memória para exibição no painel da cozinha, e salva no Supabase para formar o histórico de vendas.

O frontend é totalmente responsivo e construído com React.js e TailwindCSS. O backend usa Node.js + Express, e o Supabase funciona como banco de dados serverless.

O sistema segue uma arquitetura organizada e escalável.

🚀 Funcionalidades do Sistema
✅ Cliente

Visualização do cardápio com imagens

Interface moderna e animada

Escolha de quantidade

Identificação do cliente (nome + mesa)

Envio do pedido

👨‍🍳 Cozinha

Recebe os pedidos em tempo real (armazenados em memória temporária)

Exibe nome, mesa, itens e o total

🗄️ Banco de Dados

Registro permanente dos pedidos no Supabase

Histórico de vendas acessível para relatórios

🛠️ Tecnologias Utilizadas
Frontend

React.js — Interface do usuário

React Router DOM — Navegação entre telas

Context API — Gerenciamento de estado global

TailwindCSS — Estilização rápida e responsiva

CSS customizado — Aparência refinada e animações

Backend

Node.js

Express.js

Cors

Supabase Client

Banco de Dados

Supabase (PostgreSQL) — Armazenamento do histórico

📁 Arquitetura e Organização
cardapio-online/
│
├── frontend/
│   ├── src/
│   │   ├── pages/           # Páginas (Menu, KitchenPanel)
│   │   ├── components/      # Componentes reutilizáveis (ProductCard, etc)
│   │   ├── context/         # Estado global (OrderContext)
│   │   ├── assets/          # Imagens dos produtos
│   │   ├── App.jsx          # Rotas principais
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/         # Regras de negócio isoladas
│   ├── repositories/        # Repositórios (Memória e Supabase)
│   ├── routes/              # Rotas organizadas
│   ├── server.js            # Servidor Express
│   └── package.json
│
└── README.md

⚙️ Como Rodar o Projeto
📌 1. Clonar o repositório
git clone https://github.com/seuusuario/cardapio-online.git

🖥️ Frontend
📌 2. Instalar dependências
cd frontend
npm install

📌 3. Rodar o sistema
npm run dev

🔧 Backend
📌 4. Instalar dependências
cd ../backend
npm install

📌 5. Iniciar servidor
node server.js


O servidor rodará em:

http://localhost:4000

📡 Rotas Backend
Método	Rota	Descrição
POST	/pedido	Recebe pedido (Memória + Supabase)
GET	/cozinha	Lista pedidos em memória
GET	/historico	Lista pedidos salvos no banco
🧠 Como o Sistema Funciona Internamente

Cliente faz o pedido no React

Front envia via POST /pedido

Backend calcula total

Pedido é:

armazenado em memória → painel da cozinha

salvo no Supabase → histórico permanente

Painel da cozinha busca /cozinha e exibe tudo em tempo real

🎨 Por que usar TailwindCSS?

Velocidade na criação de layouts

Classes utilitárias que evitam arquivos CSS enormes

Muito mais performático

Facilita responsividade

Estilo limpo e profissional com menos esforço

📌 Melhorias Futuras

Sistema de login (garçom / cozinha)

Notificações em tempo real (WebSocket)

Dashboard administrativo

Impressão automática de pedidos

Tela para acompanhar preparo
