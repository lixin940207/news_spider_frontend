import React, {Component} from 'react';
import ProCard from '@ant-design/pro-card';
import '../../index.less';
import {Button} from "antd";
import CardExpanded from "../cards/CardExpanded";


class TestApp extends Component {

    render() {
        return (
            <div className="tab-main"
                 style={{height: "calc(100vh - 150px)", overflowY: 'auto', overflowX: 'hidden'}}
            >
                <ProCard gutter={[16, 16]} className="card-container" layout="center" wrap direction='row'
                         key="test-news">
                    <ProCard colSpan={18} layout="left" ghost>
                        <CardExpanded />
                    </ProCard>
                    <ProCard colSpan={6} ghost gutter={[0, 16]} direction="column">
                        <ProCard style={{height: "263px"}}></ProCard>
                        <ProCard style={{height: "263px"}}></ProCard>

                    </ProCard>
                    <ProCard colSpan={6} ghost>
                        <ProCard style={{height: "263px"}}></ProCard>
                    </ProCard>
                    <ProCard colSpan={6} ghost>
                        <ProCard style={{height: "263px"}}></ProCard>
                    </ProCard>
                </ProCard>
            </div>
        );
    }
}

export default TestApp;
