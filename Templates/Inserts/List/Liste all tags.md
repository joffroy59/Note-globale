```dataview 
TABLE WITHOUT ID length(rows) as "Tag count", join(rows.unique, ", ") as "Unique tags"
WHERE file.etags
FLATTEN file.etags as tag
GROUP BY tag
FLATTEN rows.tag[0] as unique
GROUP BY true
```

