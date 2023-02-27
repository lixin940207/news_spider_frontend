import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class FinanceNewsApp extends BaseNewsApp {
    static propTypes = {
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'en',
    }

    fetchData = (offset, limit, callback) => {
        axios.get(APIs.FinanceNewsAPI, {
            params: {offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default FinanceNewsApp;
