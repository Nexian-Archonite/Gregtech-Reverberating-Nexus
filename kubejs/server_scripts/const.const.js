// priority: 9999

// priority: one bajillion
// Useful functions

// my baby boy
const FLAMERecipes = Java.loadClass('com.coremod.nextech.NexTechRecipeTypes').FLAME_RECIPES


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
        "uev": "polydimensionalized_omnic_nexite",
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
    'uev': "polydimensionalized_omnic_nexite", //8388608 EU/t
    'uiv': "true_nullium", //33554432 EU/t
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
        enriched_naquadah_trinium_europium_duranide: "sulvan_steel",
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

const thecarbonboys = ['gtceu:carbon_dust', 'gtceu:charcoal_dust', 'gtceu:coal_dust', 'gtceu:coke_dust']

const thermalityalloys = ['enderium', 'lumium', 'signalum']
const ferricminerals = ['iron', 'granitic_mineral_sand', 'magnetite', 'basaltic_mineral_sand', 'pyrite', 'yellow_limonite', 'hematite', 'goethite']

const mods = ['create', 'botania', 'ars_nouveau', 'ad_astra', 'ae2', 'advanced_ae', 'expatternprovider', 'vs_clockwork', 'overgeared']
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

// thank you Star Technology for sponsoring RAI-

const researchTypes = ['organism_assembly_line', 'component_part_assembly', 'assembly_line']

global.ComponentResearch = (event, recipeId, researchItem, cwuT, totalCWU, euT, recipeType) => {
    const dataItem = (cwuT >= 144) ? 'nextech:living_data_disk' : (cwuT >= 64) ? 'gtceu:data_module' : 'gtceu:data_orb'
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
    const halfYield = ['vhaelcryite_casing', 'vaelkethrite_casing', 'activated_nexian_pyrite_casing', 'pyrghul_alloy_casing'].includes(output)
const count = halfYield ? 1 : 2

event.shaped(Item.of(`${count}x gtceu:${output}`), [
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
    .itemOutputs(`${count}x gtceu:${output}`)
    .duration(50)
    .circuit(6)
    .EUt(16)

    if (!halfYield) {
    const maceratorRecipe = GTM.macerator(`${output}_recycling`)
        .itemInputs(`gtceu:${output}`)
        .duration(50)
        .EUt(16)

    if (primary === secondary) {
        maceratorRecipe.itemOutputs(`4x gtceu:${primary}_dust`)
    } else {
        maceratorRecipe.itemOutputs(`3x gtceu:${primary}_dust`, `gtceu:${secondary}_dust`)
    }
}}

const dualCasingAdv = (primary, secondary, output) => {
    GTM.component_part_assembly(`${output}`)
        .itemInputs(`64x gtceu:${primary}_plate`, `8x gtceu:${secondary}_frame`, `32x gtceu:${secondary}_bolt`, `32x gtceu:${primary}_foil`)
        .itemOutputs(`16x gtceu:${output}`)
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
    GTM.component_part_assembly(`${output}`)
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
    GTM.component_part_assembly(`${output}`)
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
dualCasing('vaelthorium', 'kethrite', 'vaelkethrite_casing')
dualCasing('wizarding_steel', 'wizarding_steel', 'wizarding_steel_casing')
dualCasing('enderium', 'enderium', 'enderium_casing')
dualCasing('lumium', 'lumium', 'lumium_casing')
dualCasing('signalum', 'signalum', 'signalum_casing')
dualCasing('source', 'source', 'source_casing')
dualCasing('nitinol', 'nitinol', 'nitinol_casing')
dualCasing('resonite', 'resonite', 'resonite_casing')
dualCasing('nexus_steel', 'nexus_steel', 'nexus_steel_casing')
dualCasing('igneous_bronze', 'igneous_bronze', 'igneous_bronze_casing')
dualCasing('auralloy-omega_over_transcendentine', 'auralloy-omega_over_transcendentine', 'auralloy-omega_over_transcendentine_casing')
dualCasing('activated_nexian_pyrite', 'activated_nexian_pyrite', 'activated_nexian_pyrite_casing')
dualCasing('velyl_rubber', 'velyl_rubber', 'velyl_rubber_casing')
dualCasing('pyrghul_alloy', 'pyrghul_alloy', 'pyrghul_alloy_casing')
dualCasing('tainted_zircaloy', 'tainted_zircaloy', 'atomic_casing')


dualCasingAdv('sulvan_steel', 'cindralite', 'sulvan_steel_casing')
gearCasing('sulvan_steel', 'cindralite', 'sulvan_steel_gearbox_casing')
fireCasing('sulvan_steel', 'cindralite', 'sulvan_steel_firebox_casing')

gearCasing('abyssal_netherite', 'abyssal_netherite', 'abyssal_netherite_gearbox_casing')
fireCasing('abyssal_netherite', 'abyssal_netherite', 'abyssal_netherite_firebox_casing')

dualCasingAdv('abyssal_netherite', 'abyssal_netherite', 'abyssal_netherite_casing')
dualCasingAdv('aetheric-thermavyte', 'vorrexite', 'aetherite_casing')
dualCasingAdv('surreal-pyrathene', 'surreal-pyrathene', 'vhaelcryite_casing')
dualCasingAdv('vaelkethrite', 'vaelkethrite', 'vaelkethrite_casing')
dualCasingAdv('pyrghul_alloy', 'pyrghul_alloy', 'pyrghul_alloy_casing')
dualCasingAdv('mythrolyc_umbraloy', 'mythrolyc_umbraloy', 'mythrolyc_umbraloy_casing')
dualCasingAdv('mythrovirdyne', 'mythrovirdyne', 'mythrovirdyne_casing')
dualCasingAdv('activated_nexian_pyrite', 'activated_nexian_pyrite', 'activated_nexian_pyrite_casing')
dualCasingAdv('auralloy-omega', 'abyssal_netherite', 'abyssal_netherite_heat_escape_casing')

GTM.component_part_assembly('peek_pipe_casing')
.itemInputs('64x gtceu:polyether_ether_ketone_plate', '32x gtceu:polyether_ether_ketone_normal_fluid_pipe', '8x gtceu:polyether_ether_ketone_frame')
.itemOutputs('16x gtceu:peek_pipe_casing')
.duration(50)
.EUt(16)

GTM.component_part_assembly('sulvan_steel_pipe_casing')
.itemInputs('64x gtceu:sulvan_steel_plate', '32x gtceu:polyether_ether_ketone_normal_fluid_pipe', '8x gtceu:sulvan_steel_frame')
.itemOutputs('16x gtceu:sulvan_steel_pipe_casing')
.duration(50)
.EUt(16)

GTM.component_part_assembly('abyssal_netherite_pipe_casing')
.itemInputs('64x gtceu:abyssal_netherite_plate', '32x gtceu:polyether_ether_ketone_normal_fluid_pipe', '8x gtceu:abyssal_netherite_frame')
.itemOutputs('16x gtceu:abyssal_netherite_pipe_casing')
.duration(50)
.EUt(16)

GTM.component_part_assembly(`abyssal_netherite_machine_casing`)
        .itemInputs(`16x gtceu:abyssal_netherite_casing`, `8x gtceu:abyssal_netherite_gear`, `32x gtceu:abyssal_netherite_foil`)
        .itemOutputs(`16x gtceu:abyssal_netherite_machine_casing`)
        .inputFluids(`gtceu:abyssal_netherite 1152`, 'gtceu:indium-vor-dys-cad_supersolder_alloy 576')
        .duration(50)
        .EUt(32768)
        .circuit(2)

        GTM.macerator(`abyssal_netherite_machine_casing_recycling`)
        .itemInputs(`gtceu:abyssal_netherite_machine_casing`)
        .itemOutputs(`13x gtceu:abyssal_netherite_dust`, `gtceu:small_abyssal_netherite_dust`)
        .duration(50)
        .EUt(16)
    
    

const transcendentBlastTier = [
    { name: 'sulvan_steel', blastTemp: 11000, EUt: va.uv, duration: 750 },
    { name: 'aetheric-thermavyte', blastTemp: 10799, EUt: va.uhv, duration: 800 },
    { name: 'indium-vor-dys-cad_supersolder_alloy', blastTemp: 8000, EUt: va.uhv, duration: 750},
    { name: 'transcendent_dilithide', blastTemp: 16800, EUt: va.uhv, duration: 950},
    { name: 'ignatherm', blastTemp: 12360, EUt: va.luv, duration: 941 },
    { name: 'vhoric_steel', blastTemp: 12940, EUt: va.luv, duration: 1076 },
    { name: 'pyrghul_alloy', blastTemp: 11820, EUt: va.luv, duration: 846 },
    { name: 'vaexium', blastTemp: 13380, EUt: va.zpm, duration: 1012 },
    { name: 'korzene', blastTemp: 13590, EUt: va.zpm, duration: 1093 },
    { name: 'abyssal_netherite', blastTemp: 16000, EUt: va.uv, duration: 1100 },
    { name: 'nexian_pyrite', blastTemp: 16800, EUt: va.uv, duration: 900 },
    { name: 'activated_nexian_pyrite', blastTemp: 16800, EUt: va.uhv, duration: 1050 },
    { name: 'awakened_draconium', blastTemp: 13200, EUt: va.uhv, duration: 1000 },
    { name: 'mythrolyc_umbraloy', blastTemp: 18900, EUt: va.uhv, duration: 1200},
    { name: 'mythrovirdyne', blastTemp: 18900, EUt: va.uhv, duration: 1050},
    { name: 'mythryl', blastTemp: 13874, EUt: va.zpm, duration: 961 },
    { name: 'velium', blastTemp: 14211, EUt: va.zpm, duration: 1024 },
    { name: 'myxorite', blastTemp: 14583, EUt: va.zpm, duration: 884 },
    { name: 'ignavyte', blastTemp: 11042, EUt: va.luv, duration: 874 },
    { name: 'flagrax', blastTemp: 11791, EUt: va.luv, duration: 1051 },
    { name: 'vhorryte', blastTemp: 12356, EUt: va.luv, duration: 913 },
    { name: 'ghulveyte', blastTemp: 12988, EUt: va.luv, duration: 1028 },
    { name: 'ashrax', blastTemp: 13547, EUt: va.luv, duration: 845 },
    { name: 'pyrrhovyte', blastTemp: 12081, EUt: va.luv, duration: 986 },
    { name: 'vaex-thryn', blastTemp: 13124, EUt: va.zpm, duration: 917 },
    { name: 'orvaelithe', blastTemp: 13600, EUt: va.zpm, duration: 1083 },
    { name: 'khzaevhul', blastTemp: 12532, EUt: va.zpm, duration: 891 },
    { name: 'aeuvrith-al', blastTemp: 13376, EUt: va.zpm, duration: 1046 },
    { name: 'xhyv-orzael', blastTemp: 12844, EUt: va.zpm, duration: 959 },
    { name: 'ng-vaethos', blastTemp: 13461, EUt: va.zpm, duration: 832 },
    { name: 'aelvythrex', blastTemp: 16240, EUt: va.uhv, duration: 1124 },
    { name: 'czyvhaeln', blastTemp: 16880, EUt: va.uhv, duration: 1093 },
    { name: 'thurvaexi', blastTemp: 17100, EUt: va.uhv, duration: 1201 },
    { name: 'yrethnaul', blastTemp: 17440, EUt: va.uhv, duration: 1318 },
    { name: 'phaevcyrl', blastTemp: 16600, EUt: va.uhv, duration: 1177 },
    { name: 'kholvaetzh', blastTemp: 17800, EUt: va.uhv, duration: 1402 },
    { name: 'vrethdulix', blastTemp: 16180, EUt: va.uhv, duration: 1088 },
    { name: 'ghauzrenit', blastTemp: 16740, EUt: va.uhv, duration: 1211 },
    { name: 'jolvekrasz', blastTemp: 17220, EUt: va.uhv, duration: 1344 },
    { name: 'thuzkavel', blastTemp: 16960, EUt: va.uhv, duration: 1289 },
    { name: 'drevhnauxt', blastTemp: 17680, EUt: va.uhv, duration: 1388 },
    { name: 'uxvheltris', blastTemp: 17940, EUt: va.uhv, duration: 1419 },
    { name: 'caelvr', blastTemp: 16020, EUt: va.uhv, duration: 1066 },
    { name: 'fendrothex', blastTemp: 16380, EUt: va.uhv, duration: 1134 },
    { name: 'mornivecht', blastTemp: 16820, EUt: va.uhv, duration: 1256 },
    { name: 'sturvaelix', blastTemp: 17140, EUt: va.uhv, duration: 1311 },
    { name: 'brechovite', blastTemp: 17460, EUt: va.uhv, duration: 1367 },
    { name: 'drethnavik', blastTemp: 17980, EUt: va.uhv, duration: 1433 },

    { name: 'aelczyr', blastTemp: 17420, EUt: va.uev, duration: 900 },
    { name: 'thulvaex', blastTemp: 18240, EUt: va.uev, duration: 950 },
    { name: 'vrethren', blastTemp: 17180, EUt: va.uev, duration: 850 },
    { name: 'jolvelix', blastTemp: 18480, EUt: va.uev, duration: 1000 },
    { name: 'caeldrox', blastTemp: 16940, EUt: va.uev, duration: 800 },
    { name: 'sturvik', blastTemp: 18360, EUt: va.uev, duration: 950 },
    { name: 'morniloy-13', blastTemp: 19440, EUt: va.uev, duration: 1200 },


    { name: 'omnium', blastTemp: 19449, EUt: va.uev, duration: 800 },
    { name: 'nullium', blastTemp: 29600, EUt: va.uiv, duration: 1200 },
    { name: 'infinity', blastTemp: 29600, EUt: va.uxv, duration: 1600 },
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
        name: 'sulvan_steel',
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
        blastTemp: 16000,
        EUt: va.uv,
        duration: 44550,
        components: ['37x nexus_steel', '12x abyssal_netherite', '8x korzene', '4x sulvan_steel', '3x promethium', '2x vaexium']
    },
    {
        name: 'mythrolyc_umbraloy',
        blastTemp: 18900,
        EUt: va.uhv,
        duration: 1200,
        components: ['4x vhoric_steel', '3x vaexium', '2x mythryl', '2x umbracite']
    },
    {
        name: 'mythrovirdyne',
        blastTemp: 18600,
        EUt: va.uhv,
        duration: 1050,
        components: ['4x pyrghul_alloy', '3x korzene', '2x mythryl', '2x viridrine']
    },
    {
        name: 'aelczyr',
        blastTemp: 17420,
        EUt: va.uev,
        duration: 1350,
        components: ['aelvythrex', 'czyvhaeln']
    },
    {
        name: 'thulvaex',
        blastTemp: 18240,
        EUt: va.uev,
        duration: 1425,
        components: ['thurvaexi', 'kholvaetzh']
    },
    {
        name: 'vrethren',
        blastTemp: 17180,
        EUt: va.uev,
        duration: 1275,
        components: ['vrethdulix', 'ghauzrenit']
    },
    {
        name: 'jolvelix',
        blastTemp: 18480,
        EUt: va.uev,
        duration: 1500,
        components: ['jolvekrasz', 'uxvheltris']
    },
    {
        name: 'caeldrox',
        blastTemp: 16940,
        EUt: va.uev,
        duration: 1200,
        components: ['caelvr', 'fendrothex']
    },
    {
        name: 'sturvik',
        blastTemp: 18360,
        EUt: va.uev,
        duration: 1425,
        components: ['sturvaelix', 'drethnavik']
    },
    {
        name: 'morniloy-13',
        blastTemp: 19440,
        EUt: va.uev,
        duration: 6300,
        components: ['2x caeldrox', '2x vrethren', '2x aelczyr', 'mornivecht']
    }
]
// become alloy, damn you!
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
        .EUt((mat.EUt / 32) * 0.8)
    }
    

    

})

transcendentAlloyBlastTier.forEach(mat => {
    const baseDuration = blastDurationMap[mat.name] ?? mat.duration * 0.1
    const totalMb = mat.components.reduce((sum, c) => {
        const amount = parseInt(c.split('x')[0].trim())
        return sum + (amount * 144)
    }, 0)


if (mat.blastTemp <= 16001) {
    GTM.alloy_blast_smelter(`${mat.name}_og`)
        .itemInputs(
            mat.components.map(component => {
                let [amount, name] = component.split('x ')
                return `${amount}x gtceu:${name}_dust`
            }))
        .inputFluids(`gtceu:oganesson-xenon_trifluoride ${25*Math.log10(totalMb)}`)
        .outputFluids(`gtceu:molten_${mat.name} ${totalMb}`)
        .blastFurnaceTemp(mat.blastTemp)
        .duration((0.57 - 0.03 * Math.log(totalMb / 100)) * mat.duration)
        .EUt(mat.EUt)
}

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


global.FLAME = (inputs, output, duration, EUt, MegaKevin, catalyst) => {
    if (catalyst === undefined) catalyst = null
    
    let id = `${output.replace('_plasma', '')}`
    let totalAmount = inputs.reduce((sum, fluid) => {
        let amount = parseInt(fluid.split(' ')[1])
        return sum + amount * 144
    }, 0)
    
    let prefixedInputs = inputs.map(fluid => {
        let [name, amount] = fluid.split(' ')
        return `gtceu:${name} ${parseInt(amount) * 144}`
    })

    let recipe = GTM.fractal_metal_alloyment(id)
        .inputFluids(prefixedInputs)

    if (catalyst) {
        recipe = recipe.itemInputs(catalyst)
    }

    if (Array.isArray(EUt)) {
        recipe.EUt(EUt[0], EUt[1]) 
    } else {
        recipe.EUt(EUt) 
    }

    recipe
        .outputFluids(`gtceu:${output}_plasma ${totalAmount}`)
        .duration(duration)
        .addData('ebf_temp', MegaKevin)
}




global.registerComponents = (tier, mainMaterial, solderFluid, solderAmount, polymerFluid, polymerAmount, extraSolder1, extraSolder2, rc) => {
    const tiers = ['uhv', 'uev', 'uiv', 'uxv', 'opv']
    let tierIndex = tiers.indexOf(tier)
    
    let currentTierCircuit = tier
    let prevTierCircuit = tierIndex > 0 ? tiers[tierIndex - 1] : 'uv'
    let prevPrevTierCircuit = tierIndex > 1 ? tiers[tierIndex - 2] : 'zpm'

    console.log("Current:", currentTierCircuit);
    console.log("Prev:", prevTierCircuit);
    console.log("PrevPrev:", prevPrevTierCircuit);
    
    let componentTier = tierIndex > 0 ? tiers[tierIndex - 1] : 'uv'
    let researchPrereq = tierIndex === 0 ? 'ruined' : tiers[tierIndex - 1]

    let cwuPerTick = 120 + (tierIndex * 20)
    let totalCwu = 144000 + (tierIndex * 24000)
    let euTier = va[tier]

    const components = {
        catalyst_core: [`4x gtceu:${mainMaterial}_rod`, 'gtceu:fusion_glass', 'gtceu:preon_star', `32x gtceu:fine_${rc}_wire`, `gtceu:${componentTier}_emitter`, `4x gtceu:${mainMaterial}_ring`, `${solderFluid} ${solderAmount}`],
        computational_matrix: [`gtceu:${mainMaterial}_frame`, `#gtceu:circuits/${currentTierCircuit}`, `2x #gtceu:circuits/${prevTierCircuit}`, `3x #gtceu:circuits/${prevPrevTierCircuit}`, `4x gtceu:${rc}_single_wire`, `4x gtceu:${mainMaterial}_bolt`, `${solderFluid} ${solderAmount}`],
        high_strength_panel: [`gtceu:dense_${mainMaterial}_plate`, `4x gtceu:${mainMaterial}_chain_mesh`, `4x gtceu:${mainMaterial}_screw`, `${polymerFluid} ${polymerAmount}`],
        microfluidic_flow_valve: [`gtceu:${componentTier}_fluid_regulator`, 'gtceu:stellarite_small_fluid_pipe', `2x gtceu:${mainMaterial}_plate`, `4x gtceu:${mainMaterial}_round`, 'gtceu:styrene_butadiene_rubber_ring', `2x gtceu:${mainMaterial}_ring`, `${polymerFluid} ${polymerAmount}`],
        micropower_router: [`4x gtceu:${rc}_double_wire`, `2x gtceu:${mainMaterial}_plate`, `#gtceu:circuits/${prevTierCircuit}`, `4x gtceu:${mainMaterial}_bolt`, `gtceu:velyl_rubber ${polymerAmount}`],
        precision_drive_mechanism: [`gtceu:${mainMaterial}_frame`, `gtceu:${componentTier}_electric_motor`, `#gtceu:circuits/${prevTierCircuit}`, `gtceu:${mainMaterial}_gear`, `gtceu:small_${mainMaterial}_gear`, `8x gtceu:${mainMaterial}_round`, 'gtceu:triconite 2000'],
        super_magnetic_core: ['gtceu:long_bose-einstein_neutronium_rod', '2x gtceu:cryosporsite_rod', `3x gtceu:${mainMaterial}_rod`, `16x gtceu:fine_${rc}_wire`, 'gtceu:stellarite_tiny_fluid_pipe', 'gtceu:bose-einstein_oganesson-xenon_trifluoride_condensate_plasma 2000'],
        transmission_assembly: [`gtceu:${mainMaterial}_frame`, `gtceu:${componentTier}_electric_motor`, `2x gtceu:${mainMaterial}_rod`, `2x gtceu:${mainMaterial}_ring`, `4x gtceu:${mainMaterial}_round`, `16x gtceu:fine_${rc}_wire`, 'gtceu:triconite 2000']
    }

    for (let [name, ingredients] of Object.entries(components)) {
        let fluidEntry = ingredients[ingredients.length - 1]
        let itemIngredients = ingredients.slice(0, -1)
        let finalResearchPrereq = researchPrereq === 'ruined' ? `gtceu:ruined_${name}` : `gtceu:${researchPrereq}_${name}`

        GTM.component_part_assembly(`${tier}_${name}`)
            .itemInputs(itemIngredients)
            .inputFluids(fluidEntry)
            .itemOutputs(`gtceu:${tier}_${name}`)
            .stationResearch(global.ComponentPartAssemblyResearch(event, `${tier}_${name}`, finalResearchPrereq, cwuPerTick, totalCwu, euTier))
            .duration(400)
            .EUt(euTier)
    }

    const machines = {
        electric_motor: [`gtceu:${tier}_super_magnetic_core`, `2x gtceu:long_${mainMaterial}_rod`, `gtceu:${tier}_transmission_assembly`, `64x gtceu:fine_${rc}_wire`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]],
        electric_pump: [`gtceu:${tier}_electric_motor`, 'gtceu:stellarite_normal_fluid_pipe', `gtceu:${tier}_microfluidic_flow_valve`, `8x gtceu:velyl_rubber_ring`, `gtceu:${mainMaterial}_rotor`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]],
        conveyor_module: [`2x gtceu:${tier}_electric_motor`, `gtceu:${tier}_high_strength_panel`, `gtceu:${tier}_precision_drive_mechanism`, `4x gtceu:${mainMaterial}_ring`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder1} 2000`, `gtceu:velyl_rubber 4608`, `${extraSolder2} ${solderAmount}`]],
        electric_piston: [`gtceu:${tier}_electric_motor`, `2x gtceu:${tier}_high_strength_panel`, `gtceu:${tier}_transmission_assembly`, `gtceu:${mainMaterial}_gear`, `gtceu:small_${mainMaterial}_gear`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]],
        robot_arm: [`4x gtceu:long_${mainMaterial}_rod`, `gtceu:${tier}_precision_drive_mechanism`, `gtceu:${tier}_transmission_assembly`, `gtceu:${tier}_electric_motor`, `gtceu:${tier}_electric_piston`, `2x gtceu:${tier}_computational_matrix`, `2x gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]],
        field_generator: [`gtceu:${mainMaterial}_frame`, `2x gtceu:${tier}_high_strength_panel`, `gtceu:${tier}_catalyst_core`, `2x gtceu:${tier}_emitter`, `gtceu:${tier}_computational_matrix`, `64x gtceu:fine_${rc}_wire`, `2x gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount}`, `${extraSolder2} ${solderAmount}`]],
        emitter: [`gtceu:${mainMaterial}_frame`, `gtceu:${tier}_electric_motor`, `4x gtceu:long_${mainMaterial}_rod`, `gtceu:${tier}_catalyst_core`, `gtceu:${tier}_computational_matrix`, `64x gtceu:stellarite_foil`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount * 2}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]],
        sensor: [`gtceu:${mainMaterial}_frame`, `gtceu:${tier}_electric_motor`, `4x gtceu:${mainMaterial}_plate`, `gtceu:${tier}_catalyst_core`, `gtceu:${tier}_computational_matrix`, `64x gtceu:stellarite_foil`, `gtceu:${tier}_micropower_router`, [`${solderFluid} ${solderAmount * 2}`, `${extraSolder1} 2000`, `${extraSolder2} ${solderAmount}`]]
    }

    for (let [name, ingredients] of Object.entries(machines)) {
        let fluidEntry = ingredients[ingredients.length - 1]
        let itemIngredients = ingredients.slice(0, -1)
        
        let researchTier = tierIndex > 0 ? tiers[tierIndex - 1] : 'uv'

        GTM.assembly_line(`${tier}_${name}`)
            .itemInputs(itemIngredients)
            .inputFluids(fluidEntry)
            .itemOutputs(`gtceu:${tier}_${name}`)
            .stationResearch(global.AssemblyLineResearch(event, `${tier}_${name}`, `gtceu:${researchTier}_${name}`, cwuPerTick, totalCwu, euTier))
            .duration(400)
            .EUt(euTier)
    }
}

})