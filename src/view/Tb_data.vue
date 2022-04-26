<template>

            <tr>
                <td>{{school.school_name}}</td>
                <td>{{school.school_score.score2021.minscore+'/'+school.school_score.score2021.precedence}}</td>
                <td>{{school.school_score.score2020.minscore+'/'+school.school_score.score2020.precedence}}</td>
                <td>{{school.school_score.score2019.minscore+'/'+school.school_score.score2019.precedence}}</td>
                <td>{{school.school_score.score2018.minscore+'/'+school.school_score.score2018.precedence}}</td>
                <td>{{school.school_score.score2017.minscore+'/'+school.school_score.score2017.precedence}}</td>
            </tr>
</template>

<script>
import '../../node_modules/bootstrap3/dist/css/bootstrap.css'
export default {
    props:{
        listdata:{
            required:true,
            default:{}
        }
    },
    data(){
        return{
           school:this.listdata
        }
    }

}
</script>

<style scoped>
tr {
    font-size: 16px;
    height: 20px;
    line-height: 20px;
}
</style>