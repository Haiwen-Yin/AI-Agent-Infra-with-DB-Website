# Chuanxu Legacy Domain Redirect

Deploy this directory as the root of the GitHub repository used by
`db4agent.top`. It presents a bilingual migration notice and redirects users
to `https://db4agent.cn` after 12 seconds unless they choose to remain.

GitHub Pages deployment requirements:

1. Keep `CNAME` in the repository root.
2. Configure the custom domain as `db4agent.top` in GitHub Pages.
3. Keep the DNS record for `db4agent.top` pointed to GitHub Pages during the
   transition period.

The only official website destination is `https://db4agent.cn`.
