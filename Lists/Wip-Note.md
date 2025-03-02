## Note Wip

```dataview
TABLE WITHOUT ID
  path,
  file.path,
  file.link as Wip,
  author as Author,
  date-created as Date
FROM #status/wip
WHERE !contains(file.path, "Templates/") and !contains(file.path, "Lists/")
```

