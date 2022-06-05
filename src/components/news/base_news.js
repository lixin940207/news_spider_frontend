import React, {Component} from 'react';
import '../../index.less';
import ProCard from "@ant-design/pro-card";
import {Button} from "antd";


class BaseNewsApp extends Component {
    state = {
        newsList: [],
        loading: false,
        page: 0,
        totalNum: 0,
        pageSize: 15,
        scrollPosition: 0
    }

    wideCardList = ["CardWithImageAndLive", "CardWithImageAndSubtitle", "CardWithImageAndSummary"];
    squareCardList = ["CardWithImage", "CardWithList", "CardWithLive", "CardWithTitleIntro"];
    smallCardList = ["CardWithTitleWide"];

    scrollParentRef = React.createRef();

    componentDidMount() {
        console.log('第0次call');
        this.fetchData(0, this.state.pageSize, (response) => {
            const oriNewsList = response.data.news;
            const {newNewsList} = this.postProcessNews(oriNewsList);
            this.setState({
                newsList: newNewsList,//response.data.news,//
                loading: false,
                page: this.state.page + 1,
                totalNum: response.data.totalNum,
            }, () => {
                console.log('componentDidMount')
                console.log(this.state) //查看数据是否已经改变
            })
        });
    }

    revert = (newsList)=>{
        return newsList.flatMap(news => {
            if (news.ifArray) {
                return news.data
                    .filter(i=>i.platform!=="example")
                    .flatMap(item=> {
                        if (item.ifArray){
                            return item.data.filter(i=>i.platform!=="example").map(i=>i);
                        }else{
                            return item;
                        }
                    });
            } else {
                return news;
            }
        });
    }

    handleInfiniteOnLoad = () => {
        this.setState({scrollPosition: this.scrollParentRef.current.scrollTop});
        if (this.state.page * this.state.pageSize > this.state.totalNum) {
            alert('No more news.');
            this.setState({
                loading: false,
            });
            return;
        }
        let {newsList, page} = this.state;
        this.setState({
            loading: true,
            newsList: newsList.concat([...new Array(this.state.pageSize)].map(() => ({loading: true, name: {}})))
        });
        console.log('第' + this.state.page + '次call');

        this.fetchData(this.state.pageSize * this.state.page, this.state.pageSize, res => {
            newsList = this.revert(newsList)
            const oriNewsList = newsList.concat(res.data.news);
            const {newNewsList} = this.postProcessNews(oriNewsList);
            this.setState({
                newsList: newNewsList,
                loading: false,
                page: page + 1,
                totalNum: res.data.totalNum,
            }, () => {
                console.log(this.state) //查看数据是否已经改变
            });
        });
    };

    loadScroll = () => {
        this.scrollParentRef.current.scrollTop = this.state.scrollPosition;
    }

    updateNewsList = (new_item, isExpand = true) => {
        return () => {
            this.setState({scrollPosition: this.scrollParentRef.current.scrollTop});
            let {newsList} = this.state;
            // newsList = newsList.flatMap(item => {
            //     if (item.ifArray) {
            //         return item.data
            //             .filter(i=>i.platform!=="example")
            //             .map(i=> {
            //                 return {...i, col:item.col, row:item.row}
            //             });
            //     } else {
            //         return item;
            //     }
            // });
            newsList = this.revert(newsList);
            if (isExpand) {
                newsList = newsList.filter(i => i._id !== new_item._id)
                new_item.prevNewsType = new_item.newsType;
                new_item.newsType = "CardExpanded";
                const {newNewsList} = this.postProcessNews(newsList, new_item);
                this.setState({newsList: newNewsList});
            } else {
                newsList = newsList.map(i => {
                    if (i._id === new_item._id) {
                        i.newsType = i.prevNewsType
                    }
                    return i;
                })
                newsList.sort((a, b) => a.publishTime > b.publishTime? -1: 1)
                const {newNewsList} = this.postProcessNews(newsList);
                this.setState({newsList: newNewsList});
            }
        }

    }

    postProcessNews = (oriNewsList, new_item = null) => {
        // const removeDupList = [...new Map(oriNewsList.map(item => [item._id, item])).values()]
        const newNewsListTemp1 = this.calculateTimeDiff(oriNewsList);
        // const newNewsListTemp2 = this.arrangeVerticalLayout(newNewsListTemp1);
        const {newNewsList} = this.arrangeLayout(newNewsListTemp1, new_item);
        return {newNewsList}
    }

    // arrangeVerticalLayout(oriNewsList) {
    //     let newNewsList = [];
    //     let visited = Array.from({length: oriNewsList.length});
    //     for (let i = 0; i < visited.length; i++) visited[i] = false
    //     for (let i = 0; i < oriNewsList.length; i++) {
    //         if (visited[i]) continue;
    //         if (oriNewsList[i].newsType === "CardWithTitleWide") {
    //             if (i + 1 < oriNewsList.length && oriNewsList[i + 1].newsType === "CardWithTitleWide") {
    //                 newNewsList.push({ifArray: true, data: [oriNewsList[i], oriNewsList[i + 1]]});
    //                 visited[i] = true;
    //                 visited[i + 1] = true;
    //             } else {
    //                 const template = {
    //                     title: "example",
    //                     platform: "example",
    //                     _id: Math.random(),
    //                     newsType: "CardWithTitleWide",
    //                     publishTime: oriNewsList[i].publishTime,
    //                 }
    //                 newNewsList.push({ifArray: true, data: [oriNewsList[i], template]});
    //                 visited[i] = true;
    //             }
    //             // let j = i + 1;
    //             // while (j < oriNewsList.length) {
    //             //     if (oriNewsList[j].newsType === "CardWithTitleWide") {
    //             //         newNewsList.push([oriNewsList[i], oriNewsList[j]]);
    //             //         visited[i] = true;
    //             //         visited[j] = true;
    //             //         break;
    //             //     }
    //             //     j++;
    //             // }
    //             // if (j === oriNewsList.length) {
    //             //     newNewsList.push(oriNewsList[i]);
    //             // }
    //         } else {
    //             newNewsList.push(oriNewsList[i]);
    //             visited[i] = true;
    //         }
    //     }
    //     return newNewsList;
    // }
    //
    // arrangeHorizontalLayout(oriNewsList) {
    //     let newNewsList = [];
    //     let width = 0;
    //     let count = 0;
    //     let visited = Array.from({length: oriNewsList.length});
    //     for (let i = 0; i < visited.length; i++) visited[i] = false
    //     for (let i = 0; i < oriNewsList.length; i++) {
    //         if (visited[i]) continue;
    //         if (this.wideCardList.includes(oriNewsList[i].newsType)) {
    //             width += 2;
    //         } else {
    //             width += 1;
    //         }
    //         if (width === 4) {
    //             newNewsList.push(oriNewsList[i]);
    //             visited[i] = true;
    //             width = 0;
    //             count = newNewsList.length;
    //         } else if (width < 4) {
    //             newNewsList.push(oriNewsList[i]);
    //             visited[i] = true;
    //         } else {
    //             let j = i + 1
    //             while (j < oriNewsList.length) {
    //                 if (!(this.wideCardList.includes(oriNewsList[j].newsType))) {
    //                     newNewsList.push(oriNewsList[j]);
    //                     visited[j] = true;
    //                     width = 0;
    //                     count = newNewsList.length;
    //                     i = i - 1;
    //                     break;
    //                 }
    //                 j++;
    //             }
    //             if (j === oriNewsList.length) {
    //                 width = 0;
    //                 i = i - 1;
    //             }
    //         }
    //     }
    //     return {newNewsList, count}
    // }

    arrangeLayout(oriNewsList, expandNews) {
        let newNewsList = [];
        let visited = Array.from({length: oriNewsList.length});
        let row = 0;
        let col = 0;
        for (let i = 0; i < visited.length; i++) visited[i] = false
        for (let i = 0; i < oriNewsList.length; i++) {
            if (visited[i]) continue;
            let width = 0;
            let curr_news = oriNewsList[i];
            if (expandNews !== null && row === expandNews.row) {
                let j = i;
                let sideColNews = [];
                let colTemp = 0;
                while (j < oriNewsList.length && colTemp < 4) {
                    if (!visited[j] && this.squareCardList.includes(oriNewsList[j].newsType) && colTemp + 2 <= 4) {
                        sideColNews.push(oriNewsList[j]);
                        visited[j] = true;
                        colTemp += 2;
                    }else if (!visited[j] && this.smallCardList.includes(oriNewsList[j].newsType)){
                        sideColNews.push(oriNewsList[j]);
                        visited[j] = true;
                        colTemp += 1;
                    }
                    j++;
                }
                if (sideColNews.length > 0) {
                    if (expandNews.col < 2) {
                        newNewsList.push({...expandNews, row, col: 0});
                        newNewsList.push({ifArray: true, data: sideColNews, row, col: 3});
                    } else {
                        newNewsList.push({ifArray: true, data: sideColNews, row, col: 0});
                        newNewsList.push({...expandNews, row, col: 1});
                    }
                }else{
                    newNewsList.push({...expandNews, row, col: 0});
                }
                row += 1;
                i = i - 1;
                continue;
            }

            if (curr_news.newsType === "CardWithTitleWide") {
                if (i + 1 < oriNewsList.length && oriNewsList[i + 1].newsType === "CardWithTitleWide") {
                    curr_news = {ifArray: true, newsType: "CardWithTitleWide", data: [oriNewsList[i], oriNewsList[i + 1]]};
                    visited[i + 1] = true;
                } else {
                    const template = {
                        title: {ori:"example"},
                        platform: "example",
                        _id: Math.random(),
                        newsType: "CardWithTitleWide",
                        publishTime: oriNewsList[i].publishTime,
                    }
                    curr_news = {ifArray: true, newsType: "CardWithTitleWide", data: [oriNewsList[i], template]};
                }
            }

            if (this.wideCardList.includes(curr_news.newsType)) {
                width = 2;
            } else {
                width = 1;
            }
            if (col + width === 4) {
                if (curr_news.ifArray)
                    curr_news = {...curr_news, data: curr_news.data.map(i =>{return {...i, col, row}})}
                newNewsList.push({...curr_news, row, col});
                visited[i] = true;
                row += 1;
                col = 0;
            } else if (col + width < 4) {
                if (curr_news.ifArray)
                    curr_news = {...curr_news, data: curr_news.data.map(i =>{return {...i, col, row}})}
                newNewsList.push({...curr_news, row, col});
                col = col + width;
                visited[i] = true;
            } else {
                let j = i + 1
                while (j < oriNewsList.length) {
                    if (!(this.wideCardList.includes(oriNewsList[j].newsType))) {
                        if (oriNewsList[j].ifArray === undefined && this.smallCardList.includes(oriNewsList[j].newsType)){
                            if (j + 1 < oriNewsList.length && oriNewsList[j + 1].newsType === "CardWithTitleWide") {
                                oriNewsList[j] = {ifArray: true, newsType: "CardWithTitleWide", data: [oriNewsList[j], oriNewsList[j + 1]]};
                                visited[j + 1] = true;
                            } else {
                                const template = {
                                    title: {ori:"example"},
                                    platform: "example",
                                    _id: Math.random(),
                                    newsType: "CardWithTitleWide",
                                    publishTime: oriNewsList[i].publishTime,
                                }
                                oriNewsList[j] = {ifArray: true, newsType: "CardWithTitleWide", data: [oriNewsList[j], template]};
                            }
                        }
                        if (oriNewsList[j].ifArray)
                            oriNewsList[j] = {...oriNewsList[j], data: oriNewsList[j].data.map(i =>{return {...i, col, row}})}
                        newNewsList.push({...oriNewsList[j], row, col});
                        visited[j] = true;
                        row += 1;
                        col = 0;
                        i = i - 1;
                        break;
                    }
                    j++;
                }
                if (j === oriNewsList.length) {
                    row++;
                    col = 0;
                    i = i - 1;
                }
            }
        }
        return {newNewsList};
    }

    calculateTimeDiff(oriNewsList) {
        return oriNewsList.map(news => {
            if (news.publishTime !== null && news.publishTime !== undefined) {
                const currentTime = new Date();
                let timeDiff = (currentTime - new Date(news.publishTime)) / (1000 * 60);
                if (timeDiff < 60) {
                    news.timeDiff = `${Math.floor(timeDiff)}m`;
                } else {
                    timeDiff = timeDiff / 60
                    if (timeDiff < 24) {
                        news.timeDiff = `${Math.floor(timeDiff)}h`
                    } else {
                        news.timeDiff = `${Math.floor(timeDiff / 24)}d`
                    }
                }
            }
            return news
        })
    }

    render() {
        const {loading} = this.state;
        return (
            <div className="tab-main"
                 style={{height: "calc(100vh - 150px)", overflowY: 'auto', overflowX: 'hidden'}}
                 ref={this.scrollParentRef}
                 onLoad={this.loadScroll}
            >
                <ProCard gutter={[16, 16]} className="card-container" layout="center" wrap direction='row'
                         key="france-news">
                    {
                        this.state.newsList.map((news) => {
                            if (news.ifArray) {
                                const gutter = (news.data[0]!==undefined && news.data[0].newsType === 'CardWithTitleWide') ? [0, 8] : [0, 16];
                                return (
                                    <ProCard colSpan={6} ghost gutter={gutter} direction="column">
                                        {
                                            news.data.map(item => {
                                                const Component = React.lazy(() => import('../cards/' + item.newsType));
                                                if (item.ifArray){
                                                    return (
                                                        <ProCard colSpan={6} ghost gutter={[0,8]} direction="column">
                                                        {
                                                            item.data.map(i=>{
                                                                return (
                                                                    <ProCard ghost key={i._id}>
                                                                        <React.Suspense fallback={<div>loading...</div>}>
                                                                            <Component news={i}
                                                                                       lang={this.props.lang}
                                                                                       handleExpand={this.updateNewsList(i)}
                                                                                       handleFold={this.updateNewsList(i, false)}/>
                                                                        </React.Suspense>
                                                                    </ProCard>
                                                                )
                                                            })}
                                                        </ProCard>
                                                    )
                                                }else{
                                                    return (
                                                        <ProCard ghost key={item._id}>
                                                            <React.Suspense fallback={<div>loading...</div>}>
                                                                <Component news={item}
                                                                           lang={this.props.lang}
                                                                           handleExpand={this.updateNewsList(item)}
                                                                           handleFold={this.updateNewsList(item, false)}/>
                                                            </React.Suspense>
                                                        </ProCard>
                                                    )
                                                }
                                            })}
                                    </ProCard>
                                )
                            } else {
                                if (news.loading === true) {
                                    return (
                                        <ProCard loading colSpan={6}>内容</ProCard>
                                    )
                                }
                                const Component = React.lazy(() => import('../cards/' + news.newsType));
                                let colSpan = 6;
                                if (this.wideCardList.includes(news.newsType)) {
                                    colSpan = 12;
                                } else if (news.newsType === "CardExpanded") {
                                    colSpan = 18;
                                }
                                return (
                                    <ProCard colSpan={colSpan} layout="left" ghost key={news._id}>
                                        <React.Suspense fallback={<div>loading...</div>}>
                                            <Component news={news}
                                                       lang={this.props.lang}
                                                       handleExpand={this.updateNewsList(news)}
                                                       handleFold={this.updateNewsList(news, false)}/>
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

export default BaseNewsApp;
