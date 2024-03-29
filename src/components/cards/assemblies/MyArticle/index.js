import React, {Component} from 'react';
import {Timeline, Typography} from "antd";
import PropTypes from "prop-types";
import './index.css';
import {RightOutlined} from '@ant-design/icons';
import ProCard from "@ant-design/pro-card";

const {Title, Paragraph} = Typography;

class MyArticle extends Component {
    state = {
        collapsedList: [],
        collapseIconVisibleList: [],
    }

    static propTypes = {
        article: PropTypes.object,
        showSummary: PropTypes.bool,
        liveList: PropTypes.array,
        isLive: PropTypes.bool,
        lang: PropTypes.string
    }
    static defaultProps = {
        showSummary: false,
        isLive: false,
    }

    componentWillMount() {
        if (this.props.isLive) {
            let collapsedList = [];
            let collapseIconVisibleList = [];
            for (let i = 0; i < this.props.liveList.length; i++) {
                collapsedList.push(true);
                collapseIconVisibleList.push(!(
                    (this.props.liveList[i].liveContent.summary === undefined ||
                        this.props.liveList[i].liveContent.summary === "")
                    &&
                    (this.props.liveList[i].liveContent.bodyBlockList === undefined ||
                        this.props.liveList[i].liveContent.bodyBlockList.length === 0)));
            }
            this.setState({collapsedList})
            this.setState({collapseIconVisibleList})
        }
    }

    render() {
        return (
            <div style={{marginRight: "20px", marginBottom: "20px"}}>
                <div>
                    {
                        !this.props.isLive && this.props.showSummary
                        && this.props.article && this.props.article.summary ?
                            this.props.article.summary[this.props.lang]
                            : ""
                    }
                </div>
                <div>
                    {
                        !this.props.isLive && this.props.article ?
                            this.props.article.bodyBlockList.map(item => {
                                if (item.type === 'p') {
                                    return (<Paragraph>
                                        {
                                            item[this.props.lang]
                                        }
                                    </Paragraph>)
                                } else if (item.type === 'img') {
                                    return (<img alt="illustration" src={item.src}/>)
                                } else if (item.type === 'ul') {
                                    return (<ul>
                                        {
                                            item[this.props.lang].map(i => {
                                                return (
                                                    <li>{i}</li>
                                                )
                                            })
                                        }
                                    </ul>)
                                } else if (item.type === 'blockquote') {
                                    return (<blockquote>{
                                        item[this.props.lang]
                                    }</blockquote>)
                                } else if (item.type === 'h2') {
                                    return (<Title level={4}>{
                                        item[this.props.lang]
                                    }</Title>)
                                } else {
                                    return (<div/>)
                                }
                            })
                            :
                            <Timeline mode="left" style={{marginLeft: "-318px", marginTop: "10px"}}>
                                {this.props.liveList.map((live, idx) => {
                                    return (
                                        <Timeline.Item
                                            style={{marginBottom: "-20px"}}
                                            label={<Label text={live.liveTime !== undefined ?
                                                new Date(live.liveTime).getHours() + 'h' + new Date(live.liveTime).getMinutes() + '  '
                                                : ''}/>}
                                        >
                                            <ProCard
                                                title={
                                                    <div className="subtitle"
                                                         style={{marginLeft: "-5px", marginTop: "-5px"}}>
                                                        {
                                                            live.liveTitle[this.props.lang]
                                                        }
                                                    </div>
                                                }
                                                ghost
                                                size={"small"}
                                                extra={
                                                    this.state.collapseIconVisibleList[idx] ?
                                                        <RightOutlined
                                                            rotate={!this.state.collapsedList[idx] ? 90 : undefined}
                                                            onClick={() => {
                                                                let {collapsedList} = this.state;
                                                                collapsedList[idx] = !collapsedList[idx];
                                                                this.setState({collapsedList});
                                                            }}
                                                        />
                                                        : ""
                                                }
                                                style={{margin: "0px"}}
                                                // defaultCollapsed={true}
                                                collapsed={this.state.collapsedList[idx]}
                                            >
                                                <MyArticle isLive={false} showSummary={true}
                                                           article={live.liveContent}
                                                           lang={this.props.lang}/>
                                            </ProCard>
                                        </Timeline.Item>
                                    )
                                })}
                            </Timeline>
                    }
                </div>
            </div>

        )
    }
}

class Label extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        return (
            <div className="subtitle" style={{width: "100px", float: "right", marginTop: "0px"}}>
                {this.props.text}
            </div>
        )
    }
}

export default MyArticle;
