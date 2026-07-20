GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:naquadah_vein", vein => {
    vein.cuboidVeinGenerator(generator => generator
        .top(b => b.mat(GTMaterials.Naquadah).size(2))
        .middle(b => b.mat(GTMaterials.Naquadah).size(3))
        .bottom(b => b.mat(GTMaterials.Naquadah).size(2))
        .spread(b => b.mat(GTMaterials.Uraninite)))
})

event.modify('gtceu:monazite_vein', vein => {
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
        .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Dysprosium).size(1, 1))
    
        )
    )
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



//MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARS. you're not you when yrou'e hangry

// Vein 1: Oxidized Iron Flats
event.add("gtceu:martian_iron_flats", vein => {
    vein.weight(40)
    vein.clusterSize(30)
    vein.density(0.30)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mars')
    vein.dimensions('ad_astra:mars')

    vein.heightRangeUniform(20, 80)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get("jarosite")).size(2, 3))
            .layer(l => l.weight(3).mat(GTMaterials.get("wustite")).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get("ulvospinel")).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("jarosite"))
        .placement('above')
        .density(0.5)
        .radius(6)
    )
})

// Vein 2: Evaporite Phosphate Beds
event.add("gtceu:martian_phosphate_beds", vein => {
    vein.weight(25)
    vein.clusterSize(22)
    vein.density(0.22)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mars')
    vein.dimensions('ad_astra:mars')

    vein.heightRangeUniform(5, 50)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get("fluorapatite")).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get("merrillite")).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.get("kernite")).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("fluorapatite"))
        .placement('above')
        .density(0.3)
        .radius(5)
    )
})

// Vein 3: Meteoritic Impact Craters
event.add("gtceu:martian_meteoritic_pgm", vein => {
    vein.weight(10)
    vein.clusterSize(15)
    vein.density(0.15)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mars')
    vein.dimensions('ad_astra:mars')

    vein.heightRangeUniform(10, 60)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get("taenite")).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get("sperrylite")).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.get("laurite")).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.get("rhodite")).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("taenite"))
        .placement('above')
        .density(0.2)
        .radius(4)
    )
})

// Vein 4: Hydrothermal Sulfide Veins
event.add("gtceu:martian_hydrothermal_sulfides", vein => {
    vein.weight(15)
    vein.clusterSize(18)
    vein.density(0.18)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mars')
    vein.dimensions('ad_astra:mars')

    vein.heightRangeUniform(5, 40)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Molybdenite).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.get("roquesite")).size(0, 1))
            .layer(l => l.weight(1).mat(GTMaterials.get("gallite")).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("molybdenite"))
        .placement('above')
        .density(0.25)
        .radius(4)
    )
})

// Vein 5: Deep Pegmatite Intrusions
event.add("gtceu:martian_pegmatite_intrusions", vein => {
    vein.weight(8)
    vein.clusterSize(12)
    vein.density(0.12)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mars')
    vein.dimensions('ad_astra:mars')

    vein.heightRangeUniform(5, 30)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get("phenakite")).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get("martian_ostrum")).size(1, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get("dilithium")).size(1, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get("dilithium"))
        .placement('above')
        .density(0.15)
        .radius(3)
    )
})

// ============================================================
// Venus Ore Veins
// ============================================================

// Vein 1: Volcanic Sulfide Deposits
event.add("gtceu:venusian_volcanic_sulfides", vein => {
    vein.weight(25)
    vein.clusterSize(22)
    vein.density(0.22)
    vein.discardChanceOnAirExposure(0)

    vein.layer('venus')
    vein.dimensions('ad_astra:venus')

    vein.heightRangeUniform(10, 50)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Pyrite).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Cinnabar).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Galena).size(0, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Pyrite)
        .placement('above')
        .density(0.3)
        .radius(4)
    )
})

// Vein 2: Basaltic Mantle Intrusions
event.add("gtceu:venusian_basaltic_mantle", vein => {
    vein.weight(20)
    vein.clusterSize(18)
    vein.density(0.18)
    vein.discardChanceOnAirExposure(0)

    vein.layer('venus')
    vein.dimensions('ad_astra:venus')

    vein.heightRangeUniform(5, 35)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Bastnasite).size(0, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Olivine)
        .placement('above')
        .density(0.25)
        .radius(4)
    )
})

// Vein 3: Venusian Molybdenite Deposits
event.add("gtceu:venusian_molybdenite", vein => {
    vein.weight(18)
    vein.clusterSize(16)
    vein.density(0.18)
    vein.discardChanceOnAirExposure(0)

    vein.layer('venus')
    vein.dimensions('ad_astra:venus')

    vein.heightRangeUniform(10, 45)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Molybdenite).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Galena).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Molybdenite)
        .placement('above')
        .density(0.25)
        .radius(4)
    )
})

// Vein 4: Draconium Bonus Vein
event.add("gtceu:venusian_draconium", vein => {
    vein.weight(8)
    vein.clusterSize(14)
    vein.density(0.12)
    vein.discardChanceOnAirExposure(0)

    vein.layer('venus')
    vein.dimensions('ad_astra:venus')

    vein.heightRangeUniform(-20, 15)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('draconium')).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('draconium'))
        .placement('above')
        .density(0.15)
        .radius(3)
    )
})

// ============================================================
// Mercury Ore Veins
// ============================================================

// Vein 1: Graphite Surface Deposits
event.add("gtceu:mercurian_graphite_surface", vein => {
    vein.weight(30)
    vein.clusterSize(25)
    vein.density(0.28)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mercury')
    vein.dimensions('ad_astra:mercury')

    vein.heightRangeUniform(20, 60)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.get('enstatite')).size(1, 3))
            .layer(l => l.weight(1).mat(GTMaterials.get('pyroxene')).size(0, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Graphite)
        .placement('above')
        .density(0.35)
        .radius(5)
    )
})

// Vein 2: Deep Iron Chromite Deposits
event.add("gtceu:mercurian_iron_chromite", vein => {
    vein.weight(18)
    vein.clusterSize(16)
    vein.density(0.16)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mercury')
    vein.dimensions('ad_astra:mercury')

    vein.heightRangeUniform(5, 35)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get('pyroxene')).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.get('enstatite')).size(0, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Chromite)
        .placement('above')
        .density(0.22)
        .radius(4)
    )
})

// Vein 3: Enstatite Chondrite Deep Mantle
event.add("gtceu:mercurian_enstatite_mantle", vein => {
    vein.weight(20)
    vein.clusterSize(18)
    vein.density(0.20)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mercury')
    vein.dimensions('ad_astra:mercury')

    vein.heightRangeUniform(-15, 25)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('enstatite')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get('pyroxene')).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(0, 2))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('enstatite'))
        .placement('above')
        .density(0.22)
        .radius(4)
    )
})

// Vein 4: Platinum Group + Rare Earth Bonus Vein
event.add("gtceu:mercurian_pgm_rare_earth", vein => {
    vein.weight(10)
    vein.clusterSize(14)
    vein.density(0.12)
    vein.discardChanceOnAirExposure(0)

    vein.layer('mercury')
    vein.dimensions('ad_astra:mercury')

    vein.heightRangeUniform(-10, 20)

    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(1, 2))
            .layer(l => l.weight(3).mat(GTMaterials.get('sperrylite')).size(1, 2))
            .layer(l => l.weight(2).mat(GTMaterials.get('xenotime')).size(1, 2))
            .layer(l => l.weight(1).mat(GTMaterials.Bastnasite).size(0, 1))
        )
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Cooperite)
        .placement('above')
        .density(0.15)
        .radius(3)
    )
})
})