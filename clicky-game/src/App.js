import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";

export default class App extends Component {
  state = {
    friends: friends,
  };

  removeFriend = (id) => {
    console.log(id);
    const tempFriends = this.state.friends.filter((f) => f.id !== id);
    this.setState({ friends: tempFriends });
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map((friend) => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            key={friend.id}
          />
        ))}
      </Wrapper>
    );
  }
}
