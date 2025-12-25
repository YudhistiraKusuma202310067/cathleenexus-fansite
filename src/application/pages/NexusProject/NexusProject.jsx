import { useState } from "react";
import "./NexusProject.scss";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";

const PROJECTS = [
  {
    id: 1,
    tab: "TheMagic14nFairy",
    title: "TheMagic14nFairy",
    description: `Cathleen Nixie, atau yang akrab disapa Cathy, adalah seorang gadis cantik yang sangat terobsesi dengan dunia peri. Setiap hari ia gemar bercermin, membayangkan dirinya sebagai seorang peri anggun yang hidup di dunia penuh keajaiban—Fairyverse, alam para peri. 
    Namun, hidupnya berubah ketika suatu hari cermin di lemari kamarnya terasa berbeda. Cermin itu seakan hidup, memanggil namanya, membujuknya untuk masuk ke dalam dunia lain. Didorong oleh rasa penasaran, Cathy pun melangkah melewati pantulan dirinya… dan menemukan kenyataan yang tak pernah ia bayangkan.
    Ia benar-benar masuk ke Fairyverse.`,
    image: "https://pbs.twimg.com/media/FxJBE6YaIAEOxPr?format=jpg&name=large",
    comics: [
      {
        image: "https://pbs.twimg.com/media/Fw-6zg9aMAAsXNW?format=jpg&name=medium",
        title: "Chapter 1 ",
        text: "Cathleen Nixie (kerap disapa Cathy), adalah seorang gadis cantik penyuka peri. Ia gemar sekali bercermin dan membayangkan bahwa ia adalah seorang peri cantik dan merasa dirinya adalah bagian dari Fairyverse. Ya, Fairyverse. Alam peri."
      },
      {
        image: "https://pbs.twimg.com/media/FxGo2gVaIAIRd9e?format=jpg&name=large",
        title: "Chapter 2 ",
        text: "Suatu hari, Cathy merasa ada yang janggal pada cermin lemari kamarnya. Cermin itu tampak seperti portal hidup, memanggil-manggil namanya, membujuknya masuk. Dengan penasarannya, Ia mengamati dan meyakinkan diri untuk masuk. Ia pun masuk ke dalam cermin itu."
      },
      {
        image: "https://pbs.twimg.com/media/FxHUOPQakAAhbH9?format=jpg&name=medium",
        title: "Chapter 3 ",
        text: "Ia terkejut bukan main. Ternyata selama ini cermin lemari itu adalah sebuah portal dimensi dunia peri yang bernama Fairyverse. Cathy pun menghampiri semua tempat yang mencuri perhatiannya. Sampai pada akhirnya, Ia menemukan benda yang bernama Heart of Fairy."
      },
      {
        image: "https://pbs.twimg.com/media/FxI5TEraEAE1tLw?format=jpg&name=medium",
        title: "Chapter 4 ",
        text: "Heart of Fairy seperti memanggil Cathy. Ia pun mengambilnya dan mendapat pandangan dari benda itu kalau suatu saat dia akan jadi peri teladan di Fairyverse. Namun ia masih perlu banyak belajar. Mampukah Cathy mewujudkannya?"
      },
       {
        image: "https://pbs.twimg.com/media/FxJBE6YaIAEOxPr?format=jpg&name=large",
        title: "\n \n Chapter 5 - End",
        text: " Untuk menjadi peri yang baik, Cathy membutuhkan bantuan dan dukungan dari teman-temannya. Ayo bantu  Cathy untuk mewujudkannya!"
      },
    ],
  },
  {
    id: 2,
    tab: "Nixielebration15",
    title: "Nixielebration15",
    description: "Wilona, peri jenius dari Nixie Hollow, hidup di dunia penuh cahaya, musik, dan serbuk nixie—sumber kekuatan bagi seluruh peri. Kedamaian itu runtuh ketika Moonlight menghancurkan persediaan serbuk nixie, menentang tradisi yang telah dijaga turun-temurun. Kekacauan mengancam perayaan penyambutan Ratu Peri.Di tengah krisis, Wilona bangkit. Dengan kecerdasannya, ia menciptakan alat revolusioner yang mampu menghasilkan serbuk nixie dalam waktu singkat. Penemuannya bukan hanya menyelamatkan Nixie Hollow, tetapi juga membuka era baru bagi para peri.Sebagai anggota Fairy Harmony, Wilona mendapat tantangan terbesar dalam hidupnya: memimpin pertunjukan musik spektakuler untuk menyambut sang ratu. Musik, inovasi, dan keberanian berpadu dalam satu momen yang menentukan nasib dunia peri.Dari peri biasa menjadi sosok terhormat, Wilona membuktikan bahwa perubahan tidak harus ditakuti. Dengan kerja keras, kerendahan hati, dan semangat belajar, ia menjadi inspirasi bagi seluruh Nixie Hollow—bahwa keajaiban sejati lahir dari keberanian untuk mencipta dan percaya pada diri sendiri.",
    image: "https://pbs.twimg.com/media/GOn9e7qaMAEGKfW?format=jpg&name=medium",

    storyProject: {
        text: "A Fairy from Nixie Hollow: Wilona Di Nixie Hollow, sebuah dunia penuh warna, terdapat peri jelita bernama Wilona. Dia dikenal sebagai pekerja keras dan penuh kejeniusan. Bersama peri lain, mereka mengumpulkan serbuk nixie untuk merayakan kedatangan ratu peri. Kehidupan harmonis mereka terganggu ketika Moonlight menentang cara tradisional mengumpulkan serbuk nixie. Dengan spontan, Moonlight menghancurkan stok serbuk yang telah dikumpulkan dengan susah payah, menimbulkan kekhawatiran di antara peri. Wilona, seorang peri jenius, tidak tinggal diam. Dengan kecerdasannya, dia menciptakan alat dari barang-barang di Nixie Hollow. Penemuan revolusioner ini membantu para peri membuat serbuk nixie dengan cepat, mengatasi masalah yang terjadi.Wilona, yang juga anggota kelompok musik Fairy Harmony, mendapat tugas baru. Dia diminta mengatur dan memimpin pertunjukan musik terbaru untuk merayakan kedatangan ratu peri. Tugas ini menarik karena Wilona berpengalaman dalam musik. Nixie Hollow kembali bersemi dengan kebahagiaan. Wilona mendapat pengakuan dari para peri lainnya berkat penemuannya. Dia diangkat menjadi tangan kanan warga Nixie Hollow, dihargai karena kebijaksanaannya dan inovasinya.Sebagai tangan kanan warga, Wilona tidak hanya bertanggung jawab atas acara musiman tetapi juga mengatur pertunjukan musik spektakuler dari Fairy Harmony, membawa kegembiraan dan inspirasi bagi Nixie Hollow.Dalam perjalanan hidupnya, Wilona terus belajar bahwa mempertahankan posisi dan keberhasilan memerlukan kerja keras, kerendahan hati, dan keinginan belajar. Wilona menginspirasi peri lain untuk tidak takut akan perubahan dan selalu mencari solusi.",
           image: "https://pbs.twimg.com/media/GOlptkObYAApixT?format=jpg&name=large",

  },
    ava: {        
      name: "AVA Project",
    image: "https://pbs.twimg.com/media/GOlrYcUbEAAoz2j?format=jpg&name=large",
      desc: "Kami telah menyiapkan ava dan header yang bisa digunakan untuk memeriahkan ulang tahun @N_CathyJKT48 yang ke-15.Mari meriahkan moment ini menggunakan ava dan header ini bersama-sama!"
    },

    fans: [
      {
        name: "Videotron Birthday Project @N_CathyJKT48 akan ditayangkan pada 28 Mei 2024. Bisa dikunjungi dilokasi berikut.",
        image: "https://pbs.twimg.com/media/GOlstE0akAAHPey?format=jpg&name=4096x4096",
      },
      {
    
           image: "https://pbs.twimg.com/media/GOmHiMMboAAipk2?format=jpg&name=4096x4096",

      },
{
    
           image: "https://pbs.twimg.com/media/GOmHi7vbcAEFzMi?format=jpg&name=4096x4096",

      },{
    
           image: "https://pbs.twimg.com/media/GOmHqTNa0AANl6k?format=jpg&name=4096x4096",

      },
    ]
  },

{
  id: 3,
  tab: "CathysAscending",
  title: "CathysAscending",
  description: "𝑻𝑹𝑰𝑵𝑮𝑮𝑮! 𝑳𝒆𝒕 𝒖𝒔 𝒃𝒆 𝒕𝒉𝒆 𝒘𝒊𝒏𝒈𝒔 𝒕𝒉𝒂𝒕 𝒍𝒊𝒇𝒕 𝒚𝒐𝒖 𝒃𝒆𝒚𝒐𝒏𝒅 𝒕𝒉𝒆 𝒛𝒆𝒏𝒊𝒕𝒉 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒅𝒓𝒆𝒂𝒎𝒔...",
  image: "https://pbs.twimg.com/media/GUi1dduXAAATnk-?format=jpg&name=4096x4096",

  donation: {

    tahap1: {
      text: "Kemarin, hasil voting tahap 1 Sousenkyou 2024 JKT48 telah diumumkan.\nTerima kasih bantuan dan dukungannya teman-teman semua untuk @N_CathyJKT48,sehingga Cathy bisa mencapai posisi #24. Ini awal bagi Cathy untuk terbang lebih tinggi.\n#BEGINNING \n#CathysAscending🧚🏻‍♀️",
    image: "https://pbs.twimg.com/media/GYpjtuoaIAASLsD?format=jpg&name=large",

    },

    tahap2: {
      text: "Miaw Minna! Hasil voting tahap 2 Sousenkyo 2024 JKT48 telah diumumkan.\nTerima kasih bantuan dan dukungannya teman-teman semua untuk @N_CathyJKT48\n , sehingga Cathy bisa mencapai posisi #12. Kita semua tahu bahwa hasil ini hanya bersifat sementara!\n#BEGINNING #CathysAscending🧚🏻‍♀️",
        image: "https://pbs.twimg.com/media/GbRpnzXakAE5GxJ?format=jpg&name=900x900",

    },

    tahap3: {
      text: "At the end, we have become the wings that lift you beyond the zenith of your dreams!\n\nSemoga pencapaian posisi #20 ini menjadi #BEGINNING (awal) untuk memulai semangat baru dan mengeksplorasi hal-hal baru lagi!\n\nMiawmin ingin menyampaikan terima kasih yang sebesar-besarnya atas semua usaha, waktu, materi, dan dukungan luar biasa yang telah kalian berikan untuk @N_CathyJKT48.\n\nTerima kasih untuk para fans Cathy, baik yang bergabung di Cathleenexus maupun di luar Cathleenexus. Berkat kalian semua, Cathy akhirnya bisa berada di posisi ini!\nMiawmin percaya bahwa akan tiba suatu saat ketika semua orang bisa saling memahami satu sama lain. Terima kasih sudah percaya Cathy. Ingat, kalian adalah alasan Cathy untuk bertahan sampai sejauh ini dan kalianlah yang menjadi sumber kebahagiaannya.\n\nMari terus dukung Cathy bersama-sama, dan apapun yang terjadi tetaplah menjadi sayap peri Cathy hingga dia mencapai puncaknya.\n\n#CathyAscending 🧚🏻‍♀️",
       image: "https://pbs.twimg.com/media/Ge7BrbwasAAq5RW?format=jpg&name=900x900",

    },
  },
},
{
  id: 4,
  tab: "100ShowProject",
  title: "100 Show Project",
  description: "100 kali naik panggung bersama Cathy,100 momen yang tidak pernah terasa sama. Dengan semangat yang konsisten dan energi yang selalu tulus, Nixie mampu membuat setiap panggung terasa lebih hidup. Gerakan, ekspresi, dan caranya berinteraksi dengan penonton menjadikan setiap penampilan bukan sekadar show, tetapi sebuah kenangan yang akan terus kita simpan. Project ini hadir sebagai bentuk apresiasi dan rasa terima kasih untuk 100 perjalanan luar biasa tersebut. Terima kasih telah menemani hari-hari kami dengan cahaya, semangat, dan inspirasi yang tak pernah padam. Mari rayakan 100 show penuh makna ini bersama, dan ciptakan lebih banyak kenangan indah ke depannya. 💖 #Nixie100Memories #CathleenNixie #100ShowProject #JKT48",
  image: "https://pbs.twimg.com/media/Gc1UnUYawAEvLDu?format=jpg&name=900x900",
  

  sections: [
    {
      title: "Poster Project",
      image: "https://pbs.twimg.com/media/Gc1Un_JbUAAMsq9?format=jpg&name=4096x4096",
      text: "Dengan setlist terbaik yang mengiringi setiap langkah perjalanannya, Cathy telah tampil dalam 100 show penuh dedikasi, kerja keras, dan cinta yang tulus untuk para fans, menghadirkan energi, senyum, dan penampilan yang selalu berkesan di setiap panggung, menjadikan setiap show bukan hanya sebuah pertunjukan, tetapi kenangan indah yang akan terus hidup di hati kita semua. 💖"
    },
    {
      title: "Recap Show",
      image: "https://pbs.twimg.com/media/Gc1UoyVbYAAw5Xk?format=jpg&name=small",
      text: "Cathleen Nixie telah tampil sebanyak 100 show di Theater JKT48 yang direkap dalam #CathyShow. \n\n🍁 Aitakatta: 58 show\n💗 Renai Kinshi Jourei: 22 show\n👋 Ramune no Nomikata: 7 show\n🎈💛 Pajama Drive: 13 show\n\nTerima kasih atas seluruh dukungan, cinta, dan semangat yang selalu kalian berikan selama perjalanan ini. 🤍💖"
    },

    {
      title: "AVA & Header Project",
      image: "https://pbs.twimg.com/media/Gc1UpgobYAA09mO?format=jpg&name=4096x4096",
      text: "Sebagai bentuk apresiasi. Yuk kita pasang avatar dan header spesial 100 Show Cathy di akun teman-teman, ya! ✨💙"
    },
    {
      title: "Photobox Palette",
      image: "https://pbs.twimg.com/media/Gc1UqGKb0AAW60C?format=jpg&name=large",
      text: "Jangan lupa mampir ke photobox Palette di F2 mall FX Sudirman untuk mengabadikan kenangan spesial ini! Foto bareng teman dan jadilah salah satu dari kenangan #Nixie100Memories ini! 📸💐"
    },
    {
      title: "Display Project",
      image: "https://pbs.twimg.com/media/Gc1UqnebQAAQ1OT?format=jpg&name=large",
      text: "Untuk merayakan 100 Show  di setlist Renai Kinshi Jourei, kami telah menyiapkan sebuah display project spesial yang akan dipajang di depan Theater JKT48 sebagai bentuk apresiasi dan perayaan atas perjalanan penuh dedikasi, semangat, serta kenangan indah yang telah tercipta bersama para fans. 💖"
    },
    {
      title: "Encore Project",
      image: "https://pbs.twimg.com/media/Gc1UrFVboAAwOne?format=jpg&name=small",
      text: "Izinkan kami untuk mengganti encore di pertunjukan Renai Kinshi Jourei pada tanggal 21 November 2024 menjadi:\n• Cathy seratus show\n• Beginning of Ascending"
    },
   
  ],
  

  
},
 {
      id: 5,
      tab: "CathleenThings",
      title: "Cathleen's Things: The Upside Down",
      description: "Cathleen Things adalah kumpulan project ulang tahun ke-16 untuk @N_CathyJKT48 yang dibuat sebagai bentuk cinta, apresiasi, dan dukungan dari para penggemar. Project ini merangkum berbagai hal kecil namun bermakna yang merepresentasikan Cathleen—mulai dari kepribadiannya yang hangat, ceria, dan penuh semangat, hingga momen-momen berharga yang ia ciptakan bersama fans selama perjalanannya di JKT48.\n \nMelalui Cathleen Things, kami ingin menghadirkan kenangan, pesan, dan karya yang mencerminkan betapa berharganya Cathleen bagi banyak orang. Setiap detail dalam project ini dibuat dengan penuh ketulusan, sebagai simbol rasa terima kasih atas senyum, kerja keras, dan inspirasi yang selalu Cathleen berikan.\n\nDi usia ke-16 ini, semoga Cathleen semakin bersinar, terus mengejar impian, dan selalu dikelilingi oleh hal-hal baik serta orang-orang yang mendukungnya. Cathleen Things bukan hanya sebuah project ulang tahun, tetapi juga wujud kasih sayang yang akan selalu menyertai langkah Cathleen ke depannya. 💙✨",
      image: "https://pbs.twimg.com/media/GsAUwPxXEAEQu5k?format=jpg&name=4096x4096", // Ganti dengan URL gambar utama

      comics: [
        {
          image: "https://pbs.twimg.com/media/Gr9hDMfXgAA7Nn3?format=jpg&name=4096x4096",
          title: "Chapter 1: Pintu Misteri di Hawkins",
          text: "Cathy mulai menyadari ada sesuatu yang aneh di Hawkins. Beberapa kejadian misterius mulai terjadi, seolah ada dunia tersembunyi yang belum ia ketahui. Saat mencari jawaban, ia menemukan sebuah pintu misterius yang diyakini sebagai kunci menuju sesuatu yang lebih besar. Namun, pintu itu bukan hanya sekadar jalan masuk, melainkan sebuah simbol dari perubahan besar yang akan Cathy hadapi. 💬 Apa yang ada di balik pintu ini? Dan kenapa rasanya seperti ada yang memanggilku?"
        },
        {
          image: "https://pbs.twimg.com/media/Gr9hKscWIAA4Kyw?format=jpg&name=4096x4096",
          title: "Chapter 2: Memasuki Upside Down ",
          text: "Saat Cathy melewati pintu misterius, ia terjebak dalam dunia yang tidak ia kenal, yaitu dunia Upside Down. Kota Hawkins yang biasa ia lihat kini berubah menjadi suram, penuh teka-teki, dan ketidakpastian. Setiap langkah yang ia ambil mengujinya untuk berpikir kritis, berani menghadapi ketakutan, dan menemukan petunjuk yang tersembunyi. 💬 Dunia ini seperti bayangan dari kenyataan... Apakah aku bisa keluar dari sini??"
        },
        {
          image: "https://pbs.twimg.com/media/Gr9hRGJWkAAgM83?format=jpg&name=4096x4096",
          title: "Chapter 3: Menuju Dunia Baru ",
          text: "Setelah berjuang menghadapi berbagai tantangan, Cathy akhirnya menemukan jawabannya. Ia menyadari bahwa setiap tantangan dalam hidup adalah teka-teki yang harus dipecahkan. Dengan keberanian, ketelitian, dan kerja keras, Cathy berhasil membuka jalan keluar dan melangkah menuju masa depan yang lebih baik.💬 Misteri ini bukan hanya tentang Hawkins, tetapi juga tentang perjalanan hidupku."
        }
      ],

      avaHeader: {
        title: "Cathleen Nixie's Online Birthday Project",
        desc: "Mari rayakan ulang tahun Cathleen dengan menggunakan avatar dan header spesial ini! Tunjukkan dukunganmu dengan mengganti profile picture dan header di media sosialmu.",
        ava: "https://pbs.twimg.com/media/Gr9oaHsX0AAEPEr?format=jpg&name=large",
        header: "https://pbs.twimg.com/media/Gr9obZjXMAA6ldE?format=jpg&name=large"
      },

      videotron: [
        {
          lokasi: "Tunjungan Plaza - Surabaya",
          jam: "28 Mei 2025, mulai pukul 06.00 - 00.00 WIB ",
          image: "https://pbs.twimg.com/media/Gr9rkTIWkAAt5rp?format=jpg&name=large"
        }
      ],

      tcgFanart: {
        title: "Online TCG Fanart Collection",
        desc: "Project fan art Cathy TCG ✨Kami menghadirkan konsep unik yang memadukan foto Cathy JKT48 dengan elemen Pokémon dalam gaya kartu Trading Card Game (TCG).Seluruh desain merupakan karya dari salah satu fans Cathy, yang didukung penuh oleh Cathleenexus sebagai bentuk apresiasi",
        images: [
          "https://pbs.twimg.com/media/Gr9tFEQXQAA_2h-?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/Gr9tF3kXIAAdiXw?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/Gr9tGsWWAAAc6yf?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/Gr9tHyMWgAEyHWH?format=jpg&name=4096x4096"
        ]
      },

      photobooth: {
        title: "Photobooth Palette - FX Sudirman",
        image: "https://pbs.twimg.com/media/Gr9vg0nWsAA4poP?format=jpg&name=900x900",
         desc: "Karena setiap momen berharga harus dikenang. Maka dari itu, kami menghadirkan Cathleen Things Photobooth Event yang dapat kalian kunjungi di @palette__id, FX Sudirman dan SMYD, Blok M Square.\n\nUntuk kalian yang berkunjung ke kawasan FX Sudirman dan Blok M Square, jangan lewatkan kesempatan mengabadikan momen bersama teman di Photobooth Palette & SMYD dengan template \"Cathleen Things\" dari kami.\n\n📅 28 Mei 2025 - 28 Juni 2025\n📍 Pallete, FX Sudirman, Jakarta Pusat (Lantai F4)\n📍 SMYD, Blok M Square, Jakarta Selatan (Lantai UG)"
      },

      specialSong: {
        title: "Special Song for Cathleen",
        image: "https://pbs.twimg.com/media/Gr-PZu9WIAA1_7Y?format=jpg&name=large",
        link: "https://www.youtube.com/watch?v=0FDq5WsQB20",
        desc: "Ketika kata-kata tak lagi sanggup menggambarkan cantiknya si peri kecil , maka biarkanlah musik yang berbicara, mengalun pelan menyampaikan rasa, yang tak sempat terucap lewat lisan."
      }
        },




  
];

const NexusProject = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activeProject = PROJECTS.find(
    (project) => project.id === activeTab
  );

  return (
    <UIScreenContainer>
      <div className="nexusproject-container">
        {/* Tabs */}
        <div className="nexusproject-tabs">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              className={`nexusproject-tab ${
                activeTab === project.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(project.id)}
            >
              {project.tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="nexusproject-content">
          <div className="nexusproject-image-wrapper">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="nexusproject-image"
            />
          </div>

          <div className="nexusproject-text">
            <h2 className="nexusproject-title">{activeProject.title}</h2>
            <p className="nexusproject-description">
              {activeProject.description}
            </p>
          </div>
        </div>

        {/* ID 1 — Comic */}
        {activeProject.id === 1 && activeProject.comics && (
          <div className="nexusproject-comic-section">
            <h3 className="nexusproject-comic-title">Comic Gallery</h3>

            <div className="nexusproject-comic-list">
              {activeProject.comics.map((comic, index) => (
                <div key={index} className="nexusproject-comic-row">
                  <div className="nexusproject-comic-image">
                    <img src={comic.image} alt={comic.title} />
                  </div>

                  <div className="nexusproject-comic-text">
                    <h4>{comic.title}</h4>
                    <p>{comic.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ID 2 — Story + Ava + Fans */}
        {activeProject.id === 2 && (
          <>
            <div className="story-project-section">
              <h3>Story Project</h3>
              <p>{activeProject.storyProject.text}</p>

              <div className="story-project-image-wrapper">
                <img
                  src={activeProject.storyProject.image}
                  alt="Story"
                />
              </div>
            </div>

            <div className="ava-project-section">
              <img src={activeProject.ava.image} alt="Ava" />

              <div>
                <h3>{activeProject.ava.name}</h3>
                <p>{activeProject.ava.desc}</p>
              </div>
            </div>

            <div className="project-fans-section">
              <h3>Project</h3>

              <div className="project-fans-grid">
                {activeProject.fans.map((fan, index) => (
                  <div key={index} className="project-fan-card">
                    <img src={fan.image} alt="Fans" />
                    {fan.name && <p>{fan.name}</p>}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ID 3 — Donation Timeline Elegan */}
        {activeProject.id === 3 && activeProject.donation && (
          <div className="donation-timeline">
            {Object.entries(activeProject.donation).map(
              ([key, item], index) => (
                <div
                  key={index}
                  className={`donation-card ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="donation-image">
                    <img src={item.image} alt={key} />
                  </div>

                  <div className="donation-info">
                    <h4>{`Donasi ${key.replace("tahap", "Tahap ")}`}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}


       {/* ID 4 — 100 Show Project (Elegant Card Layout) */}
        {activeProject.id === 4 && activeProject.sections && (
          <div className="show100-grid">
            {activeProject.sections.map((section, index) => (
              <div key={index} className="show100-card">
                <div className="show100-card-image">
                  <img src={section.image} alt={section.title} />
                </div>

                <div className="show100-card-body">
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* ID 5 — CathleenThings Project */}
        {activeProject.id === 5 && (
          <>
            {/* Comic Section */}
            {activeProject.comics && (
              <div className="nexusproject-comic-section">
                <h3 className="nexusproject-comic-title">Comic Story</h3>
                <div className="nexusproject-comic-list">
                  {activeProject.comics.map((comic, index) => (
                    <div key={index} className="nexusproject-comic-row">
                      <div className="nexusproject-comic-image">
                        <img src={comic.image} alt={comic.title} />
                      </div>
                      <div className="nexusproject-comic-text">
                        <h4>{comic.title}</h4>
                        <p>{comic.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ava & Header Section */}
            {activeProject.avaHeader && (
              <div className="ava-header-section">
                <h3>{activeProject.avaHeader.title}</h3>
                <p>{activeProject.avaHeader.desc}</p>
                <div className="ava-header-grid">
                  <div className="ava-header-item">
                    <img src={activeProject.avaHeader.ava} alt="Avatar" />
                    <h4>Avatar</h4>
                  </div>
                  <div className="ava-header-item">
                    <img src={activeProject.avaHeader.header} alt="Header" />
                    <h4>Header</h4>
                  </div>
                </div>
              </div>
            )}

            {/* Videotron Section */}
            {activeProject.videotron && (
              <div className="videotron-section">
                <h3>Videotron Project</h3>
                <div className="videotron-grid">
                  {activeProject.videotron.map((vt, index) => (
                    <div key={index} className="videotron-card">
                      <img src={vt.image} alt={vt.lokasi} />
                      <div className="videotron-info">
                        <h4>{vt.lokasi}</h4>
                        <p>{vt.jam}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TCG Fanart Section */}
            {activeProject.tcgFanart && (
              <div className="tcg-fanart-section">
                <h3>{activeProject.tcgFanart.title}</h3>
                <p>{activeProject.tcgFanart.desc}</p>
                <div className="tcg-fanart-grid">
                  {activeProject.tcgFanart.images.map((img, index) => (
                    <div key={index} className="tcg-fanart-item">
                      <img src={img} alt={`TCG Fanart ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photobooth Section */}
            {activeProject.photobooth && (
              <div className="photobooth-section">
                <h3>{activeProject.photobooth.title}</h3>
                <img src={activeProject.photobooth.image} alt="Photobooth" />
                <p>{activeProject.photobooth.desc}</p>
              </div>
            )}

            {/* Special Song Section */}
            {activeProject.specialSong && (
              <div className="special-song-section">
                <h3>{activeProject.specialSong.title}</h3>
                <img src={activeProject.specialSong.image} alt="Special Song" />
                <p>{activeProject.specialSong.desc}</p>
                <a 
                  href={activeProject.specialSong.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="song-link-button"
                >
                  🎵 Dengarkan Sekarang
                </a>
              </div>
            )}
          </>
        )}

      </div>
    </UIScreenContainer>
  );
};

export default NexusProject;