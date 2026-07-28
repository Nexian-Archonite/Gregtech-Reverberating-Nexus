// color of flesh alloy is #3f1d1e
ServerEvents.recipes(sentience => {
const GTM = sentience.recipes.gtceu

// RAM recipes
GTM.organism_assembly_line('wetware_mainframe_biomechanical')
.itemInputs('2x gtceu:tritanium_frame', '2x gtceu:wetware_processor_computer', '8x gtceu:sentient_smd_diode', '8x gtceu:sentient_smd_capacitor', '8x gtceu:sentient_smd_transistor', '8x gtceu:sentient_smd_resistor', '8x gtceu:sentient_smd_inductor', '32x gtceu:polyether_ether_ketone_foil', '8x gtceu:b_ram_chip', '4x gtceu:chronocrytic-vhaelsalite_double_wire', '8x gtceu:astazine-e_plate')
.inputFluids('gtceu:mutagen 1440', 'gtceu:soldering_alloy 1440', 'gtceu:polyether_ether_ketone 576')
.itemOutputs('gtceu:wetware_processor_mainframe')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(1000)
.EUt(1200000)

GTM.organism_assembly_line('wetware_super_computer_biomechanical')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x gtceu:wetware_processor_assembly', 'gtceu:sentient_smd_diode', '2x gtceu:b_nor_memory_chip', '4x gtceu:b_ram_chip', '24x gtceu:fine_chronocrytic-vhaelsalite_wire', '32x gtceu:polyether_ether_ketone_foil', '4x gtceu:astazine-e_plate')
.inputFluids('gtceu:mutagen 576', 'gtceu:soldering_alloy 576')
.itemOutputs('gtceu:wetware_processor_computer')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(1000)
.EUt(153600)

GTM.organism_assembly_line('wetware_processor_assembly_biomechanical')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x gtceu:wetware_processor', '2x gtceu:sentient_smd_inductor', '3x gtceu:sentient_smd_capacitor', '3x gtceu:b_ram_chip', '16x gtceu:fine_chronocrytic-vhaelsalite_wire')
.inputFluids('gtceu:mutagen 144', 'gtceu:soldering_alloy 144')
.itemOutputs('2x gtceu:wetware_processor_assembly')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(400)
.EUt(153600)

GTM.organism_assembly_line('wetware_processor_biomechanical')
.itemInputs('gtceu:sentience_processing_unit', 'gtceu:biological_soc', '4x gtceu:fine_chronocrytic-vhaelsalite_wire', '4x gtceu:naquadrium_bolt')
.inputFluids('gtceu:mutagen 72', 'gtceu:soldering_alloy 72')
.itemOutputs('6x gtceu:wetware_processor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(100)
.EUt(600000)

GTM.organism_assembly_line('data_orb_biomechanical')
.itemInputs('gtceu:sentient_circuit_board', `2x #gtceu:circuits/zpm`, 'gtceu:b_ram_chip', '8x gtceu:b_nor_memory_chip', '16x gtceu:b_nand_memory_chip', '16x gtceu:fine_platinum_wire')
.inputFluids('gtceu:mutagen 144')
.itemOutputs('2x gtceu:data_orb')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(13)
.EUt(307200)

GTM.organism_assembly_line('data_module_biomechanical')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x #gtceu:circuits/zpm', '4x gtceu:b_ram_chip', '16x gtceu:b_nor_memory_chip', '16x gtceu:b_nand_memory_chip', '32x gtceu:fine_chronocrytic-vhaelsalite_wire')
.inputFluids('gtceu:mutagen 144')
.itemOutputs('gtceu:data_module')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(200)
.EUt(614400)

// uhh other memory recipes? nope nvm CPU recipes

GTM.organism_assembly_line('lapotronic_energy_orb_biomechanical')
.itemInputs('gtceu:sentience_printed_circuit_board', '4x gtceu:mpic_chip', '24x gtceu:engraved_lapotron_crystal_chip', 'gtceu:b_nano_cpu_chip', '16x gtceu:fine_platinum_wire', '8x gtceu:platinum_plate')
.inputFluids('gtceu:sterilized_growth_medium 72', 'gtceu:soldering_alloy 72')
.itemOutputs('2x gtceu:lapotronic_energy_orb')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(512)
.EUt(4096)
}) 