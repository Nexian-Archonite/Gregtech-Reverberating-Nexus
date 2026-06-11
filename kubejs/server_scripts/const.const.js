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
    'ulv',
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv',
    'uev',
    'uiv',
    'uxv',
    'opv',
    'max'
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
        copper: 'source_attuned_copper',
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
        osmium: "osmium_steel",
        niobium_titanium: "vintanium",
        trinium: "pentarch-v",
        osmiridium: "tri-osmic_matrix",
        vanadium_gallium: "axiom-re",
        naquadah: "naquadrium",
        naquadah_alloy: "transuranic_naquadrium_alloy",
        europium: "astazine-e",
        neutronium: "stellarite",
        darmstadtium: "ephemeral_naquadite"
        
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
  'charged_certus_quartz', 'draconium', 'awakened_draconium'
]
const types = [
  'ingot', 'plate', 'gem', 'dust', 'rod', 'nugget', 
  'block', 'powder', 'sheet', 'crystal', 'crushed'
]