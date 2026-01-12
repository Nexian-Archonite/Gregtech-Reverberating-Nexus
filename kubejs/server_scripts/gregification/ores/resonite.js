GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:resonite", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('extraterrestrial_resonite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('extraterrestrial_resonite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )

    })
})