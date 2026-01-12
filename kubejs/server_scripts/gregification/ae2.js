ServerEvents.recipes(ae => {
const GTM = ae.recipes.gtceu
GTM.polarizer(('ae2guide'))
.itemInputs('book')
.itemOutputs('ae2:guide')
.EUt(1)
.duration(1)

var AE2hit = {
    'engineering': 'minecraft:diamond',
    'calculation': 'gtceu:certus_quartz_gem',
    'logic': 'minecraft:gold_ingot',
    'silicon': 'gtceu:silicon_ingot',
    'accumulation': 'megacells:sky_steel_ingot',
    'quantum': 'advanced_ae:quantum_alloy'
}

Object.entries(AE2hit).forEach(([type, material]) => {
    let duration = 40
    let EUt = 480
    
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

var cellhousings = {
   "mega_item_cell_housing": "gtceu:naquadah_ingot",
   "mega_fluid_cell_housing": "gtceu:iridium_ingot",
   "item_cell_housing": "gtceu:stainless_steel_ingot",
   "fluid_cell_housing": "gtceu:source_attuned_copper_ingot",
   "mega_source_cell_housing": "gtceu:metallurgically_enhanced_source_ingot",
   "source_cell_housing": "gtceu:source_gem",
   "disk_housing": "gtceu:purified_netherite_ingot",
   "mega_item_disk_housing": "gtceu:hssg_ingot",
   "fluid_disk_housing": "gtceu:red_steel_ingot",
   "mega_fluid_disk_housing": "gtceu:osmiridium_ingot"
}

Object.entries(cellhousings).forEach(([x, y]) => {
    if (x === 'mega_source_cell_housing') {
        ae.recipes.ars_nouveau.enchanting_apparatus(
            [
                y,
                y,
                y,
                "ars_nouveau:manipulation_essence",
                "ars_nouveau:manipulation_essence",
                "ars_nouveau:manipulation_essence",
                "gtceu:metallurgically_enhanced_source_block",
                "gtceu:metallurgically_enhanced_source_block"
            ],
            "arseng:source_cell_housing",
            "megacells:mega_source_cell_housing",
            4000,
            true)
        GTM.energistics_assembler((`${x}_assembly`))
        .itemInputs(`3x ${y}`, '2x ae2:quartz_vibrant_glass')
        .inputFluids('gtceu:redstone 432')
        .itemOutputs(new RegExp(`^.*:${x}$`))
        .duration(80)
        .EUt(8192)} 
        else if (x === 'source_cell_housing') {
        ae.recipes.ars_nouveau.enchanting_apparatus(
            [
                y,
                y,
                y,
                y,
                "ars_nouveau:manipulation_essence",
                "ars_nouveau:manipulation_essence",
                "gtceu:source_block",
                "gtceu:source_block"
            ],
            "ae2:item_cell_housing",
            "arseng:source_cell_housing",
            1000,
            true
        )
        GTM.energistics_assembler((`${x}_assembly`))
        .itemInputs(`3x ${y}`, '2x ae2:quartz_vibrant_glass')
        .inputFluids('gtceu:redstone 432')
        .itemOutputs(new RegExp(`^.*:${x}$`))
        .duration(80)
        .EUt(2048)} else

        GTM.energistics_assembler((`${x}_assembly`))
        .itemInputs(`3x ${y}`, '2x ae2:quartz_vibrant_glass')
        .inputFluids('gtceu:redstone 432')
        .itemOutputs(new RegExp(`^.*:${x}$`))
        .duration(80)
        .EUt(128)
})
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

GTM.energistics_assembler(('1k_component_assembly'))
.itemInputs('2x #forge:chests/wooden', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/lv')
.itemOutputs('ae2:cell_component_1k')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(200)

GTM.energistics_assembler(('4k_component_assembly'))
.itemInputs('2x ae2:cell_component_1k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/mv')
.itemOutputs('ae2:cell_component_4k')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(400)

GTM.energistics_assembler(('16k_component_assembly'))
.itemInputs('2x ae2:cell_component_4k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/hv')
.itemOutputs('ae2:cell_component_16k')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(800)

GTM.energistics_assembler(('64k_component_assembly'))
.itemInputs('2x ae2:cell_component_16k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/ev')
.itemOutputs('ae2:cell_component_64k')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(1600)

GTM.energistics_assembler(('256k_component_assembly'))
.itemInputs('2x ae2:cell_component_64k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/iv')
.itemOutputs('ae2:cell_component_256k')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(3200)

GTM.energistics_assembler(('1m_component_assembly'))
.itemInputs('2x ae2:cell_component_256k', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/luv')
.itemOutputs('megacells:cell_component_1m')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(6400)

GTM.energistics_assembler(('4m_component_assembly'))
.itemInputs('2x megacells:cell_component_1m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/zpm')
.itemOutputs('megacells:cell_component_4m')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(12800)

GTM.energistics_assembler(('16m_component_assembly'))
.itemInputs('2x megacells:cell_component_4m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uv')
.itemOutputs('megacells:cell_component_16m')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(25600)

GTM.energistics_assembler(('64m_component_assembly'))
.itemInputs('2x megacells:cell_component_16m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uhv')
.itemOutputs('megacells:cell_component_64m')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(51200)

GTM.energistics_assembler(('256m_component_assembly'))
.itemInputs('2x megacells:cell_component_64m', '4x gtceu:charged_certus_quartz_gem', 'ae2:logic_processor', '#gtceu:circuits/uev')
.itemOutputs('megacells:cell_component_256m')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(25600)

GTM.energistics_assembler(('quantum_storage_component'))
.itemInputs('2x ae2:cell_component_256k', '4x advanced_ae:quantum_alloy', 'advanced_ae:quantum_processor', '#gtceu:circuits/iv')
.itemOutputs('advanced_ae:quantum_storage_component')
.inputFluids('gtceu:redstone 576')
.EUt(128)
.duration(3200)

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

var cellcanningdotcom = {
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

var diskcanningdottv = {
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

var modlistforuhhhhappliedenergisticsreplacement3000tm = ['ae2', 'ae2things', 'ae2_mega_things', 'expanded_ae', 'megacells', 'expatternprovider', 'advanced_ae']
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


GTM.energistics_assembler('reaction_chamber')
.itemInputs('12x gtceu:fluix_dust', '8x gtceu:echoing_fluxum_steel_plate', 'ae2:condenser', 'gtceu:ev_lapotronic_battery')
.inputFluids('gtceu:polytetrafluoroethylene 1152')
.itemOutputs('advanced_ae:reaction_chamber')
.EUt(2048)
.duration(100)

GTM.energistics_assembler(('fluix_glass_cable'))
.itemInputs('ae2:quartz_fiber', '2x gtceu:fluix_gem')
.itemOutputs('6x ae2:fluix_glass_cable')
.duration(20)
.EUt(32)

GTM.fluid_solidifier(('fluix_glass_covering'))
.itemInputs('ae2:fluix_glass_cable')
.inputFluids('gtceu:polyvinyl_butyral 25')
.itemOutputs('ae2:fluix_covered_cable')
.duration(20)
.EUt(32)

GTM.energistics_assembler(('fluix_smart_cable'))
.itemInputs('4x ae2:fluix_covered_cable', '#gtceu:circuits/ulv', 'gtceu:redstone_plate')
.itemOutputs('4x ae2:fluix_smart_cable')
.duration(20)
.EUt(128)

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

GTM.chemical_bath(('covered_fluix_cable'))
var colorsofae2cables = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'light_blue', 'pink', 'magenta', 'purple']
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

Object.entries(cellcanningdotcom).forEach(([component, types]) => {
    const size = component.replace('cell_component_', '')
    
    if (component.endsWith('m')) {
        types.forEach(type => {
            if (type === 'dual') return
            
            GTM.energistics_assembler(`${component}_${type}_portable_cell_assembly`)
                .itemInputs(`megacells:mega_${type}_cell_housing`, `megacells:${component}`, 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv')
                .itemOutputs(`megacells:portable_${type}_cell_${size}`)
                .duration(200)
                .EUt(2048)

            GTM.centrifuge(`${component}_${type}_portable_cell_disassembly`)
                .itemOutputs(`megacells:mega_${type}_cell_housing`, `megacells:${component}`, 'ae2:dense_energy_cell', '2x #gtceu:circuits/iv')
                .itemInputs(`megacells:portable_${type}_cell_${size}`)
                .duration(200)
                .EUt(128)
        })
    } else if (component.endsWith('k')) {
        types.forEach(type => {
            if (type === 'dual') return

            GTM.energistics_assembler(`${component}_${type}_portable_cell_assembly`)
                .itemInputs(new RegExp(`.*:${type}_cell_housing`), `ae2:${component}`, 'ae2:energy_cell', '2x #gtceu:circuits/hv')
                .itemOutputs(new RegExp(`.*:portable_${type}_cell_${size}`))
                .duration(200)
                .EUt(512)

                GTM.centrifuge(`${component}_${type}_portable_cell_disassembly`)
                .itemOutputs(new RegExp(`.*:${type}_cell_housing`), `ae2:${component}`, 'ae2:energy_cell', '2x #gtceu:circuits/hv')
                .itemInputs(new RegExp(`.*:portable_${type}_cell_${size}`))
                .duration(200)
                .EUt(32)
        })
    }
})


})
