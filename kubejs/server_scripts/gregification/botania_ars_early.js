ServerEvents.recipes(event => {
    event.remove({ output: "ars_nouveau:imbuement_chamber" })

    event.remove({ output: "ars_nouveau:enchanting_apparatus" }) // Probably save for LV/MV

    event.remove({ mod: "ars_nouveau", output: "gtceu:source_gem"})

    event.recipes.ars_nouveau.imbuement("gtceu:opal_gem", "gtceu:source_gem", 500, [])
    
    event.recipes.ars_nouveau.imbuement("minecraft:amethyst_shard", "gtceu:source_gem", 500, ["gtceu:condensed_mana_dust", "ars_nouveau:manipulation_essence", "ars_nouveau:conjuration_essence"])


    event.recipes.ars_nouveau.imbuement("botania:livingrock", "botania:auric_livingrock", 2500, ["gtceu:gold_foil", 'gtceu:mana_dust', 'gtceu:source_gem'])

    event.remove({ output: "botania:pure_daisy" })
    event.recipes.botania.petal_apothecary("botania:pure_daisy", ["4x #botania:petals/white"], "gtceu:source_gem")


    event.remove({ id: "ars_nouveau:arcane_pedestal" })
    event.recipes.botania.pure_daisy("ars_nouveau:arcane_pedestal", "create:depot")


    event.replaceInput({ output: "ars_nouveau:air_essence" }, "ars_nouveau:wilden_wing", "minecraft:glass_bottle")
    event.replaceInput({ output: "ars_nouveau:manipulation_essence" }, "minecraft:stone_button", "#gtceu:circuits/ulv")
    event.replaceInput({ output: "ars_nouveau:conjuration_essence" }, "ars_nouveau:wilden_horn", "minecraft:ender_pearl")


    event.recipes.ars_nouveau.imbuement("minecraft:copper_ingot",
        "gtceu:source_attuned_copper_ingot",
        8000,
        ["ars_nouveau:conjuration_essence", "gtceu:source_gem", "#gtceu:circuits/ulv"]
    )
    event.recipes.ars_nouveau.imbuement("gtceu:annealed_copper_ingot",
        "gtceu:source_attuned_copper_ingot",
        2000,
        ["ars_nouveau:conjuration_essence", "gtceu:source_gem", "#gtceu:circuits/ulv"]
    )

    event.remove({ output: "botania:mana_pool" })
    event.remove({ output: "botania:diluted_pool"})

    event.recipes.ars_nouveau.imbuement("gtceu:resin_circuit_board",
        "gtceu:resin_printed_circuit_board",
        1000,
        ["gtceu:source_gem", '#gtceu:circuits/ulv', 'gtceu:fine_source_attuned_copper_wire', 'gtceu:small_condensed_mana_dust']
    )

    event.shaped('botania:mana_pool', 
    [
        'E A',
        'LDL',
        'LLL'
    ], {
    E: "ars_nouveau:earth_essence",
    A: "ars_nouveau:air_essence",
    L: "botania:auric_livingrock",
    D: "gtceu:condensed_mana_dust"
    })

    event.shapeless(
    '2x botania:diluted_pool',
    [
        'botania:mana_pool'
    ])

    event.shapeless(
    'botania:mana_pool',
    [
        '2x botania:diluted_pool'
    ])

    thecarbonboys.forEach(input => {
        event.custom({
            "type": "ae2:transform",
            "circumstance": {
                "type": "fluid",
                "tag": "blasmatech:mana"
            },
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": "gtceu:small_source_dust"
                }
            ],
            "result": {
                "count": 1,
                "item": "gtceu:elementally_purified_carbon_dust"
            }
        })

        event.recipes.botania.mana_infusion('gtceu:elementally_purified_carbon_dust', input, 300) // 1/10th of a manasteel ingot, really dirt cheap
    })

    event.replaceInput({ output: "botania:manasteel_ingot" }, "minecraft:iron_ingot", "gtceu:nexus_steel_ingot")
    event.replaceOutput({ id: "botania:mana_infusion/manasteel"}, "botania:manasteel_ingot", "gtceu:manasteel_ingot")

    event.replaceInput({ output: "botania:manasteel_block" }, "minecraft:iron_block", "gtceu:nexus_steel_block")
    event.replaceOutput({ id: "botania:mana_infusion/manasteel_block"}, "botania:manasteel_block", "gtceu:manasteel_block")

    event.shaped('botania:mana_ring', [
    'TM ',
    'M M',
    ' M '
], {
T: 'botania:mana_tablet',
M: 'gtceu:manasteel_ingot'
})

 event.recipes.botania.terra_plate("botania:terrasteel_ingot", ["gtceu:manasteel_ingot", "botania:mana_pearl", "botania:mana_diamond"], 5000000)
 

event.remove({id: 'botania:terra_plate/terrasteel_ingot'})
event.shaped('ars_nouveau:imbuement_chamber', [
'PGP',
'PSP',
'LGL'
], {
P: 'ars_nouveau:archwood_planks',
G: 'gtceu:gold_plate',
S: 'gtceu:small_gold_gear',
L: '#forge:logs/archwood'
})


})