import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Image, Popover, Typography} from "antd";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

const {Paragraph} = Typography;

class CardWithImage extends Component {
    state={
        articleComponent: undefined,
    }

    static propTypes = {
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
            <ProCard style={{height: "240px", width: "240px"}} colSpan={5} bordered layout="center">
                <Popover trigger={"click"} placement="right" overlayStyle={{width: "400px", height: "600px", overflow:"scroll"}} content={this.state.articleComponent}>
                    <div style={{margin: "-5px"}}>
                        <Image style={{borderRadius: "6px", height: "120px", width:"200px", margin:"0px"}} preview={false}
                               src={this.props.news.imageHref}/>
                        <div style={{marginTop: "4px"}}>
                            <Paragraph style={{fontSize: "13px"}}
                                       ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                                <b>{this.props.news.title}</b>
                            </Paragraph>
                        </div>
                        <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                            <div>{this.props.news.category || this.props.news.region}</div>
                            <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                        </div>
                    </div>
                </Popover>
            </ProCard>
        )
    }
}

export default CardWithImage
