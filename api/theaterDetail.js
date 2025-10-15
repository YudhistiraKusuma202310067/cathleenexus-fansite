import fetch from "node-fetch";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Parameter id dibutuhkan" });
  }

  try {
    const response = await fetch(`https://jkt48.com/theater/schedule/id/${id}?lang=id`);
    const html = await response.text();

    const $ = cheerio.load(html);
    const members = [];

    $("td a[target='member']").each((i, el) => {
      members.push($(el).text().trim());
    });

    const showTitle = $("h2").first().text().trim();

    res.status(200).json({ id, title: showTitle, members });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal ambil performing member" });
  }
}
