import{_ as n,p as o,q as r,Q as a,t,v as s,a1 as p}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-default",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),c={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path relative-to (path) --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: Parent shared with the input path</li><li><code>--columns {table}</code>: For a record or table input, convert strings at the given columns</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Can be used only when the input and the argument paths are either both absolute or both relative. The argument path needs to be a parent of the input path.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find a relative path from two absolute paths</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking&#39;</span> <span class="token operator">|</span> path relative-to <span class="token string">&#39;/home&#39;</span>
viking
</code></pre></div><p>Find a relative path from two absolute paths in a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> ~ <span class="token operator">|</span> path relative-to ~ <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>

</code></pre></div><p>Find a relative path from two relative paths</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;eggs/bacon/sausage/spam&#39;</span> <span class="token operator">|</span> path relative-to <span class="token string">&#39;eggs/bacon/sausage&#39;</span>
spam
</code></pre></div>`,13);function u(e,g){return o(),r("div",null,[a("h1",l,[h,t(),a("code",null,s(e.$frontmatter.title),1),t(" for default")]),a("div",c,s(e.$frontmatter.default),1),d])}const f=n(i,[["render",u],["__file","path_relative-to.html.vue"]]);export{f as default};