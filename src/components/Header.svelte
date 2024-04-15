<header>
    <h1 class="image-container">
        <img src="/img/logo.svg" alt="Image 1" class="image" />
    </h1>
</header>

<style>
    header{
        background: #120b0b15;
        padding: 20px;
    }

    h1{
        margin: 0;
        text-align: center;
    }

    .image-container {
        position: relative;
    }

    .image {
        width: 140px;
        transition: opacity 0.5s ease;
    }

    .image-container:hover .image {
        opacity: 0;
    }

    /* .image-container:hover .image[data-alt-src] {
        opacity: 1;
    } */
</style>
