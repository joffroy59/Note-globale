---
tags:
  - "#tasks"
  - tags
---
# By Query 
## Filters

### Custom Filters.
- [x] https://publish.obsidian.md/tasks/Scripting/Custom+Filters #toview ✅ 2025-01-14

#### Text property examples 

##### task.description.length > 150
```tasks
filter by function task.description.length > 150
```
##### Like `due date is invalid`
```tasks
filter by function const date = task.due.moment; return date ? !date.isValid() : false;

```
##### all tasks due today or earlier
```tasks
filter by function task.due.moment?.isSameOrBefore(moment(), 'day') || false
```
##### Due today or later
```tasks
filter by function task.due.moment?.isSameOrAfter(moment(), 'day') || false
```
##### all tasks due in the week of 2025-01-11
```tasks
filter by function task.due.moment?.isSame(moment('2025-01-12'), 'week') || false
```

#### File property examples - date
##### Find tasks in files in any file in the given folder **only**, and not any sub-folders:  Daily Note/2025/01/"
```tasks
filter by function task.file.folder === "Daily Note/2025/01/"
```
##### Find tasks in files in a specific folder **and any sub-folders**:  Daily Note/2025/"
```tasks
filter by function task.file.folder.includes("Daily Note/2025/")
```

##### - Find tasks in files in the folder that contains the query only (**not tasks in any sub-folders**).
```tasks
filter by function task.file.folder === query.file.folder
```


### Searching particular dates 

This section describes searches that use single dates, for example:

```tasks
starts before 2023-04-20
due on or before today
```


See also [Searching date ranges](https://publish.obsidian.md/tasks/Queries/Filters#Searching%20date%20ranges).


#### priority is high
```tasks
priority is high
```
#### priority is low
```tasks
priority is low
```


### Searching date ranges 

Released

Date range searches were introduced in Tasks 2.0.0.

Tasks allows date searches to specify a pair of dates, `<date range>`.

This section describes date range searches, for example:


```tasks
due 2025-01-01 2023-02-15
```


See also [Searching particular dates](https://publish.obsidian.md/tasks/Queries/Filters#Searching%20particular%20dates).

## Text filters


```tasks
(no due date) OR (due after 2021-04-04)
path includes OBSIDIAN
```

```tasks
due after 2021-04-04
(path includes a) AND NOT (tags include #todo)
```

## Filters for Task Statuses
### Status
#### Same as the `done` filter, but might be useful in conjunction with other expressions on the same line.
```tasks
filter by function task.isDone
```

- Same as the `done` filter, but might be useful in conjunction with other expressions on the same line.

```tasks
filter by function ! task.isDone
```




### Status Name
#### Find all tasks with custom statuses not yet added to the Tasks settings.
```tasks
filter by function task.status.name === 'Unknown'
```

#### Find tasks of type `NON_TASK`
```tasks
filter by function 'TODO,IN_PROGRESS'.includes(task.status.type)
```

#### Find tasks that are either type `TODO` or type `IN_PROGRESS`.
```tasks
filter by function 'TODO,IN_PROGRESS'.includes(task.status.type)
```
#### Find tasks that are not type `NON_TASK` and not type `CANCELLED`.
```tasks
filter by function ! 'NON_TASK,CANCELLED'.includes(task.status.type)
```


### Status Symbol
#### Find tasks with a checkbox `[-]`, which is conventionally used to mean "cancelled"
```tasks
filter by function task.status.symbol === '-'
```
#### Find tasks with anything but the space character as their status symbol, that is, without the checkbox `[ ]`
```tasks
filter by function task.status.symbol !== ' '
```

#### Find tasks with any status symbol not supported by Tasks in the default settings
```tasks
filter by function !' -x/'.includes(task.status.symbol)
```

### Next Status Symbol
#### - Find tasks that toggle to themselves, because the next symbol is the same as the current symbol
```tasks
filter by function task.status.symbol === task.status.nextSymbol
```


## Filters for Task Dependencies
### Blocking Tasks
#### is blocking
```tasks
is blocking
```

####  is not blocking
```tasks
is not blocking
```


### Blocked Tasks 

#### is blocked
```tasks
is blocked
```

#### is not blocked
```tasks
is not blocked
```


### Done Date
- `no done date`
- `has done date`
- `done (on|before|after|on or before|on or after) <date>`
- `done (in|before|after|in or before|in or after) <date range>`
    - `YYYY-MM-DD YYYY-MM-DD`
    - `(last|this|next) (week|month|quarter|year)`
    - `(YYYY-Www|YYYY-mm|YYYY-Qq|YYYY)`
- `done date is invalid`
### Scheduled Date 

- `no scheduled date`
- `has scheduled date`
- `scheduled (on|before|after|on or before|on or after) <date>`
- `scheduled (in|before|after|in or before|in or after) <date range>`
    - `YYYY-MM-DD YYYY-MM-DD`
    - `(last|this|next) (week|month|quarter|year)`
    - `(YYYY-Www|YYYY-mm|YYYY-Qq|YYYY)`
- `scheduled date is invalid`
### Start Date 

- `no start date`
- `has start date`
- `starts (on|before|after|on or before|on or after) <date>`
- `starts (in|before|after|in or before|in or after) <date range>`
    - `YYYY-MM-DD YYYY-MM-DD`
    - `(last|this|next) (week|month|quarter|year)`
    - `(YYYY-Www|YYYY-mm|YYYY-Qq|YYYY)`
- `start date is invalid`
### Created Date 

See [created date](https://publish.obsidian.md/tasks/Getting+Started/Dates#Created%20date) for how to make Tasks record the created date on any task lines that it creates.

- `no created date`
- `has created date`
- `created (on|before|after|on or before|on or after) <date>`
- `created (in|before|after|in or before|in or after) <date range>`
    - `YYYY-MM-DD YYYY-MM-DD`
    - `(last|this|next) (week|month|quarter|year)`
    - `(YYYY-Www|YYYY-mm|YYYY-Qq|YYYY)`
- `created date is invalid`
## Filters for Other Task Properties
### Description

### Tags
- `no tags`
- `has tags`
- `tags (include|do not include) <tag>` _or_
- `tag (includes|does not include) <tag>`
    - Matches case-insensitive (disregards capitalization).
    - Disregards the global filter when matching.
    - The `#` is optional on the tag so `#home` and `home` will work to match `#home`.
    - If the `#` is given, it must be present, so searching for `#home` will match `#home` but not `#location/home`.
    - The match is partial so `tags include foo` will match `#foo/bar` and `#foo-bar`.
- `tags (regex matches|regex does not match) /<JavaScript-style Regex>/` _or_
- `tag (regex matches|regex does not match) /<JavaScript-style Regex>/`
    - Does regular expression match (case-sensitive by default).
    - Essential reading: [Regular Expression Searches](https://publish.obsidian.md/tasks/Queries/Regular+Expressions).
    - This enables tag searches that avoid sub-tags, by putting a `$` character at the end of the regular expression. See examples below.
    - If searching for sub-tags, remember to escape the slashes in regular expressions: `\/`
Since Tasks 4.2.0, **[custom filtering](https://publish.obsidian.md/tasks/Scripting/Custom+Filters) by tags** is now possible, using `task.tags`.

#### Find tasks with exactly 1 tag (other than any global filter)
```tasks
filter by function task.tags.length === 1
```

#### Find tasks with more than one tag (other than any global filter)
```tasks
filter by function task.tags.length > 1
```

#### Find all tasks that have at least one nested tag
```tasks
filter by function task.tags.find( (tag) => tag.includes('/') ) && true || false
```
#### Find all tasks that have at least one doubly-nested tag, such as `#context/home/ground-floor`
```tasks
filter by function task.tags.find( (tag) => tag.split('/').length >= 3 ) && true || false
```

#### Tag Query Examples 

- `tags include #todo`
- `tags do not include #todo`
- `tag regex matches /#t$/`
    - Searches for a single-character tag `#t`, with no sub-tags, because `$` matches the end of the tag text.
- `tag regex matches /#book$/i`
    - The trailing `i` means case-insensitive.
    - Searches for tags such as `#book`, `#Book`, `#BOOK` and the `$` prevents matching of `#books`, `#book/literature`, etc.
##### done
```tasks
tags include #done  
```

##### todo
```tasks
tags include #todo   
```





##### tasks
```tasks
tag regex matches /#*a/i 
```










##### tasks
```tasks
tags include #task 
```



##### Find tasks in files in the root of the vault
```tasks
filter by function task.file.root === 'Daily Note/2025/01/'
```


### Heading 

- `heading (includes|does not include) <string>`
    - Whether or not the heading preceding the task includes the given string.
    - Always tries to match the closest heading above the task, regardless of heading level.
    - `does not include` will match a task that does not have a preceding heading in its file.
    - Matches case-insensitive (disregards capitalization).
- `heading (regex matches|regex does not match) /<JavaScript-style Regex>/`
    - Whether or not the heading preceding the task includes the given regular expression (case-sensitive by default).
    - Always tries to match the closest heading above the task, regardless of heading level.
    - `regex does not match` will match a task that does not have a preceding heading in its file.
    - Essential reading: [Regular Expression Searches](https://publish.obsidian.md/tasks/Queries/Regular+Expressions).

#### ### 🚀Today's Tasks
```tasks
filter by function return task.heading?.includes('🚀Today\'s Tasks') || false
```


### priority

#### priority is high
```tasks
priority is high
```
#### priority is low
```tasks
priority is low
```

#### priority is above none
```tasks
priority is above none
```

#### priority is low
```tasks
priority is low
```

#### priority is low
```tasks
priority is low
```

#### priority is undefined
```tasks
priority is not none
```

#### priority is undefined
```tasks
priority is none
```


### All Tasks 

#### All Tasks 

```tasks
```


#### To show all Tasks that are not finished yet
```tasks
status.name includes todo
```


### I prefer to group them by filename

#### I prefer to group them by filename ALL
```tasks

group by path
```

#### I prefer to group them by filename TODO
```tasks
status.name includes todo

group by path
```


# Solution without plugins:
```query  
task-todo:""
```
