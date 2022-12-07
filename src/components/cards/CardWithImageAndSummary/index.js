import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography} from "antd";
import PropTypes from "prop-types";
import '../index.less'
import FooterComponent from "../assemblies/FooterComponent";
import ImageComponent from "../assemblies/ImageComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import PopoverComponent from "../assemblies/PopoverComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";

const {Paragraph} = Typography;


class CardWithImageAndSubtitle extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
        handleExpand: PropTypes.func,
    }

    render() {
        return (
            <ProCard className="wideCardStyle" ghost bordered layout="center" direction="row">
                <ProCard className="cardStyle">
                    <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                        <div style={{margin: "-5px"}}>
                            <ImageComponent news={this.props.news}/>
                            <div style={{marginTop: "5px"}}>
                                <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                            </div>
                            <FooterComponent news={this.props.news}/>
                        </div>
                    </PopoverComponent>
                </ProCard>
                <ProCard gutter={[0, 8]}
                         direction="column"
                         style={{marginLeft: "-20px", width: "auto", height: "262px"}}>
                    <Paragraph className="subtitle" style={{fontSize: "13px"}}>
                        {
                            this.props.news.summary[this.props.lang]
                        }
                    </Paragraph>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndSubtitle
