import{_ as t,o,c as p,a,t as n,d as e,e as l}from"./app.e5e083c1.js";const c={},r={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u=e(),d=e(" for dataframe"),f={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; all-false </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns true if all values are false</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false <span class="token boolean">false</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> all-false
</code></pre></div><p>Checks the result from a comparison</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">2</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> all-false
</code></pre></div>`,7);function k(s,m){return o(),p("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",f,n(s.$frontmatter.dataframe),1),h])}const b=t(c,[["render",k],["__file","all-false.html.vue"]]);export{b as default};