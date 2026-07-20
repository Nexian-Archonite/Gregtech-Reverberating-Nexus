ServerEvents.recipes(e => {
    e.remove({input: 'iron_block', type: 'ae2:inscriber'})
    e.remove({not: {mod: 'gtceu'}, output: 'gtceu:andesite_alloy_ingot'})

    e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_echoite'})
    e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_tainted_calcite_concentrate'})

    e.remove({id: 'gtceu:mixer/energium_dust'})

    e.remove({id: 'ars_nouveau:source_gem_block'})
    e.remove({id: 'ars_nouveau:source_gem_block_2'})
    e.remove({id: 'botania:mana_ring'})

    e.remove({output: /gtceu:.*_solar_panel/})
    e.remove({id: 'minecraft:ancient_debris'})
    e.remove({mod: /(ad_astra|ad_astra_giselle_addon|create|)/, input: /ad_astra:.*(iron|steel|desh|ostrum|calorite)_.*/})
    e.remove({mod: /(ad_astra|ad_astra_giselle_addon|create|)/, output: /ad_astra:.*(iron|steel|desh|ostrum|calorite)_.*/})

    e.remove({type: 'crafting_shaped', output: /ad_astra:(steel|desh|ostrum|calorite)_(engine|tank)/})


    e.remove({output: /(ae2|megacells):(spatial_)?cell_component_.*/})
    e.remove({output: /(?!gtceu).*:(.*_)?(cell|disk)_housing/})
    e.remove({output: /(?!gtceu).*:(.*_)?(cell|disk)_(drive_)?.*/})
    e.remove({id: 'ae2:network/crafting/molecular_assembler'})
    e.remove({id: 'ae2:network/blocks/interfaces_interface'})
    e.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    e.remove({output: /ae2:(inscriber|charger)/})
    e.remove({id: 'advanced_ae:quantum_alloy'})
    e.remove({id: 'advanced_ae:quantum_alloy_plate'})
    e.remove({id: 'advanced_ae:quantum_storage_component'})
    e.remove({id: 'advanced_ae:quantum_processor_print_eae'})
    e.remove({id: 'advanced_ae:quantum_processor_chamber'})
    e.remove({id: 'advanced_ae:quantum_infusion'})
    e.remove({mod: 'ae2', output: /ae2:.*_(smart|covered|glass|covered_dense|smart_dense)_cable/})
    e.remove({mod: 'minecraft', output: /avaritia:(infinity|neutronium|neutron)_.*/})
    e.remove({mod: 'avaritia'})
    e.remove({type: 'ae2:inscriber'})
    e.remove({type: 'ae2:charger'})
    e.remove({id: /gtceu:forming_press\/ae2_processor_.*_print(2)?/})
    e.remove({id: 'arseng:mega_source_cell_housing'})
    e.remove({id: 'arseng:source_cell_housing'})
    e.remove({id: /arseng:source_storage_cell_.*/})
    e.remove({id: /ae2:network\/cells\/.*_storage_cell_.*_storage/})
    e.remove({id: /ae2:network\/cells\/.*_storage_cell_.*/})
    e.remove({id: /ae2:network\/crafting\/.*_cpu_crafting_storage/})
    e.remove({id: /ae2:network\/cells\/.*_cell_housing/})

    e.remove({id: 'ae2things:cells/disk_housing'})
    e.remove({id: 'ae2:network/crafting/cpu_crafting_monitor'})
    e.remove({id: 'ae2:network/crafting/cpu_crafting_accelerator'})
    e.remove({id: /gtceu:assembler\/ae2_processor_.*/})
    e.remove({id: /ae2things:cells\/disk_drive_.*(_storage)?/})

    e.remove({output: 'botania:manasteel_ingot'})
    e.remove({output: 'botania:manasteel_nugget'})

    e.remove({id: 'advanced_ae:reactionchamber'})
    e.remove({id: 'minecraft:netherite_ingot'})
    e.remove({id: 'gtceu:smelting/smelt_dust_netherite_to_ingot'})
    e.remove({type: 'createaddition:rolling'})
    e.remove({id: 'ad_astra:engine_frame'})

    e.remove({id: 'draconicevolution:compress/awakened_draconium_ingot'})
    e.remove({id: 'draconicevolution:decompress/awakened_draconium_ingot'})
    e.remove({id: 'draconicevolution:decompress/awakened_draconium_nugget'})
    e.remove({id: 'draconicevolution:compress/awakened_draconium_block'})

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

    e.remove({id: 'draconicevolution:awakened_draconium_block'})
})