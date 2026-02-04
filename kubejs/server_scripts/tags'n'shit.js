// priority: 999
var Ihide = [
    "notreepunching:flint_axe",
    "notreepunching:flint_pickaxe",
    "notreepunching:flint_hoe",
    "notreepunching:flint_shovel",
    "notreepunching:flint_knife",
    "notreepunching:iron_knife",
    "notreepunching:gold_knife",
    "notreepunching:diamond_knife",
    "notreepunching:netherite_knife",
    "ars_nouveau:source_gem",
    "ars_nouveau:source_gem_block",
    "create:zinc_ingot",
    "create:brass_ingot",
    "create:zinc_nugget",
    "create:brass_nugget",
    "create:andesite_alloy_block",
    "botania:mana_powder",
    "create:iron_sheet",
    "create:copper_sheet",
    "create:brass_sheet",
    "ae2:fluix_dust",
    "ae2:fluix_crystal",
    "ae2:certus_quartz_crystal",
    "ae2:charged_certus_quartz_crystal",
    "ae2:certus_quartz_dust",
    "ae2:fluix_block",
    /ad_astra:iron_.*/,
    /ad_astra:steel_.*/,
    /ad_astra:desh_.*/,
    /ad_astra:ostrum_.*/,
    /ad_astra:calorite_.*/,
    /ad_astra:etrionic_.*/,
    /ad_astra:(.*_)?etrium_.*/,
    /ad_astra:raw_.*_(block)?/,
    /ad_astra:(?!.*(engine|tank)).*(iron|steel|desh|ostrum|calorite)_.*/,
    "botania:manasteel_ingot",
    "botania:manasteel_nugget",
    "botania:manasteel_block",
    "createaddition:electrum_ingot",
    "createaddition:electrum_nugget",
    "createaddition:electrum_block",
    "minecraft:netherite_scrap",
    "gtceu:energium_dust"
]

ServerEvents.tags('item', event =>{


event.add('forge:ingots/infinity', 'avaritia:infinity_ingot')
event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
event.add('forge:flour', 'gtceu:wheat_dust')
event.add('forge:dusts/wheat', 'create:wheat_fluor')
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

event.add('notreepunching:weak_saws', /gtceu:.*_axe/)

event.add('c:hidden_from_recipe_viewers', /ad_astra:.*_(nugget|ingot|plate|rod)/)
event.add('forge:tools/sickle', /gtceu:.*_scythe/)
event.add('forge:tools/sickle', /.*:.*(_.*)?_hoe/)

event.add('minecraft:mineable/hoe', /botania:.*(_.*)?_mystical_flower/)

event.removeAllTagsFrom('ad_astra:oil_bucket')
event.removeAllTagsFrom('ad_astra:hydrogen_bucket')


})

ServerEvents.tags('item', event => {
  // the world largest tag decimation begins here:
  var rmdir = (input, type) => {
    
    
    mods.forEach(mod => {
      event.removeAllTagsFrom(`${mod}:${input}_${type}`)
    })
  }
  

  materials.forEach(mat => {
    types.forEach(type => {
      rmdir(mat, type)
    })
  })


 





Ihide.forEach((item) => event.add("c:hidden_from_recipe_viewers", item))
event.remove('c:hidden_from_recipe_viewers', /ad_astra:(steel|desh|ostrum|calorite)_(tank|engine)/)
})