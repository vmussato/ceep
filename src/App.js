import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas/listaDeNotas';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
