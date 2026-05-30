/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface TeamArgumentProvider {
        abstract getTeam(arg0: Internal.CommandSourceStack_): dev.ftb.mods.ftbteams.api.Team;
        (arg0: Internal.CommandSourceStack): dev.ftb.mods.ftbteams.api.Team_;
    }
    type TeamArgumentProvider_ = ((arg0: Internal.CommandSourceStack)=> dev.ftb.mods.ftbteams.api.Team_) | TeamArgumentProvider;
    class GeodeCrackSettings {
        constructor(arg0: number, arg1: number, arg2: number)
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
        static readonly CODEC: Internal.Codec<Internal.GeodeCrackSettings>;
        readonly generateCrackChance: number;
        readonly baseCrackSize: number;
        readonly crackPointOffset: number;
    }
    type GeodeCrackSettings_ = GeodeCrackSettings;
    class DocumentClass extends Internal.AbstractDocument<Internal.DocumentClass> {
        constructor()
        getClass(): typeof any;
        merge(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        getConstructors(): Internal.Set<Internal.DocumentConstructor>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fulfillsConditions(): boolean;
        merge(other: Internal.DocumentClass_): this;
        getInterfaces(): Internal.Set<Internal.PropertyType<any>>;
        addPropertyJson(json: Internal.JsonObject_): Internal.AbstractDocumentBase<Internal.DocumentClass>;
        setName(name: string): void;
        getName(): string;
        getMethods(): Internal.Set<Internal.DocumentMethod>;
        setParent(parent: Internal.PropertyType_<any>): void;
        deserialize(object: Internal.JsonObject_): void;
        isAbstract(): boolean;
        getMergedComment(): Internal.PropertyComment;
        toString(): string;
        copy(): this;
        "merge(com.probejs.jdoc.document.DocumentClass)"(other: Internal.DocumentClass_): this;
        notifyAll(): void;
        serialize(): Internal.JsonObject;
        isHidden(): boolean;
        isInterface(): boolean;
        setAbstract(anAbstract: boolean): void;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        setInterface(anInterface: boolean): void;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        hashCode(): number;
        applyProperties(): this;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        getParent(): Internal.PropertyType<any>;
        getFields(): Internal.Set<Internal.DocumentField>;
        wait(): void;
        wait(arg0: number): void;
        "merge(com.probejs.jdoc.document.AbstractDocumentBase)"(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        static fromJava(info: Internal.ClassInfo_): Internal.DocumentClass;
        equals(o: any): boolean;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        getGenerics(): Internal.List<Internal.PropertyType<any>>;
        get class(): typeof any
        get constructors(): Internal.Set<Internal.DocumentConstructor>
        get interfaces(): Internal.Set<Internal.PropertyType<any>>
        set name(name: string)
        get name(): string
        get methods(): Internal.Set<Internal.DocumentMethod>
        set parent(parent: Internal.PropertyType_<any>)
        get "abstract"(): boolean
        get mergedComment(): Internal.PropertyComment
        get hidden(): boolean
        get "interface"(): boolean
        set "abstract"(anAbstract: boolean)
        set "interface"(anInterface: boolean)
        get parent(): Internal.PropertyType<any>
        get fields(): Internal.Set<Internal.DocumentField>
        get generics(): Internal.List<Internal.PropertyType<any>>
        methods: Internal.Set<Internal.DocumentMethod>;
        fields: Internal.Set<Internal.DocumentField>;
        interfaces: Internal.Set<Internal.PropertyType<any>>;
        constructors: Internal.Set<Internal.DocumentConstructor>;
    }
    type DocumentClass_ = DocumentClass;
    class LayerPattern$Layer {
        constructor(arg0: Internal.List_<Internal.List<Internal.OreConfiguration$TargetBlockState>>, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        rollBlock(arg0: Internal.RandomSource_): Internal.List<Internal.OreConfiguration$TargetBlockState>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.LayerPattern$Layer>;
        readonly minSize: number;
        readonly targets: Internal.List<Internal.List<Internal.OreConfiguration$TargetBlockState>>;
        readonly maxSize: number;
        readonly weight: number;
    }
    type LayerPattern$Layer_ = LayerPattern$Layer;
    class SpecialFluidHandlerEvent extends Internal.EventJS {
        constructor()
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
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        add(fluidIngredient: Internal.FluidIngredient_, handler: Internal.SpecialFluidHandlerEvent$PipeHandler_): void;
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
    type SpecialFluidHandlerEvent_ = SpecialFluidHandlerEvent;
    class SurfaceSystem {
        constructor(arg0: Internal.RandomState_, arg1: Internal.BlockState_, arg2: number, arg3: Internal.PositionalRandomFactory_)
        buildSurface(arg0: Internal.RandomState_, arg1: Internal.BiomeManager_, arg2: Internal.Registry_<Internal.Biome>, arg3: boolean, arg4: Internal.WorldGenerationContext_, arg5: Internal.ChunkAccess_, arg6: Internal.NoiseChunk_, arg7: Internal.SurfaceRules$RuleSource_): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        topMaterial(arg0: Internal.SurfaceRules$RuleSource_, arg1: Internal.CarvingContext_, arg2: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg3: Internal.ChunkAccess_, arg4: Internal.NoiseChunk_, arg5: BlockPos_, arg6: boolean): Internal.Optional<Internal.BlockState>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SurfaceSystem_ = SurfaceSystem;
    class BlockMatchTest extends Internal.RuleTest {
        constructor(arg0: Internal.Block_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        test(arg0: Internal.BlockState_, arg1: Internal.RandomSource_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.BlockMatchTest>;
    }
    type BlockMatchTest_ = BlockMatchTest;
    class GigaPatternProviderPart extends Internal.PatternProviderPart {
        constructor(arg0: Internal.IPartItem_<any>)
        readFromStream(arg0: Internal.FriendlyByteBuf_): boolean;
        writeVisualStateToNBT(arg0: Internal.CompoundTag_): void;
        static tryClear(arg0: any): void;
        writeToNBT(arg0: Internal.CompoundTag_): void;
        onShiftActivate(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Vec3d_): boolean;
        notify(): void;
        isMissingChannel(): boolean;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getGrid(): Internal.IGrid;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_): void;
        getMainNode(): Internal.IManagedGridNode;
        renderDynamic(arg0: number, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        getTerminalSortOrder(): number;
        addEntityCrashInfo(arg0: Internal.CrashReportCategory_): void;
        isPowered(): boolean;
        getGridNode(): Internal.IGridNode;
        getName(): net.minecraft.network.chat.Component;
        isClientSide(): boolean;
        onEntityCollision(arg0: Internal.Entity_): void;
        getDesiredConnectionType(): Internal.AECableType;
        getTerminalIcon(): Internal.AEItemKey;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getExternalFacingNode(): Internal.IGridNode;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        onClicked(arg0: Internal.Player_, arg1: Vec3d_): boolean;
        onNeighborChanged(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: BlockPos_): void;
        isVisibleInTerminal(): boolean;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        isLadder(arg0: Internal.LivingEntity_): boolean;
        getExternalCableConnectionType(): Internal.AECableType;
        getActionableNode(): Internal.IGridNode;
        abstract getBlockEntity(): Internal.BlockEntity;
        getPriority(): number;
        isProvidingWeakPower(): number;
        canBePlacedOn(arg0: Internal.BusSupport_): boolean;
        wait(): void;
        requireDynamicRender(): boolean;
        addPartDrop(arg0: Internal.List_<Internal.ItemStack>, arg1: boolean): void;
        getUpgrades(): Internal.IUpgradeInventory;
        getSide(): Internal.Direction;
        onPartActivate(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Vec3d_): boolean;
        useStandardMemoryCard(): boolean;
        readVisualStateFromNBT(arg0: Internal.CompoundTag_): void;
        getCustomName(): net.minecraft.network.chat.Component;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        saveChanges(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAdditionalDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: boolean): void;
        getHost(): Internal.IPartHost;
        getPartItem(): Internal.IPartItem<any>;
        getTerminalPatternInventory(): Internal.InternalInventory;
        onPartShiftActivate(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Vec3d_): boolean;
        getConfigManager(): Internal.IConfigManager;
        isActive(): boolean;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onUpdateShape(arg0: Internal.Direction_): void;
        createLogic(): Internal.PatternProviderLogic;
        getLogic(): Internal.PatternProviderLogic;
        getTerminalGroup(): Internal.PatternContainerGroup;
        isProvidingStrongPower(): number;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        onPlacement(arg0: Internal.Player_): void;
        isSolid(): boolean;
        addToWorld(): void;
        onActivate(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Vec3d_): boolean;
        readFromNBT(arg0: Internal.CompoundTag_): void;
        toString(): string;
        getBoxes(arg0: Internal.IPartCollisionHelper_): void;
        getMainMenuIcon(): Internal.ItemStack;
        getLightLevel(): number;
        notifyAll(): void;
        getTargets(): Internal.EnumSet<Internal.Direction>;
        returnToMainMenu(arg0: Internal.Player_, arg1: Internal.ISubMenu_): void;
        getCableConnectionLength(arg0: Internal.AECableType_): number;
        removeFromWorld(): void;
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        openMenu(arg0: Internal.Player_, arg1: Internal.MenuLocator_): void;
        writeToStream(arg0: Internal.FriendlyByteBuf_): void;
        setPartHostInfo(arg0: Internal.Direction_, arg1: Internal.IPartHost_, arg2: Internal.BlockEntity_): void;
        setPriority(arg0: number): void;
        hashCode(): number;
        getStaticModels(): Internal.IPartModel;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        onShiftClicked(arg0: Internal.Player_, arg1: Vec3d_): boolean;
        canConnectRedstone(): boolean;
        equals(arg0: any): boolean;
        clearContent(): void;
        get missingChannel(): boolean
        get grid(): Internal.IGrid
        get mainNode(): Internal.IManagedGridNode
        get terminalSortOrder(): number
        get powered(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get clientSide(): boolean
        get desiredConnectionType(): Internal.AECableType
        get terminalIcon(): Internal.AEItemKey
        get externalFacingNode(): Internal.IGridNode
        get visibleInTerminal(): boolean
        get externalCableConnectionType(): Internal.AECableType
        get actionableNode(): Internal.IGridNode
        get blockEntity(): Internal.BlockEntity
        get priority(): number
        get upgrades(): Internal.IUpgradeInventory
        get side(): Internal.Direction
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get host(): Internal.IPartHost
        get partItem(): Internal.IPartItem<any>
        get terminalPatternInventory(): Internal.InternalInventory
        get configManager(): Internal.IConfigManager
        get active(): boolean
        get level(): Internal.Level
        get logic(): Internal.PatternProviderLogic
        get terminalGroup(): Internal.PatternContainerGroup
        get solid(): boolean
        get mainMenuIcon(): Internal.ItemStack
        get lightLevel(): number
        get targets(): Internal.EnumSet<Internal.Direction>
        set priority(arg0: number)
        get staticModels(): Internal.IPartModel
        get modelData(): Internal.ModelData
        static readonly MODELS_HAS_CHANNEL: (Internal.PartModel) & (Internal.PartModel);
        static MODELS: ([ResourceLocation, ResourceLocation, ResourceLocation, ResourceLocation]) & (Internal.List<ResourceLocation>);
        static readonly MODELS_OFF: (Internal.PartModel) & (Internal.PartModel);
        static readonly MODELS_ON: (Internal.PartModel) & (Internal.PartModel);
    }
    type GigaPatternProviderPart_ = GigaPatternProviderPart;
    class ShapedRecipeBuilder extends Internal.CraftingRecipeBuilder implements Internal.RecipeBuilder {
        constructor(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_, arg2: number)
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: string): void;
        getClass(): typeof any;
        static shaped(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_, arg2: number): Internal.ShapedRecipeBuilder;
        define(arg0: string, arg1: Internal.ItemLike_): this;
        notify(): void;
        static getDefaultRecipeId(arg0: Internal.ItemLike_): ResourceLocation;
        wait(arg0: number, arg1: number): void;
        static determineBookCategory(arg0: Internal.RecipeCategory_): Internal.CraftingBookCategory;
        "define(java.lang.Character,net.minecraft.world.item.crafting.Ingredient)"(arg0: string, arg1: Internal.Ingredient_): this;
        "save(java.util.function.Consumer,net.minecraft.resources.ResourceLocation)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_): void;
        group(arg0: string): this;
        define(arg0: string, arg1: Internal.Ingredient_): this;
        showNotification(arg0: boolean): this;
        unlockedBy(arg0: string, arg1: Internal.CriterionTriggerInstance_): Internal.RecipeBuilder;
        static shaped(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_): Internal.ShapedRecipeBuilder;
        toString(): string;
        notifyAll(): void;
        "define(java.lang.Character,net.minecraft.world.level.ItemLike)"(arg0: string, arg1: Internal.ItemLike_): this;
        "define(java.lang.Character,net.minecraft.tags.TagKey)"(arg0: string, arg1: Internal.TagKey_<Internal.Item>): this;
        getResult(): Internal.Item;
        hashCode(): number;
        define(arg0: string, arg1: Internal.TagKey_<Internal.Item>): this;
        wait(): void;
        "save(java.util.function.Consumer,java.lang.String)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: string): void;
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>): void;
        wait(arg0: number): void;
        pattern(arg0: string): this;
        equals(arg0: any): boolean;
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_): void;
        get class(): typeof any
        get result(): Internal.Item
    }
    type ShapedRecipeBuilder_ = ShapedRecipeBuilder;
    interface ISubMenu {
        abstract getLocator(): Internal.MenuLocator;
        abstract getHost(): Internal.ISubMenuHost;
        get locator(): Internal.MenuLocator
        get host(): Internal.ISubMenuHost
    }
    type ISubMenu_ = ISubMenu;
    class QuestShape extends Internal.Icon {
        constructor(id: string)
        shouldDraw(): boolean;
        static reload(list: Internal.List_<string>): void;
        draw3D(graphics: Internal.GuiGraphics_): void;
        getClass(): typeof any;
        static "getIcon(com.google.gson.JsonElement)"(json: Internal.JsonElement_): Internal.Icon;
        aspectRatio(): number;
        withColor(color: Internal.Color4I_): Internal.Icon;
        isEmpty(): boolean;
        static empty(): Internal.Color4I;
        static getIcon(id: ResourceLocation_): Internal.Icon;
        notify(): void;
        static get(id: string): Internal.QuestShape;
        wait(arg0: number, arg1: number): void;
        getIngredient(): any;
        combineWith(...icons: Internal.Icon_[]): Internal.Icon;
        withUV(u0: number, v0: number, u1: number, v1: number): Internal.Icon;
        combineWith(icon: Internal.Icon_): Internal.Icon;
        static "getIcon(net.minecraft.resources.ResourceLocation)"(id: ResourceLocation_): Internal.Icon;
        static map(): Internal.Map<string, Internal.QuestShape>;
        getPixelBufferFrameCount(): number;
        getBackground(): Internal.ImageIcon;
        getShape(): Internal.ImageIcon;
        createPixelBuffer(): Internal.PixelBuffer;
        getOutline(): Internal.ImageIcon;
        "combineWith(dev.ftb.mods.ftblibrary.icon.Icon[])"(...icons: Internal.Icon_[]): Internal.Icon;
        getJson(): Internal.JsonElement;
        withUV(x: number, y: number, w: number, h: number, tw: number, th: number): Internal.Icon;
        withPadding(padding: number): Internal.Icon;
        toString(): string;
        withBorder(color: Internal.Color4I_, roundEdges: boolean): Internal.Icon;
        notifyAll(): void;
        withTint(color: Internal.Color4I_): Internal.Icon;
        static getIcon(json: Internal.JsonElement_): Internal.Icon;
        hasPixelBuffer(): boolean;
        static getIcon(id: string): Internal.Icon;
        "combineWith(dev.ftb.mods.ftblibrary.icon.Icon)"(icon: Internal.Icon_): Internal.Icon;
        hashCode(): number;
        drawStatic(graphics: Internal.GuiGraphics_, x: number, y: number, w: number, h: number): void;
        draw(graphics: Internal.GuiGraphics_, x: number, y: number, w: number, h: number): void;
        wait(): void;
        wait(arg0: number): void;
        static "getIcon(java.lang.String)"(id: string): Internal.Icon;
        getShapePixels(): Internal.PixelBuffer;
        equals(o: any): boolean;
        copy(): Internal.Icon;
        get class(): typeof any
        get empty(): boolean
        get ingredient(): any
        get pixelBufferFrameCount(): number
        get background(): Internal.ImageIcon
        get shape(): Internal.ImageIcon
        get outline(): Internal.ImageIcon
        get json(): Internal.JsonElement
        get shapePixels(): Internal.PixelBuffer
        static idMapWithDefault: Internal.NameMap<string>;
        static idMap: Internal.NameMap<string>;
    }
    type QuestShape_ = QuestShape;
    class MachineResult <T extends Internal.Recipe<any>> implements Internal.FinishedRecipe {
        getClass(): typeof any;
        serializeRecipeData(arg0: Internal.JsonObject_): void;
        toString(): string;
        notifyAll(): void;
        serializeAdvancement(): Internal.JsonObject;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getId(): ResourceLocation;
        getAdvancementId(): ResourceLocation;
        wait(): void;
        wait(arg0: number): void;
        getType(): Internal.RecipeSerializer<any>;
        equals(arg0: any): boolean;
        serializeRecipe(): Internal.JsonObject;
        get class(): typeof any
        get id(): ResourceLocation
        get advancementId(): ResourceLocation
        get type(): Internal.RecipeSerializer<any>
    }
    type MachineResult_<T extends Internal.Recipe<any>> = MachineResult<T>;
    class BeltOfUnstableGifts extends Internal.ArsNouveauCurio {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getAttributeModifiers(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        "makesPiglinsNeutral(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        "isEnderMask(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.player.Player,net.minecraft.world.entity.monster.EnderMan)"(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "curioBreak(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        "canWalkOnPowderedSnow(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
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
        withTooltip(arg0: string): Internal.ModItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getAttributesTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        "curioBreak(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        "makesPiglinsNeutral(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "canEquip(java.lang.String,net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        "canWalkOnPowderedSnow(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
        "isEnderMask(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.entity.monster.EnderMan,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "canEquip(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.entity.Entity)"(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
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
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type BeltOfUnstableGifts_ = BeltOfUnstableGifts;
    class WeightedReward implements Internal.Comparable<Internal.WeightedReward> {
        constructor(reward: Internal.Reward_, weight: number)
        getClass(): typeof any;
        compareTo(o: Internal.WeightedReward_): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static chanceString(weight: number, totalWeight: number): string;
        getWeight(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        setWeight(weight: number): void;
        getReward(): Internal.Reward;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(dev.ftb.mods.ftbquests.quest.loot.WeightedReward)"(o: Internal.WeightedReward_): number;
        get class(): typeof any
        get weight(): number
        set weight(weight: number)
        get reward(): Internal.Reward
    }
    type WeightedReward_ = WeightedReward;
    class MinMaxBounds$Ints extends Internal.MinMaxBounds<number> {
        constructor(arg0: number, arg1: number)
        static fromReader(arg0: Internal.StringReader_, arg1: Internal.Function_<number, number>): Internal.MinMaxBounds$Ints;
        getClass(): typeof any;
        serializeToJson(): Internal.JsonElement;
        matches(arg0: number): boolean;
        toString(): string;
        static fromJson(arg0: Internal.JsonElement_): Internal.MinMaxBounds$Ints;
        getMax(): number;
        notifyAll(): void;
        isAny(): boolean;
        static atMost(arg0: number): Internal.MinMaxBounds$Ints;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        matchesSqr(arg0: number): boolean;
        static atLeast(arg0: number): Internal.MinMaxBounds$Ints;
        hashCode(): number;
        static exactly(arg0: number): Internal.MinMaxBounds$Ints;
        static fromReader(arg0: Internal.StringReader_): Internal.MinMaxBounds$Ints;
        getMin(): number;
        wait(): void;
        wait(arg0: number): void;
        static between(arg0: number, arg1: number): Internal.MinMaxBounds$Ints;
        equals(arg0: any): boolean;
        get class(): typeof any
        get max(): number
        get any(): boolean
        get min(): number
        static readonly ANY: (Internal.MinMaxBounds$Ints) & (Internal.MinMaxBounds$Ints);
    }
    type MinMaxBounds$Ints_ = MinMaxBounds$Ints;
    class EnumProperty <T extends Internal.Enum<T> & Internal.StringRepresentable> extends Internal.Property<T> {
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T): Internal.EnumProperty<T>;
        getClass(): typeof any;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.EnumProperty<T>;
        generateHashCode(): number;
        "value(java.lang.Object)"(arg0: T): Internal.Property$Value<T>;
        getName(arg0: T): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        value(arg0: Internal.StateHolder_<any, any>): Internal.Property$Value<T>;
        static "create(java.lang.String,java.lang.Class,java.lang.Object[])"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, ...arg2: T[]): Internal.EnumProperty<T>;
        getName(): string;
        "getName(java.lang.Comparable)"(arg0: Internal.Comparable_<any>): string;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, ...arg2: T[]): Internal.EnumProperty<T>;
        "value(net.minecraft.world.level.block.state.StateHolder)"(arg0: Internal.StateHolder_<any, any>): Internal.Property$Value<T>;
        static "create(java.lang.String,java.lang.Class,java.util.function.Predicate)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.EnumProperty<T>;
        getValueClass(): T;
        toString(): string;
        getPossibleValues(): Internal.Collection<T>;
        notifyAll(): void;
        valueCodec(): Internal.Codec<Internal.Property$Value<T>>;
        static "create(java.lang.String,java.lang.Class,java.util.Collection)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Collection_<T>): Internal.EnumProperty<T>;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Collection_<T>): Internal.EnumProperty<T>;
        getName(arg0: Internal.Comparable_<any>): string;
        "getName(java.lang.Object)"(arg0: T): string;
        parseValue<U, S extends Internal.StateHolder<any, S>>(arg0: Internal.DynamicOps_<U>, arg1: S, arg2: U): Internal.DataResult<S>;
        hashCode(): number;
        codec(): Internal.Codec<T>;
        wait(): void;
        wait(arg0: number): void;
        getValue(arg0: string): Internal.Optional<T>;
        value(arg0: T): Internal.Property$Value<T>;
        equals(arg0: any): boolean;
        getAllValues(): Internal.Stream<Internal.Property$Value<T>>;
        get class(): typeof any
        get name(): string
        get valueClass(): T
        get possibleValues(): Internal.Collection<T>
        get allValues(): Internal.Stream<Internal.Property$Value<T>>
    }
    type EnumProperty_<T extends Internal.Enum<T> & Internal.StringRepresentable> = EnumProperty<T>;
    class PackagePortItem extends Internal.BlockItem {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type PackagePortItem_ = PackagePortItem;
    class PreGenerationContext extends com.ferreusveritas.dynamictrees.systems.genfeature.context.GenerationContext {
        constructor(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Species_, arg3: number, arg4: Internal.Direction_, arg5: Internal.SafeChunkBounds_, arg6: Internal.JoCode_)
        level(): Internal.LevelAccessor;
        getClass(): typeof any;
        toString(): string;
        pos(): BlockPos;
        random(): Internal.RandomSource;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        species(): Internal.Species;
        bounds(): Internal.SafeChunkBounds;
        hashCode(): number;
        joCode(): Internal.JoCode;
        wait(): void;
        isWorldGen(): boolean;
        wait(arg0: number): void;
        radius(): number;
        equals(arg0: any): boolean;
        facing(): Internal.Direction;
        levelContext(): Internal.LevelContext;
        get class(): typeof any
        get worldGen(): boolean
    }
    type PreGenerationContext_ = PreGenerationContext;
    class ShovelItem extends Internal.DiggerItem implements dev.emi.emi.mixin.accessor.ShovelItemAccessor, Internal.ShovelItemAccessor, Internal.ShovelItemAccess {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        static getPathStates(): Internal.Map<Internal.Block, Internal.BlockState>;
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
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getFlattenables(): Internal.Map<Internal.Block, Internal.BlockState>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static getPathStates_$md$54c54b$2(): Internal.Map<any, any>;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        static getFlattenables_$md$54c54b$1(): Internal.Map<any, any>;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        setAttackDamage(attackDamage: number): void;
        static getPathStates_$md$54c54b$0(): Internal.Map<any, any>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        getAttackDamage(): number;
        static getShovelPathingState(arg0: Internal.BlockState_): Internal.BlockState;
        notify(): void;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        get pathStates(): Internal.Map<Internal.Block, Internal.BlockState>
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get flattenables(): Internal.Map<Internal.Block, Internal.BlockState>
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get pathStates_$md$54c54b$2(): Internal.Map<any, any>
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get flattenables_$md$54c54b$1(): Internal.Map<any, any>
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
        get pathStates_$md$54c54b$0(): Internal.Map<any, any>
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get attackDamage(): number
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
        static FLATTENABLES: ({[key: Internal.MyceliumBlock]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState, [key: Internal.GrassBlock]: Internal.BlockState, [key: Internal.SnowyDirtBlock]: Internal.BlockState, [key: Internal.RootedDirtBlock]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState}) & (Internal.Map<Internal.Block, Internal.BlockState>);
    }
    type ShovelItem_ = ShovelItem;
    interface ToolModeProperty$IPanelSelection extends Internal.StringRepresentable {
        fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        abstract getSerializedName(): string;
        abstract getTextureFolder(): ResourceLocation;
        get serializedName(): string
        get textureFolder(): ResourceLocation
    }
    type ToolModeProperty$IPanelSelection_ = ToolModeProperty$IPanelSelection;
    class FilterLogic extends Internal.FilterLogicBase {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: string)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>, arg4: string)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number)
        getClass(): typeof any;
        setMatchDurability(arg0: boolean): void;
        setPrimaryMatch(arg0: Internal.PrimaryMatch_): void;
        addTag(arg0: Internal.TagKey_<Internal.Item>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setMatchNbt(arg0: boolean): void;
        setMatchAnyTag(arg0: boolean): void;
        getFilterHandler(): Internal.FilterLogic$ObservableFilterItemStackHandler;
        shouldMatchAnyTag(): boolean;
        getPrimaryMatch(): Internal.PrimaryMatch;
        stackMatchesFilter(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        toString(): string;
        notifyAll(): void;
        isAllowList(): boolean;
        shouldMatchDurability(): boolean;
        setAllowList(arg0: boolean): void;
        setAllowByDefault(arg0: boolean): void;
        shouldMatchNbt(): boolean;
        hashCode(): number;
        setEmptyAllowListMatchesEverything(): void;
        wait(): void;
        getTagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>;
        removeTagName(arg0: Internal.TagKey_<Internal.Item>): void;
        wait(arg0: number): void;
        getParentTagKey(): string;
        equals(arg0: any): boolean;
        matchesFilter(arg0: Internal.ItemStack_): boolean;
        get class(): typeof any
        set matchDurability(arg0: boolean)
        set primaryMatch(arg0: Internal.PrimaryMatch_)
        set matchNbt(arg0: boolean)
        set matchAnyTag(arg0: boolean)
        get filterHandler(): Internal.FilterLogic$ObservableFilterItemStackHandler
        get primaryMatch(): Internal.PrimaryMatch
        get allowList(): boolean
        set allowList(arg0: boolean)
        set allowByDefault(arg0: boolean)
        get tagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>
        get parentTagKey(): string
    }
    type FilterLogic_ = FilterLogic;
    interface Kind1$Mu extends Internal.K1 {
    }
    type Kind1$Mu_ = Kind1$Mu;
    class SoundManager extends Internal.SimplePreparableReloadListener<any> implements Internal.IMixinSoundManager, Internal.SoundManagerAccessor, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.Options_)
        getClass(): typeof any;
        play(arg0: Internal.SoundInstance_): void;
        getAvailableSounds(): Internal.Collection<ResourceLocation>;
        destroy(): void;
        updateSourceVolume(arg0: Internal.SoundSource_, arg1: number): void;
        stop(arg0: Internal.SoundInstance_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addListener(arg0: Internal.SoundEventListener_): void;
        playDelayed(arg0: Internal.SoundInstance_, arg1: number): void;
        getName(): string;
        stop(arg0: ResourceLocation_, arg1: Internal.SoundSource_): void;
        getEngine(): Internal.SoundEngine;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        updateSource(arg0: Internal.Camera_): void;
        queueTickingSound(arg0: Internal.TickableSoundInstance_): void;
        reload(): void;
        getSoundEngineMelody(): Internal.SoundEngine;
        getSoundEvent(arg0: ResourceLocation_): Internal.WeighedSoundEvents;
        toString(): string;
        notifyAll(): void;
        resume(): void;
        getFabricDependencies(): Internal.Collection<any>;
        getAvailableSoundDevices(): Internal.List<string>;
        getDebugString(): string;
        hashCode(): number;
        removeListener(arg0: Internal.SoundEventListener_): void;
        wait(): void;
        isActive(arg0: Internal.SoundInstance_): boolean;
        tick(arg0: boolean): void;
        stop(): void;
        wait(arg0: number): void;
        pause(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get availableSounds(): Internal.Collection<ResourceLocation>
        get name(): string
        get engine(): Internal.SoundEngine
        get fabricId(): ResourceLocation
        get soundEngineMelody(): Internal.SoundEngine
        get fabricDependencies(): Internal.Collection<any>
        get availableSoundDevices(): Internal.List<string>
        get debugString(): string
        static readonly EMPTY_SOUND: (Internal.Sound) & (Internal.Sound);
        static readonly INTENTIONALLY_EMPTY_SOUND: (Internal.Sound) & (Internal.Sound);
        static readonly INTENTIONALLY_EMPTY_SOUND_LOCATION: (ResourceLocation) & (ResourceLocation);
        static readonly INTENTIONALLY_EMPTY_SOUND_EVENT: (Internal.WeighedSoundEvents) & (Internal.WeighedSoundEvents);
    }
    type SoundManager_ = SoundManager;
    class FireworksJS {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        static of(o: any): Internal.FireworksJS;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createFireworkRocket(w: Internal.Level_, x: number, y: number, z: number): Internal.FireworkRocketEntity;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        lifetime: number;
        readonly explosions: Internal.List<Internal.FireworksJS$Explosion>;
        flight: number;
    }
    type FireworksJS_ = FireworksJS;
    class ItemStackReference extends Internal.ItemStackHolder {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isDirty(): boolean;
        copy(): Internal.ItemStackHolder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStack(): Internal.ItemStack;
        hashCode(): number;
        wait(): void;
        setStack(arg0: Internal.ItemStack_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get dirty(): boolean
        get stack(): Internal.ItemStack
        set stack(arg0: Internal.ItemStack_)
    }
    type ItemStackReference_ = ItemStackReference;
    class WispParticleType extends Internal.ParticleType<Internal.WispParticleData> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getOverrideLimiter(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getId(): ResourceLocation;
        getDeserializer(): Internal.ParticleOptions$Deserializer<Internal.WispParticleData>;
        wait(): void;
        wait(arg0: number): void;
        codec(): Internal.Codec<Internal.WispParticleData>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get overrideLimiter(): boolean
        get id(): ResourceLocation
        get deserializer(): Internal.ParticleOptions$Deserializer<Internal.WispParticleData>
    }
    type WispParticleType_ = WispParticleType;
    class NetheriteOxygenCanItem extends Internal.OxygenCanItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
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
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        getOxygenCharger(arg0: Internal.ItemStackHolder_): Internal.IOxygenCharger;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        getOxygenStorage(arg0: Internal.ItemStackHolder_): Internal.IOxygenStorage;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        provideCreativeTabOutput(arg0: Internal.CreativeModeTab$Output_): void;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        getFluidContainer(arg0: Internal.ItemStack_): Internal.WrappedItemFluidContainer;
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
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type NetheriteOxygenCanItem_ = NetheriteOxygenCanItem;
    interface IRoomHistoryItem {
        abstract getMachine(): Internal.IDimensionalBlockPosition;
        abstract getEntryLocation(): Internal.IDimensionalPosition;
        get machine(): Internal.IDimensionalBlockPosition
        get entryLocation(): Internal.IDimensionalPosition
    }
    type IRoomHistoryItem_ = IRoomHistoryItem;
    class BlockEntityWithoutLevelRenderer implements Internal.ResourceManagerReloadListener {
        constructor(arg0: Internal.BlockEntityRenderDispatcher_, arg1: Internal.EntityModelSet_)
        getClass(): typeof any;
        toString(): string;
        renderByItem(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: number): void;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get name(): string
        readonly blockEntityRenderDispatcher: Internal.BlockEntityRenderDispatcher;
        tridentModel: Internal.TridentModel;
        readonly entityModelSet: Internal.EntityModelSet;
    }
    type BlockEntityWithoutLevelRenderer_ = BlockEntityWithoutLevelRenderer;
    interface IntToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type IntToLongFunction_ = IntToLongFunction | ((arg0: number)=> number);
    class MachineDefinition implements Internal.Supplier<Internal.IMachineBlock> {
        constructor(arg0: ResourceLocation_)
        getRotationState(): RotationState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.BlockEntity>;
        defaultRenderState(): Internal.MachineRenderState;
        getRecipeTypes(): Internal.GTRecipeType[];
        setShape(arg0: Internal.VoxelShape_): void;
        notify(): void;
        setBeforeWorking(arg0: Internal.BiPredicate_<Internal.IRecipeLogicMachine, Internal.GTRecipe>): void;
        getAppearance(): Internal.Supplier<Internal.BlockState>;
        static setBuilt(arg0: Internal.MachineDefinition_): void;
        getId(): ResourceLocation;
        setTooltipBuilder(arg0: Internal.BiConsumer_<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>): void;
        isRenderWorldPreview(): boolean;
        isAlwaysTryModifyRecipe(): boolean;
        getStateDefinition(): Internal.StateDefinition<Internal.MachineDefinition, Internal.MachineRenderState>;
        setEditableUI(arg0: Internal.EditableMachineUI_): void;
        getDescriptionId(): string;
        getEditableUI(): Internal.EditableMachineUI;
        setRotationState(arg0: RotationState_): void;
        setRecipeTypes(arg0: Internal.GTRecipeType_[]): void;
        isRegressWhenWaiting(): boolean;
        setAppearance(arg0: Internal.Supplier_<Internal.BlockState>): void;
        getOnWorking(): Internal.Predicate<Internal.IRecipeLogicMachine>;
        getRecipeModifier(): Internal.RecipeModifier;
        isAllowExtendedFacing(): boolean;
        asStack(arg0: number): Internal.ItemStack;
        defaultBlockState(): Internal.BlockState;
        getTooltipBuilder(): Internal.BiConsumer<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>;
        setRecipeOutputLimits(arg0: Internal.Reference2IntMap_<RecipeCapability<any>>): void;
        isAllowCoverOnFront(): boolean;
        static clearBuilt(): void;
        setTier(arg0: number): void;
        getRecipeOutputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>;
        wait(): void;
        setStateDefinition(arg0: Internal.StateDefinition_<Internal.MachineDefinition, Internal.MachineRenderState>): void;
        setOnWorking(arg0: Internal.Predicate_<Internal.IRecipeLogicMachine>): void;
        getBlock(): Internal.Block;
        setAllowCoverOnFront(arg0: boolean): void;
        getClass(): typeof any;
        getOnWaiting(): Internal.Consumer<Internal.IRecipeLogicMachine>;
        get(): any;
        getLangValue(): string;
        setRecipeModifier(arg0: Internal.RecipeModifier_): void;
        setItemSupplier(arg0: Internal.Supplier_<Internal.MetaMachineItem>): void;
        setRegressWhenWaiting(arg0: boolean): void;
        setBlockEntityTypeSupplier(arg0: Internal.Supplier_<Internal.BlockEntityType<Internal.BlockEntity>>): void;
        wait(arg0: number, arg1: number): void;
        setDefaultPaintingColor(arg0: number): void;
        createMetaMachine(arg0: Internal.IMachineBlockEntity_): Internal.MetaMachine;
        setMachineSupplier(arg0: Internal.Function_<Internal.IMachineBlockEntity, Internal.MetaMachine>): void;
        setAllowExtendedFacing(arg0: boolean): void;
        setAlwaysTryModifyRecipe(arg0: boolean): void;
        getName(): string;
        setOnWaiting(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>): void;
        getDefaultPaintingColor(): number;
        setLangValue(arg0: string): void;
        toString(): string;
        getTier(): number;
        notifyAll(): void;
        isRenderXEIPreview(): boolean;
        registerDefaultState(arg0: Internal.MachineRenderState_): void;
        setAfterWorking(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>): void;
        setRenderXEIPreview(arg0: boolean): void;
        getShape(arg0: Internal.Direction_): Internal.VoxelShape;
        hashCode(): number;
        getAfterWorking(): Internal.Consumer<Internal.IRecipeLogicMachine>;
        setBlockSupplier(arg0: Internal.Supplier_<Internal.Block>): void;
        wait(arg0: number): void;
        getBeforeWorking(): Internal.BiPredicate<Internal.IRecipeLogicMachine, Internal.GTRecipe>;
        static getBuilt(): Internal.MachineDefinition;
        equals(arg0: any): boolean;
        getItem(): Internal.MetaMachineItem;
        setRenderWorldPreview(arg0: boolean): void;
        asStack(): Internal.ItemStack;
        get rotationState(): RotationState
        get blockEntityType(): Internal.BlockEntityType<Internal.BlockEntity>
        get recipeTypes(): Internal.GTRecipeType[]
        set shape(arg0: Internal.VoxelShape_)
        set beforeWorking(arg0: Internal.BiPredicate_<Internal.IRecipeLogicMachine, Internal.GTRecipe>)
        get appearance(): Internal.Supplier<Internal.BlockState>
        set built(arg0: Internal.MachineDefinition_)
        get id(): ResourceLocation
        set tooltipBuilder(arg0: Internal.BiConsumer_<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>)
        get renderWorldPreview(): boolean
        get alwaysTryModifyRecipe(): boolean
        get stateDefinition(): Internal.StateDefinition<Internal.MachineDefinition, Internal.MachineRenderState>
        set editableUI(arg0: Internal.EditableMachineUI_)
        get descriptionId(): string
        get editableUI(): Internal.EditableMachineUI
        set rotationState(arg0: RotationState_)
        set recipeTypes(arg0: Internal.GTRecipeType_[])
        get regressWhenWaiting(): boolean
        set appearance(arg0: Internal.Supplier_<Internal.BlockState>)
        get onWorking(): Internal.Predicate<Internal.IRecipeLogicMachine>
        get recipeModifier(): Internal.RecipeModifier
        get allowExtendedFacing(): boolean
        get tooltipBuilder(): Internal.BiConsumer<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>
        set recipeOutputLimits(arg0: Internal.Reference2IntMap_<RecipeCapability<any>>)
        get allowCoverOnFront(): boolean
        set tier(arg0: number)
        get recipeOutputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>
        set stateDefinition(arg0: Internal.StateDefinition_<Internal.MachineDefinition, Internal.MachineRenderState>)
        set onWorking(arg0: Internal.Predicate_<Internal.IRecipeLogicMachine>)
        get block(): Internal.Block
        set allowCoverOnFront(arg0: boolean)
        get class(): typeof any
        get onWaiting(): Internal.Consumer<Internal.IRecipeLogicMachine>
        get langValue(): string
        set recipeModifier(arg0: Internal.RecipeModifier_)
        set itemSupplier(arg0: Internal.Supplier_<Internal.MetaMachineItem>)
        set regressWhenWaiting(arg0: boolean)
        set blockEntityTypeSupplier(arg0: Internal.Supplier_<Internal.BlockEntityType<Internal.BlockEntity>>)
        set defaultPaintingColor(arg0: number)
        set machineSupplier(arg0: Internal.Function_<Internal.IMachineBlockEntity, Internal.MetaMachine>)
        set allowExtendedFacing(arg0: boolean)
        set alwaysTryModifyRecipe(arg0: boolean)
        get name(): string
        set onWaiting(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>)
        get defaultPaintingColor(): number
        set langValue(arg0: string)
        get tier(): number
        get renderXEIPreview(): boolean
        set afterWorking(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>)
        set renderXEIPreview(arg0: boolean)
        get afterWorking(): Internal.Consumer<Internal.IRecipeLogicMachine>
        set blockSupplier(arg0: Internal.Supplier_<Internal.Block>)
        get beforeWorking(): Internal.BiPredicate<Internal.IRecipeLogicMachine, Internal.GTRecipe>
        get built(): Internal.MachineDefinition
        get item(): Internal.MetaMachineItem
        set renderWorldPreview(arg0: boolean)
        static readonly RENDER_STATE_REGISTRY: Internal.IdMapper<Internal.MachineRenderState>;
    }
    type MachineDefinition_ = MachineDefinition;
    class DiscFragmentItem extends Internal.Item {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
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
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getDisplayName(): Internal.MutableComponent;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get displayName(): Internal.MutableComponent
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
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
        set craftingRemainder(arg0: Internal.Item_)
    }
    type DiscFragmentItem_ = DiscFragmentItem;
    interface ClipboardCloneable {
        abstract getClipboardKey(): string;
        abstract readFromClipboard(arg0: Internal.CompoundTag_, arg1: Internal.Player_, arg2: Internal.Direction_, arg3: boolean): boolean;
        abstract writeToClipboard(arg0: Internal.CompoundTag_, arg1: Internal.Direction_): boolean;
        get clipboardKey(): string
    }
    type ClipboardCloneable_ = ClipboardCloneable;
    class ChargingRecipe implements Internal.Recipe<Internal.RecipeWrapper> {
        constructor(arg0: ResourceLocation_, arg1: Internal.Ingredient_, arg2: Internal.ItemStack_, arg3: number, arg4: number)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraftforge.items.wrapper.RecipeWrapper,net.minecraft.core.RegistryAccess)"(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        matches(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        assemble(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getResultItem(): Internal.ItemStack;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.RecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        getMaxChargeRate(): number;
        setGroup(group: string): void;
        hashCode(): number;
        "matches(net.minecraftforge.items.wrapper.RecipeWrapper,net.minecraft.world.level.Level)"(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        getEnergy(): number;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get resultItem(): Internal.ItemStack
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        get maxChargeRate(): number
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get energy(): number
        output: Internal.ItemStack;
        ingredient: Internal.Ingredient;
        energy: number;
        maxChargeRate: number;
        readonly id: ResourceLocation;
    }
    type ChargingRecipe_ = ChargingRecipe;
    class DominionWand extends Internal.ModItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
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
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
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
        withTooltip(arg0: string): Internal.ModItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getPosString(arg0: BlockPos_): string;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        clear(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        wait(arg0: number, arg1: number): void;
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
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
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type DominionWand_ = DominionWand;
    class WorldStem extends Internal.Record implements Internal.AutoCloseable {
        constructor(arg0: Internal.CloseableResourceManager_, arg1: Internal.ReloadableServerResources_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.WorldData_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        dataPackResources(): Internal.ReloadableServerResources;
        wait(): void;
        resourceManager(): Internal.CloseableResourceManager;
        close(): void;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        worldData(): Internal.WorldData;
        get class(): typeof any
    }
    type WorldStem_ = WorldStem;
    interface IToolable {
        abstract onToolClick(arg0: Internal.Set_<GTToolType>, arg1: Internal.ItemStack_, arg2: Internal.UseOnContext_): com.mojang.datafixers.util.Pair<GTToolType, Internal.InteractionResult>;
        (arg0: Internal.Set<GTToolType>, arg1: Internal.ItemStack, arg2: Internal.UseOnContext): com.mojang.datafixers.util.Pair_<GTToolType, Internal.InteractionResult>;
    }
    type IToolable_ = IToolable | ((arg0: Internal.Set<GTToolType>, arg1: Internal.ItemStack, arg2: Internal.UseOnContext)=> com.mojang.datafixers.util.Pair_<GTToolType, Internal.InteractionResult>);
    interface TelemetryEvent extends Internal.TelemetryPropertyContainer {
        abstract addProperty(arg0: string, arg1: boolean): void;
        abstract "addProperty(java.lang.String,java.lang.String)"(arg0: string, arg1: string): void;
        abstract addNullProperty(arg0: string): void;
        abstract "addProperty(java.lang.String,long)"(arg0: string, arg1: number): void;
        abstract "addProperty(java.lang.String,int)"(arg0: string, arg1: number): void;
        forJsonObject(arg0: Internal.JsonObject_): Internal.TelemetryPropertyContainer;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: string): void;
        abstract send(): void;
        abstract "addProperty(java.lang.String,boolean)"(arg0: string, arg1: boolean): void;
        readonly EMPTY: Internal.TelemetryEvent;
    }
    type TelemetryEvent_ = TelemetryEvent;
    class RecipesUpdatedEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.RecipeManager_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getRecipeManager(): Internal.RecipeManager;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get recipeManager(): Internal.RecipeManager
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type RecipesUpdatedEvent_ = RecipesUpdatedEvent;
    class ItemExpireEvent extends Internal.ItemEvent {
        constructor()
        constructor(arg0: Internal.ItemEntity_, arg1: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        setExtraLife(arg0: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExtraLife(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getEntity(): Internal.ItemEntity;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set extraLife(arg0: number)
        get extraLife(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get entity(): Internal.ItemEntity
    }
    type ItemExpireEvent_ = ItemExpireEvent;
    interface Short2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Short2LongFunction;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Short2DoubleFunction;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2ReferenceFunction<V>;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ReferenceFunction<V>;
        "apply(java.lang.Short)"(arg0: number): V;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2ReferenceFunction<V>;
        apply(arg0: number): V;
        "containsKey(short)"(arg0: number): boolean;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Short2ReferenceFunction<T>;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Short2CharFunction;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2ReferenceFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        containsKey(arg0: number): boolean;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2ReferenceFunction<V>;
        put(arg0: number, arg1: V): V;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Short2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "getOrDefault(short,java.lang.Object)"(arg0: number, arg1: V): V;
        "put(short,java.lang.Object)"(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Short2IntFunction;
        "remove(short)"(arg0: number): V;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract get(arg0: number): V;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2ReferenceFunction<V>;
        clear(): void;
        abstract "get(short)"(arg0: number): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Short2ReferenceFunction_<V> = Short2ReferenceFunction<V>;
    interface FloatBinaryOperator extends Internal.DoubleBinaryOperator, Internal.BinaryOperator<number> {
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        abstract apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number, arg1: number): number;
        abstract "apply(float,float)"(arg0: number, arg1: number): number;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        /**
         * @deprecated
        */
        "apply(java.lang.Float,java.lang.Float)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "apply(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
    }
    type FloatBinaryOperator_ = FloatBinaryOperator;
    class Minecart extends Internal.AbstractMinecart {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        getXRot(): number;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getBlockZ(): number;
        isSuppressingBounce(): boolean;
        setHurtTime(arg0: number): void;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        handler$efh000$onRemove(ci: Internal.CallbackInfo_): void;
        modifyReturnValue$hgh000$create$onFireImmune(arg0: boolean): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPassengersAndSelf(): Internal.Stream<any>;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        handler$efh005$onTick(ci: Internal.CallbackInfo_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        setMotionZ(z: number): void;
        getDropItem(): Internal.Item;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        isActive(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getBlockY(): number;
        shouldDoRailFunctions(): boolean;
        callDoWaterSplashEffect(): void;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        handler$dce001$load(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getDamage(): number;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getDisplayBlockState(): Internal.BlockState;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getEncodeId(): string;
        handler$enh008$onTick(arg0: Internal.CallbackInfo_): void;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        getDynamicLightY(): number;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        refurbishedFurnitureBlockPosAffectsMovement(): BlockPos;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        bo$refreshEntityData(data: number): void;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        modifyExpressionValue$hgh000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        handler$gma000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        handler$glc000$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        setTicksFrozen(arg0: number): void;
        setCanUseRail(arg0: boolean): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        ad_astra_giselle_addon$getCustomData(): Internal.CompoundTag;
        getMyRidingOffset(): number;
        handler$eob009$onTick(arg0: Internal.CallbackInfo_): void;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getLeashOffset(): Vec3d;
        resetDynamicLight(): void;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        handleNetherPortal(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        ad_astra_giselle_addon$setProofDuration(arg0: Internal.ProofAbstractUtils_, arg1: number): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        handler$fgb000$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLuminance(): number;
        callUnsetRemoved(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        getDynamicLightX(): number;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        clean(): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        markFusionRecomputeModels(): void;
        getDimensionChangingDelay(): number;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        isRewinding(): boolean;
        self(): Internal.Entity;
        abstract sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        spawnSprintParticle(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        getIsInsidePortal(): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getEntries(arg0: boolean): Internal.Set<any>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        setHurtDir(arg0: number): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        setXRot(arg0: number): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getHurtDir(): number;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        getMaxSpeedAirLateral(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        handler$dap004$adastra$tick(ci: Internal.CallbackInfo_): void;
        isInvisible(): boolean;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        is(arg0: Internal.Entity_): boolean;
        updateFluidOnEyes(): void;
        setZ(z: number): void;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        handler$boj000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setCustomDisplay(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        shouldUpdateDynamicLight(): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        ad_astra_giselle_addon$getProofDuration(arg0: Internal.ProofAbstractUtils_): number;
        setSharedFlag(arg0: number, arg1: boolean): void;
        handler$eob001$onRemove(arg0: Internal.CallbackInfo_): void;
        getComparatorLevel(): number;
        getPos(): Internal.Position;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        hasCustomDisplay(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        setDisplayOffset(arg0: number): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getBlockStateOn(): Internal.BlockState;
        setMaxSpeedAirVertical(arg0: number): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$glc000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        getDefaultDisplayOffset(): number;
        acceptsFailure(): boolean;
        getMaxSpeedAirVertical(): number;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canUseRail(): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        getCurrentRailPosition(): BlockPos;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        getValue(arg0: Internal.TrackedData_<any>): any;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        setDragAir(arg0: number): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        endimateTick(): void;
        lithiumOnBlockCacheDeleted(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getMaxCartSpeedOnRail(): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        getSlopeAdjustment(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        lithiumOnBlockCacheSet(newState: Internal.BlockState_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        isInFluidType(predicate: Internal.BiPredicate_<any, any>, forAllTypes: boolean): boolean;
        setYHeadRot(arg0: number): void;
        getMinecartType(): Internal.AbstractMinecart$Type;
        hasControllingPassenger(): boolean;
        moveMinecartOnRail(arg0: BlockPos_): void;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getDataMap(): Internal.Map<any, any>;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        fabric_hasPersistentAttachments(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        destroy(arg0: DamageSource_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        isDirty(): boolean;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        setYRot(arg0: number): void;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        isPoweredCart(): boolean;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getDragAir(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getDefaultDisplayBlockState(): Internal.BlockState;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getHurtTime(): number;
        handler$eob000$removed(arg0: Internal.CallbackInfo_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        handler$cbk000$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getCurrentCartSpeedCapOnRail(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        lithiumSetClimbingMobCachingSectionUpdateBehavior(listening: boolean): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        handler$dce001$saveWithoutId(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        setAnimationTick(arg0: number): void;
        extinguish(): void;
        setDynamicLightEnabled(arg0: boolean): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        localvar$bnb000$apoth_checkFallDamageWithGravity(arg0: number): number;
        isFreezing(): boolean;
        getMaxSpeedWithRail(): number;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get XRot(): number
        get blockZ(): number
        get suppressingBounce(): boolean
        set hurtTime(arg0: number)
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        get passengersAndSelf(): Internal.Stream<any>
        set maxUpStep(arg0: number)
        get noEndimationPlaying(): boolean
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set maxSpeedAirLateral(arg0: number)
        set motionZ(z: number)
        get dropItem(): Internal.Item
        get active(): boolean
        get playingEndimation(): Internal.PlayableEndimation
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get damage(): number
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get displayBlockState(): Internal.BlockState
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get dynamicLightY(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get dirtyEntries(): Internal.Set<any>
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set damage(arg0: number)
        get displayOffset(): number
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        set canUseRail(arg0: boolean)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get luminance(): number
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        set currentCartSpeedCapOnRail(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get rewinding(): boolean
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get isInsidePortal(): boolean
        get server(): Internal.MinecraftServer
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        set hurtDir(arg0: number)
        set XRot(arg0: number)
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get hurtDir(): number
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get maxSpeedAirLateral(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set customDisplay(arg0: boolean)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get motions(): Internal.Stack<any>
        get comparatorLevel(): number
        get pos(): Internal.Position
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get animationTick(): number
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        set displayOffset(arg0: number)
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        set maxSpeedAirVertical(arg0: number)
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        set dataMap(arg0: Internal.Map_<any, any>)
        set remainingFireTicks(arg0: number)
        get cachedFeetBlockState(): Internal.BlockState
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get currentRailPosition(): BlockPos
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        set dragAir(arg0: number)
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get maxCartSpeedOnRail(): number
        get ticksRequiredToFreeze(): number
        get slopeAdjustment(): number
        set glowing(arg0: boolean)
        get YRot(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get minecartType(): Internal.AbstractMinecart$Type
        get dataMap(): Internal.Map<any, any>
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get dirty(): boolean
        get "server()"(): Internal.MinecraftServer
        set YRot(arg0: number)
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get poweredCart(): boolean
        get dragAir(): number
        get indirectPassengers(): Internal.Iterable<any>
        get dynamicLightEnabled(): boolean
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get defaultDisplayBlockState(): Internal.BlockState
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get passenger(): boolean
        get dynamicLightWorld(): Internal.Level
        get hurtTime(): number
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get currentCartSpeedCapOnRail(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set animationTick(arg0: number)
        set dynamicLightEnabled(arg0: boolean)
        get endimatedState(): Internal.Endimatable$EndimatedState
        get freezing(): boolean
        get maxSpeedWithRail(): number
        get fullyFrozen(): boolean
        set displayBlockState(arg0: Internal.BlockState_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Minecart_ = Minecart;
    interface ArmorProperty$CustomTextureGetter {
        abstract getCustomTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: boolean): ResourceLocation;
        (arg0: Internal.ItemStack, arg1: Internal.Entity, arg2: Internal.EquipmentSlot, arg3: boolean): ResourceLocation_;
    }
    type ArmorProperty$CustomTextureGetter_ = ArmorProperty$CustomTextureGetter | ((arg0: Internal.ItemStack, arg1: Internal.Entity, arg2: Internal.EquipmentSlot, arg3: boolean)=> ResourceLocation_);
    class PopupMenu extends Internal.Menu {
        constructor()
        constructor(arg0: string)
        /**
         * @deprecated
        */
        countItems(): number;
        paramString(): string;
        getLabel(): string;
        setEnabled(arg0: boolean): void;
        setFont(arg0: Internal.Font_): void;
        getItem(arg0: number): Internal.MenuItem;
        notify(): void;
        dispatchEvent(arg0: Internal.AWTEvent_): void;
        getItemCount(): number;
        addActionListener(arg0: Internal.ActionListener_): void;
        getParent(): Internal.MenuContainer;
        remove(arg0: number): void;
        setName(arg0: string): void;
        /**
         * @deprecated
        */
        abstract postEvent(arg0: Internal.Event_): boolean;
        "insert(java.awt.MenuItem,int)"(arg0: Internal.MenuItem_, arg1: number): void;
        setShortcut(arg0: Internal.MenuShortcut_): void;
        deleteShortcut(): void;
        addSeparator(): void;
        "remove(java.awt.MenuComponent)"(arg0: Internal.MenuComponent_): void;
        "insert(java.lang.String,int)"(arg0: string, arg1: number): void;
        setActionCommand(arg0: string): void;
        wait(): void;
        add(arg0: string): void;
        removeActionListener(arg0: Internal.ActionListener_): void;
        getActionListeners(): Internal.ActionListener[];
        getClass(): typeof any;
        /**
         * @deprecated
        */
        disable(): void;
        insertSeparator(arg0: number): void;
        add(arg0: Internal.MenuItem_): Internal.MenuItem;
        getListeners<T extends Internal.EventListener>(arg0: T): T[];
        insert(arg0: Internal.MenuItem_, arg1: number): void;
        wait(arg0: number, arg1: number): void;
        abstract getFont(): Internal.Font;
        isEnabled(): boolean;
        getName(): string;
        getActionCommand(): string;
        /**
         * @deprecated
        */
        enable(arg0: boolean): void;
        addNotify(): void;
        "remove(int)"(arg0: number): void;
        remove(arg0: Internal.MenuComponent_): void;
        removeAll(): void;
        show(arg0: Internal.Component_, arg1: number, arg2: number): void;
        "add(java.lang.String)"(arg0: string): void;
        toString(): string;
        notifyAll(): void;
        isTearOff(): boolean;
        getAccessibleContext(): Internal.AccessibleContext;
        /**
         * @deprecated
        */
        enable(): void;
        getShortcut(): Internal.MenuShortcut;
        hashCode(): number;
        removeNotify(): void;
        "add(java.awt.MenuItem)"(arg0: Internal.MenuItem_): Internal.MenuItem;
        setLabel(arg0: string): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        insert(arg0: string, arg1: number): void;
        get label(): string
        set enabled(arg0: boolean)
        set font(arg0: Internal.Font_)
        get itemCount(): number
        get parent(): Internal.MenuContainer
        set name(arg0: string)
        set shortcut(arg0: Internal.MenuShortcut_)
        set actionCommand(arg0: string)
        get actionListeners(): Internal.ActionListener[]
        get class(): typeof any
        get font(): Internal.Font
        get enabled(): boolean
        get name(): string
        get actionCommand(): string
        get tearOff(): boolean
        get accessibleContext(): Internal.AccessibleContext
        get shortcut(): Internal.MenuShortcut
        set label(arg0: string)
    }
    type PopupMenu_ = PopupMenu;
    interface PathIterator {
        abstract next(): void;
        abstract "currentSegment(float[])"(arg0: number[]): number;
        abstract "currentSegment(double[])"(arg0: number[]): number;
        abstract getWindingRule(): number;
        abstract isDone(): boolean;
        abstract currentSegment(arg0: number[]): number;
        abstract currentSegment(arg0: number[]): number;
        get windingRule(): number
        get done(): boolean
        readonly SEG_MOVETO: (0) & (number);
        readonly WIND_NON_ZERO: (1) & (number);
        readonly SEG_LINETO: (1) & (number);
        readonly SEG_CUBICTO: (3) & (number);
        readonly WIND_EVEN_ODD: (0) & (number);
        readonly SEG_QUADTO: (2) & (number);
        readonly SEG_CLOSE: (4) & (number);
    }
    type PathIterator_ = PathIterator;
    class BiomassPelletBlock extends Internal.BlockItem {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type BiomassPelletBlock_ = BiomassPelletBlock;
    interface ZRegister$Post extends Internal.IZetaLoadEvent {
    }
    type ZRegister$Post_ = ZRegister$Post;
    interface ScreenElement {
        abstract render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        (arg0: Internal.GuiGraphics, arg1: number, arg2: number): void;
    }
    type ScreenElement_ = ((arg0: Internal.GuiGraphics, arg1: number, arg2: number)=> void) | ScreenElement;
    interface WeightedDynamicRegistry$ILuckyWeighted {
        abstract getQuality(): number;
        wrap<T extends Internal.WeightedDynamicRegistry$ILuckyWeighted>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        wrap<T extends Internal.WeightedDynamicRegistry$ILuckyWeighted>(arg0: number): Internal.WeightedEntry$Wrapper<T>;
        abstract getWeight(): number;
        get quality(): number
        get weight(): number
    }
    type WeightedDynamicRegistry$ILuckyWeighted_ = WeightedDynamicRegistry$ILuckyWeighted;
    abstract class IntBuffer extends Internal.Buffer implements Internal.Comparable<Internal.IntBuffer> {
        put(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        reset(): Internal.Buffer;
        abstract isDirect(): boolean;
        limit(): number;
        notify(): void;
        compareTo(arg0: any): number;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.IntBuffer;
        abstract order(): Internal.ByteOrder;
        "put(int,java.nio.IntBuffer,int,int)"(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        static wrap(arg0: number[]): Internal.IntBuffer;
        flip(): this;
        mismatch(arg0: Internal.IntBuffer_): number;
        abstract put(arg0: number): this;
        "get(int[])"(arg0: number[]): this;
        "put(int,int[])"(arg0: number, arg1: number[]): this;
        abstract "put(int)"(arg0: number): this;
        position(): number;
        limit(arg0: number): Internal.Buffer;
        "compareTo(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): number;
        "put(int,int[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        wait(): void;
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract put(arg0: number, arg1: number): this;
        abstract isReadOnly(): boolean;
        position(arg0: number): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        abstract get(): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        getClass(): typeof any;
        "put(int[])"(arg0: number[]): this;
        capacity(): number;
        arrayOffset(): number;
        wait(arg0: number, arg1: number): void;
        clear(): Internal.Buffer;
        put(arg0: Internal.IntBuffer_): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        hasArray(): boolean;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        compareTo(arg0: Internal.IntBuffer_): number;
        put(arg0: number[]): this;
        toString(): string;
        remaining(): number;
        "put(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        rewind(): Internal.Buffer;
        notifyAll(): void;
        static allocate(arg0: number): Internal.IntBuffer;
        abstract compact(): this;
        mark(): Internal.Buffer;
        hashCode(): number;
        abstract slice(): this;
        hasRemaining(): boolean;
        abstract "put(int,int)"(arg0: number, arg1: number): this;
        get(arg0: number, arg1: number[]): this;
        wait(arg0: number): void;
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number[]): this;
        abstract asReadOnlyBuffer(): this;
        get(arg0: number[]): this;
        slice(arg0: number, arg1: number): Internal.Buffer;
        equals(arg0: any): boolean;
        abstract "get(int)"(arg0: number): number;
        duplicate(): Internal.Buffer;
        array(): number[];
        get direct(): boolean
        get readOnly(): boolean
        get class(): typeof any
    }
    type IntBuffer_ = IntBuffer;
    class CanBeReplacedCallbackJS {
        constructor(blockPlaceContext: Internal.BlockPlaceContext_, state: Internal.BlockState_)
        getClass(): typeof any;
        getClickedFace(): Internal.Direction;
        getHorizontalDirection(): Internal.Direction;
        getRotation(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getNearestLookingDirection(): Internal.Direction;
        getClickLocation(): Vec3d;
        getNearestLookingVerticalDirection(): Internal.Direction;
        isSecondaryUseActive(): boolean;
        isClickedPosIn(fluid: Internal.Fluid_): boolean;
        getHand(): Internal.InteractionHand;
        getClickedPos(): BlockPos;
        getPlayer(): Internal.Player;
        isInside(): boolean;
        toString(): string;
        getClickedBlock(): Internal.BlockContainerJS;
        getNearestLookingDirections(): Internal.Direction[];
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getFluidStateAtClickedPos(): Internal.FluidState;
        canBeReplaced(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get clickedFace(): Internal.Direction
        get horizontalDirection(): Internal.Direction
        get rotation(): number
        get level(): Internal.Level
        get nearestLookingDirection(): Internal.Direction
        get clickLocation(): Vec3d
        get nearestLookingVerticalDirection(): Internal.Direction
        get secondaryUseActive(): boolean
        get hand(): Internal.InteractionHand
        get clickedPos(): BlockPos
        get player(): Internal.Player
        get inside(): boolean
        get clickedBlock(): Internal.BlockContainerJS
        get nearestLookingDirections(): Internal.Direction[]
        get item(): Internal.ItemStack
        get fluidStateAtClickedPos(): Internal.FluidState
    }
    type CanBeReplacedCallbackJS_ = CanBeReplacedCallbackJS;
    class ChunkStatus$ChunkType extends Internal.Enum<Internal.ChunkStatus$ChunkType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.level.chunk.ChunkStatus$ChunkType)"(arg0: Internal.ChunkStatus$ChunkType_): number;
        static values(): Internal.ChunkStatus$ChunkType[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChunkStatus$ChunkType>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.ChunkStatus$ChunkType;
        getDeclaringClass(): typeof Internal.ChunkStatus$ChunkType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ChunkStatus$ChunkType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.ChunkStatus$ChunkType
        static readonly PROTOCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
        static readonly LEVELCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
    }
    type ChunkStatus$ChunkType_ = ChunkStatus$ChunkType | "levelchunk" | "protochunk";
    class NonNullList <E> extends Internal.AbstractList<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static createWithCapacity<E>(arg0: number): Internal.NonNullList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<E>;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        get(arg0: number): E;
        add(arg0: E): boolean;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        static "of(java.lang.Object,java.lang.Object[])"<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.List<E>;
        remove(arg0: number): E;
        static create<E>(): Internal.NonNullList<E>;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        size(): number;
        hashCode(): number;
        static withSize<E>(arg0: number, arg1: E): Internal.NonNullList<E>;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type NonNullList_<E> = NonNullList<E>;
    class Matrix2f implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix2fc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        normal(): this;
        rotate(arg0: number, arg1: Internal.Matrix2f_): this;
        m00(): number;
        normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        setRow(arg0: number, arg1: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRow(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        getColumn(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number, arg2: Internal.Matrix2f_): this;
        scaling(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        rotateLocal(arg0: number): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_): this;
        sub(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: number[]): number[];
        transformTranspose(arg0: Internal.Vector2f_): Internal.Vector2f;
        "scaling(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "scale(float,float)"(arg0: number, arg1: number): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformTranspose(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        setFromAddress(arg0: number): this;
        m00(arg0: number): this;
        clone(): any;
        m01(): number;
        mulLocal(arg0: Internal.Matrix2fc_): this;
        getClass(): typeof any;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRotation(): number;
        add(arg0: Internal.Matrix2fc_): this;
        getScale(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: Internal.ByteBuffer_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        toString(): string;
        equals(arg0: Internal.Matrix2fc_, arg1: number): boolean;
        notifyAll(): void;
        "scale(org.joml.Vector2fc,org.joml.Matrix2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number): this;
        "scale(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "scale(float)"(arg0: number): this;
        m01(arg0: number): this;
        getToAddress(arg0: number): Internal.Matrix2fc;
        wait(arg0: number): void;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        "scaling(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        setColumn(arg0: number, arg1: Internal.Vector2fc_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        invert(arg0: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: number): this;
        "get(org.joml.Matrix3f)"(arg0: Matrix3f_): Matrix3f;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        scaling(arg0: Internal.Vector2fc_): this;
        notify(): void;
        get(arg0: Internal.Matrix2f_): this;
        isFinite(): boolean;
        transform(arg0: Internal.Vector2f_): Internal.Vector2f;
        positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        mul(arg0: Internal.Matrix2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        normal(arg0: Internal.Matrix2f_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        m10(arg0: number): this;
        set(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        m10(): number;
        sub(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: Internal.Matrix3fc_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotation(arg0: number): this;
        get(arg0: Matrix3f_): Matrix3f;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: number): number;
        wait(): void;
        transform(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        determinant(): number;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mulLocal(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "set(org.joml.Vector2fc,org.joml.Vector2fc)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        add(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2f_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        wait(arg0: number, arg1: number): void;
        set(arg0: Internal.Matrix2fc_): this;
        rotate(arg0: number): this;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        "get(float[])"(arg0: number[]): number[];
        positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(org.joml.Matrix2f)"(arg0: Internal.Matrix2f_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        scaling(arg0: number): this;
        set(arg0: number[]): this;
        transpose(): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "set(float[])"(arg0: number[]): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        m11(arg0: number): this;
        "get(org.joml.Matrix3x2f)"(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        "scale(float,org.joml.Matrix2f)"(arg0: number, arg1: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: Internal.Matrix2f_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        m11(): number;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        identity(): this;
        invert(): this;
        hashCode(): number;
        scaleLocal(arg0: number, arg1: number): this;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        transpose(arg0: Internal.Matrix2f_): this;
        swap(arg0: Internal.Matrix2f_): this;
        scale(arg0: Internal.Vector2fc_): this;
        equals(arg0: any): boolean;
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        get class(): typeof any
        get rotation(): number
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        get finite(): boolean
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m10: number;
        m01: number;
        m00: number;
        m11: number;
    }
    type Matrix2f_ = Matrix2f;
    interface RenderableImage {
        abstract getSources(): Internal.Vector<Internal.RenderableImage>;
        abstract getMinY(): number;
        abstract getHeight(): number;
        abstract getMinX(): number;
        abstract getPropertyNames(): string[];
        abstract createDefaultRendering(): Internal.RenderedImage;
        abstract getProperty(arg0: string): any;
        abstract createScaledRendering(arg0: number, arg1: number, arg2: Internal.RenderingHints_): Internal.RenderedImage;
        abstract isDynamic(): boolean;
        abstract createRendering(arg0: Internal.RenderContext_): Internal.RenderedImage;
        abstract getWidth(): number;
        get sources(): Internal.Vector<Internal.RenderableImage>
        get minY(): number
        get height(): number
        get minX(): number
        get propertyNames(): string[]
        get dynamic(): boolean
        get width(): number
        readonly HINTS_OBSERVED: ("HINTS_OBSERVED") & (string);
    }
    type RenderableImage_ = RenderableImage;
    class Matrix2d implements Internal.Cloneable, Internal.Matrix2dc, Internal.Externalizable {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix2dc_)
        "scale(double,org.joml.Matrix2d)"(arg0: number, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(): this;
        scaling(arg0: Internal.Vector2dc_): this;
        m01(): number;
        positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        sub(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "scale(double)"(arg0: number): this;
        "get(double[])"(arg0: number[]): number[];
        sub(arg0: Internal.Matrix2dc_): this;
        equals(arg0: Internal.Matrix2dc_, arg1: number): boolean;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaling(arg0: number, arg1: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        swap(arg0: Internal.Matrix2d_): this;
        scaling(arg0: number): this;
        transformTranspose(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        rotation(arg0: number): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2d_): this;
        setFromAddress(arg0: number): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "set(double[])"(arg0: number[]): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: Internal.Matrix2dc_): this;
        invert(arg0: Internal.Matrix2d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        "set(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        m01(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        getRow(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        getColumn(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        "scaling(double)"(arg0: number): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix2d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transform(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        m00(): number;
        set(arg0: Internal.Matrix3x2dc_): this;
        get(arg0: number[]): number[];
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(arg0: Internal.Matrix2d_): this;
        determinant(): number;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        scale(arg0: number, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        toString(): string;
        notifyAll(): void;
        "mul(org.joml.Matrix2fc,org.joml.Matrix2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: number): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        get(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "get(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        wait(arg0: number): void;
        scale(arg0: Internal.Vector2dc_): this;
        scale(arg0: number): this;
        scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        setRow(arg0: number, arg1: Internal.Vector2dc_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        "mul(org.joml.Matrix2dc,org.joml.Matrix2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        notify(): void;
        get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        m00(arg0: number): this;
        getScale(arg0: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.DoubleBuffer_): this;
        isFinite(): boolean;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mul(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        getRotation(): number;
        m11(arg0: number): this;
        scaleLocal(arg0: number, arg1: number): this;
        mulComponentWise(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number): this;
        m10(): number;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(arg0: Internal.Matrix2d_): this;
        transform(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getToAddress(arg0: number): Internal.Matrix2dc;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        add(arg0: Internal.Matrix2dc_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number, arg1: number, arg2: number): this;
        mulLocal(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number, arg1: Internal.Matrix2d_): this;
        mulLocal(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        add(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number, arg2: Internal.Matrix2d_): this;
        "scale(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number[]): this;
        set(arg0: Internal.Matrix2fc_): this;
        wait(arg0: number, arg1: number): void;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        "get(org.joml.Matrix2d)"(arg0: Internal.Matrix2d_): this;
        transpose(): this;
        zero(): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "scaling(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "get(org.joml.Matrix3x2d)"(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: number, arg1: number): number;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector2dc,org.joml.Vector2dc)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        transformTranspose(arg0: Internal.Vector2d_): Internal.Vector2d;
        hashCode(): number;
        m10(arg0: number): this;
        "scale(org.joml.Vector2dc,org.joml.Matrix2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        identity(): this;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        equals(arg0: any): boolean;
        "scale(double,double)"(arg0: number, arg1: number): this;
        invert(): this;
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set fromAddress(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(double[])"(arg0: number[])
        get class(): typeof any
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set "(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_)
        get finite(): boolean
        get rotation(): number
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m10: number;
        m00: number;
        m11: number;
    }
    type Matrix2d_ = Matrix2d;
    interface WindowStateListener extends Internal.EventListener {
        abstract windowStateChanged(arg0: Internal.WindowEvent_): void;
        (arg0: Internal.WindowEvent): void;
    }
    type WindowStateListener_ = ((arg0: Internal.WindowEvent)=> void) | WindowStateListener;
    interface SpawnSettingsBuilderAccessor {
        abstract getSpawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        get spawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>
        (): Internal.Map_<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
    }
    type SpawnSettingsBuilderAccessor_ = (()=> Internal.Map_<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>) | SpawnSettingsBuilderAccessor;
    class BezierConnection$Segment {
        constructor()
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
        derivative: Vec3d;
        index: number;
        faceNormal: Vec3d;
        position: Vec3d;
        normal: Vec3d;
    }
    type BezierConnection$Segment_ = BezierConnection$Segment;
    class LongConfig extends Internal.NumberConfig<number> {
        constructor(mn: number, mx: number)
        setNameKey(key: string): Internal.ConfigValue<number>;
        "getColor(java.lang.Long)"(v: number): Internal.Color4I;
        setCanEdit(e: boolean): Internal.ConfigValue<number>;
        getValue(): number;
        getStringFromValue(v: number): string;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getDefaultValue(): number;
        getTooltip(): string;
        notify(): void;
        compareTo(arg0: any): number;
        "getColor(java.lang.Object)"(arg0: any): Internal.Color4I;
        copy(value: number): number;
        getStringForGUI(v: number): net.minecraft.network.chat.Component;
        isEqual(v1: number, v2: number): boolean;
        getStringForGUI(): net.minecraft.network.chat.Component;
        scrollValue(arg0: any, arg1: boolean): Internal.Optional<any>;
        init(group: Internal.ConfigGroup_, id: string, value: number, setter: Internal.Consumer_<number>, defaultValue: number): Internal.ConfigValue<number>;
        applyValue(): void;
        canScroll(): boolean;
        getColor(arg0: any): Internal.Color4I;
        getColor(v: number): Internal.Color4I;
        "scrollValue(java.lang.Long,boolean)"(currentValue: number, forward: boolean): Internal.Optional<number>;
        wait(): void;
        getNameKey(): string;
        "compareTo(java.lang.Object)"(arg0: any): number;
        setCurrentValue(v: number): boolean;
        getClass(): typeof any;
        withScrollIncrement(increment: number): Internal.NumberConfig<number>;
        addInfo(list: Internal.TooltipList_): void;
        wait(arg0: number, arg1: number): void;
        scrollValue(currentValue: number, forward: boolean): Internal.Optional<number>;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<number>): number;
        setDefaultValue(defaultValue: number): void;
        getIcon(): Internal.Icon;
        "getStringForGUI(java.lang.Long)"(v: number): net.minecraft.network.chat.Component;
        getName(): string;
        setValue(value: number): void;
        getGroup(): Internal.ConfigGroup;
        getIcon(v: number): Internal.Icon;
        getStringForGUI(arg0: any): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        "getStringForGUI(java.lang.Object)"(arg0: any): net.minecraft.network.chat.Component;
        getPath(): string;
        fader(v: boolean): Internal.NumberConfig<number>;
        "scrollValue(java.lang.Object,boolean)"(arg0: any, arg1: boolean): Internal.Optional<any>;
        toString(): string;
        parse(callback: Internal.Consumer_<number>, string: string): boolean;
        notifyAll(): void;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        compareTo(o: Internal.ConfigValue_<number>): number;
        hashCode(): number;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<number>;
        setOrder(o: number): Internal.ConfigValue<number>;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        equals(arg0: any): boolean;
        set nameKey(key: string)
        set canEdit(e: boolean)
        get value(): number
        get defaultValue(): number
        get tooltip(): string
        get stringForGUI(): net.minecraft.network.chat.Component
        get nameKey(): string
        set currentValue(v: number)
        get class(): typeof any
        set defaultValue(defaultValue: number)
        get icon(): Internal.Icon
        get name(): string
        set value(value: number)
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set icon(i: Internal.Icon_)
        set order(o: number)
        get canEdit(): boolean
    }
    type LongConfig_ = LongConfig;
    interface AccessibleValue {
        abstract getMinimumAccessibleValue(): number;
        abstract getMaximumAccessibleValue(): number;
        abstract setCurrentAccessibleValue(arg0: number): boolean;
        abstract getCurrentAccessibleValue(): number;
        get minimumAccessibleValue(): number
        get maximumAccessibleValue(): number
        set currentAccessibleValue(arg0: number)
        get currentAccessibleValue(): number
    }
    type AccessibleValue_ = AccessibleValue;
    class ZRecipeCrawl$Reset extends Internal.ZRecipeCrawl {
        constructor()
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
    }
    type ZRecipeCrawl$Reset_ = ZRecipeCrawl$Reset;
    class ShapelessManaUpgradeRecipe$Serializer implements Internal.RecipeSerializer<Internal.ShapelessManaUpgradeRecipe> {
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapelessManaUpgradeRecipe;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,vazkii.botania.common.crafting.recipe.ShapelessManaUpgradeRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapelessManaUpgradeRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapelessManaUpgradeRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapelessManaUpgradeRecipe;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapelessManaUpgradeRecipe;
        wait(): void;
        wait(arg0: number): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapelessManaUpgradeRecipe;
        equals(arg0: any): boolean;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapelessManaUpgradeRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type ShapelessManaUpgradeRecipe$Serializer_ = ShapelessManaUpgradeRecipe$Serializer;
    interface ChunkView {
        abstract getLoadedChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        (arg0: number, arg1: number): Internal.ChunkAccess_;
    }
    type ChunkView_ = ((arg0: number, arg1: number)=> Internal.ChunkAccess_) | ChunkView;
    interface GameMasterBlock {
    }
    type GameMasterBlock_ = GameMasterBlock;
    interface IBlockHolder {
        abstract setHeldBlock(arg0: Internal.BlockState_, arg1: number): boolean;
        getHeldBlock(): Internal.BlockState;
        setHeldBlock(state: Internal.BlockState_): boolean;
        abstract getHeldBlock(arg0: number): Internal.BlockState;
        get heldBlock(): Internal.BlockState
        set heldBlock(state: Internal.BlockState_)
    }
    type IBlockHolder_ = IBlockHolder;
    class CastResolveType {
        constructor(arg0: string, arg1: boolean)
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
        id: string;
        wasSuccess: boolean;
        static readonly SUCCESS_NO_EXPEND: (Internal.CastResolveType) & (Internal.CastResolveType);
        static readonly SUCCESS: (Internal.CastResolveType) & (Internal.CastResolveType);
        static readonly FAILURE: (Internal.CastResolveType) & (Internal.CastResolveType);
    }
    type CastResolveType_ = CastResolveType;
    interface FluidHolder {
        abstract serialize(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        "of(net.minecraft.world.level.material.Fluid,double,net.minecraft.nbt.CompoundTag)"(fluid: Internal.Fluid_, buckets: number, tag: Internal.CompoundTag_): this;
        getFluidHolder(): Internal.Holder<Internal.Fluid>;
        fromCompound(tag: Internal.CompoundTag_): this;
        abstract isEmpty(): boolean;
        "is(net.minecraft.core.Holder)"(fluid: Internal.Holder_<Internal.Fluid>): boolean;
        abstract copyHolder(): this;
        ofMillibuckets(fluid: Internal.Fluid_, millibuckets: number, tag: Internal.CompoundTag_): this;
        is(predicate: Internal.Predicate_<Internal.Holder<Internal.Fluid>>): boolean;
        of(fluid: Internal.Fluid_): this;
        /**
         * @deprecated
        */
        of(fluid: Internal.Fluid_, buckets: number, tag: Internal.CompoundTag_): this;
        of(fluid: Internal.Fluid_, amount: number, tag: Internal.CompoundTag_): this;
        abstract setFluid(arg0: Internal.Fluid_): void;
        of(fluid: Internal.Fluid_, amount: number): this;
        ofMillibuckets(fluid: Internal.Fluid_, millibuckets: number): this;
        empty(): this;
        "is(net.minecraft.tags.TagKey)"(tagKey: Internal.TagKey_<Internal.Fluid>): boolean;
        is(fluid: Internal.Fluid_): boolean;
        is(fluid: Internal.Holder_<Internal.Fluid>): boolean;
        "of(net.minecraft.world.level.material.Fluid,long,net.minecraft.nbt.CompoundTag)"(fluid: Internal.Fluid_, amount: number, tag: Internal.CompoundTag_): this;
        abstract setAmount(arg0: number): void;
        readFromBuffer(buffer: Internal.FriendlyByteBuf_): this;
        abstract setCompound(arg0: Internal.CompoundTag_): void;
        abstract matches(arg0: Internal.FluidHolder_): boolean;
        "is(java.util.function.Predicate)"(predicate: Internal.Predicate_<Internal.Holder<Internal.Fluid>>): boolean;
        copyWithAmount(amount: number): this;
        "is(net.minecraft.world.level.material.Fluid)"(fluid: Internal.Fluid_): boolean;
        abstract getCompound(): Internal.CompoundTag;
        writeToBuffer(buffer: Internal.FriendlyByteBuf_): void;
        abstract getFluid(): Internal.Fluid;
        abstract getFluidAmount(): number;
        abstract deserialize(arg0: Internal.CompoundTag_): void;
        is(tagKey: Internal.TagKey_<Internal.Fluid>): boolean;
        get fluidHolder(): Internal.Holder<Internal.Fluid>
        get empty(): boolean
        set fluid(arg0: Internal.Fluid_)
        set amount(arg0: number)
        set compound(arg0: Internal.CompoundTag_)
        get compound(): Internal.CompoundTag
        get fluid(): Internal.Fluid
        get fluidAmount(): number
        /**
         * @deprecated
        */
        readonly CODEC: Internal.Codec<Internal.FluidHolder>;
        readonly NEW_CODEC: Internal.Codec<Internal.FluidHolder>;
    }
    type FluidHolder_ = FluidHolder;
    abstract class BlockableEventLoop <R extends Internal.Runnable> implements Internal.ProfilerMeasured, Internal.Executor, Internal.ProcessorHandle<R> {
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        "tell(java.lang.Runnable)"(arg0: R): void;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        "tell(java.lang.Object)"(arg0: any): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        tell(arg0: R): void;
        tell(arg0: any): void;
        toString(): string;
        executeBlocking(arg0: Internal.Runnable_): void;
        notifyAll(): void;
        getPendingTasksCount(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, R>): Internal.CompletableFuture<Source>;
        name(): string;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, R>): Internal.CompletableFuture<Source>;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSameThread(): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get pendingTasksCount(): number
        get sameThread(): boolean
    }
    type BlockableEventLoop_<R extends Internal.Runnable> = BlockableEventLoop<R>;
    class ApothSpawnerItem extends Internal.BlockItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type ApothSpawnerItem_ = ApothSpawnerItem;
    class ItemComponents$2 implements Internal.RecipeComponentWithParent<InputItem[]> {
        getClass(): typeof any;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem[]>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem[]>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem[];
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem[]>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem[]>;
        checkEmpty(key: Internal.RecipeKey_<InputItem[]>, value: InputItem_[]): string;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        key(name: string): Internal.RecipeKey<InputItem[]>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<InputItem[]>;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        asArray(): Internal.ArrayRecipeComponent<InputItem[]>;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem[], O>;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, map: Internal.Map_<any, any>): void;
        hashCode(): number;
        checkValueHasChanged(oldValue: InputItem_[], newValue: InputItem_[]): boolean;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem[])"(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem[], O>;
        wait(): void;
        parentComponent(): Internal.RecipeComponent<InputItem[]>;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        read(recipe: Internal.RecipeJS_, from: any): InputItem[];
        equals(arg0: any): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem[];
        get class(): typeof any
    }
    type ItemComponents$2_ = ItemComponents$2;
    class ItemComponents$1 implements Internal.RecipeComponent<InputItem> {
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.InputItem)"(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem, O>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem>;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem>;
        checkValueHasChanged(oldValue: InputItem_, newValue: InputItem_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem, O>;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem)"(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<InputItem>;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        orSelf(): Internal.RecipeComponent<InputItem>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, map: Internal.Map_<any, any>): void;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem>>;
        asArray(): Internal.ArrayRecipeComponent<InputItem>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        static builder(): Internal.RecipeComponentBuilder;
        checkEmpty(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem>>;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ItemComponents$1_ = ItemComponents$1;
    class ItemComponents$4 implements Internal.RecipeComponentWithParent<OutputItem> {
        read(recipe: Internal.RecipeJS_, from: any): OutputItem;
        getClass(): typeof any;
        parentComponent(): Internal.RecipeComponent<OutputItem>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        static builder(): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        hashCode(): number;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$4_ = ItemComponents$4;
    interface RecipeFilter extends Internal.Predicate<Internal.RecipeKJS> {
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.RecipeKJS>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        "test(java.lang.Object)"(arg0: any): boolean;
        or(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        and(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        abstract test(arg0: Internal.RecipeKJS_): boolean;
        of(cx: Internal.Context_, o: any): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        abstract "test(dev.latvian.mods.kubejs.core.RecipeKJS)"(arg0: Internal.RecipeKJS_): boolean;
        readonly PARSE: dev.architectury.event.Event<Internal.RecipeFilterParseEvent>;
    }
    type RecipeFilter_ = RegExp | RecipeFilter | "-" | Internal.RecipeFilter_[] | {exact?: boolean, output?: Internal.Ingredient_, id?: Special.RecipeId|RegExp, input?: Internal.Ingredient_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_[], group?: string} | "*" | {output?: Internal.ReplacementMatch_, id?: Special.RecipeId, input?: Internal.ReplacementMatch_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_, group?: string};
    class ItemComponents$3 implements Internal.RecipeComponent<OutputItem> {
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.OutputItem)"(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        static builder(): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem)"(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$3_ = ItemComponents$3;
    interface ScreenMouseEvents$AllowMouseScroll {
        abstract allowMouseScroll(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    type ScreenMouseEvents$AllowMouseScroll_ = ScreenMouseEvents$AllowMouseScroll | ((arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number)=> boolean);
    class EnderMan extends Internal.Monster implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.EnderMan>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        getXRot(): number;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        handler$efh000$onRemove(ci: Internal.CallbackInfo_): void;
        modifyReturnValue$hgh000$create$onFireImmune(arg0: boolean): boolean;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        handler$gli000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        setMotionZ(z: number): void;
        callCheckTotemDeathProtection(arg0: DamageSource_): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getBlockY(): number;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isSpectator(): boolean;
        handler$dce001$load(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        isRegisteredToWorld(): boolean;
        invokeTurnHead(arg0: number, arg1: number): number;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        handler$enh008$onTick(arg0: Internal.CallbackInfo_): void;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        modifyExpressionValue$end000$eytraValidOverride(arg0: boolean): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        bo$refreshEntityData(data: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        modifyExpressionValue$hgh000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        botania_getAmbientSound(): Internal.SoundEvent;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        isCreepy(): boolean;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        handler$glc000$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        handler$bne000$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        ad_astra_giselle_addon$getCustomData(): Internal.CompoundTag;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        ad_astra_giselle_addon$setProofDuration(arg0: Internal.ProofAbstractUtils_, arg1: number): void;
        callMobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        irons_spellbooks$getMagicData(): Internal.MagicData;
        getLeashHolder(): Internal.Entity;
        redirect$bne000$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        handler$fgb000$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        redirect$fji000$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        setLootTable(arg0: ResourceLocation_): void;
        getIsInsidePortal(): boolean;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$gli000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        handler$dab000$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        isJumping(): boolean;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        callActuallyHurt(arg0: DamageSource_, arg1: number): void;
        setLastAttackedTicks(arg0: number): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        callGetSoundVolume(): number;
        quark$lastHurtByPlayer(): Internal.Player;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        updateFluidOnEyes(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        bookshelf$makePoofParticles(): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$boj000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        shouldUpdateDynamicLight(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        quark$lastHurtByPlayerTime(): number;
        redirect$bne000$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        getTotalMovementSpeed(): number;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        handler$eob001$onRemove(arg0: Internal.CallbackInfo_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        botania_playHurtSound(arg0: DamageSource_): void;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        handler$clh000$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        setUseItemRemaining(arg0: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        getTargetSelector(): Internal.GoalSelector;
        setRegisteredToWorld(navigation: Internal.PathNavigation_): void;
        isSleeping(): boolean;
        stopUsingItem(): void;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        handler$cla000$shield(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        lithiumOnEquipmentChanged(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        irons_lib$setTransmogPreview(arg0: boolean): void;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        getValue(arg0: Internal.TrackedData_<any>): any;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        getForgePersistentData(): Internal.CompoundTag;
        endimateTick(): void;
        lithiumOnBlockCacheDeleted(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getGoalSelector(): Internal.GoalSelector;
        getDataMap(): Internal.Map<any, any>;
        onPathfindingStart(): void;
        handler$bne000$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        handler$dab000$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        handler$dab000$adastra$tick(ci: Internal.CallbackInfo_): void;
        handler$gli000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        biomancy$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        fabric_getAttachments(): Internal.Map<any, any>;
        irons_lib$isTransmogPreview(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        isDirty(): boolean;
        abstract setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        setYRot(arg0: number): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        isAngry(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        irons_lib$getCapeData(): Internal.CapeData;
        irons_spellbooks$getCapData(): Internal.IArmorCapeProvider$CapeData;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        handler$eob000$removed(arg0: Internal.CallbackInfo_): void;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$cbk000$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        handler$dce001$saveWithoutId(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getCombatTracker(): Internal.CombatTracker;
        setAnimationTick(arg0: number): void;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        localvar$clh000$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        biomancy$getDeathSound(): Internal.SoundEvent;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        localvar$bnb000$apoth_checkFallDamageWithGravity(arg0: number): number;
        isFullyFrozen(): boolean;
        getLastPos(): BlockPos;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPassengersAndSelf(): Internal.Stream<any>;
        breakItem(arg0: Internal.ItemStack_): void;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        callGetDeathSound(): Internal.SoundEvent;
        handler$efh005$onTick(ci: Internal.CallbackInfo_): void;
        biomancy$getAmbientSound(): Internal.SoundEvent;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isActive(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        callDoWaterSplashEffect(): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        setCarriedBlock(arg0: Internal.BlockState_): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        setRemainingPersistentAngerTime(arg0: number): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        handler$bne000$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        refurbishedFurnitureBlockPosAffectsMovement(): BlockPos;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        handler$gma000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        handler$eob009$onTick(arg0: Internal.CallbackInfo_): void;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        handler$dac000$adastra$checkSpawnObstruction(levelReader: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        resetDynamicLight(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handleNetherPortal(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        clean(): void;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        biomancy$getVoicePitch(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        playerDied(arg0: Internal.Player_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        isRewinding(): boolean;
        bookshelf$getAmbientSound(): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        playStareSound(): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        handler$gli000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getEntries(arg0: boolean): Internal.Set<any>;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        setXRot(arg0: number): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        callGetAmbientSound(): Internal.SoundEvent;
        getSleepingPos(): Internal.Optional<any>;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        modifyExpressionValue$end001$elytraOverride(arg0: boolean): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        biomancy$getSoundVolume(): number;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        handler$gli000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        ad_astra_giselle_addon$getProofDuration(arg0: Internal.ProofAbstractUtils_): number;
        setSharedFlag(arg0: number, arg1: boolean): void;
        handler$dcf001$tick(arg0: Internal.CallbackInfo_): void;
        getPos(): Internal.Position;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        hasBeenStaredAt(): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        abstract invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        abstract getTarget(): Internal.LivingEntity;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$glc000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        startPersistentAngerTimer(): void;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        handler$gli000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        setBeingStaredAt(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        handler$bfd000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
        handler$gli000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        lithiumOnBlockCacheSet(newState: Internal.BlockState_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        isInFluidType(predicate: Internal.BiPredicate_<any, any>, forAllTypes: boolean): boolean;
        stopBeingAngry(): void;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getCarriedBlock(): Internal.BlockState;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getPersistentAngerTarget(): Internal.UUID;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        redirect$bne000$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        redirect$bne000$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        redirect$bne000$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        lithiumSetClimbingMobCachingSectionUpdateBehavior(listenForCachedBlockChanges: boolean): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        setDynamicLightEnabled(arg0: boolean): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        handler$gli000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get XRot(): number
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get playingEndimation(): Internal.PlayableEndimation
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get creepy(): boolean
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set lootTable(arg0: ResourceLocation_)
        get isInsidePortal(): boolean
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        get jumping(): boolean
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get remainingPersistentAngerTime(): number
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get motions(): Internal.Stack<any>
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        set useItemRemaining(arg0: number)
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get targetSelector(): Internal.GoalSelector
        set registeredToWorld(navigation: Internal.PathNavigation_)
        get sleeping(): boolean
        set dataMap(arg0: Internal.Map_<any, any>)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get YRot(): number
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get goalSelector(): Internal.GoalSelector
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get dirty(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YRot(arg0: number)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get angry(): boolean
        get dynamicLightEnabled(): boolean
        set chestArmorItem(item: Internal.ItemStack_)
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        set animationTick(arg0: number)
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get lastPos(): BlockPos
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        get noEndimationPlaying(): boolean
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        get active(): boolean
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set carriedBlock(arg0: Internal.BlockState_)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get fallFlying(): boolean
        get encodeId(): string
        set remainingPersistentAngerTime(arg0: number)
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get dirtyEntries(): Internal.Set<any>
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        get rewinding(): boolean
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set XRot(arg0: number)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get sleepingPos(): Internal.Optional<any>
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get pos(): Internal.Position
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get animationTick(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        set knockbackMultiplier_BetterCombat(value: number)
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get carriedBlock(): Internal.BlockState
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get persistentAngerTarget(): Internal.UUID
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get dynamicLightWorld(): Internal.Level
        set persistentAngerTarget(arg0: Internal.UUID_)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        set dynamicLightEnabled(arg0: boolean)
        get restrictRadius(): number
        get registeredNavigation(): Internal.PathNavigation
        get invertedHealAndHarm(): boolean
        get endimatedState(): Internal.Endimatable$EndimatedState
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type EnderMan_ = EnderMan;
    interface IForgeRegistry$CreateCallback <V> {
        abstract onCreate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager): void;
    }
    type IForgeRegistry$CreateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager)=> void) | IForgeRegistry$CreateCallback<V>;
    interface IShadowTrain {
        abstract railways$clearShadow(): void;
        abstract railways$getShadowKey(): ResourceLocation;
        railways$isShadow(): boolean;
        abstract railways$setShadow(arg0: ResourceLocation_): void;
    }
    type IShadowTrain_ = IShadowTrain;
    class SortBy extends Internal.Enum<Internal.SortBy> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SortBy>>;
        static fromName(arg0: string): Internal.SortBy;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.SortBy_): number;
        static values(): Internal.SortBy[];
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        next(): this;
        toString(): string;
        notifyAll(): void;
        "compareTo(net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy)"(arg0: Internal.SortBy_): number;
        static valueOf(arg0: string): Internal.SortBy;
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.SortBy;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.SortBy
        static readonly NAME: (Internal.SortBy) & (Internal.SortBy);
        static readonly MOD: (Internal.SortBy) & (Internal.SortBy);
        static readonly TAGS: (Internal.SortBy) & (Internal.SortBy);
        static readonly COUNT: (Internal.SortBy) & (Internal.SortBy);
    }
    type SortBy_ = "mod" | "tags" | "count" | "name" | SortBy;
    class RecipeIngredientRole extends Internal.Enum<Internal.RecipeIngredientRole> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(mezz.jei.api.recipe.RecipeIngredientRole)"(arg0: Internal.RecipeIngredientRole_): number;
        static values(): Internal.RecipeIngredientRole[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.RecipeIngredientRole;
        name(): string;
        compareTo(arg0: Internal.RecipeIngredientRole_): number;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RecipeIngredientRole;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeIngredientRole>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeIngredientRole
        static readonly CATALYST: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly OUTPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly RENDER_ONLY: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly INPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
    }
    type RecipeIngredientRole_ = "output" | "input" | "catalyst" | RecipeIngredientRole | "render_only";
    class Fruit extends Internal.RegistryEntry<Internal.Fruit> implements Internal.Resettable<Internal.Fruit> {
        constructor(arg0: ResourceLocation_)
        setPostReloadDefaults(): this;
        generateStateData(arg0: Internal.DTBlockStateProvider_): void;
        getTextComponent(): net.minecraft.network.chat.Component;
        notify(): void;
        ifValid(arg0: Internal.Consumer_<Internal.Fruit>): boolean;
        placeDuringWorldGen(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        shouldGenerateData(): boolean;
        generateLangData(arg0: Internal.DTLangProvider_): void;
        setMinDropCount(arg0: number): void;
        isInFlowerHoldPeriod(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): boolean;
        getDefaultMapColor(): Internal.MapColor;
        setMaxAge(arg0: number): void;
        isValid(): boolean;
        setGrowthChance(arg0: number): void;
        getGrowthChance(): number;
        createBlock(arg0: ResourceLocation_, arg1: Internal.BlockBehaviour$Properties_): void;
        isOutOfSeason(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        shouldGenerateBlockDrops(): boolean;
        getBlockShape(arg0: number): Internal.VoxelShape;
        place(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        getAgeProperty(): Internal.IntegerProperty;
        toLoadDataString(): string;
        performMatureAction(arg0: Internal.GrowableBlock$Info_): void;
        setItemStack(arg0: Internal.ItemStack_): void;
        wait(): void;
        reset(): Internal.Resettable<any>;
        ifInvalid(arg0: Internal.Runnable_): boolean;
        setPreReloadDefaults(): this;
        getMaxAge(): number;
        createBlockDrops(): Internal.LootTable$Builder;
        getClass(): typeof any;
        setGenerateData(arg0: boolean): void;
        ifValidElse(arg0: Internal.Consumer_<Internal.Fruit>, arg1: Internal.Runnable_): boolean;
        setDropCount(arg0: number): void;
        setFlowerHoldPeriodLength(arg0: number): void;
        getMatureAction(): Internal.GrowableBlock$MatureAction;
        toReloadDataString(): string;
        wait(arg0: number, arg1: number): void;
        getDefaultBlockProperties(arg0: Internal.MapColor_): Internal.BlockBehaviour$Properties;
        getMinProductionFactor(): number;
        setCanBoneMeal(arg0: boolean): void;
        getBlockDropsPath(): ResourceLocation;
        getString(...arg0: org.apache.commons.lang3.tuple.Pair_<string, any>[]): string;
        setMaxDropCount(arg0: number): void;
        toString(): string;
        notifyAll(): void;
        setSeasonOffset(arg0: number): void;
        setMinProductionFactor(arg0: number): void;
        generateItemModelData(arg0: Internal.DTItemModelProvider_): void;
        getDefaultBlockProperties(): Internal.BlockBehaviour$Properties;
        getBlock(): Internal.FruitBlock;
        hashCode(): number;
        canBoneMeal(): boolean;
        elseIfInvalid(arg0: Internal.Fruit_): this;
        getRegistryName(): ResourceLocation;
        getFlowerHoldPeriodLength(): number;
        setMatureAction(arg0: Internal.GrowableBlock$MatureAction_): void;
        wait(arg0: number): void;
        getSeasonOffset(): number;
        seasonalFruitProductionFactor(arg0: Internal.LevelContext_, arg1: BlockPos_): number;
        setBlockShapes(arg0: Internal.VoxelShape_[]): void;
        equals(arg0: any): boolean;
        setRegistryName(arg0: ResourceLocation_): this;
        getItemStack(): Internal.ItemStack;
        get textComponent(): net.minecraft.network.chat.Component
        set minDropCount(arg0: number)
        get defaultMapColor(): Internal.MapColor
        set maxAge(arg0: number)
        get valid(): boolean
        set growthChance(arg0: number)
        get growthChance(): number
        get ageProperty(): Internal.IntegerProperty
        set itemStack(arg0: Internal.ItemStack_)
        get maxAge(): number
        get class(): typeof any
        set generateData(arg0: boolean)
        set dropCount(arg0: number)
        set flowerHoldPeriodLength(arg0: number)
        get matureAction(): Internal.GrowableBlock$MatureAction
        get minProductionFactor(): number
        set canBoneMeal(arg0: boolean)
        get blockDropsPath(): ResourceLocation
        set maxDropCount(arg0: number)
        set seasonOffset(arg0: number)
        set minProductionFactor(arg0: number)
        get defaultBlockProperties(): Internal.BlockBehaviour$Properties
        get block(): Internal.FruitBlock
        get registryName(): ResourceLocation
        get flowerHoldPeriodLength(): number
        set matureAction(arg0: Internal.GrowableBlock$MatureAction_)
        get seasonOffset(): number
        set blockShapes(arg0: Internal.VoxelShape_[])
        set registryName(arg0: ResourceLocation_)
        get itemStack(): Internal.ItemStack
        static readonly TYPE: Internal.TypedRegistry$EntryType<Internal.Fruit>;
        static readonly REGISTRY: Internal.TypedRegistry<Internal.Fruit>;
        static readonly NULL: (Internal.Fruit) & (Internal.Fruit);
    }
    type Fruit_ = Fruit;
    class TerrasteelIngotItem extends Internal.ManaResourceItem implements Internal.ItemWithBannerPattern {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
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
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getBannerPattern(): Internal.TagKey<Internal.BannerPattern>;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get bannerPattern(): Internal.TagKey<Internal.BannerPattern>
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
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
        set craftingRemainder(arg0: Internal.Item_)
    }
    type TerrasteelIngotItem_ = TerrasteelIngotItem;
    abstract class StatTrackingDisplaySource extends Internal.ScoreboardDisplaySource {
        constructor()
        getClass(): typeof any;
        getName(): net.minecraft.network.chat.Component;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
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
    type StatTrackingDisplaySource_ = StatTrackingDisplaySource;
    class DyeItem extends Internal.Item implements Internal.SignApplicator {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDyeColor(): Internal.DyeColor;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
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
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Internal.Player_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static byColor(arg0: Internal.DyeColor_): Internal.DyeItem;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        canApplyToSign(arg0: Internal.SignText_, arg1: Internal.Player_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        get dyeColor(): Internal.DyeColor
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
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
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
    type DyeItem_ = DyeItem;
    class Ext2GigaUpgradeItem extends lu.kolja.expandedae.item.abstracts.UpgradeItem {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
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
        set craftingRemainder(arg0: Internal.Item_)
    }
    type Ext2GigaUpgradeItem_ = Ext2GigaUpgradeItem;
    class BlockPositionSource$Type implements Internal.PositionSourceType<Internal.BlockPositionSource> {
        constructor()
        getClass(): typeof any;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.BlockPositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        toString(): string;
        notifyAll(): void;
        read(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.PositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        hashCode(): number;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        codec(): Internal.Codec<Internal.BlockPositionSource>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        get class(): typeof any
    }
    type BlockPositionSource$Type_ = BlockPositionSource$Type;
    interface AccessorAbstractChestedHorse {
        abstract quark$playChestEquipsSound(): void;
        (): void;
    }
    type AccessorAbstractChestedHorse_ = AccessorAbstractChestedHorse | (()=> void);
    interface IntStream extends Internal.BaseStream<number, Internal.IntStream> {
        concat(arg0: Internal.IntStream_, arg1: Internal.IntStream_): this;
        range(arg0: number, arg1: number): this;
        abstract min(): Internal.OptionalInt;
        abstract map(arg0: Internal.IntUnaryOperator_): this;
        abstract isParallel(): boolean;
        abstract onClose(arg0: Internal.Runnable_): this;
        generate(arg0: Internal.IntSupplier_): this;
        builder(): Internal.IntStream$Builder;
        abstract sum(): number;
        abstract findFirst(): Internal.OptionalInt;
        abstract max(): Internal.OptionalInt;
        dropWhile(arg0: Internal.IntPredicate_): this;
        rangeClosed(arg0: number, arg1: number): this;
        abstract count(): number;
        abstract findAny(): Internal.OptionalInt;
        abstract reduce(arg0: Internal.IntBinaryOperator_): Internal.OptionalInt;
        mapMulti(arg0: Internal.IntStream$IntMapMultiConsumer_): this;
        of(arg0: number): this;
        abstract mapToLong(arg0: Internal.IntToLongFunction_): Internal.LongStream;
        iterate(arg0: number, arg1: Internal.IntUnaryOperator_): this;
        spliterator(): Internal.Spliterator<any>;
        abstract reduce(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        abstract sequential(): this;
        abstract filter(arg0: Internal.IntPredicate_): this;
        abstract anyMatch(arg0: Internal.IntPredicate_): boolean;
        abstract distinct(): this;
        iterate(arg0: number, arg1: Internal.IntPredicate_, arg2: Internal.IntUnaryOperator_): this;
        abstract peek(arg0: Internal.IntConsumer_): this;
        takeWhile(arg0: Internal.IntPredicate_): this;
        "of(int)"(arg0: number): this;
        abstract collect<R>(arg0: Internal.Supplier_<R>, arg1: Internal.ObjIntConsumer_<R>, arg2: Internal.BiConsumer_<R, R>): R;
        abstract mapToDouble(arg0: Internal.IntToDoubleFunction_): Internal.DoubleStream;
        abstract forEach(arg0: Internal.IntConsumer_): void;
        abstract sorted(): this;
        abstract flatMap(arg0: Internal.IntFunction_<Internal.IntStream>): this;
        abstract toArray(): number[];
        abstract noneMatch(arg0: Internal.IntPredicate_): boolean;
        abstract unordered(): this;
        empty(): this;
        abstract mapToObj<U>(arg0: Internal.IntFunction_<U>): Internal.Stream<U>;
        "of(int[])"(...arg0: number[]): this;
        iterator(): Internal.Iterator<any>;
        abstract parallel(): this;
        abstract limit(arg0: number): this;
        of(...arg0: number[]): this;
        abstract asDoubleStream(): Internal.DoubleStream;
        abstract allMatch(arg0: Internal.IntPredicate_): boolean;
        abstract asLongStream(): Internal.LongStream;
        abstract forEachOrdered(arg0: Internal.IntConsumer_): void;
        abstract boxed(): Internal.Stream<number>;
        abstract close(): void;
        abstract summaryStatistics(): Internal.IntSummaryStatistics;
        abstract average(): Internal.OptionalDouble;
        abstract skip(arg0: number): this;
        get parallel(): boolean
    }
    type IntStream_ = IntStream;
    class LanderIconItem extends Internal.Item implements Internal.IClientExtensionItem {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
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
        set craftingRemainder(arg0: Internal.Item_)
    }
    type LanderIconItem_ = LanderIconItem;
    interface ClimateProperties {
        abstract getDownfall(): number;
        abstract getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        abstract getTemperature(): number;
        abstract hasPrecipitation(): boolean;
        get downfall(): number
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get temperature(): number
    }
    type ClimateProperties_ = ClimateProperties;
    class Insets implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        clone(): any;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        right: number;
        top: number;
        bottom: number;
        left: number;
    }
    type Insets_ = Insets;
    interface IConfigurable {
        abstract getConfigElement<T>(...arg0: string[]): Internal.Optional<T>;
        abstract getConfigList(...arg0: string[]): Internal.List<Internal.IConfigurable>;
    }
    type IConfigurable_ = IConfigurable;
    class ElementalArmor extends Internal.AnimatedMagicArmor implements Internal.IElementalArmor {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.SpellSchool_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getMinTier(): number;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getColor(arg0: any): string;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        getManaDiscount(arg0: Internal.ItemStack_, arg1: Internal.Spell_): number;
        "getTexture(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): ResourceLocation;
        moonlight$getClientAnimationExtension(): any;
        static heavy(arg0: Internal.ArmorItem$Type_): Internal.AnimatedMagicArmor;
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
        static medium(arg0: Internal.ArmorItem$Type_): Internal.AnimatedMagicArmor;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
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
        getArmorModel(): Internal.GeoModel<Internal.AnimatedMagicArmor>;
        getDefense(): number;
        static light(arg0: Internal.ArmorItem$Type_): Internal.AnimatedMagicArmor;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getDyeColor(arg0: Internal.ItemStack_): number;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addArmorSetDescription(arg0: Internal.ArmorSet_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        getManaRegenBonus(arg0: Internal.ItemStack_): number;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getColor(arg0: Internal.ItemStack_): string;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        applyItemModifiers(arg0: Internal.ItemStack_, arg1: Internal.SpellStats$Builder_, arg2: Internal.AbstractSpellPart_, arg3: Internal.HitResult_, arg4: Internal.Level_, arg5: Internal.LivingEntity_, arg6: Internal.SpellContext_): Internal.SpellStats$Builder;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setColor(arg0: string, arg1: Internal.ItemStack_): void;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setColor(arg0: string, arg1: any): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        addInformationAfterShift(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        "getColor(java.lang.Object)"(arg0: any): string;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getTexture(net.minecraft.world.entity.LivingEntity)"(arg0: Internal.LivingEntity_): ResourceLocation;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDiscount(arg0: Internal.List_<Internal.AbstractSpellPart>): number;
        applyModifiers(arg0: Internal.SpellStats$Builder_, arg1: Internal.AbstractSpellPart_, arg2: Internal.HitResult_, arg3: Internal.Level_, arg4: Internal.LivingEntity_, arg5: Internal.SpellContext_): Internal.SpellStats$Builder;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static schoolToMaterial(arg0: Internal.SpellSchool_): Internal.ArmorMaterial;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getTier(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getManaDiscount(arg0: Internal.ItemStack_): number;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        doAbsorb(arg0: DamageSource_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        getMaxManaBoost(arg0: Internal.ItemStack_): number;
        getTexture(arg0: Internal.ItemStack_): ResourceLocation;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        onDye(arg0: Internal.ItemStack_, arg1: Internal.DyeColor_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSchool(): Internal.SpellSchool;
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
        "setColor(java.lang.String,java.lang.Object)"(arg0: string, arg1: any): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "setColor(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        "getColor(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTexture(arg0: Internal.LivingEntity_): ResourceLocation;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get minTier(): number
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get armorModel(): Internal.GeoModel<Internal.AnimatedMagicArmor>
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
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
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get tier(): string
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get school(): Internal.SpellSchool
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ElementalArmor_ = ElementalArmor;
    interface AccessorTrain {
        abstract railways$setStress(arg0: number[]): void;
        abstract railways$getStress(): number[];
    }
    type AccessorTrain_ = AccessorTrain;
    class AbstractUniform {
        constructor()
        getClass(): typeof any;
        set(arg0: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        "setSafe(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(int,int)"(arg0: number, arg1: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "set(float,float)"(arg0: number, arg1: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: number, arg1: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        "set(int,int,int)"(arg0: number, arg1: number, arg2: number): void;
        "set(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vector3f_): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec4f_): void;
        "set(org.joml.Matrix4f)"(arg0: Matrix4f_): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number): void;
        "set(float,float,float)"(arg0: number, arg1: number, arg2: number): void;
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        toString(): string;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notifyAll(): void;
        "set(org.joml.Matrix3f)"(arg0: Matrix3f_): void;
        set(arg0: number): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        set(arg0: number[]): void;
        "set(org.joml.Vector4f)"(arg0: Vec4f_): void;
        "set(org.joml.Vector3f)"(arg0: Vector3f_): void;
        "set(float[])"(arg0: number[]): void;
        "setSafe(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hashCode(): number;
        set(arg0: Matrix4f_): void;
        "set(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Matrix3f_): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        wait(): void;
        "set(float)"(arg0: number): void;
        wait(arg0: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        equals(arg0: any): boolean;
        "set(int)"(arg0: number): void;
        get class(): typeof any
        set "(org.joml.Matrix4f)"(arg0: Matrix4f_)
        set "(org.joml.Matrix3f)"(arg0: Matrix3f_)
        set "(org.joml.Vector4f)"(arg0: Vec4f_)
        set "(org.joml.Vector3f)"(arg0: Vector3f_)
        set "(float[])"(arg0: number[])
        set "(float)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type AbstractUniform_ = AbstractUniform;
    class ArsEngItems$1 extends Internal.PortableSourceCellItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        abstract asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        setFuzzyMode(arg0: Internal.ItemStack_, arg1: Internal.FuzzyMode_): void;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getTotalBytes(): number;
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
        openFromInventory(arg0: Internal.Player_, arg1: number): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getColor(arg0: Internal.ItemStack_, arg1: number): number;
        isEditable(arg0: Internal.ItemStack_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getAECurrentPower(arg0: Internal.ItemStack_): number;
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getConfigInventory(arg0: Internal.ItemStack_): Internal.ConfigInventory;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getColor(arg0: Internal.ItemStack_): number;
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
        getTier(): Internal.StorageTier;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        insert(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.AEKey_, arg3: Internal.AEKeyType_, arg4: number, arg5: Internal.Actionable_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        clearColor(arg0: Internal.ItemStack_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        static initColours(arg0: Internal.RegisterColorHandlersEvent$Item_): void;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        getAEMaxPower(stack: Internal.ItemStack_): number;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getPowerFlow(arg0: Internal.ItemStack_): Internal.AccessRestriction;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
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
        isRepairable(arg0: Internal.ItemStack_): boolean;
        getIdleDrain(): number;
        onUpgradesChanged(arg0: Internal.ItemStack_, arg1: Internal.IUpgradeInventory_): void;
        notify(): void;
        getChargeRate(stack: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getMenuHost(arg0: Internal.Player_, arg1: number, arg2: Internal.ItemStack_, arg3: BlockPos_): Internal.ItemMenuHost;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getRecipeId(): ResourceLocation;
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
        getFuzzyMode(arg0: Internal.ItemStack_): Internal.FuzzyMode;
        extractAEPower(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Actionable_): number;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        injectAEPower(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Actionable_): number;
        getUpgrades(arg0: Internal.ItemStack_): Internal.IUpgradeInventory;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getRegistryName(): ResourceLocation;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
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
        get totalBytes(): number
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get tier(): Internal.StorageTier
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get idleDrain(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get recipeId(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        get registryName(): ResourceLocation
    }
    type ArsEngItems$1_ = ArsEngItems$1;
    class PoseTransformStack implements Internal.TransformStack<Internal.PoseTransformStack> {
        constructor(stack: Internal.PoseStack_)
        rotateCentered(radians: number, axis: Internal.Direction_): this;
        rotateTo(from: Internal.Vector3fc_, to: Internal.Vector3fc_): this;
        "rotate(float,net.minecraft.core.Direction$Axis)"(radians: number, axis: Internal.Direction$Axis_): this;
        "translate(net.minecraft.world.phys.Vec3)"(vec: Vec3d_): this;
        static of(stack: Internal.PoseStack_): Internal.PoseTransformStack;
        rotateCentered(radians: number, axis: Internal.Direction$Axis_): this;
        rotateAround(quaternion: Internal.Quaternionfc_, vec: Internal.Vector3fc_): this;
        scale(factors: Internal.Vector3fc_): this;
        scaleX(factor: number): this;
        "translate(float)"(v: number): this;
        "translateBack(net.minecraft.core.Vec3i)"(vec: Vec3i_): this;
        rotate(arg0: Internal.Quaternionfc_): Internal.Rotate<any>;
        "rotateCenteredDegrees(float,net.minecraft.core.Direction)"(degrees: number, axis: Internal.Direction_): this;
        rotateCentered(radians: number, axis: Internal.Vector3fc_): this;
        rotateZDegrees(degrees: number): this;
        translateY(y: number): this;
        translateBack(x: number, y: number, z: number): this;
        translateBack(x: number, y: number, z: number): this;
        scale(factor: number): this;
        "rotateCentered(float,net.minecraft.core.Direction)"(radians: number, axis: Internal.Direction_): this;
        "rotate(float,net.minecraft.core.Direction)"(radians: number, axis: Internal.Direction_): this;
        translateBack(vec: Vec3d_): this;
        rotateDegrees(degrees: number, axis: Internal.Direction_): this;
        "rotate(float,com.mojang.math.Axis)"(radians: number, axis: com.mojang.math.Axis_): this;
        rotateDegrees(degrees: number, axis: Internal.Direction$Axis_): this;
        rotate(axisAngle: Internal.AxisAngle4f_): this;
        rotateZ(radians: number): this;
        translate(arg0: number, arg1: number, arg2: number): Internal.Translate<any>;
        rotateYDegrees(degrees: number): this;
        getClass(): typeof any;
        "rotateDegrees(float,net.minecraft.core.Direction$Axis)"(degrees: number, axis: Internal.Direction$Axis_): this;
        rotateYCentered(radians: number): this;
        rotateDegrees(degrees: number, axis: Internal.Vector3fc_): this;
        "translateBack(net.minecraft.world.phys.Vec3)"(vec: Vec3d_): this;
        scaleY(factor: number): this;
        "scale(org.joml.Vector3fc)"(factors: Internal.Vector3fc_): this;
        "translate(org.joml.Vector3ic)"(vec: Internal.Vector3ic_): this;
        transform(pose: Internal.PoseStack$Pose_): this;
        translateX(x: number): this;
        rotateTo(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): this;
        rotate(radians: number, axis: Internal.Direction_): this;
        "rotateTo(net.minecraft.core.Direction,net.minecraft.core.Direction)"(from: Internal.Direction_, to: Internal.Direction_): this;
        scale(arg0: number, arg1: number, arg2: number): Internal.Scale<any>;
        toString(): string;
        nudge(seed: number): this;
        translate(vec: Vec3d_): this;
        rotateCentered(q: Internal.Quaternionfc_): this;
        notifyAll(): void;
        "translateBack(double,double,double)"(x: number, y: number, z: number): this;
        rotate(radians: number, axisX: number, axisY: number, axisZ: number): this;
        rotateY(radians: number): this;
        uncenter(): this;
        translate(vec: Internal.Vector3ic_): this;
        "transform(com.mojang.blaze3d.vertex.PoseStack)"(stack: Internal.PoseStack_): this;
        "rotateCentered(float,org.joml.Vector3fc)"(radians: number, axis: Internal.Vector3fc_): this;
        wait(arg0: number): void;
        rotateToFace(facing: Internal.Direction_): this;
        "transform(com.mojang.blaze3d.vertex.PoseStack$Pose)"(pose: Internal.PoseStack$Pose_): this;
        "rotateDegrees(float,net.minecraft.core.Direction)"(degrees: number, axis: Internal.Direction_): this;
        scaleZ(factor: number): this;
        "rotateCenteredDegrees(float,net.minecraft.core.Direction$Axis)"(degrees: number, axis: Internal.Direction$Axis_): this;
        notify(): void;
        "translate(net.minecraft.core.Vec3i)"(vec: Vec3i_): this;
        rotateCenteredDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): this;
        rotate(radians: number, axis: Internal.Vector3fc_): this;
        rotateZCenteredDegrees(degrees: number): this;
        "rotateCenteredDegrees(float,com.mojang.math.Axis)"(degrees: number, axis: com.mojang.math.Axis_): this;
        rotateAround(quaternion: Internal.Quaternionfc_, x: number, y: number, z: number): this;
        rotateCenteredDegrees(degrees: number, axis: com.mojang.math.Axis_): this;
        rotateXCentered(radians: number): this;
        "scale(float)"(factor: number): this;
        "rotateCenteredDegrees(float,org.joml.Vector3fc)"(degrees: number, axis: Internal.Vector3fc_): this;
        rotateDegrees(degrees: number, axis: com.mojang.math.Axis_): this;
        rotateDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): this;
        "rotate(float,org.joml.Vector3fc)"(radians: number, axis: Internal.Vector3fc_): this;
        transform(pose: Internal.Matrix4fc_, normal: Internal.Matrix3fc_): this;
        unwrap(): Internal.PoseStack;
        rotateXDegrees(degrees: number): this;
        "translateBack(float,float,float)"(x: number, y: number, z: number): this;
        mulPose(arg0: Internal.Matrix4fc_): Internal.Transform<any>;
        rotateX(radians: number): this;
        "translate(double,double,double)"(x: number, y: number, z: number): this;
        "translate(org.joml.Vector3fc)"(vec: Internal.Vector3fc_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): Internal.Rotate<any>;
        translateBack(vec: Internal.Vector3ic_): this;
        translate(vec: Internal.Vector3fc_): this;
        wait(): void;
        rotateCenteredDegrees(degrees: number, axis: Internal.Direction$Axis_): this;
        "translateBack(org.joml.Vector3fc)"(vec: Internal.Vector3fc_): this;
        rotateCentered(radians: number, axisX: number, axisY: number, axisZ: number): this;
        rotateCenteredDegrees(degrees: number, axis: Internal.Direction_): this;
        rotateXCenteredDegrees(degrees: number): this;
        translate(v: number): this;
        translateBack(v: number): this;
        rotateCentered(radians: number, axis: com.mojang.math.Axis_): this;
        "rotateDegrees(float,org.joml.Vector3fc)"(degrees: number, axis: Internal.Vector3fc_): this;
        "translateBack(org.joml.Vector3ic)"(vec: Internal.Vector3ic_): this;
        wait(arg0: number, arg1: number): void;
        "rotate(org.joml.AxisAngle4f)"(axisAngle: Internal.AxisAngle4f_): this;
        transform(stack: Internal.PoseStack_): this;
        popPose(): Internal.TransformStack<any>;
        translateBack(vec: Vec3i_): this;
        rotate(radians: number, axis: Internal.Direction$Axis_): this;
        rotateZCentered(radians: number): this;
        rotateYCenteredDegrees(degrees: number): this;
        rotateCenteredDegrees(degrees: number, axis: Internal.Vector3fc_): this;
        "translateBack(float)"(v: number): this;
        translateZ(z: number): this;
        "rotateTo(org.joml.Vector3fc,org.joml.Vector3fc)"(from: Internal.Vector3fc_, to: Internal.Vector3fc_): this;
        translate(vec: Vec3i_): this;
        translate(x: number, y: number, z: number): this;
        mulNormal(arg0: Internal.Matrix3fc_): Internal.Transform<any>;
        rotate(radians: number, axis: com.mojang.math.Axis_): this;
        rotateTo(from: Internal.Direction_, to: Internal.Direction_): this;
        "rotateDegrees(float,com.mojang.math.Axis)"(degrees: number, axis: com.mojang.math.Axis_): this;
        hashCode(): number;
        center(): this;
        pushPose(): Internal.TransformStack<any>;
        translateBack(vec: Internal.Vector3fc_): this;
        "translate(float,float,float)"(arg0: number, arg1: number, arg2: number): Internal.Translate<any>;
        self(): this;
        "rotateCentered(float,com.mojang.math.Axis)"(radians: number, axis: com.mojang.math.Axis_): this;
        "rotateCentered(float,net.minecraft.core.Direction$Axis)"(radians: number, axis: Internal.Direction$Axis_): this;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type PoseTransformStack_ = PoseTransformStack;
    class WildcardIngredient extends Internal.KubeJSIngredient {
        getDisplayStacks(): Internal.ItemStackSet;
        toJson(json: Internal.JsonObject_): void;
        "test(net.minecraft.world.item.ItemStack)"(stack: Internal.ItemStack_): boolean;
        asStack(): InputItem;
        notify(): void;
        toJson(): Internal.JsonElement;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.level.ItemLike[])"(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        isWildcard(): boolean;
        /**
         * @deprecated
        */
        static "of(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        static create_$md$54c54b$2(arg0: Internal.Stream_<any>): Internal.Ingredient;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        "or(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "and(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        negate(): Internal.Predicate<Internal.ItemStack>;
        write(buf: Internal.FriendlyByteBuf_): void;
        /**
         * @deprecated
        */
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        mfix$hasNoElements(): boolean;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        /**
         * @deprecated
        */
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        "toJson()"(): Internal.JsonElement;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        test(stack: Internal.ItemStack_): boolean;
        getValues(): Internal.Ingredient$Value[];
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        static create(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        /**
         * @deprecated
        */
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        requiresTesting(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        isVanilla(): boolean;
        /**
         * @deprecated
        */
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        static invalidateAll(): void;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        toJson(): Internal.JsonObject;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        static of(): Internal.Ingredient;
        getItemTypes(): Internal.Set<Internal.Item>;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "test(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        static "of(java.util.stream.Stream)"(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        handler$cnh000$blah(arg0: Internal.CallbackInfoReturnable_<any>): void;
        mfix$clearReference(): void;
        toString(): string;
        "toJson()"(): Internal.JsonObject;
        self(): Internal.Ingredient;
        notifyAll(): void;
        getCustomIngredient(): Internal.CustomIngredient;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        getStackingIds(): Internal.IntList;
        hashCode(): number;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        wait(arg0: number): void;
        getFirst(): Internal.ItemStack;
        equals(arg0: any): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get values(): Internal.Ingredient$Value[]
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get class(): typeof any
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get customIngredient(): Internal.CustomIngredient
        get stackingIds(): Internal.IntList
        get first(): Internal.ItemStack
        static INSTANCE: (Internal.WildcardIngredient) & (Internal.WildcardIngredient);
        static readonly SERIALIZER: Internal.KubeJSIngredientSerializer<Internal.WildcardIngredient>;
    }
    type WildcardIngredient_ = WildcardIngredient;
    interface BorderChangeListener {
        abstract onBorderSetDamageSafeZOne(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSizeLerping(arg0: Internal.WorldBorder_, arg1: number, arg2: number, arg3: number): void;
        abstract onBorderCenterSet(arg0: Internal.WorldBorder_, arg1: number, arg2: number): void;
        abstract onBorderSizeSet(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetDamagePerBlock(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningBlocks(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningTime(arg0: Internal.WorldBorder_, arg1: number): void;
    }
    type BorderChangeListener_ = BorderChangeListener;
    class HurtBySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type HurtBySensor_ = HurtBySensor;
    class Matrix4d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4dc {
        constructor()
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        constructor(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_)
        "rotateAffine(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        invertOrtho(arg0: Internal.Matrix4d_): this;
        determinant3x3(): number;
        "transpose3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        zero(): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateAffine(arg0: Internal.Quaterniondc_): this;
        mapnXZnY(arg0: Internal.Matrix4d_): this;
        rotationX(arg0: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveNear(): number;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "reflection(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        normal(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        normalize3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapnXnZnY(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnYXZ(arg0: Internal.Matrix4d_): this;
        mapZYnX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: Internal.Vector3fc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4d_): this;
        "scale(double)"(arg0: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        "transformProject(org.joml.Vector4dc,org.joml.Vector3d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYXnZ(arg0: Internal.Matrix4d_): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(): this;
        mapYXZ(arg0: Internal.Matrix4d_): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        set(arg0: number[], arg1: number): this;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        "perspectiveRect(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transpose3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number): this;
        isFinite(): boolean;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotateTowardsXY(arg0: number, arg1: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        rotationZ(arg0: number): this;
        invertAffine(arg0: Internal.Matrix4d_): this;
        perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        mapnZnXnY(): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXZ(arg0: Internal.Matrix4d_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "frustum(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4x3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateAffine(arg0: Internal.Quaternionfc_): this;
        transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        mapYZnX(): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        m02(): number;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        "translateLocal(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mul(arg0: Matrix4f_): this;
        "orthoSymmetric(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        m13(): number;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "ortho(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4x3fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateZ(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnXZY(): this;
        mapYZnX(arg0: Internal.Matrix4d_): this;
        setColumn(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m22(arg0: number): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(arg0: Internal.Matrix4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get4x3Transposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number, arg1: Internal.Matrix4d_): this;
        mapXZY(): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        m33(arg0: number): this;
        add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(arg0: Internal.Matrix4d_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4d_): this;
        getToAddress(arg0: number): Internal.Matrix4dc;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapYXnZ(): this;
        "set4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        invertOrtho(): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3dc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get4x3Transposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        translation(arg0: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        mapYZX(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        notify(): void;
        lerp(arg0: Internal.Matrix4dc_, arg1: number): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapXnZY(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        m20(arg0: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "translateLocal(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapZnXY(arg0: Internal.Matrix4d_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateX(arg0: number, arg1: Internal.Matrix4d_): this;
        m31(arg0: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "frustumLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "get(float[])"(arg0: number[]): number[];
        cofactor3x3(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapZnXY(): this;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        "scale(double,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Matrix4d_): this;
        mapnYnZX(arg0: Internal.Matrix4d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4d_): this;
        get(arg0: number, arg1: number): number;
        transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        translation(arg0: Internal.Vector3fc_): this;
        "transformProject(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m03(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateZ(arg0: number): this;
        "cofactor3x3(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapZYX(): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        get3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnYnZ(): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        negateX(arg0: Internal.Matrix4d_): this;
        invertPerspective(): this;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number): this;
        rotateLocalX(arg0: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_): this;
        mapnZnYnX(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get4x3Transposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number[], arg1: number): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateX(arg0: number): this;
        mapZnYnX(arg0: Internal.Matrix4d_): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "set3x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mapXnYnZ(): this;
        "reflection(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        "orthoSymmetricLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "invertPerspectiveView(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        m01(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: Internal.Vector4d_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        rotationTowardsXY(arg0: number, arg1: number): this;
        frustumAabb(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_): this;
        "transformProject(double,double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        "set4x3(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYZX(): this;
        m12(arg0: number): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number): this;
        "rotateAffine(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        negateZ(arg0: Internal.Matrix4d_): this;
        invert(): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        "invertPerspectiveView(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        m23(arg0: number): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "mulPerspectiveAffine(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        "mulPerspectiveAffine(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        "transformProject(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "shadow(org.joml.Vector4dc,double,double,double,double)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        invert(arg0: Internal.Matrix4d_): this;
        isAffine(): boolean;
        get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "translateLocal(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapYnXnZ(): this;
        m01(): number;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix4dc_): this;
        invertFrustum(): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapYnZnX(arg0: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        sub(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        identity(): this;
        set4x3(arg0: Internal.Matrix4x3fc_): this;
        m12(): number;
        mapnZnXY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnYnXnZ(): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        clone(): any;
        mapXnYnZ(arg0: Internal.Matrix4d_): this;
        mapZnYnX(): this;
        mapnZnYX(): this;
        "normal(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m23(): number;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        get(arg0: number[]): number[];
        "mul(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        determinant(): number;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        properties(): number;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        toString(): string;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "perspective(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        mapnYnXZ(): this;
        mapZYnX(arg0: Internal.Matrix4d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        mapnXYnZ(arg0: Internal.Matrix4d_): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_): this;
        "project(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnXnYnZ(arg0: Internal.Matrix4d_): this;
        mapnZnYX(arg0: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "project(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "frustum(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapYnZnX(): this;
        "unproject(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "mul(org.joml.Matrix3x2dc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        mapYnXnZ(arg0: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        rotateLocalZ(arg0: number): this;
        equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapZXY(): this;
        trapezoidCrop(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "perspectiveRect(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        scaleLocal(arg0: number): this;
        mapnYnZnX(): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        m21(): number;
        translationRotateScaleMulAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_): this;
        perspectiveFar(): number;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        "getRow(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnYnZnX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4dc_): this;
        static perspectiveOffCenterViewFromRectangle(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_, arg4: number, arg5: boolean, arg6: Internal.Matrix4d_, arg7: Internal.Matrix4d_): void;
        m32(): number;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        scaleXY(arg0: number, arg1: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mapZXY(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapnZYnX(): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        normal(arg0: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number): this;
        "get(double[])"(arg0: number[]): number[];
        mapZXnY(): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        invertFrustum(arg0: Internal.Matrix4d_): this;
        "normal(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "add4x3(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapXZnY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotationY(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4d_): this;
        mapnYXnZ(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getRow(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZnY(arg0: Internal.Matrix4d_): this;
        scaling(arg0: Internal.Vector3dc_): this;
        mapZnXnY(): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        wait(arg0: number): void;
        invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        m03(): number;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mapZYX(arg0: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYnZX(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "transformDirection(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "transformDirection(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Matrix4fc_): this;
        add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        get(arg0: number[], arg1: number): number[];
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "transpose3x3(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        invertPerspective(arg0: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnZnXY(): this;
        assume(arg0: number): this;
        transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        "transformDirection(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        scale(arg0: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        mulAffine(arg0: Internal.Matrix4dc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXY(): this;
        "set3x3(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        m10(arg0: number): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix4d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: number[], arg1: number): number[];
        "unprojectInv(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZnY(): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        mapnXnYZ(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        negateY(): this;
        set(arg0: Internal.Matrix4dc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(arg0: number): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        mapnYXnZ(): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        transpose3x3(): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transpose3x3(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        "orthoSymmetricLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul0(arg0: Internal.Matrix4dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m32(arg0: number): this;
        mapYZX(): this;
        transpose(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        cofactor3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        mapnZYX(arg0: Internal.Matrix4d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        "set4x3(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnZYX(): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        normal(): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix4x3fc_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "frustumLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZY(arg0: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "orthoSymmetric(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        m30(arg0: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateY(arg0: number, arg1: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        mapXnZY(): this;
        "transformDirection(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalY(arg0: number): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        "scaling(double)"(arg0: number): this;
        set(arg0: number[]): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        translationRotateScaleInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(): number;
        "project(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnZnXnY(arg0: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        perspectiveFov(): number;
        "project(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateY(arg0: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        m31(): number;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotate(arg0: Internal.AxisAngle4d_): this;
        getClass(): typeof any;
        rotate(arg0: Internal.Quaterniondc_): this;
        sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        determineProperties(): this;
        mapZnXnY(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapXnZnY(): this;
        "mul(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        m02(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        "set(float[],int)"(arg0: number[], arg1: number): this;
        mapnXnZY(arg0: Internal.Matrix4d_): this;
        mapnXnYZ(): this;
        translate(arg0: Internal.Vector3dc_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapYnZX(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "rotateTranslation(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m13(arg0: number): this;
        "shadow(org.joml.Vector4dc,double,double,double,double,org.joml.Matrix4d)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        "translateLocal(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        swap(arg0: Internal.Matrix4d_): this;
        negateY(arg0: Internal.Matrix4d_): this;
        "set(double[])"(arg0: number[]): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnXnZnY(): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        getRowColumn(arg0: number, arg1: number): number;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        transformDirection(arg0: Vector3f_): Vector3f;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZYnX(arg0: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number): this;
        "rotateTranslation(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        add(arg0: Internal.Matrix4dc_): this;
        unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        m00(arg0: number): this;
        mapnXZY(arg0: Internal.Matrix4d_): this;
        get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "get4x3Transposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        withLookAtUp(arg0: Internal.Vector3dc_): this;
        "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "translate(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        add4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        "orthoLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnXnZY(): this;
        add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        invertAffine(): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number[]): number[];
        toString(arg0: Internal.NumberFormat_): string;
        setFromIntrinsic(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        "transformProject(double,double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "normalize3x3(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "mul(org.joml.Matrix4f)"(arg0: Matrix4f_): this;
        "orthoLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        mapYnXZ(): this;
        "unproject(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        affineSpan(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        "transformProject(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        "translate(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapYnXZ(arg0: Internal.Matrix4d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        notifyAll(): void;
        mapnXZnY(): this;
        add4x3(arg0: Internal.Matrix4fc_): this;
        setTransposed(arg0: Internal.Matrix4dc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        m11(): number;
        determinantAffine(): number;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number): this;
        m22(): number;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        set(arg0: Internal.Quaternionfc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "cofactor3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "mul(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        "perspective(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "transformDirection(org.joml.Vector3f)"(arg0: Vector3f_): Vector3f;
        "ortho(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        m33(): number;
        mapYXZ(): this;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        scaling(arg0: number, arg1: number, arg2: number): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        wait(arg0: number, arg1: number): void;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transformProject(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "transformDirection(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mulAffineR(arg0: Internal.Matrix4dc_): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        "get(int,int)"(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "set(double[],int)"(arg0: number[], arg1: number): this;
        mapZXnY(arg0: Internal.Matrix4d_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        get affine(): boolean
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_)
        set translation(arg0: Internal.Vector3dc_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set transposed(arg0: Internal.Matrix4dc_)
    }
    type Matrix4d_ = Matrix4d;
    class UGBoatItem extends Internal.Item {
        constructor(arg0: boolean, arg1: any_, arg2: Internal.Item$Properties_)
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        modifyReturnValue$foi000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gle000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
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
        modifyReturnValue$foi000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
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
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        handler$fln001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
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
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
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
        set craftingRemainder(arg0: Internal.Item_)
    }
    type UGBoatItem_ = UGBoatItem;
    interface Saddleable {
        getSaddleSoundEvent(): Internal.SoundEvent;
        abstract equipSaddle(arg0: Internal.SoundSource_): void;
        abstract isSaddled(): boolean;
        abstract isSaddleable(): boolean;
        get saddleSoundEvent(): Internal.SoundEvent
        get saddled(): boolean
        get saddleable(): boolean
    }
    type Saddleable_ = Saddleable;
    class SignalBlock$SignalType extends Internal.Enum<Internal.SignalBlock$SignalType> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        "compareTo(com.simibubi.create.content.trains.signal.SignalBlock$SignalType)"(arg0: Internal.SignalBlock$SignalType_): number;
        toString(): string;
        getSerializedName(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.SignalBlock$SignalType;
        name(): string;
        static values(): Internal.SignalBlock$SignalType[];
        hashCode(): number;
        getDeclaringClass(): typeof Internal.SignalBlock$SignalType;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SignalBlock$SignalType>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.SignalBlock$SignalType_): number;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.SignalBlock$SignalType
        static readonly ENTRY_SIGNAL: (Internal.SignalBlock$SignalType) & (Internal.SignalBlock$SignalType);
        static readonly CROSS_SIGNAL: (Internal.SignalBlock$SignalType) & (Internal.SignalBlock$SignalType);
    }
    type SignalBlock$SignalType_ = "cross_signal" | "entry_signal" | SignalBlock$SignalType;
    interface LongFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type LongFunction_<R> = ((arg0: number)=> R) | LongFunction<R>;
    interface AbstractBlockSettingsAccessor {
        abstract getBlockBreakParticles(): boolean;
        abstract getRandomTicks(): boolean;
        abstract getEmissiveLightingPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getLuminance(): Internal.ToIntFunction<Internal.BlockState>;
        abstract getBlockVisionPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract setForceSolid(arg0: boolean): void;
        abstract setOffsetter(arg0: Internal.Optional_<Internal.BlockBehaviour$OffsetFunction>): void;
        abstract setMapColorProvider(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>): void;
        abstract getJumpVelocityMultiplier(): number;
        abstract getInstrument(): Internal.NoteBlockInstrument;
        abstract getResistance(): number;
        abstract setLootTableId(arg0: ResourceLocation_): void;
        abstract getSuffocationPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getForceSolid(): boolean;
        abstract getForceNotSolid(): boolean;
        abstract getVelocityMultiplier(): number;
        abstract setIsAir(arg0: boolean): void;
        abstract setLiquid(arg0: boolean): void;
        abstract getIsAir(): boolean;
        abstract setReplaceable(arg0: boolean): void;
        abstract getAllowsSpawningPredicate(): Internal.BlockBehaviour$StateArgumentPredicate<Internal.EntityType<any>>;
        abstract getRequiredFeatures(): Internal.FeatureFlagSet;
        abstract setRandomTicks(arg0: boolean): void;
        abstract getSolidBlockPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getOffsetter(): Internal.Optional<Internal.BlockBehaviour$OffsetFunction>;
        abstract setDynamicBounds(arg0: boolean): void;
        abstract getOpaque(): boolean;
        abstract getSoundGroup(): SoundType;
        abstract getPistonBehavior(): Internal.PushReaction;
        abstract getLootTableId(): ResourceLocation;
        abstract setForceNotSolid(arg0: boolean): void;
        abstract setBlockBreakParticles(arg0: boolean): void;
        abstract getLiquid(): boolean;
        abstract getCollidable(): boolean;
        abstract setCollidable(arg0: boolean): void;
        abstract getHardness(): number;
        abstract getBurnable(): boolean;
        abstract setToolRequired(arg0: boolean): void;
        abstract setRequiredFeatures(arg0: Internal.FeatureFlagSet_): void;
        abstract getReplaceable(): boolean;
        abstract getSlipperiness(): number;
        abstract isToolRequired(): boolean;
        abstract getDynamicBounds(): boolean;
        abstract setBurnable(arg0: boolean): void;
        abstract getMapColorProvider(): Internal.Function<Internal.BlockState, Internal.MapColor>;
        abstract getPostProcessPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract setOpaque(arg0: boolean): void;
        get blockBreakParticles(): boolean
        get randomTicks(): boolean
        get emissiveLightingPredicate(): Internal.BlockBehaviour$StatePredicate
        get luminance(): Internal.ToIntFunction<Internal.BlockState>
        get blockVisionPredicate(): Internal.BlockBehaviour$StatePredicate
        set forceSolid(arg0: boolean)
        set offsetter(arg0: Internal.Optional_<Internal.BlockBehaviour$OffsetFunction>)
        set mapColorProvider(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>)
        get jumpVelocityMultiplier(): number
        get instrument(): Internal.NoteBlockInstrument
        get resistance(): number
        set lootTableId(arg0: ResourceLocation_)
        get suffocationPredicate(): Internal.BlockBehaviour$StatePredicate
        get forceSolid(): boolean
        get forceNotSolid(): boolean
        get velocityMultiplier(): number
        set isAir(arg0: boolean)
        set liquid(arg0: boolean)
        get isAir(): boolean
        set replaceable(arg0: boolean)
        get allowsSpawningPredicate(): Internal.BlockBehaviour$StateArgumentPredicate<Internal.EntityType<any>>
        get requiredFeatures(): Internal.FeatureFlagSet
        set randomTicks(arg0: boolean)
        get solidBlockPredicate(): Internal.BlockBehaviour$StatePredicate
        get offsetter(): Internal.Optional<Internal.BlockBehaviour$OffsetFunction>
        set dynamicBounds(arg0: boolean)
        get opaque(): boolean
        get soundGroup(): SoundType
        get pistonBehavior(): Internal.PushReaction
        get lootTableId(): ResourceLocation
        set forceNotSolid(arg0: boolean)
        set blockBreakParticles(arg0: boolean)
        get liquid(): boolean
        get collidable(): boolean
        set collidable(arg0: boolean)
        get hardness(): number
        get burnable(): boolean
        set toolRequired(arg0: boolean)
        set requiredFeatures(arg0: Internal.FeatureFlagSet_)
        get replaceable(): boolean
        get slipperiness(): number
        get toolRequired(): boolean
        get dynamicBounds(): boolean
        set burnable(arg0: boolean)
        get mapColorProvider(): Internal.Function<Internal.BlockState, Internal.MapColor>
        get postProcessPredicate(): Internal.BlockBehaviour$StatePredicate
        set opaque(arg0: boolean)
    }
    type AbstractBlockSettingsAccessor_ = AbstractBlockSettingsAccessor;
    class ProtectedBlockProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        callGetType(): Internal.StructureProcessorType<any>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ProtectedBlockProcessor>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type ProtectedBlockProcessor_ = ProtectedBlockProcessor;
    class RecipeTypeFunction extends Internal.BaseFunction implements Internal.WrappedJS {
        constructor(event: Internal.RecipesEventJS_, schemaType: Internal.RecipeSchemaType_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        call(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args0: any[]): Internal.RecipeJS;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        createRecipe(args: any[]): Internal.RecipeJS;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        abstract getPrototype(arg0: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        getMod(): string;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        equals(obj: any): boolean;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get mod(): string
        get externalArrayLength(): any
        readonly schemaType: Internal.RecipeSchemaType;
        static readonly SKIP_ERROR: (Internal.Pattern) & (Internal.Pattern);
        readonly id: ResourceLocation;
        readonly idString: string;
        readonly event: Internal.RecipesEventJS;
    }
    type RecipeTypeFunction_ = RecipeTypeFunction;
    class LayerDefinition {
        constructor(arg0: Internal.MeshDefinition_, arg1: any_)
        getClass(): typeof any;
        hashCode(): number;
        bakeRoot(): Internal.ModelPart;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static create(arg0: Internal.MeshDefinition_, arg1: number, arg2: number): Internal.LayerDefinition;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type LayerDefinition_ = LayerDefinition;
    class FluidProperties$Builder {
        getClass(): typeof any;
        density(density: number): this;
        sounds(sound: string, soundEvent: Internal.SoundEvent_): this;
        motionScale(motionScale: number): this;
        canSwim(canSwim: boolean): this;
        tintColor(tintColor: number): this;
        temperature(temperature: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tickRate(tickRate: number): this;
        build(id: ResourceLocation_): Internal.FluidProperties;
        disablePlacing(): this;
        overlay(overlay: ResourceLocation_): this;
        canPushEntity(canPushEntity: boolean): this;
        canExtinguish(canExtinguish: boolean): this;
        pathType(pathType: Internal.BlockPathTypes_): this;
        fallDistanceModifier(fallDistanceModifier: number): this;
        canDrown(canDrown: boolean): this;
        lightLevel(lightLevel: number): this;
        screenOverlay(screenOverlay: ResourceLocation_): this;
        still(still: ResourceLocation_): this;
        flowing(flowing: ResourceLocation_): this;
        toString(): string;
        canHydrate(canHydrate: boolean): this;
        notifyAll(): void;
        dropOff(dropOff: number): this;
        explosionResistance(explosionResistance: number): this;
        adjacentPathType(adjacentPathType: Internal.BlockPathTypes_): this;
        slopeFindDistance(slopeFindDistance: number): this;
        viscosity(viscosity: number): this;
        hashCode(): number;
        supportsBloating(supportsBloating: boolean): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        rarity(rarity: Internal.Rarity_): this;
        canConvertToSource(canConvertToSource: boolean): this;
        get class(): typeof any
    }
    type FluidProperties$Builder_ = FluidProperties$Builder;
    class AbandonedApothecaryFeature extends Internal.Feature<Internal.AbandonedApothecaryConfiguration> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.AbandonedApothecaryConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.AbandonedApothecaryConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.AbandonedApothecaryConfiguration, Internal.Feature<Internal.AbandonedApothecaryConfiguration>>>;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type AbandonedApothecaryFeature_ = AbandonedApothecaryFeature;
    class WeightedStateProvider extends Internal.BlockStateProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList$Builder_<Internal.BlockState>)
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.BlockState>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple(arg0: Internal.Block_): Internal.SimpleStateProvider;
        hashCode(): number;
        static simple(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(): void;
        static "simple(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(arg0: number): void;
        getState(arg0: Internal.RandomSource_, arg1: BlockPos_): Internal.BlockState;
        equals(arg0: any): boolean;
        static "simple(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.SimpleStateProvider;
        get class(): typeof any
        readonly weightedList: Internal.SimpleWeightedRandomList<Internal.BlockState>;
        static readonly CODEC: Internal.Codec<Internal.WeightedStateProvider>;
    }
    type WeightedStateProvider_ = WeightedStateProvider;
    class StructureBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getSeed(): number;
        requestModelDataUpdate(): void;
        hasStructureName(): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        getStructureName(): string;
        isStructureLoadable(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        getMode(): Internal.StructureMode;
        getMetaData(): string;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getStructureSize(): Vec3i;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        setRemoved(): void;
        setSeed(arg0: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        saveStructure(arg0: boolean): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        setStructurePos(arg0: BlockPos_): void;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        setMode(arg0: Internal.StructureMode_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        setShowBoundingBox(arg0: boolean): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightX(): number;
        getStructurePath(): string;
        setIgnoreEntities(arg0: boolean): void;
        getPersistentData(): Internal.CompoundTag;
        setMetaData(arg0: string): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        setStructureSize(arg0: Vec3i_): void;
        sdl$dynamicLightTick(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getStructurePos(): BlockPos;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getShowBoundingBox(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean, arg2: Internal.StructureTemplate_): boolean;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        isPowered(): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        usedBy(arg0: Internal.Player_): boolean;
        "setStructureName(java.lang.String)"(arg0: string): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getRotation(): Internal.Rotation;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        setStructureName(arg0: string): void;
        setPowered(arg0: boolean): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setRotation(arg0: Internal.Rotation_): void;
        createdBy(arg0: Internal.LivingEntity_): void;
        static createRandom(arg0: number): Internal.RandomSource;
        setIntegrity(arg0: number): void;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        loadStructure(arg0: Internal.ServerLevel_): boolean;
        saveWithId(): Internal.CompoundTag;
        detectSize(): boolean;
        "setStructureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getMirror(): Internal.Mirror;
        onlyOpCanSetNbt(): boolean;
        setShowAir(arg0: boolean): void;
        getIntegrity(): number;
        serializeNBT(): Internal.Tag;
        saveStructure(): boolean;
        unloadStructure(): void;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        isIgnoreEntities(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        getShowAir(): boolean;
        equals(arg0: any): boolean;
        setStructureName(arg0: ResourceLocation_): void;
        setMirror(arg0: Internal.Mirror_): void;
        get seed(): number
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get structureName(): string
        get structureLoadable(): boolean
        get mode(): Internal.StructureMode
        get metaData(): string
        get structureSize(): Vec3i
        set seed(arg0: number)
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set structurePos(arg0: BlockPos_)
        set mode(arg0: Internal.StructureMode_)
        set showBoundingBox(arg0: boolean)
        get updatePacket(): Internal.Packet<any>
        get structurePath(): string
        set ignoreEntities(arg0: boolean)
        get persistentData(): Internal.CompoundTag
        set metaData(arg0: string)
        set structureSize(arg0: Vec3i_)
        set worldPosition(arg0: BlockPos_)
        get structurePos(): BlockPos
        get showBoundingBox(): boolean
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get blockState(): Internal.BlockState
        set "structureName(java.lang.String)"(arg0: string)
        get rotation(): Internal.Rotation
        set structureName(arg0: string)
        set powered(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        set integrity(arg0: number)
        set "structureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_)
        get level(): Internal.Level
        get mirror(): Internal.Mirror
        set showAir(arg0: boolean)
        get integrity(): number
        get ignoreEntities(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get showAir(): boolean
        set structureName(arg0: ResourceLocation_)
        set mirror(arg0: Internal.Mirror_)
        static readonly MAX_OFFSET_PER_AXIS: (48) & (number);
        static readonly MAX_SIZE_PER_AXIS: (48) & (number);
        static readonly AUTHOR_TAG: ("author") & (string);
    }
    type StructureBlockEntity_ = StructureBlockEntity;
    class ObjectCompletedEvent$ChapterEvent extends Internal.ObjectCompletedEvent<Internal.Chapter> {
        constructor(d: Internal.QuestProgressEventData_<Internal.Chapter>)
        getObject(): Internal.Chapter;
        getClass(): typeof any;
        getTime(): Internal.Date;
        toString(): string;
        getNotifiedPlayers(): Internal.List<Internal.ServerPlayer>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChapter(): Internal.Chapter;
        getOnlineMembers(): Internal.List<Internal.ServerPlayer>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        equals(arg0: any): boolean;
        get object(): Internal.Chapter
        get class(): typeof any
        get time(): Internal.Date
        get notifiedPlayers(): Internal.List<Internal.ServerPlayer>
        get chapter(): Internal.Chapter
        get onlineMembers(): Internal.List<Internal.ServerPlayer>
        get cancelable(): boolean
        get data(): Internal.TeamData
    }
    type ObjectCompletedEvent$ChapterEvent_ = ObjectCompletedEvent$ChapterEvent;
    class CustomFilterItemEventJS extends Internal.EventJS {
        constructor(event: any_)
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
        addStacks(stacks: Internal.Collection_<Internal.ItemStack>): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
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
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        addStack(stack: Internal.ItemStack_): void;
        get class(): typeof any
    }
    type CustomFilterItemEventJS_ = CustomFilterItemEventJS;
    class ViewportEvent$ComputeCameraAngles extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number, arg3: number, arg4: number, arg5: number)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        getRenderer(): Internal.GameRenderer;
        setYaw(arg0: number): void;
        getCamera(): Internal.Camera;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRoll(): number;
        isCancelable(): boolean;
        setPitch(arg0: number): void;
        getPitch(): number;
        getListenerList(): Internal.ListenerList;
        getPartialTick(): number;
        getResult(): Internal.Event$Result;
        toString(): string;
        notifyAll(): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        setRoll(arg0: number): void;
        getYaw(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get renderer(): Internal.GameRenderer
        set yaw(arg0: number)
        get camera(): Internal.Camera
        get canceled(): boolean
        get roll(): number
        get cancelable(): boolean
        set pitch(arg0: number)
        get pitch(): number
        get listenerList(): Internal.ListenerList
        get partialTick(): number
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        set roll(arg0: number)
        get yaw(): number
        get phase(): Internal.EventPriority
    }
    type ViewportEvent$ComputeCameraAngles_ = ViewportEvent$ComputeCameraAngles;
    interface Float2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.DoubleToIntFunction {
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Float2IntFunction;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        abstract "get(float)"(arg0: number): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2CharFunction;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        "containsKey(float)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2CharFunction<T>;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2CharFunction;
        "remove(float)"(arg0: number): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        "getOrDefault(float,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        containsKey(arg0: number): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2CharFunction;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Float2ByteFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2CharFunction;
        apply(arg0: number): string;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        size(): number;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Float2FloatFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Character)"(arg0: number, arg1: string): string;
        "put(float,char)"(arg0: number, arg1: string): string;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
    }
    type Float2CharFunction_ = Float2CharFunction;
    class GameProfile {
        constructor(arg0: Internal.UUID_, arg1: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isLegacy(): boolean;
        isComplete(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        getProperties(): Internal.PropertyMap;
        equals(arg0: any): boolean;
        get class(): typeof any
        get legacy(): boolean
        get complete(): boolean
        get name(): string
        get id(): Internal.UUID
        get properties(): Internal.PropertyMap
    }
    type GameProfile_ = GameProfile;
    interface BlockEntityAccessor {
        abstract callSaveMetadata(arg0: Internal.CompoundTag_): void;
        (arg0: Internal.CompoundTag): void;
    }
    type BlockEntityAccessor_ = ((arg0: Internal.CompoundTag)=> void) | BlockEntityAccessor;
    class Connection extends Internal.SimpleChannelInboundHandler<Internal.Packet<any>> implements Internal.ChannelInfoHolder {
        constructor(arg0: Internal.PacketFlow_)
        channelActive(arg0: Internal.ChannelHandlerContext_): void;
        isMemoryConnection(): boolean;
        handleDisconnection(): void;
        notify(): void;
        setListener(arg0: Internal.PacketListener_): void;
        getAverageReceivedPackets(): number;
        getPacketListener(): Internal.PacketListener;
        userEventTriggered(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        handlerAdded(arg0: Internal.ChannelHandlerContext_): void;
        isConnected(): boolean;
        send(arg0: Internal.Packet_<any>, arg1: Internal.PacketSendListener_): void;
        setupCompression(arg0: number, arg1: boolean): void;
        isEncrypted(): boolean;
        isSharable(): boolean;
        getAverageSentPackets(): number;
        getDirection(): Internal.PacketFlow;
        handlerRemoved(arg0: Internal.ChannelHandlerContext_): void;
        static configureSerialization(arg0: Internal.ChannelPipeline_, arg1: Internal.PacketFlow_): void;
        tick(): void;
        getRemoteAddress(): Internal.SocketAddress;
        channelInactive(arg0: Internal.ChannelHandlerContext_): void;
        setReadOnly(): void;
        wait(): void;
        channelUnregistered(arg0: Internal.ChannelHandlerContext_): void;
        getSending(): Internal.PacketFlow;
        channelRegistered(arg0: Internal.ChannelHandlerContext_): void;
        getClass(): typeof any;
        static connectToLocalServer(arg0: Internal.SocketAddress_): Internal.Connection;
        acceptInboundMessage(arg0: any): boolean;
        static connectToServer(arg0: Internal.InetSocketAddress_, arg1: boolean): Internal.Connection;
        setProtocol(arg0: Internal.ConnectionProtocol_): void;
        wait(arg0: number, arg1: number): void;
        channelWritabilityChanged(arg0: Internal.ChannelHandlerContext_): void;
        setEncryptionKey(arg0: Internal.Cipher_, arg1: Internal.Cipher_): void;
        isConnecting(): boolean;
        channelRead(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        disconnect(arg0: net.minecraft.network.chat.Component_): void;
        handler$zzf000$on(arg0: Internal.ChannelHandlerContext_, arg1: Internal.Throwable_, arg2: Internal.CallbackInfo_): void;
        getDisconnectedReason(): net.minecraft.network.chat.Component;
        toString(): string;
        getPendingChannelsNames(): Internal.Collection<any>;
        notifyAll(): void;
        channelReadComplete(arg0: Internal.ChannelHandlerContext_): void;
        channel(): io.netty.channel.Channel;
        static connect(arg0: Internal.InetSocketAddress_, arg1: boolean, arg2: Internal.Connection_): Internal.ChannelFuture;
        hashCode(): number;
        getReceiving(): Internal.PacketFlow;
        wait(arg0: number): void;
        exceptionCaught(arg0: Internal.ChannelHandlerContext_, arg1: Internal.Throwable_): void;
        equals(arg0: any): boolean;
        send(arg0: Internal.Packet_<any>): void;
        get memoryConnection(): boolean
        set listener(arg0: Internal.PacketListener_)
        get averageReceivedPackets(): number
        get packetListener(): Internal.PacketListener
        get connected(): boolean
        get encrypted(): boolean
        get sharable(): boolean
        get averageSentPackets(): number
        get direction(): Internal.PacketFlow
        get remoteAddress(): Internal.SocketAddress
        get sending(): Internal.PacketFlow
        get class(): typeof any
        set protocol(arg0: Internal.ConnectionProtocol_)
        get connecting(): boolean
        get disconnectedReason(): net.minecraft.network.chat.Component
        get pendingChannelsNames(): Internal.Collection<any>
        get receiving(): Internal.PacketFlow
        static readonly PACKET_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly LOCAL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.DefaultEventLoopGroup>;
        static readonly NETWORK_EPOLL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.EpollEventLoopGroup>;
        static readonly PACKET_SENT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ATTRIBUTE_PROTOCOL: Internal.AttributeKey<Internal.ConnectionProtocol>;
        channel: io.netty.channel.Channel;
        static readonly PACKET_RECEIVED_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ROOT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly NETWORK_WORKER_GROUP: Internal.LazyLoadedValue<Internal.NioEventLoopGroup>;
    }
    type Connection_ = Connection;
}
declare namespace org.joml {
    class Matrix3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3dc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        "transform(org.joml.Vector3f)"(arg0: Vector3f_): Vector3f;
        mapXZnY(arg0: org.joml.Matrix3d_): this;
        reflect(arg0: Internal.Quaterniondc_): this;
        rotationX(arg0: number): this;
        mapnZXY(arg0: org.joml.Matrix3d_): this;
        mapnYXnZ(arg0: org.joml.Matrix3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapnZnXY(): this;
        mapZXnY(): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_, arg1: org.joml.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): number;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: org.joml.Matrix3d_): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        set(arg0: Internal.Matrix4fc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        mapnZYnX(): this;
        "mul(org.joml.Matrix3dc,org.joml.Matrix3d)"(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        "get(double[])"(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapYZnX(): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        mapnYnZnX(): this;
        normal(arg0: org.joml.Matrix3d_): this;
        "reflection(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        set(arg0: Internal.Matrix3fc_): this;
        obliqueZ(arg0: number, arg1: number): this;
        rotationY(arg0: number): this;
        equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        "scale(double)"(arg0: number): this;
        mapYXnZ(arg0: org.joml.Matrix3d_): this;
        mapYnZnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): this;
        mapZnYX(): this;
        mapYnXnZ(arg0: org.joml.Matrix3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: org.joml.Matrix3d_): this;
        set(arg0: Internal.Matrix2dc_): this;
        mapZXY(arg0: org.joml.Matrix3d_): this;
        mapnYnXnZ(arg0: org.joml.Matrix3d_): this;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        setTransposed(arg0: Internal.Matrix3fc_): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        obliqueZ(arg0: number, arg1: number, arg2: org.joml.Matrix3d_): this;
        get(arg0: org.joml.Matrix3d_): this;
        transform(arg0: Vector3f_): Vector3f;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): this;
        "get(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): this;
        wait(arg0: number): void;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapZYnX(): this;
        set(arg0: Internal.FloatBuffer_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): this;
        rotationZ(arg0: number): this;
        transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        mul(arg0: Internal.Matrix3dc_): this;
        isFinite(): boolean;
        mapYXZ(arg0: org.joml.Matrix3d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number): this;
        setSkewSymmetric(arg0: number, arg1: number, arg2: number): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        set(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "setTransposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mapYnXZ(): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Matrix3dc_): this;
        mapYnZX(arg0: org.joml.Matrix3d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        get(arg0: number[], arg1: number): number[];
        mapnYnXZ(arg0: org.joml.Matrix3d_): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): this;
        m02(): number;
        mapZnYX(arg0: org.joml.Matrix3d_): this;
        quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        mapnZXnY(): this;
        mapYXnZ(): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: org.joml.Matrix3d_): this;
        setTransposed(arg0: Internal.Matrix3dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        getToAddress(arg0: number): Internal.Matrix3dc;
        equals(arg0: any): boolean;
        mapZYX(arg0: org.joml.Matrix3d_): this;
        mapnYnZX(arg0: org.joml.Matrix3d_): this;
        scale(arg0: number, arg1: org.joml.Matrix3d_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        rotateLocalZ(arg0: number, arg1: org.joml.Matrix3d_): this;
        mapXZY(): this;
        "mul(org.joml.Matrix3fc,org.joml.Matrix3d)"(arg0: Internal.Matrix3fc_, arg1: org.joml.Matrix3d_): this;
        mapnZXY(): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        m10(arg0: number): this;
        mapXZnY(): this;
        lerp(arg0: Internal.Matrix3dc_, arg1: number): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        negateY(): this;
        mapnXZY(): this;
        setFromAddress(arg0: number): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: org.joml.Matrix3d_): this;
        mapYZnX(arg0: org.joml.Matrix3d_): this;
        setRow(arg0: number, arg1: number, arg2: number, arg3: number): this;
        normal(): this;
        m21(arg0: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapnYXnZ(): this;
        mapnZXnY(arg0: org.joml.Matrix3d_): this;
        get(arg0: number[], arg1: number): number[];
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: org.joml.Matrix3d_): this;
        mapYZX(): this;
        mul(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        "set(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transpose(arg0: org.joml.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYXZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4d_, arg1: org.joml.Matrix3d_): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        notify(): void;
        "set(int,int,double)"(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        mapnYZnX(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotateY(arg0: number, arg1: org.joml.Matrix3d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        mapnZYX(arg0: org.joml.Matrix3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        mapnZYX(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        mapYZX(arg0: org.joml.Matrix3d_): this;
        cofactor(arg0: org.joml.Matrix3d_): this;
        mapnYZnX(arg0: org.joml.Matrix3d_): this;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapXnZY(arg0: org.joml.Matrix3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: org.joml.Matrix3d_): this;
        mapZnXY(arg0: org.joml.Matrix3d_): this;
        mapnYXZ(arg0: org.joml.Matrix3d_): this;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        reflection(arg0: Internal.Quaterniondc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZnXY(): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        "get(float[])"(arg0: number[]): number[];
        negateX(arg0: org.joml.Matrix3d_): this;
        cofactor(): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number, arg1: org.joml.Matrix3d_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mapXnZY(): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: number): number;
        "setTransposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        hashCode(): number;
        zero(): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapXZY(arg0: org.joml.Matrix3d_): this;
        set(arg0: number[]): this;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: org.joml.Matrix3d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        setRow(arg0: number, arg1: Internal.Vector3dc_): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapZnYnX(arg0: org.joml.Matrix3d_): this;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        swap(arg0: org.joml.Matrix3d_): this;
        m20(): number;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapXnYnZ(): this;
        negateY(arg0: org.joml.Matrix3d_): this;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): this;
        rotateLocalY(arg0: number): this;
        m02(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        "scaling(double)"(arg0: number): this;
        rotateY(arg0: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnZnYnX(arg0: org.joml.Matrix3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXZY(arg0: org.joml.Matrix3d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        getClass(): typeof any;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mapZYX(): this;
        add(arg0: Internal.Matrix3dc_): this;
        transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mulLocal(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): this;
        mapYnZX(): this;
        mapnXnYnZ(): this;
        mapnXnYZ(): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number, arg1: org.joml.Matrix3d_): this;
        rotateX(arg0: number): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mulComponentWise(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        negateZ(arg0: org.joml.Matrix3d_): this;
        "set(double[])"(arg0: number[]): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix3dc_): this;
        scale(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalX(arg0: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulLocal(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        m01(arg0: number): this;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        mapnXYnZ(): this;
        mapnXnZY(arg0: org.joml.Matrix3d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotateLocalX(arg0: number, arg1: org.joml.Matrix3d_): this;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        m12(arg0: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mapnYZX(): this;
        mapnXnZnY(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): this;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mapXnZnY(): this;
        mapZnXnY(arg0: org.joml.Matrix3d_): this;
        sub(arg0: Internal.Matrix3dc_): this;
        "scale(double,org.joml.Matrix3d)"(arg0: number, arg1: org.joml.Matrix3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        m00(arg0: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateLocalY(arg0: number, arg1: org.joml.Matrix3d_): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnXnYZ(arg0: org.joml.Matrix3d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        invert(): this;
        scale(arg0: Internal.Vector3dc_): this;
        mapnZYnX(arg0: org.joml.Matrix3d_): this;
        negateZ(): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        mapnXnZY(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        set(arg0: number[]): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        m22(arg0: number): this;
        mapnYZX(arg0: org.joml.Matrix3d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnZnXnY(arg0: org.joml.Matrix3d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYnZnX(arg0: org.joml.Matrix3d_): this;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        identity(): this;
        m01(): number;
        mapnZnXY(arg0: org.joml.Matrix3d_): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZXnY(arg0: org.joml.Matrix3d_): this;
        mapnZnYnX(): this;
        mapXnYnZ(arg0: org.joml.Matrix3d_): this;
        mapZnYnX(): this;
        get(arg0: number[]): number[];
        "reflection(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m12(): number;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        clone(): any;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        mapnZnXnY(): this;
        mapnXZnY(): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4f_, arg1: org.joml.Matrix3d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnYnXZ(): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        get(arg0: number[]): number[];
        determinant(): number;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        invert(arg0: org.joml.Matrix3d_): this;
        toString(): string;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: org.joml.Matrix3d_): this;
        notifyAll(): void;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnZnYX(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapYnXZ(arg0: org.joml.Matrix3d_): this;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m22(): number;
        mapZnXnY(): this;
        "reflect(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): this;
        mapXnZnY(arg0: org.joml.Matrix3d_): this;
        mapYXZ(): this;
        reflect(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): number;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: org.joml.Matrix3d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        scaling(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnZnY(arg0: org.joml.Matrix3d_): this;
        m10(): number;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnXZnY(arg0: org.joml.Matrix3d_): this;
        wait(arg0: number, arg1: number): void;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXnZ(): this;
        m21(): number;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZYnX(arg0: org.joml.Matrix3d_): this;
        reflection(arg0: Internal.Vector3dc_): this;
        rotateLocalZ(arg0: number): this;
        set(arg0: Internal.Matrix2fc_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapZXY(): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        mapYnXnZ(): this;
        mapnXYnZ(arg0: org.joml.Matrix3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        set(arg0: Internal.Quaternionfc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYnZnX(arg0: org.joml.Matrix3d_): this;
        mapnXnYnZ(arg0: org.joml.Matrix3d_): this;
        mapnZnYX(arg0: org.joml.Matrix3d_): this;
        "reflect(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set transposed(arg0: Internal.Matrix3fc_)
        get finite(): boolean
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "transposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set floats(arg0: Internal.ByteBuffer_)
        set transposed(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set fromAddress(arg0: number)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(float[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "transposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m12: number;
        m02: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m22: number;
        m20: number;
    }
    type Matrix3d_ = Matrix3d;
}
declare namespace com.gregtechceu.gtceu.api.block {
    abstract class PipeBlock <PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType, WorldPipeNetType extends Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>> extends Internal.Block implements Internal.SimpleWaterloggedBlock, Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: PipeType)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        abstract getBlockEntityType(): Internal.BlockEntityType<Internal.PipeBlockEntity<PipeType, NodeDataType>>;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        abstract getFallbackType(): NodeDataType;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.PipeBlockEntity<PipeType, NodeDataType>;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        abstract createPipeModel(arg0: Internal.GTBlockstateProvider_): Internal.PipeModel;
        getSettings(): Internal.BlockBehaviour$Properties;
        createProperties(arg0: Internal.BlockState_, arg1: Internal.ItemStack_): NodeDataType;
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
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
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        getShapes(arg0: number): Internal.VoxelShape;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        handler$ehp000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        canConnect(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        abstract createRawData(arg0: Internal.BlockState_, arg1: Internal.ItemStack_): NodeDataType;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
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
        handler$bpe000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
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
        updateActiveNodeStatus(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.IPipeNode_<PipeType, NodeDataType>): void;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
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
        getPipeTile(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.IPipeNode<PipeType, NodeDataType>;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        abstract createProperties(arg0: Internal.IPipeNode_<PipeType, NodeDataType>): NodeDataType;
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
        abstract getWorldPipeNet(arg0: Internal.ServerLevel_): WorldPipeNetType;
        handler$fmp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getPipeTuneTool(): GTToolType;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.PipeBlockEntity<PipeType, NodeDataType>;
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
        abstract canPipesConnect(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_, arg2: Internal.IPipeNode_<PipeType, NodeDataType>): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        abstract canPipeConnectToBlock(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_, arg2: Internal.BlockEntity_): boolean;
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
        get blockEntityType(): Internal.BlockEntityType<Internal.PipeBlockEntity<PipeType, NodeDataType>>
        get fallbackType(): NodeDataType
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
        get pipeTuneTool(): GTToolType
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
        readonly pipeType: PipeType;
    }
    type PipeBlock_<PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType, WorldPipeNetType extends Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>> = PipeBlock<PipeType, NodeDataType, WorldPipeNetType>;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntUnaryOperator extends Internal.IntUnaryOperator, Internal.UnaryOperator<number> {
        /**
         * @deprecated
        */
        "apply(java.lang.Integer)"(arg0: number): number;
        abstract apply(arg0: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any): any;
        /**
         * @deprecated
        */
        "apply(java.lang.Object)"(arg0: any): any;
        "andThen(java.util.function.Function)"<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        apply(arg0: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        compose<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        "compose(java.util.function.Function)"<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        identity(): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        abstract "apply(int)"(arg0: number): number;
        negation(): this;
    }
    type IntUnaryOperator_ = IntUnaryOperator;
}
declare namespace net.irisshaders.iris.mixin {
    interface GameRendererAccessor {
        abstract getRenderHand(): boolean;
        abstract getPanoramicMode(): boolean;
        abstract invokeGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        abstract invokeBobHurt(arg0: Internal.PoseStack_, arg1: number): void;
        abstract invokeBobView(arg0: Internal.PoseStack_, arg1: number): void;
        get renderHand(): boolean
        get panoramicMode(): boolean
    }
    type GameRendererAccessor_ = GameRendererAccessor;
}
declare namespace me.jellysquid.mods.lithium.mixin.util.entity_movement_tracking {
    interface ServerWorldAccessor {
        abstract getEntityManager(): Internal.PersistentEntitySectionManager<Internal.Entity>;
        get entityManager(): Internal.PersistentEntitySectionManager<Internal.Entity>
        (): Internal.PersistentEntitySectionManager_<Internal.Entity>;
    }
    type ServerWorldAccessor_ = (()=> Internal.PersistentEntitySectionManager_<Internal.Entity>) | ServerWorldAccessor;
}
declare namespace me.fzzyhmstrs.particle_core.mixins {
    interface ParticleAccessor {
        abstract getX(): number;
        abstract getY(): number;
        abstract getZ(): number;
        get x(): number
        get y(): number
        get z(): number
    }
    type ParticleAccessor_ = ParticleAccessor;
}
