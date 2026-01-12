GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:blue_zircon", vein => {
        vein.weight(60)
        vein.clusterSize(35)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")

        vein.heightRangeTriangle(15, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('blue_zircon')).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silicon).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Hafnium).size(2, 3))
            )
        )
        

        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("blue_zircon"))
        .placement("above")
        .density(0.6)
        .radius(3))
    })
})