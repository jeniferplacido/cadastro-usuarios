import express from 'express'; // Importa o Express para criar o roteador
import * as usuarioController from '../controllers/usuarioController'; // Importa todos os métodos do controller de usuários

const router = express.Router(); // Cria uma instância do roteador do Express

// Define uma rota GET para listar todos os usuários, utilizando o método listarUsuarios do controller
router.get('/usuarios', usuarioController.listarUsuarios);

// Define uma rota GET para encontrar um usuário pelo ID, utilizando o método encontrarUsuario do controller
router.get('/usuarios/:id', usuarioController.encontrarUsuario);

// Define uma rota POST para cadastrar um novo usuário, utilizando o método cadastrarUsuario do controller
router.post('/usuarios', usuarioController.cadastrarUsuario);

// Define uma rota DELETE para deletar um usuário pelo ID, utilizando o método deletarUsuario do controller
router.delete('/usuarios/:id', usuarioController.deletarUsuario);

export default router; // Exporta o roteador para ser utilizado em outras partes do aplicativo
