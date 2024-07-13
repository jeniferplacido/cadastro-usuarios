import { Request, Response } from 'express'; // Importa os tipos Request e Response do express para tipagem
import { Usuario } from '../models/Usuario'; // Importa a interface Usuario do arquivo de modelos
import { UsuarioService } from '../services/usuarioService'; // Importa a classe UsuarioService para acessar os métodos de serviço

const usuarioService = new UsuarioService(); // Cria uma instância da classe UsuarioService para usar seus métodos

// Define uma função assíncrona para listar todos os usuários
export const listarUsuarios = async (req: Request, res: Response): Promise<void> => {
    try {
        const usuarios = await usuarioService.listarUsuarios(); // Tenta obter a lista de usuários
        res.status(200).json(usuarios); // Se bem-sucedido, retorna os usuários com status 200
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários' }); // Em caso de erro, retorna status 500 com mensagem
    }
};

// Define uma função assíncrona para encontrar um usuário pelo ID
export const encontrarUsuario = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id); // Converte o ID de string para número
    try {
        const usuario = await usuarioService.encontrarUsuario(id); // Tenta encontrar o usuário pelo ID
        if (usuario) {
            res.status(200).json(usuario); // Se o usuário for encontrado, retorna com status 200
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' }); // Se não encontrar o usuário, retorna status 404
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar usuário' }); // Em caso de erro, retorna status 500 com mensagem
    }
};

// Define uma função assíncrona para cadastrar um novo usuário
export const cadastrarUsuario = async (req: Request, res: Response): Promise<void> => {
    const novoUsuario: Usuario = req.body; // Obtém o novo usuário do corpo da requisição
    try {
        await usuarioService.cadastrarUsuario(novoUsuario); // Tenta cadastrar o novo usuário
        res.status(201).json({ message: 'Usuário cadastrado com sucesso' }); // Se bem-sucedido, retorna status 201 com mensagem
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário' }); // Em caso de erro, retorna status 500 com mensagem
    }
};

// Define uma função assíncrona para deletar um usuário pelo ID
export const deletarUsuario = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id); // Converte o ID de string para número
    try {
        await usuarioService.deletarUsuario(id); // Tenta deletar o usuário pelo ID
        res.status(200).json({ message: 'Usuário deletado com sucesso' }); // Se bem-sucedido, retorna status 200 com mensagem
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário' }); // Em caso de erro, retorna status 500 com mensagem
    }
};