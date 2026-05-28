ServerEvents.recipes(e => {
    const recipeTypes = ["compressing", "nasa_workbench", "fuel_refinery", "alloying", "cryo_freezing"]
    const machineIds = ["compressor", "nasa_workbench", "fuel_refinery", "etrionic_blast_furnace", "cryo_freezer"]
    
    recipeTypes.forEach((type) => {
        e.remove({type: `ad_astra:${type}`})
    })

    machineIds.forEach((type) => {
        e.remove({output: `ad_astra:${type}`})
    })

e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:extruder'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:alloy_smelter'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:forge_hammer'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:macerator'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:lathe'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:compressor'})
e.remove({output: /gtceu:(tiny_|small_|double_)?flesh_alloy_.*/, type: 'gtceu:bender'})
e.remove({id: 'gtceu:smelting/smelt_dust_flesh_alloy_to_ingot'})
e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_flesh_alloy_dust'})
e.remove({output: 'gtceu:plutonium_241', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:uranium_235', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:plutonium', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:uranium', type: 'gtceu:fusion_reactor'})
e.remove({id: 'gtceu:shaped/iron_door'})
e.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
e.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
e.remove({id: 'create:crafting/materials/zinc_ingot_from_decompacting'})
e.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
e.remove({output: 'ars_nouveau:source_gem'})
e.remove({id: 'gtceu:shapeless/dust_bronze'})

e.remove({id: 'create:crafting/kinetics/millstone'})
e.remove({id: 'create:crafting/kinetics/mechanical_press'})
e.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
e.remove({id: 'create:crafting/kinetics/belt_connector'})
e.remove({id: 'create:crafting/kinetics/cogwheel'})
e.remove({id: 'create:crafting/kinetics/large_cogwheel'})
e.remove({id: 'create:crafting/kinetics/large_cogwheel_from_little'})
e.remove({id: 'create:deploying/large_cogwheel'})
e.remove({id: 'create:deploying/cogwheel'})
e.remove({id: 'create:mechanical_crafting/crushing_wheel'})
e.remove({id: 'create:crafting/kinetics/shaft'})
e.remove({id: 'create:cutting/andesite_alloy'})
e.remove({id: 'create:crafting/kinetics/gearbox'})
e.remove({id: 'create:crafting/kinetics/vertical_gearbox'})
e.remove({id: 'create:crafting/kinetics/mechanical_pump'})
e.remove({id: 'create:crafting/kinetics/encased_fan'})

e.remove({id: 'create:crafting/kinetics/mechanical_saw'})

e.remove({id: 'create:pressing/desh_ingot'})
e.remove({id: 'create:pressing/ostrum_ingot'})
e.remove({id: 'create:pressing/calorite_ingot'})
e.remove({id: 'gtceu:large_chemical_reactor/naquadah_separation'})

e.remove({id: 'gtceu:fusion_reactor/mercury_and_magnesium_to_uranium_238_plasma'})
e.remove({id: 'gtceu:fusion_reactor/gold_and_aluminium_to_uranium_235_plasma'})
e.remove({id: 'gtceu:fusion_reactor/xenon_and_zinc_to_plutonium_239_plasma'})
e.remove({id: 'gtceu:fusion_reactor/krypton_and_cerium_to_plutonium_241_plasma'})
})