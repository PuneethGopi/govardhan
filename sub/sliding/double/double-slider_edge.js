
(function(compId){var _=null,y=true,n=false,x25='151px',x5='rgba(255,255,255,0.00)',x2='5.0.0',e35='${single-slider-left}',x23='rgba(229,229,229,1.00)',e7='${Stage}',x24='rgba(255,255,255,0)',x4='both',x29='handle',x21='30px',x16='10px',x28='20px',x27='4px',x14='solid',m='rect',x8='0px',x10='240px',h='height',x17='130px',i='none',x3='6.0.0.400',x19='single-slider-left',x22='single-slider-right',lf='left',x13='rgba(153,153,153,1.00)',x20='rgba(197,197,197,1.00)',e34='${single-slider-right}',e36='${handle}',x11='auto',x33='260px',x32='310px',x31='true',x30='rgba(209,61,115,1.00)',x6='rgba(255,255,255,1)',x15='rgba(255,255,255,1.00)',x1='6.0.0',x12='window-outline',x26='120px',xc='rgba(0,0,0,1)',x18='220px',x9='290px';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:x4,cg:i,rI:n,cn:{dom:[{id:'double-slider',symbolName:'single-hung',t:m,r:['10','10','200','260','auto','auto']},{id:'button',t:m,r:['10px','10px','310px','260px','auto','auto'],f:[x5],s:[10,"rgb(197, 197, 197)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','420px','280px','auto','auto'],overflow:'auto',f:[x6]}}},tt:{d:0,a:y,data:[["eid10",h,0,0,"linear",e7,'280px','280px'],["eid4","tr",0,function(e,d){this.eSA(e,d);},['stop','${double-slider}',[]]]]}},"single-hung":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x8,x8,x9,x10,x11,x11],id:x12,s:[10,x13,x14],t:m,f:[x15]},{r:[x16,x16,x17,x18,x11,x11],id:x19,s:[10,x20,x14],t:m,f:[x15]},{r:[x21,x16,x17,x18,x11,x11],id:x22,s:[10,x23,x14],t:m,f:[x24]},{r:[x25,x26,x27,x28,x11,x11],br:[x16,x16,x16,x16],id:x29,s:[0,xc,i],t:m,f:[x30]}],style:{'${symbolSelector}':{isStage:x31,r:[undefined,undefined,x32,x33]}}},tt:{d:2500,a:y,l:{"start":0,"stop":2500},data:[["eid5",lf,0,1000,"linear",e34,'150px','85px'],["eid6",lf,1250,1000,"linear",e34,'85px','150px'],["eid8",lf,0,1000,"linear",e35,'10px','75px'],["eid9",lf,1250,1000,"linear",e35,'75px','10px'],["eid11",lf,0,1000,"linear",e36,'151px','86px'],["eid12",lf,1250,1000,"linear",e36,'86px','151px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-21701307");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("single-hung").stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${button}","mouseover",function(sym,e){sym.getSymbol("double-slider").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${button}","mouseout",function(sym,e){sym.getSymbol("double-slider").stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'single-hung'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("single-hung");
//Edge symbol end:'single-hung'
})})(AdobeEdge.$,AdobeEdge,"EDGE-21701307");