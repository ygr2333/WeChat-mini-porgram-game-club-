Page({
  data: {
    loading: true,
    list: []
  },

  onLoad() {
    this.getPlayerList();
  },

  onPullDownRefresh() {
    this.getPlayerList(true);
  },

  getPlayerList(isRefresh = false) {
    this.setData({
      loading: true
    });

    setTimeout(() => {
      const mockList = [
        {
          id: 1,
          name: '阿泽',
          game: '英雄联盟',
          price: '30',
          status: '在线',
          desc: '擅长辅助和打野，风格稳定，适合双排。'
        },
        {
          id: 2,
          name: '小北',
          game: '无畏契约',
          price: '45',
          status: '在线',
          desc: '主打娱乐局与上分局，可语音，可带新手。'
        },
        {
          id: 3,
          name: '十七',
          game: '永劫无间',
          price: '35',
          status: '忙碌',
          desc: '擅长三排配合，沟通清晰，服务时间稳定。'
        }
      ];

      this.setData({
        list: mockList,
        loading: false
      });

      if (isRefresh) {
        wx.stopPullDownRefresh();
        wx.showToast({
          title: '刷新成功',
          icon: 'success'
        });
      }
    }, 600);
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/play-detail/play-detail?id=${id}`
    });
  },

  contactPlayer(e) {
    const name = e.currentTarget.dataset.name;
    wx.showToast({
      title: `联系 ${name}`,
      icon: 'none'
    });
  }
});