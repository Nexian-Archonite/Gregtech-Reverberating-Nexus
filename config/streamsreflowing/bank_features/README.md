# Streams Reflowing -- custom bank features

This pass plants YOUR chosen features on the land around water. The mod ships it EMPTY: it is always on but
does nothing until you add an entry here (or a datapack adds one). Every matching entry runs (there is no
override contest like bank styles have).

> **Full guide** (every field, more examples, datapacks, and bank styles too): see `GUIDE.md` in this
> folder. This file is the quick reference.

## How to add one
1. Look in `examples/example.json` for the shape. 2. Copy it UP into this folder (or write your own) and
edit it. 3. Relaunch. (Files in `examples/` are reference-only and are NOT loaded.)

## Where features place
On the bank around water, following your **bank placement** setting (`allWaterBanks`): along ALL water
(rivers/lakes/oceans + our streams) when that is on, or only our own streams when it is set to streams-only.
Each listed feature is run AT the bank column, on sturdy ground, exactly as written -- trees and big
features included (you chose them).

## Fields
- `features` : list of PLACED-feature ids to plant (e.g. `"minecraft:patch_pumpkin"`). Required.
- `biomes` : exact biome ids to include.   `tags` : biome tags the biome must ALL have to include.
  (If both are empty, the entry matches EVERYWHERE.)
- `exclude_biomes` / `exclude_tags` : biomes/tags to drop AFTER the include -- so "all overworld but not
  frozen" is `tags: ["minecraft:is_overworld"]` + `exclude_tags: ["minecraft:is_frozen_ocean", ...]`
  (plus any snowy biomes/tags you want out).
- `chance` : 0-100, the percent chance per matching near-water column. Default 100.

## Shipping entries with a mod / datapack
Put `<name>.json` files at `data/<namespace>/streamsreflowing/bank_feature/` in any datapack or mod jar --
they load automatically and are merged with this folder.
