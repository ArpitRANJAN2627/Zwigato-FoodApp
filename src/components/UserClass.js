import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Arpit",
                location:"koderma"
            },
        }
        // console.log(this.props.name+ "child cons")
    }
  
   async  componentDidMount(){
         console.log(this.props.name+"child componentdid mount")
        const data= await fetch(' https://api.github.com/users/ArpitRANJAN2627')
        const json=await data.json();

        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        // console.log(this.props.name+"child update")
    }

    componentWillUnmount(){
        // console.log(this.props.name+"child unmount")
    }
     

    render(){
        // console.log(this.props.name+"chid renddr")
        const {name,location,avatar_url} =this.state.userInfo; 

        return (
            <div className='user-class'>
                {/* <h1>Count :{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count increase</button> */}
                <img src={avatar_url}></img>
                 <h2>Name:{name}</h2>
                 <h3>Location:{location}</h3>
                 <h4>Contact: arpitranjan6@gmail.com</h4>
            </div>
          )
    }
}
export default UserClass