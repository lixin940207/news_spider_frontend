import React, {Component} from "react";
import {Button, Tag} from "antd";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";

class HotTopics extends Component {
    state = {
        topics: [],
    }

    static propTypes = {
        lang: PropTypes.string,
        count: PropTypes.number,
        add: PropTypes.func,
    }

    fetchData = (count, callback) => {
        axios.get(APIs.HotTopicsAPI, {
            params: {count},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };

    componentDidMount() {
        this.fetchData(this.props.count, (response) => {
            this.setState({
                topics: response.data,
            }, () => {
                console.log('componentDidMount')
                console.log(this.state)
            })
        })
    }

    render() {
        const colors = [
            "#D49A89",
            "#F7D1BA",
            "#557571",
            "#D49A89",
            "#ECB390",
            "#557571",
            "#D49A89",
            "#D4E2D4",
            "#557571",
            "#DBE2EC"
        ]
        return (
            this.state.topics.map((topic, idx) => {
                return (
                    <Tag color={colors[idx % 10]} style={{borderRadius: "3px"}}>
                        <Button block ghost type='text' size='small'
                                onClick={(event) => this.props.add(event, topic, 'topic_news')}>
                            <div style={{fontSize: 12, color: 'white'}}>{topic}</div>
                        </Button>
                    </Tag>
                )
            })
        )
    }
}

export default HotTopics;
