GTCEuServerEvents.oreVeins(event => {
    event.add("gtceu:resonite", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(10, 60)

       vein.cuboidVeinGenerator(generator => generator
        .top(b => b.mat(GTMaterials.get('extraterrestrial_resonite')).size(3))
        .middle(b => b.mat(GTMaterials.get('lunar_desh')).size(2))
        .bottom(b => b.mat(GTMaterials.Pitchblende).size(2))
        .spread(b => b.mat(GTMaterials.Aluminium))
)

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('extraterrestrial_resonite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )

    })
})