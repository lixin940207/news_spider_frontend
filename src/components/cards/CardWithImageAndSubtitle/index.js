import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import '../index.less'
import FooterComponent from "../FooterComponent";
import ImageComponent from "../ImageComponent";
import HeadlineComponent from "../HeadlineComponent";
import SubtitleComponent from "../SubtitlelistComponent";
import PopoverComponent from "../PopoverComponent";


class CardWithImageAndSubtitle extends Component {

    static propTypes ={
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render(){
        return (
            <ProCard className="wideCardStyle" ghost bordered>
                <ProCard className="cardStyle">
                    <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                    <div style={{ margin: "-3px"}}>
                        <ImageComponent news={this.props.news}/>
                        <div style={{marginTop: "5px"}}>
                        <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                        </div>
                        <FooterComponent news={this.props.news}/>
                    </div>
                    </PopoverComponent>
                </ProCard>
                <ProCard style={{marginLeft: "-25px", width: "auto", height:"263px"}}>
                    <SubtitleComponent news={this.props.news} lang={this.props.lang}/>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndSubtitle
