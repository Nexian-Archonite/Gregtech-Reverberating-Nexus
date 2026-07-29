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

//I'm Atomicing it so hard I'm about to Preon
//Rebirth of the "Im Quarking it so hard, I'm about to Gluon 😩"

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

GTM.particle_accelerator('top_bottom_to_omega_hadron')
    .perTick(true)
    .inputFluids('gtceu:top_quark 1', 'gtceu:bottom_quark 1', 'gtceu:strange_quark 1')
    .outputFluids('gtceu:omega_hadron 1')
    .EUt(v.uhv, 16)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('inferior_superior_to_null_hadron')
    .perTick(true)
    .inputFluids('gtceu:inferior_quark 1', 'gtceu:superior_quark 1', 'gtceu:ordinary_quark 1')
    .outputFluids('gtceu:null_hadron 1')
    .EUt(v.uhv, 16)
    .duration(200)
    .circuit(1)

GTM.particle_accelerator('omega_annihilation_to_omniparticle')
    .perTick(true)
    .inputFluids('gtceu:omega_hadron 1', 'gtceu:null_hadron 1')
    .outputFluids('gtceu:omniparticle_plasma 1')
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
    .outputFluids('gtceu:tau 1', 'gtceu:antitau 1')
    .chancedFluidOutput('gtceu:charm_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:curse_quark 1', 500, 0)
    .chancedFluidOutput('gtceu:glueball 1', 100, 0)
    .EUt(v.uv, 4)
    .duration(500)
    .circuit(3)

GTM.particle_accelerator('third_gen_lepton_production_alt')
    .perTick(true)
    .inputFluids('gtceu:bottom_quark 1', 'gtceu:superior_quark 1')
    .outputFluids('gtceu:tau 1', 'gtceu:antitau 1')
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


GTM.fusion_accelerator('neutronium_synthesis')
    .perTick(true)
    .inputFluids('gtceu:neutron 150')
    .outputFluids('gtceu:neutronium 10')
    .EUt(v.uv, 16)
    .duration(1000)

GTM.fusion_accelerator('ephemeral_naquadite_synthesis')
    .perTick(true)
    .inputFluids('gtceu:transuranic_naquadrium_alloy 8', 'gtceu:darmstadtium 2', 'gtceu:lepton-dense_complex 1', 'gtceu:antilepton-dense_complex 1')
    .outputFluids('gtceu:ephemeral_naquadite 12')
    .EUt(v.uv, 16)
    .duration(1000)

// time to serious -- UHV Components (kill me)

GTM.assembly_line('ultimate_battery')
    .itemInputs('6x #gtceu:circuits/uhv', '24x gtceu:double_ephemeral_naquadite_plate', '16x gtceu:energy_cluster', '4x gtceu:exquisite_antisource_gem', '64x gtceu:uhpic_chip', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_transistor', '64x gtceu:advanced_smd_inductor', '64x gtceu:chronocrytic-vhaelsalite_double_wire', '64x gtceu:stellarite_screw', 'gtceu:pulsar')
    .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:polyether_ether_ketone 2304', 'gtceu:mutagen 2592', 'gtceu:transuranic_naquadrium 1152')
    .itemOutputs('gtceu:max_battery')
    .stationResearch(b => b.researchStack('gtceu:energy_cluster').EUt(va.uhv).CWUt(128, 262144))
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
.stationResearch(b => b.researchStack('gtceu:auralloy-omega_over_transcendentine_casing').EUt(va.luv).CWUt(48, 102400))
.duration(4000)
.EUt(131072)

GTM.compressor('enriched_naquadrium_boride_to_rod')
.itemInputs('gtceu:enriched_naquadrium_boride_dust')
.itemOutputs('2x gtceu:enriched_naquadrium_boride_rod')
.duration(10)
.EUt(8192)

GTM.macerator('draconium_to_dust')
.itemInputs('draconicevolution:draconium_ingot')
.itemOutputs('draconicevolution:draconium_dust')
.duration(40)
.EUt(128)

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
    .itemOutputs('24x irons_spellbooks:dragonskin', 'draconicevolution:dragon_heart')
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

GTM.cyclotron('sentience_extraction')
.inputFluids('gtceu:martian_bacterial_sludge 100000')
.outputFluids('gtceu:raw_growth_medium 24000', 'gtceu:mutagen 10000', 'gtceu:refined_sentience 1000')
.itemOutputs('45x gtceu:organism_amalgam', '20x gtceu:collagen_dust')
.duration(1000)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.EUt(524288)

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
    'polyether_ether_ketone'
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
            .duration(10)
            .EUt(512)
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
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:polyether_ether_ketone 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_resistor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_resistor', 'gtceu:advanced_smd_resistor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_diode')
.itemInputs('gtceu:indium_gallium_phosphide_dust', 'gtceu:sentient_neuron_dish', '16x gtceu:stem_cells')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:polyether_ether_ketone 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('64x gtceu:sentient_smd_diode', 'gtceu:petri_dish')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_diode', 'gtceu:advanced_smd_diode', 48, 65535, va.zpm))
.duration(800)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_transistor')
.itemInputs('gtceu:sentient_alloy_plate',  'gtceu:sentient_neuron_dish', 'gtceu:flesh_alloy_plate')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:polyether_ether_ketone 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_transistor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_transistor', 'gtceu:advanced_smd_transistor', 64, 81920, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_capacitor')
.itemInputs('gtceu:sentient_alloy_plate', '2x gtceu:triconite_foil', '16x gtceu:polyether_ether_ketone_foil', '2x gtceu:quantum_eye', 'gtceu:iv_field_generator', 'gtceu:flesh_alloy_plate')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:refined_sentience 100', 'gtceu:polyether_ether_ketone 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_capacitor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_capacitor', 'gtceu:advanced_smd_capacitor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_smd_inductor')
.itemInputs('2x gtceu:flesh_alloy_plate', 'gtceu:titanium_fluid_cell', '2x gtceu:sentient_alloy_plate', '2x gtceu:sentient_neuron_dish')
.inputFluids('gtceu:artificial_blood 1000', 'gtceu:cryosporsite 288','gtceu:refined_sentience 100', 'gtceu:polyether_ether_ketone 144', 'gtceu:crystal_methamphetamine 36')
.itemOutputs('32x gtceu:sentient_smd_inductor')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'sentient_smd_inductor', 'gtceu:advanced_smd_inductor', 48, 65535, va.zpm))
.duration(200)
.EUt(8388608)

GTM.organism_assembly_line('sentient_circuit_board')
.itemInputs('16x gtceu:wetware_circuit_board', '4x gtceu:sentient_neuron_dish', 'gtceu:uv_electric_pump', 'gtceu:zpm_sensor', '#gtceu:circuits/zpm', '16x gtceu:astrazine-e_foil')
.inputFluids('gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 2000', 'gtceu:refined_sentience 1000', 'gtceu:crystal_methamphetamine 72')
.itemOutputs('16x gtceu:sentient_circuit_board', '4x gtceu:petri_dish')
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
.duration(1000)
.EUt(2097152)

GTM.organism_assembly_line('biomechanical_factory')
.itemInputs('gtceu:uv_biomechanical_mixer', 'gtceu:uv_biomechanical_recycler', 'gtceu:uv_biomechanical_extruder', 'gtceu:uv_biomechanical_imbuer', '16x #gtceu:circuits/uhv', '64x gtceu:double_flesh_alloy_plate', '16x gtceu:dense_stellarite_plate', '4x gtceu:uhv_electric_motor', '4x gtceu:uhv_electric_pump', '4x gtceu:uhv_robot_arm')
.inputFluids('gtceu:refined_sentience 16000', 'gtceu:artificial_blood 10000', 'gtceu:mutagen 8000', 'gtceu:polyether_ether_ketone 6000', 'gtceu:crystal_methamphetamine 4000')
.itemOutputs('gtceu:biomechanical_factory')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(event, 'biomechanical_factory', 'biomancy:bio_forge', 64, 102400, va.zpm))
.duration(1000)
.EUt(8388608)

GTM.organism_incubation_chamber('dragon_incubation')
.notConsumable('dragon_egg')
.itemInputs('256x gtceu:stem_cells')
.inputFluids('gtceu:sterilized_growth_medium 4000', 'gtceu:refined_sentience 200')
.itemOutputs('dragon_egg', 'draconicevolution:dragon_heart')
.chancedOutput('dragon_egg', 2500, 0)
.chancedOutput('draconicevolution:dragon_heart', 2500, 0)
.chancedOutput('dragon_egg', 500, 0)
.chancedOutput('draconicevolution:dragon_heart', 500, 0)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(5000)
.EUt(2097152)

GTM.organism_assembly_line('sentience_processing_unit')
.itemInputs('gtceu:sentience_printed_circuit_board', '64x gtceu:stem_cells', '8x gtceu:polyether_ether_ketone_small_fluid_pipe', '8x gtceu:tainted_titanium_plate', '24x gtceu:silicone_rubber_foil', '12x gtceu:hssd_bolt')
.inputFluids('gtceu:sterilized_growth_medium 1000', 'gtceu:refined_sentience 100', 'gtceu:crystal_methamphetamine 72')
.itemOutputs('gtceu:sentience_processing_unit')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(5000)
.EUt(8388608)

GTM.organism_incubation_chamber('biological_boule')
.notConsumable('gtceu:neutronium_boule')
.itemInputs('16x gtceu:flesh_alloy_dust', '4x gtceu:sentient_alloy_dust', '4x gtceu:neuron_dish')
.itemOutputs('gtceu:biological_boule', '3x gtceu:petri_dish')
.chancedOutput('gtceu:petri_dish', 7500, 0)
.chancedOutput('gtceu:neuron_dish', 2500, 0)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(20000)
.EUt(8388608)

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
        .EUt(8388608)
})

GTM.biomechanical_imbuer('biological_soc_wafer_differentiation')
    .itemInputs('gtceu:biological_wafer', '2x gtceu:neuron_dish')
    .notConsumable('gtceu:blacklight')
    .notConsumable('gtceu:black_glass_lens')
    .inputFluids('gtceu:mutagen 125')
    .itemOutputs('gtceu:biological_soc_wafer', '2x gtceu:petri_dish')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(400)
    .EUt(8388608)

GTM.organism_assembly_line('biological_nano_cpu_wafer_upgrade')
    .itemInputs('gtceu:b_cpu_wafer', '16x gtceu:polyether_ether_ketone_foil', '4x gtceu:neuron_dish')
    .inputFluids('gtceu:glowstone 576')
    .itemOutputs('gtceu:b_nano_cpu_wafer')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(800)
    .EUt(8388608)

GTM.organism_assembly_line('biological_qubit_cpu_wafer_upgrade')
    .itemInputs('gtceu:b_nano_cpu_wafer', '2x gtceu:gravi_star', '4x gtceu:sentient_neuron_dish')
    .inputFluids('gtceu:sterilized_growth_medium 288') 
    .itemOutputs('gtceu:b_qubit_cpu_wafer')
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .duration(1200)
    .EUt(8388608)

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
.chancedFluidOutput('gtceu:aether_essence 50', 5000, 0)
.chancedFluidOutput('gtceu:erebus_essence 50', 5000, 0)
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
.chancedFluidOutput('gtceu:omega_hadron 15', 1500, 0)
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

const UHVcomponents = {
    catalyst_core: ['4x gtceu:sulvarium-over-kraethite_steel_rod', 'gtceu:fusion_glass', 'gtceu:preon_star', '32x gtceu:fine_transuranic_naquadrium_alloy_wire', 'gtceu:uv_emitter', '4x gtceu:tainted_zircalloy_ring', 'gtceu:naquadria 576'],
    computational_matrix: ['gtceu:sulvarium-over-kraethite_steel_frame', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '3x #gtceu:circuits/zpm', '4x gtceu:astrazine-e_single_cable', '4x gtceu:transuranic_naquadrium_alloy_bolt', 'gtceu:indium-vor-dys-cad_supersolder_alloy 2304'],
    high_strength_panel: ['gtceu:dense_sulvarium-over-kraethite_steel_plate', '#gtceu:circuits/zpm', '4x gtceu:tainted_zircalloy_screw', 'gtceu:polyether_ether_ketone 576'],
    microfluidic_flow_valve: ['gtceu:uv_fluid_regulator', 'gtceu:stellarite_small_fluid_pipe', '2x gtceu:sulvarium-over-kraethite_steel_plate', '4x gtceu:sulvarium-over-kraethite_steel_round', '4x gtceu:styrene_butadiene_rubber_ring', '2x gtceu:sulvarium-over-kraethite_steel_ring', 'gtceu:polyether_ether_ketone 576'],
    micropower_router: ['4x gtceu:astrazine-e_double_cable', '2x gtceu:sulvarium-over-kraethite_steel_plate', '#gtceu:circuits/uv', '4x gtceu:sulvarium-over-kraethite_steel_bolt', 'gtceu:polybenzimidazole 576'],
    precision_drive_mechanism: ['gtceu:sulvarium-over-kraethite_steel_frame', 'gtceu:uv_electric_motor', '#gtceu:circuits/uv', 'gtceu:tri-osmic_matrix_gear', 'gtceu:small_sulvarium-over-kraethite_steel_gear', '8x gtceu:sulvarium-over-kraethite_steel_round', 'gtceu:triconite 2000'],
    super_magnetic_core: ['gtceu:long_bose-einstein_neutronium_rod', '2x gtceu:cryosporsite_rod', '3x gtceu:sulvarium-over-kraethite_steel_rod', '16x gtceu:fine_tainted_zircalloy_wire', '2x gtceu:stellarite_tiny_fluid_pipe', 'gtceu:hypothermic_helium_3_plasma 2000'],
    transmission_assembly: ['gtceu:stellarite_frame', 'gtceu:uv_electric_motor', '2x gtceu:sulvarium-over-kraethite_steel_rod', '2x gtceu:sulvarium-over-kraethite_steel_ring', '4x gtceu:sulvarium-over-kraethite_steel_round', '16x gtceu:fine_tainted_zircalloy_wire', 'gtceu:triconite 2000']
}


for (let [name, ingredients] of Object.entries(UHVcomponents)) {
    let fluidEntry = ingredients[ingredients.length - 1]
    let itemIngredients = ingredients.slice(0, -1)
 
    GTM.component_part_assembly(`uhv_${name}`)
        .itemInputs(itemIngredients)
        .inputFluids(fluidEntry)
        .itemOutputs(`gtceu:uhv_${name}`)
        .stationResearch(global.ComponentPartAssemblyResearch(event, `uhv_${name}`, `gtceu:ruined_${name}`, 48, 144000, va.uhv))
        .duration(400)
        .EUt(2097152)
}

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
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 1152')
.itemOutputs('gtceu:hyperfrost')
.stationResearch(global.AssemblyLineResearch(event, 'hyperfrost', 'gtceu:mega_vacuum_freezer', 72, 65535, va.luv))
.duration(1000)
.EUt(va.uhv, 1.5)

GTM.assembly_line('aetherite_thermostorm_chamber')
.itemInputs('gtceu:pyrathene_frame', '4x #gtceu:circuits/uhv', '4x gtceu:dense_sulvarium-over-kraethite_steel_plate', '8x gtceu:uv_electric_pump', '8x gtceu:stellarite_normal_fluid_pipe', '64x gtceu:fine_naquadrium_wire', '16x gtceu:sulvarium-over-kraethite_steel_bolt')
.inputFluids('gtceu:indium-vor-dys-cad_supersolder_alloy 9216', 'gtceu:stellarite 2304', 'gtceu:polyether_ether_ketone 1152')
.itemOutputs('gtceu:aetherite_thermostorm_chamber')
.stationResearch(global.AssemblyLineResearch(event, 'aetherite_thermostorm_chamber', 'gtceu:hyperfrost', 144, 262144, va.zpm))
.duration(1000)
.EUt(va.uhv, 2.5)

GTM.organism_assembly_line('living_data_disk')
.itemInputs('gtceu:sentience_printed_circuit_board', '2x #gtceu:circuits/uv',  '32x gtceu:b_ram_chip', '16x gtceu:b_nor_memory_chip', '16x gtceu:b_nand_memory_chip', '32x gtceu:fine_astrazine-e_wire')
.inputFluids('gtceu:mutagen 144', 'gtceu:refined_sentience 216')
.itemOutputs('gtceu:living_data_disk')
.stationResearch(global.OrganismAssemblyLineResearch(event, 'living_data_disk', 'gtceu:data_module', 64, 51200, va.zpm))
.duration(1000)
.EUt(va.uv)

GTM.quantum_condensate_exchanger('oganesson-xenon_trifluoride_quiescification')
.inputFluids('gtceu:oganesson-xenon_trifluoride 20000')
.outputFluids('gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 20000')
.duration(100)
.EUt(va.uhv, 4)
































































































































































































































































































































































































































































































































































































































































































































































































































































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
    'gtceu:sulvarium-over-kraethite_steel_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_double_wire',
    'gtceu:sulvarium-over-kraethite_steel_double_wire'
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







    // shitpost

    GTM.metaphysical_metallurgy_tainter('radioactive_bronze_generation')
    .itemInputs('gtceu:bronze_ingot')
    .itemOutputs('gtceu:radioactive_bronze_ore_ore')
    .duration(1)
    .EUt(34359738352)







})