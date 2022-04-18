import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      message:''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.verifyAccess = this.verifyAccess.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  verifyAccess(){
    let password = this.state.password;
    let email = this.state.email;
    let accessAccept = 'Acessado com sucesso!';
    let accessDenied = 'Usuário ou senha incorretos!';
    
  }


  render(){
    return(
      <div className="App">
        <h1 className="txt-login">login</h1>

        <form onSubmit={this.handleSubmit}>
          <label id='email-id'></label>
          <input type='text' name='email' id='email-id' size='40' placeholder='Email' value={this.state.email} onChange={this.handleEmail} required/> 
          <br/>
          <br/>
          <label id='pwd-id'></label>
          <input type='password' name='password' id='pwd-id' size='40' placeholder='Senha' value={this.state.password} onChange={this.handlePassword} required/> 
          <br/>
          <br/>
          <button onClick={this.verifyAccess} type='submit'> Acessar </button>        
        </form>  

      <h2> {this.state.message} </h2>
    </div>
    )
  }
}

export default App;

