ServerEvents.recipes(e => {
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
e.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
e.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
e.remove({id: 'create:crafting/materials/zinc_ingot_from_decompacting'})
e.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
e.remove({output: 'ars_nouveau:source_gem'})
e.remove({id: 'gtceu:shapeless/dust_bronze'})

e.remove({id: 'create:pressing/desh_ingot'})
e.remove({id: 'create:pressing/ostrum_ingot'})
e.remove({id: 'create:pressing/calorite_ingot'})
e.remove({id: 'gtceu:large_chemical_reactor/naquadah_separation'})

e.remove({id: 'gtceu:fusion_reactor/mercury_and_magnesium_to_uranium_238_plasma'})
e.remove({id: 'gtceu:fusion_reactor/gold_and_aluminium_to_uranium_235_plasma'})
e.remove({id: 'gtceu:fusion_reactor/xenon_and_zinc_to_plutonium_239_plasma'})
e.remove({id: 'gtceu:fusion_reactor/krypton_and_cerium_to_plutonium_241_plasma'})
})