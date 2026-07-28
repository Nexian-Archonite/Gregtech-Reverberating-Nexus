// kubejs/server_scripts/processing_planting.js

const oreProcessableTiers = {
  PrimitiveProcessing: [
    { material: 'iron', secondary: 'nickel', tertiary: 'tin' },
    { material: 'magnetite', secondary: 'gold', tertiary: 'gold' },
    { material: 'copper', secondary: 'gold', tertiary: 'nickel' },
    { material: 'tin', secondary: 'iron', tertiary: 'zinc' },
    { material: 'sphalerite', secondary: 'gallium', tertiary: 'sulfur' },
    { material: 'galena', secondary: 'silver', tertiary: 'sulfur' },
    { material: 'stibnite', secondary: 'antimony', tertiary: 'sulfur' },
    { material: 'coal', secondary: 'carbon', tertiary: 'thorium', quaternary: 'graphite' },
    { material: 'sodalite', secondary: 'lazurite', tertiary: 'lapis', quaternary: 'kyanite' },
    { material: 'realgar', secondary: 'sulfur', tertiary: 'antimony', quaternary: 'barite' },
    { material: 'pentlandite', secondary: 'cobalt', tertiary: 'iron', quaternary: 'sulfur' },
    { material: 'silver', secondary: 'gold', tertiary: 'lead', quaternary: 'sulfur' },
    { material: 'gold', secondary: 'silver', tertiary: 'copper', quaternary: 'nickel' },
    { material: 'nexus', secondary: 'lanthanum', tertiary: 'nexus', quaternary: 'gold' },
    { material: 'condensed_mana', secondary: 'mana', tertiary: 'mana', quaternary: 'mana' },
    { material: 'extraterrestrial_resonite', secondary: 'pitchblende', tertiary: 'extraterrestrial_resonite', quaternary: 'aluminium' },
    { material: 'enstatite', secondary: 'magnesium', tertiary: 'silicon', quaternary: 'iron' },

  ],

  ElectricProcessing: [
    { material: 'diamond', secondary: 'carbon', tertiary: 'graphite', quaternary: 'graphite' },
    { material: 'emerald', secondary: 'beryllium', tertiary: 'aluminium', quaternary: 'aluminium' },
    { material: 'ruby', secondary: 'chromium', tertiary: 'red_garnet', quaternary: 'cinnabar' },
    { material: 'green_sapphire', secondary: 'aluminium', tertiary: 'sapphire', quaternary: 'almandine' },
    { material: 'sapphire', secondary: 'aluminium', tertiary: 'green_sapphire', quaternary: 'almandine' },
    { material: 'quartzite', secondary: 'certus_quartz', tertiary: 'opal', quaternary: 'barite' },
    { material: 'certus_quartz', secondary: 'quartzite', tertiary: 'opal', quaternary: 'barite' },
    { material: 'rock_salt', secondary: 'salt', tertiary: 'salt', quaternary: 'borax' },
    { material: 'saltpeter', secondary: 'salt', tertiary: 'potassium', quaternary: 'alunite' },
    { material: 'salt', secondary: 'rock_salt', tertiary: 'rock_salt', quaternary: 'borax' },
    { material: 'amethyst', secondary: 'amethyst', tertiary: 'amethyst', quaternary: 'amethyst' },
    { material: 'sulfur', secondary: 'sulfur', tertiary: 'sulfur', quaternary: 'sulfur' },
    { material: 'lapis', secondary: 'lazurite', tertiary: 'sodalite', quaternary: 'pyrite' },
    { material: 'nether_quartz', secondary: 'quartzite', tertiary: 'quartzite', quaternary: 'quartzite' },
    { material: 'blue_topaz', secondary: 'bastnasite', tertiary: 'topaz', quaternary: 'topaz' },
    { material: 'topaz', secondary: 'bastnasite', tertiary: 'blue_topaz', quaternary: 'blue_topaz' },
    { material: 'spessartine', secondary: 'manganese', tertiary: 'red_garnet', quaternary: 'asbestos' },
    { material: 'monazite', secondary: 'thorium', tertiary: 'thorium', quaternary: 'neodymium' },
    { material: 'apatite', secondary: 'tricalcium_phosphate', tertiary: 'tricalcium_phosphate', quaternary: 'phosphate' },
    { material: 'lepidolite', secondary: 'lithium', tertiary: 'lithium', quaternary: 'caesium' },
    { material: 'red_garnet', secondary: 'spessartine', tertiary: 'pyrope', quaternary: 'almandine' },
    { material: 'yellow_garnet', secondary: 'andradite', tertiary: 'grossular', quaternary: 'uvarovite' },
    { material: 'garnet_sand', secondary: 'red_garnet', tertiary: 'yellow_garnet', quaternary: 'yellow_garnet' },
    { material: 'beryllium', secondary: 'emerald', tertiary: 'emerald', quaternary: 'beryllium' },
    { material: 'chalcopyrite', secondary: 'gold', tertiary: 'pyrite', quaternary: 'cobalt' },
    { material: 'bornite', secondary: 'gold', tertiary: 'pyrite', quaternary: 'cobalt' },
    { material: 'barite', secondary: 'pyrite', tertiary: 'pyrite', quaternary: 'chalcopyrite' },
    { material: 'cassiterite', secondary: 'tin', tertiary: 'tin', quaternary: 'bismuth' },
    { material: 'tantalite', secondary: 'manganese', tertiary: 'niobium', quaternary: 'niobium' },
    { material: 'pollucite', secondary: 'caesium', tertiary: 'aluminium', quaternary: 'aluminium' },
    { material: 'lunar_desh', secondary: 'lunar_desh', tertiary: 'lunar_desh', quaternary: 'lunar_desh' },
    { material: 'martian_ostrum', secondary: 'martian_ostrum', tertiary: 'martian_ostrum', quaternary: 'martian_ostrum' },
    { material: 'venian_calorite', secondary: 'venian_calorite', tertiary: 'venian_calorite', quaternary: 'venian_calorite' },
    { material: 'blue_zircon', secondary: 'zirconium', tertiary: 'hafnium', quaternary: 'silicon' },  
    { material: 'xenotime', secondary: 'dysprosium', tertiary: 'hafnium', quaternary: 'hafnium' },

  ],

  AdvancedProcessing: [
    { material: 'pyrochlore', secondary: 'apatite', tertiary: 'apatite', quaternary: 'calcium' },
    { material: 'pyrolusite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'tantalite' },
    { material: 'magnesite', secondary: 'magnesium', tertiary: 'magnesium', quaternary: 'cobaltite' },
    { material: 'cooperite', secondary: 'palladium', tertiary: 'nickel', quaternary: 'nickel' },
    { material: 'bastnasite', secondary: 'neodymium', tertiary: 'neodymium', quaternary: 'rare_earth' },
    { material: 'tungstate', secondary: 'silver', tertiary: 'manganese', quaternary: 'lithium' },
    { material: 'bauxite', secondary: 'gallium', tertiary: 'grossular', quaternary: 'rutile' },
    { material: 'pitchblende', secondary: 'thorium', tertiary: 'thorium', quaternary: 'uraninite' },
    { material: 'ilmenite', secondary: 'iron', tertiary: 'iron', quaternary: 'rutile' },
    { material: 'molybdenite', secondary: 'molybdenum', tertiary: 'sulfur', quaternary: 'molybdenum' },
    { material: 'cobaltite', secondary: 'cobalt', tertiary: 'sulfur', quaternary: 'cobalt' },
    { material: 'chromite', secondary: 'iron', tertiary: 'magnesium', quaternary: 'iron' },
    { material: 'scheelite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'molybdenum' },
    { material: 'naquadah', secondary: 'barium', tertiary: 'sulfur', quaternary: 'enriched_naquadah', quinary: 'enriched_naquadah' },
    { material: 'jarosite', secondary: 'iron', tertiary: 'sulfur', quaternary: 'potassium' },
    { material: 'fluorapatite', secondary: 'calcium', tertiary: 'fluorine', quaternary: 'phosphate' },
    { material: 'rhodite', secondary: 'rhodium', tertiary: 'iridium', quaternary: 'platinum' },
    { material: 'dilithium', secondary: 'lithium', tertiary: 'helium_3', quaternary: 'lithium' },
    { material: 'phenakite', secondary: 'beryllium', tertiary: 'silicon', quaternary: 'beryllium' },
    { material: 'kernite', secondary: 'boron', tertiary: 'sodium', quaternary: 'boron' },
    { material: 'wustite', secondary: 'iron', tertiary: 'iron', quaternary: 'manganese' },
    { material: 'ulvospinel', secondary: 'titanium', tertiary: 'iron', quaternary: 'titanium' },
    { material: 'merrillite', secondary: 'calcium', tertiary: 'sodium', quaternary: 'phosphate' },
    { material: 'laurite', secondary: 'ruthenium', tertiary: 'osmium', quaternary: 'iridium' },
    { material: 'taenite', secondary: 'nickel', tertiary: 'iron', quaternary: 'platinum' },
    { material: 'roquesite', secondary: 'indium', tertiary: 'copper', quaternary: 'tin' },
    { material: 'gallite', secondary: 'gallium', tertiary: 'copper', quaternary: 'zinc' },
    { material: 'sperrylite', secondary: 'platinum', tertiary: 'palladium', quaternary: 'rhodium' },

  ],
  
  AlienProcessing: [
    { material: 'nulledryte', secondary: 'chronosite', tertiary: 'oganesson', quaternary: 'rhenium_iii_sulfate' },
    { material: 'xycrhovite', secondary: 'draconium', tertiary: 'echo', quaternary: 'dilithium' },
    { material: 'vheszcryl', secondary: 'vhaelcryite', tertiary: 'transcendentine', quaternary: 'enstatite' },
    { material: 'grothemite', secondary: 'rare_earth', tertiary: 'hafnium', quaternary: 'iron', quinary: 'potassium' },
    { material: 'krethavine', secondary: 'kraethite', tertiary: 'lanthanum', quaternary: 'titanium', quinary: 'zirconium' },
    { material: 'orvexite', secondary: 'rare_earth', tertiary: 'osmiridium', quaternary: 'plutonium', quinary: 'rhodium' },
    { material: 'phazdurite', secondary: 'transcendentine', tertiary: 'naquadria', quaternary: 'radon' },
    { material: 'vaelthorite', secondary: 'sulfur', tertiary: 'lead', quaternary: 'vanadium', quinary: 'molybdenum' },
    { material: 'sulvarite', secondary: 'bismuth', tertiary: 'gold', quaternary: 'silver', quinary: 'tellurium' },
    { material: 'kethrenite', secondary: 'copper', tertiary: 'nickel', quaternary: 'cobalt', quinary: 'chromium' },
    { material: 'vorrexinite', secondary: 'osmium', tertiary: 'iridium', quaternary: 'ruthenium', quinary: 'platinum' },
    { material: 'thermastone', secondary: 'magnesium', tertiary: 'chromium', quaternary: 'titanium', quinary: 'vanadium' },
    { material: 'cindrax', secondary: 'silicon', tertiary: 'tin', quaternary: 'aluminium', quinary: 'gallium' },
    { material: 'aetheric_scumite', secondary: 'niobium', tertiary: 'palladium', quaternary: 'rhodium', quinary: 'hafnium' },
    { material: 'pyrathite', secondary: 'titanium', tertiary: 'vanadium', quaternary: 'tungsten', quinary: 'molybdenum' }
  ]
}

ServerEvents.recipes(function (event) {
  const GTM = event.recipes.gtceu

  // Build tier lists
  oreProcessableTiers.primitive = oreProcessableTiers.PrimitiveProcessing.slice()

  oreProcessableTiers.electric = oreProcessableTiers.primitive.concat(
    oreProcessableTiers.ElectricProcessing
  )

  oreProcessableTiers.advanced = oreProcessableTiers.electric.concat(
    oreProcessableTiers.AdvancedProcessing
  )

  oreProcessableTiers.alien = oreProcessableTiers.advanced.concat(
    oreProcessableTiers.AlienProcessing
  )

  // Primitive tier - ore_processing_plant
  oreProcessableTiers.primitive.forEach(function (ore) {
    GTM.ore_processing_plant('primitive_' + ore.material + '_ore_processing')
      .itemInputs('gtceu:crushed_' + ore.material + '_ore')
      .itemOutputs('2x gtceu:' + ore.material + '_dust')
      .chancedOutput('gtceu:' + ore.secondary + '_dust', 5000, 0)
      .chancedOutput('gtceu:' + ore.tertiary + '_dust', 2500, 0)
      .inputFluids('water 500')
      .duration(100)
      .EUt(32)
  })

  // Electric tier - electric_ore_processing_plant
  oreProcessableTiers.electric.forEach(function (ore) {
     const recipe = GTM.electric_ore_processing_plant('electric_' + ore.material + '_ore_processing')
      .itemInputs('gtceu:crushed_' + ore.material + '_ore')
      .itemOutputs('4x gtceu:' + ore.material + '_dust')
      .chancedOutput('3x gtceu:' + ore.secondary + '_dust', 6000, 0)
      .chancedOutput('2x gtceu:' + ore.tertiary + '_dust', 3500, 0)
      .inputFluids('gtceu:distilled_water 500')
      .duration(100)
      .EUt(128)
      if (ore.quaternary) {
        recipe.chancedOutput('gtceu:' + ore.quaternary + '_dust', 2500, 0)
        }
  })

  // Advanced tier - plant_ore_processing
  oreProcessableTiers.advanced.forEach(function (ore) {
    const recipe = GTM.plant_ore_processing('plant_' + ore.material + '_ore_processing')
      .itemInputs('gtceu:crushed_' + ore.material + '_ore')
      .itemOutputs('6x gtceu:' + ore.material + '_dust')
      .chancedOutput('4x gtceu:' + ore.secondary + '_dust', 7000, 0)
      .chancedOutput('3x gtceu:' + ore.tertiary + '_dust', 4500, 0)
      .inputFluids('gtceu:steam 1000')
      .duration(50)
      .EUt(2048)
    if (ore.quaternary) {
        recipe.chancedOutput('2x gtceu:' + ore.quaternary + '_dust', 3500, 0)
    }
    if (ore.quinary) {
         recipe.chancedOutput('gtceu:' + ore.quinary + '_dust', 1500, 0)
    }
    })
    oreProcessableTiers.alien.forEach(function (ore) {

      const recipe = GTM.array_ore_processing('array_' + ore.material + '_ore_processing')
    .itemInputs('gtceu:crushed_' + ore.material + '_ore')
      .itemOutputs('8x gtceu:' + ore.material + '_dust')
      .chancedOutput('6x gtceu:' + ore.secondary + '_dust', 7500, 0)
      .chancedOutput('4x gtceu:' + ore.tertiary + '_dust', 5000, 0)
      .inputFluids('gtceu:carborane_acid 100', 'gtceu:resonance_plasma 5')
      .duration(40)
      .EUt(2048)
    if (ore.quaternary) {
        recipe.chancedOutput('3x gtceu:' + ore.quaternary + '_dust', 4500, 0)
    }
    if (ore.quinary) {
         recipe.chancedOutput('2x gtceu:' + ore.quinary + '_dust', 2500, 0)
    }
    })
  




  event.shaped(Item.of('gtceu:primitive_processing_factory'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:brass_rod',
        S: 'gtceu:brass_screw',
        P: 'gtceu:brass_plate',
        B: 'gtceu:firebricks',
        F: '#forge:tools/screwdrivers'
    }).id('gtceu:shaped/primitive_ore_factory')

    event.shaped(Item.of('gtceu:ore_processing_factory'), [
        'GCG', 
        'PLP', 
        'WPW'
    ], {
        G: 'gtceu:bronze_gear',
        C: '#gtceu:circuits/lv',
        P: 'gtceu:steel_plate',
        L: 'gtceu:lv_machine_hull',
        W: 'gtceu:tin_single_cable'
    }).id('gtceu:shaped/electric_ore_factory')

  event.shaped(Item.of('gtceu:ore_processing_plant'), [
        'GCG',
        'PLP',
        'WPW'
    ], {
        G: 'gtceu:tungsten_carbide_gear',
        C: '#gtceu:circuits/iv',
        P: 'gtceu:tungsten_carbide_plate',
        L: 'gtceu:iv_machine_hull',
        W: 'gtceu:platinum_single_cable'
    }).id('gtceu:shaped/ore_processing_plant')
})
