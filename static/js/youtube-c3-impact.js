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
            'newcomers': 'black'
        }
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
            'active': '#00ffcf'
        }
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
        axes: {
            'total': 'y',
            'related-20': 'y',
            'others': 'y',
            'more-than-20': 'y'
        },
        groups: [
            [ 'related-20', 'others', 'more-than-20' ]
        ]
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
            'failure': '#07e',
            'unprocessed': '#faa',
            'successful': '#3b5898',
            'total': '#99e'
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
            'videos': 'line',
            'total': 'line',
            'hasTitle': 'bar',
            'hasAuthor': 'bar',
            'hasRelated': 'bar',
            'hasAd': 'bar',
        },
        axes: {
            'videos': 'y',
            'hasTitle': 'y',
            'hasAuthor': 'y',
            'hasRelated': 'y',
            'hasAb': 'y',
        },
        colors: {
            'videos': '#00cfff',
            'total': '0058ff',
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            }
        },
        // y2: { show: true }
    }
}];


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
