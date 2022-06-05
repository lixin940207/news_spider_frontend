import React, {Component} from 'react';
import {Timeline} from "antd";
import PropTypes from "prop-types";
import PopoverComponent from "../PopoverComponent";


class TimelineComponent extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <Timeline>
                {this.props.news.liveNewsList.map(live => {
                    return (
                        <Timeline.Item style={{marginBottom: "-10px"}}>
                            <PopoverComponent article={live.liveContent} lang={this.props.lang}>
                                <div className="subtitle" style={{marginLeft: "-5px", marginTop: "5px"}}>
                                    {live.liveTime !== undefined ?
                                        new Date(live.liveTime).getHours() + 'h' + new Date(live.liveTime).getMinutes() + '  '
                                        : ''}
                                    {this.props.lang === 'ori'?
                                        live.liveTitle.ori
                                        : (live.liveTitle.cn?live.liveTitle.cn:live.liveTitle.ori)}
                                </div>
                            </PopoverComponent>
                        </Timeline.Item>
                    )
                })}
            </Timeline>
        )
    }
}

export default TimelineComponent;
