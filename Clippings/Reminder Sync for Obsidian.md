---
title: "Reminder Sync for Obsidian"
source: "https://turquoisehexagon.co.uk/remindersync/documentation"
author:
published:
created: 2025-02-26
description:
tags:
  - "clippings toview"
---
## Reminder Sync for Obsidian User Manual

### Installation

#### Prerequisites

Reminder Sync is designed to be used with [Obsidian](https://obsidian.md/) and the [Tasks Plugin](https://publish.obsidian.md/tasks/Introduction) configured to use the [Emoji task format](https://publish.obsidian.md/tasks/Reference/Task+Formats/Tasks+Emoji+Format).

Additionally Reminder Sync works with any notes application that stores notes as Markdown files and represents tasks as a list item beginning with a checkbox. Note that metadata extraction would still require the [emoji task format](https://publish.obsidian.md/tasks/Reference/Task+Formats/Tasks+Emoji+Format) from Obsidian, even if using an alternative notes app.

#### Installing Reminder Sync

Install Reminder Sync for Obsidian from the [App Store](https://apps.apple.com/us/app/reminder-sync-for-obsidian/id6478323460?mt=12).

On first launch, follow the setup wizard to configure access to Reminders, your Vault Directory and the Reminder List you would like to use.

![Screenshot of Setup Wizard in incomplete state](https://serverlez-static-prod.s3.amazonaws.com/images/support_wizard_1.png)

![Screenshot of Setup Wizard in complete state ](https://serverlez-static-prod.s3.amazonaws.com/images/support_wizard_2.png)

Once you have granted Reminders access, configured your Vault Location, and selected a Reminder list, click Next to continue setup.

To begin syncing your tasks turn on the Enable Syncing toggle:

![Screenshot of Setup Wizard settings view](https://serverlez-static-prod.s3.amazonaws.com/images/support_wizard_settings.png)

### Configuration

To configure Reminder Sync after initial setup is complete, click the icon in the menu bar and select settings:

![Screenshot of Setup Wizard settings view](https://serverlez-static-prod.s3.amazonaws.com/images/support_menuitem.png)

#### Reminder Sync Inbox

When you create a Reminder in the synced list with Reminders.app a Task will be created in the root of your Obsidian Vault in a note named 'Reminder Sync Inbox.md'.

The name and location of the inbox note can be configured in the settings menu: click the inbox name to set a new location.

#### Configuration Options

| Name | Description |
| --- | --- |
| Sync Frequency | How often your Obsidian Vault is checked for Tasks. |
| Enable Syncing | Turn on to Sync your Tasks at the selected Sync Frequency. |
| Allow Deletes | Controls behaviour when deleting a Reminder from your Synced list: if enabled when a Reminder is deleted the synced Task is also deleted from your Vault. |
| Skip Kanban | If using with the Kanban Plugin, enable to exclude Kanban notes from syncs. |
| Global Task Filter | Enable to set a global task filter for which Tasks are synced to Reminders. |
| Add Completion Date | If enabled the completion date will be added to the source Task when completing a synced Reminder. |
| Filter Text | The filter text used by the Global Task Filter. E.g. if set to #task only Tasks containing the text #task will be synced to Reminders. |
| Due Tasks Only | If enabled, only Tasks from your Obsidian Vault with a due date component are synced to your Reminders. |
| Smart Reminders | Create additional alerts from the Reminders app based on Task priority and due date. |
| Launch at Login | Runs Reminder Sync for Obsidian when you login. |
| Vault Location | Click to select a new Obsidian Vault location. |
| Inbox Name | Click to change the Note that new Reminders are synced to in your Vault. |
| Reminder List | The Reminder list you would like to sync Obsidian Tasks to. |

Configuration changes apply to future syncs only. To reset the synced Reminder list and rescan with the new settings click Clear Cache.

### Troubleshooting

#### Clearing Cache

To rescan your entire Vault and rebuild your Reminder list press the Clear Cache button in the Settings menu.

#### Factory Reset

To reset all configuration options press the Factory Reset button in the Settings menu. Reconfigure Reminder Sync in the Settings menu or quit and relaunch to restart the Setup wizard.

#### Reminder Sync for Obsidian does not Start

If the App fails to start, delete all cached data and settings manually.

Open Finder:

- Select Go > Go To Folder from the Menu Bar
- Type ~/Library/Containers/uk.co.turquoisehexagon.ReminderSync and visit the folder.
- Delete the 'Data' folder.

#### Viewing Logs

Open Terminal.app and paste the following command:

`log show --info --debug --last 24h --predicate '(subsystem == "uk.co.turquoisehexagon.ReminderSync")'`

#### Collecting Error Logs

Open Terminal.app and paste the following command:

`log show --last 24h --predicate '(subsystem == "uk.co.turquoisehexagon.ReminderSync")' >> ~/reminder-sync-error.log`

The error log file 'reminder-sync-error.log' will be created in your home directory, and can be shared with the developer.

#### Other Issues

Email remindersync＠turquoisehexagon.co.uk for further support, attaching the error log as described above if possible.