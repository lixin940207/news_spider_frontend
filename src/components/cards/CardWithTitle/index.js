import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";
import {Popover} from "antd";

class CardWithTitle extends Component {

    state = {
        elementStyle: {
            width: '110px',
            fontSize: '13px',
            minWidth: '110px'
        },
        articleComponent: undefined,
    }

    static propTypes = {
        news: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const wordNum = this.props.news.title.split(' ');
        if (wordNum > 20) {
            const elementWidth = 110 + (wordNum - 20) * 5;
            this.setState({
                elementStyle: {
                    width: elementWidth.toString() + 'px',
                    fontSize: "13px",
                    minWidth: "110px"
                }
            })
        }
        if (this.props.news.article !== undefined) {
            this.setState({articleComponent: <MyArticle article={this.props.news.article}/>})
        } else {
            this.setState({articleComponent: ""})
        }
    }


    render() {
        return (
            <ProCard bordered style={{height: "240px", position: "relative"}}>
                <Popover trigger={"click"} placement="right"
                         overlayStyle={{width: "400px", height: "600px", overflow: "scroll"}}
                         content={this.state.articleComponent}>
                    <div style={{margin: "-5px"}}>
                        <div style={this.state.elementStyle}>
                            <b>
                                {this.props.news.title}
                            </b>
                        </div>
                        <div style={{
                            alignItems: "center",
                            display: "flex",
                            fontSize: "10px",
                            position: "absolute",
                            bottom: "20px"
                        }}>
                            <div>{this.props.news.category || this.props.news.region}</div>
                            <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                        </div>
                    </div>
                </Popover>
            </ProCard>
        )
    }
}

export default CardWithTitle;
