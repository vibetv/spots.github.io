const _0x5ea88d=_0x6eb6;(function(_0x3efc3e,_0x93aecb){const _0x52a76f=_0x6eb6,_0x315732=_0x3efc3e();while(!![]){try{const _0x598102=-parseInt(_0x52a76f(0xa5))/0x1*(-parseInt(_0x52a76f(0x8e))/0x2)+-parseInt(_0x52a76f(0xac))/0x3+-parseInt(_0x52a76f(0x8f))/0x4+-parseInt(_0x52a76f(0x90))/0x5*(-parseInt(_0x52a76f(0x8c))/0x6)+parseInt(_0x52a76f(0x9f))/0x7+-parseInt(_0x52a76f(0xa2))/0x8*(-parseInt(_0x52a76f(0xa7))/0x9)+-parseInt(_0x52a76f(0x9b))/0xa;if(_0x598102===_0x93aecb)break;else _0x315732['push'](_0x315732['shift']());}catch(_0x5a6f6a){_0x315732['push'](_0x315732['shift']());}}}(_0x5205,0xb8750));function getParameter(_0x561ab9){const _0x5af9db=_0x6eb6,_0x1e9b19=new URLSearchParams(window[_0x5af9db(0x8a)]['search']);if(_0x1e9b19[_0x5af9db(0xa8)](_0x561ab9)){const _0x306157=_0x1e9b19[_0x5af9db(0xab)](_0x561ab9);try{return atob(_0x306157);}catch(_0x321c21){return console[_0x5af9db(0x96)]('Error\x20decoding\x20parameter:',_0x321c21),null;}}return null;}function override(_0x1f70de){const _0x248f40=_0x6eb6;if(_0x1f70de['indexOf'](_0x248f40(0x89))>-0x1)return'data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==';if(_0x1f70de['indexOf'](_0x248f40(0xa9))>-0x1)return _0x248f40(0xa4);return _0x1f70de;}function _0x5205(){const _0x2ede20=['licensing.bitmovin.com/licensing','location','Successfully\x20loaded\x20fallback\x20video','3922626dlvANv','Error','6dhgwzk','1669100rXMftW','10GiWxuZ','prototype','Error\x20loading\x20fallback\x20video','player','Loaded','PlayerEvent','error','load','Player\x20error:','then','progressive','22062780AZSYJq','my-player','log','file','9067975oCwAVd','https://wartakita.github.io/player.github.io/gangguan.mp4','Successfully\x20loaded\x20HLS\x20source','8eOSCud','11d3698c-efdf-42f1-8769-54663995de2b','data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==','287567pNVclR','open','10528641QHpeZI','has','licensing.bitmovin.com/impression','Player','get','3769284cWrLnQ','Error\x20loading\x20HLS\x20source:'];_0x5205=function(){return _0x2ede20;};return _0x5205();}const opens=XMLHttpRequest[_0x5ea88d(0x91)]['open'];XMLHttpRequest[_0x5ea88d(0x91)][_0x5ea88d(0xa6)]=function(){let _0x90461b=override(arguments[0x1]);return arguments[0x1]=_0x90461b,opens['apply'](this,arguments);};const hlsUrl=getParameter(_0x5ea88d(0x9e)),container=document['getElementById'](_0x5ea88d(0x9c)),source={'hls':hlsUrl},playerConfig={'key':_0x5ea88d(0xa3),'playback':{'autoplay':!![],'muted':![]}},player=new bitmovin[(_0x5ea88d(0x93))][(_0x5ea88d(0xaa))](container,playerConfig);function _0x6eb6(_0x3c3b49,_0x121cf0){const _0x520571=_0x5205();return _0x6eb6=function(_0x6eb67c,_0x3e7f86){_0x6eb67c=_0x6eb67c-0x88;let _0x36f44a=_0x520571[_0x6eb67c];return _0x36f44a;},_0x6eb6(_0x3c3b49,_0x121cf0);}function loadHlsSource(){const _0x13b680=_0x5ea88d;player[_0x13b680(0x97)](source)[_0x13b680(0x99)](()=>{const _0x127edf=_0x13b680;console['log'](_0x127edf(0xa1));},_0x15e3b4=>{const _0x416038=_0x13b680;console['error'](_0x416038(0x88),_0x15e3b4);});}player['on'](bitmovin[_0x5ea88d(0x93)][_0x5ea88d(0x95)][_0x5ea88d(0x8d)],_0x6e4c0a=>{const _0x260538=_0x5ea88d;console[_0x260538(0x96)](_0x260538(0x98),_0x6e4c0a);const _0x47f9d7=_0x260538(0xa0),_0x21b504={'progressive':_0x47f9d7};player[_0x260538(0x97)](_0x21b504)[_0x260538(0x99)](()=>{const _0x47604b=_0x260538;console[_0x47604b(0x9d)](_0x47604b(0x8b));},_0x22248f=>{const _0x2ab9cc=_0x260538;console[_0x2ab9cc(0x96)](_0x2ab9cc(0x92),_0x22248f);});}),player['on'](bitmovin[_0x5ea88d(0x93)][_0x5ea88d(0x95)][_0x5ea88d(0x94)],()=>{const _0x40d966=_0x5ea88d;console['log']('Player\x20loaded\x20event'),player['getSource']()[_0x40d966(0x9a)]&&loadHlsSource();}),loadHlsSource();