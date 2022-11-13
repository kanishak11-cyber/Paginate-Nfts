import Particle from '../components/Particle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Particle/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
