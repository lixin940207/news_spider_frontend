import React, {Component} from 'react';
import {PageHeader, Tabs, Button, Tag, Tooltip} from 'antd';
import {MailOutlined, SearchOutlined, TranslationOutlined} from '@ant-design/icons';
import {createFromIconfontCN} from '@ant-design/icons';

import Text from "antd/es/typography/Text";
import FranceNewsApp from "../news/france_news";
import WorldNewsApp from "../news/world_news";
import ChinaNewsApp from "../news/china_news";

const {TabPane} = Tabs;


const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2669396_txkzoe6qup8.js',
});


class MainComponent extends Component {

    state = {
        lang: 'ori',
    }

    handleOnClick = ()=>{
        if(this.state.lang === 'ori'){
            this.setState({lang: 'cn'})
        }else{
            this.setState({lang: 'ori'})
        }
    }

    render() {
        return (
            <PageHeader
                className="site-page-header-responsive"
                title="新闻集成器"
                subTitle="This is a subtitle"
                extra={[
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>,
                    <Button key="1" shape="circle" icon={<TranslationOutlined/>} onClick={this.handleOnClick}/>,
                    <Button key="2" shape="circle" icon={<MailOutlined/>}/>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span> <MyIcon type="icon-lixinfrance"/>France</span>} key="1">
                            <FranceNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixinchina"/>China</span>} key="2">
                            <ChinaNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixina-shijie1"/>World</span>} key="3">
                            <WorldNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixina-bingdu1"/>Covid</span>} key="4">
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixintwitter"/>Social Media</span>} key="5"/>

                    </Tabs>
                }
            >
                <div>
                    <Text>今日热门：</Text>
                    <Tag color="#557571" style={{borderRadius: "3px "}}>Euro Cup 2021</Tag>
                    <Tag color="#D49A89">
                        <div style={{fontColor: "red"}}>Ronald Acuna</div>
                    </Tag>
                    <Tag color="#F7D1BA">Australia First Death</Tag>
                    <Tag color="#557571">orange</Tag>
                    <Tag color="#D49A89">gold</Tag>
                    <Tag color="#ECB390">lime</Tag>
                    <Tag color="#557571">green</Tag>
                    <Tag color="#D49A89">cyan</Tag>
                    <Tag color="#D4E2D4">blue</Tag>
                    <Tag color="#557571">geekblue</Tag>
                </div>
            </PageHeader>
        )
    }
}

export default MainComponent;


