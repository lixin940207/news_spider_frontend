import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";
import {Popover} from "antd";

class CardWithTitleWide extends Component {
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
            <ProCard bordered style={{height: "116px", minWidth: "240px"}}>
                <Popover trigger={"click"} placement="right" overlayStyle={{width: "400px", height: "600px", overflow:"scroll"}} content={this.state.articleComponent}>

                <div style={{margin: "-5px"}}>
                    <div style={{fontSize: "13px", margin: "0"}}>
                        <b>
                            {this.props.news.title}
                        </b>
                    </div>
                    <div style={{alignItems: "center", display: "flex", fontSize: "10px", marginTop:"20px"}}>
                        <div>{this.props.news.category || this.props.news.region}</div>
                        <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                    </div>
                </div>
                </Popover>
            </ProCard>
        )
    }
}

export default CardWithTitleWide;
