function getTopQuestions() {
  var data = [{
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      },
      {
          "question": "populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions populateTopQuestions",
          "answer": "https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript"
      }
  ];
  return data;
}

function populateTopQuestions(data) {
  $('#topQuestionsList').empty();

  var list = document.getElementById("topQuestionsList");
  var length = data.length;
  var i = 0;
  while(i < length) {
    var entry = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute("target", "_blank");
    link.setAttribute("href",  data[i]['answer']);
    link.innerHTML = data[i]['question'];
    entry.appendChild(link);
    list.appendChild(entry);
    i++;
  }
}

function drawPieChart(data) {
    console.log(d3.select("#topicspie"));
	var svg = d3.select("#topicspie"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	
	

    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) {
            return d.population;
        });

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);


    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("margin", "auto")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) {
            return color(d.data.age);
        })
        .on("click", function(d) {
            var data = getTopQuestions();
            populateTopQuestions(data);
            createBubbleChart('workplace');
            createBubbleChart('jobtype');
        });

    arc.append("text")
        .attr("transform", function(d) {
            return "translate(" + label.centroid(d) + ")";
        })
        .attr("dy", "0.35em")
        .text(function(d) {
            return d.data.age;
        })
        .style('font-size', "20px");
}
