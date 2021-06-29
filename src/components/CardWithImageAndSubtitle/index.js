import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Image, Popover, Typography} from "antd";
const {Paragraph} = Typography;

class CardWithImageAndSubtitle extends Component {
    render(){
        const content = (
            <div>
                <p><b>Rescue workers are pinning their hopes on finding a "miracle" survivor in voids underneath the rubble of a Florida apartment building which collapsed five days ago.</b></p>
                <p>Miami-Dade Fire Rescue Chief Andy Alvarez said a "frantic effort" was underway to reach any air pockets where people could have survived.
                </p>
                <p>No one has been pulled alive from the site since Thursday, when the building in Surfside, north of Miami, collapsed.
                </p>
                <p>
                    At least 11 people have died.
                </p>
                <p>
                    More than 150 people are still missing, and officials say they are refusing to give up hope.
                </p>
                <p>
                    "We're going to continue and work ceaselessly to exhaust every possible option in our search," Miami-Dade County Mayor Daniella Levine Cava told media. "The search-and-rescue operation continues."
                </p>
            </div>
        )
        return (
            <ProCard style={{height: "240px"}} ghost bordered layout="center" direction="row">
                <ProCard  hoverable>
                    <div style={{alignItems: "center", display: "flex", margin: "-5px", marginRight:"-10px"}}>
                        <div style={{width: "200px", float: "left"}}>
                            <Image style={{borderRadius: "6px", height: "120px"}}
                                   src={'https://ichef.bbci.co.uk/news/320/cpsprodpb/0F20/production/_119127830_gettyimages-1233635595.jpg'}/>
                            <div style={{marginTop: "4px"}}>
                                <Paragraph style={{fontSize: "13px"}} ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                                    <b>Ethiopia rebels seize capital of devastated region</b>                              </Paragraph>
                            </div>
                            <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                                <div>Politics</div>
                                <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                            </div>
                        </div>
                    </div>
                </ProCard>
                <ProCard ghost gutter={[0,2]} direction="column">
                    <ProCard hoverable>
                        <Popover placement="right" overlayStyle={{width:"400px"}} content={content}>
                            <Paragraph style={{fontSize: "12px", margin:"-10px",width:"130px"}}
                                       ellipsis={{rows: 3, expandable: false, symbol: '...'}}>
                                •&nbsp;The tragedy of Ethiopia's man-made famine
                            </Paragraph>
                        </Popover>
                    </ProCard>
                    <ProCard  hoverable>
                        <Paragraph style={{fontSize: "12px", margin:"-10px"}}
                                   ellipsis={{rows: 3, expandable: false, symbol: '...'}}>
                            •&nbsp;Ethiopian military accused of massacre
                        </Paragraph>
                    </ProCard>
                    <ProCard  hoverable>
                        <Paragraph style={{fontSize: "12px", margin:"-10px"}}
                                   ellipsis={{rows: 3, expandable: false, symbol: '...'}}>
                            •&nbsp;The Nobel Peace Prize winner who went to war
                        </Paragraph>
                    </ProCard>
                </ProCard>
            </ProCard>

        )
    }
}

export default CardWithImageAndSubtitle
