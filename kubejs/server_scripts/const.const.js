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
        enriched_naquadah_trinium_europium_duranide: "chronocrytic-vhaelsalite",
        ruthenium_trinium_americium_neutronate: "sulvarium-over-kraethite_steel"
        
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
    const dataItem = (cwuT > 140) ? 'gtceu:living_data_disk' : 'gtceu:data_module'
    const researchId = `1x_${researchItem.replace(':', '_')}`

    console.log('recipe:', recipeId, 'cwuT:', cwuT)
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
}

const dualCasingAdv = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}`)
        .itemInputs(`8x gtceu:${primary}_plate`, `gtceu:${secondary}_frame`, `6x gtceu:${secondary}_bolt`, `4x gtceu:${primary}_foil`)
        .itemOutputs(`3x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 144`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 72')
        .duration(50)
        .EUt(32768)
}

const gearCasing = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}_gearbox`)
        .itemInputs(`8x gtceu:${primary}_plate`, `gtceu:${secondary}_frame`, `6x gtceu:${secondary}_bolt`, `4x gtceu:${primary}_gear`)
        .itemOutputs(`3x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 144`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 72')
        .duration(50)
        .EUt(32768)
        .circuit(2)
}

const fireCasing = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}_firebox`)
        .itemInputs(`8x gtceu:${primary}_plate`, `gtceu:${secondary}_frame`, `6x gtceu:${secondary}_bolt`, `4x gtceu:${primary}_rod`)
        .itemOutputs(`3x gtceu:${output}`)
        .inputFluids(`gtceu:${primary} 144`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 72')
        .duration(50)
        .EUt(32768)
        .circuit(4)
}

dualCasing('condensed_mana', 'source', 'magikstone_casing')
dualCasing('vhaelcryite', 'pyrathene', 'vhaelcryite_casing')

dualCasingAdv('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_casing')
gearCasing('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_casing')
fireCasing('sulvarium-over-kraethite_steel', 'cindralite', 'sulvan_steel_casing')

dualCasingAdv('aetheric-thermavyte', 'vorrexite', 'aetherite_casing')


const transcendentBlastTier = [
    { name: 'omnium', blastTemp: 19449, EUt: va.uhv, duration: 1600 },
    { name: 'sulvarium-over-kraethite_steel', blastTemp: 11000, EUt: va.uv, duration: 750 },
    { name: 'aetheric-thermavyte', blastTemp: 10799, EUt: va.uhv, duration: 800 }
]

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
const transcendentAlloyBlastTier = [
    {
        name: 'indium-vor-dys-cad_supersolder_alloy',
        blastTemp: 8000,
        EUt: va.uhv,
        duration: 62700,
        components: [
            '47x indium',
            '6x vorrexite',
            '3x dysprosium',
            '8x cadmium',
            '3x tin',
            '7x darmstadtium',
            '2x zirconium'
        ]
    },
    {
        name: 'sulvarium-over-kraethite_steel',
        blastTemp: 11000,
        EUt: va.uv,
        duration: 12937,
        components: [
            '6x sulvarium', 
            '6x kraethite', 
            '3x antisource', 
            '4x holmium', 
            '2x nexus', 
            '2x awakened_draconium'
        ]
    },
    {
        name: 'aetheric-thermavyte',
        blastTemp: 10799,
        EUt: va.uhv,
        duration: 3000,
        components: [
            '2x aetherite',
            '2x thermavyte',
            '1x neutronium'
        ]
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
    GTM.electric_blast_furnace(`blast_${mat.name}_gas`)
        .itemInputs(`gtceu:${mat.name}_dust`)
        .inputFluids(`gtceu:oganesson ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:hot_${mat.name}_ingot`)
        .blastFurnaceTemp(mat.blastTemp)
        .duration(Math.floor((0.60 - 0.03 * Math.log2(mat.blastTemp / 10000)) * mat.duration))
        .EUt(mat.EUt)
    if (mat.name !== 'aetheric-thermavyte') {
        event.remove({id: `gtceu:vacuum_freezer/cool_hot_${mat.name}_ingot`})
    }
    GTM.quantum_condensate_exchanger(`hypercool_${mat.name}`)
        .itemInputs(`gtceu:hot_${mat.name}_ingot`)
        .inputFluids(`gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:${mat.name}_ingot`)
        .outputFluids(`gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .duration(Math.floor((0.60 - 0.03 * Math.log2(mat.blastTemp / 10000)) * mat.duration))
        .EUt(mat.EUt * 0.8)

})

transcendentAlloyBlastTier.forEach(mat => {
    const baseDuration = blastDurationMap[mat.name] ?? mat.duration * 0.1
    const totalMb = mat.components.reduce((sum, c) => {
        const amount = parseInt(c.split('x')[0].trim())
        return sum + (amount * 144)
    }, 0)

    GTM.alloy_blast_smelter(`${mat.name}_gas`)
        .itemInputs(
        mat.components.map(component => {
            let [amount, name] = component.split('x ')
            return `${amount}x gtceu:${name}_dust`
        })
    )
        .inputFluids(`gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma ${25*Math.log10(totalMb)}`)
        .outputFluids(`gtceu:molten_${mat.name} ${totalMb}`, `gtceu:oganesson-xenon_trifluoride ${25*Math.log10(totalMb)}`)
        .blastFurnaceTemp(mat.blastTemp)
        .duration((0.60 - 0.02 * Math.log2(totalMb)) * mat.duration)
        .EUt(mat.EUt)
        if (mat.name !== 'aetheric-thermavyte') {
        event.remove({id: `gtceu:vacuum_freezer/${mat.name}`})
        }
    GTM.quantum_condensate_exchanger(`hypercool_molten_${mat.name}`)
        .inputFluids(`gtceu:molten_${mat.name} 144`, `gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma ${ogConsumption(mat.blastTemp)}`)
        .itemOutputs(`gtceu:${mat.name}_ingot`)
        .outputFluids(`gtceu:oganesson-xenon_trifluoride ${ogConsumption(mat.blastTemp)}`)
        .duration(Math.floor((0.60 - 0.03 * Math.log2(mat.blastTemp / 10000)) *baseDuration))
        .EUt(mat.EUt * 0.8)
    

    
})
})