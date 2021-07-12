import React, {Component} from 'react';
import {PageHeader, Tabs, Button, Statistic, Descriptions, Tag, Tooltip} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Text from "antd/es/typography/Text";

const {TabPane} = Tabs;

const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
            <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
    </Descriptions>
);

const extraContent = (
    <div
        style={{
            display: 'flex',
            width: 'max-content',
            justifyContent: 'flex-end',
        }}
    >
        <Statistic
            title="Status"
            value="Pending"
            style={{
                marginRight: 32,
            }}
        />
        <Statistic title="Price" prefix="$" value={568.08}/>
    </div>
);

const Content = ({children, extra}) => (
    <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
    </div>
);

class Header extends Component {

    render() {
        return (
            <>
                <PageHeader
                    className="site-page-header-responsive"
                    title="新闻集成器"
                    subTitle="This is a subtitle"
                    extra={[
                        <Tooltip title="search">
                            <Button type="primary" style={{background: "FCF8E8", borderColor: "yellow"}} shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                    ]}
                    footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Details" key="1"/>
                            <TabPane tab="Rule" key="2"/>
                        </Tabs>
                    }
                >
                    <div>
                        <Text>今日热门：</Text>
                        <Tag color="magenta" style={{borderRadius:"3px "}}>Euro Cup 2021</Tag>
                        <Tag color="red">Ronald Acuna</Tag>
                        <Tag color="volcano">Australia First Death</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                    </div>
                    {/*<Content extra={extraContent}>{renderContent()}</Content>*/}
                </PageHeader>
            </>
        )
    }
}

export default Header;


