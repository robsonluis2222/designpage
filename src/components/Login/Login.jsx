import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(){

    const [inputValue, setInputValue] = useState('');
    const [linker, setLinker] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        const name = inputValue;
        console.log("setando name para ", name);
      };

    const handleButtonClick = () => {
        // Aqui você pode fazer o que quiser com o valor do input
        console.log('Valor do input:', inputValue);
        if(inputValue != "leite"){
            window.alert("Você não é integrante dessa família !")
            setLinker("/");
        } else{
            setLinker("/chat");
        }
        // Limpar o input
        setInputValue('');
      };

    return(
        <>
            <div className='container'>
                <div className='login-div'>
                    <h2>Digite seu sobrenome</h2>
                    <h3>para ingressar no chat:</h3>
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder='Digite seu nome...'
                        required
                    />
                    <Link to={linker}>
                        <span className="box" onClick={handleButtonClick}>Ingressar</span>
                    </Link>
                </div>
            </div>
            
        </>
    );
}

export default Login;