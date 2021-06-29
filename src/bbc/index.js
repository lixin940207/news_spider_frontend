import React from 'react';
import ProCard from '@ant-design/pro-card';
import {Image, Typography, Popover, Timeline} from 'antd';
import Text from "antd/es/typography/Text";
import CardWithImageAndSubtitle from "../components/CardWithImageAndSubtitle";
import CardWithImage from "../components/CardWithImage";
import CardWithLive from "../components/CardWithLive";

const {Paragraph} = Typography;

function BBCApp() {
    const [ellipsis] = React.useState(true);
    const content = (
        <div>
            <p><b>Rescue workers are pinning their hopes on finding a "miracle" survivor in voids underneath the rubble
                of a Florida apartment building which collapsed five days ago.</b></p>
            <p>Miami-Dade Fire Rescue Chief Andy Alvarez said a "frantic effort" was underway to reach any air pockets
                where people could have survived.
            </p>
            <p>No one has been pulled alive from the site since Thursday, when the building in Surfside, north of Miami,
                collapsed.
            </p>
            <p>
                At least 11 people have died.
            </p>
            <p>
                More than 150 people are still missing, and officials say they are refusing to give up hope.
            </p>
            <p>
                "We're going to continue and work ceaselessly to exhaust every possible option in our search,"
                Miami-Dade County Mayor Daniella Levine Cava told media. "The search-and-rescue operation continues."
            </p>
        </div>
    )

    return (
        <ProCard title="BBC News" gutter={8} collapsible style={{overflow: "scroll"}}>
            <ProCard ghost>
                <CardWithImageAndSubtitle/>
            </ProCard>
            <ProCard ghost>
                <CardWithImage/>
            </ProCard>
            <ProCard ghost>
                <CardWithLive/>
            </ProCard>

            <ProCard ghost colSpan={5} gutter={[0, 11]} direction="column" layout="center">
                <ProCard bordered layout="center" hoverable>
                    <div style={{margin: "-5px"}}>
                        <Paragraph ellipsis={ellipsis ? {rows: 2, expandable: false, symbol: '...'} : false}>
                            At This Instagram Hot Spot, All the World’s a Stage (and the Buffalo’s a Prop)
                        </Paragraph>
                        <div style={{alignItems: "center", display: "flex", fontSize: "12px"}}>
                            <div>Politics</div>
                            <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                        </div>
                    </div>
                </ProCard>
                <ProCard bordered layout="center" hoverable>
                    <div style={{margin: "-5px"}}>
                        <Paragraph ellipsis={ellipsis ? {rows: 2, expandable: false, symbol: '...'} : false}>
                            From ice hotels to icebergs: unmissable Canada adventures
                        </Paragraph>
                        <div style={{alignItems: "center", display: "flex", fontSize: "12px"}}>
                            <div>Politics</div>
                            <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                        </div>
                    </div>
                </ProCard>
            </ProCard>
            <ProCard colSpan={7} layout="center" bordered>
                卡片内容
            </ProCard>
            <ProCard colSpan={8} layout="center" bordered>
                卡片内容
            </ProCard>
            <ProCard colSpan={8} layout="center" bordered>
                卡片内容
            </ProCard>
            <ProCard colSpan={8} layout="center" bordered>
                卡片内容
            </ProCard>
            <ProCard colSpan={8} layout="center" bordered>
                卡片内容
            </ProCard>
        </ProCard>
    );
}

export default BBCApp;
