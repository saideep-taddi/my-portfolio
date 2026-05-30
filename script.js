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

// PROJECT DATA
const projects = {
  medicare: {
    icon: '🏥',
    title: 'ML on Medicare Services',
    tags: ['Python','ML','Healthcare','Scikit-learn'],
    why: [
      {q:'Problem', a:'Medicare data is complex and underutilized — inefficiencies cost billions annually.'},
      {q:'Goal', a:'Predict service costs and identify patterns to improve healthcare resource allocation.'},
      {q:'Approach', a:'Applied 5 ML models with full EDA pipeline, feature engineering and evaluation.'},
      {q:'Impact', a:'Enabled data-driven decisions for healthcare efficiency and cost optimization.'}
    ],
    outcomes: [
      {icon:'✅', text:'<strong>Random Forest</strong> achieved highest accuracy among all 5 models tested.'},
      {icon:'📊', text:'Full EDA revealed key cost drivers across Medicare service categories.'},
      {icon:'🔍', text:'Feature engineering identified <strong>top predictors</strong> for service cost anomalies.'},
      {icon:'📈', text:'Model evaluation using precision, recall and F1-score confirmed production readiness.'}
    ],
    chart: {
      title: 'Model Performance Comparison (Accuracy %)',
      bars: [
        {label:'Random Forest', val:94, pct:94},
        {label:'Decision Tree', val:87, pct:87},
        {label:'Linear Regression', val:82, pct:82},
        {label:'SVM', val:85, pct:85},
        {label:'K-Means Clustering', val:78, pct:78}
      ]
    },
    tech: ['Python','Pandas','NumPy','Scikit-learn','Matplotlib','Seaborn','Jupyter Notebook','Random Forest','Decision Trees','SVM','K-Means']
  },
  housing: {
    icon: '🏠',
    title: 'California Housing Price Predictor',
    tags: ['R Shiny','ML','Real Estate','Leaflet'],
    why: [
      {q:'Problem', a:'Home buyers and investors lack accessible tools to estimate property values.'},
      {q:'Goal', a:'Build an interactive app for real-time price prediction with geospatial insights.'},
      {q:'Approach', a:'R Shiny dashboard with Random Forest & Linear Regression on California dataset.'},
      {q:'Impact', a:'Users can input housing features and get instant predictions with map visualization.'}
    ],
    outcomes: [
      {icon:'🗺️', text:'Interactive <strong>Leaflet map</strong> visualizing house prices across all California regions.'},
      {icon:'🤖', text:'<strong>Random Forest</strong> model outperformed Linear Regression with lower RMSE.'},
      {icon:'⚡', text:'Real-time predictions — users input attributes and get instant price estimates.'},
      {icon:'📊', text:'Feature importance analysis revealed <strong>median income</strong> as the top predictor.'}
    ],
    chart: {
      title: 'Feature Importance for Price Prediction',
      bars: [
        {label:'Median Income', val:38, pct:95},
        {label:'Location (Lat/Long)', val:28, pct:70},
        {label:'Housing Median Age', val:14, pct:35},
        {label:'Total Rooms', val:12, pct:30},
        {label:'Population', val:8, pct:20}
      ]
    },
    tech: ['R','Shiny','shinydashboard','tidyverse','caret','randomForest','ggplot2','leaflet','mice','dplyr']
  },
  amazon: {
    icon: '🛒',
    title: 'Amazon Sales Analytics — GCP',
    tags: ['BigQuery','Looker Studio','GCP','E-Commerce'],
    why: [
      {q:'Problem', a:'Amazon sellers struggle to understand how pricing and ratings impact revenue.'},
      {q:'Goal', a:'Analyze product sales data to answer 4 key business questions about revenue drivers.'},
      {q:'Approach', a:'Google BigQuery for SQL queries + Looker Studio for BI dashboards + Python EDA.'},
      {q:'Impact', a:'Delivered actionable insights on pricing strategy, discount impact and category performance.'}
    ],
    outcomes: [
      {icon:'💰', text:'High-priced products with <strong>low ratings negatively impact revenue</strong> — identified through scatter analysis.'},
      {icon:'📉', text:'Discounted products drive <strong>higher engagement</strong> but only average review scores.'},
      {icon:'🏷️', text:'Categories with high ratings but few reviews identified as <strong>growth opportunities</strong>.'},
      {icon:'📊', text:'3 BI dashboards built in Looker Studio with pie, bar and scatter visualizations.'}
    ],
    chart: {
      title: 'Sales Impact by Rating Category',
      bars: [
        {label:'5★ Products', val:92, pct:92},
        {label:'4★ Products', val:78, pct:78},
        {label:'3★ Products', val:54, pct:54},
        {label:'2★ Products', val:31, pct:31},
        {label:'1★ Products', val:12, pct:12}
      ]
    },
    tech: ['Google BigQuery','Looker Studio','Python','Pandas','NumPy','Matplotlib','Seaborn','OpenRefine','SQL','GCP']
  },
  nba: {
    icon: '🏀',
    title: 'NBA Player Performance Predictor',
    tags: ['R','Predictive Analytics','Sports','ggplot2'],
    why: [
      {q:'Problem', a:'NBA teams need data-driven ways to evaluate and predict player performance trends.'},
      {q:'Goal', a:'Build ML models to predict future performance using historical player stats.'},
      {q:'Approach', a:'R Markdown with 3 ML models — Linear Regression, Random Forest & Decision Trees.'},
      {q:'Impact', a:'Random Forest outperformed all models; identified scoring efficiency as top predictor.'}
    ],
    outcomes: [
      {icon:'🏆', text:'<strong>Random Forest</strong> achieved lowest MSE and highest R-squared among all 3 models.'},
      {icon:'📊', text:'Scoring efficiency (PER) is <strong>highly correlated</strong> with win shares — confirmed by analysis.'},
      {icon:'🔍', text:'Players with high usage rates show <strong>lower efficiency</strong> — key finding for team strategy.'},
      {icon:'📈', text:'ggplot2 visualizations revealed clear performance clusters by player position.'}
    ],
    chart: {
      title: 'Model Accuracy Comparison (R² Score)',
      bars: [
        {label:'Random Forest', val:91, pct:91},
        {label:'Decision Tree', val:83, pct:83},
        {label:'Linear Regression', val:74, pct:74}
      ]
    },
    tech: ['R','tidyverse','ggplot2','caret','randomForest','rpart','shiny','knitr','R Markdown','dplyr']
  }
};

function openProject(id) {
  const p = projects[id];
  document.getElementById('mIcon').textContent = p.icon;
  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mTags').innerHTML = p.tags.map(t => `<span class="ptag ptag-mint">${t}</span>`).join('');

  let body = '';

  // WHY section
  body += `<div class="ms">
    <div class="ms-title">Why This Project</div>
    <div class="why-grid">
      ${p.why.map(w => `<div class="why-item"><div class="why-item-q">${w.q}</div><div class="why-item-a">${w.a}</div></div>`).join('')}
    </div>
  </div>`;

  // VISUALIZATION
  body += `<div class="ms">
    <div class="ms-title">Visualization & Results</div>
    <div class="viz-container">
      <div class="viz-title">${p.chart.title}</div>
      <div class="bar-chart" id="bars-${id}">
        ${p.chart.bars.map((b,i) => `
          <div class="bar-row">
            <div class="bar-label">${b.label}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:0%" data-width="${b.pct}%">
                <span class="bar-val">${b.val}${b.val > 10 ? '%' : ''}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;

  // OUTCOMES
  body += `<div class="ms">
    <div class="ms-title">Key Outcomes</div>
    <div class="outcomes-list">
      ${p.outcomes.map(o => `<div class="outcome-item"><div class="outcome-icon">${o.icon}</div><div class="outcome-text">${o.text}</div></div>`).join('')}
    </div>
  </div>`;

  // TECH STACK
  body += `<div class="ms">
    <div class="ms-title">Tech Stack</div>
    <div class="tech-bubbles">
      ${p.tech.map(t => `<span class="tech-bubble">${t}</span>`).join('')}
    </div>
  </div>`;

  document.getElementById('mBody').innerHTML = body;
  document.getElementById('projModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 100);
}

function closeProject() {
  document.getElementById('projModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProject(); });
