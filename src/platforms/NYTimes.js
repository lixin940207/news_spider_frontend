import React,{Component} from 'react';
import ProCard from '@ant-design/pro-card';
import axios from "axios";
import {APIs} from '../config'
const {NYTimesAPI} = APIs


class NYTimesApp extends Component {
    state = {
        newsList:[],
    }

    componentDidMount() {
        axios.get(NYTimesAPI).then(
            (response) => {
                this.setState({newsList: response.data.news})
            })
    }
    render() {
        return (
            // <ProCard title="NYTimes News" gutter={8} collapsible style={{overflow: "scroll"}}>
            <ProCard ghost gutter={16}>
                {
                    this.state.newsList.map((news)=>{
                        const Component = React.lazy(() => import('../components/cards/'+news.newsType));
                        return (
                            <ProCard ghost key={news._id}>
                                <React.Suspense fallback={<div>loading...</div>}>
                                    <Component news={news}/>
                                </React.Suspense>
                            </ProCard>
                        )
                    })
                }
            </ProCard>
        );
    }
}

export default NYTimesApp;
