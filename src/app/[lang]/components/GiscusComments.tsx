import { useEffect } from 'react';

export default function GiscusComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'anthule123/draft-kit');
    script.setAttribute('data-repo-id', 'R_kgDONb5ktA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDONb5ktM4CtKzH');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-lang', 'vi')
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer && !giscusContainer.firstChild) {
      giscusContainer.appendChild(script);
    }
  }, []);

  return <div id="giscus-container" />;
}
/*
<script src="https://giscus.app/client.js"
        data-repo="anthule123/draft-kit"
        data-repo-id="R_kgDONb5ktA"
        data-category="General"
        data-category-id="DIC_kwDONb5ktM4CtKzH"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="vi"
        crossorigin="anonymous"
        async>
</script>
*/