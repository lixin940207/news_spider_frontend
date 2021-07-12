import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

class CardWithList extends Component {
    state={
        articleComponent: undefined,
    }

    static propTypes ={
        news: PropTypes.object.isRequired,
    }

    componentDidMount() {
        if (this.props.news.article !== undefined){
            this.setState({articleComponent: <MyArticle article={this.props.news.article}/>})
        } else{
            this.setState({articleComponent: ""})
        }
    }

    render(){
        return (
            <ProCard bordered style={{width:"240px", height:"240px", overflow: "scroll"}}>
                <div style={{marginLeft: "-25px"}}>
                    <ul>
                        <li>
                            <div style={{fontSize: "12px", marginBottom: "5px"}}><b>The chief executive of Teneo, an
                                influential advisory firm, steps down.</b></div>
                        </li>
                        <li>
                            <div style={{fontSize: "12px", marginBottom: "5px"}}><b>United Airlines is planning a record
                                expansion of its aircraft fleet.</b></div>
                        </li>
                        <li>
                            <div style={{fontSize: "12px"}}><b>A new mortgage rule aims to speed modifications and slow
                                foreclosures.</b></div>
                        </li>
                    </ul>
                </div>
            </ProCard>
        )
    }
}

export default CardWithList
