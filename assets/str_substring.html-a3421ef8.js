import{_ as n,p as r,q as o,Q as e,t as a,v as t,a1 as l}from"./framework-344bb0e4.js";const i={},c={id:"frontmatter-title-for-default",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),u={class:"command-title"},p=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str substring (range) ...rest --grapheme-clusters --utf-8-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: the indexes to substring [start end]</li><li><code>...rest</code>: For a data structure input, turn strings at the given cell paths into substrings</li><li><code>--grapheme-clusters</code> <code>(-g)</code>: count indexes and split using grapheme clusters (all visible chars have length 1)</li><li><code>--utf-8-bytes</code> <code>(-b)</code>: count indexes and split using UTF-8 bytes (default; non-ASCII chars have length 2+)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a substring &quot;nushell&quot; from the text &quot;good nushell&quot; using a range</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token number">5</span><span class="token punctuation">..</span><span class="token number">12</span>
nushell
</code></pre></div><p>Count indexes and split using grapheme clusters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;🇯🇵ほげ ふが ぴよ&#39;</span> <span class="token operator">|</span> str substring <span class="token parameter variable">-g</span> <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">6</span>
ふが
</code></pre></div>`,9);function h(s,g){return r(),o("div",null,[e("h1",c,[d,a(),e("code",null,t(s.$frontmatter.title),1),a(" for default")]),e("div",u,t(s.$frontmatter.default),1),p])}const b=n(i,[["render",h],["__file","str_substring.html.vue"]]);export{b as default};
