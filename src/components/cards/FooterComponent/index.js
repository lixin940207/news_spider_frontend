import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../index.less'

class FooterComponent extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div style={{
                    alignItems: "center",
                    display: "flex",
                    fontSize: "10px",
                    position: "absolute",
                    bottom: "15px"
                        }}>
                <div>{this.props.news.platform}</div>
                {this.props.news.timeDiff?<div>&nbsp; &nbsp;•&nbsp; &nbsp;{this.props.news.timeDiff} ago</div>:''}
            </div>
        )
    }
}

export default FooterComponent;
