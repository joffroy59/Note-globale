 - [ ] dfsdfsdf fs
 - [ ] sdffffsdf 
 - [ ] sd fssdf 
 - [ ] s fs fsdf
 - [-] canceled 1 
 - [-] canceled 2 
 - [/] WIP1 
 - [/]  WIP2



Further more the two variants as slight differences in how to calculate the completed and uncompleted count, based on how you want to group queries.

## [](https://forum.obsidian.md/t/dataview-query-for-all-tasks-in-folder-with-custom-status/56076/3#using-flatten-on-tasks-1)Using `FLATTEN` on tasks

 The FLATTEN query

```dataview
TABLE Count, Open as "` `", InProgress as "/", Complete as "x", Canceled as "`-`", UncompleteCount as UnC, CompleteCount as C, 
  join(rows.item.status, "|") as Statuses, 
  "<progress value='" + (UncompleteCount * 100 ) / Count + "' max='100' />" as "Uncompleted Progress",
  "<progress value='" + (CompleteCount * 100)    / Count + "' max='100' />" as "Completed Progress" 
FROM "Daily Note"
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


](https://forum.obsidian.md/uploads/default/original/3X/3/e/3e6d107ee2552fa9eae54c2839a56dabc3989d64.png "image")

The columns signify the count of the various statuses, named in the column header. `InC` and `C` indicate the `Incompleted Count` and `Complete Count`. Also note, that in this query I limited to only the “normal” task statuses: space, `/`, `-` and `x`.

In this query I count the various statuses up into their own variable, and then I sum the various statuses into another variable which is used to produce the progress bar. This is very easy to use and change into various groupings depending on whether you want to include canceled tasks into completed or uncompleted task count.

Notice that in both cases I’ve joined up the various statuses into a string separated by `|`, so if there are many spaces, there are also many `|`'s.

## [](https://forum.obsidian.md/t/dataview-query-for-all-tasks-in-folder-with-custom-status/56076/3#not-using-flatten-on-tasks-2)Not using `FLATTEN` on tasks


```dataview
TABLE 
  Total, Incomplete, Complete,  
  join(sum(rows.file.tasks.status), "|") as Statuses, 
  "<progress value='" + ( Incomplete * 100) / Total  + "' max='100'></progress>" AS "Incomplete Progress",
  "<progress value='" + ( Complete * 100)/ Total + "' max='100'></progress>" AS "Complete Progress"
FROM "Daily Note"
WHERE file.tasks 
GROUP BY file.folder
FLATTEN length(sum(rows.file.tasks.status)) as Total
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = " " or t = "/")) as Incomplete
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = "A" or t = "x")) as Complete
```



`FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = " " or t = "/")) as Incomplete`




```dataview
TABLE file.tasks.text
WHERE file.folder = this.file.folder
  AND startswith(file.name, "Foun")
```

```dataview
TASK 
FROM "Daily Note/2025/01/📒2025-01-10" 

```

```dataview
TASK 
FROM "Daily Note/2025/01/📒2025-01-10" 
WHERE status = "Open"
```

## dd

```dataview
TASK
WHERE !completed

```


## ⭐Sorting Tasks Using Tags 🏷️


```dataview
TASK
WHERE !completed
 AND contains(text, "#todo")
SORT text ASC
```
