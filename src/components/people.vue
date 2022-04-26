<template>
  <div class="box">
    <div class="box-left">
      <div class="yiben">
          <div ref="one"></div>
      </div>
      <div class="benke">
          <div ref="two"></div>
      </div>
    </div>
    <div class="box-right">
      <div ref="three"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted(){
    this.getyiben()
    this.getbingtu()
    this.getbenke()
  },
  methods:{
      getbenke(){
          var myChart = echarts.init(this.$refs.two);
	var option = {
        legend:{
            right:'3%'
        },
        title:{
            text:'历年本科人数变化'
        },
        grid: {
	    	show:false,
			left:'3%',
			right:'8%%',
			bottom:'0%',
			containLabel:true,
	    },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type: 'shadow'
            }
        },
        xAxis:{
	        type: 'category',
	        data: ['2017年','2018年','2019年','2020年','2021年'],
	    },
	    yAxis:[
	        {
                type:'value',
                name:'录取总人数',
                min:150000,
            },
            {
                type:'value',
                name:'录取率',
                min:24,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
	    ],
        series:[
            {
                name:'本科录取总人数',
                type:'bar',
                data:[160852,165840,166864,171036,176326]
            },
            {
                name:'本科上线率',
                type:'line',
                yAxisIndex:1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' %';
                    }
                },
                data:[27.6,26.75,25.67,25.52,25.19]
            }
        ]
    };
	myChart.setOption(option);
      },

      getbingtu(){
        var myChart = echarts.init(this.$refs.three);
	var option = {
        title:[
            {
                text:'历年各分段人数占比',
                left:'36%',
                top:'5%'
            },
            {
                subtext: '2017年各分段人数对比',
                left: '13%',
                top: '38%',
                textAlign: 'center'
            },
            {
                subtext: '2018年各分段人数对比',
                left: '43%',
                top: '38%',
                textAlign: 'center'
            },
            {
                subtext: '2019年各分段人数对比',
                left: '73%',
                top: '38%',
                textAlign: 'center'
            },
            {
                subtext: '2020年各分段人数对比',
                left: '23%',
                top: '78%',
                textAlign: 'center'
            },
            {
                subtext: '2021年各分段人数对比',
                left: '57%',
                top: '78%',
                textAlign: 'center'
            },
        ],
        tooltip: {
            trigger: 'item'
        },
        series:[
            {
                name:'2017年个分段人数对比',
                type:'pie',
                radius:'20%',
                center:['15%','25%'],
                data:[
                    {name:'一本',value:74116},
                    {name:'二本',value:86736},
                    {name:'非本科',value:421945}
                ],
                label:{
                    alignTo:'labelLine'
                },
            },
            {
                name:'2018年个分段人数对比',
                type:'pie',
                radius:'20%',
                center:['45%','25%'],
                data:[
                    {name:'一本',value:75149},
                    {name:'二本',value:90691},
                    {name:'非本科',value:454122}
                ],
                label:{
                    alignTo:'labelLine'
                },
            },
            {
                name:'2019年个分段人数对比',
                type:'pie',
                radius:'20%',
                center:['75%','25%'],
                data:[
                    {name:'一本',value:77749},
                    {name:'二本',value:89115},
                    {name:'非本科',value:483171}
                ],
                label:{
                    alignTo:'labelLine'
                },
            },
            {
                name:'2020年个分段人数对比',
                type:'pie',
                radius:'20%',
                center:['25%','65%'],
                data:[
                    {name:'一本',value:71982},
                    {name:'二本',value:99054},
                    {name:'非本科',value:432904}
                ],
                label:{
                    alignTo:'labelLine'
                },
            },
            {
                name:'2021年个分段人数对比',
                type:'pie',
                radius:'20%',
                center:['60%','65%'],
                data:[
                    {name:'一本',value:82994},
                    {name:'二本',value:93332},
                    {name:'非本科',value:523658}
                ],
                label:{
                    alignTo:'labelLine'
                },
            },
        ]
    };
	myChart.setOption(option);
      },
      getyiben(){
        var myChart = echarts.init(this.$refs.one);
	var option = {
        legend:{
            right:'3%'
        },
        title:{
            text:'历年一本人数变化'
        },
        grid: {
	    	show:false,
			left:'3%',
			right:'8%%',
			bottom:'0%',
			containLabel:true,
	    },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type: 'shadow'
            }
        },
        xAxis:{
	        type: 'category',
	        data: ['2017年','2018年','2019年','2020年','2021年'],
	    },
	    yAxis:[
	        {
                type:'value',
                name:'录取总人数',
                min:60000,
            },
            {
                type:'value',
                name:'录取率',
                min:10,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
	    ],
        series:[
            {
                name:'一本录取总人数',
                type:'bar',
                data:[74116,75149,77749,71982,82994]
            },
            {
                name:'一本上线率',
                type:'line',
                yAxisIndex:1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' %';
                    }
                },
                data:[12.72,12.12,11.96,10.74,11.86]
            }
        ]
    };
	myChart.setOption(option);
      }
  }

}
</script>

<style lang="less" scoped>
.box{
  display: flex;
  height: 700px;
}
.box-left{
  flex: 3;
  // background-color: pink;
}
.box-right{
  flex: 5;
  // background-color: sandybrown;
}
.yiben>div{
  margin:25px 0;
  height: 300px;
  width: 100%;
}
.box-right>div{
  margin-left: 30px ;
  height: 700px;
  width: 100%;
}
.benke>div{
  margin:25px 0;
  padding-top:25px ;
  height: 300px;
  width: 100%;
}
</style>