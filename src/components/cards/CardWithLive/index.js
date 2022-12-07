import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../assemblies/FooterComponent";
import TimelineComponent from "../assemblies/TimelineComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";


class CardWithLive extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
        handleExpand: PropTypes.func,
    }

    render() {
        return (
            <ProCard bordered className="cardStyle"
                     style={{overflowY: "hidden", overflowX: 'hidden', position: "relative"}}>
                <div style={{marginTop: "-5px", marginLeft: "-5px", marginRight: "-5px"}}>
                    <HeadlineComponent news={this.props.news} lineNumber={2} lang={this.props.lang}/>
                    <div style={{marginTop: "10px", marginRight: "-19px", height: "150px", overflow: 'hidden'}}>
                        <TimelineComponent news={this.props.news} lang={this.props.lang}/>
                    </div>
                    <FooterComponent news={this.props.news}/>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>
                </div>
            </ProCard>
        )
    }
}

export default CardWithLive
