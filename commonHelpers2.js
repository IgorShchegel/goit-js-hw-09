import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o=document.querySelector(".feedback-form"),t=o.querySelector('input[name="email"]'),a=o.querySelector('textarea[name="message"]'),r="feedback-form-state";o.addEventListener("submit",s);o.addEventListener("input",n);function s(e){if(e.preventDefault(),t.value&&a.value){const m={email:t.value,message:a.value};console.log(m),localStorage.removeItem(r),e.currentTarget.reset()}}function n(){const e={email:t.value,message:a.value};localStorage.setItem(r,JSON.stringify(e))}function l(){const e=JSON.parse(localStorage.getItem(r));e&&(t.value=e.email,a.value=e.message)}l();
//# sourceMappingURL=commonHelpers2.js.map
