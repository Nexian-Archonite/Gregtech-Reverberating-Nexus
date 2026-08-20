// priority: 999
const Ihide = [
    "ars_nouveau:source_gem",
    "ars_nouveau:source_gem_block",
    "botania:mana_powder",
    "ae2:fluix_dust",
    "ae2:fluix_crystal",
    "ae2:certus_quartz_crystal",
    "ae2:charged_certus_quartz_crystal",
    "ae2:certus_quartz_dust",
    "ae2:fluix_block",
    /ad_astra:iron_.*/,
    /ad_astra:steel_.*/,
    /ad_astra:(raw_)?desh_.*/,
    /ad_astra:(raw_)?ostrum_.*/,
    /ad_astra:(raw_)?calorite_.*/,
    /ad_astra:etrionic_.*/,
    /ad_astra:(.*_)?etrium_.*/,
    /ad_astra:raw_.*_(block)?/,
    /ad_astra:(?!.*(engine|tank)).*(iron|steel|desh|ostrum|calorite)_.*/,
    "botania:manasteel_ingot",
    "botania:manasteel_nugget",
    "botania:manasteel_block",
    "minecraft:netherite_scrap",
    "gtceu:energium_dust",
    /alltheores:.*/,
    /allthemodium:.*_(clump|shard|crystal|alloy_dust)/,
    /allthemodium:dirty_.*/
    
]

ServerEvents.tags('item', event =>{


event.add('forge:flour', 'gtceu:wheat_dust')
event.add('botania:manasteel_ingots', 'gtceu:manasteel_ingot')
event.add('botania:mana_dusts', 'gtceu:mana_dust')
event.add('botania:manasteel_blocks', 'gtceu:manasteel_block')
event.add('botania:manasteel_nuggets', 'gtceu:manasteel_nugget')
event.add('ae2:all_fluix', 'gtceu:fluix_gem')

event.removeAllTagsFrom('ars_nouveau:source_gem_block')
event.removeAllTagsFrom('ars_nouveau:source_gem')
event.removeAllTagsFrom('botania:manasteel_block')
event.removeAllTagsFrom('botania:mana_powder')

event.add('forge:spawn_eggs', /minecraft:.*_spawn_egg/)

event.add('c:hidden_from_recipe_viewers', /ad_astra:.*_(nugget|ingot|plate|rod)/)
event.add('forge:tools/sickle', /gtceu:.*_scythe/)
event.add('forge:tools/sickle', /.*:.*(_.*)?_hoe/)

event.add('minecraft:mineable/hoe', /botania:.*(_.*)?_mystical_flower/)

event.removeAllTagsFrom('ad_astra:oil_bucket')
event.removeAllTagsFrom('ad_astra:hydrogen_bucket')
event.removeAllTagsFrom(/alltheores:.*/)
event.removeAllTagsFrom(/allthemodium:.*_(clump|shard|crystal|alloy_dust)/)
event.removeAllTagsFrom(/allthemodium:dirty_.*/)

event.add('forge:dusts/arcane', 'irons_spellbooks:arcane_essence')

event.add('ad_astra:calorite_plates', 'gtceu:venian_calorite_plate')
event.add('ad_astra:ostrum_plates', 'gtceu:martian_ostrum_plate')
event.add('ad_astra:desh_plates', 'gtceu:lunar_desh_plate')

event.add('ad_astra:calorite_ingots', 'gtceu:venian_calorite_ingot')
event.add('ad_astra:ostrum_ingots', 'gtceu:martian_ostrum_ingot')
event.add('ad_astra:desh_ingots', 'gtceu:lunar_desh_ingot')

event.add('ad_astra:calorite_blocks', 'gtceu:venian_calorite_block')
event.add('ad_astra:ostrum_blocks', 'gtceu:martian_ostrum_block')
event.add('ad_astra:desh_blocks', 'gtceu:lunar_desh_block')

event.add('forge:nuggets/draconium', 'gtceu:purified_draconium_nugget')
event.add('forge:nuggets/draconium_awakened', 'gtceu:awakened_draconium_nugget')

event.add('forge:ingots/draconium', 'gtceu:purified_draconium_ingot')
event.add('forge:ingots/draconium_awakened', 'gtceu:awakened_draconium_ingot')

event.add('forge:storage_blocks/draconium', 'gtceu:purified_draconium_block')
event.add('forge:storage_blocks/awakened_draconium', 'gtceu:awakened_draconium_block')
})

ServerEvents.tags('item', event => {
  // the world largest tag decimation begins here:
  const rmdir = (input, type) => {
    
    
    mods.forEach(mod => {
      event.removeAllTagsFrom(`${mod}:${input}_${type}`)
    })
  }
  

  materials.forEach(mat => {
    types.forEach(type => {
      rmdir(mat, type)
      rmdir(type, mat)
    })
  })


 





Ihide.forEach((item) => event.add("c:hidden_from_recipe_viewers", item))
event.remove('c:hidden_from_recipe_viewers', /ad_astra:(steel|desh|ostrum|calorite)_(tank|engine)/)
})

ServerEvents.tags('fluid', event => {
event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:harmonical_fuel')
event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:harmonical_fuel')
event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:cryostatic-antilithide')
event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:cryostatic-antilithide')
event.removeAllTagsFrom('ad_astra:fuel')
})
