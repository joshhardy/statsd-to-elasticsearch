# statsd-to-elasticsearch

Simple Docker container running the [statsd daemon](https://github.com/statsd/statsd) 
configured with the [elasticsearch-statsd-backend](https://github.com/reconbot/elasticsearch-statsd-backend) output.

Allows ENV variable configuration of the [statsd daemon](https://github.com/reconbot/elasticsearch-statsd-backend) and 
[elasticsearch-statsd-backend](https://github.com/reconbot/elasticsearch-statsd-backend) options.

## Configuration

| ENV | description | options | default |
|---|---|---|---|
| `STATSD_PORT` | statsd daemon listener port | | `8125` |
| `ES_URL` | elasticsearch url | | `http://localhost:9200` |
| `ES_TEMPLATES_OPTIONAL` | start daemon even if index template create fails | `true`, `false` | `false` |
| `ES_INDEX_TIMESTAMP`| granularity of timestamp in index | `months`, `day`, `hour` | `day` |
| `ES_COUNTER_INDEX` | counter index name | | `counter` |
| `ES_TIMER_INDEX` | timer index name | | `timer` |
| `ES_GAUGE_INDEX` | gauge index name | | `gauge` |
| `ES_SET_INDEX` | set index name | | `set` |
| `ES_COUNTER_TEMPLATE` | counter ES index template JSON | _json-string_ | [_templates_](https://github.com/reconbot/elasticsearch-statsd-backend/blob/master/lib/templates.js) |
| `ES_TIMER_TEMPLATE` | timer ES index template JSON | _json-string_ | [_templates_](https://github.com/reconbot/elasticsearch-statsd-backend/blob/master/lib/templates.js) |
|`ES_GAUGE_TEMPLATE` | gauge ES index template JSON | _json-string_ | [_templates_](https://github.com/reconbot/elasticsearch-statsd-backend/blob/master/lib/templates.js) |
| `ES_SET_TEMPLATE` | set ES index template JSON | _json-string_ | [_templates_](https://github.com/reconbot/elasticsearch-statsd-backend/blob/master/lib/templates.js) |

## Credits

This bit of plumbing is made possible by the fine work of others
* https://github.com/statsd/statsd
* https://github.com/reconbot/elasticsearch-statsd-backend
