/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment({ content }){
  return(
    <div className={styles.comment}> 
      <Avatar src='https://github.com/tamires-galvao.png' hasBorder={false} />
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tamires Moreno</strong>
              <time title='01 de Novembro ás 20:33' dateTime='2023-11-01 20:32:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir<span>20</span>
          </button>  
        </footer>
      </div>
    </div>
  );
}