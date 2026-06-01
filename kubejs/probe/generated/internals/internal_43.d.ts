/// <reference path="./internal_*.d.ts" />
declare namespace com.simibubi.create.foundation.mixin.accessor {
    interface LivingEntityAccessor {
        abstract create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        (arg0: Internal.ItemStack, arg1: number): void;
    }
    type LivingEntityAccessor_ = ((arg0: Internal.ItemStack, arg1: number)=> void) | LivingEntityAccessor;
}
declare namespace com.supermartijn642.core.mixin {
    interface BlockPropertiesAccessor {
        abstract getLootTableSupplier(): Internal.Supplier<ResourceLocation>;
        abstract setLootTableSupplier(supplier: Internal.Supplier_<ResourceLocation>): void;
        get lootTableSupplier(): Internal.Supplier<ResourceLocation>
        set lootTableSupplier(supplier: Internal.Supplier_<ResourceLocation>)
    }
    type BlockPropertiesAccessor_ = BlockPropertiesAccessor;
}
declare namespace com.google.common.base {
    interface Predicate <T> extends Internal.Predicate<T> {
        negate(): Internal.Predicate<T>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        test(arg0: T): boolean;
        and(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract apply(arg0: T): boolean;
        abstract equals(arg0: any): boolean;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
    }
    type Predicate_<T> = Predicate<T>;
}
declare namespace Internal {
    class Advancement {
        constructor(arg0: ResourceLocation_, arg1: Internal.Advancement_, arg2: Internal.DisplayInfo_, arg3: Internal.AdvancementRewards_, arg4: Internal.Map_<string, Internal.Criterion>, arg5: string[][], arg6: boolean)
        getClass(): typeof any;
        getRoot(): this;
        getCriteria(): Internal.Map<string, Internal.Criterion>;
        toString(): string;
        sendsTelemetryEvent(): boolean;
        notifyAll(): void;
        addChild(arg0: Internal.Advancement_): void;
        notify(): void;
        static getRoot(arg0: Internal.Advancement_): Internal.Advancement;
        wait(arg0: number, arg1: number): void;
        getParent(): this;
        hashCode(): number;
        getId(): ResourceLocation;
        getDisplay(): Internal.DisplayInfo;
        getRewards(): Internal.AdvancementRewards;
        deconstruct(): Internal.Advancement$Builder;
        getRequirements(): string[][];
        wait(): void;
        getChatComponent(): net.minecraft.network.chat.Component;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getMaxCriteraRequired(): number;
        getChildren(): Internal.Iterable<Internal.Advancement>;
        get class(): typeof any
        get root(): Internal.Advancement
        get criteria(): Internal.Map<string, Internal.Criterion>
        get parent(): Internal.Advancement
        get id(): ResourceLocation
        get display(): Internal.DisplayInfo
        get rewards(): Internal.AdvancementRewards
        get requirements(): string[][]
        get chatComponent(): net.minecraft.network.chat.Component
        get maxCriteraRequired(): number
        get children(): Internal.Iterable<Internal.Advancement>
        requirements: string[][];
        criteria: Internal.Map<string, Internal.Criterion>;
    }
    type Advancement_ = Advancement;
    interface SlidingDoorMode$IHasDoorMode {
        abstract railways$getSlidingDoorMode(): Internal.SlidingDoorMode;
        (): Internal.SlidingDoorMode_;
    }
    type SlidingDoorMode$IHasDoorMode_ = (()=> Internal.SlidingDoorMode_) | SlidingDoorMode$IHasDoorMode;
    interface RenderDataBlockEntity {
        getRenderData(): any;
        get renderData(): any
    }
    type RenderDataBlockEntity_ = RenderDataBlockEntity;
    class EntitySelector {
        constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: Internal.Predicate_<Internal.Entity>, arg4: Internal.MinMaxBounds$Doubles_, arg5: Internal.Function_<Vec3d, Vec3d>, arg6: Internal.AABB_, arg7: Internal.BiConsumer_<Vec3d, Internal.List<Internal.Entity>>, arg8: boolean, arg9: string, arg10: Internal.UUID_, arg11: Internal.EntityType_<any>, arg12: boolean)
        getClass(): typeof any;
        usesSelector(): boolean;
        findPlayers(arg0: Internal.CommandSourceStack_): Internal.List<Internal.ServerPlayer>;
        toString(): string;
        findEntities(arg0: Internal.CommandSourceStack_): Internal.List<Internal.Entity>;
        notifyAll(): void;
        includesEntities(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isSelfSelector(): boolean;
        static joinNames(arg0: Internal.List_<Internal.Entity>): net.minecraft.network.chat.Component;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        findSingleEntity(arg0: Internal.CommandSourceStack_): Internal.Entity;
        findSinglePlayer(arg0: Internal.CommandSourceStack_): Internal.ServerPlayer;
        equals(arg0: any): boolean;
        isWorldLimited(): boolean;
        getMaxResults(): number;
        get class(): typeof any
        get selfSelector(): boolean
        get worldLimited(): boolean
        get maxResults(): number
        readonly predicate: Internal.Predicate<Internal.Entity>;
        static readonly ORDER_ARBITRARY: Internal.BiConsumer<Vec3d, Internal.List<Internal.Entity>>;
        static readonly INFINITE: (2147483647) & (number);
    }
    type EntitySelector_ = EntitySelector;
    abstract class PermissionCollection implements Internal.Serializable {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        abstract implies(arg0: Internal.Permission_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        setReadOnly(): void;
        wait(): void;
        elementsAsStream(): Internal.Stream<Internal.Permission>;
        abstract elements(): Internal.Enumeration<Internal.Permission>;
        wait(arg0: number): void;
        isReadOnly(): boolean;
        equals(arg0: any): boolean;
        abstract add(arg0: Internal.Permission_): void;
        get class(): typeof any
        get readOnly(): boolean
    }
    type PermissionCollection_ = PermissionCollection;
    interface EntryMessage extends Internal.FlowMessage {
        abstract getFormattedMessage(): string;
        abstract getParameters(): any[];
        abstract getFormat(): string;
        abstract getMessage(): org.apache.logging.log4j.message.Message;
        abstract getText(): string;
        abstract getThrowable(): Internal.Throwable;
        get formattedMessage(): string
        get parameters(): any[]
        get format(): string
        get message(): org.apache.logging.log4j.message.Message
        get text(): string
        get throwable(): Internal.Throwable
    }
    type EntryMessage_ = EntryMessage;
    class FilterSlot <T> {
        constructor(arg0: number, arg1: number, arg2: number, arg3: T)
        getClass(): typeof any;
        getFilter(): T;
        getX(): number;
        toString(): string;
        getY(): number;
        setColor(arg0: number): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "setColor(net.minecraft.world.item.DyeColor)"(arg0: Internal.DyeColor_): void;
        getColor(): number;
        hashCode(): number;
        setFilter(arg0: T): void;
        wait(): void;
        wait(arg0: number): void;
        setColor(arg0: Internal.DyeColor_): void;
        equals(arg0: any): boolean;
        getFilterID(): number;
        "setColor(int)"(arg0: number): void;
        get class(): typeof any
        get filter(): T
        get x(): number
        get y(): number
        set color(arg0: number)
        set "color(net.minecraft.world.item.DyeColor)"(arg0: Internal.DyeColor_)
        get color(): number
        set filter(arg0: T)
        set color(arg0: Internal.DyeColor_)
        get filterID(): number
        set "color(int)"(arg0: number)
    }
    type FilterSlot_<T> = FilterSlot<T>;
    interface LongStream$Builder extends Internal.LongConsumer {
        andThen(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        abstract build(): Internal.LongStream;
        add(arg0: number): this;
        abstract accept(arg0: number): void;
    }
    type LongStream$Builder_ = LongStream$Builder;
    interface WeightedDynamicRegistry$IDimensional {
        matches<T extends Internal.WeightedDynamicRegistry$IDimensional>(arg0: Internal.Level_): Internal.Predicate<T>;
        abstract getDimensions(): Internal.Set<ResourceLocation>;
        matches<T extends Internal.WeightedDynamicRegistry$IDimensional>(arg0: ResourceLocation_): Internal.Predicate<T>;
        "matches(net.minecraft.world.level.Level)"<T extends Internal.WeightedDynamicRegistry$IDimensional>(arg0: Internal.Level_): Internal.Predicate<T>;
        "matches(net.minecraft.resources.ResourceLocation)"<T extends Internal.WeightedDynamicRegistry$IDimensional>(arg0: ResourceLocation_): Internal.Predicate<T>;
        get dimensions(): Internal.Set<ResourceLocation>
        (): Internal.Set_<ResourceLocation>;
    }
    type WeightedDynamicRegistry$IDimensional_ = WeightedDynamicRegistry$IDimensional | (()=> Internal.Set_<ResourceLocation>);
    class Pufferfish extends Internal.AbstractFish implements Internal.PufferfishAccessor {
        constructor(arg0: Internal.EntityType_<Internal.Pufferfish>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        getXRot(): number;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
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
        redirect$bnb000$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
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
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getBlockY(): number;
        redirect$fki000$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isSpectator(): boolean;
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
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        handler$cpo000$adastra$tick(ci: Internal.CallbackInfo_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
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
        handler$bog000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        bo$refreshEntityData(data: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        handler$cbh000$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
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
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        modifyReturnValue$hfa000$create$onFireImmune(arg0: boolean): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        handler$eno000$removed(arg0: Internal.CallbackInfo_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        ad_astra_giselle_addon$getCustomData(): Internal.CompoundTag;
        getInflateCounter(): number;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
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
        handler$efe000$onRemove(ci: Internal.CallbackInfo_): void;
        handler$cpo000$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        handler$gkb000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        handler$bnb000$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
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
        handler$dcb001$saveWithoutId(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        isJumping(): boolean;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        callActuallyHurt(arg0: DamageSource_, arg1: number): void;
        setLastAttackedTicks(arg0: number): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        callGetSoundVolume(): number;
        quark$lastHurtByPlayer(): Internal.Player;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        updateFluidOnEyes(): void;
        handler$gjl000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        bookshelf$makePoofParticles(): void;
        getPickupSound(): Internal.SoundEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        shouldUpdateDynamicLight(): boolean;
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
        getTotalMovementSpeed(): number;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        fromBucket(): boolean;
        handler$ckn000$shield(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        handler$bnb000$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
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
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
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
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
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
        modifyExpressionValue$hfa000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
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
        handler$gkb000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        getDeflateTimer(): number;
        isAlive(): boolean;
        biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$eno001$onRemove(arg0: Internal.CallbackInfo_): void;
        getGoalSelector(): Internal.GoalSelector;
        getDataMap(): Internal.Map<any, any>;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
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
        handler$gkb000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isDirty(): boolean;
        saveToBucketTag(arg0: Internal.ItemStack_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
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
        setRotation(yaw: number, pitch: number): void;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDynamicLightEnabled(): boolean;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        handler$bnb000$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        modifyExpressionValue$ena001$elytraOverride(arg0: boolean): boolean;
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
        handler$bfa000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        redirect$bnb000$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
        getCombatTracker(): Internal.CombatTracker;
        setAnimationTick(arg0: number): void;
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
        localvar$cle000$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        biomancy$getDeathSound(): Internal.SoundEvent;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        setPuffState(arg0: number): void;
        canBeSeenByAnyone(): boolean;
        handler$gjl000$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isFullyFrozen(): boolean;
        getLastPos(): BlockPos;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$efe005$onTick(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
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
        biomancy$getAmbientSound(): Internal.SoundEvent;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        handler$gkb000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
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
        handler$gkj000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        callDoWaterSplashEffect(): void;
        getLastHurtByMob(): Internal.LivingEntity;
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
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        handler$cpo000$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
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
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        handler$dcc001$tick(arg0: Internal.CallbackInfo_): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
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
        redirect$bnb000$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        static targetConditions_$md$f96da1$0(): Internal.TargetingConditions;
        getEyeY(): number;
        handler$cle000$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
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
        biomancy$getVoicePitch(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setInflateCounter(arg0: number): void;
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
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        handler$gkb000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getEntries(arg0: boolean): Internal.Set<any>;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
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
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setFromBucket(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
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
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        modifyExpressionValue$ena000$eytraValidOverride(arg0: boolean): boolean;
        getFeetBlockState(): Internal.BlockState;
        handler$dcb001$load(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        ad_astra_giselle_addon$getProofDuration(arg0: Internal.ProofAbstractUtils_): number;
        setSharedFlag(arg0: number, arg1: boolean): void;
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
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        abstract invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        getTarget(): Internal.LivingEntity;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        redirect$bnb000$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
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
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
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
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
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
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        getPuffState(): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        localvar$bmo000$apoth_checkFallDamageWithGravity(arg0: number): number;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        lithiumOnBlockCacheSet(newState: Internal.BlockState_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        isInFluidType(predicate: Internal.BiPredicate_<any, any>, forAllTypes: boolean): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        handler$cpp000$adastra$checkSpawnObstruction(levelReader: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
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
        handler$eno009$onTick(arg0: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        handler$gkb000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
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
        handler$ene008$onTick(arg0: Internal.CallbackInfo_): void;
        setDeflateTimer(arg0: number): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        getBucketItemStack(): Internal.ItemStack;
        handler$fhb000$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
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
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        redirect$bnb000$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        static targetConditions(): Internal.TargetingConditions;
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
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        handler$gkb000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        handler$gkb000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
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
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get inflateCounter(): number
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
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        get jumping(): boolean
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get pickupSound(): Internal.SoundEvent
        get blocking(): boolean
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
        get deflateTimer(): number
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
        set puffState(arg0: number)
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
        set inflateCounter(arg0: number)
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
        set fromBucket(arg0: boolean)
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
        get puffState(): number
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
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set deflateTimer(arg0: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get bucketItemStack(): Internal.ItemStack
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get dynamicLightWorld(): Internal.Level
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
        static readonly STATE_FULL: (2) & (number);
        static readonly STATE_SMALL: (0) & (number);
        static readonly STATE_MID: (1) & (number);
    }
    type Pufferfish_ = Pufferfish;
    class ThreePartBlock extends Internal.Enum<Internal.ThreePartBlock> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.ThreePartBlock;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        "compareTo(com.hollingsworth.arsnouveau.common.block.ThreePartBlock)"(arg0: Internal.ThreePartBlock_): number;
        toString(): string;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.ThreePartBlock;
        notifyAll(): void;
        notify(): void;
        static values(): Internal.ThreePartBlock[];
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ThreePartBlock>>;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        compareTo(arg0: Internal.ThreePartBlock_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get declaringClass(): typeof Internal.ThreePartBlock
        get class(): typeof any
        get serializedName(): string
        static readonly HEAD: (Internal.ThreePartBlock) & (Internal.ThreePartBlock);
        static readonly OTHER: (Internal.ThreePartBlock) & (Internal.ThreePartBlock);
        static readonly FOOT: (Internal.ThreePartBlock) & (Internal.ThreePartBlock);
    }
    type ThreePartBlock_ = "foot" | "other" | "head" | ThreePartBlock;
    class RenderInfo$DisplayItem {
        constructor(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: Internal.DisplaySide_)
        getClass(): typeof any;
        toString(): string;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getRotation(): number;
        wait(): void;
        wait(arg0: number): void;
        getSlotIndex(): number;
        equals(arg0: any): boolean;
        getDisplaySide(): Internal.DisplaySide;
        get class(): typeof any
        get item(): Internal.ItemStack
        get rotation(): number
        get slotIndex(): number
        get displaySide(): Internal.DisplaySide
    }
    type RenderInfo$DisplayItem_ = RenderInfo$DisplayItem;
    interface NonNullBiFunction <T, U, R> extends Internal.BiFunction<T, U, R> {
        abstract apply(arg0: T, arg1: U): R;
        andThen<V>(arg0: Internal.Function_<R, V>): Internal.BiFunction<T, U, V>;
        (arg0: T, arg1: U): R;
    }
    type NonNullBiFunction_<T, U, R> = ((arg0: T, arg1: U)=> R) | NonNullBiFunction<T, U, R>;
    class FactoryPanelBlock$PanelSlot extends Internal.Enum<Internal.FactoryPanelBlock$PanelSlot> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(com.simibubi.create.content.logistics.factoryBoard.FactoryPanelBlock$PanelSlot)"(arg0: Internal.FactoryPanelBlock$PanelSlot_): number;
        static values(): Internal.FactoryPanelBlock$PanelSlot[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FactoryPanelBlock$PanelSlot>>;
        toString(): string;
        getDeclaringClass(): typeof Internal.FactoryPanelBlock$PanelSlot;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.FactoryPanelBlock$PanelSlot;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.FactoryPanelBlock$PanelSlot_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.FactoryPanelBlock$PanelSlot
        static readonly TOP_RIGHT: (Internal.FactoryPanelBlock$PanelSlot) & (Internal.FactoryPanelBlock$PanelSlot);
        xOffset: number;
        static readonly BOTTOM_LEFT: (Internal.FactoryPanelBlock$PanelSlot) & (Internal.FactoryPanelBlock$PanelSlot);
        static readonly BOTTOM_RIGHT: (Internal.FactoryPanelBlock$PanelSlot) & (Internal.FactoryPanelBlock$PanelSlot);
        static readonly TOP_LEFT: (Internal.FactoryPanelBlock$PanelSlot) & (Internal.FactoryPanelBlock$PanelSlot);
        yOffset: number;
    }
    type FactoryPanelBlock$PanelSlot_ = "bottom_right" | "top_left" | FactoryPanelBlock$PanelSlot | "top_right" | "bottom_left";
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
    */
    class DetectorBlockEventJS extends Internal.LevelEventJS {
        constructor(i: string, l: Internal.Level_, p: BlockPos_, pow: boolean)
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
         * The id of the detector block when it was registered.
        */
        getDetectorId(): string;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * The level where the detector block is located.
        */
        getLevel(): Internal.Level;
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
        /**
         * If the detector block is powered.
        */
        isPowered(): boolean;
        getServer(): Internal.MinecraftServer;
        /**
         * The detector block.
        */
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        /**
         * The id of the detector block when it was registered.
        */
        get detectorId(): string
        /**
         * The level where the detector block is located.
        */
        get level(): Internal.Level
        /**
         * If the detector block is powered.
        */
        get powered(): boolean
        get server(): Internal.MinecraftServer
        /**
         * The detector block.
        */
        get block(): Internal.BlockContainerJS
    }
    type DetectorBlockEventJS_ = DetectorBlockEventJS;
    interface ISwitchDisabledEdge {
        abstract isAutomaticallySelected(): boolean;
        abstract ackAutomaticSelection(): void;
        isEnabled(edge: Internal.TrackEdge_): boolean;
        abstract setAutomatic(arg0: boolean): void;
        automaticallySelect(edge: Internal.TrackEdge_): void;
        abstract getAutomaticallySelectedPriority(): number;
        abstract setAutomaticallySelected(): void;
        abstract isAutomatic(): boolean;
        abstract setEnabled(arg0: boolean): void;
        isAutomatic(edge: Internal.TrackEdge_): boolean;
        isDisabled(edge: Internal.TrackEdge_): boolean;
        abstract isEnabled(): boolean;
        get automaticallySelected(): boolean
        set automatic(arg0: boolean)
        get automaticallySelectedPriority(): number
        get automatic(): boolean
        set enabled(arg0: boolean)
        get enabled(): boolean
    }
    type ISwitchDisabledEdge_ = ISwitchDisabledEdge;
    interface IPerk {
        getLangName(): string;
        attributeBuilder(): Internal.ImmutableMultimap$Builder<Internal.Attribute, Internal.AttributeModifier>;
        validForSlot(arg0: Internal.PerkSlot_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
        getLangDescription(): string;
        getModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: number): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        minimumSlot(): Internal.PerkSlot;
        abstract getRegistryName(): ResourceLocation;
        getName(): string;
        getDescriptionKey(): string;
        get langName(): string
        get langDescription(): string
        get registryName(): ResourceLocation
        get name(): string
        get descriptionKey(): string
        (): ResourceLocation_;
    }
    type IPerk_ = (()=> ResourceLocation_) | IPerk;
    class SpreadableSoilProperties$SpreadableRootyBlock extends Internal.RootyBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        probabilityForBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BranchBlock_): number;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        updateRadius(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number, arg4: boolean): number;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        doDecay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Species_): void;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        getTreePartType(): Internal.TreePart$TreePartType;
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isRootNode(): boolean;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getColorFromBark(): boolean;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        startAnalysis(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.MapSignal_): Internal.MapSignal;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        destroyTree(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
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
        colorMultiplier(arg0: Internal.BlockColors_, arg1: Internal.BlockState_, arg2: Internal.BlockAndTintGetter_, arg3: BlockPos_, arg4: number): number;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getDecayBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.BlockState;
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
        getHydrationCell(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.LeavesProperties_): Internal.Cell;
        rootColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getSoilProperties(): Internal.SoilProperties;
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
        getPrimitiveSoilState(arg0: Internal.BlockState_): Internal.BlockState;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSpecies(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.Species;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        fallWithTree(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getFamily(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.Family;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getTrunkDirection(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Direction;
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
        setSpecies(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Species_): void;
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
        fertilize(arg0: Internal.Level_, arg1: BlockPos_, arg2: number): boolean;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getRadiusForConnection(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BranchBlock_, arg4: Internal.Direction_, arg5: number): number;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        destroyTree(arg0: Internal.Level_, arg1: BlockPos_): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setFertility(arg0: Internal.Level_, arg1: BlockPos_, arg2: number): void;
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
        getPrimitiveSoilBlock(): Internal.Block;
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getHardness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        fallWithTree(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        updateTree(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: boolean): void;
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
        getRadius(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        shouldAnalyse(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        analyse(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.MapSignal_): Internal.MapSignal;
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
        getFertility(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        hasTileEntity(arg0: Internal.BlockState_): boolean;
        growSignal(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.GrowSignal_): Internal.GrowSignal;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        branchSupport(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: Internal.BranchBlock_, arg3: BlockPos_, arg4: Internal.Direction_, arg5: number): number;
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
        get treePartType(): Internal.TreePart$TreePartType
        get rootNode(): boolean
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get colorFromBark(): boolean
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get soilProperties(): Internal.SoilProperties
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
        get primitiveSoilBlock(): Internal.Block
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type SpreadableSoilProperties$SpreadableRootyBlock_ = SpreadableSoilProperties$SpreadableRootyBlock;
    class DirtPathBlock extends Internal.Block {
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
    type DirtPathBlock_ = DirtPathBlock;
    class Climate$TargetPoint extends Internal.Record {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        depth(): number;
        getClass(): typeof any;
        weirdness(): number;
        toString(): string;
        notifyAll(): void;
        temperature(): number;
        notify(): void;
        humidity(): number;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        erosion(): number;
        wait(): void;
        wait(arg0: number): void;
        continentalness(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Climate$TargetPoint_ = Climate$TargetPoint;
    class GTRecipeBuilder {
        constructor(arg0: Internal.GTRecipe_, arg1: Internal.GTRecipeType_)
        constructor(arg0: ResourceLocation_, arg1: Internal.GTRecipeType_)
        outputCWU(arg0: number): this;
        adjacentFluids(arg0: boolean, ...arg1: Internal.Fluid_[]): this;
        outputEU(arg0: number, arg1: number): this;
        inputItems(...arg0: Internal.Ingredient_[]): this;
        EUt(): EnergyStack;
        heraclesQuest(arg0: string, arg1: boolean): this;
        outputFluids(arg0: Internal.FluidStack_): this;
        chancedFluidInputLogic(arg0: ChanceLogic_): this;
        adjacentFluids(...arg0: Internal.TagKey_<Internal.Fluid>[]): this;
        "input(com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability,java.lang.Object[])"<T>(arg0: RecipeCapability_<T>, ...arg1: T[]): this;
        chancedInputLogic(arg0: RecipeCapability_<any>, arg1: ChanceLogic_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(net.minecraft.tags.TagKey[])"(...arg0: Internal.TagKey_<Internal.Block>[]): this;
        "inputItemsRanged(net.minecraft.world.item.ItemStack,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.ItemStack_, arg1: Internal.IntProvider_): this;
        inputItems(arg0: Internal.MachineDefinition_): this;
        capabilitiesToJson(arg0: Internal.Map_<RecipeCapability<any>, Internal.List<Internal.Content>>): Internal.JsonObject;
        rain(arg0: number, arg1: boolean): this;
        "inputItems(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        "inputFluids(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): this;
        "outputItemsRanged(net.minecraft.world.item.Item,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.Item_, arg1: Internal.IntProvider_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(arg0: boolean, ...arg1: Internal.Block_[]): this;
        chancedOutput(arg0: Internal.ItemStack_, arg1: number, arg2: number): this;
        "inputItems(net.minecraft.world.item.Item,int)"(arg0: Internal.Item_, arg1: number): this;
        "inputItems(com.gregtechceu.gtceu.api.machine.MachineDefinition,int)"(arg0: Internal.MachineDefinition_, arg1: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(...arg0: Internal.Fluid_[]): this;
        notConsumable(arg0: Internal.Ingredient_): this;
        chancedOutput(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: number, arg4: number): this;
        outputItems(arg0: Internal.Item_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(java.util.Collection)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>): this;
        "addData(java.lang.String,float)"(arg0: string, arg1: number): this;
        outputItemsRanged(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: Internal.IntProvider_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(net.minecraft.world.level.material.Fluid[])"(...arg0: Internal.Fluid_[]): this;
        "chancedOutput(net.minecraft.world.item.Item,java.lang.String,int)"(arg0: Internal.Item_, arg1: string, arg2: number): this;
        "biome(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): this;
        inputItems(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        inputItems(arg0: MaterialEntry_, arg1: number): this;
        "adjacentBlocks(java.util.Collection,boolean)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>, arg1: boolean): this;
        inputItems(arg0: Internal.TagKey_<Internal.Item>, arg1: number): this;
        getClass(): typeof any;
        "chancedOutput(com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient,int,int)"(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_, arg1: number, arg2: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluidTag(...arg0: Internal.TagKey_<Internal.Fluid>[]): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): this;
        inputItems(arg0: Internal.Ingredient_): this;
        dimension(arg0: ResourceLocation_, arg1: boolean): this;
        outputFluids(...arg0: Internal.FluidStack_[]): this;
        "adjacentBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): this;
        onSave(arg0: Internal.BiConsumer_<Internal.GTRecipeBuilder, Internal.Consumer<Internal.FinishedRecipe>>): this;
        thunder(arg0: number, arg1: boolean): this;
        "inputItemsRanged(net.minecraft.world.item.Item,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.Item_, arg1: Internal.IntProvider_): this;
        explosivesAmount(arg0: number): this;
        "notConsumable(java.util.function.Supplier)"(arg0: Internal.Supplier_<Internal.Item>): this;
        chancedOutput(arg0: Internal.Item_, arg1: string, arg2: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlockTag(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Block>[]): this;
        outputEU(arg0: number): this;
        outputItems(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(java.util.Collection,boolean)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>, arg1: boolean): this;
        "notConsumableFluid(com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient)"(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_): this;
        "dimension(net.minecraft.resources.ResourceKey,boolean)"(arg0: Internal.ResourceKey_<Internal.Level>, arg1: boolean): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(java.util.Collection)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>): this;
        "copy(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): this;
        outputItemsRanged(arg0: Internal.MachineDefinition_, arg1: Internal.IntProvider_): this;
        setTempItemStacks(arg0: Internal.List_<Internal.ItemStack>): this;
        "chancedOutput(net.minecraft.world.item.ItemStack,java.lang.String,int)"(arg0: Internal.ItemStack_, arg1: string, arg2: number): this;
        "inputItems(java.lang.Object,int)"(arg0: any, arg1: number): this;
        inputItemsRanged(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: Internal.IntProvider_): this;
        copyFrom(arg0: Internal.GTRecipeBuilder_): this;
        outputItemsRanged(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: Internal.IntProvider_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>, arg1: boolean): this;
        disableDistilleryRecipes(arg0: boolean): this;
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>): void;
        wait(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(net.minecraft.tags.TagKey[])"(...arg0: Internal.TagKey_<Internal.Fluid>[]): this;
        removePreviousMaterialInfo(): this;
        notConsumableFluid(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_): this;
        blastFurnaceTemp(arg0: number): this;
        dimension(arg0: Internal.ResourceKey_<Internal.Level>, arg1: boolean): this;
        "chancedOutput(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material,java.lang.String,int)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: string, arg3: number): this;
        "notConsumableFluid(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): this;
        "inputItems(com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry,int)"(arg0: MaterialEntry_, arg1: number): this;
        "chancedInput(com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient,int,int)"(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_, arg1: number, arg2: number): this;
        inputFluidsRanged(arg0: Internal.FluidStack_, arg1: Internal.IntProvider_): this;
        biome(arg0: Internal.ResourceKey_<Internal.Biome>, arg1: boolean): this;
        "outputItems(java.util.function.Supplier)"(arg0: Internal.Supplier_<Internal.ItemLike>): this;
        solderMultiplier(arg0: number): this;
        notConsumableFluid(arg0: Internal.FluidStack_): this;
        stationResearch(arg0: Internal.UnaryOperator_<Internal.ResearchRecipeBuilder$StationRecipeBuilder>): this;
        chanceLogicsToJson(arg0: Internal.Map_<RecipeCapability<any>, ChanceLogic>): Internal.JsonObject;
        "outputItems(java.lang.Object)"(arg0: any): this;
        tierChanceBoost(arg0: number): this;
        "inputItemsRanged(java.util.function.Supplier,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: Internal.IntProvider_): this;
        chancedItemInputLogic(arg0: ChanceLogic_): this;
        "chancedInput(net.minecraft.world.item.crafting.Ingredient,int,int)"(arg0: Internal.Ingredient_, arg1: number, arg2: number): this;
        environmentalHazard(arg0: MedicalCondition_, arg1: boolean): this;
        biome(arg0: Internal.ResourceKey_<Internal.Biome>): this;
        chancedFluidOutput(arg0: Internal.FluidStack_, arg1: string, arg2: number): this;
        "dimension(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): this;
        EUt(arg0: number, arg1: number): this;
        "inputItems(com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry)"(arg0: MaterialEntry_): this;
        fusionStartEU(arg0: number): this;
        "adjacentBlocks(java.util.Collection)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>): this;
        inputItemNbtPredicate(arg0: Internal.ItemStack_, arg1: Internal.NBTPredicate_): this;
        "outputItems(java.util.function.Supplier,int)"(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: number): this;
        outputFluidsRanged(arg0: Internal.IntProviderFluidIngredient_): this;
        wait(): void;
        addData(arg0: string, arg1: number): this;
        "outputItemsRanged(com.gregtechceu.gtceu.api.machine.MachineDefinition,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.MachineDefinition_, arg1: Internal.IntProvider_): this;
        inputItems(arg0: any, arg1: number): this;
        "outputFluids(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): this;
        "outputItems(com.gregtechceu.gtceu.api.machine.MachineDefinition)"(arg0: Internal.MachineDefinition_): this;
        biome(arg0: ResourceLocation_): this;
        outputItems(arg0: MaterialEntry_): this;
        "adjacentFluids(net.minecraft.tags.TagKey[])"(...arg0: Internal.TagKey_<Internal.Fluid>[]): this;
        inputItems(arg0: Internal.TagKey_<Internal.Item>): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(...arg0: Internal.Block_[]): this;
        "biome(net.minecraft.resources.ResourceKey,boolean)"(arg0: Internal.ResourceKey_<Internal.Biome>, arg1: boolean): this;
        "inputItems(net.minecraft.world.item.crafting.Ingredient,int)"(arg0: Internal.Ingredient_, arg1: number): this;
        adjacentBlocks(arg0: boolean, ...arg1: Internal.Block_[]): this;
        "notConsumable(net.minecraft.world.item.Item)"(arg0: Internal.Item_): this;
        "chancedOutput(net.minecraft.world.item.ItemStack,int,int)"(arg0: Internal.ItemStack_, arg1: number, arg2: number): this;
        researchWithoutRecipe(arg0: string): this;
        chancedItemOutputLogic(arg0: ChanceLogic_): this;
        chancedInput(arg0: Internal.ItemStack_, arg1: number, arg2: number): this;
        gameStage(arg0: string): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(arg0: boolean, ...arg1: Internal.Fluid_[]): this;
        getSolderMultiplier(): number;
        CWUt(arg0: number): this;
        adjacentBlocks(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>): this;
        inputFluids(arg0: Internal.FluidStack_): this;
        "chancedOutput(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: number, arg4: number): this;
        "outputItemsRanged(java.util.function.Supplier,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: Internal.IntProvider_): this;
        outputItems(arg0: Internal.Supplier_<Internal.ItemLike>): this;
        "copy(java.lang.String)"(arg0: string): this;
        "outputFluids(com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient[])"(...arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_[]): this;
        category(arg0: Internal.GTRecipeCategory_): this;
        addData(arg0: string, arg1: number): this;
        circuitMeta(arg0: number): this;
        "chancedOutput(net.minecraft.world.item.Item,int,java.lang.String,int)"(arg0: Internal.Item_, arg1: number, arg2: string, arg3: number): this;
        "input(com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability,java.lang.Object)"<T>(arg0: RecipeCapability_<T>, arg1: T): this;
        id(arg0: ResourceLocation_): this;
        adjacentFluids(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>, arg1: boolean): this;
        "adjacentFluids(net.minecraft.world.level.material.Fluid[])"(...arg0: Internal.Fluid_[]): this;
        dimension(arg0: Internal.ResourceKey_<Internal.Level>): this;
        buildRawRecipe(): Internal.GTRecipe;
        "notConsumable(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): this;
        inputItemsRanged(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: Internal.IntProvider_): this;
        "inputItems(java.util.function.Supplier)"(arg0: Internal.Supplier_<Internal.Item>): this;
        "adjacentBlocks(net.minecraft.tags.TagKey[])"(...arg0: Internal.TagKey_<Internal.Block>[]): this;
        equals(arg0: any): boolean;
        "inputItems(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): this;
        addMaterialInfo(arg0: boolean, arg1: boolean): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(boolean,net.minecraft.world.level.material.Fluid[])"(arg0: boolean, ...arg1: Internal.Fluid_[]): this;
        "chancedOutput(net.minecraftforge.fluids.FluidStack,int,int)"(arg0: Internal.FluidStack_, arg1: number, arg2: number): this;
        "scannerResearch(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): this;
        chancedFluidOutputLogic(arg0: ChanceLogic_): this;
        "adjacentBlocks(boolean,net.minecraft.world.level.block.Block[])"(arg0: boolean, ...arg1: Internal.Block_[]): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlockTag(...arg0: Internal.TagKey_<Internal.Block>[]): this;
        toJson(arg0: Internal.JsonObject_): void;
        adjacentBlocks(...arg0: Internal.Block_[]): this;
        daytime(): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentFluid(boolean,net.minecraft.tags.TagKey[])"(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Fluid>[]): this;
        "inputFluids(net.minecraftforge.fluids.FluidStack[])"(...arg0: Internal.FluidStack_[]): this;
        "inputItems(net.minecraft.world.item.Item)"(arg0: Internal.Item_): this;
        inputItems(arg0: Internal.Ingredient_, arg1: number): this;
        "addData(java.lang.String,long)"(arg0: string, arg1: number): this;
        "addData(java.lang.String,boolean)"(arg0: string, arg1: boolean): this;
        outputFluidsRanged(arg0: Internal.FluidStack_, arg1: Internal.IntProvider_): this;
        inputItems(arg0: Internal.ItemStack_): this;
        "outputItems(com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry)"(arg0: MaterialEntry_): this;
        adjacentFluids(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>): this;
        inputItems(arg0: Internal.Supplier_<Internal.Item>): this;
        adjacentBlocks(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Block>[]): this;
        notConsumable(arg0: Internal.Item_): this;
        "inputItemsRanged(com.gregtechceu.gtceu.api.machine.MachineDefinition,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.MachineDefinition_, arg1: Internal.IntProvider_): this;
        chancedTickOutputLogic(arg0: RecipeCapability_<any>, arg1: ChanceLogic_): this;
        "outputItemsRanged(net.minecraft.world.item.ItemStack,net.minecraft.util.valueproviders.IntProvider)"(arg0: Internal.ItemStack_, arg1: Internal.IntProvider_): this;
        "outputItems(net.minecraft.world.item.Item)"(arg0: Internal.Item_): this;
        static of(arg0: ResourceLocation_, arg1: Internal.GTRecipeType_): Internal.GTRecipeBuilder;
        biomeTag(arg0: Internal.TagKey_<Internal.Biome>): this;
        inputFluids(...arg0: Internal.FluidStack_[]): this;
        chancedOutputLogic(arg0: RecipeCapability_<any>, arg1: ChanceLogic_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>): this;
        posY(arg0: number, arg1: number): this;
        biomeTag(arg0: Internal.TagKey_<Internal.Biome>, arg1: boolean): this;
        input<T>(arg0: RecipeCapability_<T>, arg1: T): this;
        inputItemsRanged(arg0: Internal.MachineDefinition_, arg1: Internal.IntProvider_): this;
        setTempFluidMaterialStacks(arg0: Internal.List_<Internal.MaterialStack>): this;
        chancedOutput(arg0: Internal.Ingredient_, arg1: number, arg2: number): this;
        "inputItems(com.gregtechceu.gtceu.api.machine.MachineDefinition)"(arg0: Internal.MachineDefinition_): this;
        "inputItems(java.lang.Object)"(arg0: any): this;
        outputItems(...arg0: Internal.ItemStack_[]): this;
        recipeType(arg0: Internal.GTRecipeType_): this;
        chancedOutput(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluidTag(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Fluid>[]): this;
        "inputItems(net.minecraft.world.item.crafting.Ingredient)"(arg0: Internal.Ingredient_): this;
        chancedInput(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_, arg1: number, arg2: number): this;
        addMaterialInfo(arg0: boolean): this;
        "adjacentFluids(java.util.Collection)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>): this;
        explosivesType(arg0: Internal.ItemStack_): this;
        researchScan(arg0: boolean): this;
        chancedTickInputLogic(arg0: RecipeCapability_<any>, arg1: ChanceLogic_): this;
        "output(com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability,java.lang.Object)"<T>(arg0: RecipeCapability_<T>, arg1: T): this;
        inputCWU(arg0: number): this;
        "inputFluids(com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient[])"(...arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_[]): this;
        notConsumable(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number): this;
        addData(arg0: string, arg1: number): this;
        scannerResearch(arg0: Internal.UnaryOperator_<Internal.ResearchRecipeBuilder$ScannerRecipeBuilder>): this;
        outputItemsRanged(arg0: Internal.Item_, arg1: Internal.IntProvider_): this;
        chancedInput(arg0: Internal.FluidStack_, arg1: number, arg2: number): this;
        setTempItemMaterialStacks(arg0: Internal.List_<Internal.MaterialStack>): this;
        "inputItems(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): this;
        addCondition(arg0: Internal.RecipeCondition_<any>): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>, arg1: boolean): this;
        "chancedOutput(net.minecraft.world.item.crafting.Ingredient,int,int)"(arg0: Internal.Ingredient_, arg1: number, arg2: number): this;
        maxChance(arg0: number): this;
        outputFluids(...arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_[]): this;
        inputItemsRanged(arg0: Internal.Item_, arg1: Internal.IntProvider_): this;
        "inputItems(net.minecraft.tags.TagKey,int)"(arg0: Internal.TagKey_<Internal.Item>, arg1: number): this;
        gameStage(arg0: string, arg1: boolean): this;
        inputFluidsRanged(arg0: Internal.IntProviderFluidIngredient_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(boolean,net.minecraft.world.level.block.Block[])"(arg0: boolean, ...arg1: Internal.Block_[]): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(...arg0: Internal.TagKey_<Internal.Fluid>[]): this;
        inputItems(arg0: MaterialEntry_): this;
        "scannerResearch(java.util.function.UnaryOperator)"(arg0: Internal.UnaryOperator_<Internal.ResearchRecipeBuilder$ScannerRecipeBuilder>): this;
        adjacentFluids(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Fluid>[]): this;
        inputItems(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number): this;
        addData(arg0: string, arg1: string): this;
        ftbQuest(arg0: string, arg1: boolean): this;
        outputItems(arg0: Internal.Item_, arg1: number): this;
        toString(): string;
        notifyAll(): void;
        "adjacentBlocks(boolean,net.minecraft.tags.TagKey[])"(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Block>[]): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Block>[]): this;
        "chancedInput(net.minecraft.world.item.ItemStack,int,int)"(arg0: Internal.ItemStack_, arg1: number, arg2: number): this;
        "notConsumable(net.minecraft.world.item.crafting.Ingredient)"(arg0: Internal.Ingredient_): this;
        outputItems(arg0: Internal.ItemStack_): this;
        input<T>(arg0: RecipeCapability_<T>, ...arg1: T[]): this;
        "outputItems(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): this;
        "dimension(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): this;
        "outputItems(com.gregtechceu.gtceu.api.machine.MachineDefinition,int)"(arg0: Internal.MachineDefinition_, arg1: number): this;
        hideDuration(arg0: boolean): this;
        inputItemRanged(arg0: Internal.IntProviderIngredient_): this;
        adjacentFluids(...arg0: Internal.Fluid_[]): this;
        outputItems(arg0: Internal.MachineDefinition_, arg1: number): this;
        "chancedInput(net.minecraftforge.fluids.FluidStack,int,int)"(arg0: Internal.FluidStack_, arg1: number, arg2: number): this;
        "outputItems(net.minecraft.world.item.Item,int)"(arg0: Internal.Item_, arg1: number): this;
        "inputItems(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): this;
        outputItems(arg0: any): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(java.util.Collection,boolean)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>, arg1: boolean): this;
        inputItems(arg0: Internal.Supplier_<Internal.Item>, arg1: number): this;
        totalCWU(arg0: number): this;
        biome(arg0: ResourceLocation_, arg1: boolean): this;
        thunder(arg0: number): this;
        notify(): void;
        chancedOutput(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: string, arg3: number): this;
        cleanroom(arg0: CleanroomType_): this;
        inputItems(arg0: Internal.Item_, arg1: number): this;
        chancedOutput(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: string, arg4: number): this;
        notConsumable(arg0: Internal.ItemStack_): this;
        inputItems(arg0: Internal.Item_): this;
        EUt(arg0: number): this;
        notConsumable(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        inputItems(arg0: any): this;
        "outputItems(com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry,int)"(arg0: MaterialEntry_, arg1: number): this;
        chancedInput(arg0: Internal.Ingredient_, arg1: number, arg2: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentBlock(...arg0: Internal.TagKey_<Internal.Block>[]): this;
        environmentalHazard(arg0: MedicalCondition_): this;
        "outputFluids(net.minecraftforge.fluids.FluidStack[])"(...arg0: Internal.FluidStack_[]): this;
        "chancedOutput(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: number): this;
        "dimension(net.minecraft.resources.ResourceLocation,boolean)"(arg0: ResourceLocation_, arg1: boolean): this;
        "chancedOutput(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material,int,java.lang.String,int)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number, arg3: string, arg4: number): this;
        daytime(arg0: boolean): this;
        build(): Internal.FinishedRecipe;
        researchWithoutRecipe(arg0: string, arg1: Internal.ItemStack_): this;
        "addData(java.lang.String,int)"(arg0: string, arg1: number): this;
        adjacentBlocks(arg0: Internal.Collection_<Internal.HolderSet<Internal.Block>>, arg1: boolean): this;
        "biome(net.minecraft.resources.ResourceLocation,boolean)"(arg0: ResourceLocation_, arg1: boolean): this;
        outputItems(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        "inputItems(java.util.function.Supplier,int)"(arg0: Internal.Supplier_<Internal.Item>, arg1: number): this;
        inputEU(arg0: number, arg1: number): this;
        "output(com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability,java.lang.Object[])"<T>(arg0: RecipeCapability_<T>, ...arg1: T[]): this;
        inputEU(arg0: number): this;
        durationIsTotalCWU(arg0: boolean): this;
        chance(arg0: number): this;
        copy(arg0: string): this;
        "inputItems(net.minecraft.world.item.crafting.Ingredient[])"(...arg0: Internal.Ingredient_[]): this;
        outputItems(arg0: MaterialEntry_, arg1: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        adjacentFluid(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Fluid>[]): this;
        output<T>(arg0: RecipeCapability_<T>, ...arg1: T[]): this;
        "adjacentFluids(java.util.Collection,boolean)"(arg0: Internal.Collection_<Internal.HolderSet<Internal.Fluid>>, arg1: boolean): this;
        chancedOutput(arg0: Internal.Item_, arg1: number, arg2: string, arg3: number): this;
        inputFluids(arg0: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg1: number): this;
        notConsumable(arg0: Internal.Supplier_<Internal.Item>): this;
        chancedOutput(arg0: Internal.FluidStack_, arg1: number, arg2: number): this;
        chancedOutput(arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_, arg1: number, arg2: number): this;
        outputItems(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg2: number): this;
        "biome(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Biome>): this;
        "adjacentFluids(boolean,net.minecraft.tags.TagKey[])"(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Fluid>[]): this;
        "outputItems(java.lang.Object,int)"(arg0: any, arg1: number): this;
        addData(arg0: string, arg1: boolean): this;
        outputItemRanged(arg0: Internal.IntProviderIngredient_): this;
        wait(arg0: number, arg1: number): void;
        inputItems(arg0: Internal.MachineDefinition_, arg1: number): this;
        addData(arg0: string, arg1: Internal.Tag_): this;
        outputItems(arg0: any, arg1: number): this;
        duration(arg0: number): this;
        inputItems(...arg0: Internal.ItemStack_[]): this;
        researchRecipeEntries(): Internal.Collection<Internal.GTRecipeBuilder$ResearchRecipeEntry>;
        inputItemsRanged(arg0: Internal.ItemStack_, arg1: Internal.IntProvider_): this;
        perTick(arg0: boolean): this;
        adjacentBlocks(...arg0: Internal.TagKey_<Internal.Block>[]): this;
        chancedOutput(arg0: Internal.ItemStack_, arg1: string, arg2: number): this;
        "addData(java.lang.String,net.minecraft.nbt.Tag)"(arg0: string, arg1: Internal.Tag_): this;
        "outputItems(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)"(arg0: TagPrefix_, arg1: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "adjacentBlock(boolean,net.minecraft.tags.TagKey[])"(arg0: boolean, ...arg1: Internal.TagKey_<Internal.Block>[]): this;
        outputItemsRanged(arg0: Internal.ItemStack_, arg1: Internal.IntProvider_): this;
        "outputItems(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): this;
        posY(arg0: number, arg1: number, arg2: boolean): this;
        ftbQuest(arg0: string): this;
        output<T>(arg0: RecipeCapability_<T>, arg1: T): this;
        "addData(java.lang.String,java.lang.String)"(arg0: string, arg1: string): this;
        hashCode(): number;
        heraclesQuest(arg0: string): this;
        outputItems(arg0: Internal.MachineDefinition_): this;
        copy(arg0: ResourceLocation_): this;
        rain(arg0: number): this;
        "adjacentFluids(boolean,net.minecraft.world.level.material.Fluid[])"(arg0: boolean, ...arg1: Internal.Fluid_[]): this;
        static ofRaw(): Internal.GTRecipeBuilder;
        inputFluids(...arg0: com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient_[]): this;
        scannerResearch(arg0: Internal.ItemStack_): this;
        dimension(arg0: ResourceLocation_): this;
        get class(): typeof any
        set tempItemStacks(arg0: Internal.List_<Internal.ItemStack>)
        get solderMultiplier(): number
        set tempFluidMaterialStacks(arg0: Internal.List_<Internal.MaterialStack>)
        set tempItemMaterialStacks(arg0: Internal.List_<Internal.MaterialStack>)
        onSave: Internal.BiConsumer<Internal.GTRecipeBuilder, Internal.Consumer<Internal.FinishedRecipe>>;
        perTick: boolean;
        readonly tickInputChanceLogic: Internal.Map<RecipeCapability<any>, ChanceLogic>;
        tierChanceBoost: number;
        data: Internal.CompoundTag;
        recipeCategory: Internal.GTRecipeCategory;
        readonly tickOutput: Internal.Map<RecipeCapability<any>, Internal.List<Internal.Content>>;
        maxChance: number;
        readonly input: Internal.Map<RecipeCapability<any>, Internal.List<Internal.Content>>;
        readonly inputChanceLogic: Internal.Map<RecipeCapability<any>, ChanceLogic>;
        chance: number;
        recipeType: Internal.GTRecipeType;
        readonly conditions: Internal.List<Internal.RecipeCondition<any>>;
        id: ResourceLocation;
        duration: number;
        readonly tickInput: Internal.Map<RecipeCapability<any>, Internal.List<Internal.Content>>;
        readonly outputChanceLogic: Internal.Map<RecipeCapability<any>, ChanceLogic>;
        readonly output: Internal.Map<RecipeCapability<any>, Internal.List<Internal.Content>>;
        readonly tickOutputChanceLogic: Internal.Map<RecipeCapability<any>, ChanceLogic>;
    }
    type GTRecipeBuilder_ = GTRecipeBuilder;
    interface IIngredientConsumer {
        addItemStack(arg0: Internal.ItemStack_): this;
        abstract addOptionalTypedIngredients(arg0: Internal.List_<Internal.Optional<Internal.ITypedIngredient<any>>>): this;
        addTypedIngredient<I>(arg0: Internal.ITypedIngredient_<I>): this;
        abstract addIngredientsUnsafe(arg0: Internal.List_<any>): this;
        abstract addIngredient<I>(arg0: Internal.IIngredientType_<I>, arg1: I): this;
        addIngredients(arg0: Internal.Ingredient_): this;
        abstract addTypedIngredients(arg0: Internal.List_<Internal.ITypedIngredient<any>>): this;
        addItemLike(arg0: Internal.ItemLike_): this;
        abstract addIngredients<I>(arg0: Internal.IIngredientType_<I>, arg1: Internal.List_<I>): this;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): this;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number): this;
        abstract addFluidStack(arg0: Internal.Fluid_): this;
        addItemStacks(arg0: Internal.List_<Internal.ItemStack>): this;
    }
    type IIngredientConsumer_ = IIngredientConsumer;
    interface Byte2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2FloatFunction;
        "put(byte,float)"(arg0: number, arg1: number): number;
        "getOrDefault(byte,float)"(arg0: number, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Byte2IntFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Byte2LongFunction;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2FloatFunction;
        "remove(byte)"(arg0: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2FloatFunction;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2FloatFunction<T>;
        apply(arg0: number): number;
        "containsKey(byte)"(arg0: number): boolean;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2FloatFunction;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2FloatFunction<T>;
        containsKey(arg0: number): boolean;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2FloatFunction;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        abstract "get(byte)"(arg0: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        size(): number;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Float)"(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        clear(): void;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Byte2ShortFunction;
    }
    type Byte2FloatFunction_ = Byte2FloatFunction;
    class FilterUpgradeItem extends Internal.UpgradeItemBase<Internal.FilterUpgradeWrapper> {
        constructor(arg0: Internal.IntSupplier_, arg1: any_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getUpgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getFilterSlotCount(): number;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean, arg2: Internal.Player_): Internal.UpgradeSlotChangeResult;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        getInventoryColumnsTaken(): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: number, arg4: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getName(): net.minecraft.network.chat.Component;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getUpgradesPerStorage(arg0: string): number;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.IStorageWrapper_, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
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
        checkThisForConflictsWithExistingUpgrades(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: number): Internal.UpgradeSlotChangeResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
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
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
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
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
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
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getUpgradesInGroupPerStorage(arg0: string): number;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getType(): Internal.UpgradeType<Internal.FilterUpgradeWrapper>;
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
        get upgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>
        get filterSlotCount(): number
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get inventoryColumnsTaken(): number
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get upgradeGroup(): Internal.UpgradeGroup
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get name(): net.minecraft.network.chat.Component
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
        get type(): Internal.UpgradeType<Internal.FilterUpgradeWrapper>
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly TYPE: Internal.UpgradeType<Internal.FilterUpgradeWrapper>;
    }
    type FilterUpgradeItem_ = FilterUpgradeItem;
    class BasicSpellTurret extends Internal.TickableModBlock implements Internal.IWrenchable, Internal.SimpleWaterloggedBlock {
        constructor()
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
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        shootSpell(arg0: Internal.ServerLevel_, arg1: BlockPos_): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        static defaultProperties(): Internal.BlockBehaviour$Properties;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        static readonly TRIGGERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static TURRET_BEHAVIOR_MAP: ({[key: any]: any, [key: any]: any, [key: any]: any, [key: any]: any}) & (Internal.HashMap<Internal.AbstractCastMethod, Internal.ITurretBehavior>);
    }
    type BasicSpellTurret_ = BasicSpellTurret;
    class LootNumberProviderType extends Internal.SerializerType<Internal.NumberProvider> {
        constructor(arg0: Internal.Serializer_<Internal.NumberProvider>)
        getSerializer(): Internal.Serializer<Internal.NumberProvider>;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get serializer(): Internal.Serializer<Internal.NumberProvider>
        get class(): typeof any
    }
    type LootNumberProviderType_ = Special.LootNumberProviderType | LootNumberProviderType;
    class BaseBlockItem$ItemUseResult {
        getClass(): typeof any;
        static consume(stack: Internal.ItemStack_): Internal.BaseBlockItem$ItemUseResult;
        /**
         * @deprecated
        */
        static fromUnderlying(underlying: Internal.InteractionResultHolder_<Internal.ItemStack>): Internal.BaseBlockItem$ItemUseResult;
        toString(): string;
        notifyAll(): void;
        static fail(stack: Internal.ItemStack_): Internal.BaseBlockItem$ItemUseResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        toUnderlying(isClientSide: boolean): Internal.InteractionResultHolder<Internal.ItemStack>;
        hashCode(): number;
        static pass(stack: Internal.ItemStack_): Internal.BaseBlockItem$ItemUseResult;
        wait(): void;
        static success(stack: Internal.ItemStack_): Internal.BaseBlockItem$ItemUseResult;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type BaseBlockItem$ItemUseResult_ = BaseBlockItem$ItemUseResult;
    class ThreadGroup implements Internal.Thread$UncaughtExceptionHandler {
        constructor(arg0: Internal.ThreadGroup_, arg1: string)
        constructor(arg0: string)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isDaemon(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        suspend(): void;
        getClass(): typeof any;
        "enumerate(java.lang.ThreadGroup[],boolean)"(arg0: Internal.ThreadGroup_[], arg1: boolean): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        allowThreadSuspension(arg0: boolean): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        destroy(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        checkAccess(): void;
        uncaughtException(arg0: Internal.Thread_, arg1: Internal.Throwable_): void;
        activeGroupCount(): number;
        enumerate(arg0: Internal.ThreadGroup_[], arg1: boolean): number;
        "enumerate(java.lang.Thread[],boolean)"(arg0: Internal.Thread_[], arg1: boolean): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getParent(): this;
        list(): void;
        enumerate(arg0: Internal.Thread_[], arg1: boolean): number;
        parentOf(arg0: Internal.ThreadGroup_): boolean;
        getName(): string;
        setMaxPriority(arg0: number): void;
        toString(): string;
        "enumerate(java.lang.ThreadGroup[])"(arg0: Internal.ThreadGroup_[]): number;
        notifyAll(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        resume(): void;
        enumerate(arg0: Internal.ThreadGroup_[]): number;
        "enumerate(java.lang.Thread[])"(arg0: Internal.Thread_[]): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setDaemon(arg0: boolean): void;
        getMaxPriority(): number;
        hashCode(): number;
        interrupt(): void;
        wait(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        stop(): void;
        enumerate(arg0: Internal.Thread_[]): number;
        wait(arg0: number): void;
        activeCount(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isDestroyed(): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get daemon(): boolean
        get class(): typeof any
        get parent(): Internal.ThreadGroup
        get name(): string
        set maxPriority(arg0: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set daemon(arg0: boolean)
        get maxPriority(): number
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get destroyed(): boolean
    }
    type ThreadGroup_ = ThreadGroup;
    class PlatformBlock extends Internal.BotaniaBlock implements Internal.ManaCollisionGhost, Internal.EntityBlock {
        constructor(arg0: Internal.PlatformBlock$Variant_, arg1: Internal.BlockBehaviour$Properties_)
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
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
        getGhostBehaviour(): Internal.ManaCollisionGhost$Behaviour;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getVariant(): Internal.PlatformBlock$Variant;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        get ghostBehaviour(): Internal.ManaCollisionGhost$Behaviour
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
        get variant(): Internal.PlatformBlock$Variant
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type PlatformBlock_ = PlatformBlock;
    abstract class VeinGenerator {
        constructor()
        constructor(arg0: GTOreVein_)
        getClass(): typeof any;
        toString(): string;
        abstract getAllEntries(): Internal.List<Internal.VeinGenerator$VeinEntry>;
        getAllBlocks(): Internal.List<Internal.BlockState>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static mapTarget(arg0: Internal.Either_<Internal.List<Internal.OreConfiguration$TargetBlockState>, com.gregtechceu.gtceu.api.data.chemical.material.Material>): Internal.Stream<Internal.Either<Internal.BlockState, com.gregtechceu.gtceu.api.data.chemical.material.Material>>;
        getAllChances(): Internal.IntList;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static mapTarget(arg0: Internal.Either_<Internal.List<Internal.OreConfiguration$TargetBlockState>, com.gregtechceu.gtceu.api.data.chemical.material.Material>, arg1: number): Internal.Stream<Internal.VeinGenerator$VeinEntry>;
        abstract codec(): Internal.Codec<Internal.VeinGenerator>;
        abstract copy(): this;
        equals(arg0: any): boolean;
        getAllMaterials(): Internal.List<com.gregtechceu.gtceu.api.data.chemical.material.Material>;
        getValidMaterialsChances(): Internal.List<Internal.ObjectIntPair<com.gregtechceu.gtceu.api.data.chemical.material.Material>>;
        get class(): typeof any
        get allEntries(): Internal.List<Internal.VeinGenerator$VeinEntry>
        get allBlocks(): Internal.List<Internal.BlockState>
        get allChances(): Internal.IntList
        get allMaterials(): Internal.List<com.gregtechceu.gtceu.api.data.chemical.material.Material>
        get validMaterialsChances(): Internal.List<Internal.ObjectIntPair<com.gregtechceu.gtceu.api.data.chemical.material.Material>>
        static readonly DIRECT_CODEC: Internal.Codec<Internal.VeinGenerator>;
        static readonly REGISTRY_CODEC: Internal.Codec<Internal.Codec<Internal.VeinGenerator>>;
    }
    type VeinGenerator_ = VeinGenerator;
    class BannerBlockEntity extends Internal.BlockEntity implements Internal.Nameable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.DyeColor_)
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
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
        getPatterns(): Internal.List<com.mojang.datafixers.util.Pair<Internal.Holder<Internal.BannerPattern>, Internal.DyeColor>>;
        static getPatternCount(arg0: Internal.ItemStack_): number;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fromItem(arg0: Internal.ItemStack_): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightX(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        getItem(): Internal.ItemStack;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        fromItem(arg0: Internal.ItemStack_, arg1: Internal.DyeColor_): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        static createPatterns(arg0: Internal.DyeColor_, arg1: Internal.ListTag_): Internal.List<com.mojang.datafixers.util.Pair<Internal.Holder<Internal.BannerPattern>, Internal.DyeColor>>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        static removeLastPattern(arg0: Internal.ItemStack_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getBaseColor(): Internal.DyeColor;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        static getItemPatterns(arg0: Internal.ItemStack_): Internal.ListTag;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get patterns(): Internal.List<com.mojang.datafixers.util.Pair<Internal.Holder<Internal.BannerPattern>, Internal.DyeColor>>
        get type(): Internal.BlockEntityType<any>
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set customName(arg0: net.minecraft.network.chat.Component_)
        get persistentData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get baseColor(): Internal.DyeColor
        get level(): Internal.Level
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        static readonly TAG_PATTERNS: ("Patterns") & (string);
        static readonly MAX_PATTERNS: (6) & (number);
        static readonly TAG_COLOR: ("Color") & (string);
        static readonly TAG_PATTERN: ("Pattern") & (string);
    }
    type BannerBlockEntity_ = BannerBlockEntity;
    interface SpectatorMenuItem {
        abstract getName(): net.minecraft.network.chat.Component;
        abstract selectItem(arg0: Internal.SpectatorMenu_): void;
        abstract renderIcon(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract isEnabled(): boolean;
        get name(): net.minecraft.network.chat.Component
        get enabled(): boolean
    }
    type SpectatorMenuItem_ = SpectatorMenuItem;
    interface ParticleCreator {
        abstract particle_core_createSafe<T extends Internal.ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle;
        (arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle_;
    }
    type ParticleCreator_ = ParticleCreator | ((arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)=> Internal.Particle_);
    class ValueRange implements Internal.Serializable {
        getClass(): typeof any;
        getMinimum(): number;
        toString(): string;
        static of(arg0: number, arg1: number, arg2: number): Internal.ValueRange;
        getMaximum(): number;
        notifyAll(): void;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ValueRange;
        checkValidIntValue(arg0: number, arg1: Internal.TemporalField_): number;
        notify(): void;
        isIntValue(): boolean;
        wait(arg0: number, arg1: number): void;
        getLargestMinimum(): number;
        isFixed(): boolean;
        static of(arg0: number, arg1: number): Internal.ValueRange;
        hashCode(): number;
        isValidIntValue(arg0: number): boolean;
        wait(): void;
        isValidValue(arg0: number): boolean;
        wait(arg0: number): void;
        getSmallestMaximum(): number;
        equals(arg0: any): boolean;
        checkValidValue(arg0: number, arg1: Internal.TemporalField_): number;
        get class(): typeof any
        get minimum(): number
        get maximum(): number
        get intValue(): boolean
        get largestMinimum(): number
        get fixed(): boolean
        get smallestMaximum(): number
    }
    type ValueRange_ = ValueRange;
    class SteamEngineBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
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
        isValid(): boolean;
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
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getTank(): Internal.FluidTankBlockEntity;
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
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        getTargetAngle(): number;
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
        getShaft(): Internal.PoweredShaftBlockEntity;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getIcon(arg0: boolean): Internal.ItemStack;
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
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get valid(): boolean
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
        get tank(): Internal.FluidTankBlockEntity
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get targetAngle(): number
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get shaft(): Internal.PoweredShaftBlockEntity
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        target: Internal.WeakReference<Internal.PoweredShaftBlockEntity>;
        source: Internal.WeakReference<Internal.FluidTankBlockEntity>;
    }
    type SteamEngineBlockEntity_ = SteamEngineBlockEntity;
    class RootSystemConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.Holder_<Internal.PlacedFeature>, arg1: number, arg2: number, arg3: Internal.TagKey_<Internal.Block>, arg4: Internal.BlockStateProvider_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.BlockStateProvider_, arg10: number, arg11: number, arg12: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly rootColumnMaxHeight: number;
        static readonly CODEC: Internal.Codec<Internal.RootSystemConfiguration>;
        readonly allowedTreePosition: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        readonly requiredVerticalSpaceForTree: number;
        readonly rootRadius: number;
        readonly hangingRootStateProvider: Internal.BlockStateProvider;
        readonly hangingRootsVerticalSpan: number;
        readonly hangingRootPlacementAttempts: number;
        readonly rootStateProvider: Internal.BlockStateProvider;
        readonly rootReplaceable: Internal.TagKey<Internal.Block>;
        readonly hangingRootRadius: number;
        readonly rootPlacementAttempts: number;
        readonly treeFeature: Internal.Holder<Internal.PlacedFeature>;
        readonly allowedVerticalWaterForTree: number;
    }
    type RootSystemConfiguration_ = RootSystemConfiguration;
    class MouseWheelEvent extends Internal.MouseEvent {
        constructor(arg0: Internal.Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number)
        constructor(arg0: Internal.Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number)
        constructor(arg0: Internal.Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number)
        getPoint(): Internal.Point;
        getClass(): typeof any;
        getScrollType(): number;
        getLocationOnScreen(): Internal.Point;
        getX(): number;
        getY(): number;
        /**
         * @deprecated
        */
        getModifiers(): number;
        paramString(): string;
        notify(): void;
        getWhen(): number;
        wait(arg0: number, arg1: number): void;
        getYOnScreen(): number;
        getScrollAmount(): number;
        getClickCount(): number;
        isAltDown(): boolean;
        getUnitsToScroll(): number;
        setSource(arg0: any): void;
        getComponent(): Internal.Component;
        getSource(): any;
        static getMouseModifiersText(arg0: number): string;
        static getModifiersExText(arg0: number): string;
        isShiftDown(): boolean;
        translatePoint(arg0: number, arg1: number): void;
        toString(): string;
        getPreciseWheelRotation(): number;
        getButton(): number;
        notifyAll(): void;
        isControlDown(): boolean;
        isConsumed(): boolean;
        static getMaskForButton(arg0: number): number;
        getWheelRotation(): number;
        consume(): void;
        hashCode(): number;
        getXOnScreen(): number;
        wait(): void;
        isMetaDown(): boolean;
        wait(arg0: number): void;
        isAltGraphDown(): boolean;
        equals(arg0: any): boolean;
        isPopupTrigger(): boolean;
        getModifiersEx(): number;
        getID(): number;
        get point(): Internal.Point
        get class(): typeof any
        get scrollType(): number
        get locationOnScreen(): Internal.Point
        get x(): number
        get y(): number
        /**
         * @deprecated
        */
        get modifiers(): number
        get when(): number
        get YOnScreen(): number
        get scrollAmount(): number
        get clickCount(): number
        get altDown(): boolean
        get unitsToScroll(): number
        set source(arg0: any)
        get component(): Internal.Component
        get source(): any
        get shiftDown(): boolean
        get preciseWheelRotation(): number
        get button(): number
        get controlDown(): boolean
        get consumed(): boolean
        get wheelRotation(): number
        get XOnScreen(): number
        get metaDown(): boolean
        get altGraphDown(): boolean
        get popupTrigger(): boolean
        get modifiersEx(): number
        get ID(): number
        static readonly WHEEL_UNIT_SCROLL: (0) & (number);
        static readonly WHEEL_BLOCK_SCROLL: (1) & (number);
    }
    type MouseWheelEvent_ = MouseWheelEvent;
    class RegistrateEntityLootTables extends Internal.VanillaEntityLoot implements Internal.RegistrateLootTables {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.Consumer_<Internal.RegistrateEntityLootTables>)
        getClass(): typeof any;
        m_247253_(arg0: Internal.FrogVariant_): Internal.LootItemCondition$Builder;
        toString(): string;
        m_245309_(arg0: Internal.EntityType_<any>, arg1: Internal.LootTable$Builder_): void;
        abstract generate(arg0: Internal.BiConsumer_<ResourceLocation, Internal.LootTable$Builder>): void;
        notifyAll(): void;
        m_247520_(arg0: Internal.EntityType_<any>, arg1: ResourceLocation_, arg2: Internal.LootTable$Builder_): void;
        m_245552_(arg0: Internal.EntityType_<any>): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        validate(arg0: Internal.Map_<ResourceLocation, Internal.LootTable>, arg1: Internal.ValidationContext_): void;
        static createSheepTable(arg0: Internal.ItemLike_): Internal.LootTable$Builder;
        hashCode(): number;
        static elderGuardianLootTable(): Internal.LootTable$Builder;
        generate(): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type RegistrateEntityLootTables_ = RegistrateEntityLootTables;
    class EntityTeleportEvent$EnderEntity extends Internal.EntityTeleportEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: number)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        getTarget(): Vec3d;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getTargetX(): number;
        setTargetX(arg0: number): void;
        setTargetY(arg0: number): void;
        setTargetZ(arg0: number): void;
        getResult(): Internal.Event$Result;
        toString(): string;
        notifyAll(): void;
        getTargetY(): number;
        getTargetZ(): number;
        getPrevX(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getEntityLiving(): Internal.LivingEntity;
        getPrevZ(): number;
        hashCode(): number;
        getPrevY(): number;
        getEntity(): Internal.Entity;
        wait(): void;
        getPrev(): Vec3d;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get target(): Vec3d
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get targetX(): number
        set targetX(arg0: number)
        set targetY(arg0: number)
        set targetZ(arg0: number)
        get result(): Internal.Event$Result
        get targetY(): number
        get targetZ(): number
        get prevX(): number
        set result(arg0: Internal.Event$Result_)
        get entityLiving(): Internal.LivingEntity
        get prevZ(): number
        get prevY(): number
        get entity(): Internal.Entity
        get prev(): Vec3d
        get phase(): Internal.EventPriority
    }
    type EntityTeleportEvent$EnderEntity_ = EntityTeleportEvent$EnderEntity;
    interface Algebra {
        abstract apply(arg0: number): Internal.RewriteResult<any, any>;
        abstract toString(arg0: number): string;
    }
    type Algebra_ = Algebra;
    interface IForgeVertexConsumer {
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        applyBakedNormals(arg0: Vector3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
    }
    type IForgeVertexConsumer_ = IForgeVertexConsumer;
    interface IComponentHandler {
        abstract add(...arg0: any[]): void;
        (...arg0: any[]): void;
    }
    type IComponentHandler_ = ((...arg0: any[])=> void) | IComponentHandler;
    abstract class GraphicsConfiguration {
        getClass(): typeof any;
        "createCompatibleVolatileImage(int,int,int)"(arg0: number, arg1: number, arg2: number): Internal.VolatileImage;
        abstract getBounds(): Internal.Rectangle;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        createCompatibleImage(arg0: number, arg1: number): Internal.BufferedImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: Internal.ImageCapabilities_, arg3: number): Internal.VolatileImage;
        abstract getNormalizingTransform(): Internal.AffineTransform;
        abstract getDevice(): Internal.GraphicsDevice;
        abstract getColorModel(): Internal.ColorModel;
        "createCompatibleVolatileImage(int,int,java.awt.ImageCapabilities)"(arg0: number, arg1: number, arg2: Internal.ImageCapabilities_): Internal.VolatileImage;
        isTranslucencyCapable(): boolean;
        createCompatibleImage(arg0: number, arg1: number, arg2: number): Internal.BufferedImage;
        toString(): string;
        notifyAll(): void;
        abstract getColorModel(arg0: number): Internal.ColorModel;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: Internal.ImageCapabilities_): Internal.VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number): Internal.VolatileImage;
        abstract getDefaultTransform(): Internal.AffineTransform;
        hashCode(): number;
        getBufferCapabilities(): Internal.BufferCapabilities;
        wait(): void;
        wait(arg0: number): void;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): Internal.VolatileImage;
        equals(arg0: any): boolean;
        getImageCapabilities(): Internal.ImageCapabilities;
        get class(): typeof any
        get bounds(): Internal.Rectangle
        get normalizingTransform(): Internal.AffineTransform
        get device(): Internal.GraphicsDevice
        get colorModel(): Internal.ColorModel
        get translucencyCapable(): boolean
        get defaultTransform(): Internal.AffineTransform
        get bufferCapabilities(): Internal.BufferCapabilities
        get imageCapabilities(): Internal.ImageCapabilities
    }
    type GraphicsConfiguration_ = GraphicsConfiguration;
    class SetableSupplier <T> implements Internal.Supplier<T> {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        get(): T;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        set(object: T): void;
        get class(): typeof any
    }
    type SetableSupplier_<T> = SetableSupplier<T>;
    class FlowingFluidBuilder extends Internal.BuilderBase<Internal.FlowingFluid> {
        constructor(b: Internal.FluidBuilder_)
        getClass(): typeof any;
        createAdditionalObjects(): void;
        createObject(): any;
        getTranslationKeyGroup(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.FlowingFluid>;
        toString(): string;
        transformObject(obj: Internal.FlowingFluid_): Internal.FlowingFluid;
        notifyAll(): void;
        get(): Internal.FlowingFluid;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.FlowingFluid>;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.FlowingFluid>;
        getBuilderTranslationKey(): string;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.FlowingFluid>;
        hashCode(): number;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.FlowingFluid>;
        wait(): void;
        wait(arg0: number): void;
        generateLang(lang: Internal.LangEventJS_): void;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get class(): typeof any
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        readonly fluidBuilder: Internal.FluidBuilder;
    }
    type FlowingFluidBuilder_ = FlowingFluidBuilder;
    class ControlledContraptionEntity extends Internal.AbstractContraptionEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        getXRot(): number;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        handler$efe005$onTick(ci: Internal.CallbackInfo_): void;
        getBlockZ(): number;
        isSuppressingBounce(): boolean;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
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
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        setContraptionMotion(arg0: Vec3d_): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        isActive(): boolean;
        handler$gkj000$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getBlockY(): number;
        callDoWaterSplashEffect(): void;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
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
        supportsTerrainCollision(): boolean;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        getAnchorVec(): Vec3d;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        applyRotation(arg0: Vec3d_, arg1: number): Vec3d;
        tickActors(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        addSittingPassenger(arg0: Internal.Entity_, arg1: number): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        handlePlayerInteraction(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.InteractionHand_): boolean;
        toLocalVector(arg0: Vec3d_, arg1: number): Vec3d;
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
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getContraption(): Internal.Contraption;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        getDynamicLightY(): number;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        stopControlling(arg0: BlockPos_): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        handler$bog000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        alignPassenger(arg0: Internal.Entity_): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
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
        readSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        getScriptType(): Internal.ScriptType;
        handler$cbh000$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
        registerColliding(arg0: Internal.Entity_): void;
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
        writeSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        setRotationAxis(arg0: Internal.Direction$Axis_): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        static create(arg0: Internal.Level_, arg1: Internal.IControlContraption_, arg2: Internal.Contraption_): Internal.ControlledContraptionEntity;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        modifyReturnValue$hfa000$create$onFireImmune(arg0: boolean): boolean;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        handler$eno000$removed(arg0: Internal.CallbackInfo_): void;
        dismountsUnderwater(): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        m_19956_(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        startControlling(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        reverseRotation(arg0: Vec3d_, arg1: number): Vec3d;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        ad_astra_giselle_addon$getCustomData(): Internal.CompoundTag;
        getMyRidingOffset(): number;
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
        getContraptionName(): net.minecraft.network.chat.Component;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getPrevPositionVec(): Vec3d;
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
        getPassengerPosition(arg0: Internal.Entity_, arg1: number): Vec3d;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        sdl$dynamicLightTick(): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        clean(): void;
        toLocalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        toGlobalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        handler$efe000$onRemove(ci: Internal.CallbackInfo_): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        markFusionRecomputeModels(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        collisionEnabled(): boolean;
        setYaw(arg0: number): void;
        toGlobalVector(arg0: Vec3d_, arg1: number): Vec3d;
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
        handler$dcb001$saveWithoutId(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        isRewinding(): boolean;
        self(): Internal.Entity;
        sdl$getDynamicLightY(): number;
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
        setAngle(arg0: number): void;
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
        sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        isPrevPosInvalid(): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        setXRot(arg0: number): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        sdl$getDynamicLightZ(): number;
        setBlock(arg0: BlockPos_, arg1: Internal.StructureTemplate$StructureBlockInfo_): void;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        static yawFromVector(arg0: Vec3d_): number;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        is(arg0: Internal.Entity_): boolean;
        updateFluidOnEyes(): void;
        handler$gjl000$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        shouldUpdateDynamicLight(): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        static build(arg0: Internal.EntityType$Builder_<any>): Internal.EntityType$Builder<any>;
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
        getContactPointMotion(arg0: Vec3d_): Vec3d;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        handler$dcb001$load(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
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
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getBlockStateOn(): Internal.BlockState;
        applyLocalTransforms(arg0: Internal.PoseStack_, arg1: number): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isAliveOrStale(): boolean;
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
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        isReadyForRender(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        static pitchFromVector(arg0: Vec3d_): number;
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
        modifyExpressionValue$hfa000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
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
        canUpdate(): boolean;
        getYawOffset(): number;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        isAlive(): boolean;
        localvar$bmo000$apoth_checkFallDamageWithGravity(arg0: number): number;
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
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$eno001$onRemove(arg0: Internal.CallbackInfo_): void;
        getDataMap(): Internal.Map<any, any>;
        getPercentFrozen(): number;
        getPickResult(): Internal.ItemStack;
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
        getRotationAxis(): Internal.Direction$Axis;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        handler$eno009$onTick(arg0: Internal.CallbackInfo_): void;
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
        getRotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState;
        move(arg0: number, arg1: number, arg2: number): void;
        "getServer()"(): Internal.MinecraftServer;
        setYRot(arg0: number): void;
        isFrame(): boolean;
        refreshPSIs(): void;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        railways$setSkipActorStop(arg0: boolean): void;
        handler$ene008$onTick(arg0: Internal.CallbackInfo_): void;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        setRotation(yaw: number, pitch: number): void;
        handler$fhb000$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isDynamicLightEnabled(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getControllingPlayer(): Internal.Optional<Internal.UUID>;
        sdl$resetDynamicLight(): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        control(arg0: BlockPos_, arg1: Internal.Collection_<number>, arg2: Internal.Player_): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getPrevAnchorVec(): Vec3d;
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
        isStalled(): boolean;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        disassemble(): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        getAngle(arg0: number): number;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        wait(arg0: number, arg1: number): void;
        railways$moveCollidedEntitiesOnDisassembly(arg0: Internal.StructureTransform_): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        lithiumSetClimbingMobCachingSectionUpdateBehavior(listening: boolean): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
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
        handler$gjl000$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        setControllingPlayer(arg0: Internal.UUID_): void;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get XRot(): number
        get blockZ(): number
        get suppressingBounce(): boolean
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        get passengersAndSelf(): Internal.Stream<any>
        set maxUpStep(arg0: number)
        get noEndimationPlaying(): boolean
        set contraptionMotion(arg0: Vec3d_)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get active(): boolean
        get playingEndimation(): Internal.PlayableEndimation
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get anchorVec(): Vec3d
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get encodeId(): string
        get contraption(): Internal.Contraption
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get dynamicLightY(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get dirtyEntries(): Internal.Set<any>
        set rotationAxis(arg0: Internal.Direction$Axis_)
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get contraptionName(): net.minecraft.network.chat.Component
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get prevPositionVec(): Vec3d
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
        set angle(arg0: number)
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get isInsidePortal(): boolean
        get server(): Internal.MinecraftServer
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get prevPosInvalid(): boolean
        set XRot(arg0: number)
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
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
        get pos(): Internal.Position
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get animationTick(): number
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set dataMap(arg0: Internal.Map_<any, any>)
        get aliveOrStale(): boolean
        set remainingFireTicks(arg0: number)
        get cachedFeetBlockState(): Internal.BlockState
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get readyForRender(): boolean
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get yawOffset(): number
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get YRot(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        get pickResult(): Internal.ItemStack
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        get rotationAxis(): Internal.Direction$Axis
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get dirty(): boolean
        get rotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState
        get "server()"(): Internal.MinecraftServer
        set YRot(arg0: number)
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get indirectPassengers(): Internal.Iterable<any>
        get dynamicLightEnabled(): boolean
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get controllingPlayer(): Internal.Optional<Internal.UUID>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get prevAnchorVec(): Vec3d
        get passenger(): boolean
        get dynamicLightWorld(): Internal.Level
        get stalled(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set animationTick(arg0: number)
        set dynamicLightEnabled(arg0: boolean)
        get endimatedState(): Internal.Endimatable$EndimatedState
        set controllingPlayer(arg0: Internal.UUID_)
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type ControlledContraptionEntity_ = ControlledContraptionEntity;
    class FlintAndSteelItem extends Internal.Item {
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
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
    type FlintAndSteelItem_ = FlintAndSteelItem;
    class SchematicTableBlockEntity extends Internal.SmartBlockEntity implements Internal.MenuProvider, Internal.IInteractionChecker {
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
        startUpload(arg0: string): void;
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
        finishUpload(): void;
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
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        uploadingSchematic: string;
        inventory: Internal.SchematicTableBlockEntity$SchematicTableInventory;
        isUploading: boolean;
        uploadingProgress: number;
        sendUpdate: boolean;
    }
    type SchematicTableBlockEntity_ = SchematicTableBlockEntity;
    interface ObjDoubleConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type ObjDoubleConsumer_<T> = ObjDoubleConsumer<T> | ((arg0: T, arg1: number)=> void);
    abstract class ControllableDrawerTile <T extends Internal.ControllableDrawerTile<T>> extends Internal.ActiveTile<T> {
        constructor(arg0: Internal.BasicTileBlock_<T>, arg1: Internal.BlockEntityType_<T>, arg2: BlockPos_, arg3: Internal.BlockState_)
        setNeedsUpgradeCache(arg0: boolean): void;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        addFilter(arg0: Internal.IFilter_<any>): void;
        getFacingDirection(): Internal.Direction;
        requestModelDataUpdate(): void;
        onNeighborChanged(arg0: Internal.Block_, arg1: BlockPos_): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        addTank(arg0: Internal.FluidTankComponent_<T>): void;
        setLocked(arg0: boolean): void;
        canInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        markComponentForUpdate(arg0: boolean): void;
        isEverythingEmpty(): boolean;
        handleButtonMessage(arg0: number, arg1: Internal.Player_, arg2: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        initClient(): void;
        getMultiButtonComponent(): Internal.MultiButtonComponent;
        updateNeigh(): void;
        addBundle(arg0: Internal.IComponentBundle_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        getTitleColor(): number;
        abstract getSelf(): T;
        setRemoved(): void;
        onActivated(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Direction_, arg3: number, arg4: number, arg5: number): Internal.InteractionResult;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        addGuiAddonFactory(arg0: Internal.IFactory_<Internal.IScreenAddon>): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getStorageMultiplier(): number;
        addContainerAddonFactory(arg0: Internal.IFactory_<Internal.IContainerAddon>): void;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        hasDowngrade(): boolean;
        getCapability<U>(arg0: Internal.Capability_<U>, arg1: Internal.Direction_): Internal.LazyOptional<U>;
        clearControllerPos(): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        abstract getStorageSlotAmount(): number;
        isServer(): boolean;
        isCreative(): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        toggleLocking(): void;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getComponentWorld(): Internal.Level;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightX(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        getFacingHandlerWorkAmount(): number;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getControllerPos(): BlockPos;
        getBasicTileBlock(): Internal.BasicTileBlock<T>;
        sdl$dynamicLightTick(): void;
        getMultiTankComponent(): Internal.MultiTankComponent<T>;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        getHandlerFromName(arg0: string): Internal.IFacingComponent;
        getAssetProvider(): Internal.IAssetProvider;
        toggleOption(arg0: Internal.ConfigurationToolItem$ConfigurationAction_): void;
        syncObject(arg0: any): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        getMultiInventoryComponent(): Internal.MultiInventoryComponent<T>;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        markComponentDirty(): void;
        openGui(arg0: Internal.Player_): void;
        isVoid(): boolean;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        abstract getBaseSize(arg0: number): number;
        handleSyncObject(arg0: Internal.CompoundTag_): void;
        onLoad(): void;
        getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,com.hrznstudio.titanium.block.tile.ActiveTile)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ActiveTile_<any>): void;
        sdl$getDynamicLightY(): number;
        getStorageDiv(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        isClient(): boolean;
        getUtilitySlotAmount(): number;
        getBlockState(): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getStorageUpgrades(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getTitleXPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        onSlotActivated(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Direction_, arg3: number, arg4: number, arg5: number, arg6: number): Internal.InteractionResult;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getDrawerOptions(): Internal.ControllableDrawerTile$DrawerOptions;
        addButton(arg0: Internal.ButtonComponent_): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getUtilityUpgrades(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>;
        abstract getStorageUpgradesConstructor(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>;
        getLevel(): Internal.Level;
        getWorldPosCallable(): Internal.ContainerLevelAccess;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        onClicked(arg0: Internal.Player_, arg1: number): void;
        addInventory(arg0: Internal.InventoryComponent_<T>): void;
        sdl$getDynamicLightZ(): number;
        clientTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ActiveTile_<any>): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        addProgressBar(arg0: Internal.ProgressBarComponent_<T>): void;
        getTitleYPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,com.buuz135.functionalstorage.block.tile.ControllableDrawerTile)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setControllerPos(arg0: BlockPos_): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        isLocked(): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        getFacingHandlerWorkTime(): number;
        getMultiFilterComponent(): Internal.MultiFilterComponent;
        equals(arg0: any): boolean;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.block.entity.BlockEntity)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        set needsUpgradeCache(arg0: boolean)
        get facingDirection(): Internal.Direction
        set locked(arg0: boolean)
        get everythingEmpty(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get multiButtonComponent(): Internal.MultiButtonComponent
        get "updatePacket()"(): Internal.Packet<any>
        get titleColor(): number
        get self(): T
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get storageMultiplier(): number
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get storageSlotAmount(): number
        get server(): boolean
        get creative(): boolean
        get updatePacket(): Internal.Packet<any>
        get componentWorld(): Internal.Level
        get persistentData(): Internal.CompoundTag
        get facingHandlerWorkAmount(): number
        get controllerPos(): BlockPos
        get basicTileBlock(): Internal.BasicTileBlock<T>
        get multiTankComponent(): Internal.MultiTankComponent<T>
        get assetProvider(): Internal.IAssetProvider
        set worldPosition(arg0: BlockPos_)
        get multiInventoryComponent(): Internal.MultiInventoryComponent<T>
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get "void"(): boolean
        get blockPos(): BlockPos
        get removed(): boolean
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        get storageDiv(): number
        get client(): boolean
        get utilitySlotAmount(): number
        get blockState(): Internal.BlockState
        get storageUpgrades(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
        get drawerOptions(): Internal.ControllableDrawerTile$DrawerOptions
        get utilityUpgrades(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>
        get storageUpgradesConstructor(): Internal.InventoryComponent<Internal.ControllableDrawerTile<T>>
        get level(): Internal.Level
        get worldPosCallable(): Internal.ContainerLevelAccess
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        set controllerPos(arg0: BlockPos_)
        get locked(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get facingHandlerWorkTime(): number
        get multiFilterComponent(): Internal.MultiFilterComponent
    }
    type ControllableDrawerTile_<T extends Internal.ControllableDrawerTile<T>> = ControllableDrawerTile<T>;
    class FluidRegistry$TransparentRenderedPlaceableFluidType extends Internal.FluidRegistry$TintedFluidType {
        constructor(arg0: Internal.FluidType$Properties_, arg1: ResourceLocation_, arg2: ResourceLocation_)
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getDescriptionId(): string;
        getTintColor(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getRarity(): Internal.Rarity;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDescription(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getDensity(arg0: Internal.FluidStack_): number;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        canHydrate(arg0: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getViscosity(arg0: Internal.FluidStack_): number;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get descriptionId(): string
        get rarity(): Internal.Rarity
        get temperature(): number
        get viscosity(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type FluidRegistry$TransparentRenderedPlaceableFluidType_ = FluidRegistry$TransparentRenderedPlaceableFluidType;
    interface ComponentKJS extends net.minecraft.network.chat.Component, Internal.JsonSerializable, Internal.WrappedJS {
        abstract getVisualOrderText(): Internal.FormattedCharSequence;
        toFlatList(): Internal.List<net.minecraft.network.chat.Component>;
        hasStyle(): boolean;
        darkRed(): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        toJson(): Internal.JsonElement;
        clickOpenUrl(url: string): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        darkBlue(): Internal.MutableComponent;
        obfuscated(value: boolean): Internal.MutableComponent;
        getString(arg0: number): string;
        darkGreen(): Internal.MutableComponent;
        color(c: dev.latvian.mods.rhino.mod.util.color.Color_): Internal.MutableComponent;
        bold(): Internal.MutableComponent;
        underlined(): Internal.MutableComponent;
        yellow(): Internal.MutableComponent;
        nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<net.minecraft.network.chat.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        darkPurple(): Internal.MutableComponent;
        clickCopy(text: string): Internal.MutableComponent;
        blue(): Internal.MutableComponent;
        translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        hover(s: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        bold(value: boolean): Internal.MutableComponent;
        score(arg0: string, arg1: string): Internal.MutableComponent;
        abstract getContents(): Internal.ComponentContents;
        aqua(): Internal.MutableComponent;
        "composite(java.util.List)"(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        green(): Internal.MutableComponent;
        clickOpenFile(path: string): Internal.MutableComponent;
        literal(arg0: string): Internal.MutableComponent;
        black(): Internal.MutableComponent;
        obfuscated(): Internal.MutableComponent;
        strikethrough(value: boolean): Internal.MutableComponent;
        insertion(s: string): Internal.MutableComponent;
        translatable(arg0: string): Internal.MutableComponent;
        red(): Internal.MutableComponent;
        clickRunCommand(command: string): Internal.MutableComponent;
        italic(): Internal.MutableComponent;
        translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        empty(): Internal.MutableComponent;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        component(): net.minecraft.network.chat.Component;
        click(s: Internal.ClickEvent_): Internal.MutableComponent;
        isEmpty(): boolean;
        underlined(value: boolean): Internal.MutableComponent;
        asIterable(): Internal.Iterable<net.minecraft.network.chat.Component>;
        abstract getStyle(): Internal.Style;
        self(): Internal.MutableComponent;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        rawComponent(): Internal.MutableComponent;
        gray(): Internal.MutableComponent;
        font(s: ResourceLocation_): Internal.MutableComponent;
        abstract getSiblings(): Internal.List<net.minecraft.network.chat.Component>;
        darkAqua(): Internal.MutableComponent;
        getString(): string;
        nullToEmpty(arg0: string): net.minecraft.network.chat.Component;
        translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        "composite(net.minecraft.network.chat.FormattedText[])"(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        darkGray(): Internal.MutableComponent;
        clickChangePage(page: string): Internal.MutableComponent;
        noColor(): Internal.MutableComponent;
        plainCopy(): Internal.MutableComponent;
        keybind(arg0: string): Internal.MutableComponent;
        strikethrough(): Internal.MutableComponent;
        clickSuggestCommand(command: string): Internal.MutableComponent;
        gold(): Internal.MutableComponent;
        contains(arg0: net.minecraft.network.chat.Component_): boolean;
        hasSiblings(): boolean;
        white(): Internal.MutableComponent;
        composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        italic(value: boolean): Internal.MutableComponent;
        of(arg0: string): Internal.FormattedText;
        composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        rawCopy(): Internal.MutableComponent;
        lightPurple(): Internal.MutableComponent;
        toFlatList(arg0: Internal.Style_): Internal.List<net.minecraft.network.chat.Component>;
        selector(arg0: string, arg1: Internal.Optional_<net.minecraft.network.chat.Component>): Internal.MutableComponent;
        copy(): Internal.MutableComponent;
        forEach(action: Internal.Consumer_<net.minecraft.network.chat.Component>): void;
        get visualOrderText(): Internal.FormattedCharSequence
        get contents(): Internal.ComponentContents
        get empty(): boolean
        get style(): Internal.Style
        get siblings(): Internal.List<net.minecraft.network.chat.Component>
        get string(): string
    }
    type ComponentKJS_ = ComponentKJS;
    interface IForgeBoat {
        "canBoatInFluid(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        canBoatInFluid(arg0: Internal.FluidState_): boolean;
        shouldUpdateFluidWhileRiding(arg0: Internal.FluidState_, arg1: Internal.Entity_): boolean;
        "canBoatInFluid(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBoatInFluid(arg0: Internal.FluidType_): boolean;
    }
    type IForgeBoat_ = IForgeBoat;
    interface Spliterator$OfInt extends Internal.Spliterator$OfPrimitive<number, Internal.IntConsumer, Internal.Spliterator$OfInt> {
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: any): void;
        abstract "tryAdvance(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): boolean;
        hasCharacteristics(arg0: number): boolean;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        "tryAdvance(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract estimateSize(): number;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        "tryAdvance(java.lang.Object)"(arg0: any): boolean;
        abstract tryAdvance(arg0: Internal.IntConsumer_): boolean;
        getComparator(): Internal.Comparator<number>;
        getExactSizeIfKnown(): number;
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        get comparator(): Internal.Comparator<number>
        get exactSizeIfKnown(): number
    }
    type Spliterator$OfInt_ = Spliterator$OfInt;
    interface Object2ReferenceFunction <K, V> extends it.unimi.dsi.fastutil.Function<K, V> {
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ReferenceFunction<V>;
        getOrDefault(arg0: any, arg1: V): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Object2CharFunction<K>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ReferenceFunction<V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ReferenceFunction<V>;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Object2IntFunction<K>;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        apply(arg0: K): V;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ReferenceFunction<T, V>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ReferenceFunction<T, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ReferenceFunction<V>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ReferenceFunction<V>;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Object2LongFunction<K>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ReferenceFunction<V>;
        size(): number;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ReferenceFunction<V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        clear(): void;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: any): V;
    }
    type Object2ReferenceFunction_<K, V> = ((arg0: any)=> V) | Object2ReferenceFunction<K, V>;
    class BossHealthOverlay {
        constructor(arg0: Internal.Minecraft_)
        shouldCreateWorldFog(): boolean;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        render(arg0: Internal.GuiGraphics_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        shouldPlayMusic(): boolean;
        wait(arg0: number): void;
        handler$gmk006$init(info: Internal.CallbackInfo_): void;
        reset(): void;
        update(arg0: Internal.ClientboundBossEventPacket_): void;
        equals(arg0: any): boolean;
        shouldDarkenScreen(): boolean;
        get class(): typeof any
    }
    type BossHealthOverlay_ = BossHealthOverlay;
    class MediumQuadrupleWheelBogeyBlock extends Internal.CRBogeyBlock {
        constructor(props: Internal.BlockBehaviour$Properties_)
        allowsSingleBogeyCarriage(): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isUpsideDown(arg0: Internal.BlockState_): boolean;
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        getWheelRadius(): number;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        getConnectorAnchorOffset(arg0: boolean): Vec3d;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CRBogeyBlockEntity>): void;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getWheelPointSpacing(): number;
        getMatchingBogey(arg0: Internal.Direction_, arg1: boolean): Internal.BlockState;
        getDefaultStyle(): Internal.BogeyStyle;
        getSize(): Internal.BogeySizes$BogeySize;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.CRBogeyBlockEntity>;
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
        getStateOfSize(arg0: Internal.AbstractBogeyBlockEntity_, arg1: Internal.BogeySizes$BogeySize_): Internal.BlockState;
        getStickySurfaces(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.EnumSet<Internal.Direction>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CRBogeyBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        propertiesToCopy(): Internal.List<Internal.Property<any>>;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        captureBlockEntityForTrain(): boolean;
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
        canBeUpsideDown(): boolean;
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
        getBogeyUpDirection(): Internal.Direction;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
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
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getNextStyle(arg0: Internal.Level_, arg1: BlockPos_): Internal.BogeyStyle;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getValidPathfindingTypes(arg0: Internal.BogeyStyle_): Internal.Set<Internal.TrackMaterial$TrackType>;
        getNextSize(arg0: Internal.AbstractBogeyBlockEntity_): Internal.BlockState;
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
        getTrackType(style: Internal.BogeyStyle_): Internal.TrackMaterial$TrackType;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CRBogeyBlockEntity;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isTrackAxisAlongFirstCoordinate(arg0: Internal.BlockState_): boolean;
        getBlockEntityClass(): typeof Internal.CRBogeyBlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getNextSize(arg0: Internal.Level_, arg1: BlockPos_): Internal.BlockState;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isOnIncompatibleTrack(arg0: Internal.Carriage_, arg1: boolean): boolean;
        getVersion(arg0: Internal.BlockState_, arg1: boolean): Internal.BlockState;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getCloneItemStack(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getConnectorAnchorOffset(): Vec3d;
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
        static registerStandardBogey(arg0: ResourceLocation_): void;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CRBogeyBlockEntity>;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getNextStyle(arg0: Internal.BogeyStyle_): Internal.BogeyStyle;
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
        get wheelRadius(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get wheelPointSpacing(): number
        get defaultStyle(): Internal.BogeyStyle
        get size(): Internal.BogeySizes$BogeySize
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.CRBogeyBlockEntity>
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get bogeyUpDirection(): Internal.Direction
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockEntityClass(): typeof Internal.CRBogeyBlockEntity
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get connectorAnchorOffset(): Vec3d
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type MediumQuadrupleWheelBogeyBlock_ = MediumQuadrupleWheelBogeyBlock;
    class ContraptionType {
        constructor(arg0: Internal.Supplier_<Internal.Contraption>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        static fromType(arg0: string): Internal.Contraption;
        notifyAll(): void;
        wait(arg0: number): void;
        is(arg0: Internal.TagKey_<Internal.ContraptionType>): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly holder: Internal.Holder$Reference<Internal.ContraptionType>;
        readonly factory: Internal.Supplier<Internal.Contraption>;
    }
    type ContraptionType_ = ContraptionType | Special.ContraptionType;
    class BlockEvent$CropGrowEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_)
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
        getPos(): BlockPos;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getState(): Internal.BlockState;
        getLevel(): Internal.LevelAccessor;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get pos(): BlockPos
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get state(): Internal.BlockState
        get level(): Internal.LevelAccessor
    }
    type BlockEvent$CropGrowEvent_ = BlockEvent$CropGrowEvent;
    interface IZetaLoadEvent {
    }
    type IZetaLoadEvent_ = IZetaLoadEvent;
    abstract class SimpleInventoryBlockEntity extends Internal.ZetaBlockEntity implements Internal.WorldlyContainer {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
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
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getItem(arg0: number): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        countItem(arg0: Internal.Item_): number;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        isAutomationEnabled(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        onComparatorAdded(direction: Internal.Direction_, offset: number): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        readSharedNBT(arg0: Internal.CompoundTag_): void;
        getHeight(): number;
        sync(): void;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        clear(): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        inventoryChanged(arg0: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        onLoad(): void;
        abstract getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getSlotsForFace(arg0: Internal.Direction_): number[];
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        writeSharedNBT(arg0: Internal.CompoundTag_): void;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
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
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get automationEnabled(): boolean
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type SimpleInventoryBlockEntity_ = SimpleInventoryBlockEntity;
    class NumberComponent$FloatRange extends Internal.Record implements Internal.NumberComponent<number> {
        constructor(min: number, max: number)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        write(recipe: Internal.RecipeJS_, value: number): Internal.JsonPrimitive;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        orSelf(): Internal.RecipeComponent<number>;
        min(min: number): this;
        replaceOutput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): number;
        asArray(): Internal.ArrayRecipeComponent<number>;
        max(): number;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, number>>;
        checkValueHasChanged(oldValue: number, newValue: number): boolean;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        static intRange(min: number, max: number): Internal.NumberComponent$IntRange;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        getClass(): typeof any;
        checkEmpty(key: Internal.RecipeKey_<number>, value: number): string;
        static floatRange(min: number, max: number): Internal.NumberComponent$FloatRange;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        min(): number;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        static doubleRange(min: number, max: number): Internal.NumberComponent$DoubleRange;
        replaceInput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): number;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<number, O>;
        static longRange(min: number, max: number): Internal.NumberComponent$LongRange;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<number>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        key(name: string): Internal.RecipeKey<number>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<number>;
        static builder(): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        toString(): string;
        notifyAll(): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<number, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        max(max: number): this;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Float)"(recipe: Internal.RecipeJS_, value: number): Internal.JsonPrimitive;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<number>;
        hashCode(): number;
        wait(arg0: number): void;
        isInput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, number>>;
        equals(o: any): boolean;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, map: Internal.Map_<any, any>): void;
        get class(): typeof any
    }
    type NumberComponent$FloatRange_ = NumberComponent$FloatRange;
    class NyliumBlock extends Internal.Block implements Internal.BonemealableBlock {
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
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
    type NyliumBlock_ = NyliumBlock;
    class DirtBucket extends Internal.Item {
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
        tryPlaceContainedDirt(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
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
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
    type DirtBucket_ = DirtBucket;
    class SimpleBlockItem extends Internal.BlockItem implements Internal.ItemTooltipStyleProvider {
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
        getTooltipKey(arg0: Internal.ItemStack_): string;
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
        getTooltipStyle(): Internal.ColorStyles$ITooltipStyle;
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
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getTooltipColor(arg0: Internal.ItemStack_): number;
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
        getTooltipText(arg0: Internal.ItemStack_): Internal.MutableComponent;
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
        getTooltipColorWithAlpha(arg0: Internal.ItemStack_): number;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
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
        get tooltipStyle(): Internal.ColorStyles$ITooltipStyle
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
    type SimpleBlockItem_ = SimpleBlockItem;
    class KeyPairResponse extends Internal.Response {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPrivateKey(): string;
        getExpiresAt(): string;
        getError(): string;
        getPublicKey(): string;
        getErrorMessage(): string;
        hashCode(): number;
        getPublicKeySignature(): Internal.ByteBuffer;
        getCause(): string;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getRefreshedAfter(): string;
        get class(): typeof any
        get privateKey(): string
        get expiresAt(): string
        get error(): string
        get publicKey(): string
        get errorMessage(): string
        get publicKeySignature(): Internal.ByteBuffer
        get cause(): string
        get refreshedAfter(): string
    }
    type KeyPairResponse_ = KeyPairResponse;
    class TropicalFish$Variant extends Internal.Record {
        constructor(arg0: Internal.TropicalFish$Pattern_, arg1: Internal.DyeColor_, arg2: Internal.DyeColor_)
        getClass(): typeof any;
        toString(): string;
        patternColor(): Internal.DyeColor;
        baseColor(): Internal.DyeColor;
        notifyAll(): void;
        getPackedId(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        pattern(): Internal.TropicalFish$Pattern;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get packedId(): number
    }
    type TropicalFish$Variant_ = TropicalFish$Variant;
    class ClientboundContainerSetSlotPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.ItemStack_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getContainerId(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getStateId(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getSlot(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get item(): Internal.ItemStack
        get containerId(): number
        get skippable(): boolean
        get stateId(): number
        get slot(): number
        static readonly CARRIED_ITEM: (-1) & (number);
        static readonly PLAYER_INVENTORY: (-2) & (number);
    }
    type ClientboundContainerSetSlotPacket_ = ClientboundContainerSetSlotPacket;
    class CrashReportCategory {
        constructor(arg0: string)
        setDetail(arg0: string, arg1: Internal.CrashReportDetail_<string>): this;
        getClass(): typeof any;
        applyStackTrace(arg0: Internal.Throwable_): void;
        getStacktrace(): Internal.StackTraceElement[];
        fillInStackTrace(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static formatLocation(arg0: Internal.LevelHeightAccessor_, arg1: number, arg2: number, arg3: number): string;
        setDetail(arg0: string, arg1: any): this;
        setDetailError(arg0: string, arg1: Internal.Throwable_): void;
        static "formatLocation(net.minecraft.world.level.LevelHeightAccessor,double,double,double)"(arg0: Internal.LevelHeightAccessor_, arg1: number, arg2: number, arg3: number): string;
        toString(): string;
        validateStackTrace(arg0: Internal.StackTraceElement_, arg1: Internal.StackTraceElement_): boolean;
        notifyAll(): void;
        static formatLocation(arg0: Internal.LevelHeightAccessor_, arg1: number, arg2: number, arg3: number): string;
        getDetails(arg0: Internal.StringBuilder_): void;
        "setDetail(java.lang.String,net.minecraft.CrashReportDetail)"(arg0: string, arg1: Internal.CrashReportDetail_<string>): this;
        hashCode(): number;
        static formatLocation(arg0: Internal.LevelHeightAccessor_, arg1: BlockPos_): string;
        wait(): void;
        static populateBlockDetails(arg0: Internal.CrashReportCategory_, arg1: Internal.LevelHeightAccessor_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(arg0: number): void;
        static "formatLocation(net.minecraft.world.level.LevelHeightAccessor,int,int,int)"(arg0: Internal.LevelHeightAccessor_, arg1: number, arg2: number, arg3: number): string;
        "setDetail(java.lang.String,java.lang.Object)"(arg0: string, arg1: any): this;
        equals(arg0: any): boolean;
        trimStacktrace(arg0: number): void;
        get class(): typeof any
        get stacktrace(): Internal.StackTraceElement[]
    }
    type CrashReportCategory_ = CrashReportCategory;
    abstract class UnixFileSystem extends Internal.FileSystem {
        getClass(): typeof any;
        getSeparator(): string;
        getRootDirectories(): Internal.Iterable<Internal.Path>;
        toString(): string;
        getFileStores(): Internal.Iterable<Internal.FileStore>;
        abstract newWatchService(): Internal.WatchService;
        notifyAll(): void;
        getPath(arg0: string, ...arg1: string[]): Internal.Path;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract supportedFileAttributeViews(): Internal.Set<string>;
        isOpen(): boolean;
        wait(): void;
        close(): void;
        getUserPrincipalLookupService(): Internal.UserPrincipalLookupService;
        wait(arg0: number): void;
        provider(): Internal.FileSystemProvider;
        isReadOnly(): boolean;
        getPathMatcher(arg0: string): Internal.PathMatcher;
        equals(arg0: any): boolean;
        get class(): typeof any
        get separator(): string
        get rootDirectories(): Internal.Iterable<Internal.Path>
        get fileStores(): Internal.Iterable<Internal.FileStore>
        get open(): boolean
        get userPrincipalLookupService(): Internal.UserPrincipalLookupService
        get readOnly(): boolean
    }
    type UnixFileSystem_ = UnixFileSystem;
    class NixieTubeBlockEntity$ComputerSignal {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        decode(arg0: number[]): void;
        encode(): number[];
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        second: Internal.NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
        first: Internal.NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
    }
    type NixieTubeBlockEntity$ComputerSignal_ = NixieTubeBlockEntity$ComputerSignal;
    class Biome implements Internal.ExtendedBiome, Internal.BiomeFTBC, Internal.BiomeAccessor, vazkii.botania.mixin.BiomeAccessor {
        getWaterColor(): number;
        getClass(): typeof any;
        getMobSettings(): Internal.MobSpawnSettings;
        getFTBCBiomeColorIndex(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        shouldMeltFrozenOceanIcebergSlightly(arg0: BlockPos_): boolean;
        setFTBCBiomeColorIndex(c: number): void;
        getDownfall(): number;
        shouldFreeze(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: boolean): boolean;
        coldEnoughToSnow(arg0: BlockPos_): boolean;
        getSpecialEffects(): Internal.BiomeSpecialEffects;
        shouldSnow(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        getTemperature(arg0: BlockPos_): number;
        warmEnoughToRain(arg0: BlockPos_): boolean;
        getFogColor(): number;
        shouldFreeze(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        setBiomeCategory(biomeCategory: number): void;
        getAmbientLoop(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        getSkyColor(): number;
        modifiableBiomeInfo(): Internal.ModifiableBiomeInfo;
        biomancy$getTemperature(arg0: BlockPos_): number;
        toString(): string;
        getModifiedClimateSettings(): Internal.Biome$ClimateSettings;
        getFoliageColor(): number;
        notifyAll(): void;
        getPrecipitationAt(arg0: BlockPos_): Internal.Biome$Precipitation;
        getAmbientAdditions(): Internal.Optional<Internal.AmbientAdditionsSettings>;
        hashCode(): number;
        getAmbientMood(): Internal.Optional<Internal.AmbientMoodSettings>;
        getBackgroundMusic(): Internal.Optional<Internal.Music>;
        getBaseTemperature(): number;
        getBiomeCategory(): number;
        getWaterFogColor(): number;
        callGetTemperature(arg0: BlockPos_): number;
        wait(): void;
        wait(arg0: number): void;
        getModifiedSpecialEffects(): Internal.BiomeSpecialEffects;
        getAmbientParticle(): Internal.Optional<Internal.AmbientParticleSettings>;
        equals(arg0: any): boolean;
        hasPrecipitation(): boolean;
        getGrassColor(arg0: number, arg1: number): number;
        getGenerationSettings(): Internal.BiomeGenerationSettings;
        get waterColor(): number
        get class(): typeof any
        get mobSettings(): Internal.MobSpawnSettings
        get FTBCBiomeColorIndex(): number
        set FTBCBiomeColorIndex(c: number)
        get downfall(): number
        get specialEffects(): Internal.BiomeSpecialEffects
        get fogColor(): number
        set biomeCategory(biomeCategory: number)
        get ambientLoop(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>
        get skyColor(): number
        get modifiedClimateSettings(): Internal.Biome$ClimateSettings
        get foliageColor(): number
        get ambientAdditions(): Internal.Optional<Internal.AmbientAdditionsSettings>
        get ambientMood(): Internal.Optional<Internal.AmbientMoodSettings>
        get backgroundMusic(): Internal.Optional<Internal.Music>
        get baseTemperature(): number
        get biomeCategory(): number
        get waterFogColor(): number
        get modifiedSpecialEffects(): Internal.BiomeSpecialEffects
        get ambientParticle(): Internal.Optional<Internal.AmbientParticleSettings>
        get generationSettings(): Internal.BiomeGenerationSettings
        /**
         * @deprecated
         * This field is marked to be removed in future!
        */
        static readonly BIOME_INFO_NOISE: (Internal.PerlinSimplexNoise) & (Internal.PerlinSimplexNoise);
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.Biome>>;
        readonly mobSettings: Internal.MobSpawnSettings;
        readonly generationSettings: Internal.BiomeGenerationSettings;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.Biome>;
        static readonly NETWORK_CODEC: Internal.Codec<Internal.Biome>;
        static readonly LIST_CODEC: Internal.Codec<Internal.HolderSet<Internal.Biome>>;
    }
    type Biome_ = Special.Biome | Biome;
    class StructurePlaceSettings implements Internal.StructureSettingsData {
        constructor()
        getClass(): typeof any;
        shouldFinalizeEntities(): boolean;
        clearProcessors(): this;
        setIgnoreEntities(arg0: boolean): this;
        getRandomPalette(arg0: Internal.List_<Internal.StructureTemplate$Palette>, arg1: BlockPos_): Internal.StructureTemplate$Palette;
        notify(): void;
        structure_gel$getStateModifier(): Internal.IModifyState;
        getBoundingBox(): Internal.BoundingBox;
        wait(arg0: number, arg1: number): void;
        addProcessor(arg0: Internal.StructureProcessor_): this;
        setRotationPivot(arg0: BlockPos_): this;
        getMirror(): Internal.Mirror;
        structure_gel$setStateModifier(arg0: Internal.IModifyState_): void;
        popProcessor(arg0: Internal.StructureProcessor_): this;
        structure_gel$isNatural(): boolean;
        setMirror(arg0: Internal.Mirror_): this;
        setKeepLiquids(arg0: boolean): this;
        setRotation(arg0: Internal.Rotation_): this;
        setFinalizeEntities(arg0: boolean): this;
        isIgnoreEntities(): boolean;
        toString(): string;
        notifyAll(): void;
        shouldKeepLiquids(): boolean;
        getRotationPivot(): BlockPos;
        setKnownShape(arg0: boolean): this;
        structure_gel$setNatural(arg0: boolean): void;
        setRandom(arg0: Internal.RandomSource_): this;
        getRotation(): Internal.Rotation;
        hashCode(): number;
        getRandom(arg0: BlockPos_): Internal.RandomSource;
        copy(): this;
        setBoundingBox(arg0: Internal.BoundingBox_): this;
        wait(): void;
        wait(arg0: number): void;
        getProcessors(): Internal.List<Internal.StructureProcessor>;
        equals(arg0: any): boolean;
        getKnownShape(): boolean;
        get class(): typeof any
        set ignoreEntities(arg0: boolean)
        get boundingBox(): Internal.BoundingBox
        set rotationPivot(arg0: BlockPos_)
        get mirror(): Internal.Mirror
        set mirror(arg0: Internal.Mirror_)
        set keepLiquids(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        set finalizeEntities(arg0: boolean)
        get ignoreEntities(): boolean
        get rotationPivot(): BlockPos
        set knownShape(arg0: boolean)
        set random(arg0: Internal.RandomSource_)
        get rotation(): Internal.Rotation
        set boundingBox(arg0: Internal.BoundingBox_)
        get processors(): Internal.List<Internal.StructureProcessor>
        get knownShape(): boolean
    }
    type StructurePlaceSettings_ = StructurePlaceSettings;
    interface PylonRepairable {
        canRepairPylon(arg0: Internal.ItemStack_): boolean;
        repairOneTick(arg0: Internal.ItemStack_): Internal.ItemStack;
        abstract getRepairManaPerTick(arg0: Internal.ItemStack_): number;
        (arg0: Internal.ItemStack): number;
    }
    type PylonRepairable_ = ((arg0: Internal.ItemStack)=> number) | PylonRepairable;
    class LootCrateItem extends Internal.Item {
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
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
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
        static getCrate(stack: Internal.ItemStack_): Internal.LootCrate;
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
        getRarity(stack: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
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
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(stack: Internal.ItemStack_): boolean;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        getName(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
    type LootCrateItem_ = LootCrateItem;
    class CraftingLinkNexus {
        constructor(arg0: Internal.UUID_)
        getClass(): typeof any;
        getRequest(): Internal.CraftingLink;
        toString(): string;
        isDead(arg0: Internal.IGrid_, arg1: Internal.CraftingService_): boolean;
        setRequest(arg0: Internal.CraftingLink_): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        removeNode(): void;
        wait(): void;
        wait(arg0: number): void;
        isRequester(arg0: Internal.ICraftingRequester_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get request(): Internal.CraftingLink
        set request(arg0: Internal.CraftingLink_)
    }
    type CraftingLinkNexus_ = CraftingLinkNexus;
    class ParallelDispatchEvent extends Internal.ModLifecycleEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "enqueueWork(java.util.function.Supplier)"<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        description(): string;
        getResult(): Internal.Event$Result;
        toString(): string;
        enqueueWork<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        notifyAll(): void;
        "enqueueWork(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
    }
    type ParallelDispatchEvent_ = ParallelDispatchEvent;
    class RefillUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.RefillUpgradeWrapper, Internal.RefillUpgradeItem> implements Internal.IFilteredUpgrade, Internal.IBlockPickResponseUpgrade, Internal.ITickableUpgrade {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getUpgradeStack(): Internal.ItemStack;
        setEnabled(arg0: boolean): void;
        allowsTargetSlotSelection(): boolean;
        isInCooldown(arg0: Internal.Level_): boolean;
        setTargetSlot(arg0: number, arg1: Internal.RefillUpgradeWrapper$TargetSlot_): void;
        tick(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        notify(): void;
        getFilterLogic(): Internal.FilterLogic;
        wait(arg0: number, arg1: number): void;
        getCooldownTime(): number;
        isEnabled(): boolean;
        canBeDisabled(): boolean;
        hashCode(): number;
        pickBlock(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        hideSettingsTab(): boolean;
        wait(): void;
        getTargetSlots(): Internal.Map<number, Internal.RefillUpgradeWrapper$TargetSlot>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        get upgradeStack(): Internal.ItemStack
        set enabled(arg0: boolean)
        get filterLogic(): Internal.FilterLogic
        get cooldownTime(): number
        get enabled(): boolean
        get targetSlots(): Internal.Map<number, Internal.RefillUpgradeWrapper$TargetSlot>
    }
    type RefillUpgradeWrapper_ = RefillUpgradeWrapper;
    class ScoreboardSaveData extends Internal.SavedData {
        constructor(arg0: Internal.Scoreboard_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isDirty(): boolean;
        notify(): void;
        "save(java.io.File)"(arg0: Internal.File_): void;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        save(arg0: Internal.File_): void;
        wait(arg0: number, arg1: number): void;
        setDirty(): void;
        hashCode(): number;
        load(arg0: Internal.CompoundTag_): this;
        wait(): void;
        wait(arg0: number): void;
        setDirty(arg0: boolean): void;
        equals(arg0: any): boolean;
        "save(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        get class(): typeof any
        get dirty(): boolean
        set dirty(arg0: boolean)
        static readonly FILE_ID: ("scoreboard") & (string);
    }
    type ScoreboardSaveData_ = ScoreboardSaveData;
    class RandomBlockStateMatchTest extends Internal.RuleTest {
        constructor(arg0: Internal.BlockState_, arg1: number)
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
        static readonly CODEC: Internal.Codec<Internal.RandomBlockStateMatchTest>;
    }
    type RandomBlockStateMatchTest_ = RandomBlockStateMatchTest;
    abstract class ImmutableMultimap <K, V> extends Internal.BaseImmutableMultimap<K, V> implements Internal.Serializable {
        getClass(): typeof any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.ImmutableMultimap<K, V>;
        containsValue(arg0: any): boolean;
        static "copyOf(java.lang.Iterable)"<K, V>(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): Internal.ImmutableMultimap<K, V>;
        entries(): Internal.Collection<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.ImmutableMultimap<K, V>;
        isEmpty(): boolean;
        asMap(): Internal.Map<any, any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.ImmutableMultimap<K, V>;
        keys(): Internal.ImmutableMultiset<K>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        keySet(): Internal.Set<any>;
        /**
         * @deprecated
        */
        putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        abstract inverse(): Internal.ImmutableMultimap<V, K>;
        /**
         * @deprecated
        */
        removeAll(arg0: any): Internal.ImmutableCollection<V>;
        values(): Internal.Collection<any>;
        /**
         * @deprecated
        */
        replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.ImmutableCollection<V>;
        static copyOf<K, V>(arg0: Internal.Multimap_<K, V>): Internal.ImmutableMultimap<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        toString(): string;
        notifyAll(): void;
        static "copyOf(com.google.common.collect.Multimap)"<K, V>(arg0: Internal.Multimap_<K, V>): Internal.ImmutableMultimap<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        static copyOf<K, V>(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): Internal.ImmutableMultimap<K, V>;
        containsEntry(arg0: any, arg1: any): boolean;
        static builder<K, V>(): Internal.ImmutableMultimap$Builder<K, V>;
        hashCode(): number;
        size(): number;
        /**
         * @deprecated
        */
        putAll(arg0: Internal.Multimap_<K, V>): boolean;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: V): boolean;
        wait(): void;
        /**
         * @deprecated
        */
        clear(): void;
        static of<K, V>(arg0: K, arg1: V): Internal.ImmutableMultimap<K, V>;
        wait(arg0: number): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.ImmutableMultimap<K, V>;
        equals(arg0: any): boolean;
        abstract get(arg0: K): Internal.ImmutableCollection<V>;
        static of<K, V>(): Internal.ImmutableMultimap<K, V>;
        get class(): typeof any
        get empty(): boolean
    }
    type ImmutableMultimap_<K, V> = ImmutableMultimap<K, V>;
    class PalettesTrapDoorBlock extends Internal.TrapDoorBlock implements Internal.IWrenchable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
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
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
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
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        onWrenched(state: Internal.BlockState_, context: Internal.UseOnContext_): Internal.InteractionResult;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        static readonly WINDOWED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type PalettesTrapDoorBlock_ = PalettesTrapDoorBlock;
    class GreatestAuraRing extends Internal.BaubleItem {
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        getEquippedAttributeModifiers(arg0: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        onWornTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setCosmeticItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        onEquipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        onUnequipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
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
        hasRender(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
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
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
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
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getCosmeticItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getBaubleUUID(arg0: Internal.ItemStack_): Internal.UUID;
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
    type GreatestAuraRing_ = GreatestAuraRing;
    class ParticleManager {
        constructor()
        getClass(): typeof any;
        toString(): string;
        render(pMatrixStack: Internal.PoseStack_, pActiveRenderInfo: Internal.Camera_, pPartialTicks: number): void;
        notifyAll(): void;
        setLevel(level: Internal.Level_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        addParticle(particle: Internal.Particle_): void;
        clearAllParticles(): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getParticleAmount(): number;
        equals(arg0: any): boolean;
        static makeParticleRenderTypeComparator(renderOrder: Internal.List_<Internal.ParticleRenderType>): Internal.Comparator<Internal.ParticleRenderType>;
        get class(): typeof any
        set level(level: Internal.Level_)
        get particleAmount(): number
        level: Internal.Level;
    }
    type ParticleManager_ = ParticleManager;
    interface IntFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type IntFunction_<R> = ((arg0: number)=> R) | IntFunction<R>;
    class TeslaCoilBlock extends Internal.Block implements Internal.IWrenchable, Internal.IBE<Internal.TeslaCoilBlockEntity> {
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TeslaCoilBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getBlockEntityClass(): typeof Internal.TeslaCoilBlockEntity;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TeslaCoilBlockEntity;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.TeslaCoilBlockEntity>;
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
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        setPowered(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TeslaCoilBlockEntity>): void;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TeslaCoilBlockEntity>;
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        get blockEntityClass(): typeof Internal.TeslaCoilBlockEntity
        set soundType(arg0: SoundType_)
        get blockEntityType(): Internal.BlockEntityType<Internal.TeslaCoilBlockEntity>
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
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly TESLA_COIL_SHAPE: (Internal.VoxelShaper) & (Internal.VoxelShaper);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type TeslaCoilBlock_ = TeslaCoilBlock;
    interface PrimitiveCodec <A> extends Internal.Codec<A> {
        optionalFieldOf(arg0: string, arg1: A): Internal.MapCodec<A>;
        empty<A>(): Internal.MapEncoder<A>;
        "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        error<A>(arg0: string): Internal.Encoder<A>;
        unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<A>;
        promotePartial(arg0: Internal.Consumer_<string>): Internal.Codec<A>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.Encoder<B>;
        simple(): Internal.Decoder$Simple<A>;
        stable(): Internal.Codec<A>;
        floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder)"<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        fieldOf(arg0: string): Internal.MapEncoder<any>;
        ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        dispatch<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<A>>, arg2: Internal.Function_<A, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Encoder<any>;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.Encoder<B>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, A>, arg2: Internal.Function_<A, Internal.Codec<E>>): Internal.MapCodec<E>;
        unit<A>(arg0: A): Internal.Codec<A>;
        intRange(arg0: number, arg1: number): Internal.Codec<number>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: A): Internal.Codec<A>;
        pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        "unit(java.lang.Object)"<A>(arg0: A): Internal.Codec<A>;
        checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        "orElse(java.util.function.UnaryOperator,java.lang.Object)"(arg0: Internal.UnaryOperator_<string>, arg1: A): Internal.Codec<A>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<A>>;
        unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        dispatchStable<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: A, arg3: Internal.Lifecycle_): Internal.MapCodec<A>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
        ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        "orElse(java.util.function.Consumer,java.lang.Object)"(arg0: Internal.Consumer_<string>, arg1: A): Internal.Codec<A>;
        orElseGet(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        map<B>(arg0: Internal.Function_<A, B>): Internal.Decoder<B>;
        orElse(arg0: A): Internal.Codec<A>;
        deprecated(arg0: number): Internal.Codec<A>;
        list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        dispatchMap<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.MapCodec<E>;
        flatMap<B>(arg0: Internal.Function_<A, Internal.DataResult<B>>): Internal.Decoder<B>;
        boxed(): Internal.Decoder$Boxed<A>;
        xmap<S>(arg0: Internal.Function_<A, S>, arg1: Internal.Function_<S, A>): Internal.Codec<S>;
        of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        "unit(java.util.function.Supplier)"<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, A>, arg2: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        comapFlatMap<S>(arg0: Internal.Function_<A, Internal.DataResult<S>>, arg1: Internal.Function_<S, A>): Internal.Codec<S>;
        of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        optionalFieldOf(arg0: string, arg1: A, arg2: Internal.Lifecycle_): Internal.MapCodec<A>;
        terminal(): Internal.Decoder$Terminal<A>;
        abstract read<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        orElse(arg0: Internal.Consumer_<string>, arg1: A): Internal.Codec<A>;
        compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        listOf(): Internal.Codec<Internal.List<A>>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<T>;
        flatXmap<S>(arg0: Internal.Function_<A, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<A>>): Internal.Codec<S>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        flatComapMap<S>(arg0: Internal.Function_<A, S>, arg1: Internal.Function_<S, Internal.DataResult<A>>): Internal.Codec<S>;
        mapResult(arg0: Internal.Codec$ResultFunction_<A>): Internal.Codec<A>;
        "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder,java.util.function.Supplier)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder,java.lang.String)"<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
        encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        abstract write<T>(arg0: Internal.DynamicOps_<T>, arg1: A): T;
    }
    type PrimitiveCodec_<A> = PrimitiveCodec<A>;
    interface CompositeStateAccessor {
        abstract getTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        get transparency(): Internal.RenderStateShard$TransparencyStateShard
        (): Internal.RenderStateShard$TransparencyStateShard_;
    }
    type CompositeStateAccessor_ = (()=> Internal.RenderStateShard$TransparencyStateShard_) | CompositeStateAccessor;
    class AdvancementRewards {
        constructor(arg0: number, arg1: ResourceLocation_[], arg2: ResourceLocation_[], arg3: Internal.CommandFunction$CacheableFunction_)
        getClass(): typeof any;
        serializeToJson(): Internal.JsonElement;
        getRecipes(): ResourceLocation[];
        toString(): string;
        grant(arg0: Internal.ServerPlayer_): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static deserialize(arg0: Internal.JsonObject_): Internal.AdvancementRewards;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get recipes(): ResourceLocation[]
        readonly loot: ResourceLocation[];
        readonly experience: number;
        readonly "function": Internal.CommandFunction$CacheableFunction;
        static readonly EMPTY: (Internal.AdvancementRewards) & (Internal.AdvancementRewards);
        readonly recipes: ResourceLocation[];
    }
    type AdvancementRewards_ = AdvancementRewards;
    class HopperMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        isValidSlotIndex(arg0: number): boolean;
        handler$gcc000$CLONE(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_, arg4: Internal.CallbackInfo_): void;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        sendAllDataToRemote(): void;
        setCarried(arg0: Internal.ItemStack_): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        static readonly CONTAINER_SIZE: (5) & (number);
    }
    type HopperMenu_ = HopperMenu;
    class CutVineBlock extends Internal.ZetaVineBlock implements Internal.IZetaBlockColorProvider {
        constructor(arg0: Internal.ZetaModule_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        canSupportAtFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBlockColorProviderName(): string;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getModule(): Internal.ZetaModule;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getSettings(): Internal.BlockBehaviour$Properties;
        doesConditionApply(): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
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
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        needsDynamicNodeTypeCheck(): boolean;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
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
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        static getPropertyForFace(arg0: Internal.Direction_): Internal.BooleanProperty;
        static isEnabled(arg0: Internal.Block_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): Internal.ZetaVineBlock;
        static "isEnabled(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getBlock(): Internal.Block;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
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
        static "isEnabled(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isAcceptableNeighbour(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        hasFaces(arg0: Internal.BlockState_): boolean;
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
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        static isEnabled(arg0: Internal.Item_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
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
        getItemColorProviderName(): string;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getUpdatedState(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.BlockState;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        get blockColorProviderName(): string
        get module(): Internal.ZetaModule
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
        set condition(arg0: Internal.BooleanSupplier_)
        get maxHorizontalOffset(): number
        get block(): Internal.Block
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
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get itemColorProviderName(): string
        get enabled(): boolean
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type CutVineBlock_ = CutVineBlock;
    class ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults {
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
        readonly blockEntities: Internal.List<Internal.BlockEntity>;
        visibilitySet: Internal.VisibilitySet;
        transparencyState: Internal.BufferBuilder$SortState;
        readonly renderedLayers: Internal.Map<Internal.RenderType, Internal.BufferBuilder$RenderedBuffer>;
        readonly globalBlockEntities: Internal.List<Internal.BlockEntity>;
    }
    type ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults_ = ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults;
    interface IManagedGridNode {
        abstract setOwningPlayer(arg0: Internal.Player_): void;
        "setVisualRepresentation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): this;
        ifPresent(arg0: Internal.BiConsumer_<Internal.IGrid, Internal.IGridNode>): boolean;
        abstract setGridColor(arg0: Internal.AEColor_): this;
        abstract setTagName(arg0: string): this;
        abstract destroy(): void;
        abstract isActive(): boolean;
        abstract isOnline(): boolean;
        abstract hasGridBooted(): boolean;
        "setVisualRepresentation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): this;
        getGrid(): Internal.IGrid;
        abstract addService<T extends Internal.IGridNodeService>(arg0: T, arg1: T): this;
        setVisualRepresentation(arg0: Internal.ItemStack_): this;
        abstract setInWorldNode(arg0: boolean): this;
        setVisualRepresentation(arg0: Internal.ItemLike_): this;
        abstract getNode(): Internal.IGridNode;
        abstract setVisualRepresentation(arg0: Internal.AEItemKey_): this;
        abstract isPowered(): boolean;
        ifPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        "ifPresent(java.util.function.Consumer)"(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        abstract setIdlePowerUsage(arg0: number): this;
        abstract isReady(): boolean;
        "ifPresent(java.util.function.BiConsumer)"(arg0: Internal.BiConsumer_<Internal.IGrid, Internal.IGridNode>): boolean;
        abstract setFlags(...arg0: Internal.GridFlags_[]): this;
        abstract setExposedOnSides(arg0: Internal.Set_<Internal.Direction>): this;
        abstract loadFromNBT(arg0: Internal.CompoundTag_): void;
        abstract setOwningPlayerId(arg0: number): void;
        abstract create(arg0: Internal.Level_, arg1: BlockPos_): void;
        abstract saveToNBT(arg0: Internal.CompoundTag_): void;
        abstract "setVisualRepresentation(appeng.api.stacks.AEItemKey)"(arg0: Internal.AEItemKey_): this;
        set owningPlayer(arg0: Internal.Player_)
        set "visualRepresentation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_)
        set gridColor(arg0: Internal.AEColor_)
        set tagName(arg0: string)
        get active(): boolean
        get online(): boolean
        set "visualRepresentation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_)
        get grid(): Internal.IGrid
        set visualRepresentation(arg0: Internal.ItemStack_)
        set inWorldNode(arg0: boolean)
        set visualRepresentation(arg0: Internal.ItemLike_)
        get node(): Internal.IGridNode
        set visualRepresentation(arg0: Internal.AEItemKey_)
        get powered(): boolean
        set idlePowerUsage(arg0: number)
        get ready(): boolean
        set flags(...arg0: Internal.GridFlags_[])
        set exposedOnSides(arg0: Internal.Set_<Internal.Direction>)
        set owningPlayerId(arg0: number)
        set "visualRepresentation(appeng.api.stacks.AEItemKey)"(arg0: Internal.AEItemKey_)
    }
    type IManagedGridNode_ = IManagedGridNode;
    interface IGameLeaves {
        abstract chloride$getRL(): ResourceLocation;
        abstract chloride$neighborCount(): number;
    }
    type IGameLeaves_ = IGameLeaves;
    abstract class SingleLineDisplayTarget extends Internal.DisplayTarget {
        constructor()
        isReserved(arg0: number, arg1: Internal.BlockEntity_, arg2: Internal.DisplayLinkContext_): boolean;
        getClass(): typeof any;
        getLineOptionText(arg0: number): net.minecraft.network.chat.Component;
        requiresComponentSanitization(): boolean;
        toString(): string;
        acceptText(arg0: number, arg1: Internal.List_<Internal.MutableComponent>, arg2: Internal.DisplayLinkContext_): void;
        notifyAll(): void;
        provideStats(arg0: Internal.DisplayLinkContext_): Internal.DisplayTargetStats;
        static reserve(arg0: number, arg1: Internal.BlockEntity_, arg2: Internal.DisplayLinkContext_): void;
        static get(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.DisplayTarget;
        static displayTarget<B extends Internal.Block, P>(arg0: com.tterrag.registrate.util.entry.RegistryEntry_<Internal.DisplayTarget>): Internal.NonNullUnaryOperator<com.tterrag.registrate.builders.BlockBuilder<B, P>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static get(arg0: ResourceLocation_): Internal.DisplayTarget;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getMultiblockBounds(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.AABB;
        get class(): typeof any
    }
    type SingleLineDisplayTarget_ = SingleLineDisplayTarget;
    class AncientFruitItem extends Internal.ZetaItem {
        constructor(arg0: Internal.ZetaModule_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDrinkingSound(): Internal.SoundEvent;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        shouldCauseReequipAnimationZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getModule(): Internal.ZetaModule;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        doesConditionApply(): boolean;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
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
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Item;
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
        getEnchantmentLevelZeta(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        damageItem(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.Consumer_<any>): number;
        wait(arg0: number): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        doesSneakBypassUseZeta(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        getMaxDamageZeta(arg0: Internal.ItemStack_): number;
        setAttackSpeed(attackSpeed: number): void;
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isEnabled(arg0: Internal.Block_): boolean;
        static "isEnabled(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getAllEnchantmentsZeta(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        isEnderMaskZeta(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        setNameKey(arg0: string): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vector3f;
        getBurnTimeZeta(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        static "isEnabled(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
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
        isRepairableZeta(arg0: Internal.ItemStack_): boolean;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isBookEnchantableZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        onItemUseFirstZeta(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        canApplyAtEnchantingTableZeta(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        damageItemZeta<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        canShearZeta(arg0: Internal.ItemStack_): boolean;
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
        static isEnabled(arg0: Internal.Item_): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        getArmorTextureZeta(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        "getItem()"(): Internal.Item;
        canElytraFlyZeta(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onEntityItemUpdateZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<any, any>;
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
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        canEquipZeta(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        getMod(): string;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Item;
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
        getEnchantmentValueZeta(arg0: Internal.ItemStack_): number;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        getDefaultTooltipHideFlagsZeta(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        get module(): Internal.ZetaModule
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
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
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
        set condition(arg0: Internal.BooleanSupplier_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get "item()"(): Internal.Item
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get enabled(): boolean
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type AncientFruitItem_ = AncientFruitItem;
    class WatchManager extends Internal.AbstractLifeCycle {
        constructor(scheduler: Internal.ConfigurationScheduler_)
        getClass(): typeof any;
        /**
         * @deprecated
        */
        getWatchers(): Internal.Map<Internal.File, Internal.FileWatcher>;
        getIntervalSeconds(): number;
        isStarting(): boolean;
        hasEventListeners(): boolean;
        isStarted(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        watch(source: Internal.Source_, watcher: Internal.Watcher_): void;
        getState(): Internal.LifeCycle$State;
        "reset(org.apache.logging.log4j.core.util.Source)"(source: Internal.Source_): void;
        reset(source: Internal.Source_): void;
        isInitialized(): boolean;
        watchFile(file: Internal.File_, fileWatcher: Internal.FileWatcher_): void;
        reset(): void;
        unwatch(source: Internal.Source_): void;
        unwatchFile(file: Internal.File_): void;
        initialize(): void;
        stop(timeout: number, timeUnit: Internal.TimeUnit_): boolean;
        isStopped(): boolean;
        toString(): string;
        checkFiles(): void;
        "reset(java.io.File)"(file: Internal.File_): void;
        notifyAll(): void;
        start(): void;
        setIntervalSeconds(intervalSeconds: number): void;
        hashCode(): number;
        wait(): void;
        getId(): Internal.UUID;
        getConfigurationWatchers(): Internal.Map<Internal.Source, Internal.Watcher>;
        stop(): void;
        wait(arg0: number): void;
        reset(file: Internal.File_): void;
        equals(arg0: any): boolean;
        isStopping(): boolean;
        get class(): typeof any
        /**
         * @deprecated
        */
        get watchers(): Internal.Map<Internal.File, Internal.FileWatcher>
        get intervalSeconds(): number
        get starting(): boolean
        get started(): boolean
        get state(): Internal.LifeCycle$State
        get initialized(): boolean
        get stopped(): boolean
        set intervalSeconds(intervalSeconds: number)
        get id(): Internal.UUID
        get configurationWatchers(): Internal.Map<Internal.Source, Internal.Watcher>
        get stopping(): boolean
    }
    type WatchManager_ = WatchManager;
    interface IOxygenCharger extends Internal.IOxygenStorage {
        extractOxygen(arg0: Internal.LivingEntity_, arg1: number, arg2: boolean): number;
        abstract getTransferAmount(): number;
        abstract setChargeMode(arg0: Internal.IChargeMode_): void;
        abstract canUseOnHot(): boolean;
        getAvailableChargeModes(): Internal.List<Internal.IChargeMode>;
        canUse(arg0: boolean, arg1: boolean): boolean;
        getOxygenAmount(): number;
        getOxygenCapacity(): number;
        abstract canUseOnCold(): boolean;
        abstract getChargeMode(): Internal.IChargeMode;
        abstract getFluidContainer(): Internal.FluidContainer;
        get transferAmount(): number
        set chargeMode(arg0: Internal.IChargeMode_)
        get availableChargeModes(): Internal.List<Internal.IChargeMode>
        get oxygenAmount(): number
        get oxygenCapacity(): number
        get chargeMode(): Internal.IChargeMode
        get fluidContainer(): Internal.FluidContainer
    }
    type IOxygenCharger_ = IOxygenCharger;
    interface RecipeConstructor$Factory {
        defaultWith(valueSupplier: Internal.BiFunction_<Internal.RecipeJS, Internal.RecipeKey<any>, any>): this;
        abstract setValues(arg0: Internal.RecipeJS_, arg1: Internal.RecipeSchemaType_, arg2: Internal.RecipeKey_<any>[], arg3: Internal.ComponentValueMap_): void;
        create(type: Internal.RecipeTypeFunction_, schemaType: Internal.RecipeSchemaType_, keys: Internal.RecipeKey_<any>[], from: Internal.ComponentValueMap_): Internal.RecipeJS;
        (arg0: Internal.RecipeJS, arg1: Internal.RecipeSchemaType, arg2: Internal.RecipeKey<any>[], arg3: Internal.ComponentValueMap): void;
        readonly DEFAULT: Internal.RecipeConstructor$Factory;
    }
    type RecipeConstructor$Factory_ = RecipeConstructor$Factory | ((arg0: Internal.RecipeJS, arg1: Internal.RecipeSchemaType, arg2: Internal.RecipeKey<any>[], arg3: Internal.ComponentValueMap)=> void);
    class RewardClaimType extends Internal.Enum<Internal.RewardClaimType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static valueOf(name: string): Internal.RewardClaimType;
        compareTo(arg0: Internal.RewardClaimType_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RewardClaimType>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        isClaimed(): boolean;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RewardClaimType;
        "compareTo(dev.ftb.mods.ftbquests.quest.reward.RewardClaimType)"(arg0: Internal.RewardClaimType_): number;
        canClaim(): boolean;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        cantClaim(): boolean;
        static values(): Internal.RewardClaimType[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get claimed(): boolean
        get declaringClass(): typeof Internal.RewardClaimType
        static readonly CAN_CLAIM: (Internal.RewardClaimType) & (Internal.RewardClaimType);
        static readonly CLAIMED: (Internal.RewardClaimType) & (Internal.RewardClaimType);
        static readonly CANT_CLAIM: (Internal.RewardClaimType) & (Internal.RewardClaimType);
    }
    type RewardClaimType_ = "can_claim" | "cant_claim" | "claimed" | RewardClaimType;
    interface ClientCommandRegistrationEvent$ClientCommandSourceStack extends Internal.SharedSuggestionProvider {
        "suggestResource(java.util.stream.Stream,com.mojang.brigadier.suggestion.SuggestionsBuilder,java.lang.String)"(arg0: Internal.Stream_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_, arg2: string): Internal.CompletableFuture<Internal.Suggestions>;
        getSelectedEntities(): Internal.Collection<string>;
        suggestCoordinates(arg0: string, arg1: Internal.Collection_<Internal.SharedSuggestionProvider$TextCoordinates>, arg2: Internal.SuggestionsBuilder_, arg3: Internal.Predicate_<string>): Internal.CompletableFuture<Internal.Suggestions>;
        suggestResource(arg0: Internal.Stream_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        suggest(arg0: Internal.Stream_<string>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        suggest(arg0: string[], arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        abstract arch$getPosition(): Vec3d;
        "suggest(java.lang.Iterable,com.mojang.brigadier.suggestion.SuggestionsBuilder)"(arg0: Internal.Iterable_<string>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        suggestResource<T>(arg0: Internal.Iterable_<T>, arg1: Internal.SuggestionsBuilder_, arg2: Internal.Function_<T, ResourceLocation>, arg3: Internal.Function_<T, com.mojang.brigadier.Message>): Internal.CompletableFuture<Internal.Suggestions>;
        abstract hasPermission(arg0: number): boolean;
        getCustomTabSugggestions(): Internal.Collection<string>;
        abstract getRecipeNames(): Internal.Stream<ResourceLocation>;
        "suggestResource(java.lang.Iterable,com.mojang.brigadier.suggestion.SuggestionsBuilder)"(arg0: Internal.Iterable_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        abstract arch$sendSuccess(arg0: Internal.Supplier_<net.minecraft.network.chat.Component>, arg1: boolean): void;
        "suggest(java.lang.String[],com.mojang.brigadier.suggestion.SuggestionsBuilder)"(arg0: string[], arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        "suggestResource(java.util.stream.Stream,com.mojang.brigadier.suggestion.SuggestionsBuilder)"(arg0: Internal.Stream_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        abstract arch$sendFailure(arg0: net.minecraft.network.chat.Component_): void;
        suggestResource(arg0: Internal.Stream_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_, arg2: string): Internal.CompletableFuture<Internal.Suggestions>;
        filterResources<T>(arg0: Internal.Iterable_<T>, arg1: string, arg2: Internal.Function_<T, ResourceLocation>, arg3: Internal.Consumer_<T>): void;
        "suggest(java.util.stream.Stream,com.mojang.brigadier.suggestion.SuggestionsBuilder)"(arg0: Internal.Stream_<string>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        matchesSubStr(arg0: string, arg1: string): boolean;
        suggest<T>(arg0: Internal.Iterable_<T>, arg1: Internal.SuggestionsBuilder_, arg2: Internal.Function_<T, string>, arg3: Internal.Function_<T, com.mojang.brigadier.Message>): Internal.CompletableFuture<Internal.Suggestions>;
        suggest2DCoordinates(arg0: string, arg1: Internal.Collection_<Internal.SharedSuggestionProvider$TextCoordinates>, arg2: Internal.SuggestionsBuilder_, arg3: Internal.Predicate_<string>): Internal.CompletableFuture<Internal.Suggestions>;
        "suggestResource(java.util.stream.Stream,com.mojang.brigadier.suggestion.SuggestionsBuilder,java.util.function.Function,java.util.function.Function)"<T>(arg0: Internal.Stream_<T>, arg1: Internal.SuggestionsBuilder_, arg2: Internal.Function_<T, ResourceLocation>, arg3: Internal.Function_<T, com.mojang.brigadier.Message>): Internal.CompletableFuture<Internal.Suggestions>;
        "suggestResource(java.lang.Iterable,com.mojang.brigadier.suggestion.SuggestionsBuilder,java.lang.String)"(arg0: Internal.Iterable_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_, arg2: string): Internal.CompletableFuture<Internal.Suggestions>;
        suggestRegistryElements(arg0: Internal.Registry_<any>, arg1: Internal.SharedSuggestionProvider$ElementSuggestionType_, arg2: Internal.SuggestionsBuilder_): void;
        suggestResource(arg0: Internal.Iterable_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        suggest(arg0: Internal.Iterable_<string>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        abstract customSuggestion(arg0: Internal.CommandContext_<any>): Internal.CompletableFuture<Internal.Suggestions>;
        abstract getAvailableSounds(): Internal.Stream<ResourceLocation>;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        abstract suggestRegistryElements(arg0: Internal.ResourceKey_<Internal.Registry<any>>, arg1: Internal.SharedSuggestionProvider$ElementSuggestionType_, arg2: Internal.SuggestionsBuilder_, arg3: Internal.CommandContext_<any>): Internal.CompletableFuture<Internal.Suggestions>;
        abstract getAllTeams(): Internal.Collection<string>;
        filterResources<T>(arg0: Internal.Iterable_<T>, arg1: string, arg2: string, arg3: Internal.Function_<T, ResourceLocation>, arg4: Internal.Consumer_<T>): void;
        abstract registryAccess(): Internal.RegistryAccess;
        getAbsoluteCoordinates(): Internal.Collection<Internal.SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): Internal.Collection<Internal.SharedSuggestionProvider$TextCoordinates>;
        abstract arch$getLevel(): Internal.ClientLevel;
        suggestResource(arg0: Internal.Iterable_<ResourceLocation>, arg1: Internal.SuggestionsBuilder_, arg2: string): Internal.CompletableFuture<Internal.Suggestions>;
        "suggestResource(java.lang.Iterable,com.mojang.brigadier.suggestion.SuggestionsBuilder,java.util.function.Function,java.util.function.Function)"<T>(arg0: Internal.Iterable_<T>, arg1: Internal.SuggestionsBuilder_, arg2: Internal.Function_<T, ResourceLocation>, arg3: Internal.Function_<T, com.mojang.brigadier.Message>): Internal.CompletableFuture<Internal.Suggestions>;
        abstract arch$getPlayer(): Internal.LocalPlayer;
        abstract arch$getRotation(): Internal.Vec2;
        abstract levels(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        abstract getOnlinePlayerNames(): Internal.Collection<string>;
        suggestResource<T>(arg0: Internal.Stream_<T>, arg1: Internal.SuggestionsBuilder_, arg2: Internal.Function_<T, ResourceLocation>, arg3: Internal.Function_<T, com.mojang.brigadier.Message>): Internal.CompletableFuture<Internal.Suggestions>;
        get selectedEntities(): Internal.Collection<string>
        get customTabSugggestions(): Internal.Collection<string>
        get recipeNames(): Internal.Stream<ResourceLocation>
        get availableSounds(): Internal.Stream<ResourceLocation>
        get allTeams(): Internal.Collection<string>
        get absoluteCoordinates(): Internal.Collection<Internal.SharedSuggestionProvider$TextCoordinates>
        get relevantCoordinates(): Internal.Collection<Internal.SharedSuggestionProvider$TextCoordinates>
        get onlinePlayerNames(): Internal.Collection<string>
    }
    type ClientCommandRegistrationEvent$ClientCommandSourceStack_ = ClientCommandRegistrationEvent$ClientCommandSourceStack;
    class MachineCoverContainer implements Internal.IEnhancedManaged, Internal.ICoverable {
        constructor(arg0: Internal.MetaMachine_)
        pasteConfig(arg0: Internal.ServerPlayer_, arg1: Internal.CompoundTag_): void;
        static doesCoverCollide(arg0: Internal.Direction_, arg1: Internal.List_<Internal.VoxelShape>, arg2: number): boolean;
        getFieldHolder(): Internal.ManagedFieldHolder;
        markDirty(name: string): void;
        getCoverAtSide(arg0: Internal.Direction_): Internal.CoverBehavior;
        getItemsRequiredToPaste(): Internal.List<Internal.ItemStack>;
        notify(): void;
        getPos(): BlockPos;
        getMachine(): Internal.MetaMachine;
        setCoverAtSide(arg0: Internal.CoverBehavior_, arg1: Internal.Direction_): void;
        hasCover(arg0: Internal.Direction_): boolean;
        unsubscribe(arg0: Internal.TickableSubscription_): void;
        dropAllCovers(): void;
        onLoad(): void;
        scheduleNeighborShapeUpdate(): void;
        hasAnyCover(): boolean;
        getCoverPlateThickness(): number;
        markDirty(): void;
        onSyncChanged(ref: Internal.IRef_, isDirty: boolean): void;
        getItemHandlerCap(arg0: Internal.Direction_, arg1: boolean): Internal.IItemHandlerModifiable;
        placeCoverOnSide(arg0: Internal.Direction_, arg1: Internal.ItemStack_, arg2: Internal.CoverDefinition_, arg3: Internal.ServerPlayer_): boolean;
        removeCover(arg0: Internal.Direction_, arg1: Internal.Player_): boolean;
        onNeighborChanged(arg0: Internal.Block_, arg1: BlockPos_, arg2: boolean): void;
        addSyncUpdateListener<T>(name: string, listener: Internal.IFieldUpdateListener_<T>): Internal.ISubscription;
        subscribeServerTick(arg0: Internal.Runnable_): Internal.TickableSubscription;
        static canPlaceCover(arg0: Internal.CoverDefinition_, arg1: Internal.ICoverable_): boolean;
        wait(): void;
        removeCover(arg0: boolean, arg1: Internal.Direction_, arg2: Internal.Player_): boolean;
        isInValid(): boolean;
        getClass(): typeof any;
        getFluidHandlerCap(arg0: Internal.Direction_, arg1: boolean): Internal.IFluidHandlerModifiable;
        static rayTraceCoverableSide(arg0: Internal.ICoverable_, arg1: Internal.Player_): Internal.Direction;
        scheduleRenderUpdate(): void;
        getSyncStorage(): Internal.FieldManagedStorage;
        subscribeServerTick(arg0: Internal.TickableSubscription_, arg1: Internal.Runnable_): Internal.TickableSubscription;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        hasDynamicCovers(): boolean;
        notifyBlockUpdate(): void;
        onUnload(): void;
        getCovers(): Internal.List<Internal.CoverBehavior>;
        static getCoverPlateBox(arg0: Internal.Direction_, arg1: number): Internal.VoxelShape;
        isRemote(): boolean;
        getBlockAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        shouldRenderBackSide(): boolean;
        onChanged(): void;
        copyConfig(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getOffsetTimer(): number;
        toString(): string;
        getFrontFacing(): Internal.Direction;
        static determineGridSideHit(arg0: Internal.BlockHitResult_): Internal.Direction;
        notifyAll(): void;
        hashCode(): number;
        wait(arg0: number): void;
        addCoverCollisionBoundingBox(): Internal.VoxelShape[];
        canPlaceCoverOnSide(arg0: Internal.CoverDefinition_, arg1: Internal.Direction_): boolean;
        static traceCoverSide(arg0: Internal.BlockHitResult_): Internal.Direction;
        equals(arg0: any): boolean;
        scheduleRender(fieldName: string, newValue: any, oldValue: any): void;
        onPersistedChanged(ref: Internal.IRef_, isDirty: boolean): void;
        get fieldHolder(): Internal.ManagedFieldHolder
        get itemsRequiredToPaste(): Internal.List<Internal.ItemStack>
        get pos(): BlockPos
        get machine(): Internal.MetaMachine
        get coverPlateThickness(): number
        get inValid(): boolean
        get class(): typeof any
        get syncStorage(): Internal.FieldManagedStorage
        get level(): Internal.Level
        get covers(): Internal.List<Internal.CoverBehavior>
        get remote(): boolean
        get offsetTimer(): number
        get frontFacing(): Internal.Direction
        static readonly MANAGED_FIELD_HOLDER: (Internal.ManagedFieldHolder) & (Internal.ManagedFieldHolder);
    }
    type MachineCoverContainer_ = MachineCoverContainer;
    interface IUpgradeRenderData {
        abstract serializeNBT(): Internal.CompoundTag;
        (): Internal.CompoundTag_;
    }
    type IUpgradeRenderData_ = (()=> Internal.CompoundTag_) | IUpgradeRenderData;
    class LivingDeathEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: DamageSource_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        getSource(): DamageSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
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
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        get source(): DamageSource
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type LivingDeathEvent_ = LivingDeathEvent;
    class ResoluteIvyItem extends Internal.Item {
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
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static hasIvy(arg0: Internal.ItemStack_): boolean;
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
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static keepDropsOnDeath(arg0: Internal.Player_): void;
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
        static onPlayerRespawn(arg0: Internal.Player_, arg1: Internal.Player_, arg2: boolean): void;
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
        static readonly TAG_KEEP: ("Botania_keepIvy") & (string);
        static readonly TAG_PLAYER_KEPT_DROPS: ("Botania_playerKeptDrops") & (string);
    }
    type ResoluteIvyItem_ = ResoluteIvyItem;
    class BeltBlockEntity extends Internal.KineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        clearKineticInformation(): void;
        static switchToBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        setController(arg0: BlockPos_): void;
        requestModelDataUpdate(): void;
        destroy(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        setCasingType(arg0: Internal.BeltBlockEntity$CasingType_): void;
        getGeneratedSpeed(): number;
        isCustomConnection(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        invalidateItemHandler(): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        getInventory(): Internal.BeltInventory;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        getFlickerScore(): number;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        static convertToAngular(arg0: number): number;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        getMovementDirection(arg0: boolean): Vec3i;
        createRenderBoundingBox(): Internal.AABB;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getController(): BlockPos;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        attachKinetics(): void;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        static convertToDirection(arg0: number, arg1: Internal.Direction_): number;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        shouldRenderNormally(): boolean;
        setNetwork(arg0: number): void;
        onSpeedChanged(arg0: number): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getOrCreateNetwork(): Internal.KineticNetwork;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        applyColor(arg0: Internal.DyeColor_): boolean;
        sdl$shouldUpdateDynamicLight(): boolean;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        setSource(arg0: BlockPos_): void;
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
        needsSpeedUpdate(): boolean;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        sdl$getDynamicLightX(): number;
        getControllerBE(): this;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        getBeltChainDirection(): Vec3i;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        sdl$dynamicLightTick(): void;
        getBeltMovementSpeed(): number;
        invalidate(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        tickAudio(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        removeSource(): void;
        setWorldPosition(arg0: BlockPos_): void;
        wait(arg0: number): void;
        addPropagationLocations(arg0: Internal.IRotate_, arg1: Internal.BlockState_, arg2: Internal.List_<BlockPos>): Internal.List<BlockPos>;
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
        calculateStressApplied(): number;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getMovementFacing(): Internal.Direction;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        setCovered(arg0: boolean): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        sdl$resetDynamicLight(): void;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        onLoad(): void;
        calculateAddedStressCapacity(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        hasSource(): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        initialize(): void;
        hasPulley(): boolean;
        invalidateCaps(): void;
        isOverStressed(): boolean;
        getBlockState(): Internal.BlockState;
        warnOfMovement(): void;
        getSpeed(): number;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static convertToLinear(arg0: number): number;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        addToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        isSource(): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        isController(): boolean;
        detachKinetics(): void;
        notifyUpdate(): void;
        isSpeedRequirementFulfilled(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setSpeed(arg0: number): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        getDirectionAwareBeltMovementSpeed(): number;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getTheoreticalSpeed(): number;
        getIcon(arg0: boolean): Internal.ItemStack;
        propagateRotationTo(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: boolean, arg5: boolean): number;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        hasNetwork(): boolean;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        getRotationAngleOffset(arg0: Internal.Direction$Axis_): number;
        equals(arg0: any): boolean;
        set controller(arg0: BlockPos_)
        set casingType(arg0: Internal.BeltBlockEntity$CasingType_)
        get generatedSpeed(): number
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get inventory(): Internal.BeltInventory
        get flickerScore(): number
        get "updatePacket()"(): Internal.Packet<any>
        get controller(): BlockPos
        get type(): Internal.BlockEntityType<any>
        set network(arg0: number)
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get orCreateNetwork(): Internal.KineticNetwork
        get class(): typeof any
        set source(arg0: BlockPos_)
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get controllerBE(): Internal.BeltBlockEntity
        get persistentData(): Internal.CompoundTag
        get beltChainDirection(): Vec3i
        get beltMovementSpeed(): number
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get movementFacing(): Internal.Direction
        set covered(arg0: boolean)
        get blockPos(): BlockPos
        get removed(): boolean
        get overStressed(): boolean
        get blockState(): Internal.BlockState
        get speed(): number
        get source(): boolean
        get controller(): boolean
        get speedRequirementFulfilled(): boolean
        set speed(arg0: number)
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get directionAwareBeltMovementSpeed(): number
        get theoreticalSpeed(): number
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get renderData(): any
        covered: boolean;
        passengers: Internal.Map<Internal.Entity, Internal.BeltMovementHandler$TransportedEntityInfo>;
        casing: Internal.BeltBlockEntity$CasingType;
        color: Internal.Optional<Internal.DyeColor>;
        index: number;
        invVersionTracker: Internal.VersionedInventoryTrackerBehaviour;
        trackerUpdateTag: Internal.CompoundTag;
        createCasing$newCasing: Internal.BeltBlockEntity$CasingType;
        lastInsert: Internal.Direction;
        beltLength: number;
    }
    type BeltBlockEntity_ = BeltBlockEntity;
    interface ILDEndpoint extends Internal.ILDNetworkPart {
        abstract getPipeType(): Internal.LongDistancePipeType;
        abstract getFrontFacing(): Internal.Direction;
        abstract getLink(): this;
        tryGet(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ILDNetworkPart;
        tryGet(arg0: Internal.LevelAccessor_, arg1: BlockPos_): this;
        abstract getIoType(): Internal.IO;
        abstract getLevel(): Internal.Level;
        abstract getPos(): BlockPos;
        isOutput(): boolean;
        abstract getOutputFacing(): Internal.Direction;
        isInput(): boolean;
        abstract invalidateLink(): void;
        abstract setIoType(arg0: Internal.IO_): void;
        abstract isInValid(): boolean;
        get pipeType(): Internal.LongDistancePipeType
        get frontFacing(): Internal.Direction
        get link(): Internal.ILDEndpoint
        get ioType(): Internal.IO
        get level(): Internal.Level
        get pos(): BlockPos
        get output(): boolean
        get outputFacing(): Internal.Direction
        get input(): boolean
        set ioType(arg0: Internal.IO_)
        get inValid(): boolean
    }
    type ILDEndpoint_ = ILDEndpoint;
    abstract class GraphicsConfigTemplate implements Internal.Serializable {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        abstract getBestConfiguration(arg0: Internal.GraphicsConfiguration_[]): Internal.GraphicsConfiguration;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract isGraphicsConfigSupported(arg0: Internal.GraphicsConfiguration_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly PREFERRED: (2) & (number);
        static readonly UNNECESSARY: (3) & (number);
        static readonly REQUIRED: (1) & (number);
    }
    type GraphicsConfigTemplate_ = GraphicsConfigTemplate;
    class ResourceConditionContext {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getUnderlying(): Internal.ICondition$IContext;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        /**
         * @deprecated
        */
        get underlying(): Internal.ICondition$IContext
    }
    type ResourceConditionContext_ = ResourceConditionContext;
    class MEGAInterfaceBlockEntity extends Internal.InterfaceBlockEntity {
        constructor(blockEntityType: Internal.BlockEntityType_<any>, pos: BlockPos_, blockState: Internal.BlockState_)
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
        isClientSide(): boolean;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
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
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getReadyInvoked(): number;
        sdl$getDynamicLightX(): number;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        getMainMenuIcon(): Internal.ItemStack;
        hasLevel(): boolean;
        notifyAll(): void;
        getConfig(): Internal.GenericStackInv;
        sdl$dynamicLightTick(): void;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        openMenu(player: Internal.Player_, locator: Internal.MenuLocator_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        onReady(): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
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
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        getGridNode(): Internal.IGridNode;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        notLoaded(): boolean;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getStorage(): Internal.GenericStackInv;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        abstract getBlockEntity(): Internal.BlockEntity;
        abstract getPriority(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        abstract getConfigManager(): Internal.IConfigManager;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getInterfaceLogic(): Internal.InterfaceLogic;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getQueuedForReady(): number;
        returnToMainMenu(player: Internal.Player_, subMenu: Internal.ISubMenu_): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        abstract setPriority(arg0: number): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get clientSide(): boolean
        get type(): Internal.BlockEntityType<any>
        get actionableNode(): Internal.IGridNode
        get upgrades(): Internal.IUpgradeInventory
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get top(): Internal.Direction
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get globalPos(): Internal.GlobalPos
        get readyInvoked(): number
        get persistentData(): Internal.CompoundTag
        get mainMenuIcon(): Internal.ItemStack
        get config(): Internal.GenericStackInv
        set worldPosition(arg0: BlockPos_)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get storage(): Internal.GenericStackInv
        get blockEntity(): Internal.BlockEntity
        get priority(): number
        get configManager(): Internal.IConfigManager
        get level(): Internal.Level
        get orientation(): Internal.BlockOrientation
        get interfaceLogic(): Internal.InterfaceLogic
        get queuedForReady(): number
        set priority(arg0: number)
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
        get renderData(): any
    }
    type MEGAInterfaceBlockEntity_ = MEGAInterfaceBlockEntity;
    class LongArrayTag extends Internal.CollectionTag<Internal.LongTag> {
        constructor(arg0: Internal.LongSet_)
        constructor(arg0: number[])
        constructor(arg0: Internal.List_<number>)
        remove(arg0: number): Internal.LongTag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        "set(int,java.lang.Object)"(arg0: number, arg1: any): any;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        spliterator(): Internal.Spliterator<Internal.LongTag>;
        iterator(): Internal.Iterator<Internal.LongTag>;
        "add(int,java.lang.Object)"(arg0: number, arg1: any): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        set(arg0: number, arg1: Internal.LongTag_): Internal.LongTag;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        add(arg0: number, arg1: Internal.LongTag_): void;
        add(arg0: number, arg1: any): void;
        sizeInBytes(): number;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        setTag(arg0: number, arg1: Internal.Tag_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        write(arg0: Internal.DataOutput_): void;
        stream(): Internal.Stream<Internal.LongTag>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        indexOf(arg0: any): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        add(arg0: number, arg1: Internal.Tag_): void;
        accept(arg0: Internal.TagVisitor_): void;
        abstract addAll(arg0: Internal.Collection_<Internal.LongTag>): boolean;
        sort(arg0: Internal.Comparator_<Internal.LongTag>): void;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        addAll(arg0: number, arg1: Internal.Collection_<Internal.LongTag>): boolean;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        subList(arg0: number, arg1: number): Internal.List<Internal.LongTag>;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.LongTag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        set(arg0: number, arg1: any): any;
        getElementType(): number;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        forEach(arg0: Internal.Consumer_<Internal.LongTag>): void;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        addTag(arg0: number, arg1: Internal.Tag_): boolean;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        listIterator(arg0: number): Internal.ListIterator<Internal.LongTag>;
        "set(int,net.minecraft.nbt.LongTag)"(arg0: number, arg1: Internal.LongTag_): Internal.LongTag;
        removeIf(arg0: Internal.Predicate_<Internal.LongTag>): boolean;
        getAsLongArray(): number[];
        getId(): number;
        getType(): Internal.TagType<Internal.LongArrayTag>;
        parallelStream(): Internal.Stream<Internal.LongTag>;
        "remove(int)"(arg0: number): Internal.LongTag;
        listIterator(): Internal.ListIterator<Internal.LongTag>;
        "set(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        toString(): string;
        get(arg0: number): Internal.LongTag;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        "add(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): void;
        copy(): this;
        hashCode(): number;
        size(): number;
        getAsString(): string;
        clear(): void;
        wait(arg0: number): void;
        add(arg0: Internal.LongTag_): boolean;
        "add(int,net.minecraft.nbt.LongTag)"(arg0: number, arg1: Internal.LongTag_): void;
        equals(arg0: any): boolean;
        get elementType(): number
        get class(): typeof any
        get empty(): boolean
        get asLongArray(): number[]
        get id(): number
        get type(): Internal.TagType<Internal.LongArrayTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.LongArrayTag>;
    }
    type LongArrayTag_ = LongArrayTag;
    class LuminizerLauncherBlock extends Internal.BotaniaWaterloggedBlock {
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
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
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
    type LuminizerLauncherBlock_ = LuminizerLauncherBlock;
    class CabbageBlock extends Internal.CropBlock {
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
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        isMaxAge(arg0: Internal.BlockState_): boolean;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getMaxAge(): number;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        growCrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        getAge(arg0: Internal.BlockState_): number;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getStateForAge(arg0: number): Internal.BlockState;
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
        handler$zlp000$mayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        create$callGetAgeProperty(): Internal.IntegerProperty;
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
        get maxAge(): number
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
    type CabbageBlock_ = CabbageBlock;
    class IntegerArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.IntegerArgumentType> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        type(): Internal.ArgumentTypeInfo<Internal.IntegerArgumentType, any>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type IntegerArgumentInfo$Template_ = IntegerArgumentInfo$Template;
    class TelemetryPropertyMap {
        getClass(): typeof any;
        static createCodec(arg0: Internal.List_<Internal.TelemetryProperty<any>>): Internal.Codec<Internal.TelemetryPropertyMap>;
        get<T>(arg0: Internal.TelemetryProperty_<T>): T;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        static builder(): Internal.TelemetryPropertyMap$Builder;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        propertySet(): Internal.Set<Internal.TelemetryProperty<any>>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TelemetryPropertyMap_ = TelemetryPropertyMap;
    class StaticDigestingRecipe$Serializer implements Internal.RecipeSerializer<Internal.StaticDigestingRecipe> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.StaticDigestingRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.github.elenterius.biomancy.crafting.recipe.StaticDigestingRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.StaticDigestingRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.StaticDigestingRecipe_): void;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.StaticDigestingRecipe;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.StaticDigestingRecipe;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.StaticDigestingRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.StaticDigestingRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type StaticDigestingRecipe$Serializer_ = StaticDigestingRecipe$Serializer;
    class ServerboundAcceptTeleportationPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
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
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get skippable(): boolean
        get id(): number
    }
    type ServerboundAcceptTeleportationPacket_ = ServerboundAcceptTeleportationPacket;
    class SlingshotItem extends Internal.ProjectileWeaponItem {
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
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
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
        getDefaultProjectileRange(): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        modifyReturnValue$gei000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        handler$gjn000$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        handler$fmn001$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
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
        modifyReturnValue$gei000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static onArrowLoose(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: boolean): number;
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
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
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
        static getProjectileVelocity(arg0: number): number;
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
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        static onArrowNock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: boolean): Internal.InteractionResultHolder<Internal.ItemStack>;
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
        static registerAmmo(arg0: Internal.ItemLike_, arg1: Internal.AbstractSlingshotAmmoBehavior_): void;
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
        get defaultProjectileRange(): number
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
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
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
    type SlingshotItem_ = SlingshotItem;
    class AdvancementEvent$AdvancementEarnEvent extends Internal.AdvancementEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Advancement_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getAdvancement(): Internal.Advancement;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
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
        get advancement(): Internal.Advancement
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type AdvancementEvent$AdvancementEarnEvent_ = AdvancementEvent$AdvancementEarnEvent;
    interface BundlerInfo$Bundler {
        abstract addPacket(arg0: Internal.Packet_<any>): Internal.Packet<any>;
        (arg0: Internal.Packet<any>): Internal.Packet_<any>;
    }
    type BundlerInfo$Bundler_ = ((arg0: Internal.Packet<any>)=> Internal.Packet_<any>) | BundlerInfo$Bundler;
}
declare namespace com.simibubi.create.content.logistics.crate {
    class CrateBlock extends Internal.WrenchableDirectionalBlock implements Internal.IWrenchable {
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        needsDynamicBurningCheck(): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
    type CrateBlock_ = CrateBlock;
}
declare namespace vazkii.botania.mixin.client {
    interface MinecraftAccessor {
        abstract getItemColors(): Internal.ItemColors;
        get itemColors(): Internal.ItemColors
        (): Internal.ItemColors_;
    }
    type MinecraftAccessor_ = MinecraftAccessor | (()=> Internal.ItemColors_);
}
declare namespace top.theillusivec4.curios.mixin.core {
    interface AccessorEntity {
        abstract getFirstTick(): boolean;
        get firstTick(): boolean
        (): boolean;
    }
    type AccessorEntity_ = AccessorEntity | (()=> boolean);
}
declare namespace net.p3pp3rf1y.sophisticatedstorage.block {
    class ShulkerBoxBlock extends Internal.StorageBlockBase implements Internal.IAdditionalDropDataBlock {
        constructor(arg0: Internal.Supplier_<number>, arg1: Internal.Supplier_<number>, arg2: number)
        constructor(arg0: Internal.Supplier_<number>, arg1: Internal.Supplier_<number>)
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
        getNeighborPos(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.List<BlockPos>;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        static "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.minecraft.world.item.ItemStack,net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
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
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
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
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getTintedStack(arg0: Internal.DyeColor_): Internal.ItemStack;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        addDropData(arg0: Internal.ItemStack_, arg1: Internal.StorageBlockEntity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getHorizontalDirection(arg0: Internal.BlockState_): Internal.Direction;
        handler$ehm000$onPlayerWillDestroy(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getVerticalFacing(arg0: Internal.BlockState_): Internal.VerticalFacing;
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
        trySneakItemInteraction(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockState_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_, arg6: Internal.ItemStack_): boolean;
        static tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        setTicking(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
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
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getNumberOfInventorySlots(): number;
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
        "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity,net.minecraft.world.item.ItemStack)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
        getDisplayItemsCount(arg0: Internal.List_<Internal.RenderInfo$DisplayItem>): number;
        tryFillUpgrades(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.ItemStack_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
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
        getNumberOfUpgradeSlots(): number;
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
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
        handler$bpb000$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        hasFixedIndexDisplayItems(): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        getFacing(arg0: Internal.BlockState_): Internal.Direction;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        handler$gcp000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getBaseStackSizeMultiplier(): number;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        get numberOfInventorySlots(): number
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        get numberOfUpgradeSlots(): number
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get baseStackSizeMultiplier(): number
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly FACING: (Internal.DirectionProperty) & (Internal.EnumProperty<Internal.Direction>);
    }
    type ShulkerBoxBlock_ = ShulkerBoxBlock;
}
declare namespace com.hollingsworth.arsnouveau.api.nbt {
    interface ITagSerializable {
        abstract serialize(): Internal.CompoundTag;
        (): Internal.CompoundTag_;
    }
    type ITagSerializable_ = (()=> Internal.CompoundTag_) | ITagSerializable;
}
