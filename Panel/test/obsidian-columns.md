```embed
title: "GitHub - tnichols217/obsidian-columns"
image: "https://opengraph.githubassets.com/b6b4cf4b5b17e4519b84454b5b7fc6c5cca34e4d16ba978704469f38f36c3d75/tnichols217/obsidian-columns"
description: "Contribute to tnichols217/obsidian-columns development by creating an account on GitHub."
url: "https://github.com/tnichols217/obsidian-columns"
```

> [!col]
> A col callout
>
> Second column of the callout

> [!col]
> A col callout
>
>> [!col-md]
>> The second column of the callout
>> 
>> More lines on the second column of the callout


> [!col]
> A col callout
>
>> [!col-md-3]
>> The second column of the callout
>> 
>> This column is now 3 times the width of the first column



````col
```col-md
Column A
```

```col-md
Column B
```
````

````col
height=shortest
===
```col-md
line 1
line 2
line 3
line 4
```

```col-md
line 1
line 2
```
````
## MD 


```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  `````col-md
>>  - example MD code
>>  - more stuff
>>  `````
``````

``````col-md
flexGrow=2.5
===
# Text annotation example:

`````col
````col-md
flexGrow=1
===
1. Function name **a** should be more descriptive

2. Remove **if/else** by using **||**
````

````col-md
flexGrow=2
===
```js
function a(word) {
	if (word != null) {
		console.log(word);
	} else {
		console.log("a");
	}
}
let msg = "Hello, world!";
console.log(msg)
```
````
`````
``````
```````


## Callout 

> [!col]
>> [!info] Callouts
>> Stuff inside the callout
>> More stuff inside.
>>> [!ERROR] Error description
>>> Nested callout
>>> - example MD code
>>> - more stuff
>
>> [!col-md-2.5]
>> # Text annotation example:
>>> [!col]
>>>> [!col-md]
>>>> 1. Function name **a** should be more descriptive
>>>> 2. Remove **if/else** by using **||**
>>> 
>>>> [!col-md-2]
>>>> ```js
>>>> function a(word) {
>>>> 	if (word != null) {
>>>> 			console.log(word);
>>>> 	} else {
>>>> 		console.log("a");
>>>> 	}
>>>> }
>>>> let msg = "Hello, world!";
>>>> console.log(msg)

### Border example

[](https://github.com/tnichols217/obsidian-columns#border-example)

`````col
borderColor=purple
borderPadding=10
===

```col-md
borderColor=red
borderStyle=dashed
===
## Column 0
```
```col-md
borderPadding=5px
===
## Column 1
```

````col
borderColor=#d60da1
borderPadding=20
borderRadius=5em
===

```col-md
borderColor=teal
borderWidth=5px
===
### Nested Column 0
```
```col-md
borderColor=orange
===
### Nested Column 1
```
````

`````


## List Structure

- !!!col
	- 1
		# Column 1
		Some example text in column 1
		- some lists inside as well
			- more list items
	- 2
		# Column 2
		This column is twice as wide because it has the value set to 2
		- !!!col
			- 1
			  ## Column 2-1
			  You can even have columns inside columns!
			- 1
			  ## Column 2-2
			  More example text inside this column




```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  `````col-md
>>  - example MD code
>>  - more stuff
>>  `````
``````

``````col-md
flexGrow=2.5
===
# Text annotation example:

`````col
````col-md
flexGrow=1
===
1. Function name **a** should be more descriptive

2. Remove **if/else** by using **||**
````

````col-md
flexGrow=2
===
```js
function a(word) {
	if (word != null) {
		console.log(word);
	} else {
		console.log("a");
	}
}
let msg = "Hello, world!";
console.log(msg)
```
````
`````
``````
```````


```````col
``````col-md
```ad-info
qdqdqds
```
``````
``````col-md
```ad-info
qdqdqds
```
``````
``````col-md
```ad-info
qdqdqds
```
``````
```````



```````col
``````col-md
 `BUTTON[insert-problem-daily-PC]`
``````
``````col-md
 `BUTTON[insert-problem-daily-PC]`
``````
``````col-md
 `BUTTON[insert-problem-daily-PC]`
``````
```````



```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  `````col-md
>>  - example MD code
>>  - more stuff
>>  `````
``````

``````col-md
flexGrow=2.5
===
# Text annotation example:

`````col
````col-md
flexGrow=1
===
1. Function name **a** should be more descriptive

2. Remove **if/else** by using **||**
````

````col-md
flexGrow=2
===
```js
function a(word) {
	if (word != null) {
		console.log(word);
	} else {
		console.log("a");
	}
}
let msg = "Hello, world!";
console.log(msg)
```
````
`````
``````
```````