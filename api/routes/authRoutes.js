// api/routes/authRoutes.js
import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);

// Clerk webhook endpoint
router.post("/clerk-webhook", async (req, res) => {
  const { type, data } = req.body;

  if (type === "user.created") {
    const { email_addresses } = data;
    const email = email_addresses[0].email_address;

    try {
      await registerUser({ body: { email } }, res);
    } catch (error) {
      console.error("Error handling Clerk webhook:", error);
      res.status(500).json({ msg: "Server error" });
    }
  } else {
    res.status(400).json({ msg: "Unhandled event type" });
  }
});

export default router;
