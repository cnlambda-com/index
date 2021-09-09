function addScript(url){
	document.write("<script language=javascript src="+url+"></script>");
}
var world = document.getElementById('world');
  var worldMap = echarts.init(world);

  var option = {
    title: {
      //text: '世界地图',
      left: 'center'
    },

    tooltip: {
      alwaysShowContent: true,
      enterable: true,
      formatter: function (params) {
        var value = params.value;
        var a = '<br> <a href="http://www.baidu.com" style="color: red">查看详情</a>'
        return params.name ;
        //return params.name + ': ' + value[2] + a;
      }
    },

    geo: {
      map: 'world',
      silent: true,
      itemStyle: {
        color: '#dddddd',
        borderColor: '#ffffff'
      },
      zoom: 1,
    },

    series: [{
      type: 'effectScatter',
      coordinateSystem: 'geo',
      itemStyle: {
        color: function (params) {
          var color = '';
          var value = params.value;
          if (value[2] < 50) {
            color = 'green'
          }
          if (value[2] >= 50 && value[2] < 100) {
            color = 'yellow'
          }
          if (value[2] >= 100) {
            color = 'red'
          }
          return color;
        }
      },
      data: [{
          name: 'Shanghai',
          value: [121.47, 31.23, 30]
        },
        {
          name: 'Beijing',
          value: [116.40, 39.90, 30]
        },
        {
          name: 'Chongqing',
          value: [106.55, 29.56, 32]
        }
      ]
    }]
  }

  worldMap.setOption(option);