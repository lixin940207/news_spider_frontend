import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../assemblies/FooterComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import PopoverComponent from "../assemblies/PopoverComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";


class CardWithTitleWide extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired, lang: PropTypes.string, handleExpand: PropTypes.func,
    }

    render() {
        return (<ProCard bordered hoverable style={{height: "128px", width: "263px", position: "relative"}}>
            <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                <div style={{margin: "-5px", marginTop: "-10px"}}>
                    <HeadlineComponent news={this.props.news} lang={this.props.lang}/>
                    <FooterComponent news={this.props.news}/>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>
                </div>
            </PopoverComponent>
        </ProCard>)
    }
}

export default CardWithTitleWide;
