import Umeng from '../index'

//初始化
const pageUme = new Umeng('1261312741',function(){
    this.push(['红包裂变二期', '老用户页', '访问test']);
});

//手动上报
pageUme.push(['红包裂变二期', '老用户页', '事件1']);