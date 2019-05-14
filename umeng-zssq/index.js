export default class Umeng{
    constructor(webId,onloadCallback){
        this.webId = webId;
        this._umengOnLoad = onloadCallback || function(){
            console.log('umeng is onLoaded!');
        };
        this._loadUmengScript();
        this._addTemplateListener();
    }
    get webId(){
        return this._webId;
    }
    set webId(value){
        if(!value){
            // throw new Error('please set webId');
            console.warn('no set webId,use default id 1261312741');
            value = '1261312741';
        }
        this._webId = value;
    }
    _loadUmengScript(){
        function asyncLoadUmeng(){
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://s4.cnzz.com/z_stat.php?id='+this.webId+'&web_id='+this.webId;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            s.onload = this._umengOnLoad.bind(this);
        }
        window.addEventListener('load', asyncLoadUmeng.bind(this), false);
    }
    _addTemplateListener(){
        document.addEventListener('click',(event)=>{
            const umengAction = event.target.dataset && event.target.dataset.umeng.split('|');
            if(!umengAction || !umengAction.length) return false;
            this.push(umengAction);
        })
    }

    push(args){
        console.log(args)
        _czc.push(['_trackEvent', ...args, 1, 'active']);
    }
}
