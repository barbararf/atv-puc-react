import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/buton';
import '../../App.css';


class Login extends Component{
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
    this.authUser = this.authUser.bind(this);
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

  authUser(){
    let accessAccept = 'Acessado com sucesso!';
    let accessDenied = 'Usuário ou senha incorretos!';

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredential => {
      try{
        const user = userCredential.user;
        console.log(userCredential)
        if(user !== null){
          this.setState({message: accessAccept});
          window.location.href='/home'
        } else {
          this.setState({message:accessDenied});
        }
      }
      catch(error){
        let errorCode = error.code
        let errorMessage = error.message
        console.log(errorMessage)
        console.log(errorCode)
      }
    })
  } 


  verifyAccess(){
    let password = this.state.password;
    let email = this.state.email;
    let accessAccept = 'Acessado com sucesso!';
    let accessDenied = 'Usuário ou senha incorretos!';

    if(password === '123456' && email === 'carol@mail.com'){
      this.setState({message: accessAccept})
      this.userLogged()
    } else {
      this.setState({message:accessDenied});
    }
    // conectar com validacao do firebase
    // redirecionar para Home
    
  }


  render(){
    return(
      <div className="App">
        <h1 className="txt-login">Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <label id='email-id'></label>
          <input type='text' name='email' id='email-id' size='40' placeholder='Email' value={this.state.email} onChange={this.handleEmail} required/> 
          <br/>
          <br/>
          <label id='pwd-id'></label>
          <input type='password' name='password' id='pwd-id' size='40' placeholder='Senha' value={this.state.password} onChange={this.handlePassword} required/> 
          <br/>
          <br/>
          <Button buttonOnClick={this.authUser} type='submit'> Acessar </Button>        
          <Link to='/cadastrar' ><Button> Cadastrar </Button>  </Link>
        </form>  

      <h2> {this.state.message} </h2>
    </div>
    )
  }
}

export default Login;
