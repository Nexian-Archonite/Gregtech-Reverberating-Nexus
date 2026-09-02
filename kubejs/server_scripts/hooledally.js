ServerEvents.recipes(event => {

const RegexList =/^gtceu:(shaped|assembler|assembly_line)\/(ring_.*|small_gear_.*|drill_head_.*|tiny_dust_.*|screwdriver_.*|small_dust_.*|stick_.*|chainsaw_.*|plate_.*|nugget_.*|rotor_.*|spring_.*|foil_.*|bolt_.*|block_.*|gear_.*|fine_wire_.*|screw_.*|buzzsaw_.*|turbine_.*|wrench_.*|frame_.*|cover_.*_wire_gt_.*|(tiny|small|medium|large|huge|quadruple|nonuple)_.*_pipe|fluid_cell_.*|assemble_.*|coil_.*|scythe_.*|pickaxe_.*|shovel_.*|axe_.*|file_.*|wire_cutter_.*|_.*_hammer_.*|saw_.*|spade_.*|sword_.*|knife_.*|butchery_.*|crowbar_.*|hoe_.*|.*_wire_.*|superconducting_coil_.*)$/

const RecTyp = ["gtceu:assembler", 'gtceu:assembly_line', 'gtceu:circuit_assembler', 'gtceu:shaped', 'crafting_shaped']

const itemTypes = [
    'rod', 'round', 'plate', 'gear', 'rotor', 'frame', 'ring', 'bolt', 'screw', 'foil',
    'tiny_fluid_pipe', 'small_fluid_pipe', 'normal_fluid_pipe', 'large_fluid_pipe', 'huge_fluid_pipe',
    'single_cable', 'single_wire', 'double_cable', 'double_wire', 'quadruple_cable', 'quadruple_wire',
    'octal_cable', 'octal_wire', 'hex_cable', 'hex_wire', 'spring'
]

const prefixedTypes = ['long_{}_rod', 'small_{}_gear', 'fine_{}_wire', 'double_{}_plate', 'dense_{}_plate']

const tierReplacements = global.tierReplacements
Object.entries(tierReplacements).forEach(([inputs, replacement]) => {
        // Handle standard items: gtceu:{material}_{type}
        itemTypes.forEach(type => {
            RecTyp.forEach(Rec => {
                event.replaceInput(
                { not: { id: RegexList }, input: `gtceu:${inputs}_${type}`, type: Rec },
                `gtceu:${inputs}_${type}`,
                `gtceu:${replacement}_${type}`
            )
            })
            
        })

        // Handle prefixed items: gtceu:{prefix}_{material}_{suffix}
        prefixedTypes.forEach(template => {
            const inputItem = template.replace('{}', inputs)
            const outputItem = template.replace('{}', replacement)
            RecTyp.forEach(Rec => {
            event.replaceInput(
                { not: { id: RegexList }, input: `gtceu:${inputItem}`, type: Rec },
                `gtceu:${inputItem}`,
                `gtceu:${outputItem}`
            )
            })
        })
}) 

// I have no idea how it works, but it works, so im not touching this shit

const RecyclingTierRegex = /gtceu:(lv|mv|hv|ev|iv|luv|zpm|uv|uhv|uev|uiv|uxv|opv|max)_.*/

Object.entries(tierReplacements).forEach(([inputs, replacement]) => {
        event.replaceOutput(
            { type: 'gtceu:macerator', input: RecyclingTierRegex },
            `gtceu:${inputs}_dust`,
            `gtceu:${replacement}_dust`
        )

        event.replaceOutput(
            { type: 'gtceu:macerator', input: RecyclingTierRegex },
            `gtceu:small_${inputs}_dust`,
            `gtceu:small_${replacement}_dust`
        )

        event.replaceOutput(
            { type: 'gtceu:macerator', input: RecyclingTierRegex },
            `gtceu:tiny_${inputs}_dust`,
            `gtceu:tiny_${replacement}_dust`
        )

        event.replaceOutput(
            { type: 'gtceu:arc_furnace', input: RecyclingTierRegex },
            `gtceu:${inputs}_ingot`,
            `gtceu:${replacement}_ingot`
        )

        event.replaceOutput(
            { type: 'gtceu:arc_furnace', input: RecyclingTierRegex },
            `gtceu:${inputs}_nugget`,
            `gtceu:${replacement}_nugget`
        )
})


event.replaceInput(
    {id: 'gtceu:shaped/wood_wall'},
    "gtceu:copper_plate",
    "gtceu:bronze_plate"
)

event.replaceInput(
    {output: 'gtceu:vacuum_tube'},
    "gtceu:steel_bolt",
    "gtceu:nexus_steel_bolt"
)



event.replaceInput(
    {id: 'gtceu:assembler/casing_aluminium_frostproof'},
    'gtceu:aluminium_frame',
    'gtceu:echolumium_frame'
)


event.replaceInput(
    {id: 'ae2:inscriber/silicon_print'},
    "ae2:silicon",
    "gtceu:silicon_dust"
)

event.replaceInput(
    {id: 'gtceu:shaped/huge_duct_stainless_steel'},
    'gtceu:double_stainless_steel_plate',
    'gtceu:double_mechanical_stainless_plate'
)

event.replaceInput(
    {id: 'gtceu:shaped/huge_duct_steel'},
    'gtceu:double_steel_plate',
    'gtceu:double_nexus_steel_plate'
)

event.replaceInput(
    {id: 'gtceu:shaped/component_grider_diamond'},
    'gtceu:double_steel_plate',
    'gtceu:double_nexus_steel_plate'
)

event.replaceInput(
    {input: 'botania:mana_powder'},
    'botania:mana_powder',
    'gtceu:mana_dust'
)

event.replaceOutput(
    {output: 'botania:mana_powder'},
    'botania:mana_powder',
    'gtceu:mana_dust'
)



event.replaceInput(
    {id: /gtceu:assembler:(high_power|computer)_casing/},
    'gtceu:fine_copper_wire',
    'gtceu:fine_source_attuned_copper_wire'
)

event.replaceInput(
    {output: 'gtceu:phenolic_printed_circuit_board'},
    'gtceu:silver_single_wire',
    'gtceu:copper_single_wire'
)

event.replaceInput(
    {output: 'gtceu:phenolic_printed_circuit_board'},
    'gtceu:silver_foil',
    'gtceu:copper_foil'
)

event.replaceInput(
    {output: 'gtceu:plastic_printed_circuit_board'},
    'gtceu:copper_foil',
    'gtceu:silver_foil'
)


event.replaceInput(
    {type: "gtceu:assembly_line"},
    'gtceu:long_magnetic_samarium_rod',
    'gtceu:long_cryosporsite_rod'
)

event.replaceInput(
    {input: 'ae2:fluix_crystal'},
    "ae2:fluix_crystal",
    "gtceu:fluix_gem"
)

event.replaceOutput(
    {output: 'ae2:fluix_crystal'},
    "ae2:fluix_crystal",
    "gtceu:fluix_gem"
)

event.replaceInput(
    {input: 'ae2:fluix_dust'},
    "ae2:fluix_dust",
    "gtceu:fluix_dust"
)

event.replaceOutput(
    {output: 'ae2:fluix_dust'},
    "ae2:fluix_dust",
    "gtceu:fluix_dust"
)

event.replaceInput(
    {input: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceInput(
    {input: 'ae2:charged_certus_quartz_crystal'},
    "ae2:charged_certus_quartz_crystal",
    "gtceu:charged_certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:charged_certus_quartz_crystal'},
    "ae2:charged_certus_quartz_crystal",
    "gtceu:charged_certus_quartz_gem"
)

event.replaceInput(
    {input: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:certus_quartz_dust'},
    "ae2:certus_quartz_dust",
    "gtceu:certus_quartz_dust"
)

event.replaceOutput(
    {output: 'netherite_scrap'},
    "netherite_scrap",
    "gtceu:netherite_scrap"
)

event.replaceInput(
    {input: 'netherite_scrap'},
    "netherite_scrap",
    "gtceu:netherite_scrap"
)

event.replaceInput(
    {input: 'gtceu:energium_dust'},
    'gtceu:energium_dust',
    'gtceu:energite_dust'
)

event.replaceOutput(
    {input: 'gtceu:energium_dust'},
    'gtceu:energium_dust',
    'gtceu:energite_dust'
)


event.replaceInput(
    {mod: 'ad_astra'},
    'gtceu:steel_rod',
    'gtceu:nexus_steel_rod'
)

event.replaceInput(
    {mod: 'ad_astra_giselle_addon'},
    'gtceu:steel_rod',
    'gtceu:nexus_steel_rod'
)

event.replaceInput(
    {mod: 'ad_astra'},
    'gtceu:steel_block',
    'gtceu:nexus_steel_block'
)

event.replaceInput(
    {mod: 'ad_astra_giselle_addon'},
    'gtceu:steel_block',
    'gtceu:nexus_steel_block'
)
materials.forEach((material) => {
    types.forEach((type) => {
        event.replaceInput(
            {}, // Empty filter to check all recipes
            new RegExp(`^(?!minecraft:|gtceu:)\\w+:${material}_${type}$`),
            `gtceu:${material}_${type}`
        )
    })
})

event.replaceOutput(
    {id: /gtceu:macerator\/macerate_treated_wood_.*(_.*)?/},
    'gtceu:wood_dust',
    'gtceu:treated_wood_dust'
)


const GTM = event.recipes.gtceu

GTM.macerator('macerate_zinc_plate')
.itemInputs('gtceu:zinc_plate')
.itemOutputs('gtceu:zinc_dust')
.duration(65)
.EUt(2)

GTM.bender('bend_zinc_plate_to_foil')
.itemInputs('gtceu:zinc_plate')
.itemOutputs('4x gtceu:zinc_foil')
.duration(65)
.EUt(24)

GTM.bender('bend_zinc_plate_to_double_plate')
.itemInputs('2x gtceu:zinc_plate')
.itemOutputs('gtceu:double_zinc_plate')
.duration(130)
.EUt(96)

GTM.arc_furnace('arc_zinc_plate')
.itemInputs('gtceu:zinc_plate')
.itemOutputs('gtceu:zinc_ingot')
.inputFluids('#ad_astra:oxygen 65')
.duration(130)
.EUt(24)

GTM.extractor('extract_zinc_plate')
.itemInputs('gtceu:zinc_plate')
.outputFluids('gtceu:zinc 144')
.duration(130)
.EUt(24)

event.custom(
{
  "type": "compactcrafting:miniaturization",
  "version": 1,
  "recipeSize": 5,
  "layers": [
    {
      "type": "compactcrafting:filled",
      "component": "G"
    },
    {
      "type": "compactcrafting:hollow",
      "wall": "G"
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["G", "G", "G", "G", "G"],
        ["G", "-", "-", "-", "G"],
        ["G", "-", "O", "-", "G"],
        ["G", "-", "-", "-", "G"],
        ["G", "G", "G", "G", "G"]
      ]
    },
    {
      "type": "compactcrafting:hollow",
      "wall": "G"
    },
    {
      "type": "compactcrafting:filled",
      "component": "G"
    }
  ],

  "catalyst": {
    "item": "gtceu:gravi_star"
  },

  "components": {
    "G": {
      "type": "compactcrafting:block",
      "block": "gtceu:neutronium_block"
    },
    "O": {
      "type": "compactcrafting:block",
      "block": "gtceu:stellarite_block"
    }
  },

  "outputs": [
    {
      "item": "gtceu:pulsar",
      "Count": 1
    }
  ]
})

;['vaelkethrite', 'surreal-pyrathene'].forEach(name => {
event.recipes.gtceu.bender(`bend_${name}_plate_to_foil`)
.itemInputs(`gtceu:${name}_plate`)
.itemOutputs(`4x gtceu:${name}_foil`)
.circuit(1)
.duration(200)
.EUt(24)

event.shaped(`2x gtceu:${name}_foil`, [
'HP'
], {
H: `#gtceu:tools/crafting_hammers`,
P: `gtceu:${name}_plate`
})
})
const fluidAmounts = { water: 450, distilled_water: 337, lubricant: 112 }
const durations = { water: 4480, distilled_water: 3360, lubricant: 2240 }
const gabagooltyoes = {
    plate: 144,
    rod: 72,
    nugget: 16,
    gear: 576,
    block: 1296
}
;['allthemodium', 'vibranium', 'unobtainium'].forEach(bahhumbug => {
GTM.bender(`bend_${bahhumbug}_to_plate`)
.itemInputs(`allthemodium:${bahhumbug}_ingot`)
.itemOutputs(`allthemodium:${bahhumbug}_plate`)
.duration(600)
.EUt(24)
.circuit(1)

GTM.extruder(`extrude_${bahhumbug}_to_plate`)
.itemInputs(`allthemodium:${bahhumbug}_ingot`)
.notConsumable('gtceu:plate_extruder_mold')
.itemOutputs(`allthemodium:${bahhumbug}_plate`)
.duration(600)
.EUt(384)

GTM.forge_hammer(`hammer_${bahhumbug}_to_plate`)
.itemInputs(`3x allthemodium:${bahhumbug}_ingot`)
.itemOutputs(`2x allthemodium:${bahhumbug}_plate`)
.duration(600)
.EUt(16)
;['lubricant', 'distilled_water', 'water'].forEach(type => {
  const suffix = type === 'lubricant' ? '' : `_${type}`
  const fluidId = type === 'water' ? `water ${fluidAmounts[type]}` : `gtceu:${type} ${fluidAmounts[type]}`
  GTM.cutter(`cut_${bahhumbug}_block_to_plate${suffix}`)
    .itemInputs(`allthemodium:${bahhumbug}_block`)
    .inputFluids(fluidId)
    .itemOutputs(`allthemodium:${bahhumbug}_plate`)
    .duration(durations[type])
})

GTM.lathe(`lathe_${bahhumbug}_to_rod`)
.itemInputs(`allthemodium:${bahhumbug}_ingot`)
.itemOutputs(`2x allthemodium:${bahhumbug}_rod`)
.duration(600)
.EUt(24)

event.shaped(`allthemodium:${bahhumbug}_plate`, [
'H',
'P',
'P'
], {
H: '#forge:tools/hammers',
P: `allthemodium:${bahhumbug}_ingot`
})

event.shaped(`allthemodium:${bahhumbug}_rod`, [
'F ',
' P',
], {
F: '#forge:tools/files',
P: `allthemodium:${bahhumbug}_ingot`
})

event.shaped(`allthemodium:${bahhumbug}_sword`, [
'NPN',
' P ',
' R '
], {
N: `allthemodium:${bahhumbug}_nugget`,
P: `allthemodium:${bahhumbug}_plate`,
R: `allthemodium:${bahhumbug}_rod`
})

event.shaped(`allthemodium:${bahhumbug}_axe`, [
'PPN',
'PR ',
' R '
], {
N: `allthemodium:${bahhumbug}_nugget`,
P: `allthemodium:${bahhumbug}_plate`,
R: `allthemodium:${bahhumbug}_rod`
})

event.shaped(`allthemodium:${bahhumbug}_pickaxe`, [
'PPP',
'NRN',
' R '
], {
N: `allthemodium:${bahhumbug}_nugget`,
P: `allthemodium:${bahhumbug}_plate`,
R: `allthemodium:${bahhumbug}_rod`
})

event.shaped(`allthemodium:${bahhumbug}_shovel`, [
' P ',
'NRN',
' R '
], {
N: `allthemodium:${bahhumbug}_nugget`,
P: `allthemodium:${bahhumbug}_plate`,
R: `allthemodium:${bahhumbug}_rod`
})
event.shaped(`allthemodium:${bahhumbug}_hoe`, [
'PPN',
' R ',
' R '
], {
N: `allthemodium:${bahhumbug}_nugget`,
P: `allthemodium:${bahhumbug}_plate`,
R: `allthemodium:${bahhumbug}_rod`
})

event.shaped(`allthemodium:${bahhumbug}_gear`, [
'RPR',
'PWP',
'RPR'
], {
R: `allthemodium:${bahhumbug}_rod`,
P: `allthemodium:${bahhumbug}_plate`,
W: '#gtceu:tools/crafting_wrenches'
})
Object.entries(gabagooltyoes).forEach(([type, amount]) => {
    GTM.extractor(`extract_${bahhumbug}_${type}`)
        .itemInputs(`allthemodium:${bahhumbug}_${type}`)
        .outputFluids(`allthemodium:molten_${bahhumbug} ${amount}`)
        .duration(Math.floor(200 * (amount / 144)))
        .EUt(144)

    if (type !== "rod") {
        GTM.fluid_solidifier(`solidify_${bahhumbug}_to_${type}`)
            .notConsumable(`gtceu:${type}_casting_mold`)
            .inputFluids(`allthemodium:molten_${bahhumbug} ${amount}`)
            .itemOutputs(`allthemodium:${bahhumbug}_${type}`)
            .duration(Math.floor(20 * (amount / 144)))
            .EUt(7)

        if (type === "nugget") {
            GTM.macerator(`macerate_${bahhumbug}_${type}`)
                .itemInputs(`allthemodium:${bahhumbug}_${type}`)
                .chancedOutput(`allthemodium:${bahhumbug}_dust`, 1111, 0)
                .duration(Math.floor(280 * (amount / 144)))
                .EUt(7)
        } else {
            GTM.macerator(`macerate_${bahhumbug}_${type}`)
                .itemInputs(`allthemodium:${bahhumbug}_${type}`)
                .itemOutputs(`${Math.floor(amount / 144)}x allthemodium:${bahhumbug}_dust`)
                .duration(Math.floor(280 * (amount / 144)))
                .EUt(7)
        }
    }
})

GTM.macerator(`macerate_${bahhumbug}_rod`)
    .itemInputs(`allthemodium:${bahhumbug}_rod`)
    .chancedOutput(`allthemodium:${bahhumbug}_dust`, 5000, 0)
    .duration(140)
    .EUt(7)
})

;['vibranium_allthemodium_alloy', 'unobtainium_allthemodium_alloy', 'unobtainium_vibranium_alloy']















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































})

const armorparts = ["helmet", "chestplate", "leggings", "boots"]
const armorSets = {
    "AllTheModium": armorparts.map(p => `allthewizardgear:allthemodium_mage_${p}`),
    "Vibranium": armorparts.map(p => `allthewizardgear:vibranium_mage_${p}`),
    "Unobtainium": armorparts.map(p => `allthewizardgear:unobtainium_mage_${p}`)
}
const flySets = ["AllTheModium", "Vibranium"]

PlayerEvents.tick(event => {
    const { player, player: { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } } = event
    if (player.age % 20 != 0) return

    const slots = [headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem]
    let playerArmorSet
    Object.keys(armorSets).forEach(set => {
        if (playerArmorSet) return
        for (let i = 0; i < armorparts.length; i++) {
            if (slots[i].id != armorSets[set][i]) break
            if (i == armorparts.length - 1) playerArmorSet = set
        }
    })

    const ArmorSetMayfly = flySets.includes(playerArmorSet) || armorSets.Unobtainium.some((armor, i) => armor == slots[i].id)

    if (player.isCreative() || player.isSpectator()) return

    if (ArmorSetMayfly) {
        player.abilities.mayfly = true
        player.onUpdateAbilities()
    } else {
        player.abilities.mayfly = false
        player.abilities.flying = false
        player.onUpdateAbilities()
    }

})