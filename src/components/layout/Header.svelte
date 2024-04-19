<script>
    import Logo from '../Logo.svelte'
</script>

<header>
    <div class="logo-container">
        <div>
            <a href="https://estoty.com/" target="_blank">
                <Logo />
            </a>
        </div>
    </div>
</header>

<style>
    header {
        background: #120b0b15;
        width: 100%
    }
    
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4.5rem;
    }
</style>
