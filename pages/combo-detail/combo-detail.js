Page({
  data: {
    detail: null
  },

  onLoad(options) {
    const id = Number(options.id);

    const mockMap = {
      1: {
        id: 1,
        name: '新手体验套餐',
        price: '99.00',
        oldPrice: '129.00',
        desc: '适合首次体验用户，整体流程更简单，适合快速了解俱乐部服务内容。',
        content: '本套餐适合首次到店或首次线上咨询用户，包含基础体验服务与基础说明内容。后续可根据后端数据补充套餐时长、服务范围、注意事项等字段。',
        image: 'https://dummyimage.com/690x420/ddeeff/222222&text=COMBO+01'
      },
      2: {
        id: 2,
        name: '热门双人套餐',
        price: '188.00',
        oldPrice: '238.00',
        desc: '适合双人娱乐、双排与组队场景。',
        content: '本套餐适用于双人体验场景，适合好友同行、双排组队与短时活动体验。后续可扩展为支持时间段、优惠标签、适用人数等字段。',
        image: 'https://dummyimage.com/690x420/efe2ff/222222&text=COMBO+02'
      },
      3: {
        id: 3,
        name: '会员专属套餐',
        price: '299.00',
        oldPrice: '399.00',
        desc: '适合长期用户，包含额外优惠内容。',
        content: '本套餐适合长期使用用户，后续可对接会员等级、折扣权益、长期活动与复购引导逻辑。',
        image: 'https://dummyimage.com/690x420/e8ffe8/222222&text=COMBO+03'
      }
    };

    this.setData({
      detail: mockMap[id] || null
    });
  },

  contactService() {
    wx.showModal({
      title: '咨询套餐',
      content: '这里后续可接入客服、手机号、微信号或直接预约功能。',
      showCancel: false
    });
  }
});