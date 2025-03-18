---
title: "15 Easy Templater Commands For Obsidian — Red Gregory"
source: "https://www.redgregory.com/obsidian-content/2021/11/17/15-templater-commands-for-obsidian"
author:
  - "[[Red Gregory]]"
published: 2021-11-18
created: 2025-03-18
description: "Getting started with the Templater Obsidian plugin? Here’s a list of commands to experiment with. After creating this video about the plug-ins I’m currently using, I mentioned Templater quite a bit. And so, I created a list of commands I’ve used to systemize my vault. Keep in mind, Templater has these commands and javascript compatibility too."
tags:
  - "clippings toview"
---
![](https://images.squarespace-cdn.com/content/v1/5a049a70be42d60e92dd8246/65427312-2e62-40de-8ce2-e5091296ec60/templater-plugin-obsidian-cover.png)

Getting started with the Templater Obsidian plugin? Here’s a list of commands to experiment with. After [creating this video](https://youtu.be/t979dOEgBAk) about the plug-ins I’m currently using, I mentioned Templater quite a bit. And so, I created a list of commands I’ve used to systemize my vault. Keep in mind, Templater has these commands and javascript compatibility too. [Learn more here](https://silentvoid13.github.io/Templater/).

## How To Get Started With Templater

**Installation instructions**

- Navigate to community plugins, browse plugins, and install *Templater.*
- Return to community plugins and enable theplugin.
- Create a folder for templates (ie. a folder named “Templates”).
- Go to *Templater* settings and select a “Template Folder Location”.

**Create your first template**

- Navigate to your templates folder and create a new file.
- All content in the body of the file will be duplicated upon choosing template.

**How to choose a template**

- Navigate to command palette (command + P).
- Find *Templater : Open Insert Template modal.*
- All files inside the template folder will be found here to select.
- (optional) Create hotkey for each template in the *Templater* settings page.

## The Templater Commands

Insert these commands into the body of a template page.

### **1\. Extract the file’s title**

> <% tp.file.title %>

### **2\. Extract file’s title without 12-digit Zettelkasten number**

> <% tp.file.title.slice(13) %>

### **3\. Extract items in the title**

Replace \[#\] with item location between spaces

> <% tp.file.title.split(" ")\[1\] %>

### 4\. Extract items from metadata

Replace \[“this text”\] with what frontmatter you want to extract.

> <% tp.frontmatter\["tags"\] %>

**or**

> <% tp.file.tags %>

### 5\. Insert date created in metadata

> <% tp.file.creation\_date("Do MMMM YYYY") %>

### 6\. Extract folder name of file

> \*\*Folder\*\*: \`<% tp.file.folder() %>\`

### 7\. Create daily links for this week (M-Su)

> \- \*\*Monday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 1) %>\]\]
> 
> \- \*\*Tuesday\*\* \[\[ <% tp.date.weekday("YYYY-MM-DD", 2) %>\]\]
> 
> \- \*\*Wednesday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 3) %>\]\]
> 
> \- \*\*Thursday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 4) %>\]\]
> 
> \- \*\*Friday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 5) %>\]\]
> 
> \- \*\*Saturday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 6) %>\]\]
> 
> \- \*\*Sunday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 7) %>\]\]

### 8\. Create daily links for week of file’s title

The file’s title needs to be formatted as “YYYY-MM-DD”.

> \- \*\*Monday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Tuesday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Wednesday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Thursday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Friday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Saturday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>\]\]
> 
> \- \*\*Sunday\*\* \[\[<% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>\]\]

### 9\. Retrieve clipboard content

> <% tp.system.clipboard() %>

### 10\. Create drop-down menu to choose from

> <% tp.system.suggester(\["🔥 Priority 1", "Priority 2", "Priority 3"\], \["🔥 Priority 1", "Priority 2", "Priority 3"\]) %>

### 11\. Create a text-field form to insert

This will appear as a pop-up form when the template is triggered.

> <% tp.system.prompt("Where is he from?", "type place here ...") %>

### 12\. Show yesterday and tomorrow

> << \[\[<% tp.date.now("YYYY-MM-DD", -1) %>\]\] | \[\[<% tp.date.now("YYYY-MM-DD", 1) %>\]\] >>

### 13\. yesterday and tomorrow from file title

> << \[\[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>\]\] | \[\[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>\]\] >>

### 14\. Move file to defined folder

> <% await tp.file.move("/Example Folder/" + tp.file.title) %>

### 15\. Create index page from file name

This creates a page to an index for the current folder.

> \[\[§Index-<% tp.file.folder() %>\]\]