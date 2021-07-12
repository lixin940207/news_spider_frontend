import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Timeline} from "antd";
import Text from "antd/es/typography/Text";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

class CardWithLive extends Component {
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

    render(){
        return (
            <ProCard bordered style={{height:"240px", width:"240", overflow:"scroll"}}>
                <div style={{margin:"-5px", width: "200px"}}>
                    <Text style={{color: "blue"}}><b>Live </b></Text>
                    <Text style={{fontSize: "12px"}}><b>{this.props.news.title}</b></Text>
                    <Timeline style={{marginTop: "15px"}} >
                        {this.props.news.liveNewsList.map(live=>{
                            return (
                                <Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>3m {live.liveTitle}</div></Timeline.Item>
                            )
                        })}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>5m Live on Wembley Way</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>3m Birthday boy Bellingham xxx xxxxx xxxx xxxxx</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>5m Live on Wembley Way</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>*/}
                        {/*<Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>*/}
                    </Timeline>
                </div>
            </ProCard>
        )
    }
}

export default CardWithLive
