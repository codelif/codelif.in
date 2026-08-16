+++
title = "codelif"
template = "index.html"
description = "Harsh Sharma. Linux desktop tooling, mostly in Go."

[extra]
# Man page header/footer. The footer date is replaced at runtime by the
# last public GitHub activity; see static/site.js.
man_section = "1"
man_group = "User Commands"

name_line = "codelif - Harsh Sharma; writes Linux desktop tooling, mostly in Go"

# The template appends a [--dark] flag to this list; that one is the theme
# toggle. Without JS it is just more synopsis text, which is the point.
synopsis_flags = ["--go", "--c", "--reverse-engineer TARGET", "--ship"]

description_paras = [
  "Builds daemons, status bars and protocol clients for Linux. Prefers text protocols, single binaries, and software that keeps working when you close the browser.",
  "Most of it starts the same way: something on my machine is worse than it needs to be, and the fix turns out to be a small program nobody had written yet.",
  "Currently in that \"C is better\" phase.",
]

# Adding a project is a block here. Never a template edit.
# Star counts are a snapshot taken 2026-08-16, not live.

[[extra.projects]]
name = "pawbar"
sect = "1"
tagline = "a status bar that is a kitty terminal panel"
meta = "Go · BSD-3 · 109★"
url = "https://github.com/nekorg/pawbar"
url_label = "github.com/nekorg/pawbar"
body = "Modern terminals already ship truecolor, text sizing, inline images, hover and mouse reporting. kitty's panel kitten will put one of those anywhere on your screen. At that point a status bar does not need a GUI toolkit; it needs a terminal and an escape sequence. Everything a bar normally reimplements, the terminal already did."

[[extra.projects]]
name = "hyprnotify"
sect = "1"
tagline = "org.freedesktop.Notifications, rendered through hyprctl notify"
meta = "Go · Apache-2.0 · 122★"
url = "https://github.com/codelif/hyprnotify"
url_label = "github.com/codelif/hyprnotify"
body = "Hyprland could already draw a notification. Nothing on the system knew how to ask it to, because everything speaks DBus and hyprctl does not. This is the missing half: the spec-compliant DBus side, wired to a renderer that was sitting there unused."

[[extra.projects]]
name = "whatevr"
sect = "1"
tagline = "a Linux-first WhatsApp client; one daemon, any number of thin frontends"
meta = "Go · Qt/Kirigami · BSD-3"
url = "https://github.com/codelif/whatevr"
url_label = "github.com/codelif/whatevr"
body = "Chat clients fuse the network, the message store and the pixels into one process, so every new interface means reimplementing all three. Here whatevrd owns the connection, the SQLite store, the media cache and notifications; a frontend owns pixels and a documented unix socket. That split is the whole design: writing another frontend is a weekend, not a fork."

[[extra.projects]]
name = "jpoop-router"
sect = "8"
tagline = "a Raspberry Pi routing a network that does not want to be routed through"
meta = "Go · Svelte · 8★"
url = "https://github.com/codelif/jpoop-router"
url_label = "github.com/codelif/jpoop-router"
body = "The campus network expects a browser at a captive portal, hands out credentials with daily quotas that run out, and runs WEP on the uplink. A Pi sits in front of all of it. Three Go binaries split by privilege: credentials rotate on their own and record the portal's own reason when one stops working, allowances are enforced against nftables counters in the kernel rather than sampled from userspace, and egress goes through a tunnel with DNS pinned so lookups cannot leak, which fails open the moment the tunnel stops carrying traffic."
+++
