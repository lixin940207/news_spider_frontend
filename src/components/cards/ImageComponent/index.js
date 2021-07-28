import React, {Component} from 'react';
import {Image} from "antd";
import PropTypes from "prop-types";
import '../index.less';


class ImageComponent extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div className="imageFrameStyle">
                <Image className="headImageStyle"
                       preview={false}
                       src={this.props.news.imageHref}/>
            </div>
        )
    }
}

export default ImageComponent;
