export default {
  tableList: (data) => {
    if (data.status) {
      return {
        status: data.status,
        header: data.header,
        body: data.body
      }
    }
    return {
      ...data,
      status: false
    }
  },
  card: (data) => {
    if (data.status) {
      return {
        status: data.status,
        data: data.data
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