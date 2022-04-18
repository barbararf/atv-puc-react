import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Ops!</h1>
                <Link to="/"><button>Voltar ao início</button></Link>
            </div>
        )
    }
}

export default NotFound;
