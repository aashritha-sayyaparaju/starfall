let cur="start",flags={},hist=[],typing=false,to=null;
const $=id=>document.getElementById(id);
const G=id=>SCRIPT[id];

function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");}

function setChar(el,name,dim){
  if(!name){el.className="character hidden";el.innerHTML="";return;}
  el.className=`character ${name}${dim?" dim":""}`;
  el.innerHTML=`<div class="char-hair"></div><div class="char-head"></div><div class="char-body"></div>`;
}

function type(text,cb){
  typing=true;$("click-indicator").classList.add("hidden");$("dialogue-text").textContent="";let i=0;
  (function tick(){i<text.length?($("dialogue-text").textContent+=text[i++],to=setTimeout(tick,22)):(typing=false,$("click-indicator").classList.remove("hidden"),cb&&cb())})();
}

function addHist(speaker,text){
  hist.push({speaker,text});
  const d=document.createElement("div");d.className="history-entry";
  d.innerHTML=`${speaker?`<div class="history-speaker">${speaker}</div>`:""}<div class="history-text">${text}</div>`;
  $("history-list").appendChild(d);$("history-list").scrollTop=9999;
}

function goTo(id){
  cur=id;const n=G(id);if(!n)return;
  if(n.end){$("end-title").textContent=n.end.title;$("end-desc").textContent=n.end.desc;showScreen("screen-end");return;}
  if(n.bg)$("bg-layer").className=`bg-${n.bg}`;
  setChar($("char-left"),n.charLeft||null,n.dim==="left");
  setChar($("char-right"),n.charRight||null,n.dim==="right");
  $("speaker-name").textContent=n.speaker||"";
  if(n.text)addHist(n.speaker,n.text);
  if(n.choices){
    type(n.text,()=>{
      $("choices-box").classList.remove("hidden");$("dialogue-box").style.display="none";$("choices-list").innerHTML="";
      n.choices.forEach(c=>{const b=document.createElement("button");b.className="choice-btn";b.textContent=c.text;
        b.onclick=()=>{if(c.setFlag)flags[c.setFlag]=true;$("choices-box").classList.add("hidden");$("dialogue-box").style.display="";goTo(c.next);};
        $("choices-list").appendChild(b);});
    });
  }else{$("choices-box").classList.add("hidden");$("dialogue-box").style.display="";type(n.text,null);}
}

function advance(){
  const n=G(cur);if(!n||n.choices||n.end)return;
  if(typing){clearTimeout(to);typing=false;$("dialogue-text").textContent=n.text;$("click-indicator").classList.remove("hidden");return;}
  if(n.next)goTo(n.next);
}

function reset(){cur="start";flags={};hist=[];$("history-list").innerHTML="";}
function save(){localStorage.setItem("sf",JSON.stringify({cur,flags,hist}));$("save-toast").classList.add("show");setTimeout(()=>$("save-toast").classList.remove("show"),2000);}
function load(){const d=localStorage.getItem("sf");if(!d)return false;const s=JSON.parse(d);cur=s.cur;flags=s.flags;hist=[];$("history-list").innerHTML="";s.hist.forEach(h=>addHist(h.speaker,h.text));return true;}

$("btn-new").onclick=()=>{reset();showScreen("screen-game");goTo("start");};
$("btn-load").onclick=()=>{if(load()){showScreen("screen-game");goTo(cur);}};
$("dialogue-box").onclick=advance;
$("btn-history").onclick=()=>$("history-panel").classList.toggle("hidden");
$("btn-close-history").onclick=()=>$("history-panel").classList.add("hidden");
$("btn-save").onclick=save;
$("btn-menu-game").onclick=()=>showScreen("screen-start");
$("btn-end-restart").onclick=()=>{reset();showScreen("screen-game");goTo("start");};
$("btn-end-menu").onclick=()=>showScreen("screen-start");
document.addEventListener("keydown",e=>{if((e.code==="Space"||e.code==="Enter")&&$("screen-game").classList.contains("active"))advance();});
$("btn-load").disabled=!localStorage.getItem("sf");