import React from 'react';
import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class WorldNewsApp extends BaseNewsApp {
    static propTypes = {
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'ori',
    }

    fetchData = (offset, limit, callback) => {
        axios.get(APIs.WorldNewsAPI, {
            params: {offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default WorldNewsApp;
