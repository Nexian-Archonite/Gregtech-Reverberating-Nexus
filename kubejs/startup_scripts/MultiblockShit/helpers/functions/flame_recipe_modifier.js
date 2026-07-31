const PLASMA_TEMPS = {
    "gtceu:americium_plasma": 100,
    "gtceu:infernality_catalysm_plasma": 300
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

    let fluidInputs = recipe.getInputContents($FluidRecipeCapability.CAP)
    let plasmaTemp = -1

    for (let fluid of fluidInputs) {
        let fluidId = fluid.getFluid().builtInRegistryHolder().key().location().toString()
        if (PLASMA_TEMPS[fluidId] !== undefined) {
            plasmaTemp = PLASMA_TEMPS[fluidId]
            break
        }
    }

    if (plasmaTemp === -1) return ModifierFunction.NULL

    if (recipeTemp > plasmaTemp) return
}