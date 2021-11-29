function mainpaint(idName, graph) {

  // cribbed from: https://www.youtube.com/watch?v=y2-sgZh49dQ 
  // Andrew Chen https://www.youtube.com/channel/UCdGYHVptzujcjK67pOnrcGQ 
  var svg = d3.select(idName);
  var width = svg.attr("width");
  var height = svg.attr("height");

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 1);

  var simulation = d3
    .forceSimulation(graph.nodes)
    .force("link",
      d3
        .forceLink()
        .id(function(d) {
          return d.id;
        })
        .links(graph.links)
    )
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
      return 2;
    });

  var node = svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", function(d) {
      return d.group == 2 ? 10 : 5;
    })
    .attr("fill", function(d) {
      return d.group == 2 ? 'red' : 'black';
    })
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  /*
  node
    .append("title")
    .text(d => d.id); */

  node
    .append("svg:title")
      .text(function(d){return "profile:"+d.id;});

  node
    .on('mouseover', function(d) {
      /*  tooltip.transition()
          .duration(300)
          .style("opacity", 1); */
        tooltip.html(d.id)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 10) + "px")
          .style("background-color","white");
    })
    .on("mouseout", function() { /*
        tooltip.transition()
          .duration(500)
          .style("opacity", 1);
    */      })
    .on("click", function(d) {
    /*  d3.select(".tooltip")
        .style("opacity", 1) */
    });

  function color() {
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => scale(d.group);
  }

  function ticked() {
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

    node
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

function axes() {
    var data = [100, 150, 200, 250, 280, 300];
    var width = 400, height = 400;
    var xscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width - 100]);
    var yscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height/2, 0]);
    var x_axis = d3.axisBottom().scale(xscale);
    var y_axis = d3.axisLeft().scale(yscale);

    var svg = d3.select("svg");
    svg.append("g")
        .attr("transform", "translate(50, 10)")
        .call(y_axis);
    var xAxisTranslate = height/2 + 10;
    svg.append("g")
        .attr("transform", "translate(50, " + xAxisTranslate  +")")
        .call(x_axis)
}

function pies() {
    var svg = d3.select("svg");
    svg.append("g").call(d3.pie());
}

function lines() {
  // thanks to https://www.tutorialspoint.com/d3js/d3js_paths_api.htm 
  let data = [ [20, 20], [20, 130], [21, 130], [21, 20], [20, 20] ];
  const lineGenerator = d3.line();
  const pathString = lineGenerator(data);
  svg.append('path');
  d3.select('path').attr('d', pathString);
}

function pieCharts(idName, videos, titleId) {

  c3__config = {
    bindto: idName,
    size: {
        height: 500,
        width: 900
    },
    data: {
        type: 'donut',
    },
    donut: {
        expand: true,
        title: "Recommended Authors"
    },
    legend: { show: false }
  };
 
  // _.each(_.groupBy(videos, 'profile'), function(vlist, profileName) {
  const profileName = "all";
  const vlist = videos;
    c3__config.data.json =  _.countBy(vlist, 'recommendedAuthor');
    info = { profileName };
    info.title = "Variety " + _.sum(_.map(_.countBy(vlist, 'recommendedAuthor'), function(amount, name) { return amount; }));
    try {
      $(titleId).html('<code>'+JSON.stringify(info)+'</code>')
      piegraph = c3.generate(c3__config);
    } catch(error) {
      console.error("In generating pie graph", error.message);
    }
  // })
}

async function comparisonRenderer(exname) {

  const doturl = buildApiUrl('experiment', exname + '/dot', 2);
  // 'https://youtube.tracking.exposed/api/v2/experiment/'+exname+'/dot'; 
  const dotconn = await fetch(doturl);
  const dotformat = await dotconn.json();

  console.log(dotformat);

  const jsonurl = buildApiUrl('experiment', exname + '/json', 2);
  // 'https://youtube.tracking.exposed/api/v2/experiment/'+exname+'/json'; 
  const jsonconn = await fetch(jsonurl);
  const jsonfmt = await jsonconn.json();

  console.log(jsonfmt);

  if(!data.experiments[exname]) {
    $("#error").html(`The experiment <code>${exname}</code> is not present in the database`);
    return false;
  }

  $("#experinfo").text(`Rendering results for ${exname}`)
  for (videoinfo of dotformat) {
    console.log(videoinfo.videoName);
    const elem = $("#protoclone").clone();
    elem.attr("id", videoinfo.videoName);
    // dirty and ugly but this is part of the pain jquery gave us, 
    // in the quest for a full react replacement with VX!
    elem.html(elem.html().replace(/svg--/, 'svg--' + videoinfo.videoName));
    elem.html(elem.html().replace(/pie--/, 'pie--' + videoinfo.videoName));
    elem.html(elem.html().replace(/title--/, 'title--' + videoinfo.videoName));
    $("#fuffa").prepend(elem);
    // now should be accessible and we'll start to change params of the new div 
    $("#" + videoinfo.videoName + ' > .videoName').text(videoinfo.videoName);
    elem.removeAttr('hidden');
    await mainpaint('#svg--' + videoinfo.videoName, videoinfo.dotted);
    await pieCharts(
      '#pie--' + videoinfo.videoName,
      _.filter(jsonfmt, { videoName: videoinfo.videoName }),
      '#title--' + videoinfo.videoName,
    );
  }
  // axes();
}

function directiveHTMLli(directive, recent) {

  const jurl = buildApiUrl('experiment', directive.experimentId + "/json", 2);
  const curl = buildApiUrl('experiment', directive.experimentId + "/csv", 2);
  const homeid = `home-${directive.experimentId}`;
  const videoid = `video-${directive.experimentId}`;
  const searchid = `search-${directive.experimentId}`;
  const advid = `adv-${directive.experimentId}`;
  const experimentStats = (_.keys(recent).length) ? 
    `<code>${JSON.stringify(recent)}</code>`:
    `<span style="color:red">NO data</span>`;

  return `<li>
    <p>
      <a href="render/#${directive.experimentId}">
        <b>${directive.humanizedWhen}</b> 
      </a>
      <br>
      <small>${directive.experimentId}</small>
      <br>
      <b>urltag(s)</b>: ${_.map(directive.links, 'urltag')}
      <br>
      ${experimentStats}
    </p>
    <p>
      <span style="color:darkgreen"><b>DOWNLOAD data</b></span>
      <span id="${homeid}"><a href="${curl}/home">HOME</a> csv, </span>
      <span id="${videoid}"><a href="${curl}/video">VIDEO</a> csv, </span>
      <span id="${searchid}"><a href="${curl}/search">SEARCH</a> csv, </span>
      <span id="${advid}"><a href="${curl}/adv">ADV</a> csv, </span>
      — full <a href="${jurl}">JSON</a>.
    </p>
  </li>`;
}

function activeHTMLli(active) {
  return `<li><code>
      ${JSON.stringify(active)}
    </code></li>`;
}

async function reportAllTheExperiments(directiveType) {
  const listurl = buildApiUrl('guardoni', 'list/' + directiveType, 2);
  const response = await fetch(listurl);
  const data = await response.json();

  if(!data.configured.length) {
    $("#configured--list")
      .html('<h4><code>No experiment configured!</code></h4>');
  } else {
    const activeDetails = _.map(data.configured, function(directive) {
      const recent = _.get(data.recent, directive.experimentId, []);
      return directiveHTMLli(directive, recent);
    });
    $("#configured--list").html(activeDetails.join('\n'));
  }

  if(!data.active.length) {
    $("#active--list")
      .html('<h4><code>No experiment active at the moment.</code></h4>');
  } else {
    $("#active--list").html(_
      .map(data.active, activeHTMLli)
      .join('\n'));
  }

  /* if(data.overflow)
    $("#experiment--warning").text('Warning, reached maximunt amount of experiments considered'); */

  if(0 === (_.keys(data.recent).length))
    $("#experiment--warning").text('Unexpected error: zero experiments found');

}
