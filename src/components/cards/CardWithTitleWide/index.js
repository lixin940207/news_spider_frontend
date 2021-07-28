import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../FooterComponent";
import HeadlineComponent from "../HeadlineComponent";
import PopoverComponent from "../PopoverComponent";


class CardWithTitleWide extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }
    static defaultProps = {
        lang: 'ori',
    }
    render() {
        return (
            <ProCard bordered style={{height: "128px", width: "263px", position: "relative"}}>
                <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                    <div style={{margin: "-5px", marginTop: "-10px"}}>
                        <HeadlineComponent news={this.props.news} lang={this.props.lang}/>
                        <FooterComponent news={this.props.news}/>
                    </div>
                </PopoverComponent>
            </ProCard>
        )
    }
}

export default CardWithTitleWide;
