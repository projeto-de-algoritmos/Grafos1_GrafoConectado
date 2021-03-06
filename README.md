
  

# [Grafo Conectado](https://conectividadegrafo.netlify.app/)

  

  

  

**Número da Lista**: 1<br>

  

  

**Conteúdo da Disciplina**: Grafos 1<br>

  

  

  

## Alunos

  

  

|Matrícula | Aluno |
| -- | -- |
| 17/0010341 | Gabriel Davi Silva Pereira |
| 17/0102343 | Eduardo Vieira Lima |

  

  

  

## Sobre

  

  

Grafo Conectado tem como objetivo ser uma ferramente de construção para grafos direcionados, informando ao usuário se seu grafo é fortemente conectado ou não.

  

O projeto está disponível em: https://conectividadegrafo.netlify.app/

  

  

  

## Screenshots

  

  

![1](https://i.imgur.com/Ja7zfNT.jpg)

![2](https://i.imgur.com/dCjiZBP.jpeg)

![3](https://i.imgur.com/w4wBni6.jpg)

![4](https://i.imgur.com/g69pJNO.jpg)

  

## Instalação

  

  

**Linguagem**: Javascript<br>

  

  

**Framework**: ReactJs<br>

  

  

É necessário possuir um instalador de pacotes JS (eg. [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)) e um navegador de internet.

  

  

#### Passos para instalação

  

- 1 -> git clone no repositório ```https://github.com/projeto-de-algoritmos/Grafos1_GrafoConectado.git```

  

  

- 2 -> Navegar até a pasta app através de seu terminal ```cd Grafos1_GrafoConectado/app```

  

  

- 3 -> Executar o comando ```yarn install```

  

  

## Uso

  

  

#### Passos para executar o projeto localmente

  

- 1 -> Acessar a pasta app/

  

  

- 2 -> Executar o comando ```yarn start```

  

  

- 3 -> O projeto estará em execução no endereço ```localhost:3000```

  

  

## Outros

  

Para calcular a conectividade do grafo, utilizamos a busca BFS com o auxílio de uma matriz inversa.

  

O ponto inicial para a busca BFS é sempre o vértice de número 0. As cores das arestas e dos vértices mudarão de acordo com a conectividade em relação ao vértice 0, verde representa nós alcançáveis e arestas utilizadas enquanto vermelho representa os nós não alcançáveis e arestas não utilizadas.