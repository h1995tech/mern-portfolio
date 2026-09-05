import cloudinary from "../config/cloudinary.js";

export async function uploadFile(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    let resourceType = "image";

    if (req.file.mimetype === "application/pdf") {
      resourceType = "raw";
    } else if (req.file.mimetype.startsWith("video/")) {
      resourceType = "video";
    }

    const uploadOptions = {
      resource_type: resourceType,
    };

    // Keep a proper .pdf filename for raw PDF uploads
    if (req.file.mimetype === "application/pdf") {
      uploadOptions.public_id = "Hoorish_MERN_Stack_Developer.pdf";
      uploadOptions.overwrite = true;
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.end(req.file.buffer);
    });

    res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
    });
  } catch (error) {
    console.error("File upload failed:", error);

    res.status(500).json({
      message: "File upload failed",
      error: error.message,
    });
  }
}