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