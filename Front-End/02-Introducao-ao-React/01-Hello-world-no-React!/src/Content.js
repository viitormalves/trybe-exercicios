import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

const createList = (conteudo) => `Eu ${conteudo
  .status} o conteúdo ${conteudo.nome} no bloco ${conteudo.bloco}`;

class Content extends React.Component {
  render() {
    return (
      <ul>
        {conteudos.map((conteudo) => <li key={ conteudo }>{createList(conteudo)}</li>)}
      </ul>
    );
  }
}

export default Content;
