function blogger_addtoany_onready(){var a,b,c,d,e,f,g,h,i,j=a2a.getByClass("hentry",document.body,"div"),k=a2a.getByClass("blogger_addtoany_html",document.body)[0],l="a2a_target_blogger_widgets";k="undefined"==typeof k?'<a class="a2a_dd a2a_target_blogger_widgets" href="https://www.addtoany.com/share"><img src="https://static.addtoany.com/buttons/share_save_171_16.png" border="0" alt="Share"/></a>':k.innerHTML;for(var m=0,n=j.length;n>m;m++)d=j[m],h=a2a.getByClass("post-footer",d)[0],e=a2a.getByClass("post-title",d)[0],e&&(f=e.getElementsByTagName("a")[0],"undefined"!=typeof f?(i=f.href,g=f.innerHTML):(i=document.url,g=e.innerHTML),("undefined"==typeof i||"undefined"==i)&&(i=location.href),g=g.replace(/(\r\n|\n|\r)/gm,""),a=document.createElement("div"),a.className="addtoany_container",a.innerHTML=k,a.style.marginTop="10px",d.insertBefore(a,h),b=a2a.getByClass("a2a_kit",a)[0],c=a2a.getByClass("a2a_dd",a)[0],"undefined"!=typeof b?b.className+=" "+l:"undefined"!=typeof c&&(c.className+=" "+l),a2a_config.linkname=g,a2a_config.linkurl=i,a2a_config.target=a2a.getByClass(l,a)[0],a2a.init("page"))}var a2a_config=a2a_config||{};a2a_config.tracking_callback={ready:blogger_addtoany_onready},function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://static.addtoany.com/menu/page.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();
