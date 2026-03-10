GTCEuServerEvents.oreVeins(event => {
event.modify("gtceu:naquadah_vein", vein => {
    event.modify("gtceu:naquadah_vein", vein => {
    vein.cuboidVeinGenerator(generator => generator
        .top(b => b.mat(GTMaterials.Naquadah).size(2))
        .middle(b => b.mat(GTMaterials.Naquadah).size(3))
        .bottom(b => b.mat(GTMaterials.Naquadah).size(2))
        .spread(b => b.mat(GTMaterials.Uraninite)))
})
})

 event.add("gtceu:lunar_titanium_cluster", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(20, 75)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Rutile).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 2))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:highland_aluminium_deposit", vein => {
      vein.weight(35)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(20, 75)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Spodumene).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Apatite).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:rare_earth_mare", vein => {
      vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(50, 90)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("xenotime")).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bastnasite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:helium-3_regolith", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.SiliconDioxide).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Helium3).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Helium3)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:magnesium_silicate_lowlands", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("enstatite")).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Magnesite).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnesite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:europium-hafnium_deposit", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        
        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Europium).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Hafnium).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Dysprosium).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Lanthanum).size(1, 1))
        ))

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Europium)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})


        // ================================================================================================
// Calaverite Vein - Gold Telluride
event.add("gtceu:calaverite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(22)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(25, 55)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('calaverite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("calaverite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})

// Hessite Vein - Silver Telluride
event.add("gtceu:hessite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(20)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(20, 50)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('hessite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Tellurium).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("hessite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})

// Altaite Vein - Lead Telluride
event.add("gtceu:altaite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(20)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(15, 45)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('altaite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Bismuth).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Zinc).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("altaite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})

// Clausthalite Vein - Lead Selenide
event.add("gtceu:clausthalite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(23)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(30, 60)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('clausthalite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("clausthalite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})

// Tiemannite Vein - Mercury Selenide
event.add("gtceu:tiemannite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(21)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(18, 48)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('tiemannite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Selenium).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Cadmium).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("tiemannite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})

// Berzelianite Vein - Copper Selenide
event.add("gtceu:berzelianite_vein", vein => {
    vein.weight(15)
    vein.clusterSize(24)
    vein.density(0.3)
    vein.discardChanceOnAirExposure(0.4)

    vein.layer("undergarden")
    vein.dimensions('undergarden:undergarden')

    vein.heightRangeTriangle(22, 52)
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('berzelianite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("berzelianite"))
        .placement("above")
        .density(0.5)
        .radius(4))
})
})