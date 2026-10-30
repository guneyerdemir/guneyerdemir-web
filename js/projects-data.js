/**
 * DİNAMİK PROJE VERİ TABANI (DATA-DRIVEN PORTFOLIO REPOSITORY)
 * Yeni bir proje eklemek veya mevcut projeyi güncellemek için yalnızca bu dosyaya
 * yeni bir nesne eklemeniz yeterlidir; HTML yapısını değiştirmeniz gerekmez.
 *
 * Tüm projeler çalışma alanındaki gerçek kod tabanlarından ve CV belgelerinden doğrulanmıştır.
 */

window.PROJECTS_DATA = [
  {
    id: "benim-ikinci-el-depom",
    featured: true,
    categoryKey: "marketplace",
    image: "assets/images/project-depom.svg",
    url: "https://www.benimikincieldepom.com",
    urlDisplay: "benim_ikinciel_depom.com / www.benimikincieldepom.com",
    caseStudyUrl: "projects/benim-ikinci-el-depom.html",
    technologies: [
      "Python",
      "Flask",
      "PostgreSQL",
      "SQLite",
      "REST API",
      "JWT & Google OAuth2",
      "JavaScript (ES6+)",
      "HTML5 & CSS3 (PWA)",
      "Docker & Gunicorn",
      "Nginx"
    ],
    tr: {
      title: "Benim İkinci El Depom",
      category: "E-Ticaret & FinTech Pazaryeri (Girişim)",
      status: "Çalışan MVP / Prototip (41/41 Test Doğrulamalı)",
      description:
        "İkinci el ticaretini yüksek komisyon baskısından (%15–%18) ve dolandırıcılık risklerinden arındıran; yapılandırılmış satıcı mağazaları, sabit abonelik modeli ve Depo-Cash güvenli havuz (Escrow) cüzdan mimarisine sahip yeni nesil pazaryeri platformu.",
      problem:
        "Geleneksel ikinci el platformlarında satıcıların %15–%18'e varan komisyonlarla kâr marjlarının erimesi, kurumsal mağaza kimliği eksikliği ve bireysel alışverişlerdeki ödeme/teslimat güven krizi.",
      solution:
        "Komisyonsuz aylık SaaS mağaza abonelikleri (99–499 TL), 4 adımlı mağaza açma sihirbazı ve alıcı ürünü teslim alıp onaylayana kadar ödemeyi güvenli havuzda (wallet_pending) bloke eden Depo-Cash Escrow sistemi.",
      verifiedHighlights: [
        "Misafir, Alıcı, Satıcı ve Yönetici (Admin) rol ayrımı; JWT + Google OAuth2 kimlik doğrulaması ve brute-force hız sınırlaması (Rate Limiting)",
        "Depo-Cash Cüzdan & Escrow: Atomik SQL bakiye düşümü (double-spending koruması), alıcı teslimat onayı (confirm-delivery) ve uyuşmazlık/iade kalkanı",
        "Satıcı Paneli (seller.html) & 4 Adımlı Mağaza Açma Sihirbazı (magaza-ac.html): Çoklu görsel optimizasyonu, sipariş/kargo takibi, mesajlaşma ve abonelik yönetimi",
        "Yönetici Denetim Masası (admin.html): Canlı KPI'lar, TR IBAN para çekim onay/red mekanizması, dekontlu manuel bakiye tanımlama ve değiştirilemez Audit Log",
        "Çift yönlü veritabanı bağdaştırıcısı (db.py ile yerel SQLite ve canlı PostgreSQL uyumu) ve 41/41 başarılı otomatik kabul/güvenlik testi"
      ]
    },
    en: {
      title: "Benim İkinci El Depom",
      category: "Recommerce & Escrow Marketplace (Venture)",
      status: "Operational MVP / Prototype (41/41 Tests Passed)",
      description:
        "A next-generation recommerce marketplace eliminating predatory 15–18% transaction commissions and peer-to-peer fraud through structured seller storefronts, flat SaaS subscriptions, and the built-in Depo-Cash Escrow wallet engine.",
      problem:
        "Severe seller margin erosion due to 15–18% take-rates on incumbent platforms, lack of branded storefront identity for second-hand sellers, and trust deficits in C2C payments.",
      solution:
        "Zero-commission flat monthly SaaS tiers (99–499 TRY), a 4-step merchant onboarding wizard, and the Depo-Cash Escrow vault (wallet_pending) that locks funds until verified buyer delivery confirmation.",
      verifiedHighlights: [
        "Role-based access control (Guest, Buyer, Seller, Admin) with JWT + Google OAuth2 authentication and brute-force rate limiting",
        "Depo-Cash Escrow Engine: Atomic SQL balance deduction (anti-double-spending), buyer delivery confirmation, and dispute protection",
        "Seller Dashboard (seller.html) & 4-Step Store Wizard (magaza-ac.html): Multi-image optimization, shipment tracking, messaging, and subscription management",
        "Admin Moderation & Finance Desk (admin.html): Live KPIs, TR IBAN withdrawal approval workflow, receipt-verified balance credit, and immutable Audit Logs",
        "Dual-mode database adapter (db.py supporting local SQLite and production PostgreSQL) verified by 41/41 automated security and acceptance tests"
      ]
    }
  },
  {
    id: "indirim-takipcisi",
    featured: true,
    categoryKey: "mobile",
    image: "assets/images/project-indirim.svg",
    url: "https://www.indirimtakipcisi.com",
    urlDisplay: "www.indirimtakipcisi.com (indirimtakipcisi.app)",
    caseStudyUrl: null,
    technologies: [
      "Flutter 3.35",
      "Dart 3.9",
      "Riverpod",
      "Firebase Auth & Firestore",
      "Cloud Functions (Node.js)",
      "Firebase Storage & FCM",
      "Hive (Local DB)",
      "Geolocator & Geocoding",
      "HTML5/CSS3/JS (PWA)"
    ],
    tr: {
      title: "İndirim Takipçisi",
      category: "Mobil Uygulama & Web Platformu",
      status: "Canlıda Yayında (Web PWA & Android v1.0.5+6)",
      description:
        "Kullanıcıların yerel mağazalardaki ve zincir marketlerdeki gerçek indirimleri konum, fotoğraf ve fiyat bilgileriyle paylaşabildiği, moderasyon onaylı ve anlık bildirim destekli kitle kaynaklı (crowdsourced) fırsat takip platformu.",
      problem:
        "Tüketicilerin fiziksel mağazalardaki anlık ve yerel indirimlerden zamanında haberdar olamaması; doğrulanmamış kampanya paylaşımlarının bilgi kirliliği yaratması.",
      solution:
        "GPS konum doğrulaması, fotoğraf yükleme, yönetici onay iş akışı (Cloud Functions tetikleyicileri) ve anlık bildirim (FCM) mimarisine sahip Flutter mobil uygulaması ve canlı PWA web platformu.",
      verifiedHighlights: [
        "Flutter 3.35 & Dart 3.9 ile geliştirilmiş çapraz platform mobil uygulama ve Riverpod 2.5 durum yönetimi",
        "Hive yerel önbellekleme ve Geolocator/Geocoding ile konum tabanlı indirim listeleme",
        "Firebase Cloud Firestore & Storage rol tabanlı güvenlik kuralları (RBAC) ve Node.js 24 Cloud Functions v2 bildirim otomasyonu",
        "Dart Analyzer 0 hata / 0 uyarı kalitesi, birim/widget testleri ve yayınlanmış www.indirimtakipcisi.com web arayüzü"
      ]
    },
    en: {
      title: "İndirim Takipçisi (Discount Tracker)",
      category: "Mobile Application & Web Platform",
      status: "Live in Production (Web PWA & Android v1.0.5+6)",
      description:
        "A crowdsourced, location-aware mobile and web platform enabling users to discover and share verified in-store retail discounts with GPS coordinates, photos, moderation workflows, and real-time push notifications.",
      problem:
        "Consumers miss out on localized, time-sensitive physical store discounts, while unverified deal posts create noise and reliability issues.",
      solution:
        "A Flutter mobile app and live PWA platform combining GPS location verification, photo uploads, admin approval Cloud Functions, and real-time FCM push alerts.",
      verifiedHighlights: [
        "Cross-platform mobile application built with Flutter 3.35 & Dart 3.9 using Riverpod 2.5 state management",
        "Local caching via Hive NoSQL and geolocation-based deal discovery via Geolocator & Geocoding",
        "Firebase Firestore & Storage RBAC security rules paired with Node.js 24 Cloud Functions v2 notification triggers",
        "Zero analyzer warnings/errors, passing unit/widget test suite, and live web deployment at www.indirimtakipcisi.com"
      ]
    }
  },
  {
    id: "sabah-brifingi-ai",
    featured: true,
    categoryKey: "ai-industrial",
    image: "assets/images/project-sabah-brifingi.svg",
    url: null,
    urlDisplay: null,
    caseStudyUrl: null,
    technologies: [
      "Python",
      "FastAPI",
      "PySide6 (Qt6 GUI)",
      "React 18 & TypeScript",
      "SQLAlchemy & SQLite",
      "Deterministik KPI Motoru",
      "PDF Raporlama"
    ],
    tr: {
      title: "Sabah Brifingi AI — Üretim Yönetici Asistanı",
      category: "Endüstriyel Veri Analitiği & Karar Destek",
      status: "Çalışan Masaüstü (PySide6) & Web Prototipi",
      description:
        "30–150 çalışanlı üretim KOBİ'leri için ERP, Excel ve CSV üretim verilerini analiz ederek günlük hedef gerçekleşmelerini, makine duruşlarını, fire oranlarını ve geciken siparişleri tek ekranda ve A4 PDF formatında sunan %100 yerel (Local-First) karar destek sistemi.",
      problem:
        "Fabrika yöneticilerinin günlük üretim, duruş ve fire verilerini görmek için farklı ERP ekranlarını veya gecikmeli, hataya açık Excel tablolarını beklemek zorunda kalması.",
      solution:
        "20 yıllık üretim sahası deneyimini yazılımla birleştiren; sayısal KPI'ları %100 deterministik Python formülleriyle (halüsinasyon riski olmadan) hesaplayan, bulut bağımlılığı bulunmayan yerel masaüstü ve web uygulaması.",
      verifiedHighlights: [
        "%100 Local-First mimari: Tüm üretim verileri yerel SQLite veritabanında tutulur, dışarıya veri sızmaz ve internetsiz çalışır",
        "Deterministik matematik motoru: Hedef gerçekleşme, vardiya performansı, kronik makine duruşları ve fire tolerans aşımlarını sıfır hata ile hesaplar",
        "Excel formül enjeksiyonu koruması (=, +, -, @ temizliği) ve örnek plastik enjeksiyon / CNC veri setleriyle doğrulama",
        "Çift arayüz: PySide6 (Qt6) yerel Windows masaüstü uygulaması + FastAPI & React 18 endüstriyel kontrol paneli + A4 PDF brifing çıktısı"
      ]
    },
    en: {
      title: "Sabah Brifingi AI — Manufacturing Executive Assistant",
      category: "Industrial Data Analytics & Decision Support",
      status: "Working Desktop (PySide6) & Web Prototype",
      description:
        "A 100% local-first decision support system for manufacturing SMEs (30–150 employees) that ingests ERP, Excel, and CSV shop-floor data to deliver daily production actuals, machine downtime root causes, scrap rates, and overdue orders on a single dashboard and A4 PDF briefing.",
      problem:
        "Plant managers and factory owners face delayed, fragmented Excel sheets and complex ERP screens to identify daily production bottlenecks, downtime causes, and scrap overruns.",
      solution:
        "Bridging 20 years of factory management experience with software engineering: a zero-cloud, deterministic Python analytics engine paired with a native PySide6 desktop GUI and React web dashboard.",
      verifiedHighlights: [
        "100% Local-First architecture: All operational data stays in a local SQLite database with zero cloud dependency and full offline capability",
        "Deterministic math engine: Calculates OEE/target attainment, shift performance, chronic downtime, and scrap thresholds without LLM hallucination",
        "Excel formula injection sanitization and pre-built validation datasets for plastic injection and CNC machining",
        "Dual interface: Native PySide6 (Qt6) desktop client + FastAPI & React 18 web dashboard + automated A4 PDF executive briefing"
      ]
    }
  },
  {
    id: "whatsapp-ai-agent",
    featured: true,
    categoryKey: "ai-industrial",
    image: "assets/images/project-whatsapp-ai.svg",
    url: null,
    urlDisplay: null,
    caseStudyUrl: null,
    technologies: [
      "Node.js & Express.js",
      "Prisma ORM",
      "PostgreSQL & SQLite",
      "Meta WhatsApp Cloud API v21.0",
      "RAG & Vektör Arama",
      "JWT & RBAC",
      "Docker"
    ],
    tr: {
      title: "WhatsApp AI Agent & Canlı Temsilci SaaS Platformu",
      category: "B2B SaaS & Yapay Zekâ Otomasyonu",
      status: "Fonksiyonel MVP / Production-Ready Mimari (41/41 Test)",
      description:
        "Çok kiracılı (multi-tenant) veri izolasyonuna sahip, resmi Meta WhatsApp Cloud API (v21.0) standartlarını uygulayan, Türkçe RAG bilgi merkezi destekli ve düşük güven skorunda canlı insan temsilciye kontrollü devir (handoff) yapan müşteri iletişim platformu.",
      problem:
        "Perakende ve hizmet KOBİ'lerinde WhatsApp üzerinden gelen tekrarlayan müşteri sorularının (kargo, stok, iade) mesai dışı saatlerde cevapsız kalması ve standart chatbotların bilgi uydurma (halüsinasyon) riski.",
      solution:
        "Resmi Graph API v21.0 webhook doğrulaması, Türkçe alt-kelime vektör benzerliği (RAG), deterministik güven eşiği kontrolü, 3 sütunlu canlı temsilci masası ve KVKK uyumlu otomatik opt-out (DUR/STOP) motoru.",
      verifiedHighlights: [
        "Çok kiracılı (Multi-Tenant) mimari ve 20+ ilişkisel veri modeli (Tenant, Conversation, KnowledgeSource, DocumentChunk, AuditLog vb.)",
        "HMAC-SHA256 timing-safe webhook imza doğrulaması, idempotent mesaj işleme ve 24 saatlik müşteri hizmetleri penceresi kontrolü",
        "Halüsinasyon korumalı RAG: Dokümanda karşılığı olmayan sorularda AI yanıt uydurmaz; konuşmayı WAITING_AGENT durumuna alarak insan temsilciye devreder",
        "KVKK uyumu: DUR / STOP / IPTAL mesajlarında otomatik OPTED_OUT işaretlemesi ve 41/41 başarılı otomatik test"
      ]
    },
    en: {
      title: "WhatsApp AI Agent & Live Inbox SaaS Platform",
      category: "B2B SaaS & AI Customer Automation",
      status: "Functional MVP / Production-Ready Architecture (41/41 Tests)",
      description:
        "A multi-tenant customer communication SaaS platform built on official Meta WhatsApp Cloud API (v21.0) standards, featuring Turkish sub-word RAG vector retrieval, anti-hallucination confidence thresholds, and seamless human agent handoff.",
      problem:
        "SMEs lose sales due to slow responses to repetitive WhatsApp inquiries (shipping, stock, returns), while generic AI chatbots risk hallucinating policies or violating privacy rules.",
      solution:
        "Official Graph API v21.0 webhook verification, deterministic RAG confidence gating, a 3-column live agent CRM inbox with mutex locking, and automated KVKK/GDPR opt-out (STOP/DUR) enforcement.",
      verifiedHighlights: [
        "Strict multi-tenant isolation across 20+ relational models (Tenant, Conversation, KnowledgeSource, DocumentChunk, AuditLog)",
        "Timing-safe HMAC-SHA256 webhook verification, idempotent event deduplication, and 24-hour service window enforcement",
        "Hallucination-proof RAG: Automatically pauses AI and escalates to WAITING_AGENT when vector similarity falls below threshold",
        "Automated KVKK opt-out handling and 41/41 passing automated integration tests"
      ]
    }
  },
  {
    id: "webstudio-ai",
    featured: false,
    categoryKey: "software",
    image: "assets/images/project-webstudio.svg",
    url: null,
    urlDisplay: null,
    caseStudyUrl: null,
    technologies: [
      "Python 3.11",
      "PySide6 (Qt6)",
      "SQLite",
      "HTML5 / CSS3 / JS Üretici",
      "WCAG 2.2 AA & SEO Denetçisi",
      "Pytest"
    ],
    tr: {
      title: "WebStudio AI — Web Tasarım & Kod Üretim Stüdyosu",
      category: "Masaüstü Yazılım & Geliştirici Araçları",
      status: "Çalışan Masaüstü Uygulaması (v1.0)",
      description:
        "Seçilen sektör profili ve tasarım tokenlarına göre semantik HTML5, modern CSS ve Vanilla JS proje dosyaları üreten, canlı önizleme sunan ve otomatik SEO / WCAG 2.2 AA erişilebilirlik denetimi yapan masaüstü yazılım stüdyosu.",
      problem:
        "KOBİ ve girişimler için sektöre uygun, hızlı, temiz kodlu ve SEO/erişilebilirlik standartlarını karşılayan web projelerini tekrarlanabilir bir mühendislik disipliniyle üretme ihtiyacı.",
      solution:
        "15 ana sektör kütüphanesi, akıllı tasarım token sistemi, hibrit AI motoru (Bulut + Yerel LLM) ve otomatik kalite/güvenlik denetçisi içeren PySide6 masaüstü uygulaması.",
      verifiedHighlights: [
        "Gıda, üretim/sanayi, e-ticaret, teknoloji dahil 15 sektör profili ve tasarım token mimarisi",
        "Otomatik Kalite & SEO Denetimi: Semantik HTML, meta etiketler, başlık hiyerarşisi ve WCAG 2.2 AA kontrast kontrolü",
        "Masaüstü, tablet ve mobil görünümde canlı yerel önizleme ve path-traversal korumalı atomik ZIP dışa aktarma"
      ]
    },
    en: {
      title: "WebStudio AI — Desktop Web Design & Code Generation Studio",
      category: "Desktop Software & Developer Tooling",
      status: "Working Desktop Application (v1.0)",
      description:
        "A Python 3.11 and PySide6 desktop studio that generates semantic HTML5, modern CSS, and Vanilla JS web projects using a 15-sector library, design tokens, hybrid AI providers, and an automated SEO & WCAG 2.2 AA accessibility auditor.",
      problem:
        "Building standards-compliant, fast, and sector-tailored web projects for SMEs without bloated dependencies or inconsistent manual quality checks.",
      solution:
        "An integrated desktop engineering environment combining design token systems, hybrid cloud/local LLM content generation, multi-device preview, and automated WCAG/SEO auditing.",
      verifiedHighlights: [
        "15 industry profiles (including food, manufacturing, e-commerce, SaaS) with structured design tokens",
        "Automated Quality & SEO Auditor verifying semantic HTML, heading hierarchy, alt attributes, and WCAG 2.2 AA contrast",
        "Live responsive preview (Desktop/Tablet/Mobile) and path-traversal protected atomic project export"
      ]
    }
  },
  {
    id: "recipe-importer",
    featured: false,
    categoryKey: "food-data",
    image: "assets/images/project-recipe-importer.svg",
    url: null,
    urlDisplay: null,
    caseStudyUrl: null,
    technologies: [
      "Python",
      "SQLite",
      "PDF Sayfa & Blok Analizi",
      "Özel Parser Mimarisi",
      "Veri Modelleme (ETL)"
    ],
    tr: {
      title: "RecipeImporter — PDF Reçete & Kalori Veri İşleme Sistemi",
      category: "Gıda Veri Mühendisliği & Otomasyon",
      status: "Çalışan Modüler Python Uygulaması",
      description:
        "PDF formatındaki yemek ve üretim reçetelerinden sayfa düzeni analizi yaparak tarif adlarını, malzeme gramajlarını, birimleri, kalori değerlerini ve hazırlanış adımlarını ayrıştırıp ilişkisel SQLite veritabanına aktaran veri işleme (ETL) sistemi.",
      problem:
        "Gıda ve toplu yemek sektöründe PDF veya doküman formatında dağınık duran reçete, gramaj ve kalori tablolarının maliyet/besin değeri analizleri için yapılandırılmış veritabanına aktarılamaması.",
      solution:
        "Sayfa düzeni (PageLayout), blok çıkarıcı (BlockExtractor) ve özel ayrıştırıcılar (IngredientParser, CalorieParser, InstructionParser) ile PDF verisini ilişkisel SQLite şemasına dönüştüren modüler Python yazılımı.",
      verifiedHighlights: [
        "Modüler katmanlı mimari: extractor (block_extractor, recipe_locator), parser (ingredient, calorie, instruction, table) ve database katmanları",
        "İlişkisel SQLite veritabanı şeması: raw_recipes, recipes, ingredients (FOREIGN KEY korumalı) ve import_log tabloları",
        "Gıda mühendisliği reçete standartlaştırma ve kalori hesaplama süreçlerinin dijital otomasyonu"
      ]
    },
    en: {
      title: "RecipeImporter — PDF Recipe & Calorie ETL Pipeline",
      category: "Food Data Engineering & Automation",
      status: "Working Modular Python Application",
      description:
        "A modular Python ETL pipeline that analyzes PDF document layouts to extract food recipes, ingredient weights, units, calorie values, and preparation instructions into a normalized SQLite relational database.",
      problem:
        "In food manufacturing and catering, recipe formulations, ingredient weights, and nutritional data are often trapped in unstructured PDF documents, preventing automated cost and calorie analysis.",
      solution:
        "A layered Python parser architecture (RecipeLocator, BlockExtractor, IngredientParser, CalorieParser) that transforms unstructured PDF pages into foreign-key enforced SQLite tables.",
      verifiedHighlights: [
        "Clean separation of concerns across extractor, parser, data models, and database services",
        "Relational SQLite schema with foreign key integrity (raw_recipes, recipes, ingredients, import_log)",
        "Direct application of software automation to food engineering formulation and nutritional data management"
      ]
    }
  },
  {
    id: "ai-data-science-portfolio",
    featured: false,
    categoryKey: "ai-industrial",
    image: "assets/images/project-ai-ml.svg",
    url: null,
    urlDisplay: null,
    caseStudyUrl: null,
    technologies: [
      "Python",
      "PyTorch / Derin Öğrenme",
      "Pandas & NumPy",
      "Scikit-Learn",
      "CNN (ResNet-18) & RNN",
      "LLM Metin Sınıflandırma",
      "Jupyter Notebook"
    ],
    tr: {
      title: "Veri Analizi, Makine Öğrenmesi & Derin Öğrenme Çalışmaları",
      category: "Veri Bilimi & Yapay Zekâ Modelleri",
      status: "Tamamlanan Modeller & Uygulama Laboratuvarları",
      description:
        "Keşifsel veri analizi (EDA), öneri sistemleri (Content-Based & Collaborative Filtering), görüntü sınıflandırma (ResNet-18 CNN), zaman serisi/dizi modelleme (RNN) ve LLM tabanlı interaktif metin sınıflandırma projelerinden oluşan teknik portföy.",
      problem:
        "Yapılandırılmış ve yapılandırılmamış veri setlerinden (tablosal veri, görüntü ve doğal dil metinleri) anlamlı örüntüler çıkarma, sınıflandırma ve kişiselleştirilmiş öneri üretme ihtiyacı.",
      solution:
        "Python veri bilimi ekosistemi ve derin öğrenme mimarileriyle geliştirilmiş, eğitim/doğrulama boru hatları ve komut satırı tahminleme araçları (cli_predict.py) içeren uygulamalı modeller.",
      verifiedHighlights: [
        "Veri Analizi & Öneri Sistemleri: İçerik Tabanlı (Content-Based) ve İşbirlikçi Filtreleme (Collaborative Filtering) modelleri",
        "Derin Öğrenme: ResNet-18 mimarisi ile FashionMNIST görüntü sınıflandırma (CNN) ve Tekrarlayan Sinir Ağları (RNN) çalışmaları",
        "NLP & LLM Sınıflandırıcı (LLM_CLASSIFIER): Özel Tokenization, metin üretimi ve haber/doküman metinlerini (Business, Sci/Tech, World, Sports) sınıflandıran modüler eğitim/tahminleme çatısı"
      ]
    },
    en: {
      title: "Data Analysis, Machine Learning & Deep Learning Portfolio",
      category: "Data Science & AI Engineering",
      status: "Completed Models & Applied Labs",
      description:
        "A technical portfolio of applied data science and deep learning implementations, including Recommender Systems (Content-Based & Collaborative Filtering), CNN image classification (ResNet-18), RNN sequence models, and an interactive LLM text classifier.",
      problem:
        "Extracting actionable patterns, classifications, and personalized recommendations across tabular datasets, computer vision benchmarks, and natural language text.",
      solution:
        "Modular Python pipelines implementing EDA, recommendation algorithms, ResNet-18 CNN training, custom tokenization, and an interactive CLI text classification engine.",
      verifiedHighlights: [
        "Data Analysis & Recommenders: Exploratory Data Analysis, Content-Based Filtering, and Collaborative Filtering notebooks",
        "Deep Learning: ResNet-18 Convolutional Neural Network (FashionMNIST) and Recurrent Neural Network (RNN) sequence modeling",
        "NLP & LLM Classifier: Custom tokenization, text generation pipelines, and modular CLI predictor categorizing news/documents into Business, Sci/Tech, World, and Sports"
      ]
    }
  }
];

