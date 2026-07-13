ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu

   // welcome to late game, i hope you brought a spezi and some crumpets ay
   
 //pol polm polmy polyme polymer

GTM.chemical_vat('nitrobenzene_to_aniline')
    .inputFluids('gtceu:nitrobenzene 1000', 'gtceu:hydrogen 3000')
    .outputFluids('gtceu:aniline 1000', 'water 2000')
    .duration(120)
    .addData("HeatPressure", 2.5)
    .addData("Temp", 473)
    .EUt(8192)

GTM.chemical_vat('aniline_to_fluorobenzene')
    .inputFluids('gtceu:aniline 1000', 'gtceu:hydrofluoric_acid 1000')
    .outputFluids('gtceu:fluorobenzene 1000', 'gtceu:nitrogen 1000')
    .duration(160)
    .addData("HeatPressure", 1.5)
    .addData("Temp", 423)
    .EUt(8192)

GTM.chemical_vat('benzene_propene_to_hydroquinone')
    .inputFluids('gtceu:benzene 1000', 'gtceu:propene 2000', 'gtceu:oxygen 2000')
    .outputFluids('gtceu:acetone 2000')
    .itemOutputs('2x gtceu:hydroquinone_dust')
    .duration(240)
    .addData("HeatPressure", 4.0)
    .addData("Temp", 423)
    .EUt(32768)

GTM.chemical_vat('fluorobenzene_to_difluorobenzophenone')
    .inputFluids('gtceu:fluorobenzene 2000', 'gtceu:carbon_monoxide 1000')
    .notConsumable('gtceu:iridium_chloride_dust')
    .itemOutputs('1x gtceu:difluorobenzophenone_dust')
    .outputFluids('gtceu:hydrochloric_acid 1000')
    .duration(200)
    .addData("HeatPressure", 3.0)
    .addData("Temp", 373)
    .EUt(32768)

GTM.chemical_vat('benzene_to_diphenyl_sulfone')
    .inputFluids('gtceu:benzene 2000', 'gtceu:sulfuric_acid 1000')
    .itemOutputs('1x gtceu:diphenyl_sulfone_dust')
    .outputFluids('water 1000')
    .duration(180)
    .addData("HeatPressure", 2.0)
    .addData("Temp", 573)
    .EUt(32768)

GTM.chemical_vat('peek_polymerization')
    .itemInputs('2x gtceu:difluorobenzophenone_dust', '1x gtceu:hydroquinone_dust', '1x gtceu:potassium_carbonate_dust')
    .notConsumable('gtceu:diphenyl_sulfone_dust')
    .itemOutputs('3x gtceu:polyether_ether_ketone_dust')
    .outputFluids('gtceu:hydrofluoric_acid 2000')
    .duration(600)
    .addData("HeatPressure", 5.0)
    .addData("Temp", 623)
    .EUt(131072)

GTM.chemical_vat('toluene_to_pseudocumene')
    .inputFluids('gtceu:toluene 1000', 'gtceu:dimethylbenzene 1000', 'gtceu:methanol 1000')
    .outputFluids('gtceu:pseudocumene 1000')
    .duration(300)
    .addData("HeatPressure", 3.5)
    .addData("Temp", 573)
    .EUt(131072)

GTM.chemical_vat('pseudocumene_to_trimellitic_anhydride')
    .inputFluids('gtceu:pseudocumene 1000', 'gtceu:oxygen 3000', 'gtceu:acetic_acid 500')
    .notConsumable('gtceu:cobalt_dust')
    .notConsumable('gtceu:manganese_dust')
    .itemOutputs('1x gtceu:trimellitic_anhydride_dust')
    .outputFluids('water 2000')
    .duration(400)
    .addData("HeatPressure", 4.5)
    .addData("Temp", 493)
    .EUt(131072)

GTM.chemical_vat('so2_cl2_to_thionyl_chloride')
    .inputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:chlorine 2000')
    .outputFluids('gtceu:thionyl_chloride 1000')
    .duration(120)
    .addData("HeatPressure", 2.0)
    .addData("Temp", 343)
    .EUt(32768)

GTM.chemical_vat('trimellitic_anhydride_to_tmac')
    .itemInputs('1x gtceu:trimellitic_anhydride_dust')
    .inputFluids('gtceu:thionyl_chloride 1000')
    .itemOutputs('1x gtceu:trimellitic_anhydride_chloride_dust')
    .outputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:hydrochloric_acid 1000')
    .duration(200)
    .addData("HeatPressure", 2.5)
    .addData("Temp", 353)
    .EUt(131072)

GTM.chemical_vat('maleic_anhydride_to_gbl')
    .itemInputs('1x gtceu:maleic_anhydride_dust')
    .inputFluids('gtceu:hydrogen 4000')
    .outputFluids('gtceu:gamma_butyrolactone 1000')
    .duration(240)
    .addData("HeatPressure", 6.0)
    .addData("Temp", 533)
    .EUt(131072)

GTM.chemical_vat('gbl_to_nmp')
    .inputFluids('gtceu:gamma_butyrolactone 1000', 'gtceu:methylamine 1000')
    .outputFluids('gtceu:n_methylpyrrolidone 1000', 'water 1000')
    .duration(180)
    .addData("HeatPressure", 10.0)
    .addData("Temp", 553)
    .EUt(131072)

GTM.chemical_vat('aniline_formaldehyde_to_mda')
    .inputFluids('gtceu:aniline 2000', 'gtceu:formaldehyde 1000', 'gtceu:hydrochloric_acid 500')
    .itemOutputs('1x gtceu:methylenedianiline_dust')
    .outputFluids('water 1000')
    .duration(300)
    .addData("HeatPressure", 1.5)
    .addData("Temp", 383)
    .EUt(524288)

GTM.chemical_vat('torlon_polymerization')
    .itemInputs('1x gtceu:trimellitic_anhydride_chloride_dust', '1x gtceu:methylenedianiline_dust')
    .notConsumableFluid('gtceu:n_methylpyrrolidone 1000')
    .itemOutputs('2x gtceu:torlon_dust')
    .outputFluids('gtceu:hydrochloric_acid 2000')
    .duration(800)
    .addData("HeatPressure", 3.0)
    .addData("Temp", 363)
    .EUt(33554432)

//the particle guy goes HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

//back to start rekt or whatever, i don't watch movies
GTM.fusion_accelerator('anti-dilithide')
.notConsumable('gtceu:dilithium_gem')
.perTick(true)
.inputFluids('gtceu:negatron 6', 'gtceu:nulltron 8', 'gtceu:positron 6')
.itemOutputs('gtceu:anti-dilithide_gem')
.EUt(va.uv, 4)
.fusionStartEU(8388304)
.duration(1000)

GTM.particle_accelerator('enriched_naquadrium_bombardment')
.perTick(true)
.inputFluids('gtceu:enriched_naquadrium 5')
.inputFluids('gtceu:proton 50')
.chancedFluidOutputLogic('or')
.chancedFluidOutput('gtceu:naquadrium 5', 2000, 0)
.chancedFluidOutput('gtceu:naquadah 5', 2500, 0)
.chancedFluidOutput('gtceu:trinium 5', 3000, 0)
.chancedFluidOutput('gtceu:naquadria 5', 3500, 0)
.fusionStartEU(6291456)
.EUt(65535)
.duration(1000)
.circuit(4)

//I'm Atomicing it so hard I'm about to Preon

// ============================================================
// GT:RN: Holy CERN-Crusade
// ============================================================

GTM.particle_accelerator('up_down_to_proton')
    .perTick(true)
    .inputFluids('gtceu:up_quark 2', 'gtceu:down_quark 1')
    .outputFluids('gtceu:proton 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('sub_sur_to_negatron')
    .perTick(true)
    .inputFluids('gtceu:sub_quark 2', 'gtceu:sur_quark 1')
    .outputFluids('gtceu:negatron 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('charm_strange_to_neutron')
    .perTick(true)
    .inputFluids('gtceu:charm_quark 1', 'gtceu:strange_quark 1')
    .outputFluids('gtceu:neutron 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('curse_ordinary_to_nulltron')
    .perTick(true)
    .inputFluids('gtceu:curse_quark 1', 'gtceu:ordinary_quark 1')
    .outputFluids('gtceu:nulltron 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('top_bottom_to_omega_baryon')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:bottom_quark 1')
    .outputFluids('gtceu:omega_baryon 1')
    .perTick(false)
    .fusionStartEU(134217728)
    .EUt(33554432)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('inferior_superior_to_anti_omega_baryon')
    .perTick(true)
    .inputFluids('gtceu:inferior_quark 1', 'gtceu:superior_quark 1')
    .outputFluids('gtceu:anti_omega_baryon 1')
    .perTick(false)
    .fusionStartEU(134217728)
    .EUt(33554432)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('omega_annihilation_to_omniparticle')
    .perTick(true)
    .inputFluids('gtceu:omega_baryon 1', 'gtceu:anti_omega_baryon 1')
    .outputFluids('gtceu:omniparticle_plasma 1')
    .perTick(false)
    .fusionStartEU(536870912)
    .EUt(134217728)
    .duration(200)
    .circuit(2)


GTM.particle_accelerator('first_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:up_quark 1', 'gtceu:sub_quark 1')
    .outputFluids('gtceu:electron 1', 'gtceu:gamma_photon 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('first_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:down_quark 1', 'gtceu:sur_quark 1')
    .outputFluids('gtceu:positron 1', 'gtceu:gamma_photon 1')
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('second_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:charm_quark 1', 'gtceu:curse_quark 1')
    .outputFluids('gtceu:muon 1', 'gtceu:antimuon 1')
    .chancedFluidOutput('gtceu:up_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:sub_quark 1', 500, 0)
    .perTick(false)
    .fusionStartEU(33554432)
    .EUt(524288)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('second_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:strange_quark 1', 'gtceu:ordinary_quark 1')
    .outputFluids('gtceu:muon 1', 'gtceu:antimuon 1')
    .chancedFluidOutput('gtceu:down_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:sur_quark 1', 500, 0)
    .perTick(false)
    .fusionStartEU(33554432)
    .EUt(524288)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('third_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:inferior_quark 1')
    .outputFluids('gtceu:tau 1', 'gtceu:antitau 1')
    .chancedFluidOutput('gtceu:charm_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:curse_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:glueball 1', 10, 0)
    .perTick(false)
    .fusionStartEU(134217728)
    .EUt(524288)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('third_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:bottom_quark 1', 'gtceu:superior_quark 1')
    .outputFluids('gtceu:tau 1', 'gtceu:antitau 1')
    .chancedFluidOutput('gtceu:strange_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:ordinary_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:glueball 1', 10, 0)
    .perTick(false)
    .fusionStartEU(134217728)
    .EUt(524288)
    .duration(500)
    .circuit(3)
/*
GTM.particle_accelerator('up_sub_annihilation')
    .perTick(true)
    .inputFluids('gtceu:up_quark 1', 'gtceu:sub_quark 1')
    .chancedFluidOutput('gtceu:glueball 1', 1, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(12)

GTM.particle_accelerator('down_sur_annihilation')
    .perTick(true)
    .inputFluids('gtceu:down_quark 1', 'gtceu:sur_quark 1')
    .chancedFluidOutput('gtceu:glueball 1', 1, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(13)

GTM.particle_accelerator('strange_ordinary_annihilation')
    .perTick(true)
    .inputFluids('gtceu:strange_quark 1', 'gtceu:ordinary_quark 1')
    .chancedFluidOutput('gtceu:glueball 2', 10, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(14)

GTM.particle_accelerator('charm_curse_annihilation')
    .perTick(true)
    .inputFluids('gtceu:charm_quark 1', 'gtceu:curse_quark 1')
    .chancedFluidOutput('gtceu:glueball 2', 10, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(15)

GTM.particle_accelerator('bottom_superior_annihilation')
    .perTick(true)
    .inputFluids('gtceu:bottom_quark 1', 'gtceu:superior_quark 1')
    .chancedFluidOutput('gtceu:glueball 3', 100, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(16)

GTM.particle_accelerator('top_inferior_annihilation')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:inferior_quark 1')
    .chancedFluidOutput('gtceu:glueball 3', 100, 0)
    .perTick(false)
    .fusionStartEU(8388608)
    .EUt(524288)
    .duration(1000)
    .circuit(17)
*/

GTM.particle_accelerator('glueball_collision_preon')
    .perTick(true)
    .inputFluids('gtceu:glueball 2')
    .outputFluids('gtceu:preon 1')
    .chancedFluidOutput('gtceu:higgs_boson 1', 100, 0)
    .perTick(false)
    .fusionStartEU(134217728)
    .EUt(2097152)
    .duration(1000)
    .circuit(20)

GTM.fusion_accelerator('stellarite_synthesis')
    .inputFluids('gtceu:preon 10', 'gtceu:neutronium 1')
    .outputFluids('gtceu:stellarite 10')
    .fusionStartEU(134217728)
    .EUt(2097152)
    .duration(2000)

GTM.solar_collection('pasive_neutrinos')
.perTick(true)
.inputFluids('gtceu:hypothermic_helium_3_plasma 1')
.chancedFluidOutput('gtceu:electron_neutrino 1', 10, 0)
.chancedFluidOutput('gtceu:muon_neutrino 1', 5, 0)
.chancedFluidOutput('gtceu:tau_neutrino 1', 1, 0)
.daytime(false)
.duration(10000)

GTM.particle_accelerator('hydrogen_ionization')
.perTick(true)
.inputFluids('gtceu:hydrogen 1')
.outputFluids('gtceu:proton 1', 'gtceu:electron 1')
.fusionStartEU(524288)
.EUt(8192)
.duration(10000)

GTM.particle_accelerator('electron-proton_degeneracy')
.perTick(true)
.inputFluids('gtceu:proton 1', 'gtceu:electron 1')
.outputFluids('gtceu:neutron 1', 'gtceu:electron_neutrino 1')
.fusionStartEU(524288)
.EUt(8192)
.duration(10000)
.circuit(16)

GTM.particle_accelerator('positron-negatron_degeneracy')
.perTick(true)
.inputFluids('gtceu:negatron 1', 'gtceu:positron 1')
.outputFluids('gtceu:nulltron 1', 'gtceu:electron_antrino 1')
.fusionStartEU(524288)
.EUt(8192)
.duration(10000)
.circuit(16)


GTM.particle_accelerator('pair_production')
.perTick(true)
.inputFluids('gtceu:gamma_photon 2')
.outputFluids('gtceu:electron 1', 'gtceu:positron 1')
.fusionStartEU(524288)
.EUt(8192)
.duration(10000)

GTM.particle_accelerator('proton_annihilation')
.perTick(true)
.inputFluids('gtceu:proton', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:up_quark 2', 'gtceu:down_quark 1')
.fusionStartEU(524288)
.EUt(32768)
.duration(10000)

GTM.particle_accelerator('negatron_annihilation')
.perTick(true)
.inputFluids('gtceu:negatron', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:sub_quark 2', 'gtceu:sur_quark 1')
.fusionStartEU(524288)
.EUt(32768)
.duration(10000)

GTM.particle_accelerator('neutron_annihilation')
.perTick(true)
.inputFluids('gtceu:neutron', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:strange_quark 2', 'gtceu:strange_quark 1')
.fusionStartEU(524288)
.EUt(65535)
.duration(10000)

GTM.particle_accelerator('nulltron_annihilation')
.perTick(true)
.inputFluids('gtceu:nulltron', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:ordinary_quark 2', 'gtceu:curse_quark 1')
.fusionStartEU(524288)
.EUt(65535)
.duration(10000)

const gen2to3list = {
"gtceu:charm_quark": "gtceu:top_quark",
"gtceu:curse_quark": "gtceu:inferior_quark",
"gtceu:strange_quark": "gtceu:bottom_quark",
"gtceu:ordinary_quark": "gtceu:superior_quark"
}

Object.entries(gen2to3list).forEach(([gen2, gen3]) => {
const recipeID1 = gen2.replace('_quark', '')
GTM.particle_accelerator(`${recipeID1}-gamma_ascension`)
.perTick(true)
.inputFluids(`${gen2} 1`, 'gtceu:gamma_photon 1')
.chancedFluidOutput(`${gen3} 1`, 2500, 0)
.fusionStartEU(2097152)
.EUt(131072)
.duration(10000)
})
//rocketry part 12059710125091251920905190725

//tier 3
GTM.forming_press('tier_3_rocket_plating')
.itemInputs('gtceu:dense_echolumium_plate', 'gtceu:dense_beryllium_bronze_plate', 'gtceu:dense_ostrite_plate')
.itemOutputs('gtceu:rocket_plating_ostrite')
.duration(1000)
.EUt(2048)

GTM.space_factory('ostrite_tank')
.itemInputs('2x gtceu:dense_ostrite_plate', 'gtceu:ev_super_tank', '6x gtceu:polytetrafluoroethylene_plate', '4x gtceu:dilithium_gem', '4x gtceu:anti-dilithide_gem')
.itemOutputs('ad_astra:ostrum_tank')
.duration(1000)
.EUt(8192)

GTM.space_factory('ostrite_engine_casing')
.itemInputs('8x gtceu:dense_ostrite_plate', '2x gtceu:echolumium_frame', '2x gtceu:auralloy-omega_over_transcendentine_small_fluid_pipe')
.itemOutputs('gtceu:engine_casing_ostrite')
.duration(1000)
.EUt(8192)

GTM.space_factory('ostrite_engine')
.itemInputs('gtceu:engine_casing_ostrite', '4x gtceu:gravitation_engine_unit', '14x gtceu:auralloy-omega_over_transcendentine_tiny_fluid_pipe')
.inputFluids('gtceu:supercooled_ice 640')
.itemOutputs('ad_astra:ostrum_engine')
.duration(1000)
.EUt(8192)

GTM.space_factory('tier_3_rocket')
.itemInputs('ad_astra:rocket_nose_cone', '18x gtceu:rocket_plating_ostrite', '4x ad_astra:ostrum_tank', 'ad_astra:ostrum_engine')
.itemOutputs('ad_astra:tier_3_rocket')
.duration(1000)
.EUt(32768)

GTM.chemical_bath('tier_3_rocket_fueling')
.itemInputs('ad_astra:tier_3_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.itemOutputs(Item.of('ad_astra:tier_3_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:cryostatic-antilithide"}]}}'))
.duration(100)
.EUt(512)

//tier 4
GTM.forming_press('tier_4_rocket_plating')
.itemInputs('gtceu:dense_echolumium_plate', 'gtceu:dense_hafnium_carbide_plate', 'gtceu:dense_calenite_plate')
.itemOutputs('gtceu:rocket_plating_calenite')
.duration(1000)
.EUt(8192)

GTM.space_factory('calenite_tank')
.itemInputs('2x gtceu:dense_calenite_plate', 'gtceu:iv_quantum_tank', '6x gtceu:polybenzimidazole_plate', '4x gtceu:flawless_dilithium_gem', '4x gtceu:flawless_anti-dilithide_gem')
.itemOutputs('ad_astra:calorite_tank')
.duration(1000)
.EUt(32768)

GTM.space_factory('calenite_engine_casing')
.itemInputs('8x gtceu:dense_calenite_plate', '2x gtceu:echolumium_frame', '2x gtceu:stellarite_small_fluid_pipe')
.itemOutputs('gtceu:engine_casing_calenite')
.duration(1000)
.EUt(32768)

GTM.space_factory('calenite_engine')
.itemInputs('gtceu:engine_casing_calenite', '4x gtceu:gravitation_engine_unit', '14x gtceu:stellarite_tiny_fluid_pipe')
.inputFluids('gtceu:supercooled_ice 640')
.itemOutputs('ad_astra:calorite_engine')
.duration(1000)
.EUt(32768)

GTM.space_factory('tier_4_rocket')
.itemInputs('ad_astra:rocket_nose_cone', '18x gtceu:rocket_plating_calenite', '4x ad_astra:calorite_tank', '2x ad_astra:calorite_engine')
.itemOutputs('ad_astra:tier_4_rocket')
.duration(1000)
.EUt(131072)

GTM.chemical_bath('tier_4_rocket_fueling')
.itemInputs('ad_astra:tier_4_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.itemOutputs(Item.of('ad_astra:tier_4_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:cryostatic-antilithide"}]}}'))
.duration(100)
.EUt(512)

GTM.chemical_vat('cryostatic_antilithide_synthesis')
.inputFluids('gtceu:resonance_plasma 4000', 'gtceu:cryothetic_zero 50')
.itemInputs('2x gtceu:flawless_dilithium_gem', '2x gtceu:flawless_anti-dilithide_gem')
.outputFluids('gtceu:cryostatic-antilithide 5000')
.addData("HeatPressure", 0.1)
.addData("Temp", 10)
.duration(400)
.EUt(32768)

//return from rocketrE

GTM.assembly_line('transcendentine-polydimensional_accelerator')
.itemInputs('gtceu:luv_fusion_reactor', '32x #gtceu:circuits/uv', '64x gtceu:auralloy-omega_over_transcendentine_plate', '64x gtceu:auralloy-omega_over_transcendentine_plate', '8x gtceu:superconducting_coil', '32x gtceu:cryosporsite_rod')
.inputFluids('gtceu:polybenzimidazole 32000', 'gtceu:purified_draconium 24000')
.itemOutputs('gtceu:transcendental_polydimensional_accelerator')
.stationResearch(b => b.researchStack('gtceu:auralloy-omega_over_transcendentine_casing').EUt(va.zpm).CWUt(48))
.duration(4000)
.EUt(131072)


































// END of late game 

    const voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
    }
    Object.entries(voltagetierexpensive).forEach(([voltage, material]) => {

    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:wood_plate', 'gtceu:polyether_ether_ketone_plate')
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, new RegExp(`#forge:plates/.*`), `gtceu:${material}_plate`)
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:red_alloy_single_cable', `gtceu:${material}_single_wire`)

    event.shaped(`gtceu:${voltage}_machine_casing`, [`MMM`, `MWM`, `MMM`], {M: `gtceu:${material}_plate`, W: "#forge:tools/wrenches"}).id(`gtceu:casing_${voltage}`)

    GTM.assembler(`casing_${voltage}`)
    .itemInputs(`8x gtceu:${material}_plate`,)
    .itemOutputs(`gtceu:${voltage}_machine_casing`)
    .circuit(8)
    .duration(50)
    .EUt(16)
    })

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:red_alloy_single_cable',
    'gtceu:tritanium_quadruple_cable'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:red_alloy_quadruple_cable',
    'gtceu:tritanium_hex_cable'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:tin_rotor',
    'gtceu:naquadah_alloy_rotor'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    '#forge:glass',
    'gtceu:fusion_glass'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_quadruple_wire',
    'gtceu:omnium_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_double_wire',
    'gtceu:omnium_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:gold_single_wire',
    'gtceu:osmiridium_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:iron_rod',
    'gtceu:vanadium_gallium_rod'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_hex_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_octal_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_octal_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_quadruple_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_double_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:tin_single_wire',
    'gtceu:tritanium_single_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:bronze_normal_fluid_pipe',
    'gtceu:neutronium_normal_fluid_pipe'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:iron_plate',
    'gtceu:omnium_plate'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    '#forge:chests/wooden',
    'gtceu:uv_quantum_chest'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    "gtceu:bronze_buzz_saw_blade",
    "gtceu:neutronium_buzz_saw_blade"
    )

    event.remove({output: /gtceu:(uhv|uev)_transformer_(1a|2a|4a|8a|16a)/})







    // shitpost

    GTM.metaphysical_metallurgy_tainter('radioactive_bronze_generation')
    .itemInputs('gtceu:bronze_ingot')
    .itemOutputs('gtceu:radioactive_bronze_ore_ore')
    .duration(1)
    .EUt(34359738352)







})