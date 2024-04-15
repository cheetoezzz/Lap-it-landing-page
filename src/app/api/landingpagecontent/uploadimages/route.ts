// import { createClient } from "@supabase/supabase-js";

// // Use environment variables for sensitive information
// process.env.NEXT_PUBLIC_SUPABASE_URL="https://dsivcdhcbskzaibfmjrm.supabase.co"
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaXZjZGhjYnNremFpYmZtanJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyOTc3MzcsImV4cCI6MjAyNzg3MzczN30.f2fgVkzJpZcy9di5fu_BHQro68HFbVE83q5dtFh_P24"
// const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// const supabase = createClient(URL, KEY);

// export async function POST(req: Request) {
//  try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;

//     // Validate file type (example: only allow jpg and png)
//     if (!['image/jpeg', 'image/png'].includes(file.type)) {
//       throw new Error('Invalid file type. Only jpg and png are allowed.');
//     }

//     // Generate a unique filename
//     const uniqueFilename = `${Date.now()}-${file.name}`;

//     const { data, error } = await supabase.storage
//       .from("images")
//       .upload(uniqueFilename, file);
//     if (error) {
//       console.error('Upload error:', error.message); // Log the error for debugging
//       throw error;
//     }

//     const imageUrl = data.path; // Corrected property name
//     const { error: imageError } = await supabase
//       .from("LandingpageImages")
//       .insert({ imageUrl });
//     if (imageError) {
//       throw imageError;
//     }

//     return {
//       status: 200,
//       body: JSON.stringify({ success: true, imageUrl }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//  } catch (error) {
//     console.error('Error:'); // Log the error for debugging
//     return {
//       status: 500,
//       body: JSON.stringify({ success: false }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//  }
// }