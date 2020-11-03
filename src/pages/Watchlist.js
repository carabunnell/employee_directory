import React, { Component } from "react";
import FriendCard from "../components/FriendCard";
import WrapperOne from "../components/WrapperOne";
import Title from "../components/Title";
import friends from "../friends.json";
// import "./App.css";


class Watchlist extends Component {
  state = {
    friends
  };

removeFriend = id => {
  const friends = this.state.friends.filter(friend => friend.id !== id);
  this.setState({ friends });
}
render() {
  return (
    <WrapperOne>
      <Title>Movie List</Title>
      {this.state.friends.map(friend => (
        <FriendCard
        removeFriend={this.removeFriend}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        />
      ))}
      {/* <input type="text" placeholder="Enter text here" /> */}
    </WrapperOne>
    
  )
  // return(
  //   <div>
  //     <input type="text" placeholder="Enter text here" />
  //   </div>
  // )
  }
}

export default Watchlist;