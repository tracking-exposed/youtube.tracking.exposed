$(document).ready(function() {

    var graphNodes = $('.c3graph');

    const clist = [{
        bindto: '#supporters-graph',
        data : {
            url: '/api/v2/statistics/supporters/day/15',
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'newcomers' ], x: 'day' },
            type: 'bar',
            axes: {
                'newcomers': 'y'
            },
            colors: {
                'newcomers': 'black'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }, {
        bindto: '#related-graph',
        data : {
            url: '/api/v2/statistics/related/day/15',
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'total', 'related-20', 'related-19', 'related-1' ], x: 'day' },
            types: {
                'total': 'bar',
                'related-20': 'bar',
                'related-19': 'bar',
                'related-1': 'bar'
            },
            axes: {
                'total': 'y',
                'related-20': 'y',
                'related-19': 'y',
                'related-1': 'y'
            },
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },

            }
        }
    }, {
        bindto: '#processing-graph',
        data : {
            url: '/api/v2/statistics/processing/day/15',
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'failure', 'successful', 'unprocessed', 'total' ], x: 'day' },
            types: {
                'failure': 'bar',
                'unprocessed': 'bar',
                'successful': 'line',
                'total': 'line',
            },
            axes: {
                'failure': 'y',
                'unprocessed': 'y',
                'successful': 'y2',
                'total': 'y2',
            },
            colors: {
                'failure': 'black',
                'unprocessed': '#eee',
                'successful': '#3b5898',
                'total': 'green'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },

            },
            y2: { show: true }
        }
    }, {
        bindto: '#processing2-graph',
        data : {
            url: '/api/v2/statistics/processing2/day/15',
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'failure', 'successful', 'unprocessed', 'total' ], x: 'day' },
            types: {
                'failure': 'bar',
                'unprocessed': 'bar',
                'successful': 'line',
                'total': 'line',
            },
            axes: {
                'failure': 'y',
                'unprocessed': 'y',
                'successful': 'y2',
                'total': 'y2',
            },
            colors: {
                'failure': 'black',
                'unprocessed': '#eee',
                'successful': '#3b5898',
                'total': 'green'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }, {
        bindto: '#metadata-graph',
        data : {
            url: '/api/v2/statistics/metadata/day/15',
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'hasTitle', 'hasAuthor', 'hasRelated', 'hasAd', 'total' ], x: 'day' },
            type: 'bar'
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }];

    const graphs = _.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;
        var config = _.find(clist, { bindto: graphId });
        if(config) {
            console.log("Generating graph", graphId);
            var r = c3.generate(config);
        } else {
            console.log("Invalid ID", graphId);
        }
    });
});
