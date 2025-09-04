import { Router} from "express";
import commonRoutes from "./commonRoutes";
import userRouters from "./userRoutes";

const router = Router();

router.use("/",  commonRoutes)
router.use("/usuarios", userRouters)


export default router;