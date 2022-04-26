<template>
<div class="box">
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">fighting</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入学校名称或分数" v-model="inputdata" >
        </div>
        <button type="submit" class="btn btn-default" @click.prevent="putdata">查询</button>
      </form>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  <table class="table table-bordered table_box table-striped ">
  <thead>
    <tr>
      <th>学校名称</th>
      <th>2021年(最低分数线/位次)</th>
      <th>2020年(最低分数线/位次)</th>
      <th>2019年(最低分数线/位次)</th>
      <th>2018年(最低分数线/位次)</th>
      <th>2017年(最低分数线/位次)</th>
    </tr>
  </thead>
    <Tbbus v-if="float" :isdata="list1"></Tbbus>
    
    <!-- <Tbdata v-for="i in list1" :key="i.id" :listdata="list1"></Tbdata> -->
</table>
<div class="nodata" v-if="!float"><div><span>未找到相关内容！！或没有学校推荐</span></div></div>
</nav>

</div>
</template>

<script>
import '../../node_modules/bootstrap3/dist/css/bootstrap.css'
import Tbbus from '@/view/Tbbus.vue'
export default {
  data(){
    return {
     list: [ 
{id:1,school_name:'电子科技大学',school_score:{score2021:{minscore:652,precedence:3189},score2020:{minscore:659,precedence:3119},score2019:{minscore:669,precedence:3485},score2018:{minscore:650,precedence:3864},score2017:{minscore:627,precedence:4563}}},
{id:2,school_name:'四川大学',school_score:{score2021:{minscore:637,precedence:6204},score2020:{minscore:638,precedence:8492},score2019:{minscore:649,precedence:8936},score2018:{minscore:635,precedence:8435},score2017:{minscore:608,precedence:8759}}},
{id:3,school_name:'西南财经大学',school_score:{score2021:{minscore:618,precedence:12291},score2020:{minscore:629,precedence:11794},score2019:{minscore:644,precedence:10697},score2018:{minscore:628,precedence:11354},score2017:{minscore:590,precedence:14940}}},
{id:4,school_name:'西南交通大学',school_score:{score2021:{minscore:610,precedence:15628},score2020:{minscore:621,precedence:15215},score2019:{minscore:634,precedence:14709},score2018:{minscore:621,precedence:14726},score2017:{minscore:595,precedence:12989}}},
{id:5,school_name:'成都理工大学',school_score:{score2021:{minscore:578,precedence:33876},score2020:{minscore:588,precedence:33587},score2019:{minscore:590,precedence:40632},score2018:{minscore:589,precedence:36082},score2017:{minscore:552,precedence:36193}}},
{id:6,school_name:'四川农业大学',school_score:{score2021:{minscore:567,precedence:41781},score2020:{minscore:578,precedence:40375},score2019:{minscore:589,precedence:41369},score2018:{minscore:584,precedence:40095},score2017:{minscore:541,precedence:44758}}},
{id:7,school_name:'西南石油大学',school_score:{score2021:{minscore:567,precedence:41154},score2020:{minscore:573,precedence:43984},score2019:{minscore:579,precedence:49080},score2018:{minscore:573,precedence:49353},score2017:{minscore:531,precedence:53556}}},
{id:8,school_name:'四川师范大学',school_score:{score2021:{minscore:560,precedence:47298},score2020:{minscore:567,precedence:48461},score2019:{minscore:575,precedence:52355},score2018:{minscore:572,precedence:50273},score2017:{minscore:519,precedence:65497}}},
{id:9,school_name:'西南民族大学',school_score:{score2021:{minscore:556,precedence:50606},score2020:{minscore:563,precedence:51609},score2019:{minscore:574,precedence:53194},score2018:{minscore:572,precedence:50273},score2017:{minscore:532,precedence:52601}}},
{id:10,school_name:'成都医学院',school_score:{score2021:{minscore:551,precedence:54834},score2020:{minscore:559,precedence:54750},score2019:{minscore:571,precedence:55674},score2018:{minscore:569,precedence:52972},score2017:{minscore:529,precedence:55433}}},
{id:11,school_name:'川北医学院',school_score:{score2021:{minscore:549,precedence:56555},score2020:{minscore:551,precedence:46158},score2019:{minscore:580,precedence:48280},score2018:{minscore:576,precedence:46754},score2017:{minscore:533,precedence:51637}}},
{id:12,school_name:'成都信息工程大学',school_score:{score2021:{minscore:543,precedence:61894},score2020:{minscore:554,precedence:58849},score2019:{minscore:567,precedence:59189},score2018:{minscore:565,precedence:56705},score2017:{minscore:525,precedence:59320}}},
{id:13,school_name:'成都大学',school_score:{score2021:{minscore:542,precedence:62819},score2020:{minscore:545,precedence:66573},score2019:{minscore:557,precedence:68262},score2018:{minscore:553,precedence:68166},score2017:{minscore:515,precedence:69644}}},
{id:14,school_name:'西南医科大学',school_score:{score2021:{minscore:537,precedence:67404},score2020:{minscore:579,precedence:39692},score2019:{minscore:589,precedence:41369},score2018:{minscore:590,precedence:35281},score2017:{minscore:528,precedence:56447}}},
{id:15,school_name:'攀枝花学院',school_score:{score2021:{minscore:537,precedence:67404},score2020:{minscore:543,precedence:68296},score2019:{minscore:557,precedence:68262},score2018:{minscore:553,precedence:68166},score2017:{minscore:473,precedence:119307}}},
{id:16,school_name:'西华大学',school_score:{score2021:{minscore:536,precedence:68327},score2020:{minscore:541,precedence:70160},score2019:{minscore:557,precedence:68262},score2018:{minscore:557,precedence:64159},score2017:{minscore:520,precedence:64431}}},
{id:17,school_name:'成都体育学院',school_score:{score2021:{minscore:536,precedence:68327},score2020:{minscore:539,precedence:71982},score2019:{minscore:553,precedence:72008},score2018:{minscore:551,precedence:70134},score2017:{minscore:514,precedence:70751}}},
{id:18,school_name:'西华师范大学',school_score:{score2021:{minscore:532,precedence:72135},score2020:{minscore:537,precedence:73865},score2019:{minscore:554,precedence:71042},score2018:{minscore:554,precedence:67177},score2017:{minscore:518,precedence:66570}}},
{id:19,school_name:'成都中医药大学',school_score:{score2021:{minscore:530,precedence:74118},score2020:{minscore:555,precedence:58048},score2019:{minscore:569,precedence:57431},score2018:{minscore:575,precedence:47624},score2017:{minscore:529,precedence:55433}}},
{id:20,school_name:'西南科技大学',school_score:{score2021:{minscore:528,precedence:76005},score2020:{minscore:537,precedence:73865},score2019:{minscore:554,precedence:71042},score2018:{minscore:555,precedence:66189},score2017:{minscore:519,precedence:65497}}},
{id:21,school_name:'四川轻化工大学',school_score:{score2021:{minscore:524,precedence:78897},score2020:{minscore:529,precedence:81375},score2019:{minscore:547,precedence:77749},score2018:{minscore:548,precedence:73104},score2017:{minscore:513,precedence:71904}}},
{id:22,school_name:'中国民用航空飞行学院',school_score:{score2021:{minscore:521,precedence:82994},score2020:{minscore:564,precedence:50820},score2019:{minscore:598,precedence:35015},score2018:{minscore:597,precedence:29998},score2017:{minscore:565,precedence:27515}}},
{id:23,school_name:'成都锦城学院',school_score:{score2021:{minscore:521,precedence:82994},score2020:{minscore:529,precedence:81375},score2019:{minscore:550,precedence:74796},score2018:{minscore:546,precedence:75146},score2017:{minscore:512,precedence:72982}}},
{id:24,school_name:'成都东软学院',school_score:{score2021:{minscore:521,precedence:82994},score2020:{minscore:529,precedence:81375},score2019:{minscore:547,precedence:77749},score2018:{minscore:546,precedence:75149},score2017:{minscore:511,precedence:74116}}},
{id:25,school_name:'四川警察学院',school_score:{score2021:{minscore:521,precedence:82994},score2020:{minscore:524,precedence:86175},score2019:{minscore:536,precedence:88731},score2018:{minscore:535,precedence:86405},score2017:{minscore:503,precedence:83115}}},
{id:26,school_name:'成都师范学院',school_score:{score2021:{minscore:513,precedence:91059},score2020:{minscore:518,precedence:92111},score2019:{minscore:530,precedence:94921},score2018:{minscore:529,precedence:92709},score2017:{minscore:493,precedence:94938}}},
{id:27,school_name:'四川音乐学院',school_score:{score2021:{minscore:502,precedence:102564},score2020:{minscore:503,precedence:107655},score2019:{minscore:518,precedence:107178},score2018:{minscore:507,precedence:116384},score2017:{minscore:469,precedence:124199}}},
{id:28,school_name:'绵阳师范学院',school_score:{score2021:{minscore:500,precedence:104717},score2020:{minscore:504,precedence:106579},score2019:{minscore:520,precedence:105210},score2018:{minscore:521,precedence:101272},score2017:{minscore:487,precedence:102091}}},
{id:29,school_name:'成都工业学院',school_score:{score2021:{minscore:499,precedence:105741},score2020:{minscore:510,precedence:100329},score2019:{minscore:522,precedence:103123},score2018:{minscore:521,precedence:101272},score2017:{minscore:487,precedence:102091}}},
{id:30,school_name:'内江师范学院',school_score:{score2021:{minscore:495,precedence:110029},score2020:{minscore:501,precedence:109733},score2019:{minscore:516,precedence:109351},score2018:{minscore:512,precedence:111013},score2017:{minscore:482,precedence:108284}}},
{id:31,school_name:'乐山师范学院',school_score:{score2021:{minscore:491,precedence:114276},score2020:{minscore:499,precedence:111817},score2019:{minscore:522,precedence:103123},score2018:{minscore:516,precedence:106725},score2017:{minscore:486,precedence:103273}}},
{id:32,school_name:'宜宾学院',school_score:{score2021:{minscore:487,precedence:118617},score2020:{minscore:496,precedence:115094},score2019:{minscore:510,precedence:115710},score2018:{minscore:509,precedence:114254},score2017:{minscore:478,precedence:113105}}},
{id:33,school_name:'四川文理学院',school_score:{score2021:{minscore:486,precedence:119673},score2020:{minscore:494,precedence:117284},score2019:{minscore:508,precedence:117818},score2018:{minscore:509,precedence:114254},score2017:{minscore:478,precedence:113105}}},
{id:34,school_name:'四川旅游学院',school_score:{score2021:{minscore:481,precedence:125051},score2020:{minscore:489,precedence:122749},score2019:{minscore:504,precedence:122051},score2018:{minscore:503,precedence:120838},score2017:{minscore:474,precedence:118097}}},
{id:35,school_name:'西昌学院',school_score:{score2021:{minscore:478,precedence:128370},score2020:{minscore:486,precedence:125837},score2019:{minscore:502,precedence:124109},score2018:{minscore:500,precedence:124028},score2017:{minscore:473,precedence:119307}}},
{id:36,school_name:'阿坝师范学院',school_score:{score2021:{minscore:478,precedence:128370},score2020:{minscore:486,precedence:125837},score2019:{minscore:501,precedence:125129},score2018:{minscore:496,precedence:128316},score2017:{minscore:470,precedence:122958}}},
{id:37,school_name:'四川民族学院',school_score:{score2021:{minscore:476,precedence:130507},score2020:{minscore:484,precedence:128052},score2019:{minscore:499,precedence:127179},score2018:{minscore:495,precedence:129390},score2017:{minscore:468,precedence:125402}}},
{id:38,school_name:'成都文理学院',school_score:{score2021:{minscore:461,precedence:146612},score2020:{minscore:472,precedence:141188},score2019:{minscore:488,precedence:138681},score2018:{minscore:483,precedence:142014},score2017:{minscore:458,precedence:136953}}},
{id:39,school_name:'四川传媒学院',school_score:{score2021:{minscore:458,precedence:149714},score2020:{minscore:466,precedence:147641},score2019:{minscore:480,precedence:146895},score2018:{minscore:474,precedence:151105},score2017:{minscore:451,precedence:145031}}},
{id:40,school_name:'电子科技大学成都学院',school_score:{score2021:{minscore:457,precedence:150746},score2020:{minscore:476,precedence:136920},score2019:{minscore:496,precedence:130327},score2018:{minscore:495,precedence:129390},score2017:{minscore:466,precedence:127821}}},
{id:41,school_name:'四川外国语大学成都学院',school_score:{score2021:{minscore:451,precedence:156754},score2020:{minscore:464,precedence:149820},score2019:{minscore:484,precedence:142793},score2018:{minscore:481,precedence:144061},score2017:{minscore:461,precedence:133613}}},
{id:42,school_name:'四川大学锦江学院',school_score:{score2021:{minscore:450,precedence:157739},score2020:{minscore:473,precedence:140099},score2019:{minscore:492,precedence:134474},score2018:{minscore:488,precedence:136824},score2017:{minscore:464,precedence:130188}}},
{id:43,school_name:'四川工商学院',school_score:{score2021:{minscore:448,precedence:159694},score2020:{minscore:468,precedence:145455},score2019:{minscore:478,precedence:148836},score2018:{minscore:479,precedence:146069},score2017:{minscore:456,precedence:139282}}},
{id:44,school_name:'成都艺术职业大学',school_score:{score2021:{minscore:443,precedence:164456},score2020:{minscore:452,precedence:162175},score2019:{minscore:459,precedence:166864},score2018:{minscore:180,precedence:263023},score2017:{minscore:180,precedence:166920}}},
{id:45,school_name:'西南交通大学希望学院',school_score:{score2021:{minscore:441,precedence:166428},score2020:{minscore:459,precedence:155194},score2019:{minscore:473,precedence:153846},score2018:{minscore:469,precedence:155854},score2017:{minscore:447,precedence:149361}}},
{id:46,school_name:'四川工业科技学院',school_score:{score2021:{minscore:440,precedence:167365},score2020:{minscore:455,precedence:159242},score2019:{minscore:470,precedence:156716},score2018:{minscore:467,precedence:157746},score2017:{minscore:449,precedence:147154}}},
{id:47,school_name:'四川文化艺术学院',school_score:{score2021:{minscore:439,precedence:168269},score2020:{minscore:451,precedence:163179},score2019:{minscore:468,precedence:158597},score2018:{minscore:467,precedence:157746},score2017:{minscore:444,precedence:152469}}},
{id:48,school_name:'四川电影电视学院',school_score:{score2021:{minscore:439,precedence:168269},score2020:{minscore:456,precedence:158194},score2019:{minscore:468,precedence:158597},score2018:{minscore:467,precedence:157746},score2017:{minscore:436,precedence:160852}}},
{id:49,school_name:'西南财经大学天府学院',school_score:{score2021:{minscore:438,precedence:169175},score2020:{minscore:466,precedence:147641},score2019:{minscore:486,precedence:140753},score2018:{minscore:484,precedence:141002},score2017:{minscore:460,precedence:134713}}},
{id:50,school_name:'成都理工大学工程技术学院',school_score:{score2021:{minscore:430,precedence:176326},score2020:{minscore:466,precedence:147641},score2019:{minscore:478,precedence:148836},score2018:{minscore:476,precedence:149183},score2017:{minscore:453,precedence:142839}}},
{id:51,school_name:'成都银杏酒店管理学院',school_score:{score2021:{minscore:430,precedence:176326},score2020:{minscore:451,precedence:163179},score2019:{minscore:469,precedence:157659},score2018:{minscore:467,precedence:157746},score2017:{minscore:447,precedence:149361}}},
{id:52,school_name:'绵阳城市学院',school_score:{score2021:{minscore:430,precedence:176326},score2020:{minscore:456,precedence:158194},score2019:{minscore:470,precedence:156716},score2018:{minscore:467,precedence:157746},score2017:{minscore:447,precedence:149361}}},
{id:53,school_name:'吉利学院',school_score:{score2021:{minscore:430,precedence:176326},score2020:{minscore:443,precedence:171036},score2019:{minscore:481,precedence:145860},score2018:{minscore:464,precedence:160465},score2017:{minscore:441,precedence:155760}}},
      ],
    list1:[]  ,
    inputdata:'',
    float:false
    }
  },
  components:{
    Tbbus
  },
  methods:{
      putdata(){
        this.float=false
        this.list1=[]
        var n=parseInt(this.inputdata)
          if(!isNaN(n)){
            this.list.forEach(i=>{
              if(i.school_score.score2021.minscore<=parseInt(this.inputdata)+10&&i.school_score.score2021.minscore>=parseInt(this.inputdata)-30){
                var obj=i
                this.list1.push(obj)
              }
            })
            this.float=true
          }else{
            this.list.forEach(i=>{
              if(i.school_name===this.inputdata){
                var obj=i
                this.list1.push(obj)
              }
            })
            this.float=true
          }
      }
  }
}
</script>

<style>
.table_box{
  line-height: 30px;
  font-size: 20px;
}
.nodata{
  height: 400px;
  background-color: #eee;
}
.nodata>div{
    /* display: inline-block; */
    width: 500px;
    height: 400px;
    margin: auto auto;
}
.nodata>div>span{
  line-height: 400px;
  list-style: center;
  font-size: 20px;
}
.navbar {
  background-color: #eee;
}
.box {
  background-color: #eee;
}
</style>