import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../../index.less';
import MyIcon from "../../../MyIcon";

class FoldComponent extends Component {
    static propTypes = {
        handleFold: PropTypes.func.isRequired
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
                <div style={{fontSize: "11px", float: "left"}} onClick={this.props.handleFold}>收起</div>
                <MyIcon type="icon-lixina-expand_less1" style={{fontSize: "23px"}}/>
            </div>

        )
    }
}

export default FoldComponent;
