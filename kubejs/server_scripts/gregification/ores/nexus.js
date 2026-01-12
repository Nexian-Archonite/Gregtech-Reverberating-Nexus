GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:nexus", vein => {
        vein.weight(30)
        vein.clusterSize(15)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0.4)

        vein.layer("undergarden")
        vein.dimensions("undergarden:undergarden")

        vein.heightRangeTriangle(15, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('nexus')).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get('condensed_mana')).size(1, 3))
            )
        )
        

        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("nexus"))
        .placement("above")
        .density(0.6)
        .radius(3))
    })
})