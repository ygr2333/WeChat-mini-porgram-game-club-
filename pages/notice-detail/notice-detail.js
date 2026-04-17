Page({
  data: {
    detail: null
  },

  onLoad(options) {
    const id = Number(options.id);

    const mockMap = {
      1: {
        id: 1,
        title: '五一活动通知',
        time: '2026-04-17',
        content: '五一期间俱乐部开放延时服务，具体活动时间以页面更新为准。活动期间部分套餐将开放限时优惠，请以现场与页面公告说明为准。'
      },
      2: {
        id: 2,
        title: '新成员招募公告',
        time: '2026-04-15',
        content: '俱乐部当前开放陪玩、主持、接待等岗位招募。有意向者可通过咨询入口提交信息，后续将统一安排沟通。'
      },
      3: {
        id: 3,
        title: '会员优惠调整',
        time: '2026-04-13',
        content: '部分套餐价格已进行结构调整，历史会员权益暂不受影响。新方案将在后续公告中进一步说明。'
      }
    };

    this.setData({
      detail: mockMap[id] || null
    });
  }
});