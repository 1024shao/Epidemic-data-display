import echarts from "echarts"

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    chinaMap(id,data){
                        this.chart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip:{
                                triggerOn:"click",
                                enterable:true,
                                formatter(data) {
                                    return "<a style='color:#fff' href='#/city/"+ data.name +"'><div><p>" + data.seriesName + ":" + data.name + "</p><p>现存确诊:" + data.value + "</p></div></a>"
                                }
                            },
                            series:[{
                                name:"省",
                                type:'map',
                                map:"china",
                                roam:false,
                                zoom:1.2,
                                label:{
                                    normal:{
                                        show:true,
                                        textStyle:{
                                            fontSize:8
                                        }
                                    }
                                },
                                itemStyle:{
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data:data
                                // data:[
                                //     {name:"北京",value:191,itemStyle:{ normal:{ areaColor:"#ff0000" } }},
                                //     {name:"内蒙古",value:191,itemStyle:{ normal:{ areaColor:"#ff0000" } }}
                                // ]
                            }]
                        }
                        this.chart.setOption(option)
                    },
                    provinceCity(id,city,data){
                        this.chart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip:{
                                triggerOn:"click",
                                enterable:true,
                                formatter(data) {
                                    return "<div><p>"+data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            series:[{
                                type:"map",
                                map:city, // 只能是中文
                                label:{
                                    normal:{
                                        show:true,
                                        textStyle:{
                                            fontSize:8
                                        }
                                    }
                                },
                                itemStyle:{
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                // data:[
                                //     {name:'呼和浩特市',value:2,itemStyle:{ normal:{ areaColor:"#ff0000" }}}
                                // ]
                                data:data
                            }]
                        }
                        this.chart.setOption(option)
                    }
                }
            }
        }
    })
}

export default install