import Services from './Services'
import Deals from './Deals'

function Home() {
  return (
    <div>

      <div className = 'top'>
        {/* <div>
          <h3>Room Type</h3>
          <p>Single Room</p>
        </div>
        <div>
          <input type/>
          <p>Single Room</p>
        </div> */}
      </div>

      <Services />
      <Deals />
      
    </div>
  )
}

export default Home

