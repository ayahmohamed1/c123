// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const customerData: GiftData = {
  name: "abdelrahman",                                     // اسم مستلم الهدية
  senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
  accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                        // رابط الموسيقى هنا
  message: `حبيت أكون أول من يعايدك وأول شخص يقول لك كل عام وأنت بخير يا أغلى شخص عندي ❤️ والله يا ليتني معك اليوم يا ليت المسافة ما كانت بيننا عشان أكون جنبك وأشوف فرحتك وأعيش معك هاليوم الحلو بس حتى لو بيننا مسافات أنت قريب من قلبي أكثر من أي أحد ولك مكانة ما يشبهها أحد عندي أتمنى لك سنة مليانة فرح وراحة وتحقيق لكل اللي تتمناه وأتمنى أكون معك بكل أعياد ميلادك الجاية مو بس بالكلام والرسائل أتمنى أكون جنبك وأشاركك كل لحظة حلوة أحبك أكثر من اللي تعرفه وأنت من أغلى الناس لقلبي ووجودك بحياتي من أجمل الأشياء اللي صارت لي. كل عام وأنت حبيبي وقطعة من قلبي وكل عام وأنا أحبك أكثر من العام اللي قبله وربنا يحقق لك كل اللي في مرادك يا رب ويجعل أيامك كلها فرح وسعادة 🥺❤️`,
};

const giftData: Record<string, GiftData> = {
  abdelrahman: customerData,
  aya: customerData,
};

export default giftData;
