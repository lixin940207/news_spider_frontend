import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Popover, Typography} from "antd";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

const {Paragraph} = Typography;

class CardWithTitleIntro extends Component {
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
            <ProCard bordered style={{width: "240px", height: "240px"}}>
                <Popover trigger={"click"} placement="right" overlayStyle={{width: "400px", height: "600px", overflow:"scroll"}} content={this.state.articleComponent}>

                <div style={{margin: "-5px"}}>
                    <div style={{height: "73px"}}>
                        <Paragraph style={{fontSize: "13px"}} ellipsis={{rows: 3, expandable: false, symbol: '...'}}>
                            <b>{this.props.news.title}</b>
                        </Paragraph>
                    </div>
                    <div style={{height: "96px"}}>
                        <Paragraph style={{fontSize: "12px"}} ellipsis={{rows: 5, expandable: false, symbol: '...'}}>
                            {this.props.news.summary}
                        </Paragraph>
                    </div>
                    <div style={{alignItems: "center", display: "flex", fontSize: "10px", marginTop: "15px"}}>
                        <div>{this.props.news.category || this.props.news.region}</div>
                        <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                    </div>
                </div>
                </Popover>
            </ProCard>
        )
    }
}

export default CardWithTitleIntro;
