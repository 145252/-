# 以 “;” 或 “#” 或 “//” 开头的行为注释行。

//   微信公众号：木木IOS分享

# general模块内为一些通用的设置参数项
[general]


# QuantumultX会对server_check_url指定的网址进行相应测试，以确认节点的可用性
server_check_url=http://captive.apple.com/

# list中的域名将不使用fake-ip方式, 多个域名用“, ”连接。其它域名则全部采用 fake-ip及远程解析的模式
dns_exclusion_list = *.cmbchina.com, *.cmpassport.com, *.jegotrip.com.cn, *.icitymobile.mobi, *.pingan.com.cn, id6.me

# 下列表中内容将不经过QuantumultX的处理
excluded_routes=10.0.0.0/8, 127.0.0.0/8, 169.254.0.0/16, 192.0.2.0/24, 192.168.0.0/16, 198.51.100.0/24, 224.0.0.0/4

# IP_bili_cn js-用于获取、展示节点信息
geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/IP_API.js

# 资源解析器，自定义各类远程资源的转换、如节点、规则、filter、复写、rewrite等
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js

# 配置文件路径显示头像
profile_img_url=https://raw.githubusercontent.com/Orz-3/mini/none/Zero.png

[dns]
# 指定的 dns服务器
server=119.29.29.29
server=223.5.5.5
server=1.0.0.1
server=8.8.4.4
server=114.114.114.114
server=202.141.176.93 
server=202.141.178.13
server=117.50.10.10
server=223.5.5.5
server=119.29.29.29:53
server=119.28.28.28
# 指定域名解析dns
server=/*.taobao.com/223.5.5.5
server=/*.tmall.com/223.5.5.5
server=/*.alipay.com/223.5.5.5
server=/*.alicdn.com/223.5.5.5
server=/*.aliyun.com/223.5.5.5
server=/*.jd.com/119.28.28.28
server=/*.qq.com/119.28.28.28
server=/*.tencent.com/119.28.28.28
server=/*.weixin.com/119.28.28.28
server=/*.bilibili.com/119.29.29.29
server=/hdslb.com/119.29.29.29
#server=/*.163.com/119.29.29.29
#server=/*.126.com/119.29.29.29
#server=/*.126.net/119.29.29.29
#server=/*.127.net/119.29.29.29
#server=/*.netease.com/119.29.29.29
#server=/*.mi.com/119.29.29.29
#server=/*.xiaomi.com/119.29.29.29

# 策略组
# 用于分发分流规则传递过来的网络请求
[policy]
static=节点选择, direct, 手动选择, 延迟最低, proxy, img-url=https://raw.githubusercontent.com/Orz-3/face/master/China.png

static=手动选择, server-tag-regex=^((?!网易).)*$, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Bili.png

url-latency-benchmark=延迟最低, server-tag-regex=^((?!网易云).)*$, check-interval=900, tolerance=0, img-url=https://raw.githubusercontent.com/Orz-3/face/master/YouTube.png

static=国外网站, proxy, direct, 手动选择, 延迟最低, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Global.png

static=国外影视, proxy, direct, 手动选择, 延迟最低, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Global.png

static=Netflix, proxy, direct, 手动选择, 延迟最低, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Netflix.png

static=Apple服务, direct, proxy, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Apple.png

static=网易云解锁, direct, proxy, reject,木木解锁

static=emby, direct, proxy, reject, 延迟最低, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Global.png

static=广告拦截, reject, direct, img-url=https://raw.githubusercontent.com/Orz-3/face/master/Music.png


# 远程分流规则订阅
# 将网络请求进行分流，网络请求的走向由匹配到的策略组决定
# 部分规则有先后顺序要求，调整顺序可能失效
[filter_remote]


https://ghproxy.com/https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Optional/Netease%20Music.list, tag=网易云解锁, force-policy=网易云解锁, update-interval=172800, opt-parser=true, enabled=true
# 超过4万条广告规则, 阻止常见的APP广告/隐私/行为/数据/流量/劫持的统计和追踪
https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block.txt, tag=AD_Block（4万条去广告规则）, force-policy=广告拦截, update-interval=86400, opt-parser=true, enabled=true

# 超过6万条国内外广告规则, 可以与"AD_Block.txt"一起使用, 注: 可能有一些误杀, 请谨慎使用
https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block_Plus.txt, tag=AD_Block_plus（6万条去广告规则）, force-policy=广告拦截, update-interval=86400, opt-parser=true, enabled=true

# 广告拦截
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list, tag=广告拦截, force-policy=广告拦截, update-interval=86400, opt-parser=false, enabled=true

# 隐私保护
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Privacy.list, tag=隐私保护, force-policy=广告拦截, update-interval=86400, opt-parser=false, enabled=true

# 运营商劫持或恶意网站
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list, tag=运营商劫持, force-policy=广告拦截, update-interval=86400, opt-parser=false, enabled=true




# 屏蔽系统更新
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/BlockiOSUpdate.list, tag=屏蔽系统更新, force-policy=reject, update-interval=86400, opt-parser=true, enabled=true

# 国内视频策略使用：国内视频App时选direct(直连)，港台视频App时选节点选择（Proxy)
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/NetEaseMusic/NetEaseMusic.list, tag=解锁网易云音乐, force-policy=网易云音乐, update-interval=86400, opt-parser=true, enabled=false

https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/StreamingCN.list, tag=国内视频, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true

# 国内网站
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/China.list, tag=国内网站, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true

# 规则修正，无需设置策略偏好，保持启用即可
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list, tag=规则修正, update-interval=86400, opt-parser=true, enabled=true

# 网易云音乐解锁

#EMBY解锁
https://raw.githubusercontent.com/Tartarus2014/For-own-use/master/Ruleset/Emby/Emby.list, tag=EMBY解锁, force-policy=emby, update-interval=172800, opt-parser=true, enabled=true
# Netflix
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Video/Netflix.list, tag=Netflix, force-policy=Netflix, update-interval=86400, opt-parser=true, enabled=true

#Apple服务
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/AppStore.list, tag=AppStore, force-policy=Apple服务, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/AppStoreConnect.list, tag=AppStoreConnect, force-policy=Apple服务, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/TestFlight.list, tag=Testflight, force-policy=Apple服务, update-interval=86400, opt-parser=true, enabled=true

# 国外视频
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Streaming.list, tag=国际视频, force-policy=节点选择, update-interval=86400, opt-parser=true, enabled=true

# 国外网站
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list, tag=国外网站, force-policy=节点选择, update-interval=86400, opt-parser=true, enabled=true

# 远程重写订阅
# 包含主机名hostname以及复写rewrite规则
[rewrite_remote]
https://raw.githubusercontent.com/hhse/Mul4hong/master/azj.js, tag=爱证件, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/TestFlightDownload.conf, tag=tf 管理, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js, tag=tf共享, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/hhse/Mul4hong/master/b612.js, tag=B612, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili-qx.conf, tag=bilibili, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/39Hz/QuantumultX/d4fa81fd9121d8489eac85550e0ad8b556661073/Rewrite/RemoveAds.conf, tag=11, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/xwxiewu/QuantumultX/master/Reject.conf, tag=bilibili, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/qxrules.conf, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/githubdulong/Script/master/jd_price2.sgmodule, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Plugin/Historical%20Price.plugin, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/Orz-3/QuantumultX/master/JD_TB_price.conf, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/hhse/Mul4hong/master/gear.js, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/hhse/Mul4hong/master/ccjt.js, update-interval=172800, opt-parser=true, enabled=false
https://raw.githubusercontent.com/hhse/Mul4hong/master/wf.js, tag=悟饭, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/yqc007/QuantumultX/master/PornComicsCrack.js, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caiyun.js, tag=彩云天气, update-interval=172800, opt-parser=true, enabled=true
#看漫画
https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/tailadv.conf, tag=开屏广告, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf, tag=神机去广告, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf, tag=神机重定向, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/AdvertisingPlus.conf, tag=神机去广告Plus, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/mymoonyue/QuantumultX/master/Scripts/emby.conf, tag=Emby, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/YouTubeAds.conf, tag=YouTube去广告, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Rewrite/WeChat.conf, tag=公众号去广告, update-interval=172800, opt-parser=false, enabled=true
https://github.pengym.workers.dev/https://raw.githubusercontent.com/app2smile/rules/master/module/baidu-no-redirect.sgmodule, tag=优化百度跳转, update-interval=172800, opt-parser=true, enabled=true
https://raw.githubusercontent.com/elecV2/QuantumultX-Tools/master/betterweb/csdn.conf, tag=csdn浏览优化, update-interval=172800, opt-parser=false, enabled=true


[http_backend]
https://raw.githubusercontent.com/ztxtop/x/main/zqGaReadData.js, host=box.com, tag=中青数据, path=^/, enabled=true
# BoxJS改为使用http backend方式，访问地址改为http://127.0.0.1:9999，更新配置后请长按风车-更新，然后重启代理之后再开启backend开关
https://raw.githubusercontent.com/chavyleung/scripts/master/chavy.box.js, host=boxjs.com, tag=BoxJS(访问地址：http://127.0.0.1:9999), path=^/, enabled=true

# 本地分流规则
# 相同规则下本地规则优先生效
[filter_local]
host, img.kuaibozy.net, 广告拦截
host, img.kuaibozy.net, reject
host, api.revenuecat.com, direct
host, api.revenuecat.com, 节点选择
host, xp.apple.com, direct
//京东比价
host-suffix, cc.m.jd.com, direct
host, amp-api-edge.apps.apple.com, direct
host, xp.apple.com, Apple服务
host, amp-api-edge.apps.apple.com, Apple服务
# Netease Music Advertising
host,admusicpic.music.126.net,reject
host,iadmat.nosdn.127.net,reject
host,iadmusicmat.music.126.net,reject
host,iadmusicmatvideo.music.126.net,reject

#广告域名
host,qzs.qq.com,reject


host, gateway.icloud.com.cn, direct
host, bag.itunes.apple.com, direct
# 绕过企业证书过期
host, ocsp.apple.com, reject


#🔥萤去广告下载解锁
HOST-SUFFIX,huoying666.com,direct
host,*.pangolin-sdk-toutiao.com,reject
host,*.pglstatp-toutiao.com,reject


#福利https://qa666.xyz?tg=1959655去广告
host, www.govchengdu.cn, reject
host, pv.dakawm.cc, reject
host, www.govxian.cn, reject



# Local Area Network 局域网
host-suffix, local, direct
ip-cidr, 10.0.0.0/8, direct
ip-cidr, 127.0.0.0/8, direct
ip-cidr, 172.16.0.0/12, direct
ip-cidr, 192.168.0.0/16, direct
ip-cidr, 224.0.0.0/24, direct

# GeoIP China
geoip, cn, direct

#Final：不在规则中的剩余请求，按照自己的需求选择direct(直连)或节点选择(Proxy)
final, 节点选择

# 本地服务器（节点）
[server_local]
shadowsocks=one.hmbiplc-01.com:53011, method=chacha20-ietf-poly1305, password=y552gATTP54tw1#kEXx, fast-open=false, udp-relay=false, tag=Tokyo [JP] - 194


http=124.223.189.117:7978, fast-open=false, udp-relay=false, tag=木木解锁

# 服务器引用（机场订阅）
[server_remote]



[rewrite_local]
# 本地重写

^https:\/\/comic\.321mh\.com\/v2 url script-response-body kmh.js
^https:\/\/subs\.platforms\.team\/v2\/apple\/verify url script-response-body https://raw.githubusercontent.com/hhse/github_ddgksf2013_Cuttlefish/master/Crack/productive.js
^http[s]:\/\/app\.yiyan\.art url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/yiya.js
^https:\/\/mobile-api\.adguard\.com\/api\/2\.0\/ios_validate_receipt url script-response-body https://raw.githubusercontent.com/hhse/github_ddgksf2013_Cuttlefish/master/Crack/adguard.js
 # 油管去广告 
 (^https?:\/\/(?!redirector)[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+)(ctier=L)(&.+) url 302 $1$4 
 ^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+(&oad|ctier) url reject 
   ^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject 
 ^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject 
 ^https?:\/\/\s.youtube.com/api/stats/qoe?.*adformat= url reject 
https:\/\/[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url reject
https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body ng-pro-2.js
#微信自动阅读
^https?://mp\.weixin\.qq\.com/s.+? url response-body </script> response-body setTimeout(()=>window.history.back(),8000); </script>

^http[s]?:\/\/api.ttqww.com//api/login/thirdInfoRegister.*$ url request-body .+ request-body device=f3e0e29edcd54f3cb205b07ddc10c5b0&downfrom=AppStore&imei=d94addaa452f53532d2a5e5fd9bc85ea5f7af901&invitation=&mark=1&model=iPhone&os=ios&sign=be7c7050ff8826b7f3712820e81fef34&time=1654001012951&unionid=f3e0e29edcd54f3cb205b07ddc10c5b0&user_ip=220.195.70.50&uuid=f3e0e29edcd54f3cb205b07ddc10c5b0&version=1.0.0

^http[s]?:\/\/api.ttqww.com//api(/user/detail|/about/shanping|/home/notice|/home/video_detail).*$ url script-response-body xmsp.js

^http:\/\/iosv2\.cjapi\.wufan88\.com url script-response-body wf.js
^http:\/\/cc\.lzjoy\.com\/.?urlparam.+$ url script-response-body ccjt.js
^http[s]:\/\/app\.yiyan\.art url script-response-body yiyan.js
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/caiyun_svip.js
^https:\/\/game\.xiaojukeji\.com\/api\/game\/plant url script-response-body post.js
^https:\/\/comic\.321mh\.com url script-response-body https://ghproxy.com/https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js


# 获取京东Cookie. 
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js


# 小米运动获取Token
^https:\/\/account\.huami\.com\/v2\/client\/login url script-response-body https://ghproxy.com/https://raw.githubusercontent.com/jim114042/quanx/main/js/xmSports.js


#csdn去登入提醒
^https:\/\/blog\.csdn\.net\/sw\.js$ url reject 


#京东辅助登入
^https?:\/\/home\.m\.jd\.com\/userinfom\/QueryUserInfoM url script-response-body https://raw.githubusercontent.com/dompling/Script/master/jd/jd_login_help2.js
^https?:\/\/plogin\.m\.jd\.com\/login\/login url script-response-body https://raw.githubusercontent.com/dompling/Script/master/jd/jd_login_help2.js

#微信屏蔽链接跳转
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js

# 定时脚本任务
[task_local]

15 17 * * * xiaomi.js, tag=小米运动, img-url=https://6678888.xyz/quantumultX/xmbs.png, enabled=false
event-interaction https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/TaskLocal/NeteaseMusicUnlockCheck.js, tag=网易音乐查询, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netease_Music_Unlock.png, enabled=true


event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体-解锁查询, img-url=checkmark.seal.system, enabled=true



#证书和主机名
# 导入配置之后记得安装并信任证书，用于Https解析
[mitm]
passphrase = DC68A859
p12 = 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

hostname = comic.321mh.com, api-cdn.321mh.com, zhengjian.flyingeffect.com, productive.herewetest.com, subs.platforms.team, subs.platforms.team, app.yiyan.art, mobile-api.adguard.com, buy.itunes.apple.com, mp.weixin.qq.com, api.m.jd.com, iosv2.cjapi.wufan88.com, cc.lzjoy.com, api.revenuecat.com, vstou.faxingwu.com, *.music.163.com, zebra.maka.im, commerce-i18n-api.faceu.mobi, commerce-api.faceu.mobi, pay.wecut.com, ajj.fuguizhukj.cn, api.ergeduoduo.com, step-money.quanxiangweilai.cn, *.xiaodouzhuan.cn, api.bspapp.com, jd.xwoxwo.com, api.st615.com, api-access.pangolin-sdk-toutiao.com, num.springglasses.com, api.gzswin.cn, api.gezs.cc, *.palmestore.com, wlkdapi.zhongchuanjukan.com, *.bdcloudapi.com, game.xiaojukeji.com, www.ttljf.com, x.elong.com, account.wps.cn, api3-normal-lq.toutiaoapi.com, znapi.yili.com, *.toutiaoapi.com, qmyd.yichengw.cn, mapi.shuijiaobao.cn, bububao.duoshoutuan.com, wzq.tenpay.com, apigaoqingdianshi.com, cdndianshihome.com, tuchong.com, mp.weixin.qq.com, v3.sdk.haowusong.com, api.uutequan.com, pan.baidu.com, m.pearkin.com, account.huami.com, home.m.jd.com, plogin.m.jd.com, weixin110.qq.com, hh.102727.com, ms.jr.jd.com, me-api.jd.com, api.m.jd.com, ws.60he.com *.xiaodouzhuan.cn, api*.tiktokv.com, api*.musical.ly, api*.amemv.com, aweme*.snssdk.com, *.googlevideo.com, trade-acs.m.taobao.com, amdc.m.taobao.com, music.163.com, zt.wps.cn, i.meituan.com, access.video.qq.com, biz.caiyunapp.com,*.googlevideo.com,*.youtube\.com
