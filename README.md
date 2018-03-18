最近需要用到一个 刻度选择的一个组件，真是翻遍了全网，都没有找到合适的这种刻度尺的做法。索性，干脆自己开发一个吧。既满足自己的要求，也可以作为组件 供大家使用。

#### *1.先看一下效果*
###### 整体来说分为两个模式，一个整数模式，一个小数模式

![整数模式.gif](https://upload-images.jianshu.io/upload_images/4472817-951b5c7940e708f2.gif?imageMogr2/auto-orient/strip)

![小数模式.gif](https://upload-images.jianshu.io/upload_images/4472817-1cc9548b9129b817.gif?imageMogr2/auto-orient/strip)


###### 刻度除了上面最小单位的展示，还有两种展现方式，两个单位一格，五个单位一格，十个单位一个格

![不同刻度展示1.gif](https://upload-images.jianshu.io/upload_images/4472817-33649300fcee4d97.gif?imageMogr2/auto-orient/strip)

![不同刻度展示2.gif](https://upload-images.jianshu.io/upload_images/4472817-59342c7eafc887e6.gif?imageMogr2/auto-orient/strip)

###### 可以改变大小，颜色
![不同颜色大小展示.gif](https://upload-images.jianshu.io/upload_images/4472817-020ee844a974e97a.gif?imageMogr2/auto-orient/strip)


#### *2.用起来*
> 在使用之前，先说一下实现思路。首先利用的是canvas 通过传入的值，画出一张图片 。其实滚动的是这张图片

 1.引入组件 `wx-scale`  假设您当前的目录跟我一样是这样
![image.png](https://upload-images.jianshu.io/upload_images/4472817-287676842ed1144d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


2.canvas.json 中声明使用组件
```
// canvas
{
  "usingComponents": {
    "scale":"/components/wx-scale/wx-scale"
  }
}
```


3. canvas.wxml 中使用组件

```html
<!-- -->
<text>刻度{{value}}</text> 

<scale min="0" max="100" int="{{true}}" step="5" fiexNum="60" single="10" h="80" active="min" styles="{{styles}}" bindvalue="bindvalue"></scale>

```


3.参数说明

|      参数名     |       默认值     |  说明  |
| :-:      | :-----:  | :----: |
|`min`       | 0          |   最小值    |
|`max`      | 100      |   最大值    |
| `int`        | true     |   是否开启整数模式 ，false为小数模式  整数模式 step最小单位是 1 ，小数模式，step的最小单位是 0.1           |
|`step `      | 1      |   步长，相对传入的值，每个格子代表几个值（值只能是能被10整除的 整数 ，1，2，5, 10）   |
|`fiexNum `      | 60      |   刻度尺左右余量    |
|`single `      | 10      |   单个格子的实际长度（单位px）一般不建议修改    |
|`h`      | 80      |   自定义高度    |
|`active `      | center      |   自定义选中位置  （三个值 min, max ,center , 范围内合法数值）    |
|`styles `      |  {...}    |   自定义卡尺颜色 注意： 仅支持 #dbdbdb  或者red  这种 颜色 不支持简写 如 #333    |

```
// 参数styles 的默认值
styles = {
  line: '#dbdbdb',   // 刻度颜色
  bginner: '#fbfbfb',  // 前景色颜色
  bgoutside: '#dbdbdb',  // 背景色颜色
  lineSelect: '#52b8f5',  // 选中线颜色
  font: '#404040'   // 刻度数字颜色
{
```
4.事件

|      事件名     |       返回值     |  说明  |
| :-:      | :-----:  | :----: |
|`bindvalue`       | 当前选择刻度  |   返回当前选择刻度   |

```js
Page({
  data: {
    value: 0,
    styles: {
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }
  },
  bindvalue: function (e) {
    // console.log(e)
    this.setData({
      value: e.detail.value
    })
  }
})
```



以上，就是组件的时候方法了，如果使用过程中，有问题可以联系我。

`wx-scale 组件` : [代码下载](https://github.com/mehaotian/wx-scale/releases/tag/1.0.0)

![image.png](https://upload-images.jianshu.io/upload_images/4472817-5a81d789b0003358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果觉得有用，就给颗星吧 [点我点我点我](https://github.com/mehaotian/wx-scale)


