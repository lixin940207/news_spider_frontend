import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../FooterComponent";
import HeadlineComponent from "../HeadlineComponent";
import SubtitleComponent from "../SubtitlelistComponent";


class CardWithList extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <ProCard bordered className="cardStyle">
                <div style={{margin: "-5px", marginTop: "-10px"}}>
                    {this.props.news.title ? <HeadlineComponent news={this.props.news} lineNumber={2} lang={this.props.lang}/> :'' }
                    <SubtitleComponent news={this.props.news} lang={this.props.lang}/>
                    <FooterComponent news={this.props.news}/>
                </div>
            </ProCard>
        )
    }
}

export default CardWithList
