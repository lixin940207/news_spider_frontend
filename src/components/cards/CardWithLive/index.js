import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import PropTypes from "prop-types";
import FooterComponent from "../FooterComponent";
import TimelineComponent from "../TimelineComponent";
import HeadlineComponent from "../HeadlineComponent";


class CardWithLive extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <ProCard bordered className="cardStyle" style={{overflowY: "hidden", overflowX: 'hidden', position: "relative"}}>
                <div style={{marginTop: "-5px", marginLeft:"-5px", marginRight:"-5px"}}>
                    <HeadlineComponent news={this.props.news} lineNumber={2} lang={this.props.lang}/>
                    <div style={{marginTop: "10px", marginRight:"-19px", height: "150px", overflowY:'scroll'}}>
                        <TimelineComponent news={this.props.news} lang={this.props.lang}/>
                    </div>
                    {/*<Timeline style={{marginTop: "10px", marginRight:"-19px", height: "150px", overflowY:'scroll'}}>*/}
                    {/*    {this.props.news.liveNewsList.map(live => {*/}
                    {/*        return (*/}
                    {/*            <Timeline.Item style={{marginBottom: "-10px"}}>*/}
                    {/*                <Popover placement="right"*/}
                    {/*                         overlayStyle={{width: "300px", maxHeight: "400px", overflow: "scroll"}}*/}
                    {/*                         content={<MyArticle article={live.liveContent}/>}>*/}
                    {/*                    <div className="subtitle" style={{marginLeft: "-5px", marginTop: "5px"}}>*/}
                    {/*                        {live.liveTime !== undefined ? new Date(live.liveTime).getHours() + 'h' + new Date(live.liveTime).getMinutes() + '  ': ''}*/}
                    {/*                        {live.liveTitle.ori}*/}
                    {/*                    </div>*/}
                    {/*                </Popover>*/}
                    {/*            </Timeline.Item>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</Timeline>*/}
                    <FooterComponent news={this.props.news}/>
                </div>
            </ProCard>
        )
    }
}

export default CardWithLive
