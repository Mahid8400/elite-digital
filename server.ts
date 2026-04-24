import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Notification Route
  app.post("/api/contact", async (req, res) => {
    const { name, email, plan, message } = req.body;
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log("Contact form submission:", { name, email, plan, message });

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY not found. Communication will only be logged.");
      return res.json({ success: true, message: "Logged (API key missing)" });
    }

    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Agency <onboarding@resend.dev>',
        to: 'mahid.dev01@gmail.com',
        subject: `New Lead: ${name} (${plan})`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Plan:</strong> ${plan}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
