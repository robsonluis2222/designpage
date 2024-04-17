import { useState, useEffect } from 'react';
import './ChatPage.css';


function ChatPage(){
    const [inputValue, setInputValue] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [urlSend, setUrlSend] = useState('');
    const url = 'https://backendchat.000webhostapp.com/add.php';
    let msg = '';
    const [userName, setUserName] = useState('');

    const askForName = () => {
        const name = window.prompt('Por favor, digite seu nome:');
        if (name) {
        setUserName(name);
        } else {
        alert('Por favor, insira um nome válido.');
        }
    };

  useEffect(() => {
    const intervalId = setInterval(() => {
        fetchFileContent(); // Chama a função para buscar os dados da API
      }, 5000);
  }, []);

  const handleClick = () => {
    // Chama a função passando o conteúdo do input
    sendNewMensage(inputValue);
  };

  async function sendNewMensage(inputValue){
    if(!userName){
        return window.alert("Defina um nome !");
    }
    if(!inputValue) {
        return window.alert("Campo de mensagem está vazio !");
    }
    let newMsg = `${inputValue}`;
    const urlSend = `${url}?data=${userName}: ${newMsg}`;
    console.log(urlSend);
    try{
        await fetch(urlSend); // Caminho relativo para o arquivo de texto
        setInputValue('');
        fetchFileContent();
    } catch (error){
        console.log("erro ao enviar mensagem", error);
    }
  }

  const fetchFileContent = async () => {
    try {
      const response = await fetch('https://backendchat.000webhostapp.com/db.txt'); // Caminho relativo para o arquivo de texto
      const text = await response.text();
      setFileContent(text);
    } catch (error) {
      console.error('Erro ao buscar conteúdo do arquivo:', error);
    }
  };

    return(
        <div className='chatpage'>
            <div className='chat'>
                <div className='title'>
                    <marquee behavior="" direction="left">BEM VINDO ! - ESTE É O CHAT DA FAMÍLIA LEITE</marquee>
                </div>
                <div className='conversation'><pre>{fileContent}</pre></div>
            <div className='send-div'>
                <input
                    type="text"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
                <button onClick={handleClick}>Enviar</button>
                <button onClick={askForName}>Definir nome</button>
            </div>
            </div>
        </div>
    );

}

export default ChatPage;