import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class SearchNewsApp extends BaseNewsApp {
    static propTypes = {
        lang: PropTypes.string,
        topic: PropTypes.string,
    }

    static defaultProps = {
        lang: 'en',
    }

    fetchData = (offset, limit, callback) => {
        axios.get(APIs.SearchNewsAPI, {
            params: {
                lang: this.props.lang,
                input: this.props.topic,
                offset, limit
            },
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default SearchNewsApp;
