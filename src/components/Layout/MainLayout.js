import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
//import { PrivateRoute } from '@/route/PrivateRoute';
import NoMatch from '@/views/404/404';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import SiderMenu from './SiderMenu';
import HeaderMenu from './HeaderMenu';
import './index.less';
import { getMenuData } from './menu';
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  }
};
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    item.children.forEach(children => {
      getRedirect(children);
    });
  } else {
    //try {
      redirectData.push({
        name: `${item.name}`,
        path: `${item.path}`,
        component: require(`@/views/${item.name}/${item.name}`).default
      });
    //} catch(err) {
    //}
  }
};
getMenuData().forEach(getRedirect);
class BasicLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  getDocTitle() {
    let title = 'WebApp';
    //if (routerData[pathname] && routerData[pathname].name) {
      //title = `${routerData[pathname].name} - WebApp`;
    //}
    return title;
  }
  render() {
    const { match, location } = this.props;
    return (
      <DocumentTitle title={ this.getDocTitle() }>
        <ContainerQuery query={ query }>
          { params => {
              if(location.pathname === "/") {
                location.pathname = redirectData[0].path;
              }
              return (
                <div>sdfsd</div>
              );
            }
          }
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
export default BasicLayout;