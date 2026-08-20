if (Platform.isLoaded('tacz')) {
ServerEvents.recipes(tacz => {
const GTM = tacz.recipes.gtceu
const bulletinboard = {
    '22wmr': ['10x gtceu:brass_ingot', '2x gunpowder', 0, 100],
    '9mm': ['10x gtceu:brass_ingot', '2x gunpowder', 1, 50],
    '762x25': ['10x gtceu:brass_ingot', '2x gunpowder', 2, 45],
    '45acp': ['10x gtceu:brass_ingot', '2x gunpowder', 3, 30],

    '46x30': ['12x gtceu:brass_ingot', '2x gunpowder', 4, 48],
    '57x28': ['15x gtceu:brass_ingot', '5x lapis_lazuli', '2x gunpowder', 5, 48],

    '545x39': ['13x gtceu:brass_ingot', '3x gunpowder', 6, 45],
    '556x45': ['15x gtceu:brass_ingot', '3x gunpowder', 7, 45],
    '58x42': ['15x gtceu:brass_ingot', '3x gunpowder', 8, 40],
    '762x39': ['15x gtceu:brass_ingot', '3x gunpowder', 9, 35],

    '762x54': ['25x gtceu:brass_ingot', '4x ae2:tiny_tnt', 10, 60],
    '308': ['30x gtceu:brass_ingot', '5x ae2:tiny_tnt', 'lapis_lazuli', 11, 60],
    '792x57': ['20x gtceu:brass_ingot', '3x ae2:tiny_tnt', 12, 48],
    '68x51fury': ['15x gtceu:brass_ingot', '2x ae2:tiny_tnt', 13, 40],

    '357mag': ['25x gtceu:brass_ingot', '3x ae2:tiny_tnt', '12x gtceu:stainless_steel_nugget', 14, 48],
    '50ae': ['30x gtceu:brass_ingot', '3x ae2:tiny_tnt', '5x lapis_lazuli', '9x gtceu:stainless_steel_nugget', 15, 36],
    '500mag': ['40x gtceu:brass_ingot', '5x ae2:tiny_tnt', '5x lapis_lazuli', '8x gtceu:stainless_steel_nugget', 16, 32],
    '45_70': ['30x gtceu:brass_ingot', '3x ae2:tiny_tnt', '5x lapis_lazuli', '9x gtceu:stainless_steel_nugget', 17, 36],
    '338': ['25x gtceu:brass_ingot', '4x ae2:tiny_tnt', '4x lapis_lazuli', '4x gtceu:stainless_steel_nugget', 18, 18],
    '30_06': ['20x gtceu:brass_ingot', '3x ae2:tiny_tnt', '8x gtceu:stainless_steel_nugget', 19, 32],
    '12g': ['15x gtceu:brass_ingot', '3x ae2:tiny_tnt', '18x iron_nugget', '4x gtceu:stainless_steel_nugget', 20, 18],
    '50bmg': ['128x gtceu:brass_ingot', '10x ae2:tiny_tnt', '12x lapis_lazuli', '4x gtceu:gelled_toluene', 21, 24],
}

Object.keys(bulletinboard).forEach(function(ammoName) {
    const recipe = bulletinboard[ammoName]

    const circuit = recipe[recipe.length - 2]
    const outputAmount = recipe[recipe.length - 1]
    const inputs = recipe.slice(0, -2)

    let secondaryFluid

    if (circuit <= 3) {
        secondaryFluid = 'gtceu:rubber'
    } else if (circuit <= 9) {
        secondaryFluid = 'gtceu:polyethylene'
    } else if (circuit <= 19) {
        secondaryFluid = 'gtceu:silicone_rubber'
    } else {
        secondaryFluid = 'gtceu:styrene_butadiene_rubber'
    }

    GTM.bullet_hell(ammoName)
        .itemInputs(inputs)
        .circuit(circuit)
        .itemOutputs(Item.of(`${outputAmount}x tacz:ammo`, `{AmmoId:"tacz:${ammoName}"}`))
        .duration(50 * (1 + Math.log10(Math.max(1, circuit) * outputAmount)))
        .inputFluids(`gtceu:brass ${20 * (Math.log10(outputAmount))^0.75}`)
})

})
}