const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 基础路由
app.get('/', (req, res) => {
  res.json({
    message: '微信小程序后端服务运行中',
    version: '1.0.0'
  });
});

// 广告相关接口
app.get('/advert/getAdvertMsg', (req, res) => {
  // 返回模拟数据
  res.json({
    code: '0000',
    message: '成功',
    data: {
      guize: [],
      downlink: '',
      downlink_img: '',
      allow_topup: 0,
      kqxs: 0,
      gzgzh: 0,
      plmd5: '',
      wenanpeiyin: '',
      allow_iphone_topup: 0,
      xiazaipeiyin: '',
      eqijx: '',
      wxappid: '',
      wxpath: '',
      song: '',
      jiacishu: 1,
      jiatianshu: 1,
      pcqsy: '',
      bucket: '',
      region: '',
      bannerList: [],
      zibannerList: [],
      times: 3,
      accounturl: '',
      customername: '在线联系客服',
      customer: 1,
      link: '赞赏下作者,下载提个速',
      vs: '',
      content: '有问题请及时联系作者进行反馈',
      batchAnalyse: 1,
      adPath: '',
      course: 0,
      author: '作者',
      prizeType: 0,
      prizePath: '',
      watchTimes: 1,
      sharePic: '',
      chengxuma: '',
      ziyuantu: '',
      shareTitle: '短视频一键去水印,去水印还能这么简单',
      adTip: '还没有看完广告 一天仅需看一次广告 24小时免除广告',
      adTippl: '还没有看完广告 一天仅需看一次广告 24小时免除广告',
      adTiptj: '还没有看完广告 一天仅需看一次广告 24小时免除广告',
      adTipwa: '还没有看完广告 一天仅需看一次广告 24小时免除广告',
      adTippy: '还没有看完广告 一天仅需看一次广告 24小时免除广告',
      freeType: 1,
      videoAd: '',
      shareBtn: '分享给好友',
      ads: {
        indexAd: '',
        videoAd: '',
        videoAdReward: '',
        videoAdRewardpl: '',
        videoAdRewardtj: '',
        videoAdRewardwa: '',
        videoAdRewardpy: '',
        renwujili: '',
        videoAdAfter: '',
        videoAdCard: '',
        toolAd: '',
        fontAd: '',
        batchAd: '',
        myAd: '',
        picToTextAd: '',
        parseAdCard: '',
        parseAd: '',
        md5Ad: ''
      }
    }
  });
});

// 视频注册用户接口
app.post('/video/registryUser', (req, res) => {
  const { code, programType, scene, openid } = req.body;
  
  res.json({
    code: '0000',
    message: '成功',
    data: {
      userId: 'test_user_' + Date.now(),
      endTime: '2024-12-31',
      userType: 0,
      openid: openid || 'test_openid',
      isFirstLogin: true
    }
  });
});

// 视频解析接口
app.post('/lyz/miniAnalyse', (req, res) => {
  const { code, programType, link, nickName, avatarUrl } = req.body;
  
  // 简单的链接类型判断
  let response;
  
  if (link.includes('douyin')) {
    response = {
      code: '0001',
      data: {
        playAddr: 'https://example.com/video.mp4',
        cover: 'https://example.com/cover.jpg',
        desc: '测试抖音视频',
        type: 1 // 视频类型
      }
    };
  } else if (link.includes('kuaishou')) {
    response = {
      code: '0001',
      data: {
        playAddr: 'https://example.com/video.mp4',
        cover: 'https://example.com/cover.jpg',
        desc: '测试快手视频',
        type: 1 // 视频类型
      }
    };
  } else {
    // 图片类型
    response = {
      code: '0001',
      data: {
        playAddr: '',
        cover: 'https://example.com/image.jpg',
        desc: '测试图片',
        type: 2 // 图片类型
      }
    };
  }
  
  res.json(response);
});

// 健康检查接口
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
  console.log(`API基础URL: http://localhost:${PORT}/`);
});