#### Overdue
```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
```

#### Due today
```tasks
not done
due on **<% tp.date.now("YYYY-MM-DD") %>**
```

#### Due in the next two weeks
```tasks
not done
due after <% tp.date.now("YYYY-MM-DD") %>
due before <% tp.date.now("YYYY-MM-DD", 14) %>
```

#### No due date
```tasks
not done
no due date
```

#### Done today
```tasks
done on <% tp.date.now("YYYY-MM-DD") %>
```

