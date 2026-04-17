Page({
  data: {
    keyword: '',
    banners: [
      {
        id: 1,
        image: 'https://dummyimage.com/690x260/9fdcff/222222&text=GAME_CLUB'
      },
      {
        id: 2,
        image: 'https://dummyimage.com/690x260/c8d7ff/222222&text=NOTICE+AND+SERVICE'
      },
      {
        id: 3,
        image: 'https://dummyimage.com/690x260/b9f3e4/222222&text=SHOP+AND+PLAY'
      }
    ],
    menus: [
      { id: 1, name: '公告', icon: '📢' },
      { id: 2, name: '套餐', icon: '🎁' },
      { id: 3, name: '陪玩', icon: '🎮' },
      { id: 4, name: '商品', icon: '🛍' },
      { id: 5, name: '咨询', icon: '💬' }
    ],
    products: [
      {
        id: 1,
        name: '俱乐部键帽周边',
        price: '238.00',
        oldPrice: '338.00',
        image: 'https://dummyimage.com/320x220/0d2330/ffffff&text=PRODUCT+01'
      },
      {
        id: 2,
        name: '绝密陪玩套餐',
        price: '168.00',
        oldPrice: '268.00',
        image: 'https://dummyimage.com/320x220/47231f/ffffff&text=PRODUCT+02'
      },
      {
        id: 3,
        name: '电竞鼠标垫',
        price: '59.00',
        oldPrice: '99.00',
        image: 'https://dummyimage.com/320x220/1b1d32/ffffff&text=PRODUCT+03'
      },
      {
        id: 4,
        name: '俱乐部会员卡',
        price: '88.00',
        oldPrice: '128.00',
        image: 'https://dummyimage.com/320x220/24301a/ffffff&text=PRODUCT+04'
      }
    ],
    filteredProducts: []
  },

  onLoad() {
    this.setData({
      filteredProducts: this.data.products
    });
  },

  onPullDownRefresh() {
    this.mockRefresh();
  },

  mockRefresh() {
    setTimeout(() => {
      this.setData({
        filteredProducts: this.filterProducts(this.data.keyword)
      });
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '刷新成功',
        icon: 'success'
      });
    }, 600);
  },

  onKeywordInput(e) {
    this.setData({
      keyword: e.detail.value
    });
  },

  onSearch() {
    const list = this.filterProducts(this.data.keyword);
    this.setData({
      filteredProducts: list
    });

    wx.showToast({
      title: '搜索完成',
      icon: 'success'
    });
  },

  filterProducts(keyword) {
    const text = (keyword || '').trim().toLowerCase();
    if (!text) return this.data.products;

    return this.data.products.filter(item => {
      return item.name.toLowerCase().includes(text);
    });
  },

  onMenuTap(e) {
    const name = e.currentTarget.dataset.name;

    if (name === '公告') {
      wx.switchTab({ url: '/pages/notice/notice' });
      return;
    }

    if (name === '套餐') {
      wx.switchTab({ url: '/pages/combo/combo' });
      return;
    }

    if (name === '陪玩') {
      wx.switchTab({ url: '/pages/play/play' });
      return;
    }

    if (name === '商品') {
      wx.pageScrollTo({
        selector: '#product-section',
        duration: 300
      });
      return;
    }

    if (name === '咨询') {
      wx.showModal({
        title: '在线咨询',
        content: '当前可先在“我的”页面预留客服入口，后续可接微信号、手机号或表单。',
        showCancel: false
      });
      return;
    }
  },

  onProductTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    });
  }
});