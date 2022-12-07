import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import '../index.less'
import FooterComponent from "../assemblies/FooterComponent";
import ImageComponent from "../assemblies/ImageComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import SubtitleComponent from "../assemblies/SubtitlelistComponent";
import PopoverComponent from "../assemblies/PopoverComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";


class CardWithImageAndSubtitle extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
        handleExpand: PropTypes.func,
    }

    render() {
        return (
            <ProCard className="wideCardStyle" ghost bordered>
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
                <ProCard style={{marginLeft: "-25px", width: "auto", height: "263px"}}>
                    <SubtitleComponent news={this.props.news} lang={this.props.lang}/>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndSubtitle
