function TemperatureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL // 
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (!machine instanceof $CoilWorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine)
    } else {

        let temp = machine.getCoilType().getCoilTemperature() // 

        let recipeTemp = recipe.data.getInt("Temp") // 
        if ((recipeTemp * 3) > temp) {
            return ModifierFunction.NULL
        }
        return ModifierFunction.IDENTITY // 
    }
}