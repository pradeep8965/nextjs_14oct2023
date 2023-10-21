import Header from './components/Header'
import Aside from './components/Aside'
import Section from './components/Section'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
       <Header/>
        <main >
            <Aside/>
            <Section/>
        </main>
        <Footer/>
    </>
  )

}
