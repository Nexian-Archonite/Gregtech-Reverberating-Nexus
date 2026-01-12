GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:xenotime", vein => {
        vein.weight(45)
        vein.clusterSize(35)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)

        vein.layer("endocrite")
        vein.dimensions("minecraft:the_end")

        vein.heightRangeTriangle(15, 40)


        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('xenotime')).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Yttrium).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Phosphate).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Dysprosium).size(0, 2))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("xenotime"))
        .placement("above")
        .density(0.6)
        .radius(3)
)
    })
})