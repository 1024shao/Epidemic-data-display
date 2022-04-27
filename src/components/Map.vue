<template>
  <div>
    <p class="title"><i></i> 疫情地图</p>
    <div id="chinaMap"></div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
  name: 'Map',
  data() {
    return {
      cityMapData: [],
    }
  },
  mounted() {
    api
      .getCaseNum({
        key: 'd7c335f2e7856ec48c1962a99fcc6f98',
      })
      .then((res) => {
        console.log(res)
        console.log('!@@')
        for (var i = 0; i < res.newslist.length; i++) {
          var temp = {
            name: res.newslist[i].provinceShortName,
            value: res.newslist[i].currentConfirmedCount,
            itemStyle: {
              normal: {
                areaColor: this.setColor(res.newslist[i].currentConfirmedCount),
              },
            },
          }
          this.cityMapData.push(temp)
        }
        this.$charts.chinaMap('chinaMap', this.cityMapData)
      })
  },
  methods: {
    setColor(value) {
      let currentColor = ''
      switch (true) {
        case value == 0:
          currentColor = '#fff'
          break
        case value > 0 && value < 10:
          currentColor = '#FDFDCF'
          break
        case value >= 10 && value < 100:
          currentColor = '#FE9E83'
          break
        case value >= 100 && value < 500:
          currentColor = '#E55A4E'
          break
        case value >= 500 && value < 10000:
          currentColor = '#4F070D'
          break
      }
      return currentColor
    },
  },
}
</script>

<style scoped>
#chinaMap {
  width: 100%;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: '';
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
