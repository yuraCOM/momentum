(()=>{var e={26:()=>{let e=document.querySelector("#game"),t=document.querySelector("#new-game"),n=(document.querySelector("#result-wrapper"),document.querySelector("#result"));function o(){for(i=0;i<9;i++)e.innerHTML+='<div id="field"></div>'}window.onload=function(){o(),c()};let r=0;function c(){e.onclick=e=>{if(e.target.innerText)return!1;e.target.innerText=r%2==0?"x":"o",r++,function(){let e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=document.querySelectorAll("#field"),n="";for(i=0;i<e.length;i++)"x"===t[e[i][0]].innerHTML&&"x"===t[e[i][1]].innerHTML&&"x"===t[e[i][2]].innerHTML&&(n="Победили Крестики",l(n)),"o"===t[e[i][0]].innerHTML&&"o"===t[e[i][1]].innerHTML&&"o"===t[e[i][2]].innerHTML&&(n="Победили Нолики",l(n)),""===n&&9===r&&7===i&&(n="Ничья",l(n))}()}}function l(t){e.style.pointerEvents="none",n.innerHTML=`${t}!!!`,n.style.backgroundColor="wheat"}t.addEventListener("click",(function(){e.innerHTML="",document.querySelector("#result").innerHTML="",o(),r=0,c(),e.style.pointerEvents="auto",n.style.backgroundColor=""}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}(()=>{"use strict";n(26);const e=document.querySelector("#add-task-btn"),t=document.querySelector("#description-task"),o=document.querySelector(".todos-wrapper");let r;r=localStorage.tasks?JSON.parse(localStorage.getItem("tasks")):[];let c=[];function i(e){this.description=e,this.completed=!1}const l=()=>{localStorage.setItem("tasks",JSON.stringify(r))},s=()=>{o.innerHTML="",r.length>0&&((()=>{let e=r.length&&r.filter((e=>!1===e.completed)),t=r.length&&r.filter((e=>!0===e.completed));r=[...e,...t]})(),r.forEach(((e,t)=>{o.innerHTML+=((e,t)=>`\n        <div class="todo-item ${e.completed?"checked":""}">\n            <div class="description">${e.description}</div>\n            <div class="buttons">\n\x3c!--                <input onclick="completeTask(${t})" class="btn-completed" type="checkbox" ${e.completed?"checked":""}>--\x3e\n                <input id="btn-check${t}" class="btn-completed" type="checkbox" ${e.completed?"checked":""}>\n\x3c!--                <button onclick="delTask(${t})" id="btn-del${t}" class="btn-del">DELETE</button>--\x3e\n                <button id="btn-del${t}" class="btn-del">DELETE</button>\n            </div>\n         </div>\n    `)(e,t)})),c=document.querySelectorAll(".todo-item")),document.querySelectorAll(".btn-del").forEach((e=>{e.addEventListener("click",(function(){a(e.id.slice(-1))}))})),document.querySelectorAll(".btn-completed").forEach((e=>{e.addEventListener("click",(function(){var t;t=e.id.slice(-1),r[t].completed=!r[t].completed,r[t].completed?c[t].classList.add("checked"):c[t].classList.remove("checked"),l(),s()}))}))};s(),e.addEventListener("click",(()=>{r.push(new i(t.value)),l(),s(),t.value=""}));const a=e=>{c[e].classList.add("delition"),setTimeout((()=>{r.splice(e,1),l(),s()}),100)};let u={weather:!0,player:!0,playlist:!0,"pop-time":!0,"pop-date":!0,"pop-greeting":!0,"pop-quote":!0,"pop-xo":!0,"pop-todo":!0},d=[".weather",".player-controls",".play-list",".time",".date",".greeting-container",".quote-wrapper",".xogame",".todo-wrapper"],m=document.querySelector(".pop-tools"),y=document.querySelector(".tools"),g=document.querySelector(".close-pop"),p=m.querySelectorAll("input");function v(){p.forEach((e=>{e.checked=u[e.name]}))}function h(){for(let e=0;e<d.length;e++)u[Object.keys(u)[e]]?document.querySelector(d[e]).classList.remove("hide-item"):document.querySelector(d[e]).classList.add("hide-item");!1===u.player?document.querySelector(".range-sound-view").style.display="none":document.querySelector(".range-sound-view").style.display="block"}localStorage.dataTools&&(u=JSON.parse(localStorage.getItem("dataTools"))),v(),h(),y.addEventListener("click",(()=>{m.style.right="0"})),g.addEventListener("click",(()=>{m.style.right="100%",m.querySelectorAll("input").forEach((e=>{u[e.name]=e.checked})),localStorage.setItem("dataTools",JSON.stringify(u)),v(),h()}));const S=[{num:1,title:"Night",src:"assets/sounds/1.mp3",duration:"06:24"},{num:2,title:"Like in war",src:"assets/sounds/2.mp3",duration:"04:05"},{num:3,title:"Under the blue sky",src:"assets/sounds/3.mp3",duration:"02:39"},{num:4,title:"Careless Angel",src:"assets/sounds/4.mp3",duration:"03:58"}];let f=document.querySelector(".play-list");S.forEach((e=>{f.innerHTML+=`\n    <li id ="${e.num}">${e.title}</li>\n`}));let q=document.querySelector("audio");q.src="assets/sounds/1.mp3",q.volume=.5,q.onended=M;let k=S[0].num-1,L=document.querySelector(".play");document.querySelector(".play-next").addEventListener("click",M),document.querySelector(".play-prev").addEventListener("click",(function(){0===k?(k=3,q.src=S[k].src,$()):(k-=1,q.src=S[k].src,$())}));let b=document.querySelector(".mute"),w=document.querySelector("#soundVolume"),E=document.querySelector("#range-audio");function $(){if(document.querySelector(".song-name").textContent=S[k].title,x(),q.paused)L.style.backgroundImage="url(assets/svg/pause.svg)",q.play();else{q.pause(),L.style.backgroundImage="url(assets/svg/play.svg)";let e=`${k}`;e=Number(e)+1,document.getElementById(`${e.toString()}`).style.color="green",document.getElementById(`${e.toString()}`).style.backgroundImage="url(assets/svg/play.svg)"}q.addEventListener("timeupdate",(function(){E.value=100*q.currentTime/q.duration}))}function M(){3===k?(k=0,q.src=S[k].src,$()):(k+=1,q.src=S[k].src,$())}function x(){document.querySelector(".play-list").querySelectorAll("li").forEach((e=>{e.style.color="white",e.style.backgroundImage="url(assets/svg/play.svg)"}));let e=`${k}`;e=Number(e)+1,document.getElementById(`${e.toString()}`).style.color="red",document.getElementById(`${e.toString()}`).style.backgroundImage="url(assets/svg/pause.svg)"}E.value="0",w.addEventListener("pointerdown",(function(){q.volume=w.value,q.muted=!1,b.classList.remove("downv"),w.addEventListener("pointermove",(function(){q.volume=w.value}))})),b.addEventListener("click",(function(){b.classList.toggle("downv"),q.muted=!0!==q.muted})),q.addEventListener("timeupdate",(function(){let e=q.currentTime,t=Math.floor(e%60),n=Math.floor(e/60);document.querySelector(".duration").textContent="0"+n+":"+("0"+t).substr(-2)+" / "+S[k].duration}),!1),f.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{e.id-1!==k&&(k=e.id-1,x(),q.src=S[e.id-1].src),$()}))})),L.addEventListener("click",$),E.addEventListener("input",(function(){q.currentTime=E.value*q.duration/100}));let T=new Date,C=T.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});C=+C.split(":").join(".");let I=function(e){return e>=6&&e<=11.59?"morning":e>=12&&e<=17.59?"day":e>=18&&e<=23.59?"evening":e>=0&&e<=5.59&&"night"}(C);function H(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}let N=H(1,20),O="";O=N<10?`0${N}`:N;let j={name:"...enter name",city:"Minsk"};function A(){localStorage.setItem("baseMoment",JSON.stringify(j))}function J(){localStorage.baseMoment&&(j=JSON.parse(localStorage.getItem("baseMoment")))}let D=document.querySelector(".author"),B=document.querySelector(".quote");async function F(){const e=await fetch("js/base-phases.json"),t=await e.json();let n=H(0,Object.keys(t).length);D.innerHTML=t[n].author,B.innerHTML=`" ${t[n].text} "`}const G=document.querySelector(".weather-icon"),U=document.querySelector(".temperature"),V=document.querySelector(".weather-description"),W=document.querySelector(".wind"),z=document.querySelector(".humidity");async function K(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=eng&appid=6dfbd47545f720acd1a7123460a2c92d&units=metric`,n=await fetch(t),o=await n.json();"404"===o.cod?U.textContent="Error! City Not Founded!":(G.className="weather-icon owf",G.classList.add(`owf-${o.weather[0].id}`),U.textContent=`${Math.round(o.main.temp)}°C`,V.textContent=o.weather[0].description,W.textContent=`Wind Speed ${Math.round(o.wind.speed)} м/s`,z.textContent=`Humidity ${o.main.humidity}%`)}let P=document.querySelector(".name"),Q=document.querySelector(".city");document.addEventListener("DOMContentLoaded",(function(){Q.value=j.city,Q.textContent=j.city,K(j.city)}));let R=document.querySelector(".change-quote"),X=document.querySelector(".slide-next"),Y=document.querySelector(".slide-prev");function Z(){this.value=""}function _(e,t){j[t]=e.value,A(),J()}J(),function e(){const t=document.querySelector(".time"),n=new Date;t.textContent=n.toLocaleTimeString(),setTimeout(e,1e3),document.querySelector(".greeting").innerHTML=`Good ${I}, `}(),document.querySelector(".date").innerHTML=T.toLocaleString("en-us",{weekday:"long",month:"long",day:"numeric"}),document.querySelector("body").style.backgroundImage=`url('https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${I}/${O}.jpg')`,F(),K(j.city),j.name.trim().length<=0?P.value="...enter name":P.value=j.name,P.addEventListener("focus",Z),P.addEventListener("blur",(function(){_(P,"name"),j.name.trim().length<=0?P.value="...enter name":P.value=j.name,A()})),0===j.city.trim().length?Q.value="...enter city":Q.value=j.city,Q.addEventListener("focus",Z),Q.addEventListener("blur",(function(){_(Q,"city"),0===j.city.trim().length?(G.className="weather-icon owf",U.textContent="",V.textContent="",W.textContent="",z.textContent=""):K(j.city),0===j.city.trim().length?Q.value="...enter city":Q.value=j.city,j.city=Q.value,A(),J()})),R.addEventListener("click",F),X.addEventListener("click",(()=>{!function(){O=Number(O),O+=1,20===O&&(O=1),O=O<10?`0${O}`:O;const e=new Image;e.src=`https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${I}/${O}.jpg`,e.onload=()=>{document.querySelector("body").style.backgroundImage=`url('https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${I}/${O}.jpg`}}()})),Y.addEventListener("click",(()=>{!function(){O=Number(O),O-=1,1===O&&(O=20),O=O<10?`0${O}`:O;const e=new Image;e.src=`https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${I}/${O}.jpg`,e.onload=()=>{document.querySelector("body").style.backgroundImage=`url('https://raw.githubusercontent.com//yuraCOM/stage1-tasks/assets/images/${I}/${O}.jpg`}}()}))})()})();