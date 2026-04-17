Page({
  data: {
    loading: true,
    list: []
  },

  onLoad() {
    this.getNoticeList();
  },

  onPullDownRefresh() {
    this.getNoticeList(true);
  },

  getNoticeList(isRefresh = false) {
    this.setData({
      loading: true
    });

    setTimeout(() => {
      const mockList = [
        {
          id: 1,
          title: '五一活动通知',
          content: '五一期间俱乐部开放延时服务，具体活动时间以页面更新为准。',
          time: '2026-04-17'
        },
        {
          id: 2,
          title: '新成员招募公告',
          content: '陪玩、主持、接待岗位正在招募中，有意向可通过咨询入口联系。',
          time: '2026-04-15'
        },
        {
          id: 3,
          title: '会员优惠调整',
          content: '部分套餐价格调整，旧会员活动方案不变，详情以后续公告为准。',
          time: '2026-04-13'
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
      url: `/pages/notice-detail/notice-detail?id=${id}`
    });
  }
});