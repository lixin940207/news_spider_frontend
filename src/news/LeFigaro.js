import React,{Component} from 'react';
import ProCard from '@ant-design/pro-card';
import axios from "axios";
import {APIs} from '../config'
const {LeFigaroAPI} = APIs


class LeFigaroApp extends Component {
    state = {
        newsList:[],
    }

    componentDidMount() {
        axios.get(LeFigaroAPI).then(
            (response) => {
                this.setState({newsList: response.data.news})
            })
    }
    render() {
        return (
            <ProCard title="LeFigaro News" gutter={8} collapsible style={{overflow: "scroll"}}>
                {
                    this.state.newsList.map((news)=>{
                        const Component = React.lazy(() => import('../components/'+news.newsType));
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

export default LeFigaroApp;
