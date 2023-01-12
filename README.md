# Course Plataform

## Sobre o projeto
Esse projeto consiste em uma plataforma - ou um protótipo de uma plataforma - de cursos. Esse plataforma permite que um professor crie cursos (ou conteúdos de maneira genérica) e que os alunos possam realizar perguntas nesses conteúdos. Além disso também há a parte do chat em que as pessoas que estão logadas podem trocar mensagens.

### Algumas Regras
No projeto há algumas regras que esclareço aqui, sendo elas:
- Somente um professor pode cadastrar outro professor e também os alunos, ou seja, a tela de cadasto é reservada somente a professores que estão logados na plataforma;
- Um Aluno, a princípio, participa de todos os cursos.
- Um Aluno pode fazer, no máximo, 2 perguntas por curso.
- Um Professor só pode responder uma pergunta relacionada a seu curso.
- Somente um professor pode cadastrar um curso (Aqui há apenas o título e a duração em horas)

Sendo essas as regras principais, podemos seguir

## Acesso a plataforma
É possível acessar o projeto através do link que se encontra no github desse projeto. O link é redirecionado para meu linktr.ee e nele, o primeiro link será o da plataforma.

Caso você acesse o projeto e ele não esteja no ar, pode me mandar um mensagem, email, ou qualquer outra coisa que verificarei e colocarei no ar. Além disso, é bem possível que a maior parte do tempo ele esteja off-line, uma vez que o mesmo está rodando em uma instância da AWS e também com o Banco de Dados MySQL.

Foi criado dois acessos já a plataforma para que possa usá-lo.

Acesso para professor:
```
email: adminprof@email.com
senha: password
```

Acesso como aluno:
```
email: aluno_1@email.com
senha: password
```

Com isso você já consegue acessar a plataforma, testar o acesso ao conteúdo.


## Sobre a Parte técnica
### Banco de Dados
O banco de dados escolhido foi o MySQL. A estrutura do banco está toda definida no DER através do arquivo `database_der.pdf`  na pasta `packages/server`. É uma estrutura bem simples, cabe apenas o leitor ter conhecimento de banco de dados relacionais.

Não há scripts SQL para creação do schema no banco pois o mesmo é feito através de migrations pelo server.

Caso deseje rodar o projeto localmente, há um docker-compose com o serviço do MySQL. Para rodar ele, há o comando, na raiz do projeto:
```bash
$ npm run start:docker
```

Para rodar esse comando, é levado em conta que já possui o Node.JS instalado, além do Docker e do Docker Compose

<br />

### Server - Back-end
A parte do back-end foi desenvolvida utilizando Node.Js com Express. Sem nenhum framework ou algo do tipo. E para conectar ao Banco de Dados previamente explicado, foi escolhido o TypeORM. A escolha do ORM foi por afinidade. 

O projeto segue uma estrutura bem simples:

1. `index.ts e app.ts` servem para iniciar a aplicação e o express

Uma vez inicializado, a API tem o seguinte fluxo:

`routes   ->   (middlewares) controllers   ->   usecases   ->   (database repository quando necessário)`

- routes: responsável pelo roteamento da API
- middlewares: responsável pela autenticação e autorização das requisições
- controllers: responsável por processar os dados da requisição e enviar a respota
- usecases: resposável por aplicar todas regras de negócio da aplicação.


Entrando na parte que é exclusiva do ORM:
- repository: usado para realizar chamadas ao banco
- entity: Uma classe que representa uma entidade do banco
- migration: Responsável por atualizar o schema do banco

#### Rodando o servidor:
Para rodar o servidor, com o banco de dados já executando e aceitando conexões, rodar, na pasta packages/server:

```bash
$ npm run build && npm run start
```

Com isso ele já fará tudo que é necessário para rodar o servidor.


### Web - Front-End
O Front-end foi feito utilizando `React.js` e também resolvi usar o Material UI pois ele contém muitas coisas já implementadas, o que auxilia a focar nas partes que realmente importam.

Explicando um pouco acerca da estrutura:
- assets: contém imagens do projeto
- components: pasta com components genéricos para serem consumidos pelas páginas
- contexts: contém os contexts do projeto, nesse, somente context de autenticação
- features: pasta com as páginas do projeto
  - home: página principal
  - contents list: Página que contém a listagem de conteúdos
  - content: página do contéudo em que é possível fazer e responder as perguntas
  - chat: página com a aba de chat para os usuários
  - auth:
    - login: página para realizar login
    - cadastro: página para um professor cadastrar outro professor ou um aluno
- hooks: pasta que contém os hooks, aqui: is-mobile para verificar se o dispositivo é mobile ou não e o hook de autenticação
- routes: usado para fazer o roteamento das páginas, nesse projeto estou usando react-router-dom
- styles: possui somente um arquivo de estilo global
- types: no geral contém interfaces
- utils: pasta com funções que podem ser úteis no projeto no geral

## Chat
O chat foi feito utilizando WebSocket.

#### Rodando o servidor web:
Para rodar o servidor web, na pasta packages/web, rodar. No Servidor foi criado um service para fazer todos o broadcast das mensagens e autenticação do usuário. Já no Front-End foi necessário somente fazer as chamadas aos servidor.

O payload, principalmente para identificação do usuário e para autenticação, contém algumas informações:
- token jwt para autenticação
- messagem que está sendo enviada
- nome e função do usuário


```bash
$ npm run build && npm run start
```

## Deploy da aplicação
O deploy da aplicação está sendo feito manualmente e os principais fatores que levaram a isso foi a visibilidade do repositório ser pública, o que deixa algumas coisas muito vulneráveis e também pelo fato de que a máquina é possui uma configuração bem básica. Mas aqui vais umas especificações:

- Back-end e Front-end rodando na AWS em uma instância EC2 utilizando `pm2` para possibilitar a execução dos servidores em uma mesma máquina como serviços  
- Banco de Dados MySQL rodando em uma instância da RDS


## Algumas Imagens do Projeto:
Página Principal
![image](https://user-images.githubusercontent.com/42154494/212138659-f320c39e-6d13-4918-b3a5-7e5be76a2263.png)
![image](https://user-images.githubusercontent.com/42154494/212138794-5f1fa028-0c7e-47aa-aefe-5e894462c8f5.png)

Página de Chat:
![image](https://user-images.githubusercontent.com/42154494/212139122-6716a093-0ea9-4136-97b9-0b29b50943a6.png)
![image](https://user-images.githubusercontent.com/42154494/212139195-a69d164c-7297-4b60-9ec5-3467f78278ce.png)
