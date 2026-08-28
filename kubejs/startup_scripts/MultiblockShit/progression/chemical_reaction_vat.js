GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
event.create('chemical_vat')
.category('technological')
.setMaxIOSize(6, 6, 4, 4)
.setSlotOverlay(false, false, false, GuiTextures.MOLECULAR_OVERLAY_1)
.setSlotOverlay(false, false, true, GuiTextures.MOLECULAR_OVERLAY_2)
.setSlotOverlay(false, true, false, GuiTextures.MOLECULAR_OVERLAY_3)
.setSlotOverlay(false, true, true, GuiTextures.MOLECULAR_OVERLAY_4)
.setSlotOverlay(true, false, GuiTextures.VIAL_OVERLAY_1)
.setSlotOverlay(true, true, GuiTextures.VIAL_OVERLAY_2)
.setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
.setSound(GTSoundEntries.CHEMICAL)

event.create('vacuum_reaction_chamber')
.category('alien')
.setMaxIOSize(4, 2, 4, 2)
.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
.setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    GTRecipeTypes.get("chemical_vat").addDataInfo((data) => (
        `§cMin. Temperature: ${data.getInt("Temp")}K`
    ))

    GTRecipeTypes.get("chemical_vat").addDataInfo((data) => (
        `§8Min. Pressure: ${data.getDouble("HeatPressure")}ΔP`
    ))

    GTRecipeTypes.get("vacuum_reaction_chamber").addDataInfo((data) => (
        `§bMax. Temperature: ${data.getDouble("MaxTemp")}K`
        
    ))

const COOL_COIL_REQUIREMENTS = [
    { name: "§5Transcendent §6Dilithide", maxTemp: 20 },
    { name: "§4Tritanium", maxTemp: 30 },
]

GTRecipeTypes.get("vacuum_reaction_chamber").addDataInfo((data) => {
    let tempMK = data.getInt("MaxTemp")
    let requiredCoil = COOL_COIL_REQUIREMENTS.find(coil => coil.maxTemp >= tempMK)
    let coilText = requiredCoil ? requiredCoil.name : "§cNo valid coil"
    return `§9⚙ Coil: ${coilText}§r`
})



    event.create('chemical_reaction_vat', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder)) 
    .recipeTypes([GTRecipeTypes.get('chemical_vat'), GTRecipeTypes.get('large_chemical_reactor')])
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => TemperatureModifier(machine, recipe), (machine, recipe) => PressureModifier(machine, recipe), (machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)])
    .appearanceBlock(() => Block.getBlock("gtceu:inert_machine_casing"))
    .pattern(definition => FactoryBlockPattern.start()
    .aisle("AABBBBBAA", "AABAAABAA", "ABBAAABBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "AABAAABAA", "AABBBBBAA")
    .aisle("ABBBBBBBA", "ABBBBBBBA", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "AABBBBBAA", "AABBBBBAA")
    .aisle("BBBBBBBBB", "BBBCCCBBB", "BADDDDDAB", "AADEEEDAA", "AADEEEDAA", "AADEEEDAA", "BADDDDDAB", "BBBCCCBBB", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFFFDAA", "AAEAAAEAA", "AAEAAAEAA", "AAEAAAEAA", "AADFFFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFHFDAA", "AAEAHAEAA", "AAEAHAEAA", "AAEAHAEAA", "AADFHFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFFFDAA", "AAEAAAEAA", "AAEAAAEAA", "AAEAAAEAA", "AADFFFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "BBBCCCBBB", "BADDDDDAB", "AADEEEDAA", "AADEEEDAA", "AADEEEDAA", "BADDDDDAB", "BBBCCCBBB", "BBBBBBBBB")
    .aisle("ABBBBBBBA", "ABBBBBBBA", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "AABBBBBAA", "AABBBBBAA")
    .aisle("AABBGBBAA", "AABAAABAA", "ABBAAABBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "AABAAABAA", "AABBBBBAA")
   .where("A", Predicates.any())
   .where("B", Predicates.blocks("gtceu:inert_machine_casing")
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
   .where("C", Predicates.blocks("gtceu:signalum_casing"))
   .where("D", Predicates.blocks("gtceu:nitinol_casing"))
   .where("E", Predicates.blocks("kubejs:enderium_glass"))
   .where("F", Predicates.blocks("gtceu:stable_machine_casing"))
   .where("G", Predicates.controller(Predicates.blocks(definition.get())))
   .where('H', Predicates.heatingCoils())
.build())
.workableCasingModel('gtceu:block/casings/solid/machine_casing_inert_ptfe',
        'gtceu:block/machines/chemical_reactor')

    event.create('chemical_singularity', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder)) 
    .recipeTypes(['vacuum_reaction_chamber', 'chemical_vat', 'large_chemical_reactor'])
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, (machine, recipe) => TemperatureModifier(machine, recipe), (machine, recipe) => PressureModifier(machine, recipe), (machine, recipe) => VacuumModifier(machine, recipe)])
    .appearanceBlock(() => Block.getBlock("gtceu:velyl_rubber_casing"))
    .pattern(definition => FactoryBlockPattern.start()
    .aisle("aaaaaaaabbbbbbbbbaaaaaaaa", "aaaaaaaabbbaaabbbaaaaaaaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaabaaaaaaabaaaaaaaa", "aaaaaaabbaaaaaaabbaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabbaaaaaaabbaaaaaaa", "aaaaaaaabaaaaaaabaaaaaaaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaabbbaaabbbaaaaaaaa", "aaaaaaaabbbbbbbbbaaaaaaaa")
    .aisle("aaaaaabbbbbbbbbbbbbaaaaaa", "aaaaaabddbbbbbbbddbaaaaaa", "aaaaaabddbbaaabbddbaaaaaa", "aaaaaabddbaaaaabddbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaabbbbbaaaaabbbbbaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaabbbbbaaaaabbbbbaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabddbaaaaabddbaaaaaa", "aaaaaabddbbaaabbddbaaaaaa", "aaaaaabddbbbbbbbddbaaaaaa", "aaaaaabbbbbbbbbbbbbaaaaaa")
    .aisle("aaabbbbbbbbbbbbbbbbbbbaaa", "aaabaddbbbbbbbbbbbddabaaa", "aaabaddaabbdddbbaaddabaaa", "aaabaddaabdddddbaaddabaaa", "aaabbddaabdddddbaaddbbaaa", "aaaabddaabdddddbaaddbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaabbbbaabdddddbaabbbbaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaabbbbaabdddddbaabbbbaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabddaabdddddbaaddbaaaa", "aaabbddaabdddddbaaddbbaaa", "aaabaddaabdddddbaaddabaaa", "aaabaddaabbdddbbaaddabaaa", "aaabaddbbbbbbbbbbbddabaaa", "aaabbbbbbbbbbbbbbbbbbbaaa")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aabbbbbbaaaaaaaaabbbbbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aabddaaaaaaaaaaaaaaaddbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabddaaaaaaaaaaaaaaaddbaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbbbbaaaaaaaaabbbbbbaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aaabbbaaaeffeffeaaabbbaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aabbaaaaaeffeffeaaaaabbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabbaaaaaeffeffeaaaaabbaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabbbaaaeffeffeaaabbbaaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aadbbaafffggfggfffaabbdaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "aabaaaafffggfggfffaaaabaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadbbaafffggfggfffaabbdaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("abbbbbbbbbbbbbbbbbbbbbbba", "abdbaaefggggfggggfeaabdba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abbaaaefggggfggggfeaaabba", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "abbaaaefggggfggggfeaaabba", "abbaaaefggggfggggfeaaabba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdbaaefggggfggggfeaabdba", "abbbbbbbbbbbbbbbbbbbbbbba")
    .aisle("abbbbbbbbbbbbbbbbbbbbbbba", "adbbaffggfffefffggffabbda", "adaaaffggfffefffggffaaada", "adaaaffggfffefffggffaaada", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "adaaaffggfffefffggffaaada", "adaaaffggfffefffggffaaada", "adbbaffggfffefffggffabbda", "abbbbbbbbbbbbbbbbbbbbbbba")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bdbaafggffhhbhhffggfaabdb", "bdaaafggffhhbhhffggfaaadb", "bdaaafggffhhbhhffggfaaadb", "bbaaafggffhhbhhffggfaaabb", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "bbaaafggffhhbhhffggfaaabb", "bdaaafggffhhbhhffggfaaadb", "bdaaafggffhhbhhffggfaaadb", "bdbaafggffhhbhhffggfaabdb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bbbaefgffhhaaahhffgfeabbb", "bbbaefgffhhaaahhffgfeabbb", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "bbbaefgffhhaaahhffgfeabbb", "bbbaefgffhhaaahhffgfeabbb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bbbafggfhhaaaaahhfggfabbb", "abbafggfhhaaaaahhfggfabba", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "abbafggfhhaaaaahhfggfabba", "bbbafggfhhaaaaahhfggfabbb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "abbafggfhaaaaaaahfggfabba", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "abbafggfhaaaaaaahfggfabba", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "abbaeffebaaaaaaabeffeabba", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "aadaeffebaaaaaaabeffeadaa", "abbaeffebaaaaaaabeffeabba", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "abbafggfhaaaaaaahfggfabba", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "aadafggfhaaaaaaahfggfadaa", "abbafggfhaaaaaaahfggfabba", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bbbafggfhhaaaaahhfggfabbb", "abbafggfhhaaaaahhfggfabba", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "aadafggfhhaaaaahhfggfadaa", "abbafggfhhaaaaahhfggfabba", "bbbafggfhhaaaaahhfggfabbb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bbbaefgffhhaaahhffgfeabbb", "bbbaefgffhhaaahhffgfeabbb", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "abbaefgffhhaaahhffgfeabba", "bbbaefgffhhaaahhffgfeabbb", "bbbaefgffhhaaahhffgfeabbb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("bbbbbbbbbbbbbbbbbbbbbbbbb", "bdbaafggffhhbhhffggfaabdb", "bdaaafggffhhbhhffggfaaadb", "bdaaafggffhhbhhffggfaaadb", "bbaaafggffhhbhhffggfaaabb", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "abaaafggffhhbhhffggfaaaba", "bbaaafggffhhbhhffggfaaabb", "bdaaafggffhhbhhffggfaaadb", "bdaaafggffhhbhhffggfaaadb", "bdbaafggffhhbhhffggfaabdb", "bbbbbbbbbbbbbbbbbbbbbbbbb")
    .aisle("abbbbbbbbbbbbbbbbbbbbbbba", "adbbaffggfffefffggffabbda", "adaaaffggfffefffggffaaada", "adaaaffggfffefffggffaaada", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "bbaaaffggfffefffggffaaabb", "adaaaffggfffefffggffaaada", "adaaaffggfffefffggffaaada", "adbbaffggfffefffggffabbda", "abbbbbbbbbbbbbbbbbbbbbbba")
    .aisle("abbbbbbbbbbbbbbbbbbbbbbba", "abdbaaefggggfggggfeaabdba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abbaaaefggggfggggfeaaabba", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "aabaaaefggggfggggfeaaabaa", "abbaaaefggggfggggfeaaabba", "abbaaaefggggfggggfeaaabba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdaaaefggggfggggfeaaadba", "abdbaaefggggfggggfeaabdba", "abbbbbbbbbbbbbbbbbbbbbbba")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aadbbaafffggfggfffaabbdaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbbaaafffggfggfffaaabbba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "abbaaaafffggfggfffaaaabba", "aabaaaafffggfggfffaaaabaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadaaaafffggfggfffaaaadaa", "aadbbaafffggfggfffaabbdaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aaabbbaaaeffeffeaaabbbaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aabbaaaaaeffeffeaaaaabbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabdaaaaaeffeffeaaaaadbaa", "aabbaaaaaeffeffeaaaaabbaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabaaaaaeffeffeaaaaabaaa", "aaabbbaaaeffeffeaaabbbaaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("aabbbbbbbbbbbbbbbbbbbbbaa", "aabbbbbbaaaaaaaaabbbbbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aabddaaaaaaaaaaaaaaaddbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabdbbaaaaaaaaaaaaabbdbaa", "aabddaaaaaaaaaaaaaaaddbaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aaaddaaaaaaaaaaaaaaaddaaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbaaaaaaaaaaaaaaabbbaa", "aabbbbbbaaaaaaaaabbbbbbaa", "aabbbbbbbbbbbbbbbbbbbbbaa")
    .aisle("aaabbbbbbbbbbbbbbbbbbbaaa", "aaabaddbbbbbbbbbbbddabaaa", "aaabaddaabbdddbbaaddabaaa", "aaabaddaabdddddbaaddabaaa", "aaabbddaabdddddbaaddbbaaa", "aaaabddaabdddddbaaddbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaabbbbaabdddddbaabbbbaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaababbaabdddddbaabbabaaa", "aaabbbbaabdddddbaabbbbaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabbbaabdddddbaabbbaaaa", "aaaabddaabdddddbaaddbaaaa", "aaabbddaabdddddbaaddbbaaa", "aaabaddaabdddddbaaddabaaa", "aaabaddaabbdddbbaaddabaaa", "aaabaddbbbbbbbbbbbddabaaa", "aaabbbbbbbbbbbbbbbbbbbaaa")
    .aisle("aaaaaabbbbbbbbbbbbbaaaaaa", "aaaaaabddbbbbbbbddbaaaaaa", "aaaaaabddbbaaabbddbaaaaaa", "aaaaaabddbaaaaabddbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaabbbbbaaaaabbbbbaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaababbbaaaaabbbabaaaaa", "aaaaabbbbbaaaaabbbbbaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabbbbaaaaabbbbaaaaaa", "aaaaaabddbaaaaabddbaaaaaa", "aaaaaabddbbaaabbddbaaaaaa", "aaaaaabddbbbbbbbddbaaaaaa", "aaaaaabbbbbbbbbbbbbaaaaaa")
    .aisle("aaaaaaaabbbbcbbbbaaaaaaaa", "aaaaaaaabbbaaabbbaaaaaaaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaabaaaaaaabaaaaaaaa", "aaaaaaabbaaaaaaabbaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabaaaaaaaaabaaaaaaa", "aaaaaaabbaaaaaaabbaaaaaaa", "aaaaaaaabaaaaaaabaaaaaaaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaabbbaaabbbaaaaaaaa", "aaaaaaaabbbbbbbbbaaaaaaaa")
    .where("a", Predicates.any())
    .where("b", Predicates.blocks("gtceu:velyl_rubber_casing")
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
    .where("c", Predicates.controller(Predicates.blocks(definition.get())))
    .where("d", Predicates.blocks("kubejs:aetherite_glass"))
    .where("e", Predicates.heatingCoils())
    .where("f", Predicates.blocks("gtceu:peek_pipe_casing"))
    .where("g", Predicates.blocks("gtceu:cryonull_casing"))
    .where("h", Predicates.blocks("gtceu:mythrolyc_umbraloy_casing"))
    .build())
    .workableCasingModel('gtceu:block/casings/solid/velyl_rubber_casing',
        'gtceu:block/machines/chemical_reactor')
})