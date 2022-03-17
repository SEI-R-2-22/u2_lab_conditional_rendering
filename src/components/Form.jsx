import Info from './Info'
import Thanks from './Thanks'
import ErrorPage from './ErrorPage'
import LandingPage from './LandingPage'

const Form = (props) => {
  let page

  if (props.currentPage === 1) {
    page = <Info {...props}/>
  } else if (props.currentPage === 2) {
    page = parseInt(props.age) >= 18 ? <Thanks decrementPage={props.decrementPage}/> : <ErrorPage decrementPage={props.decrementPage}/>
  } else {
    page = <LandingPage incrementPage={props.incrementPage} />
  }

  return <div>{page}</div>
}

export default Form
