import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Typography} from "antd";

const {Paragraph} = Typography;

class CardWithTitleIntro extends Component {
    render(){
        return (
            <ProCard bordered style={{width:"240px", height: "240px"}}>
                <Paragraph style={{fontSize: "13px"}}><b>Rubble, Narrow Voids, Storms: The Dangerous Rescue Effort in
                    Miami</b></Paragraph>
                <div style={{fontSize: "12px"}}>The death toll rose to 11 as search-and-rescue teams continued to sort
                    through pulverized steel and dig through concrete boulders.
                </div>
                <div style={{fontSize:"10px", marginTop: "15px"}}>Politics</div>
            </ProCard>
        )
    }
}

export default CardWithTitleIntro;
