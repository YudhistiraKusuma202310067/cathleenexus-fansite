export default async function handler(req, res) {
  try {
    const target = "https://jkt48.com/calendar/list?lang=id";
    const jinaUrl = "https://r.jina.ai/" + encodeURIComponent(target);

    const response = await fetch(jinaUrl);
    const text = await response.text();

    // Ambil semua link show (regex sederhana)
    const regex = /\/theater\/schedule\/id\/(\d+)[^>]*>([^<]+)<\/a>/g;
    const shows = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      shows.push({
        id: match[1],
        title: match[2].trim(),
        url: `https://jkt48.com/theater/schedule/id/${match[1]}?lang=id`
      });
    }

    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
}
