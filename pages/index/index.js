//index.js
//获取应用实例
import drawQrcode from '../../utils/weapp.artQrcode.js'


Page({
    data: {
        url: ''
    },
    onLoad: function() {

    },
    render1() {
        drawQrcode({
            width: 520,
            height: 520,
            canvasId: 'myQrcodeOne',
            // ctx: wx.createCanvasContext('myQrcodeOne'),
            text: 'https://qr.no0a.cn',
            x: 180,
            y: 100, // v1.0.0+版本支持在二维码上绘制图片
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
    },
    render2() {
        drawQrcode({
            width: 600,
            height: 600,
            canvasId: 'myQrcodeTwo',
            // ctx: wx.createCanvasContext('myQrcodeTwo'),
            text: 'https://qr.no0a.cn',
            x: 170,
            y: 200, // v1.0.0+版本支持在二维码上绘制图片
            image: {
                imageResource: '../../images/materials/electron/border.png',
                dx: 0,
                dy: 0,
                dWidth: 1000,
                dHeight: 1000
            },
            materials: {
                eye: ["../../images/materials/electron/eye.png"],
                row4: ["../../images/materials/electron/row4.png"],
                col3: ["../../images/materials/electron/col3.png", "../../images/materials/electron/col3_2.png"],
                row3: ["../../images/materials/electron/row3.png"],
                row2col3: ["../../images/materials/electron/row2col3.png"],
                row3col2: ["../../images/materials/electron/row3col2.png"],
                col2: ["../../images/materials/electron/col2.png"],
                row2: ["../../images/materials/electron/row2.png", "../../images/materials/electron/row2_2.png"],
                single: ["../../images/materials/electron/single.png", "../../images/materials/electron/single_2.png"],
            },
            callback: () => {
                wx.canvasToTempFilePath({
                    canvasId: 'myQrcodeTwo',
                    success: (res) => {
                        console.log(res.tempFilePath)
                        this.setData({
                            url: res.tempFilePath
                        })
                    }
                })
            }
        })
    },
    handleSave() {
        wx.saveImageToPhotosAlbum({
            filePath: this.data.url,
            success: () => {
                wx.showToast({
                    title: '保存成功',
                    icon: 'none'
                })
            }
        })
    },
    handlePreview() {
        wx.previewImage({
            urls: [this.data.url]
        })
    },
})