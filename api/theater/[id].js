export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Parameter id dibutuhkan" });
  }

  try {
    // Ambil data markdown dari Jina AI
    const jinaUrl = `https://r.jina.ai/https://jkt48.com/theater/schedule/id/${id}?lang=id`;
    const response = await fetch(jinaUrl);
    const text = await response.text();

    // --- Ambil bagian Performing Member ---
    const memberSectionRegex = /PERFORMING MEMBER([\s\S]*?)### Harap diperhatikan/;
    const memberSectionMatch = memberSectionRegex.exec(text);
    const memberSection = memberSectionMatch ? memberSectionMatch[1] : "";

    // --- Ambil Setlist ---
    const setlistRegex = /\!\[Image.*?\]\(.*?\)\s*([^\|]+)\s*\|/;
    const setlistMatch = setlistRegex.exec(memberSection);
    const setlist = setlistMatch ? setlistMatch[1].trim() : "Tidak diketahui";

    // --- Ambil Member (semua [Nama](https://jkt48.com/member/detail/id/xxx?lang=id)) ---
    const memberRegex = /\[([^\]]+)\]\(https:\/\/jkt48\.com\/member\/detail\/id\/\d+\?lang=id\)/g;
    const members = [];
    let match;
    while ((match = memberRegex.exec(memberSection)) !== null) {
      members.push(match[1]);
    }

    // --- Ambil Tanggal Show ---
    const dateRegex = /\| ([^|]+Show[^|]+)\|/;
    const dateMatch = dateRegex.exec(memberSection);
    const showDate = dateMatch ? dateMatch[1].trim() : "Tidak diketahui";

    res.status(200).json({
      id,
      showDate,
      setlist,
      members,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil performing member", detail: err.message });
  }
}