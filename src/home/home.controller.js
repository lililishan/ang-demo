// import 'echarts/dist/echarts.common'
import echarts from 'echarts'
export default class homeCtrl{
    constructor(){
        'ngInject'
        Object.assign(this,{})
        this.myCharts = echarts.init(document.getElementById('charts'))
        this.myCharts.setOption({
            title:{text: 'ECharts 入门'},
            tooltip:{},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
}