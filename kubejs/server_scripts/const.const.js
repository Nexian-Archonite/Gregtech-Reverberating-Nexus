// priority: 9999

// priority: one bajillion
// Useful functions
const V = (voltage) => {
    return global.v[voltage]
}

const VA = (voltage) => {
    return global.va[voltage]
}

const VH = (voltage) => {
    return global.vh[voltage]
}

const VHA = (voltage) => {
    return global.vha[voltage]
}


const v = global.v
const va = global.va
const vh = global.vh
const vha = global.vha

const voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
        "uxv": "infinity"
    }

const allthevoltage1 = [
    'ulv', //8 EU/t
    'lv',  //32 EU/t
    'mv',  //128 EU/t
    'hv',  //512 EU/t
    'ev',  //2048 EU/t
    'iv',  //8192 EU/t
    'luv', //32768 EU/t
    'zpm', //131072 EU/t
    'uv',  //524288 EU/t
    'uhv', //2097152 EU/t
    'uev', //8388608 EU/t
    'uiv', //33554432 EU/t
    'uxv', //134217728 EU/t
    'opv', //536870912 EU/t
    'max'  //2147483648 EU/t
]

const allthevoltage2 = {
    'ulv': "bronze", //8 EU/t
    'lv': "nexus_steel", //32 EU/t
    'mv': "echolumium",  //128 EU/t
    'hv': "mechanical_stainless", //512 EU/t
    'ev': "tainted_titanium", //2048 EU/t
    'iv': "auralloy-omega", //8192 EU/t
    'luv': "rhodipalladic-desnite",//32768 EU/t
    'zpm': "transuranic_naquadrium_alloy", //131072 EU/t
    'uv':  "ephemeral_naquadite", //524288 EU/t
    'uhv': "stellarite", //2097152 EU/t
    'uev': "polydimensional_omnium_nexite", //8388608 EU/t
    'uiv': "omniated_n-p_higgs-nulliate", //33554432 EU/t
    'uxv': "absolute_infinity", //134217728 EU/t
    'opv': "nexian_infinity", //536870912 EU/t
    'max': "reverberating_nexus" //2147483648 EU/t
}
const tiers = [
        "steel",
        "aluminium",
        "magnetic_neodymium",
        "magnetic_samarium",
        "stainless_steel",
        "titanium",
        "tungsten_steel",
        "rhodium_plated_palladium",
        "hsss",
        "niobium_titanium",
        "osmiridium",
        "vanadium_gallium",
        "naquadah",
        "trinium",
        "naquadah_alloy"
    ]
    const parts = [
        "gear",
        "rod",
        "plate",
        "bolt",
        "long_rod",
        "ring",
        "magnetic_rod",
        "round",
        "small_gear",
        "spring",
        "phosphorescent",
        "screw",
        "frame",
        "dense",
        "fine_wire",
        "foil",
        "rotor",
        "small_fluid_pipe",
        "normal_fluid_pipe",
        "large_fluid_pipe",
        "buzz_saw_blade",
        "single_wire",
        "double_wire",
        "quadruple_wire",
        "octal_wire",
        "hex_wire",
        "single_cable",
        "double_cable",
        "quadruple_cable",
        "octal_cable",
        "hex_cable"

    ]
    // Map of tier replacements
     global.tierReplacements = {
        steel: "nexus_steel",
        magnetic_steel: "magnetic_nexus_steel",
        aluminium: "echolumium",
        magnetic_neodymium: "cryosporsite",
        magnetic_samarium: "cryosporsite",
        stainless_steel: "mechanical_stainless",
        titanium: "tainted_titanium",
        tungsten_steel: "auralloy-omega",
        rhodium_plated_palladium: "rhodipalladic-desnite",
        hsss: "hssd",
        americium: "cericite",
        tritanium: "triconite",
        osmium: "osmium_steel",
        niobium_titanium: "vintanium",
        trinium: "pentarch-t",
        osmiridium: "tri-osmic_matrix",
        vanadium_gallium: "axiom-re",
        naquadah: "naquadrium",
        naquadah_alloy: "transuranic_naquadrium_alloy",
        europium: "astrazine-e",
        neutronium: "stellarite",
        darmstadtium: "ephemeral_naquadite",
        enriched_naquadah_trinium_europium_duranide: "sulvarium-over-kraethite_steel",
        ruthenium_trinium_americium_neutronate: "chronocrytic-vhaelsalite"
        
        // Add more replacements as needed
    }
    const recipePatterns = [
    /^gtceu:(shaped|assembler|)\/.*_gearbox(_casing)?/,
    /^gtceu:shaped\/casing_.*_(firebox|pipe)/,
    /^gtceu:assembler\/casing_.*_firebox/,
    /^gtceu:shaped\/casing_.*/, /gtceu:shaped\/(extreme|large)_(steam|gas|plasma|combustion)_(turbine|engine)/,
    /^gtceu:shaped\/(diesel|steam|gas)_(generator|turbine)_(lv|mv|hv|ev|iv)/,
    /^gtceu:shaped\/rotor_holder_.*/, /gtceu:(shaped|assembler|assembly_line)\/(lv|mv|hv|ev|iv|luv|zpm|uv|uhv|uev|uiv|uxv|opv|max)_.*(_.*)?(_.*)?(_.*)?/
]

    const basevoltage = [
    'ulv',
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv'
]

const casingalloys = ['birmabright','duralumin','beryllium_aluminium_alloy','hydronalium','elgiloy','beryllium_bronze','silicon_bronze','silicone_rubber','kovar','zamak','tumbaga','transplatine']
const casingalloysgregtechonlylimitededition = ['wizarding_steel', 'enderium', 'lumium', 'signalum', 'source', 'nitinol', 'resonite', 'nexus_steel', 'igneous_bronze', 'auralloy-omega_over_transcendentine']

const thecarbonboys = ['gtceu:carbon_dust', 'gtceu:charcoal_dust', 'gtceu:coal_dust', 'gtceu:coke_dust']

const thermalityalloys = ['enderium', 'lumium', 'signalum']
const ferricminerals = ['iron', 'granitic_mineral_sand', 'magnetite', 'basaltic_mineral_sand', 'pyrite', 'yellow_limonite', 'hematite', 'goethite']

const mods = ['create', 'botania', 'ars_nouveau', 'ad_astra', 'ae2', 'advanced_ae', 'expatternprovider', 'vs_clockwork', 'overgeared', 'draconicevolution']
const materials = [
  'manasteel', 'steel', 'copper', 'gold', 'iron', 'source', 
  'desh', 'ostrum', 'calorite', 'uranium', 'zinc', 'brass', 
  'andesite_alloy', 'obsidian', 'fluix', 'certus_quartz', 
  'charged_certus_quartz', 'awakened_draconium'
]
const types = [
  'ingot', 'plate', 'gem', 'dust', 'rod', 'nugget', 
  'block', 'powder', 'sheet', 'crystal', 'crushed'
]

// thank you Star Technology for the inspiration

const researchTypes = ['organism_assembly_line', 'component_part_assembly', 'assembly_line']

global.ComponentResearch = (event, recipeId, researchItem, cwuT, totalCWU, euT, recipeType) => {
    const dataItem = (cwuT >= 64) ? 'gtceu:data_module' : 'gtceu:data_orb'
    const researchId = `1x_${researchItem.replace(':', '_')}`

    event.recipes.gtceu.research_station(`component_research_${researchId}`)
        .itemInputs(dataItem)
        .itemInputs(researchItem)
        .itemOutputs(
            Item.of(
                dataItem,
                `{assembly_line_research:{research_id:"${researchId}",research_type:"${recipeType}"}}`
            )
        )
        .CWUt(cwuT)
        .totalCWU(totalCWU)
        .EUt(euT)

    return b => b
        .researchStack(Item.of(researchItem))
        .CWUt(cwuT)
        .EUt(euT)
}

researchTypes.forEach(type => {
    const constName = type.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join('') + 'Research'
    
    global[constName] = (event, recipeId, researchItem, cwuT, totalCWU, euT) => {
        return global.ComponentResearch(event, recipeId, researchItem, cwuT, totalCWU, euT, `gtceu:${type}`)
    }
})


ServerEvents.recipes(event => {
const GTM = event.recipes.gtceu

const dualCasing = (primary, secondary, output) => {
    event.shaped(Item.of(`2x gtceu:${output}`), [
        'PHP',
        'PFP',
        'PWP'
    ], {
        P: `gtceu:${primary}_plate`,
        F: `gtceu:${secondary}_frame`,
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    })

    GTM.assembler(`${output}`)
        .itemInputs(`6x gtceu:${primary}_plate`, `gtceu:${secondary}_frame`)
        .itemOutputs(`2x gtceu:${output}`)
        .duration(50)
        .circuit(6)
        .EUt(16)

    const maceratorRecipe = GTM.macerator(`${output}_recycling`)
        .itemInputs(`gtceu:${output}`)
        .duration(50)
        .EUt(16)

    if (primary === secondary) {
        maceratorRecipe.itemOutputs(`4x gtceu:${primary}_dust`)
    } else {
        maceratorRecipe.itemOutputs(`3x gtceu:${primary}_dust`, `gtceu:${secondary}_dust`)
    }
}

const dualCasingAdv = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}`)
        .itemInputs(`64x gtceu:${primary}_plate`, `8x gtceu:${secondary}_frame`, `32x gtceu:${secondary}_bolt`, `32x gtceu:${primary}_foil`)
        .itemOutputs(`2x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 1152`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 576')
        .duration(50)
        .EUt(32768)
        const maceratorRecipe = GTM.macerator(`${output}_recycling`)
        .itemInputs(`gtceu:${output}`)
        .duration(50)
        .EUt(16)

    if (primary === secondary) {
        maceratorRecipe.itemOutputs(`5x gtceu:${primary}_dust`, `3x gtceu:small_${primary}_dust`)
    } else {
        maceratorRecipe.itemOutputs(`4x gtceu:${primary}_dust`, `2x gtceu:small_${primary}_dust`, `gtceu:${secondary}_dust`, `gtceu:small_${secondary}_dust`)
    }
}

const gearCasing = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}_gearbox`)
        .itemInputs(`64x gtceu:${primary}_plate`, `8x gtceu:${secondary}_frame`, `32x gtceu:${secondary}_bolt`, `32x gtceu:${primary}_gear`)
        .itemOutputs(`16x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 1152`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 576')
        .duration(50)
        .EUt(32768)
        .circuit(2)
        const maceratorRecipe = GTM.macerator(`${output}_recycling`)
        .itemInputs(`gtceu:${output}`)
        .duration(50)
        .EUt(16)

    if (primary === secondary) {
        maceratorRecipe.itemOutputs(`13x gtceu:${primary}_dust`, `gtceu:small_${primary}_dust`)
    } else {
        maceratorRecipe.itemOutputs(`12x gtceu:${primary}_dust`, `gtceu:${secondary}_dust`, `gtceu:small_${secondary}_dust`)
    }
}

const fireCasing = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}_firebox`)
        .itemInputs(`64x gtceu:${primary}_plate`, `8x gtceu:${secondary}_frame`, `32x gtceu:${secondary}_bolt`, `32x gtceu:${primary}_rod`)
        .itemOutputs(`16x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 1152`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 576')
        .duration(50)
        .EUt(32768)
        .circuit(4)
        const maceratorRecipe = GTM.macerator(`${output}_recycling`)
        .itemInputs(`gtceu:${output}`)
        .duration(50)
        .EUt(16)

    if (primary === secondary) {
        maceratorRecipe.itemOutputs(`9x gtceu:${primary}_dust`, `gtceu:small_${primary}_dust`)
    } else {
        maceratorRecipe.itemOutputs(`8x gtceu:${primary}_dust`, `gtceu:${secondary}_dust`, `gtceu:small_${secondary}_dust`)
    }
}

dualCasing('condensed_mana', 'source', 'magikstone_casing')
dualCasing('vhaelcryite', 'pyrathene', 'vhaelcryite_casing')
dualCasing('polyether_ether_ketone', 'polyether_ether_ketone', 'peek_casing')

dualCasingAdv('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_casing')
gearCasing('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_gearbox')
fireCasing('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_firebox')

dualCasingAdv('aetheric-thermavyte', 'vorrexite', 'aetherite_casing')

GTM.component_part_assembly('peek_pipe_casing')
.itemInputs('64x gtceu:polyether_ether_ketone_plate', '32x gtceu:polyether_ether_ketone_normal_fluid_pipe', '8x gtceu:polyether_ether_ketone_frame')
.itemOutputs('16x gtceu:peek_pipe_casing')
.duration(50)
.EUt(16)

GTM.component_part_assembly('sulvan_steel_pipe_casing')
.itemInputs('64x gtceu:sulvarium-over-kraethite_steel_plate', '32x gtceu:polyether_ether_ketone_normal_fluid_pipe', '8x gtceu:sulvarium-over-kraethite_steel_frame')
.itemOutputs('16x gtceu:sulvan_steel_pipe_casing')
.duration(50)
.EUt(16)

GTM.bender('bend_vorrexite_to_foil')
.itemInputs('gtceu:vorrexite_plate')
.itemOutputs('4x gtceu:vorrexite_foil')
.circuit(1)
.duration(89)

event.shaped('2x gtceu:vorrexite_foil', [
'HP'
], {
H: '#forge:tools/hammers',
P: 'gtceu:vorrexite_plate'
})

const transcendentBlastTier = [
    { name: 'omnium', blastTemp: 19449, EUt: va.uhv, duration: 1600 },
    { name: 'sulvarium-over-kraethite_steel', blastTemp: 11000, EUt: va.uv, duration: 750 },
    { name: 'aetheric-thermavyte', blastTemp: 10799, EUt: va.uhv, duration: 800 },
    { name: 'indium-vor-dys-cad_supersolder_alloy', blastTemp: 11000, EUt: va.uhv, duration: 750},
    { name: 'transcendent_dilithide', blastTemp: 16800, EUt: va.uhv, duration: 950},
    { name: 'ignatherm', blastTemp: 12360, EUt: va.luv, duration: 941 },
    { name: 'vhoric_steel', blastTemp: 12940, EUt: va.luv, duration: 1076 },
    { name: 'pyrghul_alloy', blastTemp: 11820, EUt: va.luv, duration: 846 },
    { name: 'vaexium', blastTemp: 13380, EUt: va.zpm, duration: 1012 },
    { name: 'korzene', blastTemp: 13590, EUt: va.zpm, duration: 1093 },
    { name: 'abyssal_netherite', blastTemp: 16000, EUt: va.uv, duration: 1100 },
    { name: 'nexian_pyrite', blastTemp: 16800, EUt: va.uv, duration: 900 },
    { name: 'activated_nexian_pyrite', blastTemp: 16800, EUt: va.uhv, duration: 1050 },
    { name: 'awakened_draconium', blastTemp: 13200, EUt: va.uhv, duration: 1000 }
]

const transcendentAlloyBlastTier = [
    {
        name: 'indium-vor-dys-cad_supersolder_alloy',
        blastTemp: 8000,
        EUt: va.uhv,
        duration: 62700,
        components: ['47x indium', '6x vorrexite', '3x dysprosium', '8x cadmium', '3x tin', '7x darmstadtium', '2x zirconium']
    },
    {
        name: 'sulvarium-over-kraethite_steel',
        blastTemp: 11000,
        EUt: va.uv,
        duration: 12937,
        components: ['6x sulvarium', '6x kraethite', '3x antisource', '4x holmium', '2x nexus', '2x awakened_draconium']
    },
    {
        name: 'aetheric-thermavyte',
        blastTemp: 10799,
        EUt: va.uhv,
        duration: 3000,
        components: ['2x aetherite','2x thermavyte','1x neutronium']
    },
    {
        name: 'ignatherm',
        blastTemp: 12360,
        EUt: va.luv,
        duration: 13409,
        components: ['8x ignavyte', '5x flagrax', '3x zirconium', '2x hafnium', '1x carbon']
    },
    {
        name: 'vhoric_steel',
        blastTemp: 12940,
        EUt: va.luv,
        duration: 12912,
        components: ['7x vhorryte', '4x ashrax', '2x niobium', '2x tantalum', '1x manganese']
    },
    {
        name: 'pyrghul_alloy',
        blastTemp: 11820,
        EUt: va.luv,
        duration: 10786,
        components: ['6x ghulveyte', '5x pyrrhovyte', '3x copper', '2x electrotine', '1x platinum']
    },
    {
        name: 'vaexium',
        blastTemp: 13380,
        EUt: va.zpm,
        duration: 17457,
        components: ['8x vaex-thryn', '7x nexus', '5x orvaelithe', '2x palladium', '1x molybdenum']
    },
    {
        name: 'korzene',
        blastTemp: 13590,
        EUt: va.zpm,
        duration: 14750,
        components: ['7x khzaevhul', '5x ng-vaethos', '3x naquadah_alloy', '2x tungsten', '1x ruthenium']
    },
    {
        name: 'abyssal_netherite',
        blastTemp: 16000,
        EUt: va.uv,
        duration: 22275,
        components: ['13x auralloy-omega', '4x ignatherm', '4x vhoric_steel', '4x pyrghul_alloy', '2x stellarite']
    },
    {
        name: 'nexian_pyrite',
        blastTemp: 16800,
        EUt: va.uv,
        duration: 44550,
        components: ['37x nexus_steel', '12x abyssal_netherite', '8x korzene', '4x sulvarium-over-kraethite_steel', '3x promethium', '2x vaexium']
    }
]

function ogConsumption(blastTemp) {
    const base = 50 + (blastTemp - 10000) * 0.02
    let mod
    if (blastTemp > 12000) {
        mod = 1 + Math.log10((blastTemp - 12000) / 1000 + 1)
    } else {
        mod = 1 - Math.log10((12000 - blastTemp) / 1000 + 1) * 0.5
    }
    return Math.max(25, Math.floor(base * mod))
}

const blastDurationMap = {}
transcendentBlastTier.forEach(mat => {
    blastDurationMap[mat.name] = mat.duration
})

transcendentBlastTier.forEach(mat => {
    GTM.electric_blast_furnace(`blast_${mat.name}_og-xef3`)
        .itemInputs(`gtceu:${mat.name}_dust`)
        .inputFluids(`gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:hot_${mat.name}_ingot`)
        .outputFluids(`gtceu:quasifluxed_oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .blastFurnaceTemp(mat.blastTemp)
        .duration(Math.floor((0.57 - 0.03 * Math.log(mat.blastTemp / 10000)) * mat.duration))
        .EUt(mat.EUt)
    if (mat.name !== 'aetheric-thermavyte') {
        event.remove({id: `gtceu:vacuum_freezer/cool_hot_${mat.name}_ingot`})

        GTM.vacuum_freezer(`hypercool_${mat.name}`)
        .itemInputs(`gtceu:hot_${mat.name}_ingot`)
        .inputFluids(`gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:${mat.name}_ingot`)
        .outputFluids(`gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .duration(Math.floor((0.60 - 0.04887 * Math.log(mat.blastTemp / 10000)) * mat.duration))
        .EUt(mat.EUt * 0.8)
    }
    

    

})

transcendentAlloyBlastTier.forEach(mat => {
    const baseDuration = blastDurationMap[mat.name] ?? mat.duration * 0.1
    const totalMb = mat.components.reduce((sum, c) => {
        const amount = parseInt(c.split('x')[0].trim())
        return sum + (amount * 144)
    }, 0)

    GTM.alloy_blast_smelter(`${mat.name}_og`)
        .itemInputs(
        mat.components.map(component => {
            let [amount, name] = component.split('x ')
            return `${amount}x gtceu:${name}_dust`
        })
    )
        .inputFluids(`gtceu:oganesson-xenon_trifluoride ${25*Math.log10(totalMb)}`)
        .outputFluids(`gtceu:molten_${mat.name} ${totalMb}`)
        .blastFurnaceTemp(mat.blastTemp)
        .duration((0.57 - 0.03 * Math.log(totalMb /100)) * mat.duration)
        .EUt(mat.EUt)

        if (mat.name !== 'aetheric-thermavyte') {
        event.remove({id: `gtceu:vacuum_freezer/${mat.name}`})

        GTM.quantum_condensate_exchanger(`hypercool_molten_${mat.name}`)
        .inputFluids(`gtceu:${mat.name}_plasma 144`, `gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma ${ogConsumption(mat.blastTemp)}`)
        .outputFluids(`gtceu:molten_${mat.name} 144`,`gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .duration(Math.floor((0.60 - 0.04887 * Math.log(mat.blastTemp / 10000)) * baseDuration))
        .EUt(mat.EUt * 0.8)

        GTM.vacuum_freezer(`hypercool_molten_${mat.name}`)
        .inputFluids(`gtceu:molten_${mat.name} 144`, `gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:${mat.name}_ingot`)
        .outputFluids(`gtceu:quasifluxed_oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .duration(Math.floor((0.60 - 0.04887 * Math.log(mat.blastTemp / 10000)) * baseDuration))
        .EUt(mat.EUt * 0.8)
        }
})


global.FLAME = (plasma, inputs, output, duration, EUt, MegaKevin, catalyst) => {
    if (catalyst === undefined) catalyst = null
    
    // Map of plasma base temperatures in MK
    const baseTemps = {
        'americium': 100,
        'infernality_catalysm': 300,
        // Add other plasmas here as needed, fallback defaults to 300 (or MegaKelvin)
    }

    let baseTemp = baseTemps[plasma] 
    
    let id = `${plasma}_${output.replace('_plasma', '')}`
    let totalAmount = inputs.reduce((sum, fluid) => {
        let amount = parseInt(fluid.split(' ')[1])
        return sum + amount * 144
    }, 0)
    
    let prefixedInputs = inputs.map(fluid => {
        let [name, amount] = fluid.split(' ')
        return `gtceu:${name} ${parseInt(amount) * 144}`
    })

    let tempDifference = Math.max(0, baseTemp - MegaKevin)
    let steps = Math.floor(tempDifference / 100)
    let adjustedDuration = Math.round(duration * Math.pow(0.95, steps))

    let recipe = GTM.fractal_metal_alloyment(id)
        .inputFluids(`gtceu:${plasma}_plasma ${Math.round(1000 * Math.log(MegaKevin))}`)
        .inputFluids(prefixedInputs)

    if (catalyst) {
        let [name, amount] = catalyst.split(' ')
        recipe = recipe.itemInputs(`${parseInt(amount)}x gtceu:${name}`)
    }

    if (Array.isArray(EUt)) {
        recipe.EUt(EUt[0], EUt[1]) 
    } else {
        recipe.EUt(EUt) 
    }

    recipe
        .outputFluids(`gtceu:${output}_plasma ${totalAmount}`)
        .duration(adjustedDuration)
        .addData('TempMK', MegaKevin)
}

})