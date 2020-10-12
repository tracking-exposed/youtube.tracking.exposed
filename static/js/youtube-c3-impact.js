const DAYSAGO = 17;

const clist = [{
    API: buildApiUrl('statistics/supporters/day', DAYSAGO, 2),
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
    API: buildApiUrl('statistics/deeper/day', DAYSAGO, 2),
    bindto: '#deeper-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total', 'foryou' /*, 'verified' */, 'isLive' ], x: 'day' },
        type: 'bar',
        axes: {
            'foryou': 'y',
            // 'verified': 'y',
            'isLive': 'y',
            'total': 'y',
        },
        colors: {
            'foryou': _.last(palette),
            // 'verified': palette[4],
            'isLive': palette[1],
            'total': palette[3],
        },
        labels: { show: true },
    },
    legend: { show: true },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    },
    tooltip: {
        contents: detailAnalysisTooltip,
    }
}, {
    API: buildApiUrl('statistics/active/day', DAYSAGO, 2),
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
    API: buildApiUrl('statistics/related/day', DAYSAGO, 2),
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
    API: buildApiUrl('statistics/processing/day', DAYSAGO, 2),
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
    API: buildApiUrl('statistics/metadata/day', DAYSAGO, 2),
    bindto: '#metadata-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ 'hasTitle', 'hasAuthor', 'hasRelated', 'viewWorks', 'videos', 'total' ],
            x: 'day'
        },
        types: {
            'total': 'line',
            'videos': 'area',
            'hasTitle': 'bar',
            'hasAuthor': 'bar',
            'hasRelated': 'bar',
            'viewWorks': 'bar',
        },
        colors: {
            'total': palette[0],
            'videos': palette[1],
            'hasTitle': palette[2],
            'hasAuthor': palette[3],
            'hasRelated': palette[4],
            'viewWorks': palette[5]
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
    API: buildApiUrl('statistics/usage/day', DAYSAGO, 2),
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
}, {
    API: buildApiUrl('statistics/searches/day', DAYSAGO, 2),
    bindto: '#searches-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ '1month', '7days', '24hours', 'searches' ], x: 'day' },
        type: 'bar',
        colors: {
            '1month': palette[2],
            '7days': palette[1],
            '24hours': palette[3],
            'searches': palette[6]
        },
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
    API: buildApiUrl('statistics/labels/day', DAYSAGO, 2),
    bindto: '#labels-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'labels', 'total' ], x: 'day' },
        type: 'bar',
        colors: {
            'labels': palette[2],
            'total': palette[6],
        },
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
    API: '/bin/foryou-percentage-40.json',
    bindto: '#october-2020-percentage-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'percent' ], x: 'day' },
        type: 'spline',
        colors: {
            'percent': palette[2]
        },
    },
    regions: [{ 
        axis: 'x',
        start: new Date('2020-09-29'),
        end: new Date('2020-10-11'),
        class: 'foryoudown' 
    }],
    grid: {
        x: {
            lines: [{
                value: new Date('2020-09-29'),
                text: 'Recommended for You reduced',
                position: 'end',
                class: 'foryoudown'
            }]
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
        y: { max: 100, min: 0 }
    }
}, {
    API: '/bin/foryou-evidences-deeper-40.json',
    bindto: '#october-2020-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'foryou', 'isLive' /*, 'verified' */, 'total'], x: 'day' },
        type: 'bar',
        axes: {
            'foryou': 'y',
            'isLive': 'y',
            // 'verified': 'y',
            'total': 'y',
        },
        colors: {
            'foryou': _.last(palette),
            'isLive': palette[2],
            // 'verified': palette[5],
            'total': palette[0],
        },
        labels: { show: true },
    },
    legend: { show: true },
    size: { height: 2100 },
    axis: {
        rotated: true,
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    },
    tooltip: {
        contents: detailAnalysisTooltip
    }
} ];

function detailAnalysisTooltip(d) {
    if(!d || !_.isObject(d[0]) )
        return `<code>No data</code>`;

    const total = _.find(d, {id: 'total'}).value;
    const info = _.join(_.compact(_.map(['isLive', 'foryou' /*, 'verified' */], function(k) {
        const amount = _.find(d, {id: k}).value;
        if(amount && total) {
            const percent = _.round( ((amount / total ) * 100), 1);
            return `<code style="font-size:1.3em;"><b>${k} ${percent}</b>%</code>`;
        } else {
            return // `<code>${k} n/a</code>`;
        }
    })), '  ');
    return `<code>${d[0].x}</code><br>${info}`;
}

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
