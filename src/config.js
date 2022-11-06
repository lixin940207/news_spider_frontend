const news_spider_api_host = process.env.NEWS_SPIDER_API_HOST || "127.0.0.1";
const news_spider_api_port = process.env.NEWS_SPIDER_API_PORT || 5000;

module.exports = {
    APIs: {
        'FranceNewsAPI': `http://${news_spider_api_host}:${news_spider_api_port}/latest_france_news`,
        'WorldNewsAPI': `http://${news_spider_api_host}:${news_spider_api_port}/latest_world_news`,
        'ChinaNewsAPI': `http://${news_spider_api_host}:${news_spider_api_port}/latest_china_news`,
        'BBCAPI': `http://${news_spider_api_host}:${news_spider_api_port}/bbc`,
        'LeMondeAPI': `http://${news_spider_api_host}:${news_spider_api_port}/lemonde`,
        'NYTimesAPI': `http://${news_spider_api_host}:${news_spider_api_port}/nytimes`,
        'LeFigaroAPI': `http://${news_spider_api_host}:${news_spider_api_port}/lefigaro`,
        'TechNewsAPI': `http://${news_spider_api_host}:${news_spider_api_port}/latest_tech_news`
    }
}
