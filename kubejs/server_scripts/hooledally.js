ServerEvents.recipes(event => {

const RegexList =/^gtceu:(shaped|assembler|assembly_line)\/(ring_.*|small_gear_.*|drill_head_.*|tiny_dust_.*|plate_.*|screwdriver_.*|small_dust_.*|stick_.*|chainsaw_.*|plate_.*|nugget_.*|rotor_.*|spring_.*|foil_.*|bolt_.*|block_.*|gear_.*|fine_wire_.*|screw_.*|buzzsaw_.*|turbine_.*|wrench_.*|frame_.*|cover_.*_wire_gt_.*|(tiny|small|medium|large|huge|quadruple|nonuple)_.*_pipe|fluid_cell_.*|assemble_.*|coil_.*|scythe_.*|pickaxe_.*|shovel_.*|axe_.*|file_.*|wire_cutter_.*|_.*_hammer_.*|saw_.*|spade_.*|sword_.*|knife_.*|butchery_.*|crowbar_.*|hoe_.*|.*_wire_.*|wetware_.*)$/

const RecTyp = ["gtceu:assembler", 'gtceu:assembly_line', 'gtceu:shaped', 'crafting_shaped']

const itemTypes = [
    'rod', 'round', 'plate', 'gear', 'rotor', 'frame', 'ring', 'bolt', 'screw', 'foil',
    'tiny_fluid_pipe', 'small_fluid_pipe', 'normal_fluid_pipe', 'large_fluid_pipe', 'huge_fluid_pipe',
    'single_cable', 'single_wire', 'double_cable', 'double_wire', 'quadruple_cable', 'quadruple_wire',
    'octal_cable', 'octal_wire', 'hex_cable', 'hex_wire'
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

// recycling expansion!!!!


// I have no idea how it works, but it works, so im not touching this shit

event.replaceOutput(
    {},
    "create:zinc_ingot",
    "gtceu:zinc_ingot"
)

event.replaceOutput(
    {},
    "create:zinc_nugget",
    "gtceu:zinc_nugget"
)

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
    {id: 'gtceu:shaped/steam_miner_bronze'},
    "gtceu:bronze_normal_fluid_pipe",
    "gtceu:igneous_bronze_normal_fluid_pipe"
)

event.replaceInput(
    {id: 'gtceu:shaped/steam_miner_bronze'},
    "gtceu:small_bronze_gear",
    "gtceu:small_igneous_bronze_gear"
)

event.replaceInput(
    {id: 'steamadditions:shaped/steam2'},
    "gtceu:bronze_gear",
    "gtceu:potin_gear"
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
    {id: 'ars_nouveau:imbuement_split_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'ars_nouveau:imbuement_pierce_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'ars_nouveau:imbuement_amplify_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'arseng:source_cell_housing'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'arseng:source_cell_housing'},
    'ars_nouveau:source_block',
    'gtceu:source_block'
)

event.replaceInput(
    {id: 'ars_nouveau:starbuncle_shades'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
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
    {output: 'create:brass_sheet'},
    'create:brass_sheet',
    'gtceu:brass_plate'
)

event.replaceInput(
    {output: 'create:gold_sheet'},
    'create:gold_sheet',
    'gtceu:gold_plate'
)

event.replaceInput(
    {output: 'create:copper_sheet'},
    'create:gold_sheet',
    'gtceu:gold_plate'
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

event.replaceOutput(
    {output: 'gtceu:tiny_magnetic_nexus_steel_dust'},
    'gtceu:tiny_magnetic_nexus_steel_dust',
    'gtceu:tiny_nexus_steel_dust'
)
event.replaceOutput(
    {output: 'gtceu:small_magnetic_nexus_steel_dust'},
    'gtceu:small_magnetic_nexus_steel_dust',
    'gtceu:small_nexus_steel_dust'
)
event.replaceOutput(
    {output: 'gtceu:magnetic_nexus_steel_dust'},
    'gtceu:magnetic_nexus_steel_dust',
    'gtceu:nexus_steel_dust'
)

event.replaceOutput(
    {output: `gtceu:magnetic_nexus_steel_block`},
    `gtceu:magnetic_nexus_steel_block`,
    `gtceu:nexus_steel_block`
)

event.replaceOutput(
    {output: `gtceu:magnetic_nexus_steel_ingot`},
    `gtceu:magnetic_nexus_steel_ingot`,
    `gtceu:nexus_steel_ingot`
)

event.replaceInput(
    {mod: 'overgeared'},
    'overgeared:steel_ingot',
    'gtceu:steel_ingot'
)

event.replaceOutput(
    {mod: 'overgeared'},
    'overgeared:steel_ingot',
    'gtceu:steel_ingot'
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











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































})

