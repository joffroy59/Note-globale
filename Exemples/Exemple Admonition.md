---
tags:
  - Exemple
---
# Compare Base / plugin Admonition

| Base | Admonition |


| Base                                                                                                                               | Admonition                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| > [!note]<br>> Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.<br>> | ```ad-note<br> Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.<br>``` |
| ```info<br>qsdqsdqsdq<br>```                                                                                                       | `public void main ()`                                                                                                                |
| qsdqsqdqds                                                                                                                         |                                                                                                                                      |
sdqdqds
# Base

## Callout

![[Callout]]

## Admonition

![[Admonition]]
## Admonition \"double\"

![[Admonition Double]]
## Admonition Callout

![[Admonition Callout]]

# Exemples

```ad-note

$\sum\frac{\pi}{\sigma}$

qsdqsdqsd
```

```ad-note
title: Title


$\sum\frac{\pi}{\sigma}$


qsdqsdqsd
```

```ad-note
title: Title
collapse: open

$\sum\frac{\pi}{\sigma}$


qsdqsdqsd
```

```ad-note
title: Title
collapse: close

$\sum\frac{\pi}{\sigma}$


qsdqsdqsd
```

```ad-note
icon: triforce

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

```ad-note
color: 200, 200, 200

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.

```

```ad-note
```



> [!note] 
> title: Title
> qsdqsdqsdqsd


# Multiple admonitions


`````ad-note
title: Nested Admonitions
collapse: open

Hello!

````ad-note
title: This admonition is nested.
This is a nested admonition!
````

````ad-note
title: This admonition is nested.
This is a nested admonition!


````

This is in the original admonition.
`````



# Nesting admonitions


`````ad-note
title: Nested Admonitions
collapse: open

Hello!

````ad-note
title: This admonition is nested.
This is a nested admonition!

```ad-warning
title: This admonition is closed.
collapse: close
```

````

This is in the original admonition.
`````


## Rendering code blocks

````ad-info

```ad-bug
title: I'm Nested!
~~~javascript
throw new Error("Oops, I'm a bug.");
~~~
```

```javascript
console.log("Hello!");
```


```shell
ls -l ~
```

````


# Import an admonition

No way 

dice: 1d20


# Basic 5e layout

```statblock
layout: Basic 5e Layout
image: "[[Ancient Black Dragon.jpg]]"
name: Ancient Black Dragon
size: Gargantuan
type: dragon
subtype:
alignment: chaotic evil
ac: 22
hp: 367
hit_dice: 21d20
speed: "40 ft., fly 80 ft., swim 40 ft."
stats: [27, 14, 25, 16, 15, 19]
saves:
  - dexterity: 9
  - constitution: 14
  - wisdom: 9
  - charisma: 11
skillsaves:
  - perception: 16
  - stealth: 9
senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
languages: "Common, Draconic"
damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks"
damage_immunities: "fire, poison"
condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained"
cr: 21
traits:
  - name: "Amphibious"
    desc: "The dragon can breathe air and water"
  - name: "Legendary Resistance (3/Day)"
    desc: "If the dragon fails a saving throw, it can choose to succeed instead."
actions:
  - name: Multiattack
    desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
  - name: Bite
    desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
  - name: Claw
    desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
  - name: Tail
    desc: "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
  - name: Frightful Presence
    desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
  - name: "Acid Breath (Recharge 5-6)"
    desc: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
reactions:
  - name: "Amphibious"
    desc: "The dragon can breathe air and water."
  - name: "Legendary Resistance (3/Day)"
    desc: "If the dragon fails a saving throw, it can choose to succeed instead."
legendary_actions:
  - name: "Detect"
    desc: "The dragon makes a Wisdom (Perception) check."
  - name: "Tail Attack"
    desc: "The dragon makes a tail attack."
  - name: "Wing Attack (Costs 2 Actions)"
    desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
spells:
  - The dragon is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared
  - Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp
  - 1st level (4 slots): detect magic, identify, mage armor*, magic missile
  - 2nd level (3 slots): detect thoughts, mirror image, misty step
  - 3rd level (3 slots): counterspell, fly, lightning bolt
  - 4th level (3 slots): banishment, fire shield, stoneskin*
  - 5th level (3 slots): cone of cold, scrying, wall of force
  - 6th level (1 slot): globe of invulnerability
  - 7th level (1 slot): teleport
  - 8th level (1 slot): mind blank*
  - 9th level (1 slot): time stop
  - "* The archmage casts these spells on itself before combat."
```




# vertical 



