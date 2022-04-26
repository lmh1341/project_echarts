<template>
<tbody>
  <Tbdata v-for="i in isdata" :key="i.id" :listdata="i"></Tbdata>
</tbody>
</template>

<script>
import Tbdata from '@/view/Tb_data.vue'
export default {
        props:{
            isdata:{
                default:[],
                required:true
            }
        },
        components:{
            Tbdata
        }
}
</script>

<style>

</style>