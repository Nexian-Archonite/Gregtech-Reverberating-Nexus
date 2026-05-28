/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class SaddleItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type SaddleItem_ = SaddleItem;
    interface InventoryAccessor {
        abstract getCompartments(): Internal.List<Internal.NonNullList<Internal.ItemStack>>;
        get compartments(): Internal.List<Internal.NonNullList<Internal.ItemStack>>
        (): Internal.List_<Internal.NonNullList<Internal.ItemStack>>;
    }
    type InventoryAccessor_ = (()=> Internal.List_<Internal.NonNullList<Internal.ItemStack>>) | InventoryAccessor;
    class ListPoolElement extends Internal.StructurePoolElement {
        constructor(arg0: Internal.List_<Internal.StructurePoolElement>, arg1: Internal.StructureTemplatePool$Projection_)
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        static readonly CODEC: Internal.Codec<Internal.ListPoolElement>;
        elements: Internal.List<Internal.StructurePoolElement>;
    }
    type ListPoolElement_ = ListPoolElement;
    class TippedArrowItem extends Internal.ArrowItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): Internal.AbstractArrow;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type TippedArrowItem_ = TippedArrowItem;
    class PostboxBlockEntity extends Internal.PackagePortBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getComparatorOutput(): number;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        award(arg0: Internal.CreateAdvancement_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        sdl$getDynamicLightX(): number;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        sdl$dynamicLightTick(): void;
        invalidate(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        spawnParticles(): void;
        drop(arg0: Internal.ItemStack_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getFilterString(): string;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        filterChanged(): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        isBackedUp(): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        use(arg0: Internal.Player_): Internal.InteractionResult;
        get comparatorOutput(): number
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get filterString(): string
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get backedUp(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        trackedGlobalStation: Internal.WeakReference<Internal.GlobalStation>;
        computerBehaviour: Internal.AbstractComputerBehaviour;
        flag: Internal.LerpedFloat;
        forceFlag: boolean;
    }
    type PostboxBlockEntity_ = PostboxBlockEntity;
    interface ISlotWidgetKJS {
        kjs$self(): SlotWidget;
        kjs$setHandlerSlot(itemHandler: Internal.IItemHandlerModifiable_, slot: number): void;
    }
    type ISlotWidgetKJS_ = ISlotWidgetKJS;
    class ConstraintImpl$BetweenOffset extends Internal.ConstraintImpl$Between {
        constructor(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number, arg3: number)
        static midPoint(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number): Internal.ConstraintImpl$MidPoint;
        getClass(): typeof any;
        isPrecise(): boolean;
        static between(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>): Internal.ConstraintImpl$BetweenDynamic;
        clamp(): Internal.ConstraintImpl$Between;
        getEnd(): number;
        precise(): Internal.ConstraintImpl$Between;
        static midPoint(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>): Internal.ConstraintImpl$MidPointDynamic;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static between(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number, arg3: number): Internal.ConstraintImpl$BetweenOffset;
        static "midPoint(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,double)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number): Internal.ConstraintImpl$MidPoint;
        get(): number;
        static literal(arg0: number): Internal.ConstraintImpl$Literal;
        setAxis(arg0: Internal.Axis_): Internal.ConstraintImpl$Between;
        markDirty(): void;
        toString(): string;
        static match(arg0: Internal.GeoRef_): Internal.ConstraintImpl$Relative;
        static "relative(codechicken.lib.gui.modular.lib.geometry.GeoRef,java.util.function.Supplier)"(arg0: Internal.GeoRef_, arg1: Internal.Supplier_<number>): Internal.ConstraintImpl$RelativeDynamic;
        static midPoint(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_): Internal.ConstraintImpl$MidPoint;
        notifyAll(): void;
        getStart(): number;
        static "between(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,java.util.function.Supplier)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>): Internal.ConstraintImpl$BetweenDynamic;
        static "between(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,java.util.function.Supplier,java.util.function.Supplier)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>, arg3: Internal.Supplier_<number>): Internal.ConstraintImpl$BetweenDynamic;
        static dynamic(arg0: Internal.Supplier_<number>): Internal.ConstraintImpl$Dynamic;
        static relative(arg0: Internal.GeoRef_, arg1: number): Internal.ConstraintImpl$Relative;
        static between(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>, arg3: Internal.Supplier_<number>): Internal.ConstraintImpl$BetweenDynamic;
        static between(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number): Internal.ConstraintImpl$Between;
        hashCode(): number;
        axis(): Internal.Axis;
        wait(): void;
        getPos(): number;
        wait(arg0: number): void;
        static "between(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,double,double)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number, arg3: number): Internal.ConstraintImpl$BetweenOffset;
        static "midPoint(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,java.util.function.Supplier)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: Internal.Supplier_<number>): Internal.ConstraintImpl$MidPointDynamic;
        equals(arg0: any): boolean;
        static "relative(codechicken.lib.gui.modular.lib.geometry.GeoRef,double)"(arg0: Internal.GeoRef_, arg1: number): Internal.ConstraintImpl$Relative;
        static relative(arg0: Internal.GeoRef_, arg1: Internal.Supplier_<number>): Internal.ConstraintImpl$RelativeDynamic;
        static "between(codechicken.lib.gui.modular.lib.geometry.GeoRef,codechicken.lib.gui.modular.lib.geometry.GeoRef,double)"(arg0: Internal.GeoRef_, arg1: Internal.GeoRef_, arg2: number): Internal.ConstraintImpl$Between;
        get class(): typeof any
        get precise(): boolean
        get end(): number
        set axis(arg0: Internal.Axis_)
        get start(): number
        get pos(): number
    }
    type ConstraintImpl$BetweenOffset_ = ConstraintImpl$BetweenOffset;
    class DragonStrafePlayerPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        doClientTick(): void;
        getClass(): typeof any;
        onHurt(arg0: DamageSource_, arg1: number): number;
        toString(): string;
        getFlyTargetLocation(): Vec3d;
        getFlySpeed(): number;
        notifyAll(): void;
        begin(): void;
        notify(): void;
        getPhase(): Internal.EnderDragonPhase<Internal.DragonStrafePlayerPhase>;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        setTarget(arg0: Internal.LivingEntity_): void;
        isSitting(): boolean;
        end(): void;
        wait(): void;
        getTurnSpeed(): number;
        wait(arg0: number): void;
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_, arg3: Internal.Player_): void;
        doServerTick(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get flyTargetLocation(): Vec3d
        get flySpeed(): number
        get phase(): Internal.EnderDragonPhase<Internal.DragonStrafePlayerPhase>
        set target(arg0: Internal.LivingEntity_)
        get sitting(): boolean
        get turnSpeed(): number
    }
    type DragonStrafePlayerPhase_ = DragonStrafePlayerPhase;
    interface CycleButton$ValueListSupplier <T> {
        create<T>(arg0: Internal.BooleanSupplier_, arg1: Internal.List_<T>, arg2: Internal.List_<T>): this;
        abstract getDefaultList(): Internal.List<T>;
        abstract getSelectedList(): Internal.List<T>;
        create<T>(arg0: Internal.Collection_<T>): this;
        get defaultList(): Internal.List<T>
        get selectedList(): Internal.List<T>
    }
    type CycleButton$ValueListSupplier_<T> = CycleButton$ValueListSupplier<T>;
    class ClipboardBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        onEditedBy(arg0: Internal.Player_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        sdl$getDynamicLightX(): number;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        sdl$dynamicLightTick(): void;
        invalidate(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        updateWrittenState(): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        canPlayerUse(arg0: Internal.Player_): boolean;
        tick(): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        dataContainer: Internal.ItemStack;
    }
    type ClipboardBlockEntity_ = ClipboardBlockEntity;
    interface ChannelPromise extends Internal.Promise<void>, Internal.ChannelFuture {
        abstract isSuccess(): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract trySuccess(): boolean;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract getNow(): void;
        abstract cause(): Internal.Throwable;
        abstract isVoid(): boolean;
        abstract sync(): this;
        abstract await(): this;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract awaitUninterruptibly(): this;
        abstract await(arg0: number): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract setUncancellable(): boolean;
        abstract setSuccess(): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): void;
        abstract isCancelled(): boolean;
        abstract unvoid(): this;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract trySuccess(arg0: void): boolean;
        abstract setSuccess(arg0: void): Internal.Promise<void>;
        abstract setSuccess(arg0: void): this;
        abstract "setSuccess(java.lang.Void)"(arg0: void): this;
        abstract "setSuccess(java.lang.Void)"(arg0: void): Internal.Promise<void>;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract channel(): io.netty.channel.Channel;
        abstract syncUninterruptibly(): this;
        abstract isCancellable(): boolean;
        abstract get(): void;
        get success(): boolean
        get now(): void
        get "void"(): boolean
        set failure(arg0: Internal.Throwable_)
        get cancelled(): boolean
        set success(arg0: void)
        set success(arg0: void)
        set "success(java.lang.Void)"(arg0: void)
        set "success(java.lang.Void)"(arg0: void)
        get done(): boolean
        get cancellable(): boolean
    }
    type ChannelPromise_ = ChannelPromise;
    class RichSoilFarmlandBlock extends Internal.FarmBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        static turnToRichSoil(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static turnToDirt(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): void;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type RichSoilFarmlandBlock_ = RichSoilFarmlandBlock;
    class ElementiumLegsItem extends Internal.ElementiumArmorItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasPhantomInk(arg0: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        hasArmorSetItem(arg0: Internal.Player_, arg1: Internal.EquipmentSlot_): boolean;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        addInformationAfterShift(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        shouldOverrideMultiplayerNbt(): boolean;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        addArmorSetDescription(arg0: Internal.ItemStack_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<any>): void;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        getArmorTextureAfterInk(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_): string;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getArmorSetStacks(): Internal.ItemStack[];
        getArmorSetName(): Internal.MutableComponent;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasArmorSet(arg0: Internal.Player_): boolean;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        setPhantomInk(arg0: Internal.ItemStack_, arg1: boolean): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get armorSetStacks(): Internal.ItemStack[]
        get armorSetName(): Internal.MutableComponent
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ElementiumLegsItem_ = ElementiumLegsItem;
    class AfterRecipesLoadedEventJS extends Internal.EventJS {
        constructor(r: Internal.Map_<Internal.RecipeType<any>, Internal.Map<ResourceLocation, Internal.Recipe<any>>>, n: Internal.Map_<ResourceLocation, Internal.Recipe<any>>)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        forEachRecipe(filter: Internal.RecipeFilter_, consumer: Internal.Consumer_<Internal.RecipeKJS>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        countRecipes(filter: Internal.RecipeFilter_): number;
        hashCode(): number;
        remove(filter: Internal.RecipeFilter_): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AfterRecipesLoadedEventJS_ = AfterRecipesLoadedEventJS;
    class RenderBlock extends Internal.Block implements Internal.EntityBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type RenderBlock_ = RenderBlock;
    class IModInfo$Ordering extends Internal.Enum<Internal.IModInfo$Ordering> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(net.minecraftforge.forgespi.language.IModInfo$Ordering)"(arg0: Internal.IModInfo$Ordering_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.IModInfo$Ordering>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.IModInfo$Ordering_): number;
        static values(): Internal.IModInfo$Ordering[];
        getDeclaringClass(): typeof Internal.IModInfo$Ordering;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.IModInfo$Ordering;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.IModInfo$Ordering
        static readonly BEFORE: (Internal.IModInfo$Ordering) & (Internal.IModInfo$Ordering);
        static readonly AFTER: (Internal.IModInfo$Ordering) & (Internal.IModInfo$Ordering);
        static readonly NONE: (Internal.IModInfo$Ordering) & (Internal.IModInfo$Ordering);
    }
    type IModInfo$Ordering_ = "before" | "after" | IModInfo$Ordering | "none";
    interface IStackableContentsUpgrade {
        abstract getMinimumMultiplierRequired(): number;
        get minimumMultiplierRequired(): number
        (): number;
    }
    type IStackableContentsUpgrade_ = IStackableContentsUpgrade | (()=> number);
    interface MethodHandleInfo {
        isVarArgs(): boolean;
        abstract getMethodType(): Internal.MethodType;
        toString(arg0: number, arg1: typeof any, arg2: string, arg3: Internal.MethodType_): string;
        abstract getModifiers(): number;
        abstract getName(): string;
        abstract getReferenceKind(): number;
        referenceKindToString(arg0: number): string;
        abstract getDeclaringClass(): typeof any;
        abstract reflectAs<T extends Internal.Member>(arg0: T, arg1: Internal.MethodHandles$Lookup_): T;
        get varArgs(): boolean
        get methodType(): Internal.MethodType
        get modifiers(): number
        get name(): string
        get referenceKind(): number
        get declaringClass(): typeof any
        readonly REF_getStatic: (2) & (number);
        readonly REF_newInvokeSpecial: (8) & (number);
        readonly REF_invokeVirtual: (5) & (number);
        readonly REF_putField: (3) & (number);
        readonly REF_invokeSpecial: (7) & (number);
        readonly REF_invokeInterface: (9) & (number);
        readonly REF_putStatic: (4) & (number);
        readonly REF_getField: (1) & (number);
        readonly REF_invokeStatic: (6) & (number);
    }
    type MethodHandleInfo_ = MethodHandleInfo;
    interface ICookingUpgrade <T extends Internal.AbstractCookingRecipe> {
        abstract getCookingLogic(): Internal.CookingLogic<T>;
        get cookingLogic(): Internal.CookingLogic<T>
        (): Internal.CookingLogic_<T>;
        readonly UPGRADE_GROUP: (Internal.UpgradeGroup) & (Internal.UpgradeGroup);
    }
    type ICookingUpgrade_<T extends Internal.AbstractCookingRecipe> = (()=> Internal.CookingLogic_<T>) | ICookingUpgrade<T>;
    class LightTexture implements Internal.LightTextureAccessor, Internal.AutoCloseable {
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Minecraft_)
        getClass(): typeof any;
        static block(arg0: number): number;
        handler$epk000$inject$init(arg0: Internal.GameRenderer_, arg1: Internal.Minecraft_, arg2: Internal.CallbackInfo_): void;
        toString(): string;
        turnOffLightLayer(): void;
        notifyAll(): void;
        getLightTexture(): Internal.DynamicTexture;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        static pack(arg0: number, arg1: number): number;
        hashCode(): number;
        wait(): void;
        close(): void;
        static sky(arg0: number): number;
        wait(arg0: number): void;
        updateLightTexture(arg0: number): void;
        static getBrightness(arg0: Internal.DimensionType_, arg1: number): number;
        turnOnLightLayer(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get lightTexture(): Internal.DynamicTexture
        blockLightRedFlicker: number;
        static readonly FULL_BRIGHT: (15728880) & (number);
        updateLightTexture: boolean;
        static readonly FULL_SKY: (15728640) & (number);
        static readonly FULL_BLOCK: (240) & (number);
    }
    type LightTexture_ = LightTexture;
    class FunctionalStorage$DrawerType extends Internal.Enum<Internal.FunctionalStorage$DrawerType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.FunctionalStorage$DrawerType;
        getClass(): typeof any;
        getSlotAmount(): number;
        static valueOf(arg0: string): Internal.FunctionalStorage$DrawerType;
        getSlotPosition(): Internal.Function<number, org.apache.commons.lang3.tuple.Pair<number, number>>;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        "compareTo(com.buuz135.functionalstorage.FunctionalStorage$DrawerType)"(arg0: Internal.FunctionalStorage$DrawerType_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FunctionalStorage$DrawerType>>;
        static values(): Internal.FunctionalStorage$DrawerType[];
        name(): string;
        getSlots(): number;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getDisplayName(): string;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.FunctionalStorage$DrawerType_): number;
        get declaringClass(): typeof Internal.FunctionalStorage$DrawerType
        get class(): typeof any
        get slotAmount(): number
        get slotPosition(): Internal.Function<number, org.apache.commons.lang3.tuple.Pair<number, number>>
        get slots(): number
        get displayName(): string
        static readonly X_2: (Internal.FunctionalStorage$DrawerType) & (Internal.FunctionalStorage$DrawerType);
        static readonly X_1: (Internal.FunctionalStorage$DrawerType) & (Internal.FunctionalStorage$DrawerType);
        static readonly X_4: (Internal.FunctionalStorage$DrawerType) & (Internal.FunctionalStorage$DrawerType);
    }
    type FunctionalStorage$DrawerType_ = "x_4" | FunctionalStorage$DrawerType | "x_1" | "x_2";
    abstract class DateFormat extends Internal.Format {
        clone(): any;
        static getDateInstance(arg0: number): Internal.DateFormat;
        getClass(): typeof any;
        static getTimeInstance(arg0: number, arg1: Internal.Locale_): Internal.DateFormat;
        format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        format(arg0: Internal.Date_): string;
        static getDateInstance(arg0: number, arg1: Internal.Locale_): Internal.DateFormat;
        parseObject(arg0: string): any;
        static getDateTimeInstance(arg0: number, arg1: number, arg2: Internal.Locale_): Internal.DateFormat;
        parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        static getInstance(): Internal.DateFormat;
        static getAvailableLocales(): Internal.Locale[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        setNumberFormat(arg0: Internal.NumberFormat_): void;
        static getDateTimeInstance(arg0: number, arg1: number): Internal.DateFormat;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        abstract format(arg0: Internal.Date_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        isLenient(): boolean;
        abstract "format(java.util.Date,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: Internal.Date_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getTimeInstance(): Internal.DateFormat;
        "format(java.util.Date)"(arg0: Internal.Date_): string;
        setCalendar(arg0: Internal.Calendar_): void;
        static getDateInstance(): Internal.DateFormat;
        toString(): string;
        "format(java.lang.Object)"(arg0: any): string;
        static getDateTimeInstance(): Internal.DateFormat;
        notifyAll(): void;
        getNumberFormat(): Internal.NumberFormat;
        format(arg0: any): string;
        parse(arg0: string): Internal.Date;
        hashCode(): number;
        getCalendar(): Internal.Calendar;
        abstract parse(arg0: string, arg1: Internal.ParsePosition_): Internal.Date;
        wait(): void;
        getTimeZone(): Internal.TimeZone;
        setTimeZone(arg0: Internal.TimeZone_): void;
        wait(arg0: number): void;
        static getTimeInstance(arg0: number): Internal.DateFormat;
        equals(arg0: any): boolean;
        setLenient(arg0: boolean): void;
        get class(): typeof any
        get instance(): Internal.DateFormat
        get availableLocales(): Internal.Locale[]
        set numberFormat(arg0: Internal.NumberFormat_)
        get lenient(): boolean
        get timeInstance(): Internal.DateFormat
        set calendar(arg0: Internal.Calendar_)
        get dateInstance(): Internal.DateFormat
        get dateTimeInstance(): Internal.DateFormat
        get numberFormat(): Internal.NumberFormat
        get calendar(): Internal.Calendar
        get timeZone(): Internal.TimeZone
        set timeZone(arg0: Internal.TimeZone_)
        set lenient(arg0: boolean)
        static readonly DEFAULT: (2) & (number);
        static readonly MONTH_FIELD: (2) & (number);
        static readonly WEEK_OF_MONTH_FIELD: (13) & (number);
        static readonly FULL: (0) & (number);
        static readonly MILLISECOND_FIELD: (8) & (number);
        static readonly LONG: (1) & (number);
        static readonly AM_PM_FIELD: (14) & (number);
        static readonly SHORT: (3) & (number);
        static readonly ERA_FIELD: (0) & (number);
        static readonly WEEK_OF_YEAR_FIELD: (12) & (number);
        static readonly YEAR_FIELD: (1) & (number);
        static readonly MINUTE_FIELD: (6) & (number);
        static readonly DATE_FIELD: (3) & (number);
        static readonly HOUR0_FIELD: (16) & (number);
        static readonly HOUR_OF_DAY1_FIELD: (4) & (number);
        static readonly HOUR_OF_DAY0_FIELD: (5) & (number);
        static readonly SECOND_FIELD: (7) & (number);
        static readonly DAY_OF_WEEK_FIELD: (9) & (number);
        static readonly TIMEZONE_FIELD: (17) & (number);
        static readonly MEDIUM: (2) & (number);
        static readonly DAY_OF_WEEK_IN_MONTH_FIELD: (11) & (number);
        static readonly HOUR1_FIELD: (15) & (number);
        static readonly DAY_OF_YEAR_FIELD: (10) & (number);
    }
    type DateFormat_ = DateFormat;
    class ItemFadedNetherStar extends org.moddingx.libx.base.ItemBase {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        makeCreativeTabStacks(): Internal.Stream<Internal.ItemStack>;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemFadedNetherStar_ = ItemFadedNetherStar;
    /**
     * @deprecated
    */
    class PrimaryLevelData$SpecialWorldProperty extends Internal.Enum<Internal.PrimaryLevelData$SpecialWorldProperty> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PrimaryLevelData$SpecialWorldProperty>>;
        getDeclaringClass(): typeof Internal.PrimaryLevelData$SpecialWorldProperty;
        toString(): string;
        compareTo(arg0: Internal.PrimaryLevelData$SpecialWorldProperty_): number;
        notifyAll(): void;
        "compareTo(net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty)"(arg0: Internal.PrimaryLevelData$SpecialWorldProperty_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.PrimaryLevelData$SpecialWorldProperty[];
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.PrimaryLevelData$SpecialWorldProperty;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.PrimaryLevelData$SpecialWorldProperty
        static readonly FLAT: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
        static readonly DEBUG: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
        static readonly NONE: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
    }
    type PrimaryLevelData$SpecialWorldProperty_ = PrimaryLevelData$SpecialWorldProperty | "flat" | "debug" | "none";
    class ModuleDescriptor$Opens implements Internal.Comparable<Internal.ModuleDescriptor$Opens> {
        getClass(): typeof any;
        modifiers(): Internal.Set<Internal.ModuleDescriptor$Opens$Modifier>;
        isQualified(): boolean;
        toString(): string;
        targets(): Internal.Set<string>;
        notifyAll(): void;
        "compareTo(java.lang.module.ModuleDescriptor$Opens)"(arg0: Internal.ModuleDescriptor$Opens_): number;
        source(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        hashCode(): number;
        wait(): void;
        compareTo(arg0: Internal.ModuleDescriptor$Opens_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get qualified(): boolean
    }
    type ModuleDescriptor$Opens_ = ModuleDescriptor$Opens;
    interface RequirementsStrategy {
        abstract createRequirements(arg0: Internal.Collection_<string>): string[][];
        (arg0: Internal.Collection<string>): string[][];
        readonly OR: Internal.RequirementsStrategy;
        readonly AND: Internal.RequirementsStrategy;
    }
    type RequirementsStrategy_ = RequirementsStrategy | ((arg0: Internal.Collection<string>)=> string[][]);
    class CraftingBookCategory extends Internal.Enum<Internal.CraftingBookCategory> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CraftingBookCategory>>;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.CraftingBookCategory;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        "compareTo(net.minecraft.world.item.crafting.CraftingBookCategory)"(arg0: Internal.CraftingBookCategory_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.CraftingBookCategory[];
        getDeclaringClass(): typeof Internal.CraftingBookCategory;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.CraftingBookCategory_): number;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.CraftingBookCategory
        static readonly REDSTONE: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly EQUIPMENT: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly MISC: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.CraftingBookCategory>;
        static readonly BUILDING: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
    }
    type CraftingBookCategory_ = "equipment" | "misc" | "building" | "redstone" | CraftingBookCategory;
    abstract class ConfigurableRegistryEntry <T extends Internal.ConfigurableRegistryEntry<T, C>, C extends com.ferreusveritas.dynamictrees.api.configuration.Configuration<C, T>> extends Internal.RegistryEntry<T> implements Internal.Configurable {
        getClass(): typeof any;
        setGenerateData(arg0: boolean): void;
        generateStateData(arg0: Internal.DTBlockStateProvider_): void;
        getTextComponent(): net.minecraft.network.chat.Component;
        notify(): void;
        setRegistryName(arg0: ResourceLocation_): T;
        toReloadDataString(): string;
        wait(arg0: number, arg1: number): void;
        getDefaultConfiguration(): C;
        shouldGenerateData(): boolean;
        generateLangData(arg0: Internal.DTLangProvider_): void;
        isPropertyRegistered(arg0: Internal.ConfigurationProperty_<any>): boolean;
        ifValid(arg0: Internal.Consumer_<T>): boolean;
        getString(...arg0: org.apache.commons.lang3.tuple.Pair_<string, any>[]): string;
        isValid(): boolean;
        toString(): string;
        notifyAll(): void;
        "with"<V>(arg0: Internal.ConfigurationProperty_<V>, arg1: V): C;
        ifValidElse(arg0: Internal.Consumer_<T>, arg1: Internal.Runnable_): boolean;
        generateItemModelData(arg0: Internal.DTItemModelProvider_): void;
        toLoadDataString(): string;
        hashCode(): number;
        wait(): void;
        getRegistryName(): ResourceLocation;
        wait(arg0: number): void;
        ifInvalid(arg0: Internal.Runnable_): boolean;
        equals(arg0: any): boolean;
        getRegisteredProperties(): Internal.Set<Internal.ConfigurationProperty<any>>;
        elseIfInvalid(arg0: T): T;
        get class(): typeof any
        set generateData(arg0: boolean)
        get textComponent(): net.minecraft.network.chat.Component
        set registryName(arg0: ResourceLocation_)
        get defaultConfiguration(): C
        get valid(): boolean
        get registryName(): ResourceLocation
        get registeredProperties(): Internal.Set<Internal.ConfigurationProperty<any>>
    }
    type ConfigurableRegistryEntry_<T extends Internal.ConfigurableRegistryEntry<T, C>, C extends com.ferreusveritas.dynamictrees.api.configuration.Configuration<C, T>> = ConfigurableRegistryEntry<T, C>;
    abstract class TreeDecorator {
        constructor()
        abstract place(arg0: Internal.TreeDecorator$Context_): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.TreeDecorator>;
    }
    type TreeDecorator_ = TreeDecorator;
    class ContainerScreenEvent$Render$Foreground extends Internal.ContainerScreenEvent$Render {
        constructor(arg0: Internal.AbstractContainerScreen_<any>, arg1: Internal.GuiGraphics_, arg2: number, arg3: number)
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        getMouseY(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMouseX(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getContainerScreen(): Internal.AbstractContainerScreen<any>;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get mouseY(): number
        get mouseX(): number
        set result(arg0: Internal.Event$Result_)
        get containerScreen(): Internal.AbstractContainerScreen<any>
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ContainerScreenEvent$Render$Foreground_ = ContainerScreenEvent$Render$Foreground;
    class CopycatSlopeBlock extends Internal.CCWaterloggedCopycatBlock implements Internal.IStateType, Internal.ICustomCTBlocking {
        constructor(pProperties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        checkConnection(reader: Internal.BlockAndTintGetter_, fromPos: BlockPos_, toPos: BlockPos_, fromState: Internal.BlockState_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, player: Internal.Player_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(state: Internal.BlockState_, target: Internal.HitResult_, level: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getBlockEntityClass(): typeof Internal.CCCopycatBlockEntity;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        toggleCT(pState: Internal.BlockState_, pLevel: Internal.Level_, pPos: BlockPos_, pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, pHit: Internal.BlockHitResult_): Internal.InteractionResult;
        static getRequiredItemsForLayer(state: Internal.BlockState_, property: Internal.IntegerProperty_): Internal.ItemRequirement;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        isCTBlocked(reader: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_, connectingPos: BlockPos_, blockingPos: BlockPos_, face: Internal.Direction_): Internal.Optional<boolean>;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(state1: Internal.BlockState_, level: Internal.ServerLevel_, pos: BlockPos_, state2: Internal.BlockState_, entity: Internal.LivingEntity_, numberOfParticles: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getAcceptedBlockState(pLevel: Internal.Level_, pPos: BlockPos_, item: Internal.ItemStack_, face: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(pState: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getCopycatBlockEntity(worldIn: Internal.BlockGetter_, pos: BlockPos_): Internal.ICopycatBlockEntity;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        transform(state: Internal.BlockState_, transform: Internal.StructureTransform_): Internal.BlockState;
        stateType(): Internal.StateType;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        getFriction(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_): number;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, ray: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getTicker<S extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, type: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(pState: Internal.BlockState_, pPlayer: Internal.Player_, pLevel: Internal.BlockGetter_, pPos: BlockPos_): number;
        onRemove(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean, handler: Internal.ICopycatBlock$OnRemoveHandler_): void;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(pState: Internal.BlockState_, pDirection: Internal.Direction_, pNeighborState: Internal.BlockState_, pLevel: Internal.LevelAccessor_, pCurrentPos: BlockPos_, pNeighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_, neighborState: Internal.BlockState_, dir: Internal.Direction_): boolean;
        rotate(state: Internal.BlockState_, rot: Internal.Rotation_): Internal.BlockState;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CCCopycatBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, explosion: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        canOcclude(level: Internal.BlockGetter_, state: Internal.BlockState_, pos: BlockPos_): boolean;
        prepareMaterial(pLevel: Internal.Level_, pPos: BlockPos_, pState: Internal.BlockState_, pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, pHit: Internal.BlockHitResult_, material: Internal.BlockState_): Internal.BlockState;
        getLightEmission(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        blockCTTowards(reader: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_, ctPos: BlockPos_, connectingPos: BlockPos_, face: Internal.Direction_): Internal.Optional<boolean>;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getAppearance(block: Internal.ICopycatBlock_, state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, side: Internal.Direction_, queryState: Internal.BlockState_, queryPos: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.CCCopycatBlockEntity>;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pType: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(pState: Internal.BlockState_, pLevel: Internal.Level_, pPos: BlockPos_, pNewState: Internal.BlockState_, pIsMoving: boolean): void;
        equals(arg0: any): boolean;
        isIgnoredConnectivitySide(reader: Internal.BlockAndTintGetter_, fromState: Internal.BlockState_, face: Internal.Direction_, fromPos: BlockPos_, toPos: BlockPos_, toState: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canConnectTexturesToward(reader: Internal.BlockAndTintGetter_, fromPos: BlockPos_, toPos: BlockPos_, fromState: Internal.BlockState_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CCCopycatBlockEntity>;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(pLevel: Internal.Level_, pState: Internal.BlockState_, pPos: BlockPos_, pEntity: Internal.Entity_, p_152430_: number): void;
        onWrenched(state: Internal.BlockState_, context: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, entity: Internal.Entity_): boolean;
        static getMaterial(level: Internal.BlockGetter_, pos: BlockPos_): Internal.BlockState;
        isValidSpawn(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, type: Internal.SpawnPlacements$Type_, entityType: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        isAcceptedRegardless(material: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(state: Internal.BlockState_, context: Internal.UseOnContext_): Internal.InteractionResult;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_): number;
        isCTEnabled(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_): boolean;
        toString(): string;
        notifyAll(): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CCCopycatBlockEntity;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(worldIn: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, placer: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        canToggleCT(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_): boolean;
        supportsExternalFaceHiding(state: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, side: Internal.Direction_, queryState: Internal.BlockState_, queryPos: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        shapeCanOccludeNeighbor(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_, neighborPos: BlockPos_, dir: Internal.Direction_): Internal.Optional<boolean>;
        mirror(state: Internal.BlockState_, mirror: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static wrappedColor(): Internal.BlockColor;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pContext: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CCCopycatBlockEntity>): void;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get blockEntityClass(): typeof Internal.CCCopycatBlockEntity
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityType(): Internal.BlockEntityType<Internal.CCCopycatBlockEntity>
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly HALF: Internal.EnumProperty<Internal.Half>;
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type CopycatSlopeBlock_ = CopycatSlopeBlock;
    class BarrelBlockEntity extends Internal.RandomizableContainerBlockEntity implements Internal.InventoryChangeTracker {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        redirect$ejg000$fabric_redirectMarkDirty(self: Internal.RandomizableContainerBlockEntity_): void;
        requestModelDataUpdate(): void;
        fabric_setSuppress(suppress: boolean): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        abstract stopForwardingMajorInventoryChanges(arg0: Internal.InventoryChangeListener_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getItem(arg0: number): Internal.ItemStack;
        getCustomName(): net.minecraft.network.chat.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        abstract emitContentModified(): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        handler$dfi000$getCapability(arg0: Internal.Capability_<any>, arg1: Internal.Direction_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        countItem(arg0: Internal.Item_): number;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        abstract forwardMajorInventoryChanges(arg0: Internal.InventoryChangeListener_): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        listenForContentChangesOnce(stackList: Internal.LithiumStackList_, inventoryChangeListener: Internal.InventoryChangeListener_): void;
        getHeight(): number;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        listenForMajorInventoryChanges(inventoryChangeListener: Internal.InventoryChangeListener_): void;
        abstract emitFirstComparatorAdded(): void;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        getLootTable(): ResourceLocation;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        unpackLootTable(arg0: Internal.Player_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        recheckOpen(): void;
        setWorldPosition(arg0: BlockPos_): void;
        clear(): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        abstract emitRemoved(): void;
        clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        stopListenForMajorInventoryChanges(inventoryChangeListener: Internal.InventoryChangeListener_): void;
        abstract emitStackListReplaced(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        handler$cae000$readNbtStackListReplacement(nbt: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        fabric_onFinalCommit(slot: number, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        static setLootTable(arg0: Internal.BlockGetter_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: ResourceLocation_): void;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        handler$bpp000$setInventoryStackListReplacement(list: Internal.NonNullList_<any>, ci: Internal.CallbackInfo_): void;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setLootTable(arg0: ResourceLocation_, arg1: number): void;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        emitCallbackReplaced(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract forwardContentChangeOnce(arg0: Internal.InventoryChangeListener_, arg1: Internal.LithiumStackList_, arg2: Internal.InventoryChangeTracker_): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: net.minecraft.network.chat.Component_): boolean;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set customName(arg0: net.minecraft.network.chat.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get lootTable(): ResourceLocation
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        readonly openersCounter: Internal.ContainerOpenersCounter;
        items: Internal.NonNullList<Internal.ItemStack>;
    }
    type BarrelBlockEntity_ = BarrelBlockEntity;
    interface ErrorHandler {
        abstract error(msg: string): void;
        abstract error(msg: string, event: Internal.LogEvent_, t: Internal.Throwable_): void;
        abstract error(msg: string, t: Internal.Throwable_): void;
    }
    type ErrorHandler_ = ErrorHandler;
    class RegistryEvent$RegistryWrapper <T> {
        constructor(arg0: Internal.IForgeRegistry_<T>)
        getClass(): typeof any;
        register(arg0: T, arg1: ResourceLocation_): void;
        "register(java.lang.Object,java.lang.String)"(arg0: T, arg1: string): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        register(arg0: T, arg1: string): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        "register(java.lang.Object,net.minecraft.resources.ResourceLocation)"(arg0: T, arg1: ResourceLocation_): void;
        wait(): void;
        wait(arg0: number): void;
        registerAll(...arg0: any[]): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type RegistryEvent$RegistryWrapper_<T> = RegistryEvent$RegistryWrapper<T>;
    interface GameRulesBooleanRuleAccessor {
        invokeCreate(initialValue: boolean, changeCallback: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$BooleanValue>): Internal.GameRules$Type<Internal.GameRules$BooleanValue>;
    }
    type GameRulesBooleanRuleAccessor_ = GameRulesBooleanRuleAccessor;
    class NoCollisionCustomTrackBlock extends Internal.TrackBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, material: Internal.TrackMaterial_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getUpNormal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Vec3d;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getElevationAtCenter(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): number;
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        trackEquals(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getYOffsetAt(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        "animateTick(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,java.util.Random)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Random_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        overlay(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TrackBlockEntity>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        static addToListIfConnected(arg0: Internal.TrackNodeLocation_, arg1: Internal.Collection_<Internal.TrackNodeLocation$DiscoveredLocation>, arg2: Internal.BiFunction_<number, boolean, Vec3d>, arg3: Internal.Function_<boolean, Vec3d>, arg4: Internal.Function_<boolean, Internal.ResourceKey<Internal.Level>>, arg5: Internal.Function_<Vec3d, number>, arg6: Vec3d_, arg7: Internal.BezierConnection_, arg8: Internal.BiFunction_<boolean, Vec3d, Internal.TrackMaterial>): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getNearestTrackAxis(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): net.createmod.catnip.data.Pair<Vec3d, Internal.Direction$AxisDirection>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isSlope(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMaterial(): Internal.TrackMaterial;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pContext: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        prepareAssemblyOverlay(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.PoseStack_): Internal.PartialModel;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackBlockEntity>;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackBlockEntity;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_): Internal.TrackMaterial;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        static walkConnectedTracks(arg0: Internal.BlockGetter_, arg1: Internal.TrackNodeLocation_, arg2: boolean): Internal.Collection<Internal.TrackNodeLocation$DiscoveredLocation>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getCurveStart(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): Vec3d;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_, arg2: Internal.TrackMaterial_): Internal.TrackMaterial;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        prepareTrackOverlay<Self extends Internal.Affine<Self>>(arg0: Internal.Affine_<Self>, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BezierTrackPointLocation_, arg5: Internal.Direction$AxisDirection_, arg6: Internal.TrackTargetingBehaviour$RenderedTrackOverlayType_): Internal.PartialModel;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getConnected(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean, arg4: Internal.TrackNodeLocation_): Internal.Collection<Internal.TrackNodeLocation$DiscoveredLocation>;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getTrackAxes(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.List<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        getBogeyAnchor(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        "animateTick(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.util.RandomSource)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackBlockEntity>): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Random_): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getBlockEntityClass(): typeof Internal.TrackBlockEntity;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.TrackBlockEntity>
        get material(): Internal.TrackMaterial
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.TrackBlockEntity
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type NoCollisionCustomTrackBlock_ = NoCollisionCustomTrackBlock;
    interface IntBidirectionalIterator extends Internal.IntIterator, Internal.ObjectBidirectionalIterator<number> {
        forEachRemaining(arg0: any): void;
        "forEachRemaining(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        abstract previousInt(): number;
        skip(arg0: number): number;
        /**
         * @deprecated
        */
        next(): any;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract hasPrevious(): boolean;
        remove(): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        previous(): any;
        abstract nextInt(): number;
    }
    type IntBidirectionalIterator_ = IntBidirectionalIterator;
    interface IntListIterator extends Internal.ListIterator<number>, Internal.IntBidirectionalIterator {
        /**
         * @deprecated
        */
        add(arg0: any): void;
        abstract nextIndex(): number;
        forEachRemaining(arg0: any): void;
        "forEachRemaining(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        set(arg0: any): void;
        set(arg0: number): void;
        /**
         * @deprecated
        */
        add(arg0: number): void;
        add(arg0: number): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        set(arg0: number): void;
        /**
         * @deprecated
        */
        "set(java.lang.Object)"(arg0: any): void;
        "add(int)"(arg0: number): void;
        remove(): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        previous(): any;
        abstract nextInt(): number;
        abstract previousIndex(): number;
        abstract previousInt(): number;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): void;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        "set(java.lang.Integer)"(arg0: number): void;
        abstract hasPrevious(): boolean;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        "set(int)"(arg0: number): void;
        /**
         * @deprecated
        */
        set "(java.lang.Object)"(arg0: any)
        /**
         * @deprecated
        */
        set "(java.lang.Integer)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type IntListIterator_ = IntListIterator;
    interface PoolChunkMetric {
        abstract usage(): number;
        abstract chunkSize(): number;
        abstract freeBytes(): number;
    }
    type PoolChunkMetric_ = PoolChunkMetric;
    interface LivingEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        isUndead(): boolean;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isAmbientCreature(): boolean;
        isMonster(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        self(): Internal.Entity;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): net.minecraft.network.chat.Component;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setY(y: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        setMaxHealth(hp: number): void;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getReachDistance(): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        setZ(z: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        runCommand(command: string): number;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        set defaultMovementSpeedMultiplier(speed: number)
        get ambientCreature(): boolean
        get monster(): boolean
        get offHandItem(): Internal.ItemStack
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        get displayName(): net.minecraft.network.chat.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        set maxHealth(hp: number)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        readonly KJS_PLAYER_CUSTOM_SPEED: (Internal.UUID) & (Internal.UUID);
        readonly KJS_PLAYER_CUSTOM_SPEED_NAME: ("kubejs.player.speed.modifier") & (string);
    }
    type LivingEntityKJS_ = LivingEntityKJS;
    class Pattern implements Internal.Serializable {
        getClass(): typeof any;
        flags(): number;
        toString(): string;
        static compile(arg0: string, arg1: number): Internal.Pattern;
        split(arg0: Internal.CharSequence_, arg1: number): string[];
        notifyAll(): void;
        matcher(arg0: Internal.CharSequence_): Internal.Matcher;
        asMatchPredicate(): Internal.Predicate<string>;
        notify(): void;
        static compile(arg0: string): Internal.Pattern;
        wait(arg0: number, arg1: number): void;
        splitAsStream(arg0: Internal.CharSequence_): Internal.Stream<string>;
        asPredicate(): Internal.Predicate<string>;
        hashCode(): number;
        wait(): void;
        pattern(): string;
        wait(arg0: number): void;
        split(arg0: Internal.CharSequence_): string[];
        static matches(arg0: string, arg1: Internal.CharSequence_): boolean;
        equals(arg0: any): boolean;
        static quote(arg0: string): string;
        get class(): typeof any
        static readonly CANON_EQ: (128) & (number);
        static readonly UNIX_LINES: (1) & (number);
        static readonly DOTALL: (32) & (number);
        static readonly UNICODE_CHARACTER_CLASS: (256) & (number);
        static readonly COMMENTS: (4) & (number);
        static readonly UNICODE_CASE: (64) & (number);
        static readonly CASE_INSENSITIVE: (2) & (number);
        static readonly MULTILINE: (8) & (number);
        static readonly LITERAL: (16) & (number);
    }
    type Pattern_ = Pattern;
    interface GeoAnimatable {
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getBoneResetTime(): number;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        abstract getTick(arg0: any): number;
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get boneResetTime(): number
    }
    type GeoAnimatable_ = GeoAnimatable;
    class StructureManager {
        constructor(arg0: Internal.LevelAccessor_, arg1: Internal.WorldOptions_, arg2: any_)
        getClass(): typeof any;
        "startsForStructure(net.minecraft.core.SectionPos,net.minecraft.world.level.levelgen.structure.Structure)"(arg0: Internal.SectionPos_, arg1: Internal.Structure_): Internal.List<Internal.StructureStart>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartForStructure(arg0: Internal.SectionPos_, arg1: Internal.Structure_, arg2: Internal.StructureAccess_): Internal.StructureStart;
        fillStartsForStructure(arg0: Internal.Structure_, arg1: Internal.LongSet_, arg2: Internal.Consumer_<Internal.StructureStart>): void;
        getAllStructuresAt(arg0: BlockPos_): Internal.Map<Internal.Structure, Internal.LongSet>;
        startsForStructure(arg0: Internal.SectionPos_, arg1: Internal.Structure_): Internal.List<Internal.StructureStart>;
        getStructureWithPieceAt(arg0: BlockPos_, arg1: Internal.TagKey_<Internal.Structure>): Internal.StructureStart;
        getStructureWithPieceAt(arg0: BlockPos_, arg1: Internal.ResourceKey_<Internal.Structure>): Internal.StructureStart;
        shouldGenerateStructures(): boolean;
        "getStructureWithPieceAt(net.minecraft.core.BlockPos,net.minecraft.world.level.levelgen.structure.Structure)"(arg0: BlockPos_, arg1: Internal.Structure_): Internal.StructureStart;
        toString(): string;
        getStructureWithPieceAt(arg0: BlockPos_, arg1: Internal.Structure_): Internal.StructureStart;
        "getStructureWithPieceAt(net.minecraft.core.BlockPos,net.minecraft.resources.ResourceKey)"(arg0: BlockPos_, arg1: Internal.ResourceKey_<Internal.Structure>): Internal.StructureStart;
        notifyAll(): void;
        setStartForStructure(arg0: Internal.SectionPos_, arg1: Internal.Structure_, arg2: Internal.StructureStart_, arg3: Internal.StructureAccess_): void;
        "startsForStructure(net.minecraft.world.level.ChunkPos,java.util.function.Predicate)"(arg0: Internal.ChunkPos_, arg1: Internal.Predicate_<Internal.Structure>): Internal.List<Internal.StructureStart>;
        "getStructureWithPieceAt(net.minecraft.core.BlockPos,net.minecraft.tags.TagKey)"(arg0: BlockPos_, arg1: Internal.TagKey_<Internal.Structure>): Internal.StructureStart;
        registryAccess(): Internal.RegistryAccess;
        addReference(arg0: Internal.StructureStart_): void;
        startsForStructure(arg0: Internal.ChunkPos_, arg1: Internal.Predicate_<Internal.Structure>): Internal.List<Internal.StructureStart>;
        hashCode(): number;
        getStructureAt(arg0: BlockPos_, arg1: Internal.Structure_): Internal.StructureStart;
        wait(): void;
        wait(arg0: number): void;
        hasAnyStructureAt(arg0: BlockPos_): boolean;
        equals(arg0: any): boolean;
        addReferenceForStructure(arg0: Internal.SectionPos_, arg1: Internal.Structure_, arg2: number, arg3: Internal.StructureAccess_): void;
        structureHasPieceAt(arg0: BlockPos_, arg1: Internal.StructureStart_): boolean;
        forWorldGenRegion(arg0: Internal.WorldGenRegion_): this;
        checkStructurePresence(arg0: Internal.ChunkPos_, arg1: Internal.Structure_, arg2: boolean): Internal.StructureCheckResult;
        get class(): typeof any
    }
    type StructureManager_ = StructureManager;
    class ShapedKubeJSRecipe extends Internal.ShapedRecipe implements Internal.KubeJSCraftingRecipe {
        constructor(id: ResourceLocation_, group: string, category: Internal.CraftingBookCategory_, width: number, height: number, ingredients: Internal.NonNullList_<Internal.Ingredient>, result: Internal.ItemStack_, mirror: boolean, ingredientActions: Internal.List_<Internal.IngredientAction>, modifyResult: Internal.ModifyRecipeResultCallback_, stage: string)
        static callShrink(...arg0: string[]): string[];
        getGroup(): string;
        static callPatternFromJson_$md$842b0a$5(arg0: Internal.JsonArray_): string[];
        getToastSymbol(): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(craftingContainer: Internal.CraftingContainer_, level: Internal.Level_): boolean;
        kjs$getModifyResult(): Internal.ModifyRecipeResultCallback;
        getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        static callKeyFromJson_$md$842b0a$4(arg0: Internal.JsonObject_): Internal.Map<any, any>;
        notify(): void;
        assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        static bookshelf$keyFromJson_$md$842b0a$0(arg0: Internal.JsonObject_): Internal.Map<any, any>;
        getId(): ResourceLocation;
        static bookshelf$shrink_$md$842b0a$1(...arg0: string[]): string[];
        kjs$getIngredientActions(): Internal.List<Internal.IngredientAction>;
        static bookshelf$dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getWidth(): number;
        kjs$getStage(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static setCraftingSize(arg0: number, arg1: number): void;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        static bookshelf$patternFromJson_$md$842b0a$2(arg0: Internal.JsonArray_): string[];
        static itemStackFromJson(arg0: Internal.JsonObject_): Internal.ItemStack;
        getType(): ResourceLocation;
        static dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        "getRemainingItems(net.minecraft.world.Container)"(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        static callKeyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        wait(): void;
        isIncomplete(): boolean;
        kjs$assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        static callDissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        matches(arg0: Internal.CraftingContainer_, arg1: number, arg2: number, arg3: boolean): boolean;
        getClass(): typeof any;
        static keyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        matches(craftingContainer: Internal.CraftingContainer_, level: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        static callShrink_$md$842b0a$7(...arg0: string[]): string[];
        wait(arg0: number, arg1: number): void;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        kjs$getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        static bookshelf$shrink(...arg0: string[]): string[];
        static bookshelf$keyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static bookshelf$dissolvePattern_$md$842b0a$3(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        getHeight(): number;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "getRemainingItems(net.minecraft.world.inventory.CraftingContainer)"(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        getRecipeWidth(): number;
        notifyAll(): void;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static callDissolvePattern_$md$842b0a$6(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        static patternFromJson(arg0: Internal.JsonArray_): string[];
        static shrink(...arg0: string[]): string[];
        setGroup(group: string): void;
        static itemFromJson(arg0: Internal.JsonObject_): Internal.Item;
        getResult(): Internal.ItemStack;
        static bookshelf$patternFromJson(arg0: Internal.JsonArray_): string[];
        hashCode(): number;
        getRecipeHeight(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        static callPatternFromJson(arg0: Internal.JsonArray_): string[];
        equals(arg0: any): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get id(): ResourceLocation
        get special(): boolean
        get width(): number
        get type(): ResourceLocation
        get incomplete(): boolean
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get height(): number
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get recipeWidth(): number
        set group(group: string)
        get result(): Internal.ItemStack
        get recipeHeight(): number
        get orCreateId(): ResourceLocation
    }
    type ShapedKubeJSRecipe_ = ShapedKubeJSRecipe;
    class Rectangle extends Internal.Rectangle2D implements Internal.Shape, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Point_, arg1: Internal.Dimension_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Rectangle_)
        constructor(arg0: Internal.Dimension_)
        constructor(arg0: Internal.Point_)
        abstract contains(arg0: number, arg1: number): boolean;
        getBounds(): this;
        contains(arg0: Internal.Point_): boolean;
        contains(arg0: Internal.Rectangle_): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        grow(arg0: number, arg1: number): void;
        getMaxY(): number;
        abstract intersects(arg0: Internal.Rectangle2D_): boolean;
        getCenterY(): number;
        notify(): void;
        abstract contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        "add(double,double)"(arg0: number, arg1: number): void;
        setLocation(arg0: Internal.Point_): void;
        createIntersection(arg0: Internal.Rectangle2D_): Internal.Rectangle2D;
        abstract contains(arg0: Internal.Rectangle2D_): boolean;
        getMinX(): number;
        abstract "contains(double,double,double,double)"(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract "contains(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): boolean;
        abstract getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
        outcode(arg0: Internal.Point2D_): number;
        abstract "intersects(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): boolean;
        abstract contains(arg0: Internal.Point2D_): boolean;
        translate(arg0: number, arg1: number): void;
        getX(): number;
        abstract "contains(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): boolean;
        setFrame(arg0: Internal.Point2D_, arg1: Internal.Dimension2D_): void;
        wait(): void;
        static union(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        /**
         * @deprecated
        */
        resize(arg0: number, arg1: number): void;
        "contains(java.awt.Rectangle)"(arg0: Internal.Rectangle_): boolean;
        "add(java.awt.Rectangle)"(arg0: Internal.Rectangle_): void;
        clone(): any;
        getClass(): typeof any;
        outcode(arg0: number, arg1: number): number;
        "add(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): void;
        "contains(int,int)"(arg0: number, arg1: number): boolean;
        static intersect(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        getMaxX(): number;
        createUnion(arg0: Internal.Rectangle2D_): Internal.Rectangle2D;
        add(arg0: Internal.Rectangle_): void;
        add(arg0: Internal.Point_): void;
        isEmpty(): boolean;
        abstract "contains(double,double)"(arg0: number, arg1: number): boolean;
        intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        add(arg0: number, arg1: number): void;
        getCenterX(): number;
        wait(arg0: number, arg1: number): void;
        getSize(): Internal.Dimension;
        intersectsLine(arg0: Internal.Line2D_): boolean;
        setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getWidth(): number;
        abstract intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        "contains(java.awt.Point)"(arg0: Internal.Point_): boolean;
        setFrame(arg0: Internal.Rectangle2D_): void;
        setBounds(arg0: Internal.Rectangle_): void;
        setRect(arg0: Internal.Rectangle2D_): void;
        add(arg0: number, arg1: number): void;
        getLocation(): Internal.Point;
        getBounds2D(): Internal.Rectangle2D;
        /**
         * @deprecated
        */
        move(arg0: number, arg1: number): void;
        getHeight(): number;
        getMinY(): number;
        setSize(arg0: number, arg1: number): void;
        toString(): string;
        "contains(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        add(arg0: Internal.Point2D_): void;
        setFrameFromCenter(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        /**
         * @deprecated
        */
        inside(arg0: number, arg1: number): boolean;
        notifyAll(): void;
        setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
        */
        reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "add(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): void;
        intersects(arg0: Internal.Rectangle_): boolean;
        setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSize(arg0: Internal.Dimension_): void;
        add(arg0: Internal.Rectangle2D_): void;
        getY(): number;
        hashCode(): number;
        contains(arg0: number, arg1: number): boolean;
        intersection(arg0: Internal.Rectangle_): this;
        getFrame(): Internal.Rectangle2D;
        wait(arg0: number): void;
        union(arg0: Internal.Rectangle_): this;
        setLocation(arg0: number, arg1: number): void;
        "intersects(java.awt.Rectangle)"(arg0: Internal.Rectangle_): boolean;
        setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
        equals(arg0: any): boolean;
        setFrameFromDiagonal(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        "add(java.awt.Point)"(arg0: Internal.Point_): void;
        "add(int,int)"(arg0: number, arg1: number): void;
        get bounds(): Internal.Rectangle
        get maxY(): number
        get centerY(): number
        set location(arg0: Internal.Point_)
        get minX(): number
        get x(): number
        get class(): typeof any
        get maxX(): number
        get empty(): boolean
        get centerX(): number
        get size(): Internal.Dimension
        get width(): number
        set frame(arg0: Internal.Rectangle2D_)
        set bounds(arg0: Internal.Rectangle_)
        set rect(arg0: Internal.Rectangle2D_)
        get location(): Internal.Point
        get bounds2D(): Internal.Rectangle2D
        get height(): number
        get minY(): number
        set size(arg0: Internal.Dimension_)
        get y(): number
        get frame(): Internal.Rectangle2D
        width: number;
        height: number;
        x: number;
        y: number;
    }
    type Rectangle_ = Rectangle;
    class FramedInventoryCableConnectorBlock extends Internal.InventoryCableConnectorBlock implements Internal.IPaintable {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        static "box(double,double,double,double,double,double)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        paint(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        next(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.List<BlockPos>;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canConnectFrom(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        static canConnect(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        static readBlockState(arg0: Internal.Level_, arg1: Internal.CompoundTag_): Internal.BlockState;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        withConnectionProperties(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type FramedInventoryCableConnectorBlock_ = FramedInventoryCableConnectorBlock;
    interface IHaveBigOutline {
    }
    type IHaveBigOutline_ = IHaveBigOutline;
    interface RecipeComponent <T> {
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<T>;
        orSelf(): this;
        abstract read(arg0: Internal.RecipeJS_, arg1: any): T;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        abstract componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        abstract write(arg0: Internal.RecipeJS_, arg1: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
    }
    type RecipeComponent_<T> = RecipeComponent<T>;
    class ConfigProperty$IntegerFormatter extends Internal.Enum<Internal.ConfigProperty$IntegerFormatter> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.ConfigProperty$IntegerFormatter[];
        static getSafe(arg0: number): Internal.ConfigProperty$IntegerFormatter;
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ConfigProperty$IntegerFormatter>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        "compareTo(com.brandon3055.draconicevolution.api.config.ConfigProperty$IntegerFormatter)"(arg0: Internal.ConfigProperty$IntegerFormatter_): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.ConfigProperty$IntegerFormatter;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ConfigProperty$IntegerFormatter_): number;
        getDeclaringClass(): typeof Internal.ConfigProperty$IntegerFormatter;
        format(arg0: number): string;
        get class(): typeof any
        get declaringClass(): typeof Internal.ConfigProperty$IntegerFormatter
        static readonly AOE: (Internal.ConfigProperty$IntegerFormatter) & (Internal.ConfigProperty$IntegerFormatter);
        static readonly RAW: (Internal.ConfigProperty$IntegerFormatter) & (Internal.ConfigProperty$IntegerFormatter);
    }
    type ConfigProperty$IntegerFormatter_ = "aoe" | "raw" | ConfigProperty$IntegerFormatter;
    interface IZetaBlockExtensions {
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        readonly DEFAULT: Internal.IZetaBlockExtensions;
    }
    type IZetaBlockExtensions_ = IZetaBlockExtensions;
    interface ICraftingGridHelper {
        abstract createAndSetInputs<T>(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<Internal.List<T>>, arg3: number, arg4: number): Internal.List<Internal.IRecipeSlotBuilder>;
        abstract createAndSetOutputs<T>(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<T>): Internal.IRecipeSlotBuilder;
        createAndSetOutputs(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.List_<Internal.ItemStack>): Internal.IRecipeSlotBuilder;
        abstract setInputs<T>(arg0: Internal.List_<Internal.IRecipeSlotBuilder>, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<Internal.List<T>>, arg3: number, arg4: number): void;
        createAndSetInputs(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.List_<Internal.List<Internal.ItemStack>>, arg2: number, arg3: number): Internal.List<Internal.IRecipeSlotBuilder>;
    }
    type ICraftingGridHelper_ = ICraftingGridHelper;
    interface ServerTickingBlockEntity {
        abstract serverTick(): void;
        (): void;
    }
    type ServerTickingBlockEntity_ = (()=> void) | ServerTickingBlockEntity;
    class BrainDebugRenderer$BrainDump {
        constructor(arg0: Internal.UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: Internal.Position_, arg8: string, arg9: net.minecraft.world.level.pathfinder.Path_, arg10: boolean, arg11: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getUuid(): Internal.UUID;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get uuid(): Internal.UUID
        readonly name: string;
        readonly path: net.minecraft.world.level.pathfinder.Path;
        readonly angerLevel: number;
        readonly pos: Internal.Position;
        readonly maxHealth: number;
        readonly memories: Internal.List<string>;
        readonly potentialPois: Internal.Set<BlockPos>;
        readonly wantsGolem: boolean;
        readonly activities: Internal.List<string>;
        readonly profession: string;
        readonly xp: number;
        readonly pois: Internal.Set<BlockPos>;
        readonly uuid: Internal.UUID;
        readonly id: number;
        readonly inventory: string;
        readonly health: number;
        readonly behaviors: Internal.List<string>;
        readonly gossips: Internal.List<string>;
    }
    type BrainDebugRenderer$BrainDump_ = BrainDebugRenderer$BrainDump;
    interface IRecipeSlotDrawable extends Internal.IRecipeSlotView {
        getDisplayedIngredient<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract getSlotName(): Internal.Optional<string>;
        abstract getDisplayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>;
        abstract drawHighlight(arg0: Internal.GuiGraphics_, arg1: number): void;
        abstract getTooltip(arg0: Internal.ITooltipBuilder_): void;
        getItemStacks(): Internal.Stream<Internal.ItemStack>;
        abstract setPosition(arg0: number, arg1: number): void;
        isEmpty(): boolean;
        abstract getAreaIncludingBackground(): Internal.Rect2i;
        abstract draw(arg0: Internal.GuiGraphics_): void;
        abstract createDisplayOverrides(): Internal.IIngredientConsumer;
        abstract clearDisplayOverrides(): void;
        getIngredients<T>(arg0: Internal.IIngredientType_<T>): Internal.Stream<T>;
        abstract getTooltip(): Internal.List<net.minecraft.network.chat.Component>;
        abstract drawHoverOverlays(arg0: Internal.GuiGraphics_): void;
        abstract getAllIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        addTooltipCallback(arg0: Internal.IRecipeSlotTooltipCallback_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getRect(): Internal.Rect2i;
        abstract isMouseOver(arg0: number, arg1: number): boolean;
        abstract getRole(): Internal.RecipeIngredientRole;
        getDisplayedItemStack(): Internal.Optional<Internal.ItemStack>;
        get slotName(): Internal.Optional<string>
        get displayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>
        get itemStacks(): Internal.Stream<Internal.ItemStack>
        get empty(): boolean
        get areaIncludingBackground(): Internal.Rect2i
        get tooltip(): Internal.List<net.minecraft.network.chat.Component>
        get allIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get rect(): Internal.Rect2i
        get role(): Internal.RecipeIngredientRole
        get displayedItemStack(): Internal.Optional<Internal.ItemStack>
    }
    type IRecipeSlotDrawable_ = IRecipeSlotDrawable;
    interface BlockPredicateType <P extends net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate> {
        abstract codec(): Internal.Codec<P>;
        (): Internal.Codec_<P>;
        readonly REPLACEABLE: Internal.BlockPredicateType<Internal.ReplaceablePredicate>;
        readonly MATCHING_FLUIDS: Internal.BlockPredicateType<Internal.MatchingFluidsPredicate>;
        readonly HAS_STURDY_FACE: Internal.BlockPredicateType<Internal.HasSturdyFacePredicate>;
        readonly MATCHING_BLOCK_TAG: Internal.BlockPredicateType<Internal.MatchingBlockTagPredicate>;
        readonly SOLID: Internal.BlockPredicateType<Internal.SolidPredicate>;
        readonly TRUE: Internal.BlockPredicateType<Internal.TrueBlockPredicate>;
        readonly WOULD_SURVIVE: Internal.BlockPredicateType<Internal.WouldSurvivePredicate>;
        readonly INSIDE_WORLD_BOUNDS: Internal.BlockPredicateType<Internal.InsideWorldBoundsPredicate>;
        readonly ANY_OF: Internal.BlockPredicateType<Internal.AnyOfPredicate>;
        readonly ALL_OF: Internal.BlockPredicateType<Internal.AllOfPredicate>;
        readonly MATCHING_BLOCKS: Internal.BlockPredicateType<Internal.MatchingBlocksPredicate>;
        readonly NOT: Internal.BlockPredicateType<Internal.NotPredicate>;
    }
    type BlockPredicateType_<P extends net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate> = (()=> Internal.Codec_<P>) | BlockPredicateType<P> | Special.BlockPredicateType;
    class BiomeModifier$Phase extends Internal.Enum<Internal.BiomeModifier$Phase> {
        compareTo(arg0: Internal.BiomeModifier$Phase_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.BiomeModifier$Phase[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.BiomeModifier$Phase;
        name(): string;
        "compareTo(net.minecraftforge.common.world.BiomeModifier$Phase)"(arg0: Internal.BiomeModifier$Phase_): number;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BiomeModifier$Phase>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.BiomeModifier$Phase;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.BiomeModifier$Phase
        static readonly ADD: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly AFTER_EVERYTHING: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly BEFORE_EVERYTHING: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly MODIFY: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly REMOVE: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
    }
    type BiomeModifier$Phase_ = "remove" | BiomeModifier$Phase | "before_everything" | "modify" | "after_everything" | "add";
    interface SkinManager$SkinTextureCallback {
        abstract onSkinTextureAvailable(arg0: Internal.MinecraftProfileTexture$Type_, arg1: ResourceLocation_, arg2: Internal.MinecraftProfileTexture_): void;
        (arg0: Internal.MinecraftProfileTexture$Type, arg1: ResourceLocation, arg2: Internal.MinecraftProfileTexture): void;
    }
    type SkinManager$SkinTextureCallback_ = SkinManager$SkinTextureCallback | ((arg0: Internal.MinecraftProfileTexture$Type, arg1: ResourceLocation, arg2: Internal.MinecraftProfileTexture)=> void);
    class ManaSplitterBlock extends Internal.BotaniaWaterloggedBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type ManaSplitterBlock_ = ManaSplitterBlock;
    class TileBCore extends Internal.BlockEntity implements Internal.IDataManagerProvider, Internal.Nameable, Internal.IDataRetainingTile {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        onPlayerCloseContainer(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        getTime(): number;
        "setupPowerSlot(net.minecraftforge.items.IItemHandler,int,com.brandon3055.brandonscore.api.power.IOPStorage,com.brandon3055.brandonscore.lib.datamanager.ManagedBool)"(arg0: Internal.IItemHandler_, arg1: number, arg2: Internal.IOPStorage_, arg3: Internal.ManagedBool_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readExtraNBT(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(arg0: Internal.CompoundTag_): void;
        saveToItem(): boolean;
        setChanged(): void;
        removeTickable(arg0: Internal.Runnable_): boolean;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        createClientBoundPacket(arg0: number): Internal.PacketCustom;
        setClientSidePacketHandler(arg0: number, arg1: Internal.Consumer_<Internal.MCDataInput>): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        sendPacketToClient(arg0: Internal.ServerPlayer_, arg1: Internal.Consumer_<Internal.MCDataOutput>, arg2: number): void;
        sendPacketToChunk(arg0: Internal.Consumer_<Internal.MCDataOutput>, arg1: number): void;
        setRemoved(): void;
        toggleDebugOutput(arg0: Internal.Player_): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        setCustomName(arg0: string): void;
        static sendEnergyTo(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: number, arg3: Internal.Direction_): number;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        setItemSavedDataObject(arg0: string, arg1: Internal.INBTSerializable_<Internal.CompoundTag>): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        dirtyBlock(): void;
        isTileEnabled(): boolean;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        sendPacketToClients(arg0: Internal.Collection_<Internal.Player>, arg1: Internal.Consumer_<Internal.MCDataOutput>, arg2: number): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        detectAndSendChanges(arg0: boolean): void;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        "setupPowerSlot(net.minecraftforge.items.IItemHandler,int,com.brandon3055.brandonscore.api.power.IOPStorage,boolean)"(arg0: Internal.IItemHandler_, arg1: number, arg2: Internal.IOPStorage_, arg3: boolean): void;
        fabric_hasPersistentAttachments(): boolean;
        posSeed(): number;
        clearRemoved(): void;
        debug(arg0: any): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        onInterval(arg0: number): boolean;
        getRSMode(): Internal.IRSSwitchable$RSMode;
        fabric_getAttachments(): Internal.Map<any, any>;
        sendEnergyTo(arg0: number, arg1: Internal.Direction_): number;
        setupPowerSlot(arg0: Internal.IItemHandler_, arg1: number, arg2: Internal.IOPStorage_, arg3: boolean): void;
        sdl$getDynamicLightX(): number;
        readFromItemStack(arg0: Internal.CompoundTag_): void;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        setSavedDataObject(arg0: string, arg1: Internal.INBTSerializable_<Internal.CompoundTag>): void;
        hasLevel(): boolean;
        notifyAll(): void;
        readExtraTileAndStack(arg0: Internal.CompoundTag_): void;
        sdl$dynamicLightTick(): void;
        sendEnergyToAll(arg0: number, arg1: number): number;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        writeExtraNBT(arg0: Internal.CompoundTag_): void;
        writeExtraTileAndStack(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        static sendEnergyToAll(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: number, arg3: number): number;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addTickable<T extends Internal.Runnable>(arg0: T): T;
        setServerSidePacketHandler(arg0: number, arg1: Internal.BiConsumer_<Internal.MCDataInput, Internal.ServerPlayer>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        writeToItemStack(arg0: Internal.CompoundTag_, arg1: boolean): void;
        setRSMode(arg0: Internal.IRSSwitchable$RSMode_): void;
        sdl$getDynamicLightY(): number;
        sendPacketToServer(arg0: Internal.Consumer_<Internal.MCDataOutput>, arg1: number): void;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        receivePacketFromServer(arg0: Internal.MCDataInput_, arg1: number): void;
        setupPowerSlot(arg0: Internal.IItemHandler_, arg1: number, arg2: Internal.IOPStorage_, arg3: Internal.ManagedBool_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getAccessingPlayers(): Internal.Set<Internal.Player>;
        tick(): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        hasRSSignal(): boolean;
        createServerBoundPacket(arg0: number): Internal.PacketCustom;
        updateBlock(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        debugEnabled(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        onSignalChange(arg0: boolean): void;
        getAccessDistanceSq(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        register<M extends Internal.IManagedData>(arg0: M): M;
        receivePacketFromClient(arg0: Internal.MCDataInput_, arg1: Internal.ServerPlayer_, arg2: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        cycleRSMode(arg0: boolean): void;
        getDataManager(): Internal.TileDataManager<any>;
        onPlayerOpenContainer(arg0: Internal.Player_): void;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        sendPacketToClient(arg0: Internal.Consumer_<Internal.MCDataOutput>, arg1: number): Internal.PacketCustom;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        enablePlayerAccessTracking(arg0: boolean): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        onTileLoaded(): void;
        installIOTracker(arg0: Internal.OPStorage_): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        getCapManager(): Internal.TileCapabilityManager;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        sendPacketToClients(arg0: Internal.Collection_<Internal.Player>, arg1: Internal.PacketCustom_): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        onNeighborChange(arg0: BlockPos_): void;
        getRSSignal(): number;
        get time(): number
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        set customName(arg0: string)
        get type(): Internal.BlockEntityType<any>
        get tileEnabled(): boolean
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        get RSMode(): Internal.IRSSwitchable$RSMode
        get persistentData(): Internal.CompoundTag
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        set RSMode(arg0: Internal.IRSSwitchable$RSMode_)
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get accessingPlayers(): Internal.Set<Internal.Player>
        get accessDistanceSq(): number
        get level(): Internal.Level
        get dataManager(): Internal.TileDataManager<any>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get capManager(): Internal.TileCapabilityManager
        get renderData(): any
        get modelData(): Internal.ModelData
        get RSSignal(): number
        static readonly LOGGER: (Internal.Logger) & (org.apache.logging.log4j.Logger);
    }
    type TileBCore_ = TileBCore;
    abstract class Fluid implements Internal.FluidVariantCache, Internal.FluidInvokerMixin, Internal.IForgeFluid, Internal.InjectedFluidExtension {
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        abstract getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        isEmpty(): boolean;
        abstract getOwnHeight(arg0: Internal.FluidState_): number;
        callAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        abstract getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        abstract getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        abstract getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        abstract getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        handler$eje000$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get bucket(): Internal.Item
        static readonly FLUID_STATE_REGISTRY: Internal.IdMapper<Internal.FluidState>;
    }
    type Fluid_ = Special.Fluid | Fluid;
    interface IRef {
        abstract readRaw<T>(): T;
        abstract setPersistedPrefixName(arg0: string): void;
        abstract isSyncDirty(): boolean;
        abstract isPersistedDirty(): boolean;
        abstract clearSyncDirty(): void;
        abstract getKey(): Internal.ManagedKey;
        abstract isLazy(): boolean;
        abstract clearPersistedDirty(): void;
        abstract getPersistedPrefixName(): string;
        update(): void;
        abstract markAsDirty(): void;
        abstract setOnSyncListener(arg0: it.unimi.dsi.fastutil.booleans.BooleanConsumer_): void;
        abstract setOnPersistedListener(arg0: it.unimi.dsi.fastutil.booleans.BooleanConsumer_): void;
        getPersistedKey(): string;
        set persistedPrefixName(arg0: string)
        get syncDirty(): boolean
        get persistedDirty(): boolean
        get key(): Internal.ManagedKey
        get lazy(): boolean
        get persistedPrefixName(): string
        set onSyncListener(arg0: it.unimi.dsi.fastutil.booleans.BooleanConsumer_)
        set onPersistedListener(arg0: it.unimi.dsi.fastutil.booleans.BooleanConsumer_)
        get persistedKey(): string
    }
    type IRef_ = IRef;
    class RegistrateItemModelProvider extends Internal.ItemModelProvider implements Internal.RegistrateProvider {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.PackOutput_, arg2: Internal.ExistingFileHelper_)
        "withExistingParent(java.lang.String,java.lang.String)"(arg0: string, arg1: string): Internal.ItemModelBuilder;
        pressurePlateDown(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        doorTopLeft(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        cubeBottomTop(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        paneNoSide(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        doorBottomLeft(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        static saveStable(arg0: Internal.CachedOutput_, arg1: Internal.JsonElement_, arg2: Internal.Path_): Internal.CompletableFuture<any>;
        carpet(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        orientable(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        fenceInventory(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        notify(): void;
        blockWithInventoryModel(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): Internal.ItemModelBuilder;
        button(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        "basicItem(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.ItemModelBuilder;
        blockSprite(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        stairs(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        stairsInner(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        panePost(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        cross(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        torchWall(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        nested(): Internal.ItemModelBuilder;
        sign(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        cubeColumn(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        modLoc(arg0: string): ResourceLocation;
        cubeColumnHorizontal(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        torch(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        "withExistingParent(java.lang.String,net.minecraft.resources.ResourceLocation)"(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        getBuilder(arg0: string): Internal.ItemModelBuilder;
        doorTopRightOpen(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        mcLoc(arg0: string): ResourceLocation;
        buttonInventory(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        pressurePlate(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        fenceGateWall(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        blockSprite(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): Internal.ItemModelBuilder;
        orientableWithBottom(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): Internal.ItemModelBuilder;
        trapdoorBottom(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        fenceGate(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        withExistingParent(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        handheld(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): Internal.ItemModelBuilder;
        buttonPressed(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        cubeTop(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        trapdoorOrientableTop(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        "basicItem(net.minecraft.world.item.Item)"(arg0: Internal.Item_): Internal.ItemModelBuilder;
        wait(): void;
        getExistingFile(arg0: ResourceLocation_): Internal.ModelFile$ExistingModelFile;
        wallSide(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        wallSideTall(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        cubeAll(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        wallInventory(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        doorBottomLeftOpen(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        trapdoorTop(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        blockItem(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: string): Internal.ItemModelBuilder;
        getClass(): typeof any;
        fenceGateOpen(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        singleTexture(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        leaves(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        itemTexture(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): ResourceLocation;
        basicItem(arg0: ResourceLocation_): Internal.ItemModelBuilder;
        trapdoorOrientableBottom(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        trapdoorOrientableOpen(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        wait(arg0: number, arg1: number): void;
        paneSide(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        cube(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_, arg6: ResourceLocation_): Internal.ItemModelBuilder;
        singleTexture(arg0: string, arg1: ResourceLocation_, arg2: string, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        generated(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): Internal.ItemModelBuilder;
        trapdoorOpen(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        fenceGateWallOpen(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        doorTopRight(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        basicItem(arg0: Internal.Item_): Internal.ItemModelBuilder;
        getName(): string;
        slabTop(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        doorBottomRight(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        blockItem(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): Internal.ItemModelBuilder;
        fenceSide(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        doorTopLeftOpen(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        fencePost(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        withExistingParent(arg0: string, arg1: string): Internal.ItemModelBuilder;
        doorBottomRightOpen(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        toString(): string;
        slab(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        generated(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, ...arg1: ResourceLocation_[]): Internal.ItemModelBuilder;
        orientableVertical(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        notifyAll(): void;
        getSide(): Internal.LogicalSide;
        crop(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        handheld(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        paneSideAlt(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_): Internal.ItemModelBuilder;
        abstract run(arg0: Internal.CachedOutput_): Internal.CompletableFuture<any>;
        name(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): string;
        hashCode(): number;
        wallPost(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        paneNoSideAlt(arg0: string, arg1: ResourceLocation_): Internal.ItemModelBuilder;
        stairsOuter(arg0: string, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): Internal.ItemModelBuilder;
        wait(arg0: number): void;
        modid(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>): string;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): string
        get side(): Internal.LogicalSide
    }
    type RegistrateItemModelProvider_ = RegistrateItemModelProvider;
    interface IMapDataPacketExtension {
        abstract moonlight$getDimension(): Internal.ResourceKey<Internal.Level>;
        abstract moonlight$sendCustomDecorations(arg0: Internal.Collection_<Internal.CustomMapDecoration>): void;
        abstract moonlight$getCustomMapDataTag(): Internal.CompoundTag;
        abstract moonlight$sendCustomMapDataTag(arg0: Internal.CompoundTag_): void;
        abstract moonlight$getColorPatch(): Internal.MapItemSavedData$MapPatch;
    }
    type IMapDataPacketExtension_ = IMapDataPacketExtension;
    class LongSummaryStatistics implements Internal.LongConsumer, Internal.IntConsumer {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        "andThen(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        toString(): string;
        getCount(): number;
        combine(arg0: Internal.LongSummaryStatistics_): void;
        notifyAll(): void;
        "andThen(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        notify(): void;
        accept(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        "accept(int)"(arg0: number): void;
        getSum(): number;
        hashCode(): number;
        andThen(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        getAverage(): number;
        wait(): void;
        getMin(): number;
        wait(arg0: number): void;
        accept(arg0: number): void;
        getMax(): number;
        equals(arg0: any): boolean;
        "accept(long)"(arg0: number): void;
        get class(): typeof any
        get count(): number
        get sum(): number
        get average(): number
        get min(): number
        get max(): number
    }
    type LongSummaryStatistics_ = LongSummaryStatistics;
    class TrackTargetingBlockItem$OverlapResult extends Internal.Enum<Internal.TrackTargetingBlockItem$OverlapResult> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.TrackTargetingBlockItem$OverlapResult[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(arg0: string): Internal.TrackTargetingBlockItem$OverlapResult;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.TrackTargetingBlockItem$OverlapResult;
        "compareTo(com.simibubi.create.content.trains.track.TrackTargetingBlockItem$OverlapResult)"(arg0: Internal.TrackTargetingBlockItem$OverlapResult_): number;
        static railways$createType_$md$842b0a$0(arg0: string, arg1: number, arg2: string): Internal.TrackTargetingBlockItem$OverlapResult;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TrackTargetingBlockItem$OverlapResult>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.TrackTargetingBlockItem$OverlapResult_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.TrackTargetingBlockItem$OverlapResult
        static readonly NO_TRACK: (Internal.TrackTargetingBlockItem$OverlapResult) & (Internal.TrackTargetingBlockItem$OverlapResult);
        static readonly JUNCTION: (Internal.TrackTargetingBlockItem$OverlapResult) & (Internal.TrackTargetingBlockItem$OverlapResult);
        static readonly OCCUPIED: (Internal.TrackTargetingBlockItem$OverlapResult) & (Internal.TrackTargetingBlockItem$OverlapResult);
        feedback: string;
        static readonly VALID: (Internal.TrackTargetingBlockItem$OverlapResult) & (Internal.TrackTargetingBlockItem$OverlapResult);
    }
    type TrackTargetingBlockItem$OverlapResult_ = "valid" | "no_track" | "junction" | TrackTargetingBlockItem$OverlapResult | "not_straight" | "occupied";
    class CraftingComponentsEventJS extends Internal.StartupEventJS {
        constructor()
        getClass(): typeof any;
        setMaterialEntry(arg0: CraftingComponent_, arg1: number, arg2: MaterialEntry_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        setItem(arg0: CraftingComponent_, arg1: number, arg2: Internal.ItemStack_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setFallbackItem(arg0: CraftingComponent_, arg1: Internal.ItemStack_): void;
        removeTier(arg0: CraftingComponent_, arg1: number): void;
        setMaterialEntries(arg0: CraftingComponent_, arg1: Internal.Map_<any, any>): void;
        setTags(arg0: CraftingComponent_, arg1: Internal.Map_<any, any>): void;
        setItems(arg0: CraftingComponent_, arg1: Internal.Map_<any, any>): void;
        removeTiers(arg0: CraftingComponent_, ...arg1: number[]): void;
        createItem(arg0: string, arg1: Internal.ItemStack_): Internal.CraftingComponentsEventJS$ComponentWrapper;
        setTag(arg0: CraftingComponent_, arg1: number, arg2: ResourceLocation_): void;
        toString(): string;
        notifyAll(): void;
        createMaterialEntry(arg0: string, arg1: MaterialEntry_): Internal.CraftingComponentsEventJS$ComponentWrapper;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        setFallbackTag(arg0: CraftingComponent_, arg1: ResourceLocation_): void;
        set(arg0: CraftingComponent_, arg1: Internal.Map_<any, any>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        setFallbackMaterialEntry(arg0: CraftingComponent_, arg1: MaterialEntry_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        createTag(arg0: string, arg1: ResourceLocation_): Internal.CraftingComponentsEventJS$ComponentWrapper;
        get class(): typeof any
    }
    type CraftingComponentsEventJS_ = CraftingComponentsEventJS;
    class SimpleColor implements dev.latvian.mods.rhino.mod.util.color.Color {
        constructor(v: number)
        getClass(): typeof any;
        toString(): string;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        notifyAll(): void;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        getRgbJS(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSerializeJS(): string;
        hashCode(): number;
        wait(): void;
        createTextColorJS(): Internal.TextColor;
        wait(arg0: number): void;
        getHexJS(): string;
        getFireworkColorJS(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get argbJS(): number
        get rgbJS(): number
        get serializeJS(): string
        get hexJS(): string
        get fireworkColorJS(): number
        static readonly BLACK: (Internal.SimpleColor) & (Internal.SimpleColor);
        static readonly WHITE: (Internal.SimpleColor) & (Internal.SimpleColor);
    }
    type SimpleColor_ = SimpleColor;
    interface Darkness$DynamicTextureHook {
        abstract chloride$enableDarkness(): void;
        (): void;
    }
    type Darkness$DynamicTextureHook_ = (()=> void) | Darkness$DynamicTextureHook;
    abstract class Line2D implements Internal.Shape, Internal.Cloneable {
        contains(arg0: number, arg1: number): boolean;
        abstract getY2(): number;
        getBounds(): Internal.Rectangle;
        intersects(arg0: Internal.Rectangle2D_): boolean;
        setLine(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        notify(): void;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        static ptLineDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        contains(arg0: Internal.Rectangle2D_): boolean;
        abstract getX1(): number;
        "contains(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): boolean;
        getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        abstract getP1(): Internal.Point2D;
        static ptLineDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        contains(arg0: Internal.Point2D_): boolean;
        "contains(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): boolean;
        ptSegDist(arg0: Internal.Point2D_): number;
        static ptSegDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        wait(): void;
        ptLineDist(arg0: Internal.Point2D_): number;
        ptSegDistSq(arg0: number, arg1: number): number;
        relativeCCW(arg0: number, arg1: number): number;
        clone(): any;
        getClass(): typeof any;
        abstract getY1(): number;
        intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        static relativeCCW(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        wait(arg0: number, arg1: number): void;
        intersectsLine(arg0: Internal.Line2D_): boolean;
        setLine(arg0: Internal.Line2D_): void;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        ptLineDistSq(arg0: number, arg1: number): number;
        static linesIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): boolean;
        abstract getBounds2D(): Internal.Rectangle2D;
        abstract setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        abstract getX2(): number;
        ptLineDist(arg0: number, arg1: number): number;
        toString(): string;
        notifyAll(): void;
        static ptSegDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        abstract getP2(): Internal.Point2D;
        ptLineDistSq(arg0: Internal.Point2D_): number;
        hashCode(): number;
        wait(arg0: number): void;
        relativeCCW(arg0: Internal.Point2D_): number;
        ptSegDist(arg0: number, arg1: number): number;
        equals(arg0: any): boolean;
        ptSegDistSq(arg0: Internal.Point2D_): number;
        get y2(): number
        get bounds(): Internal.Rectangle
        get x1(): number
        get p1(): Internal.Point2D
        get class(): typeof any
        get y1(): number
        set line(arg0: Internal.Line2D_)
        get bounds2D(): Internal.Rectangle2D
        get x2(): number
        get p2(): Internal.Point2D
    }
    type Line2D_ = Line2D;
    interface InjectedBucketItemExtension {
        arch$getFluid(): Internal.Fluid;
    }
    type InjectedBucketItemExtension_ = InjectedBucketItemExtension;
    interface IWrenchable {
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
    }
    type IWrenchable_ = IWrenchable;
    interface ICasterTool extends Internal.IScribeable, Internal.ISpellHotkeyListener, Internal.IDisplayMana, Internal.ISpellCasterProvider {
        onNextKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
        onQuickCast(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_, arg2: Internal.InteractionHand_, arg3: number): void;
        getSpellCaster(): Internal.ISpellCaster;
        sendSetMessage(arg0: Internal.Player_): void;
        shouldDisplay(arg0: Internal.ItemStack_): boolean;
        onPreviousKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canQuickCast(): boolean;
        setSpell(arg0: Internal.ISpellCaster_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.ItemStack_, arg4: Internal.Spell_): boolean;
        sendInvalidMessage(arg0: Internal.Player_): void;
        onScribe(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_): boolean;
        "getSpellCaster(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ISpellCaster;
        getSpellCaster(arg0: Internal.ItemStack_): Internal.ISpellCaster;
        getSpellCaster(arg0: Internal.CompoundTag_): Internal.ISpellCaster;
        getInformation(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        "getSpellCaster(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): Internal.ISpellCaster;
        onOpenBookMenuKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        isScribedSpellValid(arg0: Internal.ISpellCaster_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.ItemStack_, arg4: Internal.Spell_): boolean;
        get spellCaster(): Internal.ISpellCaster
    }
    type ICasterTool_ = ICasterTool;
    interface Copyable <T> {
        abstract copy(): T;
        (): T;
    }
    type Copyable_<T> = (()=> T) | Copyable<T>;
    class MolecularAssemblerBlockEntity extends Internal.AENetworkInvBlockEntity implements Internal.IPowerChannelState, Internal.IUpgradeableObject, Internal.IGridTickable, Internal.ICraftingMachine {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setAnimationStatus(arg0: Internal.AssemblerAnimationStatus_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        disassembleWithWrench(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_): Internal.InteractionResult;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setName(arg0: string): void;
        getMainNode(): Internal.IManagedGridNode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getGridNode(arg0: Internal.Direction_): Internal.IGridNode;
        abstract isClientSide(): boolean;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
        getCraftingMachineInfo(): Internal.PatternContainerGroup;
        getActionableNode(): Internal.IGridNode;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        addAdditionalDrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.List_<Internal.ItemStack>): void;
        getUpgrades(): Internal.IUpgradeInventory;
        setOwner(arg0: Internal.Player_): void;
        getRenderBoundingBox(): Internal.AABB;
        getCustomName(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        ifGridPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        getTop(): Internal.Direction;
        sdl$shouldUpdateDynamicLight(): boolean;
        hasAnyComparatorNearby(): boolean;
        loadTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        isActive(): boolean;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getGlobalPos(): Internal.GlobalPos;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        acceptsPlans(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getReadyInvoked(): number;
        sdl$getDynamicLightX(): number;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getCraftingProgress(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        static of(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockEntity_): Internal.ICraftingMachine;
        sdl$dynamicLightTick(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        onReady(): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        wait(arg0: number): void;
        tickingRequest(arg0: Internal.IGridNode_, arg1: number): Internal.TickRateModulation;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        onChangeInventory(arg0: Internal.InternalInventory_, arg1: number): void;
        static registerBlockEntityItem(arg0: Internal.BlockEntityType_<any>, arg1: Internal.Item_): void;
        clearContent(): void;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        static of(arg0: Internal.BlockEntity_, arg1: Internal.Direction_): Internal.ICraftingMachine;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        isPowered(): boolean;
        getGridNode(): Internal.IGridNode;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        getTickingRequest(arg0: Internal.IGridNode_): Internal.TickingRequest;
        invalidateCaps(): void;
        notLoaded(): boolean;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        getBlockEntity(): Internal.BlockEntity;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        getCurrentPattern(): Internal.IMolecularAssemblerSupportedPattern;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        getInternalInventory(): Internal.InternalInventory;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getQueuedForReady(): number;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        equals(arg0: any): boolean;
        getAnimationStatus(): Internal.AssemblerAnimationStatus;
        pushPattern(arg0: Internal.IPatternDetails_, arg1: Internal.KeyCounter_[], arg2: Internal.Direction_): boolean;
        set animationStatus(arg0: Internal.AssemblerAnimationStatus_)
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get clientSide(): boolean
        get type(): Internal.BlockEntityType<any>
        get craftingMachineInfo(): Internal.PatternContainerGroup
        get actionableNode(): Internal.IGridNode
        get upgrades(): Internal.IUpgradeInventory
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get top(): Internal.Direction
        get active(): boolean
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get globalPos(): Internal.GlobalPos
        get readyInvoked(): number
        get craftingProgress(): number
        get persistentData(): Internal.CompoundTag
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get blockEntity(): Internal.BlockEntity
        get currentPattern(): Internal.IMolecularAssemblerSupportedPattern
        get level(): Internal.Level
        get orientation(): Internal.BlockOrientation
        get internalInventory(): Internal.InternalInventory
        get queuedForReady(): number
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
        get renderData(): any
        get animationStatus(): Internal.AssemblerAnimationStatus
        static readonly INV_MAIN: (ResourceLocation) & (ResourceLocation);
    }
    type MolecularAssemblerBlockEntity_ = MolecularAssemblerBlockEntity;
    class RotatableBlock$RotationType extends Internal.Enum<Internal.RotatableBlock$RotationType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.RotatableBlock$RotationType_): number;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RotatableBlock$RotationType>>;
        "compareTo(com.hrznstudio.titanium.block.RotatableBlock$RotationType)"(arg0: Internal.RotatableBlock$RotationType_): number;
        static valueOf(arg0: string): Internal.RotatableBlock$RotationType;
        notifyAll(): void;
        getHandler(): Internal.RotationHandler;
        getDeclaringClass(): typeof Internal.RotatableBlock$RotationType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.RotatableBlock$RotationType[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        getProperties(): Internal.DirectionProperty[];
        equals(arg0: any): boolean;
        get class(): typeof any
        get handler(): Internal.RotationHandler
        get declaringClass(): typeof Internal.RotatableBlock$RotationType
        get properties(): Internal.DirectionProperty[]
        static readonly NONE: (Internal.RotatableBlock$RotationType) & (Internal.RotatableBlock$RotationType);
        static readonly SIX_WAY: (Internal.RotatableBlock$RotationType) & (Internal.RotatableBlock$RotationType);
        static readonly TWENTY_FOUR_WAY: (Internal.RotatableBlock$RotationType) & (Internal.RotatableBlock$RotationType);
        static readonly FOUR_WAY: (Internal.RotatableBlock$RotationType) & (Internal.RotatableBlock$RotationType);
    }
    type RotatableBlock$RotationType_ = "four_way" | "six_way" | "twenty_four_way" | RotatableBlock$RotationType | "none";
    interface Targeting {
        abstract getTarget(): Internal.LivingEntity;
        get target(): Internal.LivingEntity
        (): Internal.LivingEntity_;
    }
    type Targeting_ = Targeting | (()=> Internal.LivingEntity_);
    class TreeBuilder$Menu extends Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable> {
        branch(name: string, menuConsumer: Internal.Consumer_<Internal.TreeBuilder$Menu>): this;
        getClass(): typeof any;
        build(): Internal.TreeNode<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        endBranch(): this;
        leaf(key: Internal.Tuple_<Internal.IGuiTexture, string>, content: Internal.Runnable_): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        crossLine(): this;
        static handle(node: Internal.TreeNode_<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>): void;
        "leaf(java.lang.String,java.lang.Runnable)"(name: string, runnable: Internal.Runnable_): this;
        notify(): void;
        "branch(net.minecraft.util.Tuple,java.util.function.Consumer)"(key: Internal.Tuple_<Internal.IGuiTexture, string>, builderConsumer: Internal.Consumer_<Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>>): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        wait(arg0: number, arg1: number): void;
        leaf(name: string, runnable: Internal.Runnable_): this;
        remove(name: string): this;
        static getIcon(key: Internal.Tuple_<Internal.IGuiTexture, string>): Internal.IGuiTexture;
        "leaf(net.minecraft.util.Tuple,java.lang.Runnable)"(key: Internal.Tuple_<Internal.IGuiTexture, string>, content: Internal.Runnable_): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        static start(): Internal.TreeBuilder$Menu;
        static isCrossLine(key: Internal.Tuple_<Internal.IGuiTexture, string>): boolean;
        branch(icon: Internal.IGuiTexture_, name: string, menuConsumer: Internal.Consumer_<Internal.TreeBuilder$Menu>): this;
        static start<K, V>(key: K): Internal.TreeBuilder<K, V>;
        toString(): string;
        notifyAll(): void;
        leaf(icon: Internal.IGuiTexture_, name: string, runnable: Internal.Runnable_): this;
        remove(key: Internal.Tuple_<Internal.IGuiTexture, string>): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        hashCode(): number;
        startBranch(key: Internal.Tuple_<Internal.IGuiTexture, string>): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        "remove(java.lang.String)"(name: string): this;
        static getName(key: Internal.Tuple_<Internal.IGuiTexture, string>): string;
        wait(): void;
        wait(arg0: number): void;
        "remove(net.minecraft.util.Tuple)"(key: Internal.Tuple_<Internal.IGuiTexture, string>): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        "branch(java.lang.String,java.util.function.Consumer)"(name: string, menuConsumer: Internal.Consumer_<Internal.TreeBuilder$Menu>): this;
        equals(arg0: any): boolean;
        branch(key: Internal.Tuple_<Internal.IGuiTexture, string>, builderConsumer: Internal.Consumer_<Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>>): Internal.TreeBuilder<Internal.Tuple<Internal.IGuiTexture, string>, Internal.Runnable>;
        get class(): typeof any
        static CROSS_LINE: Internal.Tuple<Internal.IGuiTexture, string>;
    }
    type TreeBuilder$Menu_ = TreeBuilder$Menu;
    class ConfiguratorGroup extends Internal.Configurator {
        constructor(name: string, isCollapse: boolean)
        constructor(name: string)
        notifyChanges(): void;
        charTyped(codePoint: string, modifiers: number): boolean;
        getPositionY(): number;
        getAnimation(): Internal.Animation;
        getXEIIngredientOverMouse(mouseX: number, mouseY: number): any;
        addWidget(index: number, widget: Widget_): WidgetGroup;
        getSelfPositionY(): number;
        drawInBackground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        setVisible(arg0: boolean): Widget;
        getBackgroundTexture(): Internal.IGuiTexture;
        updateScreen(): void;
        setLayoutPadding(layoutPadding: number): void;
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        getFirstWidgetById(regex: string): Widget;
        isFocus(): boolean;
        setAllowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean): void;
        setSelfPositionY(y: number): void;
        getSizeWidth(): number;
        setGui(gui: ModularUI_): void;
        isParent(widgetGroup: WidgetGroup_): boolean;
        /**
         * @deprecated
        */
        getTab(): Internal.ConfigPanel$Tab;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        setOverlay(overlay: Internal.IGuiTexture_): Widget;
        getContainedWidgets(includeHidden: boolean): Internal.List<Widget>;
        getConfigurators(): Internal.List<Internal.Configurator>;
        getAlign(): Internal.Align;
        setParentPosition(parentPosition: GuiPos_): void;
        addConfigurators(...configurators: Internal.Configurator_[]): void;
        getLayoutPadding(): number;
        waitToAdded(widget: Widget_): void;
        setId(id: string): Widget;
        appendHoverTooltips(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        setSizeHeight(height: number): void;
        "appendHoverTooltips(java.util.List)"(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        getWidth(): number;
        canDragIn(dragging: any): boolean;
        addWidget<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        getLeftWidth(): number;
        isDynamicSized(): boolean;
        getAllWidgetSize(): number;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getLayout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout;
        getTooltipTexts(): Internal.List<net.minecraft.network.chat.Component>;
        getClass(): typeof any;
        animation(animation: Internal.Animation_): void;
        getPositionX(): number;
        removeWidgetAnima(widget: Widget_, animation: com.lowdragmc.lowdraglib.gui.animation.Transform_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getSelfPositionX(): number;
        removeConfigurator(configurator: Internal.Configurator_): void;
        getSizeHeight(): number;
        initWidget(): void;
        isActive(): boolean;
        setDraggingConsumer(draggingAccept: Internal.Predicate_<any>, draggingIn: Internal.Consumer_<any>, draggingOut: Internal.Consumer_<any>, draggingSuccess: Internal.Consumer_<any>): Widget;
        toRectangleBox(): Internal.Rect2i;
        getHoverElement(mouseX: number, mouseY: number): Widget;
        static isAltDown(): boolean;
        computeHeight(): void;
        setSelfPosition(x: number, y: number): void;
        isInitialized(): boolean;
        getName(): string;
        setUiAccess(uiAccess: Internal.WidgetUIAccess_): Widget;
        getChatComponent(): net.minecraft.network.chat.Component;
        canWidgetAccepted(widget: Internal.IConfigurableWidget_): boolean;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        computeLayout(): void;
        clearAllWidgets(): void;
        isLDLRegister(): boolean;
        setCanCollapse(canCollapse: boolean): void;
        serializeWrapper(): Internal.CompoundTag;
        waitToRemoved(widget: Widget_): void;
        setSize(width: number, height: number): void;
        toString(): string;
        notifyAll(): void;
        deserializeInnerNBT(nbt: Internal.CompoundTag_): void;
        onScreenSizeUpdate(screenWidth: number, screenHeight: number): void;
        getId(): string;
        getSize(): GuiSize;
        widget(): Widget;
        addSelfPosition(addX: number, addY: number): GuiPos;
        setTips(...tips: string[]): void;
        getGuiExtraAreas(guiRect: Internal.Rect2i_, list: Internal.List_<Internal.Rect2i>): Internal.List<Internal.Rect2i>;
        "addWidget(com.lowdragmc.lowdraglib.gui.widget.Widget,java.util.function.Consumer)"<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        addWidgetAnima(widget: Widget_, animation: com.lowdragmc.lowdraglib.gui.animation.Transform_): void;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        getParentPosition(): GuiPos;
        /**
         * @deprecated
        */
        getConfigPanel(): Internal.ConfigPanel;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        setSelfPosition(selfPosition: GuiPos_): void;
        wait(arg0: number): void;
        writeInitialData(buffer: Internal.FriendlyByteBuf_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        mouseWheelMove(mouseX: number, mouseY: number, wheelDelta: number): boolean;
        group(): string;
        handleClientAction(id: number, buffer: Internal.FriendlyByteBuf_): void;
        getParent(): WidgetGroup;
        getRect(): Internal.Rect;
        addConfigurator(index: number, configurator: Internal.Configurator_): void;
        appendHoverTooltips(...tooltipText: string[]): Widget;
        init(width: number): void;
        isMouseOverElement(mouseX: number, mouseY: number): boolean;
        setSize(size: GuiSize_): void;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        static isCtrlDown(): boolean;
        isAllowXEIIngredientOverMouse(): boolean;
        isClientSideWidget(): boolean;
        setHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        notify(): void;
        removeAllConfigurators(): void;
        readInitialData(buffer: Internal.FriendlyByteBuf_): void;
        setDrawBackgroundWhenHover(drawBackgroundWhenHover: boolean): Widget;
        mouseMoved(mouseX: number, mouseY: number): boolean;
        removeWidget(widget: Widget_): void;
        setFocus(focus: boolean): void;
        "appendHoverTooltips(net.minecraft.network.chat.Component[])"(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        inAnimate(): boolean;
        getSelfPosition(): GuiPos;
        setBackground(...backgroundTexture: Internal.IGuiTexture_[]): Widget;
        onFocusChanged(lastFocus: Widget_, focus: Widget_): void;
        getPosition(): GuiPos;
        isVisible(): boolean;
        notifyChanges(source: Internal.Configurator_): void;
        /**
         * @deprecated
        */
        setConfigPanel(configPanel: Internal.ConfigPanel_, tab: Internal.ConfigPanel$Tab_): void;
        setSizeWidth(width: number): void;
        static isMouseOver(x: number, y: number, width: number, height: number, mouseX: number, mouseY: number): boolean;
        "appendHoverTooltips(java.lang.String[])"(...tooltipText: string[]): Widget;
        isCollapse(): boolean;
        static isShiftDown(): boolean;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        addWidgets(...widgets: Widget_[]): WidgetGroup;
        isMouseDown(button: number): boolean;
        addWidget(widget: Widget_): WidgetGroup;
        name(): string;
        serializeInnerNBT(): Internal.CompoundTag;
        wait(): void;
        getWidgetsById(regex: string): Internal.List<Widget>;
        getRegisterUI(): Internal.LDLRegister;
        setDynamicSized(dynamicSized: boolean): void;
        setHoverTexture(...hoverTexture: Internal.IGuiTexture_[]): Widget;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        setDraggingProvider<T>(draggingProvider: Internal.Supplier_<T>, draggingRenderer: Internal.BiFunction_<T, GuiPos, Internal.IGuiTexture>): Widget;
        getOverlay(): Internal.IGuiTexture;
        static playButtonClickSound(): void;
        setAlign(align: Internal.Align_): Widget;
        addListener(listener: Internal.Consumer_<Internal.Configurator>): void;
        drawOverlay(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        wait(arg0: number, arg1: number): void;
        getConfiguratorContainer(): Internal.IConfiguratorContainer;
        detectAndSendChanges(): void;
        handleDragging(dragging: any): boolean;
        isRemote(): boolean;
        "addWidget(int,com.lowdragmc.lowdraglib.gui.widget.Widget)"(index: number, widget: Widget_): WidgetGroup;
        setLayout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_): void;
        isChild(widget: Widget_): boolean;
        readUpdateInfo(id: number, buffer: Internal.FriendlyByteBuf_): void;
        mouseDragged(mouseX: number, mouseY: number, button: number, dragX: number, dragY: number): boolean;
        static isKeyDown(keyCode: number): boolean;
        setCollapse(collapse: boolean): void;
        getWidgetsByType<T extends Widget>(clazz: T): Internal.List<T>;
        initTemplate(): void;
        setSelfPositionX(x: number): void;
        getListeners(): Internal.List<Internal.Consumer<Internal.Configurator>>;
        drawInForeground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        acceptWidget(widget: Internal.IConfigurableWidget_): void;
        getPhantomTargets(ingredient: any): Internal.List<com.lowdragmc.lowdraglib.gui.ingredient.Target>;
        appendHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        isInit(): boolean;
        mouseReleased(mouseX: number, mouseY: number, button: number): boolean;
        onWidgetRemoved(widget: Internal.IConfigurableWidget_): void;
        getRightWidth(): number;
        hashCode(): number;
        setActive(isActive: boolean): Widget;
        setConfiguratorContainer(configuratorContainer: Internal.IConfiguratorContainer_): void;
        getNameWidget(): LabelWidget;
        equals(arg0: any): boolean;
        getGui(): ModularUI;
        get positionY(): number
        get animation(): Internal.Animation
        get selfPositionY(): number
        set visible(arg0: boolean)
        get backgroundTexture(): Internal.IGuiTexture
        set layoutPadding(layoutPadding: number)
        get focus(): boolean
        set allowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean)
        set selfPositionY(y: number)
        get sizeWidth(): number
        set gui(gui: ModularUI_)
        /**
         * @deprecated
        */
        get tab(): Internal.ConfigPanel$Tab
        set overlay(overlay: Internal.IGuiTexture_)
        get configurators(): Internal.List<Internal.Configurator>
        get align(): Internal.Align
        set parentPosition(parentPosition: GuiPos_)
        get layoutPadding(): number
        set id(id: string)
        set sizeHeight(height: number)
        get width(): number
        get leftWidth(): number
        get dynamicSized(): boolean
        get allWidgetSize(): number
        get layout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout
        get tooltipTexts(): Internal.List<net.minecraft.network.chat.Component>
        get class(): typeof any
        get positionX(): number
        get selfPositionX(): number
        get sizeHeight(): number
        get active(): boolean
        get altDown(): boolean
        get initialized(): boolean
        get name(): string
        set uiAccess(uiAccess: Internal.WidgetUIAccess_)
        get chatComponent(): net.minecraft.network.chat.Component
        get LDLRegister(): boolean
        set canCollapse(canCollapse: boolean)
        get id(): string
        get size(): GuiSize
        set tips(...tips: string[])
        get parentPosition(): GuiPos
        /**
         * @deprecated
        */
        get configPanel(): Internal.ConfigPanel
        set selfPosition(selfPosition: GuiPos_)
        get parent(): WidgetGroup
        get rect(): Internal.Rect
        set size(size: GuiSize_)
        get translateKey(): string
        get ctrlDown(): boolean
        get allowXEIIngredientOverMouse(): boolean
        get clientSideWidget(): boolean
        set hoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[])
        set drawBackgroundWhenHover(drawBackgroundWhenHover: boolean)
        set focus(focus: boolean)
        get selfPosition(): GuiPos
        set background(...backgroundTexture: Internal.IGuiTexture_[])
        get position(): GuiPos
        get visible(): boolean
        set sizeWidth(width: number)
        get collapse(): boolean
        get shiftDown(): boolean
        get registerUI(): Internal.LDLRegister
        set dynamicSized(dynamicSized: boolean)
        set hoverTexture(...hoverTexture: Internal.IGuiTexture_[])
        get overlay(): Internal.IGuiTexture
        set align(align: Internal.Align_)
        get configuratorContainer(): Internal.IConfiguratorContainer
        get remote(): boolean
        set layout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_)
        set collapse(collapse: boolean)
        set selfPositionX(x: number)
        get listeners(): Internal.List<Internal.Consumer<Internal.Configurator>>
        get init(): boolean
        get rightWidth(): number
        set active(isActive: boolean)
        set configuratorContainer(configuratorContainer: Internal.IConfiguratorContainer_)
        get nameWidget(): LabelWidget
        get gui(): ModularUI
    }
    type ConfiguratorGroup_ = ConfiguratorGroup;
    class RiceRollRoyaleBlock extends Internal.FeastBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getServingsProperty(): Internal.IntegerProperty;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getServingItem(arg0: Internal.BlockState_): Internal.ItemStack;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getMaxServings(): number;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get servingsProperty(): Internal.IntegerProperty
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        get maxServings(): number
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly ROLL_SERVINGS: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_SERVINGS: (8) & (number);
        readonly riceRollServings: Internal.List<Internal.Supplier<Internal.Item>>;
    }
    type RiceRollRoyaleBlock_ = RiceRollRoyaleBlock;
    class TeamPropertyArgument implements Internal.ArgumentType<Internal.TeamProperty<any>> {
        getClass(): typeof any;
        parse(reader: Internal.StringReader_): Internal.TeamProperty<any>;
        toString(): string;
        notifyAll(): void;
        static create(): Internal.TeamPropertyArgument;
        listSuggestions<S>(context: Internal.CommandContext_<S>, builder: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExamples(): Internal.Collection<string>;
        hashCode(): number;
        wait(): void;
        static get(context: Internal.CommandContext_<Internal.CommandSourceStack>, name: string): Internal.TeamProperty<any>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get examples(): Internal.Collection<string>
    }
    type TeamPropertyArgument_ = TeamPropertyArgument;
    class InputMethodEvent extends Internal.AWTEvent {
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.TextHitInfo_, arg3: Internal.TextHitInfo_)
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.AttributedCharacterIterator_, arg3: number, arg4: Internal.TextHitInfo_, arg5: Internal.TextHitInfo_)
        constructor(arg0: Internal.Component_, arg1: number, arg2: number, arg3: Internal.AttributedCharacterIterator_, arg4: number, arg5: Internal.TextHitInfo_, arg6: Internal.TextHitInfo_)
        getClass(): typeof any;
        toString(): string;
        paramString(): string;
        notifyAll(): void;
        getCommittedCharacterCount(): number;
        isConsumed(): boolean;
        notify(): void;
        getWhen(): number;
        wait(arg0: number, arg1: number): void;
        getVisiblePosition(): Internal.TextHitInfo;
        consume(): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        setSource(arg0: any): void;
        getText(): Internal.AttributedCharacterIterator;
        getCaret(): Internal.TextHitInfo;
        getSource(): any;
        equals(arg0: any): boolean;
        getID(): number;
        get class(): typeof any
        get committedCharacterCount(): number
        get consumed(): boolean
        get when(): number
        get visiblePosition(): Internal.TextHitInfo
        set source(arg0: any)
        get text(): Internal.AttributedCharacterIterator
        get caret(): Internal.TextHitInfo
        get source(): any
        get ID(): number
        static readonly INPUT_METHOD_TEXT_CHANGED: (1100) & (number);
        static readonly INPUT_METHOD_LAST: (1101) & (number);
        static readonly INPUT_METHOD_FIRST: (1100) & (number);
        static readonly CARET_POSITION_CHANGED: (1101) & (number);
    }
    type InputMethodEvent_ = InputMethodEvent;
    interface Recipe <C extends net.minecraft.world.Container> extends Internal.RecipeKJS {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract assemble(arg0: C, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        abstract matches(arg0: C, arg1: Internal.Level_): boolean;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getRemainingItems(arg0: C): Internal.NonNullList<Internal.ItemStack>;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type Recipe_<C extends net.minecraft.world.Container> = Recipe<C>;
    class ObservedTrainNameSource extends Internal.SingleLineDisplaySource {
        constructor()
        getClass(): typeof any;
        getName(): net.minecraft.network.chat.Component;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        toString(): string;
        shouldPassiveReset(): boolean;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        notifyAll(): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        static getAll(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.List<Internal.DisplaySource>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        static displaySource<B extends Internal.Block, P>(arg0: com.tterrag.registrate.util.entry.RegistryEntry_<Internal.DisplaySource>): Internal.NonNullUnaryOperator<com.tterrag.registrate.builders.BlockBuilder<B, P>>;
        hashCode(): number;
        wait(): void;
        static get(arg0: ResourceLocation_): Internal.DisplaySource;
        provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        wait(arg0: number): void;
        getPassiveRefreshTicks(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): net.minecraft.network.chat.Component
        get passiveRefreshTicks(): number
    }
    type ObservedTrainNameSource_ = ObservedTrainNameSource;
    class AdditionalItemPlacement {
        constructor(placeable: Internal.Block_)
        getClass(): typeof any;
        overrideGetPlacementState(pContext: Internal.BlockPlaceContext_): Internal.BlockState;
        overridePlace(pContext: Internal.BlockPlaceContext_): Internal.InteractionResult;
        getPlacedBlock(): Internal.Block;
        toString(): string;
        notifyAll(): void;
        static getBlockPlacer(): Internal.BlockPlacerItem;
        overrideUpdatePlacementContext(context: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        overrideUseOn(pContext: Internal.UseOnContext_, foodProperties: Internal.FoodProperties_): Internal.InteractionResult;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get placedBlock(): Internal.Block
        get blockPlacer(): Internal.BlockPlacerItem
    }
    type AdditionalItemPlacement_ = AdditionalItemPlacement;
    interface LootTablesKJS {
        kjs$postLootEvents(map: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        kjs$completeReload(parsedMap: Internal.Map_<Internal.LootDataType<any>, Internal.Map<ResourceLocation, any>>, elements: Internal.Map_<Internal.LootDataId<any>, any>): void;
    }
    type LootTablesKJS_ = LootTablesKJS;
    interface Keyable {
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): this;
        (arg0: Internal.DynamicOps<T>): Internal.Stream_<T>;
    }
    type Keyable_ = ((arg0: Internal.DynamicOps<T>)=> Internal.Stream_<T>) | Keyable;
    class ManaBurstEntity$PositionProperties extends Internal.Record {
        constructor(coords: BlockPos_, state: Internal.BlockState_)
        getClass(): typeof any;
        toString(): string;
        coords(): BlockPos;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        isInvalidIn(arg0: Internal.Level_): boolean;
        wait(): void;
        state(): Internal.BlockState;
        contentsEqual(arg0: Internal.Level_): boolean;
        wait(arg0: number): void;
        static fromEntity(arg0: Internal.Entity_): Internal.ManaBurstEntity$PositionProperties;
        equals(arg0: any): boolean;
        coordsEqual(arg0: Internal.ManaBurstEntity$PositionProperties_): boolean;
        get class(): typeof any
    }
    type ManaBurstEntity$PositionProperties_ = ManaBurstEntity$PositionProperties;
    interface ServerboundInteractPacket$Handler {
        abstract onInteraction(arg0: Internal.InteractionHand_): void;
        abstract onAttack(): void;
        abstract onInteraction(arg0: Internal.InteractionHand_, arg1: Vec3d_): void;
    }
    type ServerboundInteractPacket$Handler_ = ServerboundInteractPacket$Handler;
    class GrowSignal {
        constructor(arg0: Internal.Species_, arg1: BlockPos_, arg2: number, arg3: Internal.RandomSource_, arg4: Internal.Direction_)
        constructor(arg0: Internal.Species_, arg1: BlockPos_, arg2: number, arg3: Internal.RandomSource_)
        getClass(): typeof any;
        toString(): string;
        getSpecies(): Internal.Species;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isInTrunk(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        step(): boolean;
        equals(arg0: any): boolean;
        doTurn(arg0: Internal.Direction_): boolean;
        get class(): typeof any
        get species(): Internal.Species
        get inTrunk(): boolean
        numSteps: number;
        choked: boolean;
        delta: BlockPos;
        radius: number;
        tapering: number;
        rand: Internal.RandomSource;
        dir: Internal.Direction;
        readonly defaultDir: Internal.Direction;
        numTurns: number;
        energy: number;
        success: boolean;
        rootPos: BlockPos;
    }
    type GrowSignal_ = GrowSignal;
    class MobEffectEvent$Remove extends Internal.MobEffectEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffectInstance_)
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getEffect(): Internal.MobEffect;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getEffectInstance(): Internal.MobEffectInstance;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get effect(): Internal.MobEffect
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get effectInstance(): Internal.MobEffectInstance
    }
    type MobEffectEvent$Remove_ = MobEffectEvent$Remove;
    class CavernExplorerStewItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type CavernExplorerStewItem_ = CavernExplorerStewItem;
    abstract class InputStream implements Internal.Closeable {
        constructor()
        skipNBytes(arg0: number): void;
        getClass(): typeof any;
        readNBytes(arg0: number[], arg1: number, arg2: number): number;
        read(arg0: number[], arg1: number, arg2: number): number;
        toString(): string;
        abstract read(): number;
        readNBytes(arg0: number): number[];
        markSupported(): boolean;
        mark(arg0: number): void;
        static nullInputStream(): Internal.InputStream;
        notifyAll(): void;
        skip(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        readAllBytes(): number[];
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        available(): number;
        read(arg0: number[]): number;
        transferTo(arg0: Internal.OutputStream_): number;
        reset(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type InputStream_ = InputStream;
    class ClientRecipeTracker$1 implements Internal.RecipeType<Internal.ClientRecipeTracker> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ClientRecipeTracker$1_ = ClientRecipeTracker$1;
    class ParticleRenderingPhase extends Internal.Enum<Internal.ParticleRenderingPhase> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(name: string): Internal.ParticleRenderingPhase;
        toString(): string;
        compareTo(arg0: Internal.ParticleRenderingPhase_): number;
        "compareTo(net.irisshaders.iris.fantastic.ParticleRenderingPhase)"(arg0: Internal.ParticleRenderingPhase_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.ParticleRenderingPhase[];
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ParticleRenderingPhase>>;
        getDeclaringClass(): typeof Internal.ParticleRenderingPhase;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ParticleRenderingPhase
        static readonly EVERYTHING: (Internal.ParticleRenderingPhase) & (Internal.ParticleRenderingPhase);
        static readonly TRANSLUCENT: (Internal.ParticleRenderingPhase) & (Internal.ParticleRenderingPhase);
        static readonly OPAQUE: (Internal.ParticleRenderingPhase) & (Internal.ParticleRenderingPhase);
    }
    type ParticleRenderingPhase_ = ParticleRenderingPhase | "translucent" | "opaque" | "everything";
    class ScheduledTick <T> extends Internal.Record {
        constructor(arg0: T, arg1: BlockPos_, arg2: number, arg3: number)
        constructor(arg0: T, arg1: BlockPos_, arg2: number, arg3: Internal.TickPriority_, arg4: number)
        getClass(): typeof any;
        toString(): string;
        pos(): BlockPos;
        static probe<T>(arg0: T, arg1: BlockPos_): Internal.ScheduledTick<T>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        priority(): Internal.TickPriority;
        hashCode(): number;
        triggerTick(): number;
        subTickOrder(): number;
        wait(): void;
        wait(arg0: number): void;
        type(): T;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly DRAIN_ORDER: Internal.Comparator<Internal.ScheduledTick<any>>;
        static readonly UNIQUE_TICK_HASH: Internal.Hash$Strategy<Internal.ScheduledTick<any>>;
        static readonly INTRA_TICK_DRAIN_ORDER: Internal.Comparator<Internal.ScheduledTick<any>>;
    }
    type ScheduledTick_<T> = ScheduledTick<T>;
    class ManaPoolBlock$Variant extends Internal.Enum<Internal.ManaPoolBlock$Variant> {
        static valueOf(arg0: string): Internal.ManaPoolBlock$Variant;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getDeclaringClass(): typeof Internal.ManaPoolBlock$Variant;
        notifyAll(): void;
        compareTo(arg0: Internal.ManaPoolBlock$Variant_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.ManaPoolBlock$Variant[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ManaPoolBlock$Variant>>;
        "compareTo(vazkii.botania.common.block.mana.ManaPoolBlock$Variant)"(arg0: Internal.ManaPoolBlock$Variant_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.ManaPoolBlock$Variant
        static readonly DEFAULT: (Internal.ManaPoolBlock$Variant) & (Internal.ManaPoolBlock$Variant);
        static readonly FABULOUS: (Internal.ManaPoolBlock$Variant) & (Internal.ManaPoolBlock$Variant);
        static readonly DILUTED: (Internal.ManaPoolBlock$Variant) & (Internal.ManaPoolBlock$Variant);
        static readonly CREATIVE: (Internal.ManaPoolBlock$Variant) & (Internal.ManaPoolBlock$Variant);
    }
    type ManaPoolBlock$Variant_ = "diluted" | ManaPoolBlock$Variant | "fabulous" | "creative" | "default";
    class AABB {
        constructor(arg0: BlockPos_)
        constructor(arg0: Vec3d_, arg1: Vec3d_)
        constructor(arg0: BlockPos_, arg1: BlockPos_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getClass(): typeof any;
        "move(net.minecraft.core.BlockPos)"(arg0: BlockPos_): this;
        expandTowards(arg0: number, arg1: number, arg2: number): this;
        distanceToSqr(arg0: Vec3d_): number;
        max(axis: Internal.Direction$Axis_): number;
        getZsize(): number;
        inflate(arg0: number): this;
        static unitCubeFromLowerCorner(arg0: Vec3d_): Internal.AABB;
        expandTowards(arg0: Vec3d_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasNaN(): boolean;
        static ofSize(arg0: Vec3d_, arg1: number, arg2: number, arg3: number): Internal.AABB;
        contains(arg0: Vec3d_): boolean;
        intersect(arg0: Internal.AABB_): this;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        inflate(arg0: number, arg1: number, arg2: number): this;
        intersects(arg0: Vec3d_, arg1: Vec3d_): boolean;
        min(axis: Internal.Direction$Axis_): number;
        "move(net.minecraft.world.phys.Vec3)"(arg0: Vec3d_): this;
        getXsize(): number;
        move(arg0: Vec3d_): this;
        minmax(arg0: Internal.AABB_): this;
        static of(arg0: Internal.BoundingBox_): Internal.AABB;
        toString(): string;
        intersects(arg0: Internal.AABB_): boolean;
        deflate(arg0: number): this;
        setMinZ(arg0: number): this;
        getYsize(): number;
        notifyAll(): void;
        getSize(): number;
        setMinY(arg0: number): this;
        static clip(arg0: Internal.Iterable_<Internal.AABB>, arg1: Vec3d_, arg2: Vec3d_, arg3: BlockPos_): Internal.BlockHitResult;
        setMinX(arg0: number): this;
        contract(arg0: number, arg1: number, arg2: number): this;
        move(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        setMaxY(arg0: number): this;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        setMaxX(arg0: number): this;
        getCenter(): Vec3d;
        wait(): void;
        setMaxZ(arg0: number): this;
        deflate(arg0: number, arg1: number, arg2: number): this;
        wait(arg0: number): void;
        move(arg0: BlockPos_): this;
        equals(arg0: any): boolean;
        clip(arg0: Vec3d_, arg1: Vec3d_): Internal.Optional<Vec3d>;
        get class(): typeof any
        get zsize(): number
        get xsize(): number
        set minZ(arg0: number)
        get ysize(): number
        get size(): number
        set minY(arg0: number)
        set minX(arg0: number)
        set maxY(arg0: number)
        set maxX(arg0: number)
        get center(): Vec3d
        set maxZ(arg0: number)
        readonly minZ: number;
        readonly minY: number;
        readonly minX: number;
        readonly maxX: number;
        readonly maxY: number;
        readonly maxZ: number;
    }
    type AABB_ = [number, number, number] | [number, number, number, number, number, number] | AABB;
    class FenceGateBlock extends Internal.HorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.SoundEvent_, arg2: Internal.SoundEvent_)
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.WoodType_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        static connectsToDirection(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly OPEN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly IN_WALL: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type FenceGateBlock_ = FenceGateBlock;
    interface AbstractFurnaceBlockEntityAccessor {
        abstract setLitTime(arg0: number): void;
        abstract getQuickCheck(): Internal.RecipeManager$CachedCheck<net.minecraft.world.Container, Internal.AbstractCookingRecipe>;
        abstract getLitTime(): number;
        abstract setCookingProgress(arg0: number): void;
        abstract getCookingTotalTime(): number;
        abstract getItems(): Internal.NonNullList<Internal.ItemStack>;
        abstract getCookingProgress(): number;
        set litTime(arg0: number)
        get quickCheck(): Internal.RecipeManager$CachedCheck<net.minecraft.world.Container, Internal.AbstractCookingRecipe>
        get litTime(): number
        set cookingProgress(arg0: number)
        get cookingTotalTime(): number
        get items(): Internal.NonNullList<Internal.ItemStack>
        get cookingProgress(): number
    }
    type AbstractFurnaceBlockEntityAccessor_ = AbstractFurnaceBlockEntityAccessor;
    interface FuelHandler$ICustomWoodFuelValue {
        abstract getBurnTimeInTicksWhenWooden(): number;
        get burnTimeInTicksWhenWooden(): number
        (): number;
    }
    type FuelHandler$ICustomWoodFuelValue_ = (()=> number) | FuelHandler$ICustomWoodFuelValue;
    interface IBlockLootTableProvider extends Internal.ILootTableProvider<Internal.BasicBlockLootTables> {
        abstract getLootTable(arg0: Internal.BasicBlockLootTables_): Internal.LootTable$Builder;
        (arg0: Internal.BasicBlockLootTables): Internal.LootTable$Builder_;
    }
    type IBlockLootTableProvider_ = IBlockLootTableProvider | ((arg0: Internal.BasicBlockLootTables)=> Internal.LootTable$Builder_);
    class ServerboundSwingPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.InteractionHand_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        getHand(): Internal.InteractionHand;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get hand(): Internal.InteractionHand
    }
    type ServerboundSwingPacket_ = ServerboundSwingPacket;
    interface IconAtlasIndexHolder {
        abstract setIconAtlasIndex(arg0: number): void;
        abstract getIconAtlasIndex(): number;
        set iconAtlasIndex(arg0: number)
        get iconAtlasIndex(): number
    }
    type IconAtlasIndexHolder_ = IconAtlasIndexHolder;
    class RuneRitualRecipe$Serializer implements Internal.RecipeSerializer<Internal.RuneRitualRecipe> {
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.RuneRitualRecipe;
        notifyAll(): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.RuneRitualRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.RuneRitualRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.RuneRitualRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.RuneRitualRecipe;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.RuneRitualRecipe;
        equals(arg0: any): boolean;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,mythicbotany.rune.RuneRitualRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.RuneRitualRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
        static INSTANCE: (Internal.RuneRitualRecipe$Serializer) & (Internal.RuneRitualRecipe$Serializer);
    }
    type RuneRitualRecipe$Serializer_ = RuneRitualRecipe$Serializer;
    class ToolModeProperty$SGMirror extends Internal.Enum<Internal.ToolModeProperty$SGMirror> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.ToolModeProperty$SGMirror;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        static values(): Internal.ToolModeProperty$SGMirror[];
        getDeclaringClass(): typeof Internal.ToolModeProperty$SGMirror;
        toString(): string;
        notifyAll(): void;
        "compareTo(com.legacy.structure_gel.core.item.building_tool.ToolModeProperty$SGMirror)"(arg0: Internal.ToolModeProperty$SGMirror_): number;
        name(): string;
        toVanilla(arg0: Internal.RandomSource_): Internal.Mirror;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ToolModeProperty$SGMirror>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ToolModeProperty$SGMirror_): number;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.ToolModeProperty$SGMirror
        static readonly RANDOM: (Internal.ToolModeProperty$SGMirror) & (Internal.ToolModeProperty$SGMirror);
        static readonly Z: (Internal.ToolModeProperty$SGMirror) & (Internal.ToolModeProperty$SGMirror);
        static readonly NONE: (Internal.ToolModeProperty$SGMirror) & (Internal.ToolModeProperty$SGMirror);
        static readonly X: (Internal.ToolModeProperty$SGMirror) & (Internal.ToolModeProperty$SGMirror);
    }
    type ToolModeProperty$SGMirror_ = ToolModeProperty$SGMirror | "z" | "random" | "x" | "none";
    class GameMasterBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        modifyReturnValue$foh000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        handler$fgi001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        modifyReturnValue$foh000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type GameMasterBlockItem_ = GameMasterBlockItem;
    interface ItemFTBL {
        abstract setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        (arg0: Internal.Item): void;
    }
    type ItemFTBL_ = ItemFTBL | ((arg0: Internal.Item)=> void);
    interface IEnergyService extends Internal.IGridService, Internal.IEnergySource {
        abstract isNetworkPowered(): boolean;
        abstract getChannelPowerUsage(): number;
        abstract getStoredPower(): number;
        abstract getAvgPowerInjection(): number;
        abstract getMaxStoredPower(): number;
        abstract getAvgPowerUsage(): number;
        abstract injectPower(arg0: number, arg1: Internal.Actionable_): number;
        abstract extractAEPower(arg0: number, arg1: Internal.Actionable_, arg2: Internal.PowerMultiplier_): number;
        abstract getIdlePowerUsage(): number;
        abstract getEnergyDemand(arg0: number): number;
        get networkPowered(): boolean
        get channelPowerUsage(): number
        get storedPower(): number
        get avgPowerInjection(): number
        get maxStoredPower(): number
        get avgPowerUsage(): number
        get idlePowerUsage(): number
    }
    type IEnergyService_ = IEnergyService;
    class FluidTankComponent <T extends Internal.IComponentHarness> extends Internal.FluidTank implements Internal.IContainerAddonProvider, Internal.IScreenAddonProvider, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor(arg0: string, arg1: number, arg2: number, arg3: number)
        getFluid(): Internal.FluidStack;
        getFluidInTank(arg0: number): Internal.FluidStack;
        setTankAction(arg0: Internal.FluidTankComponent$Action_): this;
        getTankType(): Internal.FluidTankComponent$Type;
        canInteract(): boolean;
        writeToNBT(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        notify(): void;
        getPosX(): number;
        setValidator(arg0: Internal.Predicate_<Internal.FluidStack>): Internal.FluidTank;
        readFromNBT(arg0: Internal.CompoundTag_): Internal.FluidTank;
        getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        setCapacity(arg0: number): Internal.FluidTank;
        getTankAction(): Internal.FluidTankComponent$Action;
        drainForced(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        "drainForced(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getFluidAmount(): number;
        wait(): void;
        drainForced(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getTanks(): number;
        getSpace(): number;
        getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        getClass(): typeof any;
        setFluidStack(arg0: Internal.FluidStack_): void;
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getPosY(): number;
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getName(): string;
        serializeNBT(): Internal.Tag;
        isFluidValid(arg0: Internal.FluidStack_): boolean;
        "drainForced(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        setTankType(arg0: Internal.FluidTankComponent$Type_): this;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        setComponentHarness(arg0: T): this;
        setOnContentChange(arg0: Internal.Runnable_): this;
        notifyAll(): void;
        getComponentHarness(): T;
        getTankCapacity(arg0: number): number;
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        setFluid(arg0: Internal.FluidStack_): void;
        wait(arg0: number): void;
        getCapacity(): number;
        equals(arg0: any): boolean;
        fillForced(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        get fluid(): Internal.FluidStack
        set tankAction(arg0: Internal.FluidTankComponent$Action_)
        get tankType(): Internal.FluidTankComponent$Type
        get posX(): number
        set validator(arg0: Internal.Predicate_<Internal.FluidStack>)
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        set capacity(arg0: number)
        get tankAction(): Internal.FluidTankComponent$Action
        get fluidAmount(): number
        get tanks(): number
        get space(): number
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
        get class(): typeof any
        set fluidStack(arg0: Internal.FluidStack_)
        get empty(): boolean
        get posY(): number
        get name(): string
        set tankType(arg0: Internal.FluidTankComponent$Type_)
        set componentHarness(arg0: T)
        set onContentChange(arg0: Internal.Runnable_)
        get componentHarness(): T
        set fluid(arg0: Internal.FluidStack_)
        get capacity(): number
    }
    type FluidTankComponent_<T extends Internal.IComponentHarness> = FluidTankComponent<T>;
    interface Map <K, V> {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        abstract containsValue(arg0: any): boolean;
        of<K, V>(): this;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): this;
        abstract containsKey(arg0: any): boolean;
        abstract put(arg0: K, arg1: V): V;
        abstract get(arg0: any): V;
        abstract remove(arg0: any): V;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): this;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        abstract keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): this;
        abstract values(): Internal.Collection<V>;
        abstract entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): this;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): this;
        remove(arg0: any, arg1: any): boolean;
        abstract putAll(arg0: Internal.Map_<K, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): this;
        abstract hashCode(): number;
        abstract size(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): this;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): this;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): this;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): this;
        abstract clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): this;
        abstract equals(arg0: any): boolean;
        of<K, V>(arg0: K, arg1: V): this;
        get empty(): boolean
    }
    type Map_<K, V> = {[key in K]: V} | Map<K, V>;
    class ConcentricRingsStructurePlacement extends Internal.StructurePlacement {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.HolderSet_<Internal.Biome>)
        constructor(arg0: Vec3i_, arg1: any_, arg2: number, arg3: number, arg4: Internal.Optional_<any>, arg5: number, arg6: number, arg7: number, arg8: Internal.HolderSet_<Internal.Biome>)
        getClass(): typeof any;
        distance(): number;
        count(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isStructureChunk(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        preferredBiomes(): Internal.HolderSet<Internal.Biome>;
        hashCode(): number;
        getLocatePos(arg0: Internal.ChunkPos_): BlockPos;
        wait(): void;
        spread(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        type(): Internal.StructurePlacementType<any>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ConcentricRingsStructurePlacement>;
    }
    type ConcentricRingsStructurePlacement_ = ConcentricRingsStructurePlacement;
    interface IUpgradeItem <T extends Internal.IUpgradeWrapper> {
        abstract getUpgradesPerStorage(arg0: string): number;
        abstract getName(): net.minecraft.network.chat.Component;
        getInventoryColumnsTaken(): number;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.IStorageWrapper_, arg3: boolean): Internal.UpgradeSlotChangeResult;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
        abstract getUpgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>;
        checkThisForConflictsWithExistingUpgrades(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: number): Internal.UpgradeSlotChangeResult;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean, arg2: Internal.Player_): Internal.UpgradeSlotChangeResult;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        abstract getUpgradesInGroupPerStorage(arg0: string): number;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: number, arg4: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
        abstract getType(): Internal.UpgradeType<T>;
        get name(): net.minecraft.network.chat.Component
        get inventoryColumnsTaken(): number
        get upgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>
        get upgradeGroup(): Internal.UpgradeGroup
        get type(): Internal.UpgradeType<T>
    }
    type IUpgradeItem_<T extends Internal.IUpgradeWrapper> = IUpgradeItem<T>;
    interface IStorageWrapper extends Internal.ITintable {
        abstract getDisplayName(): net.minecraft.network.chat.Component;
        setInventorySlotChangeHandler(arg0: Internal.Runnable_): void;
        abstract refreshInventoryForInputOutput(): void;
        registerOnInventoryInputOutputHandlerRefreshListener(arg0: Internal.Runnable_): void;
        abstract getStorageType(): string;
        abstract sort(): void;
        getBaseStackSizeMultiplier(): number;
        abstract getSettingsHandler(): Internal.SettingsHandler;
        abstract getUpgradeHandler(): Internal.UpgradeHandler;
        getWrappedStorageStack(): Internal.ItemStack;
        abstract refreshInventoryForUpgradeProcessing(): void;
        onInit(): void;
        abstract setContentsChangeHandler(arg0: Internal.Runnable_): void;
        abstract getOpenTabId(): Internal.Optional<number>;
        abstract setOpenTabId(arg0: number): void;
        getEnergyStorage(): Internal.Optional<Internal.IEnergyStorage>;
        abstract setPersistent(arg0: boolean): void;
        getNumberOfSlotRows(): number;
        abstract getContentsUuid(): Internal.Optional<Internal.UUID>;
        isUpgradeRunnable(arg0: Internal.ItemStack_): boolean;
        abstract getAccentColor(): number;
        abstract getSortBy(): Internal.SortBy;
        abstract getInventoryHandler(): Internal.InventoryHandler;
        abstract getMainColor(): number;
        abstract onContentsNbtUpdated(): void;
        abstract getColumnsTaken(): number;
        abstract setSortBy(arg0: Internal.SortBy_): void;
        getFluidHandler(): Internal.Optional<Internal.IStorageFluidHandler>;
        abstract getRenderInfo(): Internal.RenderInfo;
        setUpgradeCachesInvalidatedHandler(arg0: Internal.Runnable_): void;
        abstract getInventoryForInputOutput(): Internal.ITrackedContentsItemHandler;
        abstract getInventoryForUpgradeProcessing(): Internal.ITrackedContentsItemHandler;
        abstract fillWithLoot(arg0: Internal.Player_): void;
        abstract removeOpenTabId(): void;
        abstract setColumnsTaken(arg0: number, arg1: boolean): void;
        abstract setColors(arg0: number, arg1: number): void;
        get displayName(): net.minecraft.network.chat.Component
        set inventorySlotChangeHandler(arg0: Internal.Runnable_)
        get storageType(): string
        get baseStackSizeMultiplier(): number
        get settingsHandler(): Internal.SettingsHandler
        get upgradeHandler(): Internal.UpgradeHandler
        get wrappedStorageStack(): Internal.ItemStack
        set contentsChangeHandler(arg0: Internal.Runnable_)
        get openTabId(): Internal.Optional<number>
        set openTabId(arg0: number)
        get energyStorage(): Internal.Optional<Internal.IEnergyStorage>
        set persistent(arg0: boolean)
        get numberOfSlotRows(): number
        get contentsUuid(): Internal.Optional<Internal.UUID>
        get accentColor(): number
        get sortBy(): Internal.SortBy
        get inventoryHandler(): Internal.InventoryHandler
        get mainColor(): number
        get columnsTaken(): number
        set sortBy(arg0: Internal.SortBy_)
        get fluidHandler(): Internal.Optional<Internal.IStorageFluidHandler>
        get renderInfo(): Internal.RenderInfo
        set upgradeCachesInvalidatedHandler(arg0: Internal.Runnable_)
        get inventoryForInputOutput(): Internal.ITrackedContentsItemHandler
        get inventoryForUpgradeProcessing(): Internal.ITrackedContentsItemHandler
        readonly SETTINGS_TAG: ("settings") & (string);
    }
    type IStorageWrapper_ = IStorageWrapper;
    class TrackSwitchBlockImpl extends Internal.TrackSwitchBlock {
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackSwitchBlockEntity>;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackSwitchBlockEntity>): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackSwitchBlockEntity;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, block: Internal.Block_, fromPos: BlockPos_, isMoving: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        canConnectRedstone(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, direction: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        static automatic(properties: Internal.BlockBehaviour$Properties_): Internal.TrackSwitchBlock;
        use(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getBlockEntityClass(): typeof Internal.TrackSwitchBlockEntity;
        onProjectileHit(level: Internal.Level_, state: Internal.BlockState_, hit: Internal.BlockHitResult_, projectile: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackSwitchBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static manual(properties: Internal.BlockBehaviour$Properties_): Internal.TrackSwitchBlock;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(state: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TrackSwitchBlockEntity>;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(state: Internal.BlockState_, level: Internal.SignalGetter_, pos: BlockPos_, side: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityClass(): typeof Internal.TrackSwitchBlockEntity
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get blockEntityType(): Internal.BlockEntityType<Internal.TrackSwitchBlockEntity>
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type TrackSwitchBlockImpl_ = TrackSwitchBlockImpl;
    class FancyMachineUIWidget$NavigationEntry extends Internal.Record {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        homePage(): Internal.IFancyUIProvider;
        wait(arg0: number): void;
        onNavigation(): Internal.Runnable;
        page(): Internal.IFancyUIProvider;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type FancyMachineUIWidget$NavigationEntry_ = FancyMachineUIWidget$NavigationEntry;
    class PacketType <T extends Internal.FabricPacket> {
        getClass(): typeof any;
        hashCode(): number;
        getId(): ResourceLocation;
        toString(): string;
        wait(): void;
        static create<P extends Internal.FabricPacket>(id: ResourceLocation_, constructor_: Internal.Function_<Internal.FriendlyByteBuf, P>): Internal.PacketType<P>;
        notifyAll(): void;
        wait(arg0: number): void;
        read(buf: Internal.FriendlyByteBuf_): T;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get id(): ResourceLocation
    }
    type PacketType_<T extends Internal.FabricPacket> = PacketType<T>;
    abstract class EntityRenderer <T extends Internal.Entity> implements Internal.EntityRendererExtension {
        getClass(): typeof any;
        getRenderOffset(arg0: T, arg1: number): Vec3d;
        toString(): string;
        handler$cmi000$adastra$shouldRender(entity: Internal.Entity_, frustum: Internal.Frustum_, x: number, y: number, z: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract getTextureLocation(arg0: T): ResourceLocation;
        notifyAll(): void;
        render(arg0: T, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        setFusionModelParts(parts: Internal.List_<any>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        shouldRender(arg0: T, arg1: Internal.Frustum_, arg2: number, arg3: number, arg4: number): boolean;
        getFont(): net.minecraft.client.gui.Font;
        hashCode(): number;
        getFusionModelParts(): Internal.List<any>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getPackedLightCoords(arg0: T, arg1: number): number;
        get class(): typeof any
        set fusionModelParts(parts: Internal.List_<any>)
        get font(): net.minecraft.client.gui.Font
        get fusionModelParts(): Internal.List<any>
    }
    type EntityRenderer_<T extends Internal.Entity> = EntityRenderer<T>;
    abstract class DistanceManager {
        getClass(): typeof any;
        hasPlayersNearby(arg0: number): boolean;
        addPlayer(arg0: Internal.SectionPos_, arg1: Internal.ServerPlayer_): void;
        runAllUpdates(arg0: Internal.ChunkMap_): boolean;
        removeRegionTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T, arg4: boolean): void;
        notify(): void;
        getDebugStatus(): string;
        wait(arg0: number, arg1: number): void;
        hasTickets(): boolean;
        addTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T): void;
        removeRegionTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T): void;
        removePlayer(arg0: Internal.SectionPos_, arg1: Internal.ServerPlayer_): void;
        updateSimulationDistance(arg0: number): void;
        addRegionTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T): void;
        inEntityTickingRange(arg0: number): boolean;
        shouldForceTicks(arg0: number): boolean;
        toString(): string;
        removeTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T): void;
        notifyAll(): void;
        hashCode(): number;
        addRegionTicket<T>(arg0: Internal.TicketType_<T>, arg1: Internal.ChunkPos_, arg2: number, arg3: T, arg4: boolean): void;
        wait(): void;
        wait(arg0: number): void;
        inBlockTickingRange(arg0: number): boolean;
        equals(arg0: any): boolean;
        getNaturalSpawnChunkCount(): number;
        removeTicketsOnClosing(): void;
        get class(): typeof any
        get debugStatus(): string
        get naturalSpawnChunkCount(): number
    }
    type DistanceManager_ = DistanceManager;
    abstract class LootItemConditionalFunction$Builder <T extends Internal.LootItemConditionalFunction$Builder<T>> implements Internal.LootItemFunction$Builder, Internal.ConditionUserBuilder<T> {
        constructor()
        getClass(): typeof any;
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): T;
        toString(): string;
        notifyAll(): void;
        unwrap(): Internal.ConditionUserBuilder<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        when(arg0: Internal.LootItemCondition$Builder_): Internal.ConditionUserBuilder<any>;
        abstract build(): Internal.LootItemFunction;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type LootItemConditionalFunction$Builder_<T extends Internal.LootItemConditionalFunction$Builder<T>> = LootItemConditionalFunction$Builder<T>;
    class RecipeBookType extends Internal.Enum<Internal.RecipeBookType> implements Internal.IExtensibleEnum {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        toString(): string;
        init(): void;
        static values(): Internal.RecipeBookType[];
        notifyAll(): void;
        static create(arg0: string): Internal.RecipeBookType;
        static valueOf(arg0: string): Internal.RecipeBookType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeBookType>>;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.RecipeBookType_): number;
        getDeclaringClass(): typeof Internal.RecipeBookType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(net.minecraft.world.inventory.RecipeBookType)"(arg0: Internal.RecipeBookType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeBookType
        static readonly SMOKER: (Internal.RecipeBookType) & (Internal.RecipeBookType);
        static readonly BLAST_FURNACE: (Internal.RecipeBookType) & (Internal.RecipeBookType);
        static readonly CRAFTING: (Internal.RecipeBookType) & (Internal.RecipeBookType);
        static readonly FURNACE: (Internal.RecipeBookType) & (Internal.RecipeBookType);
    }
    type RecipeBookType_ = "crafting" | RecipeBookType | "biomancy_bio_forge" | "furnace" | "cooking" | "refurbished_furniture_microwave" | "refurbished_furniture_oven" | "blast_furnace" | "smoker" | "refurbished_furniture_freezer";
    class SummonRitualRecipe$MobSource extends Internal.Enum<Internal.SummonRitualRecipe$MobSource> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.SummonRitualRecipe$MobSource[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.SummonRitualRecipe$MobSource;
        "compareTo(com.hollingsworth.arsnouveau.api.recipe.SummonRitualRecipe$MobSource)"(arg0: Internal.SummonRitualRecipe$MobSource_): number;
        notify(): void;
        compareTo(arg0: Internal.SummonRitualRecipe$MobSource_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.SummonRitualRecipe$MobSource;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SummonRitualRecipe$MobSource>>;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.SummonRitualRecipe$MobSource
        static readonly MOB_LIST: (Internal.SummonRitualRecipe$MobSource) & (Internal.SummonRitualRecipe$MobSource);
        static readonly CURRENT_BIOME: (Internal.SummonRitualRecipe$MobSource) & (Internal.SummonRitualRecipe$MobSource);
    }
    type SummonRitualRecipe$MobSource_ = "current_biome" | SummonRitualRecipe$MobSource | "mob_list";
    class BlockStateProvider$ConfiguredModelList implements Internal.ConfiguredModelListAccessor {
        constructor(...arg0: Internal.ConfiguredModel_[])
        constructor(arg0: Internal.ConfiguredModel_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        append(...arg0: Internal.ConfiguredModel_[]): this;
        toJSON(): Internal.JsonElement;
        equals(arg0: any): boolean;
        notify(): void;
        gtceu$getModels(): Internal.List<any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BlockStateProvider$ConfiguredModelList_ = BlockStateProvider$ConfiguredModelList;
    class StoneBlobFeature extends Internal.Feature<Internal.StoneBlobConfiguration> {
        constructor()
        getClass(): typeof any;
        canPlaceOre(arg0: Internal.BlockState_, arg1: Internal.Function_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.OreConfiguration$TargetBlockState_, arg4: Internal.BlockPos$MutableBlockPos_): boolean;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.StoneBlobConfiguration, Internal.Feature<Internal.StoneBlobConfiguration>>>;
        wait(): void;
        wait(arg0: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.StoneBlobConfiguration>): boolean;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.StoneBlobConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        get class(): typeof any
    }
    type StoneBlobFeature_ = StoneBlobFeature;
    class ServerboundPlayerActionPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.ServerboundPlayerActionPacket$Action_, arg1: BlockPos_, arg2: Internal.Direction_)
        constructor(arg0: Internal.ServerboundPlayerActionPacket$Action_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getPos(): BlockPos;
        hashCode(): number;
        getAction(): Internal.ServerboundPlayerActionPacket$Action;
        wait(): void;
        getSequence(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getDirection(): Internal.Direction;
        get class(): typeof any
        get skippable(): boolean
        get pos(): BlockPos
        get action(): Internal.ServerboundPlayerActionPacket$Action
        get sequence(): number
        get direction(): Internal.Direction
    }
    type ServerboundPlayerActionPacket_ = ServerboundPlayerActionPacket;
    class AttachedToLeavesDecorator extends Internal.TreeDecorator {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockStateProvider_, arg4: number, arg5: Internal.List_<Internal.Direction>)
        place(arg0: Internal.TreeDecorator$Context_): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.AttachedToLeavesDecorator>;
    }
    type AttachedToLeavesDecorator_ = AttachedToLeavesDecorator;
    class ReactionChamberRecipeSerializer implements Internal.RecipeSerializer<Internal.ReactionChamberRecipe> {
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ReactionChamberRecipe;
        getClass(): typeof any;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ReactionChamberRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ReactionChamberRecipe_): void;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.pedroksl.advanced_ae.recipes.ReactionChamberRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ReactionChamberRecipe_): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ReactionChamberRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ReactionChamberRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ReactionChamberRecipe;
        get class(): typeof any
        static readonly GENERIC_STACK_CODEC: Internal.Codec<appeng.api.stacks.GenericStack>;
        static readonly INSTANCE: (Internal.ReactionChamberRecipeSerializer) & (Internal.ReactionChamberRecipeSerializer);
    }
    type ReactionChamberRecipeSerializer_ = ReactionChamberRecipeSerializer;
    class DoorMatBlock extends Internal.FurnitureHorizontalEntityBlock implements Internal.BlockTagSupplier {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        getTags(): Internal.List<Internal.TagKey<Internal.Block>>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        handler$fmo000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        static createTicker<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        handler$bko000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get tags(): Internal.List<Internal.TagKey<Internal.Block>>
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type DoorMatBlock_ = DoorMatBlock;
}
declare namespace net.conczin.immersive_optimization.mixin {
    interface ServerLevelAccessor {
        abstract getEntityTickList(): Internal.EntityTickList;
        get entityTickList(): Internal.EntityTickList
        (): Internal.EntityTickList_;
    }
    type ServerLevelAccessor_ = ServerLevelAccessor | (()=> Internal.EntityTickList_);
}
