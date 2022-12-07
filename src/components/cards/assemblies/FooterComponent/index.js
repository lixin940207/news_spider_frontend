import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../../index.less'

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
                {this.props.news.timeDiff ? <div>&nbsp; &nbsp;•&nbsp; &nbsp;{this.props.news.timeDiff} ago</div> : ''}
                {/*<div style={{float:"right",*/}
                {/*    display: "flex",*/}
                {/*    position: "absolute",*/}
                {/*    width: "50px", alignItems: "center", right: "-100px"}}>*/}
                {/*    <div style={{fontSize: "11px", float: "left"}}>more</div>*/}
                {/*<MyIcon type="icon-lixinexpand-more" style={{fontSize: "23px"}}/>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default FooterComponent;
