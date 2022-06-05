import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../../index.less';
import MyIcon from "../../../MyIcon";

class ExpandMoreComponent extends Component {
    static propTypes = {
        handleExpand: PropTypes.func.isRequired,
    }

    static defaultProps = {
    }

    render() {
        return (
            <div
                style={{
                float: "right",
                display: "flex",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                width: "50px",
                alignItems: "center"
            }}
            >
                <div style={{fontSize: "11px", float: "left"}} onClick={this.props.handleExpand}>more</div>
                <MyIcon type="icon-lixinexpand-more" style={{fontSize: "23px"}}/>
            </div>

        )
    }
}

export default ExpandMoreComponent;
