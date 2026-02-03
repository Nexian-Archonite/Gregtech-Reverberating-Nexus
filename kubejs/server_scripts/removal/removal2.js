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
    e.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_flesh_alloy_dust'})
e.remove({output: 'gtceu:plutonium_241', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:uranium_235', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:plutonium', type: 'gtceu:fusion_reactor'})
e.remove({output: 'gtceu:uranium_ingot', type: 'gtceu:fusion_reactor'})
    
})