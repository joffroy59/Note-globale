
```embed
title: "Multi Column Callout"
image: "https://raw.githubusercontent.com/efemkay/obsidian-modular-css-layout/main/docs/assets/hero-mc-callout.png"
description: "Modular CSS Layout for Obsidian"
url: "https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#standard-multi-column-callout"
```

## [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#overview)Overview

![](https://raw.githubusercontent.com/efemkay/obsidian-modular-css-layout/main/docs/assets/hero-mc-callout.png)

### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#how-to-use--basic-syntax)How to Use / Basic Syntax

Here’s an example markdown

```
> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting
```

> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting



> Note that when you insert callout within callout, the line separating the callouts should only use single angle bracket (“>”)

> What Counts as Column in a `[!multi-column]`?
> 
> By default, another callout (aka sub-callout) within `[!multi-column]` is how you create a “column”. But this snippets do provide a few alternatives
> 
> - immediate dataview block (either table or list)
> - immediate blockquote
> - ordered/unordered list (but need to have `<br/>` tag between lists due to how obsidian override “markdown loose list”)

## [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#additional-controls)Additional Controls

### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#fixed-width-option-for-multi-column)Fixed Width Option for `[!multi-column]`

- `[!multi-column|center-fixed]` - for align to the center
- `[!multi-column|left-fixed]` - for align to the left
- `[!multi-column|right-fixed]` - for align to the right

Here’s an example markdown

```
> [!multi-column|center-fixed]
>
>> [!blank-container]
>> ![[icon 1.jpg]]
>
>> [!blank-container]
>> ![[icon 2.jpg]]
>
>> [!blank-container]
>> ![[icon 3.jpg]]
```

> [!multi-column|center-fixed]
>
>> [!blank-container]
>> ![[icon 1.jpg]]
>
>> [!blank-container]
>> ![[icon 2.jpg]]
>
>> [!blank-container]
>> ![[icon 3.jpg]]



### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#no-wrap-option-for-multi-column)No Wrap Option for `[!multi-column]`

Here’s an example markdown

```
> [!multi-column|no-wrap]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting
```

> [!multi-column|no-wrap]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting



> Limitation on No-Wrap Multi Column
> 
> Width Control (different width for sub-callout) for now is not valid for No-Wrap Multi Column. Columns will be mostly follow the minimum width – it has separate minimum width than the Wrapped Multi Column

### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#width-control)Width Control

You can control sub-callout width by specifying the custom width option in the callout-metadata element (do NOT apply to `[!multi-column]` callout itself. So far, there’s only a discrete options per below:

- `min-0` - to override and disable min width set in Style Settings
- `wide-2` - give callout twice the size
- `wide-3` - three times the size
- `wide-4` - four times the size
- `wide-5` - five times the size

Here’s an example markdown

```
> [!multi-column]
>
>> [!note|wide-3]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning|wide-2]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary|min-0]+ Charity
>> your notes or lists here. using markdown formatting
```

> [!multi-column]
>
>> [!note|wide-3]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning|wide-2]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary|min-0]+ Charity
>> your notes or lists here. using markdown formatting



> When Pairing with sub-callout with min width
> 
> By default, sub-callout within multi-column callout has min width of 200px (unless you changed it via Style Settings). Applying `wide-x` metadata for sub-callout that paired with those callout will have different sizing behaviour

> Understanding callout type and callout metadata
> 
> - `> [!<callout-type>]` e.g. `> [!Summary]`
> - `> [!<callout-type>|<callout-metadata>]` e.g. `> [!Summary|wide-2]`

### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#additional-global-settings-via-style-settings)Additional Global Settings via Style Settings

If you have Style Settings plugin installed, you may control the following aspects (go to `Style Settings > Modular CSS Layout - Multi Column > Multi Column Callout`)

- Hide / Show SNW Indicator for images in Float Callout
- Adjust minimum width for general sub-callout and No-Wrap sub-callout
- Adjust gap between sub-callout and margin between sub-callout

## [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#examples)Examples

#### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#standard-multi-column-callout)#### Standard Multi-Column Callout

> ![](https://efemkay.github.io/docs/assets/mc-callout-standard.png)
> 
> ```
> > [!multi-column]
> >
> >> [!note]+ Use Case
> >> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> >> ##### User Case Background
> >> Vitae nunc sed velit dignissim sodales. In cursus turpis massa tincidunt dui ut ornare lectus.
> >
> >> [!warning]+ Resources
> >> #### Requirement
> >> - Lorem ipsum dolor sit amet
> >> - Vitae nunc sed velit dignissim sodales.
> >> - In cursus turpis massa tincidunt dui ut ornare lectus.
> >
> >> [!todo]+
> >> - [x] Define Use Case
> >> - [ ] Craft User Story
> >> - [ ] Develop draft sketches
> ```




> [!multi-column]
>
>> [!note]+ Use Case
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>> ##### User Case Background
>> Vitae nunc sed velit dignissim sodales. In cursus turpis massa tincidunt dui ut ornare lectus.
>
>> [!warning]+ Resources
>> #### Requirement
>> - Lorem ipsum dolor sit amet
>> - Vitae nunc sed velit dignissim sodales.
>> - In cursus turpis massa tincidunt dui ut ornare lectus.
>
>> [!todo]+
>> - [x] Define Use Case
>> - [ ] Craft User Story
>> - [ ] Develop draft sketches


---

#### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#icon-links-dashboard-using-fixed-width-option)Icon Links Dashboard using Fixed Width option

> ![example of list column](https://raw.githubusercontent.com/efemkay/obsidian-modular-css-layout/main/docs/assets/mc-callout-fixed-width.png)
> 
> ```
> ## Icon Links Dashboard using `[!multi-column|center-fixed-small]`
> 
> > [!multi-column|center-fixed-small]
> >
> >> [!blank|center]
> >> [![lightbulb icon|80](https://img.icons8.com/ios/250/FFFFFF/light-on.png) <br/> Interests](target%20note.md)
> >>
> >> [![macbook icon|80](https://img.icons8.com/ios/250/FFFFFF/macbook.png) <br/> Technology](target%20note.md)
> >
> >> [!blank|center]
> >> [![brain icon|80](https://img.icons8.com/ios/250/FFFFFF/brain.png) <br/> Life & Wisdom](target%20note.md)
> >>
> >> [![briefcase icon|80](https://img.icons8.com/ios/250/FFFFFF/business.png) <br/> Work](target%20note.md)
> >
> >> [!blank|center]
> >> [![running icon|80](https://img.icons8.com/ios/250/FFFFFF/sports-mode.png) <br/> Health](target%20note.md)
> >>
> >> [![home icon|80](https://img.icons8.com/ios/250/FFFFFF/house-with-a-garden.png) <br/> Family](target%20note.md)
> 
> ```


> [!multi-column|center-fixed-small]
>
>> [!blank|center]
>> [![lightbulb icon|80](https://img.icons8.com/ios/250/FFFFFF/light-on.png) <br/> Interests](target%20note.md)
>>
>> [![macbook icon|80](https://img.icons8.com/ios/250/FFFFFF/macbook.png) <br/> Technology](target%20note.md)
>
>> [!blank|center]
>> [![brain icon|80](https://img.icons8.com/ios/250/FFFFFF/brain.png) <br/> Life & Wisdom](target%20note.md)
>>
>> [![briefcase icon|80](https://img.icons8.com/ios/250/FFFFFF/business.png) <br/> Work](target%20note.md)
>
>> [!blank|center]
>> [![running icon|80](https://img.icons8.com/ios/250/FFFFFF/sports-mode.png) <br/> Health](target%20note.md)
>>
>> [![home icon|80](https://img.icons8.com/ios/250/FFFFFF/house-with-a-garden.png) <br/> Family](target%20note.md)


Mieux avec  `center-fixed`


> [!multi-column|center-fixed]
>
>> [!blank|center]
>> [![lightbulb icon|80](https://img.icons8.com/ios/250/FFFFFF/light-on.png) <br/> Interests](target%20note.md)
>>
>> [![macbook icon|80](https://img.icons8.com/ios/250/FFFFFF/macbook.png) <br/> Technology](target%20note.md)
>
>> [!blank|center]
>> [![brain icon|80](https://img.icons8.com/ios/250/FFFFFF/brain.png) <br/> Life & Wisdom](target%20note.md)
>>
>> [![briefcase icon|80](https://img.icons8.com/ios/250/FFFFFF/business.png) <br/> Work](target%20note.md)
>
>> [!blank|center]
>> [![running icon|80](https://img.icons8.com/ios/250/FFFFFF/sports-mode.png) <br/> Health](target%20note.md)
>>
>> [![home icon|80](https://img.icons8.com/ios/250/FFFFFF/house-with-a-garden.png) <br/> Family](target%20note.md)

---

#### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#example-screenshot---multi-column-callout-with-width-control)Example Screenshot - Multi Column Callout with Width Control

![](https://raw.githubusercontent.com/efemkay/obsidian-modular-css-layout/main/docs/assets/mc-callout-width-control.png)

---

#### [](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/#example-gif---install-the-snippet-and-apply-multi-column-callout)Example GIF - Install the snippet and apply Multi Column Callout
