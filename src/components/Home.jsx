import Form from './Form'
import Thanks from './Thanks'
import Error from './Error'
import Landing from './Landing'

const Home = (props) => {
  let page

  if (props.currentPage === 1) {
    page = <Form {...props}/>
  } else if (props.currentPage === 2) {
    page = parseInt(props.age) >= 18 ? <Thanks decrementPage={props.decrementPage}/> : <Error decrementPage={props.decrementPage}/>
  } else {
    page = <Landing incrementPage={props.incrementPage} />
  }

  return <div>{page}</div>
}

export default Home
