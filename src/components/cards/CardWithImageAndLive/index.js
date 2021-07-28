import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import '../index.less'
import ImageComponent from "../ImageComponent";
import FooterComponent from "../FooterComponent";
import HeadlineComponent from "../HeadlineComponent";
import PopoverComponent from "../PopoverComponent";
import TimelineComponent from "../TimelineComponent";


class CardWithImageAndLive extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <ProCard className="wideCardStyle" ghost bordered hoverable layout="center" direction="row">
                <ProCard className="cardStyle">
                    <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                        <div style={{margin: "-3px"}}>
                            <ImageComponent news={this.props.news}/>
                            <div style={{marginTop: "5px"}}>
                            <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                            </div>
                            <FooterComponent news={this.props.news}/>
                        </div>
                    </PopoverComponent>
                </ProCard>
                <ProCard style={{marginLeft: "-15px", overflowY: "scroll", height: '263px', width: 'auto'}}>
                    <div style={{marginLeft: "-10px", marginRight: "-10px", height: "180px"}}>
                        <TimelineComponent news={this.props.news}/>
                    </div>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndLive;
