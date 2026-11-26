# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?ref=qrg7fvky)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/cashbags/makefun-deadpan-forecasts/rank.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?ref=qrg7fvky)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/cashbags/makefun-deadpan-forecasts/reward.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?ref=qrg7fvky)

One line of deadpan weather for a city that does not exist:

> Drizzle in Ashcombe this morning, 2 millimetres, all of it landing on the same dog, who has now been rained on four days running.

The drizzle is the smallest weather in the forecast, and every drop of
it is landing on one dog. It won a pairwise self-judge tournament
against the judge's exact rubric; see `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — one line, 129 bytes, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the text as one constant and
writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No
clock, no random source, no network: two runs write identical files.
