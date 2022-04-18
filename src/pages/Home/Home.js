import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Button from '../../components/Button/buton';
import '../../App.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            uid: '',
            email:'',
            message: ''
        }

        this.getUsers = this.getUsers.bind(this);
        this.signOut = this.signOut.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    uid: user.uid,
                    email: user.email
                })
                this.state.email = user.email
                this.state.uid = user.uid
            }
        })
    }

    getUsers() {
        firebase.firestore().collection('usuarios').get().then((item) => {
            const state = this.state;

            item.forEach(element => {
                state.dados.push({
                    id: element.id,
                    nome: element.data().nome,
                    sobrenome: element.data().sobrenome,
                    email: element.data().email,
                    dataNascimento: element.data().dataNascimento
                });
            });
            this.setState(state)
        })
    };

    signOut(){
        let sucessfulSignOut = 'Log out realizado com sucesso!';

        firebase.auth().signOut().then(() => {
            this.setState({message: sucessfulSignOut})
            window.location.href='/'

        }).catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message
            console.log(errorMessage)
            console.log(errorCode)
        });   
    };

    render() {
        return (
            <div className="App">
                <Button buttonOnClick={this.signOut}> Sair </Button>  
                <h1>{this.state.message}</h1>
                <h2>Bem vindo, {this.state.email} </h2>
                <p> Seu ID é: {this.state.uid}</p>

                <h1> Usuários </h1>
                <Button buttonOnClick={this.getUsers}> Listar </Button>
                {
                    this.state.dados.map((item) => {
                        return(
                            <div key={item.id}>
                                <ul>
                                    <li>Id: {item.id}</li>
                                    <li>Nome: {`${item.nome} ${item.sobrenome}`}</li>
                                    <li> Email: {item.email}</li>
                                    <li>Data de nascimento: {item.dataNascimento}</li>
                                </ul>                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;