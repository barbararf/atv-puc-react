import { Component } from 'react';
import firebase from 'firebase/app';
import Button from '../../components/Button/buton';
import '../../App.css';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      email: '',
      dataNascimento: '',
      password: '', 
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  addUser() {
    let accessAccept = 'Cadastro criado com sucesso!';
    try {
      firebase.firestore().collection('usuarios').add({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        password: this.state.password,
        dataNascimento: this.state.dataNascimento
      }).then(this.createUser).then(() => {
        this.setState({message: accessAccept})
        setTimeout(() => {
          window.location.href='/'
       }, 1000)
      })
    }
    catch(error){
      let errorCode = error.code
      let errorMessage = error.message
      console.log(errorMessage)
      console.log(errorCode)
    }
  }

  createUser(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="App">
        <h1>Novo Cadastro</h1>
        <form onSubmit={this.handleSubmit}></form>
          <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br /><br />
          <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br /> <br />
          <input type="date" placeholder="01/01/2000" onChange={(e) => this.setState({ dataNascimento: e.target.value})} /> <br /> <br />
          <input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value.toLowerCase() })} /> <br /><br />
          <input type="text" placeholder="Senha" onChange={(e) => this.setState({ password: e.target.value })} /> <br /><br />
          <Button buttonOnClick={this.addUser}>Cadastrar</Button> <br /><br /><br />
        <form/>  
        <h2> {this.state.message} </h2>
      </div>
    )
  }

}

export default Cadastro;