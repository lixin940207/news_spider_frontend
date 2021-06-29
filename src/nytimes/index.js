import React from 'react';
import ProCard from '@ant-design/pro-card';
import {Image, Popover, Timeline, Typography} from 'antd';
import Text from "antd/es/typography/Text";
import CardWithImageAndLive from "../components/CardWithImageAndLive";
import CardWithTitleIntro from "../components/CardWithTitleIntro";
import CardWithList from "../components/CardWithList";
import CardWithTitle from "../components/CardWithTitle";

const {Paragraph} = Typography;

function NYTimesApp() {
    const [ellipsis] = React.useState(true);

    return (
        <ProCard title="NYTimes News" gutter={8} collapsible style={{overflow: "scroll"}}>
            <ProCard ghost>
                <CardWithImageAndLive/>
            </ProCard>
            <ProCard ghost>
                <CardWithTitleIntro/>
            </ProCard>
            <ProCard ghost>
                <CardWithList/>
            </ProCard>
            <ProCard ghost>
                <CardWithTitle/>
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

export default NYTimesApp;
