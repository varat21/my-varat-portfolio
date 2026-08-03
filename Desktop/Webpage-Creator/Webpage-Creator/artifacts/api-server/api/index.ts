import app from "../src/app";

export default async function handler(req, res) {
  // Use Express app as handler
  return app(req, res);
}
