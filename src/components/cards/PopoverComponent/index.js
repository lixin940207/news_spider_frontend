import React, {Component} from 'react';
import {Popover} from "antd";
import PropTypes from "prop-types";
import MyArticle from "../../MyArticle";
import '../index.less';


class PopoverComponent extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    render() {
        return (
            <>
                {
                    this.props.article !== null ?
                        <Popover trigger={"click"} placement="right"
                                 overlayStyle={{width: "400px", maxHeight: "500px", overflowY: "scroll"}}
                                 content={<MyArticle article={this.props.article} lang={this.props.lang}/>}
                        >
                            {this.props.children}
                        </Popover>
                        : <div>{this.props.children}</div>
                }
            </>
        )
    }
}

export default PopoverComponent;
