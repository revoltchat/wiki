<!-- <iframe style="width: 100%; height: calc(100vh - 160px); margin-top: 40px; border: none" src="https://developers.revolt.chat/api/"></iframe>-->
<style>
    body {
        background: var(--scalar-background-1);
    }

    .navy {
        --bg: var(--scalar-background-1);
    }

    #content main div div {
        height: unset;
    }

    #content main {
        max-width: unset;
    }

    #sidebar, nav.nav-wide-wrapper, .darklight {
        display: none !important;
    }

    .content a:hover { 
        text-decoration: unset !important;
    }

    #content .sidebar, .scalar-api-reference {
        padding-top: 52px;
    }

    h1.menu-title a {
        color: unset !important;
        text-decoration: unset !important;
    }
</style>

<script id="api-reference" data-url="https://api.revolt.chat/openapi.json"></script>
<script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
<script>
    document.querySelector('h1.menu-title').innerHTML = "<a href='/'>Revolt Wiki</a>";
</script>
