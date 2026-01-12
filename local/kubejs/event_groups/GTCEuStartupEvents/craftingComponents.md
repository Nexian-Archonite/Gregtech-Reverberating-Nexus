# GTCEuStartupEvents.craftingComponents

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: CraftingComponentsEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| setMaterialEntry | CraftingComponent, int, MaterialEntry |  | void | ✘ |
| setMaterialEntries | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setFallbackItem | CraftingComponent, ItemStack |  | void | ✘ |
| setFallbackTag | CraftingComponent, ResourceLocation |  | void | ✘ |
| setFallbackMaterialEntry | CraftingComponent, MaterialEntry |  | void | ✘ |
| removeTier | CraftingComponent, int |  | void | ✘ |
| removeTiers | CraftingComponent, int[] |  | void | ✘ |
| createMaterialEntry | String, MaterialEntry |  | ComponentWrapper | ✘ |
| setItems | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| createItem | String, ItemStack |  | ComponentWrapper | ✘ |
| setTags | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setItem | CraftingComponent, int, ItemStack |  | void | ✘ |
| set | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setTag | CraftingComponent, int, ResourceLocation |  | void | ✘ |
| createTag | String, ResourceLocation |  | ComponentWrapper | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
GTCEuStartupEvents.craftingComponents((event) => {
	// This space (un)intentionally left blank
});
```

