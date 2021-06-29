import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";

class CardWithTitle extends Component {
    render(){
        return (
            <ProCard bordered style={{height:"240px", minWidth:"150px"}}>
                <div style={{fontSize: "13px", margin:"0"}}>
                    <b>Decisions made early in the pandemic are having lasting effects on the ability of industries to meet surging demand.
                    </b></div>
            </ProCard>
        )
    }
}

export default CardWithTitle
