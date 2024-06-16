import{S as c}from"./assets/vendor-5af972a3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(r){return r.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:a})=>`

<a href="${s}" target="_blank" rel="noopener noreferrer">
      <li class="item">
    <img src="${o}" alt="${n}" width="360" height="170">

  <div class="statistic">
    <p>Likes:<br> <span>${e}</span></p>
    <p>Views:<br> <span>${t}</span></p>
    <p>Comments:<br> <span>${i}</span></p>
    <p>Downloads:<br> <span>${a}</span></p>
  </div>
</li>
</a>


  `).join("")}function p(r){const o="https://pixabay.com",s="/api/",n=new URLSearchParams({key:"44403468-b3192a3f07a9f4ae6c998e95a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${s}?${n}`;return fetch(e).then(t=>t.json()).then(t=>{if(!t.hits.length)throw new Error("No images found");return t})}const u=document.querySelector(".form"),f=document.querySelector(".nav-list");u.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.search.value.trim();p(o).then(s=>{const n=l(s.hits);f.innerHTML=n,new c(".gallery a").refresh()})}).catch(r=>console.error(r));
//# sourceMappingURL=commonHelpers.js.map
