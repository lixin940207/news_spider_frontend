import React, {Component} from 'react';
import axios from 'axios';
import ProCard from '@ant-design/pro-card';
import {APIs} from '../config'

const {BBCAPI} = APIs


class BBCApp extends Component {
    state = {
        newsList: [],
    }

    componentDidMount() {
        axios.get(BBCAPI).then(
            (response) => {
                let oriNewsList = response.data.news;
                let newNewsList = [];
                let wideTypeCounter = 0;
                for (let i = 0; i < oriNewsList.length; i++) {
                    if (['CardWithTitleWide'].includes(oriNewsList[i].newsType)) {
                        wideTypeCounter += 1;
                        if (wideTypeCounter % 2 === 1) {
                            if (i + 1 < oriNewsList.length && ['CardWithTitleWide'].includes(oriNewsList[i + 1].newsType)) {
                                newNewsList.push([oriNewsList[i], oriNewsList[i + 1]])
                            } else {
                                newNewsList.push(oriNewsList[i])
                            }
                        }
                    } else {
                        newNewsList.push(oriNewsList[i])
                    }
                }
                this.setState({newsList: newNewsList})
            }
        )
    }

    render() {
        console.log(this.state.newsList)
        return (
            // <ProCard title="BBC News" gutter={8} collapsible style={{overflow: "scroll"}}>
            <ProCard ghost gutter={16}>
                {
                    this.state.newsList.map((news) => {
                        // console.log(news[0].newsType)
                        if (news instanceof Array) {
                            const Component = React.lazy(() => import('../components/cards/' + news[0].newsType));
                            return (
                                // <ProCard ghost>
                                        <ProCard ghost gutter={[0, 8]} direction="column">
                                            <ProCard ghost>
                                            <React.Suspense fallback={<div>loading...</div>}>

                                            <Component key={news[0]._id} news={news[0]}/>
                                            </React.Suspense>

                                            </ProCard>
                                            <ProCard ghost>
                                            <React.Suspense fallback={<div>loading...</div>}>

                                            <Component key={news[1]._id} news={news[1]}/>
                                        </React.Suspense>
                                            </ProCard>

                        </ProCard>
                                // </ProCard>

                            )
                        } else {
                            console.log(news)
                            const Component = React.lazy(() => import('../components/cards/' + news.newsType));
                            return (
                                <ProCard ghost key={news._id}>
                                    <React.Suspense fallback={<div>loading...</div>}>
                                        <Component news={news}/>
                                    </React.Suspense>
                                </ProCard>
                            )
                        }
                    })
                }
                {/*<ProCard ghost>*/}
                {/*    <CardWithImageAndSubtitle news={this.state.newsList}/>*/}
                {/*</ProCard>*/}
                {/*<ProCard ghost>*/}
                {/*    <CardWithImage/>*/}
                {/*</ProCard>*/}
                {/*<ProCard ghost>*/}
                {/*    <CardWithLive/>*/}
                {/*</ProCard>*/}
            </ProCard>
        );
    }
}

export default BBCApp;
