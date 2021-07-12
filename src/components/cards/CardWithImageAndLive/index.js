import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography, Image, Timeline, Popover} from "antd";
import Text from "antd/es/typography/Text";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

const {Paragraph} = Typography;

class CardWithImageAndLive extends Component {
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
            <ProCard ghost bordered layout="center" direction="row" style={{width:"455px", height: "240px"}}>
                <Popover trigger={"click"} placement="right" overlayStyle={{width: "400px", height: "600px", overflow:"scroll"}} content={this.state.articleComponent}>
                <ProCard style={{height:'238px'}}>
                    <div style={{alignItems: "center", display: "flex", margin: "-5px", marginRight: "-10px"}}>
                        <div style={{width: "200px", float: "left"}}>
                            <Image style={{borderRadius: "6px", height: "120px", margin:"0px"}} preview={false}
                                   src={this.props.news.imageHref}/>
                            <div style={{marginTop: "4px"}}>
                                <Paragraph style={{fontSize: "13px"}}
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
                </Popover>
                <ProCard style={{overflow: "scroll", height:'238px'}}>
                    <div style={{marginLeft: "-20px", height:"180px"}}>
                        <Timeline>
                            {this.props.news.liveNewsList.map(live=>{
                                return (
                                    <Timeline.Item style={{marginBottom: "0px"}}>
                                        <div style={{fontSize: "12px", marginLeft: "-5px"}}>
                                            {live.liveTitle}
                                        </div>
                                    </Timeline.Item>
                                )
                            })}
                        </Timeline>
                    </div>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndLive;
