//packmode: hard
ServerEvents.recipes(e => {
    e.remove({id: 'create:item_application/andesite_casing_from_log'})
    e.remove({id: 'create:item_application/andesite_casing_from_wood'})
    e.remove({id: 'create:item_application/brass_casing_from_log'})
    e.remove({id: 'create:item_application/brass_casing_from_wood'})
    e.remove({id: 'create:item_application/copper_casing_from_log'})
    e.remove({id: 'create:item_application/copper_casing_from_wood'})
    e.remove({id: 'create:mixing/brass_ingot'})
    e.remove({id: 'create:crafting/materials/andesite_alloy_block'})

    e.remove({id: 'gtceu:shaped/basic_circuit_board'})

    e.remove({id: 'minecraft:furnace'})
    e.remove({id: 'minecraft:crafting_table'})
    e.remove({id: 'quark:building/crafting/furnaces/blackstone_furnace'})
    e.remove({id: 'quark:building/crafting/furnaces/deepslate_furnace'})
    e.remove({id: 'quark:building/crafting/furnaces/cobblestone_furnace'})
    e.remove({id: 'quark:building/crafting/furnaces/mixed_furnace'})

    e.remove({id: 'minecraft:wooden_axe'})
    e.remove({ output: "gtceu:resistor" })

    e.remove({ output: "create:rose_quartz"})
    e.remove({ output: "create:polished_rose_quartz"})
    e.remove({ output: "create:electron_tube"})
    e.remove({id: 'undergarden:catalyst'})

})