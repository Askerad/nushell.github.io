import{_ as t,p,q as o,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-debug",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-debug","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; debug --raw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--raw</code> <code>(-r)</code>: Prints the raw value representation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Debug print a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> debug
hello
</code></pre></div><p>Debug print a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> debug
╭───┬───────╮
│ <span class="token number">0</span> │ hello │
╰───┴───────╯

</code></pre></div><p>Debug print a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version patch<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.0 false<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.1 true<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.2</span>.0 false<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> debug
╭───┬────────────────────────────────╮
│ <span class="token number">0</span> │ <span class="token punctuation">{</span>version: <span class="token number">0.1</span>.0, patch: false<span class="token punctuation">}</span> │
│ <span class="token number">1</span> │ <span class="token punctuation">{</span>version: <span class="token number">0.1</span>.1, patch: true<span class="token punctuation">}</span>  │
│ <span class="token number">2</span> │ <span class="token punctuation">{</span>version: <span class="token number">0.2</span>.0, patch: false<span class="token punctuation">}</span> │
╰───┴────────────────────────────────╯

</code></pre></div>`,11);function h(n,k){return p(),o("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for debug")]),a("div",i,e(n.$frontmatter.debug),1),d])}const b=t(r,[["render",h],["__file","debug.html.vue"]]);export{b as default};