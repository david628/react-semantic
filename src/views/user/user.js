import React, { Component } from 'react';
//import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import { Link } from 'react-router-dom';
/*const RegisterPage = () => {
  return <div>注册页面</div>;
}
const A = () => {
  return <div>A页面</div>;
}*/
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 0,
        username: 'admin'
      }]
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    fetch('/user/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) { 
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(rs => {
      if(rs.code == 0) {
        /*this.setState({
          data: rs.data
        });*/
      } else {
        /*this.setState({
          data: []
        });*/
      }
    });
  }
  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'username',
      }
    ];
    return (
      <div>User</div>
    );
  }
}
export default User;
