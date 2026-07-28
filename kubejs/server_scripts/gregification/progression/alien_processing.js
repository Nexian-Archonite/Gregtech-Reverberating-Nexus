ServerEvents.recipes(event => {
const GTM = event.recipes.gtceu

// ============================================================
// GT:RN ALIEN ORE CUSTOM PROCESSING
// OPA handles crush → dust at higher ratios
// All processing LuV tier (8192-32768 EUt)
// CRV HeatPressure max 15, Temp max 4000
// ============================================================


// ============================================================
// VENUS ORES
// ============================================================

// --- VAELTHORITE (venus) ---
// vaelthorium + sulfur + lead | quinary: vanadium, molybdenum
// thematic: volcanic sulfuric brine leaching

GTM.chemical_vat('vaelthorite_sulfuric_leach')
    .itemInputs('4x gtceu:vaelthorite_dust')
    .inputFluids('gtceu:sulfuric_acid 2000', 'gtceu:steam 1000')
    .outputFluids('gtceu:vaelthorium_sulfate_solution 3000', 'gtceu:hydrogen_sulfide 500')
    .duration(300)
    .addData('HeatPressure', 6.0)
    .addData('Temp', 800)
    .EUt(8192)

GTM.chemical_reactor('vaelthorite_reduction')
    .inputFluids('gtceu:vaelthorium_sulfate_solution 3000', 'gtceu:hydrogen 2000')
    .itemOutputs('4x gtceu:vaelthorium_dust', '2x gtceu:lead_dust')
    .outputFluids('gtceu:diluted_sulfuric_acid 1000')
    .duration(400)
    .EUt(8192)

GTM.centrifuge('vaelthorite_residue_separation')
    .itemInputs('4x gtceu:vaelthorium_dust')
    .outputFluids('gtceu:vanadium_solution 500')
    .itemOutputs('2x gtceu:sulfur_dust', 'gtceu:molybdenum_dust')
    .duration(200)
    .EUt(8192)

GTM.electrolyzer('vaelthorite_vanadium_recovery')
    .inputFluids('gtceu:vanadium_solution 500')
    .itemOutputs('3x gtceu:vaelthorium_dust', '2x gtceu:vanadium_dust')
    .duration(160)
    .EUt(16384)


// --- SULVARITE (venus) ---
// sulvarium + bismuth + gold | quinary: silver, tellurium
// thematic: precious metal acid dissolution

GTM.large_chemical_reactor('sulvarite_aqua_regia_leach')
    .itemInputs('4x gtceu:sulvarite_dust')
    .inputFluids('gtceu:aqua_regia 3000')
    .outputFluids('gtceu:sulvarite_leachate 3000', 'gtceu:nitric_oxide 500')
    .duration(320)
    .addData('HeatPressure', 5.0)
    .addData('Temp', 700)
    .EUt(8192)

GTM.large_chemical_reactor('sulvarite_gold_cementation')
    .inputFluids('gtceu:sulvarite_leachate 3000', 'gtceu:hydrochloric_acid 1000')
    .itemInputs('gtceu:zinc_dust', '2x gtceu:sulvarite_dust')
    .itemOutputs('3x gtceu:gold_dust', '2x gtceu:silver_dust', 'gtceu:bismuth_dust', '3x gtceu:sulvarium_dust')
    .outputFluids('gtceu:zinc_chloride_solution 500')
    .duration(400)
    .EUt(16384)

GTM.chemical_vat('kethrenite_ammonia_leach')
    .itemInputs('4x gtceu:kethrenite_dust')
    .inputFluids('gtceu:ammonia 2000', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:kethrenite_ammine_solution 3000')
    .duration(360)
    .addData('HeatPressure', 7.0)
    .addData('Temp', 900)
    .EUt(8192)

GTM.centrifuge('kethrenite_copper_nickel_split')
    .inputFluids('gtceu:kethrenite_ammine_solution 3000', 'gtceu:hydrogen_sulfide 1000')
    .itemOutputs('3x gtceu:kethrite_dust', '2x gtceu:cobalt_dust', 'gtceu:chromium_dust')
    .outputFluids('gtceu:ammonium_sulfate 1000', 'gtceu:nickel 432', 'gtceu:chromium')
    .duration(400)
    .EUt(8192)



// --- VORREXINITE (venus) ---
// vorrexite + osmium + iridium | quinary: ruthenium, platinum
// thematic: oxidative chlorination (PGM refining)

GTM.chemical_vat('vorrexinite_chlorination')
    .itemInputs('4x gtceu:vorrexinite_dust')
    .inputFluids('gtceu:chlorine 3000', 'gtceu:oxygen 1000')
    .itemOutputs('3x gtceu:osmium_tetroxide_dust')
    .outputFluids('gtceu:pgm_chloride_solution 3000')
    .duration(400)
    .addData('HeatPressure', 8.0)
    .addData('Temp', 1100)
    .EUt(16384)

GTM.chemical_reactor('vorrexinite_osmium_capture')
    .itemInputs('3x gtceu:osmium_tetroxide_dust')
    .inputFluids('gtceu:hydrochloric_acid 500')
    .itemOutputs('2x gtceu:osmium_dust')
    .duration(200)
    .EUt(8192)

GTM.large_chemical_reactor('vorrexinite_pgm_separation')
    .inputFluids('gtceu:pgm_chloride_solution 3000', 'gtceu:ammonium_chloride 1000')
    .itemOutputs('2x gtceu:iridium_dust', '2x gtceu:ruthenium_dust', '2x gtceu:rarest_metal_mixture_dust')
    .duration(480)
    .EUt(16384)

GTM.electrolyzer('vorrexinite_vorrexite_recovery')
    .itemInputs('2x gtceu:vorrexinite_dust')
    .inputFluids('gtceu:sulfuric_acid 500')
    .itemOutputs('3x gtceu:vorrexite_dust')
    .duration(200)
    .EUt(16384)


// --- THERMASTONE (venus) ---
// thermavyte + magnesium + chromium | quinary: titanium, vanadium
// thematic: high temp calcination + acid strip

GTM.chemical_vat('thermastone_calcination')
    .itemInputs('8x gtceu:thermastone_dust')
    .inputFluids('gtceu:oxygen 2000', 'gtceu:chlorine 864')
    .outputFluids('gtceu:thermavyte_oxide_dust 144', 'gtceu:chromium_trioxide_solution 1000')
    .itemOutputs('3x gtceu:magnesium_chloride_dust')
    .duration(300)
    .addData('HeatPressure', 9.0)
    .addData('Temp', 1400)
    .EUt(16384)

GTM.chemical_reactor('thermastone_chromium_reduction')
    .inputFluids('gtceu:chromium_trioxide_solution 1000', 'gtceu:hydrogen 2000')
    .itemOutputs('3x gtceu:chromium_dust', '2x gtceu:magnesium_dust')
    .duration(280)
    .EUt(8192)

GTM.electrolyzer('thermastone_thermavyte_acid_strip')
    .inputFluids('gtceu:thermavyte_oxide_dust 144', 'gtceu:hydrofluoric_acid 1000')
    .itemOutputs('3x gtceu:thermavyte_dust', '2x gtceu:titanium_dust', 'gtceu:vanadium_dust')
    .duration(320)
    .EUt(16384)


// --- CINDRAX (venus) ---
// cindralite + silicon + tin | quinary: aluminium, gallium
// thematic: alkaline fusion + fractional distillation vibes

GTM.chemical_vat('cindrax_alkaline_fusion')
    .itemInputs('4x gtceu:cindrax_dust', '2x gtceu:sodium_hydroxide_dust')
    .inputFluids('gtceu:steam 1000')
    .outputFluids('gtceu:cindrax_alkaline_melt 3000')
    .duration(280)
    .addData('HeatPressure', 5.0)
    .addData('Temp', 900)
    .EUt(8192)

GTM.chemical_reactor('cindrax_silicate_leach')
    .inputFluids('gtceu:cindrax_alkaline_melt 3000', 'gtceu:hydrochloric_acid 1000')
    .itemOutputs('3x gtceu:silicon_dust', '2x gtceu:tin_dust', 'gtceu:aluminium_dust')
    .outputFluids('gtceu:sodium_chloride_solution 500')
    .duration(360)
    .EUt(8192)

GTM.electrolyzer('cindrax_cindralite_gallium_recovery')
    .itemInputs('2x gtceu:cindrax_dust')
    .inputFluids('gtceu:sulfuric_acid 500')
    .itemOutputs('3x gtceu:cindralite_dust', 'gtceu:gallium_dust')
    .duration(200)
    .EUt(16384)


// --- AETHERIC PALLADITE (venus) ---
// aetherite + niobium + palladium | quinary: rhodium, hafnium
// thematic: oxidative pressure leach + solvent extraction

GTM.chemical_vat('aetheric_palladite_pressure_leach')
    .itemInputs('4x gtceu:aetheric_palladite_dust')
    .inputFluids('gtceu:sulfuric_acid 2000', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:palladite_leachate 3000', 'gtceu:aetherite_residue 500')
    .duration(400)
    .addData('HeatPressure', 8.0)
    .addData('Temp', 1200)
    .EUt(16384)

GTM.large_chemical_reactor('aetheric_palladite_pgm_strip')
    .inputFluids('gtceu:palladite_leachate 3000', 'gtceu:ammonium_chloride 500')
    .itemOutputs('2x gtceu:palladium_dust', '2x gtceu:rhodium_dust', 'gtceu:niobium_dust')
    .duration(440)
    .EUt(16384)

GTM.electrolyzer('aetheric_palladite_aetherite_hafnium')
    .inputFluids('gtceu:aetherite_residue 500', 'gtceu:hydrofluoric_acid 500')
    .itemOutputs('3x gtceu:aetherite_dust', '2x gtceu:hafnium_dust')
    .duration(240)
    .EUt(16384)


// --- PYRATHITE (venus) ---
// pyrathene + titanium + vanadium | quinary: tungsten, molybdenum
// thematic: fluoride volatilization (like real Ti/W processing)

GTM.chemical_vat('pyrathite_fluoride_volatilization')
    .itemInputs('4x gtceu:pyrathite_dust')
    .inputFluids('gtceu:hydrofluoric_acid 2000', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:pyrathite_fluoride_vapor 2000', 'gtceu:vanadium_oxyfluoride 500')
    .duration(360)
    .addData('HeatPressure', 10.0)
    .addData('Temp', 1600)
    .EUt(16384)

GTM.chemical_reactor('pyrathite_titanium_tungsten_split')
    .inputFluids('gtceu:pyrathite_fluoride_vapor 2000', 'gtceu:hydrogen 2000')
    .itemOutputs('3x gtceu:titanium_dust', '2x gtceu:tungsten_dust', 'gtceu:molybdenum_dust')
    .duration(400)
    .EUt(16384)

GTM.electrolyzer('pyrathite_pyrathene_vanadium_recovery')
    .inputFluids('gtceu:vanadium_oxyfluoride 500')
    .itemInputs('gtceu:pyrathite_dust')
    .itemOutputs('3x gtceu:pyrathene_dust', '2x gtceu:vanadium_dust')
    .duration(220)
    .EUt(16384)


// ============================================================
// MARTIAN ORES
// ============================================================

// --- NULLEDRYTE (martian, gem) ---
// chronosite + oganesson (decays to darmstadtium mid-process)
// thematic: temporal stabilization → decay capture → isotope split
// long steps, shorter recipes per step

GTM.chemical_vat('nulledryte_temporal_stabilization')
    .itemInputs('4x gtceu:nulledryte_dust')
    .inputFluids('gtceu:xenon 1000', 'gtceu:distilled_water 1000')
    .itemOutputs('4x gtceu:chronosite_dust')
    .outputFluids('gtceu:unstable_oganesson_solution 1000')
    .duration(600)
    .addData('HeatPressure', 13.0)
    .addData('Temp', 3000)
    .EUt(32768)

// oganesson decays to darmstadtium during cryogenic capture
GTM.chemical_vat('nulledryte_decay_capture')
    .inputFluids('gtceu:unstable_oganesson_solution 1000', 'gtceu:hypothermic_helium_3_plasma 2000')
    .outputFluids('gtceu:cryostabilized_decay_matrix 1000')
    .duration(800)
    .addData('HeatPressure', 14.0)
    .addData('Temp', 3500)
    .EUt(32768)

// isotope separation: what survived as Og vs what decayed to Ds
GTM.centrifuge('nulledryte_isotope_split')
    .inputFluids('gtceu:cryostabilized_decay_matrix 1000')
    .itemOutputs('2x gtceu:oganesson_dust', '2x gtceu:darmstadtium_dust')
    .duration(400)
    .EUt(32768)


// --- XYCRHOVITE (martian, gem) ---
// draconium + echo | quinary: dilithium
// thematic: resonance extraction (echo is XP/death energy, needs to be coaxed out)

GTM.chemical_vat('xycrhovite_resonance_bath')
    .itemInputs('4x gtceu:xycrhovite_dust')
    .inputFluids('gtceu:refined_sentience 200', 'gtceu:distilled_water 1000')
    .outputFluids('gtceu:xycrhovite_resonance_solution 2000', 'gtceu:echo_fluid 500')
    .duration(500)
    .addData('HeatPressure', 11.0)
    .addData('Temp', 2000)
    .EUt(16384)

GTM.electrolyzer('xycrhovite_draconium_split')
    .inputFluids('gtceu:xycrhovite_resonance_solution 2000')
    .itemOutputs('4x gtceu:draconium_dust', '2x gtceu:dilithium_dust')
    .duration(400)
    .EUt(32768)

GTM.fluid_solidifier('xycrhovite_echo_crystallization')
    .inputFluids('gtceu:echo_fluid 500')
    .itemOutputs('4x gtceu:echo_dust')
    .duration(200)
    .EUt(16384)


// --- VHESZCRYL (martian, gem) ---
// vhaelcryite + transcendentine | quinary: enstatite
// thematic: high pressure supercritical extraction (vhaelcryite is too important to lose yield on)

GTM.chemical_vat('vheszcryl_supercritical_extraction')
    .itemInputs('4x gtceu:vheszcryl_dust')
    .inputFluids('gtceu:carbon_dioxide 2000', 'gtceu:hydrofluoric_acid 500')
    .outputFluids('gtceu:vheszcryl_extract 2000', 'gtceu:transcendentine_solution 500')
    .duration(480)
    .addData('HeatPressure', 12.0)
    .addData('Temp', 2500)
    .EUt(32768)

GTM.chemical_reactor('vheszcryl_vhaelcryite_precipitation')
    .inputFluids('gtceu:vheszcryl_extract 2000', 'gtceu:ammonia 500')
    .itemOutputs('5x gtceu:vhaelcryite_dust', 'gtceu:enstatite_dust')
    .duration(360)
    .EUt(16384)

GTM.electrolyzer('vheszcryl_transcendentine_recovery')
    .inputFluids('gtceu:transcendentine_solution 500')
    .itemOutputs('3x gtceu:transcendentine_dust')
    .duration(200)
    .EUt(32768)


// --- GROTHEMITE (martian, dust) ---
// hematite + rare_earth + hafnium | quinary: iron, potassium
// thematic: magnetic separation + rare earth cracking

GTM.chemical_vat('grothemite_acid_cracking')
    .itemInputs('4x gtceu:grothemite_dust')
    .inputFluids('gtceu:sulfuric_acid 2000', 'gtceu:hydrogen_peroxide 500')
    .outputFluids('gtceu:grothemite_leachate 3000')
    .itemOutputs('2x gtceu:iron_dust')
    .duration(400)
    .addData('HeatPressure', 10.0)
    .addData('Temp', 1800)
    .EUt(16384)

GTM.centrifuge('grothemite_rare_earth_split')
    .inputFluids('gtceu:grothemite_leachate 3000')
    .itemOutputs('3x gtceu:rare_earth_dust', '2x gtceu:hafnium_dust', 'gtceu:potassium_dust')
    .outputFluids('gtceu:iron_sulfate_solution 500')
    .duration(360)
    .EUt(16384)

GTM.electrolyzer('grothemite_hematite_iron_recovery')
    .inputFluids('gtceu:iron_sulfate_solution 500')
    .itemOutputs('2x gtceu:pyrite_dust', 'gtceu:iron_dust')
    .duration(200)
    .EUt(8192)


// --- KRETHAVINE (martian, dust) ---
// kraethite + titanium + lanthanum | quinary: titanium, zirconium
// thematic: chloride process (like real titanium extraction, Kroll-adjacent)

GTM.chemical_vat('krethavine_chloride_process')
    .itemInputs('4x gtceu:krethavine_dust', '2x gtceu:carbon_dust')
    .inputFluids('gtceu:chlorine 3000')
    .outputFluids('gtceu:krethavine_tetrachloride 2000', 'gtceu:lanthanum_chloride_solution 500')
    .duration(440)
    .addData('HeatPressure', 11.0)
    .addData('Temp', 2200)
    .EUt(16384)

GTM.chemical_reactor('krethavine_magnesium_reduction')
    .inputFluids('gtceu:krethavine_tetrachloride 2000')
    .itemInputs('2x gtceu:magnesium_dust')
    .itemOutputs('4x gtceu:kraethite_dust', '3x gtceu:titanium_dust', 'gtceu:zirconium_dust')
    .outputFluids('gtceu:magnesium_chloride_solution 1000')
    .duration(480)
    .EUt(16384)

GTM.electrolyzer('krethavine_lanthanum_recovery')
    .inputFluids('gtceu:lanthanum_chloride_solution 500')
    .itemOutputs('3x gtceu:lanthanum_dust')
    .outputFluids('gtceu:chlorine 1500')
    .duration(200)
    .EUt(16384)


// --- ORVEXITE (martian, dust) ---
// rare_earth + osmiridium + plutonium | quinary: rhodium
// thematic: nuclear + PGM hybrid processing (this ore is a war crime)

GTM.chemical_vat('orvexite_nitric_dissolution')
    .itemInputs('4x gtceu:orvexite_dust')
    .inputFluids('gtceu:nitric_acid 3000', 'gtceu:hydrofluoric_hydroxicide 500')
    .outputFluids('gtceu:orvexite_nitrate_solution 3000', 'gtceu:plutonium_nitrate_solution 500')
    .duration(500)
    .addData('HeatPressure', 12.0)
    .addData('Temp', 2500)
    .EUt(32768)

GTM.large_chemical_reactor('orvexite_pgm_recovery')
    .inputFluids('gtceu:orvexite_nitrate_solution 3000', 'gtceu:ammonium_chloride 500')
    .itemOutputs('3x gtceu:osmiridium_dust', '2x gtceu:rhodium_dust', '2x gtceu:rare_earth_dust')
    .duration(440)
    .EUt(32768)

// plutonium gets its own step because obviously it does
GTM.chemical_reactor('orvexite_plutonium_reduction')
    .inputFluids('gtceu:plutonium_nitrate_solution 500', 'gtceu:hydrogen 1000')
    .itemOutputs('3x gtceu:plutonium_dust')
    .outputFluids('gtceu:nitric_acid 250')
    .duration(300)
    .EUt(32768)


// --- PHAZDURITE (martian, dust) ---
// transcendentine + radon + naquadria | no quinary
// thematic: full PUREX-style processing because naquadria demands it
// most complex chain in the pack, as it should be

// step 1: dissolve in nitric acid, radon off-gasses
GTM.chemical_vat('phazdurite_feed_preparation')
    .itemInputs('4x gtceu:phazdurite_dust')
    .inputFluids('gtceu:nitric_acid 3000', 'gtceu:hydrogen_peroxide 500')
    .outputFluids('gtceu:phazdurite_feed_solution 4000', 'gtceu:radon 500')
    .duration(500)
    .addData('HeatPressure', 14.0)
    .addData('Temp', 3500)
    .EUt(32768)

// step 2: adjust feed, then PUREX coextraction pulls naquadria + transcendentine together
GTM.chemical_reactor('phazdurite_feed_adjustment')
    .inputFluids('gtceu:phazdurite_feed_solution 4000', 'gtceu:nitric_acid 1000')
    .outputFluids('gtceu:adjusted_phazdurite_feed 5000')
    .duration(300)
    .EUt(16384)

GTM.extraction_column('phazdurite_purex_coextraction')
    .inputFluids('gtceu:adjusted_phazdurite_feed 5000', 'gtceu:tbp_solution 5000')
    .outputFluids('gtceu:phazdurite_organic_phase 3000', 'gtceu:phazdurite_raffinate 7000')
    .duration(600)
    .EUt(16384)

// step 3: scrub impurities
GTM.scrubbing_column('phazdurite_purex_scrubbing')
    .inputFluids('gtceu:phazdurite_organic_phase 3000', 'gtceu:dilute_nitric_acid 1000')
    .outputFluids('gtceu:phazdurite_scrubbed_phase 3000', 'gtceu:phazdurite_scrub_waste 1000')
    .duration(400)
    .EUt(16384)

// step 4: partition — transcendentine reduces out, naquadria stays in organic
GTM.partition_column('phazdurite_purex_partitioning')
    .inputFluids('gtceu:phazdurite_scrubbed_phase 3000', 'gtceu:hydroxylamine_nitrate 500')
    .outputFluids('gtceu:transcendentine_solution 500', 'gtceu:organic_naquadria_phase 2000')
    .duration(800)
    .EUt(16384)

// step 5: strip naquadria
GTM.stripping_column('phazdurite_naquadria_stripping')
    .inputFluids('gtceu:organic_naquadria_phase 2000', 'gtceu:dilute_nitric_acid 1000')
    .outputFluids('gtceu:naquadria_nitrate_solution 2000', 'gtceu:spent_tbp 1000')
    .duration(500)
    .EUt(16384)

// step 6: final precipitation
GTM.chemical_reactor('phazdurite_naquadria_precipitation')
    .inputFluids('gtceu:naquadria_nitrate_solution 2000', 'gtceu:ammonia 500')
    .itemOutputs('4x gtceu:naquadria_dust')
    .duration(300)
    .EUt(32768)

})