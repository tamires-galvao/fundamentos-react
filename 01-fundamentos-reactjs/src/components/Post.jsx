import styles from './Post.module.css'
export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}></div>
        <img className={styles.avatar} src='https://github.com/tamires-galvao.png'/>
        <div className={styles.authorInfor}>
          <strong>Tamires Moreno</strong>
          <span>Full Stack Developer</span>
        </div>
        <time tile='01 de Novembro ás 20:33' dateTime='2023-11-01 20:32:00'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
          <p>
            Fala galeraa 👋
          </p>   
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,  evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p>
            👉 <a href=''>jane.design/doctorcare</a>
          </p>
          <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}