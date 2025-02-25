---
title: "GTD with Obsidian: a ready-to-go GTD system with Task Sequencing, Quick-add template, Waiting-on, Someday/Maybe, and more - Share & showcase - Obsidian Forum"
source: https://forum.obsidian.md/t/gtd-with-obsidian-a-ready-to-go-gtd-system-with-task-sequencing-quick-add-template-waiting-on-someday-maybe-and-more/65502
author:
  - "[[Obsidian Forum]]"
published: 2023-08-21
created: 2025-02-25
description: "IntroductionFor a long time I resisted doing my task management in Obsidian. I’ve always worked in the GTD task management style, and I found that there were two critical functions that I could not do in Obsidian: Seque&hellip;"
tags:
  - clippings
---
## Introduction

For a long time I resisted doing my task management in Obsidian. I’ve always worked in the GTD task management style, and I found that there were two critical functions that I could not do in Obsidian: Sequencing of tasks in a project, and having a project appear in your next actions list *when it has no tasks* - e.g. when you need to add a next action to it.

After some trial-and-error, I managed to write a workable implementation with Dataview. Even if you don’t use GTD or don’t want to implement it the same way, there are quite likely some useful gems in this script - for example having Dataview display a project info line underneath a task.

## Features

- Add tasks anywhere, to any note
- Task sequencing for projects (do this first, then this next)
- Priority, Waiting-On, and Someday tasks
- Notification of projects without next actions
- Requires only the Dataview plugin to be installed (Templater is also recommended)
- Compatible with Tasks plugin
- If a task is part of a project, the project information is displayed along with the task in the master task list
- Everything is done from a single Dataview script, which makes it highly configurable and adaptable for almost any use case

Here’s an example of the master task list, which is automatically populated with tasks from anywhere in your vault:

[![Pasted image 20230821133422](https://forum.obsidian.md/uploads/default/optimized/3X/0/f/0f78ce0430aae7bbb63956d76e63aef9d5289148_2_454x499.png)](https://forum.obsidian.md/uploads/default/original/3X/0/f/0f78ce0430aae7bbb63956d76e63aef9d5289148.png "Pasted image 20230821133422")

## Why a Dataview script and not a plugin?

GTD implementations are quite specific. Everybody likes to set theirs up “just so” in their own custom way - for example the layout of your master task list or projects list page. It’s **hard** to modify a plugin, and impossible to cover every use case. It’s (fairly) easy to modify a Dataview script to customise it exactly how you want.

Feel free to ask customisation questions in this thread - I’ll do my best to help!

## How to set up

1. [Download the GTD demo vault 3.1k](https://github.com/alangrainger/obsidian-gtd/archive/refs/heads/main.zip) and test it out. This is an already-configured working vault which will give you an idea of whether you like the system, and what features of it you might want to implement in your own vault.
2. The “brains” of the system is a single Dataview script: [tasks.js 936](https://github.com/alangrainger/obsidian-gtd/blob/main/Utility/Scripts/Dataview/tasks.js). You can put this anywhere in your vault and Dataview will find it. I personally like to put all my scripts in a single folder, like `Utility/Scripts/Dataview`.
3. You can optionally add the [Task Menu template 337](https://github.com/alangrainger/obsidian-gtd/blob/main/00%20Documentation/Task%20menu%20template.md) from the `Utility/Scripts/Templater` and `Utility/Templates` folders. If you use this template, make sure to assign it to a hotkey.

## Documentation

Full documentation is included inside the demo vault. You can also [access it online 1.0k](https://github.com/alangrainger/obsidian-gtd/blob/main/00%20Documentation/Documentation.md) via Github (although it’s expecting to be accessed through Obsidian, so some things won’t work).

Thank you for taking the time to create this and share it. I’ve been looking for something simple to use in Obsidian and just works. I like that you only depend on a few plugins and your code looks very organized and easy to understand.  
I’m not sure yet if I’ll use this, but I just wanted to reach out and say thank you for contributing it.

looks like pretty amazing work!  
I’m not as proficient with obsidian or dataview yet so It’ll take me a moment to see if I want to switch to this for my GTD setup.

Quick question, at this point I’m using a simpler setup with just notes for both actions and projects. Do you see any downside to using notes for everything (other than having to delete/move a note instead of checking the checkbox)? my thinking is that it allows for easier linking, more flexibility, you can count projects backlinks without elaborate engine to find ones with no actions. I don’t use action sequencing at the moment but I can imagine you can also link actions and sequence them by showing only ones with no backlinks

basically my question is, other than a checkbox input, is there a benefit to using tasks vs notes?

I considered doing it that way originally. There’s probably no real downside, but these were my reasons for deciding against it:

1. I like inline tasks. An easy example is a my daily journal note. As I’m writing, I might add in things that I want to do, and I enjoy seeing those ad-hoc tasks again when reading over my old journals.
2. There wasn’t really much extra metadata I wanted for individual next actions. Projects need a lot of metadata, but a GTD **next action** is atomic and self-defined enough that it doesn’t really need much info. You can always link to a note if your task really requires additional documentation.
3. There’s nothing quite so nice as going down a list of checkboxes and checking them off ![:stuck_out_tongue_closed_eyes:](https://forum.obsidian.md/images/emoji/apple/stuck_out_tongue_closed_eyes.png?v=12 ":stuck_out_tongue_closed_eyes:")

got it ![:smiley:](https://forum.obsidian.md/images/emoji/apple/smiley.png?v=12 ":smiley:")  
appreciate the response! I think I just need more familiarity with obsidian and dataview to be comfortable with extensive js engines. I just got to the point where I actually started saving time by using my obsidian setup rather than dumping time into it, so I’ll ride that wave for a bit, but I’ll def keep an eye on this thread!

This is brilliant! Thank you for sharing it. I’m really new to Obsidian, but have been using GTD for years. I can see how Obsidian is so much more flexible than all the other GTD apps I’ve used, but since I’m so invested, I’m really nervous about migrating to something new. Your system will go a long ways to allaying my fears.

When I click on *Archive/Remove completed tasks*, I keep getting “Template parsing error, aborting”. The console says “Templater Error: Template parsing error, aborting. Cannot read properties of null (reading ‘path’)”.

I know I’m probably doing something wrong that is obvious and I’ve overlooked some instructions in the documentation, but after 3 hours of trying to figure it out, I’m stumped. Any suggestions?

Thanks for your response and fixing the file. This makes my day: I came back to this forum to delete my original message because I finally figured out how to fix the problem. I had changed the title of the ‘completed task’ note to get rid of the file cabinet emoji. Once I changed the path in templater\_tasks.js to point to where the actual ‘completed tasks’ note is, it worked! I’m not gonna lie, I was pretty proud of myself (I’ve taken a grand total of *one* computer science class… and it was 25 years ago.).

Hello ![:wave:](https://forum.obsidian.md/images/emoji/apple/wave.png?v=12 ":wave:")

First of all, I want to say — a wonderful job! I have adopted your process, I have been using it for more than a week and I am very pleased. Thank you so much for sharing this with the community ![:fire:](https://forum.obsidian.md/images/emoji/apple/fire.png?v=12 ":fire:")

I have a question: is it possible to configure the code so that it takes into account some fields of the YAML and distributes tasks, including relying on this?

Context: Project notes are posted on the Kanban board, where there are columns with statuses. When I move a project card from one column to another, the MetaEdit plugin automatically updates the value of the “status” field. I would like the GTD master-list in the “Next action” section to display tasks from projects that are in the “In progress” status. And tasks from projects that are in the “Waiting” status were shown in the “On-waiting” section of the master list.

If it is possible, could you tell me how to set it up?

Hi!

Just stumbled upon your GTD implementation and have to say: I love it!  
That’s exactly what I need right now ![:smile:](https://forum.obsidian.md/images/emoji/apple/smile.png?v=12 ":smile:")

I noticed that the quick action for “toggle #someday” does not actually toggle - it just adds the tag but does not remove it.  
And I miss a toggle for adding the priority emoji as well.

I just added that to the code and wanted to ask if you accept pull requests?

Absolutely! Please send it through ![:+1:](https://forum.obsidian.md/images/emoji/apple/+1.png?v=12 ":+1:")

I updated the script but am still getting an error. Pretty sure I’ve got it configured correctly – see screenshot. Thanks again for a really useful template!  

[![screenshot obsidian](https://forum.obsidian.md/uploads/default/optimized/3X/f/2/f2e04a8d7f5368364df90e16f4f058f64ac0ff4c_2_690x416.png)](https://forum.obsidian.md/uploads/default/original/3X/f/2/f2e04a8d7f5368364df90e16f4f058f64ac0ff4c.png "screenshot obsidian")

Please try using forward slashes instead of backslashes.  
These work on Windows, too, and you don’t need to care about escape characters.

Hi,

Firstly, this is an incredible system and thank you for your work! I am wondering how you implement recurring projects and/or regular tasks (e.g., every Monday I must do x at work). I presume this is all manually done during a weekly review?

Thanks in advance.

If you want recurring tasks, you can use the Tasks plugin alongside this GTD method without any issues.

For me personally, I do it how David Allen recommends: if something needs to happen on Monday, then it’s in the calendar. Otherwise it’s a Next Action.

Thanks for sharing. One thing I like to add to most tasks is a context, so that I can filter for desk, phone, etc, so I might take a look at converting it to note-per-task. Although I like the idea of inline tasks as well ;/

Would it be possible to get the progress bar (like in the project) inside the dataview table at the Project list as well?  
Thought this would be a nice to have feature.

Sadly, I never used javascript or dataview and my miserable attempts trying to implement it failed

Hi Alan,  
Thanks for your work and share it with us.

I like your approach, but I would like to modify it to include basic GTD contexts like @office, @computer, etc. I am not javascript programmer, so I am struggling a bit.

I have extended the function generateTaskElements as follows:  
function generateTaskElement(task, page) {  
let group = Groups.Normal  
if (task.tags.includes(‘#someday’)) {  
group = Groups.Someday  
} else if (task.tags.includes(‘#waiting-on’)) {  
group = Groups.Waiting  
} else if (task.tags.includes(‘#call’)) {  
group = Groups.Call  
} else if (task.tags.includes(‘#computer’)) {  
group = Groups.Computer  
} else if (task.tags.includes(‘#office’)) {  
group = Groups.Office  
} else if (task.text.includes(‘![:arrow_up_small:](https://forum.obsidian.md/images/emoji/apple/arrow_up_small.png?v=12 ":arrow_up_small:")’) || page.tags.includes(‘#![:arrow_up_small:](https://forum.obsidian.md/images/emoji/apple/arrow_up_small.png?v=12 ":arrow_up_small:")’)) {  
group = Groups.Priority  
}  
return {  
task: task,  
date: (page.created ? page.created.ts || moment(page.created).valueOf() : null) || page.ctime.ts,  
group: group  
}

and at the end extended Output task list  
// Output the task list  
taskList(Groups.Priority, ‘![:arrow_up_small:](https://forum.obsidian.md/images/emoji/apple/arrow_up_small.png?v=12 ":arrow_up_small:") Priority’,)  
taskList(Groups.Waiting, ‘![:hourglass_flowing_sand:](https://forum.obsidian.md/images/emoji/apple/hourglass_flowing_sand.png?v=12 ":hourglass_flowing_sand:") Waiting on…’)  
taskList(Groups.Computer, ‘![:desktop_computer:](https://forum.obsidian.md/images/emoji/apple/desktop_computer.png?v=12 ":desktop_computer:") Computer’)  
taskList(Groups.Office, ‘![:office:](https://forum.obsidian.md/images/emoji/apple/office.png?v=12 ":office:") Office’)  
taskList(Groups.Call, ‘![:telephone_receiver:](https://forum.obsidian.md/images/emoji/apple/telephone_receiver.png?v=12 ":telephone_receiver:") Call’)  
taskList(Groups.Normal, ‘![:white_check_mark:](https://forum.obsidian.md/images/emoji/apple/white_check_mark.png?v=12 ":white_check_mark:") Next actions’)  
taskList(Groups.Someday, ‘![:zzz:](https://forum.obsidian.md/images/emoji/apple/zzz.png?v=12 ":zzz:") Someday’)

However I am getting output with all but Normal tasks in each group.

[![image](https://forum.obsidian.md/uploads/default/optimized/3X/d/b/db05c0f8e6732e18374684490843ad6ec97221fa_2_488x500.png)](https://forum.obsidian.md/uploads/default/original/3X/d/b/db05c0f8e6732e18374684490843ad6ec97221fa.png "image")

Of course I would like to get only the tasks with the hashtag #office in the Office part of the output. Can you help me to fix the script?

Cheers,  
Marcin

Thank you, Alan. This is fantastic!