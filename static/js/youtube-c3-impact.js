const DAYSAGO = 15;

const clist = [{
    API: buildApiUrl('statistics/supporters/day', 15, 2),
    bindto: '#supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'day' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': _.first(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/active/day', 15, 2),
    bindto: '#active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'day' },
        type: 'bar',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': _.last(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/related/day', 15, 2),
    bindto: '#related-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total', 'related-20', 'others', 'more-than-20' ], x: 'day' },
        types: {
            'total': 'bar',
            'related-20': 'bar',
            'others': 'bar',
            'more-than-20': 'bar',
        },
        colors: {
            'total': palette[0],
            'related-20': palette[1],
            'others': palette[2],
            'more-than-20': palette[3]
        },
        groups: [
            [ 'related-20', 'others', 'more-than-20' ]
        ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/processing/day', 15, 2),
    bindto: '#processing-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'failure', 'successful', 'unprocessed', 'total', 'hasMetadata' ], x: 'day' },
        type: 'bar',
        colors: {
            'failure': palette[0],
            'unprocessed': palette[2],
            'successful': palette[4],
            'total': palette[1],
            'hasMetadata': palette[3]
        },
        groups: [ [ 'successful', 'failure', 'unprocessed' ] ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
    }
}, {
    API: buildApiUrl('statistics/metadata/day', 15, 2),
    bindto: '#metadata-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ 'hasTitle', 'hasAuthor', 'hasRelated', 'hasAd', 'videos', 'total' ],
            x: 'day'
        },
        types: {
            'total': 'line',
            'videos': 'area',
            'hasTitle': 'bar',
            'hasAuthor': 'bar',
            'hasRelated': 'bar',
            'hasAd': 'bar',
        },
        colors: {
            'total': palette[0],
            'videos': palette[1],
            'hasTitle': palette[2],
            'hasAuthor': palette[3],
            'hasRelated': palette[4],
            'hasAd': palette[5]
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            }
        },
    }
}, {
    API: buildApiUrl('statistics/usage/day', 15, 2),
    bindto: '#usage-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'logged', 'unlogged', 'homepages', 'videos', 'total' ], x: 'day' },
        type: 'bar',
        colors: {
            'logged': palette[0],
            'unlogged': palette[1],
            'homepages': palette[4],
            'videos': palette[3],
            'total': palette[6]
        },
        groups: [ [ 'logged', 'unlogged' ], [ 'videos', 'homepages' ] ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
    }
},];


$(document).ready(async function() {

    var graphNodes = $('.c3graph');
    console.log("Retrieved", _.size(graphNodes), "from the impact.md page");

    const graphs = _.compact(_.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;

        const config = _.find(clist, { bindto: graphId });
        if(!config) {
            console.log("Invalid ID", graphId, "not found among the c3 configs");
            return null;;
        }
        return {
            config,
            graphId
        }
    }));

    for (const g of graphs) {
        const connection = await fetch(g.config.API);
        const content = await connection.json();
        if(content.error) {
            console.log("Error received!", g.graphId, JSON.stringify(content));
        } else if (!_.size(content)) {
            console.log("Empty answer for", g.graphId, JSON.stringify(content));
        } else {
            console.log("Generating graph", g.graphId, g,
                        "Retrieved", _.size(content),
                        "adding to config.data https://c3js.org/reference.html");
            g.config.data.json = content;
            const retval = c3.generate(g.config);
            // retval currently not used for updates
        }
    }
});
