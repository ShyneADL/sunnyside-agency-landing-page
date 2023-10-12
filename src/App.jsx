import React from 'react'
import { Hero, FirstRow, SecondRow, ThirdRow, Testimonials, ImageGallery, Footer } from './containers'

const App = () => {
  return (
    <div>
      
      <section >
        <Hero />
      </section>

      <section>
        <FirstRow />
      </section>
      <section>
        <SecondRow />
      </section>
      <section>
        <ThirdRow />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <ImageGallery />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;