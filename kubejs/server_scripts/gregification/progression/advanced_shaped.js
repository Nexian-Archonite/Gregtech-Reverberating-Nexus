/*ServerEvents.recipes(e => {
const createCrafterRecipe = (output, inputs, source) => {
  const recipe = e.recipes.custommachinery.custom_craft('gtrn:primitive_crafter', output);
  
  inputs.forEach((input, index) => {
    const slotId = 'i' + (index + 1);
    
    if (input === null || input === undefined) {
      return;
    }
    
    const type = input[0];
    const id = input[1];
    const count = input[2];
    
    if (type === 'tag') {
      recipe.requireItemTag(id, count, slotId);
    } else {
      recipe.requireItem(`${count}x ${id}`, slotId);
    }
  });
  
  if (source !== undefined) {
    recipe.requireSource(source);
  }
  
  return recipe;
};

createCrafterRecipe(
  'botania:mana_pool',
  [
    ['item', 'ars_nouveau:earth_essence', 1],
    null,
    ['item', 'ars_nouveau:air_essence', 1],
    ['item', 'botania:auric_livingrock', 2],
    ['item', 'gtceu:condensed_mana_dust', 1],
    ['item', 'botania:auric_livingrock', 2],
    ['item', 'botania:auric_livingrock', 2],
    ['item', 'botania:auric_livingrock', 2],
    ['item', 'botania:auric_livingrock', 2]
  ],
  4000
);


})*/