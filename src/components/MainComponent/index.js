import React, {Component} from 'react';
import {PageHeader, Tabs, Button, Tooltip, Dropdown, Input} from 'antd';
import Icon, {MailOutlined, SearchOutlined, TranslationOutlined} from '@ant-design/icons';
import styled from 'styled-components'
import {ReactComponent as PeaceSvg} from '../../peace-flag-country-ukrain-svgrepo-com.svg'
import {ReactComponent as FinanceSvg} from '../../cash-money-svgrepo-com.svg'
import Text from "antd/es/typography/Text";
import MyIcon from "../MyIcon";
import HotTopics from "../HotTopics";

const {Search} = Input;
const {TabPane} = Tabs;

const RoundSearch = styled(Input.Search)`
  .ant-input {
    border-radius: 25px;
  }
  .ant-btn-primary {
    border-radius: 50px;
  }
`;

class MainComponent extends Component {

    newTabIndex = 7;

    state = {
        lang: undefined,
        langButtonType: "default",
        activeKey: '1',
        panes: [
            {title: 'France', newsApp: 'france_news', icon: "icon-lixinfrance", closable: false, key: '1'},
            {title: 'World', newsApp: 'world_news', icon: "icon-lixina-shijie1", closable: false, key: '2'},
            {title: 'China', newsApp: 'china_news', icon: "icon-lixinchina", closable: false, key: '3'},
            {title: 'High Tech', newsApp: 'tech_news', icon: "icon-lixintwitter", closable: false, key: '4'},
            {
                title: 'Finance',
                newsApp: 'finance_news',
                customIcon: FinanceSvg,
                size: '16px',
                closable: false,
                key: '5'
            },
            {title: 'Covid', newsApp: 'covid_news', icon: "icon-lixina-bingdu1", closable: false, key: '6'},
            {
                title: 'Russia-Ukraine War',
                newsApp: 'war_news',
                customIcon: PeaceSvg,
                size: '18px',
                closable: false,
                key: '7'
            },
        ],
        searchBoxActive: false,
    }
    onChange = activeKey => {
        this.setState({activeKey});
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = (event, title, newsApp) => {
        // if (title.trim() === "") return;
        const {panes} = this.state;
        this.newTabIndex++;
        const activeKey = `${this.newTabIndex}`;
        panes.push({title, key: activeKey, newsApp, closable: true, icon: ""});
        this.setState({panes, activeKey});
    };

    remove = targetKey => {
        let {activeKey} = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    };


    handleLanguageOnClick = (lang) => {
        this.setState({lang, langButtonType: "primary"});
    }

    handleSearchOnClick = () => {
        this.setState({searchBoxActive: !this.state.searchBoxActive})
    }

    render() {
        const items = [
            {
                key: 'fr',
                label: (
                    <button onClick={() => this.handleLanguageOnClick('fr')}>
                        French
                    </button>
                ),
            },
            {
                key: 'en',
                label: (
                    <button onClick={() => this.handleLanguageOnClick('en')}>
                        English
                    </button>
                ),
            },
            {
                key: 'zh',
                label: (
                    <button onClick={() => this.handleLanguageOnClick('zh')}>
                        Chinese
                    </button>
                ),
            },
            {
                key: 'default',
                label: (
                    <button onClick={() => this.handleLanguageOnClick(undefined)}>
                        default
                    </button>
                ),
            },
        ];

        return (
            <PageHeader
                className="site-page-header-responsive"
                title="Bread News"
                subTitle="Read the world in your breakfast"
                avatar={{src: process.env.PUBLIC_URL + 'Illustration_sans_titre.png', size: 70, shape: "square"}}
                extra={[
                    this.state.searchBoxActive ?
                        <RoundSearch placeholder="input search text"
                                     enterButton
                                     onSearch={(value, event) => this.add(event, value, 'search_news')}/>
                        :
                        <Button key="button1"
                                type="primary"
                                shape="circle"
                                icon={<SearchOutlined/>}
                                onClick={this.handleSearchOnClick}
                        />,
                    <Dropdown menu={{
                        items,
                    }} placement="bottom">
                        <Button key="button2" type={this.state.langButtonType} shape="circle"
                                icon={<TranslationOutlined/>}/>
                    </Dropdown>,
                    <Button key="button3" shape="circle" icon={<MailOutlined/>}/>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1" activeKey={this.state.activeKey} onTabClick={(key) => this.setState({activeKey: key})}>
                        {
                            this.state.panes.map(pane => {
                                    const Component = React.lazy(() => import('../news/' + pane.newsApp));
                                    return (
                                        <TabPane
                                            tab={
                                                <span>
                                                    {
                                                        pane.icon === undefined ?
                                                            <Icon component={pane.customIcon}
                                                                  style={{fontSize: pane.size}}/>
                                                            :
                                                            <MyIcon type={pane.icon}/>
                                                    }
                                                    {pane.title}
                                                </span>
                                            }
                                            closable={pane.closable}
                                            key={pane.key}>
                                            <React.Suspense fallback={<div>...</div>}>
                                                <Component lang={this.state.lang} topic={pane.title}/>
                                            </React.Suspense>
                                        </TabPane>
                                    )
                                }
                            )
                        }
                    </Tabs>
                }
            >
                <div>
                    <Text>Today's Topics：</Text>
                    <HotTopics count={10} add={this.add}/>
                </div>
            </PageHeader>
        )
    }
}

export default MainComponent;


