import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello TypeScript CI/CD 🚀");
});

export function sum(a: number, b: number): number {
  return a + b;
}

export default app;

// Run server
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}
