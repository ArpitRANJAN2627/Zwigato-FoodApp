import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent cons")
  }
  componentDidMount(){
    console.log("parent component did mount")
  }
  componentDidUpdate(){
    console.log("Parent update")
  }

  componentWillUnmount(){
    console.log("Parent unmount")
  }
  render(){
    console.log("parent render")
    return (
      <div>
          <h1>About Us</h1>
          {/* <User name="Arpit Ranjan " location="Koderma" /> */}
          <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
          <UserClass name="First " location="Koderma"/>
          {/* <UserClass name="Second " location="Koderma"/> */}
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//         <h1>About Us</h1>
//         <User name="Arpit Ranjan " location="Koderma" />
//         <UserClass name="Arpit Ranjan " location="Koderma"/>
//     </div>
//   )
// }

export default About