export default async function handler(req, res) {
  // Tambah header CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const target = "https://jkt48.com/calendar/list?lang=id";
    const jinaUrl = "https://r.jina.ai/" + encodeURIComponent(target);

    const response = await fetch(jinaUrl);
    const text = await response.text();

    // Regex baru untuk format markdown [judul](https://jkt48.com/theater/schedule/id/XXXX?lang=id)
    const regex = /\[([^\]]+)\]\(https:\/\/jkt48\.com\/theater\/schedule\/id\/(\d+)\?lang=id\)/g;
    const shows = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Cek apakah line mengandung icon.cat2.png (event)
      const line = text.substring(match.index - 100, match.index + 200);
      if (line.includes("icon.cat2.png")) continue; // 🚫 skip event
      
      shows.push({
        id: match[2],
        title: match[1].trim(),
        url: `https://jkt48.com/theater/schedule/id/${match[2]}?lang=id`
      });
    }

    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
}