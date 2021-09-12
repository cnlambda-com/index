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
    var re = params.data.category+'<br>'+ params.name + ":<br>" ;
    var value = params.value;
    var company = params.data.company;
    var company_names = '';
    for (let index = 0; index < company.length; index++) {
        company_names += '<a href="';
        company_names += company[index].company_url;
        company_names += '" style="color: black">';
        company_names += company[index].company_name;
        company_names += '</a>' ;
        company_names += ' ';
        if(index<company.length)company_names += '<br>';
    }
    return re + company_names;
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
        color = 'orange'
        }
        if (value[2] >= 100) {
        color = 'red'
        }
        return color;
    }
    },
    data: [
    {
        name: '上海',
        value: [121.47, 31.23, 30],
        category:'工业界',
        company:[
            {
                company_name:'a',
                company_url:'../about/index.html'
            },
            {
                company_name:'b',
                company_url:'../about/index.html'
            },
        ],
    },
    {
        name: '北京',
        value: [116.40, 39.90, 60],
        category:'学术界',
        company:[
            {
                company_name:'b',
                company_url:'../about/index.html'
            },
        ]
    },
    {
        name: '深圳',
        value: [121.47, 31.23, 30],
        category:'学术界',
        company:[
            {
                company_name:'南方科技大学',
                company_url:'../about/index.html'
            },
            {
                company_name:'b',
                company_url:'../about/index.html'
            },
        ],
    },
    ]
}]
}

worldMap.setOption(option);