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
    image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy6.png",
    comics: [
      {
        image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy1.jpg",
        title: "Chapter 1 ",
        text: "Cathleen Nixie (kerap disapa Cathy), adalah seorang gadis cantik penyuka peri. Ia gemar sekali bercermin dan membayangkan bahwa ia adalah seorang peri cantik dan merasa dirinya adalah bagian dari Fairyverse. Ya, Fairyverse. Alam peri."
      },
      {
        image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy2.jpg",
        title: "Chapter 2 ",
        text: "Suatu hari, Cathy merasa ada yang janggal pada cermin lemari kamarnya. Cermin itu tampak seperti portal hidup, memanggil-manggil namanya, membujuknya masuk. Dengan penasarannya, Ia mengamati dan meyakinkan diri untuk masuk. Ia pun masuk ke dalam cermin itu."
      },
      {
        image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy3.jpg",
        title: "Chapter 3 ",
        text: "Ia terkejut bukan main. Ternyata selama ini cermin lemari itu adalah sebuah portal dimensi dunia peri yang bernama Fairyverse. Cathy pun menghampiri semua tempat yang mencuri perhatiannya. Sampai pada akhirnya, Ia menemukan benda yang bernama Heart of Fairy."
      },
      {
        image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy4.jpg",
        title: "Chapter 4 ",
        text: "Heart of Fairy seperti memanggil Cathy. Ia pun mengambilnya dan mendapat pandangan dari benda itu kalau suatu saat dia akan jadi peri teladan di Fairyverse. Namun ia masih perlu banyak belajar. Mampukah Cathy mewujudkannya?"
      },
       {
        image: "/src/assets/NexusProject/TheMagic14nFairy/TheMagic14nFairy5.jpg",
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
    image: "/src/assets/NexusProject/Nixielebration15/Nixielebration151.jpg",

    storyProject: {
        text: "A Fairy from Nixie Hollow: Wilona Di Nixie Hollow, sebuah dunia penuh warna, terdapat peri jelita bernama Wilona. Dia dikenal sebagai pekerja keras dan penuh kejeniusan. Bersama peri lain, mereka mengumpulkan serbuk nixie untuk merayakan kedatangan ratu peri. Kehidupan harmonis mereka terganggu ketika Moonlight menentang cara tradisional mengumpulkan serbuk nixie. Dengan spontan, Moonlight menghancurkan stok serbuk yang telah dikumpulkan dengan susah payah, menimbulkan kekhawatiran di antara peri. Wilona, seorang peri jenius, tidak tinggal diam. Dengan kecerdasannya, dia menciptakan alat dari barang-barang di Nixie Hollow. Penemuan revolusioner ini membantu para peri membuat serbuk nixie dengan cepat, mengatasi masalah yang terjadi.Wilona, yang juga anggota kelompok musik Fairy Harmony, mendapat tugas baru. Dia diminta mengatur dan memimpin pertunjukan musik terbaru untuk merayakan kedatangan ratu peri. Tugas ini menarik karena Wilona berpengalaman dalam musik. Nixie Hollow kembali bersemi dengan kebahagiaan. Wilona mendapat pengakuan dari para peri lainnya berkat penemuannya. Dia diangkat menjadi tangan kanan warga Nixie Hollow, dihargai karena kebijaksanaannya dan inovasinya.Sebagai tangan kanan warga, Wilona tidak hanya bertanggung jawab atas acara musiman tetapi juga mengatur pertunjukan musik spektakuler dari Fairy Harmony, membawa kegembiraan dan inspirasi bagi Nixie Hollow.Dalam perjalanan hidupnya, Wilona terus belajar bahwa mempertahankan posisi dan keberhasilan memerlukan kerja keras, kerendahan hati, dan keinginan belajar. Wilona menginspirasi peri lain untuk tidak takut akan perubahan dan selalu mencari solusi.",
           image: "/src/assets/NexusProject/Nixielebration15/Nixielebration152.jpg",

  },
    ava: {        
      name: "AVA Project",
    image: "/src/assets/NexusProject/Nixielebration15/Nixielebration153.jpg",
      desc: "Kami telah menyiapkan ava dan header yang bisa digunakan untuk memeriahkan ulang tahun @N_CathyJKT48 yang ke-15.Mari meriahkan moment ini menggunakan ava dan header ini bersama-sama!"
    },

    fans: [
      {
        name: "Videotron Birthday Project @N_CathyJKT48 akan ditayangkan pada 28 Mei 2024. Bisa dikunjungi dilokasi berikut.",
        image: "/src/assets/NexusProject/Nixielebration15/Nixielebration156.jpg",
      },
      {
    
           image: "/src/assets/NexusProject/Nixielebration15/Nixielebration157.jpg",

      },
{
    
           image: "/src/assets/NexusProject/Nixielebration15/Nixielebration158.jpg",

      },{
    
           image: "/src/assets/NexusProject/Nixielebration15/Nixielebration159.jpg",

      },
    ]
  },

{
  id: 3,
  tab: "CathysAscending",
  title: "CathysAscending",
  description: "𝑻𝑹𝑰𝑵𝑮𝑮𝑮! 𝑳𝒆𝒕 𝒖𝒔 𝒃𝒆 𝒕𝒉𝒆 𝒘𝒊𝒏𝒈𝒔 𝒕𝒉𝒂𝒕 𝒍𝒊𝒇𝒕 𝒚𝒐𝒖 𝒃𝒆𝒚𝒐𝒏𝒅 𝒕𝒉𝒆 𝒛𝒆𝒏𝒊𝒕𝒉 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒅𝒓𝒆𝒂𝒎𝒔...",
  image: "/src/assets/NexusProject/CathysAscending/CathysAscending.jpg",

  donation: {

    tahap1: {
      text: "Kemarin, hasil voting tahap 1 Sousenkyou 2024 JKT48 telah diumumkan.\nTerima kasih bantuan dan dukungannya teman-teman semua untuk @N_CathyJKT48,sehingga Cathy bisa mencapai posisi #24. Ini awal bagi Cathy untuk terbang lebih tinggi.\n#BEGINNING \n#CathysAscending🧚🏻‍♀️",
    image: "/src/assets/NexusProject/CathysAscending/CathysAscending2.jpg",

    },

    tahap2: {
      text: "Miaw Minna! Hasil voting tahap 2 Sousenkyo 2024 JKT48 telah diumumkan.\nTerima kasih bantuan dan dukungannya teman-teman semua untuk @N_CathyJKT48\n , sehingga Cathy bisa mencapai posisi #12. Kita semua tahu bahwa hasil ini hanya bersifat sementara!\n#BEGINNING #CathysAscending🧚🏻‍♀️",
        image: "/src/assets/NexusProject/CathysAscending/CathysAscending3.jpg",

    },

    tahap3: {
      text: "At the end, we have become the wings that lift you beyond the zenith of your dreams!\n\nSemoga pencapaian posisi #20 ini menjadi #BEGINNING (awal) untuk memulai semangat baru dan mengeksplorasi hal-hal baru lagi!\n\nMiawmin ingin menyampaikan terima kasih yang sebesar-besarnya atas semua usaha, waktu, materi, dan dukungan luar biasa yang telah kalian berikan untuk @N_CathyJKT48.\n\nTerima kasih untuk para fans Cathy, baik yang bergabung di Cathleenexus maupun di luar Cathleenexus. Berkat kalian semua, Cathy akhirnya bisa berada di posisi ini!\nMiawmin percaya bahwa akan tiba suatu saat ketika semua orang bisa saling memahami satu sama lain. Terima kasih sudah percaya Cathy. Ingat, kalian adalah alasan Cathy untuk bertahan sampai sejauh ini dan kalianlah yang menjadi sumber kebahagiaannya.\n\nMari terus dukung Cathy bersama-sama, dan apapun yang terjadi tetaplah menjadi sayap peri Cathy hingga dia mencapai puncaknya.\n\n#CathyAscending 🧚🏻‍♀️",
       image: "/src/assets/NexusProject/CathysAscending/CathysAscending4.jpg",

    },
  },
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

        {/* ✅ TABS */}
        <div className="nexusproject-tabs">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              className={`nexusproject-tab ${activeTab === project.id ? "active" : ""}`}
              onClick={() => setActiveTab(project.id)}
            >
              {project.tab}
            </button>
          ))}
        </div>

        {/* ✅ MAIN CONTENT */}
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

        {/* =========================
            ✅ ID 1 → COMIC
        ========================= */}
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

        {/* =========================
            ✅ ID 2 → STORY + AVA + FANS
        ========================= */}
        {activeProject.id === 2 && (
          <>
            <div className="story-project-section">
              <h3>Story Project</h3>
              <p>{activeProject.storyProject.text}</p>
              <div className="story-project-image-wrapper">
                <img src={activeProject.storyProject.image} alt="Story" />
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

        {/* =========================
            ✅ ID 3 → DONATION
        ========================= */}
        {activeProject.id === 3 && activeProject.donation && (
          <div className="donation-section">

          

            <div className="donation-row">
              <img src={activeProject.donation.tahap1.image} alt="Tahap 1" />
              <div className="donation-text">
                <h4>Donasi Tahap 1</h4>
                <p>{activeProject.donation.tahap1.text}</p>
              </div>
            </div>

            <div className="donation-row">
              <img src={activeProject.donation.tahap2.image} alt="Tahap 2" />
              <div className="donation-text">
                <h4>Donasi Tahap 2</h4>
                <p>{activeProject.donation.tahap2.text}</p>
              </div>
            </div>

            <div className="donation-row">
              <img src={activeProject.donation.tahap3.image} alt="Tahap 3" />
              <div className="donation-text">
                <h4>Donasi Tahap 3</h4>
                <p>{activeProject.donation.tahap3.text}</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </UIScreenContainer>
  );
};

export default NexusProject;