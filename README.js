
#更新时间 2022/10/12

#汉堡儿童睡前故事（解锁永久VIP）
^https:\/\/www\.babybooks\.top\/v0\/profile url script-response-body https://gjds.vip/QX/pojie/sqgs.js


#二蛋影视（解锁永久VIP）
^http:\/\/vip\.0818km\.cn\/login\/login\/veifys\.html.+ url script-response-body https://gjds.vip/QX/pojie/ed.js


#bigshot（解锁永久VIP）
^https:\/\/vni\.kwaiying\.com\/api\/v1\/user\/profile url script-response-body https://gjds.vip/QX/pojie/bigshot.js

#贝瓦儿歌（解锁永久VIP）
^http:\/\/passport\.beva\.com\/passport\/v1\/sdk\/getuserinfo url script-response-body https://gjds.vip/QX/pojie/bweg.js

#儿歌点点（解锁永久VIP）
^http:\/\/gateway\.ergedd\.com\/dduser\/user\/center\/set url script-response-body https://gjds.vip/QX/pojie/egdd.js


#瑶池lsp（解锁永久VIP）
^http:\/\/api\.ggmza.cn\/api\/user\/info url script-response-body https://gjds.vip/QX/pojie/yaochi.js
^http:\/\/api\.ggmza\.cn\/api\/user\/autoLogin url script-response-body https://gjds.vip/QX/pojie/yaochi1.js
^http:\/\/api\.ggmza\.cn\/api\/common\/enterNotice url script-response-body https://gjds.vip/QX/pojie/yaochi2.js


#多多视频 永久VIP
^https?:\/\/api\.rr\.tv\/.*?Version url reject
https://api.rr.tv/v3plus/index/channel\?pageNum=1&position=CHANNEL_INDEX url script-response-body https://gjds.vip/QX/pojie/ddsp.js
^https?:\/\/api\.rr\.tv\/app\/config\/h5NativeBar url script-response-body https://gjds.vip/QX/pojie/ddsp.js
^https?:\/\/api\.rr\.tv\/v3plus\/index\/channel\?pageNum=1&position=CHANNEL_MY url script-response-body https://gjds.vip/QX/pojie/ddsp.js
^https:\/\/api\.rr\.tv\/user\/privilege\/list url script-response-body https://gjds.vip/QX/pojie/ddsp.js
^https:\/\/api\.rr\.tv\/ad\/getAll url script-response-body https://gjds.vip/QX/pojie/ddsp.js
^https:\/\/api\.rr\.tv\/drama\/app\/get_combined_drama_detail url script-response-body https://gjds.vip/QX/pojie/ddsp.js
https://api.rr.tv/watch/v4 url script-response-body https://gjds.vip/QX/pojie/ddsp.js
https://api.rr.tv/user/profile url script-response-body https://gjds.vip/QX/pojie/ddsp.js


#视频剪辑大师（解锁永久VIP）
^https:\/\/ajj\.fuguizhukj\.cn\/api\/UserProfile\/BasicUserInfo url script-response-body https://gjds.vip/QX/pojie/spjj.js

#Picsew（解锁付费订阅）
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://gjds.vip/QX/pojie/Picsew.js

#彩云（解锁VIP）
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://gjds.vip/QX/pojie/cytq.js


#轻颜相机 蒸汽波相机 （解锁VIP）公用
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://gjds.vip/QX/pojie/qyxj.js

#斑马海报（永久VIP）
^https:\/\/zebra\.maka.im\/api\/user\/info url script-response-body https://gjds.vip/QX/pojie/bmhb.js

#卡通相机（VIP）
^http:\/\/vstou\.faxingwu\.com\/huihua\/user\/getUser url script-response-body https://gjds.vip/QX/pojie/ktxj.js

#wps
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://gjds.vip/QX/pojie/wps.js


#pillow
^https:\/\/api\.revenuecat\.com\/v1\/subscribers.+ url script-response-body https://gjds.vip/QX/pojie/pillow.js


#悟饭
^http:\/\/iosv2\.cjapi\.wufan88\.com\/user\/.+ url script-response-body https://gjds.vip/QX/pojie/wf.js

#白噪音
^http:\/\/matrix\.fingerplay\.cn\/user\/fetchUserInfo url script-response-body https://gjds.vip/QX/pojie/bzy.js

#鲸鱼视频（老司机）
^https:\/\/api\.8897815\.com\/long_video\/advertising url response-body LOGIN_BEFOR response-body 1
^https:\/\/api\.8897815\.com\/long_video\/user\/info url script-response-body https://gjds.vip/QX/pojie/jysp.js

#百度网盘
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://gjds.vip/QX/pojie/bdwp.js

#大神水印
^https:\/\/dashen-api\.shuiyinyu\.com\/m\/user\/get_user_info url script-response-body https://gjds.vip/QX/pojie/dssy.js

#VUE 解锁会员pro
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://gjds.vip/QX/pojie/vue.js

#傲软抠图 vip
^https:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://gjds.vip/QX/pojie/aoruankoutu.js

#wink vip
^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info\.json.+ url script-response-body https://gjds.vip/QX/pojie/wink.js

#幕布 vip

^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://gjds.vip/QX/pojie/mubu.js

#千千配音VIP
^https:\/\/qianqianapi\.chanwind\.com\/v1\/user/* url script-response-body https://gjds.vip/QX/pojie/qqpy.js 

#小熊录屏
http://bbdd2101-default-recorders-4916-415735771.us-west-2.elb.amazonaws.com/pay/checkAppleSubscribeReceipt url script-response-body https://gjds.vip/QX/pojie/xxlp.js

#小学生语文
https://www.51haoxue.cn\/indexrun.php url script-response-body https://gjds.vip/QX/pojie/xxsyw.js

#马赛克
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://gjds.vip/QX/pojie/msk.js

#扫描全能王 高级账户
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://gjds.vip/QX/pojie/smw.js

#凡音钢琴
^http[s]?:\/\/gzfanyin.com\/api\/ums\/getMember url script-response-body https://gjds.vip/QX/pojie/fygq.js

#网速管家
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://gjds.vip/QX/pojie/wsgj.js

#讯游加速器
^https:\/\/api\.xunyou\.mobi\/api\/v1\/android\/sessions url script-response-body  https://gjds.vip/QX/pojie/xyjsq.js

# 删除微博开屏广告 - cherish
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js

# 自定义tab皮肤
^https://api.weibo.cn/2/!/client/light_skin url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js

# 非会员设置tab皮肤 - cherish
^https://new.vip.weibo.cn/littleskin/preview url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js

# 搜图神器+解锁VIP   wallpaper.soutushenqi.com
http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/stsq.js


# TestFlight账户管理脚本     testflight.apple.com
^https:\/\/testflight\.apple\.com\/v\d\/(app|account|invite)s\/ url script-analyze-echo-response https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js


# aktv      aktv111.com
^http:\/\/aktv111\.com\/api\/user.* url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/aktv.js

#  解锁PlaneFinder高级订阅    app-live.planefinder.net
^https?:\/\/app\-live\.planefinder\.net\/api\/v\d+\/account\/\w+\/login url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/PlaneFinder/Script/PlaneFinder.js

# > TIDAL解锁HiFi Plus   api.tidal.com
# 脚本功能：TIDAL解锁HiFi Plus   软件版本：2.48.0【美区下载】   下载地址：http://t.cn/A662gqIO
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js


#  一言解锁会员权限  app.yiyan.art
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js


#  百度贴吧去广告  ios15以上   新回复等通知功能不可用    tiebac.baidu.com
^http:\/\/c\.tieba\.baidu\.com\/(tiebaads\/commonbatch|c\/s\/sync) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-json.js
^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/c\/f\/(frs\/(page|threadlist|generalTabList)|pb\/page|excellent\/personalized) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-proto.js

# 色界视频解锁会员  sjapp.o3aqqc.work
# 使用方法：先登录账号再开脚本
^https?:\/\/sjapp\.o3aqqc\.work\/user\/(info|fansAndUpAndAttentionCnt)$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/SJSPCrack.js
^https?:\/\/sjapp\.o3aqqc\.work\/mov\/browse url request-header (\r\n)Authorization:.+(\r\n) request-header $1Authorization: 0547064bb9a5557d332023ab513a2e3784e38dc54f844f53cbb804d3a687c48b6c2e670c6aba3e564f$2
^https?:\/\/sjapp\.o3aqqc\.work\/(home\/message\/get|user\/getUserActivity|activityDialog\/getActivityDialogList|banner\/list2\?location=0|game\/programGameList) url reject-200

# 解锁一木记账会员 yimuapp.com
^https?:\/\/yimuapp\.com(:8082)?\/bookkeeping\/user\/getUser\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/YiMuJiZhang.js

# 美图秀秀(2022.01.17)    api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
# 注：解锁高级会员（包括但不限于：付费海报模板、高级滤镜、高级素材等），无须登陆
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js



# > 08 禁漫天堂[网页优化]@ddgksf2013 - 网站地址：https://18comic.org
^https?:\/\/18comic\.org(\/?$|\/([?]|album|photo).*$) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/18comic.js

# > 07 555影视[网页优化]@ddgksf2013 - 网站地址：https://555dy.vip
^https?:\/\/(www\.)?(5.*|o8tv)\.((cc|vip|com)\/$|(cc|vip|com)\/[a-z]+\/[0-9a-z-]+\.html) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/555.js

# > 06 剧迷[网页优化]@ddgksf2013 - 网站地址：https://gimytv.app
^https?:\/\/gimytv\.(app\/$|app\/(browse\/)?[0-9a-zA-Z-_]+\.html) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/gimytv.js


# > 04 天空影视[网页优化]@ddgksf2013 - 网站地址：https://www.tkys.tv
^https?:\/\/www\.tkys\.(tv\/$|tv\/(voddetail|vodplay)\/[0-9a-z-]+\.html$) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/tkys.js

# > 03 厂长电影[网页优化]@ddgksf2013 - 网站地址：https://www.qianoo.cn
^https?:/\/www\.qianoo\.(cn\/$|cn\/[0-9a-zA-Z_\/]+\.html$) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/qianoo.js

# > 02 真不卡[网页优化]@ddgksf2013 - 网站地址：https://www.zhenbuka5.com
^https?:\/\/www\.zhenbuka.*\.com(\/?$|\/([?]|vod).*$) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/zhenbuka.js


#  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# 南方周末(2022.01.21)。     api.infzm.com
# 注：登陆后，白嫖年费会员到2030年，白嫖年费会员所有课程 ，白嫖所有付费课程。
^https?:\/\/api\.infzm\.com\/mobile\/(user|contents\?|contents\/\d+\?|contents\/\d+\/isview\?|course_borrow|courses\/\d+\?|mall|course_items) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/NanFangZhouMo.js


# 七猫小说(2022.01.18).    *.wtzw.com
# 柱：解锁终身会员，无任何下载、阅读、听书限制，去除所有广告（还有广告卸载重装）
^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/QiMaoXiaoShuo.conf

# 菜谱大全(2022.01.19).    apiios_dq.xiangha.com, appweb_dq.xiangha.com, 101.200.225.157
^https?:\/\/apiios_dq\.xiangha\.com\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/CaiPuDaQuan.js
^https?:\/\/appweb_dq\.xiangha\.com\/center\/pay\/home url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/CaiPuDaQuan.js

# 香哈菜谱    apiios.xiangha.com, 39.97.157.167。    除课程外，解锁所有限制
^https?:\/\/apiios\.xiangha\.com\/main\d+\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/XiangHaCaiPu.js

#波点音乐mv屏蔽
^http:\/\/bd-api\.kuwo\.cn\/api\/service\/resource\/musicResource\/.+ url reject
^https:\/\/bodiancdn\.kuwo\.cn\/.+\.mp4 url reject
^http:\/\/bd-api\.kuwo\.cn\/api\/service\/resource\/view\?uid url reject
^http:\/\/bd-api\.kuwo\.cn\/api\/service\/music\/recommendList\?uid url reject

# www.babybooks.top,vip.0818km.cn,vni.kwaiying.com
#汉堡儿童睡前故事
^https:\/\/www\.babybooks\.top\/v0\/profile url script-response-body https://gjds.vip/QX/pojie/sqgs.js
#二蛋影视
^http:\/\/vip\.0818km\.cn\/login\/login\/veifys\.html.+ url script-response-body https://gjds.vip/QX/pojie/egdd.js
#bigshot
^https:\/\/vni\.kwaiying\.com\/api\/v1\/user\/profile url script-response-body https://gjds.vip/QX/pojie/bigshot.js

# 随手记.     api.feidee.net, userapi.feidee.net, tg.feidee.com, community.feidee.com
# 注：解锁付费皮肤
^https?:\/\/((user)?api|community)\.feidee\.(net|com)\/(v\d\/(pay/vip|profile/basic_info|app_themes/types)|transfer\/gapi\/accurat\/v\d\/tasks) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/SuiShouJi.js
^https?:\/\/api\.feidee\.net\/v\d\/app_themes\/\d+\/download url script-echo-response https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/SuiShouJi.js
^https?:\/\/tg\.feidee\.com\/online_ad\/ url reject

# 马卡龙玩图   app.api.versa-ai.com
^https?:\/\/app\.api\.versa-ai\.com\/pay\/order\/iap\/check url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MaKaLongWanTu.js

# NOMO CAM 解锁订阅  nomo.dafork.com
^https?:\/\/nomo\.dafork\.com\/api\/v3\/register\/phone_signin$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NoMoCamProCrack.js

# 微信读书   i.weread.qq.com, 101*.*.*, 116.*.*.*, 140.*.*.*, 183.*.*.*, 203*.*.*
# 使用方法：不支持最新版本，仅支持5.5.1版本； 会员页面无法打开，请关闭去广告规则
# ^https?:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/WeRead.conf

# 流利说·阅读   vira.llsapp.com
# 使用方法：会员时长到2030年，破解的标志是打开阅读️限制，不会提示会员才能看️️️，如果没有显示会员，剩余天数999。必须卸载重装！
^https?:\/\/vira\.llsapp\.com\/api\/v\d\/\w+\/\w+$  url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/LiuLiShuo-YueDu.js

# 鱿鱼视频解锁会员    api.youyu*
# 使用方法：1.退出登陆 2.开启QX脚本 3.重新登陆账号
^https?:\/\/api\.youyu.*\/api\/account\/loginBy(Phone|Password)$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/YYSPCrack.js

# keep解锁会员    *.gotokeep.com
^https://(.+).gotokeep.com(/athena/v5/people/my|/nuocha/plans) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/keep.js

# 视频去广告   m.iqiyi.com, z1.m1907.cn, m.youku.com, m.v.qq.com, m.bilibili.com

# 爱奇艺
(^https?:\/\/m\.iqiyi\.com\/v_.*) url 307 https://z1.m1907.cn/?jx=$1
# 优酷视频
(^https?:\/\/m\.youku\.com\/.*) url 307 https://z1.m1907.cn/?jx=$1
# 腾讯视频
(^https?:\/\/m\.v\.qq\.com\/x\/(m\/)?play.*) url 307 https://z1.m1907.cn/?jx=$1
# 哔哩哔哩
(^https?:\/\/m\.bilibili\.com\/bangumi\/play\/.*) url 307 https://z1.m1907.cn/?jx=$1

#绅士摄影解锁会员
^https?:\/\/appa\.lingdu2019\.cn\/api\/(my_home\/\w{9}|portrait\/\w{15,23}|iport/luffy/api/\w{7}/\w{9}|send\/\w{18})$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/LingDuPortraitProCrack.js

# 糖心网页版解锁会员  网址：http://txv04.com/
^https?:\/\/txv04\.com\/h5\/user\/findQrcode$ url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/tangxin.js

#Notability解锁订阅
^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NotabilityProCrack.js

#解锁Spotify 部分 Premium ，需ios15以上系统   spclient.wg.spotify.com
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js

#取消绑定京东店铺会员。 点击会员卡直达注销页面
#^https:\/\/shopmember\.m\.jd\.com\/shopcard\/\?(venderId=[0-9]+).* url 302 https:\/\/shopmember\.m\.jd\.com\/member\/memberCloseAccount\?$1

#替换支付宝内淘票票评分为豆瓣评分
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopshowapi\.getextendshowbyid url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/TaoPiaoPiao/taopiaopiao.js

# 豆瓣电影和电视剧添加便捷播放按钮    m.douban.com
^https?:\/\/m\.douban\.com\/movie\/subject\/\d+\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/DouBan.js

#百度网盘解锁vip，视频倍速播放     pan.baidu.com
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bdcloud.js



#解锁悟饭游戏厅  iosv2.cjapi.papa21.com
^http:\/\/iosv2\.cjapi\.papa21\.com\/user\/ios_store_pay_edition\/members_login\/check_members_identity_v2 url script-response-body https://raw.githubusercontent.com/byour13/Script/main/wukongplay.js

#微信屏蔽跳转
#在微信中打开淘宝等被屏蔽链接，点击 Surge/QuantumultX 通知跳转到 Safari 或淘宝 App
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/weixin110.js

#VUE Vlog 解锁高级功能 (需登录)   api.vuevideo.net
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

#Bigshot 解锁高级特权(需登录)   vni.kwaiying.com
^https:\/\/vni\.kwaiying\.com\/api\/v1\/user\/profile url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js

# 强制跳转百度UA    *.baidu.com
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# 知乎去广告。  www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226
# 知乎处理用户信息
^https?:\/\/api\.zhihu\.com\/people\/ url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎信息流去广告
^https?:\/\/api\.zhihu\.com\/(moments|topstory)(\/|\?)?(recommend|action=|feed_type=)(?!\/people) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/api\.zhihu\.com\/v4\/questions url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎获取黑名单
^https?:\/\/api\.zhihu\.com\/settings\/blocked_users url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎官方消息去广告
^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message|timeline\/entry\/system_message) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎预置关键词去广告
^https?:\/\/api\.zhihu\.com\/search\/preset_words\? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 优化软件配置
^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热搜去广告
^https?:\/\/api\.zhihu\.com\/search\/top_search\/tabs\/hot\/items url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热榜去广告
^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists?(\?|\/) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎评论去广告
^https?:\/\/api\.zhihu\.com\/(comment_v5\/)?(answers|comments?|articles|pins)\/\d+\/(root_|child_)?comments? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎屏蔽关键词解锁
^https?:\/\/api\.zhihu\.com\/feed-root\/block url script-analyze-echo-response https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 拦截知乎开屏广告
URL-REGEX,^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2\? url reject-dict
# 知乎去除最常访问
^https?:\/\/api\.zhihu\.com\/moments\/recent url reject-dict
# 知乎去除回答下的广告
^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations url reject-dict
# 知乎其他广告拦截
^https?:\/\/api\.zhihu\.com\/(notifications\/v3\/count|v3\/package|me\/guides|drama\/living-info|ad|fringe|commercial|market\/popovers|.*featured-comment-ad) url reject-dict
# 知乎拦截部分预加载
# ^https?:\/\/www\.zhihu\.com\/appview\/(p|v2\/answer|zvideo)\/.*entry=(preload-topstory|preload-search|preload-subscription) url reject-dict
# 知乎网页版去广告
^https?:\/\/www\.zhihu\.com\/api\/v4/(questions|anwsers)\/\d+/related-readings url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v4\/hot_recommendation url reject-dict
^https?:\/\/www\.zhihu\.com\/commercial_api\/banners_v3\/mobile_banner url reject-dict
^https?:\/\/zhuanlan\.zhihu\.com\/api\/articles\/\d+\/recommendation url reject-dict
# 知乎品牌提问广告
^https?:\/\/api\.zhihu\.com\/brand\/question\/\d+/card\? url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v\d+\/brand\/question/\d+/card\? url reject-dict
# 屏蔽消息页面上拉的用户精选
^https?:\/\/api\.zhihu\.com/moments/hybrid\? url reject-dict
# 知乎下发的配置，如皮肤等
^https?:\/\/api\.zhihu\.com\/ab\/api\/v1\/products\/zhihu\/platforms\/ios\/config url reject-200
# 屏蔽知乎“我的”页面推荐开通会员的卡片
^https?:\/\/api\.zhihu\.com\/people\/self\/new_user_card url reject-200
# 知乎去除Tab页关注人头像
^https?:\/\/api\.zhihu\.com\/moments\/tab_v2 url reject-dict

#EMBY
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/zwf234/rules/master/js/Emby.js

# Netflix评分
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js

# 香蕉视频   解锁部分观看限制    官网: https://www.aa2.app    
#ios.fuliapps.com, apple.fuliapps.com, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.xiangxiangapps.com, *.pipiapps.com
^https?:\/\/.+?\.(pipi|fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|(\/|)vod\/reqplay\/) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

#JibJab 解锁高级功能   origin-prod-phoenix.jibjab.com
https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/jibjab.js

#菠萝视频解锁vip无限看，没破解付费（by 黑科技）    下载地址https://aff.polomv.com           api.myb6api.com:8080
^http:\/\/api\.myb6api\.(org|com):8080\/api\.php\/api\/users\/getBaseInfo url script-response-body https://qxnav.com/rules/QuantumultX/js/blsp.js
#桃子视频解锁会员     api.*.xyz
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/user\/info url script-response-body https://qxnav.com/rules/QuantumultX/js/taozi.js
##酷咪视频VIP无限看    酷咪下载地址 km.app      lginstaacademy.com
^https:\/\/lginstaacademy\.com(\/\/api\/movie\/addPlay|\/\/api\/member|\/api\/video_clip\/play|\/api\/app\/message_list|\/api\/home\/index_recommend|\/\/api\/movie\/play\/|\/\/api\/vip\/index) url script-response-body https://qxnav.com/rules/QuantumultX/js/kumiyw.js

#陆琪讲故事 解锁电台   www.luqijianggushi.com
^https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/luqi.js

#泼辣修图    api.polaxiong.com
https:\/\/api\.polaxiong\.com\/v1\/payments\/appleiap\/receipts/confirmation url script-request-body https://qxnav.com/rules/QuantumultX/js/pola.js

#显示netflix的收视率（IMDb）  ios.prod.ftl.netflix.com
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js

#国区TF无法下载已下架app规则
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

# YouTube去广告      -redirector*.googlevideo.com, *.googlevideo.com, www.youtube.com, s.youtube.com, youtubei.googleapis.com

(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) url 302 $1$2$3
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject

^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/player\/ad_break url reject
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject

#无字幕机翻简体中文
https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=(?!(zh|zh\-Hans)&)((?!&tlang=zh\-Hans).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hans HTTP/1.1$1
// 简体；直接订阅  有繁体翻译介绍，打开链接查看
// https://raw.githubusercontent.com/id77/QuantumultX/master/rewrite/Youtube_CC.conf

#大象冥想 解锁VIP&付费音乐
^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) url script-response-body https://raw.githubusercontent.com/photonmang/quantumultX/master/dxmx.js

# 知音漫客VIP   user*.zymk.cn
^https:\/\/(userpurchased|user-api)\.zymk\.cn\/v\d\/(userpurchased\/paychapters|getuserinfo)\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

# PicsArt美易 pro    api.picsart.c*, api.meiease.c*
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

# WPS解锁  超级会员、wps会员、稻壳会员  *.docer.wps.cn, vipapi.wps.cn, account.wps.cn, account.wps.cn, *account.wps.com

# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js

^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$ url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js

#蜗牛睡眠  所有功能解锁VIP&付费音乐
^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) url script-response-body https://github.com/photonmang/quantumultX/raw/master/wnsm.js

#网易蜗牛读书 解锁特权   p.du.163.com
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

# VSCO滤镜VIP     vsco.co, api.revenuecat.com
^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

#人人视频   api.rr.tv
^https:\/\/api\.rr\.tv\/user\/profile* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/rrtvvip.js

# 酷我音乐    rich.kuwo.cn, *.kwcdn.kuwo.cn, mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn, omp-audiobookpay.lrts.me

# 酷我去广告
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url reject

#  酷我听书
https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url reject-dict
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p\?op=get_advertright url reject-dict
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
^https?:\/\/audiobookpay\.kuwo\.cn/a\.p url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
https://tingshu.kuwo.cn/v2/api/user/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
https?:\/\/audiobooks\.kuwo\.cn\/v2\/api\/user\/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js

#  酷我音乐_解锁Vip皮肤设置
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme  url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
#  酷我音乐_解锁无损下载（先选听无损，再下载无损）
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver=\d$ url script-request-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/kuwodl.js
#  酷我音乐_解锁会员
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
#  酷我音乐_解锁NEW会员
^https?:\/\/vip1\.kuwo\.cn\/vip\/enc\/user\/ url script-request-header https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/kuwovip.js
#  *kuwo*,*lrts*
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/kwyy.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/kwyy.js


#去除微信公众号文章底部广告    mp.weixin.qq.com
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js


#小小影视   无限观看&免广告  官网：www.xiao1.app       
https:\/\/.*\.(xiaoxiaoapps|xiaoxiaoimg)\.com\/(ssp-svr\/ssp\/list3|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/xxysad.js

#substore    浏览器访问https://sub-store.vercel.app/#/
^https?:\/\/sub\.store url script-analyze-echo-response https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/backend/sub-store.min.js

# 滴答清单 pro     dida365.com, ticktick.com
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/DiDaQingDan.js

# 爱美剧Vip (by huihui）(官网：app.meiju2018.com)    api.bjxkhc.com
#ads
^http(s)://api.bjxkhc.com/index.php/app/ios/ads/index url reject-dict
^http(s)://api.bjxkhc.com/index.php/app/ios/ver/index_ios$ url reject
^http(s)://api.bjxkhc.com/index.php/app/ios/pay/ok$ url reject-dict
#VIP&ads
^https?:\/\/api.bjxkhc.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js

# NiChi 解锁素材
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/NiChi.js

# hostname,解决部分网站打不开  iflow.uc.cn
 

#以下有效性未测试，请自行测试

# 大片-视频编辑器 VIP
^https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js

# 小影 解锁Vip (By @hiepkimcdtk55)
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

##越南老哥langkhach270389
#vsco
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/vsco.js

#gyroscope
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Gyroscope.vip.js

#Termius 
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Terminus.js

#Vivavideo
^https:\/\/viva-asia1\.vvbrd\.com\/api\/rest\/u\/vip* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/vivavideo.vip.js

#Undfold
^https:\/\/api\.unfold\.app\/v1\/ios\/receipts$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Unfold.vip.js

#Nhaccuatui
^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/nhaccuatui.js

#Memrise
^https:\/\/api\.memrise\.com\/.+\/(me\/$|dashboard\/$|leaderboards\/following\/) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/memrise.vip.js

#sync
^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/syn.me.js

#elsaresponse
^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/elsa-response.js

#elsarewrite
^https:\/\/pool\.elsanow\.io\/content\/api\/v1\/modules\/download$  url request-header (\r\n)x-session-token:.+(\r\n) request-header $1x-session-token: F3S0w0bysBQFdbjtxpFurrFv2ItBBcBkVQxUddQW+9vjt2JXM751ksqq5GAWpkl+kk9nhig9BGh9JhYHQaokmendY6zLZDscHiRkZD2HrdJclKVCLordAARJhYIrf5C+5OSK6ax2TA45CKi8S09FEtYXN4noXO7gt42NT6WPIv6DKhdIwVxQuIAMLU5abmpMTDlyWeI4ulBWcOQbuZWWZg==

#drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com/.*/functions\/prod-4-syncPurchases\/invocations$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/drops.js

#mondly
^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/mondly.vip.js

#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/busuu.vip.js

#Videoshow
^https:\/\/owa\.videoshowiosglobalserver\.com\/.*\/iosPayClient url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/videoshow.vip.js

#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/elevate.vip.js

#beautyplus
^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/beautyplusvip.js

#camera360
^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/camera360.vip.js

#zingtv
^https?:\/\/api\.tv\.zing\.vn\/.*/user* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/zingtvvipv1.js

#calm
^https:\/\/api\.calm\.com\/me$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/calm.vip.js

#remove_manage
^https:\/\/www\.calm\.com\/mobile\/manage-subscription\?token=*  url reject-img

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Lightroom.js

#Pdfexpert
^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Pdfexpert.vip.js

#productive&sleepzy&weather live
^https:\/\/subs\.platforms\.team\/.+\/apple\/verify$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/productive.js

#Musixmatch
^https:\/\/apic\.musixmatch\.com\/ws\/.*\/config\.get url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/musixmatch.miao.js

#boom
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url 302 https://qxnav.com/rules/QuantumultX/js/yue/boom.vip.rsp

#mimo
^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/mimo.vip.js

#Bright
^https:\/\/engbright\.com\/app-portal\/apple\/receipt$ url 302 https://qxnav.com/rules/QuantumultX/js/yue/Bright.rsp

#lingokids
^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/lingokids.vip.js

#musicalm
^https:\/\/www\.peacefulsoundsapp\.com\/api\/v1\/init$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/musicalm.js

#duolingo_test
^https:\/\/duolingo-leaderboards-prod\.duolingo\.com\/leaderboards* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/duolingo.js

#ulike
^https:\/\/commerce-i18n-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/ulike.js

#adguardpremium
^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$ url 302 https://qxnav.com/rules/QuantumultX/js/yue/Adguard.rsp

#zingmp3
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getUserInfo\?data=* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/zingmp3.js

#Blinkist
^https:\/\/api\.blinkist\.com\/v4\/(me$|me.json$|me\/access$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/blinkist.js

#sololearn 
^https:\/\/api\.sololearn\.com\/(Profile\/GetProfile$|authenticateDevice$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/sololearn.js

#kinemaster
^https:\/\/api-kinemaster-assetstore\.(nexstreaming|kinemasters)\.com\/.*\/product\/verifyReceipt$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/kinemaster.js

#pushover
^https:\/\/api\.pushover\.net\/1\/messages\.json* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/pushover.js

#CamScanner
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/CamScaner.js

#over
^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/over.vip.js

#speak&translate
^https:\/\/receipt-validator\.herewetest\.com\/apple\/verifyTransaction$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/speak&translate.js

#document
^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/documents.js

#workingcopy
^https:\/\/education\.github\.com\/api\/user$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/workingcopy.js

#draft
^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/draft.js

#phothop&PSexpress
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/photoshop.js

#itranslate&lingo&voice&converse
^https:\/\/ssl-api\.itranslateapp\.com\/.*\/subscriptions\/.*\/ios$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/itranslate.js

#ulysses
^https:\/\/sk\.ulysses\.app\/api\/v1\/user_offers$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

^https:\/\/sk\.ulysses\.app\/api\/v1\/itunes_receipt_verify$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/ulysses.js

#pre_dayone
;^https:\/\/dayone\.me\/api\/users$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

#dayone
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/dayone.js

#endel
^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/endel.js

#shred
^https:\/\/api\.shred\.app\/verifyReceipt$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/shred.js

#nichi
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/nichi.js

#grammarly
^https:\/\/subscription\.grammarly\.com\/api\/v1$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/grammarly.js

#splice
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/splice.js

#planner5d
^https:\/\/planner5d\.com\/api\/sets url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/planner5d.js

#playerxtreme
;^https:\/\/secure\.istreamer\.com\/backend$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

^https:\/\/secure\.istreamer\.com\/backend$ url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/playerxtreme.js

#all apps monkey
^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/monkey.js

#textnow
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body https://qxnav.com/rules/QuantumultX/js/yue/Textnow.js


##大雄脚本组

#彩云（解锁VIP）   biz.caiyunapp.com
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://gjds.vip/QX/pojie/cytq.js


#头脑吃鸡
^https://tncj.hortorgames.com/chicken/fight/(answer|findQuiz) url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/tncj/tncj.min.js

# XMind思维导图   www.xmind.cn, www.xmind.net
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/xmind.js

# 什么值得买(By blackmatrix7)
^https:\/\/homepage-api.smzdm.com\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
^https:\/\/haojia-api.smzdm.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
^https:\/\/article-api.smzdm.com\/article\/index_home_page url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
