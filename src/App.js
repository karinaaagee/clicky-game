import React, { Component } from 'react';
import Card from "./Components/Card";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import friends from "./friends.json";
import './App.css';

class App extends Component {

  state = {
    friends,
    score: 0,
    topscore: 0,
    clickedOn: [],
    message:""
  }

   handleClick = id => {
    if (this.state.clickedOn.includes(id)) {
      this.Increment();
      this.setState({ clickedOn: this.state.clickedOn});
     }

    else {
      this.reset();
    }
  };

   
randomize(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  
  Increment = () => {
    const updateScore =  this.state.score + 1;
    this.setState({score:updateScore, message: "You guessed Correctly"
    });
    if (updateScore >= this.state.topscore){
      this.setState({topscore:updateScore});
    }
    this.randomize(friends);
  };

  reset = () => {
    this.setState({
      score: 0,
      topscore: this.state.topscore,
      message: "",
      clickedOn: []
    });
    this.randomize(friends);
  }


  render() {
    return (
      <div className = "container">
      <Navbar>
        message = {this.state.message}
        score = {this.state.score}
        topscore = {this.state.topscore}
      </Navbar>
      <Jumbotron></Jumbotron>
      <Wrapper>
      {/* map: creates a new array with the results of calling a provided function on every element in the calling array */}
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleClick= {this.handleClick}
          />
        ))}
      )
      </Wrapper>
      </div>
    );
  }


}

export default App;
