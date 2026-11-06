# <tag>

One or two sentences: what it is and when to use it.

| | |
| --- | --- |
| Version | x.y.z (YYYY-MM-DD) |
| Framework | ViRaSPA x.y.z or newer |
| Isolation | `full` / `scoped` / `none`, and why |

## Install

```bash
node node-tools/install.js add component <tag>@x.y.z
```

## Usage

The smallest useful HTML example, then a JS example if it has properties or methods.

## Attributes and props

| Name | Type | Default | Meaning |
| --- | --- | --- | --- |

Attributes are kebab-case (`trend-text`); the same values as props are camelCase (`trendText`).

## Properties and methods

Only if it has any.

## Slots

| Slot | Content |
| --- | --- |

## Parts

The `part` names, with one styling example. In `full` mode use `::part(name)`; in `scoped`/`none` use `<tag> [part="name"]`.

## CSS variables

| Variable | Default |
| --- | --- |

## Events

| Event | Detail | Notes |
| --- | --- | --- |

Component events use the `vs-` prefix. `viraspa:` is reserved for the framework.

## Accessibility

Roles, labels, keyboard support, focus handling.

## Version history

- **x.y.z (YYYY-MM-DD):** what changed.
