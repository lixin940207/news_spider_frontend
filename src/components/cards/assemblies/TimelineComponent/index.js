import React, {Component} from 'react';
import {Timeline} from "antd";
import PropTypes from "prop-types";
import PopoverComponent from "../PopoverComponent";


class TimelineComponent extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
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
                                    {
                                        live.liveTitle[this.props.lang]
                                    }
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
