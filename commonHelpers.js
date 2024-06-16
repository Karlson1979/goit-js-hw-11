import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(n){return n.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:c})=>`

<a href="${o}" target="_blank" rel="noopener noreferrer">
      <li class="item">
    <img src="${r}" alt="${s}" width="360" height="170">

  <div class="statistic">
    <p>Likes:<br> <span>${e}</span></p>
    <p>Views:<br> <span>${t}</span></p>
    <p>Comments:<br> <span>${i}</span></p>
    <p>Downloads:<br> <span>${c}</span></p>
  </div>
</li>
</a>


  `).join("")}function f(n){const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"44403468-b3192a3f07a9f4ae6c998e95a",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${s}`;return fetch(e).then(t=>t.json()).then(t=>{if(!t.hits.length)throw new Error("No images found");return t})}const l=document.querySelector(".form"),m=document.querySelector(".nav-list");l.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.search.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}f(r).then(o=>{if(o.hits.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=p(o.hits);m.innerHTML=s,new u(".gallery a").refresh(),l.reset()}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
