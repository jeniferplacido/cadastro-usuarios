# Cadastro de Usuários 📝

Projeto monolítico simples em TypeScript!

## Requisitos

- Node.js (v20.14.0 ou superior)
- npm (Node Package Manager)
- TypeScript

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
cadastro-usuarios/
├── dist/               # Arquivos compilados TypeScript
├── src/                # Código-fonte TypeScript
│   ├── controllers/    # Controladores da aplicação
│   ├── models/         # Modelos de dados
│   ├── routes/         # Rotas da API
│   ├── services/       # Lógica de negócio (serviços)
│   └── index.ts        # Ponto de entrada da aplicação
├── node_modules/       # Pacotes Node.js necessários
├── package.json        # Configurações do projeto
├── tsconfig.json       # Configurações do TypeScript
└── README.md           # Este arquivo
```

## Configuração

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/jeniferplacido/cadastro-usuarios.git
   cd cadastro-usuarios
   ```

2. **Instale as Dependências:**
   ```bash
   npm install
   ```

3. **Compilar o Código TypeScript:**
   ```bash
   npm run build
   ```

4. **Executar a Aplicação:**
   ```bash
   npm start
   ```
## Funcionalidades

- Cadastro de novos usuários
- Listagem de usuários cadastrados
- Busca de usuário por ID
- Remoção de usuário

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um novo Pull Request

---
## Licença

Este projeto é licenciado sob os termos da [Licença MIT](./LICENSE). Veja o arquivo LICENSE para mais detalhes.