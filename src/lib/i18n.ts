export type Lang = "uz" | "ru" | "en";

export const LANGS: Lang[] = ["uz", "ru", "en"];

type Content = {
  coverKicker: string;
  coverTitle: string;
  coverSub: string;
  coverCta: string;
  heroTitle: (recipient: string) => string;
  paragraphs: string[];
  closing: string;
  signOff: (sender: string) => string;
  galleryTitle: string;
  gallerySub: string;
  editTitle: string;
  editDesc: string;
  recipientLabel: string;
  recipientPh: string;
  senderLabel: string;
  senderPh: string;
  save: string;
  saving: string;
  linkTitle: string;
  copy: string;
  copied: string;
  open: string;
  defaultRecipient: string;
  defaultSender: string;
  musicOn: string;
  musicOff: string;
};

export const CONTENT: Record<Lang, Content> = {
  uz: {
    coverKicker: "O'zbekiston Respublikasi",
    coverTitle: "Mustaqilligining 35 yilligi",
    coverSub: "Muborak bo'lsin!",
    coverCta: "Tabriknomani ochish",
    heroTitle: (r) => `Hurmatli ${r}!`,
    paragraphs: [
      "Sizni va yaqinlaringizni O'zbekiston Respublikasi Mustaqilligining 35 yilligi bilan muborakbod etamiz!",
      "Mustaqillik — bu biz uchun o'z uyimizda xotirjam yashash, yaqinlarimiz bilan birga bo'lish va kelajakka ishonch bilan qarash imkonidir.",
      "Shu bayram kunida sizga va oilangizga tinchlik, sog'lik, farovonlik va ko'plab quvonchli kunlar tilaymiz. Har bir xonadonda bayram kayfiyati, har bir qalbda Vatanga mehr bo'lsin.",
    ],
    closing: "Mustaqillik bayrami muborak bo'lsin!",
    signOff: (s) => `Siz uchun eng samimiy tilaklar bilan, ${s}`,
    galleryTitle: "Bayram lavhalari",
    gallerySub: "Mustaqillik bayrami tantanalaridan suratlar",
    editTitle: "Tabriknomani shaxsiylashtirish",
    editDesc: "Ism-familiyalarni kiriting va o'zingizning havolangizni oling.",
    recipientLabel: "Kimga tabriklamoqchisiz?",
    recipientPh: "Masalan: Aziz aka",
    senderLabel: "Sizning ismingiz",
    senderPh: "Masalan: Dilnoza",
    save: "Saqlash",
    saving: "Saqlanmoqda...",
    linkTitle: "Sizning tabriknomangiz tayyor!",
    copy: "Havolani nusxalash",
    copied: "Nusxalandi!",
    open: "Ochish",
    defaultRecipient: "Vatandoshlar",
    defaultSender: "WebInvite jamoasi",
    musicOn: "Musiqa yoqilgan",
    musicOff: "Musiqa o'chirilgan",
  },
  ru: {
    coverKicker: "Республика Узбекистан",
    coverTitle: "35 лет Независимости",
    coverSub: "С праздником!",
    coverCta: "Открыть поздравление",
    heroTitle: (r) => `Уважаемые ${r}!`,
    paragraphs: [
      "Поздравляем Вас и Ваших близких с 35-летием Независимости Республики Узбекистан!",
      "Независимость — это возможность жить спокойно в своём доме, быть рядом с близкими и с уверенностью смотреть в будущее.",
      "В этот праздничный день желаем Вам и Вашей семье мира, здоровья, благополучия и много радостных дней. Пусть в каждом доме царит праздничное настроение, а в каждом сердце — любовь к Родине.",
    ],
    closing: "С праздником Независимости!",
    signOff: (s) => `С самыми искренними пожеланиями, ${s}`,
    galleryTitle: "Моменты праздника",
    gallerySub: "Кадры торжеств в честь Дня Независимости",
    editTitle: "Персонализировать поздравление",
    editDesc: "Введите имена и получите свою персональную ссылку.",
    recipientLabel: "Кого поздравляете?",
    recipientPh: "Например: Азиз ака",
    senderLabel: "Ваше имя",
    senderPh: "Например: Дильноза",
    save: "Сохранить",
    saving: "Сохранение...",
    linkTitle: "Ваше поздравление готово!",
    copy: "Скопировать ссылку",
    copied: "Скопировано!",
    open: "Открыть",
    defaultRecipient: "соотечественники",
    defaultSender: "команда WebInvite",
    musicOn: "Музыка включена",
    musicOff: "Музыка выключена",
  },
  en: {
    coverKicker: "Republic of Uzbekistan",
    coverTitle: "35 Years of Independence",
    coverSub: "Happy Independence Day!",
    coverCta: "Open the greeting",
    heroTitle: (r) => `Dear ${r}!`,
    paragraphs: [
      "We warmly congratulate you and your loved ones on the 35th anniversary of the Independence of the Republic of Uzbekistan!",
      "Independence means living peacefully in our own home, being together with those we love, and looking to the future with confidence.",
      "On this festive day we wish you and your family peace, health, prosperity and many joyful days. May every home be filled with celebration and every heart with love for the Motherland.",
    ],
    closing: "Happy Independence Day!",
    signOff: (s) => `With the warmest wishes, ${s}`,
    galleryTitle: "Moments of the celebration",
    gallerySub: "Scenes from the Independence Day festivities",
    editTitle: "Personalize this greeting",
    editDesc: "Enter the names and get your own shareable link.",
    recipientLabel: "Who are you congratulating?",
    recipientPh: "e.g. Aziz",
    senderLabel: "Your name",
    senderPh: "e.g. Dilnoza",
    save: "Save",
    saving: "Saving...",
    linkTitle: "Your greeting is ready!",
    copy: "Copy link",
    copied: "Copied!",
    open: "Open",
    defaultRecipient: "compatriots",
    defaultSender: "the WebInvite team",
    musicOn: "Music on",
    musicOff: "Music off",
  },
};
