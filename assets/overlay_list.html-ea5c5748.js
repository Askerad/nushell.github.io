import{_ as n,p as o,q as r,Q as a,t,v as s,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-core",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay list </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>The overlays are listed in the order they were activated.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last activated overlay</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam
    overlay list <span class="token operator">|</span> last
</code></pre></div>`,7);function u(e,f){return o(),r("div",null,[a("h1",l,[p,t(),a("code",null,s(e.$frontmatter.title),1),t(" for core")]),a("div",d,s(e.$frontmatter.core),1),h])}const m=n(i,[["render",u],["__file","overlay_list.html.vue"]]);export{m as default};