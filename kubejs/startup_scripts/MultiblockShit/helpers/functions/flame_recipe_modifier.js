const PLASMA_TEMPS = {
    "gtceu:americium_plasma": 100,
    "gtceu:infernality_catalysm_plasma": 300
}

let MAX_PLASMA_TEMP = 0
for (let key in PLASMA_TEMPS) {
    if (PLASMA_TEMPS[key] > MAX_PLASMA_TEMP) MAX_PLASMA_TEMP = PLASMA_TEMPS[key]
}

function FLAMETemperatureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (!machine instanceof $CoilWorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine)
    }

    let recipeTemp = recipe.data.getInt("TempMK")
    let coilMaxTemp = machine.getCoilType().getCoilTemperature()
    if (recipeTemp * 1000000 > coilMaxTemp * 10000) {
        return ModifierFunction.NULL
    }

    if (recipeTemp > MAX_PLASMA_TEMP) return ModifierFunction.NULL

    return ModifierFunction.IDENTITY
}