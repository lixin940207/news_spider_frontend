import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography, Image, Timeline, Popover} from "antd";
import Text from "antd/es/typography/Text";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

const {Paragraph} = Typography;

class CardWithImageAndLiveAndSubtitle extends Component {
    state={
        articleComponent: undefined,
    }

    static propTypes ={
        news: PropTypes.object.isRequired,
    }

    componentDidMount() {
        if (this.props.news.article !== undefined){
            this.setState({articleComponent: <MyArticle article={this.props.news.article}/>})
        } else{
            this.setState({articleComponent: ""})
        }
    }

    render() {
        return (
            <ProCard ghost bordered layout="center" direction="row" style={{width:"600px", height: "240px"}}>
                <ProCard>
                    <div style={{alignItems: "center", display: "flex", margin: "-5px", marginRight: "-10px"}}>
                        <div style={{width: "200px", float: "left"}}>
                            <Image style={{borderRadius: "6px", height: "120px"}} preview={false}
                                   src={this.props.news.imageHref}/>
                            <div style={{marginTop: "4px"}}>
                                <Paragraph style={{fontSize: "12px"}}
                                           ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                                    <b><Text style={{color: "blue"}}>LIVE </Text>{this.props.news.title}</b> </Paragraph>
                            </div>
                            <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                                <div>{this.props.news.category || this.props.news.region}</div>
                                <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                            </div>
                        </div>
                    </div>
                </ProCard>
                <ProCard style={{overflow: "scroll"}}>
                    <div style={{marginLeft: "-20px", height:"180px"}}>
                        <Timeline>
                            {this.props.news.liveNewsList.map(live=>{
                                return (
                                    <Timeline.Item style={{marginBottom: "-10px"}}>
                                        <div style={{fontSize: "12px", marginLeft: "-5px"}}>
                                            {live.liveTitle}
                                        </div>
                                    </Timeline.Item>
                                )
                            })}
                        </Timeline>
                    </div>
                </ProCard>
                <ProCard ghost gutter={[0,2]} direction="column">
                    {this.props.news.relatedNewsList.slice(0, Math.max(3, this.props.news.relatedNewsList.length)).map(
                        item=>{
                            return (
                                <ProCard>
                                    <Popover placement="right" overlayStyle={{width:"400px"}}>
                                        <div style={{width: "130px"}}>
                                            <Paragraph style={{fontSize: "12px", margin:"-15px"}}
                                                       ellipsis={{rows: 3, expandable: false, symbol: '...'}}>
                                                <span>•&nbsp;</span><b>{item.title}</b>
                                            </Paragraph>
                                        </div>
                                    </Popover>
                                </ProCard>
                            )
                        }
                    )}
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndLiveAndSubtitle;
