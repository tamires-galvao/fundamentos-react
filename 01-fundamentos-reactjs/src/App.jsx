import { Header } from './components/Header'
import {Post} from './Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="Tamires Moreno"
          content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />

        <Post
          author="Kamila Bordin"
          content= "Um novo Post Legal"
        />
      </main>
     </div>
    </div>
  )
}