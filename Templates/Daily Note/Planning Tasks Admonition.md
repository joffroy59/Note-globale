

``````ad-caution
title: "Overdue"
collapse: Closed

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
```

``````
``````ad-todo
title: "Due today"
collapse: Closed

```tasks
not done
due on <% tp.date.now("YYYY-MM-DD") %>
```

``````
``````ad-hint
title: "Due in the next two weeks"
collapse: Closed

```tasks
not done
due after <% tp.date.now("YYYY-MM-DD", 14) %>
due before 2025-02-08
```

``````
``````ad-note
title: "No due date"
collapse: Closed

```tasks
not done
no due date
```

``````
``````ad-done
title: "Done today"
collapse: Closed

```tasks
done on <% tp.date.now("YYYY-MM-DD") %>
```

``````





