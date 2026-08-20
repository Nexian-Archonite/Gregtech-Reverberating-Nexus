function VacuumModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (!machine instanceof $CoilWorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine)
    }

    let coilTemp = machine.getCoilType().getCoilTemperature()
    let recipeMaxTemp = recipe.data.getInt("MaxTemp")

    const MAX_COIL = 172800
    const t = Math.max(0, (MAX_COIL - coilTemp) / MAX_COIL)
    
    const minReachableTemp = Math.round(Math.max(0, 7.010 * Math.pow(t, 0.535) + 38.661 * Math.pow(t, 7.894)))

    if (recipeMaxTemp < minReachableTemp) {
        return ModifierFunction.NULL
    }

    return ModifierFunction.IDENTITY
}