function mainpaint(idName, graph) {

  // cribbed from: https://www.youtube.com/watch?v=y2-sgZh49dQ 
  // Andrew Chen https://www.youtube.com/channel/UCdGYHVptzujcjK67pOnrcGQ 
  var svg = d3.select(idName);
  var width = svg.attr("width");
  var height = svg.attr("height");

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

async function experimentGradualRender() {

  const exname = window.location.hash.substr(1);
  const doturl = buildApiUrl('experiment', exname + '/dot', 2);
  // 'https://youtube.tracking.exposed/api/v2/experiment/meto8/dot'; 
  const dotconn = await fetch(doturl);
  const dotformat = await dotconn.json();
  const jsonurl = buildApiUrl('experiment', exname + '/json', 2);
  // 'https://youtube.tracking.exposed/api/v2/experiment/meto8/json'; 
  const jsonconn = await fetch(jsonurl);
  const jsonfmt = await jsonconn.json();
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

function liElements(amount, name) {
  return `<li><a href="/experiment/#${name}"
    onclick="window.location.reload()">${name}</a> ${amount} sessions —
    <a href="/api/v2/experiment/${name}/csv">CSV</a>, 
    <a href="/api/v2/experiment/${name}/json">JSON</a>.
    </li>`
}

async function reportAllTheExperiments() {
  const listurl = buildApiUrl('guardoni', 'list', 2);
  const jsonconn = await fetch(listurl);
  const jsonfmt = await jsonconn.json();
  const exname = window.location.hash.substr(1);

  $("#experiment--list").html(_.map(jsonfmt.experiments, liElements).join('\n'))
  if(jsonfmt.overflow)
    $("#experiment--warning").text('Warning, reached maximunt amount of experiments considered');

  console.log(_.keys(jsonfmt.experiments).length)
  if(0 === (_.keys(jsonfmt.experiments).length))
    $("#experiment--warning").text('Unexpected error: zero experiments found');

  if(!exname.length) {
    $("#error").html(`Experiment name is missing in the request`);
    return false;
  }
  if(!jsonfmt.experiments[exname]) {
    $("#error").html(`The experiment <code>${exname}</code> is not present in the database`);
    return false;
  }

  $("#experinfo").text(`Rendering results for ${exname}`)
  // this 'true' would allow the page to query results
  return true;
}
