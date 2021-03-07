# artQrcode
艺术二维码小程序版

## 1、使用方法

在页面中添加一个 `canvas`标签和 `image`标签，代码如下：

```html
<image src="{{url}}" class="image" mode="widthFix" bindtap="handlePreview" style="width: 750rpx;"></image>
<canvas style="width: 900px; height: 1200px;position: absolute;left: -99999rpx;" canvas-id="myQrcodeOne"></canvas>
```

在js中引入生成库：

```js
import drawQrcode from '../../utils/weapp.artQrcode.js'
```

生成艺术二维码

```js
drawQrcode({
    width: 520,
    height: 520,
    canvasId: 'myQrcodeOne',
    // ctx: wx.createCanvasContext('myQrcodeOne'),
    text: 'https://qr.no0a.cn',
    x: 180,
    y: 100,
    image: {
        imageResource: '../../images/materials/xiaohuangren/border.png',
        dx: 0,
        dy: 0,
        dWidth: 900,
        dHeight: 1200
    },
    materials: {
        eye: ["../../images/materials/xiaohuangren/eye.png"],
        row3: ["../../images/materials/xiaohuangren/row3.png"],
        row2col3: ["../../images/materials/xiaohuangren/row2col3.png"],
        row2col2: ["../../images/materials/xiaohuangren/row2col2.png", "../../images/materials/xiaohuangren/row2col2_2.png"],
        row2: ["../../images/materials/xiaohuangren/row2.png", "../../images/materials/xiaohuangren/row2_2.png"],
        single: ["../../images/materials/xiaohuangren/single.png"],
    },
    callback: () => {
        wx.canvasToTempFilePath({
            canvasId: 'myQrcodeOne',
            success: (res) => {
                console.log(res.tempFilePath)
                this.setData({
                    url: res.tempFilePath
                })
            }
        })
    }
})
```

## 2、参数说明

| 参数         | 说明                                                         | 类型     | 示例                                                         |
| ------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| width        | 必须，二维码宽度                                             | Number   | 520                                                          |
| height       | 必须，二维码高度                                             | Number   | 520                                                          |
| text         | 必须，二维码内容                                             | String   | [https://github.com/BWmelon/artQrcode](https://github.com/BWmelon/artQrcode) |
| canvasId     | 必须，绘制的`canvasId`                                       | String   | `'myQrcode'`                                                 |
| x            | 非必须，二维码x轴相对于背景图起始位置，默认为0               | Number   | 100                                                          |
| y            | 非必须，二维码y轴相对于背景图起始位置，默认为0               | Number   | 100                                                          |
| correctLevel | 非必须，二维码纠错级别，默认值为高级，取值：`{ L: 1, M: 0, Q: 3, H: 2 }` | Number   | 1                                                            |
| _this        | 非必须，若在组件中使用，需要传入                             |          | this                                                         |
| callback     | 非必须，绘制完成后的回调函数                                 | Function | () => {console.log('完成')}                                  |
| image        | 必须，背景图 <br />image.imageResource：背景图位置 <br />image.dx：背景图起始x轴 <br />image.dy：背景图起始y轴 <br />image.dWidth：背景图绘制宽度 <br />image.dHeight：背景图绘制高度 | Object   | {   <br />imageRosourse: '../../images/materials/border.png',   <br />dx: 0,  <br />dy: 0,   <br />dWidth: 900,   <br />dHeight: 1200 <br />} |
| materials    | 必须，素材 <br />可选值：eye、col4、row4、row2col3、row3col2、col3、row3、row2col2、col2、row2、single <br />每一项的值都是一个数组，如果该项素材数量大于1，将会进行随机渲染 <br />没有素材的选项可以不填或者为空数组<br /> | Object   | { <br />eye: ["../../images/materials/xiaohuangren/eye.png"], <br />row3:["../../images/materials/xiaohuangren/row3.png"], <br />row2col3: ["../../images/materials/xiaohuangren/row2col3.png"], <br />row2col2: ["../../images/materials/xiaohuangren/row2col2.png", "../../images/materials/xiaohuangren/row2col2_2.png"], <br />row2: ["../../images/materials/xiaohuangren/row2.png", "../../images/materials/xiaohuangren/row2_2.png"], <br />single: ["../../images/materials/xiaohuangren/single.png"] } |

## 3、效果

![艺术二维码生成效果](https://imgs.bwmelon.com/20210307165553752.png)

## 4、感谢

[252860883/ArtQRCode](https://github.com/252860883/ArtQRCode)

[yingye/weapp-qrcode](https://github.com/yingye/weapp-qrcode)