import React, {Component} from 'react';
import {Image, Typography} from "antd";
import PropTypes from "prop-types";
import './index.css';

const {Title, Paragraph, Text} = Typography;

class MyArticle extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
    }
    render() {
        const content = this.props.article.bodyBlockList.join('');
        return (
            <div>
            <Typography>
                <Title level={3}>{this.props.article.title}</Title>
                <Text style={{fontSize: "12px"}}>{this.props.article.date}</Text>
                <Paragraph>
                    {this.props.article.summary}
                </Paragraph>
                <Image preview={false} src={this.props.article.imageHref}/>
            </Typography>
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>

    )
    }
}

export default MyArticle;
