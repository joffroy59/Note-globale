
```dataview
TABLE Count as "🔢", Open as "🔲", InProgress as "🚧", Complete as "✅", Canceled as "❌", UncompleteCount as UnC, CompleteCount as C,  
  "<progress value='" + (UncompleteCount * 100 ) / Count + "' max='100' />" as "Uncompleted Progress"
FROM ""
FLATTEN file.lists as item
WHERE item.task and contains(list(" ", "/", "-", "x"), item.status)
GROUP BY file.folder
FLATTEN length(rows.item.text) as Count
FLATTEN length(filter(rows.item.status, (s) => s = " ")) as Open
FLATTEN length(filter(rows.item.status, (s) => s = "/")) as InProgress
FLATTEN length(filter(rows.item.status, (s) => s = "x")) as Complete
FLATTEN length(filter(rows.item.status, (s) => s = "-")) as Canceled
FLATTEN Open + InProgress + Canceled as UncompleteCount
FLATTEN Complete as CompleteCount
```

