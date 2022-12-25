import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../assemblies/FooterComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import SubtitleComponent from "../assemblies/SubtitlelistComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";


class CardWithList extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
        handleExpand: PropTypes.func,
    }

    render() {
        return (
            <ProCard bordered hoverable className="cardStyle">
                <div style={{margin: "-5px", marginTop: "-10px"}}>
                    {this.props.news.title ?
                        <HeadlineComponent news={this.props.news} lineNumber={2} lang={this.props.lang}/> : ''}
                    <SubtitleComponent news={this.props.news} lang={this.props.lang}/>
                    <FooterComponent news={this.props.news}/>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>

                </div>
            </ProCard>
        )
    }
}

export default CardWithList
