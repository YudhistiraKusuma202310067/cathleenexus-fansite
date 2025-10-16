export default async function handler(req, res) {
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