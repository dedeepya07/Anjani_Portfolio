import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Send the contact data to storage
      const message = await storage.createContactMessage(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // If validation fails, return 400 with validation errors
        return res.status(400).json({
          message: "Validation failed",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error handling contact form submission:", error);
      res.status(500).json({
        message: "An error occurred while processing your message"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
