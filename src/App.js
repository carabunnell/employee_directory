import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import "./App.css";

class App extends Component {
  state = {
    friends
  };

removeFriend = id => {
  const friends = this.state.friends.filter(friend => friend.id !== id);
  this.setState({ friends });
}
render() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {this.state.friends.map(friend => (
        <FriendCard
        removeFriend={this.removeFriend}
        id={friend.id}
        key={friend.id}
        firstname={friend.firstname}
        lastname={friend.lastname}
        middleinitial={friend.middleinitial}
        image={friend.image}
        department={friend.department}
        location={friend.location}
        badge={friend.badge}
        />
      ))}
    </Wrapper>
  )
  }
}

export default App;
