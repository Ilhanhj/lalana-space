import { MenuCategory, SpaceActivity, Soundscape, EventSpace } from "./types";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "main-courses",
    title: "Makanan Utama",
    items: [
      {
        id: "bakmie-biang-lana",
        name: "Bakmie Biang Lana",
        description: "Mi lebar tebal bertekstur kenyal khas Lalana, disajikan dengan ayam gurih, kailan segar, kuah bakso hangat, pangsit lembut, dan sayuran.",
        price: "Rp 30.000",
        isSignature: true,
        notes: "Kelembutan mi artisan legendaris",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
        tags: ["Mi Artisan", "Terpopuler", "Sajian Hangat"]
      },
      {
        id: "spaghetti-tektek",
        name: "Spaghetti Tektek",
        description: "Spaghetti berbalut bumbu kuah khas Jawa yang manis, gurih, dan lekoh kaya rempah (Tingkat Pedas Level 1-3).",
        price: "Rp 28.000",
        isSignature: false,
        notes: "Perpaduan cita rasa lokal dan Barat",
        image: "https://images.unsplash.com/photo-1563379971899-660589a01ec3?auto=format&fit=crop&q=80&w=600",
        tags: ["Citarasa Nusantara", "Pedas Alami"]
      },
      {
        id: "spaghetti-goreng-tektok",
        name: "Spaghetti Goreng Tek Tok",
        description: "Spaghetti goreng wajan panas bertabur suwiran ayam gurih, telur urak-arik khas Lalana, dan sayuran segar (Tingkat Pedas Level 1-3).",
        price: "Rp 27.000",
        isSignature: false,
        notes: "Aroma wajan membara yang harum",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600",
        tags: ["Favorit Klien", "Pedas Alami"]
      },
      {
        id: "nasi-ayam-bakar",
        name: "Nasi Ayam Bakar",
        description: "Nasi putih hangat dipadukan dengan ayam panggang bumbu meresap, tahu kuning organik, lalapan segar pekarangan, kerupuk renyah, dan sambal rumahan pedas.",
        price: "Rp 31.000",
        isSignature: false,
        notes: "Bumbu meresap hingga ke dalam",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
        tags: ["Kenikmatan Tradisional", "Sambal Pedas"]
      },
      {
        id: "nasi-tutug-oncom",
        name: "Nasi Tutug Oncom",
        description: "Nasi tutug oncom khas Sunda bertabur rempah panggang kencur, disajikan dengan ayam goreng renyah, tahu, lalapan segar, kerupuk, dan sambal pedas alami.",
        price: "Rp 30.000",
        isSignature: true,
        notes: "Sajian otentik warisan budaya",
        image: "https://images.unsplash.com/photo-1626804475315-964403f71887?auto=format&fit=crop&q=80&w=600",
        tags: ["Khas Sunda", "Rempah Pilihan"]
      },
      {
        id: "soto-ayam-lana",
        name: "Soto Ayam Lana",
        description: "Soto kuah kuning harum rempah kunyit jahe, dipadukan suwiran ayam lembut, emping renyah, telur rebus, soun jagung, kol segar, disajikan dengan nasi putih.",
        price: "Rp 28.000",
        isSignature: false,
        notes: "Kuah kaldu hangat penyembuh lelah",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600",
        tags: ["Kuah Kaldu", "Sangat Hangat"]
      },
      {
        id: "nasi-goreng-lana",
        name: "Nasi Goreng Lana",
        description: "Nasi goreng bumbu legendaris khas Lalana bertabur potongan ayam gurih, irisan telur lembut, bakso sapi premium, dan potongan sayur segar.",
        price: "Rp 33.000",
        isSignature: true,
        notes: "Resep rahasia dapur Lalana",
        image: "https://images.unsplash.com/photo-1603133872878-6967b68230de?auto=format&fit=crop&q=80&w=600",
        tags: ["Paling Disukai", "Classic"]
      },
      {
        id: "nasi-jeruk-lana",
        name: "Nasi Jeruk Lana",
        description: "Nasi gurih harum beraroma irisan daun jeruk segar, disajikan bersama ayam goreng renyah, tahu gurih, dan siraman sambal matah Bali yang segar pedas.",
        price: "Rp 32.000",
        isSignature: true,
        notes: "Aroma sitrus pemulih selera makan",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
        tags: ["Wangi Alami", "Sambal Matah"]
      },
      {
        id: "sapo-tofu-ayam",
        name: "Sapo Tofu Ayam",
        description: "Nasi putih hangat dengan sapo tofu berkuah mengental hangat wangi wijen, kembang tahu sutra lembut, wortel manis, kerupuk, dan potongan filet ayam.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Sajian nyaman ramah pencernaan",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        tags: ["Tofu Sutra", "Sehat Alami"]
      },
      {
        id: "spaghetti-carbonara-katsu",
        name: "Spaghetti Carbonara Chicken Katsu",
        description: "Spaghetti berselimut krim keju carbonara gurih, disajikan dengan chicken katsu emas renyah dan siraman saus cokelat aromatik.",
        price: "Rp 37.000",
        isSignature: false,
        notes: "Perpaduan krim keju Italia dan katsu jepang",
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600",
        tags: ["Sajian Mewah", "Keju Melimpah"]
      },
      {
        id: "ricebowl-katsu-mentai",
        name: "Ricebowl Chicken Katsu Mentai",
        description: "Mangkuk nasi hangat atau pasta carbonara lembut yang diberi lapisan chicken katsu renyah bermahkota saus mentai gurih yang ditorch harum.",
        price: "Rp 33.000",
        isSignature: false,
        notes: "Saus mentai premium meleleh",
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
        tags: ["Mentai Torch", "Sangat Renyah"]
      },
      {
        id: "cordon-bleu",
        name: "Cordon Bleu",
        description: "Filet dada ayam goreng berbalut tepung roti keemasan berisi daging smoked beef gurih dan lelehan keju mozzarella, disajikan dengan kentang goreng dan salad segar.",
        price: "Rp 35.000",
        isSignature: false,
        notes: "Lelehan mozzarella di setiap gigitan",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca3e8?auto=format&fit=crop&q=80&w=600",
        tags: ["Mozzarella Leleh", "Kentang Goreng"]
      },
      {
        id: "spaghetti-agliolio",
        name: "Spaghetti Agliolio",
        description: "Pasta klasik Italia ditumis dengan minyak zaitun murni (extra virgin), bawang putih cincang, cabai kering, dan potongan filet dada ayam panggang juicy.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Sederhana, harum bawang gurih",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        tags: ["Minyak Zaitun", "Rendah Kalori"]
      },
      {
        id: "spaghetti-carbonara",
        name: "Spaghetti Carbonara",
        description: "Pasta spaghetti bertekstur al dente berselimut saus krim susu berkualitas tinggi, irisan jamur champignon gurih, dan smoked beef.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Saus krim lembut menyelimuti rasa",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600",
        tags: ["Keju & Krim", "Menu Klasik"]
      },
      {
        id: "ricebowl-asam-manis",
        name: "Rice Bowl Asam Manis",
        description: "Nasi putih hangat diselimuti potongan ayam goreng katsu tepung dengan siraman bumbu asam manis segar dan irisan bawang bombay segar.",
        price: "Rp 27.000",
        isSignature: false,
        notes: "Cita rasa asam manis pendongkrak energi",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
        tags: ["Saus Segar", "Praktis"]
      },
      {
        id: "katsu-lada-garam",
        name: "Chicken Katsu Lada Garam",
        description: "Nasi hangat bertumpu potongan ayam katsu renyah yang ditumis bumbu lada garam, bawang putih kering, dan irisan cabai merah.",
        price: "Rp 33.000",
        isSignature: false,
        notes: "Asin pedas lada murni menggoda",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600",
        tags: ["Asin Pedas", "Sangat Garing"]
      },
      {
        id: "curry-katsu",
        name: "Curry Pasta / Curry Nasi Chicken Katsu",
        description: "Spaghetti lembut atau nasi putih hangat bermandikan limpahan kuah kari kental khas Jepang bercita rasa gurih hangat, bermahkota chicken katsu.",
        price: "Rp 37.000",
        isSignature: false,
        notes: "Konsistensi kari legendaris kaya bumbu",
        image: "https://images.unsplash.com/photo-1626804475315-964403f71887?auto=format&fit=crop&q=80&w=600",
        tags: ["Kari Khas", "Rempah Hangat"]
      }
    ]
  },
  {
    id: "snacks-salads",
    title: "Kudapan & Salad",
    items: [
      {
        id: "dimsum-mentai",
        name: "Dimsum Mentai",
        description: "6 buah siomay ayam kukus buatan sendiri, berbalut saus mentai krim jepang melimpah yang dipanggang api pendar.",
        price: "Rp 34.000",
        isSignature: true,
        notes: "Paling laris di meja tengah sore",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
        tags: ["Saus Mentai", "Sangat Lembut"]
      },
      {
        id: "cheese-fries",
        name: "Cheese Fries",
        description: "Kentang goreng renyah bertabur garam laut dengan cocolan atau siraman saus keju cheddar premium kental nan manis asin.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Camilan renyah teman bercengkrama",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600",
        tags: ["Saus Keju", "Gurih Asin"]
      },
      {
        id: "tahu-lada-garam",
        name: "Tahu Lada Garam",
        description: "Tahu sutra potong dadu digoreng garing renyah, dibumbui bawang putih cincang, lada bubuk berkualitas, garam kristal, dan irisan cabai.",
        price: "Rp 18.000",
        isSignature: false,
        notes: "Renyah di luar, lembut meleleh di dalam",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        tags: ["Garing Gurih", "Vegan Friendly"]
      },
      {
        id: "mix-dimsum",
        name: "Mix Dimsum Platter",
        description: "Paket komplit dinikmati bersama: 2 lumpia ayam kulit tahu goreng, 2 siomay ayam lembut kuku, 2 dimsum nori rumput laut, disajikan dengan saus mayones dan chili oil.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Variasi lengkap penenang rasa lapar",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600",
        tags: ["Chili Oil", "Paket Sharing"]
      },
      {
        id: "pangsit-kuah",
        name: "Pangsit Kuah Kaldu",
        description: "4 buah pangsit ayam lembut isi padat mengapung di kuah kaldu murni hangat bertabur daun bawang dan sayur hijau.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Gurih murni alami tanpa pengawet",
        image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&q=80&w=600",
        tags: ["Kuah Kaldu", "Sopan di Lambung"]
      },
      {
        id: "pisang-gula-aren",
        name: "Pisang Gula Aren",
        description: "Pisang uli pilihan digoreng tepung garing keemasan bertabur saus kental karamel gula aren organik murni.",
        price: "Rp 18.000",
        isSignature: false,
        notes: "Manis asli nira aren alami",
        image: "https://images.unsplash.com/photo-1566393028639-d108a42c46a7?auto=format&fit=crop&q=80&w=600",
        tags: ["Manis Tradisional", "Gula Aren asli"]
      },
      {
        id: "pisang-keju-coklat",
        name: "Pisang Keju Coklat",
        description: "Kombinasi pisang goreng garing dibubuhi serutan keju cheddar melimpah dan lelehan cokelat kental manis.",
        price: "Rp 22.000",
        isSignature: false,
        notes: "Legit manis asin berbaur sempurna",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
        tags: ["Keju Cokelat", "Anak Sekolah"]
      },
      {
        id: "pisang-madu",
        name: "Pisang Madu Karamel",
        description: "Pisang goreng madu berwarna cokelat gelap mengilat berkilau karena karamelisasi madu hutan liar murni asli.",
        price: "Rp 21.000",
        isSignature: true,
        notes: "Warna pekat legit manis alami",
        image: "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?auto=format&fit=crop&q=80&w=600",
        tags: ["Madu Hutan", "Karamel Alami"]
      },
      {
        id: "snack-platter",
        name: "Snack Platter",
        description: "Satu wadah kayu besar memuat porsi kumpul: kentang goreng garing asin, sosis panggang, dan onion ring manis bermahkota tepung roti garing.",
        price: "Rp 25.000",
        isSignature: false,
        notes: "Teman terbaik sesi berbagi obrolan",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        tags: ["Ramah Kantong", "Renyah Porsian"]
      },
      {
        id: "cireng-rujak",
        name: "Cireng Bumbu Rujak",
        description: "Cireng salju bertekstur luar garing garing bagian dalam kenyal lembut, disajikan dengan saus sambal bumbu rujak pedas manis beraroma asam jawa.",
        price: "Rp 18.000",
        isSignature: false,
        notes: "Asam pedas menyegarkan tenggorokan",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600",
        tags: ["Bumbu Rujak", "Garing Kenyal"]
      },
      {
        id: "french-fries-classic",
        name: "French Fries",
        description: "Kentang goreng potongan shoestring bertabur garam laut tipis alami penambah rasa gurih halus.",
        price: "Rp 18.000",
        isSignature: false,
        notes: "Keemasan, kering tak berminyak berlebih",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600",
        tags: ["Klasik Minimalis"]
      },
      {
        id: "lana-chicken-wings",
        name: "Lana Chicken Wings (Cheese / Mentai)",
        description: "5 potong sayap ayam gurih bumbu rempah oriental disajikan dengan balutan Saus Keju Cheddar kental atau Saus Mentai khas Lalana.",
        price: "Rp 32.000",
        isSignature: false,
        notes: "Keju (32k) atau Mentai premium (34k)",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600",
        tags: ["Sayap Ayam", "Gurih Meresap"]
      },
      {
        id: "thousand-island-salad",
        name: "Thousand Island Salad",
        description: "Mangkuk penuh sayur hijau selada segar, irisan smoked beef bumbu panggang, parutan keju gurih, disiram saus Thousand Island yang creamy.",
        price: "Rp 27.000",
        isSignature: false,
        notes: "Pilihan terbaik penambah serat harian",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        tags: ["Sajian Sehat", "Serat Hijau"]
      },
      {
        id: "thailand-salad",
        name: "Thailand Salad",
        description: "Perpaduan sayuran renyah segar, suwiran daging fillet dada ayam gurih, dilimpahi saus Bangkok manis asam pedas yang sangat aromatik.",
        price: "Rp 27.000",
        isSignature: false,
        notes: "Sajian dingin beraroma ketumbar sitrus",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
        tags: ["Saus Bangkok", "Rendah Lemak"]
      }
    ]
  },
  {
    id: "desserts-pastries",
    title: "Pencuci Mulut & Pastri",
    items: [
      {
        id: "smoked-beef-egg-croissant",
        name: "Smoked Beef & Egg Croissant",
        description: "Croissant mentega berlapis renyah luar biasa, diakhiri isian daging selai smoked beef gurih dan mentega telur dadar lembut.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Kombinasi sarapan favorit sepanjang hari",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
        tags: ["Mentega Prancis", "Gurih Renyah"]
      },
      {
        id: "strawberry-whip-croissant",
        name: "Strawberry Whipcream Croissant",
        description: "Croissant garing diisi kocokan krim murni vanila yang sangat lembut dan buah beri stroberi merah segar manis asam.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Manis lembut menyegarkan indra",
        image: "https://images.unsplash.com/photo-1530610476181-d83430964d55?auto=format&fit=crop&q=80&w=600",
        tags: ["Buah Stroberi", "Krim Lembut"]
      },
      {
        id: "ice-cream-croissant",
        name: "Ice Cream Croissant",
        description: "Kombinasi kontras nan ajaib: croissant mentega prancis yang hangat ditumpangkan es krim vanila/cokelat lumer beku.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Sensasi panas dingin bergantian manis",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
        tags: ["Es Krim Lumer", "Sajian Unik"]
      },
      {
        id: "panacotta",
        name: "Classic Panacotta",
        description: "Puding susu sutra italia bertekstur goyang lembut di lidah, dilumuri jus buah beri liar asam manis.",
        price: "Rp 22.000",
        isSignature: false,
        notes: "Puding susu lumer super higienis",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
        tags: ["Susu Sutra", "Sangat Dingin"]
      },
      {
        id: "banana-split",
        name: "Banana Split",
        description: "Sajian pisang uli manis matang dibelah dua, diisi tiga scoop es krim rasa cokelat pekat, matcha Jepang asli, dan stroberi merah.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Pesta rasa pisang legendaris",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600",
        tags: ["Tiga Scoop", "Sempurna Berbagi"]
      },
      {
        id: "shalanat-bites",
        name: "Shalanat Bites",
        description: "Camilan gigit imut cokelat pekat organik berlapis bubuk kakao tipis beraroma kacang panggang.",
        price: "Rp 20.000",
        isSignature: true,
        notes: "Sekali gigit bikin ketagihan",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
        tags: ["Cokelat Pekat", "Camilan Ringan"]
      },
      {
        id: "chocolate-mousse",
        name: "Belgian Chocolate Mousse",
        description: "Mousse cokelat ditiup saringan mikro super anggun nan lembut diolah dengan 70% biji cokelat hitam Belgia asli.",
        price: "Rp 30.000",
        isSignature: false,
        notes: "Pahit manis cokelat hitam mulia",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
        tags: ["Cokelat Belgia", "Sangat Mewah"]
      },
      {
        id: "ny-cheesecake",
        name: "New York Cheesecake",
        description: "Kue keju padat gurih panggang ala New York berpadu dengan kelembutan krim keju lumer beralaskan remahan biskuit gandum mentega.",
        price: "Rp 30.000",
        isSignature: true,
        notes: "Rasa gurih keju krim melimpah",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600",
        tags: ["Krim Keju", "Terpopuler"]
      },
      {
        id: "ice-cream-scoops",
        name: "Ice Cream (Chocolate / Matcha / Strawberry)",
        description: "Nikmati satu sekop (scoop) es krim susu murni bertekstur padat lembut dengan opsi Cokelat klasik, Matcha Shizuoka asli, atau Stroberi asam.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Rasa dingin penurun penat siang hari",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600",
        tags: ["Dingin Manis"]
      }
    ]
  },
  {
    id: "coffee-drinks",
    title: "Sajian Kopi",
    items: [
      {
        id: "banana-cream-cheese-latte",
        name: "Banana Cream Cheese Latte",
        description: "Kopi susu espresso artisan dengan cita rasa manis ekstrak pisang Ambon matang dan busa keju asin (cream cheese foam) gurih.",
        price: "Rp 26.000",
        isSignature: true,
        notes: "Rasa pisang harum berpadu keju asin",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
        tags: ["Kopi Berbusa", "Manis & Gurih", "Rekomendasi"]
      },
      {
        id: "es-kopi-lana",
        name: "Es Kopi Lana",
        description: "Formula es kopi susu legendaris menggunakan espresso arabika perasan segar, susu pasteurisasi, dan sirup gula aren pilihan (Opsi tambah Oatmilk/Cream Cheese +4k).",
        price: "Rp 22.000",
        isSignature: true,
        notes: "Formula dasar kopi penenang pikiran Lalana",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        tags: ["Kopi Susu", "Gula Aren", "Signature"]
      },
      {
        id: "es-kopi-berry",
        name: "Es Kopi Berry",
        description: "Perpaduan menawan espresso segar dari pegunungan Jawa, susu murni berprotein tinggi, dan sirup buah stroberi hutan merah.",
        price: "Rp 25.000",
        isSignature: false,
        notes: "Rasa buah cerah penyeimbang espresso pahit",
        image: "https://images.unsplash.com/photo-14610237176d6-6564079478a5?auto=format&fit=crop&q=80&w=600",
        tags: ["Buah Asli", "Dingin Segar"]
      },
      {
        id: "caramel-seasalt",
        name: "Caramel Seasalt Latte",
        description: "Tegukan manis gurih kopi susu karamel buatan tangan bermahkota saringan garam laut kelabu (sea salt cream) yang halus di lidah.",
        price: "Rp 27.000",
        isSignature: true,
        notes: "Karunia rasa garam laut penyeimbang manis",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53f?auto=format&fit=crop&q=80&w=600",
        tags: ["Garam Laut", "Caramel Gurih"]
      },
      {
        id: "butterscotch-seasalt",
        name: "Butterscotch Seasalt Latte",
        description: "Kombinasi harum sirop mentega panggang butterscotch premium dengan kopi susu kebanggaan dan buih garam laut tebal.",
        price: "Rp 27.000",
        isSignature: false,
        notes: "Manis panggangan berpadu gurih garam",
        image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600",
        tags: ["Butterscotch", "Sangat Mewah"]
      },
      {
        id: "creamericano",
        name: "Creamericano",
        description: "Espresso americano murni hasil sulingan suhu rendah bermahkota busa krim manis kocok vanilla yang melayang di atas cangkir.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Tegukan pahit berujung manis krim awan",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
        tags: ["Krim Vanilla", "Tanpa Susu Encer"]
      },
      {
        id: "black-sulberry",
        name: "Black Sulberry",
        description: "Mocktail kopi hitam dingin hasil distilasi kering dengan sirup ekstrak buah beri biru hitam yang asam menyegarkan.",
        price: "Rp 22.000",
        isSignature: false,
        notes: "Ringan beraroma buah naga hitam",
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600",
        tags: ["Kopi Mocktail", "Asam Segar"]
      },
      {
        id: "black-pina-rose",
        name: "Black Pina Rose",
        description: "Seni mocktail kopi arabika dingin beralas sari buah nanas tropis kuning manis dengan sentuhan semerbak air sulingan kelopak bunga mawar.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Aroma tropis bunga harum menyenangkan",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        tags: ["Bunga Rose", "Harum Tropis"]
      },
      {
        id: "lemonica",
        name: "Lemonica",
        description: "Kopi hitam dingin americano dikocok (shake) dengan perasan jus jeruk lemon organik kuning segar dan sesendok madu murni.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Pembersih dahaga dengan sentuhan asam kecut",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600",
        tags: ["Lemon Asli", "Madu Hutan"]
      },
      {
        id: "basic-cappuccino",
        name: "Cappuccino",
        description: "Espresso murni pekat berpadu dengan susu murni berbusa mikro (microfoam) tebal wangi bubuk kayu manis di atasnya.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Klasik, tak lekang oleh zaman",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53f?auto=format&fit=crop&q=80&w=600",
        tags: ["Klasik", "Busa Tebal"]
      },
      {
        id: "basic-americano",
        name: "Americano",
        description: "Dua sloki espresso kaya krema disiram air sulingan panas bersuhu stabil untuk melepaskan body aslinya.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Tubuh kopi yang jernih bersahaja",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        tags: ["Kopi Hitam", "Tanpa Gula"]
      },
      {
        id: "basic-affogato",
        name: "Affogato",
        description: "Dua scoop es krim vanila murni bermandikan siraman secangkir espresso arabika pekat yang membara panas.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Sensasi dessert kopi legendaris",
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=600",
        tags: ["Es Krim & Kopi"]
      },
      {
        id: "basic-hazelnut-latte",
        name: "Hazelnut Latte",
        description: "Kopi susu espresso berpadu sirup kacang hazelnut yang manis gurih dan berakar aroma panggangan kayu.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Rasa kacang gurih manis",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
        tags: ["Nutty", "Manis Gurih"]
      },
      {
        id: "basic-irish-coffee",
        name: "Irish Coffee (Non-Alcohol)",
        description: "Kopi espresso susu murni dengan sirup aroma sirup gandum panggang khas Irlandia bebas alkohol yang harum pekat.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Keharuman malt gandum istimewa",
        image: "https://images.unsplash.com/photo-14610237176d6-6564079478a5?auto=format&fit=crop&q=80&w=600",
        tags: ["Aroma Unik", "Non Alkohol"]
      },
      {
        id: "basic-latte",
        name: "Café Latte",
        description: "Keseimbangan espresso murni dengan steamed milk lembut manis alami dari proses pemanasan uap susu.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Susu lembut, ramah lambung",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        tags: ["Klasik Latte", "Susu Lembut"]
      },
      {
        id: "basic-mocca-latte",
        name: "Mocca Latte",
        description: "Harmoni dari sesendok bubuk cokelat premium, espresso pekat, dan susu murni berbusa mikro lembut.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Kombinasi rasa kopi dan cokelat",
        image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600",
        tags: ["Cokelat & Kopi", "Sedang"]
      },
      {
        id: "manual-brew-v60",
        name: "Manual Brew (V-60 / Japanese / Vietnam Drip)",
        description: "Sajian kopi seduh tangan penuh perasaan. Menggunakan filter kertas V-60 untuk clarity tinggi, Japanese ice brew, atau tetesan lambat ala Vietnam drip manis.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Seduhan manual biji kopi arabika pilihan",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        tags: ["Manual Brew", "Seduh Tangan"]
      }
    ]
  },
  {
    id: "non-coffee-drinks",
    title: "Teh & Non-Kopi",
    items: [
      {
        id: "caramel-regal-frappe",
        name: "Caramel Regal Frappe",
        description: "Blended ice susu murni bersalut karamel emas manis yang diblender es, bermahkotakan remahan biskuit Marie Regal yang renyah berlimpah.",
        price: "Rp 26.000",
        isSignature: false,
        notes: "Karamel regal favorit penutup sore",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        tags: ["Marie Regal", "Ice Blended"]
      },
      {
        id: "pink-lady-frappe",
        name: "Pink Lady Frappe",
        description: "Blended ice stroberi merah muda lembut dikocok susu segar, krim vanila lembut, dan sirup buah raspberry hutan manis halus.",
        price: "Rp 28.000",
        isSignature: false,
        notes: "Warna merah muda romantis alami",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600",
        tags: ["Warna Cantik", "Frappe Stroberi"]
      },
      {
        id: "baby-choco-chips",
        name: "Baby Choco Chips Frappe",
        description: "Sajian blended cokelat Belgia manis pekat dengan butiran keping cokelat (choco chips) renyah garing di setiap sedotan.",
        price: "Rp 28.000",
        isSignature: false,
        notes: "Kaya cokelat murni tanpa henti",
        image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600",
        tags: ["Keping Cokelat", "Anak Gembira"]
      },
      {
        id: "matcha-frappe",
        name: "Matcha Frappe",
        description: "Ice blended dari bubuk matcha Shizuoka Jepang berkualitas tinggi, steamed milk murni, dan mahkota krim vanilla tipis.",
        price: "Rp 28.000",
        isSignature: true,
        notes: "Tekstur legit wangi matcha asli",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        tags: ["Matcha Shizuoka", "Otentik"]
      },
      {
        id: "pina-tropica",
        name: "Pina Tropica",
        description: "Sajian dingin penyegar tenggorokan dari jus konsentrat nanas madu subang, air kelapa segar murni, dan daun mint hijau keprek.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Aroma tropis segar penurun dehidrasi",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600",
        tags: ["Bebas Soda", "Sangat Tropis"]
      },
      {
        id: "chy-kult",
        name: "Chy-kult Lychee Yakult",
        description: "Perpaduan asam segar susu fermentasi Yakult dengan sirup buah leci manis asli dan buah leci murni utuh.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Sangat baik untuk pencernaan sehat",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600",
        tags: ["Leci Alami", "Yakult Segar"]
      },
      {
        id: "go-kult",
        name: "Go-kult Orange Yakult",
        description: "Segelas penuh kesegaran dari perasan buah jeruk manis, dicampur sebotol Yakult dingin yang menyegarkan tubuh.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Kandungan vitamin C tinggi alami",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
        tags: ["Jeruk Segar", "Sehat Probiotik"]
      },
      {
        id: "peach-belini",
        name: "Peach Belini Refresher",
        description: "Sajian teh oolong dingin dipadukan dengan irisan buah persik (peach) kuning harum manis, kelopak bunga marigold, dan lemon soda.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Keharuman buah peach yang anggun",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=600",
        tags: ["Buah Persik", "Aromatik Oolong"]
      },
      {
        id: "summer-breeze",
        name: "Summer Breeze",
        description: "Penyegar alami sore hari hasil kombinasi sirup bunga rosella merah, perasan nipis, limpahan es, dan tangkai daun rosemary segar.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Warna merah merona alami",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        tags: ["Rosella", "Rosmari segar"]
      },
      {
        id: "vie",
        name: "Vie Blossom Elixir",
        description: "Sajian ajaib berwarna biru ungu transisi alami hasil seduhan bunga telang (butterfly pea) dengan infusi daun sereh wangi dan jeruk nipis segar.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Visual warna transisi menawan",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        tags: ["Bunga Telang", "Alami Herbal"]
      },
      {
        id: "berry-nana-smoothie",
        name: "Berry Nana Smoothie",
        description: "Smoothie yogurt kental mengenyangkan seimbang dari blenderan buah pisang matang pohon, aneka buah beri merah beku, madu liar murni, dan Greek yogurt.",
        price: "Rp 23.000",
        isSignature: false,
        notes: "Pilihan sehat pengganti makan ringan berpati",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
        tags: ["Yogurt Yunani", "Buah Pisang Beri"]
      },
      {
        id: "strawberry-smoothie",
        name: "Strawberry Smoothie",
        description: "Mangkuk blender kental dingin murni dari puluhan buah stroberi merah asam, oatmeal halus, dan yogurt probiotik.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Padat bergizi tinggi antioksidan",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        tags: ["Serat Buah Stroberi"]
      },
      {
        id: "detox-pinna",
        name: "Detox Pinna Smoothie",
        description: "Gelas penuh kesegaran hijau pembersih racun tubuh dari blenderan nanas madu manis, daun bayam baby organik segar, mentimun renyah, dan madu murni.",
        price: "Rp 24.000",
        isSignature: false,
        notes: "Rasa manis sayur segar tanpa bau langu",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
        tags: ["Bayam Organik", "Blender Detoks"]
      },
      {
        id: "choco-hazel",
        name: "Choco Hazel Latte",
        description: "Sajian cokelat murni premium dipadukan dengan sirup sirup kacang hazelnut gurih panggangan yang nikmat di mulut (Es/Hangat).",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Cokelat gurih dengan aksen hazelnut panggang",
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600",
        tags: ["Cokelat", "Tanpa Kafein"]
      },
      {
        id: "choco-lana",
        name: "Choco Lana",
        description: "Formula cokelat panas/dingin murni khas Lalana hasil ekstraksi biji cokelat lokal dengan whipped milk lembut berujung rasa pekat murni.",
        price: "Rp 25.000",
        isSignature: true,
        notes: "Cokelat murni kebanggaan Lalana",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
        tags: ["Cokelat Murni", "Sajian Nyaman"]
      },
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Susu hangat kental dikocok kuas bambu bersama matcha bubuk Shizuoka Jepang asli tanpa pemanis buatan berlebih.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Matcha ritual murni pembawa ketenangan batin",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        tags: ["Premium Matcha", "Tradisi Jepang"]
      },
      {
        id: "red-velvet-latte",
        name: "Red Velvet Latte",
        description: "Susu krim merah beludru beraroma tipis cokelat manis hangat yang lembut menghias sore hari Anda.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Rasa kue red velvet lumer",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600",
        tags: ["Red Velvet", "Sajian Cantik"]
      },
      {
        id: "taro-latte-classic",
        name: "Taro Latte",
        description: "Sajian beraroma umbi ungu taro manis organik, dipadukan susu gandum hangat/dingin yang kental lembut dan wangi.",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Sensasi wangi taro yang gurih",
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600",
        tags: ["Taro Alami", "Bebas Kafein"]
      },
      {
        id: "tea-lemon",
        name: "Lemon Tea",
        description: "Seduhan teh hitam pekat klasik disiram dengan perasan jeruk lemon kuning segar bersuhu es (Rp 18.000).",
        price: "Rp 18.000",
        isSignature: false,
        notes: "Kesegaran lemon penangkas dahaga siang",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600",
        tags: ["Teh Klasik", "Jeruk Lemon"]
      },
      {
        id: "tea-lychee",
        name: "Lychee Tea",
        description: "Teh hitam wangi seduh dingin dipadukan buah leci bulat manis utuh and sirup leci premium (Rp 19.000).",
        price: "Rp 19.000",
        isSignature: false,
        notes: "Cita rasa manis buah leci renyah",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600",
        tags: ["Teh Leci", "Buah Utuh"]
      },
      {
        id: "tea-peach",
        name: "Peach Tea",
        description: "Seduhan teh oolong premium disajikan dingin dengan irisan buah persik berkulit tipis yang berbau harum manis (Rp 20.000).",
        price: "Rp 20.000",
        isSignature: false,
        notes: "Keharuman persik legendaris pendongkrak mood",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=600",
        tags: ["Teh Persik", "Harum Anggun"]
      }
    ]
  },
  {
    id: "bottle-happiness",
    title: "Botol Kebahagiaan",
    items: [
      {
        id: "matcha-botol",
        name: "Matcha La Botol (1 Liter)",
        description: "Matcha latte premium pekat khas Shizuoka ukuran 1 liter untuk stok di kulkas atau disajikan pada perayaan intim bersama sanak saudara.",
        price: "Rp 45.000",
        isSignature: false,
        notes: "Kemasan literan awet dalam kulkas",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        tags: ["Ukuran 1 Liter", "Premium Matcha", "Siap Saji"]
      },
      {
        id: "lakopi-botol",
        name: "Es Lakopi La Botol (1 Liter)",
        description: "Varian es kopi susu aren legendaris Lalana dikemas botol kaca ukuran 1 liter higienis untuk kumpul santai bebas bising bersama komunitas.",
        price: "Rp 50.000",
        isSignature: true,
        notes: "Kopi susu aren Lalana porsi melimpah",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        tags: ["Ukuran 1 Liter", "Kopi Susu Aren", "Sangat Hemat"]
      },
      {
        id: "kopi-klasik-botol",
        name: "Es Kopi Klasik Botol (1 Liter)",
        description: "Latte kopi susu murni klasik tanpa pemanis berlebih ukuran 1 liter, cocok bagi penggemar rasa kopi murni aromatik yang seimbang.",
        price: "Rp 45.000",
        isSignature: false,
        notes: "Rendah gula kalori, rasa bold",
        image: "https://images.unsplash.com/photo-14610237176d6-6564079478a5?auto=format&fit=crop&q=80&w=600",
        tags: ["Ukuran 1 Liter", "Es Kopi Latte"]
      },
      {
        id: "coklat-lana-botol",
        name: "Coklat Lana Botol (1 Liter)",
        description: "Seduhan minuman cokelat pekat legendaris Lalana ukuran keluarga 1 liter. Pilihan minuman kumpul ramah lambung non-kafein favorit semua orang.",
        price: "Rp 50.000",
        isSignature: false,
        notes: "Cokelat pekat lumer favorit anak-anak",
        image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600",
        tags: ["Ukuran 1 Liter", "Cokelat Pekat"]
      }
    ]
  }
];

export const UPCOMING_ACTIVITIES: SpaceActivity[] = [
  {
    id: "ceramic-workshop",
    title: "Melipat Tanah: Meditasi Tanah Liat",
    description: "Sore yang tenang membentuk tanah liat basah menjadi wadah dupa atau cangkir teh organik tanpa bantuan mesin bubut.",
    date: "Sabtu, 6 Juni",
    time: "14:00 - 16:30",
    price: "Rp 350k",
    spotsLeft: 4,
    maxSpots: 10,
    instructor: "Yui Kanamoto (Seniman Keramik)",
    tag: "Seni Keramik",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mindful-reading",
    title: "Membaca Sunyi: Pojok Buku Senyap",
    description: "Serahkan gawai Anda di pintu masuk. Duduk di bawah lampion kertas, minum matcha hangat, dan nikmati sunyi bersama buku pilihan.",
    date: "Kamis, 11 Juni",
    time: "18:30 - 20:30",
    price: "Rp 100k",
    spotsLeft: 7,
    maxSpots: 15,
    instructor: "Fasilitator Kolektif",
    tag: "Sesi Hening",
    image: "https://images.unsplash.com/photo-1491849794228-530326746488?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sound-movement",
    title: "Vinyasa Yoga & Suara Mangkuk Kristal",
    description: "Gerakan peregangan lambat disusul relaksasi dalam berbalut dengung vibrasi murni dari mangkuk kristal kuarsa.",
    date: "Minggu, 14 Juni",
    time: "09:00 - 10:30",
    price: "Rp 250k",
    spotsLeft: 3,
    maxSpots: 12,
    instructor: "Evelyn Finch (Terapis Yin)",
    tag: "Terapi Suara",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  }
];

export const AMBIENT_SOUNDS: Soundscape[] = [
  {
    id: "earth-hum",
    name: "Meditation Drone (432Hz)",
    description: "Gelombang suara rendah harmonis bumi untuk menurunkan frekuensi denyut jantung.",
    url: "earth",
    iconName: "Mountain"
  },
  {
    id: "gentle-waves",
    name: "Harmoni Ombak Pantai",
    description: "Sintesis deru ombak laut lamban penyegar napas meditatif.",
    url: "waves",
    iconName: "Waves"
  },
  {
    id: "temple-chimes",
    name: "Genta Damai Kuil Sunyi",
    description: "Genting suara lonceng tipis acak pengingat keheningan saat ini.",
    url: "chimes",
    iconName: "Bell"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Pernikahan Intim & Selebrasi Sakral",
    description: "Kami mewadahi upacara pertunangan, janji suci, hingga selebrasi pernikahan berskala kecil (intimate wedding) yang khidmat, tenang, dan menyatu erat dengan nuansa hutan lumut serta batu terakota alami.",
    keywords: ["Pernikahan Intim", "Dekorasi Botani", "Sajian Teh Upacara", "Khidmat Tanpa Gawai"]
  },
  {
    title: "Lokakarya Kreatif & Kriya Nusantara",
    description: "Rayakan kriya jemari Anda dengan kelas pembentukan tanah liat, melukis cat air meditasi, ikatan tali makrame, hingga pertukaran karya lokal yang membangkitkan kepekaan motorik dan jiwa seni.",
    keywords: ["Kelas Tanah Liat", "Workshop Ikebana", "Arsitektur Low-Sensory", "Buka Reservasi Umum"]
  }
];

export const CAFE_SPACES: EventSpace[] = [
  {
    id: "intimate-wedding",
    title: "Pernikahan, Akad & Pertunangan Tepi Sawah",
    description: "Abadikan momen sakral sekali seumur hidup Anda di tepi hamparan sawah Bojongsoang yang menakjubkan. Area semi-outdoor tropis asri kami dapat menampung perhelatan megah hingga 200 tamu khidmat dengan asupan angin pedesaan yang sejuk.",
    capacity: "Hingga 200 Orang",
    price: "",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    features: ["Semi-outdoor Tepi Sawah Luas", "Sistem Penyajian Prasmanan Lengkap", "Dekorasi Botani Alami Segar", "Set Tata Suara & Akustik Handal"],
    suitedFor: ["Upacara Pernikahan", "Acara Pertunangan", "Makan Malam Keluarga Besar", "Foto Wedding & Prewedding"]
  },
  {
    id: "workshop-kriya",
    title: "Gathering Perusahaan, Komunitas & Ulang Tahun",
    description: "Hub sosial serbaguna yang sangat lapang dan dikelilingi arsitektur bambu modern serta lampion rotan hangat. Menawarkan atmosfer santai namun profesional bagi acara kantor atau pertambahan usia yang berkesan.",
    capacity: "Hingga 200 Orang",
    price: "",
    image: "https://images.unsplash.com/photo-151351245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    features: ["Dukungan Proyektor & Presentasi", "Pilihan Buffet & Coffee Break Kustom", "Penataan Kursi Sangat Fleksibel", "Pelayanan Kru Event Dedikatif"],
    suitedFor: ["Corporate Gathering", "Ulang Tahun & Hari Jadi", "Seminar & Talkshow", "Arisan & Karib Komunitas"]
  },
  {
    id: "intimate-gathering",
    title: "Restoran & Kafe Utama (Sewa Sebagian / Total)",
    description: "Area bersantap utama dengan ornamen kayu jati daur ulang dan pemandangan fajar/senja sawah yang langsung memanjakan mata. Opsi ideal untuk makan siang komunitas atau reuni hangat dengan menu prasmanan khas Nusantara & Barat.",
    capacity: "Hingga 150 Orang",
    price: "",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=800",
    features: ["Pemandangan Sawah Langsung", "Variasi Menu Nusantara & Barat", "Minuman Es Kopi & Refresher Terbaik", "Alunan Musik Akustik Santai"],
    suitedFor: ["Makan Bersama Komunitas", "Reuni & Temu Kangen", "Private Buffet Dining", "Rapat Kerja Santai"]
  }
];

