import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Image, Popover, Typography} from "antd";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";

const {Paragraph} = Typography;


class CardWithImageAndSubtitle extends Component {
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
        //const content = this.props.news.content
        return (
            <ProCard style={{height: "240px"}} ghost bordered layout="center" direction="row">

                <ProCard style={{height: "238px", width: "240px"}}>
                    <Popover trigger={"click"} placement="right" overlayStyle={{width: "400px", height: "600px", overflow:"scroll"}} content={this.state.articleComponent}>
                    <div style={{ margin: "-5px"}}>
                            <Image style={{borderRadius: "6px", height: "120px", margin:"0px"}} preview={false}
                                   src={this.props.news.imageHref}/>
                            <div style={{marginTop: "4px"}}>
                                <Paragraph style={{fontSize: "13px"}}
                                           ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                                    <b>{this.props.news.title}</b>
                                </Paragraph>
                            </div>
                            <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                                <div>{this.props.news.category || this.props.news.region}</div>
                                <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                            </div>
                    </div>
                    </Popover>
                </ProCard>
                <ProCard ghost gutter={[0,2]} direction="column">
                    {
                        this.props.news.relatedNewsList.slice(0, Math.max(3, this.props.news.relatedNewsList.length)).map(
                            item => {
                                return (
                                    <ProCard key={item._id}>
                                        <Popover placement="right" overlayStyle={{width:"400px"}} content={"content"}>
                                            <div style={{width: "130px"}}>
                                                <Paragraph style={{fontSize: "12px", margin:"-15px"}}
                                                           ellipsis={{rows: 4, expandable: false, symbol: '...'}}>
                                                    <span>•&nbsp;</span><b>{item.title}</b>
                                                </Paragraph>
                                            </div>
                                        </Popover>
                                    </ProCard>
                                )
                            }
                        )
                    }
                    {/*<ProCard hoverable>*/}
                    {/*    <Popover placement="right" overlayStyle={{width:"400px"}} content={content}>*/}
                    {/*        <div style={{width: "130px"}}>*/}
                    {/*        <Paragraph style={{fontSize: "12px", margin:"-15px"}}*/}
                    {/*                   ellipsis={{rows: 3, expandable: false, symbol: '...'}}>*/}
                    {/*            <span>•&nbsp;</span><b>{this.props.news.relatedNewsList}</b>*/}
                    {/*        </Paragraph>*/}
                    {/*        </div>*/}
                    {/*    </Popover>*/}
                    {/*</ProCard>*/}
                    {/*<ProCard  hoverable>*/}
                    {/*    <Paragraph style={{fontSize: "12px", margin:"-15px"}}*/}
                    {/*               ellipsis={{rows: 3, expandable: false, symbol: '...'}}>*/}
                    {/*        <span>•&nbsp;</span><b>Ethiopian military accused of massacre</b>*/}
                    {/*    </Paragraph>*/}
                    {/*</ProCard>*/}
                    {/*<ProCard  hoverable>*/}
                    {/*    <Paragraph style={{fontSize: "12px", margin:"-15px"}}*/}
                    {/*               ellipsis={{rows: 3, expandable: false, symbol: '...'}}>*/}
                    {/*        <span>•&nbsp;</span><b>The Nobel Peace Prize winner who went to war</b>*/}
                    {/*    </Paragraph>*/}
                    {/*</ProCard>*/}
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndSubtitle
