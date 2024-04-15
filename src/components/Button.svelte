<script>
    export let text = '';
    export let handleClick = () => {};
</script>

<div class="button-container">
    <button on:click={handleClick}>{text}</button>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: flex-end; /* Align button to the right */
        align-items: flex-end; /* Align button to the bottom */
        height: 100%; /* Ensure the container takes up the full height */
    }

    button {
        height: 2.625rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        background-color: #4a90e2;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-right: 0.5rem;
    }

    button:hover {
        background-color: #357bd8;
    }
</style>