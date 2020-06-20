import React from 'react'
import {CardList} from './components/card-list/card-list.component'
class App extends React.Component{
   constructor(){
      super();
      this.state = {
         Monsters :[
         ]
      }
   }   
   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => this.setState({Monsters:data}))
   }
render(){
return(
<div> 
<CardList monsters = {this.state.Monsters} />

</div>
)
}
}
export default App   