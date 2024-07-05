// npm i express
//npm i --save-dev @types/express
//Comando para rodar: npm run lint ou npm run lint:fix (para consertar e indicar erros do codigo)
//npm run start (Para iniciar o servidor)
import express, { Request, Response } from 'express';

const app = express();

// Indicando que a API vai usar o JSON
app.use(express.json());

//Req = > Requset (Requisição)
//Res = > Response (Resposta)
app.use('/', (req: Request, res: Response) => {
  return res.status(200).json({
    msg: 'Estamos online',
    live: true,
  });
});

app.listen(5000, () => {
  console.log('Estamos online');
  console.log('Acesso http://localhost:5000');
});
//npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
