| Index | Dataset B | Dataset A | Difference | Note |
|---|---|---|---|---|
| 0 | 5 | 5 | — | Cycle |
| 1 | 31 | 66 | ✔ | Changed |
| 2 | 224 | 160 | ✔ | Changed |
| 3 | 14 | 14 | — | 14 = 2h spear / 15 = staff baseTypeId |
| 4 | 12 | 12 | — | SubTypeID |
| 5 | 7 | 7 | — | 7 = Einzigartig |
| 6 | 128 | 128 | — | 0 oder 128 = keine Fraktion |
| 7 | 5 | 142 | ✔ | ImplicitRoll1 |
| 8 | 96 | 110 | ✔ | ImplicitRoll2 |
| 9 | 66 | 124 | ✔ | ImplicitRoll3 |
| 10 | 1 | 1 | — | UniqueIdentifier /256 |
| 11 | 151 | 151 | — | UniqueIdentifier mod 256 |
| 12 | 123 | 137 | ✔ | Changed |
| 13 | 55 | 224 | ✔ | Changed |
| 14 | 163 | 4 | ✔ | Changed |
| 15 | 149 | 88 | ✔ | Changed |
| 16 | 70 | 191 | ✔ | Changed |
| 17 | 49 | 161 | ✔ | Changed |
| 18 | 146 | 126 | ✔ | Changed |
| 19 | 118 | 164 | ✔ | Changed |
| 20 | 8 | 12 | ✔ | Weavers Will / 0 = 0, deleting this line makes the item a helmet |


- Essence Weaver
    - two handed spear
    - unique obsidian Lance
    - 94/94 melee damage
    - 132/137/94-194
- gain a stack of elemental Essence
- at 9 stacks of elemental
- stats on this item are tripled for cast
- 60/61/50-70 spell damage
- 144/148/110-180 increased elemental damage
- 43/44/34-52 increased mana regen
```
"name": "Obsidian Lance",
"displayName": "",
"subTypeID": 12,
"implicits": [
    {
        "property": 0,
        "specialTag": 0,
        "tags": 512,
        "type": 0,
        "implicitValue": 94.0,
        "implicitMaxValue": 94.0
    },
    {
        "property": 1,
        "specialTag": 8,
        "tags": 512,
        "type": 0,
        "implicitValue": 0.94,
        "implicitMaxValue": 1.94
    }
]
```

Maximum gold: 2147483647 (int) -> if you pick up more after using this number it simply wont increase