import { Header } from './components/Header'
import {Post} from './Post'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author = 'Tamires'
        content = 'kLorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid quisquam adipisci ipsam dolores, nisi nostrum, hic et quasi, molestiae reiciendis. Molestiae minima nobis tempore qui praesentium magni aliquam facere!'
      />
      <Post 
        author = 'Kamila'
        content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid quisquam adipisci ipsam dolores, nisi nostrum, hic et quasi, molestiae reiciendis. Molestiae minima nobis tempore qui praesentium magni aliquam facere!'
      />
    </div>
  )
}