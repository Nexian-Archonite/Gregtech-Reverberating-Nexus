ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
   // welcome to late game, i hope you brought a spezi and some crumpets ay
   
 //pol polm polmy polyme polymer (or rubber)

// PolyEther Ether Ketone
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

// torlon
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

// Poly(perfluorobis(velyl)methylene ether) aka Velyl Rubber
GTM.chemical_vat('velium_to_perfluorovelium')
    .itemInputs('1x gtceu:velium_dust')
    .inputFluids('gtceu:fluorine 4000')
    .outputFluids('gtceu:perfluorovelium 144')
    .duration(240)
    .addData("HeatPressure", 5.0)
    .addData("Temp", 2500)
    .EUt(131072)

GTM.chemical_vat('perfluorovelium_to_pbvme_monomer')
    .inputFluids('gtceu:perfluorovelium 144','gtceu:formaldehyde 1000', 'gtceu:oxygen 1000')
    .itemOutputs('1x gtceu:perfluorobis_velyl_methylene_ether_dust')
    .duration(320)
    .addData("HeatPressure", 6.0)
    .addData("Temp", 3200)
    .EUt(131072)

GTM.chemical_vat('vinyl_chloride_to_perfluorovinyl_ether')
    .inputFluids('gtceu:vinyl_chloride 1000', 'gtceu:fluorine 4000', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:perfluorovinyl_ether 1000', 'gtceu:hydrochloric_acid 1000')
    .duration(400)
    .addData("HeatPressure", 6.0)
    .addData("Temp", 3000)
    .EUt(131072)

GTM.chemical_vat('velyl_polymerization')
    .itemInputs('1x gtceu:perfluorobis_velyl_methylene_ether_dust')
    .inputFluids('gtceu:tetrafluoroethylene 2000', 'gtceu:perfluorovinyl_ether 1000')
    .itemOutputs('9x gtceu:raw_velyl_rubber_dust')
    .duration(720)
    .addData("HeatPressure", 7.0)
    .addData("Temp", 5000)
    .EUt(131072)

GTM.chemical_vat('velyl_vulcanization')
    .itemInputs('9x gtceu:raw_velyl_rubber_dust', '1x gtceu:sulfur_dust')
    .outputFluids('gtceu:velyl_rubber 1296')
    .duration(800)
    .addData("HeatPressure", 8.0)
    .addData("Temp", 7600)
    .EUt(131072)
//the particle guy goes HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

//back to start rekt or whatever, i don't watch movies
GTM.fusion_accelerator('anti-dilithide')
.notConsumable('gtceu:dilithium_gem')
.perTick(true)
.inputFluids('gtceu:negatron 6', 'gtceu:nulltron 8', 'gtceu:positron 6')
.itemOutputs('gtceu:anti-dilithide_gem')
.EUt(va.uv, 12)
.duration(1000)

GTM.particle_accelerator('enriched_naquadrium_bombardment')
.perTick(true)
.inputFluids('gtceu:enriched_naquadrium 5')
.inputFluids('gtceu:proton 50')
.chancedFluidOutputLogic('xor')
.chancedFluidOutput('gtceu:naquadrium 5', 2000, 0)
.chancedFluidOutput('gtceu:naquadah 5', 2500, 0)
.chancedFluidOutput('gtceu:trinium 5', 3000, 0)
.chancedFluidOutput('gtceu:naquadria 5', 3500, 0)
.EUt(va.iv, 8)
.duration(1000)
.circuit(4)

//I'm Quarking it so hard I'm about to Preon

// ============================================================
// GT:RN: Holy CERN-Crusade
// ============================================================

GTM.particle_accelerator('up_down_to_proton')
    .perTick(true)
    .inputFluids('gtceu:up_quark 2', 'gtceu:down_quark 1')
    .outputFluids('gtceu:proton 1')
    .EUt(v.uv, 4)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('sub_sur_to_negatron')
    .perTick(true)
    .inputFluids('gtceu:sub_quark 2', 'gtceu:sur_quark 1')
    .outputFluids('gtceu:negatron 1')
    .EUt(v.uv, 4)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('up_down_to_neutron')
    .perTick(true)
    .inputFluids('gtceu:down_quark 1', 'gtceu:up_quark 2')
    .outputFluids('gtceu:neutron 1')
    .EUt(v.uv, 4)
    .duration(200)
    .circuit(2)

GTM.particle_accelerator('sub_sur_to_nulltron')
    .perTick(true)
    .inputFluids('gtceu:sur_quark 1', 'gtceu:sub_quark 2')
    .outputFluids('gtceu:nulltron 1')
    .EUt(v.uv, 4)
    .duration(200)
    .circuit(2)

GTM.particle_accelerator('top_bottom_to_omni_hadron')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:superior_quark 1', 'gtceu:ordinary_quark 1')
    .outputFluids('gtceu:omni_hadron 1')
    .EUt(v.uhv, 16)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('inferior_superior_to_null_hadron')
    .perTick(true)
    .inputFluids('gtceu:inferior_quark 1', 'gtceu:bottom_quark 1', 'gtceu:strange_quark 1')
    .outputFluids('gtceu:null_hadron 1')
    .EUt(v.uhv, 16)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('hadron_annihilation_to_omegaparticle')
    .perTick(true)
    .inputFluids('gtceu:omni_hadron 1', 'gtceu:null_hadron 1')
    .outputFluids('gtceu:omegaparticle_plasma 1')
    .EUt(v.uev, 16)
    .duration(200)
    .circuit(2)


GTM.particle_accelerator('first_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:up_quark 1', 'gtceu:sub_quark 1')
    .outputFluids('gtceu:electron 1', 'gtceu:gamma_photon 1')
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('first_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:down_quark 1', 'gtceu:sur_quark 1')
    .outputFluids('gtceu:positron 1', 'gtceu:gamma_photon 1')
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('second_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:charm_quark 1', 'gtceu:curse_quark 1')
    .outputFluids('gtceu:muon 1', 'gtceu:antimuon 1')
    .chancedFluidOutput('gtceu:up_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:sub_quark 1', 500, 0)
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('second_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:strange_quark 1', 'gtceu:ordinary_quark 1')
    .outputFluids('gtceu:muon 1', 'gtceu:antimuon 1')
    .chancedFluidOutput('gtceu:down_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:sur_quark 1', 500, 0)
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('third_gen_lepton_production')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:inferior_quark 1')
    .outputFluids('gtceu:tau 1', 'gtceu:muon 2')
    .chancedFluidOutput('gtceu:charm_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:curse_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:glueball 1', 100, 0)
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('third_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:bottom_quark 1', 'gtceu:superior_quark 1')
    .outputFluids('gtceu:antitau 1', 'gtceu:antimuon 1')
    .chancedFluidOutput('gtceu:strange_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:ordinary_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:glueball 1', 100, 0)
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('glueball_collision_preon')
    .perTick(true)
    .inputFluids('gtceu:glueball 2')
    .outputFluids('gtceu:preon 1')
    .chancedFluidOutput('gtceu:higgs_boson 1', 100, 0)
    .EUt(v.uv, 16)
    .duration(1000)
    .circuit(20)

GTM.particle_accelerator('glueball_collision_preon_bosonated')
    .perTick(true)
    .inputFluids('gtceu:glueball 2')
    .chancedFluidInput('gtceu:catalytic_boson', 500, 0)
    .outputFluids('gtceu:preon 5')
    .chancedFluidOutput('gtceu:higgs_boson 2', 250, 0)
    .EUt(v.uv, 16)
    .duration(1000)
    .circuit(14)

GTM.fusion_accelerator('stellarite_synthesis')
    .perTick(true)
    .inputFluids('gtceu:preon 10', 'gtceu:neutronium 1')
    .outputFluids('gtceu:stellarite 10')
    .EUt(v.uv, 12)
    .duration(1000)

GTM.solar_collection('passive_neutrinos')
.perTick(true)
.inputFluids('gtceu:hypothermic_helium_3_plasma 1')
.chancedFluidOutput('gtceu:gamma_photon 5', 1000, 0)
.chancedFluidOutput('gtceu:electron_neutrino 1', 10, 0)
.chancedFluidOutput('gtceu:muon_neutrino 1', 5, 0)
.chancedFluidOutput('gtceu:tau_neutrino 1', 1, 0)
.daytime(false)
.duration(10000)
.dimension('ad_astra:moon')

GTM.lunar_collection('passive_antrinos')
.perTick(true)
.inputFluids('gtceu:hypothermic_helium_3_plasma 1')
.chancedFluidOutput('gtceu:neutron 3', 100, 0)
.chancedFluidOutput('gtceu:electron_antrino 1', 10, 0)
.chancedFluidOutput('gtceu:muon_antrino 1', 5, 0)
.chancedFluidOutput('gtceu:tau_antrino 1', 1, 0)
.daytime(true)
.duration(10000)
.dimension('ad_astra:moon')

GTM.particle_accelerator('hydrogen_ionization')
.perTick(true)
.inputFluids('gtceu:hydrogen 1')
.outputFluids('gtceu:proton 1', 'gtceu:electron 1')
.EUt(v.zpm, 4)
.duration(1000)

GTM.particle_accelerator('electron-proton_degeneracy')
.perTick(true)
.inputFluids('gtceu:proton 1', 'gtceu:electron 1')
.outputFluids('gtceu:neutron 1', 'gtceu:electron_neutrino 1')
.EUt(v.zpm, 4)
.duration(1000)
.circuit(16)

GTM.particle_accelerator('positron-negatron_degeneracy')
.perTick(true)
.inputFluids('gtceu:negatron 1', 'gtceu:positron 1')
.outputFluids('gtceu:nulltron 1', 'gtceu:electron_antrino 1')
.EUt(v.zpm, 4)
.duration(1000)
.circuit(16)

GTM.particle_accelerator('pair_production')
.perTick(true)
.inputFluids('gtceu:gamma_photon 2')
.outputFluids('gtceu:electron 1', 'gtceu:positron 1')
.EUt(v.zpm, 4)
.duration(1000)

GTM.particle_accelerator('pair_annihilation')
.perTick(true)
.inputFluids('gtceu:electron 1', 'gtceu:positron 1')
.outputFluids('gtceu:gamma_photon 2')
.EUt(v.zpm, 4)
.duration(1000)

GTM.particle_accelerator('proton_annihilation')
.perTick(true)
.inputFluids('gtceu:proton 1', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:up_quark 2', 'gtceu:down_quark 1')
.EUt(v.zpm, 8)
.duration(1000)

GTM.particle_accelerator('negatron_annihilation')
.perTick(true)
.inputFluids('gtceu:negatron 1', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:sub_quark 2', 'gtceu:sur_quark 1')
.EUt(v.zpm, 8)
.duration(1000)

GTM.particle_accelerator('neutron_annihilation')
.perTick(true)
.inputFluids('gtceu:neutron 1', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:down_quark 2', 'gtceu:up_quark 1')
.EUt(v.zpm, 8)
.duration(1000)

GTM.particle_accelerator('nulltron_annihilation')
.perTick(true)
.inputFluids('gtceu:nulltron 1', 'gtceu:gamma_photon 1')
.outputFluids('gtceu:sur_quark 2', 'gtceu:sub_quark 1')
.EUt(v.zpm, 8)
.duration(1000)

const gen1to2list = [
    { input: 'up_quark', output: 'charm_quark', boson: 'pm_boson' },
    { input: 'down_quark', output: 'strange_quark', boson: 'pm_boson' },
    { input: 'sub_quark', output: 'ordinary_quark', boson: 'inverse_pm_boson' },
    { input: 'sur_quark', output: 'curse_quark', boson: 'inverse_pm_boson' },
]
const gen2to3list = {
"gtceu:charm_quark": "gtceu:top_quark",
"gtceu:curse_quark": "gtceu:inferior_quark",
"gtceu:strange_quark": "gtceu:bottom_quark",
"gtceu:ordinary_quark": "gtceu:superior_quark"
}
gen1to2list.forEach(t => {
    GTM.particle_accelerator(`quark_gen1_to_2_${t.input}`)
        .perTick(true)
        .inputFluids(`gtceu:${t.input} 1`)
        .chancedFluidInput(`gtceu:${t.boson} 1`, 2500, 0)
        .outputFluids(`gtceu:${t.output} 1`)
        .duration(1000)
        .EUt(v.uv, 16)
})

Object.entries(gen2to3list).forEach(([gen2, gen3]) => {
const recipeID = gen2.replace('_quark', '')
GTM.particle_accelerator(`${recipeID}-gamma_ascension`)
.perTick(true)
.inputFluids(`${gen2} 1`, 'gtceu:gamma_photon 1')
.chancedFluidOutput(`${gen3} 1`, 2500, 0)
.EUt(v.uv, 16)
.duration(1000)
})

const neutrino_to_lepton = {
    'gtceu:electron_neutrino': 'gtceu:electron',
    'gtceu:muon_neutrino': 'gtceu:muon',
    'gtceu:tau_neutrino': 'gtceu:tau',
    'gtceu:electron_antrino': 'gtceu:positron',
    'gtceu:muon_antrino': 'gtceu:antimuon',
    'gtceu:tau_antrino': 'gtceu:antitau',
}
Object.entries(neutrino_to_lepton).forEach(([neutrino, lipton]) => {
const recipeID = lipton.replace('gtceu:', '') 
let EUt = 524288
if (neutrino === 'gtceu:tau_neutrino' || neutrino === 'gtceu:tau_antrino') { EUt = EUt * 16}  else 
if (neutrino === 'gtceu:muon_neutrino' || neutrino === 'gtceu:muon_antrino') { EUt = EUt * 4 }
GTM.particle_accelerator(`inverse_${recipeID}_compton_reaction`)
.perTick(true)
.inputFluids(`${neutrino} 1`, (neutrino === 'gtceu:tau_neutrino' || neutrino === 'gtceu:tau_antrino') ? 'gtceu:gamma_photon 2' : 'gtceu:gamma_photon 1')
.outputFluids(`${lipton} 1`)
.EUt(EUt)
.duration(1000)
.circuit(6)

GTM.particle_accelerator(`inverse_${recipeID}_compton_reaction_bosonated`)
    .perTick(true)
    .inputFluids(`${neutrino} 1`, 'gtceu:gamma_photon 1')
    .chancedFluidInput('gtceu:catalytic_boson 1', 500, 0)
    .outputFluids(`${lipton} 2`)
    .EUt(EUt)
    .duration(1000)
    .circuit(7)

})

GTM.particle_accelerator('higgs_muon_decay')
    .perTick(true)
    .inputFluids('gtceu:higgs_boson 1', 'gtceu:muon_neutrino 1')
    .outputFluids('gtceu:m_boson 1', 'gtceu:catalytic_boson 1', 'gtceu:muon 1')
    .EUt(v.uv, 16)
    .duration(1000)

GTM.particle_accelerator('higgs_antimuon_decay')
    .perTick(true)
    .inputFluids('gtceu:higgs_boson 1', 'gtceu:muon_antrino 1')
    .outputFluids('gtceu:inverse_m_boson 1', 'gtceu:catalytic_boson 1', 'gtceu:antimuon 1')
    .EUt(v.uv, 16)
    .duration(1000)

GTM.chemical_reactor('m_boson_polarity_flip')
    .notConsumableFluid('gtceu:cryosporsite 1296')
    .perTick(true)
    .inputFluids('gtceu:m_boson 1')
    .outputFluids('gtceu:inverse_m_boson 1')
    .EUt(2048)
    .duration(200)

GTM.chemical_reactor('inverse_m_boson_polarity_flip')
    .notConsumableFluid('gtceu:cryosporsite 1296')
    .perTick(true)
    .inputFluids('gtceu:inverse_m_boson 1')
    .outputFluids('gtceu:m_boson 1')
    .EUt(2048)
    .duration(200)

const quarkDoublets = {
    'gtceu:up_quark': 'gtceu:down_quark',
    'gtceu:sur_quark': 'gtceu:sub_quark',
    'gtceu:charm_quark': 'gtceu:strange_quark',
    'gtceu:ordinary_quark': 'gtceu:curse_quark',
    'gtceu:top_quark': 'gtceu:bottom_quark',
    'gtceu:superior_quark': 'gtceu:inferior_quark'
}

Object.entries(quarkDoublets).forEach(([top, bottom]) => {
    const topID = top.replace('gtceu:', '').replace('_quark', '')
    const bottomID = bottom.replace('gtceu:', '').replace('_quark', '')

    GTM.particle_accelerator(`m_boson_${topID}_to_${bottomID}`)
        .perTick(true)
        .inputFluids(`${top} 1`)
        .chancedFluidInput('gtceu:m_boson 1', 500, 0)
        .outputFluids(`${bottom} 1`, 'gtceu:tau_antrino 1')
        .EUt(v.uv, 16)
        .duration(1000)

    GTM.particle_accelerator(`inverse_m_boson_${bottomID}_to_${topID}`)
        .perTick(true)
        .inputFluids(`${bottom} 1`)
        .chancedFluidInput('gtceu:inverse_m_boson 1', 500, 0)
        .outputFluids(`${top} 1`, 'gtceu:tau_neutrino 1')
        .EUt(v.uv, 16)
        .duration(1000)
})

GTM.particle_accelerator('pm_boson_electron')
    .perTick(true)
    .inputFluids('gtceu:electron_neutrino 1', 'gtceu:electron_antrino 1')
    .chancedFluidOutput('gtceu:pm_boson 1', 500, 0)
    .chancedFluidOutput('gtceu:inverse_pm_boson 1', 500, 0)
    .EUt(v.uv, 16)
    .duration(1000)

GTM.particle_accelerator('pm_boson_muon')
    .perTick(true)
    .inputFluids('gtceu:muon_neutrino 1', 'gtceu:muon_antrino 1')
    .chancedFluidOutput('gtceu:pm_boson 1', 2000, 0)
    .chancedFluidOutput('gtceu:inverse_pm_boson 1', 2000, 0)
    .EUt(v.uv, 16)
    .duration(1000)

GTM.particle_accelerator('pm_boson_tau')
    .perTick(true)
    .inputFluids('gtceu:tau_neutrino 1', 'gtceu:tau_antrino 1')
    .chancedFluidOutput('gtceu:pm_boson 1', 4000, 0)
    .chancedFluidOutput('gtceu:inverse_pm_boson 1', 4000, 0)
    .chancedFluidOutput('gtceu:m_boson 1', 50, 0)
    .chancedFluidOutput('gtceu:inverse_m_boson 1', 50, 0)
    .EUt(v.uv, 16)
    .duration(1000)

GTM.fusion_accelerator('lepton-dense_complex_synthesis')
    .perTick(true)
    .inputFluids('gtceu:tau 2', 'gtceu:muon 6', 'gtceu:electron 3', 'gtceu:positron 3')
    .outputFluids('gtceu:lepton-dense_complex 16')
    .EUt(v.uv, 16)
    .duration(1000)

GTM.fusion_accelerator('antilepton-dense_complex_synthesis')
    .perTick(true)
    .inputFluids('gtceu:antitau 2', 'gtceu:antimuon 6', 'gtceu:positron 3', 'gtceu:electron 3')
    .outputFluids('gtceu:antilepton-dense_complex 16')
    .EUt(v.uv, 16)
    .duration(1000)

GTM.fusion_accelerator('ephemeral_naquadite_synthesis')
    .perTick(true)
    .inputFluids('gtceu:transuranic_naquadrium_alloy 8', 'gtceu:darmstadtium 2', 'gtceu:lepton-dense_complex 1', 'gtceu:antilepton-dense_complex 1')
    .outputFluids('gtceu:ephemeral_naquadite 12')
    .EUt(v.uv, 16)
    .duration(1000)


GTM.fusion_accelerator('neutronium_synthesis')
    .perTick(true)
    .inputFluids('gtceu:neutron 150')
    .outputFluids('gtceu:neutronium 10')
    .EUt(v.uv, 16)
    .duration(1000)

// time to serious -- UHV Components (kill me)

GTM.assembly_line('ultimate_battery')
    .itemInputs('6x #gtceu:circuits/uhv', '24x gtceu:double_ephemeral_naquadite_plate', '16x gtceu:energy_cluster', '4x gtceu:exquisite_antisource_gem', '64x gtceu:uhpic_chip', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_transistor', '64x gtceu:advanced_smd_inductor', '64x gtceu:chronocrytic-vhaelsalite_double_wire', '64x gtceu:stellarite_screw', 'gtceu:pulsar')
    .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:polyether_ether_ketone 2304', 'gtceu:mutagen 2592', 'gtceu:transuranic_naquadrium 1152')
    .stationResearch(global.AssemblyLineResearch(event, 'energy_cluster', 'gtceu:energy_cluster', 128, 262144, va.uhv))
    .duration(2000)
    .EUt(300000)




GTM.component_part_assembly('transcendent_dilithide_coil')
.itemInputs('12x gtceu:transcendent_dilithide_double_wire', '12x gtceu:awakened_draconium_foil')
.inputFluids('gtceu:stellarite 216')
.itemOutputs('gtceu:transcendent_dilithide_coil_block')
.stationResearch(global.ComponentPartAssemblyResearch(event, 'transcendent_dilithide_coil', 'gtceu:transcendent_dilithide_single_wire', 48, 102400, va.luv))
.duration(1000)
.EUt(va.uhv)


    //rocketry part 12059710125091251920905190725

//tier 3
GTM.forming_press('tier_3_rocket_plating')
.itemInputs('gtceu:dense_echolumium_plate', 'gtceu:dense_netherite_plate', 'gtceu:dense_ostrite_plate')
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
.stationResearch(global.AssemblyLineResearch(event, 'aetherite_thermostorm_chamber', 'gtceu:auralloy-omega_over_transcendentine_casing', 48, 102400, va.luv))
.duration(4000)
.EUt(131072)

GTM.compressor('enriched_naquadrium_boride_to_rod')
.itemInputs('gtceu:enriched_naquadrium_boride_dust')
.itemOutputs('2x gtceu:enriched_naquadrium_boride_rod')
.duration(10)
.EUt(8192)


GTM.cyclotron('draconium_purification')
    .itemInputs('10x #forge:dusts/draconium')
    .inputFluids('gtceu:carborane_acid 144')
    .itemOutputs('7x gtceu:purified_draconium_dust', 'gtceu:titanium_dust', 'gtceu:rhenium_dust', 'gtceu:naquadah_dust')
    .duration(200)
    .EUt(131072)

GTM.macerator('dragon_head_crushing')
    .itemInputs('dragon_head')
    .itemOutputs('16x irons_spellbooks:dragonskin', 'skeleton_skull')
    .duration(40)
    .EUt(128)

GTM.macerator('dragon_egg_crushing')
    .itemInputs('dragon_egg')
    .itemOutputs('24x irons_spellbooks:dragonskin', 'gtceu:dragon_heart')
    .duration(40)
    .EUt(128)

GTM.macerator('dragon_skin_crushing')
    .itemInputs('irons_spellbooks:dragonskin')
    .itemOutputs('16x quark:dragon_scale')
    .duration(40)
    .EUt(128)

GTM.fluid_solidifier('liquid_to_crystal_dust')
    .inputFluids('gtceu:crystal_methamphetamine 144')
    .notConsumable('gtceu:ball_casting_mold')
    .itemOutputs('gtceu:crystal_methamphetamine_dust')
    .duration(40)
    .EUt(128)

GTM.alloy_blast_smelter('awakened_draconium')
    .itemInputs(
        '8x gtceu:purified_draconium_block',
        '1x apotheotic_additions:gemboundsigil',
        '1x irons_spellbooks:cinder_essence',
        '1x botania:terrasteel_ingot',
        '1x gtceu:dragon_heart',
        '1x gtceu:exquisite_echo_shard_gem',
        '1x irons_spellbooks:dragonskin'
    )
    .outputFluids('gtceu:awakened_draconium 10368')
    .blastFurnaceTemp(13200)
    .duration(72000)
    .circuit(1)
    .EUt(va.luv)

GTM.fusion_accelerator('disassembler')
    .itemInputs('gtceu:large_assembler')
    .itemOutputs('extendedfeatures:disassembler')
    .perTick(true)
    .inputFluids('gtceu:higgs_boson 1')
    .duration(100)
    .EUt(2048)


const FLUIDS = new Set(['oxygen', 'sulfur_dioxide', 'carbon_dioxide', 'fluorine', 'mercury', 'radon', 'oganesson'])

const rollinrollinrollinrollin = [
    { ore: 'cassiterite',          inCount: 15, main: ['10x', 'tin'],             secondary: ['5000', 'oxygen'],                    traces: [] },
    { ore: 'cassiterite_sand',     inCount: 15, main: ['10x', 'tin'],             secondary: ['5000', 'oxygen'],                    traces: [] },
    { ore: 'merrillite',           inCount: 18, main: ['9x', 'calcium'],          secondary: ['7x', 'phosphate'],                   traces: [['2x', 'magnesium'], ['1x', 'sodium'], ['1x', 'rare_earth']] },
    { ore: 'goethite',             inCount: 10, main: ['6x', 'iron'],             secondary: ['2000', 'oxygen'],                    traces: [] },
    { ore: 'olivine',              inCount: 12, main: ['6x', 'magnesium'],        secondary: ['3x', 'silicon'],                     traces: [['3000', 'oxygen']] },
    { ore: 'redstone',             inCount: 20, main: ['4x', 'silicon'],          secondary: ['20x', 'pyrite'],                     traces: [['4x', 'ruby'], ['3000', 'mercury']] },
    { ore: 'cooperite',            inCount: 10, main: ['5x', 'platinum'],         secondary: ['2x', 'palladium'],                   traces: [['1x', 'nickel'], ['1000', 'sulfur_dioxide']] },
    { ore: 'pitchblende',          inCount: 12, main: ['6x', 'uranium'],          secondary: ['3x', 'lead'],                        traces: [['1x', 'thorium']] },
    { ore: 'powellite',            inCount: 10, main: ['4x', 'calcium'],          secondary: ['4x', 'molybdenum'],                  traces: [['4000', 'oxygen']] },
    { ore: 'enstatite',            inCount: 12, main: ['5x', 'magnesium'],        secondary: ['5x', 'silicon'],                     traces: [['3000', 'oxygen']] },
    { ore: 'phenakite',            inCount: 10, main: ['6x', 'beryllium'],        secondary: ['3x', 'silicon'],                     traces: [['4000', 'oxygen']] },
    { ore: 'laurite',              inCount: 8,  main: ['4x', 'ruthenium'],        secondary: ['2000', 'sulfur_dioxide'],            traces: [] },
    { ore: 'bastnasite',           inCount: 15, main: ['6x', 'lanthanum'],        secondary: ['4x', 'cerium'],                      traces: [['2000', 'carbon_dioxide'], ['1000', 'fluorine']] },
    { ore: 'ilmenite',             inCount: 12, main: ['5x', 'iron'],             secondary: ['5x', 'titanium'],                    traces: [['3000', 'oxygen']] },
    { ore: 'electrotine',          inCount: 20, main: ['5x', 'redstone'],         secondary: ['5x', 'gold'],                        traces: [['3x', 'saltpeter'], ['1x', 'diatomite']] },
    { ore: 'chromite',             inCount: 12, main: ['4x', 'iron'],             secondary: ['6x', 'chromium'],                    traces: [['4000', 'oxygen']] },
    { ore: 'scheelite',            inCount: 10, main: ['3x', 'calcium'],          secondary: ['5x', 'tungsten'],                    traces: [['4000', 'oxygen']] },
    { ore: 'sperrylite',           inCount: 10, main: ['4x', 'platinum'],         secondary: ['6x', 'arsenic'],                     traces: [] },
    { ore: 'ulvospinel',           inCount: 12, main: ['6x', 'iron'],             secondary: ['4x', 'titanium'],                    traces: [['3000', 'oxygen']] },
    { ore: 'monazite',             inCount: 15, main: ['4x', 'neodymium'],        secondary: ['3x', 'cerium'],                      traces: [['2x', 'lanthanum'], ['2x', 'thorium'], ['3x', 'phosphate'], ['1x', 'dysprosium']] },
    { ore: 'taenite',              inCount: 15, main: ['9x', 'iron'],             secondary: ['5x', 'nickel'],                      traces: [['1x', 'cobalt']] },
    { ore: 'roquesite',            inCount: 10, main: ['3x', 'copper'],           secondary: ['4x', 'indium'],                      traces: [['2000', 'sulfur_dioxide']] },
    { ore: 'pollucite',            inCount: 12, main: ['5x', 'caesium'],          secondary: ['4x', 'silicon'],                     traces: [['2x', 'aluminium'], ['3000', 'oxygen']] },
    { ore: 'chalcopyrite',         inCount: 15, main: ['5x', 'copper'],           secondary: ['4x', 'iron'],                        traces: [['3000', 'sulfur_dioxide']] },
    { ore: 'bauxite',              inCount: 20, main: ['12x', 'aluminium'],       secondary: ['4000', 'oxygen'],                    traces: [['1x', 'gallium'], ['1x', 'titanium']] },
    { ore: 'hessite',              inCount: 10, main: ['6x', 'silver'],           secondary: ['3x', 'tellurium'],                   traces: [] },
    { ore: 'rhodite',              inCount: 10, main: ['4x', 'gold'],             secondary: ['3x', 'rhodium'],                     traces: [['2x', 'rhenium']] },
    { ore: 'uraninite',            inCount: 12, main: ['7x', 'uranium'],          secondary: ['2x', 'lead'],                        traces: [['1000', 'radon']] },
    { ore: 'altaite',              inCount: 10, main: ['5x', 'lead'],             secondary: ['4x', 'tellurium'],                   traces: [] },
    { ore: 'wulfenite',            inCount: 10, main: ['4x', 'lead'],             secondary: ['4x', 'molybdenum'],                  traces: [['4000', 'oxygen']] },
    { ore: 'berzelianite',         inCount: 10, main: ['6x', 'copper'],           secondary: ['3x', 'selenium'],                    traces: [] },
    { ore: 'pyrochlore',           inCount: 12, main: ['6x', 'niobium'],          secondary: ['2x', 'tantalum'],                    traces: [['2x', 'calcium'], ['1x', 'sodium'], ['1000', 'fluorine']] },
    { ore: 'calaverite',           inCount: 10, main: ['4x', 'gold'],             secondary: ['6x', 'tellurium'],                   traces: [] },
    { ore: 'gallite',              inCount: 10, main: ['3x', 'copper'],           secondary: ['4x', 'gallium'],                     traces: [['2000', 'sulfur_dioxide']] },
    { ore: 'tantalite',            inCount: 12, main: ['6x', 'tantalum'],         secondary: ['2x', 'niobium'],                     traces: [['2x', 'iron'], ['1x', 'manganese'], ['4000', 'oxygen']] },
    { ore: 'blue_topaz',           inCount: 12, main: ['6x', 'aluminium'],        secondary: ['3x', 'silicon'],                     traces: [['2000', 'fluorine'], ['2000', 'oxygen']] },
    { ore: 'tricalcium_phosphate', inCount: 12, main: ['6x', 'calcium'],          secondary: ['4x', 'phosphate'],                   traces: [] },
    { ore: 'tiemannite',           inCount: 8,  main: ['4x', 'mercury'],          secondary: ['3x', 'selenium'],                    traces: [] },
    { ore: 'rutile',               inCount: 12, main: ['7x', 'titanium'],         secondary: ['4000', 'oxygen'],                    traces: [] },
]
rollinrollinrollinrollin.forEach(function (recipeData) {
  const inputItem = recipeData.ore === 'redstone' 
    ? recipeData.inCount + 'x minecraft:redstone'
    : recipeData.inCount + 'x gtceu:' + recipeData.ore + '_dust'

  const recipe = GTM.cyclotron(recipeData.ore + '_cycling')
    .itemInputs(inputItem)
    .duration(200)
    .EUt(va.iv, 3.75)

  function addOutput(entry) {
    if (!entry || entry.length < 2) return
    const count = entry[0]
    const mat = entry[1]

    if (FLUIDS.has(mat)) {
      let amount = count
      if (typeof count === 'string' && count.endsWith('x')) {
        amount = parseInt(count, 10) * 1000
      }
      recipe.outputFluids('gtceu:' + mat + ' ' + amount)
    } else {
      const itemOut = mat === 'redstone'
        ? count + ' minecraft:redstone'
        : count + ' gtceu:' + mat + '_dust'

      recipe.itemOutputs(itemOut)
    }
  }

  if (recipeData.main) addOutput(recipeData.main)
  if (recipeData.secondary) addOutput(recipeData.secondary)
  if (recipeData.traces && recipeData.traces.length > 0) {
    recipeData.traces.forEach(addOutput)
  }
})

// Biomechanical Age starts here (pleaase help me)

GTM.organism_assembly_line('flesh_alloy_casing')
.itemInputs('6x gtceu:tungsten_steel_frame', '36x gtceu:flesh_alloy_plate')
.inputFluids('gtceu:artificial_blood 100', 'gtceu:refined_sentience 5')
.itemOutputs('6x gtceu:flesh_alloy_casing')
.duration(100)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(32768)

const bioPlastics = [
    'polycaprolactam',
    'polyethylene',
    'styrene_butadiene_rubber',
    'epoxy',
    'polyvinyl_chloride',
    'polytetrafluoroethylene',
    'rubber',
    'polyphenylene_sulfide',
    'polybenzimidazole',
    'reinforced_epoxy_resin',
    'silicone_rubber',
    'torlon',
    'polyether_ether_ketone',
    'velyl_rubber'
]

const noPipes = new Set(['polycaprolactam', 'epoxy', 'polyphenylene_sulfide', 'reinforced_epoxy_resin', 'styrene_butadiene_rubber', 'polyvinyl_chloride', 'rubber', 'silicone_rubber'])
const noRods = new Set(['polycaprolactam', 'polyethylene', 'epoxy', 'reinforced_epoxy_resin', 'polybenzimidazole'])
const noFoils = new Set(['epoxy', 'reinforced_epoxy_resin'])

const pipeParts = [
    ['large_fluid_pipe',  6,  1, 'large_pipe_extruder_mold'],
    ['small_fluid_pipe',  1,  1, 'small_pipe_extruder_mold'],
    ['tiny_fluid_pipe',   1,  2, 'tiny_pipe_extruder_mold'],
    ['foil',              1,  4, 'foil_extruder_mold'],
    ['huge_fluid_pipe',  12,  1, 'huge_pipe_extruder_mold'],
    ['block',             9,  1, 'block_extruder_mold'],
    ['normal_fluid_pipe', 3,  1, 'normal_pipe_extruder_mold'],
    ['rod',               1,  2, 'rod_extruder_mold'],
    ['plate',             1,  1, 'plate_extruder_mold'],
]

const pipeParts_names = new Set(['large_fluid_pipe', 'small_fluid_pipe', 'tiny_fluid_pipe', 'huge_fluid_pipe', 'normal_fluid_pipe'])

bioPlastics.forEach(material => {
    pipeParts.forEach(([part, inputCount, outputCount, mold]) => {
        if (noPipes.has(material) && pipeParts_names.has(part)) return
        if (noFoils.has(material) && part === 'foil') return
        if (noRods.has(material) && part === 'rod') return

        const recipe = GTM.biomechanical_extruder(`bio_plastic_${material}_${part}`)
            .itemInputs(`${inputCount}x gtceu:${material}_dust`)
            .itemOutputs(`${outputCount}x gtceu:${material}_${part}`)
            .perTick(true)
            .inputFluids('gtceu:artificial_blood 10')
            .duration(5)
            .EUt(32)
            .cleanroom(CleanroomType.STERILE_CLEANROOM)

        if (mold) recipe.notConsumable(`gtceu:${mold}`)
    })
})

//pick your poison, pick your crime
const greengobberfoo = [
    ['player',  12],
    ['dragon',   8],
    ['piglin',   5],
    ['creeper',  3],
    ['zombie',   1],
]

greengobberfoo.forEach(([mob, thefitnessgrampacertestisamultistageaerobiccapacitytestthatprogressivelygetsmoredifficultasitcontinues]) => {
    GTM.biomechanical_recycler(`skull_to_neurons_${mob}`)
        .itemInputs(`1x ${mob}_head`, `${thefitnessgrampacertestisamultistageaerobiccapacitytestthatprogressivelygetsmoredifficultasitcontinues}x gtceu:petri_dish`)
        .itemOutputs(`${thefitnessgrampacertestisamultistageaerobiccapacitytestthatprogressivelygetsmoredifficultasitcontinues}x gtceu:neuron_dish`, '1x skeleton_skull')
        .inputFluids(`gtceu:artificial_blood ${10*thefitnessgrampacertestisamultistageaerobiccapacitytestthatprogressivelygetsmoredifficultasitcontinues}`)
        .duration(200)
        .EUt(131072)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
})

GTM.biomechanical_imbuer('sentience_to_neuron')
.itemInputs('gtceu:neuron_dish')
.inputFluids('gtceu:refined_sentience 10')
.itemOutputs('gtceu:sentient_neuron_dish')
.perTick(true)
.inputFluids('gtceu:artificial_blood 25')
.EUt(131072)
.duration(200)
.cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.organism_incubation_chamber('sentience_to_neuron')
.itemInputs('16x gtceu:neuron_dish')
.inputFluids('gtceu:refined_sentience 120')
.itemOutputs('16x gtceu:sentient_neuron_dish')
.perTick(true)
.inputFluids('gtceu:artificial_blood 100')
.EUt(131072)
.duration(2000)
.cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('sentient_alloy_incubation')
.itemInputs('30x gtceu:flesh_alloy_dust', '20x gtceu:iridium_dust')
.inputFluids('gtceu:refined_sentience 1440')
.itemOutputs('60x gtceu:sentient_alloy_dust')
.perTick(true)
.inputFluids('gtceu:artificial_blood 100')
.EUt(524288)
.duration(2000)
.cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.organism_assembly_line('sentient_smd_resistor')
.itemInputs('gtceu:flesh_alloy_plate', '4x gtceu:triconite_foil', 'gtceu:sentient_alloy_plate')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:pedot_pss 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_resistor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_resistor', 'gtceu:advanced_smd_resistor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_diode')
.itemInputs('gtceu:indium_gallium_phosphide_dust', 'gtceu:sentient_neuron_dish', '16x gtceu:stem_cells')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:pedot_pss 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('64x gtceu:sentient_smd_diode', 'gtceu:petri_dish')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_diode', 'gtceu:advanced_smd_diode', 48, 65535, va.zpm))
.duration(800)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_transistor')
.itemInputs('gtceu:sentient_alloy_plate',  'gtceu:sentient_neuron_dish', 'gtceu:flesh_alloy_plate')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:pedot_pss 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_transistor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_transistor', 'gtceu:advanced_smd_transistor', 64, 81920, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_capacitor')
.itemInputs('gtceu:sentient_alloy_plate', '2x gtceu:triconite_foil', '16x gtceu:pedot_pss_foil', '2x gtceu:quantum_eye', 'gtceu:iv_field_generator', 'gtceu:flesh_alloy_plate')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:pedot_pss 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_capacitor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_capacitor', 'gtceu:advanced_smd_capacitor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_inductor')
.itemInputs('2x gtceu:flesh_alloy_plate', 'gtceu:titanium_fluid_cell', '2x gtceu:sentient_alloy_plate', '2x gtceu:sentient_neuron_dish')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:cryosporsite 288','gtceu:refined_sentience 100', 'gtceu:pedot_pss 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_inductor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_inductor', 'gtceu:advanced_smd_inductor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_circuit_board')
.itemInputs('24x gtceu:wetware_circuit_board', '4x gtceu:sentient_neuron_dish', 'gtceu:uv_electric_pump', 'gtceu:zpm_sensor', '#gtceu:circuits/zpm', '16x gtceu:astrazine-e_foil')
.inputFluids('gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 2000', 'gtceu:refined_sentience 1000', 'gtceu:crystal_methamphetamine 72')
.itemOutputs('24x gtceu:sentient_circuit_board', '4x gtceu:petri_dish')
.perTick(true)
.inputFluids('gtceu:artificial_blood 10')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(1200)
.EUt(8388608)

GTM.biomechanical_imbuer('sentience_printed_circuit_board')
.itemInputs('gtceu:sentient_circuit_board', '48x gtceu:axiom-re_foil')
.inputFluids('gtceu:mutagen 200')
.itemOutputs('gtceu:sentience_printed_circuit_board')
.outputFluids('gtceu:refined_sentience 10')
.perTick(true)
.inputFluids('gtceu:artificial_blood 10')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(2100)
.EUt(1920)

GTM.organism_assembly_line('biomechanical_factory')
.itemInputs('gtceu:uv_biomechanical_mixer', 'gtceu:uv_biomechanical_recycler', 'gtceu:uv_biomechanical_extruder', 'gtceu:uv_biomechanical_imbuer', '16x #gtceu:circuits/uhv', '64x gtceu:double_flesh_alloy_plate', '16x gtceu:dense_stellarite_plate', '4x gtceu:uhv_electric_motor', '4x gtceu:uhv_electric_pump', '4x gtceu:uhv_robot_arm')
.inputFluids('gtceu:refined_sentience 16000', 'gtceu:artificial_blood 10000', 'gtceu:mutagen 8000', 'gtceu:pedot_pss 6000', 'gtceu:crystal_methamphetamine 4000')
.itemOutputs('gtceu:biomechanical_factory')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'biomechanical_factory', 'biomancy:bio_forge', 64, 102400, va.zpm))
.duration(1000)
.EUt(8388608)

GTM.organism_incubation_chamber('dragon_incubation')
.notConsumable('dragon_egg')
.itemInputs('256x gtceu:stem_cells')
.inputFluids('gtceu:primordial_essence 1000')
.inputFluids('gtceu:sterilized_growth_medium 4000', 'gtceu:refined_sentience 200')
.itemOutputs('dragon_egg', 'gtceu:dragon_heart')
.chancedOutput('dragon_egg', 2500, 0)
.chancedOutput('gtceu:dragon_heart', 2500, 0)
.chancedOutput('dragon_egg', 500, 0)
.chancedOutput('gtceu:dragon_heart', 500, 0)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(5000)
.EUt(2097152)

GTM.organism_incubation_chamber('draconic_creation')
.itemInputs('egg', '16x gtceu:purified_draconium_block', '4x apotheotic_additions:gemboundsigil', '16x irons_spellbooks:cinder_essence',)
.inputFluids('gtceu:primordial_essence 16000', 'gtceu:draconic_serum 16000')
.itemOutputs('dragon_egg')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(40000)
.EUt(2097152)

GTM.organism_assembly_line('sentience_processing_unit')
.itemInputs('gtceu:sentience_printed_circuit_board', '64x gtceu:stem_cells', '8x gtceu:pedot_pss_small_fluid_pipe', '8x gtceu:tainted_titanium_plate', '24x gtceu:silicone_rubber_foil', '12x gtceu:hssd_bolt')
.inputFluids('gtceu:sterilized_growth_medium 1000', 'gtceu:refined_sentience 100', 'gtceu:crystal_methamphetamine 72')
.itemOutputs('gtceu:sentience_processing_unit')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentience_processing_unit', 'gtceu:neuro_processing_unit', 64, 102400, va.zpm))
.duration(1200)
.EUt(320000)

GTM.organism_incubation_chamber('biological_boule')
.notConsumable('gtceu:neutronium_boule')
.itemInputs('16x gtceu:flesh_alloy_dust', '4x gtceu:sentient_alloy_dust', '4x gtceu:neuron_dish')
.itemOutputs('gtceu:biological_boule', '3x gtceu:petri_dish')
.chancedOutput('gtceu:petri_dish', 7500, 0)
.chancedOutput('gtceu:neuron_dish', 2500, 0)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(20000)
.EUt(2097152)

GTM.biomechanical_delaminator('biological_boule')
    .itemInputs('gtceu:biological_boule')
    .inputFluids('gtceu:mutagen 200')
    .itemOutputs('128x gtceu:biological_wafer')
    .outputFluids('gtceu:artificial_blood 100')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(2400)
    .EUt(8388608)

const waferLensMap = {
    cpu: 'light_blue',
    ram: 'green',
    nand_memory: 'gray',
    nor_memory: 'pink',
}

Object.entries(waferLensMap).forEach(([type, lens]) => {
    GTM.biomechanical_imbuer(`b_${type}_wafer_differentiation`)
        .itemInputs('gtceu:biological_wafer', '2x gtceu:neuron_dish')
        .notConsumable('gtceu:blacklight')
        .notConsumable(`gtceu:${lens}_glass_lens`)
        .inputFluids('gtceu:mutagen 100')
        .itemOutputs(`gtceu:b_${type}_wafer`, '2x gtceu:petri_dish')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(400)
        .EUt(va.uev)
})

GTM.biomechanical_imbuer('biological_soc_wafer_differentiation')
    .itemInputs('gtceu:biological_wafer', '2x gtceu:neuron_dish')
    .notConsumable('gtceu:blacklight')
    .notConsumable('gtceu:black_glass_lens')
    .inputFluids('gtceu:mutagen 125')
    .itemOutputs('gtceu:biological_soc_wafer', '2x gtceu:petri_dish')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(400)
    .EUt(va.uiv)

GTM.organism_assembly_line('biological_nano_cpu_wafer_upgrade')
    .itemInputs('gtceu:b_cpu_wafer', '16x gtceu:pedot_pss_foil', '4x gtceu:neuron_dish')
    .inputFluids('gtceu:glowstone 576')
    .itemOutputs('gtceu:b_nano_cpu_wafer')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(800)
    .EUt(va.uev)

GTM.organism_assembly_line('biological_qubit_cpu_wafer_upgrade')
    .itemInputs('gtceu:b_nano_cpu_wafer', '2x gtceu:gravi_star', '4x gtceu:sentient_neuron_dish')
    .inputFluids('gtceu:sterilized_growth_medium 288') 
    .itemOutputs('gtceu:b_qubit_cpu_wafer')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(1200)
    .EUt(va.uev)

    const waferChipMap = {
    ram: 32,
    nand_memory: 32,
    nor_memory: 16,
    cpu: 8,
    nano_cpu: 8,
    qubit_cpu: 4
}

Object.entries(waferChipMap).forEach(([type, count]) => {
    GTM.biomechanical_delaminator(`b_${type}_wafer_to_chip`)
        .itemInputs(`gtceu:b_${type}_wafer`)
        .inputFluids('gtceu:mutagen 50')
        .itemOutputs(`${count}x gtceu:b_${type}_chip`)
        .outputFluids('gtceu:artificial_blood 25')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(200)
        .EUt(8388608)
})

GTM.biomechanical_delaminator('biological_soc_wafer_to_chip')
    .itemInputs('gtceu:biological_soc_wafer')
    .inputFluids('gtceu:mutagen 50')
    .itemOutputs('16x gtceu:biological_soc')
    .outputFluids('gtceu:artificial_blood 25')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(200)
    .EUt(8388608)

// piss break
GTM.autoclave('preon_star')
    .itemInputs('gtceu:gravi_star')
    .inputFluids('gtceu:preon 288')
    .itemOutputs('gtceu:preon_star')
    .duration(160)
    .EUt(122880)

GTM.implosion_compressor('gem_to_dust')
    .itemInputs('gtceu:source_gem', 'gtceu:industrial_tnt')
    .itemOutputs('apotheosis:gem_dust')
    .duration(20)
    .EUt(512)

GTM.implosion_compressor('flawless_to_dust')
    .itemInputs('gtceu:flawless_source_gem', 'gtceu:industrial_tnt')
    .itemOutputs('2x apotheosis:gem_dust')
    .duration(20)
    .EUt(512)

GTM.implosion_compressor('exquisite_to_dust')
    .itemInputs('gtceu:exquisite_source_gem', 'gtceu:industrial_tnt')
    .itemOutputs('4x apotheosis:gem_dust')
    .duration(20)
    .EUt(512)

GTM.fusion_accelerator('transcendent_dilithide')
.perTick(true)
.chancedInput('gtceu:dilithium_dust', 1111, 0)
.inputFluids('gtceu:transcendentine 16')
.outputFluids('gtceu:transcendent_dilithide 32')
.duration(1000)
.EUt(v.uv, 16)

GTM.fusion_accelerator('transcendent_dilithide_alt')
.perTick(true)
.itemInputs('gtceu:tiny_dilithium_dust')
.inputFluids('gtceu:transcendentine 16')
.outputFluids('gtceu:transcendent_dilithide 32')
.duration(1000)
.EUt(v.uv, 16)

GTM.fusion_accelerator('bose-einstein_neutronium')
.chancedInput('gtceu:pulsar', 40, 0)
.perTick(true)
.inputFluids('gtceu:cryothetic_zero 10')
.outputFluids('gtceu:bose-einstein_neutronium 10')
.duration(400)
.EUt(va.uhv)

GTM.fusion_accelerator('stellar_neutronate')
.perTick(true)
.inputFluids('gtceu:bose-einstein_neutronium 20', 'gtceu:stellarite 10', 'gtceu:sulvan_steel 5', 'gtceu:abyssal_netherite 3', 'gtceu:lythera 1', 'gtceu:myxorite 1')
.outputFluids('gtceu:stellar_neutronate_plasma 40')
.duration(400)
.EUt(va.uhv, 4)

GTM.fusion_accelerator('fermium')
.perTick(true)
.inputFluids('gtceu:electron 20', 'gtceu:down_quark 20', 'gtceu:strange_quark 20')
.itemOutputs('gtceu:fermium_gem')
.duration(400)
.EUt(va.uhv, 4)

GTM.fusion_accelerator('antifermium')
.perTick(true)
.inputFluids('gtceu:positron 20', 'gtceu:sur_quark 20', 'gtceu:ordinary_quark 20')
.itemOutputs('gtceu:antifermium_gem')
.duration(400)
.EUt(va.uhv, 4)


const PIPES = ['tiny', 'small', '', 'large', 'huge']
const uhvFilter = /gtceu:(assembler|shaped)\/uhv_.*/

;['gtceu:shaped', 'gtceu:assembler'].forEach(rec => {
  PIPES.forEach(size => {
    const suffix = size ? `${size}_fluid_pipe` : 'fluid_pipe'
    event.replaceInput(
      {id: uhvFilter, type: rec},
      `gtceu:polybenzimidazole_${suffix}`,
      `gtceu:polyether_ether_ketone_${suffix}`
    )
  })

  event.replaceInput({id: uhvFilter, type: rec}, 'gtceu:polybenzimidazole_plate', 'gtceu:polyether_ether_ketone_plate')
  event.replaceInput({id: uhvFilter, type: rec}, Fluid.of('gtceu:polybenzimidazole'), Fluid.of('gtceu:polyether_ether_ketone'))

})

GTM.cyclotron('refined_sentience_ascending')
.itemInputs('4x gtceu:transcendentine_dust')
.inputFluids('gtceu:refined_sentience 1000')
.outputFluids('gtceu:bacterial_sludge 7800', 'gtceu:primordial_essence 200')
.itemOutputs('gtceu:ferroarcane_dust')
.duration(400)
.EUt(va.luv)

GTM.cyclotron('primordial_essence_separation')
.inputFluids('gtceu:primordial_essence 100')
.chancedFluidOutputLogic('xor')
.chancedFluidOutput('gtceu:aether_essence 100', 2500, 0)
.chancedFluidOutput('gtceu:erebus_essence 100', 2500, 0)
.chancedFluidOutput('gtceu:prometheus_essence 100', 2500, 0)
.chancedFluidOutput('gtceu:boreas_essence 100', 2500, 0)
.duration(400)
.EUt(va.luv)

GTM.assembler('lumium_solar_panel')
.itemInputs('6x gtceu:lumium_plate', '8x gtceu:echolumium_rod', '2x gtceu:duct_tape')
.inputFluids('gtceu:aether_essence 10')
.itemOutputs('gtceu:lumium_solar_panel')
.duration(400)
.EUt(512)

GTM.assembler('enderium_lunar_panel')
.itemInputs('6x gtceu:enderium_plate', '8x gtceu:echolumium_rod', '2x gtceu:duct_tape')
.inputFluids('gtceu:erebus_essence 10')
.itemOutputs('gtceu:enderium_lunar_panel')
.duration(400)
.EUt(512)

GTM.assembler('lumium_solar_collector')
.itemInputs('6x gtceu:lumium_solar_panel', '8x gtceu:stainless_steel_plate', '4x gtceu:tungsten_carbide_plate', '2x gtceu:duct_tape')
.inputFluids('gtceu:aether_essence 10')
.itemOutputs('gtceu:lumium_solar_collector')
.duration(400)
.EUt(512)

GTM.assembler('enderium_lunar_collector')
.itemInputs('6x gtceu:enderium_lunar_panel', '8x gtceu:stainless_steel_plate', '4x gtceu:tungsten_carbide_plate', '2x gtceu:duct_tape')
.inputFluids('gtceu:erebus_essence 10')
.itemOutputs('gtceu:enderium_lunar_collector')
.duration(400)
.EUt(512)

GTM.assembler('solar_collector')
.itemInputs('8x gtceu:nitinol_plate', 'gtceu:hv_gas_collector', '2x gtceu:hv_electric_pump', '4x gtceu:hv_super_tank')
.inputFluids('gtceu:aether_essence 25')
.itemOutputs('gtceu:solar_collector')
.duration(400)
.EUt(512)

GTM.assembler('lunar_collector')
.itemInputs('8x gtceu:nitinol_plate', 'gtceu:hv_gas_collector', '2x gtceu:hv_electric_pump', '4x gtceu:hv_super_tank')
.inputFluids('gtceu:erebus_essence 25')
.itemOutputs('gtceu:lunar_collector')
.duration(400)
.EUt(512)

GTM.interstellar_miner("ancient_spaceship_scrap_retrieval")
.chancedInput('ad_astra:tier_4_rocket', 2500, 0)
.notConsumable('8x gtceu:uv_robot_arm')
.inputFluids('gtceu:cryostatic-antilithide 16000')
.itemOutputs('48x gtceu:kha_reh-zul_spaceship_scrap')
.chancedItemOutputLogic('xor')
.chancedOutput('12x gtceu:kha_reh-zul_spaceship_scrap', 7500, 0)
.chancedOutput('24x gtceu:kha_reh-zul_spaceship_scrap', 5000, 0)
.chancedOutput('48x gtceu:kha_reh-zul_spaceship_scrap', 2500, 0)
.duration(10000)
.EUt(va.uhv)

GTM.macerator('spaceship_scrap_pulverizing')
.itemInputs('gtceu:kha_reh-zul_spaceship_scrap')
.itemOutputs('3x gtceu:double_calenite_plate', 'gtceu:double_ephemeral_naquadite_plate')
.chancedItemOutputLogic('xor')
.chancedOutput('gtceu:ruined_hull', 2000, 0)
.chancedOutput('gtceu:ruined_machine_parts', 2000, 0)
.duration(100)
.EUt(va.uhv)

GTM.cyclotron('machine_part_separation')
.itemInputs('gtceu:ruined_machine_parts')
.inputFluids('gtceu:carborane_acid 100')
.chancedItemOutputLogic('xor')
.chancedOutput('gtceu:ruined_micropower_router', 500, 0)
.chancedOutput('gtceu:ruined_precision_drive_mechanism', 500, 0)
.chancedOutput('gtceu:ruined_super_magnetic_core', 500, 0)
.chancedOutput('gtceu:ruined_transmission_assembly', 500, 0)
.outputFluids('gtceu:calenite 1152', 'gtceu:stellarite 576', 'gtceu:bose-einstein_neutronium 144')
.duration(100)
.EUt(va.uhv)

GTM.chemical_vat('ruined_hull_dissolving')
.itemInputs('gtceu:ruined_hull')
.inputFluids('gtceu:infernal_acid 4000')
.outputFluids('gtceu:calenite 4608', 'gtceu:polyether_ether_ketone 2304' , 'gtceu:stellarite 1152', 'gtceu:ephemeral_naquadite 576')
.chancedOutput('gtceu:antimatter_tank', 1000, 0)
.chancedItemOutputLogic('xor')
.chancedOutput('gtceu:ruined_catalyst_core', 500, 0)
.chancedOutput('gtceu:ruined_computational_matrix', 500, 0)
.chancedOutput('gtceu:ruined_high_strength_panel', 500, 0)
.chancedOutput('gtceu:ruined_microfluidic_flow_valve', 500, 0)
.duration(100)
.EUt(va.uhv)
.addData('HeatPressure', 12)
.addData('Temp', 2000)

GTM.particle_accelerator('antimatter_tank_draining')
.itemInputs('gtceu:antimatter_tank')
.itemOutputs('6x gtceu:calenite_plate', '2x gtceu:bose-einstein_neutronium_dust')
.chancedFluidOutput('gtceu:lepton-dense_complex 50', 5000, 0)
.chancedFluidOutput('gtceu:higgs_boson 10', 1000, 0)
.chancedFluidOutput('gtceu:omni_hadron 15', 1500, 0)
.chancedFluidOutput('gtceu:neutron 25', 5000, 0)
.perTick(true)
.inputFluids('gtceu:tau_neutrino 1', 'gtceu:tau_antrino 1')
.duration(100)
.EUt(va.uhv)
.circuit(0)

GTM.particle_accelerator('antimatter_tank_draining_alt')
.itemInputs('gtceu:antimatter_tank')
.itemOutputs('6x gtceu:calenite_plate', '2x gtceu:bose-einstein_neutronium_dust')
.chancedFluidOutput('gtceu:antilepton-dense_complex 50', 5000, 0)
.chancedFluidOutput('gtceu:higgs_boson 10', 1000, 0)
.chancedFluidOutput('gtceu:null_hadron 15', 1500, 0)
.chancedFluidOutput('gtceu:nulltron 25', 5000, 0)
.perTick(true)
.inputFluids('gtceu:tau_neutrino 1', 'gtceu:tau_antrino 1')
.duration(100)
.EUt(va.uhv)
.circuit(1)

const registerComponents = global.registerComponents

registerComponents('uhv', 'abyssal_netherite', 'gtceu:indium-vor-dys-cad_supersolder_alloy', 1152, 'gtceu:polyether_ether_ketone', 576, 'gtceu:korzene', 'gtceu:vaexium')

GTM.large_chemical_reactor('xenon_difluoride')
.inputFluids('gtceu:xenon', 'gtceu:fluorine 2000')
.outputFluids('gtceu:xenon_difluoride')
.duration(400)
.EUt(131072)

GTM.large_chemical_reactor('xenon_tetrafluoride')
.inputFluids('gtceu:xenon_difluoride', 'gtceu:fluorine 2000')
.outputFluids('gtceu:xenon_tetrafluoride')
.duration(400)
.EUt(131072)

GTM.large_chemical_reactor('antimony_pentafluoride')
.itemInputs('6x gtceu:antimony_trifluoride_dust', 'gtceu:silicon_dioxide_dust')
.inputFluids('gtceu:hydrofluoric_acid 2000')
.outputFluids('gtceu:antimony_pentafluoride', 'water 2000')
.itemOutputs('gtceu:silicon_dust')
.circuit(4)
.duration(400)
.EUt(131072)

GTM.mixer('xenon_trifluoride-hexafluoroantimonate')
.inputFluids('gtceu:xenon_tetrafluoride', 'gtceu:antimony_pentafluoride')
.outputFluids('gtceu:xenon_trifluoride-hexafluoroantimonate')
.duration(400)
.EUt(524288)

GTM.phase_alternator('oganesson-xenon_trifluoride')
.inputFluids('gtceu:oganesson', 'gtceu:xenon_trifluoride-hexafluoroantimonate')
.outputFluids('gtceu:oganesson-xenon_trifluoride 900', /*haha you lost 10% from oganessoning too hard*/ 'gtceu:antimony_hexafluoride')
.duration(400)
.EUt(va.uv, 4)

GTM.fusion_reactor('oganesson-xenon_trifluoride_quiescification_cy')
.inputFluids('gtceu:oganesson-xenon_trifluoride 10000', 'gtceu:cryothetic_zero 2500')
.outputFluids('gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 10000')
.duration(40)
.EUt(va.uv, 4)
.fusionStartEU(320000000)

GTM.fusion_reactor('oganesson-xenon_trifluoride_quiescification_he3')
.inputFluids('gtceu:oganesson-xenon_trifluoride 10000', 'gtceu:hypothermic_helium_3_plasma 3500')
.outputFluids('gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 9500')
.duration(40)
.EUt(524288)
.fusionStartEU(320000000)

GTM.electrolyzer('decomposition_electrolyzing_bose-einstein_oganesson-xenon_trifluoride_condensate')
.inputFluids('gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma')
.outputFluids('gtceu:xenon_difluoride', 'gtceu:fluorine')
.itemOutputs('gtceu:oganesson_dust')
.duration(276)
.EUt(30)

GTM.electrolyzer('decomposition_electrolyzing_oganesson-xenon_trifluoride')
.inputFluids('gtceu:oganesson-xenon_trifluoride')
.outputFluids('gtceu:xenon_difluoride', 'gtceu:fluorine')
.itemOutputs('gtceu:oganesson_dust')
.duration(276)
.EUt(30)

GTM.assembly_line('hyperfrost')
.itemInputs('gtceu:aetheric-thermavyte_frame', '3x #gtceu:circuits/uhv', '6x gtceu:dense_echolumium_plate', '3x gtceu:zpm_electric_pump', '4x gtceu:neutronium_normal_fluid_pipe', '32x gtceu:fine_chronocrytic-vhaelsalite_wire', '6x gtceu:hssd_bolt')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608')
.itemOutputs('gtceu:hyperfrost')
.stationResearch(global.AssemblyLineResearch(event, 'hyperfrost', 'gtceu:mega_vacuum_freezer', 72, 65535, va.luv))
.duration(1000)
.EUt(va.uhv, 1.5)

GTM.assembly_line('ore_processing_array')
.itemInputs('16x gtceu:ore_processing_plant', '8x gtceu:uv_conveyor_module', '2x gtceu:uv_electric_pump','16x gtceu:vhaelcryite_plate', '16x gtceu:sulvan_steel_double_wire', '4x #gtceu:circuits/uv')
.inputFluids('gtceu:polyether_ether_ketone 4000', 'gtceu:styrene_butadiene_rubber 2000')
.itemOutputs('gtceu:ore_processing_array')
.duration(1000)
.EUt(524288)

GTM.assembly_line('aetherite_thermostorm_chamber')
.itemInputs('gtceu:pyrathene_frame', '4x #gtceu:circuits/uhv', '4x gtceu:dense_pyrathene_plate', '8x gtceu:uv_electric_pump', '8x gtceu:stellarite_normal_fluid_pipe', '64x gtceu:fine_naquadrium_wire', '16x gtceu:sulvan_steel_bolt')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 9216', 'gtceu:stellarite 2304', 'gtceu:polyether_ether_ketone 1152')
.itemOutputs('gtceu:aetherite_thermostorm_chamber')
.stationResearch(global.AssemblyLineResearch(event, 'aetherite_thermostorm_chamber', 'gtceu:hyperfrost', 144, 262144, va.zpm))
.duration(1000)
.EUt(va.uhv, 2.5)

GTM.assembly_line('crystal_matrix_fusion_computer')
.itemInputs('gtceu:uv_autoclave', 'gtceu:luv_fusion_reactor', '32x gtceu:enriched_naquadrium_foil', '24x gtceu:ephemeral_naquadite_plate', '16x #gtceu:circuits/uv')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608', 'gtceu:polyether_ether_ketone 4000', 'gtceu:styrene_butadiene_rubber 2000')
.itemOutputs('gtceu:crystal_matrix_fusion_computer')
.stationResearch(global.AssemblyLineResearch(event, 'crystal_matrix_fusion_computer', 'gtceu:uv_alloy_smelter', 144, 262144, va.zpm))
.duration(1000)
.EUt(524288)

GTM.assembly_line('component_assembler')
.itemInputs('gtceu:assembly_line', '4x gtceu:gravi_star', '16x gtceu:surreal-pyrathene_plate', '16x gtceu:uv_robot_arm', '24x gtceu:zpm_robot_arm', '8x #gtceu:circuits/uv', '12x #gtceu:circuits/zpm')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608', 'gtceu:polyether_ether_ketone 4000', 'gtceu:styrene_butadiene_rubber 2000')
.itemOutputs('gtceu:component_assembler')
.stationResearch(global.AssemblyLineResearch(event, 'component_assembler', 'gtceu:ruined_machine_parts', 80, 131072, va.luv))
.duration(1000)
.EUt(524288)

GTM.assembly_line('molten_destabilizer')
.itemInputs('gtceu:large_distillery', 'gtceu:uv_electrolyzer', '32x gtceu:hsla_steel_plate', '16x gtceu:astrazine-e_plate', '8x gtceu:uv_electric_pump', '2x gtceu:uv_conveyor_module')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608', 'gtceu:polyether_ether_ketone 4000', 'gtceu:styrene_butadiene_rubber 2000')
.itemOutputs('gtceu:molten_destabilizer')
.stationResearch(global.AssemblyLineResearch(event, 'molten_destabilizer', 'gtceu:uv_centrifuge', 96, 144000, va.luv))
.duration(1000)
.EUt(524288)

GTM.assembly_line('chemical_singularity')
.itemInputs('gtceu:chemical_reaction_vat', 'gtceu:mega_vacuum_freezer', '32x gtceu:exquisite_cryonull_gem', '16x gtceu:dense_vaexium_plate', '8x gtceu:uhv_electric_pump', '2x gtceu:uhv_conveyor_module')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608', 'gtceu:polyether_ether_ketone 4000', 'gtceu:cryothetic_zero 4000', 'gtceu:velyl_rubber 2000')
.itemOutputs('gtceu:chemical_singularity')
.stationResearch(global.AssemblyLineResearch(event, 'chemical_singularity', 'gtceu:chemical_reaction_vat', 96, 144000, va.luv))
.duration(1000)
.EUt(524288)

GTM.assembly_line('mythrolyc_manifold_collapsing_engine')
.itemInputs( '16x gtceu:mythrovirdyne_plate', '16x gtceu:mythrovirdyne_foil', '4x gtceu:uhv_super_magnetic_core', '4x gtceu:uhv_transmission_assembly', '2x #gtceu:circuits/uhv', '16x gtceu:abyssal_netherite_rotor')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 4608', 'gtceu:polyether_ether_ketone 4000')
.itemOutputs('gtceu:mythrolyc_manifold_collapsing_engine')
.stationResearch(global.AssemblyLineResearch(event, 'mythrolyc_manifold_collapsing_engine', 'gtceu:cyclotron', 96, 144000, va.luv))
.duration(1000)
.EUt(524288)


// idek what to put here
GTM.quantum_condensate_exchanger('oganesson-xenon_trifluoride_quiescification')
.inputFluids('gtceu:oganesson-xenon_trifluoride 20000')
.outputFluids('gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 20000')
.duration(100)
.EUt(va.uhv, 4)

GTM.assembler('chithion-flame_casing_casing')
.itemInputs('16x netherrack', 'gtceu:flawless_chithion-flame_gem')
.inputFluids('gtceu:prometheus_essence 25')
.itemOutputs('gtceu:chithion-flame_casing')
.duration(1000)
.EUt(512)

GTM.assembler('cryonull_casing')
.itemInputs('16x ad_astra:glacio_stone', 'gtceu:flawless_cryonull_gem')
.inputFluids('gtceu:boreas_essence 25')
.itemOutputs('gtceu:cryonull_casing')
.duration(1000)
.EUt(512)

GTM.assembler('unreal_engine_intake')
.itemInputs('2x gtceu:sulvan_steel_rotor', '4x gtceu:stellarite_normal_fluid_pipe', 'gtceu:sulvan_steel_casing')
.itemOutputs('2x gtceu:unreal_engine_intake')
.inputFluids('gtceu:polyether_ether_ketone 36')
.duration(1000)
.EUt(512)

GTM.assembler('abyssal_netherite_intake')
.itemInputs('2x gtceu:abyssal_netherite_rotor', '4x gtceu:stellarite_normal_fluid_pipe', 'gtceu:abyssal_netherite_machine_casing')
.itemOutputs('2x gtceu:abyssal_netherite_engine_intake')
.inputFluids('gtceu:polyether_ether_ketone 36')
.duration(1000)
.EUt(512)


const FLAME = global.FLAME

const plasmaRanges = [
    { plasma: 'americium', maxMK: 100 },
    { plasma: 'infernality_catalysm', maxMK: 300 },
]

function getPlasmas(TempMK) {
    return plasmaRanges.filter(p => p.maxMK >= TempMK)
}

function autoFLAME(inputs, output, duration, EUt, TempMK, catalyst) {
    if (catalyst === undefined) catalyst = null
    let plasmas = getPlasmas(TempMK)
    if (plasmas.length === 0) throw new Error('No plasma defined for ' + TempMK + ' MK — add a new entry to plasmaRanges')
    for (let p of plasmas) {
        FLAME(p.plasma, inputs, output, duration, EUt, TempMK, catalyst)
    }
}
autoFLAME(['purified_draconium 10368', 'echo_shard 576'], 'awakened_draconium', 1000, [va.uv, 6], 100, 'gtceu:dragon_heart')
autoFLAME(['ignavyte 8', 'flagrax 5', 'zirconium 3', 'hafnium 2', 'carbon 1'], 'ignatherm', 6704, [va.uv, 4], 50)
autoFLAME(['vhorryte 7', 'ashrax 4', 'niobium 2', 'tantalum 2', 'manganese 1'], 'vhoric_steel', 6456, [va.uv, 4], 50)
autoFLAME(['ghulveyte 6', 'pyrrhovyte 5', 'copper 3', 'electrotine 2', 'platinum 1'], 'pyrghul_alloy', 5393, [va.uv, 4], 50)
autoFLAME(['vaex-thryn 8', 'nexus 7', 'orvaelithe 5', 'palladium 2', 'molybdenum 1'], 'vaexium', 8728, [va.uv, 4], 50)
autoFLAME(['khzaevhul 7', 'ng-vaethos 5', 'naquadah_alloy 3', 'tungsten 2', 'ruthenium 1'], 'korzene', 7377, [va.uv, 4], 50)
autoFLAME(['auralloy-omega 13', 'ignatherm 4', 'vhoric_steel 4', 'pyrghul_alloy 4', 'stellarite 2'], 'abyssal_netherite', 10000, [va.uv, 16], 100)
autoFLAME(['sulvarium 6', 'kraethite 6', 'antisource 3', 'holmium 4', 'nexus 2', 'awakened_draconium 2'], 'sulvan_steel', 9056, [va.uv, 6], 75)
autoFLAME(['nexus_steel 37', 'abyssal_netherite 12', 'korzene 8', 'sulvan_steel 4', 'promethium 3', 'vaexium 2'], 'activated_nexian_pyrite', 20000, [va.uhv, 16], 200, '8x gtceu:cindralite-kethrite_gem')
autoFLAME(['vhoric_steel 4', 'vaexium 3', 'mythryl 2', 'umbracite 2'], 'mythrolyc_umbraloy', 9001, [va.uhv, 6], 150)
autoFLAME(['pyrghul_alloy 4', 'korzene 3', 'mythryl 2', 'viridrine 2'], 'mythrovirdyne', 7500, [va.uhv, 4], 150)

   //------[1]--
    //[2]-[0]----
    //------[3]--

GTM.matrix_fusion('inactivated_infernality_alt')
.itemInputs('gtceu:exquisite_thermavyte_gem', 'gtceu:exquisite_vaelthorium_gem', 'gtceu:exquisite_cindralite_gem', 'gtceu:exquisite_kethrite_gem')
.inputFluids('gtceu:quasifluxed_oganesson-xenon_trifluoride 1000')
.outputFluids('gtceu:inactivated_infernality_plasma 1000')
.duration(100)
.EUt(va.uiv)


GTM.matrix_fusion('inactivated_infernality')
.itemInputs('2x gtceu:exquisite_thermavylized-vaelite_gem','2x gtceu:exquisite_cindralite-kethrite_gem')
.inputFluids('gtceu:quasifluxed_oganesson-xenon_trifluoride 1000')
.outputFluids('gtceu:inactivated_infernality_plasma 1000')
.duration(200)
.EUt(va.uhv)

const alienfusions = {
    "cindralite-kethrite": ['cindralite', 'kethrite'],
    "thermavylized-vaelite": ['thermavyte', 'vaelthorium'],
    "chronocrytic-vhaelsalite": ['chronosite', 'vhaelcryite'],
    "surreal-pyrathene": ['vhaelcryite', 'pyrathene'],
    "vaelkethrite": ['vaelthorium', 'kethrite'],
    "cryonull": ['vorrexite', 'kraethite'],
    "chithion-flame": ['cindralite', 'thermavyte']
}
Object.entries(alienfusions).forEach(([output, inputs]) => {
    let recipe = GTM.matrix_fusion(`${output}`)
        .itemInputs(`gtceu:exquisite_${inputs[0]}_gem`, `gtceu:exquisite_${inputs[1]}_gem`)
        .inputFluids('gtceu:quasifluxed_oganesson-xenon_trifluoride 500')
        .outputFluids('gtceu:oganesson-xenon_trifluoride 250')
        .itemOutputs(`gtceu:${output}_block`)
        .duration(200)
        .EUt(va.uv)

    if (output === 'chronocrytic-vhaelsalite') {
        recipe.itemInputs('gtceu:enriched_naquadrium_dust', 'gtceu:duranium_dust')
    }
})
GTM.matrix_fusion('nexian_activation')
.inputFluids('gtceu:nexian_pyrite 576')
.itemInputs('4x gtceu:pyrathene_gem','4x gtceu:cindralite_gem')
.outputFluids('gtceu:activated_nexian_pyrite 576')
.duration(200)
.EUt(va.uhv)

GTM.electric_blast_furnace('etherealizing_magma')
.inputFluids('gtceu:mystical_undergarden_magma 100000')
.itemInputs('8x gtceu:exquisite_surreal-pyrathene_gem', '8x gtceu:exquisite_cryonull_gem', '8x gtceu:exquisite_chithion-flame_gem')
.outputFluids('gtceu:ethereal_undergarden_magma 100000')
.blastFurnaceTemp(20000)
.duration(100)
.EUt(va.uv)

GTM.molten_destabilizing('ethereal_separation')
.inputFluids('gtceu:ethereal_undergarden_magma 100000')
.outputFluids('gtceu:mythrii_magma 15000', 'gtceu:velian_magma 15000', 'gtceu:myxoric_magma 15000', 'gtceu:lythergic_magma 15000', 'gtceu:umbral_magma 15000', 'gtceu:viridine_magma 15000')
.itemOutputs('4x gtceu:mythical_undergarden_ore_amalgam')
.duration(10000)
.EUt(va.uhv)

GTM.molten_destabilizing('tainted_magmatic_mineral_sludge')
.inputFluids('gtceu:tainted_magmatic_mineral_sludge 100000')
.outputFluids('gtceu:tainted_rich_magmatic_mineral_sludge 50000', 'gtceu:tainted_medium_magmatic_mineral_sludge 25000', 'gtceu:mystical_undergarden_magma 12500')
.itemOutputs('16x gtceu:undergarden_ore_amalgam')
.duration(10000)
.EUt(va.uv)

const undergardemagmamamamiaextravaganzers = {
    mythrii:   ['velian',    'myxoric',   'lythergic'],
    velian:    ['myxoric',   'umbral',    'mythrii'],
    myxoric:   ['lythergic', 'viridine',  'velian'],
    lythergic: ['umbral',    'mythrii',   'viridine'],
    umbral:    ['viridine',  'lythergic', 'myxoric'],
    viridine:  ['mythrii',   'velian',    'umbral'],
}
const minerals = {
    'mythrii': 'mythryte',
    'velian': 'velithite',
    'myxoric': 'myxorinite',
    'lythergic': 'lytherite',
    'umbral': 'umbralite',
    'viridine': 'viridite',
}

Object.entries(minerals).forEach(([name, component]) => {
    GTM.electrolyzer(`${name}_into_${component}`)
    .itemInputs(`gtceu:${name}_dust`)
    .itemOutputs(`gtceu:${component}_dust`)
    .outputFluids('gtceu:primordial_essence 50', 'gtceu:ethereal_undergarden_magma 25')
    .duration(70)
    .EUt(vha.uv)
})

Object.entries(undergardemagmamamamiaextravaganzers).forEach(([innout, outnin]) => {
event.remove({id: `gtceu:extractor/extract_${innout}_dust`})
GTM.molten_destabilizing(`${innout}_into_${outnin[0]}_${outnin[1]}_${outnin[2]}_magma`)
.inputFluids(`gtceu:${innout}_magma 30000`)
.outputFluids(`gtceu:${outnin[0]}_magma 5000`, `gtceu:${outnin[1]}_magma 5000`, `gtceu:${outnin[2]}_magma 5000`, 'gtceu:mystical_undergarden_magma 5000')
.duration(10000)
.EUt(vha.uv)

GTM.manifold_collapsing(`${innout}_collapsing`)
.inputFluids(`gtceu:${innout}_magma 10000`)
.outputFluids(`gtceu:molten_${innout}_mixture 7500`, `gtceu:enriched_${outnin[0]}_mixture 1500`, 'gtceu:mystical_undergarden_magma')
.duration(600)
.EUt(vha.uv)

GTM.autoclave(`enriched_${innout}_coercion`)
.inputFluids(`gtceu:enriched_${innout}_mixture 576`)
.itemInputs('3x gtceu:naquadrium_boride_dust')
.outputFluids(`gtceu:molten_${innout}_mixture 576`)
.itemOutputs('3x gtceu:enriched_naquadrium_boride_dust')
.duration(600)
.EUt(vha.uv)

GTM.molten_destabilizing(`molten_${innout}_mixture`)
.inputFluids(`gtceu:molten_${innout}_mixture 100000`)
.outputFluids(`gtceu:${innout} 66666`, 'gtceu:ethereal_undergarden_magma 8334', 'gtceu:rich_magmatic_mineral_sludge 25000')
.duration(3200)
.EUt(vha.uv)

GTM.cyclotron(`${innout}_dust`)
.inputFluids(`gtceu:${innout} 1250`)
.outputFluids('gtceu:ethereal_undergarden_magma 250')
.itemOutputs(`2x gtceu:${innout}_indi-carbon-natrium_hydroxide_dust`)
.duration(280)
.EUt(vha.uv)

GTM.chemical_vat(`${innout}_indite_dust`)
.itemInputs(`2x gtceu:${innout}_indi-carbon-natrium_hydroxide_dust`)
.inputFluids('gtceu:hydrochloric_acid')
.itemOutputs(`2x gtceu:${innout}_indite_dust`)
.outputFluids('gtceu:sodium_chloride_solution', 'gtceu:carbon_dioxide')
.duration(280)
.EUt(vha.uv)
.addData('HeatPressure', 1.1)
.addData('Temp', 293)

GTM.chemical_vat(`${innout}_dust`)
.itemInputs(`gtceu:${innout}_indite_dust`, '2x gtceu:gallium_sulfide_dust')
.inputFluids( 'gtceu:phosphoric_acid 1296')
.itemOutputs(`gtceu:${innout}_dust`, 'gtceu:indium_gallium_phosphide_dust')
.outputFluids('gtceu:sulfuric_acid', 'gtceu:hydrogen')
.duration(280)
.EUt(vha.uv)
.addData('HeatPressure', 1.25)
.addData('Temp', 1000)

})

const oreComponents = {
    mythryte:   ['mythryl',   'gold',           'indium'],
    velithite:  ['velium',    'zinc',            'bismuth'],
    myxorinite: ['myxorite',  'palladium',       'tellurium'],
    lytherite:  ['lythera',   'condensed_mana',  'selenium'],
    umbralite:  ['umbracite', 'nexus',           'bismuth'],
    viridite:   ['viridrine', 'silver',          'zinc'],
}

Object.entries(oreComponents).forEach(([name, component]) => {
    GTM.electric_blast_furnace(`${name}_separation`)
    .itemInputs(`3x gtceu:${name}_dust`)
    .inputFluids(`gtceu:infernal_acid 100`)
    .itemOutputs(`gtceu:${component[0]}_dust`, `gtceu:${component[1]}_dust`, `gtceu:${component[2]}_dust`)
    .blastFurnaceTemp(20000)
    .duration(400)
    .EUt(va.uv)
})

// after 308532 years, its time to continue the biomechanical age
// gabagool

GTM.quantum_condensate_exchanger(`hypercool_molten_stellar_neutronate`)
    .inputFluids(`gtceu:stellar_neutronate_plasma 144`, `gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 122`)
    .outputFluids(`gtceu:liquid_stellar_neutronate 144`, `gtceu:oganesson-xenon_trifluoride 122`)
    .duration(235)
    .EUt(1677721)

// welcome back bromine chain

GTM.molten_destabilizing('brine')
.inputFluids('gtceu:salt_water 100000')
.outputFluids('gtceu:raw_brine 5000')
.duration(600)
.EUt(8192)
.daytime(false)

GTM.fluid_heater('brine_heating')
.inputFluids('gtceu:raw_brine')
.outputFluids('gtceu:hot_brine')
.duration(10000)
.EUt(2048)

GTM.chemical_reactor('brine_chlorination')
.inputFluids('gtceu:hot_brine', 'gtceu:chlorine')
.outputFluids('gtceu:hot_chlorinated_brominated_brine 2000')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('brine_filtration')
.inputFluids('gtceu:hot_chlorinated_brominated_brine', 'gtceu:chlorine', 'gtceu:steam')
.outputFluids('gtceu:hot_alkaline_debrominated_brine','gtceu:brominated_chlorine_vapor 2000')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('brominated_chlorine_vapor_condensation')
.inputFluids('gtceu:brominated_chlorine_vapor', 'water')
.outputFluids('gtceu:acidic_bromine_solution', 'water')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('bromine_vapor_concentration')
.inputFluids('gtceu:acidic_bromine_solution', 'gtceu:steam')
.outputFluids('gtceu:concentrated_bromine_solution', 'gtceu:acidic_bromine_exhaust')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('acidic_bromine_exhaust_heating')
.inputFluids('gtceu:acidic_bromine_exhaust','gtceu:hot_brine')
.outputFluids('gtceu:hot_chlorinated_brominated_brine', 'gtceu:steam 3000')
.duration(300)
.EUt(2048)

GTM.distillation_tower('bromine_distillation')
.inputFluids('gtceu:concentrated_bromine_solution 2000')
.outputFluids('gtceu:bromine 2000', 'gtceu:chlorine 1000')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('brine_neutralization')
.inputFluids('gtceu:hot_alkaline_debrominated_brine 3000')
.itemInputs('gtceu:potassium_dust')
.outputFluids('gtceu:hot_debrominated_brine 2000')
.itemOutputs('2x gtceu:rock_salt_dust')
.duration(300)
.EUt(2048)

GTM.chemical_reactor('debrominated_brine_raw_brine_mixing')
.inputFluids('gtceu:raw_brine', 'gtceu:hot_debrominated_brine')
.outputFluids('gtceu:hot_brine', 'gtceu:debrominated_brine')
.duration(100)
.EUt(2048)

GTM.centrifuge('debrominated_brine_decomposition')
.inputFluids('gtceu:debrominated_brine')
.outputFluids('gtceu:salt_water')
.duration(100)
.EUt(128)

// back to PEDOT:PSS
GTM.chemical_vat('polystyrene')
.inputFluids('gtceu:oxygen 7500', 'gtceu:styrene 2160', 'gtceu:titanium_tetrachloride 100')
.outputFluids('gtceu:polystyrene 4320')
.duration(200)
.EUt(8192)
.addData('HeatPressure', 9)
.addData('Temp', 450)

GTM.chemical_vat('poly_styrene_sulfonic_acid')
.inputFluids('gtceu:polystyrene 1080', 'gtceu:sulfur_trioxide 1000')
.outputFluids('gtceu:poly_styrene_sulfonic_acid 1080')
.duration(300)
.EUt(8192)
.addData('HeatPressure', 2)
.addData('Temp', 353)

GTM.chemical_vat('sodium_poly_styrene_sulfonate')
.inputFluids('gtceu:poly_styrene_sulfonic_acid 1000')
.itemInputs('7x gtceu:sodium_hydroxide_dust')
.outputFluids('gtceu:sodium_poly_styrene_sulfonate 1000', 'water 1000')
.duration(150)
.EUt(8192)
.addData('HeatPressure', 1)
.addData('Temp', 310)

GTM.chemical_vat('tetrabromothiophene')
.inputFluids('gtceu:thiophene 1000', 'gtceu:bromine 4000')
.outputFluids('gtceu:tetrabromothiophene 1000', 'gtceu:hydrogen_bromide 4000')
.duration(200)
.EUt(512)
.addData('HeatPressure', 1.5)
.addData('Temp', 323)

GTM.chemical_vat('dibromothiophene')
.inputFluids('gtceu:tetrabromothiophene 1000', 'gtceu:hydrogen 2000')
.outputFluids('gtceu:dibromothiophene 1000', 'gtceu:hydrogen_bromide 2000')
.duration(300)
.EUt(1024)
.addData('HeatPressure', 4)
.addData('Temp', 393)

GTM.chemical_vat('edot')
.inputFluids('gtceu:dibromothiophene 1000', 'gtceu:ethylene_glycol 1000')
.outputFluids('gtceu:edot 1000')
.duration(300)
.EUt(32768)
.addData('HeatPressure', 5)
.addData('Temp', 423)

GTM.chemical_vat('pedot_pss')
.inputFluids('gtceu:edot 1000', 'gtceu:sodium_poly_styrene_sulfonate 1000', 'gtceu:iron_iii_chloride 2000')
.itemInputs('gtceu:neuron_dish')
.outputFluids('gtceu:pedot_pss 1296', 'gtceu:iron_ii_chloride 2000')
.itemOutputs('gtceu:salt_dust', 'gtceu:petri_dish')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(600)
.EUt(2048)
.addData('HeatPressure', 1)
.addData('Temp', 313)

GTM.mixer('archons_approved_protein_powder')
.itemInputs('6x gtceu:wheat_dust', '4x sugar', '3x gtceu:blood_proteins_dust', '2x gtceu:enriched_naquadrium_dust', '1x gtceu:crystal_methamphetamine_dust')
.inputFluids('gtceu:refined_sentience')
.itemOutputs('12x gtceu:protein_powder_dust')
.duration(600)
.EUt(2048)

GTM.autoclave('archons_approved_protein_shake')
.itemInputs('4x gtceu:protein_powder_dust')
.inputFluids('milk')
.outputFluids('gtceu:protein_shake')
.duration(600)
.EUt(2048)

GTM.autoclave('draconic_serum')
.itemInputs('4x gtceu:draconium_dust', 'irons_spellbooks:dragonskin')
.inputFluids('gtceu:protein_shake 4000')
.outputFluids('gtceu:draconic_serum 4000')
.duration(600)
.EUt(2048)

const FS = 'gtceu:fermentation_bacterium'
const XC = 'gtceu:aromatic_hydrocarbon_bacterium' 
const PS = 'gtceu:petroleum_dissolving_bacterium'
const OS = 'gtceu:octane_eating_bacterium'
const BC = 'gtceu:bitumen_combusting_bacterium'
const CV = 'gtceu:volatile_carbon_gas_bacterium'

;[
    {main: FS, primary: 'ethanol', secondary: 'acetic_acid', terniary: 'methanol'},
    {main: XC, primary: 'creosote', secondary: 'naphthalene', terniary: 'phenol'},
    {main: PS, primary: 'benzene', secondary: 'ethane', terniary: 'acetone'},
    {main: OS, primary: 'octane', secondary: 'propane', terniary: 'butane'},
    {main: BC, primary: 'toluene', secondary: 'butadiene', terniary: 'propene'},
    {main: CV, primary: 'methane', secondary: 'butene', terniary: 'ethylene'}
].forEach(superSkip => {
        const { main, primary, secondary, terniary } = superSkip
        const id = main.split(':')[1] 
        GTM.electrolyzer(`${id}_bacterium`)
            .inputFluids(`${main} 2000`)
            .outputFluids(`gtceu:${primary} 1000`, `gtceu:${secondary} 1000`, `gtceu:${terniary} 1000`)
            .duration(80)
            .EUt(7680)

        GTM.bacterial_hydrocarbon_harvester(`${id}_colony_harvesting`)
        .itemInputs(`gtceu:${id}_colony`, '24x sugar')
        .inputFluids('gtceu:distilled_water', 'gtceu:protein_shake')
        .outputFluids(`gtceu:${primary} 7500`, `gtceu:${secondary} 3750`, `gtceu:${terniary} 1250`, `${main} 2500`, `gtceu:bacteria 2000`)
        .duration(100)
        .EUt(va.zpm)
    })

    ;[
        {output: 'torlon 3024', fluidInput: [`${PS} 4125`, `${FS} 850`, `${BC} 825`, 'gtceu:nitric_acid 975', 'water 9250'], inputItem: 'gtceu:trimellitic_anhydride_dust', voltage: vha.uxv, duration: 274},
        {output: 'polyvinyl_chloride 1512', fluidInput: [`${CV} 950`, 'gtceu:hydrochloric_acid 875', 'gtceu:oxygen 6250'], inputItem: false, voltage: vha.ev, duration: 96},
        {output: 'polyphenylene_sulfide 1000', fluidInput: [`${PS} 1425`, 'gtceu:oxygen 6500'], inputItem: '1x gtceu:sulfur_dust', voltage: vha.ev, duration: 216},
        {output: 'epoxy 1000', fluidInput: [`${BC} 1875`, `${PS} 1625`, 'gtceu:hypochlorous_acid 750'], inputItem: false, voltage: vha.luv, duration: 150},
        {output: 'polyvinyl_butyral 720', fluidInput: [`${BC} 875`, `${CV} 500`, `${FS} 500`, 'gtceu:oxygen 2500'], inputItem: 'gtceu:carbon_dust', voltage: vha.luv, duration: 75},
        {output: 'velyl_rubber 9072', fluidInput: [`${CV} 9625`, `${BC} 1375`, `${FS} 250`, 'gtceu:fluorine 18500'], inputItem: '7x gtceu:velium_dust', voltage: vha.uev, duration: 83},
        {output: 'silicone_rubber 1296', fluidInput: [`${CV} 2000`, 'gtceu:tetrachlorosilane 1000'], inputItem: 'gtceu:sulfur_dust', voltage: va.ev, duration: 25},
        {output: 'pedot_pss 864', fluidInput: [`${BC} 11250`, `${FS} 9750`, `${PS} 7500`, `${CV} 4250`, 'gtceu:bromine 25'], inputItem: ['gtceu:sulfur_dust', '6x minecraft:sugar'], voltage: va.uev / 3, duration: 117},
        {output: 'polyether_ether_ketone 3456', fluidInput: [`${BC} 1250`, `${PS} 625`, 'gtceu:oxygen 750'], inputItem: false, voltage: va.uhv / 3, duration: 42},
        {output: 'polybenzimidazole 9072', fluidInput: [`${PS} 24625`, `${CV} 16250`, `${XC} 7625`, 'gtceu:ammonia 6500'], inputItem: 'gtceu:copper_dust', voltage: vha.zpm, duration: 285}
    ].forEach(superSkip => {
        const { output, fluidInput, inputItem, voltage, duration } = superSkip;
        const recipe = GTM.bacteria_synthesizer(`${output.split(' ')[0]}_synthesis`)
            recipe.inputFluids(fluidInput)
            recipe.outputFluids(`gtceu:${output}`)
            recipe.duration(duration)
            recipe.EUt(voltage)
            recipe.cleanroom(CleanroomType.STERILE_CLEANROOM)
            if(inputItem) {recipe.itemInputs(inputItem)}
    })

GTM.cyclotron('sentience_extraction')
.inputFluids('gtceu:martian_bacterial_sludge 100000')
.outputFluids('gtceu:raw_growth_medium 24000', 'gtceu:mutagen 10000', 'gtceu:refined_sentience 1000')
.itemOutputs('45x gtceu:organism_amalgam', '20x gtceu:collagen_dust')
.duration(1000)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(524288)

GTM.autoclave('alien_enrichment')
.inputFluids('gtceu:martian_bacterial_sludge 9216')
.itemInputs('24x gtceu:enriched_naquadrium_boride_dust')
.outputFluids('gtceu:enriched_martian_bacterial_sludge 9216')
.itemOutputs('24x gtceu:naquadrium_boride_dust')
.duration(200)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(2097152)

GTM.manifold_collapsing('colony_separation')
.inputFluids('gtceu:enriched_martian_bacterial_sludge 576')
.chancedItemOutputLogic('xor')
.chancedOutput(`2x ${FS}_colony`, 1666, 0)
.chancedOutput(`2x ${XC}_colony`, 1666, 0)
.chancedOutput(`2x ${PS}_colony`, 1666, 0)
.chancedOutput(`2x ${OS}_colony`, 1666, 0)
.chancedOutput(`2x ${BC}_colony`, 1666, 0)
.chancedOutput(`2x ${CV}_colony`, 1666, 0)
.outputFluids('gtceu:martian_bacterial_sludge 144')
.duration(10)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(2097152)


// aigh circuitry time (finally)

GTM.organism_assembly_line('sentient_microchip_processor')
.itemInputs(`gtceu:sentience_processing_unit`, 'gtceu:b_cpu_chip', '4x gtceu:sentient_smd_resistor', '4x gtceu:sentient_smd_capacitor', '4x gtceu:sentient_smd_transistor', '2x gtceu:fine_triconite_wire')
.inputFluids('gtceu:mutagen 72', 'gtceu:crystal_methamphetamine 72')
.itemOutputs('4x gtceu:sentient_microchip_processor')
.duration(200)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.luv)

GTM.organism_assembly_line('sentient_microchip_processor_soc')
.itemInputs(`gtceu:sentience_processing_unit`, 'gtceu:biological_soc', '2x gtceu:triconite_bolt')
.inputFluids('gtceu:mutagen 72', 'gtceu:crystal_methamphetamine 72', 'gtceu:pedot_pss 288')
.itemOutputs('12x gtceu:sentient_microchip_processor')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_microchip_processor_alt', 'gtceu:b_cpu_chip', 16, 16000, va.zpm))
.duration(50)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.zpm)

GTM.organism_assembly_line('sentient_processor')
.itemInputs('gtceu:sentience_processing_unit', '2x gtceu:sentient_microchip_processor', 'gtceu:b_nano_cpu_chip', '8x gtceu:sentient_smd_capacitor', '8x gtceu:sentient_smd_transistor', '8x gtceu:fine_abyssal_netherite_wire')
.inputFluids('gtceu:mutagen 144', 'gtceu:crystal_methamphetamine 288')
.itemOutputs('2x gtceu:sentient_processor')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_processor', 'gtceu:sentient_microchip_processor', 16, 32000, va.zpm))
.duration(200)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.uv)

GTM.organism_assembly_line('sentient_processor_assembly')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x gtceu:sentient_processor', '8x gtceu:sentient_smd_inductor', '16x gtceu:sentient_smd_capacitor', '32x gtceu:b_ram_chip', '24x gtceu:fine_abyssal_netherite_wire')
.inputFluids('gtceu:mutagen 144', 'gtceu:crystal_methamphetamine 288')
.itemOutputs('gtceu:sentient_processor_assembly')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_processor_assembly', 'gtceu:sentient_processor', 16, 64000, va.zpm))
.duration(400)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.uv)

GTM.organism_assembly_line('sentient_super_computer')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x gtceu:sentient_processor_assembly', '12x gtceu:sentient_smd_diode', '24x gtceu:b_nor_memory_chip', '48x gtceu:b_ram_chip', '36x gtceu:fine_abyssal_netherite_wire', '48x gtceu:pedot_pss_foil', '6x gtceu:abyssal_netherite_plate')
.inputFluids('gtceu:mutagen 1152', 'gtceu:crystal_methamphetamine 2304')
.itemOutputs('gtceu:sentient_processor_computer')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_processor_computer', 'gtceu:sentient_processor_assembly', 32, 12800, va.uv))
.duration(400)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.uv)

GTM.organism_assembly_line('sentient_mainframe')
.itemInputs('2x gtceu:abyssal_netherite_frame', '2x gtceu:sentient_processor_computer', '48x gtceu:sentient_smd_diode', '48x gtceu:sentient_smd_capacitor', '48x gtceu:sentient_smd_transistor', '48x gtceu:sentient_smd_resistor', '48x gtceu:sentient_smd_inductor', '64x gtceu:pedot_pss_foil', '48x gtceu:b_ram_chip', '24x gtceu:chronocrytic-vhaelsalite_double_wire', '12x gtceu:abyssal_netherite_plate')
.inputFluids('gtceu:mutagen 2880', 'gtceu:crystal_methamphetamine 1152', 'gtceu:pedot_pss 1152')
.itemOutputs('gtceu:sentient_processor_mainframe')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_processor_mainframe', 'gtceu:sentient_processor_computer', 144, 512000, va.uhv))
.duration(20000)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(va.uhv)

// Equilibrium Chain

GTM.assembly_line('eternal_power_core')
.itemInputs('64x gtceu:double_stellar_neutronate_plate', '64x gtceu:double_stellar_neutronate_plate', '16x gtceu:stellar_neutronate_gear', '16x gtceu:stellar_neutronate_rod', '64x gtceu:stellar_neutronate_screw')
.inputFluids('gtceu:liquid_stellar_neutronate 9216')
.itemOutputs('kubejs:eternal_power_core')
.duration(20000)
.EUt(va.uhv)

GTM.autoclave('eternal_hell_core')
.itemInputs('kubejs:eternal_power_core')
.perTick(true)
.inputFluids('gtceu:prometheus_essence 100')
.itemOutputs('kubejs:eternal_hell_core')
.duration(2000)
.EUt(va.uhv)

GTM.autoclave('eternal_frost_core')
.itemInputs('kubejs:eternal_power_core')
.perTick(true)
.inputFluids('gtceu:boreas_essence 100')
.itemOutputs('kubejs:eternal_frost_core')
.duration(2000)
.EUt(va.uhv)

// its fucking time (CUEEEE THE DRUUUUM ROOOOOOOLLLLLS!!! 🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🔥)

GTM.particle_accelerator(`preon_collision`)
.chancedItemOutputLogic('xor')
.chancedOutput('gtceu:conceptual_matter_nexon', 5001, 0)
.chancedOutput('gtceu:conceptual_antimatter_nexon', 4999, 0)
.perTick(true)
.inputFluids('gtceu:preon 2')
.duration(20)
.EUt(va.uhv, 8)

Object.entries({
    matter: 'antimuon',
    antimatter: 'muon'
}).forEach(([side, lepton]) => {
    GTM.particle_accelerator(`${side}_nexon_charge_splitting`)
    .inputItems(`gtceu:conceptual_${side}_nexon`)
    .itemOutputs(`gtceu:positive_${side}_nexon`, `gtceu:neutral_${side}_nexon` `gtceu:negative_${side}_nexon`)
    .perTick(true)
    .inputFluids(`gtceu:${lepton} 5`)
    .duration(20)
    .EUt(va.uhv, 8)
})

const oppositeSide = { matter: 'antimatter', antimatter: 'matter' }
const chargeLepton = { positive: 'tau', negative: 'antitau' }

Object.keys(oppositeSide).forEach(side => {
    Object.entries(chargeLepton).forEach(([charge, lepton]) => {
        GTM.equalizer(`${charge}_${side}_nexon_neutralization`)
        .inputItems(`gtceu:${charge}_${side}_nexon`)
        .inputFluids(`gtceu:${lepton} 100`)
        .chancedOutput(`gtceu:neutral_${side}_nexon`, 5000, 0)
        .chancedOutput(`gtceu:neutral_${oppositeSide[side]}_nexon`, 2500, 0)
        .chancedOutput('gtceu:darkmatter_hadron', 2500, 0)
        .duration(20)
        .EUt(va.uhv, 8)
    })
})
















































































































































































































































































































































































































































































































































































































































































// END of late game 

    const voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
    }
    Object.entries(voltagetierexpensive).forEach(([voltage, material]) => {

    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:wood_plate', 'gtceu:polyether_ether_ketone_plate')
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, new RegExp(`#forge:plates/.*`), `gtceu:${material}_plate`)

    event.shaped(`gtceu:${voltage}_machine_casing`, [`MMM`, `MWM`, `MMM`], {M: `gtceu:${material}_plate`, W: "#forge:tools/wrenches"}).id(`gtceu:casing_${voltage}`)

    event.replaceInput({id: `gtceu:shaped/uev_machine_hull`}, 'gtceu:red_alloy_single_cable', `gtceu:transuranic_naquadrium_alloy_single_wire`)

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
    'gtceu:chronocrytic-vhaelsalite_single_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:red_alloy_quadruple_cable',
    'gtceu:chronocrytic-vhaelsalite_single_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:tin_rotor',
    'gtceu:ephemeral_naquadite_rotor'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    '#forge:glass',
    'gtceu:fusion_glass'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_quadruple_wire',
    'gtceu:sulvan_steel_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_double_wire',
    'gtceu:sulvan_steel_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:gold_single_wire',
    'gtceu:osmium_steel_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:iron_rod',
    'gtceu:axiom-re_rod'
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



})