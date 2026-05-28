// priority: one bajillion
// priority: 9999

const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine')
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe")
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine")



const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $FluidAttributes = Java.loadClass("com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes")
const $FluidStorageKeys = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys")
const $FluidPipeProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties")
const $WireProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder")
const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty")
const $GemProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty")
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")


// Ignore this

// Icon Sets
const DULL = GTMaterialIconSet.DULL
const METALLIC = GTMaterialIconSet.METALLIC
const MAGNETIC = GTMaterialIconSet.MAGNETIC
const SHINY = GTMaterialIconSet.SHINY
const BRIGHT = GTMaterialIconSet.BRIGHT
const DIAMOND = GTMaterialIconSet.DIAMOND
const EMERALD = GTMaterialIconSet.EMERALD
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL
const RUBY = GTMaterialIconSet.RUBY
const OPAL = GTMaterialIconSet.OPAL
const GLASS = GTMaterialIconSet.GLASS
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR
const FINE = GTMaterialIconSet.FINE
const SAND = GTMaterialIconSet.SAND
const WOOD = GTMaterialIconSet.WOOD
const ROUGH = GTMaterialIconSet.ROUGH
const FLINT = GTMaterialIconSet.FLINT
const LIGNITE = GTMaterialIconSet.LIGNITE
const QUARTZ = GTMaterialIconSet.QUARTZ
const CERTUS = GTMaterialIconSet.CERTUS
const LAPIS = GTMaterialIconSet.LAPIS
const FLUID = GTMaterialIconSet.FLUID
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE

// Flags
// Generic flags
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION
const explosive = GTMaterialFlags.EXPLOSIVE
const flammable = GTMaterialFlags.FLAMMABLE
const sticky = GTMaterialFlags.STICKY
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE
const dense_plate = GTMaterialFlags.GENERATE_DENSE
const rod = GTMaterialFlags.GENERATE_ROD
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW
const frame = GTMaterialFlags.GENERATE_FRAME
const gear = GTMaterialFlags.GENERATE_GEAR
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL
const ring = GTMaterialFlags.GENERATE_RING
const spring = GTMaterialFlags.GENERATE_SPRING
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE
const rotor = GTMaterialFlags.GENERATE_ROTOR
const round = GTMaterialFlags.GENERATE_ROUND
const magnetic = GTMaterialFlags.IS_MAGNETIC
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE
const lens = GTMaterialFlags.GENERATE_LENS
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE
const no_working = GTMaterialFlags.NO_WORKING
const no_smashing = GTMaterialFlags.NO_SMASHING
const no_smelt = GTMaterialFlags.NO_SMELTING
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY

