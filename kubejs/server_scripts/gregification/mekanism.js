ServerEvents.recipes(mek => {
var mekanismliquidsthatneedtobereplacedasapdoyouunderstandme = ['hydrogen', 'oxygen', 'chlorine', 'sulfur_dioxide', 'sulfur_trioxide', 'sulfuric_acid', 'hydrogen_chloride', 'hydrofluoric_acid', 'ethene', 'steam', 'uranium_hexafluoride']
mekanismliquidsthatneedtobereplacedasapdoyouunderstandme.forEach(type => {
    if (type === 'hydrogen_chloride') {
        mek.replaceInput(
        {},
        `mekanism:hydrogen_chloride`,
        `gtceu:hydrochloric_acid`
    )

        mek.replaceOutput(
        {},
        `mekanism:hydrogen_chloride`,
        `gtceu:hydrochloric_acid`
    )}
     else if (type === 'ethene') {
        mek.replaceInput(
        {},
        `mekanism:ethene`,
        `gtceu:ethylene`
    )
        mek.replaceOutput(
        {},
        `mekanism:ethene`,
        `gtceu:ethylene`
    )}
    
    mek.replaceInput(
        {}, 
        `mekanism:${type}`,
        `gtceu:${type}`
    )
    mek.replaceOutput(
        {}, 
        `mekanism:${type}`,
        `gtceu:${type}`
    )


})
})