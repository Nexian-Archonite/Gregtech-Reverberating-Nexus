// priority: -1000
GTCEuStartupEvents.craftingComponents(event => {

        event.setMaterialEntries("plate", {
        ULV: "plate:igneous_bronze",
        LV: "plate:nexus_steel",
        MV: "plate:echolumium",
        HV: "plate:mechanical_stainless",
        EV: "plate:tainted_titanium",
        IV: "plate:auralloy-omega",
        LuV: "plate:rhodipalladic-desnite",

        UEV: "plate:omnium",
        UIV: "plate:nullium",
        UXV: "plate:infinity",
    })

    event.setItems("power_component", {
        UEV: "kubejs:uxpic_chip",
        UIV: "kubejs:uxpic_chip",
        UXV: "kubejs:uxpic_chip"
    })

    event.setMaterialEntries("rod", {
        ULV: "rod:igneous_bronze",
        LV: "rod:nexus_steel",
        MV: "rod:echolumium",
        HV: "rod:mechanical_stainless",
        EV: "rod:tainted_titanium",
        IV: "rod:auralloy-omega",
        LuV: "rod:rhodipalladic-desnite",

        UEV: "rod:omnium",
        UIV: "rod:nullium",
        UXV: "rod:infinity",
    })

    event.setMaterialEntries("hull_plate", {
        UHV: "plate:polyethyl_cyanoacrylate",
        UEV: "plate:polyethyl_cyanoacrylate",
        UIV: "plate:polyethyl_cyanoacrylate",
        UXV: "plate:polyethyl_cyanoacrylate"
    })

    event.setMaterialEntries("frame", {
        UEV: "frame:omnium",
        UIV: "frame:nullium",
        UXV: "frame:infinity",
    })

     event.setMaterialEntries("rod_electromagnetic", {
        LV: "rod:magnetic_nexus_steel",
        MV: "rod:magnetic_nexus_steel",
        HV: 'rod:neodymium',
        EV: 'rod:neodymium',
        IV: "rod:cryosporsite",
        LuV: "rod:cryosporsite",
        ZPM: "rod:cryosporsite",
        UV: "rod:cryosporsite",
        UHV: "rod:cryosporsite",
        UEV: "rod:cryosporsite",
        UIV: "rod:cryosporsite",
        UXV: "rod:infinity"
    })

        event.setItems("better_circuit", {
        UEV: "kubejs:extradimensional_processor_mainframe"
    })



    // Change tier's main wire/cable
    let setWire = (component, prefix) =>
        event.setMaterialEntries(component, {
            LV: prefix + ":source_attuned_copper",
            IV: prefix + "vintanium",




            UEV: prefix + ":omnium",
            UIV: prefix + ":nullium",
            UXV: prefix + ":infinity"
            // Add replacement wires per tier here
        })
    setWire("wire_single", "wireGtSingle")
    setWire("wire_double", "wireGtDouble")
    setWire("wire_quad", "wireGtQuadruple")
    setWire("wire_oct", "wireGtOctal")
    setWire("wire_hex", "wireGtHex")


    let setWireCable = (component, prefix0, prefix1) =>
        event.setMaterialEntries(component, {
            UEV: prefix0 + ":omnium",
            UIV: prefix0 + ":nullium",
            UXV: prefix1 + ":infinity",
        })

    setWireCable("cable_single", "cableGtSingle", "wireGtSingle")
    setWireCable("cable_double", "cableGtDouble", "wireGtDouble")
    setWireCable("cable_quad", "cableGtQuadruple", "wireGtQuadruple")
    setWireCable("cable_oct", "cableGtOctal", "wireGtOctal")
    setWireCable("cable_hex", "cableGtHex", "wireGtOctal")


let wireCableComponents = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, GTCraftingComponents.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, GTCraftingComponents.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, GTCraftingComponents.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.CABLE_OCT],
        [TagPrefix.cableGtHex, TagPrefix.wireGtHex, GTCraftingComponents.CABLE_HEX]
    ]

    wireCableComponents.forEach(prefixComponentPair => {
        let wireMap = {}
        wireMap[GTValues.UEV] = prefixComponentPair[0] + ":omnium"
        wireMap[GTValues.UIV] = prefixComponentPair[0] + ":nullium"
        wireMap[GTValues.UXV] = prefixComponentPair[1] + ":infinity"
        event.setMaterialEntries(prefixComponentPair[2], wireMap)
    })

let pipeComponentPrefixes = [
        [TagPrefix.pipeNormalFluid, GTCraftingComponents.PIPE_NORMAL],
        [TagPrefix.pipeLargeFluid, GTCraftingComponents.PIPE_LARGE],
        [TagPrefix.pipeNonupleFluid, GTCraftingComponents.PIPE_NONUPLE]
    ]

    // change when other pipez are added
    let setPipe = (component, prefix) =>
        event.setMaterialEntries(component, {
            UHV: prefix + ":neutronium",
            UEV: prefix + ":neutronium",
            UIV: prefix + ":neutronium",
            UXV: prefix + ":neutronium"
        })

    setPipe("normal_pipe", "pipeNormalFluid")
    setPipe("large_pipe", "pipeLargeFluid")
    setPipe("nonuple_pipe", "pipeNonupleFluid")

    event.setItems("glass", {
        UHV: "gtceu:fusion_glass",
        UEV: "gtceu:fusion_glass",
        UIV: "gtceu:fusion_glass",
        UXV: "gtceu:fusion_glass"
    })

    event.setMaterialEntries("plate", {
        UEV: "plate:omnium",
        UIV: "plate:nullium",
        UXV: "plate:infinity",
    })

    event.setMaterialEntries("hull_plate", {
        UHV: "plate:polybenzimidazole",
        UEV: "plate:polyethyl_cyanoacrylate",
        MAX: "plate:polyethyl_cyanoacrylate"
    })

    // change later too
    event.setMaterialEntries("rotor", {
        UHV: "rotor:mechanical_stainless",
        UEV: "rotor:tainted_titanium",
        UIV: "rotor:neutronium",
        UXV: "rotor:infinity"
    })

    event.setMaterialEntries("rod_magnetic", {
        IV: "longRod:magnetic_samarium",
        LuV: "longRod:magnetic_samarium",
        ZPM: "longRod:magnetic_samarium",
        UV: "longRod:magnetic_samarium",
        UHV: "longRod:magnetic_samarium",
        UEV: "longRod:magnetic_samarium",
        UIV: "longRod:magnetic_samarium",
        UXV: "longRod:magnetic_samarium"
    })

    event.setItems("power_component", {
        UEV: "gtceu:uhpic_chip",
        UIV: "gtceu:uhpic_chip",
        UXV: "gtceu:uhpic_chip",
    })

    event.setMaterialEntries("frame", {
        UHV: "frame:neutronium",
        UEV: "frame:omnium",
        UIV: "frame:nullium",
        UXV: "frame:infinity"
    })
})
