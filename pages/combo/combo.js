Page({
  data: {
    loading: true,
    list: []
  },

  onLoad() {
    this.getComboList();
  },

  onPullDownRefresh() {
    this.getComboList(true);
  },

  getComboList(isRefresh = false) {
    this.setData({
      loading: true
    });

    setTimeout(() => {
      const mockList = [
        {
          id: 1,
          name: '新手体验套餐',
          desc: '适合首次体验用户，流程更简单。',
          price: '99.00'
        },
        {
          id: 2,
          name: '热门双人套餐',
          desc: '适合双人娱乐、双排与组队场景。',
          price: '188.00'
        },
        {
          id: 3,
          name: '会员专属套餐',
          desc: '适合长期用户，包含额外优惠内容。',
          price: '299.00'
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
      url: `/pages/combo-detail/combo-detail?id=${id}`
    });
  }
});