import { Component } from "react";
import userPhoto from "./userPhoto.jpeg";
import UserListItem from "./userListItem";
import styles from "./UserList.module.css";

const usersData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    imgSrc: userPhoto,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 34,
    imgSrc: userPhoto,
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    age: 25,
    imgSrc: userPhoto,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Williams",
    age: 30,
    imgSrc: userPhoto,
  },
  {
    id: 5,
    firstName: "Chris",
    lastName: "Davis",
    age: 27,
    imgSrc: userPhoto,
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };
    this.setState({ users: newUsers });
  };

  deleteUser = (id) => {
    const { users } = this.state;
    const filteredUsers = users.filter((u)=>u.id !==id)
    this.setState({users: filteredUsers})
  }

  mapUser = (u) => {
    return <UserListItem key={u.id} user={u} selectUser={this.selectUser} deleteUser={this.deleteUser}/>;
  };

  render() {
    const { users } = this.state;

    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UsersList;
