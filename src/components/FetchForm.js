import React, { Component } from 'react';


class FetchForm extends Component {

  // referecja do pola input z liczą pobieranych elementów
  // zostaje dodane przez funcję dostarczoną do atrybutu ref
  input = null

  submit = (e) => {
    // zatrzymuje przesyłanie formularza do serwera
    // czyli nie przeładuje strony
    e.preventDefault()
    this.props.onSubmit(this.input.value)
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="number"
               defaultValue={10}
               ref={element => this.input = element} />
        <input type="submit" value="Fetch Data"/>
      </form>
    );
  }
}

export default FetchForm;
