import React, { Component } from 'react';
import CardNota from '../cardNota';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of('Trabalho', 'Trabalho', 'Estudos', 1, 1, 1, 1, 1, 1, 1).map(
          (categoria, index) => {
            return (
              <li key={index} className="lista-notas_item">
                <CardNota />
              </li>
            );
          },
        )}
      </ul>
    );
  }
}

export default ListaDeNotas;
