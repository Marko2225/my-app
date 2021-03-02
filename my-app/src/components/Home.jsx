import { Redirect } from "react-router"

const  Home = ({loggedIn}) => {

    return (

        <>
          {loggedIn ? <Redirect to='/Game' /> : <Redirect to='/Login' />}

        </>
    )

}

export default Home