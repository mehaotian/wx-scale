最近需要用到一个 刻度选择的一个组件，真是翻遍了全网，都没有找到合适的这种刻度尺的做法。索性，干脆自己开发一个吧。既满足自己的要求，也可以作为组件 供大家使用。

`在使用过程中如果有什么问题的话，在最下面的 [问题答疑] 中寻找问题答案，或者直接发布评论吧，我看到的话会及时解决的`

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



#问题答疑
###### 1. 在开发工具中只正常显示第一个组件刻度图片，这是一个编辑器已知问题 ，在手机中不影响使用
###### 2. 部分手机会显示滚动条 ，在父页面（使用组件页面）wxss 中添加如下样式，组件样式添加无效

```css
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}
```
###### 3. 关于遮罩问题 ，在这不解答。自己动手写一下吧，没问题的
###### 4. 动态赋值的变量，最好不要与` bindvalue` 事件返回的值 使用同一个变量
  因为动态赋值监听 到新值之后 ，是要改变滚动组件的位置的，这时候如果使用同一个变量，会多次触发动态赋值，所以不建议使用同一个变量
![image.png](https://upload-images.jianshu.io/upload_images/4472817-011a5f27a58374e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 5. 因为性能问题 ，不能连续滑动 ，请等待第一次 归位之后，在进行第二次滑动。因为每次归位有一个200ms的等待时间，待优化问题

# 更新日志
##v1.0.1 (2018-12-12更新)
 ##### 1.修复一屏多组件问题 ，可以同一个页面使用多个组件了。
 ##### 2. 添加动态赋值的功能，修改`active`属性即可，注意获取到的值 和动态赋值 不要使用同一个变量
