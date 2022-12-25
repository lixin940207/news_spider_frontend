import React, {Component} from 'react';
import {PageHeader, Tabs, Button, Tooltip, Dropdown} from 'antd';
import {MailOutlined, SearchOutlined, TranslationOutlined} from '@ant-design/icons';
import Text from "antd/es/typography/Text";
import FranceNewsApp from "../news/france_news";
import WorldNewsApp from "../news/world_news";
import ChinaNewsApp from "../news/china_news";
import MyIcon from "../MyIcon";
import TechNewsApp from "../news/tech_news";
import CovidNewsApp from "../news/covid_news";
import WarNewsApp from "../news/war_news";
import HotTopics from "../HotTopics";

const {TabPane} = Tabs;

class MainComponent extends Component {

    state = {
        lang: undefined,
        langButtonType: "default",
    }

    handleOnClick = (lang) => {
        this.setState({lang, langButtonType: "primary"});
    }

    render() {
        const items = [
            {
                key: 'fr',
                label: (
                    <button onClick={() => this.handleOnClick('fr')}>
                        French
                    </button>
                ),
            },
            {
                key: 'en',
                label: (
                    <button onClick={() => this.handleOnClick('en')}>
                        English
                    </button>
                ),
            },
            {
                key: 'zh',
                label: (
                    <button onClick={() => this.handleOnClick('zh')}>
                        Chinese
                    </button>
                ),
            },
            {
                key: 'default',
                label: (
                    <button onClick={() => this.handleOnClick(undefined)}>
                        default
                    </button>
                ),
            },
        ];
        // const lang_attribute = { lang: this.state.lang }
        return (
            <PageHeader
                className="site-page-header-responsive"
                title="Bread News"
                subTitle="Read the world in your breakfast"
                avatar={{src: process.env.PUBLIC_URL + 'Illustration_sans_titre.png', size: 70, shape: "square"}}
                extra={[
                    <Tooltip title="search">
                        <Button key="button1" type="primary" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>,
                    <Dropdown menu={{
                        items,
                    }} placement="bottom">
                        <Button key="button2" type={this.state.langButtonType} shape="circle"
                                icon={<TranslationOutlined/>}/>
                    </Dropdown>
                    ,
                    <Button key="button3" shape="circle" icon={<MailOutlined/>}/>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane style={{backgroundColor: "#F4F4F4"}}
                                 tab={<span> <MyIcon type="icon-lixinfrance"/>France</span>} key="tab1">
                            <FranceNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixinchina"/>China</span>} key="tab2">
                            <ChinaNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixina-shijie1"/>World</span>} key="tab3">
                            <WorldNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixintwitter"/>High Tech</span>} key="tab6">
                            <TechNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixina-bingdu1"/>Covid</span>} key="tab4">
                            <CovidNewsApp lang={this.state.lang}/>
                        </TabPane>
                        <TabPane tab={<span> <MyIcon type="icon-lixinflight"/>Russia-Ukraine War</span>} key="tab5">
                            <WarNewsApp lang={this.state.lang}/>
                        </TabPane>
                    </Tabs>
                }
            >
                <div>
                    <Text>Today's Topics：</Text>
                    <HotTopics count={10}/>
                </div>
            </PageHeader>
        )
    }
}

export default MainComponent;


