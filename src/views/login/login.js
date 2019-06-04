import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react';
import './login.less';
import { loginAction } from '../../action/login.action';
//const FormItem = Form.Item;
/*function send(user) {
  return function(dispatch) {
    fetch('service/system/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) { 
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(rs => {
      if(rs.ret) {
        localStorage.setItem('user', JSON.stringify(user));          
      }
      dispatch({type: "login", user: user});
      history.push("/home");
    });
  }
}
@connect(
  state => state.login,
  dispatch => ({
    login: (args) => {
      dispatch(send({
        userName: "admin",
        password: "ebcbf97ec1d80c0388d39bf508039baa",
        code: ""
      }));
    },
    loginOut: (args) => {
      localStorage.removeItem('user');
      dispatch({type: "login", user: null})
    }
  })
)*/
/*let action = {
  login: (args) => {
    let send = (user) => {
      return (dispatch) => {
        fetch('service/system/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(response => {
          if (!response.ok) { 
            return Promise.reject(response.statusText);
          }
          return response.json();
        }).then(rs => {
          if(rs.ret) {
            localStorage.setItem('user', JSON.stringify(user));          
          }
          dispatch({type: "param", user: user});
          history.push("/home");
        });
      }
    }
    return send({
      userName: "admin",
      password: "ebcbf97ec1d80c0388d39bf508039baa",
      code: ""
    });
  },
  loginOut: (args) => {
    return {type: "param", user: null};
  }
}*/
@connect(
  state => state.login,
  dispatch => bindActionCreators(loginAction, dispatch)
)
class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }
  render() {
    //const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}
export default Login;
/*function mapStateToProps(state) {
  const {user} = state.login;
  return {
    user
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: (args) => {
      //localStorage.setItem('user', 100);
      //dispatch({type: "login", user: 100}); 
      //this.props.history.push("/");
      //window.location.href = "/";
      dispatch(send({
        userName: "admin",
        password: "ebcbf97ec1d80c0388d39bf508039baa",
        code: ""
      }));
    },
    loginOut: (args) => {
      localStorage.removeItem('user');
      dispatch({type: "login", user: null})
    }
  }
}
function send(user) {
  return function(dispatch) {
    fetch('service/system/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) { 
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(rs => {
      if(rs.ret) {
        localStorage.setItem('rs', JSON.stringify(user));          
      }
      dispatch({type: "login", user: user});
      history.push("/");
    });
  }
}
const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedLoginPage;*/
