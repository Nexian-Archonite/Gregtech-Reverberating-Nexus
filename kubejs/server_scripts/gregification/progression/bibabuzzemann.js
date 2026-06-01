ServerEvents.recipes(biomanced => {
const GTM = biomanced.recipes.gtceu

// [egg, guaranteed outputs [[item, count]], chanced outputs [[item, chance]]]
const bloodSimulations = [
    {
        id: 'axolotl', egg: 'minecraft:axolotl_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 7500]]
    },
    {
        id: 'bat', egg: 'minecraft:bat_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_fang', 5000], ['biomancy:mob_sinew', 2500], ['biomancy:mob_claw', 6000]]
    },
    {
        id: 'bee', egg: 'minecraft:bee_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:toxin_gland', 3333]]
    },
    {
        id: 'blaze', egg: 'minecraft:blaze_spawn_egg',
        guaranteed: [['biomancy:volatile_gland', 2]],
        chanced: []
    },
    {
        id: 'camel', egg: 'minecraft:camel_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 3], ['biomancy:mob_gland', 1]],
        chanced: []
    },
    {
        id: 'cat', egg: 'minecraft:cat_spawn_egg',
        guaranteed: [['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_fang', 3000], ['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'cave_spider', egg: 'minecraft:cave_spider_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:toxin_gland', 3333]]
    },
    {
        id: 'chicken', egg: 'minecraft:chicken_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 7500]]
    },
    {
        id: 'cod', egg: 'minecraft:cod_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'cow', egg: 'minecraft:cow_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_gland', 7000]]
    },
    {
        id: 'creeper', egg: 'minecraft:creeper_spawn_egg',
        guaranteed: [['biomancy:volatile_gland', 2]],
        chanced: []
    },
    {
        id: 'dolphin', egg: 'minecraft:dolphin_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_gland', 1000]]
    },
    {
        id: 'donkey', egg: 'minecraft:donkey_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'drowned', egg: 'minecraft:drowned_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'elder_guardian', egg: 'minecraft:elder_guardian_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 3]],
        chanced: [['biomancy:mob_gland', 7500]]
    },
    {
        id: 'enderman', egg: 'minecraft:enderman_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 2]],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'endermite', egg: 'minecraft:endermite_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 5000]]
    },
    {
        id: 'evoker', egg: 'minecraft:evoker_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 2]],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'fox', egg: 'minecraft:fox_spawn_egg',
        guaranteed: [['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_fang', 3000], ['biomancy:mob_sinew', 6500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'frog', egg: 'minecraft:frog_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'ghast', egg: 'minecraft:ghast_spawn_egg',
        guaranteed: [['biomancy:volatile_gland', 8]],
        chanced: []
    },
    {
        id: 'glow_squid', egg: 'minecraft:glow_squid_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'goat', egg: 'minecraft:goat_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'guardian', egg: 'minecraft:guardian_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'hoglin', egg: 'minecraft:hoglin_spawn_egg',
        guaranteed: [['biomancy:mob_fang', 3]],
        chanced: [['biomancy:mob_sinew', 3000], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'horse', egg: 'minecraft:horse_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'llama', egg: 'minecraft:llama_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'mooshroom', egg: 'minecraft:mooshroom_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'mule', egg: 'minecraft:mule_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: []
    },
    {
        id: 'ocelot', egg: 'minecraft:ocelot_spawn_egg',
        guaranteed: [['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_fang', 3000], ['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'panda', egg: 'minecraft:panda_spawn_egg',
        guaranteed: [['biomancy:mob_fang', 3], ['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_sinew', 6500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'parrot', egg: 'minecraft:parrot_spawn_egg',
        guaranteed: [['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_sinew', 8500]]
    },
    {
        id: 'pig', egg: 'minecraft:pig_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'piglin', egg: 'minecraft:piglin_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'piglin_brute', egg: 'minecraft:piglin_brute_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'pillager', egg: 'minecraft:pillager_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'polar_bear', egg: 'minecraft:polar_bear_spawn_egg',
        guaranteed: [['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_fang', 3000], ['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'pufferfish', egg: 'minecraft:pufferfish_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:toxin_gland', 3333]]
    },
    {
        id: 'rabbit', egg: 'minecraft:rabbit_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'ravager', egg: 'minecraft:ravager_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 2], ['biomancy:mob_claw', 1]],
        chanced: [['biomancy:mob_sinew', 5000], ['biomancy:mob_gland', 8000]]
    },
    {
        id: 'salmon', egg: 'minecraft:salmon_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'sheep', egg: 'minecraft:sheep_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'silverfish', egg: 'minecraft:silverfish_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'skeleton', egg: 'minecraft:skeleton_spawn_egg',
        guaranteed: [['biomancy:mob_marrow', 3]],
        chanced: []
    },
    {
        id: 'skeleton_horse', egg: 'minecraft:skeleton_horse_spawn_egg',
        guaranteed: [['biomancy:mob_marrow', 3]],
        chanced: []
    },
    {
        id: 'sniffer', egg: 'minecraft:sniffer_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'spider', egg: 'minecraft:spider_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'squid', egg: 'minecraft:squid_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'stray', egg: 'minecraft:stray_spawn_egg',
        guaranteed: [['biomancy:mob_marrow', 3]],
        chanced: []
    },
    {
        id: 'strider', egg: 'minecraft:strider_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 3]],
        chanced: []
    },
    {
        id: 'tropical_fish', egg: 'minecraft:tropical_fish_spawn_egg',
        guaranteed: [],
        chanced: [['biomancy:mob_sinew', 6500]]
    },
    {
        id: 'turtle', egg: 'minecraft:turtle_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'villager', egg: 'minecraft:villager_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'vindicator', egg: 'minecraft:vindicator_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'warden', egg: 'minecraft:warden_spawn_egg',
        guaranteed: [['biomancy:mob_marrow', 4]],
        chanced: []
    },
    {
        id: 'witch', egg: 'minecraft:witch_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'wither_skeleton', egg: 'minecraft:wither_skeleton_spawn_egg',
        guaranteed: [['biomancy:withered_mob_marrow', 3]],
        chanced: []
    },
    {
        id: 'wolf', egg: 'minecraft:wolf_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
    {
        id: 'zoglin', egg: 'minecraft:zoglin_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1], ['biomancy:mob_fang', 3]],
        chanced: [['biomancy:mob_sinew', 2500]]
    },
    {
        id: 'zombified_piglin', egg: 'minecraft:zombified_piglin_spawn_egg',
        guaranteed: [['biomancy:mob_sinew', 1]],
        chanced: [['biomancy:mob_sinew', 2500], ['biomancy:mob_gland', 1000]]
    },
]

const vanillaSimulations = [
    {
        id: 'allay', egg: 'minecraft:allay_spawn_egg',
        guaranteed: [['minecraft:glowstone_dust', 1]],
        chanced: [['minecraft:glowstone_dust', 2500]]
    },
    {
        id: 'axolotl', egg: 'minecraft:axolotl_spawn_egg',
        guaranteed: [['minecraft:tropical_fish', 1]],
        chanced: [['minecraft:tropical_fish', 2500]]
    },
    {
        id: 'blaze', egg: 'minecraft:blaze_spawn_egg',
        guaranteed: [['minecraft:blaze_rod', 1]],
        chanced: [['minecraft:blaze_rod', 2500]]
    },
    {
        id: 'cave_spider', egg: 'minecraft:cave_spider_spawn_egg',
        guaranteed: [['minecraft:string', 1], ['minecraft:spider_eye', 1]],
        chanced: [['minecraft:string', 2500], ['minecraft:spider_eye', 2500]]
    },
    {
        id: 'chicken', egg: 'minecraft:chicken_spawn_egg',
        guaranteed: [['minecraft:feather', 1], ['minecraft:chicken', 1]],
        chanced: [['minecraft:feather', 2500], ['minecraft:chicken', 2500]]
    },
    {
        id: 'cod', egg: 'minecraft:cod_spawn_egg',
        guaranteed: [['minecraft:cod', 1], ['minecraft:bone_meal', 1]],
        chanced: [['minecraft:cod', 2500], ['minecraft:bone_meal', 2500]]
    },
    {
        id: 'cow', egg: 'minecraft:cow_spawn_egg',
        guaranteed: [['minecraft:leather', 1], ['minecraft:beef', 1]],
        chanced: [['minecraft:leather', 2500], ['minecraft:beef', 2500]]
    },
    {
        id: 'creeper', egg: 'minecraft:creeper_spawn_egg',
        guaranteed: [['minecraft:gunpowder', 1]],
        chanced: [['minecraft:gunpowder', 2500]]
    },
    {
        id: 'dolphin', egg: 'minecraft:dolphin_spawn_egg',
        guaranteed: [['minecraft:cod', 1]],
        chanced: [['minecraft:cod', 2500]]
    },
    {
        id: 'donkey', egg: 'minecraft:donkey_spawn_egg',
        guaranteed: [['minecraft:leather', 1]],
        chanced: [['minecraft:leather', 2500]]
    },
    {
        id: 'drowned', egg: 'minecraft:drowned_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1], ['minecraft:copper_ingot', 1], ['minecraft:gold_ingot', 1]],
        chanced: [['minecraft:rotten_flesh', 2500], ['minecraft:copper_ingot', 2500], ['minecraft:gold_ingot', 2500]]
    },
    {
        id: 'elder_guardian', egg: 'minecraft:elder_guardian_spawn_egg',
        guaranteed: [['minecraft:prismarine_shard', 1], ['minecraft:prismarine_crystals', 1], ['minecraft:cod', 1], ['minecraft:sponge', 1]],
        chanced: [['minecraft:prismarine_shard', 2500], ['minecraft:prismarine_crystals', 2500], ['minecraft:cod', 2500], ['minecraft:sponge', 2500]]
    },
    {
        id: 'enderman', egg: 'minecraft:enderman_spawn_egg',
        guaranteed: [['minecraft:ender_pearl', 1]],
        chanced: [['minecraft:ender_pearl', 2500]]
    },
    {
        id: 'evoker', egg: 'minecraft:evoker_spawn_egg',
        guaranteed: [['minecraft:totem_of_undying', 1], ['minecraft:emerald', 1]],
        chanced: [['minecraft:totem_of_undying', 2500], ['minecraft:emerald', 2500]]
    },
    {
        id: 'frog', egg: 'minecraft:frog_spawn_egg',
        guaranteed: [['minecraft:slime_ball', 1]],
        chanced: [['minecraft:slime_ball', 2500]]
    },
    {
        id: 'ghast', egg: 'minecraft:ghast_spawn_egg',
        guaranteed: [['minecraft:ghast_tear', 1], ['minecraft:gunpowder', 1]],
        chanced: [['minecraft:ghast_tear', 2500], ['minecraft:gunpowder', 2500]]
    },
    {
        id: 'glow_squid', egg: 'minecraft:glow_squid_spawn_egg',
        guaranteed: [['minecraft:glow_ink_sac', 1]],
        chanced: [['minecraft:glow_ink_sac', 2500]]
    },
    {
        id: 'goat', egg: 'minecraft:goat_spawn_egg',
        guaranteed: [['minecraft:goat_horn', 1]],
        chanced: [['minecraft:goat_horn', 2500]]
    },
    {
        id: 'guardian', egg: 'minecraft:guardian_spawn_egg',
        guaranteed: [['minecraft:prismarine_shard', 1], ['minecraft:prismarine_crystals', 1], ['minecraft:cod', 1]],
        chanced: [['minecraft:prismarine_shard', 2500], ['minecraft:prismarine_crystals', 2500], ['minecraft:cod', 2500]]
    },
    {
        id: 'hoglin', egg: 'minecraft:hoglin_spawn_egg',
        guaranteed: [['minecraft:porkchop', 1], ['minecraft:leather', 1]],
        chanced: [['minecraft:porkchop', 2500], ['minecraft:leather', 2500]]
    },
    {
        id: 'horse', egg: 'minecraft:horse_spawn_egg',
        guaranteed: [['minecraft:leather', 1]],
        chanced: [['minecraft:leather', 2500]]
    },
    {
        id: 'husk', egg: 'minecraft:husk_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1], ['minecraft:iron_ingot', 1]],
        chanced: [['minecraft:rotten_flesh', 2500], ['minecraft:iron_ingot', 2500]]
    },
    {
        id: 'iron_golem', egg: 'minecraft:iron_golem_spawn_egg',
        guaranteed: [['minecraft:iron_ingot', 1], ['minecraft:poppy', 1]],
        chanced: [['minecraft:iron_ingot', 2500], ['minecraft:poppy', 2500]]
    },
    {
        id: 'llama', egg: 'minecraft:llama_spawn_egg',
        guaranteed: [['minecraft:leather', 1]],
        chanced: [['minecraft:leather', 2500]]
    },
    {
        id: 'magma_cube', egg: 'minecraft:magma_cube_spawn_egg',
        guaranteed: [['minecraft:magma_cream', 1]],
        chanced: [['minecraft:magma_cream', 2500]]
    },
    {
        id: 'mooshroom', egg: 'minecraft:mooshroom_spawn_egg',
        guaranteed: [['minecraft:leather', 1], ['minecraft:beef', 1]],
        chanced: [['minecraft:leather', 2500], ['minecraft:beef', 2500]]
    },
    {
        id: 'mule', egg: 'minecraft:mule_spawn_egg',
        guaranteed: [['minecraft:leather', 1]],
        chanced: [['minecraft:leather', 2500]]
    },
    {
        id: 'panda', egg: 'minecraft:panda_spawn_egg',
        guaranteed: [['minecraft:bamboo', 1], ['minecraft:slime_ball', 1]],
        chanced: [['minecraft:bamboo', 2500], ['minecraft:slime_ball', 2500]]
    },
    {
        id: 'parrot', egg: 'minecraft:parrot_spawn_egg',
        guaranteed: [['minecraft:feather', 1]],
        chanced: [['minecraft:feather', 2500]]
    },
    {
        id: 'phantom', egg: 'minecraft:phantom_spawn_egg',
        guaranteed: [['minecraft:phantom_membrane', 1]],
        chanced: [['minecraft:phantom_membrane', 2500]]
    },
    {
        id: 'pig', egg: 'minecraft:pig_spawn_egg',
        guaranteed: [['minecraft:porkchop', 1]],
        chanced: [['minecraft:porkchop', 2500]]
    },
    {
        id: 'piglin', egg: 'minecraft:piglin_spawn_egg',
        guaranteed: [['minecraft:gold_ingot', 1], ['minecraft:gold_nugget', 1]],
        chanced: [['minecraft:gold_ingot', 2500], ['minecraft:gold_nugget', 2500]]
    },
    {
        id: 'piglin_brute', egg: 'minecraft:piglin_brute_spawn_egg',
        guaranteed: [['minecraft:gold_ingot', 1], ['minecraft:gold_nugget', 1]],
        chanced: [['minecraft:gold_ingot', 2500], ['minecraft:gold_nugget', 2500]]
    },
    {
        id: 'pillager', egg: 'minecraft:pillager_spawn_egg',
        guaranteed: [['minecraft:arrow', 1], ['minecraft:emerald', 1]],
        chanced: [['minecraft:arrow', 2500], ['minecraft:emerald', 2500]]
    },
    {
        id: 'polar_bear', egg: 'minecraft:polar_bear_spawn_egg',
        guaranteed: [['minecraft:cod', 1], ['minecraft:salmon', 1]],
        chanced: [['minecraft:cod', 2500], ['minecraft:salmon', 2500]]
    },
    {
        id: 'pufferfish', egg: 'minecraft:pufferfish_spawn_egg',
        guaranteed: [['minecraft:pufferfish', 1], ['minecraft:bone_meal', 1]],
        chanced: [['minecraft:pufferfish', 2500], ['minecraft:bone_meal', 2500]]
    },
    {
        id: 'rabbit', egg: 'minecraft:rabbit_spawn_egg',
        guaranteed: [['minecraft:rabbit', 1], ['minecraft:rabbit_hide', 1], ['minecraft:rabbit_foot', 1]],
        chanced: [['minecraft:rabbit', 2500], ['minecraft:rabbit_hide', 2500], ['minecraft:rabbit_foot', 2500]]
    },
    {
        id: 'ravager', egg: 'minecraft:ravager_spawn_egg',
        guaranteed: [['minecraft:saddle', 1]],
        chanced: [['minecraft:saddle', 2500]]
    },
    {
        id: 'salmon', egg: 'minecraft:salmon_spawn_egg',
        guaranteed: [['minecraft:salmon', 1], ['minecraft:bone_meal', 1]],
        chanced: [['minecraft:salmon', 2500], ['minecraft:bone_meal', 2500]]
    },
    {
        id: 'sheep', egg: 'minecraft:sheep_spawn_egg',
        guaranteed: [['minecraft:mutton', 1], ['minecraft:white_wool', 1]],
        chanced: [['minecraft:mutton', 2500], ['minecraft:white_wool', 2500]]
    },
    {
        id: 'shulker', egg: 'minecraft:shulker_spawn_egg',
        guaranteed: [['minecraft:shulker_shell', 1]],
        chanced: [['minecraft:shulker_shell', 2500]]
    },
    {
        id: 'skeleton', egg: 'minecraft:skeleton_spawn_egg',
        guaranteed: [['minecraft:bone', 1], ['minecraft:arrow', 1]],
        chanced: [['minecraft:bone', 2500], ['minecraft:arrow', 2500]]
    },
    {
        id: 'slime', egg: 'minecraft:slime_spawn_egg',
        guaranteed: [['minecraft:slime_ball', 1]],
        chanced: [['minecraft:slime_ball', 2500]]
    },
    {
        id: 'sniffer', egg: 'minecraft:sniffer_spawn_egg',
        guaranteed: [['minecraft:moss_block', 1]],
        chanced: [['minecraft:moss_block', 2500]]
    },
    {
        id: 'spider', egg: 'minecraft:spider_spawn_egg',
        guaranteed: [['minecraft:string', 1], ['minecraft:spider_eye', 1]],
        chanced: [['minecraft:string', 2500], ['minecraft:spider_eye', 2500]]
    },
    {
        id: 'squid', egg: 'minecraft:squid_spawn_egg',
        guaranteed: [['minecraft:ink_sac', 1]],
        chanced: [['minecraft:ink_sac', 2500]]
    },
    {
        id: 'stray', egg: 'minecraft:stray_spawn_egg',
        guaranteed: [['minecraft:bone', 1], ['minecraft:arrow', 1]],
        chanced: [['minecraft:bone', 2500], ['minecraft:arrow', 2500]]
    },
    {
        id: 'strider', egg: 'minecraft:strider_spawn_egg',
        guaranteed: [['minecraft:string', 1]],
        chanced: [['minecraft:string', 2500]]
    },
    {
        id: 'trader_llama', egg: 'minecraft:trader_llama_spawn_egg',
        guaranteed: [['minecraft:leather', 1]],
        chanced: [['minecraft:leather', 2500]]
    },
    {
        id: 'tropical_fish', egg: 'minecraft:tropical_fish_spawn_egg',
        guaranteed: [['minecraft:tropical_fish', 1], ['minecraft:bone_meal', 1]],
        chanced: [['minecraft:tropical_fish', 2500], ['minecraft:bone_meal', 2500]]
    },
    {
        id: 'turtle', egg: 'minecraft:turtle_spawn_egg',
        guaranteed: [['minecraft:seagrass', 1], ['minecraft:scute', 1]],
        chanced: [['minecraft:seagrass', 2500], ['minecraft:scute', 2500]]
    },
    {
        id: 'vindicator', egg: 'minecraft:vindicator_spawn_egg',
        guaranteed: [['minecraft:emerald', 1]],
        chanced: [['minecraft:emerald', 2500]]
    },
    {
        id: 'warden', egg: 'minecraft:warden_spawn_egg',
        guaranteed: [['minecraft:sculk_catalyst', 1]],
        chanced: [['minecraft:sculk_catalyst', 2500]]
    },
    {
        id: 'witch', egg: 'minecraft:witch_spawn_egg',
        guaranteed: [
            ['minecraft:glowstone_dust', 1], ['minecraft:gunpowder', 1],
            ['minecraft:redstone', 1], ['minecraft:spider_eye', 1], ['minecraft:sugar', 1]
        ],
        chanced: [
            ['minecraft:glowstone_dust', 2500], ['minecraft:gunpowder', 2500],
            ['minecraft:redstone', 2500], ['minecraft:spider_eye', 2500], ['minecraft:sugar', 2500]
        ]
    },
    {
        id: 'wither_skeleton', egg: 'minecraft:wither_skeleton_spawn_egg',
        guaranteed: [['minecraft:coal', 1], ['minecraft:bone', 1], ['minecraft:wither_skeleton_skull', 1]],
        chanced: [['minecraft:coal', 2500], ['minecraft:bone', 2500], ['minecraft:wither_skeleton_skull', 2500]]
    },
    {
        id: 'zoglin', egg: 'minecraft:zoglin_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1]],
        chanced: [['minecraft:rotten_flesh', 2500]]
    },
    {
        id: 'zombie', egg: 'minecraft:zombie_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1], ['minecraft:iron_ingot', 1], ['minecraft:carrot', 1], ['minecraft:potato', 1]],
        chanced: [['minecraft:rotten_flesh', 2500], ['minecraft:iron_ingot', 2500], ['minecraft:carrot', 2500], ['minecraft:potato', 2500]]
    },
    {
        id: 'zombie_horse', egg: 'minecraft:zombie_horse_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1]],
        chanced: [['minecraft:rotten_flesh', 2500]]
    },
    {
        id: 'zombie_villager', egg: 'minecraft:zombie_villager_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1], ['minecraft:iron_ingot', 1], ['minecraft:carrot', 1], ['minecraft:potato', 1]],
        chanced: [['minecraft:rotten_flesh', 2500], ['minecraft:iron_ingot', 2500], ['minecraft:carrot', 2500], ['minecraft:potato', 2500]]
    },
    {
        id: 'zombified_piglin', egg: 'minecraft:zombified_piglin_spawn_egg',
        guaranteed: [['minecraft:rotten_flesh', 1], ['minecraft:gold_nugget', 1], ['minecraft:gold_ingot', 1]],
        chanced: [['minecraft:rotten_flesh', 2500], ['minecraft:gold_nugget', 2500], ['minecraft:gold_ingot', 2500]]
    },
]

// Blood/biomancy simulation loop
bloodSimulations.forEach(function(entry) {
    var id = entry.id
    var egg = entry.egg
    var guaranteed = entry.guaranteed
    var chanced = entry.chanced
 
    var recipe = GTM.spawn_simulator(id + '_biomancy_simulation')
        .notConsumable(egg)
        .notConsumable('biomancy:despoil_sickle')
        .perTick(true)
        .inputFluids('gtceu:artificial_blood 100')
        .perTick(false)
        .duration(200)
        .EUt(480)
 
    guaranteed.forEach(function(output) {
        recipe.itemOutputs(output[1] + 'x ' + output[0])
    })
    chanced.forEach(function(output) {
        recipe.chancedOutput(output[0], output[1], 0)
    })
})
 
// Vanilla simulation loop
vanillaSimulations.forEach(function(entry) {
    var id = entry.id
    var egg = entry.egg
    var guaranteed = entry.guaranteed
    var chanced = entry.chanced
 
    var recipe = GTM.spawn_simulator(id + '_vanilla_simulation')
        .notConsumable(egg)
        .perTick(true)
        .inputFluids('gtceu:artificial_blood 50')
        .perTick(false)
        .duration(100)
        .EUt(240)
 
    guaranteed.forEach(function(output) {
        recipe.itemOutputs(output[1] + 'x ' + output[0])
    })
    chanced.forEach(function(output) {
        recipe.chancedOutput(output[0], output[1], 0)
    })
})
})