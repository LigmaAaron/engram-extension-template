# Engram Extension Template

A starting point for building [Engram](https://github.com/LigmaAaron/Engram)
extensions — widgets/pages you can install into a running Engram/AaronOS
dashboard from its Extensions page.

## The contract

An extension is a folder containing an `index.jsx`. When installed, that
folder is copied as-is into `src/modules/<id>/` inside Engram — nothing else
travels with it, so:

- **Only import what Engram already ships:** `react`, `pixelarticons/react`,
  `react-aria-components`, `dompurify`, `marked`, `@internationalized/date`.
  No other npm dependencies — there's no install step for extensions.
- **Shared app state/actions come from `../../core`** —
  `import { registerWidget, useStore, actions, toast } from '../../core'`.
  That relative path only resolves once the folder is installed two levels
  deep (`src/modules/<id>/index.jsx`), so keep the folder flat.
- **End the file with `registerWidget({...})`** — see
  [`template-extension/index.jsx`](template-extension/index.jsx) for the full
  field list with comments.

## info.json (optional)

Drop an `info.json` next to `index.jsx` (and/or at the repo root for the
library itself) to give the Extensions marketplace a real name/description
instead of falling back to the folder name/repo URL:

```json
{ "name": "Template Extension", "description": "What this extension does" }
```

Both keys are optional and unknown keys are ignored. There's no `creator`
key — Engram auto-detects that from the repo's commit author, it isn't
something you set here.

## Using this template

1. Copy `template-extension/` and rename it to your extension's id.
2. Edit `index.jsx` — update the `id`/`title`/`icon`, replace the component
   body, remove what you don't need.
3. Commit it to a git repo you can hand out a URL for (this repo, forked and
   extended with more sibling folders, works fine too — one repo can hold
   several extensions).
4. In Engram, open the **Extensions** page, paste the repo URL, and install
   the folder you built.

## A repo can hold multiple extensions

Add more sibling folders (each with their own `index.jsx`) alongside
`template-extension/` — Engram's Extensions page scans the whole repo and
lists every folder that contains an `index.jsx` as a separate installable
extension.
