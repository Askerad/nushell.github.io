import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...rest --reverse --ignore-case --natural</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the column(s) to sort by</li><li><code>--reverse</code>: Sort in reverse order</li><li><code>--ignore-case</code>: Sort string-based columns case-insensitively</li><li><code>--natural</code>: Sort alphanumeric string-based columns naturally (1, 9, 10, 99, 100, ...)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sort files by modified date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by modified
</code></pre></div><p>Sort files by name (case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name <span class="token parameter variable">-i</span>
</code></pre></div><p>Sort a table by a column (reversed order)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>fruit count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>apple <span class="token number">9</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>pear <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>orange <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by fruit <span class="token parameter variable">-r</span>
</code></pre></div>`,11);function h(s,m){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",d,n(s.$frontmatter.filters),1),u])}const b=t(p,[["render",h],["__file","sort-by.html.vue"]]);export{b as default};