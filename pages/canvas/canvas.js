Page({
  data: {
    value: 0,
    styles: [{
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }, {
        line: '#dbdbdb',
        bginner: '#fbfbfb',
        bgoutside: '#dbdbdb',
        lineSelect: '#52b8f5',
        font: '#404040'
    }]
  },
  bindvalue: function (e) {
    // console.log(e)
    this.setData({
      value: e.detail.value
    })
  }
})