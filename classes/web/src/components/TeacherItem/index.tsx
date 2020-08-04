import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                 <img src="https://avatars3.githubusercontent.com/u/22564040?s=460&u=e3b7d24311a454479a5b80a90691bbb33064fa1a&v=4" alt="Paladino"/>
                 <div>
                     <strong>Paladino</strong>
                     <span>Programação em Python</span>
                 </div>
            </header>
            <p>
            Desenvolvedor Python a vários anos, entusiasta de software livre.
            <br /><br />
            Apaixonado por aprender e ter novas ideias de melhoria de processo.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 250,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;