import{_ as n,o as r,c as o,a as s,t as e,d as t,e as p}from"./app.867031ed.js";const l={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d=t(),h=t(" for strings"),g={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split words --min-word-length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--min-word-length {int}</code>: The minimum word length</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split the string&#39;s words into separate rows</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words
</code></pre></div><p>Split the string&#39;s words, of at least 3 characters, into separate rows</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello to the world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">3</span>
</code></pre></div><p>A real-world example of splitting words</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://www.gutenberg.org/files/11/11-0.txt <span class="token operator">|</span> str downcase <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> sort-by count <span class="token parameter variable">--reverse</span> <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div>`,11);function m(a,f){return r(),o("div",null,[s("h1",i,[c,d,s("code",null,e(a.$frontmatter.title),1),h]),s("div",g,e(a.$frontmatter.strings),1),u])}const _=n(l,[["render",m],["__file","split_words.html.vue"]]);export{_ as default};