ServerEvents.recipes(ae => {
const GTM = ae.recipes.gtceu
GTM.polarizer(('ae2guide'))
.itemInputs('book')
.itemOutputs('ae2:guide')
.EUt(1)
.duration(1)

const AE2hit = {
    'engineering': 'minecraft:diamond',
    'calculation': 'gtceu:certus_quartz_gem',
    'logic': 'minecraft:gold_ingot',
    'silicon': 'gtceu:silicon_ingot',
    'accumulation': 'megacells:sky_steel_ingot',
    'quantum': 'advanced_ae:quantum_alloy'
}

Object.entries(AE2hit).forEach(([type, material]) => {
    const duration = 40
    const EUt = 480
    
    if (type === 'silicon') {
        duration = duration / 2  // 20
        EUt = EUt / 4            // 120
    } else if (type === 'quantum') {
        duration = duration * 2  // 80
        EUt = EUt * 4            // 1920
    }
    
    GTM.forming_press(`${type}_processor_forming`)
        .itemInputs(material)
        .notConsumable(new RegExp(`^(ae2|advanced_ae|megacells):${type}_(processor_)?press$`))
        .itemOutputs(new RegExp(`^(ae2|advanced_ae|megacells):printed_${type}(_processor)?$`))
        .duration(duration)
        .EUt(EUt)

    if (type !== 'silicon') {
    GTM.alloy_smelter(`${type}_processor_alloyment`)
    .itemInputs(new RegExp(`^(ae2|advanced_ae|megacells):printed_${type}(_processor)?$`), 'ae2:printed_silicon')
    .itemOutputs(new RegExp(`^(ae2|advanced_ae|megacells):${type}_processor$`))
    .duration(duration)
    .EUt(EUt)
}})

ae.shapeless('expandedae:mega_dual_cell_housing', [
'megacells:mega_item_cell_housing',
'megacells:mega_fluid_cell_housing'
])
ae.shapeless('expandedae:dual_cell_housing', [
'ae2:item_cell_housing',
'ae2:fluid_cell_housing'
])
GTM.polarizer(('certus_charging'))
.itemInputs('gtceu:certus_quartz_gem')
.itemOutputs('gtceu:charged_certus_quartz_gem')
.EUt(32)
.duration(200)

GTM.polarizer(('certus_dust_charging'))
.itemInputs('gtceu:certus_quartz_dust')
.itemOutputs('gtceu:charged_certus_quartz_dust')
.EUt(32)
.duration(200)

GTM.polarizer(('certus_block_charging'))
.itemInputs('gtceu:certus_quartz_block')
.itemOutputs('gtceu:charged_certus_quartz_block')
.EUt(128)
.duration(200)

GTM.implosion_compressor(('singularity_shattering'))
.itemInputs('2x ae2:singularity', 'gtceu:industrial_tnt')
.itemOutputs('advanced_ae:shattered_singularity', 'advanced_ae:quantum_infused_dust')
.EUt(128)
.duration(800)


GTM.chemical_reactor(('quantum_infusion'))
.perTick(true)
.outputFluids('advanced_ae:quantum_infusion_source 10')
.inputFluids('water 100')
.perTick(false)
.itemOutputs('advanced_ae:quantum_infused_dust')
.itemInputs('2x gtceu:echoing_fluxum_steel_dust', 'advanced_ae:shattered_singularity')
.EUt(2048)
.duration(400)

GTM.chemical_vat(('quantum_alloy'))
.itemInputs('4x gtceu:echoing_fluxum_steel_dust', '2x advanced_ae:quantum_infused_dust')
.perTick(true)
.inputFluids('advanced_ae:quantum_infusion_source 10')
.outputFluids('gtceu:solvent_wash_waste 10')
.perTick(false)
.itemOutputs('2x advanced_ae:quantum_alloy')
.EUt(2048)
.duration(400)
.addData("Temp", 1200)
.addData("HeatPressure", 1)

GTM.alloy_smelter(('quantum_alloy_plate'))
.itemInputs('4x advanced_ae:quantum_alloy', 'gtceu:dense_netherite_plate')
.itemOutputs('advanced_ae:quantum_alloy_plate')
.EUt(2048)
.duration(400)

const cellcanningdotcom = {
    "cell_component_1k": ["item", "fluid", "source", "dual"],
    "cell_component_4k": ["item", "fluid", "source", "dual"],
    "cell_component_16k": ["item", "fluid", "source", "dual"],
    "cell_component_64k": ["item", "fluid", "source", "dual"],
    "cell_component_256k": ["item", "fluid", "source", "dual"],
    "cell_component_1m": ["item", "fluid", "source", "dual"],
    "cell_component_4m": ["item", "fluid", "source", "dual"],
    "cell_component_16m": ["item", "fluid", "source", "dual"],
    "cell_component_64m": ["item", "fluid", "source", "dual"],
    "cell_component_256m": ["item", "fluid", "source", "dual"]
}

const diskcanningdottv = {
    "cell_component_1k": ["item", "fluid"],
    "cell_component_4k": ["item", "fluid"],
    "cell_component_16k": ["item", "fluid"],
    "cell_component_64k": ["item", "fluid"],
    "cell_component_256k": ["item", "fluid"],
    "cell_component_1m": ["item", "fluid"],
    "cell_component_4m": ["item", "fluid"],
    "cell_component_16m": ["item", "fluid"],
    "cell_component_64m": ["item", "fluid"],
    "cell_component_256m": ["item", "fluid"]
}

Object.entries(cellcanningdotcom).forEach(([component, types]) => {
    const size = component.replace('cell_component_', '')
    if (component.endsWith('m')) {
    types.forEach(type => {
        const housingPrefix = type === 'dual' ? 'mega_' : 'mega_'
        
        // For dual, explicitly match mega_dual_cell_housing only
        const housingPattern = type === 'dual'
            ? /.*:mega_dual_cell_housing$/
            : new RegExp(`.*:${housingPrefix}${type}_cell_housing`)
        
        GTM.canner(`${size}_${type}_canning`)
            .itemInputs(housingPattern, `megacells:${component}`)
            .itemOutputs(new RegExp(`.*:${type}_storage_cell_${size}`))
            .EUt(2048)
            .duration(100)

        GTM.packer(`${size}_${type}_recycling`)
            .itemOutputs(housingPattern, `megacells:${component}`)
            .itemInputs(new RegExp(`.*:${type}_storage_cell_${size}`))
            .EUt(512)
            .duration(100)
    })
} else if (component.endsWith('k')) {
        types.forEach(type => {
            GTM.canner(`${size}_${type}_canning`)
                .itemInputs(new RegExp(`.*:${type}_cell_housing`), `ae2:${component}`)
                .itemOutputs(new RegExp(`.*:${type}_storage_cell_${size}`))
                .EUt(512)
                .duration(100)

            GTM.packer(`${size}_${type}_recycling`)
                .itemOutputs(new RegExp(`.*:${type}_cell_housing`), `ae2:${component}`)
                .itemInputs(new RegExp(`.*:${type}_storage_cell_${size}`))
                .EUt(512)
                .duration(100)
        })
    }
})

Object.entries(diskcanningdottv).forEach(([component, types]) => {
    const size = component.replace('cell_component_', '')
    
    if (component.endsWith('m')) {
        types.forEach(type => {
            const housingItem = `ae2_mega_things:mega_${type}_disk_housing`
            const driveItem = `ae2_mega_things:${type}_disk_drive_${size}`
            
            GTM.canner(`${size}_${type}_disk_canning`)
                .itemInputs(housingItem, `megacells:${component}`)
                .itemOutputs(driveItem)
                .EUt(8192)
                .duration(100)
        
            GTM.packer(`${size}_${type}_disk_recycling`)
                .itemOutputs(housingItem, `megacells:${component}`)
                .itemInputs(driveItem)
                .EUt(512)
                .duration(100)
        })
    } else if (component.endsWith('k')) {
        types.forEach(type => {
            const housingItem = type === 'item' 
                ? 'ae2things:disk_housing'
                : 'ae2_mega_things:fluid_disk_housing'
            
            const driveItem = type === 'item'
                ? `ae2things:disk_drive_${size}`
                : `ae2_mega_things:fluid_disk_drive_${size}`

            GTM.canner(`${size}_${type}_disk_canning`)
                .itemInputs(housingItem, `ae2:${component}`)
                .itemOutputs(driveItem)
                .EUt(2048)
                .duration(100)
        
            GTM.packer(`${size}_${type}_disk_recycling`)
                .itemOutputs(housingItem, `ae2:${component}`)
                .itemInputs(driveItem)
                .EUt(512)
                .duration(100)
        })
    }
})

const modlistforuhhhhappliedenergisticsreplacement3000tm = ['ae2', 'ae2things', 'ae2_mega_things', 'expanded_ae', 'megacells', 'expatternprovider', 'advanced_ae']
modlistforuhhhhappliedenergisticsreplacement3000tm.forEach((mods) => {
ae.replaceInput(
    {mod: mods},
    'minecraft:iron_ingot',
    "gtceu:echoing_fluxum_steel_plate"
)

ae.replaceInput(
    {mod: mods},
    'minecraft:gold_ingot',
    "gtceu:electrum_plate"
)
})


GTM.fluid_solidifier(('fluix_glass_covering'))
.itemInputs('ae2:fluix_glass_cable')
.inputFluids('gtceu:polyvinyl_butyral 25')
.itemOutputs('ae2:fluix_covered_cable')
.duration(20)
.EUt(32)

GTM.packer(('fluix_smart_cable_compressing'))
.itemInputs('4x ae2:fluix_smart_cable')
.itemOutputs('ae2:fluix_smart_dense_cable')
.circuit(4)
.duration(20)
.EUt(128)

GTM.packer(('fluix_smart_cable_decompressing'))
.itemOutputs('4x ae2:fluix_smart_cable')
.itemInputs('ae2:fluix_smart_dense_cable')
.circuit(1)
.duration(20)
.EUt(128)

GTM.packer(('fluix_covered_cable_compressing'))
.itemInputs('4x ae2:fluix_covered_cable')
.itemOutputs('ae2:fluix_covered_dense_cable')
.circuit(4)
.duration(20)
.EUt(128)

GTM.packer(('fluix_covered_cable_decompressing'))
.itemOutputs('4x ae2:fluix_covered_cable')
.itemInputs('ae2:fluix_covered_dense_cable')
.circuit(1)
.duration(20)
.EUt(128)

const colorsofae2cables = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'light_blue', 'pink', 'magenta', 'purple']
colorsofae2cables.forEach((color) => {
GTM.chemical_bath((`${color}_glass_cable_dying`))
.itemInputs('ae2:fluix_glass_cable')
.inputFluids(`gtceu:${color}_dye 25`)
.itemOutputs(`ae2:${color}_glass_cable`)
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_glass_cable_bleaching`))
.itemInputs(`ae2:${color}_glass_cable`)
.inputFluids(`gtceu:acetone 25`)
.itemOutputs('ae2:fluix_glass_cable')
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_covered_cable_dying`))
.itemInputs('ae2:fluix_covered_cable')
.inputFluids(`gtceu:${color}_dye 25`)
.itemOutputs(`ae2:${color}_covered_cable`)
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_covered_cable_bleaching`))
.itemInputs(`ae2:${color}_covered_cable`)
.inputFluids(`gtceu:acetone 25`)
.itemOutputs('ae2:fluix_covered_cable')
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_smart_cable_dying`))
.itemInputs('ae2:fluix_smart_cable')
.inputFluids(`gtceu:${color}_dye 25`)
.itemOutputs(`ae2:${color}_smart_cable`)
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_smart_cable_bleaching`))
.itemInputs(`ae2:${color}_smart_cable`)
.inputFluids(`gtceu:acetone 25`)
.itemOutputs('ae2:fluix_smart_cable')
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_covered__dense_cable_dying`))
.itemInputs('ae2:fluix_covered_cable')
.inputFluids(`gtceu:${color}_dye 100`)
.itemOutputs(`ae2:${color}_covered_cable`)
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_covered__dense_cable_bleaching`))
.itemInputs(`ae2:${color}_covered_cable`)
.inputFluids(`gtceu:acetone 100`)
.itemOutputs('ae2:fluix_covered_cable')
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_smart__dense_cable_dying`))
.itemInputs('ae2:fluix_smart_cable')
.inputFluids(`gtceu:${color}_dye 100`)
.itemOutputs(`ae2:${color}_smart_cable`)
.duration(20)
.EUt(32)

GTM.chemical_bath((`${color}_smart_dense_cable_bleaching`))
.itemInputs(`ae2:${color}_smart_cable`)
.inputFluids(`gtceu:acetone 100`)
.itemOutputs('ae2:fluix_smart_cable')
.duration(20)
.EUt(32)
})

const portableCells = [
    // k-tier
    ['ae2:portable_item_cell_1k', 'ae2:item_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['ae2:portable_fluid_cell_1k', 'ae2:fluid_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['arseng:portable_source_cell_1k', 'arseng:source_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],

    ['ae2:portable_item_cell_4k', 'ae2:item_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['ae2:portable_fluid_cell_4k', 'ae2:fluid_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['arseng:portable_source_cell_4k', 'arseng:source_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],

    ['ae2:portable_item_cell_16k', 'ae2:item_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['ae2:portable_fluid_cell_16k', 'ae2:fluid_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['arseng:portable_source_cell_16k', 'arseng:source_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],

    ['ae2:portable_item_cell_64k', 'ae2:item_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['ae2:portable_fluid_cell_64k', 'ae2:fluid_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['arseng:portable_source_cell_64k', 'arseng:source_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],

    ['ae2:portable_item_cell_256k', 'ae2:item_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['ae2:portable_fluid_cell_256k', 'ae2:fluid_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],
    ['arseng:portable_source_cell_256k', 'arseng:source_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'],

    // m-tier
    ['megacells:portable_item_cell_1m', 'megacells:mega_item_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_fluid_cell_1m', 'megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_source_cell_1m', 'megacells:mega_source_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],

    ['megacells:portable_item_cell_4m', 'megacells:mega_item_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_fluid_cell_4m', 'megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_source_cell_4m', 'megacells:mega_source_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],

    ['megacells:portable_item_cell_16m', 'megacells:mega_item_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_fluid_cell_16m', 'megacells:mega_fluid_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_source_cell_16m', 'megacells:mega_source_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],

    ['megacells:portable_item_cell_64m', 'megacells:mega_item_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_fluid_cell_64m', 'megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_source_cell_64m', 'megacells:mega_source_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],

    ['megacells:portable_item_cell_256m', 'megacells:mega_item_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_fluid_cell_256m', 'megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'],
    ['megacells:portable_source_cell_256m', 'megacells:mega_source_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv']
]

portableCells.forEach(([cell, housing, component, energyCell, circuit]) => {
    GTM.centrifuge(cell)
        .itemInputs(cell)
        .itemOutputs(housing, component, energyCell, circuit)
        .EUt(512)
        .duration(200)
})

//Applied Enigma from here on
const appliedAssembly = (outputId, outputCount, fluidMultiplier, inputs, energy, duration, circuit, extraFluid) => {
    const recipe = GTM.applied_enigma(outputId)
        .itemInputs(inputs)
        .inputFluids(`gtceu:hypothermic_helium_3_plasma ${10 * fluidMultiplier}`)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .EUt(energy)
        .duration(duration)

    if (circuit != null) recipe.circuit(circuit)
    if (extraFluid != null) recipe.inputFluids(extraFluid)

        const recipe2 = GTM.energistics_assembler(outputId)
        .itemInputs(inputs)
        .inputFluids(`gtceu:hypothermic_helium_3_plasma ${10 * fluidMultiplier}`)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .EUt(energy)
        .duration(duration)

    if (circuit != null) recipe2.circuit(circuit)
    if (extraFluid != null) recipe2.inputFluids(extraFluid)
}

// cell housings

appliedAssembly('ae2:item_cell_housing', 1, 16, ['3x gtceu:stainless_steel_ingot', '2x ae2:quartz_vibrant_glass'], 128, 80)
appliedAssembly('ae2:fluid_cell_housing', 1, 16, ['3x gtceu:source_attuned_copper_ingot', '2x ae2:quartz_vibrant_glass'], 128, 80)
appliedAssembly('ae2things:disk_housing', 1, 16, ['3x gtceu:purified_netherite_ingot', '2x ae2:quartz_vibrant_glass'], 128, 80)
appliedAssembly('arseng:source_cell_housing', 1, 16, ['3x gtceu:source_gem', '2x ae2:quartz_vibrant_glass'], 2048, 80)


// cell components
appliedAssembly('ae2:cell_component_1k', 1, 1, ['2x #forge:chests/wooden', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/lv'], 128, 200, null, 'gtceu:redstone 576')
appliedAssembly('ae2:cell_component_4k', 1, 10, ['2x ae2:cell_component_1k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/mv'], 128, 400, null, 'gtceu:redstone 576')
appliedAssembly('ae2:cell_component_16k', 1, 100, ['2x ae2:cell_component_4k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/hv'], 128, 800, null, 'gtceu:redstone 576')
appliedAssembly('ae2:cell_component_64k', 1, 200, ['2x ae2:cell_component_16k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/ev'], 128, 1600, null, 'gtceu:redstone 576')
appliedAssembly('ae2:cell_component_256k', 1, 400, ['2x ae2:cell_component_64k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/iv'], 128, 3200, null, 'gtceu:redstone 576')


// misc assembler recipes
appliedAssembly('advanced_ae:reaction_chamber', 1, 1, ['12x gtceu:fluix_dust', '8x gtceu:echoing_fluxum_steel_plate', 'ae2:condenser', 'gtceu:ev_lapotronic_battery'], 2048, 100, null, 'gtceu:polytetrafluoroethylene 1152')
appliedAssembly('ae2:fluix_glass_cable', 16, 1, ['ae2:quartz_fiber', '2x gtceu:fluix_gem'], 32, 20)
appliedAssembly('ae2:fluix_smart_cable', 12, 1, ['4x ae2:fluix_covered_cable', '#gtceu:circuits/ulv', 'gtceu:redstone_plate'], 128, 20)
appliedAssembly('ae2:interface', 1, 1, ['4x gtceu:echoing_fluxum_steel_plate', 'ae2:annihilation_core', 'ae2:formation_core', '2x #forge:glass'], 512, 200)
appliedAssembly('ae2:pattern_provider', 1, 1, ['4x gtceu:echoing_fluxum_steel_plate', 'ae2:annihilation_core', 'ae2:formation_core', '2x crafting_table'], 512, 200)
appliedAssembly('ae2:molecular_assembler', 1, 1, ['4x gtceu:double_echoing_fluxum_steel_plate', '2x ae2:quartz_glass', 'ae2:annihilation_core', 'ae2:formation_core', 'crafting_table'], 512, 400)


/* k-tier portable cells
appliedAssembly('ae2:portable_item_cell_1k', 1, 1, ['ae2:item_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('ae2:portable_fluid_cell_1k', 1, 1, ['ae2:fluid_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('arseng:portable_source_cell_1k', 1, 1, ['arseng:source_cell_housing', 'ae2:cell_component_1k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)

appliedAssembly('ae2:portable_item_cell_4k', 1, 1, ['ae2:item_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('ae2:portable_fluid_cell_4k', 1, 1, ['ae2:fluid_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('arseng:portable_source_cell_4k', 1, 1, ['arseng:source_cell_housing', 'ae2:cell_component_4k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)

appliedAssembly('ae2:portable_item_cell_16k', 1, 1, ['ae2:item_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('ae2:portable_fluid_cell_16k', 1, 1, ['ae2:fluid_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('arseng:portable_source_cell_16k', 1, 1, ['arseng:source_cell_housing', 'ae2:cell_component_16k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)

appliedAssembly('ae2:portable_item_cell_64k', 1, 1, ['ae2:item_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('ae2:portable_fluid_cell_64k', 1, 1, ['ae2:fluid_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('arseng:portable_source_cell_64k', 1, 1, ['arseng:source_cell_housing', 'ae2:cell_component_64k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)

appliedAssembly('ae2:portable_item_cell_256k', 1, 1, ['ae2:item_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('ae2:portable_fluid_cell_256k', 1, 1, ['ae2:fluid_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
appliedAssembly('arseng:portable_source_cell_256k', 1, 1, ['arseng:source_cell_housing', 'ae2:cell_component_256k', 'ae2:energy_cell', '2x #gtceu:circuits/hv'], 512, 200)
*/




//only AE recipes
const appliedEnigma = (outputId, outputCount, fluidMultiplier, inputs, energy, duration, circuit, extraFluid) => {
    const recipe = GTM.applied_enigma(outputId)
        .itemInputs(inputs)
        .inputFluids(`gtceu:hypothermic_helium_3_plasma ${10 * fluidMultiplier}`)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .EUt(energy)
        .duration(duration)
    
    if (circuit != null) recipe.circuit(circuit)
    if (extraFluid != null) recipe.inputFluids(extraFluid)
}

// cell housings
appliedEnigma('ae2_mega_things:mega_item_disk_housing', 1, 16, ['3x gtceu:hssg_ingot', '2x ae2:quartz_vibrant_glass'], 8192, 80)
appliedEnigma('ae2_mega_things:fluid_disk_housing', 1, 16, ['3x gtceu:red_steel_ingot', '2x ae2:quartz_vibrant_glass'], 128, 80)
appliedEnigma('ae2_mega_things:mega_fluid_disk_housing', 1, 16, ['3x gtceu:osmiridium_ingot', '2x ae2:quartz_vibrant_glass'], 8192, 80)
appliedEnigma('megacells:mega_source_cell_housing', 1, 16, ['3x gtceu:wizarding_steel_ingot', '2x ae2:quartz_vibrant_glass'], 8192, 80)
appliedEnigma('megacells:mega_item_cell_housing', 1, 16, ['3x gtceu:naquadah_ingot', '2x ae2:quartz_vibrant_glass'], 8192, 80)
appliedEnigma('megacells:mega_fluid_cell_housing', 1, 16, ['3x gtceu:iridium_ingot', '2x ae2:quartz_vibrant_glass'], 8192, 80)

// cell components
appliedEnigma('megacells:cell_component_1m', 1, 800, ['2x ae2:cell_component_256k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/luv'], 128, 6400, null, 'gtceu:redstone 576')
appliedEnigma('megacells:cell_component_4m', 1, 800, ['2x megacells:cell_component_1m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/zpm'], 128, 12800, null, 'gtceu:redstone 576')
appliedEnigma('megacells:cell_component_16m', 1, 800, ['2x megacells:cell_component_4m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uv'], 128, 25600, null, 'gtceu:redstone 576')
appliedEnigma('megacells:cell_component_64m', 1, 800, ['2x megacells:cell_component_16m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uhv'], 128, 51200, null, 'gtceu:redstone 576')
appliedEnigma('megacells:cell_component_256m', 1, 1600, ['2x megacells:cell_component_64m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uev'], 128, 102400, null, 'gtceu:redstone 576')
appliedEnigma('advanced_ae:quantum_storage_component', 1, 800, ['2x ae2:cell_component_256k', '4x advanced_ae:quantum_alloy', 'advanced_ae:quantum_processor', '#gtceu:circuits/iv'], 128, 3200, null, 'gtceu:redstone 576')

// misc assembler recipes
appliedEnigma('expatternprovider:ex_molecular_assembler', 1, 4, ['4x ae2:molecular_assembler', '4x gtceu:fluix_gem', 'ae2:engineering_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:ex_pattern_provider', 1, 4, ['ae2:pattern_provider', '2x ae2:capacity_card', 'ae2:engineering_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:ex_interface', 1, 4, ['#ae2:interface', '2x ae2:capacity_card', 'ae2:logic_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:ex_drive', 1, 6, ['ae2:drive', '2x #ae2:glass_cable', '2x gtceu:fluix_dust', 'ae2:capacity_card'], 8192, 100)
appliedEnigma('expatternprovider:ex_io_port', 1, 6, ['ae2:io_port', '4x ae2:speed_card', '2x ae2:engineering_processor', '2x ae2:logic_processor', 'ae2:io_port'], 8192, 100)

//upgrades
appliedEnigma('expatternprovider:pattern_provider_upgrade', 1, 4, ['2x ae2:capacity_card', 'ae2:engineering_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:interface_upgrade', 1, 4, ['2x ae2:capacity_card', 'ae2:logic_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:drive_upgrade', 1, 6, ['2x #ae2:glass_cable', '2x gtceu:fluix_dust', 'ae2:capacity_card'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:io_bus_upgrade', 1, 4, ['2x ae2:speed_card', 'ae2:calculation_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:pattern_terminal_upgrade', 1, 4, ['3x ae2:capacity_card', 'redstone_lamp'], 8192, 100, null, 'gtceu:redstone 144')

// processors (from forming_press loop,
appliedEnigma('ae2:engineering_processor', 4, 4, ['ae2:printed_engineering_processor', 'ae2:printed_silicon'], 480, 40, null, 'gtceu:redstone 144')
appliedEnigma('ae2:calculation_processor', 4, 4, ['ae2:printed_calculation_processor', 'ae2:printed_silicon'], 480, 40, null, 'gtceu:redstone 144')
appliedEnigma('ae2:logic_processor', 4, 4, ['ae2:printed_logic_processor', 'ae2:printed_silicon'], 480, 40, null, 'gtceu:redstone 144')
appliedEnigma('megacells:accumulation_processor', 4, 4, ['megacells:printed_accumulation_processor', 'ae2:printed_silicon'], 480, 40, null, 'gtceu:redstone 144')
appliedEnigma('advanced_ae:quantum_processor', 4, 4, ['advanced_ae:printed_quantum_processor', 'ae2:printed_silicon'], 1920, 80, null, 'gtceu:redstone 144')

/* m-tier portable cells
appliedEnigma('megacells:portable_item_cell_1m', 1, 1, ['megacells:mega_item_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_fluid_cell_1m', 1, 1, ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_source_cell_1m', 1, 1, ['megacells:mega_source_cell_housing', 'megacells:cell_component_1m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)

appliedEnigma('megacells:portable_item_cell_4m', 1, 1, ['megacells:mega_item_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_fluid_cell_4m', 1, 1, ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_source_cell_4m', 1, 1, ['megacells:mega_source_cell_housing', 'megacells:cell_component_4m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)

appliedEnigma('megacells:portable_item_cell_16m', 1, 1, ['megacells:mega_item_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_fluid_cell_16m', 1, 1, ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_source_cell_16m', 1, 1, ['megacells:mega_source_cell_housing', 'megacells:cell_component_16m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)

appliedEnigma('megacells:portable_item_cell_64m', 1, 1, ['megacells:mega_item_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_fluid_cell_64m', 1, 1, ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_source_cell_64m', 1, 1, ['megacells:mega_source_cell_housing', 'megacells:cell_component_64m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)

appliedEnigma('megacells:portable_item_cell_256m', 1, 1, ['megacells:mega_item_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_fluid_cell_256m', 1, 1, ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
appliedEnigma('megacells:portable_source_cell_256m', 1, 1, ['megacells:mega_source_cell_housing', 'megacells:cell_component_256m', 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv'], 2048, 200)
*/

//quantum computer / assembler matrix
appliedEnigma('expatternprovider:assembler_matrix_frame', 1, 4, ['4x lapis_lazuli', '4x gtceu:echoing_fluxum_steel_plate', 'ae2:quartz_glass'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:assembler_matrix_wall', 1, 4, ['4x #ae2:smart_cable', '4x quartz', 'ae2:logic_processor'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:assembler_matrix_pattern', 1, 4, ['6x ae2:blue_lumen_paint_ball', '2x #expatternprovider:extended_pattern_provider', 'expatternprovider:assembler_matrix_wall'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:assembler_matrix_crafter', 1, 4, ['6x ae2:purple_lumen_paint_ball', '2x expatternprovider:ex_molecular_assembler', 'expatternprovider:assembler_matrix_wall'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:assembler_matrix_speed', 1, 4, ['6x ae2:red_lumen_paint_ball', '2x ae2:speed_card', 'expatternprovider:assembler_matrix_wall'], 8192, 100, null, 'gtceu:redstone 144')
appliedEnigma('expatternprovider:assembler_matrix_glass', 1, 4, ['4x #ae2:smart_cable', '4x ae2:quartz_glass', 'ae2:logic_processor'], 8192, 100, null, 'gtceu:redstone 144')

appliedEnigma('advanced_ae:quantum_unit', 1, 4, ['ae2:crafting_unit', 'ae2:singularity', '2x advanced_ae:quantum_processor'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_accelerator', 1, 8, ['advanced_ae:quantum_unit', '4x advanced_ae:shattered_singularity', '4x advanced_ae:quantum_processor'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_core', 1, 16, ['advanced_ae:quantum_unit', '4x ae2:singularity', '2x advanced_ae:shattered_singularity', 'advanced_ae:quantum_accelerator', 'advanced_ae:quantum_storage_256'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_crafter', 1, 16, ['advanced_ae:quantum_unit', '4x advanced_ae:shattered_singularity', '2x advanced_ae:quantum_accelerator', '2x ae2:cell_component_64k'], 32768, 100, null)
appliedEnigma('advanced_ae:data_entangler', 1, 16, ['advanced_ae:quantum_unit', '4x advanced_ae:shattered_singularity', '3x advanced_ae:quantum_storage_256', '2x advanced_ae:quantum_core'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_multi_threader', 1, 16, ['advanced_ae:quantum_unit', '4x advanced_ae:quantum_accelerator', '3x advanced_ae:quantum_processor', '2x advanced_ae:quantum_core'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_storage_128', 1, 16, ['advanced_ae:quantum_unit', '4x advanced_ae:shattered_singularity', '4x advanced_ae:quantum_storage_component'], 32768, 100, null)
appliedEnigma('advanced_ae:quantum_storage_256', 1, 16, ['advanced_ae:quantum_unit', 'advanced_ae:shattered_singularity', '2x advanced_ae:quantum_storage_128'], 32768, 100, null)


const kTiers = ['1k', '4k', '16k', '64k', '256k']
const mTiers = ['1m', '4m', '16m', '64m', '256m']

const kTypes = [
    ['item', 'ae2:item_cell_housing'],
    ['fluid', 'ae2:fluid_cell_housing'],
    ['source', 'arseng:source_cell_housing']
]

const mTypes = [
    ['item', 'megacells:mega_item_cell_housing'],
    ['fluid', 'megacells:mega_fluid_cell_housing'],
    ['source', 'megacells:mega_source_cell_housing']
]

// K-tier portable cells
kTiers.forEach(tier => {
    kTypes.forEach(([type, housing]) => {
        const mod = type === 'source' ? 'arseng' : 'ae2'

        appliedAssembly(
            `${mod}:portable_${type}_cell_${tier}`,
            1,
            1,
            [
                housing,
                `ae2:cell_component_${tier}`,
                'ae2:energy_cell',
                '2x #gtceu:circuits/hv'
            ],
            512,
            200
        )
    })
})

// M-tier portable cells
mTiers.forEach(tier => {
    mTypes.forEach(([type, housing]) => {
        appliedEnigma(
            `megacells:portable_${type}_cell_${tier}`,
            1,
            1,
            [
                housing,
                `megacells:cell_component_${tier}`,
                'ae2:dense_energy_cell',
                '2x #gtceu:circuits/iv'
            ],
            2048,
            200
        )
    })
})


const quantumarmor = ['helmet', 'chestplate', 'leggings', 'boots']
quantumarmor.forEach(armor => {
appliedEnigma(`advanced_ae:quantum_${armor}`, 1, 32, ['4x advanced_ae:quantum_processor', 'ae2:wireless_access_point', `netherite_${armor}`, 'advanced_ae:quantum_alloy_plate', 'advanced_ae:quantum_storage_component'], 131072, 400, null)
})












})
