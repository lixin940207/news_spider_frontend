import React from 'react';
import ProCard from '@ant-design/pro-card';
import {Image, Typography} from 'antd';
import BBCApp from "./bbc";

const {Paragraph} = Typography;

function App() {

    return (
        <div>
            <BBCApp/>
        </div>
        // <ProCard title="BBC News" gutter={8} collapsible style={{overflow: "scroll"}}>
        //     <ProCard colSpan={5} hoverable bordered layout="center">
        //         <div style={{margin: "-5px"}}>
        //             <Image style={{borderRadius: "6px", height: "120px",}}
        //                    src={'https://anima-uploads.s3.amazonaws.com/projects/60d7320928772f7944010654/releases/60d7344177bade40f22d325c/img/channel-page-2-image-4.jpg'}/>
        //             <div style={{marginTop: "4px"}}>
        //                 <Paragraph ellipsis={ellipsis ? {rows: 2, expandable: false, symbol: '...'} : false}>
        //                     Crossing the Red Line: Behind China’s Takeover of Hong Kong
        //                 </Paragraph>
        //             </div>
        //             <div style={{alignItems: "center", display: "flex", fontSize: "12px"}}>
        //                 <div>Politics</div>
        //                 <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
        //             </div>
        //         </div>
        //     </ProCard>
        //     <ProCard ghost colSpan={5} gutter={[0, 11]} direction="column" layout="center">
        //         <ProCard bordered layout="center" hoverable>
        //             <div style={{margin:"-5px"}}>
        //                 <Paragraph ellipsis={ellipsis ? {rows: 2, expandable: false, symbol: '...'} : false}>
        //                     At This Instagram Hot Spot, All the World’s a Stage (and the Buffalo’s a Prop)
        //                 </Paragraph>
        //                 <div style={{alignItems: "center", display: "flex", fontSize: "12px"}}>
        //                     <div>Politics</div>
        //                     <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
        //                 </div>
        //             </div>
        //         </ProCard>
        //         <ProCard bordered layout="center" hoverable>
        //             <div style={{margin:"-5px"}}>
        //                     <Paragraph ellipsis={ellipsis ? {rows: 2, expandable: false, symbol: '...'} : false}>
        //                         From ice hotels to icebergs: unmissable Canada adventures
        //                     </Paragraph>
        //                 <div style={{alignItems: "center", display: "flex", fontSize: "12px"}}>
        //                     <div>Politics</div>
        //                     <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
        //                 </div>
        //             </div>
        //         </ProCard>
        //     </ProCard>
        //     <ProCard colSpan={6} bordered>
        //         卡片内容
        //     </ProCard>
        //     <ProCard colSpan={7} layout="center" bordered>
        //         卡片内容
        //     </ProCard>
        //     <ProCard colSpan={8} layout="center" bordered>
        //         卡片内容
        //     </ProCard>
        //     <ProCard colSpan={8} layout="center" bordered>
        //         卡片内容
        //     </ProCard>
        //     <ProCard colSpan={8} layout="center" bordered>
        //         卡片内容
        //     </ProCard>
        //     <ProCard colSpan={8} layout="center" bordered>
        //         卡片内容
        //     </ProCard>
        // </ProCard>
    );
}

export default App;
