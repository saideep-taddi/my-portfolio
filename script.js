window.addEventListener('scroll',()=>{
  document.getElementById('progress').style.width=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)+'%';
});
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.querySelectorAll('.counter').forEach(animCounter);}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
function animCounter(el){
  if(el.dataset.done)return;el.dataset.done=true;
  const t=parseInt(el.dataset.target);let c=0;
  const iv=setInterval(()=>{c+=t/50;if(c>=t){c=t;clearInterval(iv);}el.textContent=Math.floor(c);},20);
}
setTimeout(()=>document.querySelectorAll('.counter').forEach(animCounter),800);
const roles=['$3.5M Revenue Generated','20+ Dashboards Deployed','18% Churn Reduction','AWS Certified Data Engineer','SQL & Python Expert'];
let ri=0,ci=0,del=false;
function type(){
  const tw=document.getElementById('tw');const r=roles[ri];
  if(!del){tw.textContent=r.slice(0,ci+1);ci++;if(ci===r.length){setTimeout(()=>{del=true;setTimeout(type,60);},2000);return;}}
  else{tw.textContent=r.slice(0,ci-1);ci--;if(ci===0){del=false;ri=(ri+1)%roles.length;}}
  setTimeout(type,del?40:70);
}
setTimeout(type,800);
function showTab(id,btn){
  document.querySelectorAll('.exp-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.exp-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  btn.classList.add('active');
}
async function sendForm(e){
  e.preventDefault();
  const btn=document.getElementById('sb');
  btn.textContent='Sending...';btn.disabled=true;
  try{
    const res=await fetch('https://formspree.io/f/mzdwqdvn',{method:'POST',body:new FormData(e.target),headers:{'Accept':'application/json'}});
    if(res.ok){document.getElementById('fOK').style.display='block';e.target.reset();}
  }catch(err){}
  btn.textContent='Send Message →';btn.disabled=false;
}
