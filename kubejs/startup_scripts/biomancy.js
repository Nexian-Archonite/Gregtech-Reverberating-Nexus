GTCEuStartupEvents.registry('gtceu:material_icon_set', bio => {
bio.create('flesh_alloy')
})

GTCEuStartupEvents.registry('gtceu:material', bio => {
bio.create('flesh_alloy')
.components('2x tungsten_steel', 'collagen')
.iconSet(GTMaterialIconSet.getByName("flesh_alloy"))
.ingot()
.color(0xffffff)
.flags(gear, small_gear, plates, rod, no_decomp)
.ignoredTagPrefixes(TagPrefix.block)

// Deinococcus radiodurans
bio.create('martian_bacterial_sludge')
.color(0xD43D2A)
.liquid(293)

bio.create('refined_sentience')
.color(0x7de8f0)
.liquid(283)

bio.create('sentient_alloy')
.components('3x flesh_alloy', '2x iridium', '1x refined_sentience')
.color(0x7de8f0).secondaryColor(0xa1e4e4).iconSet(GTMaterialIconSet.getByName("flesh_alloy"))
.ingot()
.flags(gear, small_gear, plates, rod, no_decomp)
.ignoredTagPrefixes(TagPrefix.block)

})

StartupEvents.registry('item', bio => {
const componentsmuahaha = ['capacitor', 'resistor', 'transistor', 'inductor', 'diode']
componentsmuahaha.forEach(parp => {
bio.create(`gtceu:sentient_smd_${parp}`)
.textureJson({ layer0: `gtceu:item/sentient_circuitry/sentient_smd_${parp}`})
.displayName(`Sentient SMD ${parp.charAt(0).toUpperCase() + parp.slice(1)}`)
.tooltip('§7Sentient Electronic Component')
})

const biologicalComponents = [
    'cpu',
    'nano_cpu',
    'qubit_cpu',
    'nand_memory',
    'nor_memory',
    'ram',
]

const acronyms = new Set(['cpu', 'nand', 'nor', 'ram'])

biologicalComponents.forEach(type => {
    const name = type.split('_')
        .map(word => acronyms.has(word) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1))
        .join(' ')
    bio.create(`gtceu:b_${type}_chip`)
        .textureJson({ layer0: `gtceu:item/sentient_circuitry/b_${type}_chip` })
        .displayName(`Biological ${name} Chip`)
    bio.create(`gtceu:b_${type}_wafer`)
        .textureJson({ layer0: `gtceu:item/sentient_circuitry/b_${type}_wafer` })
        .displayName(`Biological ${name} Wafer`)
})

bio.create('gtceu:biological_wafer')
.textureJson({ layer0: `gtceu:item/sentient_circuitry/biological_wafer` })


bio.create('gtceu:sentient_processor')
.tag('gtceu:circuits')
.tag('gtceu:circuits/zpm')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_processor'})
.displayName('Sentient Processor')

bio.create('gtceu:sentient_processor_assembly')
.tag('gtceu:circuits')
.tag('gtceu:circuits/uv')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_processor_assembly'})
.displayName('Sentient Processor Assembly')

bio.create('gtceu:sentient_processor_computer')
.tag('gtceu:circuits')
.tag('gtceu:circuits/uhv')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_processor_computer'})
.displayName('Sentient Supercomputer')

bio.create('gtceu:sentient_processor_mainframe')
.tag('gtceu:circuits')
.tag('gtceu:circuits/uev')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_processor_mainframe', layer1: 'gtceu:item/sentient_circuitry/neuron_line'})
.displayName('Sentient Mainframe')

bio.create('gtceu:sentience_processing_unit')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_processing_unit'})
//change the naming and I'll ruin your life
bio.create('gtceu:sentient_circuit_board')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_circuit_board'})

bio.create('gtceu:sentience_printed_circuit_board')
.textureJson({ layer0: 'gtceu:item/sentient_circuitry/sentient_printed_circuit_board'})

bio.create('gtceu:neuron_dish')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/neuron_dish'})

bio.create('gtceu:sentient_neuron_dish')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/sentience_dish'})

bio.create('gtceu:biological_boule')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/biological_boule'})

bio.create('gtceu:biological_soc')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/biological_soc'})
.displayName('Biological SoC')

bio.create('gtceu:biological_soc_wafer')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/biological_soc_wafer'})
.displayName('Biological SoC Wafer')

/* bio.create('gtceu:living_data_disk')
.textureJson({layer0: 'gtceu:item/sentient_circuitry/living_disk'}) */
})