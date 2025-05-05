
# 🚗 Ford System - Vehicle Dashboard

## ⚠️ In Development

This is a **full-stack** project built with **Angular** on the frontend and **Node.js + Express** on the backend. It simulates a Ford vehicle control panel, allowing user authentication, viewing vehicle metrics, and VIN-based searches.

---

## 🛠️ Technologies Used

### 🖥️ Frontend
- Angular 17+
- TypeScript
- Bootstrap Icons
- HTML/CSS

### 🧪 Backend
- Node.js
- Express.js

---

## 🧩 Features

### 🔐 Login (`LoginComponent`)
- Authentication via email and password.
- Validation through API.
- Stores session token in `localStorage`.
- Automatically redirects to Dashboard after login.

### 🏠 Home Page (`HomeComponent`)
- Welcome message.
- Quick access to the Dashboard.

### 📊 Dashboard (`DashboardComponent`)
- Vehicle selection.
- Display of metrics:
  - Total sales.
  - Connected vehicles.
  - Pending software updates.
- VIN (Vehicle Identification Number) search.
- Dynamic display of selected vehicle's image.
- Automatic update of metrics upon selection or search.

### 🔝 Header (`HeaderComponent`)
- Fixed top navigation.
- Links to Home, Dashboard, and Logout.

### 📡 API Service (`ApiService`)
- `getVehicles()`: Returns all registered vehicles.
- `getVehicleData(vin: string)`: Returns detailed data of a vehicle.
- `login(email, password)`: Handles user authentication.

---

## 📁 Folder Structure (Frontend)

```bash
src/
├── app/
│   ├── components/
│   │   ├── login.component.ts
│   │   ├── home.component.ts
│   │   ├── dashboard.component.ts
│   │   └── header.component.ts
│   └── api.service.ts
├── assets/
│   └── img/
│       └── ranger.png
└── index.html
```

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Amaral-Gabriel/sprint-dash_Ford.git
cd sprint-dash_Ford
```

### 2. Clone and Run the API (Backend)

You need to clone the API repository:

🔗 [API-FORD - GitHub](https://github.com/Amaral-Gabriel/API-FORD)

Then, run the following commands:

```bash
cd api-ford
npm install
npm start
```

> The API will run on: http://localhost:3000

---

### 3. Run the Angular Project (Frontend)

```bash
cd frontend
npm install
ng serve
```

> The frontend will run on: http://localhost:4200

---

## 💡 Tips

- Ensure **frontend** and **backend** are running on different ports.
- If you encounter CORS errors, check that the backend allows connections from localhost:4200.
- If images aren't loading, verify that they are placed inside the `assets/img/` folder.


---
Português 
---

# 🚗 Sistema Ford - Dashboard de Veículos

## ⚠️ Em Desenvolvimento

Este é um projeto **full-stack** construído com **Angular** no frontend e **Node.js + Express** no backend. Ele simula um painel de controle de veículos da Ford, permitindo autenticação de usuários, visualização de métricas de veículos e consulta por VIN.

---

## 🛠️ Tecnologias Utilizadas

### 🖥️ Frontend
- Angular 17+
- TypeScript
- Bootstrap Icons
- HTML/CSS

### 🧪 Backend
- Node.js
- Express.js

---

## 🧩 Funcionalidades

### 🔐 Login (`LoginComponent`)
- Autenticação por email e senha.
- Validação via API.
- Armazena o token de sessão no `localStorage`.
- Redireciona automaticamente para o Dashboard após login.

### 🏠 Página Inicial (`HomeComponent`)
- Mensagem de boas-vindas.
- Acesso rápido ao Dashboard.

### 📊 Dashboard (`DashboardComponent`)
- Seleção de veículos.
- Exibição de métricas:
  - Total de vendas.
  - Veículos conectados.
  - Atualizações de software pendentes.
- Busca por VIN (Vehicle Identification Number).
- Exibição dinâmica da imagem do veículo selecionado.
- Atualização automática das métricas ao selecionar ou buscar.

### 🔝 Cabeçalho (`HeaderComponent`)
- Navegação fixa no topo.
- Links para Home, Dashboard e Logout.

### 📡 Serviço de API (`ApiService`)
- `getVehicles()`: Retorna todos os veículos cadastrados.
- `getVehicleData(vin: string)`: Retorna dados detalhados de um veículo.
- `login(email, senha)`: Realiza a autenticação do usuário.

---

## 📁 Estrutura de Pastas (Frontend)

src/
├── app/
│   ├── components/
│   │   ├── login.component.ts
│   │   ├── home.component.ts
│   │   ├── dashboard.component.ts
│   │   └── header.component.ts
│   └── api.service.ts
├── assets/
│   └── img/
│       └── ranger.png
└── index.html

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

git clone https://[github.com/seu-usuario/sistema-ford.git](https://github.com/Amaral-Gabriel/sprint-dash_Ford)

cd sistema-ford

### 2. Clonar e Rodar a API (Backend)

Você deve clonar o repositório da API:

API-FORD - GitHub: https://github.com/Amaral-Gabriel/API-FORD

E executar os comandos:

cd api-ford

npm install

npm start

> A API será executada em: http://localhost:3000

---

### 3. Rodar o Projeto Angular (Frontend)

cd frontend

npm install

ng serve

> O frontend será executado em: http://localhost:4200

---

## 💡 Dicas

- Certifique-se de que **frontend** e **backend** estejam em portas diferentes.
- Em caso de erro de CORS, valide se o backend está permitindo conexões do localhost:4200.
- Caso as imagens não carreguem, verifique se elas estão dentro da pasta assets/img/.
