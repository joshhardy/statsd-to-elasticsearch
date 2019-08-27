/*
  statsd daemon configuration reference:
  https://github.com/statsd/statsd/blob/master/exampleConfig.js

  elasticsearch-statsd-backend configuration reference:
  https://github.com/reconbot/elasticsearch-statsd-backend
*/

module.exports = {
  port: process.env.STATSD_PORT || 8125,
  backends: [ 'elasticsearch-statsd-backend' ],
  elasticsearch: {
    url: process.env.ES_URL || 'http://localhost:9200',
    indexPrefix:   process.env.ES_INDEX_PREFIX || "statsd-",

    // shutdown on template failure unless explicitly marked optional
    shutdownOnStartupError: process.env.ES_TEMPLATES_OPTIONAL !== 'true',

    // "months" => ${indexPrefix}-${YYYY-MM}
    // "day"   => ${indexPrefix}-${YYYY-MM-DD}
    // "hour"   => ${indexPrefix}-${YYYY-MM-DDTHH}
    indexTimestamp: process.env.ES_INDEX_TIMESTAMP || 'day',
    
    counterIndexName: process.env.ES_COUNTER_INDEX || 'counter',
    timerIndexName: process.env.ES_TIMER_INDEX || 'timer',
    gaugeIndexName: process.env.ES_GAUGE_INDEX || 'gauge',
    setIndexName: process.env.ES_SET_INDEX || 'set',

    // parse any JSON object index templates provided
    counterTemplate: process.env.ES_COUNTER_TEMPLATE ? JSON.parse(process.env.ES_COUNTER_TEMPLATE): undefined,
    timerTemplate: process.env.ES_TIMER_TEMPLATE ? JSON.parse(process.env.ES_TIMER_TEMPLATE): undefined,
    gaugeTemplate: process.env.ES_GAUGE_TEMPLATE ? JSON.parse(process.env.ES_GAUGE_TEMPLATE): undefined,
    setTemplate: process.env.ES_SET_TEMPLATE ? JSON.parse(process.env.ES_SET_TEMPLATE): undefined,
  }  
}
