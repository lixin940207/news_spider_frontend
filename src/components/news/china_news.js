import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class ChinaNewsApp extends BaseNewsApp {

    static propTypes = {
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'zh',
    }

    fetchData = (offset, limit, callback) => {
        axios.get(APIs.ChinaNewsAPI, {
            params: {offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default ChinaNewsApp;
