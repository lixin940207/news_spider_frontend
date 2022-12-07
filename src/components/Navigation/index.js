import React, {Component} from 'react';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

class Navigation extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined/>}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined/>}>
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="alipay">
                    Navigation Four - Link
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;
