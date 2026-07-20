JEIEvents.addItems(event => {
event.add('gtceu:overworld_marker')
event.add('gtceu:the_nether_marker')
event.add('gtceu:the_end_marker')
})

ItemEvents.tooltip(event => {
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

event.addAdvanced('gtceu:biological_soc', (item, advanced, text) => {
    text.add(1, Text.of('§7Biolgoical System on Chip'))
})

event.addAdvanced('gtceu:biological_soc_wafer', (item, advanced, text) => {
    text.add(1, Text.of('§7Raw Biological Circuit'))
})
})