<script lang="typescript">
    import Counter from "../components/counter.svelte";
    import { ErrorToast } from "../toast";
</script>

<div class="element">
    <h1>Hello World!</h1>
    <p>Try pushing the silly buttons</p>
</div>

<Counter></Counter>

<button style="font-size: 2em;" on:click={() => { ErrorToast("YEEHAW"); }}> SILLY BUTTON </button>
