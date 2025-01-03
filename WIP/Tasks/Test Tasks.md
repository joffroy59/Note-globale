
## Find tasks with potentially missed emoji signifiers
### Example emoji problem
 - [x] check 📅 2022-12-29 ✅ 2023-01-09 > appointment 19.1.
### Finding unread emojis

```tasks
# These instructions need to be all on one line:
(description includes 🔺) OR (description includes ⏫) OR (description includes 🔼) OR (description includes 🔽) OR (description includes ⏬) OR (description includes 🛫) OR (description includes ➕) OR (description includes ⏳) OR (description includes 📅) OR (description includes ✅) OR (description includes ❌) OR (description includes 🔁) OR (description includes 🏁) OR (description includes ⛔) OR (description includes 🆔)

# Optionally, uncomment this line and exclude your templates location
# path does not include _templates

group by path
```

## Find tasks with invalid dates

- [ ] Do stuff 📅  2023-12-32

### Finding problem dates

```tasks
# These instructions need to be all on one line:
(cancelled date is invalid) OR (created date is invalid) OR (done date is invalid) OR (due date is invalid) OR (scheduled date is invalid) OR (start date is invalid)

# Optionally, uncomment this line and exclude your templates location
# path does not include _templates

group by path
```

## Invalid recurrence rules


## Using pure Tasks blocks - with placeholders

## Summary of Tasks within this note

```tasks
not done
path includes {{query.file.path}}
```

{{query.file.path}}
{{query.file.pathWithoutExtension}}
{{query.file.root}}
{{query.file.folder}}
{{query.file.filename}}
{{query.file.filenameWithoutExtension}}


## Using Dataview to generate Tasks blocks - the old way
## Summary of Tasks within this note

```dataviewjs
const query = `
not done
path includes ${dv.current().file.path}
# you can add any number of extra Tasks instructions, for example:
group by heading
`;

dv.paragraph('```tasks\n' + query + '\n```');
```

### Putting it in to a callout, for prettier output
## Summary of Tasks within this note

```dataviewjs
function callout(text, type) {
    const allText = `> [!${type}]\n` + text;
    const lines = allText.split('\n');
    return lines.join('\n> ') + '\n'
}

const query = `
not done
path includes ${dv.current().file.path}
# you can add any number of extra Tasks instructions, for example:
group by heading
`;

dv.paragraph(callout('```tasks\n' + query + '\n```', 'todo'));
```

## Others
#### not done
```tasks
not done

```

#### heading includes tasks
```tasks
done
heading includes tasks
```

#### not done  due next month

```tasks
not done
no scheduled date
```



dsds