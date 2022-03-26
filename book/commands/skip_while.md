---
title: skip while
layout: command
version: 0.60.0
usage: |
  Skip elements of the input while a predicate is true.
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> skip while (predicate)```

## Parameters

 -  `predicate`: the predicate that skipped element must match

## Examples

Skip while the element is negative
```shell
> echo [-2 0 2 -1] | skip while $it < 0
```