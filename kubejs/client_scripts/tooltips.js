JEIEvents.addItems(event => {
event.add('gtceu:overworld_marker')
event.add('gtceu:the_nether_marker')
event.add('gtceu:the_end_marker')
})

ItemEvents.tooltip(event => {

event.addAdvanced('gtceu:sentient_microchip_processor', (item, advanced, text) => {
    text.add(1, Text.of('§7The power of a toddler in the palm of your hands'))
    text.add(2, Text.of('§2LuV-Tier Circuit'))
})

event.addAdvanced('gtceu:sentient_processor', (item, advanced, text) => {
    text.add(1, Text.of('§7Whatever it is, it regrets to be what it is'))
    text.add(2, Text.of('§2ZPM-Tier Circuit'))
})

event.addAdvanced('gtceu:sentient_processor_assembly', (item, advanced, text) => {
    text.add(1, Text.of('§7It feels, therefore it suffers'))
    text.add(2, Text.of('§2UV-Tier Circuit'))
})

event.addAdvanced('gtceu:sentient_processor_computer', (item, advanced, text) => {
    text.add(1, Text.of('§7Can run DOOM (2016)'))
    text.add(2, Text.of('§2UHV-Tier Circuit'))
})

event.addAdvanced('gtceu:sentient_processor_mainframe', (item, advanced, text) => {
    text.add(1, Text.of('§7The Ultimate Biomechanical being, comprised of a Chiplet and a Nightmare'))
    text.add(2, Text.of('§2UEV-Tier Circuit'))
})

event.addAdvanced('gtceu:sentient_circuit_board', (item, advanced, text) => {
    text.add(1, Text.of('§7The Board that houses §3Sentience'))
})

event.addAdvanced('gtceu:sentience_printed_circuit_board', (item, advanced, text) => {
    text.add(1, Text.of('§7The Board that houses §3Sentience'))
})

event.addAdvanced('gtceu:sentience_processing_unit', (item, advanced, text) => {
    text.add(1, Text.of('§7Sentient NPU'))
})

event.addAdvanced('gtceu:neuron_dish', (item, advanced, text) => {
    text.add(1, Text.of('§7The Lone Neuron floats in its own §4blood, not knowing where§r,§4 why or what it is'))
})

event.addAdvanced('gtceu:sentient_neuron_dish', (item, advanced, text) => {
    text.add(1, Text.of('§7The Lone Neuron floats in its own §4blood§r, §3knowing where§r,§3 why and what it is'))
})

event.addAdvanced('gtceu:preon_star', (item, advanced, text) => {
    text.add(1, Text.of('§7Impossible Nether Star'))
})

event.addAdvanced('gtceu:biological_boule', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Circuit'))
})

event.addAdvanced('gtceu:biological_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Circuit'))
})

event.addAdvanced('gtceu:biological_soc', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological System on Chip'))
})

event.addAdvanced('gtceu:biological_soc_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological System on Chip'))
})


event.addAdvanced('gtceu:b_cpu_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Processing Unit'))
})

event.addAdvanced('gtceu:b_nano_cpu_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Nano Circuit'))
})

event.addAdvanced('gtceu:b_qubit_cpu_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Qubit Circuit'))
})

event.addAdvanced('gtceu:b_cpu_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Central Processing Unit'))
})

event.addAdvanced('gtceu:b_nano_cpu_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Nano Central Processing Unit'))
})

event.addAdvanced('gtceu:b_qubit_cpu_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Qubit Central Processing Unit'))
})


event.addAdvanced('gtceu:b_ram_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Raw Memory'))
})

event.addAdvanced('gtceu:b_nand_memory_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Raw Logic Gate'))
})

event.addAdvanced('gtceu:b_nor_memory_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Raw Logic Gate'))
})

event.addAdvanced('gtceu:b_ram_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological Random Access Memory'))
})

event.addAdvanced('gtceu:b_nand_memory_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological NAND Logic Gate'))
})

event.addAdvanced('gtceu:b_nor_memory_chip', (item, advanced, text) => {
    text.add(1, Text.of('§7Biological NOR Logic Gate'))
})

event.addAdvanced(/gtceu:(.*_)?omnium_.*/, (item, advanced, text) => {
    text.add(1, Text.of(`The Purest form of &[rainbow]Matter`))
})

event.addAdvanced(/gtceu:(.*_)?nullium_.*/, (item, advanced, text) => {
    text.add(1, Text.of(`The Purest form of &[nullium]Antimatter`))
})
event.addAdvanced(/gtceu:(.*_)?infinity.*/, (item, advanced, text) => {
    text.add(1, Text.of(`The Fused. Made into &[infinity]THE INFINITE`))
})

;[
    'catalyst_core',
    'computational_matrix',
    'high_strength_panel',
    'microfluidic_flow_valve',
    'micropower_router',
    'precision_drive_mechanism',
    'super_magnetic_core',
    'transmission_assembly'
].forEach(gabagool => {


event.addAdvanced(`gtceu:ruined_${gabagool}`, (item, advanced, text) => {
    text.add(1, Text.of(`§7Wields the knowledge to ancient components`))
    text.add(2, Text.of('§8Ruined Component'))
})

event.addAdvanced(`gtceu:uhv_${gabagool}`, (item, advanced, text) => {
    text.add(1, Text.of(`§7Resurrected from the dead Kha'Reh-Zul`))
    text.add(2, Text.of(`§7Imbued with an iota of the §[chorite]Chorite God's essence`))
})

event.addAdvanced(`gtceu:uev_${gabagool}`, (item, advanced, text) => {
    text.add(1, Text.of(`§7Refined Components, upgraded from the Resurrections`))
    text.add(2, Text.of(`§7Imbued with a grain of sand worth's of the §[chorite]Chorite God's essence`))
})

})

event.addAdvanced(/(tiny|small_)?gtceu:methylenedianiline_dust/, (item, advanced, text) => {
    text.add(1, Text.of("4,4'-methylenedianiline. not that MDA. we are not liable."))
})

})