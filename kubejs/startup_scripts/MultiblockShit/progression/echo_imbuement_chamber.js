GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('echo_imbuement_chamber')
        .category('fligugigu')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(true, true, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
        
})


GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('echo_imbuement_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)])
        .recipeTypes([GTRecipeTypes.get('echo_imbuement_chamber')])
        .appearanceBlock(() => Block.getBlock("gtceu:nexus_steel_casing"))

        .pattern(definition => FactoryBlockPattern.start()
            .aisle('          BBB          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '          CCC          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .aisle('  BBB   BBDDDBB   BBB  ', '          DDD          ', '          EEE          ', '  CCC     EEE     CCC  ', '          EEE          ', '          FFF          ', '          DDD          ', '  CCC    C   C    CCC  ', '                       ', '                       ', '                       ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .aisle(' BDDDB  BDDDDDB  BDDDB ', '  GGG    DHHHD    GGG  ', '  DDD    EHHHE    DDD  ', ' CDDDC   EHHHE   CDDDC ', '  DDD    EHHHE    DDD  ', '  FFF    FHHHF    FFF  ', '  DDD    DEEED    DDD  ', ' CDDDC  C     C  CDDDC ', '  DDD             DDD  ', '  GGG             GGG  ', '  DDD             BBB  ', ' CDDDC                 ', '  DDD                  ', '   D                   ', '   D                   ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   G  DH   HD  G   G ', ' D   D  DH   HD  D   D ', 'CD   DC DH   HD CD   DC', ' D   D  DH   HD  D   D ', ' F   F  FHHHHHF  F   F ', ' D   D  DEEEEED  D   D ', 'CD   DCC       CCD   DC', ' D   D           D   D ', ' G   G           G   G ', ' D   D           B   B ', 'CD   DC           FFF  ', ' D   D            F F  ', '  D D                  ', '  D D                  ', ' CDDDC                 ', '  FFF                  ', '  DDD                  ', '  DDD                  ', '  JJJ                  ', '  FFF                  ') 
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   GCCDH   HDC G   G ', ' D   DCCDH   HDC D   D ', 'CD   DCCDH   HDCCD   DC', ' D   DCCDH   HDC D   D ', ' F   FCCFBHHHHFC F   F ', ' D   DCCDBEEEBDC D   D ', 'CD   DCC B   B CCD   DC', ' D   DC  B   B   D   D ', ' G   GBBBB   BBBBG   G ', ' D   DC          B   B ', 'CD   DC           FBF  ', ' D   DC            B   ', ' D   DC            B   ', ' D   DC            B   ', ' CD DCC                ', '  F F                  ', '  D D                  ', '  D D                  ', '  J J                  ', '  FBF                  ') 
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   G  DH   HD  G   G ', ' D   D  DH   HD  D   D ', 'CD   DC DH   HD CD   DC', ' D   D  DH   HD  D   D ', ' F   F  FHHHHHF  F   F ', ' D   D  DEEEEED  D   D ', 'CD   DCC       CCD   DC', ' D   D           D   D ', ' G   G           G   G ', ' D   D           B   B ', 'CD   DC           FFF  ', ' D   D            F F  ', '  D D                  ', '  D D                  ', ' CDDDC                 ', '  FFF                  ', '  DDD                  ', '  DDD                  ', '  JJJ                  ', '  FFF                  ') 
            .aisle(' BDDDB  BDDDDDB  BDDDB ', '  GGG    DHHHD    GGG  ', '  DDD    EHHHE    DDD  ', ' CDDDC   EHHHE  CCDDDC ', '  DDD    EHHHE    DDD  ', '  FFF    FHHHF    FFF  ', '  DDD    DEEED    DDD  ', ' CDDDC  C     C  CDDDC ', '  DDD             DDD  ', '  GGG             GGG  ', '  DDD             BBB  ', ' CDDDC                 ', '  DDD                  ', '   D                   ', '   D                   ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .aisle('  BBB   BBDDDBB   BBB  ', '          DDD          ', '          ELE          ', '  CCC     EEE     CCC  ', '          EEE          ', '          FFF          ', '          DDD          ', '  CCC    C   C    CCC  ', '                       ', '                       ', '                       ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .aisle('          BBB          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '          CCC          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('C', Predicates.blocks('gtceu:nexus_steel_frame'))
            .where('D', Predicates.blocks('gtceu:nexus_steel_casing'))
            .where('E', Predicates.blocks('gtceu:tempered_glass')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('gtceu:metallurgically_enhanced_source_casing'))  
            .where('G', Predicates.heatingCoils())
            .where('H', Predicates.blocks('create_extra_casing:cyan_casing'))
            .where('J', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('L', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/nexus_steel_casing',
        'gtceu:block/machines/extractor')
        
})
