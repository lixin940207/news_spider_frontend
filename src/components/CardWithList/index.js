import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";

class CardWithList extends Component {
    render(){
        return (
            <ProCard bordered style={{width:"240px", height:"240px"}}>
                <div style={{marginLeft: "-25px"}}>
                    <ul>
                        <li>
                            <div style={{fontSize: "12px", marginBottom: "5px"}}><b>The chief executive of Teneo, an
                                influential advisory firm, steps down.</b></div>
                        </li>
                        <li>
                            <div style={{fontSize: "12px", marginBottom: "5px"}}><b>United Airlines is planning a record
                                expansion of its aircraft fleet.</b></div>
                        </li>
                        <li>
                            <div style={{fontSize: "12px"}}><b>A new mortgage rule aims to speed modifications and slow
                                foreclosures.</b></div>
                        </li>
                    </ul>
                </div>
            </ProCard>
        )
    }
}

export default CardWithList
