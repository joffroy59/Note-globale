## IA 
[[Liste des plugin - Suivi réactivation - Copilot Chat]]
[LeChat](https://chat.mistral.ai/chat/2caf8c2a-1d6e-46de-878c-ede6dab6d939)
### Liste des plugin et leur Id order

| #   | Plugin               | Version |
| --- | -------------------- | ------- |
| 1   | Git                  | v2.31.1 |
| 2   | Templater            | v2.9.3  |
| 3   | Tasks                | v7.17.0 |
| 4   | Rollover Daily Todos | v1.1.8  |
| 5   | Link Embed           | v2.0.13 |
| 6   | Periodic Notes       | v0.0.17 |
| 7   | Table Generator      | v1.4.1  |
| 8   | Calendar             | v1.5.10 |
| 9   | Code Styler          | v1.1.7  |
| 10  | Iconize              | v2.14.7 |
| 11  | Dataview             | v0.5.67 |
| 12  | QuickAdd             | v1.11.5 |
| 13  | Meta Bind            | v1.3.4  |
| 14  | Homepage             | v4.1    |
| 15  | Vault Transfer       | v1.3.0  |
| 16  | Image Toolkit        | v1.4.2  |
| 17  | BRAT                 | v1.0.6  |
| 18  | Query Control        | v0.7.13 |
| 19  | Image Converter      | v1.3.8  |
| 20  | Pixel Banner         | v2.21.2 |
| 21  | Mononote             | v1.2.2  |
| 22  | Admonition           | v10.3.2 |
| 23  | Tray                 | v0.3.5  |
| 24  | Colored Tags         | v5.0.1  |
| 25  | Copilot              | v2.8.6  |

### Suivi de réactivation et performance

| install<br>order | #   | Plugin name          | Version | Réactivé | Réactivation # | État d'Obsidian |
| ---------------- | --- | -------------------- | ------- | -------- | -------------- | --------------- |
| 22               | 1   | Admonition           | v10.3.2 |          |                |                 |
| 8                | 2   | Calendar             | v1.5.10 |          |                |                 |
| 9                | 3   | Code Styler          | v1.1.7  |          |                |                 |
| 25               | 4   | Copilot              | v2.8.6  |          |                |                 |
| 11               | 5   | Dataview             | v0.5.67 |          |                |                 |
| 1                | 6   | Git                  | v2.31.1 | ✅        | 1              | **🟢**          |
| 14               | 7   | Homepage             | v4.1    | ✅        | 7              |                 |
| 10               | 8   | Iconize              | v2.14.7 | ✅        | 8  🚧          |                 |
| 16               | 9   | Image Toolkit        | v1.4.2  |          |                |                 |
| 19               | 10  | Image Converter      | v1.3.8  |          |                |                 |
| 5                | 11  | Link Embed           | v2.0.13 |          |                |                 |
| 13               | 12  | Meta Bind            | v1.3.4  | ✅        | 6              | **🟢**          |
| 21               | 13  | Mononote             | v1.2.2  |          |                |                 |
| 6                | 14  | Periodic Notes       | v0.0.17 | ✅        | 5              | **🟢**          |
| 20               | 15  | Pixel Banner         | v2.21.2 |          |                |                 |
| 12               | 16  | QuickAdd             | v1.11.5 |          |                |                 |
| 4                | 17  | Rollover Daily Todos | v1.1.8  | ✅        | 4              | **🟢**          |
| 17               | 18  | BRAT                 | v1.0.6  |          |                |                 |
| 7                | 19  | Table Generator      | v1.4.1  |          |                |                 |
| 3                | 20  | Tasks                | v7.17.0 | ✅        | 2              | **🟢**          |
| 2                | 21  | Templater            | v2.9.3  | ✅        | 3              | **🟢**          |
| 23               | 22  | Tray                 | v0.3.5  |          |                |                 |
| 15               | 23  | Vault Transfer       | v1.3.0  |          |                |                 |
| 18               | 24  | Query Control        | v0.7.13 |          |                |                 |
| 24               | 25  | Colored Tags         | v5.0.1  |          |                |                 |


#### Légende réactivation :

- **❌** : Non réactivé
- **✅** : Réactivé
- **⚠️** : En cours (WIP - Work In Progress)

#### Légende état d'Obsidian :

- **🟢** : Stable
- **🔴** : Lent
- **🟠** : Moyen (performances acceptables mais pas optimales)


## Suivi Start Obsidian


| Mesure                           | None | Git | Tasks | Templater | Rollover Daily Todos | Periodic Notes | Meta Bind | Homepage | Iconize |     |
| -------------------------------- | ---- | --- | ----- | --------- | -------------------- | -------------- | --------- | -------- | ------- | --- |
| Total app startup                | 888  | 784 | 802   | 853       | 843                  | 840            | 921       | 887ms    | 1,035ms |     |
| Initialization                   | 426  | 317 | 200   | 192       | 214                  | 198            | 226ms     | 198ms    | 200ms   |     |
| Vault (1 178 files)              | 164  | 128 | 106   | 105       | 107                  | 107            | 115ms     | 115ms    | 106ms   |     |
| Workspace (16 tabs, 11 deferred) | 240  | 216 | 364   | 427       | 378                  | 382            | 315ms     | 364ms    | 429ms   |     |
| Core plugins (18 active)         | 49   | 70  | 48    | 34        | 47                   | 51             | 83ms      | 21ms     | 37ms    |     |
| Community plugins (0 active)     | 10   | 39  | 85    | 95        | 97                   | 102            | 183ms     | 190ms    | 263ms   |     |
|                                  |      |     |       |           |                      |                |           |          |         |     |
| Git                              |      |     | 38    | 40        | 38                   | 36             | 34ms      | 34ms     | 33ms    |     |
| Tasks                            |      |     | 36    | 36        | 38                   | 37             | 41ms      | 43ms     | 42ms    |     |
| Templater                        |      |     |       | 9         | 9                    | 9              | 8ms       | 9ms      | 8ms     |     |
| Rollover Daily Todos             |      |     |       |           | 1                    | 3              | 1ms       | 1ms      | 2ms     |     |
| Periodic Notes                   |      |     |       |           |                      | 1              | 3ms       | 3ms      | 3m      |     |
| Meta Bind                        |      |     |       |           |                      |                | 85ms      | 85ms     | 84ms    |     |
| Homepage                         |      |     |       |           |                      |                |           | 3ms      | 3ms     |     |
| Iconize                          |      |     |       |           |                      |                |           |          | 78ms    |     |
|                                  |      |     |       |           |                      |                |           |          |         |     |
|                                  |      |     |       |           |                      |                |           |          |         |     |
#todo GRAPH

