# Chuanxu Website

Static multilingual website for Chuanxu / AI Agent Infra with DB.

## Build

Use Python 3.14+:

```bash
python3.14 build.py
python3.14 validate_site.py
```

`build.py` renders the shared header, navigation, footer, theme controls, and page fragments from `src/pages/` into the publishable HTML files. Upload the generated HTML files together with `assets/` and the generated root-level pages.

## Product Screenshot Release Gate

All product screenshots embedded in the website must be captured from the
current release candidate or the final released edition. A screenshot must
match the published version, database edition, visual theme, and feature state
that its surrounding copy describes. Do not reuse screenshots from an earlier
release, mockup, or development build.

Before publishing a website update or product release:

1. Start the latest Enterprise Edition against the approved baseline database.
2. Capture the required product views from that running instance.
3. Replace the corresponding files in `assets/` and verify the displayed
   version and page content.
4. Run the website build and validation before creating the GitHub Pages
   archive.

Refresh Dashboard screenshots from a running current Enterprise Edition instance:

```bash
NODE_PATH=/tmp/chuanxu-playwright/node_modules node capture_dashboard.cjs
```

The capture verifies that the live Dashboard exposes the current release's
top-level views, including Organization, Channels, Collaboration Gates, and
User Management where enabled by the release profile.

## Information Architecture

- `index.html`: concise product homepage
- `product.html`: product capabilities and boundaries
- `architecture.html`: database-native architecture, retrieval, Loop, and Graph Engineering
- `security.html`: zero-trust security model
- `editions.html`: Community/Enterprise and database comparison
- `docs.html`: deployment entry point with embedded, selectable deployment prompts
- `releases.html`: release history

Chinese and the light theme are the defaults. Language and theme preferences persist in local storage across pages.
