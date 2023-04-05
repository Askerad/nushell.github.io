import{_ as e,p as o,q as p,Q as s,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const r={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=s("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ics </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCALENDAR
            END:VCALENDAR&#39;</span> <span class="token operator">|</span> from ics
╭───────┬────────────────────┬───────────────────┬───────────────────┬───────────────────┬───────────────────┬───────────────────┬───────────────────╮
│     <span class="token comment"># │     properties     │      events       │      alarms       │      to-Dos       │     journals      │    free-busys     │     timezones     │</span>
├───────┼────────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│     <span class="token number">0</span> │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>     │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │ <span class="token punctuation">[</span>list <span class="token number">0</span> items<span class="token punctuation">]</span>    │
╰───────┴────────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────╯

</code></pre></div>`,5);function d(a,k){return o(),p("div",null,[s("h1",i,[l,n(),s("code",null,t(a.$frontmatter.title),1),n(" for formats")]),s("div",u,t(a.$frontmatter.formats),1),m])}const h=e(r,[["render",d],["__file","from_ics.html.vue"]]);export{h as default};
