import {Link} from 'react-router-dom'
function Error() {
  return (
    <div className='tops '>    
        
        <div className='top-top'>
          <h1 className='top-head'>404</h1>
        <p className='top-middle'>Sorry Page does not exist</p>
        <button className = 'btns' >
          <Link className = 'btn' to = '/'>Go Back Home</Link>
        </button>
        </div>
      
      
    </div>
  )
}

export default Error

