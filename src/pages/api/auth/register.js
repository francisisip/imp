import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("Posting Registration");
    const { db } = await connectToDatabase();

    const {
      username,
      password,
      email,
      city,
      frequentlyWalkedCities,
      age,
      commuteFrequency,
      referred,
    } = req.body;

    // --- SECURITY FIX: SERVER-SIDE VALIDATION ---
    
    // 1. Check for missing required fields
    if (!username || !password || !email || !city) {
      return res.status(422).json({ message: "Missing required fields." });
    }

    // 2. Validate Email Format (Basic Regex)
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(422).json({ message: "Invalid email address." });
    }

    // 3. Validate Password Strength
    if (password.length < 6) {
      return res.status(422).json({ 
        message: "Password must be at least 6 characters long." 
      });
    }

    // 4. Validate Username Length (Prevent database spam)
    if (username.length > 50) {
      return res.status(422).json({ message: "Username is too long." });
    }

    // --------------------------------------------

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check for duplicates
    // Note: Using countDocuments is good, but adding a unique index in MongoDB is even safer.
    if ((await db.collection("users").countDocuments({ email })) > 0) {
      console.log("Duplicate email in registration");
      return res.status(409).send({ message: "The email has already been used." }); // Changed status to 409 (Conflict)
    } 
    
    if ((await db.collection("users").countDocuments({ username })) > 0) {
      console.log("Duplicate username in registration");
      return res.status(409).send({ message: "The username has already been used." });
    }

    console.log("Creating new user in db");
    const dateRegistered = new Date();
    const totalAnnotations = 0;
    const activities = [
      {
        activity: "Registered to Imprint",
        date: dateRegistered,
        tag: "register",
      },
    ];

    try {
      await db.collection("users").insertOne({
        username,
        hashedPassword,
        email,
        city,
        frequentlyWalkedCities,
        age,
        commuteFrequency,
        activities,
        totalAnnotations,
        referred,
      });
      
      return res.status(201).send("Done");
    } catch (error) {
      console.error("Registration Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
};

export default handler;