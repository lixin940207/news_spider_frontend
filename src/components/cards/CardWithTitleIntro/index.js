import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography} from "antd";
import PropTypes from "prop-types";
import '../index.less'
import FooterComponent from "../FooterComponent";
import HeadlineComponent from "../HeadlineComponent";
import PopoverComponent from "../PopoverComponent";

const {Paragraph} = Typography;

class CardWithTitleIntro extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <ProCard className="cardStyle" bordered>
                <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                    <div style={{margin: "-5px"}}>
                        <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                        <div>
                            <Paragraph className="subtitle" style={{fontSize: "12px"}}
                                       ellipsis={{rows: 6, expandable: false, symbol: '...'}}>
                                {this.props.lang==='ori'?
                                    this.props.news.summary.ori:
                                    (this.props.news.summary.cn?this.props.news.summary.cn:this.props.news.summary.ori)}
                            </Paragraph>
                        </div>
                        <FooterComponent news={this.props.news}/>
                    </div>
                </PopoverComponent>
            </ProCard>
        )
    }
}

export default CardWithTitleIntro;
