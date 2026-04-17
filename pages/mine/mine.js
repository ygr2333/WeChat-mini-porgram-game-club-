Page({
  goAction(e) {
    const name = e.currentTarget.dataset.name;
    wx.showToast({
      title: `${name}开发中`,
      icon: 'none'
    });
  }
});