---
layout: default
title: "From Source to Artifact"
---

## Understand the Transformation

A build may compile code, bundle JavaScript, generate HTML, copy assets, or package a container. Its output is an artifact: the files that will actually be executed or published.

In this repository, Jekyll combines Markdown pages, YAML front matter, Liquid templates, and CSS into a static website. The shared layout comes from `_layouts/default.html`; `_config.yml` supplies configuration such as the site’s base path. Generated HTML is the published result.

```text
Markdown + layouts + configuration + assets
                    ↓
              static-site build
                    ↓
             generated HTML/CSS
```

Other projects have different pipelines. A compiled language may produce an executable; a browser application may produce bundles. Read the manifest, scripts, and project documentation to find the actual build entry point.

Do not assume editing a generated file changes the source. A later build may overwrite it. Identify which files are maintained by humans and which directories are disposable output.

## Practice

Trace one lesson page through this repository’s layout. **Check:** identify where its title, navigation, content, and stylesheet reference originate. Explain why opening raw Markdown does not verify the generated website.

---

[Module overview](index.html) · [Next: Scripts and Task Runners](scripts-and-task-runners.html)
