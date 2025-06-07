Richtig, ich sage, dass die Datei Code zur Interpretation der Artikeldaten enthält, aber aufgrund des ganzen UI-Zeugs darin kann ich nicht sagen, welches welches ist.

Dies ist, was ich bisher für das Elementarray (den Datenwert) habe:
```
1 – Zyklusnummer (Interner Wert, derzeit 2)
2 – Ausrüstungssteckplatzindex für Gegenstand (normaler Gegenstand)
3 – Artikelbasistyp
4 – (0-4 = Anzahl der Affixe, 7 = Einzigartig, 8 = Set, 9 = 1 oder mehr Affixe, die vorhanden sind, weil es ein Weber-Gegenstand ist oder über Affix-Slots mit legendärem Potenzial verfügt)
5 – (0 oder 128 = keine Fraktion, 1–10 ist der Fraktionsrang)
6 – Implizite
7 – Implizite
8 – Implizite
9 – Schmiedepotenzial
10 – Anzahl der Affixe oder 133, wenn der Artikel einen versiegelten Affix hat
```
Bei anderen Gegenständen als Einzigartig/Set/Legendär sind die Affixdaten ein Tripel, das einen Wert für die Stufe, die Affix-ID und die Größe enthält. Die Stufe scheint ein Vielfaches von 16 zu sein, aber oft werden kleine Zahlen hinzugefügt. Ich bin immer noch dabei herauszufinden, warum das so ist.

Bearbeiten: Der Offset gilt normalerweise für ein klassenspezifisches Affix, 2 für „Level of \[Skill\]“-Affixe und 1 für Nicht-Skill-Affixe. Bei Idolen wird der Stufenwert verwendet, um mehr als 256 Werte für Affixe zuzulassen. Beispielsweise ist bei magierweiten 3x1-Idol-Präfixen das Dreifache (0,174,Magnitude) das Präfix „Frostbite Duration“ und (2,174,Magnitude) ist „Ward“. pro Sekunde, während du auf deiner Glyphe der Herrschaft stehst.

Um die Stärke zu ermitteln, schauen Sie sich die Bereichswerte für jede Stufe eines Affixes an. Nehmen wir „erhöhter Prozentsatz des Nahkampfschadens“. Der Wertebereich für Stufe 1 liegt zwischen 6 % und 12 %. Das sind 7 diskrete Werte. Sie dividieren 256 durch 7 und erhalten ein Delta von 36,5. Wenn das Spiel also einen Gegenstand mit diesem Affix für Stufe 1 würfelt, generiert es einen Zufallswert zwischen 0 und 255. Nehmen wir an, es würfelt eine 100. Dieser Wert liegt zwischen 2 und 3 Deltas (zwischen 36,5 * 2 und 36,5 * 3). Das ergibt also eine Größenordnung von 8 %. Dieses System ist etwas seltsam, aber es fügt etwas zusätzliches RNG hinzu und bietet die Möglichkeit der Gleitkomma-Mathematik bei der Berechnung der Formeln. Wenn Sie diese Werte maximieren möchten, verwenden Sie grundsätzlich 255.

Außerdem habe ich Folgendes für den Container-ID-Wert des Artikels berechnet:
```
  2-12 = ausgerüstete Ausrüstung (2-4, 6-12 beim Tragen einer 2H-Waffe)
  1 = Artikel im Inventar
  23 = Gegenstand in Schmiede
  24 = Letzte in der Schmiede ausgerüstete Rune
  25 = Letzte in der Schmiede ausgerüstete Glyphe
  29 = Idole
  32 = Artikel auf der Registerkarte „Lieferantenrückkauf“.
  33-?? = Segen
  68-79 = Objektive in Teleskopen
  ```
  Hoffe, das ist hilfreich!

Bearbeiten: Dies sind Daten aus den Charakterspeicherdateien. In den Artikeldaten in der Stash-Datei werden keine Container-IDs angezeigt.

4 – (0 = Gewöhnlich, 2 = Magie, 3 = Erhaben, 4 = Selten, 7 = Einzigartig, 8 = Set, 9 = Weber)4 – (0 = Gewöhnlich, 2 = Magie, 3 = Erhaben, 4 = Selten, 7 = Einzigartig, 8 = Set, 9 = Weber)  
Tier 1 = 0 Tier 2 = 16 Tier 3 = 32 Tier 4 = 48 Tier 5 = 64 Tier 6 = 80 Tier 7 = 96

Beispiel: Ich will STR an meinem Item hinzufügen oder upgraden. Oben hab ich geschrieben, dass der Offset +1 ist, also bräuchte ich für ein Tier 7 STR den Wert 97. Die meisten dieser Daten hab ich durch Beobachten der Stats meiner Items, die ich bearbeiten wollte, oder durch Trial and Error rausgefunden.

Wenn du verrückt sein willst, könntest du den Mod über die Shard-Infos bestimmen, die in der STASH_0-Speicherdatei gespeichert sind. In der Klammer "savedShards" sind all deine Affix-Shards, die du im Spiel gefunden hast. Wenn du also die Anzahl der Shards im Spiel kennst, kannst du hier danach suchen.

Ein Eintrag sieht so aus: {"shardType":610,"quantity":2} Wichtig ist hier, dass der Wert nicht größer als 255 sein kann und deshalb muss es einen Offset im Affix-Code für die Tier-Werte geben.

610 würde mit Offset +1 zu: 610-256=354 354-256=98 mit Offset +2 Also, wenn du diesen Affix als Tier 7 mit den höchsten Werten haben willst, wären die Affix-Daten auf dem Item: 98,98,255

```
"data":[2,102,0], // Erschütternd
"data":[2,102,1], // Verfeinerung
"data":[2,102,2], // Entfernung
"data":[2,102,3], // Entdeckung
"data":[2,102,4], // Gestaltung
"data":[2,102,5], // Ascendence
"data":[2,102,7], // Forschung
"data":[2,103,0], // Hoffnung
"data":[2,103,1], // Chaos
"data":[2,103,2], // Reihenfolge
"data":[2,103,3], // Verzweiflung
"data":[2,103,4], // Einblick
```