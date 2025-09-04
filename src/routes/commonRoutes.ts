import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ mensagem: "API rodando com TypeScript!" });
});




export default router;