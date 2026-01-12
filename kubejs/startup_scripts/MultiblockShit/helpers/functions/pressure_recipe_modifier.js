function PressureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (!(machine instanceof $CoilWorkableElectricMultiblockMachine)) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine)
    } else {  
        
        let coil = machine.getCoilType().getCoilTemperature()
        
        let recipePressure = recipe.data.getDouble("HeatPressure")
        if ((recipePressure * 1000) > coil) {
            return ModifierFunction.NULL
        }
        return ModifierFunction.IDENTITY
    }
}
