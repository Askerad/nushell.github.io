import{_ as s,p as n,q as o,Q as a,t,v as r,a1 as c}from"./framework-344bb0e4.js";const l={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr replace-all </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abac abac abac<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr replace-all <span class="token parameter variable">-p</span> a <span class="token parameter variable">-r</span> A
</code></pre></div>`,5);function h(e,m){return n(),o("div",null,[a("h1",d,[p,t(),a("code",null,r(e.$frontmatter.title),1),t(" for dataframe")]),a("div",i,r(e.$frontmatter.dataframe),1),f])}const u=s(l,[["render",h],["__file","dfr_replace-all.html.vue"]]);export{u as default};