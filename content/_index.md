+++
title = "codelif"
template = "index.html"
description = "Harsh Sharma — Linux desktop tooling, mostly in Go."

[extra]
# Man page header/footer. The footer date is replaced at runtime by the
# last public GitHub activity; see static/lastmod.js.
man_section = "1"
man_group = "User Commands"

name_line = "codelif — Harsh Sharma; writes Linux desktop tooling, mostly in Go"

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
body = "Modern terminals already ship truecolor, text sizing, inline images, hover and mouse reporting. kitty's panel kitten will put one of those anywhere on your screen. At that point a status bar does not need a GUI toolkit — it needs a terminal and an escape sequence. Everything a bar normally reimplements, the terminal already did."

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
body = "Chat clients fuse the network, the message store and the pixels into one process, so every new interface means reimplementing all three. Here whatevrd owns the connection, the SQLite store, the media cache and notifications; a frontend owns pixels and a documented unix socket. That split is the whole design — writing another frontend is a weekend, not a fork."

[[extra.projects]]
name = "jiit"
sect = "7"
tagline = "my college's webportal, made programmable"
meta = "Python · Go · JavaScript"
url = "https://github.com/codelif/pyjiit"
url_label = "pyjiit · jiit-tt-parser · jpoop-router · planner"
body = "The portal encrypts its API payloads, which is the only thing standing between students and their own data. Once that is understood the data is just data: pyjiit makes it a library, jiit-tt-parser makes the timetables machine-readable, and the planner at planner.jpoop.in turns the result into something people actually open on a Monday morning."
+++
