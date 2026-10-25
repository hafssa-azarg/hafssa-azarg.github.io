(function(){
var btns=document.querySelectorAll('.tabs button'),items=document.querySelectorAll('.proj');
btns.forEach(function(b){b.addEventListener('click',function(){
var f=b.dataset.f;
btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
items.forEach(function(p){p.hidden=!(f==='all'||(' '+p.dataset.c+' ').indexOf(' '+f+' ')>-1)});
})});
})();
(function(){
var b=document.getElementById('burger'),m=document.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
var f=document.getElementById('cf'),st=document.getElementById('cfs');
f.addEventListener('submit',function(e){
e.preventDefault();var d=new FormData(f);
if(f.action.indexOf('YOUR_FORM_ID')>-1){
location.href='mailto:azarg.hafssahe@gmail.com?subject='+encodeURIComponent('Contact portfolio : '+d.get('name'))+'&body='+encodeURIComponent(d.get('message')+'\n\n'+d.get('email'));return}
fetch(f.action,{method:'POST',body:d,headers:{Accept:'application/json'}}).then(function(r){
if(r.ok){f.reset();st.textContent='Message envoyé. Je vous réponds rapidement.'}else{st.textContent='Envoi impossible. Écrivez-moi à azarg.hafssahe@gmail.com.'}
}).catch(function(){st.textContent='Envoi impossible. Écrivez-moi à azarg.hafssahe@gmail.com.'});
});
})();
(function(){
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* barre de progression */
var pg=document.getElementById('progress');
function sc(){var d=document.documentElement,m=d.scrollHeight-d.clientHeight;pg.style.width=(m>0?d.scrollTop/m*100:0)+'%'}
addEventListener('scroll',sc,{passive:true});sc();
/* apparition au scroll */
var els=document.querySelectorAll('h2,.proj,.cert,.tl article,.skills>div,.facts div,.two li,.cf');
if(!rm&&'IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
}else{els.forEach(function(el){el.classList.add('in')})}
/* rôles tapés */
var r=document.getElementById('roles'),L=['Sécurité OT/ICS','Détection d’intrusions et SOC','Audit et pentest'],a=0,b=0,del=false;
function tick(){var w=L[a];b+=del?-1:1;r.textContent=w.slice(0,b);var t=del?35:70;
if(!del&&b===w.length){del=true;t=1600}else if(del&&b===0){del=false;a=(a+1)%L.length;t=300}
setTimeout(tick,t)}
if(!rm)tick();
/* pluie de code */
var c=document.getElementById('rain'),x=c.getContext('2d'),fs=16,cols,y,vis=true,last=0;
function rs(){c.width=c.offsetWidth;c.height=c.offsetHeight;cols=Math.ceil(c.width/fs);y=[];for(var i=0;i<cols;i++)y.push(Math.random()*c.height/fs)}
rs();addEventListener('resize',rs);
if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(c);
var ch='01{}<>/$#ABCDEF:;';
function dr(ts){requestAnimationFrame(dr);if(!vis||document.hidden||ts-last<70)return;last=ts;
x.fillStyle='rgba(10,15,20,.14)';x.fillRect(0,0,c.width,c.height);x.fillStyle='#3ddc84';x.font=fs+'px monospace';
for(var i=0;i<cols;i++){x.fillText(ch[Math.floor(Math.random()*ch.length)],i*fs,y[i]*fs);
if(y[i]*fs>c.height&&Math.random()>.975)y[i]=0;y[i]++}}
if(!rm)requestAnimationFrame(dr);
})();
(function(){
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches,io='IntersectionObserver' in window;
document.querySelectorAll('.proj,.cert,.skills>div,.stats>div').forEach(function(el){el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--mx',e.clientX-r.left+'px');el.style.setProperty('--my',e.clientY-r.top+'px')})});
var links=document.querySelectorAll('.nav nav a[href^="#"]');
if(io){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id],footer[id]').forEach(function(s){so.observe(s)})}
if(!rm&&io)document.querySelectorAll('[data-count]').forEach(function(n){var to=+n.dataset.count;n.textContent='0';
var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){o.disconnect();var t0=performance.now();(function f(t){var p=Math.min((t-t0)/1200,1);n.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}});o.observe(n)});
})();