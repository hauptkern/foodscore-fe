<script>
  import { ModeWatcher } from "mode-watcher";
  import { Toaster } from "$lib/components/ui/sonner";
  import { Svrollbar } from "svrollbar";
  import {Router, createRouter} from "@roxi/routify";
  import routes from "../.routify/routes.default.js"
  import Menubar from "$lib/custom/menubar/Menubar.svelte";
  import Footer from "$lib/custom/landing/Footer.svelte";

  export const router = createRouter({routes});
</script>

<ModeWatcher />
<Svrollbar />
<Toaster />
<body>
<Menubar/>
<Router {router} />
<Footer/>
</body>

<style>
  :global(html) {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-scrollbar: hidden;
  }
  :global(body) {
    overflow: visible !important;
  }
</style>
