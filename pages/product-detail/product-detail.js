Page({
  data: {
    detail: null
  },

  onLoad(options) {
    const id = Number(options.id);

    const mockMap = {
      1: {
        id: 1,
        name: '俱乐部键帽周边',
        price: '238.00',
        oldPrice: '338.00',
        image: 'https://dummyimage.com/690x420/0d2330/ffffff&text=PRODUCT+01',
        desc: '适合俱乐部周边展示与日常使用，外观简洁，适合当前页面展示。'
      },
      2: {
        id: 2,
        name: '绝密陪玩套餐',
        price: '168.00',
        oldPrice: '268.00',
        image: 'https://dummyimage.com/690x420/47231f/ffffff&text=PRODUCT+02',
        desc: '适合娱乐与轻度上分场景，当前为前端演示数据，后续可直接接后端详情接口。'
      },
      3: {
        id: 3,
        name: '电竞鼠标垫',
        price: '59.00',
        oldPrice: '99.00',
        image: 'https://dummyimage.com/690x420/1b1d32/ffffff&text=PRODUCT+03',
        desc: '适合电竞外设展示，后续可补充库存、销量、规格等字段。'
      },
      4: {
        id: 4,
        name: '俱乐部会员卡',
        price: '88.00',
        oldPrice: '128.00',
        image: 'https://dummyimage.com/690x420/24301a/ffffff&text=PRODUCT+04',
        desc: '适合会员权益展示，后续可以接入购买与权益说明。'
      }
    };

    this.setData({
      detail: mockMap[id] || null
    });
  },

  contactService() {
    wx.showModal({
      title: '咨询商品',
      content: '这里后续可接入客服、微信号、手机号或下单功能。',
      showCancel: false
    });
  }
});