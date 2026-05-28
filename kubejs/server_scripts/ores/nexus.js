GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:nexus", vein => {
        vein.weight(30)
        vein.clusterSize(15)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0.4)

        vein.layer("undergarden")
        vein.dimensions('undergarden:undergarden')

        vein.heightRangeTriangle(15, 40)
        vein.cuboidVeinGenerator(generator => generator
        .top(b => b.mat(GTMaterials.get('nexus')).size(3))
        .middle(b => b.mat(GTMaterials.Copper).size(2))
        .bottom(b => b.mat(GTMaterials.Tin).size(2))
        .spread(b => b.mat(GTMaterials.get('condensed_mana')))
)
        

        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("nexus"))
        .placement("above")
        .density(0.6)
        .radius(3))
    })


})


