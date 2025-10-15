import fetch from "node-fetch";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://jkt48.com/calendar/list?lang=id");
    const html = await response.text();

    const $ = cheerio.load(html);
    const shows = [];

    $(".entry-schedule__list li a").each((i, el) => {
      const href = $(el).attr("href");
      const title = $(el).text().trim();
      const id = href.match(/id\/(\d+)/)?.[1];
      if (id) shows.push({ id, title, url: `https://jkt48.com${href}` });
    });

    res.status(200).json(shows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal ambil data theater list" });
  }
}