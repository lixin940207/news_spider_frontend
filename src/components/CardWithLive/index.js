import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Timeline} from "antd";
import Text from "antd/es/typography/Text";

class CardWithLive extends Component {
    render(){
        return (
            <ProCard bordered style={{height:"240px"}}>
                <div style={{margin:"-5px", width: "200px"}}>
                    <Text style={{color: "blue"}}><b>Live</b></Text>
                    <Text style={{fontSize: "12px"}}><b>    'Magic Monday' reaction & England v Germany build-up</b></Text>
                    <Timeline style={{marginTop: "15px"}} >
                        <Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>3m Birthday boy Bellingham xxx xxxxx xxxx xxxxx</div></Timeline.Item>
                        <Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>5m Live on Wembley Way</div></Timeline.Item>
                        <Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>
                        <Timeline.Item style={{marginBottom: "-10px"}}><div style={{fontSize: "12px"}}>9m Get involved</div></Timeline.Item>

                    </Timeline>
                </div>
            </ProCard>
        )
    }
}

export default CardWithLive
