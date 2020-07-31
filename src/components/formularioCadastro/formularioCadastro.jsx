import React, { Component } from 'react';

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
