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


    event.replaceInput({ output: "ars_nouveau:air_essence" }, "ars_nouveau:wilden_wing", "minecraft:glass_bottle")
    event.replaceInput({ output: "ars_nouveau:manipulation_essence" }, "minecraft:stone_button", "#gtceu:circuits/ulv")
    event.replaceInput({ output: "ars_nouveau:conjuration_essence" }, "ars_nouveau:wilden_horn", "minecraft:ender_pearl")


    event.recipes.ars_nouveau.imbuement("minecraft:copper_ingot",
        "gtceu:source_attuned_copper_ingot",
        8000,
        ["ars_nouveau:conjuration_essence", "gtceu:source_gem", "ars_nouveau:water_essence"]
    )
    event.recipes.ars_nouveau.imbuement("gtceu:annealed_copper_ingot",
        "gtceu:source_attuned_copper_ingot",
        2000,
        ["ars_nouveau:conjuration_essence", "gtceu:source_gem", "ars_nouveau:water_essence"]
    )
    event.recipes.ars_nouveau.imbuement('irons_spellbooks:dead_king_phylactery',
        'botania:mana_pool',
        10000,
        ["botania:auric_livingrock", "ars_elemental:mark_of_mastery", "botania:auric_livingrock", "ars_elemental:mark_of_mastery", "botania:auric_livingrock", "ars_elemental:mark_of_mastery", "botania:auric_livingrock", "ars_elemental:mark_of_mastery"]
    )
    event.recipes.ars_nouveau.imbuement('gtceu:netherite_scrap',
        'allthemodium:allthemodium_ingot',
        1000,
        ["gtceu:manasteel_ingot", 'gtceu:platinum_ingot', 'ars_nouveau:fire_essence', 'ars_nouveau:earth_essence']
    )
    event.recipes.ars_nouveau.imbuement('allthemodium:allthemodium_ingot',
        'allthemodium:vibranium_ingot',
        1500,
        ["botania:terrasteel_ingot", 'gtceu:palladium_ingot', 'ars_elemental:mark_of_mastery']
    )
    event.recipes.botania.runic_altar('allthemodium:unobtainium_ingot', ['allthemodium:vibranium_ingot', 'allthemodium:allthemodium_ingot', 'botania:rune_earth', 'botania:rune_air'], 10000)

    event.recipes.ars_nouveau.imbuement('gtceu:platinum_ingot',
        'allthemodium:vibranium_allthemodium_alloy_ingot',
        3000,
        ['allthemodium:vibranium_ingot', 'allthemodium:allthemodium_ingot']
    )
    event.recipes.ars_nouveau.imbuement('gtceu:platinum_ingot',
        'allthemodium:unobtainium_allthemodium_alloy_ingot',
        3000,
        ['allthemodium:unobtainium_ingot', 'allthemodium:allthemodium_ingot']
    )
    event.recipes.ars_nouveau.imbuement('gtceu:platinum_ingot',
        'allthemodium:unobtainium_vibranium_alloy_ingot',
        3000,
        ['allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot']
    )
    ;['sword', 'axe', 'pick', 'shovel'].forEach(idekaynmore => {
        const toolName = idekaynmore === 'pick' ? 'pickaxe' : idekaynmore

        event.recipes.ars_nouveau.imbuement(
            `undergarden:utherium_${toolName}`,
            `allthemodium:alloy_${idekaynmore}`,
            5000,
            [
                `allthemodium:allthemodium_${toolName}`,
                'allthemodium:vibranium_allthemodium_alloy_ingot',
                `allthemodium:vibranium_${toolName}`,
                'allthemodium:unobtainium_vibranium_alloy_ingot',
                `allthemodium:unobtainium_${toolName}`,
                'allthemodium:unobtainium_allthemodium_alloy_ingot'
            ]
        )
    })


    event.remove({ output: "botania:mana_pool" })
    event.remove({ output: "botania:diluted_pool"})

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

    event.replaceInput({ output: "botania:manasteel_ingot" }, "minecraft:iron_ingot", "gtceu:steel_ingot")
    event.replaceOutput({ id: "botania:mana_infusion/manasteel"}, "botania:manasteel_ingot", "gtceu:manasteel_ingot")

    event.replaceInput({ output: "botania:manasteel_block" }, "minecraft:iron_block", "gtceu:steel_block")
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
 event.recipes.botania.runic_altar("gtceu:primitive_blast_furnace", ["gtceu:coke_oven", "gtceu:bronze_drum", 'irons_spellbooks:divine_soulshard', 'gtceu:lp_steam_alloy_smelter', 'gtceu:lp_steam_compressor', 'botania:terrasteel_block'], 6000).id('primitive_blast_furnace/lp')
 event.recipes.botania.runic_altar("gtceu:primitive_blast_furnace", ["gtceu:coke_oven", "gtceu:steel_drum", 'irons_spellbooks:divine_soulshard', 'gtceu:hp_steam_alloy_smelter', 'gtceu:hp_steam_compressor', 'botania:terrasteel_block'], 3000).id('primitive_blast_furnace/hp')

event.remove({id: 'botania:terra_plate/terrasteel_ingot'})


})