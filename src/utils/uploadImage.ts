import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import cloudinary from "cloudinary";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post("/uploadImage", async (req: Request, res: Response) => {
  try {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const result = await cloudinary.v2.uploader.upload(file);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return res.status(500).json({ error: "Image upload failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});