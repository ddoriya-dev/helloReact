import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const SubMenu = Menu.SubMenu;

class AppRouter extends React.Component {

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div style={{width: 256}}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Link to='/'>
                <Icon type="pie-chart"/>
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/about'>
                <Icon type="desktop"/>
                <span>About</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/users'>
                <Icon type="inbox"/>
                <span>Users</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>

        <Route path="/" component={Index}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Router>
    );
  }

}


export default AppRouter;
