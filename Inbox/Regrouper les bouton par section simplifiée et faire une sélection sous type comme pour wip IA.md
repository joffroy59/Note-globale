![[Regrouper les bouton par section simplifiée et faire une sélection sous type comme pour wip IA-1738798698515.png]]

### Note

![[Regrouper les bouton par section simplifiée et faire une sélection sous type comme pour wip IA-1738798785654.png]]

Pattern :  Insert Note - ${type}
Type :  ["Note", "Idea", "Other"]

- [x] create a select from exemple IA [[Insert Wip IA - Select v2]]  :  [[Insert Note - Select]] ✅ 2025-02-06
- [x] renommer/dupliquer sous template ✅ 2025-02-06
	- [x] [[Insert Note - Other]] ✅ 2025-02-06
	- [x]  ✅ 2025-02-06
- [x] action for select duplicate Wip IA select  : 📝Insert Note - Select ✅ 2025-02-06
- [x] button  insert-daily-bote-select   `BUTTON[insert-daily-bote-select]` ✅ 2025-02-06
- [x] test ✅ 2025-02-06
- [x] replace in [[Panel/Actions|Actions]] ✅ 2025-02-06
- [ ] Note 
	- [ ] renommer/dupliquer sous template
	- [ ] create note template
	- [ ] button  insert-daily-todo-select   `BUTTON[insert-daily-bote-select]` ✅ 2025-02-06
	- [ ] test
- [ ] Idea
	- [ ] renommer/dupliquer sous template
	- [ ] create note template
	- [ ] button  insert-daily-todo-select   `BUTTON[insert-daily-bote-select]` ✅ 2025-02-06`
	- [ ] test
### Note


![[Regrouper les bouton par section simplifiée et faire une sélection sous type comme pour wip IA-1738801485509.png|150x49]]![[Regrouper les bouton par section simplifiée et faire une sélection sous type comme pour wip IA-1738801470094.png|150x44]]


Pattern :  Insert Done - ${type}
Type :  ["Todo", "Done", "Win", "ToView"]

- [x] create a select from exemple   [[Insert Note - Select]]  -> [[Insert Todo - Select]] ✅ 2025-02-06
- [x] renommer/dupliquer sous template ✅ 2025-02-06
	- [x] [[Insert Note - Other]] -> [[Create Done]] ✅ 2025-02-06
- [x] action for select duplicate Wip IA select  : 📝Insert Note - Select  --> [[Insert Todo - Select]]✅ 2025-02-06 
- [x] button  insert-daily-todo-select   `BUTTON[insert-daily-todo-select]` ✅ 2025-02-06
- [x] test ✅ 2025-02-06
- [ ] replace in [[Panel/Actions|Actions]]
- [ ] Todo
	- [x] renommer/dupliquer sous template ✅ 2025-02-06
	- [x] create note template ✅ 2025-02-06
	- [ ] button  insert-daily-todo-select   `BUTTON[insert-daily-todo-select]`
	- [ ] test
- [ ] Win
	- [ ] renommer/dupliquer sous template
	- [ ] create note template
	- [ ] button  insert-daily-todo-select   `BUTTON[insert-daily-todo-select]`
	- [ ] test
- [ ] ToView
	- [ ] renommer/dupliquer sous template
	- [ ] create note template
	- [ ] button  insert-daily-todo-select   `BUTTON[insert-daily-todo-select]`
	- [ ] test


## problème et blocage

pas possible de choisir ou creer le sous create naote ,  c'est la note select qui semble l'emporter ccar on bypass le quiadd de creation de la feuille 

idees 

- peut etre utiliser une autre technique 
- trouver comment en templater selectection le header apres lequel mettre 