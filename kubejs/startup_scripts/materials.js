//priority: 998
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty')
const v = global.v
const va = global.va
const vh = global.vh
const vha = global.vha

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create("energium")
    .parent('rough')

    event.create('infinity')
    .parent('dull')

    event.create('omnium')
    .parent('dull')

    event.create('nullium')
    .parent('dull')

    event.create('naquadrium')

})


GTCEuStartupEvents.registry("gtceu:element", event => {
    

    event.create('nexus')
    .protons(83)
    .neutrons(137)
    .symbol("Nx")

    event.create('mana')
    .protons(0)
    .neutrons(0)
    .symbol('Ma')

    event.create('source')
    .protons(16)
    .neutrons(16)
    .symbol('Sr')

    event.create('antisource')
    .protons(16)
    .neutrons(16)
    .symbol('S̄r̄')

    event.create('echo')
    .protons(22)
    .neutrons(34)
    .symbol('Ec')

    event.create('sculk')
    .protons(22)
    .neutrons(34)
    .symbol('Sl')

    event.create('taint')
    .protons(17)
    .neutrons(23)
    .symbol('Vr')

    event.create('perfected_taint')
    .protons(17)
    .neutrons(23)
    .symbol('Vr*??')

    event.create('mysterymystery')
    .protons(0)
    .neutrons(0)
    .symbol('??')

    event.create('lunar_desh')
    .protons(27)
    .neutrons(58)
    .symbol('Dh')

    event.create('martian_ostrum')
    .protons(33)
    .neutrons(41)
    .symbol('Ot')

    event.create('venian_calorite')
    .protons(36)
    .neutrons(68)
    .symbol('Ct')

    event.create('cryo')
    .protons(0)
    .neutrons(0)
    .symbol('Cy')

    event.create('resonance')
    .protons(82)
    .neutrons(130)
    .symbol('Av')

    event.create('pure_resonance')
    .protons(82)
    .neutrons(130)
    .symbol('Av⁰')

    event.create('uranium_233')
    .isIsotope(true)
    .symbol('U²³³')

    event.create('arcane')
    .symbol('ÆΨ')

    event.create('transcendentine')
    .protons(198)
    .neutrons(228)
    .symbol('ℵi')

    event.create("infinity")
    .protons(999)
    .neutrons(999)
    .symbol("Ω")

    event.create("omnium")
    .protons(279)
    .neutrons(461)
    .symbol("ℵ₁")

    event.create('nullium')
    .protons(397)
    .neutrons(761)
    .symbol("ℵ₋₁")

    event.create('naquadrium')
    .protons(182)
    .neutrons(368)
    .halfLifeSeconds(140)
    .decayTo('trinium')
    .symbol('Qx')

    event.create('enriched_naquadrium')
    .protons(182)
    .neutrons(378)
    .halfLifeSeconds(40)
    .decayTo('naquadrium')
    .symbol('*Qx*')

    event.create('dilithium')
    .protons(6)
    .neutrons(8)
    .symbol('2Li')

    event.create('anti-dilithide')
    .protons(6)
    .neutrons(8)
    .symbol('2Li̅')
//atomic physics / chemistry

event.create('neutron')
    .protons(0)
    .neutrons(1)
    .symbol('[n₀]')

    event.create('nulltron')
    .protons(0)
    .neutrons(0)
    .symbol('[n₀]')

    event.create('proton')
    .protons(1)
    .neutrons(0)
    .symbol('[p₊₁]')

    event.create('negatron')
    .protons(0)
    .neutrons(0)
    .symbol('[p₋₁]')

    event.create('electron')
    .protons(0)
    .neutrons(0)
    .symbol('[e₋₁]')

    event.create('positron')
    .protons(0)
    .neutrons(0)
    .symbol('[e₊₁]')

    event.create('exotron')
    .protons(0)
    .neutrons(0)
    .symbol('[eₓ⁻]')

    event.create('glueball')
    .protons(0)
    .neutrons(0)
    .symbol('[g₀]')

//quark-antiquarks-hyperquarks

event.create('up_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[u₊²⁄₃]')

event.create('sub_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[u₋²⁄₃]')

event.create('down_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[d₋¹⁄₃]')

event.create('sur_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[d₊¹⁄₃]')

event.create('charm_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[c₊²⁄₃]')

event.create('curse_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[c₋²⁄₃]')

event.create('strange_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[s₋¹⁄₃]')

event.create('ordinary_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[s₊¹⁄₃]')

event.create('top_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[t₊²⁄₃]')

event.create('inferior_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[t₋²⁄₃]')

event.create('bottom_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[b₋¹⁄₃]')

event.create('superior_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[b₊¹⁄₃]')

event.create('exo_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[x±³⁄₂]')

event.create('endo_quark')
    .protons(0)
    .neutrons(0)
    .symbol('[x±³⁄₄]')

event.create('stellarite')
    .protons(0)
    .neutrons(999)
    .symbol('S☼Ψ⌬⍣t')

//almost  fictional particles
event.create('muon')
    .protons(0)
    .neutrons(0)
    .symbol('[μ⁻]')

event.create('tau')
    .protons(0)
    .neutrons(0)
    .symbol('[τ⁻]')

event.create('electron_neutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[νₑ]')

event.create('muon_neutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[ν_μ]')

event.create('tau_neutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[ν_τ]')

//basically fictional particles

event.create('antimuon')
    .protons(0)
    .neutrons(0)
    .symbol('[μ⁺]')

event.create('antitau')
    .protons(0)
    .neutrons(0)
    .symbol('[τ⁺]')

event.create('electron_antineutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[ν̄ₑ]')

event.create('muon_antineutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[ν̄_μ]')

event.create('tau_antineutrino')
    .protons(0)
    .neutrons(0)
    .symbol('[ν̄_τ]')

event.create('gamma_photon')
    .protons(0)
    .neutrons(0)
    .symbol('[γ]')

// --- PREON ---
event.create('preon')
    .protons(0)
    .neutrons(0)
    .symbol('[P⁰]')
 
// --- HIGGS BOSON ---
event.create('higgs_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[H⁰]')

event.create('m_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[W⁻]')

event.create('inverse_m_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[W⁺]')

// fake M bosons for uhhh. Quark Gen 1 to 2

event.create('pm_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[pW⁻]')

event.create('inverse_pm_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[pW⁺]')

event.create('catalystic_boson')
    .protons(0)
    .neutrons(0)
    .symbol('[Z⁰]')
 
// --- OMEGA BARYON ---
event.create('omega_hadron')
    .protons(0)
    .neutrons(0)
    .symbol('[Ω⁻]')
 
// --- ANTI-OMEGA BARYON ---
event.create('null_hadron')
    .protons(0)
    .neutrons(0)
    .symbol('[Ω⁺]')
 
// --- OMNIPARTICLE ---
event.create('omniparticle')
    .protons(0)
    .neutrons(0)
    .symbol('[Ω⁰]')
    
//return to regularity ig

event.create('draconium')
    .protons(300)
    .neutrons(300)
    .symbol('Dr')

event.create('awakened_draconium')
    .protons(299)
    .neutrons(301)
    .symbol('AwkDr')

event.create('chronosite')
    .protons(217)
    .neutrons(183)
    .symbol('§kCh')

event.create('vhaelcryite')
    .protons(211)
    .neutrons(179)
    .symbol('§kVh')

event.create('kraethite')
    .protons(166)
    .neutrons(153)
    .symbol('§kKv')

event.create('vaelthorium')
    .protons(171)
    .neutrons(158)
    .symbol('§kVt')

event.create('sulvarium')
    .protons(158)
    .neutrons(147)
    .symbol('§kSv')

event.create('kethrite')
    .protons(163)
    .neutrons(151)
    .symbol('§kKt')

event.create('vorrexite')
    .protons(169)
    .neutrons(155)
    .symbol('§kVx')

event.create('thermavyte')
    .protons(161)
    .neutrons(149)
    .symbol('§kTv')

event.create('cindralite')
    .protons(155)
    .neutrons(144)
    .symbol('§kCl')

event.create('aetherite')
    .protons(174)
    .neutrons(160)
    .symbol('§kAe')

event.create('pyrathene')
    .protons(167)
    .neutrons(154)
    .symbol('§kPy')

event.create('quasiflux')
    .protons(0)
    .neutrons()
    .symbol('QFX')
})

GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('mana')
    .element('mana')
    .color(0x22a8bd)
    .dust()

    event.create('primitive_glue')
    .color(0xddcc88)
    .liquid()

    event.create('taint')
    .element('taint')
    .liquid(650)
    .color(0x7851a9)

    event.create('perfected_taint')
    .element('perfected_taint')
    .liquid(3000)
    .color(0x7851a9)
    .flags(no_decomp)
    

    event.create('source')
    .element('source')
    .color(0xae44e2).iconSet(GTMaterialIconSet.RUBY)
    .gem()
    .flags(frame, plates)
    .liquid(900)

    event.create('antisource')
    .element('antisource')
    .color(0x51bb1d).iconSet(GTMaterialIconSet.RUBY)
    .gem()
    .flags(frame, plates)
    .liquid(900)

    event.create('nexus')
    .element("nexus")
    .color(0x95abff).iconSet(GTMaterialIconSet.SHINY)
    .gem()
    .ore(2, 4, true)
    .addOreByproducts('lanthanum', 'nexus', 'gold')
    .separatedInto('gold')
    .washedIn('sodium_persulfate')

    event.create('echo')
    .element("echo")
    .color(0x111b21).iconSet(GTMaterialIconSet.SHINY)
    .dust()

    event
    .create('condensed_mana')
    .ore(2, 2, true)
    .components('3x mana')
    .color(0x020352).secondaryColor(0x3a086a)
    .iconSet(GTMaterialIconSet.DIAMOND)
    .gem()
    .flags(plates)
    .washedIn('source')

    event
    .create('precision')
    .element('mysterymystery')
    .color(0xd09f54)
    .liquid(2250)
    
    event
    .create('andesite_alloy')
    .ingot()
    .components('andesite', 'iron')
    .color(0x839689).iconSet(GTMaterialIconSet.DULL)
    .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor)

    event
    .create('source_attuned_copper')
    .ingot()
    .components('source', '4x copper')
    .color(0xc73f27).secondaryColor(0xd0317a)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .flags(plates, rod, fine_wire, no_decomp)
    .cableProperties(GTValues.V[GTValues.LV], 2, 1, false)

    event
    .create('elementally_purified_carbon')
    .dust()
    .components('4x carbon', 'mana', 'source')
    .color(0x202020).secondaryColor(0x2860ac)
    .flags(no_decomp)

    event.create('blue_zircon')
    .gem()
    .ore(2, 1, true)
    .color(0x57FEFF)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .components('1x zirconium', '1x silicon', '4x oxygen')
    .formula('ZrSiO4')
    .flags(no_decomp)
    .addOreByproducts('zirconium', 'hafnium', 'silicon')

    event.create('xenotime')
    .gem()
    .ore(3, 2, true)
    .color(0x431f00).secondaryColor(0x694c33)
    .iconSet(GEM_HORIZONTAL)
    .components('1x yttrium', '1x phosphate')
    .formula('YPO4')
    .flags(no_decomp)
    .addOreByproducts('dysprosium', 'hafnium', 'hafnium')

    event.create('arcane')
    .element('arcane')
    .dust()
    .color(0x2E1A6B)
    .flags(no_decomp)

    event.create('ferroarcane')
    .components('3x arcane', '2x iron')
    .color(0x564D76)
    .dust()

    event.create('igneous_bronze')
        .ingot()
        .components('4x bronze', '2x andesite_alloy')
        .color(0x834b00).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear)
        .liquid(1100)
        .blastTemp(1200, "low", GTValues.VA[GTValues.LV], 400)
        .fluidPipeProperties(1123, 50, true, false, false, false)

    event.create('uranium_233')
    .color(0x3cff3c)
    .element('uranium_233')
    .iconSet(RADIOACTIVE)
    .radioactiveHazard(1)
    .flags(rod)
    .ingot()

    event
    .create('wizarding_steel')
    .components('13x source', '8x mana', '6x ferroarcane', '3x igneous_bronze')
    .formula('Wsg')
    .color(0xdc00ff).iconSet(GTMaterialIconSet.SHINY)
    .ingot()
    .flags(rod, plates, frame)

    event
    .create('permendur')
    .color(0xdcdcff).iconSet(GTMaterialIconSet.SHINY)
    .components('9x cobalt', '9x iron', '1x vanadium')
    .ingot()
    .flags(fine_wire)

    event
    .create('echoite')
    .liquid(2200)
    .color(0x24d8e7)
    .components('1x nexus', '1x echo', '1x chromium', '1x nickel', '1x tantalum')

    event
    .create('mechanical_essence')
    .components('mysterymystery')
    .liquid(2350)
    .color(0x400019)
    .flags(no_decomp)

    event
    .create('virulence_tainted_source')
    .color(0x390747)
    .liquid(1700)

    event
    .create('tainted_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3700)

    event
    .create('tainted_rich_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('tainted_medium_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('tainted_poor_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('calcic_rich_magmatic_mineral_sludge')
    .color(0x3b3140)
    .liquid(2845)

    event
    .create('calcic_medium_magmatic_mineral_sludge')
    .color(0x4a414e)
    .liquid(2845)

    event
    .create('calcic_poor_magmatic_mineral_sludge')
    .color(0x574f5b)
    .liquid(2845)

    event
    .create('decalcified_rich_magmatic_mineral_sludge')
    .color(0x2a264a)
    .liquid(2530)

    event
    .create('decalcified_medium_magmatic_mineral_sludge')
    .color(0x342f4e)
    .liquid(2530)

    event
    .create('decalcified_poor_magmatic_mineral_sludge')
    .color(0x342f4e)
    .liquid(2530)


    event
    .create('rich_magmatic_mineral_sludge')
    .color(0x643dab)
    .liquid(1920)

    event
    .create('medium_magmatic_mineral_sludge')
    .color(0x603da0)
    .liquid(1920)

    event
    .create('poor_magmatic_mineral_sludge')
    .color(0x593c8d)
    .liquid(1920)


    event
    .create('unpure_source')
    .color(0x3e005e)
    .liquid(795)

    event
    .create(`heat_treated_taint`)
    .color(0x56357f)
    .liquid(2300)

    event
    .create(`alloyed_taint`)
    .color(0x56357f)
    .liquid(2300)

    event
    .create(`chromatically_mutated_taint`)
    .color(0x7e90e7)
    .liquid(2300)

    event
    .create('crystalline_sludge')
    .color(0x221f47)
    .liquid(450)
    
    event
    .create('dissolved_calcium_carbonate')
    .components('6x calcium_carbonate', '1x carbon_dioxide', '3x water')
    .color(0x6b5f3b)
    .liquid(1650)
    .flags(electrolyze)

    event
    .create('tainted_calcite_concentrate')
    .components('3x dissolved_calcium_carbonate', '1x taint', '1x sulfuric_acid')
    .color(0x321e27)
    .liquid(1400)
    .flags(electrolyze)

    event
    .create('mysterymystery')
    .element('mysterymystery')

    event
    .create('cryo')
    .element('cryo')
    

    event
    .create('lunar_desh')
    .element('lunar_desh')
    .ingot()
    .color(0x8f4931).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('martian_ostrum')
    .element('martian_ostrum')
    .ingot()
    .color(0x76525f).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('venian_calorite')
    .element('venian_calorite')
    .ingot()
    .color(0xb63044).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('magically_manifested_mechanical')
    .dust()
    .components('1x wizaring_steel', '1x nickel_zinc_ferrite', '1x cupronickel', '1x mechanical_essence')
    .formula('(Wsg Homie)(NiZnFe4O8)(CuNi)(Hooplah)')
    .color(0x1c0003).iconSet(GTMaterialIconSet.SHINY)
    .flags(no_decomp)


    event.create("mechanical_sludge")
    .liquid(930)
    .color(0x57122e)

    event.create("acidic_mechanical_sludge")
    .color(0x57122e)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))

    event.create("alkalized_mechanical_sludge")
    .liquid(930)
    .color(0x57122e)

    event.create('mechanical_concentrate')
    .liquid(930)
    .color(0x1c0003)

    event.create('nitinol')
    .color(0xdcdcff)
    .dust()
    .components('1x nickel', '1x titanium', '1x niobium')
    .flags(foil, plates, rod, frame)
    .iconSet(GTMaterialIconSet.SHINY)
    .blastTemp(3750, "low", GTValues.VA[GTValues.EV], 700)

    event.create('cryosporsite')
    .components('1x dysprosium')
    .ingot()
    .liquid(40)
    .color(0xec8d36)
    .iconSet(GTMaterialIconSet.MAGNETIC)
    .flags(rod, long_rod)
    .formula('CyDy')

    event.create('purified_netherite')
    .components('1x platinum', '1x netherite', '4x gold')
    .formula('PtNr*Au4')
    .ingot()
    .color(0x441f45)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid(4400)
    .flags(rod, plates, frame, no_abs_recipe, no_decomp)
    .blastTemp(4450, "high", GTValues.VA[GTValues.IV], 600)

    event.create('tainted_zircalloy')
    .components('93x zirconium','2x titanium', '2x dysprosium','1x carbon', '1x chromium', '1x taint')
    .ingot()
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid(2200)
    .blastTemp(2650, "mid", GTValues.VA[GTValues.EV], 525)
    .flags(rod, plates, frame, bolt_and_screw, long_rod, fine_wire, ring)
    .color(0x3d284c)
    .rotorStats(500, 300, 4, 485000)

    event.create('extraterrestrial_resonite')
    .gem()
    .ore(2, 2, true)
    .element('resonance')
    .color(0x000999).iconSet(GTMaterialIconSet.EMERALD)
    .addOreByproducts('pitchblende', 'extraterrestrial_resonite', 'aluminium')
    .washedIn('mercury')

    event.create('resonite')
    .element('resonance')
    .ingot()
    .color(0x000666)
    .iconSet(GTMaterialIconSet.SHINY)
    .liquid(2200)
    .flags(rod, frame, plates, no_decomp)
    .fluidPipeProperties(1750, 1200, true, true, false, false)
    .blastTemp(2900, "mid", GTValues.VA[GTValues.EV], 600) 

    event.create('nuclear_steam')
    .components('1x mysterymystery')
    .gas(3800)
    .gem()
    .flags(no_decomp)

    event.create('charged_certus_quartz')
    .components('1x certus_quartz')
    .color(0xb9deef)
    .gem()
    .iconSet(GTMaterialIconSet.QUARTZ)

    event.create('fluix')
    .components('1x charged_certus_quartz', '1x redstone', '1x nether_quartz')
    .gem()
    .color(0x4d3b93)
    .iconSet(GTMaterialIconSet.QUARTZ)

    event.create('echoing_fluxum_steel')
    .components('1x echoite', '1x fluix', '2x steel', '1x lanthanum')
    .ingot()
    .flags(plates, rod, frame)
    .color(0x120a6b)
    .iconSet(GTMaterialIconSet.DULL)
    .blastTemp(1400, "low", GTValues.VA[GTValues.MV], 400)

    event.create('enstatite')
    .components('1x magnesium', '1x silicon', '3x oxygen')
    .color(0xb8ae9e)
    .gem()
    .ore(2, 2, true)
    .addOreByproducts('magnesium', 'silicon', 'iron')
    .washedIn('sodium_persulfate')
//moar ores

event.create('jarosite')
    .dust()
    .ore(2, 2, true)
    .color(0xc8a832).secondaryColor(0x8a6a1a)
    .iconSet(DULL)
    .components('1x potassium', '3x iron', '2x sulfur')
    .formula('KFe3(SO4)2(OH)6')
    .addOreByproducts('iron', 'sulfur', 'potassium')

event.create('fluorapatite')
    .gem()
    .ore(2, 2, true)
    .color(0x4ab88a).secondaryColor(0x9b7fbd)
    .iconSet(GEM_VERTICAL)
    .components('5x calcium', '3x phosphate', '1x fluorine')
    .formula('Ca5(PO4)3F')
    .addOreByproducts('calcium', 'fluorine', 'phosphate')

event.create('rhodite')
    .dust()
    .ore(1, 2, true)
    .color(0xc8c8d4).secondaryColor(0x9898a8)
    .iconSet(SHINY)
    .components('3x rhodium', '1x iron')
    .addOreByproducts('rhodium', 'iridium', 'platinum')

// Dilithium - sci-fi lithium gem - orange yellow
event.create('dilithium')
    .gem()
    .ore(3, 2, true)
    .color(0xf0a030).secondaryColor(0xc87010)
    .iconSet(GEM_HORIZONTAL)
    .element('dilithium')
    .addOreByproducts('lithium', 'helium_3', 'lithium')
    .flags(no_decomp)

//Anti-Dilithide - sci-ahhellnay blueish blue
event.create('anti-dilithide')
    .gem()
    .color(0x0f5fcf).secondaryColor(0x378fef)
    .iconSet(GEM_HORIZONTAL)
    .element('anti-dilithide')
    .flags(no_decomp)

event.create('phenakite')
    .gem()
    .ore(2, 2, true)
    .color(0xf0e8e0).secondaryColor(0xd4b8b0)
    .iconSet(GEM_VERTICAL)
    .components('2x beryllium', '1x silicon', '4x oxygen')
    .addOreByproducts('beryllium', 'silicon', 'beryllium')

event.create('kernite')
    .dust()
    .ore(2, 2, true)
    .color(0xe8e8e0).secondaryColor(0xc0c0b8)
    .iconSet(DULL)
    .components('2x sodium', '4x boron')
    .formula('Na2B4O7')
    .addOreByproducts('boron', 'sodium', 'boron')

event.create('wustite')
    .dust()
    .ore(3, 2, true)
    .color(0x303030).secondaryColor(0x181818)
    .iconSet(DULL)
    .components('1x iron', '1x oxygen')
    .addOreByproducts('iron', 'iron', 'manganese')

event.create('ulvospinel')
    .dust()
    .ore(2, 2, true)
    .color(0x3a2810).secondaryColor(0x1a1008)
    .iconSet(METALLIC)
    .components('1x titanium', '2x iron', '4x oxygen')
    .addOreByproducts('titanium', 'iron', 'titanium')


event.create('merrillite')
    .dust()
    .ore(1, 2, true)
    .color(0xe0ddd8).secondaryColor(0xb8b5b0)
    .iconSet(DULL)
    .components('9x calcium', '1x sodium', '1x magnesium')
    .addOreByproducts('calcium', 'sodium', 'phosphate')

event.create('laurite')
    .dust()
    .ore(1, 2, true)
    .color(0x202020).secondaryColor(0x404858)
    .iconSet(METALLIC)
    .components('1x ruthenium', '2x sulfur')
    .addOreByproducts('ruthenium', 'osmium', 'iridium')

event.create('taenite')
    .dust()
    .ore(2, 2, true)
    .color(0xc0c0b8).secondaryColor(0x909088)
    .iconSet(METALLIC)
    .components('1x nickel', '1x iron')
    .addOreByproducts('nickel', 'iron', 'platinum')

event.create('roquesite')
    .dust()
    .ore(1, 2, true)
    .color(0x707878).secondaryColor(0x505858)
    .iconSet(METALLIC)
    .components('1x copper', '1x indium', '2x sulfur')
    .addOreByproducts('indium', 'copper', 'tin')

event.create('gallite')
    .dust()
    .ore(1, 2, true)
    .color(0x686860).secondaryColor(0x484840)
    .iconSet(METALLIC)
    .components('1x copper', '1x gallium', '2x sulfur')
    .addOreByproducts('gallium', 'copper', 'zinc')

event.create('sperrylite')
    .dust()
    .ore(1, 2, true)
    .color(0xe8e8e0).secondaryColor(0xb0b0a8)
    .iconSet(SHINY)
    .components('1x platinum', '2x arsenic')
    .addOreByproducts('platinum', 'palladium', 'rhodium')

event.create('pyroxene')
    .dust()
    .ore(1, 2, false)
    .color(0x6b7c5a).secondaryColor(0x4a5940)
    .iconSet(DULL)
    .components('1x magnesium', '1x silicon', '3x oxygen')
    .addOreByproducts('magnesium', 'silicon', 'olivine')

//random gabazool

event.create('aluminium_oxide')
.dust()
.color(0xccffff)
.components('2x aluminium', '3x oxygen')

event.create('argentostannum')
.dust()
.components('3x tin', '1x silver')
.color(0xdcdcff)
.iconSet(METALLIC)
.blastTemp(540, "low", GTValues.LV, 200)

event.create('dilithium_zirconoaluminophosphocalcioferrisilicate')
.components(
    '4x dilithium',
    '3x silicon_dioxide',
    '2x aluminium_oxide',
    '1x iron',
    '1x zirconium',
    '1x tricalcium_phosphate'
)
.liquid(330)
.color(0xC4622D)
.iconSet(SHINY)

//resonance chain

event.create('resonite_slurry')
    .liquid()
    .color(0x4A0E4E) // Deep purple sludge
    .components('3x resonite', '4x sulfuric_acid', '1x water')
    .flags(no_decomp)

event.create('resonite_ore_waste')
    .dust()
    .color(0x3D3D3D)
    .components('1x lunar_desh', '1x pitchblende', '1x aluminium', '1x sulfur')


event.create('filtered_resonite_solution')
    .liquid()
    .color(0x6B1B6E) // Lighter purple
    .components('3x resonite', '3x sulfuric_acid')
    .flags(no_decomp)

event.create('resonite_filter_cake')
    .dust()
    .color(0x8B4789)
    .components('1x iron', '1x sulfur', '1x silicon')


event.create('resonant_organic_phase')
    .liquid()
    .color(0x9D4EDD)
    .components('2x resonite', '3x chloroform', '2x acetone')
    .flags(no_decomp)

event.create('extraction_raffinate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x8B7D6B)
    .components('1x sulfuric_acid', '1x iron', '1x copper')


event.create('resonite_crystal_suspension')
    .liquid()
    .color(0xC77DFF)
    .components('2x resonite', '2x acetone')
    .flags(no_decomp)

event.create('crude_resonite_crystal')
    .dust()
    .color(0x9D4EDD)
    .components('2x resonite', '1x oxygen', '1x carbon')
    .iconSet(SHINY)
    .flags(no_decomp)


event.create('washed_resonite_solution')
    .liquid()
    .color(0xE0AAFF)
    .components('2x resonite', '1x ethanol')
    .flags(no_decomp)

event.create('harmonic_impurities')
    .liquid()
    .color(0x704264)
    .components('1x chloroform', '1x carbon', '1x oxygen')


event.create('resonance')
    .color(0xBB86FC)
    .element('pure_resonance')
    .iconSet(SHINY)
    .ingot()
    .plasma(new GTFluidBuilder().temperature(8000))

event.create('sublimation_residue')
    .dust()
    .color(0x4A148C)
    .components('1x carbon', '1x oxygen')

//markiplier back everybody, my name is welcome
event.create('desnium')
    .components('4x lunar_desh', '1x resonance', '1x americium')
    .color(0x9973AD).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(rod, plates, frame, long_rod, dense_plate)
    .fluidPipeProperties(2800, 350, true, true, true, true)
    .blastTemp(3540, "mid", GTValues.VA[GTValues.HV], 1500)
    .liquid(2800)

event.create('osmium_steel')
    .components('3x osmium', '2x steel')
    .color(0x5959bf).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(foil)
    .cableProperties(GTValues.V[GTValues.LuV], 5, 2, false)
    .blastTemp(4500, "mid", GTValues.VA[GTValues.LuV], 1000)
    .liquid(4450)
    
event.create('vintanium')
    .components('1x vanadium', '1x titanium')
    .color(0x876991).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(spring, foil, rod, long_rod, fine_wire, bolt_and_screw)
    .cableProperties(GTValues.V[GTValues.LuV], 8, 4, false)
    .blastTemp(4500, "high", GTValues.VA[GTValues.HV], 1500)
    .fluidPipeProperties(5450, 150, true, true, true, true)
    .liquid(4450)

        //the ZPM chain of totalitarian doom
event.create('naquadrium')
    .element('naquadrium')
    .color(0x1f1f1f).secondaryColor(0x00ffff).iconSet(DULL)
    .ingot(4)
    .flags(foil, spring, fine_wire, bolt_and_screw, rod)
    .cableProperties(v.zpm, 5, 2, false)
    .rotorStats(180, 110, 4, 1600)
    .fluidPipeProperties(4000, 225, true, false, true, true)
    .blastTemp(5400, "high", va.iv, 550)
    .liquid(5350)
    .radioactiveHazard(1)

event.create('enriched_naquadrium')
    .element('enriched_naquadrium')
    .color(0x192919).secondaryColor(0x00ffcc).iconSet(SHINY)
    .ingot(4)
    .flags(rod, foil)
    .blastTemp(7200, "high", va.iv, 900)
    .liquid(7100)
    .radioactiveHazard(2)

event.create('transuranic_naquadrium')
    .components('3x naquadrium', '1x uranium_233')
    .color(0x103710).secondaryColor(0x00ffaa).iconSet(DULL)
    .ingot(4)
    .blastTemp(7200, "high", va.iv, 900)
    .liquid(7100)

event.create("omnium")
    .element("omnium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("omnium"))
    .blastTemp(19449, "high", va.uhv, 1600)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)
    .liquid(new GTFluidBuilder().customStill().temperature(262144))

event.create("nullium")
    .element("nullium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("nullium"))
    .cableProperties(v.uiv, 32, 0, true)
    .blastTemp(29600, "higher", va.uev, 2400)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)
    .plasma(0)

event.create("infinity")
    .element("infinity")
    .ingot()
    .color(0xffffff)
    .cableProperties(v.uxv, 48, 0, true)
    .iconSet(GTMaterialIconSet.getByName("infinity"))
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame, rotor)
    .blastTemp(29600, "higher", va.uiv, 3200)
    .plasma(999999)

    
event.create('hypothermic_helium_3_plasma')
    .element('helium_3')
    .color(0xfdffc7)
    .liquid(1)

event.create('raw_ascendine')
    .element('transcendentine')
    .color(0x5C4A7F)
    .dust()

event.create('ascendine')
    .element('transcendentine')
    .color(0x624888)
    .dust()

event.create('transcending_ascendine')
    .element('transcendentine')
    .color(0x673090)
    .dust()

event.create('harmonical_fuel')
    .components('3x resonance', '4x rocket_fuel')
    .color(0x9E84A5)
    .liquid(400)

event.create('ostrite')
    .color(0x687478).iconSet(SHINY)
    .flags(rod, plates, frame, long_rod, dense_plate)
    .components('4x martian_ostrum', '1x transuranic_naquadrium', '1x desnium')
    .blastTemp(8100, "high", va.luv, 2800)
    .liquid(6800)


event.create('hafnium_carbide')
    .color(0x0E4E0E).iconSet(SHINY)
    .flags(plates, dense_plate)
    .components('1x hafnium', '1x carbon')
    .blastTemp(8632, 'higher', va.luv, 6000)

event.create('hssd')
    .ingot()
    .components('3x desnium', '13x osmium_steel', '4x vintanium')
    .color(0x6F579C).iconSet(GTMaterialIconSet.METALLIC)
    .flags(bolt_and_screw, gear, small_gear, ring, long_rod, rod, frame, rotor, plates, round, foil)
    .blastTemp(5250, "high", GTValues.VA[GTValues.EV], 700)
    .liquid(5250)

event.create('awakened_draconium')
    .color(0xd9400b).iconSet(METALLIC)
    .ingot()
    .element('awakened_draconium')
    .liquid(13650)
    .blastTemp(13200, "mid", va.uhv, 1000)
    .flags(foil, plates)



//Subatomic / Atomic Physics here:
event.create('neutron')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000))
.color(0x0000FF)
.element('neutron')

event.create('nulltron')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(750000))
.color(0xBB00FF)
.element('nulltron')

event.create('proton')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000))
.color(0xFF0000)
.element('proton')

event.create('negatron')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(750000))
.color(0xFF00BB)
.element('negatron')

event.create('electron')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000))
.color(0xFFBB00)
.element('electron')

event.create('positron')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000))
.color(0x00BBFF)
.element('positron')

event.create('glueball')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(2000000000))
.color(0xFFFFFF)
.element('glueball')

//quarks

event.create('up_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000000))
.color(0x00AA00)
.element('up_quark')

event.create('sub_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000000))
.color(0xAA00AA)
.element('sub_quark')

event.create('down_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000000))
.color(0xAA0000)
.element('down_quark')

event.create('sur_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000000))
.color(0x0000AA)
.element('sur_quark')

event.create('charm_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000000))
.color(0xA0A000)
.element('charm_quark')

event.create('curse_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000000))
.color(0x000A0A)
.element('curse_quark')

event.create('strange_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(800000000))
.color(0xAAAAAA)
.element('strange_quark')

event.create('ordinary_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(800000000))
.color(0x666666)
.element('ordinary_quark')

event.create('top_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(2000000000))
.color(0xA6666A)
.element('top_quark')

event.create('inferior_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(2000000000))
.color(0x6AAAA6)
.element('inferior_quark')

event.create('bottom_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1500000000))
.color(0xB01108)
.element('bottom_quark')

event.create('superior_quark')
.liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1500000000))
.color(0x80110B)
.element('superior_quark')

//quick hypermatter shit >:D


event.create('exo_quark')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000000))
    .color(0x00FFFF)
    .element('exo_quark')

event.create('endo_quark')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(1000000000))
    .color(0xFF00FF)
    .element('endo_quark')

event.create('exotron')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(500000000))
    .color(0xFFFF00)
    .element('exotron')

// Matter Lepton Suite
event.create('muon')
    .element('muon')
    .color(0x89CFF0) // Soft Cyan
    .liquid(986500000)

event.create('tau')
    .element('tau')
    .color(0xFF4500) // Orange-Red
    .liquid(1986500000)

event.create('electron_neutrino')
    .element('electron_neutrino')
    .color(0x00FF33) // Neon Lime Green
    .liquid(2050000000)

event.create('muon_neutrino')
    .element('muon_neutrino')
    .color(0x00E5FF) // Electric Cyan
    .liquid(2100000000)

event.create('tau_neutrino')
    .element('tau_neutrino')
    .color(0xFF007F) // Hot Magenta
    .liquid(2147000000)


// Antimatter Lepton Suite (The Fictional Counterparts)
event.create('antimuon')
    .element('antimuon')
    .color(0x76300F) // Inverted Cyan -> Deep Rusty Copper
    .liquid(986500000)

event.create('antitau')
    .element('antitau')
    .color(0x00BAFF) // Inverted Orange-Red -> Ice Blue
    .liquid(1986500000)

event.create('electron_antrino')
    .element('electron_antineutrino')
    .color(0xFF00CC) // Cursed Purple
    .liquid(2050000000)

event.create('muon_antrino')
    .element('muon_antineutrino')
    .color(0xFF1A00) // Angry Crimson Orange
    .liquid(2100000000)

event.create('tau_antrino')
    .element('tau_antineutrino')
    .color(0x00FF80) // Toxic Matrix Yellow-Green
    .liquid(2147000000)

event.create('gamma_photon')
    .element('gamma_photon')
    .color(0xFFFFAA)
    .liquid(2000000000)
//2 6 3 3
event.create('lepton-dense_complex')
    .color(0x9B30FF)
    .liquid(2000000000)
    .components('tau', 'muon', 'electron', 'positron')
    .flags(no_decomp)

event.create('antilepton-dense_complex')
    .color(0x64CF00)
    .liquid(2000000000)
    .components('antitau', 'antimuon', 'positron', 'electron')
    .flags(no_decomp)

event.create('preon')
    .liquid(2147000000)
    .color(0x9900FF)
    .element('preon')
 
// --- HIGGS BOSON ---
event.create('higgs_boson')
    .liquid(2147000000)
    .color(0xFFD700)
    .element('higgs_boson')

// --- W BOSON ---
event.create('m_boson')
    .liquid(1400000000)
    .color(0xFF3300)
    .element('m_boson')

// --- ANTI-W BOSON ---
event.create('inverse_m_boson')
    .liquid(1400000000)
    .color(0x3399FF)
    .element('inverse_m_boson')

// --- Z BOSON ---
event.create('catalytic_boson')
    .liquid(1430000000)
    .color(0xE8E8E8)
    .element('catalytic_boson')

// --- pW BOSON ---
event.create('pm_boson')
    .liquid(1400000000)
    .color(0xCC8800)
    .element('pm_boson')

// --- ANTI-pW BOSON ---
event.create('inverse_pm_boson')
    .liquid(1400000000)
    .color(0x0A2255)
    .element('inverse_pm_boson')
 
// --- OMEGA BARYON ---
event.create('omega_hadron')
    .liquid(2147000000)
    .color(0xFF6600)
    .element('omega_hadron')
 
// --- ANTI-OMEGA BARYON ---
event.create('null_hadron')
    .liquid(2147000000)
    .color(0x0066FF)
    .element('null_hadron')
 
// --- OMNIPARTICLE ---
event.create('omniparticle')
    .plasma(2147483647)
    .color(0xFFFFFF)
    .element('omniparticle')

//ah yes, draconium

event.create('purified_draconium')
    .color(0x702880).iconSet(METALLIC)
    .dust()
    .element('draconium')
    .blastTemp(7200, "mid", va.zpm, 1000)
    .liquid(7000)
    

event.create('triconite')
    .color(0x702880).secondaryColor(0x600000)
    .components('1x tritanium', '3x purified_draconium')
    .ingot()
    .flags(ring, small_gear, foil, bolt_and_screw, rod, long_rod, plates, fine_wire, frame, round, gear)
    .cableProperties(v.uv, 4, 12, false)
    .blastTemp(10799, "mid", va.uv, 600)
    .liquid(11000)

event.create('cericite')
    .color(0xC8A028).secondaryColor(0x8B4513)
    .components('4x cerium', '3x cadmium', '1x americium')
    .flags(plates, fine_wire, no_abs_recipe)
    .ingot()
    .blastTemp(1600, "mid", va.iv, 400)
    .liquid(1600)


       let addFluid = (mat, key) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder())
    mat.setProperty(PropertyKey.FLUID, prop)
} 

event.create('phosphorus_trichloride')
    .gas()
    .components('1x phosphorus', '3x chlorine')
    .color(0xdcdc01)

event.create('phosphoryl_chloride')
    .gas()
    .components('1x phosphorus_trichloride', '1x oxygen')
    .formula('POCl3')
    .color(0xbad601)

event.create('hexene')
    .components()
    .liquid(303)
    .color(0xD4E857)
    .components('6x carbon', '12x hydrogen')

event.create('hexanol')
    .components()
    .liquid(303)
    .color(0xF0E68C)
    .components('6x carbon', '14x hydrogen', '1x oxygen')

event.create('dihexyl_phosphoric_acid')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(303))
    .components('2x hexanol', '1x phosphoryl_chloride')
    .color(0xDAA520)

event.create('rarest_earth_sludge')
    .components('thulium', 'lutetium', 'promethium')
    .color(0x98799b)
    .flags(no_decomp)
    .liquid(1700)

event.create('rarer_earth_sludge')
    .components('3x dysprosium', '2x holmium', 'europium')
    .color(0x989584)
    .flags(no_decomp)
    .liquid(1400)

event.create('dhpa-rarer_earth_complex')
    .components('dihexyl_phosphoric_acid', '3x dysprosium', '2x holmium', 'europium')
    .color(0xB99D52)
    .liquid(1400)

event.create('rare_earth_sludge')
    .components('6x yttrium', '4x cerium', '2x lanthanum')
    .color(0x848898)
    .flags(no_decomp)
    .liquid(1100)

event.create('zirconium_tritelluride')
    .components('zirconium', '3x tellurium')
    .color(0x8a9e6b)
    .flags(no_decomp)
    .ingot()

event.create('zirconium_yttride')
    .components('zirconium', 'yttrium')
    .color(0x9eb8c8)
    .dust()

event.create('tritellurium_cerolanthanide')
    .components('3x tellurium', 'cerium', 'lanthanum')
    .color(0xa8b86a)
    .dust()

event.create('dissolved_rare_earth_sludge')
    .color(0x8a9490)
    .flags(no_decomp)
    .liquid(1200)

event.create('dtpa-rarest_earth_complex')
    .components('diethylenetriaminepentaacetic_acid', 'thulium', 'lutetium', 'promethium')
    .color(0xC8C0D8)
    .liquid(1400)

    // from here on now, ONLY progression materials.

    event.create('nexus_steel')
        .ingot()
        .components('2x nexus', '6x steel')
        .color(0x99ccff).iconSet(GTMaterialIconSet.METALLIC)
        .liquid(1300)
        .secondaryColor(0x0066cc)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, fine_wire)
        .blastTemp(1400, "low", va.lv, 450)
        .cableProperties(v.ev, 3, 3, false)
        .fluidPipeProperties(1300, 75, true, true, true, false)
        .polarizesInto('magnetic_nexus_steel')

    event.create('magnetic_nexus_steel')
            .ingot()
            .components('2x nexus', '6x steel')
            .color(0x99ccff).iconSet(GTMaterialIconSet.MAGNETIC)
            .secondaryColor(0x0066cc)
            .flags(rod, magnetic, no_decomp)
            .arcSmeltInto('nexus_steel')
            .macerateInto('nexus_steel')
            .ingotSmeltInto('nexus_steel')


            
    event.create('echolumium')
        .ingot()
        .components('1x aluminium', '1x echoite') 
        .color(0x24d8e7).iconSet(GTMaterialIconSet.METALLIC)
        .liquid(1500)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, fine_wire, dense_plate)
        .blastTemp(1050, "low", GTValues.VA[GTValues.MV], 500)
        .fluidPipeProperties(1050, 250, true, true, true, false)
        .cableProperties(v.ev, 2,2, false)

    event.create('mechanical_stainless')
        .ingot()
        .components('1x stainless_steel', '1x magically_manifested_mechanical')
        .color(0x370017).iconSet(GTMaterialIconSet.SHINY)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, no_decomp, no_abs_recipe)
        .blastTemp(1800, "low", GTValues.VA[GTValues.HV], 550)
        .formula('(Fe6CrMnNi)(M-E-S)(NiZnFe4O8)(CuNi)(??)')
        .liquid(1900)
        .fluidPipeProperties(1900, 400, true, true, true, false)

    event.create('tainted_titanium')
        .ingot()
        .components('1x titanium', '1x perfected_taint')
        .color(0x3e2a58).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, no_decomp, dense_plate)
        .blastTemp(2200, "mid", GTValues.VA[GTValues.EV], 600)
        .liquid(2200)
        .fluidPipeProperties(2200, 200, true, true, true, false)

    event.create('auralloy-omega')
        .ingot()
        .components('7x tungsten_steel', '4x americium','3x purified_netherite')
        .color(0xdcdcff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, dense_plate, fine_wire)
        .blastTemp(4250, "mid", GTValues.VA[GTValues.EV], 650)
        .liquid(4250)
        .fluidPipeProperties(4250, 300, true, true, true, true)
        .toolStats(
    ToolProperty.Builder.of(17.0, 9.0, 12288, 4)
    .types(
        GTToolType.HARD_HAMMER,
        GTToolType.DRILL_LV,
        GTToolType.DRILL_MV,
        GTToolType.DRILL_HV,
        GTToolType.DRILL_EV,
        GTToolType.DRILL_IV,
        GTToolType.CHAINSAW_LV,
        GTToolType.CHAINSAW_HV,
        GTToolType.CHAINSAW_IV,
        GTToolType.PICKAXE,
        GTToolType.SHOVEL,
        GTToolType.BUZZSAW,
        GTToolType.AXE,
        GTToolType.FILE,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.WIRE_CUTTER_HV,
        GTToolType.WIRE_CUTTER_IV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WRENCH_LV,
        GTToolType.WRENCH_HV,
        GTToolType.WRENCH_IV,
        GTToolType.MINING_HAMMER,
        GTToolType.SAW,
        GTToolType.SCREWDRIVER,
        GTToolType.SPADE,
        GTToolType.WRENCH,
        GTToolType.SCREWDRIVER_LV,
        GTToolType.SCREWDRIVER_HV,
        GTToolType.SCREWDRIVER_IV,
        GTToolType.SWORD,
        GTToolType.KNIFE,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        GTToolType.HOE
    )
    .build()
)

    event.create('rhodipalladic-desnite')
        .ingot()
        .components('4x rhodium_plated_palladium', '4x mana','3x desnium')
        .color(0xdcdcff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, dense_plate)
        .blastTemp(5100, "high", GTValues.VA[GTValues.IV], 700)
        .liquid(5100)
        .fluidPipeProperties(5100, 1450, true, true, true, true)
    // tuna jumpscare 🐟
    event.create('transuranic_naquadrium_alloy')
    .components('4x transuranic_naquadrium', '2x osmiridium', '1x trinium')
    .color(0x239366).secondaryColor(0x00aaff).iconSet(DULL)
    .flags(plates, rod, gear, small_gear, frame, small_gear, spring, bolt_and_screw, rotor, dense_plate, fine_wire)
    .cableProperties(v.uv, 2, 3, false)
    .blastTemp(8100, "high", va.luv, 800)
    .liquid(8000)
    .ingot(4)
    .toolStats(
        ToolProperty.Builder.of(56, 13, 10240, 5)
        .types(
            GTToolType.HARD_HAMMER,
            GTToolType.DRILL_LV,
            GTToolType.DRILL_MV,
            GTToolType.DRILL_HV,
            GTToolType.DRILL_EV,
            GTToolType.DRILL_IV,
            GTToolType.CHAINSAW_LV,
            GTToolType.CHAINSAW_HV,
            GTToolType.CHAINSAW_IV,
            GTToolType.PICKAXE,
            GTToolType.SHOVEL,
            GTToolType.BUZZSAW,
            GTToolType.AXE,
            GTToolType.FILE,
            GTToolType.WIRE_CUTTER_LV,
            GTToolType.WIRE_CUTTER_HV,
            GTToolType.WIRE_CUTTER_IV,
            GTToolType.WIRE_CUTTER,
            GTToolType.WRENCH_LV,
            GTToolType.WRENCH_HV,
            GTToolType.WRENCH_IV,
            GTToolType.MINING_HAMMER,
            GTToolType.SAW,
            GTToolType.SCREWDRIVER,
            GTToolType.SPADE,
            GTToolType.WRENCH,
            GTToolType.SCREWDRIVER_LV,
            GTToolType.SCREWDRIVER_HV,
            GTToolType.SCREWDRIVER_IV,
            GTToolType.SWORD,
            GTToolType.KNIFE,
            GTToolType.BUTCHERY_KNIFE,
            GTToolType.CROWBAR,
            GTToolType.HOE
        )
        .build()
    )
    
    event.create('ephemeral_naquadite')
    .components('8x transuranic_naquadrium_alloy', '1x lepton-dense_complex', '1x antilepton-dense_complex', '1x darmstadtium')
    .secondaryColor(0x119eb2).color(0xB07958).iconSet(DULL)
    .liquid(9000)
    .flags(rotor, bolt_and_screw, rod, long_rod, dense_plate, plates, small_gear, no_abs_recipe, no_decomp)
    .cableProperties(v.uev, 32, 0, true)
    .blastTemp(9000, "highest", va.uv, 800)

    event.create('transcendent_dilithide')
    .components('transcendentine', 'dilithium')
    .color(0x6b2d8b).secondaryColor(0xf0a030).iconSet(SHINY)
    .cableProperties(v.uv, 8, 4, false)
    .liquid(16800)
    .blastTemp(16800, "highest", va.uhv, 950)

    event.create('stellarite')
    .color(0x4B1F6F).iconSet(SHINY)
    .element('stellarite')
    .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, dense_plate)
    .fluidPipeProperties(2147000000, 8150, true, true, true, true)
    .liquid(126000)
    .blastTemp(18400, "higher", va.uhv, 1500)

    event.create('bose-einstein_neutronium')
    .color(0x65ff97).iconSet(SHINY)
    .element('neutronium')
    .flags(rod, long_rod, fine_wire)
    .ingot()
    .liquid(0)
    .blastTemp(1, null, va.uhv, 1400)
    
    event.create('chronocrytic-vhaelsalite')
    .ingot()
    .color(0x8c0059).secondaryColor(0xccbbe5)
    .flags(fine_wire, spring, small_spring, foil, bolt_and_screw)
    .components('chronosite', 'vhaelcryite')
    .cableProperties(v.uhv, 28, 0, true)
    
// alien materials -----------------------------------------------------------------------
event.create('chronosite')
    .gem()
    .color(0x1a0033).secondaryColor(0x99ddff)
    .iconSet(GEM_VERTICAL)
    .element('chronosite')
    .flags(rod, frame)

event.create('vhaelcryite')
    .gem()
    .color(0xff007f).secondaryColor(0xff99cc)
    .iconSet(GEM_VERTICAL)
    .element('vhaelcryite')
    .flags(no_decomp, plates)

event.create('kraethite')
    .gem()
    .color(0x00cfff).secondaryColor(0x004466)
    .iconSet(GEM_HORIZONTAL)
    .element('kraethite')


// venus elements
event.create('vaelthorium')
    .gem()
    .color(0x2d0010).secondaryColor(0xcc4400)
    .iconSet(GEM_VERTICAL)
    .element('vaelthorium')

event.create('sulvarium')
    .gem()
    .color(0xffcc00).secondaryColor(0x664400)
    .iconSet(NETHERSTAR)
    .element('sulvarium')

event.create('kethrite')
    .gem()
    .color(0xff4400).secondaryColor(0x1a0000)
    .iconSet(RUBY)
    .element('kethrite')

event.create('vorrexite')
    .gem()
    .color(0x330022).secondaryColor(0xff0066)
    .iconSet(EMERALD)
    .element('vorrexite')
    .flags(frame, bolt_and_screw, foil)

event.create('thermavyte')
    .gem()
    .color(0xff6600).secondaryColor(0x2a0a00)
    .iconSet(CERTUS)
    .element('thermavyte')

event.create('cindralite')
    .gem()
    .color(0x888888).secondaryColor(0xff3300)
    .iconSet(GEM_HORIZONTAL)
    .element('cindralite')
    .flags(frame, bolt_and_screw)

event.create('aetherite') 
    .gem()
    .color(0x003322).secondaryColor(0x00ff99)
    .iconSet(GEM_VERTICAL)
    .element('aetherite')

event.create('pyrathene')
    .gem()
    .color(0xcc0000).secondaryColor(0xffaa00)
    .iconSet(RUBY)
    .element('pyrathene')
    .flags(frame)

event.create('transcendentine')
    .element('transcendentine')
    .color(0x6B2D8B)
    .ingot()
    .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, no_decomp)
    .liquid(303)

event.create('draconium')
    .ore(1, 2, false)
    .color(0x702880).iconSet(METALLIC)
    .dust()
    .element('draconium')
    .addOreByproducts('titanium', 'rhenium', 'naquadah')
    .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    // venus minerals
event.create('vaelthorite')
    .dust()
    .ore(2, 2, true)
    .color(0x2d0010).secondaryColor(0x664400)
    .iconSet(METALLIC)
    .components('1x vaelthorium', '1x sulfur', '1x lead')
    .addOreByproducts('vaelthorium', 'sulfur', 'lead')
    .flags(no_decomp)

event.create('sulvarite')
    .dust()
    .ore(2, 2, true)
    .color(0xffcc00).secondaryColor(0x886600)
    .iconSet(METALLIC)
    .components('1x sulvarium', '1x bismuth', '1x gold')
    .addOreByproducts('sulvarium', 'bismuth', 'gold')
    .flags(no_decomp)

event.create('kethrenite')
    .dust()
    .ore(2, 2, true)
    .color(0xff4400).secondaryColor(0x331100)
    .iconSet(METALLIC)
    .components('1x kethrite', '1x copper', '1x nickel')
    .addOreByproducts('kethrite', 'copper', 'nickel')
    .flags(no_decomp)

event.create('vorrexinite')
    .dust()
    .ore(2, 2, true)
    .color(0x330022).secondaryColor(0x880044)
    .iconSet(METALLIC)
    .components('1x vorrexite', '1x osmium', '1x iridium')
    .addOreByproducts('vorrexite', 'osmium', 'iridium')
    .flags(no_decomp)

event.create('thermastone')
    .dust()
    .ore(2, 2, true)
    .color(0xff6600).secondaryColor(0x553300)
    .iconSet(METALLIC)
    .components('1x thermavyte', '1x magnesium', '1x chromium')
    .addOreByproducts('thermavyte', 'magnesium', 'chromium')
    .flags(no_decomp)

event.create('cindrax')
    .dust()
    .ore(2, 2, true)
    .color(0x888888).secondaryColor(0x442200)
    .iconSet(METALLIC)
    .components('1x cindralite', '1x silicon', '1x tin')
    .addOreByproducts('cindralite', 'silicon', 'tin')
    .flags(no_decomp)

event.create('aetheric_palladite')
    .dust()
    .ore(2, 2, true)
    .color(0x003322).secondaryColor(0x00ff99)
    .iconSet(METALLIC)
    .components('1x aetherite', '1x niobium', '1x palladium')
    .addOreByproducts('aetherite', 'niobium', 'palladium')
    .flags(no_decomp)

event.create('pyrathite')
    .dust()
    .ore(2, 2, true)
    .color(0xcc0000).secondaryColor(0xffaa00)
    .iconSet(METALLIC)
    .components('1x pyrathene', '1x titanium', '1x vanadium')
    .addOreByproducts('pyrathene', 'titanium', 'vanadium')
    .flags(no_decomp)

// mars minerals
event.create('nulledryte')
    .dust()
    .ore(2, 2, true)
    .color(0x1a0033).secondaryColor(0x00aa33)
    .iconSet(METALLIC)
    .components('8x chronosite', '1x oganesson')
    .addOreByproducts('chronosite', 'oganesson', 'rhenium_iii_sulfate')
    .flags(no_decomp)

event.create('xycrhovite')
    .dust()
    .ore(2, 2, true)
    .color(0xcc99ff).secondaryColor(0x440066)
    .iconSet(METALLIC)
    .components('6x draconium', '4x echo')
    .addOreByproducts('draconium', 'echo', 'dilithium')
    .flags(no_decomp)

event.create('vheszcryl')
    .dust()
    .ore(2, 2, true)
    .color(0xff007f).secondaryColor(0x330011)
    .iconSet(METALLIC)
    .components('6x vhaelcryite', '4x transcendentine')
    .addOreByproducts('vhaelcryite', 'transcendentine', 'enstatite')
    .flags(no_decomp)

event.create('grothemite')
    .dust()
    .ore(2, 2, true)
    .color(0xffaa00).secondaryColor(0x332200)
    .iconSet(METALLIC)
    .components('8x rare_earth', '5x hafnium', '3x iron')
    .addOreByproducts('rare_earth', 'hafnium', 'iron')
    .flags(no_decomp)

event.create('krethavine')
    .dust()
    .ore(2, 2, true)
    .color(0x3366ff).secondaryColor(0x66ddff)
    .iconSet(METALLIC)
    .components('6x kraethite', '5x lanthanum', '3x titanium')
    .addOreByproducts('kraethite', 'lanthanum', 'titanium')
    .flags(no_decomp)

event.create('orvexite')
    .dust()
    .ore(2, 2, true)
    .color(0x006600).secondaryColor(0x003300)
    .iconSet(METALLIC)
    .components('5x rare_earth', '4x osmiridium', '2x plutonium')
    .addOreByproducts('rare_earth', 'osmiridium', 'plutonium')
    .flags(no_decomp)

event.create('phazdurite')
    .dust()
    .ore(2, 2, true)
    .color(0x110000).secondaryColor(0xcc0000)
    .iconSet(METALLIC)
    .components('6x transcendentine', '4x naquadria')
    .addOreByproducts('transcendentine', 'naquadria', 'radon')
    .flags(no_decomp)

// Alien Alloys

event.create('indium-vor-dys-cad_supersolder_alloy')
    .ingot()
    .color(0x6600aa).secondaryColor(0x00ccbb)
    .flags(no_decomp)
    .components('47x indium', '6x vorrexite', '3x dysprosium', '8x cadmium', '3x tin', '7x darmstadtium', '2x zirconium')
    .blastTemp(11000, null, va.uhv, 750)
    .liquid(8000)

event.create('sulvarium-over-kraethite_steel')
    .ingot()
    .color(0xffee00).secondaryColor(0x00ffee)
    .flags(plates, rod, gear, small_gear, frame, small_gear, spring, bolt_and_screw, rotor, dense_plate, fine_wire, round)
    .components('6x sulvarium', '6x kraethite', '3x antisource', '4x holmium', '2x nexus', '2x awakened_draconium')
    .cableProperties(v.uhv, 20, 0, true)
    .blastTemp(11000, null, va.uv, 1050)
    .liquid(11000)

event.create('aetheric-thermavyte')
    .ingot()
    .color(0x003322).secondaryColor(0xff6600)
    .components('2x aetherite', '2x thermavyte', 'neutronium')
    .flags(rod, frame, plates, gear, foil)
    .blastTemp(10799, null, va.uhv, 800)
    .liquid(10799)

event.create('vaelkethrite')
    .gem()
    .color(0x7c2208).secondaryColor(0x8c2200)
    .iconSet(NETHERSTAR)
    .flags(rod, frame, plates, foil)

event.create('nexian_pyrite')
    .ingot()
    .color(0x8B1515).secondary(0x5580B8)
    .components('37x nexus_steel', '12x neutronium', '8x naquadah_alloy', '2x oganesson', '3x promethium')
    .blastTemp(16800, null, va.uv, 900)
    .liquid(16800)

event.created('activated_nexian_pyrite')
    .ingot()
    .color(0xA01C1C).secondary(0x6699DD)
    .components('nexian_pyrite', '4x pyrathene', '4x cindralite')
    .flags(rod, frame, plates, foil, no_decomp, no_abs_recipe)
    .liquid(16800)

    
    
    
    
    
    
    
    
    
    
    
    
    event.create("manasteel")
    .ingot()
    .color(0x6fb6ff).secondaryColor(0x1e1fff)
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(GTValues.V[GTValues.LV], 4, 1, false)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame, rotor)
    .components('1x nexus_steel', '3x mana')

    event.create("energite")
    .iconSet(GTMaterialIconSet.getByName("energium"))
    .components('5x redstone', '4x ruby')
    .color(0xdb4646)
    .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall, TagPrefix.nugget, TagPrefix.block])
    .gem()


event.create('auralloy-omega_over_transcendentine')
    .components('8x transcendentine', '2x auralloy-omega')
    .color(0x8150A2)
    .dust()
    .flags(bolt_and_screw, small_gear, plates, long_rod, frame)
    .fluidPipeProperties(2147483647, 200, true, true, true, true)
    .liquid(303)

    event.create('calenite')
    .color(0x9C3A58).iconSet(SHINY)
    .flags(rod, plates, frame, long_rod, dense_plate)
    .components('4x venian_calorite', '1x stellarite', '1x ostrite')
    .blastTemp(10799, "higher", va.uv, 3400)
    .liquid(10000)

const compIngot = (name, elements, color, icon, blasting, flags, cabel) => {
    if (blasting.includes(blasting[0])){
        if (cabel !== null) {
            event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cabel[0], cabel[1], cabel[2], cabel[3]).liquid(blasting[0])
        } else
        event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).liquid(blasting[0])
    } 
    else 
    {
        event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).liquid(1200)
    }
}


    // Large Multis
const largeMulti = (name, components, color) => {
    compIngot(name, components, color, DULL, [2200, 'low', GTValues.VA[GTValues.MV], 2000], 
        name == 'beryllium_bronze' ? [plates, frame, rod, dense_plate] : [plates, frame, rod], null)
}

const Transplatine = (name, components, color) => {
    compIngot(name, components, color, DULL, [2900, 'mid', GTValues.VA[GTValues.HV], 1900], [plates, frame, rod], null) 
}

const matGenD = (name, components, color) => {
    compIngot(name, components, color, DULL, [1900, 'low', GTValues.VA[GTValues.MV], 1600], [plates, frame, gear, rod], null)
}


    largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf)
    largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff)
    largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000)
    largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699)
    largeMulti('elgiloy', ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'], 0xff00ff)
    largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300)
    largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a)
    largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080)
    largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c)
    largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d)
    Transplatine('transplatine', ['17x platinum', '5x silver', '2x osmium', '2x chromium'], 0xb9b2c1)


    matGenD('signalum', ['1x silver', '3x copper', '4x redstone'], 0xff3300)
    matGenD('lumium', ['1x silver', '3x tin', '2x glowstone'], 0xffffb3)
    matGenD('enderium', ['3x lead', '1x diamond', '2x ender_pearl'], 0x006666)

    



// PEEEEEEEEEEEEEEEEKaboo


event.create('aniline')
    .liquid(457)
    .color(0xC8B84A)
    .components('6x carbon', '7x hydrogen', '1x nitrogen')
 
event.create('fluorobenzene')
    .liquid(358)
    .color(0xB8D4E8)
    .components('6x carbon', '5x hydrogen', '1x fluorine')
 
event.create('hydroquinone')
    .dust()
    .iconSet(DULL)
    .color(0xE8E0C8)
    .components('6x carbon', '6x hydrogen', '2x oxygen')
 
event.create('difluorobenzophenone')
    .dust()
    .iconSet(DULL)
    .color(0xD8D0B8)
    .components('13x carbon', '8x hydrogen', '2x fluorine', '1x oxygen')
 
event.create('diphenyl_sulfone')
    .dust()
    .iconSet(DULL)
    .color(0xE0DCE0)
    .components('12x carbon', '10x hydrogen', '2x oxygen', '1x sulfur')
 
event.create('maleic_anhydride')
    .dust()
    .iconSet(DULL)
    .color(0xF0E8C0)
    .components('4x carbon', '2x hydrogen', '3x oxygen')
 
event.create('gamma_butyrolactone')
    .liquid(477)
    .color(0xC8E0D0)
    .components('4x carbon', '6x hydrogen', '2x oxygen')
 
event.create('n_methylpyrrolidone')
    .liquid(475)
    .color(0xC0D8E8)
    .components('5x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen')
 
event.create('pseudocumene')
    .liquid(441)
    .color(0xD4C89C)
    .components('9x carbon', '12x hydrogen')
 
event.create('trimellitic_anhydride')
    .dust()
    .iconSet(DULL)
    .color(0xE8E0B8)
    .components('9x carbon', '4x hydrogen', '5x oxygen')
 
event.create('trimellitic_anhydride_chloride')
    .dust()
    .iconSet(DULL)
    .color(0xD4C870)
    .components('9x carbon', '4x hydrogen', '1x chlorine', '4x oxygen')
 
event.create('methylenedianiline')
    .dust()
    .iconSet(DULL)
    .color(0xC8B060)
    .components('13x carbon', '14x hydrogen', '2x nitrogen')
 
event.create('thionyl_chloride')
    .liquid(352)
    .color(0xD8E8A0)
    .components('2x chlorine', '1x oxygen', '1x sulfur')
    .formula('Cl2OS')

event.create('polyether_ether_ketone')
    .polymer()
    .liquid(616)
    .iconSet(DULL)
    .color(0xD4C4A0)
    .components('19x carbon', '12x hydrogen', '3x oxygen')
    .flags(rod, plates, frame, foil)
    .formula('(C19H12O3)n')
    .fluidPipeProperties(630, 400, true, true, false, false)

event.create('torlon')
    .polymer()
    .liquid(633)
    .iconSet(DULL)
    .color(0xCCFF00)
    .components('22x carbon', '13x hydrogen', '2x nitrogen', '5x oxygen', '1x chlorine')
    .flags(rod, plates, frame, foil)
    .formula('(C22H13N2O5Cl)n')
    .fluidPipeProperties(700, 600, true, true, false, false)


     // my chenisy shit here:

    event.create("ammonium_hydroxide")
    .color(0x7FB4C7)
    .fluid()
    .components('1x ammonia', '1x water')
    .formula('NH4OH')
    .flags(no_decomp)

    event.create('tetrachlorosilane')
    .fluid()
    .components('1x silicon', '4x chlorine')
    .color(0xFFFFFF)

    event.create('tetraethyl_orthosilicate')
    .fluid()
    .components('1x silicon', '4x ethanol')
    .formula("SiC8H20O4")
    .color(0xFFFFFF)

    event.create('crude_ethyl_silicate')
    .fluid()
    .components('1x silicon_dioxide', '3x ethanol')
    .color(0xFFFFFF)

    event.create('wood_leachate')
    .fluid()
    .color(0xd45500)

    event.create('supercooled_ice')
    .liquid(180)
    .components('1x water')
    .flags(no_decomp)
    .color(0xb3cfec)

    event.create('cryothetic_zero')
    .liquid(0)
    .components('1x cryo')
    .flags(no_decomp)
    .color(0x8badd0)

    event.create('hydroxy')
    .liquid(293)
    .components('1x oxygen', '1x hydrogen')
    .color(0xf0f0f0)

    event.create('sand_waste')
    .components('3x silicon_dioxide', '1x silicon')
    .dust()
    .color(0xa5a5aa)
    
    event.create('phosphor_carboleachate')
    .components('2x wood_leachate', '1x phosphorus', '2x sand_waste')
    .dust()
    .color(0xa06d20)

    event.create('pentacalc_chloride')
    .components('5x calcium', '2x chlorine')
    .color(0xc0ccbc)
    .dust()

    event.create('hydrofluoric_hydroxicide')
    .components('1x hydrofluoric_acid', '1x hydroxy')
    .color(0x8888aa)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(333))

    event.create('aqua_regihydroxide')
    .components('1x aqua_regia', '1x hydroxy')
    .color(0xffb132)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(333))

    event.create('infernal_acid')
    .components('1x aqua_regihydroxide', '1x hydrofluoric_hydroxicide')
    .formula('HELL')
    .color(0xbe842d)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(666))

    //purified netherite line (apart of the chensy shit)

        event.create('acidic_unpure_uncracked_sulfuric_netherite_slag')
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(7530))
        .components('1x netherite')
        .color(0x44261f)
        .flags(no_decomp)

        event.create('unpure_uncracked_sulfuric_netherite_slag')
        .liquid(7530)
        .components('1x netherite')
        .color(0x603227)
        .flags(no_decomp)

        event.create('purified_uncracked_sulfuric_netherite_slag')
        .liquid(7200)
        .components('1x netherite')
        .color(0x503020)
        .flags(no_decomp)

        event.create('purified_uncracked_netherite_slag')
        .liquid(7200)
        .components('1x netherite')
        .color(0x4d2051)
        .flags(no_decomp)

        event.create('purified_cracked_netherite_slag')
        .liquid(6900) //nice
        .components('1x netherite')
        .color(0x3a2c29)
        .flags(no_decomp)

        event.create('purified_netherite_sludge')
        .liquid(3600)
        .components('1x purified_netherite', '2x platinum_group_sludge', '1x naquadah', '3x bastnaesite', '2x tungstate', '6x netherite')
        .color(0x4e4237)
        .flags(no_decomp)

        event.create('caesium_hydroxide')
        .dust()
        .components('1x caesium', '1x hydroxy')
        .formula('CsOH')
        .color(0x656641)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(no_decomp)

        event.create('caesium_sulfate')
        .dust()
        .components('1x caesium', '1x sulfur')
        .formula('CsSO4')
        .color(0xa17e06)
        .iconSet(GTMaterialIconSet.METALLIC)

    //nuclear processing
    event.create('sodium_oxalate')
    .components('2x sodium', '2x carbon', '4x oxygen')
    .dust()
    .color(0x2831b5)
    .formula('Na2C2O4')
    .flags(no_decomp)

    event.create('sodium_formate')
    .components('1x hydrogen', '1x carbon_dioxide','1x oxygen','1x sodium')
    .dust()
    .color(0x2547a5)
    .formula('HCOO2Na')

    event.create('sodium_sulfate')
    .components('1x sodium', '1x sulfur')
    .dust()
    .color(0xffcfff)

    event.create('n-butanol')
    .gas()
    .components('2x propene', '1x carbon_monoxide', '1x water')
    .color(0xb6371e)

    event.create('tributyl_phosphate')
    .gas()
    .components('1x phosphoryl_chloride','3x n-butanol')
    .color(0xd75c00)

    event.create('oxalic_acid')
    .dust()
    .components('2x carbon', '2x hydrogen', '4x hydrogen')
    .color(0xaaaaff)
    .flags(no_decomp)
    

    //holyfuckingshit Hydroxylamine Nitrate

    event.create('ammonium')
    .components('1x ammonia', '1x hydrogen')
    .gas()

    event.create('ammonium_carbonate')
    .components('2x ammonia', '1x carbon_dioxide')
    .gas()

    event.create('dinitrogen_trioxide')
    .components('2x nitrogen', '3x oxygen')
    .gas()

    event.create('ammonium_nitrite')
    .components('1x ammonia', '1x nitrogen', '2x oxygen')
    .gas()

    event.create('hydroxylamine')
    .components('1x nitrogen', '2x hydrogen', '1x hydroxy')
    .gas()

    event.create('hydroxylamine_disulfonate')
    .components('1x hydroxylamine', '1x nitrogen', '2x sulfur_trioxide')
    .gas()

    event.create('hydroxylamine_sulfate')
    .components('2x hydroxylamine', '1x sulfuric_acid')
    .flags(no_decomp)
    .gas()

    event.create('ammonium_bisulfate')
    .components('1x ammonia', '1x sulfuric_acid')
    .formula('NH4HSO4')
    .gas()

    event.create('ammonium_sulfate')
    .components('2x ammonium', '1x sulfuric_acid')
    .dust()
    .liquid(273)

    event.create('hydroxylamine_nitrate')
    .components('1x hydroxylamine', '1x nitric_acid')
    .gas()

    event.create('bisulfite')
    .components('1x hydrogen', '1x sulfur', '3x oxygen')
    .gas()

    //return to sender
    //idk anymoer broski

    event.create('cryostatic-antilithide')
    .liquid(10)
    .components('4x resonance', '1x dilithium', '1x anti-dilithide', '1x cryothetic_zero')
    .color(0x0f5fcf)
    .flags(no_decomp)

    // Nuclear Processing pt.2

    event.create('radioactive_fuel_cladding_scrap')
    .components('1x steel', '4x tungsten_steel')
    .color(0x262684)
    .dust()

    event.create('thorium_dioxide')
    .color(0x002200)
    .components('1x thorium', '2x oxygen')
    .formula('ThO2')
    .flags(rod)
    .iconSet(SHINY)
    .ingot()

    event.create('mixed_oxide_fuel')
    .color(0xf26e2f)
    .components('8x plutonium', '5x uranium_233', '2x plutonium_241')
    .formula('(U²³³)5(Pu²³⁹)8(Pu²⁴¹)2O30')
    .iconSet(SHINY)
    .flags(rod, no_decomp)
    .ingot()
    
    event.create("radioactive_bronze_ore")
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .components('999x uranium_233', '1x bronze')
    .formula('"To advance in the steam age, we will need to mine some Bronze Ore"')
    .color(0x3CFE3B)
    .radioactiveHazard(9)
    .flags(rod)
    .ingot()
    .ore(69, 2)

    event.create('mixed_thorium_uranium_233_mass')
    .color(0x003c00)
    .components('6x thorium', '2x uranium_233')
    .dust()
    

// ========================================
// PUREX CHAIN - MATERIALS (In Process Order)
// ========================================

event.create('kerosene')
    .gas()
    .color(0xFFE4B5)
    .components('12x carbon', '26x hydrogen')

event.create('tbp_solution')
    .liquid()
    .color(0xFFEFD5)
    .components('3x tributyl_phosphate', '7x kerosene')

event.create('dilute_nitric_acid')
    .color(0xE0FFFF)
    .components('1x nitric_acid', '3x water')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))

event.create('fuel_dissolver_solution')
    .liquid()
    .color(0x8B4513)
    .components('4x uranium', '1x plutonium', '2x caesium')
    .flags(no_decomp)

event.create('adjusted_feed_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x996633)
    .components('4x uranium', '1x plutonium', '2x caesium', '1x nitric_acid')
    .flags(no_decomp)

event.create('organic_phase_u_pu')
    .liquid()
    .color(0xCCCC00)
    .components('3x uranium', '1x plutonium', '4x tributyl_phosphate')
    .flags(no_decomp)

event.create('purex_raffinate')
    .liquid()
    .color(0xFF4500)
    .components('2x caesium', '1x lanthanum', '1x cerium', '1x neodymium')

event.create('scrubbed_organic_phase')
    .liquid()
    .color(0xCCDD00)
    .components('3x uranium', '1x plutonium', '4x tributyl_phosphate')
    .flags(no_decomp)

event.create('scrub_waste')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFF6347)
    .components('1x caesium', '1x nitric_acid')

event.create('aqueous_plutonium_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x00CED1)
    .components('1x plutonium', '1x nitric_acid', '1x americium')
    .flags(no_decomp)

event.create('organic_uranium_phase')
    .liquid()
    .color(0xFFFF00)
    .components('3x uranium', '3x tributyl_phosphate')
    .flags(no_decomp)

event.create('uranyl_nitrate_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFFD700)
    .components('3x uranium', '2x nitric_acid')
    .flags(no_decomp)

event.create('spent_tbp')
    .liquid()
    .color(0x8B7355)
    .components('3x tributyl_phosphate', '1x carbon')
    .flags(no_decomp)

event.create('organic_plutonium_phase')
    .liquid()
    .color(0x4682B4)
    .components('1x plutonium', '1x americium', '2x tributyl_phosphate')
    .flags(no_decomp)

event.create('medium_active_waste')
    .liquid()
    .color(0xFFA500)
    .components('1x caesium', '1x americium')

event.create('concentrated_uranyl_nitrate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFFB700) // Deep gold (concentrated)
    .components('4x uranium', '2x nitric_acid')
    .flags(no_decomp)

event.create('uranium_trioxide')
    .dust()
    .color(0xFF8C00)
    .components('1x uranium', '3x oxygen')
    .formula('UO3')

event.create('uranium_dioxide')
    .color(0x2F4F2F)
    .components('1x uranium', '2x oxygen')
    .iconSet(METALLIC)
    .formula('UO2')
    .flags(rod)
    .ingot()

event.create('uranium_235_dioxide')
    .color(0x366736)
    .components('1x uranium_235', '2x oxygen')
    .iconSet(SHINY)
    .formula('U²³⁵O2')
    .flags(rod)
    .ingot()

event.create('thorium_uranium_dioxide')
    .color(0x002200)
    .components('9x thorium_dioxide', '1x uranium_235_dioxide')
    .formula('(Th,U)O₂')
    .flags(rod)
    .iconSet(SHINY)
    .ingot()

event.create('plutonium_nitrate_solution')
    .liquid()
    .color(0x1E90FF)
    .components('1x plutonium', '1x americium', '2x nitric_acid')
    .flags(no_decomp)

event.create('plutonium_oxalate')
    .dust()
    .color(0x87CEEB)
    .components('1x plutonium', '1x americium', '1x oxalic_acid')
    .flags(no_decomp)

event.create('plutonium_dioxide')
    .color(0x8B0000)
    .components('1x plutonium', '2x oxygen')
    .iconSet(METALLIC)
    .formula('Pu²³⁹O2')
    .flags(rod)
    .ingot()

event.create('plutonium_241_dioxide')
    .color(0x8B0000)
    .components('1x plutonium_241', '2x oxygen')
    .iconSet(SHINY)
    .formula('Pu²⁴¹O2')
    .flags(rod)
    .ingot()

event.create('mixed_plutonium_dioxide')
    .color(0xfe1b1b)
    .components('3x plutonium_dioxide', '1x plutonium_241_dioxide')
    .formula('(Pu²³⁹)₃(Pu²⁴¹)O₈')
    .flags(rod)
    .ingot()

event.create('regenerated_tbp')
    .liquid()
    .color(0xF0E68C)
    .components('3x tributyl_phosphate')
    
event.create('sodium_carbonate')
    .color(0xFFFFFF)
    .components('2x sodium', '1x carbon', '3x oxygen')
    .dust()

event.create('solvent_wash_waste')
    .liquid()
    .color(0xCD853F)
    .components('1x sodium_carbonate', '1x carbon')

//return to sender

// blood line
event.create('amino_acid_solution')
    .liquid()
    .color(0xE8DCC8)
    .components('2x carbon', '4x hydrogen', '1x nitrogen', '2x oxygen')


event.create('human_serum_albumin')
    .dust()
    .color(0xFFF8DC)
    .components('4x amino_acid_solution', '2x sulfur', '1x zinc')
    .flags(no_decomp)


event.create('hemoglobin')
    .dust()
    .color(0xDC143C)
    .components('6x amino_acid_solution', '4x iron', '4x nitrogen', '2x oxygen')
    .flags(no_decomp)


event.create('fibrinogen')
    .dust()
    .color(0xF5DEB3)
    .components('5x amino_acid_solution', '1x calcium', '2x phosphorus')
    .flags(no_decomp)


event.create('blood_proteins')
    .gas()
    .color(0xffe9bf)
    .components('2x human_serum_albumin', '2x hemoglobin', '1x fibrinogen')
    .flags(no_decomp)

event.create('blood_plasma')
    .gas()
    .color(0xfac45b)
    .components('8x water', '1x blood_proteins', '1x blood_electrolytes')
    .flags(no_decomp)

event.create('natural_blood')
    .gas()
    .color(0xB30E08)

// Blood electrolytes - the ion soup that keeps your cells from fucking dying
event.create('blood_electrolytes')
    .dust()
    .gas()
    .color(0xF0F8FF)
    .components('3x sodium', '2x potassium', '2x calcium', '1x magnesium', '4x chlorine', '1x phosphorus')
    .flags(no_decomp)

event.create('cellulose')
    .dust()
    .color(0xFAF0E6)
    .components('6x carbon', '10x hydrogen', '5x oxygen')
    .formula('(C₆H₁₀O₅)ₙ')

event.create('artificial_blood')
    .gas()
    .color(0x4e0e04)
    .components('55x blood_plasma', '40x water', '5x blood_electrolytes')
    .flags(no_decomp)

//a lil methamphetamine chain, if you will

event.create('methylamine')
    .gas()
    .components('1x carbon', '5x hydrogen', '1x nitrogen')
    .formula('CH3NH2')
    .flags(no_decomp)

event.create('phenylacetic_acid')
    .gas()
    .components('8x carbon', '8x hydrogen', '2x oxygen')
    .formula('C6H5CH2COOH.')
    .flags(no_decomp)

event.create('phenylacetone')
    .gas()
    .components('9x carbon', '10x hydrogen', 'oxygen')
    .formula('C6H5CH2COCH3')
    .flags(no_decomp)

event.create('crystal_methamphetamine')
    .dust()
    .components('10x carbon', '15x hydrogen', 'nitrogen')
    .color(0x00cadc).iconSet(GTMaterialIconSet.SHINY)
    .ignoredTagPrefixes([TagPrefix.dustSmall, TagPrefix.dustTiny])
    .flags(no_decomp)
    .liquid(297)

// return to non-meth

const primordials = [
    { name: 'aether',   primary: 0xc8e8ff, secondary: 0xffffff },
    { name: 'erebus',   primary: 0x0a0014, secondary: 0x1a0033 },
    { name: 'prometheus', primary: 0xCC6600, secondary: 0xFF9922 },
    { name: 'boreas', primary: 0xAADDFF, secondary: 0xE8F4FF }

]

primordials.forEach(p => {
    event.create(p.name + '_essence')
        .liquid(273)
        .color(p.primary)
        .secondaryColor(p.secondary)
})
event.create('primordial_essence')
        .liquid(new GTFluidBuilder().customStill().temperature(303))
        .color(0x006666)
// ============================================================
// GT:RN ALIEN ORE PROCESSING — INTERMEDIATE FLUID REGISTRATIONS
// ============================================================

// ============================================================
// VAELTHORITE INTERMEDIATES
// ============================================================

event.create('vaelthorium_sulfate_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x4a1a00)
    .components('1x vaelthorium', '1x sulfur', '4x oxygen', '1x water')
    .flags(no_decomp)

event.create('vanadium_solution')
    .liquid()
    .color(0x8a6a00)
    .components('1x vanadium', '1x sulfur', '4x oxygen', '1x water')
    .flags(no_decomp)

// ============================================================
// SULVARITE INTERMEDIATES
// ============================================================

event.create('sulvarite_leachate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xddaa00)
    .components('1x sulvarium', '1x gold', '1x silver', '1x bismuth', '1x nitric_acid')
    .flags(no_decomp)

event.create('zinc_chloride_solution')
    .liquid()
    .color(0xccccaa)
    .components('1x zinc', '2x chlorine', '1x water')

// ============================================================
// KETHRENITE INTERMEDIATES
// ============================================================

event.create('kethrenite_ammine_solution')
    .liquid()
    .color(0x993300)
    .components('1x kethrite', '1x copper', '1x nickel', '3x nitrogen', '3x hydrogen')
    .flags(no_decomp)

// ============================================================
// VORREXINITE INTERMEDIATES
// ============================================================

event.create('pgm_chloride_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x220011)
    .components('1x iridium', '1x ruthenium', '1x rarest_metal_mixture', '6x chlorine', '1x water')
    .flags(no_decomp)

// ============================================================
// THERMASTONE INTERMEDIATES
// ============================================================

event.create('thermavyte_oxide')
    .liquid()
    .color(0xdd5500)
    .components('1x thermavyte', '2x oxygen')
    .flags(no_decomp)

event.create('chromium_trioxide_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xcc2200)
    .components('1x chromium', '3x oxygen', '1x water')
    .flags(no_decomp)

// ============================================================
// CINDRAX INTERMEDIATES
// ============================================================

event.create('cindrax_alkaline_melt')
    .liquid()
    .color(0x666655)
    .components('1x cindralite', '1x silicon', '1x sodium', '1x oxygen', '1x hydrogen')
    .flags(no_decomp)

event.create('sodium_chloride_solution')
    .liquid()
    .color(0xeeeedd)
    .components('1x sodium', '1x chlorine', '1x water')

// ============================================================
// AETHERIC PALLADITE INTERMEDIATES
// ============================================================

event.create('palladite_leachate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x004433)
    .components('1x aetherite', '1x niobium', '1x palladium', '1x rhodium', '1x sulfuric_acid')
    .flags(no_decomp)

event.create('aetherite_residue')
    .liquid()
    .color(0x003322)
    .components('1x aetherite', '1x hafnium', '1x sulfur')
    .flags(no_decomp)

// ============================================================
// PYRATHITE INTERMEDIATES
// ============================================================

event.create('pyrathite_fluoride_vapor')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xee3300)
    .components('1x pyrathene', '1x titanium', '1x tungsten', '6x fluorine')
    .flags(no_decomp)

event.create('vanadium_oxyfluoride')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xcc6600)
    .components('1x vanadium', '1x oxygen', '1x fluorine')
    .flags(no_decomp)

// ============================================================
// NULLEDRYTE INTERMEDIATES
// ============================================================

event.create('unstable_oganesson_solution')
    .liquid()
    .color(0x00ffcc)
    .components('1x oganesson', '1x xenon', '1x heavy_water')
    .flags(no_decomp)

event.create('cryostabilized_decay_matrix')
    .liquid(40)
    .color(0x00ccaa)
    .components('1x oganesson', '1x darmstadtium', '2x helium')
    .flags(no_decomp)

// ============================================================
// XYCRHOVITE INTERMEDIATES
// ============================================================

event.create('xycrhovite_resonance_solution')
    .liquid()
    .color(0xff88cc)
    .components('1x draconium', '1x dilithium', '1x refined_sentience')
    .flags(no_decomp)

event.create('echo_fluid')
    .liquid()
    .color(0x4400aa)
    .components('1x echo', '1x refined_sentience')
    .flags(no_decomp)

// ============================================================
// VHESZCRYL INTERMEDIATES
// ============================================================

event.create('vheszcryl_extract')
    .liquid()
    .color(0xcc77ff)
    .components('1x vhaelcryite', '1x enstatite', '2x carbon', '2x oxygen')
    .flags(no_decomp)

event.create('transcendentine_solution')
    .liquid()
    .color(0xee66bb)
    .components('1x transcendentine', '1x water')
    .flags(no_decomp)

// ============================================================
// GROTHEMITE INTERMEDIATES
// ============================================================

event.create('grothemite_leachate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x7a3a10)
    .components('1x hematite', '1x rare_earth', '1x hafnium', '1x sulfuric_acid')
    .flags(no_decomp)

event.create('iron_sulfate_solution')
    .liquid()
    .color(0x996622)
    .components('1x iron', '1x sulfur', '4x oxygen', '1x water')
    .flags(no_decomp)

// ============================================================
// KRETHAVINE INTERMEDIATES
// ============================================================

event.create('krethavine_tetrachloride')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x4466aa)
    .components('1x kraethite', '1x titanium', '4x chlorine')
    .flags(no_decomp)

event.create('lanthanum_chloride_solution')
    .liquid()
    .color(0x88bbdd)
    .components('1x lanthanum', '3x chlorine', '1x water')
    .flags(no_decomp)

event.create('magnesium_chloride_solution')
    .liquid()
    .color(0xddddcc)
    .components('1x magnesium_chloride', '1x water')

// ============================================================
// ORVEXITE INTERMEDIATES
// ============================================================

event.create('orvexite_nitrate_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x336622)
    .components('1x rare_earth', '1x osmiridium', '1x rhodium', '3x nitric_acid')
    .flags(no_decomp)


// ============================================================
// PHAZDURITE INTERMEDIATES (PUREX CHAIN)
// ============================================================

event.create('phazdurite_feed_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x220011)
    .components('1x transcendentine', '1x naquadria', '3x nitric_acid')
    .flags(no_decomp)

event.create('adjusted_phazdurite_feed')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x330022)
    .components('1x transcendentine', '1x naquadria', '4x nitric_acid')
    .flags(no_decomp)

event.create('phazdurite_organic_phase')
    .liquid()
    .color(0x550033)
    .components('1x transcendentine', '1x naquadria', '1x tributyl_phosphate')
    .flags(no_decomp)

event.create('phazdurite_raffinate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x1a000d)
    .components('1x nitric_acid', '1x water')
    .flags(no_decomp)

event.create('phazdurite_scrubbed_phase')
    .liquid()
    .color(0x660044)
    .components('1x transcendentine', '1x naquadria', '1x tributyl_phosphate')
    .flags(no_decomp)

event.create('phazdurite_scrub_waste')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x110008)
    .components('1x nitric_acid', '1x water')
    .flags(no_decomp)


event.create('organic_naquadria_phase')
    .liquid()
    .color(0x440022)
    .components('1x naquadria', '1x tributyl_phosphate')
    .flags(no_decomp)

event.create('naquadria_nitrate_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x660033)
    .components('1x naquadria', '2x nitric_acid')
    .flags(no_decomp)




// alien shit lmao. well more i mean

event.create('antimony_pentafluoride')
    .gas(273)
    .color(0x6579cc)
    .components('1x antimony', '5x fluorine')

event.create('antimony_hexafluoride')
    .gas(273)
    .color(0x6579cc)
    .components('1x antimony', '6x fluorine')

event.create('xenon_difluoride')
    .gas(350)
    .color(0x376eb5)
    .components('xenon', '2x fluorine')

event.create('xenon_trifluoride')
    .gas(350)
    .color(0x3f82e3)
    .components('xenon', '3x fluorine')


event.create('xenon_tetrafluoride')
    .gas(350)
    .color(0x424aaa)
    .components('xenon', '4x fluorine')
    
// oh lord. the unholy X word
event.create('xenon_trifluoride-hexafluoroantimonate')
    .gas(350)
    .color(0x527fd7)
    .components('xenon_trifluoride', 'antimony_hexafluoride')

event.create('oganesson-xenon_trifluoride')
    .gas(600)
    .color(0x382f84)
    .components('oganesson', 'xenon_trifluoride')

event.create('bose-einstein_oganesson-xenon_trifluoride_condensate')
    .plasma(0)
    .color(0x3c3f85)
    .components('oganesson', 'xenon_trifluoride')

event.create('quasiflux')
    .liquid(293)
    .color(0x861bbb)
    .element('quasiflux')

event.create('quasifluxed_oganesson')
    .liquid(293)
    .color(0x9025d5)
    .components('quasiflux', 'oganesson')
    .flags(no_decomp)

event.create('quasifluxed_oganesson-xenon_trifluoride')
    .liquid(293)
    .color(0xbe4aff)
    .components('quasiflux', 'oganesson-xenon_trifluoride')
    .flags(no_decomp)

    
    //material changes go brrbrrbrbrb

    GTMaterials.Dysprosium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Dysprosium.setMaterialARGB(0xb87200)
    GTMaterials.Dysprosium.setProperty($PropertyKey.BLAST, new $BlastProperty(2850, "mid", 2000, 900, -1, -1))

    GTMaterials.Oganesson.setMaterialARGB(0x0a0a1a)
    GTMaterials.Oganesson.setMaterialSecondaryARGB(0x6600ff)
    GTMaterials.Oganesson.setMaterialIconSet(GEM_VERTICAL)
    
    
    GTMaterials.Dysprosium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Oganesson.setProperty(PropertyKey.ORE, new $OreProperty)
    GTMaterials.Arsenic.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Yttrium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Phosphate.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Silicon.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.SiliconDioxide.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Europium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Osmium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Iridium.setProperty(PropertyKey.ORE, new $OreProperty())

    
    
    
    GTMaterials.Zirconium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setProperty($PropertyKey.BLAST, new $BlastProperty(4500, "mid", 1560, 650, -1, -1))
    GTMaterials.Zirconium.setMaterialARGB(0x8addff)
    GTMaterials.Zirconium.addFlags(rod, frame, plates)

    GTMaterials.Hafnium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Hafnium.setProperty($PropertyKey.BLAST, new $BlastProperty(3600, "mid", 1240, 450, -1, -1))
    GTMaterials.Hafnium.setMaterialARGB(0x008000)
    GTMaterials.Hafnium.addFlags(rod, frame, plates)
    GTMaterials.Hafnium.setProperty(PropertyKey.ORE, new $OreProperty())

    GTMaterials.Lanthanum.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lanthanum.setProperty($PropertyKey.BLAST, new $BlastProperty(1200, "low", 400, 350, -1, -1))
    GTMaterials.Lanthanum.addFlags(rod, frame, plates)
    GTMaterials.Lanthanum.setProperty(PropertyKey.ORE, new $OreProperty())

    GTMaterials.Oganesson.setProperty(PropertyKey.GEM, new $GemProperty)


    GTMaterials.Helium3.setProperty(PropertyKey.ORE, new $OreProperty)
    GTMaterials.Helium3.setProperty(PropertyKey.GEM, new $GemProperty)
    GTMaterials.Helium3.setMaterialARGB(0xe8eb87)
    GTMaterials.Helium.setMaterialARGB(0xe8eb87)
    
    GTMaterials.SiliconeRubber.addFlags(frame)
    GTMaterials.Brass.addFlags(frame)
    GTMaterials.Copper.addFlags(frame)
    GTMaterials.Sapphire.addFlags(frame)
    GTMaterials.GreenSapphire.addFlags(frame)
    GTMaterials.Osmiridium.addFlags(frame)
    GTMaterials.Gold.addFlags(small_gear)
    GTMaterials.Plutonium239.addFlags(rod)
    GTMaterials.Bronze.addFlags(fine_wire)
    GTMaterials.Trinium.addFlags(frame)
    GTMaterials.Netherite.addFlags(frame, rod, dense_plate)

    GTMaterials.Invar.addFlags(dense_plate)
    GTMaterials.Electrum.addFlags(dense_plate)

    addFluid(GTMaterials.EchoShard, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Dysprosium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.AmmoniumChloride, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.DiethylenetriaminepentaaceticAcid, $FluidStorageKeys.LIQUID)

    GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold")
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    GTMaterials.BorosilicateGlass.setComponents("1x boron", '14x glass', '1x lanthanum')
    GTMaterials.BorosilicateGlass.setFormula("B(SiO2)14La")
    
    // Change materials' components
    GTMaterials.EchoShard.setFormula('(SiO2)7(KMg3Al3F2Si3O10)Ec2')
    GTMaterials.Sculk.setFormula('(SiO2)4(KMg3Al3F2Si3O10)Ec2')
    GTMaterials.Netherite.setFormula('PtNhAu4')
    GTMaterials.Netherite.setComponents('1x platinum', '4x gold')
    GTMaterials.Lapotron.setComponents('3x energium', '2x lapis')
    GTMaterials.Lapotron.setFormula('((Si(FeS2)5(CrAl2O3)Hg3)5(CrAl2O3)4)(Al6Si6Ca8Na8)12(Al3Si3Na4Cl)2(FeS2)(CaCO3))')
    GTMaterials.Sculk.setComponents('1x deepslate', '2x echo')
    GTMaterials.StainlessSteel.setComponents('6x iron', '1x chromium', '1x manganese', '1x nickel', '2x lanthanum')
    GTMaterials.StainlessSteel.setFormula('Fe6CrMnNiLa2')
    GTMaterials.RedSteel.setComponents('1x rose_gold', '1x brass', '2x lanthanum', '4x black_steel', '2x steel')
    GTMaterials.RedSteel.setFormula('(CuAu4)(ZnCu3)La2Fe2(NI(AuAgCu3)Fe3)4')
    GTMaterials.BlueSteel.setComponents('1x sterling_silver', '1x bismuth_bronze', '2x lanthanum', '4x black_steel', '2x steel')
    GTMaterials.BlueSteel.setFormula('(CuAg4)(BiZnCu3)La2Fe2(Ni(AuAgCu3)Fe3)4')
    GTMaterials.TungstenSteel.setComponents('1x steel', '2x tungsten', '1x lanthanum')
    GTMaterials.TungstenSteel.setFormula('LaFeW2')

    //return from greece

    event.create('osmium_chloride')
    .components('1x osmium', '3x chlorine')
    .color(0x7d7d20).iconSet(SHINY)
    .dust()
    .flags(no_decomp)

    event.create('rhodium_chloride')
    .components('1x rhodium', '3x chlorine')
    .color(0x5a2050).iconSet(SHINY)
    .dust()
    .flags(no_decomp)

    event.create('rhenium_fluorosulfate')
    .components('1x rhenium', '1x sulfur', '3x oxygen', '1x fluorine')
    .formula('Re(SO3F⁻)')
    .color(0xbfbc61).iconSet(SHINY)
    .dust()
    .flags(no_decomp)

    event.create('ruthenium_phosphate')
    .components('1x ruthenium', '2x phosphate')
    .color(0x78d066).iconSet(SHINY)
    .dust()
    .flags(no_decomp)

    event.create('rhenium_iii_sulfate')
    .components('2x rhenium', 'sulfur', '4x oxygen')
    .ore(1, 2, true)
    .formula('Re2(SO4)3')
    .color(0x3e6e9b).iconSet(DULL)
    .dust()
    .flags(no_decomp)

    event.create('boron_trichloride')
    .components('1x boron', '3x chlorine')
    .color(0x3f6b6e)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))


    event.create('carborane_acid')
    .components('1x hydrogen', '1x carbon','11x boron', '11x chlorine')
    .color(0x2b8f80)
    .gas(new GTFluidBuilder().attribute($FluidAttributes.ACID))

    event.create('proto-carborane_acid')
    .components('1x carborane_acid', '11x chlorine')
    .color(0x075040)
    .gas(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .flags(no_decomp)

    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Rhenium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Tellurium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Selenium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Promethium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Holmium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Thulium.setProperty($PropertyKey.DUST, new $DustProperty)
    GTMaterials.Rhenium.setMaterialARGB(0xff8901)
    GTMaterials.Tellurium.setMaterialARGB(0xc5c70a)
    GTMaterials.Selenium.setMaterialARGB(0xba2d3a)

    GTMaterials.Promethium.setMaterialARGB(0x2dc4cd)
    GTMaterials.Holmium.setMaterialARGB(0x55ff83)
    GTMaterials.Thulium.setMaterialARGB(0xed5daf)

    GTMaterials.Tellurium.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Bismuth.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Selenium.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Cadmium.setProperty($PropertyKey.ORE, new $OreProperty)

    const naquadriumadjacentpartsheheha = {
    naquadrium : [0x426b42, 0x457a45, 0x3aad3a, 0x1dde1d, 0x274227, ],
    enriched_naquadrium: [0x235223, 0x297a29, 0x61ad61, 0xb1621a, 0x304230]
    }
Object.entries(naquadriumadjacentpartsheheha).forEach(([type, chezmix]) => {
    event.create(`impure_${type}_solution`).color(chezmix[0]).liquid()
    event.create(`${type}_solution`).color(chezmix[1]).liquid()
    event.create(`acidic_${type}_solution`).color(chezmix[2]).liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    event.create(`${type}_waste`).color(chezmix[4]).liquid()

    event.create(`${type}_boride`).color(chezmix[3]).dust().flags(no_decomp, rod).components(`1x ${type}`, '1x boron')
})
//return to sender: ZPM alloys


    compIngot('tri-osmic_matrix', ['4x osmium', 'selenium', 'tungsten'], 0x4849c4, SHINY, [6300, 'high', va.zpm, 1800], [ring, gear, small_gear, plates, rod, long_rod, rotor, round, bolt_and_screw, foil, fine_wire], null)
    compIngot('axiom-re', ['gallium', 'rhenium'], 0xeebe80, SHINY, [4650, 'mid', va.luv, 1400], [plates, long_rod, rod, spring, small_spring, foil], [v.zpm, 6, 3, false])
    compIngot('pentarch-t', ['trinium', 'taint', 'titanium', 'tantalum', 'tellurium'], 0x9b7e99, SHINY, [6500, 'high', va.zpm, 1650], [spring, foil, long_rod, plates, bolt_and_screw, gear, rod], [v.zpm, 8, 6, false])
    compIngot('astrazine-e', ['3x europium', '2x cobalt', 'titanium', 'lutetium'], 0X4FB5FB, METALLIC, [6500, 'high', va.luv, 300], [long_rod, rod, plates, spring, small_spring, fine_wire, frame], [v.uhv, 4, 16, false])

    //mmh smores (i meant ores)

    const compOreD = (name, elements, color, icon, oreShit) => {
        event.create(name)
        .dust()
        .components(elements)
        .color(color)
        .iconSet(icon)
        .ore(3, 2)
        .addOreByproducts(oreShit[0])
        .separatedInto(elements[0].replace(/\d+x\s*/g, ''), elements[1].replace(/\d+x\s*/g, ''))
        .washedIn(oreShit[1])
        .oreSmeltInto(elements[1].replace(/\d+x\s*/g, ''))
    }

    const rareorespleasefuckingkillme = {
        //the big boy tellurides
        calaverite: [['gold', '2x tellurium'], 0xd4af37, SHINY, ['platinum', 'copper', 'sulfur'], 'hydrogen_cyanide'],
        hessite: [['2x silver', 'tellurium'], 0x8c8c8c, METALLIC, ['sulfur', 'palladium', 'selenium'], 'hydrogen_cyanide'],
        altaite: [['lead', 'tellurium'], 0x7a4a7a, DULL, ['bismuth', 'zinc', 'tin'], 'hydrogen_cyanide'],
        // the big boy selenides
        clausthalite: [['lead', 'selenium'], 0x8a3a5a, DULL, ['gold', 'platinum', 'tungsten'], 'aqua_regia'],
        tiemannite: [['mercury', 'selenium'], 0x9a2d35, METALLIC, ['cadmium', 'tellurium', 'sulfur'], 'aqua_regia'],
        berzelianite: [['2x copper', 'selenium'], 0xc84a50, METALLIC, ['silver', 'gold', 'sulfur'], 'aqua_regia']
    }

Object.entries(rareorespleasefuckingkillme).forEach(([ore, [elements, color, icon, funkyshit, fluid]]) => {
    compOreD(ore, elements, color, icon, [funkyshit, fluid])
})



})

StartupEvents.registry("item", event => {
        event.create('multiblock_upgrade_kit')
        .displayName('Multiblock Upgrade Kit')
        .texture('kubejs:item/upgrade_kit')
        .tooltip('§7Used to upgrade some HV machines into multiblocks capable of §6Perfect Overclock')

event.create("uxpic_wafer").texture("kubejs:item/uxpic/uxpic_wafer").displayName("UXPIC Wafer").tooltip("§7Raw Ultra Extreme Power Circuit")
    event.create("uxpic_chip").texture("kubejs:item/uxpic/uxpic_chip").displayName("UXPIC Chip").tooltip("§7Ultra Extreme Power IC")

})

StartupEvents.registry('item', event => {
    event.create('primitive_glue_tube')
        .tooltip('The Primitivest Glue')
        .maxDamage(24)
    event.create('empty_glue_tube')
    event.create('mythical_ore_vein')
    event.create('mechanical_hands')
    event.create('glass_ampule')
    event.create('mechanical_essence_ampule')

    event.create('gtceu:purified_netherite_scrap')
    .displayName("§8Purified Netherite §rScrap")
    .tooltip("§eNr*")
    .texture('gtceu:item/netherite_line/purified_scrap')

    event.create('gtceu:netherite_scrap')
    .displayName("§8Netherite §rScrap")
    .tooltip("§eNr")
    .texture('gtceu:item/netherite_line/scrap')

    event
    .create('gtceu:empty_fuel_rod')
    .textureJson({ layer0: `gtceu:item/rod/ready/empty_fuel_rod`})

    event
    .create("gtceu:organism_amalgam")

    event
    .create("gtceu:lumium_solar_panel")

    event
    .create("gtceu:enderium_lunar_panel")
    
const rocketTiers = [
    'tainted_titanium',
    'desnium',
    'ostrite',
    'calenite',
]

rocketTiers.forEach(tier => {
    const displayName = tier.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

    event.create(`gtceu:rocket_plating_${tier}`)
        .displayName(`${displayName} Rocket Plating`)
        .textureJson({ layer0: `gtceu:item/rocket/${tier}_plating` })

    event.create(`gtceu:engine_casing_${tier}`)
        .displayName(`${displayName} Engine Casing`)
        .textureJson({ layer0: `gtceu:item/rocket/${tier}_engine_casing` })
})


const yumyumrods = ["uranium_235_oxide", "enriched_naquadrium_boride", "plutonium_241_oxide", "plutonium_oxide", 'thorium_uranium_oxide']
        yumyumrods.forEach((type) => {
        let displayType = type.replace('_oxide', '')
    
    event.create(`gtceu:${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/ready/${displayType}_rod`})

    event.create(`gtceu:spent_${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/spent/spent_${displayType}_rod`})

    event.create(`gtceu:chopped_${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/chopped/chopped_${displayType}_rod`})
    })

    event.create(`gtceu:mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/ready/mixed_oxide_fuel_rod`})
    .displayName('MOX Fuel Rod')

    event.create(`gtceu:spent_mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/spent/spent_mixed_oxide_fuel_rod`})
    .displayName('Spent MOX Fuel Rod')

    event.create(`gtceu:chopped_mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/chopped/chopped_mixed_oxide_fuel_rod`})
    .displayName('Chopped MOX Fuel Rod')

const oreamalgamcreation3000 = ['overworld', 'nether', 'end', 'undergarden', 'moon', 'mars', 'mercury', 'venus', 'glacio']
oreamalgamcreation3000.forEach(name => {
event.create(`gtceu:${name}_ore_amalgam`)
.textureJson({ layer0: `gtceu:item/ore_amalgam/${name}_ore_amalgam`})
})
event.create('gtceu:preon_star')
.displayName('Preon-Star')

    event.create('gtceu:pulsar')

stComponents.forEach(typashit => {
const name = typashit.split('_')
    .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

    event.create(`gtceu:uhv_${typashit}`)
        .displayName(`§4UHV §r${name}`)
        .textureJson({ layer0: `gtceu:item/components/uhv/${typashit}`})

    event.create(`gtceu:ruined_${typashit}`)
        .displayName(`Ruined ${name}`)
        .textureJson({ layer0: `gtceu:item/components/ruined/${typashit}`})
})
    event.create("gtceu:kha_reh-zul_spaceship_scrap")
    .displayName("Kha'Reh-Zul Spaceship Scrap")
    .textureJson({ layer0: 'gtceu:item/components/kha/scrap'})

    event.create("gtceu:ruined_hull")
    .textureJson({ layer0: 'gtceu:item/components/kha/ruined_hull'})

    event.create("gtceu:ruined_machine_parts")
    .textureJson({ layer0: 'gtceu:item/components/kha/ruined_machine_parts'})

    event.create("gtceu:antimatter_tank")
    .textureJson({ layer0: 'gtceu:item/components/kha/tank'})
    
})


StartupEvents.registry('fluid', event => {
    event
    .create('boiling_water')
    .thinTexture(0x3448ff)
    .bucketItem.texture('kubejs:item/boiling_water')

    event
    .create('gtceu:resonant_ender')
    .stillTexture('kubejs:block/fluids/ender_still')
    .flowingTexture('kubejs:block/fluids/ender')

    event
    .create('gtceu:aqueous_ammonium_formate')
    .thinTexture(0x687f97)
    .bucketColor(0x687f97)

    

})
StartupEvents.registry('block', ore => {

ore.create("gtceu:cracked_ancient_debris")
.texture('up', 'gtceu:block/cracked_ancient_debris_top')
.texture('down', 'gtceu:block/cracked_ancient_debris_top')
.texture('east', 'gtceu:block/cracked_ancient_debris_side')
.texture('west', 'gtceu:block/cracked_ancient_debris_side')
.texture('north', 'gtceu:block/cracked_ancient_debris_side')
.texture('south', 'gtceu:block/cracked_ancient_debris_side')
.soundType("ancient_debris")
.hardness(22)
.resistance(400)
.requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')

    ore.create("gtceu:crumbling_ancient_debris")
.texture('up', 'gtceu:block/crumbling_ancient_debris_top')
.texture('down', 'gtceu:block/crumbling_ancient_debris_top')
.texture('east', 'gtceu:block/crumbling_ancient_debris_side')
.texture('west', 'gtceu:block/crumbling_ancient_debris_side')
.texture('north', 'gtceu:block/crumbling_ancient_debris_side')
.texture('south', 'gtceu:block/crumbling_ancient_debris_side')
.soundType("ancient_debris")
.hardness(18)
.resistance(60)
.requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

})

StartupEvents.registry('block', event => {
function casing(id, name, texture, hardness, resistance, tool, type, model, sound) {
    if (sound == undefined) sound = 'metal';

    let builder;

    if (type != null) {
        builder = event.create(`gtceu:${id}`, type);
    } else {
        builder = event.create(`gtceu:${id}`);
    }

    builder
        .displayName(name)
        .textureAll(`gtceu:block/casings/${texture}`);

    if (model != null) {
        builder.model(model);
    }

    builder
        .soundType(sound)
        .hardness(hardness)
        .resistance(resistance)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(`minecraft:${tool}`);
}

casing('nexus_steel_casing', '§bNexus Steel §rCasing', 'solid/nexus_steel_casing', 13, 25, 'needs_iron_tool')

casing('igneous_bronze_casing', '§6Igneous Bronze §rCasing', 'solid/igneous_bronze_casing', 8, 13, 'needs_stone_tool')

casing('magikstone_casing', '§9Magik Stone §rCasing', 'solid/magikstone_casing', 7, 13, 'needs_stone_tool')

casing('source_casing', '§dSource Casing', 'solid/source_casing', 1, 6, 'needs_stone_tool', null, null, 'glass')

casing('echoing_fluxum_casing', '§9Echoing Fluxum §rCasing', 'solid/fluix_casing', 1, 6, 'needs_stone_tool', null, null, 'glass')

casing('wizarding_steel_casing', '§bWizard §dSteel §rCasing', 'solid/wizarding_steel_casing', 9, 23, 'needs_stone_tool', 'gtceu:active', 'gtceu:block/wizarding_steel_casing')

casing('resonite_casing', '§1Resonance Manipulative Resonite §rCasing', 'solid/resonite_casing', 9, 23, 'needs_iron_tool')

casing('enderium_casing', '§1Radiologically-Insulative Enderium §rCasing', 'solid/thermal_casing/enderium_casing', 9, 23, 'needs_iron_tool')

casing('lumium_casing', '§6Photo-kinetically Absorbitive Lumium §rCasing', 'solid/thermal_casing/lumium_casing', 9, 23, 'needs_iron_tool')

casing('signalum_casing', '§cParticle Attracting Signalum §rCasing', 'solid/thermal_casing/signalum_casing', 9, 23, 'needs_iron_tool')

casing('nitinol_casing', '§7Seismic Resilient Nitinol §rCasing', 'solid/nitinol_casing', 13, 30, 'needs_diamond_tool')

casing('auralloy-omega_over_transcendentine_casing', '§dTerakelvin Resilient §6Aura§7lloy-Ω §rOver §dTranscendentine §rParticle Accelerator Casing', 'solid/tp-da/transcendentine_over_auralloy_casing', 13, 30, 'needs_diamond_tool')

casing('vhaelcryite_casing', 'Surreal §4Pyrathene§r-§dVhaelcryite §rCasing', 'solid/vhaelcryite_casing', 13, 30, 'needs_diamond_tool')

casing('sulvan_steel_casing', 'Hypertensile-§7Cindra§rtechnic §6Sulvarium§r-Over-§bKraethite Steel §rCasing', 'solid/sulvan_steel_casing', 17, 40, 'needs_netherite_tool')

casing('aetherite_casing', '§3Cryothetically§r Hyperoperative §2Aetheric§r-§4Thermavyte§r Casing', 'solid/aetherite_casing', 17, 40, 'needs_netherite_tool')

casing('peek_casing', "§aAcidically Nulled §6Poly-Ether Ether Ketone §rCasing", 'solid/peek_casing', 10, 23, 'needs_iron_tool')

casing('peek_pipe_casing', '§6Poly-Ether Ether Ketone Pipe §rCasing', 'pipe/peek_casing', 10, 23, 'needs_iron_tool')

casing('sulvan_steel_gearbox', '§6Sulvarium§r-Over-§bKraethite Steel §rGearbox', 'gearbox/sulvan_steel_gearbox', 17, 40, 'needs_netherite_tool')

casing('activated_nexian_pyrite_casing', '§4I§cn§6f§ee§6r§cn§4o§cs§6t§ea§6t§ci§4c§r-§6Alloyment §k§1A§2c§3t§4i§5v§6a§7t§8e§9d§r §bNexian Pyrite§r Casing', 'solid/activated_nexian_pyrite_casing', 23, 60, 'needs_duranium_tool')

casing('chithion-flame_casing', '§9§kPrimordially§r Stabilized §4Infernal Chithion-Flame§r Casing', 'temperature/chithion_flame_casing', 9, 11, 'needs_iron_tool')

casing('cryonull_casing', '§9§kPrimordially§r Stabilized §3Cryothetic Cryonull§r Casing', 'temperature/chithion_flame_casing', 9, 11, 'needs_iron_tool')

event.create('gtceu:sulvan_steel_firebox', 'gtceu:active')
.displayName('§6Sulvarium§r-Over-§bKraethite Steel §rFirebox')
.firebox('gtceu:block/casings/solid/sulvan_steel_casing', 'gtceu:block/casings/firebox/sulvan_steel_firebox', 'gtceu:block/casings/solid/sulvan_steel_casing')
.hardness(17)
.resistance(40)
.tagBlock(`forge:needs_netherite_tool`)
.tagBlock('gtceu:mineable/pickaxe_or_wrench')

event.create('gtceu:unreal_engine_intake', 'gtceu:active')
.displayName('§6Unreal§r Engine Intake')
.simple('gtceu:block/casings/pipe/unreal_engine_intake')
.hardness(17)
.resistance(40)
.tagBlock(`forge:needs_netherite_tool`)
.tagBlock('gtceu:mineable/pickaxe_or_wrench')

event
    .create('botania:auric_livingrock')
    .soundType('stone')
    .hardness(8)
    .resistance(13)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')



event
    .create('eternal_hell_core')
    .displayName('§6Eternal Hell Core')
    .soundType('sculk_catalyst')
    .fullBlock(false)
    .hardness(50)
    .resistance(12500)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .box(4, 4, 4, 12, 12, 12, true)

event
    .create('eternal_frost_core')
    .displayName('§3Eternal Frost Core')
    .soundType('sculk_catalyst')
    .fullBlock(false)
    .hardness(50)
    .resistance(12500)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .box(4, 4, 4, 12, 12, 12, true)

event
    .create('dormant_power_core')
    .displayName('§8Dormant Heat Core')
    .soundType('sculk_catalyst')
    .fullBlock(false)
    .hardness(50)
    .resistance(12500)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .box(4, 4, 4, 12, 12, 12, true)

event
    .create('compressed_cobblestone')
    .soundType('stone')
    .hardness(3.5)
    .resistance(6)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_wooden_tool')

event
    .create('obsidian_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('signalum_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('lumium_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('enderium_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('aetherite_glass')
    .soundType('glass')
    .hardness(17)
    .resistance(40)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('gtceu:organism_glass')
    .soundType('glass')
    .hardness(10)
    .resistance(6)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('gtceu:gastrointestinal_acid_block')
    .soundType('sculk_sensor')
    .hardness(1)
    .resistance(0.5)
    .tagBlock('minecraft:mineable/shovel')
    .tagBlock('minecraft:needs_wooden_tool')

event
    .create('gtceu:fuel_assembly', "gtceu:active")
    .defaultCutout()
    .hardness(35)
    .resistance(16000)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .soundType('metal')

event
    .create('carbonized_log')
    .hardness(4)
    .resistance(1)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_stone_tool')
    .soundType('basalt')
    .textureAll('kubejs:block/carbonized_log')
    .texture('up', 'kubejs:block/carbonized_log_top')
    .texture('down', 'kubejs:block/carbonized_log_top')
    .property(BlockProperties.AXIS)
    .placementState(state => { state.setValue(BlockProperties.AXIS, state.clickedFace.axis) })

event
    .create('gtceu:solid_fuel_assembly', "gtceu:active")
    .hardness(35)
    .resistance(16000)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .soundType('metal')



event
    .create('gtceu:undergarden_marker')

event
    .create('gtceu:naquadrium_coil_block', 'gtceu:coil')
        .temperature(8100)
        .level(8)
        .energyDiscount(6)
        .tier(5)
        .coilMaterial(() => GTMaterials.get('naquadrium'))
        .texture('gtceu:block/casings/coils/naquadrium_coil')
        .hardness(40)
        .requiresTool(true)
        .tagBlock('forge:requires_netherite_tool')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType('metal')

event
    .create('gtceu:transcendent_dilithide_coil_block', 'gtceu:coil')
        .temperature(21600)
        .level(32)
        .energyDiscount(12)
        .tier(8)
        .coilMaterial(() => GTMaterials.get('transcendent_dilithide'))
        .texture('gtceu:block/casings/coils/transcendental_dilithide_coil')
        .hardness(40)
        .requiresTool(true)
        .tagBlock('forge:requires_duranium_tool')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType('metal')

event
    .create('gtceu:lumium_solar_collector')
        .hardness(10)
        .fullBlock(false)
        .requiresTool(true)
        .tagBlock('forge:requires_iron_tool')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType('metal')
        .box(0,8,0,16,12,16)

event
    .create('gtceu:enderium_lunar_collector')
        .hardness(10)
        .fullBlock(false)
        .requiresTool(true)
        .tagBlock('forge:requires_iron_tool')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType('metal')
        .box(0,8,0,16,12,16)
})



ItemEvents.modification(event => {
    event.modify('minecraft:experience_bottle', item => {
        item.craftingRemainder = Item.of('glass_bottle')
    })
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("moon")
        .targets("#ad_astra:moon_stone_replaceables")
        .dimensions("ad_astra:moon")

    event.create("mars")
        .targets("#ad_astra:mars_stone_replaceables")
        .dimensions("ad_astra:mars")

    event.create("mercury")
        .targets("#ad_astra:mercury_stone_replaceables")
        .dimensions("ad_astra:mercury")

    event.create("venus")
        .targets("#ad_astra:venus_stone_replaceables")
        .dimensions("ad_astra:venus")

    event.create("glacio")
        .targets("#ad_astra:glacio_stone_replaceables")
        .dimensions("ad_astra:glacio")

    event.create('endocrite')
        .targets('minecraft:endstone')
        .dimensions('minecraft:the_end')

    event.create('undergarden')
        .targets('undergarden:depthrock', 'undergarden:shiverstone', 'undergarden:tremblecrust')
        .dimensions('undergarden:undergarden')
})

GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
    event.create("moon", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:moon_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/moon_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("mars", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:mars_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/mars_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("mercury", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:mercury_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/mercury_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("venus", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:venus_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/venus_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("glacio", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:glacio_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/glacio_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("depthrock", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:depthrock").defaultBlockState())
        .baseModelLocation("undergarden:block/depthrock")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("shiverstone", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:shiverstone").defaultBlockState())
        .baseModelLocation("undergarden:block/shiverstone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("tremblecrust", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:tremblecrust").defaultBlockState())
        .baseModelLocation("undergarden:block/tremblecrust")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

})


GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("ad_astra:moon")
        .iconSupplier(() => Item.of("ad_astra:moon_globe").getItem())
        .tier(0)
        .overrideName("Moon")

    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")

    event.create("ad_astra:mercury")
        .iconSupplier(() => Item.of("ad_astra:mercury_globe").getItem())
        .tier(0)
        .overrideName("Mercury")

    event.create("ad_astra:venus")
        .iconSupplier(() => Item.of("ad_astra:venus_globe").getItem())
        .tier(0)
        .overrideName("Venus")

    event.create("ad_astra:glacio")
        .iconSupplier(() => Item.of("ad_astra:glacio_globe").getItem())
        .tier(0)
        .overrideName("Glacio")

    event.create("undergarden:undergarden")
        .iconSupplier(() => Item.of("gtceu:undergarden_marker").getItem())
        .tier(0)
        .overrideName("Undergarden")

    
})
