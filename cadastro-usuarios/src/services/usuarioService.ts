import { Usuario } from '../models/Usuario'; // Importa a classe Usuario do diretório models

export class UsuarioService {
    private usuarios: Usuario[] = []; // Inicializa um array privado para armazenar usuários

    async listarUsuarios(): Promise<Usuario[]> { // Método assíncrono para listar todos os usuários
        return this.usuarios; // Retorna o array de usuários
    }

    async encontrarUsuario(id: number): Promise<Usuario | undefined> { // Método assíncrono para encontrar um usuário pelo ID
        return this.usuarios.find(u => u.id === id); // Retorna o usuário encontrado ou undefined se não encontrar
    }

    async cadastrarUsuario(usuario: Usuario): Promise<void> { // Método assíncrono para cadastrar um novo usuário
        this.usuarios.push(usuario); // Adiciona o novo usuário ao array de usuários
    }

    async deletarUsuario(id: number): Promise<void> { // Método assíncrono para deletar um usuário pelo ID
        this.usuarios = this.usuarios.filter(u => u.id !== id); // Remove o usuário do array pelo ID e atualiza o array
    }
}
