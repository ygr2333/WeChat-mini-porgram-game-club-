Page({
  data: {
    detail: null
  },

  onLoad(options) {
    const id = Number(options.id);

    const mockMap = {
      1: {
        id: 1,
        name: '阿泽',
        game: '英雄联盟',
        price: '30',
        status: '在线',
        avatar: 'https://dummyimage.com/220x220/dfe9ff/222222&text=AZ',
        tags: ['双排', '辅助', '打野'],
        desc: '擅长辅助和打野，风格稳定，适合双排。',
        content: '适合需要稳定配合的用户，沟通清晰，整体节奏偏稳。后续可接入在线状态、接单状态、语音偏好、段位信息等数据字段。'
      },
      2: {
        id: 2,
        name: '小北',
        game: '无畏契约',
        price: '45',
        status: '在线',
        avatar: 'https://dummyimage.com/220x220/ffe4e6/222222&text=XB',
        tags: ['娱乐局', '语音', '带新手'],
        desc: '主打娱乐局与上分局，可语音，可带新手。',
        content: '适合新手用户和娱乐用户，沟通节奏轻松。后续可补充可接单时段、擅长模式、响应速度等信息。'
      },
      3: {
        id: 3,
        name: '十七',
        game: '永劫无间',
        price: '35',
        status: '忙碌',
        avatar: 'https://dummyimage.com/220x220/e6f7e6/222222&text=17',
        tags: ['三排', '配合', '稳定'],
        desc: '擅长三排配合，沟通清晰，服务时间稳定。',
        content: '适合偏团队协作的用户，适配三排场景。后续可接入当前忙碌状态、排队信息、历史评价等字段。'
      }
    };

    this.setData({
      detail: mockMap[id] || null
    });
  },

  contactPlayer() {
    wx.showModal({
      title: '咨询陪玩',
      content: '这里后续可以接入下单、预约、客服、微信号或电话功能。',
      showCancel: false
    });
  }
});