import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Typography} from "antd";
import PopoverComponent from "../PopoverComponent";

const {Paragraph} = Typography;

class SubtitleComponent extends Component {

    state = {
        elipsisStyle: {rows: 4, expandable: false, symbol: '...'},
    }

    static propTypes = {
        news: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    componentDidMount() {
        if (this.props.news.relatedNewsList.length >= 3) {
            this.setState({elipsisStyle: {...this.state.elipsisStyle, rows: 3}})
        }
    }

    render() {
        return (
            <ul style={{marginLeft: "-20px"}}>
                {
                    this.props.news.relatedNewsList.slice(0,3).map((news, idx) => {
                        return (
                            <li key={idx}>
                                {/*<PopoverComponent article={news.article} lang={this.props.lang}>*/}
                                    <Paragraph className="subtitle"
                                               ellipsis={this.state.elipsisStyle}>
                                        {this.props.lang === 'ori' ?
                                            news.title.ori :
                                            (news.title.cn ? news.title.cn : news.title.ori)
                                        }
                                    </Paragraph>
                                {/*</PopoverComponent>*/}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default SubtitleComponent
