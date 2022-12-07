import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import '../index.less';
import FooterComponent from "../assemblies/FooterComponent";
import ImageComponent from "../assemblies/ImageComponent";
import HeadlineComponent from "../assemblies/HeadlineComponent";
import PopoverComponent from "../assemblies/PopoverComponent";
import ExpandMoreComponent from "../assemblies/ExpandMoreComponent";

class CardWithImage extends Component {
    state = {
        expanded: false,
    }
    static propTypes = {
        news: PropTypes.object.isRequired, lang: PropTypes.string, handleExpand: PropTypes.func,
    }

    // handleExpand = ()=>{
    //     this.setState({expanded: !this.state.expanded})
    // }

    render() {
        return (<ProCard className="cardStyle" style={{position: "relative"}} colSpan={6} bordered>
            <PopoverComponent article={this.props.news.article} lang={this.props.lang}>
                <div style={{margin: "-3px"}}>
                    <ImageComponent news={this.props.news}/>
                    <div style={{marginTop: "5px"}}>
                        <HeadlineComponent news={this.props.news} lineNumber={3} lang={this.props.lang}/>
                    </div>
                    <FooterComponent news={this.props.news}/>
                    <ExpandMoreComponent handleExpand={this.props.handleExpand}/>
                </div>
            </PopoverComponent>
        </ProCard>)
    }
}

export default CardWithImage
