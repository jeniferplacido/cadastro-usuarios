import express, { Request, Response } from 'express'; // Importa o Express e os tipos Request e Response

const app = express(); // Cria uma instância do Express
const PORT = 8080; // Define a porta que o servidor irá escutar

app.use(express.json()); // Configura o Express para entender requisições com corpos em formato JSON

app.get('/', (req: Request, res: Response) => { // Define uma rota GET na raiz do servidor
    res.send('API de Cadastro de Usuários'); // Envia uma resposta de texto quando a rota é acessada
});

app.listen(PORT, () => { // Inicia o servidor para escutar na porta definida
    console.log(`Servidor rodando na porta ${PORT}`); // Exibe uma mensagem no console quando o servidor estiver rodando
});
