/**
 * Description: Main layout component of the app
 * Author: Hieu Chu
 */

import React from 'react';
import '../public/static/index.css';
import { Layout } from 'antd';
const { Content } = Layout;

import FixedSider from './Sider';
import MainLayout from './Main';
import Header from './Header';
import LogoTitle from './LogoTitle';
import Drawer from './Drawer';
import Menu from './Menu';

class MyLayout extends React.Component {
  state = {
    collapsed: this.props.collapsed,
    drawerVisible: false,
  };

  toggle = () => {
    if (window.innerWidth >= 576) {
      this.setState(
        (state) => ({
          collapsed: !state.collapsed,
        }),
        () => {},
      );
    } else {
      this.setState((state) => ({
        drawerVisible: !state.drawerVisible,
      }));
    }
  };

  render() {
    const { collapsed, drawerVisible } = this.state;
    const { children } = this.props;

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <FixedSider
          collapsed={collapsed}
          setCollapsed={(collapsed) => {
            this.setState({ collapsed });
          }}
        >
          <LogoTitle />

          <Menu closeDrawer={() => this.setState({ drawerVisible: false })} />
        </FixedSider>

        <MainLayout collapsed={collapsed}>
          <Header collapsed={collapsed} handleToggle={this.toggle} />
          <Content
            style={{
              margin: '20px 16px 15px 16px',
            }}
          >
            {children}
          </Content>
        </MainLayout>

        <Drawer
          drawerVisible={drawerVisible}
          closeDrawer={() => this.setState({ drawerVisible: false })}
        >
          <LogoTitle />

          <Menu
            style={{ minHeight: '100vh' }}
            closeDrawer={() => this.setState({ drawerVisible: false })}
          />
        </Drawer>
      </Layout>
    );
  }
}

export default MyLayout;
