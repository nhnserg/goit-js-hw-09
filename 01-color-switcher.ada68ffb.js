!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){t||(t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),t=null,document.body.style.backgroundColor="white",e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ada68ffb.js.map