const path = require("path");

//环境配置
window = global;
navigator = {
    appName: "Netscape"
}
//加密算法
OOHUe.Brh=function(){var h=2;for(;h!==1;){switch(h){case 2:return{wo_:function xmp(a,b){var c=2;for(;c!==10;){switch(c){case 4:f[(e+b)%a]=[];c=3;break;case 13:g-=1;c=6;break;case 9:var d=0;c=8;break;case 8:c=d<a?7:11;break;case 12:d+=1;c=8;break;case 6:c=g>=0?14:12;break;case 1:var e=0;c=5;break;case 2:var f=[];c=1;break;case 3:e+=1;c=5;break;case 14:f[d][(g+b*d)%a]=f[g];c=13;break;case 5:c=e<a?4:9;break;case 7:var g=a-1;c=6;break;case 11:return f;break}}}(10,5)};break}}}();OOHUe.Dxm=function(){return typeof OOHUe.Brh.wo_==='function'?OOHUe.Brh.wo_.apply(OOHUe.Brh,arguments):OOHUe.Brh.wo_};function OOHUe(){};function RwyT(){return cd()+cd()+cd()+cd()};function cd(){return(65536*(1+Math['random']())|0)['toString'](16)['substring'](1)};var BPqG=function(){function t(){var a=OOHUe.Dxm()[0][8];for(;a!==OOHUe.Dxm()[4][7];){switch(a){case OOHUe.Dxm()[2][8]:this['i']=0,this['j']=0,this['S']=[];a=OOHUe.Dxm()[6][7];break}}}t['prototype']['init']=function(e){for(var t,n,r=0;r<256;++r)this['S'][r]=r;for(r=t=0;r<256;++r)t=t+this['S'][r]+e[r%e['length']]&255,n=this['S'][r],this['S'][r]=this['S'][t],this['S'][t]=n;this['i']=0,this['j']=0},t['prototype']['next']=function(){var e;return this['i']=this['i']+1&255,this['j']=this['j']+this['S'][this['i']]&255,e=this['S'][this['i']],this['S'][this['i']]=this['S'][this['j']],this['S'][this['j']]=e,this['S'][e+this['S'][this['i']]&255]};var n,e,r=256;if(null==i){var o,i=[],a=0;if(window['crypto']&&window['crypto']['getRandomValues']){var s=new Uint32Aarray(256);for(window['crypto']['getRandomValues'](s),o=0;o<s['length'];++o)i[a++]=255&s[o]}var u=0,c=function(e){if(256<=(u=u||0)||r<=a)window['removeEventListener']?(u=0,window['removeEventListener']('mousemove',c,!1)):window['detachEvent']&&(u=0,window['detachEvent']('onmousemove',c));else try{var t=e['x']+e['y'];i[a++]=255&t,u+=1}catch(n){}};window['addEventListener']?window['addEventListener']('mousemove',c,!1):window['attachEvent']&&window['attachEvent']('onmousemove',c)}function l(){var b=OOHUe.Dxm()[4][8];for(;b!==OOHUe.Dxm()[0][6];){switch(b){case OOHUe.Dxm()[4][8]:if(null==n){n=new t();while(a<r){var e=Math['floor'](65536*Math['random']());i[a++]=255&e}for(n['init'](i),a=0;a<i['length'];++a)i[a]=0;a=0}b=OOHUe.Dxm()[0][7];break;case OOHUe.Dxm()[0][7]:return n['next']();break}}}function f(){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[6][8];){switch(a){}}}function m(e,t,n){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[2][7];){switch(a){case OOHUe.Dxm()[0][8]:null!=e&&('number'==typeof e?this['fromNumber'](e,t,n):null==t&&'string'!=typeof e?this['fromString'](e,256):this['fromString'](e,t));a=OOHUe.Dxm()[2][7];break}}}function v(){var a=OOHUe.Dxm()[2][8];for(;a!==OOHUe.Dxm()[2][7];){switch(a){case OOHUe.Dxm()[6][8]:return new m(null);break}}}f['prototype']['nextBytes']=function(e){for(var t=0;t<e['length'];++t)e[t]=l()},e='Microsoft Internet Explorer'==navigator['appName']?(m['prototype']['am']=function(e,t,n,r,o,i){var a=32767&t,s=t>>15;while(0<=--i){var u=32767&this[e],c=this[e++]>>15,l=s*u+c*a;o=((u=a*u+((32767&l)<<15)+n[r]+(1073741823&o))>>>30)+(l>>>15)+s*c+(o>>>30),n[r++]=1073741823&u}return o},30):'Netscape'!=navigator['appName']?(m['prototype']['am']=function(e,t,n,r,o,i){while(0<=--i){var a=t*this[e++]+n[r]+o;o=Math['floor'](a/67108864),n[r++]=67108863&a}return o},26):(m['prototype']['am']=function(e,t,n,r,o,i){var a=16383&t,s=t>>14;while(0<=--i){var u=16383&this[e],c=this[e++]>>14,l=s*u+c*a;o=((u=a*u+((16383&l)<<14)+n[r]+o)>>28)+(l>>14)+s*c,n[r++]=268435455&u}return o},28),m['prototype']['DB']=e,m['prototype']['DM']=(1<<e)-1,m['prototype']['DV']=1<<e;m['prototype']['FV']=Math['pow'](2,52),m['prototype']['F1']=52-e,m['prototype']['F2']=2*e-52;for(var h='0123456789abcdefghijklmnopqrstuvwxyz',d=[],_='0'['charCodeAt'](0),p=0;p<=9;++p)d[_++]=p;for(_='a'['charCodeAt'](0),p=10;p<36;++p)d[_++]=p;for(_='A'['charCodeAt'](0),p=10;p<36;++p)d[_++]=p;function g(e){var a=OOHUe.Dxm()[6][8];for(;a!==OOHUe.Dxm()[0][7];){switch(a){case OOHUe.Dxm()[6][8]:return h['charAt'](e);break}}}function w(e){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[4][7];){switch(a){case OOHUe.Dxm()[4][8]:var t=v();return t['fromInt'](e),t;break}}}function E(e){var a=OOHUe.Dxm()[6][8];for(;a!==OOHUe.Dxm()[0][6];){switch(a){case OOHUe.Dxm()[6][8]:var t,n=1;a=OOHUe.Dxm()[2][7];break;case OOHUe.Dxm()[4][7]:return 0!=(t=e>>>16)&&(e=t,n+=16),0!=(t=e>>8)&&(e=t,n+=8),0!=(t=e>>4)&&(e=t,n+=4),0!=(t=e>>2)&&(e=t,n+=2),0!=(t=e>>1)&&(e=t,n+=1),n;break}}}function y(e){var a=OOHUe.Dxm()[0][8];for(;a!==OOHUe.Dxm()[6][7];){switch(a){case OOHUe.Dxm()[4][8]:this['m']=e;a=OOHUe.Dxm()[6][7];break}}}function S(e){var a=OOHUe.Dxm()[0][8];for(;a!==OOHUe.Dxm()[0][7];){switch(a){case OOHUe.Dxm()[2][8]:this['m']=e,this['mp']=e['invDigit'](),this['mpl']=32767&this['mp'],this['mph']=this['mp']>>15,this['um']=(1<<e['DB']-15)-1,this['mt2']=2*e['t'];a=OOHUe.Dxm()[6][7];break}}}function T(){var a=OOHUe.Dxm()[6][8];for(;a!==OOHUe.Dxm()[2][7];){switch(a){case OOHUe.Dxm()[4][8]:this['n']=null,this['e']=0,this['d']=null,this['p']=null,this['q']=null,this['dmp1']=null,this['dmq1']=null,this['coeff']=null;this['setPublic']('00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81','10001');a=OOHUe.Dxm()[6][7];break}}}return y['prototype']['convert']=function(e){return e['s']<0||0<=e['compareTo'](this['m'])?e['mod'](this['m']):e},y['prototype']['revert']=function(e){return e},y['prototype']['reduce']=function(e){e['divRemTo'](this['m'],null,e)},y['prototype']['mulTo']=function(e,t,n){e['multiplyTo'](t,n),this['reduce'](n)},y['prototype']['sqrTo']=function(e,t){e['squareTo'](t),this['reduce'](t)},S['prototype']['convert']=function(e){var t=v();return e['abs']()['dlShiftTo'](this['m']['t'],t),t['divRemTo'](this['m'],null,t),e['s']<0&&0<t['compareTo'](m['ZERO'])&&this['m']['subTo'](t,t),t},S['prototype']['revert']=function(e){var t=v();return e['copyTo'](t),this['reduce'](t),t},S['prototype']['reduce']=function(e){while(e['t']<=this['mt2'])e[e['t']++]=0;for(var t=0;t<this['m']['t'];++t){var n=32767&e[t],r=n*this['mpl']+((n*this['mph']+(e[t]>>15)*this['mpl']&this['um'])<<15)&e['DM'];e[n=t+this['m']['t']]+=this['m']['am'](0,r,e,t,0,this['m']['t']);while(e[n]>=e['DV'])e[n]-=e['DV'],e[++n]++}e['clamp'](),e['drShiftTo'](this['m']['t'],e),0<=e['compareTo'](this['m'])&&e['subTo'](this['m'],e)},S['prototype']['mulTo']=function(e,t,n){e['multiplyTo'](t,n),this['reduce'](n)},S['prototype']['sqrTo']=function(e,t){e['squareTo'](t),this['reduce'](t)},m['prototype']['copyTo']=function(e){for(var t=this['t']-1;0<=t;--t)e[t]=this[t];e['t']=this['t'],e['s']=this['s']},m['prototype']['fromInt']=function(e){this['t']=1,this['s']=e<0?-1:0,0<e?this[0]=e:e<-1?this[0]=e+this['DV']:this['t']=0},m['prototype']['fromString']=function(e,t){var n;if(16==t)n=4;else if(8==t)n=3;else if(256==t)n=8;else if(2==t)n=1;else if(32==t)n=5;else{if(4!=t)return void this['fromRadix'](e,t);n=2}this['t']=0,this['s']=0;var r=e['length'],o=!1,i=0;while(0<=--r){var a=8==n?255&e[r]:(a=r,null==(a=d[e['charCodeAt'](a)])?-1:a);a<0?'-'==e['charAt'](r)&&(o=!0):(o=!1,0==i?this[this['t']++]=a:i+n>this['DB']?(this[this['t']-1]|=(a&(1<<this['DB']-i)-1)<<i,this[this['t']++]=a>>this['DB']-i):this[this['t']-1]|=a<<i,(i+=n)>=this['DB']&&(i-=this['DB']))}8==n&&0!=(128&e[0])&&(this['s']=-1,0<i&&(this[this['t']-1]|=(1<<this['DB']-i)-1<<i)),this['clamp'](),o&&m['ZERO']['subTo'](this,this)},m['prototype']['clamp']=function(){var e=this['s']&this['DM'];while(0<this['t']&&this[this['t']-1]==e)--this['t']},m['prototype']['dlShiftTo']=function(e,t){for(var n=this['t']-1;0<=n;--n)t[n+e]=this[n];for(n=e-1;0<=n;--n)t[n]=0;t['t']=this['t']+e,t['s']=this['s']},m['prototype']['drShiftTo']=function(e,t){for(var n=e;n<this['t'];++n)t[n-e]=this[n];t['t']=Math['max'](this['t']-e,0),t['s']=this['s']},m['prototype']['lShiftTo']=function(e,t){for(var n=e%this['DB'],r=this['DB']-n,o=(1<<r)-1,i=Math['floor'](e/this['DB']),a=this['s']<<n&this['DM'],s=this['t']-1;0<=s;--s)t[s+i+1]=this[s]>>r|a,a=(this[s]&o)<<n;for(s=i-1;0<=s;--s)t[s]=0;t[i]=a,t['t']=this['t']+i+1,t['s']=this['s'],t['clamp']()},m['prototype']['rShiftTo']=function(e,t){t['s']=this['s'];var n=Math['floor'](e/this['DB']);if(n>=this['t'])t['t']=0;else{var r=e%this['DB'],o=this['DB']-r,i=(1<<r)-1;t[0]=this[n]>>r;for(var a=n+1;a<this['t'];++a)t[a-n-1]|=(this[a]&i)<<o,t[a-n]=this[a]>>r;0<r&&(t[this['t']-n-1]|=(this['s']&i)<<o),t['t']=this['t']-n,t['clamp']()}},m['prototype']['subTo']=function(e,t){var n=0,r=0,o=Math['min'](e['t'],this['t']);while(n<o)r+=this[n]-e[n],t[n++]=r&this['DM'],r>>=this['DB'];if(e['t']<this['t']){r-=e['s'];while(n<this['t'])r+=this[n],t[n++]=r&this['DM'],r>>=this['DB'];r+=this['s']}else{r+=this['s'];while(n<e['t'])r-=e[n],t[n++]=r&this['DM'],r>>=this['DB'];r-=e['s']}t['s']=r<0?-1:0,r<-1?t[n++]=this['DV']+r:0<r&&(t[n++]=r),t['t']=n,t['clamp']()},m['prototype']['multiplyTo']=function(e,t){var n=this['abs'](),r=e['abs'](),o=n['t'];t['t']=o+r['t'];while(0<=--o)t[o]=0;for(o=0;o<r['t'];++o)t[o+n['t']]=n['am'](0,r[o],t,o,0,n['t']);t['s']=0,t['clamp'](),this['s']!=e['s']&&m['ZERO']['subTo'](t,t)},m['prototype']['squareTo']=function(e){var t=this['abs'](),n=e['t']=2*t['t'];while(0<=--n)e[n]=0;for(n=0;n<t['t']-1;++n){var r=t['am'](n,t[n],e,2*n,0,1);(e[n+t['t']]+=t['am'](n+1,2*t[n],e,2*n+1,r,t['t']-n-1))>=t['DV']&&(e[n+t['t']]-=t['DV'],e[n+t['t']+1]=1)}0<e['t']&&(e[e['t']-1]+=t['am'](n,t[n],e,2*n,0,1)),e['s']=0,e['clamp']()},m['prototype']['divRemTo']=function(e,t,n){var r=e['abs']();if(!(r['t']<=0)){var o=this['abs']();if(o['t']<r['t'])return null!=t&&t['fromInt'](0),void(null!=n&&this['copyTo'](n));null==n&&(n=v());var i=v(),a=this['s'],s=e['s'],e=this['DB']-E(r[r['t']-1]);0<e?(r['lShiftTo'](e,i),o['lShiftTo'](e,n)):(r['copyTo'](i),o['copyTo'](n));var u=i['t'],c=i[u-1];if(0!=c){var o=c*(1<<this['F1'])+(1<u?i[u-2]>>this['F2']:0),l=this['FV']/o,f=(1<<this['F1'])/o,h=1<<this['F2'],d=n['t'],_=d-u,p=null==t?v():t;i['dlShiftTo'](_,p),0<=n['compareTo'](p)&&(n[n['t']++]=1,n['subTo'](p,n)),m['ONE']['dlShiftTo'](u,p),p['subTo'](i,i);while(i['t']<u)i[i['t']++]=0;while(0<=--_){var g=n[--d]==c?this['DM']:Math['floor'](n[d]*l+(n[d-1]+h)*f);if((n[d]+=i['am'](0,g,n,_,0,u))<g){i['dlShiftTo'](_,p),n['subTo'](p,n);while(n[d]<--g)n['subTo'](p,n)}}null!=t&&(n['drShiftTo'](u,t),a!=s&&m['ZERO']['subTo'](t,t)),n['t']=u,n['clamp'](),0<e&&n['rShiftTo'](e,n),a<0&&m['ZERO']['subTo'](n,n)}}},m['prototype']['invDigit']=function(){if(this['t']<1)return 0;var e=this[0];if(0==(1&e))return 0;var t=3&e;return 0<(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this['DV'])%this['DV'])?this['DV']-t:-t},m['prototype']['isEven']=function(){return 0==(0<this['t']?1&this[0]:this['s'])},m['prototype']['exp']=function(e,t){if(4294967295<e||e<1)return m['ONE'];var n,r=v(),o=v(),i=t['convert'](this),a=E(e)-1;i['copyTo'](r);while(0<=--a)t['sqrTo'](r,o),0<(e&1<<a)?t['mulTo'](o,i,r):(n=r,r=o,o=n);return t['revert'](r)},m['prototype']['toString']=function(e){if(this['s']<0)return'-'+this['negate']()['toString'](e);var t;if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else{if(4!=e)return this['toRadix'](e);t=2}var n,r=(1<<t)-1,o=!1,i='',a=this['t'],s=this['DB']-a*this['DB']%t;if(0<a--){s<this['DB']&&0<(n=this[a]>>s)&&(o=!0,i=g(n));while(0<=a)s<t?(n=(this[a]&(1<<s)-1)<<t-s,n|=this[--a]>>(s+=this['DB']-t)):(n=this[a]>>(s-=t)&r,s<=0&&(s+=this['DB'],--a)),0<n&&(o=!0),o&&(i+=g(n))}return o?i:'0'},m['prototype']['negate']=function(){var e=v();return m['ZERO']['subTo'](this,e),e},m['prototype']['abs']=function(){return this['s']<0?this['negate']():this},m['prototype']['compareTo']=function(e){var t=this['s']-e['s'];if(0!=t)return t;var n=this['t'];if(0!=(t=n-e['t']))return this['s']<0?-t:t;while(0<=--n)if(0!=(t=this[n]-e[n]))return t;return 0},m['prototype']['bitLength']=function(){return this['t']<=0?0:this['DB']*(this['t']-1)+E(this[this['t']-1]^this['s']&this['DM'])},m['prototype']['mod']=function(e){var t=v();return this['abs']()['divRemTo'](e,null,t),this['s']<0&&0<t['compareTo'](m['ZERO'])&&e['subTo'](t,t),t},m['prototype']['modPowInt']=function(e,t){return t=new(e<256||(t['isEven']())?y:S)(t),this['exp'](e,t)},m['ZERO']=w(0),m['ONE']=w(1),T['prototype']['doPublic']=function(e){return e['modPowInt'](this['e'],this['n'])},T['prototype']['setPublic']=function(e,t){null!=e&&null!=t&&0<e['length']&&0<t['length']?(this['n']=new m(e,16),this['e']=parseInt(t,16)):console['error']('Invalid RSA public key')},T['prototype']['encrypt']=function(e){return null==(e=function(e,t){if(t<e['length']+11)return console['error']('Message too long for RSA'),null;var n=[],r=e['length']-1;while(0<=r&&0<t){var o=e['charCodeAt'](r--);o<128?n[--t]=o:127<o&&o<2048?(n[--t]=63&o|128,n[--t]=o>>6|192):(n[--t]=63&o|128,n[--t]=o>>6&63|128,n[--t]=o>>12|224)}n[--t]=0;var i=new f(),a=[];while(2<t){a[0]=0;while(0==a[0])i['nextBytes'](a);n[--t]=a[0]}return n[--t]=2,n[--t]=0,new m(n)}(e,this['n']['bitLength']()+7>>3))||null==(e=this['doPublic'](e))?null:0==(1&(e=e['toString'](16))['length'])?e:'0'+e},T}();var PKgN=(Fg=function(e){return'function'==typeof e},Hg=function(e){e()},Jg=function(t,e){if(t===e)t['RCcx'](new TypeError());else if(e instanceof Kg)e['then'](function(e){Jg(t,e)},function(e){t['RCcx'](e)});else if(Fg(e)||'object'==typeof(o=e)&&null!==o){var n;try{n=e['then']}catch(i){return Kg['Sndu'](i),void t['RCcx'](i)}var r=!1;if(Fg(n))try{n['call'](e,function(e){r||(r=!0,Jg(t,e))},function(e){r||(r=!0,t['RCcx'](e))})}catch(i){if(r)return;r=!0,t['RCcx'](i)}else t['TEcV'](e)}else t['TEcV'](e);var o},Lg=!(Ig['prototype']={"enqueue":function(e){var t=this,e={"ele":e,"next":null};null===t['UjTW']?t['UjTW']=this['VqQQ']=e:(t['VqQQ']['next']=e,t['VqQQ']=t['VqQQ']['next'])},"dequeue":function(){if(null===this['UjTW'])throw new Error('queue is empty');var e=this['UjTW']['ele'];return this['UjTW']=this['UjTW']['next'],e},"isEmpty":function(){return null===this['UjTW']},"clear":function(){this['UjTW']=this['WdkL']=null},"each":function(e){this['isEmpty']()||(e(this['dequeue']()),this['each'](e))}}),Kg['debug']=function(){Lg=!0},Kg['Sndu']=function(e){'function'==typeof getJSError&&getJSError(e,!0),Lg&&'undefined'!=typeof console&&console['error'](e)},Kg['prototype']={"PENDING":0,"RESOLVED":1,"REJECTED":-1,"TEcV":function(e){var t=this;t['XOGV']===t['PENDING']&&(t['XOGV']=t['RESOLVED'],t['YpFd']=e,t['ZJYw']())},"RCcx":function(e){var t=this;t['XOGV']===t['PENDING']&&(t['XOGV']=t['REJECTED'],t['aHCh']=e,t['ZJYw']())},"ZJYw":function(){var e,t,n=this,r=n['XOGV'];r===n['RESOLVED']?(e=n['bNmJ'],n['caNH']['clear'](),t=n['YpFd']):r===n['REJECTED']&&(e=n['caNH'],n['bNmJ']['clear'](),t=n['aHCh']),e['each'](function(e){Hg(function(){e(r,t)})})},"dfYz":function(n,r,o){var i=this;Hg(function(){if(Fg(r)){var e;try{e=r(o)}catch(t){return Kg['Sndu'](t),i['RCcx'](t)}Jg(i,e)}else n===i['RESOLVED']?i['TEcV'](o):n===i['REJECTED']&&i['RCcx'](o)})},"then":function(n,r){var e=this,o=new Kg();return e['bNmJ']['enqueue'](function(e,t){o['dfYz'](e,n,t)}),e['caNH']['enqueue'](function(e,t){o['dfYz'](e,r,t)}),e['XOGV']!==e['RESOLVED']&&e['XOGV']!==e['REJECTED']||e['ZJYw'](),o}},Kg['all']=function(c){return new Kg(function(r,o){var i=c['length'],a=0,s=!1,u=[];function n(e,t,n){var b=OOHUe.Dxm()[0][8];for(;b!==OOHUe.Dxm()[4][7];){switch(b){case OOHUe.Dxm()[0][8]:s||(null!==e&&(s=!0,o(e)),u[n]=t,(a+=1)===i&&(s=!0,r(u)));b=OOHUe.Dxm()[6][7];break}}}for(var e=0;e<i;e+=1)!function(t){var e=c[t];e instanceof Kg||(e=new Kg(e)),e['then'](function(e){n(null,e,t)},function(e){n(e||!0)})}(e)})},Kg['race']=function(u){return new Kg(function(n,r){var o=u['length'],i=!1,a=0;function t(e,t){var b=OOHUe.Dxm()[2][8];for(;b!==OOHUe.Dxm()[4][7];){switch(b){case OOHUe.Dxm()[2][8]:i||(null==e?(i=!0,n(t)):o<=(a+=1)&&(i=!0,r(e)));b=OOHUe.Dxm()[0][7];break}}}for(var e,s=0;s<o;s+=1)e=void 0,(e=u[s])instanceof Kg||(e=new Kg(e)),e['then'](function(e){t(null,e)},function(e){t(e||!0)})})},Kg['step']=function(n){var r=n['length'],o=new Kg(),i=function(t,e){if(r<=t)return o['TEcV'](e);new Kg(n[t])['then'](function(e){i(t+1,e)},function(e){o['RCcx'](e)})};return new Kg(n[0])['then'](function(e){i(1,e)},function(e){o['RCcx'](e)}),o},Kg['prototype']['WVAR']=function(e,t){return this['then'](e,t)},Kg),Fg,Hg,Jg,Lg;PKgN['debug']();function Ig(){var a=OOHUe.Dxm()[0][8];for(;a!==OOHUe.Dxm()[2][7];){switch(a){case OOHUe.Dxm()[4][8]:this['UjTW']=this['VqQQ']=null;a=OOHUe.Dxm()[4][7];break}}};function Kg(e){var a=OOHUe.Dxm()[6][8];for(;a!==OOHUe.Dxm()[0][6];){switch(a){case OOHUe.Dxm()[4][8]:var t=this;a=OOHUe.Dxm()[4][7];break;case OOHUe.Dxm()[0][7]:if(t['XOGV']=t['PENDING'],t['bNmJ']=new Ig(),t['caNH']=new Ig(),Fg(e))try{e(function(e){t['TEcV'](e)},function(e){t['RCcx'](e)})}catch(n){Kg['Sndu'](n)}a=OOHUe.Dxm()[2][6];break}}};CoUE=function(){var d={},rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[0][7];){switch(a){case OOHUe.Dxm()[0][8]:return e<10?'0'+e:e;break}}}function this_value(){var a=OOHUe.Dxm()[0][8];for(;a!==OOHUe.Dxm()[0][7];){switch(a){case OOHUe.Dxm()[2][8]:return this['valueOf']();break}}}function quote(e){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[6][7];){switch(a){case OOHUe.Dxm()[4][8]:return rx_escapable['lastIndex']=0,rx_escapable['test'](e)?'"'+e['replace'](rx_escapable,function(e){var t=meta[e];return'string'==typeof t?t:'\\u'+('0000'+e['charCodeAt'](0)['toString'](16))['slice'](-4)})+'"':'"'+e+'"';break}}}function str(e,t){var b=OOHUe.Dxm()[6][8];for(;b!==OOHUe.Dxm()[4][6];){switch(b){case OOHUe.Dxm()[6][8]:var n,r,o,i,a,s=gap,u=t[e];b=OOHUe.Dxm()[0][7];break;case OOHUe.Dxm()[6][7]:switch(u&&'object'==typeof u&&'function'==typeof u['toJSON']&&(u=u['toJSON'](e)),'function'==typeof rep&&(u=rep['call'](t,e,u)),typeof u){case'string':return quote(u);case'number':return isFinite(u)?String(u):'null';case'boolean':case'null':return String(u);case'object':if(!u)return'null';if(gap+=indent,a=[],'[object Array]'===Object['prototype']['toString']['apply'](u)){for(i=u['length'],n=0;n<i;n+=1)a[n]=str(n,u)||'null';return o=0===a['length']?'[]':gap?'['+gap+a['join'](','+gap)+''+s+']':'['+a['join'](',')+']',gap=s,o}if(rep&&'object'==typeof rep)for(i=rep['length'],n=0;n<i;n+=1)'string'==typeof rep[n]&&(o=str(r=rep[n],u))&&a['push'](quote(r)+(gap?': ':':')+o);else for(r in u)Object['prototype']['hasOwnProperty']['call'](u,r)&&(o=str(r,u))&&a['push'](quote(r)+(gap?': ':':')+o);return o=0===a['length']?'{}':gap?'{'+gap+a['join'](','+gap)+''+s+'}':'{'+a['join'](',')+'}',gap=s,o}b=OOHUe.Dxm()[6][6];break}}}return'function'!=typeof Date['prototype']['toJSON']&&(Date['prototype']['toJSON']=function(){return isFinite(this['valueOf']())?this['getUTCFullYear']()+'-'+f(this['getUTCMonth']()+1)+'-'+f(this['getUTCDate']())+'T'+f(this['getUTCHours']())+':'+f(this['getUTCMinutes']())+':'+f(this['getUTCSeconds']())+'Z':null},Boolean['prototype']['toJSON']=this_value,Number['prototype']['toJSON']=this_value,String['prototype']['toJSON']=this_value),meta={"\u0008":'\b',"\u0009":'\t',"\u000a":'\n',"\u000c":'\f',"\u000d":'\r',"\u0022":'\"',"\u005c":'\\'},d['stringify']=function(e,t,n){var r;if(indent=gap='','number'==typeof n)for(r=0;r<n;r+=1)indent+=' ';else'string'==typeof n&&(indent=n);if((rep=t)&&'function'!=typeof t&&('object'!=typeof t||'number'!=typeof t['length']))throw new Error('JSON.stringify');return str('',{"":e})},d['parse']=function(b,c){var j;function walk(e,t){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[6][7];){switch(a){case OOHUe.Dxm()[0][8]:var n,r,o=e[t];if(o&&'object'==typeof o)for(n in o)Object['prototype']['hasOwnProperty']['call'](o,n)&&((r=walk(o,n))!==undefined?o[n]=r:delete o[n]);return c['call'](e,t,o);break}}}if(b=String(b),rx_dangerous['lastIndex']=0,rx_dangerous['test'](b)&&(b=b['replace'](rx_dangerous,function(e){return'\\u'+('0000'+e['charCodeAt'](0)['toString'](16))['slice'](-4)})),rx_one['test'](b['replace'](rx_two,'@')['replace'](rx_three,']')['replace'](rx_four,'')))return j=eval('('+b+')'),'function'==typeof c?walk({"":j},''):j;throw new SyntaxError('JSON.parse');},d}();function LpFU(){var e=RwyT(),t=new BPqG()['encrypt'](e);while(!t||256!==t['length'])e=RwyT(),t=new BPqG()['encrypt'](e);return{"aeskey":e,"rsa":t}};function yhUK(e,t,n){var r=this;r['gctFirstLoad']?(PKgN['race']([r['jdue'],new PKgN(function(e){SQov(function(){e()},5e3)})])['WVAR'](function(){r['IufI'](e,t,n,r['JABw']())}),r['gctFirstLoad']=!1):r['IufI'](e,t,n,r['JABw']())};EbF_=function(){var n=Object['create']||function(e){return t['prototype']=e,e=new t(),t['prototype']=null,e};function t(){var a=OOHUe.Dxm()[4][8];for(;a!==OOHUe.Dxm()[6][8];){switch(a){}}}var e={},r=e['lib']={},o=r['Base']={"PrOj":function(e){var t=n(this);return e&&t['mixIn'](e),t['hasOwnProperty']('init')&&this['init']!==t['init']||(t['init']=function(){t['$super']['init']['apply'](this,arguments)}),(t['init']['prototype']=t)['$super']=this,t},"create":function(){var e=this['PrOj']();return e['init']['apply'](e,arguments),e},"init":function(){},"mixIn":function(e){for(var t in e)e['hasOwnProperty'](t)&&(this[t]=e[t]);e['hasOwnProperty']('toString')&&(this['toString']=e['toString'])}},c=r['WordArray']=o['PrOj']({"init":function(e,t){e=this['words']=e||[],t!=undefined?this['sigBytes']=t:this['sigBytes']=4*e['length']},"concat":function(e){var t=this['words'],n=e['words'],r=this['sigBytes'],o=e['sigBytes'];if(this['clamp'](),r%4)for(var i=0;i<o;i++){var a=n[i>>>2]>>>24-i%4*8&255;t[r+i>>>2]|=a<<24-(r+i)%4*8}else for(i=0;i<o;i+=4)t[r+i>>>2]=n[i>>>2];return this['sigBytes']+=o,this},"clamp":function(){var e=this['words'],t=this['sigBytes'];e[t>>>2]&=4294967295<<32-t%4*8,e['length']=Math['ceil'](t/4)}}),i=e['enc']={},l=i['Latin1']={"parse":function(e){for(var t=e['length'],n=[],r=0;r<t;r++)n[r>>>2]|=(255&e['charCodeAt'](r))<<24-r%4*8;return new c[('init')](n,t)}},a=i['Utf8']={"parse":function(e){return l['parse'](unescape(encodeURIComponent(e)))}},s=r['BufferedBlockAlgorithm']=o['PrOj']({"reset":function(){this['qoJy']=new c[('init')](),this['xhFt']=0},"yDRq":function(e){'string'==typeof e&&(e=a['parse'](e)),this['qoJy']['concat'](e),this['xhFt']+=e['sigBytes']},"AySt":function(e){var t=this['qoJy'],n=t['words'],r=t['sigBytes'],o=this['blockSize'],i=r/(4*o),a=(i=e?Math['ceil'](i):Math['max']((0|i)-this['Baty'],0))*o,r=Math['min'](4*a,r);if(a){for(var s=0;s<a;s+=o)this['CBZF'](n,s);var u=n['splice'](0,a);t['sigBytes']-=r}return new c[('init')](u,r)},"Baty":0}),u=e['algo']={},f=r['Cipher']=s['PrOj']({"cfg":o['PrOj'](),"createEncryptor":function(e,t){return this['create'](this['DPgi'],e,t)},"init":function(e,t,n){this['cfg']=this['cfg']['PrOj'](n),this['EBJO']=e,this['FCia']=t,this['reset']()},"reset":function(){s['reset']['call'](this),this['GpzY']()},"process":function(e){return this['yDRq'](e),this['AySt']()},"finalize":function(e){return e&&this['yDRq'](e),this['HnCc']()},"keySize":4,"ivSize":4,"DPgi":1,"Ixht":2,"JOOO":function(u){return{"encrypt":function(e,t,n){t=l['parse'](t);n&&n['iv']||((n=n||{})['iv']=l['parse']('0000000000000000'));for(var n=_['encrypt'](u,e,t,n),r=n['ciphertext']['words'],o=n['ciphertext']['sigBytes'],i=[],a=0;a<o;a++){var s=r[a>>>2]>>>24-a%4*8&255;i['push'](s)}return i}}}}),h=e['mode']={},i=r['BlockCipherMode']=o['PrOj']({"createEncryptor":function(e,t){return this['Encryptor']['create'](e,t)},"init":function(e,t){this['KGZT']=e,this['LjxI']=t}}),i=h['CBC']=((h=i['PrOj']())['Encryptor']=h['PrOj']({"processBlock":function(e,t){var n=this['KGZT'],r=n['blockSize'];(function(e,t,n){var r=this['LjxI'];{var o;r?(o=r,this['LjxI']=undefined):o=this['MqUr']}for(var i=0;i<n;i++)e[t+i]^=o[i]}['call'](this,e,t,r),n['encryptBlock'](e,t),this['MqUr']=e['slice'](t,t+r))}}),h),h=(e['pad']={})['Pkcs7']={"pad":function(e,t){for(var t=4*t,n=t-e['sigBytes']%t,r=n<<24|n<<16|n<<8|n,o=[],i=0;i<n;i+=4)o['push'](r);t=c['create'](o,n);e['concat'](t)}},h=r['BlockCipher']=f['PrOj']({"cfg":f['cfg']['PrOj']({"mode":i,"padding":h}),"reset":function(){f['reset']['call'](this);var e,t=this['cfg'],n=t['iv'],t=t['mode'];this['EBJO']==this['DPgi']&&(e=t['createEncryptor']),this['NTpo']&&this['NTpo']['OpgO']==e?this['NTpo']['init'](this,n&&n['words']):(this['NTpo']=e['call'](t,this,n&&n['words']),this['NTpo']['OpgO']=e)},"CBZF":function(e,t){this['NTpo']['processBlock'](e,t)},"HnCc":function(){var e,t=this['cfg']['padding'];return this['EBJO']==this['DPgi']&&(t['pad'](this['qoJy'],this['blockSize']),e=this['AySt'](!0)),e},"blockSize":4}),d=r['CipherParams']=o['PrOj']({"init":function(e){this['mixIn'](e)}}),_=r['SerializableCipher']=o['PrOj']({"cfg":o['PrOj'](),"encrypt":function(e,t,n,r){r=this['cfg']['PrOj'](r);var o=e['createEncryptor'](n,r),t=o['finalize'](t),o=o['cfg'];return d['create']({"ciphertext":t,"key":n,"iv":o['iv'],"algorithm":e,"mode":o['mode'],"padding":o['padding'],"blockSize":e['blockSize'],"formatter":r['format']})}}),p=[],g=[],m=[],v=[],w=[],E=[],y=[],S=[],T=[],b=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var n=0,r=0,t=0;t<256;t++){var o=(o=r^r<<1^r<<2^r<<3^r<<4)>>>8^255&o^99;p[n]=o;var i=e[g[o]=n],a=e[i],s=e[a],u=257*e[o]^16843008*o;m[n]=u<<24|u>>>8,v[n]=u<<16|u>>>16,w[n]=u<<8|u>>>24,E[n]=u;u=16843009*s^65537*a^257*i^16843008*n;y[o]=u<<24|u>>>8,S[o]=u<<16|u>>>16,T[o]=u<<8|u>>>24,b[o]=u,n?(n=i^e[e[e[s^i]]],r^=e[e[r]]):n=r=1}}();var A=[0,1,2,4,8,16,32,64,128,27,54],u=u['EbF_']=h['PrOj']({"GpzY":function(){if(!this['PCaj']||this['QZeE']!==this['FCia']){for(var e=this['QZeE']=this['FCia'],t=e['words'],n=e['sigBytes']/4,r=4*(1+(this['PCaj']=6+n)),o=this['RfKy']=[],i=0;i<r;i++)i<n?o[i]=t[i]:(u=o[i-1],i%n?6<n&&i%n==4&&(u=p[u>>>24]<<24|p[u>>>16&255]<<16|p[u>>>8&255]<<8|p[255&u]):(u=p[(u=u<<8|u>>>24)>>>24]<<24|p[u>>>16&255]<<16|p[u>>>8&255]<<8|p[255&u],u^=A[i/n|0]<<24),o[i]=o[i-n]^u);for(var a=this['SeAN']=[],s=0;s<r;s++){var u,i=r-s;u=s%4?o[i]:o[i-4],a[s]=s<4||i<=4?u:y[p[u>>>24]]^S[p[u>>>16&255]]^T[p[u>>>8&255]]^b[p[255&u]]}}},"encryptBlock":function(e,t){this['Tlmq'](e,t,this['RfKy'],m,v,w,E,p)},"Tlmq":function(e,t,n,r,o,i,a,s){for(var u=this['PCaj'],c=e[t]^n[0],l=e[t+1]^n[1],f=e[t+2]^n[2],h=e[t+3]^n[3],d=4,_=1;_<u;_++)var p=r[c>>>24]^o[l>>>16&255]^i[f>>>8&255]^a[255&h]^n[d++],g=r[l>>>24]^o[f>>>16&255]^i[h>>>8&255]^a[255&c]^n[d++],m=r[f>>>24]^o[h>>>16&255]^i[c>>>8&255]^a[255&l]^n[d++],v=r[h>>>24]^o[c>>>16&255]^i[l>>>8&255]^a[255&f]^n[d++],c=p,l=g,f=m,h=v;p=(s[c>>>24]<<24|s[l>>>16&255]<<16|s[f>>>8&255]<<8|s[255&h])^n[d++],g=(s[l>>>24]<<24|s[f>>>16&255]<<16|s[h>>>8&255]<<8|s[255&c])^n[d++],m=(s[f>>>24]<<24|s[h>>>16&255]<<16|s[c>>>8&255]<<8|s[255&l])^n[d++],v=(s[h>>>24]<<24|s[c>>>16&255]<<16|s[l>>>8&255]<<8|s[255&f])^n[d++];e[t]=p,e[t+1]=g,e[t+2]=m,e[t+3]=v},"keySize":8});return e['EbF_']=h['JOOO'](u),e['EbF_']}();DWYi={"gRVz":'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',"heDE":'=',"iaVz":16515072,"jkgJ":258048,"kAqd":4032,"lqkz":63,"mgpl":24,"nldY":function(e){for(var t=[],n=0,r=e['length'];n<r;n+=1)t['push'](e['charCodeAt'](n));return t},"ojha":function(e){for(var t='',n=0,r=e['length'];n<r;n+=1)t+=String['fromCharCode'](e[n]);return t},"pNqz":function(e){var t=this['gRVz'];return e<0||e>=t['length']?'=':t['charAt'](e)},"qjaJ":function(e){return this['gRVz']['indexOf'](e)},"rYsA":function(e,t){return e>>t&1},"sMWK":function(e,o){var i=this;o=o||i;for(var t,n,r=function(e,t){for(var n=0,r=o['mgpl']-1;0<=r;--r)1===i['rYsA'](t,r)&&(n=(n<<1)+i['rYsA'](e,r));return n},a='',s='',u=e['length'],c=0;c<u;c+=3)c+2<u?(t=(e[c]<<16)+(e[c+1]<<8)+e[c+2],a+=i['pNqz'](r(t,o['iaVz']))+i['pNqz'](r(t,o['jkgJ']))+i['pNqz'](r(t,o['kAqd']))+i['pNqz'](r(t,o['lqkz']))):2==(n=u%3)?(t=(e[c]<<16)+(e[c+1]<<8),a+=i['pNqz'](r(t,o['iaVz']))+i['pNqz'](r(t,o['jkgJ']))+i['pNqz'](r(t,o['kAqd'])),s=o['heDE']):1==n&&(t=e[c]<<16,a+=i['pNqz'](r(t,o['iaVz']))+i['pNqz'](r(t,o['jkgJ'])),s=o['heDE']+o['heDE']);return{"res":a,"end":s}},"Lj_x":function(e){e=this['sMWK'](this['nldY'](e));return e['res']+e['end']},"tc_t":function(e){e=this['sMWK'](e);return e['res']+e['end']},"upFO":function(e,i){var a=this;i=i||a;for(var t=function(e,t){if(e<0)return 0;for(var n=5,r=0,o=i['mgpl']-1;0<=o;--o)1===a['rYsA'](t,o)&&(r+=a['rYsA'](e,n)<<o,--n);return r},n=e['length'],r='',o=0;o<n;o+=4){var s=t(a['qjaJ'](e['charAt'](o)),i['iaVz'])+t(a['qjaJ'](e['charAt'](o+1)),i['jkgJ'])+t(a['qjaJ'](e['charAt'](o+2)),i['kAqd'])+t(a['qjaJ'](e['charAt'](o+3)),i['lqkz']),u=s>>16&255;r+=String['fromCharCode'](u),e['charAt'](o+2)!==i['heDE']&&(u=s>>8&255,r+=String['fromCharCode'](u),e['charAt'](o+3)!==i['heDE']&&(s=255&s,r+=String['fromCharCode'](s)))}return r},"vfCP":function(e){var t=4-e['length']%4;if(t<4)for(var n=0;n<t;n+=1)e+=this['heDE'];return this['upFO'](e)},"welS":function(e){return this['vfCP'](e)}};
//生成payload
function generate(url, app_id) { //唯一参数：app_id
  var a = JSON.parse('{"id":"' + app_id + '","page_id":' + new Date().getTime() + ',"lang":"zh-cn","data":{}}');
  var h = LpFU(),
    e = CoUE['stringify'](a),
    l = EbF_['encrypt'](e, h['aeskey']),
    e = DWYi['tc_t'](l),
    //l = '/deepknow/v2/judge?pt=1&app_id=' + a['id'],
    l = url + a['id'],
    e = e + h['rsa'];
  return {
    url: l,
    payload: e
  };
}
//使用实例
console.log(generate('https://dkapi.geetest.com/deepknow/v2/judge?pt=1&app_id=', '461cca3146ff093d059dee9439aa6b26', ));
//使用实例
/* import("node-fetch");
var url = 'https://dkapi.geetest.com/deepknow/v2/judge?pt=1&app_id=',
  app_id = '461cca3146ff093d059dee9439aa6b26',
  payload = generate(url, app_id)['payload'];
console.log(url, payload);
fetch(url + app_id, {
  "headers": {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
  },
  "body": payload,
  "method": "POST"
}).then(function (response) {
  return response.json();
}).then(data => {
  console.log(data);
}); */