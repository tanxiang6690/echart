'use strict';

$(function() {

    setTime();

    initBanner();

    // 折线图调用
    setEchartBar();

    // 饼图调用
    setEchartPie();
})

//配置默认的时间
function setTime(argument) {
    var defaultData = new Date();
    var defaultYear = defaultData.getFullYear(),
        defaultMonth = defaultData.getMonth() + 1,
        defaultDay = defaultData.getDate();
    var dataVisibility = $(".data-visibility");
    dataVisibility.html(defaultMonth + '/' + defaultYear);

    var data = $('.data');
    data.on('change', function() {
        var _that = $(this).val();
        dataVisibility.text(_that.split('-')[1] + '/' + _that.split('-')[0]);
    });
}

// banner实例化
function initBanner() {
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 5,
        onTransitionEnd: function(swiper) {
            var idx = swiper.snapIndex;
            $('.list').eq(idx).fadeIn().siblings('.list').hide();
        }
    })
}

// 配置折线图
function setEchartBar() {
    // 折线图配置
    var data = [2220, 1682, 2791, 3000, 4090];
    var option = {
        title: {
            text: '近5月消费额',
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        grid: {
            left: -20,
            top: 0,
            bottom: 30,
            right: -20,
            containLabel: false
        },
        xAxis: {
            data: ['8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            ayisLine: {
                show: false
            }
        },
        yAxis: {
            axisLabel: {
                show: false
            },
            ayisLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'line',
            smooth: false,
            symbolSize: 7,
            data: data,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#fff',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: '#fff',
                    opacity: 0.2
                }
            }

        }]
    };
    var myChart = echarts.init(document.getElementById('main2'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

// 配置饼图
function setEchartPie() {
    // 饼图配置 
    var data = [{
        value: 335,
        name: '食品保健'
    }, {
        value: 310,
        name: '服装内衣'
    }, {
        value: 234,
        name: '鞋包配饰'
    }, {
        value: 135,
        name: '护肤彩妆'
    }, {
        value: 253,
        name: '母婴用品'
    }, {
        value: 560,
        name: '家用电器'
    }, {
        value: 25,
        name: '户外运动'
    }, {
        value: 305,
        name: '电脑办公'
    }, {
        value: 850,
        name: '图书音像'
    }, {
        value: 60,
        name: '手机数码'
    }];
    var option = {
        color: ['#f23e5c', '#ff7043', '#f9d12a', '#00e676', '#00e5d9', '#29daed', '#2f70fc', '#7e50ff', '#d95cea', '#ff4081'],
        /*
        legend: {
            formatter: function(name) {
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value + oa[6].value + oa[7].value + oa[8].value + oa[9].value;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return name + ' ' + oa[i].value + ' ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            }
        },
        */
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            data: data,
            radius: ['10%', '45%'],
            label: {
                normal: {
                    textStyle: {
                        color: '#666',
                        fontSize: 10
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}:{d}%'
                    }
                }
            }
        }]
    };
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
