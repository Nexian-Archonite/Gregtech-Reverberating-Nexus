ServerEvents.recipes(e => {
    e.remove({input: 'iron_block', type: 'ae2:inscriber'})

    e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_echoite'})
    e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_tainted_calcite_concentrate'})

    e.remove({id: 'gtceu:mixer/energium_dust'})

    e.remove({id: 'ars_nouveau:imbuement_amethyst_block'})
    e.remove({id: 'ars_nouveau:source_gem_block_2'})
    e.remove({id: 'botania:mana_ring'})

    e.remove({output: /gtceu:.*_solar_panel/})
    e.remove({id: 'minecraft:ancient_debris'})
    e.remove({mod: /(ad_astra|ad_astra_giselle_addon|)/, input: /ad_astra:.*(iron|steel|desh|ostrum|calorite)_.*/})
    e.remove({mod: /(ad_astra|ad_astra_giselle_addon|)/, output: /ad_astra:.*(iron|steel|desh|ostrum|calorite)_.*/})

    e.remove({type: 'crafting_shaped', output: /ad_astra:(steel|desh|ostrum|calorite)_(engine|tank)/})

    e.remove({output: 'botania:manasteel_ingot'})
    e.remove({output: 'botania:manasteel_nugget'})

    e.remove({id: 'minecraft:netherite_ingot'})
    e.remove({id: 'gtceu:smelting/smelt_dust_netherite_to_ingot'})
    e.remove({id: 'ad_astra:engine_frame'})
    
    e.remove({id: 'ad_astra:desh_ingot'})
    e.remove({id: 'ad_astra:ostrum_ingot'})
    e.remove({id: 'ad_astra:calorite_ingot'})

    e.remove({id: 'ad_astra:desh_block'})
    e.remove({id: 'ad_astra:ostrum_block'})
    e.remove({id: 'ad_astra:calorite_block'})

    e.remove({input: 'ad_astra:raw_desh'})
    e.remove({input: 'ad_astra:raw_ostrum'})
    e.remove({input: 'ad_astra:raw_calorite'})

    e.remove({input: 'ad_astra:raw_desh_block'})
    e.remove({input: 'ad_astra:raw_ostrum_block'})
    e.remove({input: 'ad_astra:raw_calorite_block'})

    e.remove({id: 'ad_astra:coal_generator'})
    e.remove({id: 'ad_astra:water_pump'})
    e.remove({id: 'ad_astra:solar_panel'})
    e.remove({id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'})
    e.remove({id: 'gtceu:shaped/bronze_primitive_blast_furnace'})

        const recipeTypes = ["compressing", "nasa_workbench", "fuel_refinery", "alloying", "cryo_freezing"]
    const machineIds = ["compressor", "nasa_workbench", "fuel_refinery", "etrionic_blast_furnace", "cryo_freezer"]
    
    recipeTypes.forEach((type) => {
        e.remove({type: `ad_astra:${type}`})
    })

    machineIds.forEach((type) => {
        e.remove({output: `ad_astra:${type}`})
    })

    e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/})
    e.remove({output: /gtceu:(tiny_|small_|double_)?sentient_alloy_.*/})

    e.remove({output: 'gtceu:plutonium_241', type: 'gtceu:fusion_reactor'})
    e.remove({output: 'gtceu:uranium_235', type: 'gtceu:fusion_reactor'})
    e.remove({output: 'gtceu:plutonium', type: 'gtceu:fusion_reactor'})
    e.remove({output: 'gtceu:uranium', type: 'gtceu:fusion_reactor'})
    e.remove({id: 'gtceu:shaped/iron_door'})
    e.remove({output: 'ars_nouveau:source_gem'})

    e.remove({id: 'gtceu:large_chemical_reactor/naquadah_separation'})

    e.remove({id: 'gtceu:fusion_reactor/mercury_and_magnesium_to_uranium_238_plasma'})
    e.remove({id: 'gtceu:fusion_reactor/gold_and_aluminium_to_uranium_235_plasma'})
    e.remove({id: 'gtceu:fusion_reactor/xenon_and_zinc_to_plutonium_239_plasma'})
    e.remove({id: 'gtceu:fusion_reactor/krypton_and_cerium_to_plutonium_241_plasma'})

    e.remove({id: /gtceu:chemical_skips\/.*/})


    e.remove({id: 'gtceu:shaped/basic_circuit_board'})

    e.remove({ output: "gtceu:resistor" })

e.remove({output: /allthemodium:allthemodium_(sword|axe|pickaxe|shovel|hoe)/})
;['allthemodium', 'vibranium', 'unobtainium'].forEach(typaway => {
    e.remove({output: `allthemodium:${typaway}_gear`})
    e.remove({output: `allthemodium:${typaway}_plate`})
    e.remove({output: `allthemodium:${typaway}_dust`})
    e.remove({output: `allthemodium:${typaway}_rod`})
    e.remove({id: new RegExp(`allthemodium:smithing/${typaway}_(sword|axe|pickaxe|shovel|hoe)_smithing`)})
    
    
})
    e.remove({mod: 'alltheores'})
})