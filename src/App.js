import React ,{Component} from 'react';
//import logo from './logo.svg';
import PokeList from './PokeList';
import Detail from './Detail';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    //console.log(id);
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <Detail pokemon = {this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
