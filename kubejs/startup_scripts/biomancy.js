StartupEvents.registry('block', bio => {
bio.create('gtceu:flesh_alloy_casing')
.textureAll('gtceu:block/casings/solid/flesh_alloy/casing')
.displayName('§4Flesh Alloy Casing')
.soundType('sculk')
.hardness(13)
.resistance(25)
.requiresTool(true)
.tagBlock('minecraft:mineable/pickaxe')
.tagBlock('minecraft:needs_diamond_tool')
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', bio => {
bio.create('flesh_alloy')
})

GTCEuStartupEvents.registry('gtceu:material', bio => {
bio.create('flesh_alloy')
.components('2x tungsten_steel', 'collagen')
.iconSet(GTMaterialIconSet.getByName("flesh_alloy"))
.ingot()
.color(0xffffff)
.flags(gear, small_gear, plates, rod, no_decomp)
.ignoredTagPrefixes(TagPrefix.block)

// Deinococcus radiodurans
bio.create('martian_bacterial_sludge')
.color(0xD43D2A)
.liquid(293)

bio.create('refined_sentience')
.color(0x7de8f0)
.liquid(283)

bio.create('sentient_alloy')
.components('3x flesh_alloy', '2x iridium', '1x refined_sentience')
.color(0x7de8f0).secondaryColor(0xa1e4e4).iconSet(GTMaterialIconSet.getByName("flesh_alloy"))
.ingot()
.flags(gear, small_gear, plates, rod, no_decomp)
.ignoredTagPrefixes(TagPrefix.block)
})