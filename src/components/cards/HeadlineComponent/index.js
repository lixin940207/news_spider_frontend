import React, {Component} from 'react';
import {Typography} from "antd";
import PropTypes from "prop-types";
import '../index.less';
import Text from "antd/es/typography/Text";

const {Paragraph} = Typography;

class HeadlineComponent extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        lineNumber: PropTypes.number,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lineNumber: 3,
        lang: 'ori',
    }

    render() {
        return (
            <Paragraph className="headline"
                       ellipsis={{rows: this.props.lineNumber, expandable: false, symbol: '...'}}>
                <b>
                    {this.props.news.isLive ? <Text style={{color: "blue"}}>LIVE </Text> : ''}
                    {this.props.lang === 'ori'?
                        this.props.news.title.ori:
                        (this.props.news.title.cn?this.props.news.title.cn:this.props.news.title.ori)}
                </b>
            </Paragraph>
        )
    }
}

export default HeadlineComponent;
