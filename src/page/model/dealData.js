export default {
  EQP: (data) => {
    if (data.status) {
      return {
        status: data.status,
        header: data.data.name,
        // body: JSON.parse(data.data.value)
        body: data.data.value.value
      }
    }
    return {
      ...data,
      status: false
    }
  },
  pie: (data) => {
    if (data.status) {
      let arr = [];

      Object.keys(data.data.value.value).forEach((n) => {
        arr.push({
          name: data.data.value.value[n].NAME,
          value: data.data.value.value[n].VALUE
        })
      })
      return {
        status: data.status,
        name: data.data.name,
        title: data.data.value.title,
        series: arr
      }
    }
    return {
      ...data,
      status: false
    }
  },
  line: (data) => {
    if (data.status) {
      return {
        status: data.status,
        name: data.data.name,
        legend: data.data.value.legend,
        xAxis: data.data.value.xAxis.sort(),
        yAxis: data.data.value.yAxis
      }
    }
    return {
      ...data,
      status: false
    }
  }
}