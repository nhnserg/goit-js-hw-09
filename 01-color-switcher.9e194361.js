const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o;t.addEventListener("click",(()=>{o||(o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(o),o=null,document.body.style.backgroundColor="white",t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.9e194361.js.map