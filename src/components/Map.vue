<template>
  <div class="box">
    <h1>{{float}}</h1>
    <div ref="map_1" class=" map" ></div>
    <div ref="xuri" class="xuri"></div>
  </div>
</template>

<script>
// import $ from 'jquery'
import * as echarts from 'echarts';
import JSON from '@/assets/json/sichuan.json'
export default {
  data(){
    return{
      float:0,
      geoCoordMap:{
        '四川大学':[104.083992,30.630142], 
        '西南交通大学':[103.993214,30.770399], 
        '电子科技大学':[103.931633,30.749125],            
        '西南石油大学':[104.190908,30.832711],            
        '成都理工大学':[121.561335,31.299252],            
        '西南科技大学':[120.070336,29.296737],            
        '成都信息工程大学':[104.311922,30.612354],            
        '四川轻化工大学':[104.677185,28.811278],            
        '西华大学':[104.074288,30.640677],            
        '中国民用航空飞行学院':[103.847126,30.4259],            
        '四川农业大学':[103.826631,30.416957],            
        '西昌学院':[102.218624,27.95247],            
        '西南医科大学':[105.423056,28.910241],            
        '成都中医药大学':[104.073741,30.632322],            
        '川北医学院':[106.136725,30.783284],            
        '四川师范大学':[104.128691,30.619258],            
        '西华师范大学':[106.095012,30.80617],            
        '绵阳师范学院':[104.605137,31.459785],            
        '内江师范学院':[105.052917,29.595739],            
        '宜宾学院':[116.413384,39.910925],            
        '四川文理学院':[107.475763,31.23931],            
        '阿坝师范学院':[103.423101,30.930176],            
        '乐山师范学院':[103.7489,29.55899],            
        '西南财经大学':[104.020544,30.674066],            
        '成都体育学院':[104.049992,30.652713],            
        '四川音乐学院':[104.085454,30.643685],            
        '西南民族大学':[104.020724,30.626049],            
        '成都大学':[104.196613,30.656051],            
        '成都工业学院':[104.055471,30.683603],            
        '攀枝花学院':[101.732177,26.573981],            
        '四川旅游学院':[104.285414,30.586842],            
        '四川民族学院':[102.185785,30.116404],            
        '四川警察学院':[103.910241,30.531533],            
        '成都东软学院':[103.60298,30.894435],            
        '电子科技大学成都学院':[103.971765,30.734216],            
        '成都理工大学工程技术学院':[103.738152,29.56574],            
        '四川传媒学院':[103.503856,30.180077],            
        '成都文理学院':[104.470183,30.851321],            
        '四川工商学院':[103.992488,30.825562],            
        '四川外国语大学成都学院':[104.692251,28.82054],            
        '成都医学院':[104.206769,30.827302],            
        '四川工业科技学院':[104.501837,31.329214],            
        '成都锦城学院':[103.956421,30.731225],            
        '西南财经大学天府学院':[103.801352,30.693225],            
        '四川大学锦江学院':[104.089562,30.661904],            
        '四川文化艺术学院':[104.766691,31.427396],            
        '成都师范学院':[103.835822,30.683458],            
        '四川电影电视学院':[103.604672,30.518677],
            },
      data1 :[
                {name: '四川大学', value: 1},
                {name: '电子科技大学', value: 1}
        ]
    }
  },
updated(){
  this.getmapdata()
  console.log('执行了updata')
},
mounted(){
    this.getmapdata()
    // console.log(this.$refs.map_1)
    this.getxuri()
  },
  methods:{
        getxuri(){
          var myChart = echarts.init(this.$refs.xuri);
          myChart.on('click',params=> {
    // 控制台打印数据的名称
      if(params.treePathInfo.length>2){
        this.data1=params.data.children
        this.float++
      }
      // console.log(this.data1)
            });
	const data = [
		{
			name:'一本',
			itemStyle: {
			      color:'#ff8053'
			    },
			children:[
				{
					name:'985',
					itemStyle: {
					      color:'#ff8053'
					    },
					children:[
						{name:'四川大学',value:1},{name:'电子科技大学',value:1}
					]
				},
				{
					name:'211',
					itemStyle: {
					      color:'#ff8053'
					    },
					value:3,
					children:[
						{name:'西南财经大学',value:1},{name:'西南交通大学',value:1},{name:'四川农业大学',value:1}
					]
				},
				{
					name:'普通一本',
					itemStyle: {
					      color:'#ff8053'
					    },
					children:[
						{name:'成都理工大学',value:1},{name:'西南石油大学',value:1},{name:'四川师范大学',value:1},
						{name:'西南民族大学',value:1},{name:'成都信息工程大学',value:1},{name:'成都大学',value:1},
						{name:'西南医科大学',value:1},{name:'攀枝花学院',value:1},{name:'西华大学',value:1},
						{name:'西华师范大学',value:1},{name:'成都中医药大学',value:1},{name:'成都东软学院',value:1},
						{name:'西南科技大学',value:1},{name:'四川轻化工大学',value:1},{name:'四川音乐大学',value:1},
					]
				},
			]
		},
		{
			name:'二本',
			itemStyle: {
			      color:'#ea5151'
			    },
			children:[
				{
					name:'公办',
					itemStyle: {
					      color:'#ea5151'
					    },
					children:[
						{name:'成都医学院',value:1},{name:'川北医学院',value:1},{name:'成都体育学院',value:1},
						{name:'中国民用航空飞行学院',value:1},{name:'四川警察学院',value:1},{name:'成都医学院',value:1},
						{name:'成都工业学院',value:1},{name:'成都师范学院',value:1},{name:'绵阳师范学院',value:1},
						{name:'内江师范学院',value:1},{name:'乐山师范学院',value:1},{name:'宜宾学院',value:1},
						{name:'四川文理学院',value:1},{name:'四川旅游学院',value:1},{name:'西昌学院',value:1},
						{name:'阿坝师范学院',value:1},{name:'四川民族学院',value:1}
					]
				},
				{
					name:'民办',
					itemStyle: {
					      color:'#ea5151'
					    },
					children:[
						{name:'成都文理学院',value:1},{name:'四川传媒学院',value:1},{name:'电子科技大学成都学院',value:1},
						{name:'四川外国语大学成都学院',value:1},{name:'四川大学锦江学院',value:1},{name:'四川工商学院',value:1},
						{name:'成都艺术职业大学',value:1},{name:'西南交通大学希望学院',value:1},{name:'四川工业科技学院',value:1},
						{name:'四川文化艺术学院',value:1},{name:'四川电影电视学院',value:1},{name:'西南财经大学天府学院',value:1},
						{name:'成都理工大学工程技术学院',value:1},{name:'成都银杏酒店管理学院',value:1},{name:'绵阳城市学院',value:1},
						{name:'吉利学院',value:1}
					]
				}
			]
		}
	];
	var option = {
    title:{
      text:'四川本科高校分类',
      left:'center',
      top:'5%'
    },
		series:[
			{
				type:'sunburst',
				center:['50%','50%'],
				data:data,
				sort:undefined,
				label:{
					color:'#555',
				},
				itemStyle:{
					borderColor:'#fff',
					borderWidth:2
				},
				levels:[
					{
						itemStyle: {
			                color: '#ffae57'
			            },
					},
					{
						r0:0,
						r:50
					},
					{
						r0:50,
						r:120
					},
					{
						r0:120,
						r:125,
						label: {
							position: 'outside',
							color:'#FFAE57'
						},
					}
				]
			}
		]		
	};
	myChart.setOption(option);
        },
        convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        console.log(res)
        return res;
    },
    
    getmapdata(){
      // this.$http.get('@/assets/json/sichuan.json').then(res=>{
      //   console.log(res)
      // })
            var lop=this.convertData(this.data1)
            var myChart = echarts.init(this.$refs.map_1);
            echarts.registerMap('sichuanMap',JSON)
              var option = {
                  title :{
                      text:'四川本科高校地理位置分布',
                      textStyle:{
                          color:'#000'
                      },
                      left:'center',
                      top:'5%'
                  },
                  geo:{
                      type:'map',
                      map:'sichuanMap',
                      roam:true,
                      label: {
                              emphasis: {
                                  show: true
                              }
                          },
                          roam: true,//禁止其放大缩小
                          itemStyle: {
                              normal: {
                                  areaColor: '#ff8053 ',
                                  borderColor: '#263844'
                              },
                              emphasis: {
                                  areaColor: '#FB9E13  '
                              }
                          }
                  },
                  series : [
                      //  {
                      //     data:school,
                      //     geoIndex:0,
                      //     type:'map',
                      //  },
                  {
                      name: '大学',
                      type: 'scatter',
                      symbolSize:25,
                      symbol:'pin',
                      coordinateSystem: 'geo',
                      data:lop,
                      // data:{
                      //   itemStyle:{color:'blue'}  
                      // },
                      // symbolSize: '800px',
                      label: {
                          normal: {
                              formatter: '{b}',
                              position: 'left',
                              show: false
                          },
                          emphasis: {
                              show: true
                          }
                      },
                      itemStyle: {
                          normal: {
                              color: '#007bff',

                          }
                      }
                  }],
                  // visualMap:{
                  //         min:0,
                  //         max:100,
                  //         inRange:{
                  //             color:['white','#d45136']
                  //         }
                  //      },
              }
      myChart.setOption(option)
    }
  }
}
</script>


<style lang="less" scoped>
.box{
  height: 700px;
  display: flex;
}
.box>div{
  border: 1px solid #009bff;
}
.map{
   flex: 1;
}
.xuri{
  flex: 1;
}
h1{
  display: none;
}
</style>