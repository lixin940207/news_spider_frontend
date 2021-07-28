import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import '../index.less';
import FooterComponent from "../FooterComponent";
import ImageComponent from "../ImageComponent";
import HeadlineComponent from "../HeadlineComponent";
import PopoverComponent from "../PopoverComponent";

class CardWithImage extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <ProCard className="cardStyle" style={{position: "relative"}} colSpan={6} bordered>
                <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                    <div style={{margin: "-3px"}}>
                        <ImageComponent news={this.props.news} />
                        <div style={{marginTop: "5px"}}>
                        <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                        </div>
                        <FooterComponent news={this.props.news}/>
                    </div>
                </PopoverComponent>
            </ProCard>
        )
    }
}

export default CardWithImage
