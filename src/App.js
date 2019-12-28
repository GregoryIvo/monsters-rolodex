import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
  //superclass component contains state, therefore we must call it too use it
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    }
    //to ensure that the context of this is binded to the function
    //so that the this in the function is the same as this in the constructor 
    //this.handleChange = this.handleChange.bind(this);
  }
  //when the compenent mounts (when it is rendered to the dom for the first time)
  //this is always one of the many component lifecycle methods
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }


  //it appears we dont need to set every state when calling set state, just the ones we would like to change.
  //set state is async.
  //Camel case are sythitic events created by react
  
  //ES6 syntax ensures that the this context is passed
  //sutomatically binds this to the place the arrow function was defined
  //they automatically get lexical scoping
  handleChange = (e) => {
    this.setState({searchFeild: e.target.value});
  }

  render(){
    const { monsters, searchFeild} = this.state; //destructing the state fuction, setting them to consts
    /**
     * const monstetrs = this.states.monster;  < similar to this
     */
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      );

      //1(yes 1, invoked when rendered), 2(yes 1), 3(noting), 4(log 3)


    return(
      //children are what we pass in between JSX Tags
      <div className="App">
      <h1> Monsters Roledex </h1>
      <SearchBox placeholder="SeachMonsters" handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    );

  }
}

export default App;
