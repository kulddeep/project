import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>address</h1>
      </div>
    );
  }
}
export default UserClass;
