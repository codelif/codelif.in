# codelif.in

A man page that happens to be a portfolio.

No framework, no webfonts, no node_modules, no images. One CSS file, one JS
file, both optional. The roff conventions are the design system: flush-left
section heads, indented bodies, ~78 columns, a three-part header and footer.

## Running it

```sh
pacman -S zola          # or grab the binary from getzola/zola releases
zola serve              # http://127.0.0.1:1111
zola build              # -> public/
zola check              # dead internal links
```

## Adding a project

`content/_index.md`, front matter. Never touch a template:

```toml
[[extra.projects]]
name = "thing"
sect = "1"
tagline = "one line, lowercase, no full stop"
meta = "Go · MIT · 3★"
url = "https://github.com/codelif/thing"
url_label = "github.com/codelif/thing"
body = "Why it exists. The problem first, the solution second."
```

Star counts are a hand-maintained snapshot. They are not fetched.

## Adding a post

Drop a file in `content/blog/`. The slug becomes the man page name, so keep
it short and lowercase, so `kitty-panel.md` renders as `KITTY-PANEL(7)`.

```toml
+++
title = "Your terminal is already a widget toolkit"
description = "shows up as the apropos one-liner, so write it like one"
date = 2026-08-20
+++
```

`description` is the `apropos` line on `/blog/` and the `NAME` line on the
post itself. Write it in the man style: lowercase, no trailing period.

## The two bits of JavaScript

`static/site.js`, ~90 lines, deferred, non-blocking:

1. The `[--dark]` flag in the nav toggles the theme and persists it. A tiny
   inline script in `<head>` applies the stored value before first paint so
   there is no flash.
2. The footer date, where a man page prints its last-modified, is replaced
   with the date of the last public GitHub activity. Cached per session.

Both fail silently. With JS off the page is complete and the footer shows the
build date.

## Deploying

Cloudflare Pages. `zola build`, publish `public/`.

Note the apex previously returned a **525**, meaning Cloudflare could not
complete a TLS handshake with the apex origin. Pointing the apex at
Pages takes that origin out of the path. Check that record still isn't needed
before removing it; subdomains (`pawbar.`, `pyjiit.`) were unaffected.
