import React, {Component} from 'react';
import {Popover} from "antd";
import PropTypes from "prop-types";
import '../../index.less';
import {Typography} from "antd";

const {Paragraph} = Typography;


class PopoverComponent extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired, lang: PropTypes.string,
    }

    render() {
        return (<>
            {this.props.article !== undefined ? <Popover trigger={"click"} placement="right"
                                                         overlayStyle={{
                                                             width: "400px",
                                                             maxHeight: "500px",
                                                             overflowY: "scroll"
                                                         }}
                                                         content={
                                                             <Paragraph>
                                                                 {
                                                                     this.props.article ?
                                                                         this.props.article.abstract
                                                                         : ""
                                                                 }
                                                             </Paragraph>}
            >
                {this.props.children}
            </Popover> : <div>{this.props.children}</div>}
        </>)
    }
}

export default PopoverComponent;
