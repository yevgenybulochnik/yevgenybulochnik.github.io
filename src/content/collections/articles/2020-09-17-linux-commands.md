---
title: Linux Commands
slug: linux-commands 
desc: Living document that serves as a reference for various linux commands
---
# Linux Commands Reference

This article serves as a living document for various Linux commands. It is continuously updated and serves as a reference document for various commands I may use frequently or infrequently! Flag definitions will be included in parentheses.

- Get count of files in a directory
```bash
ls | wc -l      # --lines
ls -a | wc -l   # Include hidden files (--all, --lines)
ls -A | wc -l   # Include hidden files but ignore . and .. (--almost-all, --lines)
```

- Get count of specific file type in a directory
```bash
ls | grep '.html' | wc -l
find -name '*.html' | wc -l
find . -maxdepth 1 -name '*.html' | wc -l
```
