/* empty css                      */import{a as u,S as d,i as a}from"./assets/vendor-DY53avbb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="56332254-8c399c713ebd1cc160f0b6b1c";function p(o){return u.get("https://pixabay.com/api/",{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function m(o){return o.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><br>${r.likes}</p>
          <p><b>Views</b><br>${r.views}</p>
          <p><b>Comments</b><br>${r.comments}</p>
          <p><b>Downloads</b><br>${r.downloads}</p>
        </div>
      </li>
    `).join("")}function y(o){o.innerHTML=""}const g=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.search.value.trim();r&&(y(c),l.classList.remove("hidden"),p(r).then(s=>{const i=s.data.hits;if(i.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.insertAdjacentHTML("beforeend",m(i)),h.refresh()}).catch(s=>{a.error({message:"Something went wrong!",position:"topRight"}),console.log(s)}).finally(()=>{l.classList.add("hidden")}))});
//# sourceMappingURL=index.js.map
