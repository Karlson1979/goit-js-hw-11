import"./assets/vendor-b20c67ea.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function c(s){return s.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:t,comments:i,downloads:a})=>`


      <li class="item">
  <a href="${n}" target="_blank" rel="noopener noreferrer">
    <img src="${r}" alt="${o}" width="360" height="170">
  </a>
  <div class="statistic">
    <p>Likes:<br> <span>${e}</span></p>
    <p>Views:<br> <span>${t}</span></p>
    <p>Comments:<br> <span>${i}</span></p>
    <p>Downloads:<br> <span>${a}</span></p>
  </div>
</li>



  `).join("")}function l(s){const r="https://pixabay.com",n="/api/",o=new URLSearchParams({key:"44403468-b3192a3f07a9f4ae6c998e95a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${o}`;return fetch(e).then(t=>t.json()).then(t=>{if(!t.hits.length)throw new Error("No images found");return t})}const u=document.querySelector(".form"),p=document.querySelector(".nav-list");u.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value;l(r).then(n=>{const o=c(n.hits);p.innerHTML=o}).catch(n=>console.error(n))});
//# sourceMappingURL=commonHelpers.js.map
