// backend/routes/sitemap.js
const express = require("express");
const Project = require("../models/project");
const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  const projects = await Project.find();
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  xml +=
    "  <url>\n    <loc>https://icape.studio/</loc>\n    <lastmod>" +
    new Date().toISOString().split("T")[0] +
    "</lastmod>\n    <priority>1.0</priority>\n  </url>\n";
  projects.forEach((project) => {
    xml += `  <url>\n    <loc>https://icape.studio/projects/${
      project._id
    }</loc>\n    <lastmod>${
      project.updatedAt.toISOString().split("T")[0]
    }</lastmod>\n    <priority>0.7</priority>\n  </url>\n`;
  });
  xml += "</urlset>";
  res.header("Content-Type", "application/xml");
  res.send(xml);
});

module.exports = router;
