const v = global.v
const va = global.va
const vh = global.vh
const vha = global.vha

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {

    event.create('infinity')
    .parent('shiny')

    event.create('omnium')
    .parent('shiny')

    event.create('nullium')
    .parent('dull')

    event.create('naquadrium')
})

GTCEuStartupEvents.registry('gtceu:element', event => {
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
    .neutrons(378)
    .halfLifeSeconds(140)
    .decayTo('trinium')
    .symbol('Qx')

    event.create('enriched_naquadrium')
    .protons(170)
    .neutrons(378)
    .halfLifeSeconds(40)
    .decayTo('naquadrium')
    .symbol('*Qx*')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
event.create("infinity")
    .element("infinity")
    .ingot()
    .color(0xffffff)
    .cableProperties(v.uxv, 48, 0, true)
    .iconSet(GTMaterialIconSet.getByName("infinity"))
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame, rotor)

    event.create("omnium")
    .element("omnium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("omnium"))
    .cableProperties(v.uev, 24, 0, true)
    .blastTemp(10799, "high", va.luv, 1600)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)

    event.create("nullium")
    .element("nullium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("nullium"))
    .cableProperties(v.uiv, 32, 0, true)
    .blastTemp(10799, "higher", va.uiv, 1600)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)

    //return from greece

    //the ZPM chain of totalitarian doom
    event.create('naquadrium')
    .element('naquadrium')
    .color(0x1f1f1f).secondaryColor(0x00ffff).iconSet(GTMaterialIconSet.getByName("naquadrium"))
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
    .color(0x192919).secondaryColor(0x00ffcc).iconSet(GTMaterialIconSet.getByName("naquadrium"))
    .ingot(4)
    .flags(rod, foil)
    .blastTemp(7200, "high", va.iv, 900)
    .liquid(7100)
    .radioactiveHazard(2)

    event.create('transuranic_naquadrium')
    .components('3x naquadrium', '1x uranium_233')
    .color(0x103710).secondaryColor(0x00ffaa).iconSet(GTMaterialIconSet.getByName("naquadrium"))
    .ingot(4)
    .blastTemp(7200, "high", va.iv, 900)
    .liquid(7100)
    
    event.create('transuranic_naquadrium_alloy')
    .components('4x transuranic_naquadrium', '2x osmiridium', '1x trinium')
    .color(0x239366).secondaryColor(0x00aaff).iconSet(GTMaterialIconSet.getByName("naquadrium"))
    .flags(plates, rod, gear, small_gear, frame, small_gear, spring, bolt_and_screw, rotor)
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
    .components('1x rhenium', '3x sulfur', '9x oxygen', '3x fluorine')
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
    .components('2x rhenium', '3x sulfur', '12x oxygen')
    .formula('Re2(SO4)3')
    .color(0x3e6e9b).iconSet(DULL)
    .dust()
    .flags(no_decomp)

    event.create('rhenium_heptoxide')
    .components('2x rhenium', '7x oxygen')
    .color(0xc39557).iconSet(SHINY)
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
    GTMaterials.Rhenium.setMaterialARGB(0xff8901)
    GTMaterials.Tellurium.setMaterialARGB(0xc5c70a)
    GTMaterials.Selenium.setMaterialARGB(0xba2d3a)

    GTMaterials.Tellurium.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Bismuth.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Selenium.setProperty($PropertyKey.ORE, new $OreProperty)
    GTMaterials.Cadmium.setProperty($PropertyKey.ORE, new $OreProperty)

    const naquadriumadjacentpartsheheha = {
    naquadrium : [0x426b42, 0x457a45, 0x3aad3a, 0x1dde1d, 0x274227],
    enriched_naquadrium: [0x235223, 0x297a29, 0x61ad61, 0xb1621a, 0x304230]
    }
Object.entries(naquadriumadjacentpartsheheha).forEach(([type, chezmix]) => {
    event.create(`impure_${type}_solution`).color(chezmix[0]).liquid()
    event.create(`${type}_solution`).color(chezmix[1]).liquid()
    event.create(`acidic_${type}_solution`).color(chezmix[2]).liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    event.create(`${type}_waste`).color(chezmix[4]).liquid()

    event.create(`${type}_boride`).color(chezmix[3]).dust().flags(no_decomp).components(`1x ${type}`, '1x boron')
})
//return to sender: ZPM alloys

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

    compIngot('tri-osmic_matrix', ['4x osmium', 'selenium', 'tungsten'], 0x4849c4, SHINY, [6300, 'high', va.zpm, 1800], [ring, gear, small_gear, plates, rod, long_rod, rotor, round, bolt_and_screw, foil], null)
    compIngot('axiom-re', ['gallium', 'rhenium'], 0xeebe80, SHINY, [4650, 'mid', va.luv, 1400], [plates, long_rod, rod, spring, small_spring, foil], [va.zpm, 6, 3, false])
    compIngot('pentarch-v', ['trinium', 'perfected_taint', 'titanium', 'tantalum', 'tellurium'], 0x9b7e99, METALLIC, [6500, 'high', va.zpm, 1650], [spring, foil, long_rod, plates, bolt_and_screw, gear, rod], [va.zpm, 8, 6, false])
    compIngot('astazine-e', ['3x europium', '2x cobalt', 'titanium', 'lutetium'], 0X4FB5FB, METALLIC, [6500, 'high', va.luv, 300], [long_rod, rod, plates, spring, small_spring, fine_wire, frame], null)

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


StartupEvents.registry('block', event => {
    event.create('gtceu:naquadrium_coil_block', 'gtceu:coil')
        .temperature(8100)
        .level(10)
        .energyDiscount(6)
        .tier(5)
        .coilMaterial(() => GTMaterials.get('naquadrium'))
        .texture('gtceu:block/casings/coils/naquadrium_coil')
        .hardness(40)
        .requiresTool(true)
        .tagBlock('forge:requires_duranium_tool')
        .soundType('metal')
})