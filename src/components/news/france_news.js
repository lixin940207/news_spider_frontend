import React from 'react';
import ProCard from '@ant-design/pro-card';
import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import {Button} from "antd";
import PropTypes from "prop-types";


class FranceNewsApp extends BaseNewsApp {

    static propTypes = {
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    fetchData = (offset, limit, callback) => {
        const platforms = ['LeFigaro', 'LeMonde', 'LeParisien', 'France24', 'BFM'];
        axios.get(APIs.FranceNewsAPI, {
            params: {platforms, offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };

    render() {
        const { loading } = this.state;
        return (
            <div className="tab-main"
                 style={{height:"calc(100vh - 150px)", overflowY:'auto', overflowX:'hidden'}}
                 ref={this.scrollParentRef}
                 onLoad={this.loadScroll}
            >
                    <ProCard gutter={[16, 16]} className="card-container" layout="center" wrap direction='row'
                             key="france-news" >
                        {
                            this.state.newsList.map((news) => {
                                if (news instanceof Array) {
                                    const Component = React.lazy(() => import('../cards/' + news[0].newsType));
                                    return (
                                        <ProCard colSpan={6} ghost gutter={[0, 8]} direction="column"
                                                 key={news[0]._id.toString() + news[1]._id.toString()}>
                                            <ProCard ghost key={news[0]._id}>
                                                <React.Suspense fallback={<div>loading...</div>}>
                                                    <Component key={news[0]._id.toString()} news={news[0]} lang={this.props.lang}/>
                                                </React.Suspense>
                                            </ProCard>
                                            <ProCard ghost key={news[1]._id}>
                                                <React.Suspense fallback={<div>loading...</div>}>
                                                    <Component key={news[1]._id.toString()} news={news[1]} lang={this.props.lang}/>
                                                </React.Suspense>
                                            </ProCard>
                                        </ProCard>
                                    )
                                } else {
                                    if (news.loading===true){
                                        return (
                                            <ProCard loading colSpan={6}>内容</ProCard>
                                        )
                                    }
                                    const Component = React.lazy(() => import('../cards/' + news.newsType));
                                    let colSpan = 6;
                                    if (this.wideCardList.includes(news.newsType)) {
                                        colSpan = 12;
                                    }
                                    return (
                                        <ProCard colSpan={colSpan} layout="left" ghost key={news._id.toString()}>
                                            <React.Suspense fallback={<div>loading...</div>}>
                                                <Component key={news._id} news={news} lang={this.props.lang}/>
                                            </React.Suspense>
                                        </ProCard>
                                    )
                                }
                            })
                        }
                    </ProCard>
                {!loading ? (<div
                    style={{
                        textAlign: 'center',
                        marginTop: 0,
                        marginBottom: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.handleInfiniteOnLoad}>loading more</Button>
                </div>) : null}
            </div>
        );
    }
}

export default FranceNewsApp;
