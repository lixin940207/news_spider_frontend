import React, {Component} from 'react';
import ProCard from "@ant-design/pro-card";
import {Image, Typography} from "antd";

const {Paragraph} = Typography;

class CardWithImage extends Component {
    render(){
        return (
            <ProCard style={{height: "240px"}} colSpan={5} hoverable bordered layout="center" >
                <div style={{margin: "-5px", width:"200px"}}>
                    <Image style={{borderRadius: "6px", height: "120px",}}
                           src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/C60F/production/_119130705_hi067633395.jpg'}/>
                    <div style={{marginTop: "4px"}}>
                        <Paragraph style={{fontSize: "13px"}} ellipsis={{rows: 2, expandable: false, symbol: '...'}}>
                            <b>South Africa ex-president Zuma sentenced to jail</b>
                        </Paragraph>
                    </div>
                    <div style={{alignItems: "center", display: "flex", fontSize: "10px"}}>
                        <div>Politics</div>
                        <div>&nbsp; &nbsp;•&nbsp; &nbsp;2m ago</div>
                    </div>
                </div>
            </ProCard>
        )
    }
}

export default CardWithImage
