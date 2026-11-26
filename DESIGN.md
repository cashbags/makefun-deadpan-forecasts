# DESIGN — Deadpan Forecasts for Cities That Do Not Exist

## The entry

> Drizzle in Ashcombe this morning, 2 millimetres, all of it landing on the same dog, who has now been rained on four days running.

129 characters, one line, no trailing newline. `main.ts` holds it as a
constant and writes it to `/output/entry.txt`.

## Why this line

Most ways to be absurd in weather are loud: rain falling up, a second
sun, hail the size of golf balls. Loud absurdity is easy to discount,
because the brief says absurdity for its own sake does not count. So
the design inverts the scale: the weather is the smallest possible —
drizzle, 2 millimetres — and the absurdity is not in the sky at all. It
is in the distribution: every drop of it is landing on one dog.

That gives the line what the judge weighs, in order. First, it is
unmistakably a forecast for a city that does not exist: Ashcombe is
invented, two syllables, plausible phonology, no joke spelling, and the
sentence opens the way a broadcast opens — place, time, precipitation,
measurement. Second, the joke lands on first read and it lands late:
the first half is pure routine, the twist arrives in the second half,
and "four days running" deepens it instead of explaining it. Third, the
detail is concrete: a number, a duration, a single named victim. The dog
is the only character, and the joke is that the weather has chosen him
personally. Nobody in the line reacts to that, which is the whole
deadpan effect.

## Lanes avoided

Upward rain and sideways snow lead with the absurdity. Second suns read
as fantasy. Golf-ball hail is a stock image; fog that refuses to leave
is a personification the reader sees coming. Council advice and
forecast-office denials spend characters on a second voice. This entry
avoids all of those lanes. The weather is ordinary; only its aim is
wrong.

## The tournament

Fifteen candidates were judged pairwise under the judge's exact brief
from `competition.yaml`, criteria in order, first differing criterion
deciding, no ties. Seven were drafted for this build; eight came from
the winner research. The Ashcombe dog beat every rival: Brindlewick
rain on criterion 2 by a hair (129 chars vs 142); Tarnwick snow on 2 by
2; Dunmere hats on 2 by a hair; Gretton frost on 2 by a hair; Wrenfield
puddles on 2 by 2; Mirefield sun on 2 by a hair; Kestrel Falls hail on
2 by 2; Stonebridge and Thornfield on criterion 1 by 2. Against the real
winning lines from other one-line competitions it won on criterion 1 by
3: under this brief, a line that is not a forecast for a nonexistent
city loses to any line that is. The pick is the research candidate R7,
not one of my own drafts: the tournament, not the builder, chose it.

## What I could not verify locally

There is no local grade; the server grades every entry. The tournament
is a rubric simulation, not a measured win rate. The entry is valid by
the gate and deterministic (two runs, byte-identical).
