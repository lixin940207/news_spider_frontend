import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Image, Typography} from "antd";
import PropTypes from "prop-types";
import '../index.less'
import MyArticle from "../assemblies/MyArticle";
import FoldComponent from "../assemblies/FoldComponent";
import FooterComponent from "../assemblies/FooterComponent";

const {Paragraph, Title} = Typography;


class CardExpanded extends Component {
    state = {
        imageHref: "",
        summary: {en: "", zh: "", fr: ""},
    }

    static propTypes = {
        news: PropTypes.object.isRequired,
        handleFold: PropTypes.func,
        lang: PropTypes.string,
    }

    componentDidMount() {
        if (this.props.news.imageHref === undefined && this.props.news.article !== undefined) {
            if (this.props.news.article.headImageHref === undefined) {
                const illustrations = this.props.news.article.bodyBlockList.filter(i => i.type === 'img');
                if (illustrations.length > 0) {
                    this.setState({imageHref: illustrations[0].src})
                }
            } else {
                this.setState({imageHref: this.props.news.article.headImageHref})
            }
        } else {
            this.setState({imageHref: this.props.news.imageHref})
        }
        if (!this.props.news.isLive && this.props.news.summary.en === undefined) {
            this.setState({summary: this.props.news.article.summary})
        } else {
            this.setState({summary: this.props.news.summary})
        }
    }

    render() {
        return (
            <ProCard ghost hoverable style={{position: "relative"}} bordered layout="center" direction="row">
                <ProCard style={{height: "542px"}} colSpan={10}>
                    <Image style={{margin: "5px", height: "180px", width: "275px", borderRadius: "5px"}}
                           preview={false}
                           src={this.state.imageHref}/>
                    <Title level={4} style={{width: "275px"}}>
                        {
                            this.props.news.title[this.props.lang]
                        }
                    </Title>
                    <Paragraph style={{width: "275px"}}>
                        {
                            this.state.summary !== undefined ?
                                this.state.summary[this.props.lang]
                                :
                                ""
                        }
                    </Paragraph>
                    <FooterComponent news={this.props.news}/>
                </ProCard>
                <ProCard style={{marginLeft: "-30px", width: "auto", height: "542px"}}>
                    <div style={{height: "480px", overflowY: "scroll", marginRight: "-25px"}}>
                        {this.props.news.isLive ?
                            <MyArticle isLive={true} showSummary={true} liveList={this.props.news.liveNewsList}
                                       lang={this.props.lang}/>
                            :
                            <MyArticle isLive={false} article={this.props.news.article} lang={this.props.lang}/>
                        }
                    </div>
                    <FoldComponent handleFold={this.props.handleFold}/>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardExpanded;
