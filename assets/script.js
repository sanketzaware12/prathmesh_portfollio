const $=s=>document.querySelector(s);
const g=(a,b)=>`linear-gradient(135deg,${a},${b})`;
const work={
ads:[["Summer Sale Launch","3.8x ROAS","Meta Ads · Retail",["#ff3b30","#7a0f0a"]],["Lead Gen Funnel","-46% CPL","Google Ads · Real Estate",["#3b82f6","#1e3a8a"]],["App Install Drive","120K installs","Meta + YouTube · Fintech",["#a855f7","#4c1d95"]],["Festive Offer Push","5.2x ROAS","Instagram Ads · Fashion",["#f59e0b","#92400e"]],["Webinar Registrations","2,400 signups","LinkedIn Ads · EdTech",["#10b981","#064e3b"]],["Retargeting Revamp","+68% sales","Meta Ads · D2C",["#ec4899","#831843"]]],
seo:[["Local SEO Takeover","Top 3 in 30 days","Dental Clinic",["#10b981","#064e3b"]],["Blog Traffic Growth","+310% organic","SaaS Startup",["#3b82f6","#1e3a8a"]],["E-commerce SEO","+185% revenue","Home Decor Store",["#f59e0b","#92400e"]],["Technical Audit","Speed 94/100","Travel Portal",["#a855f7","#4c1d95"]],["Keyword Strategy","120 page-one ranks","Law Firm",["#ff3b30","#7a0f0a"]],["Google Business Boost","+4x calls","Restaurant Chain",["#ec4899","#831843"]]],
cre:[["Brand Identity Kit","Logo + guidelines","Cafe Brand",["#f59e0b","#92400e"]],["Social Media Pack","30 posts / month","Fitness Studio",["#ec4899","#831843"]],["Ad Creative Set","12 variations","Skincare Brand",["#a855f7","#4c1d95"]],["Carousel Series","+90% saves","Finance Coach",["#3b82f6","#1e3a8a"]],["Reel Cover Designs","Consistent grid","Creator Brand",["#ff3b30","#7a0f0a"]],["Email Templates","42% open rate","Online Course",["#10b981","#064e3b"]]]};
const svc=[["Social Media Marketing","We build and run social strategies that bring your brand to life. From content calendars to community management, every post is planned to engage, grow your audience and drive enquiries across Instagram, Facebook and LinkedIn."],
["Performance Ads","We create high-impact paid campaigns on Meta and Google that reach the right people at the right cost. Our focus is simple: more leads and sales from every rupee you spend."],
["Creative Design","Your creative is your first impression. We design eye-catching, platform-specific posts, banners and ad creatives that stop the scroll and represent your brand accurately."],
["SEO Optimization","We go beyond ads! We optimize your website, content and listings to rank higher on Google, so your ideal customers find you without paying for every click."],
["Content & Video Marketing","We turn your ideas into polished blogs, reels and short videos that educate, entertain and convert, whether it is a product story, a tutorial or a customer success story."],
["Consulting","Unsure where to start or need a fresh perspective? We offer personalized consultations to plan your marketing funnel, set the right budget and optimize your approach for maximum impact."]];
const faq=[["I have a great business idea, but I'm not sure how to get started. Can you help?","Absolutely. We begin with a free discovery call to understand your goals, audience and budget, then suggest a simple step-by-step marketing plan."],
["How can digital marketing make my business grow?","It puts your brand in front of people actively searching for or interested in what you offer, and every action can be tracked so you know exactly what works."],
["Do you offer design and creative work too?","Yes. We design social posts, ad creatives, landing pages and brand kits so your campaigns look consistent and professional."],
["What if I need marketing for different platforms (Google vs. Instagram)?","We tailor the message, format and budget for each platform while keeping your brand voice consistent everywhere."],
["How can I make my website rank higher in search results?","Through on-page optimization, quality content, technical fixes and local listings. We start with an audit and share a clear action plan."],
["How much control do I have over the campaigns?","Full control. You approve strategy, creatives and budget, and receive regular reports so you always know where things stand."],
["Ready to get started? How can I contact you?","Use the Book a Call button or call +91-98765-43210. We reply within one working day."]];
function acc(el,list,first){el.innerHTML=list.map((x,i)=>`<div class="${first&&i==0?'open':''}"><button aria-expanded="${first&&i==0}">${x[0]}</button><div class="b"><p>${x[1]}</p></div></div>`).join("");
el.onclick=e=>{const b=e.target.closest("button");if(!b)return;const d=b.parentElement,o=d.classList.toggle("open");b.setAttribute("aria-expanded",o)}}
acc($("#faqs"),faq,false);
function show(t){$("#track").innerHTML=work[t].map((w,i)=>`<article class="card" style="--i:${i}"><div class="thumb" style="--a:${w[3][0]};--b:${w[3][1]}"><span>${w[1]}</span><small>${{ads:"Social Ads",seo:"SEO",cre:"Creative"}[t]}</small><b class="go">&#8599;</b></div><h3>${w[0]}</h3><p>${w[2]}</p></article>`).join("");$("#track").scrollLeft=0}
$("#tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");show(b.dataset.t)};
show("ads");
const slide=(id,p,n)=>{const t=$(id);const f=()=>t.clientWidth*.8;$(p).onclick=()=>t.scrollBy({left:-f(),behavior:"smooth"});$(n).onclick=()=>t.scrollBy({left:f(),behavior:"smooth"})};
slide("#track","#prev","#next");slide("#ttrack","#tprev","#tnext");
$("#burger").onclick=()=>{$("#menu").classList.toggle("show");$("#burger").classList.toggle("x")};
$("#menu").onclick=e=>{if(e.target.tagName=="A"){$("#menu").classList.remove("show");$("#burger").classList.remove("x")}};


/* ===== premium v3 ===== */
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,fine=matchMedia("(hover:hover)").matches;
// hero video: always-on loop. Poster shows instantly, video fades in once playing, and playback is re-started if the browser ever pauses it
const v=$("#hv");
if(v){
  v.muted=true;v.defaultMuted=true;v.setAttribute("muted","");
  const go=()=>{if(!rm&&v.paused)v.play().catch(()=>{})};
  v.addEventListener("playing",()=>v.classList.add("on"));
  v.addEventListener("canplay",go);v.addEventListener("pause",()=>{if(!document.hidden)setTimeout(go,150)});
  v.addEventListener("stalled",go);v.addEventListener("suspend",go);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)go()});
  ["touchstart","click","scroll","keydown"].forEach(ev=>addEventListener(ev,go,{once:true,passive:true}));
  if(rm){v.pause()}else{go()}
}
// scroll reveal (class removed afterwards so hover transforms stay snappy)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(()=>t.classList.remove("rv","in"),1000)}}),{threshold:.12});
document.querySelectorAll(".sec .head,.tabs,.skills ul,.t figure,.acc>div,.scard,.step,.cta,.fgrid>div").forEach((el,i)=>{if(rm)return;el.classList.add("rv");el.style.setProperty("--d",(i%4)*.09+"s");io.observe(el)});
// progress bar + nav state
const bar=$("#bar"),nav=$(".nav");
addEventListener("scroll",()=>{const h=document.documentElement;bar.style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+"%";nav.classList.toggle("sc",h.scrollTop>30)},{passive:true});
if(fine&&!rm){
// cursor spotlight inside cards
addEventListener("mousemove",e=>{const c=e.target.closest&&e.target.closest(".card,.t figure,.skills ul");if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")},{passive:true});
// magnetic buttons
document.querySelectorAll(".btn").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")})}
// testimonial autoplay (pauses on hover)
const tt=$("#ttrack");let hov=false;tt.onmouseenter=()=>hov=true;tt.onmouseleave=()=>hov=false;
if(!rm)setInterval(()=>{if(hov||document.hidden)return;const end=tt.scrollLeft+tt.clientWidth>=tt.scrollWidth-4;tt.scrollTo({left:end?0:tt.scrollLeft+tt.clientWidth*.34,behavior:"smooth"})},4000);

/* ===== service cards ===== */
const ico=['<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M9 11h6M9 14h4"/>','<path d="M3 20h18"/><path d="M6 20v-6M12 20V8M18 20v-9"/><path d="m5 8 5-4 4 3 5-4"/>','<path d="M12 3a9 9 0 1 0 0 18c1.7 0 2.5-1 2.5-2.2 0-1.5-1.2-1.8-1.2-3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>','<circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/><path d="m8 12 2 2 4-4"/>','<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9.5 5 2.5-5 2.5Z"/>','<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>'];
const tags=[["Instagram","Facebook","LinkedIn"],["Meta Ads","Google Ads","Retargeting"],["Posts","Banners","Ad creatives"],["On-page","Technical","Local SEO"],["Blogs","Reels","Video"],["Funnel","Budget","Strategy"]];
const cols=[["#7c5cff","#22d3ee"],["#ff3b30","#f59e0b"],["#ec4899","#a855f7"],["#10b981","#22d3ee"],["#f59e0b","#ec4899"],["#3b82f6","#7c5cff"]];
$("#svc").innerHTML=svc.map((x,i)=>`<article class="scard" style="--i:${i};--c1:${cols[i][0]};--c2:${cols[i][1]}"><span class="num">0${i+1}</span><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ico[i]}</svg></div><h3>${x[0]}</h3><p>${x[1]}</p><ul class="chips">${tags[i].map((t,k)=>`<li style="--k:${k}">${t}</li>`).join("")}</ul><a class="more" href="#contact"><span>Book a call</span><i>&#8599;</i></a></article>`).join("");
if(fine&&!rm)document.querySelectorAll(".scard").forEach(c=>{
c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty("--mx",x+"px");c.style.setProperty("--my",y+"px");c.style.setProperty("--rx",((y/r.height-.5)*-7).toFixed(2)+"deg");c.style.setProperty("--ry",((x/r.width-.5)*7).toFixed(2)+"deg")});
c.addEventListener("mouseleave",()=>{c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")})});

/* ===== process line, scrollspy, back-to-top ===== */
const st=$("#steps");
if(rm)st.classList.add("lit");else new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){st.classList.add("lit");o.disconnect()}},{threshold:.25}).observe(st);
const links=[...document.querySelectorAll("#menu a:not(.btn)")];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("act",a.getAttribute("href")=="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
links.forEach(a=>{const s=$(a.getAttribute("href"));if(s)spy.observe(s)});
const tp=$("#totop");tp.onclick=()=>scrollTo({top:0,behavior:rm?"auto":"smooth"});
addEventListener("scroll",()=>tp.classList.toggle("show",scrollY>700),{passive:true});
