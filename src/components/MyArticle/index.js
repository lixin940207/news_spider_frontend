import React, {Component} from 'react';
import {Typography} from "antd";
import PropTypes from "prop-types";
import './index.css';

const {Title, Paragraph, Text} = Typography;

class MyArticle extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
    }

    render() {
        // const content = this.props.article.bodyBlockList.join('');
        return (
            <div>
                <Typography>
                    {this.props.article.title ?
                        <Title level={5}>{this.props.article.title.ori}</Title>
                        : ''}
                    {this.props.article.date ?
                        <Text style={{fontSize: "12px"}}>{this.props.article.date}</Text>
                        :''}
                    {this.props.article.summary ?
                        <Paragraph>
                            {this.props.article.summary.ori}
                        </Paragraph> : ''}
                    {/*<Image preview={false} src={this.props.article.imageHref}/>*/}
                </Typography>
                {/*<div dangerouslySetInnerHTML={{__html: content}}/>*/}
                {this.props.article.bodyBlockList.map(item => {
                    if (item.type === 'p') {
                        return (<Paragraph>
                            {item.ori}
                        </Paragraph>)
                    } else if (item.type === 'img') {
                        return (<img alt="illustration" src={item.src}/>)
                    } else if (item.type === 'ul') {
                        return (<ul>
                            {item.ori.map(i => {
                                return (
                                    <li>{i}</li>
                                )
                            })}
                        </ul>)
                    } else if (item.type === 'blockquote') {
                        return (<blockquote>{item.ori}</blockquote>)
                    } else if (item.type === 'h2') {
                        return (<Title level={4}>{item.ori}</Title>)
                    } else {
                        return (<div/>)
                    }
                })}
            </div>

        )
    }
}

export default MyArticle;
