import '../../index.less';
import BaseNewsApp from "./base_news";
import axios from "axios";
import {APIs} from "../../config";
import PropTypes from "prop-types";


class TopicNewsApp extends BaseNewsApp {
    static propTypes = {
        lang: PropTypes.string,
        topic: PropTypes.string,
    }

    static defaultProps = {
        lang: 'en',
    }

    fetchData = (offset, limit, callback) => {
        axios.get(APIs.TopicNewsAPI, {
            params: {topic: this.props.topic, offset, limit},
            headers: {'Content-Type': 'application/json'}
        }).then(callback);
    };
}

export default TopicNewsApp;
