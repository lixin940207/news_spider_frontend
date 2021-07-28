import React, {Component} from 'react';
import '../../index.less';


class BaseNewsApp extends Component {
    state = {
        newsList: [],
        loading: false,
        page: 0,
        totalNum:0,
        pageSize: 10,
        scrollPosition: 0
    }

    wideCardList = ["CardWithImageAndLive", "CardWithImageAndSubtitle", "CardWithImageAndSummary"];

    scrollParentRef = React.createRef();

    componentDidMount() {
        console.log('第0次call');
        this.fetchData(0, this.state.pageSize + 3, (response) => {
            const oriNewsList = response.data.news;
            const newNewsListTemp1 = this.calculateTimeDiff(oriNewsList);
            const newNewsListTemp2 = this.arrangeVerticalLayout(newNewsListTemp1);
            const {newNewsList,count} = this.arrangeHorizontalLayout(newNewsListTemp2);
            this.setState({
                newsList: newNewsList.slice(0, count),//response.data.news,//
                loading: false,
                page: this.state.page + 1,
                totalNum: response.data.totalNum,
            }, () => {
                console.log('componentDidMount')
                console.log(this.state) //查看数据是否已经改变
            })
        });
    }

    handleInfiniteOnLoad = () => {
        this.setState({scrollPosition: this.scrollParentRef.current.scrollTop});
        if (this.state.page * this.state.pageSize > this.state.totalNum){
            alert('No more news.');
            this.setState({
                loading: false,
            });
            return;
        }
        let {newsList, page} = this.state;
        this.setState({
            loading: true,
            newsList: newsList.concat([...new Array(this.state.pageSize)].map(() => ({ loading: true, name: {} })))
        });
        console.log('第'+this.state.page+'次call');

        this.fetchData(this.state.pageSize * this.state.page, this.state.pageSize + 5, res => {
            const oriNewsList = newsList.concat(res.data.news);
            const removeDupList = [...new Map(oriNewsList.map(item => [item._id, item])).values()]
            const newNewsListTemp1 = this.calculateTimeDiff(removeDupList);
            const newNewsListTemp2 = this.arrangeVerticalLayout(newNewsListTemp1);
            const {newNewsList, count} = this.arrangeHorizontalLayout(newNewsListTemp2);
            this.setState({
                newsList: newNewsList.slice(0, count),
                loading: false,
                page: page+1,
                totalNum: res.data.totalNum,
            }, () => {
                console.log(this.state) //查看数据是否已经改变
            });
        });
    };

    loadScroll = ()=>{
        this.scrollParentRef.current.scrollTop = this.state.scrollPosition;
    }

    arrangeHorizontalLayout(oriNewsList) {
        let newNewsList = [];
        let width = 0;
        let count = 0;
        let visited = Array.from({length: oriNewsList.length});
        for(let i = 0; i < visited.length; i++) visited[i] = false
        for (let i = 0; i < oriNewsList.length; i++) {
            if (visited[i]) continue;
            if (this.wideCardList.includes(oriNewsList[i].newsType)) {
                width += 2;
            } else {
                width += 1
            }
            if (width === 4) {
                newNewsList.push(oriNewsList[i]);
                visited[i] = true;
                width = 0;
                count = newNewsList.length;
            } else if (width < 4) {
                newNewsList.push(oriNewsList[i]);
                visited[i] = true;
            } else {
                let j = i + 1
                while (j < oriNewsList.length) {
                    if (!(this.wideCardList.includes(oriNewsList[j].newsType))) {
                        newNewsList.push(oriNewsList[j]);
                        visited[j] = true;
                        width = 0;
                        count = newNewsList.length;
                        i = i - 1;
                        break;
                    }
                    j++;
                }
                if (j === oriNewsList.length) {
                    width = 0;
                    i = i - 1;
                }
            }
        }
        return {newNewsList,count}
    }

    arrangeVerticalLayout(oriNewsList) {
        let newNewsList = [];
        let visited = Array.from({length: oriNewsList.length});
        for(let i = 0; i < visited.length; i++) visited[i] = false
        for (let i = 0; i < oriNewsList.length; i++) {
            if (visited[i]) continue;
            if (oriNewsList[i].newsType === "CardWithTitleWide") {
                let j = i + 1;
                while (j < oriNewsList.length) {
                    if (oriNewsList[j].newsType === "CardWithTitleWide") {
                        newNewsList.push([oriNewsList[i], oriNewsList[j]]);
                        visited[i] = true;
                        visited[j] = true;
                        break;
                    }
                    j++;
                }
                if (j === oriNewsList.length) {
                    newNewsList.push(oriNewsList[i]);
                }
            } else {
                newNewsList.push(oriNewsList[i]);
                visited[i] = true;
            }
        }
        return newNewsList;
    }

    calculateTimeDiff(oriNewsList){
        return oriNewsList.map(news => {
            if (news.publishTime !== null && news.publishTime !== undefined){
                const currentTime = new Date();
                let timeDiff = (currentTime - new Date(news.publishTime)) / (1000*60);
                if (timeDiff < 60){
                    news.timeDiff = `${Math.floor(timeDiff)}m`;
                } else{
                    timeDiff = timeDiff / 60
                    if (timeDiff < 24){
                        news.timeDiff = `${Math.floor(timeDiff)}h`
                    }else{
                        news.timeDiff = `${Math.floor(timeDiff/24)}d`
                    }
                }
            }
            return news
        })
    }

    render() {
        return (<div/>);
    }
}

export default BaseNewsApp;
