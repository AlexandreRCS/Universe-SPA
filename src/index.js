import { Route } from "./routes.js";

const router = new Route()

router.add("/", "../pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")

router.handle()



window.onpopstate = ()=> router.handle()

window.router = ()=> router.route()