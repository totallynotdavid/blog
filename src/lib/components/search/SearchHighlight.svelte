<script lang="ts">
import { onMount } from "svelte";
import { highlightText } from "$lib/utils/search";

const props = $props();
let query: string = props.query;
let children = props.children;

let container: HTMLElement;

$effect(() => {
  if (container) {
    highlightText(container, query);
  }
});

onMount(() => {
  if (container && query) {
    highlightText(container, query);
  }
});
</script>

<div bind:this={container}>
  {@render children?.()}
</div>

<style>
  :global(.highlight) {
    background-color: #ffeb3b;
    color: #000;
    padding: 0 2px;
    border-radius: 2px;
  }
</style>
