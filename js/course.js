var	office = $(".office"),
	popup = $("#popup"),
	menu = $(".menu"),
	title = $("#title"),
	desc = $(".desc"),
	desc0 = $(".desc0"),
	popimg = $('.popupi0'),
	blanket = $("#blanket"),
	win = $(window),
	selected = $("#selected"),
	cross = $(".cross"),
	rang = ["Новичок","Знаток","Эксперт"],
	visitTabs = [true,false,false],
	violations = VioAnc.violations,
	anchors = VioAnc.anchors;


(function($) {
	var o = $( {} );

	$.each({
		on: 'subscribe',
		trigger: 'publish',
		off: 'unsubscribe' 
	}, function( key, api ) {
		$[api] = function() {
			o[key].apply( o, arguments );
		}
	});

})(jQuery);


window.Mousetrap=function(){function a(a,b,c){if(a.addEventListener)return a.addEventListener(b,c,!1);a.attachEvent("on"+b,c)}function b(a){var a=a||{},b=!1,c;for(c in m)a[c]?b=!0:m[c]=0;b||(p=!1)}function c(a,b,c,d){var e,f,g=[];if(!k[a])return[];if("keyup"==c&&(15<a&&19>a||91==a))b=[a];for(e=0;e<k[a].length;++e)f=k[a][e],!(f.seq&&m[f.seq]!=f.level)&&c==f.action&&b.sort().join(",")===f.modifiers.sort().join(",")&&(d&&k[a].splice(e,1),g.push(f));return g}function d(a,d,e){var f;f=e.target||e.srcElement;var g=f.tagName;f=-1<(" "+f.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==g||"SELECT"==g||"TEXTAREA"==g;if(!f){f=[];e.shiftKey&&f.push(i.shift);e.altKey&&f.push(i.alt);e.ctrlKey&&f.push(i.ctrl);e.metaKey&&f.push(i.command);f=c(a,f,d);for(var h={},j=!1,g=0;g<f.length;++g)if(f[g].seq)j=!0,h[f[g].seq]=1,f[g].callback(e);else if(!j&&!p){f[g].callback(e);break}d==p&&!(15<a&&19>a||91==a)&&b(h)}}function e(a){d(93==a.keyCode||224==a.keyCode?91:a.keyCode,"keydown",a)}function f(a){o===a.keyCode?o=!1:d(93==a.keyCode||224==a.keyCode?91:a.keyCode,"keyup",a)}function g(a,c,d,e){m[a]=0;var f=function(){p=e;++m[a];clearTimeout(n);n=setTimeout(b,1e3)},g=function(a){d(a);"keydown"===e&&(o=a.keyCode);setTimeout(b,10)},i;for(i=0;i<c.length;++i)h(c[i],i<c.length-1?f:g,e,a,i)}function h(a,b,d,e,f){var a=a.replace(/\s+/g," "),h=a.split(" "),l,m=[];if(1<h.length)return g(a,h,b,d);h="+"===a?["+"]:a.split("+");for(a=0;a<h.length;++a)l=h[a],j[l]&&(m.push(i.shift),l=j[l]),l=i[l]||l.toUpperCase().charCodeAt(0),(15<l&&19>l||91==l)&&m.push(l);k[l]||(k[l]=[]);c(l,m,d,!e);k[l][e?"unshift":"push"]({callback:b,modifiers:m,action:d,seq:e,level:f})}for(var i={backspace:8,tab:9,enter:13,"return":13,shift:16,ctrl:17,alt:18,option:18,capslock:20,esc:27,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:46,meta:91,command:91,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},j={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},k={},l={},m={},n,o=!1,p=!1,q=1;20>q;++q)i["f"+q]=111+q;return{bind:function(a,b,c){for(var c=c||"keydown",d=a instanceof Array?a:a.split(","),e=c,f=0;f<d.length;++f)h(d[f],b,e);l[a+":"+c]=b},trigger:function(a,b){l[a+":"+(b||"keydown")]()},addEvent:function(b,c,d){a(b,c,d)},reset:function(){k={};l={}},init:function(){a(document,"keydown",e);a(document,"keyup",f)}}}();Mousetrap.addEvent(window,"load",Mousetrap.init)

Mousetrap.bind('i d d q d', function() { iddqd();});
Mousetrap.bind('o l d s p i c e', function() { $("*").css('font-family','Blagovest')});
Mousetrap.bind('i d k f a', function() { 
	Slider.modifyScore(360); Slider.updateRang();$("#header").append("CHEATER").css({
	'margin': '0 auto',
	'position': 'absolute',
	'color':'red',
	'font-size':'136px'
}); $('.logo').hide(); 

});

Mousetrap.bind('k i l l', function() { 
new ZergRush(10);

});
Mousetrap.bind('e l e a r n i n g', function() { 
 alert("eLearngcenter RULES!!!")

});



jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + 
                                                $(window).scrollTop() + 10+ "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + 
                                                $(window).scrollLeft() + "px");
    return this;
}

jQuery.fn.scaleToScreen = function (w,h) {
    this.css({
    "width": ($(window).width()*w) + "px",
    "height":($(window).height()*h) + "px"

	})
    return this;
}
//title.scaleToParent(.90)
jQuery.fn.scaleToParent = function (w) {

    this.css({
    "width": ($(this).parent().width()*w) + "px",
    "height":((this).parent().height()*w) + "px"
	})
    return this;
}

jQuery.fn.centerVerticalyParent = function (h) {

    this.css({
    "top": (($(this).parent().height()/2)-($(this).height()/2)) + "px",
    "position":"absolute",
    "margin-top":0

	})
    return this;
}

jQuery.fn.centerVerticalyParentImg = function (h) {

    this.css({
    "top": ($(this).parent().height()/2)-100 + "px",
    "position":"absolute",
    "margin-top":0

	})
    return this;
}

Array.prototype.max = function() {
var max = this[0];
var len = this.length;
for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
return max;
}
Array.prototype.min = function() {
var min = this[0];
var len = this.length;
for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
return min;
}

$.fn.fitText = function( kompressor, options ) {

	    var settings = {
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
      };

			return this.each(function(){
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor
        
        if ( options ) { 
          $.extend( settings, options );
        }
        
        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					//$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				};

				// Call once to set.
				resizer();

				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};



function objectToString(o){
    
    var parse = function(_o){
    
        var a = [], t;
        
        for(var p in _o){
        
            if(_o.hasOwnProperty(p)){
            
                t = _o[p];
                
                if(t && typeof t == "object"){
					 if(parseInt(p)===0||parseInt(p)===1||parseInt(p)===2) {apa=""} else {apa="\""+p+"\""+":"}
                    a[a.length]= apa + "[ " + arguments.callee(t).join(", ") + "]";
                    
                }
                else {
                    
                    if(typeof t == "string"){
                  if(parseInt(p)===0||parseInt(p)===1||parseInt(p)===2) {apa=""} else {apa="\""+p+"\""+":"}
                        a[a.length] = [apa+"\"" + t.toString() + "\"" ];
                    }
                    else{
                    	 if(parseInt(p)===0||parseInt(p)===1||parseInt(p)===2) {apa=""} else {apa="\""+p+"\""+":"}
                       a[a.length] = [apa+ t.toString()];
                    }
                    
                }
            }
        }
        
        return a;
        
    }
    
    return "{" + parse(o).join(", ") + "}";
    
}

           var setBodyScale = function() {
                var scaleSource = win.height(),
                	xScale = win.height(),
                    scaleFactor = .023,                     //0.015,0.014
                    maxScale = 19,
                    minScale = 12;  //Tweak these values to taste

                var fontSize = Math.floor(scaleSource * scaleFactor); //Multiply the width of the body by the scaling factor:
                if (fontSize > maxScale) fontSize = maxScale;
                if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums
           

              $('.changable').css('font-size', fontSize + 'px');
             //  $('.changable').css('font-size', (fontSize-10)/10 + 'px');
                $('.changable2').css('font-size', fontSize+4 + 'px'); 
                $('.changable3').css('font-size', fontSize+2 + 'px'); 
                $('.changable0').css('font-size', fontSize-1+ 'px'); 
                $('.changable01').css('font-size', fontSize+1.3+ 'px'); 
            }

function prepareViolations(){
vio = getViolationsEssence()
var att = []
for(izo = 0;izo<vio.length;izo++){
att.push(objectToString(vio[izo]))
}
att =  att.join("|");

var att2 = []
for(izo2 = 0;izo2<anchors.length;izo2++){
att2.push(objectToString(anchors[izo2]))
}
att2 = att2.join("|")

att3 = [att,att2]
return att3.join("`")+"`"+ Slider.curSlide
}




function getNewViolations() {
var vio = []
alldata = scorm.get('cmi.suspend_data').split("`")
att=alldata[0].split("|");
for(izo = 0;izo<att.length;izo++){
vio.push(jsonParse(att[izo]))
}
return vio;
}

function getNewAnchors() {
var anc = []
alldata = scorm.get('cmi.suspend_data').split("`")
att=alldata[1].split("|");
for(izo = 0;izo<att.length;izo++){
anc.push(jsonParse(att[izo]))
}
return anc;
}

function getLastSlide(){
return scorm.get('cmi.suspend_data').split("`")[2];
}

function getViolationsEssence(){

ev = $.map( violations, function( violation ) {
					return {
						id: violation.id,
						exp: violation.exp,
						result: violation.result,
						result2:violation.result2,
						imgSrc:violation.imgSrc===undefined?"undefined":violation.imgSrc
					};
				});
return ev;
}

function applyNewViolations(){
var vio = getNewViolations();

for(izo = 0;izo<vio.length;izo++){

	violations[izo].id = vio[izo].id;
	violations[izo].exp =vio[izo].exp;
	violations[izo].result =vio[izo].result;
	violations[izo].result2 =vio[izo].result2;
	violations[izo].imgSrc =vio[izo].imgSrc;

}
}
function applyNewAnchors(){
var anc = getNewAnchors();

for(izo = 0;izo<anc.length;izo++){
	anchors[izo].seen = anc[izo].seen;
	if(anchors[izo].seen) {
		newimg = findByCode(anchors[izo].linkId).result === 'wrong'?'img/butt_w.png':'img/butt_c.png';
		$("#"+anchors[izo].id).attr("src",newimg)
	}
}}
//Заставка
//$("#intro ul").center().centerVerticalyParent()
$(".slide").show().hide()

$("#intro").delay(3000).fadeOut()

var Slider = {
	init:function(firstSlide){
		this.slides = $(".slide");
		this.lengths = this.slides.length;
		this.curSlide = firstSlide;
		this.scoreTable = $(".experience");
		this.af = 	$(".anchfound");
		this.at = $(".anchtotal");
		this.rangf = $(".rang");
		this.backButt = $("#buttBack");
		this.nextButt = $("#buttNext");
		this.navPanel = $("#navPanel");
		this.slideTitle = $("#mainTitle");
		this.nextGo = $(".nextGo"); 
		this.prevGo = $(".prevGo"); 
		this.numberOfAnc = 0;
		this.totalScore = 0;
		this.rang = rang[0];
		this.helper1Seen = false;
		this.helper2Seen = false;
		this.helper3Seen = false;
		this.randIndex = 0;
		this.slide3Seen = [false,false]
		this.slide5Seen = [false,false,false]
		blanket.fadeOut(0)
		turnOff()
	//	Slider.iddqd()

		$("#startCourse").on("click",function(){
			Slider.gotoSlide(1);
		});

		$(".proceed").on("click",function(){
		if(!Slider.seenAll()&&Slider.anchors!="") {showHelper("#helper8",true);return "You Shall not pass!"}
			if(Slider.checkSeenability(Slider[Slider.curSlide+"Seen"])) {Slider.next()} else {showHelper("#helper7")};
		});
		$(".preceed").on("click",function(){
			Slider.prev();
		})

$.subscribe("updateCursors",function(){
	if(($(".activeslide").index()===0)) {
		Slider.prevGo.animate({
			"left":"-100"

		})
	} else {		Slider.prevGo.animate({
			"left":"0"

		})}
	//($(".activeslide").index()!=$("#supersized").children().length-1)&&
	if(Slider.seenHalf()&&($(".activeslide").index()!=$("#supersized").children().length-1)) {		Slider.nextGo.animate({
			
"right":"0"
		})} else {Slider.nextGo.animate({
			
"right":"-100"
		})}
	
		

});

		this.nextGo.on("click",function(){	
			if($(".activeslide").index()!=$("#supersized").children().length-1)	{
			var dir = $(".activeslide").index()+1;		
			dir>=$("#supersized").children().length? dir = 0: dir=dir

			if(Slider.curSlide==="slide3"){
			if(dir===0){$('#src2').html('<span class=\"currentS\">&#149</span>&#149')}
			if(dir===1){$('#src2').html('&#149<span class=\"currentS\">&#149</span>')}
			}

			if(Slider.curSlide==="slide5"){
			if(dir===0){$('#src3').html('<span class=\"currentS\">&#149</span>&#149&#149')}
			if(dir===1){$('#src3').html('&#149<span class=\"currentS\">&#149</span>&#149')}
			if(dir===2){$('#src3').html('&#149&#149<span class=\"currentS\">&#149</span>')}
}
			Slider.moveOffice(dir)}
		})

		
	//	this.nextGo.hover(function(){
	//	if($(".activeslide").index()!=$("#supersized").children().length-1)	$(".cursorRi").fadeIn()

//		},function(){

	//	$(".cursorRi").fadeOut()
	//	})

	//this.prevGo.hover(function(){
	//	if($(".activeslide").index()>0)	$(".cursorLe").fadeIn()

	//	},function(){

		//$(".cursorLe").fadeOut()
	//	})
		
		this.prevGo.on("click",function(){
			if($(".activeslide").index()>0) {
			var dir = $(".activeslide").index()-1;		
			dir<0? dir = $("#supersized").children().length-1: dir=dir
			if(Slider.curSlide==="slide3"){
			if(dir===0){$('#src2').html('<span class=\"currentS\">&#149</span>&#149')}
			if(dir===1){$('#src2').html('&#149<span class=\"currentS\">&#149</span>')}
			}

			if(Slider.curSlide==="slide5"){
			if(dir===0){$('#src3').html('<span class=\"currentS\">&#149</span>&#149&#149')}
			if(dir===1){$('#src3').html('&#149<span class=\"currentS\">&#149</span>&#149')}
			if(dir===2){$('#src3').html('&#149&#149<span class=\"currentS\">&#149</span>')}
}
			Slider.moveOffice(dir)
			}
		})

		

		//Загрузка якорей
		$.each(anchors,function(index,value){
		img = $('<img></img>')
		.addClass('anchor')
		.attr('src','img/butt2.png')
		.attr('id',value.id)
		.css({
			'top':rPh(value.top),
			'left':rPw(value.left)
		})
	//	.attr('title',value.id)
		.data('anc',value.linkId)
			.appendTo("#"+value.level)


		})
		this.nextButt.on('click',function(){
	 Slider.next()
		})

		this.update();
	},
	checkSeenability:function(w) {
	if(w===undefined) return true;
	for(ipsa=0;ipsa<w.length;ipsa++){
			if(!w[ipsa]) return false
			}
	return  true;

	},
	moveOffice:function(where){
		if(!$.supersized.vars.in_animation){
		where2 = where*(-parseInt($(".activeslide").find("img").css('width')))
		$(".anchor").animate({
			'margin-left': where2
		},450);	
		}
		api.goTo(where+1);
		Slider[Slider.curSlide+"Seen"][where]=true
		window.setTimeout(reposition, 455);
		$.publish("updateCursors")

	},
	update:function(){

		this.slides.hide();
		sSl = $("#"+this.curSlide)
		sSl.fadeIn();
		$(".zero").attr("id","supersized0").empty()
		$(".first").attr("id","supersized1").empty()
		$(".second").attr("id","supersized2").empty()

		if(this.curSlide==="slide1"&&!this.helper1Seen) {showHelper("#helper1",true);this.helper1Seen=true}

		if(this.curSlide==="slide01"&&!this.helper1Seen) {showHelper("#helper16",true)}

		if(this.curSlide==="slide3"&&!this.helper3Seen) {showHelper("#helper9",true);$(".cursorRi").fadeIn();this.helper3Seen=true}



		if(this.curSlide==="slide1") {
		$("#supersized0").attr("id","supersized");
		startThis([{image : 'img/x5Office_0.png'}])
		}
		if(this.curSlide==="slide3") {

		jwerty.key('←', function () { Slider.prevGo.trigger('click')}); 
		jwerty.key('→', function () { Slider.nextGo.trigger('click')}); 

		this.slide3Seen[0] = true
		
		$("#supersized1").attr("id","supersized");
		startThis([{image : 'img/x5Office_1_01.png'},{image : 'img/x5Office_1_02.png'}])


		}
		if(this.curSlide==="slide5") {
		jwerty.key('←', function () { Slider.prevGo.trigger('click')}); 
		jwerty.key('→', function () { Slider.nextGo.trigger('click')}); 
			showHelper("#helper10",true)
			this.slide5Seen[0] = true
		$("#supersized2").attr("id","supersized");
		startThis([{image : 'img/x5Office_2_01.png'},{image : 'img/x5Office_2_02.png'},{image : 'img/x5Office_2_03.png'}])

		}

		this.slideTitle.html(sSl.data('title'))
		sSl.data("showmenu")==="nomenu"?this.navPanel.fadeOut():this.navPanel.fadeIn()	
		this.anchors = $.grep(anchors,function(obj,index){return obj.level === Slider.curSlide});
		theBg = sSl.data("bg")?sSl.data("bg"):'img/bg.png'
		$("body").css("background","#efefef url("+ theBg +") repeat top center")
		$(".anchor").css({'margin-left': "0"});	
 		window.setTimeout(reposition, 250);
 		window.setTimeout(reposition, 1250);

	if(this.curSlide==="slide7"||this.curSlide==="slide6") {

		$(".returnToInoccence").on("click",function(){
			undone = $.grep(violations,function(obj,index){return obj.result === "wrong"||!obj.result});
			onlywrong = $.grep(violations,function(obj,index){return obj.result === "wrong"});
			arrp=[]
			Slider.modifyScore(onlywrong.length*-1)
			if(undone.length!=0){
		$.each(undone,function(index,obj){
		ancorHere = findbyCodeRi3(obj.id)
		arrp.push(parseInt(ancorHere.level[5]));
		ancorHere.seen = false;
		obj.result=false;
		obj.result2="none";
		})

		}

		Slider.gotoSlide(arrp.min()+4).gotoSlide(arrp.min()+4)
		})


		if(this.randIndex<=1){sSS = "failed"} else {sSS = "passed"}
		scorm.set("cmi.completion_status", "completed");
		scorm.save();


		}

		 this.seenAll();	
		 this.updateRang();	
		this.modifyScore(0);
		

},
	curIndex:function(){
		if(Modernizr.borderradius){c=2} else{c=3}
		return $("#"+this.curSlide).index()-c;
	},
	next:function(){
		try{
			this.curSlide = this.slides[this.curIndex()+1].id;
			this.update()
		}
		catch(err){
		}
	},
	prev:function(){
		try{
			this.curSlide = this.slides[this.curIndex()-1].id;
			this.update()
		}
		catch(err){
			this.next()
		}
	},
	gotoSlide:function(where){
		this.curSlide = this.slides[where].id;
		this.update()

	},
	gotoSlideId:function(where){
		this.curSlide = where;
		this.update()

	},
	modifyScore:function(amount){
		this.totalScore += parseInt(amount);
		this.scoreTable.html(this.totalScore)
		totalRes =  Math.round((countSeen()*100)/violations.length)
		$(".totalResult").html(totalRes)
		if(this.anchors!=""){
		if(this.seenAll()) $("#helper6").fadeIn().delay(5000).fadeOut()
		}

		for(pb=0;pb<6;pb++){

			$("#pb"+pb).progressBar(totalRes);
			}
		
		scorm.set("cmi.score.raw",this.totalScore);
		$("#printSert").attr("href","img/print.html?score="+this.totalScore+"&rang="+this.randIndex+"&name="+escape(scorm.get('cmi.learner_name')));
		$.publish("updateCursors");
		return this.totalScore;
	},
	seenAll:function(){
		if(this.anchors!=""){
		amou=0;
		$.grep(this.anchors,function(value,index){
			if(value.seen) amou++; 
		});
		
		if(this.anchors.length!=0){
			this.af.html(amou)
			this.at.html(this.anchors.length)
		};
		if (amou===0) return false;
		return (this.anchors.length===amou);
	}
	},
	seenHalf:function(){
		coeff = (this.curSlide==="slide3")?2:3.5;
		if(this.anchors!=""){
		amou=0;
		$.grep(this.anchors,function(value,index){
			if(value.seen) amou++; 
		});
		
		if (amou===0) return false;
		return (amou>=Math.floor(this.anchors.length/coeff));

}
	},
	updateRang:function(){
		//percentage =  Math.round((countSeen()*100)/violations.length) || 0
		curSc = Slider.modifyScore(0);
		if(curSc<=114) {theRang = 0;$(".nextrang").text("(до следующего статуса осталось: "+(114-curSc)+" очков)")}
		if(curSc>114&&curSc<=285) {theRang = 1;$(".nextrang").text("(до следующего статуса осталось: "+(286-curSc)+" очков)")}
		if(curSc>=286) {theRang = 2;$(".nextrang").text("(максимальный статус)")}
		this.rangf.html(rang[theRang]);
		this.randIndex = theRang;
		if(theRang===2) {$('#lastInfo1').hide();$('#lastInfo0').show();}
	},
	iddqd:function(){
		sm = $("#secretNav")
		$.each(this.slides,function(index,value){
			sm.append("<a class=\"button white full\" style=\"float:left;width:50px\" id=\""+value.id+"-butt\">"+index+"</a>")
			$("#"+value.id+"-butt").on('click',function(){
				Slider.gotoSlide(this.innerHTML)
			})
		})
		
	}
};

$(function() {
Slider.init("slide00");
//Slider.init("slide7");
	iddqd =  function (){Slider.iddqd();return "Welcome Back, Master!"}
//	iddqd()
});

function findByCode(code){
	try{
 return	$.grep(violations,function(value,index){return value.id===code})[0];
 }
 catch(err){

 }
}



function countSeen(){
amou = 0
$.each(violations,function(value,index){
	if(index.result==="right") {amou++}
});

return amou;
}


function findByCodeRi(code){
	var obj;
	$.grep(violations,function(value,index){

	if(value.id==code) {obj = index}; 
	});
	return obj;
}


function findByCodeNew(code){
 return	$.grep(violations,function(value,index){return value.id===code})[0];
}


function findByCodeRi2(code){
	var obj;
	$.grep(anchors,function(value,index){

	if(value.id==code) {obj = index}; 
	});
	return obj;
}
function findbyCodeRi3(code){

		var obj;
	$.grep(anchors,function(value,index){

	if(value.linkId==code) {obj = value}; 
	});
	return obj;
}
function rPh(what){
	h = parseInt($(".slide-0").find("img").css('height'))
	return ((h*what)/100)+parseInt($(".slide-0").find("img").css('top'))
}
function rPw(what,p){
	w = parseInt($(".activeslide").find("img").css('width'))
	return ((w*what)/100)+parseInt($(".activeslide").find("img").css('left'))
}
function reposition(){
$.publish("updateCursors");
$(".text").scaleToScreen(.80,.60)

$("#popupi").centerVerticalyParentImg();
	popup
	.scaleToScreen(.80,.60)
	.center();
	title.scaleToParent(.90)

$(".outerContainer")
.scaleToParent(.70)
.centerVerticalyParent()


$.publish("updateAnchors")

setBodyScale()
}

$(window).on('resize',reposition);
reposition();

$.subscribe("updateAnchors",function(){
	$.each(anchors,function(index,value){

		$("#"+value.id).css({
			'margin-left':-parseInt($(".activeslide").find("img").css('width'))*$(".activeslide").index(),
			'top':rPh(value.top),
			'left':rPw(value.left,value.pos)
		})

	})
})

$(".slide").on("click",".anchor",function(){
	curItem = findByCode($(this).data('anc'))
	title.html(curItem.title);
	cross.hide();
	desc0
	.html("")
	.fadeOut(0);
	desc
	.empty()
	.fadeOut(0);
	curItem.result2 === 'none'? fistiImag = "img/"+curItem.id+".jpg":fistiImag = curItem.imgSrc;
	popimg
	.attr('src',fistiImag);

	$("#popupi").centerVerticalyParentImg();
	
	menu
	.empty()
	.hide()	;



	for(var i = 0;i<curItem.responces.length;i++){
		var li = $('<li></li>')
		.addClass('choice history')
		.data('story',curItem.story[i])
		.data('exp',curItem.exp[i])
		.data('orId',curItem.id)
		.data('aId',this.id)
		.attr('id',this.id+"_"+i)
		.data('index',i)
		.html(curItem.responces[i])
		.appendTo(menu)

		var img = $("<img></img>")
		.addClass('ribbon')
		.attr('src','img/ribbon-n.png')
		.attr('id',curItem.id+"icon"+i)
		.appendTo(li[0])
		$('</br>').appendTo(menu)

	}
	
	if(!Modernizr.borderradius) { 
	} else {$(".orange").css('filter','none');$(".green").css('filter','none')}


	popup.fadeIn();
	blanket.fadeIn();
	if(curItem.result2 === 'none')
		{menu.fadeIn()}
	else{desc.html('<p>'+curItem.story[curItem.result2]+'</p>');desc.show();
					desc0.html('<p>'+curItem.title2+'</p>');desc0.show();
	cross.attr('src',curItem.result==="wrong"?'img/wrong.png':'img/correct.png').fadeIn();}


})

//Привязка реакции на нажатие Истории
$(".menu").on('click','.history',function(){
	
	selfO = $(this)
	reso = (selfO.data("exp")<=1);
	$(".history").removeClass("history")
	anchors[findByCodeRi2(selfO.data('aId'))].seen = true;
	selfViol = violations[findByCodeRi(selfO.data('orId'))];
	altImag = "img/"+selfO.data('orId')+"-"+selfO.data('index')+".jpg";
	popimg.fadeOut(function(){
	popimg.attr('src',altImag).fadeIn();
	cross.attr('src',reso?'img/wrong.png':'img/correct.png').fadeIn();
	})
	
	
	result = reso?'wrong':'right';
	imgSrc2 = reso?'img/ribbon-w.png':'img/ribbon-r.png';
	$("#"+selfO.data('orId')+"icon"+selfO.data('index')).attr('src',imgSrc2)
	
	popup.removeClass()
	popup.addClass(result)
	imgSrc = reso?'img/butt_w.png':'img/butt_c.png';
	$("#"+selfO.data("aId")).attr('src',imgSrc)
	selfViol.imgSrc = altImag;
	selfViol.result = result;
	selfViol.result2 = selfO.data('index');
	Slider.modifyScore(selfO.data('exp'));
	menu.delay(600).fadeOut(300,function(){desc.fadeOut(0).html(selfO.data("story")).fadeIn();desc0.fadeOut(0);desc0.html(curItem.title2);desc0.show();})
	scorm.set('cmi.suspend_data', prepareViolations());
})

popup.fadeOut(0)

$(".helper").fadeOut(0)

$(".helper").on("click","a",function(){

if($(this).data("index")===0) { turnOff();blanket.on('click',turnOff)}
	$(".helper").fadeOut()
	$("#helper"+$(this).data("index")).fadeIn()
})


$("#close").on('click',turnOff)
	blanket.on('click',turnOff)

$("#needhelp").on("click",function(){
		if(Slider.curSlide==="slide1") {showHelper("#helper2")}
		if(Slider.curSlide==="slide3") {showHelper("#helper2")}
		if(Slider.curSlide==="slide5") {showHelper("#helper2")}
})

		
$('#showright').fadeOut()



function showHelper(which,center,info){
if(center) $(which).center();
if(info) $(which).html(info);
$(which).fadeIn();
blanket
	.fadeIn()

$("#blankHelper").fadeIn()
}

function turnOff(){
$("#blankHelper").fadeOut()
$(".helper").fadeOut(0)
blanket.fadeOut();
popup.fadeOut();
}

function turnOffhelper(){
$(".helper").fadeOut()
}



		function startThis(slidesg){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	0,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	1,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   3000,		// Length between transitions
					transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	450,		// Speed of transition
					new_window				:	0,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   0,			// Keyboard navigation on/off
					performance				:	2,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  slidesg,
												
					// Theme Options			   
					progress_bar			:	0,			// Timer for each slide							
					mouse_scrub				:	1
					
				});


}


if(!Modernizr.borderradius) {
	blanket.css("opacity","0.5")
}else {$(".orange").css('filter','none');$(".green").css('filter','none')}


for(pb=0;pb<6;pb++){

	$("#pb"+pb).progressBar(0);
}





$(function() {
    if (window.PIE) {
        $('#numbers').each(function() {
            PIE.attach(this);
        });
        $('.button').each(function() {
            PIE.attach(this);
        });  
        $('#navPanel').each(function() {
            PIE.attach(this);
        });        
        $('#header').each(function() {
            PIE.attach(this);
        });
         $('.miniMenu').find('li').each(function() {
            PIE.attach(this);
        });


		reposition();
try{

	 window.setTimeout(function(){applyNewViolations();applyNewAnchors();
	 	if(scorm.get("cmi.score.raw")!='') Slider.modifyScore(scorm.get("cmi.score.raw"))
	 		Slider.gotoSlideId(getLastSlide())
	 }, 1000)


} catch(err){


}
    }


});

function analRes(ar){
	for(ipsa=0;ipsa<ar.length;ipsa++){
			if(!ar[ipsa]) return false
			}
	return  true;
	}


$(".miniMenu").on("click","li",function(){
li = $(this).data("link")
$(".subp").fadeOut(0)
$("li").removeClass("active")
visitTabs[$(this).index()] = true
$(this).addClass("active")
if(analRes(visitTabs)){
//	$("#returnToInoccence").fadeIn()
	//$("#printSert").fadeIn()
}
$("#"+li).fadeIn()


});




(function(){function j(a,c,d){this.rush=d;this.speed=10;this.x=a;this.y=c;this.width=10;this.height=10;this.isKilling=false;this.isFinished=false;this.dPulsate=0;this.dom=$("<zergling>").css({width:this.width,height:this.height,position:"absolute",display:"block",background:"black url('..img/butt_w.png')",left:a,top:c,borderRadius:"15px",zIndex:9999}).appendTo(b)}function k(a){var b=this,c=this.zerglings=[],d=this.targets=[];for(var e=0;e<a;++e){c.push(new j(h()*100,h()*100,this))}this.intervalID=setInterval(function(){b.step()},30)}window.Zergling=j;window.ZergRush=k;var a=document,b=a.body,c=Math.atan2,d=Math.cos,e=Math.sin,f=Math.sqrt,g=Math.PI,h=Math.random,i=Math.max;j.DATA_KEY="zergTargetData";j.MAX_TARGET_AREA=5e4;j.VISION=1e3;j.LIFE=50;j.isSuitableTarget=function(b){var c;if(!b){return false}for(var d=b;d=d.parentNode;){if($.data(d,j.DATA_KEY)||/antiZerg/i.test(d.className)){return false}}c=$.data(b,j.DATA_KEY);b=$(b);return!/zergling/i.test(b[0].nodeName)&&!/antiZerg/i.test(b[0].className)&&(!c||c.life>0)&&b.width()*b.height()<j.MAX_TARGET_AREA};j.prototype={calcMovement:function(){var a=this.target,b=a.position.left+h()*a.width-this.x,f=a.position.top+h()*a.height-this.y,g=c(f,b);this.dx=this.speed*d(g);this.dy=this.speed*e(g)},draw:function(){if(this.isFinished){return}var a=this.target;if(this.isKilling){if(a.life>0){a.life--;this.pulsate();a.dom.css("opacity",a.life/j.LIFE)}else{a.dom.css("visibility","hidden");this.pulsate(0);this.isKilling=false;this.target=null}return}if(!this.target||this.target.life<=0){if(this.findTarget()){a=this.target;this.calcMovement()}else{this.isFinished=true;this.dom.fadeOut(100,function(){$(this).remove()});return}}if(this.hasReachedTarget()){this.isKilling=true;return}this.x+=this.dx;this.y+=this.dy;this.dom.css({left:this.x,top:this.y})},hasReachedTarget:function(){var a=this.target,b=a.position;return this.x>=b.left&&this.y>=b.top&&this.x<=b.left+a.width&&this.y<=b.top+a.height},findTarget:function(){var c,f,h,k,l,m,n=this.width/2,o=this.height/2,p=i(b.scrollTop,a.documentElement.scrollTop),q=i(b.scrollLeft,a.documentElement.scrollLeft);for(f=10;f<j.VISION;f+=50){for(h=0;h<360;h+=45){k=this.x+n+f*d(g/180*h)-q;l=this.y+o+f*e(g/180*h)-p;if(j.isSuitableTarget(m=a.elementFromPoint(k,l))){m=$(m);c=this.target=m.data(j.DATA_KEY);if(!c){m.data(j.DATA_KEY,this.target={dom:m,position:m.offset(),width:m.width(),height:m.height(),life:j.LIFE,initialCSS:{visibility:"",opacity:m.css("opacity")||""}});this.rush.registerTarget(this.target)}return true}}}},pulsate:function(){if(this.dPulsate=!this.dPulsate){this.dom.css({left:this.x-2,top:this.y-2,width:14,height:14})}else{this.dom.css({left:this.x,top:this.y,width:10,height:10})}}};k.prototype={step:function(){var a=true;for(var b=0;b<this.zerglings.length;++b){this.zerglings[b].draw();a=a&&this.zerglings[b].isFinished}if(a){clearInterval(this.intervalID)}},destroy:function(){clearInterval(this.intervalID);for(var a=0;a<this.zerglings.length;++a){this.zerglings[a].dom.remove()}for(var a=0;a<this.targets.length;++a){this.targets[a].dom.css(this.targets[a].initialCSS);this.targets[a].dom.removeData(j.DATA_KEY)}},registerTarget:function(a){this.targets.push(a)}}})()


qF = [
{question:"Простой вопрос",answers:[
{text:"Вариант ответа №1",correct:true},
{text:"Вариант ответа №2",correct:false},
{text:"Вариант ответа №3",correct:false}
]},
{question:"Множественный вопрос",answers:[
{text:"Другой Вариант ответа №1",correct:true},
{text:"Другой варинат ответа №2",correct:true},
{text:"Другой Вариант ответа №3",correct:true}
]}
]

questionsFinalAnswers= new Array();

var theTest = {
	init:function(qa,block){
	this.qa = qa;
	this.placeHolder = $(block);
	this.qi = 0; //question index
	this.results = []
	theTest.publishQuestions();

	},
	publishQuestions:function(){


		if(this.qi<this.qa.length){

		this.placeHolder
			.empty()
			.append("<div id=\"testHold\" style=\"display:none\"><h2 class=\"questionTitle\">"+this.qa[this.qi].question+"</h2><ul id=\"questionBody\"></ul></div>")

	for(var i = 0;i<this.qa[this.qi].answers.length;i++){
		var li = $('<li></li>')
		.addClass('choice history')
		.data('correct',this.qa[this.qi].answers[i].correct)
		.data('index',i)
		.html(this.qa[this.qi].answers[i].text)
		.appendTo("#questionBody")
	}
	$("#testHold")
	.center()
	.fadeIn()


	$("#testHold").on('click','li',function(){

		theTest.results.push($(this).data("correct"))
		


		theTest.qi++;
		theTest.publishQuestions()
	})
		} else {
		
			this.displayResults()

		}

	},
	displayResults:function(){

		this.totalResult = this.analizeResults()
		tH=$("#testHold")

		tH.html("")
		
		this.totalResult?tH.append("<h2>Вы верно ответили на все вопросы!</h2>"):tH.append("<h2>Не на все вопросы Вы ответили верно!</h2>")
		
		
		tH.center()

	},
	analizeResults:function(){
	for(ipsa=0;ipsa<this.results.length;ipsa++){
			if(!this.results[ipsa]) return false
			}
	return  true;
	}


}
