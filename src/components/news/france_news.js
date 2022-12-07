import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class FranceNewsApp extends BaseNewsApp {

    static propTypes = {
        lang: PropTypes.string,
    }

    static defaultProps = {
        lang: 'fr',
    }

    fetchData = (offset, limit, callback) => {
        const platforms = ['LeFigaro', 'LeMonde', 'LeParisien', 'France24', 'BFM'];
        axios.get(APIs.FranceNewsAPI, {
            params: {platforms, offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default FranceNewsApp;
