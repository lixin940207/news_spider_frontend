import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography, Image, Timeline} from "antd";
import Text from "antd/es/typography/Text";

const {Paragraph} = Typography;

class CardWithImageAndLive extends Component {
    render() {
        return (
            <ProCard ghost bordered layout="center" direction="row" style={{width:"455px", height: "240px"}}>
                <ProCard hoverable>
                    <div style={{alignItems: "center", display: "flex", margin: "-5px", marginRight: "-10px"}}>
                        <div style={{width: "200px", float: "left"}}>
                            <Image style={{borderRadius: "6px", height: "120px"}}
                                   src={'https://static01.nyt.com/images/2021/06/29/world/29virus-briefing-delta-asia/29virus-briefing-delta-asia-superJumbo.jpg?quality=90&auto=webp'}/>
                            <div style={{marginTop: "4px"}}>
                                <Paragraph style={{fontSize: "12px"}}
                                           ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                                    <b><Text style={{color: "blue"}}>LIVE</Text> Delta Variant Drives New Lockdowns in
                                        Asia and Australia</b> </Paragraph>
                            </div>
                            <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                                <div>Politics</div>
                                <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                            </div>
                        </div>
                    </div>
                </ProCard>
                <ProCard style={{overflow: "scroll"}}>
                    <div style={{marginLeft: "-20px", height:"180px"}}>
                        <Timeline>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>Concern over the Delta variant
                                    triggers lockdowns in Asian and Pacific countries.
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>W.H.O. officials urge vaccinated
                                    people to keep wearing masks.
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>Bruce Springsteen reopens Broadway,
                                    ushering in theater’s return to New York City.
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>Markets work, but untangling supply
                                    chains during a pandemic takes time.
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>At-home coronavirus tests could
                                    still be useful, even for the vaccinated.
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{marginBottom: "-10px"}}>
                                <div style={{fontSize: "12px", marginLeft: "-5px"}}>N.Y.C. landlords are enticing office
                                    tenants with lower rents, and even a speakeasy.
                                </div>
                            </Timeline.Item>

                        </Timeline>
                    </div>
                </ProCard>
            </ProCard>
        )
    }
}

export default CardWithImageAndLive;
