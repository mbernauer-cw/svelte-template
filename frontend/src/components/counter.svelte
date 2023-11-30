<script lang="typescript">
    let counter = 0;

    function count() {
        counter += 1;
    }
</script>

<div class="container">
    <div class="number">{counter}</div>
    <button class="button" on:click={count}>+1</button>
</div>

<style>
    .container {
        font-size: 1.8em;
        display: block;
        font-family: sans-serif;
        text-align: center;
    }

    .number {
        color: rebeccapurple;
        font-size: 2em;
    }

    .button {
        font-size: 1.2em;
    }
</style>
