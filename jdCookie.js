/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。注：github action用户ck填写到Settings-Secrets里面
let CookieJDs = [
  'unpl=V2_ZzNtbREFFhd2Wk5TcxtbUmJTR1wSBUEUIlpBVXwaXABiBBBcclRCFnUUR1dnGVQUZwcZWUpcRhxFCEdkexhdBWUFF11DVnMlRQtGZHopXAJnARReQlNKHXcOQlx6HlkFYwsTVXJnRBV8OHZkexBdAmQBG1lAUXMURQhPV3obWANuARFtCTlCWHUPRlZ9GlwBbgsQW0ZfQhJwCEJcehFsBWYCE1xCUUQRcjhF; __jdv=76161171|direct|-|none|-|1614507730966; __jdu=1613721589375906415909; areaId=17; ipLoc-djd=17-1458-1463-0; PCSYCityID=CN_420000_0_0; shshshfp=0bff690270f7eed2836bd28a056a0875; shshshfpa=0f628fdf-c582-45b8-1e5d-c79b8e47a4bc-1614507734; TrackID=1-a0EzdDzoULiJ5l0rKZUGppRoKA58qt6IvkT01LSttxrRFyKvo_WhdGRqlnrf7lE7kLh3OFMprcbBZxhtXoSvr6pefua8uHix5WnxEOurds; thor=8A04633115F2D8EF35A5E434F2FBC0482EB5DAC27D0B91D184DAF8F56D56B9237B99B6150DEC5FF075BC850B245EC591343A996DC1A647104DFB50193A867ADA9C2119996380601AD6B175991E45E54673F7BCEF785CE12608D3BFB072FF0425B4EA430FAD636042B09B022DEA3A158E4F0B1B95A448E5D07FD172CF74F7881EA7C35A35736F6918B23B9F06A774C23EDA3807769A0BFFDEE16ABF2FC0387B30; pinId=vKQ5I9t-VqX2K91TfUlKgrV9-x-f3wj7; pin=jd_6dda5b98f716f; unick=jd_176839ftd; ceshi3.com=101; _tp=L2skL56W4kFtMOiR5z%2BxHisZ%2FeBfvB%2FqGVJQ66In%2FE0%3D; _pst=jd_6dda5b98f716f; __jda=76161171.1613721589375906415909.1613721589.1613721589.1614507731.1; __jdc=76161171; shshshsID=433096fc0b43b962c8cc22d363b11313_2_1614507774877; shshshfpb=kmIODRP15kWao77%200uilqVw%3D%3D; mobilev=html5; mba_muid=1613721589375906415909; __jd_ref_cls=Mnpm_ComponentApplied; __jdb=76161171.7.1613721589375906415909|1.1614507731; mba_sid=16145086923007887129525895789.3',//账号一ck
  '',//账号二ck,如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n==================脚本执行来自 github action=====================\n`)
  console.log(`==================脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}=====================\n`)
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
