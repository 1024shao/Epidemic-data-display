<template>
  <div class="home">
    <MyHeader />
    <CovidInfo :infoData='covidDesc' />
    <CaseNum :caseNumData='caseNumData' />
    <Map />
  </div>
</template>

<script>
import api from '../api/index'
import CovidInfo from '../components/CovidInfo.vue'
import MyHeader from '../components/MyHeader.vue'
import CaseNum from '../components/CaseNum.vue'
import Map from '../components/Map.vue'
export default {
  name: 'Home',
  components: {
    MyHeader,
    CovidInfo,
    CaseNum,
    Map
  },
  data() {
    return {
      // 新冠描述
      covidDesc: {
        note1: '',
        note2: '',
        note3: '',
        remark1: '',
        remark2: '',
      },
      // 感染人数数据
      caseNumData: {
        modifyTime: '',
        currentConfirmedCount: "",//现存确诊人数
        confirmedCount: "",//累计确诊人数
        suspectedCount: "",//	累计境外输入人数
        deadCount: "",//		累计死亡人数
        seriousCount: "",//	现存无症状人数
        suspectedIncr: "",//	新增境外输入人数
        currentConfirmedIncr: "",//相比昨天现存确诊人数
        confirmedIncr: "",//	相比昨天累计确诊人数
        curedIncr: "",//相比昨天新增治愈人数
        deadIncr: "",//相比昨天新增死亡人数
        seriousIncr: "",//相比昨天现存无症状人数
      }
    }
  },

  mounted() {
    // 抗击疫情数据
    api.getNcov({
      key: '24c467b3896dfc09e6f4f105ba1338c8'
    }).then(res => {
      console.log(res.data)
      if (res.status == 200) {
        // 病毒信息
        let desc = res.data.newslist[0].desc
        this.covidDesc.note1 = desc.note1
        this.covidDesc.note2 = desc.note2
        this.covidDesc.note3 = desc.note3
        this.covidDesc.remark1 = desc.remark1
        this.covidDesc.remark2 = desc.remark2
        this.covidDesc.remark3 = desc.remark3
        // 疫情病例人数
        this.caseNumData = {
          modifyTime: desc.modifyTime,
          currentConfirmedCount: desc.currentConfirmedCount,
          suspectedCount: desc.suspectedCount,
          curedCount: desc.curedCount,
          deadCount: desc.deadCount,
          seriousCount: desc.seriousCount,
          suspectedIncr: desc.suspectedIncr,
          currentConfirmedIncr: desc.currentConfirmedIncr,
          confirmedIncr: desc.confirmedIncr,
          curedIncr: desc.curedIncr,
          deadIncr: desc.deadIncr,
          seriousIncr: desc.seriousIncr,
        }
      }
    })
  }
}
</script>
