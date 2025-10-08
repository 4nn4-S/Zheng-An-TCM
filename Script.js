// script.js - bilingual content and interactive behavior

// --- Text content for both languages ---
// Keep keys consistent and descriptive.
const I18N = {
  zh: {
    clinicName: "正安中醫",
    tagline: "温和专业 · 传统中医关怀",
    nav: { home: "首页", services: "服务", booking: "预约", contact: "联系" },
    hero: { title: "欢迎来到正安中醫", subtitle: "结合传统与个别化护理，关注身体平衡与长期健康。", book: "立即预约" },
    about: { title: "关于我们", p: "正安中醫由经验丰富的中医师执业，提供针灸、推拿、草药等全面中医服务，针对慢性疾病、疼痛管理与日常调理。我们强调个别诊断与温和疗法。" },
    services: { title: "我们的服务", intro: "点击卡片查看详情。若需更多信息，请在预约栏填写您的问题。" },
    booking: { title: "预约看诊", instructions: "请填写下列资料，我们会尽快与您确认预约。当前表单会发送到占位邮箱（可在代码中替换）。" },
    form: { name: "姓名", email: "电邮 / Email", phone: "电话 / Phone", preferred: "偏好日期 / Preferred date", service: "预约服务 / Service", notes: "备注 / Notes", submit: "提交预约", reset: "清除" },
    thanks: { title: "谢谢 — 我们已收到您的预约！", p: "诊所将尽快与您联系确认时间。" },
    contact: { title: "联系信息", addressLabel: "地址：", address: "示例街道 123 号，市区", hoursLabel: "营业时间：", hours: "周一–周五 09:00–18:00，周六 09:00–13:00", phoneLabel: "电话：", emailLabel: "电邮：" },
    footer: { copy: "© 正安中醫。保留所有权利。" }
  },
  en: {
    clinicName: "Zheng An TCM",
    tagline: "Gentle care · Traditional Chinese Medicine",
    nav: { home: "Home", services: "Services", booking: "Booking", contact: "Contact" },
    hero: { title: "Welcome to Zheng An TCM", subtitle: "Combining tradition with personalised care to restore balance and wellbeing.", book: "Book Now" },
    about: { title: "About", p: "Zheng An TCM is led by experienced practitioners offering acupuncture, Tui Na massage, herbal consultation and more. We focus on personalised diagnosis and gentle therapies." },
    services: { title: "Our Services", intro: "Click cards to view details. For more info, please mention it in the booking form." },
    booking: { title: "Book an Appointment", instructions: "Fill in the details below and we will contact you to confirm. The form currently sends to a placeholder email (changeable in code)." },
    form: { name: "Name", email: "Email", phone: "Phone", preferred: "Preferred date", service: "Service", notes: "Notes", submit: "Submit Booking", reset: "Reset" },
    thanks: { title: "Thanks — We received your booking!", p: "The clinic will contact you shortly to confirm the time." },
    contact: { title: "Contact", addressLabel: "Address:", address: "123 Example St., City", hoursLabel: "Opening hours:", hours: "Mon–Fri 09:00–18:00, Sat 09:00–13:00", phoneLabel: "Phone:", emailLabel: "Email:" },
    footer: { copy: "© Zheng An TCM. All rights reserved." }
  }
};

// --- Services list (14) with zh + en text ---
const SERVICES = [
  { id: "acupuncture", zhTitle: "针灸治疗", enTitle: "Acupuncture Therapy", zhDesc: "使用细针刺激特定穴位以调理气血、缓解疼痛与紧张，常用于头痛、颈肩痛与慢性病调理。", enDesc: "Fine needles stimulate specific points to balance qi, relieve pain and tension. Often used for headaches, neck/shoulder pain and chronic conditions." },
  { id: "tuina", zhTitle: "推拿（中医按摩）", enTitle: "Tui Na (Chinese Massage)", zhDesc: "通过按、揉、推拿手法改善血液循环与经络通畅，适合软组织疼痛与肌肉僵硬。", enDesc: "Manual techniques improve circulation and meridian flow—good for soft-tissue pain and stiffness." },
  { id: "cupping", zhTitle: "拔罐", enTitle: "Cupping", zhDesc: "透过负压帮助疏通经络、减轻肌肉痉挛，有助恢复运动功能与缓解疼痛。", enDesc: "Negative pressure helps open meridians, ease muscle spasms and relieve pain." },
  { id: "moxibustion", zhTitle: "艾灸", enTitle: "Moxibustion", zhDesc: "使用艾绒温灸穴位以温经散寒、温补阳气，适用于寒性体质与慢性疼痛。", enDesc: "Moxa heat applied to points to warm meridians and dispel cold—suitable for cold constitutions." },
  { id: "herbal", zhTitle: "中药配方", enTitle: "Herbal Prescriptions", zhDesc: "根据辩证为您开具个体化汤剂或草药配方，助于长期调理体质与症状控制。", enDesc: "Individualised decoctions or herbal formulas based on diagnosis to support long-term adjustment." },
  { id: "consult", zhTitle: "中医诊断与咨询", enTitle: "TCM Consultation", zhDesc: "通过望闻问切进行整体评估与治疗建议，建立长期调理方案。", enDesc: "Holistic assessment through traditional diagnosis to make treatment recommendations." },
  { id: "gyn", zhTitle: "妇科调理", enTitle: "Gynaecological Care", zhDesc: "为月经不调、更年期与生育相关问题提供中医调理方案。", enDesc: "TCM care for menstrual issues, menopause and fertility-related concerns." },
  { id: "pedi", zhTitle: "小儿推拿与调理", enTitle: "Paediatric Tui Na & Care", zhDesc: "针对小儿体质与常见问题提供温和推拿与调理建议。", enDesc: "Gentle Tui Na and care tailored to children’s constitutions and common issues." },
  { id: "pain", zhTitle: "慢性痛症管理", enTitle: "Chronic Pain Management", zhDesc: "综合针灸、推拿与草药为慢性疼痛（如腰背痛、关节痛）提供长期管理方案。", enDesc: "Combining acupuncture, massage and herbs to manage chronic pain like low back or joint pain." },
  { id: "skin", zhTitle: "皮肤病调理", enTitle: "Dermatology Support", zhDesc: "中医内外兼治，协助湿疹、荨麻疹等皮肤问题的调理与复发控制。", enDesc: "Internal and external TCM approaches to support eczema, urticaria and skin condition management." },
  { id: "detox", zhTitle: "体质调理与排毒", enTitle: "Constitutional Care & Detox", zhDesc: "通过饮食、草药与调理方案改善体质、促进代谢与排毒。", enDesc: "Dietary, herbal and regimen-based plans to improve constitution and metabolic health." },
  { id: "rehab", zhTitle: "康复与运动建议", enTitle: "Rehab & Exercise Advice", zhDesc: "结合中医理疗与功能锻炼帮助术后或运动损伤康复。", enDesc: "Combines TCM physiotherapy and functional exercises for rehab after surgery or injuries." },
  { id: "weight", zhTitle: "体重与代谢管理", enTitle: "Weight & Metabolic Support", zhDesc: "利用草药与生活方式建议协助控制体重与代谢健康。", enDesc: "Herbal and lifestyle guidance to support weight and metabolic health." },
  { id: "health", zhTitle: "健康检查与长期跟进", enTitle: "Wellness Check & Follow-up", zhDesc: "定期检查与随访，评估疗效并调整治疗方案以达长期健康目标。", enDesc: "Regular checks and follow-ups to assess effectiveness and adapt treatment plans." }
];

// Populate services area and form service select
function buildServices() {
  const grid = document.getElementById("servicesGrid");
  const select = document.getElementById("serviceSelect");

  SERVICES.forEach((s, idx) => {
    // create card
    const card = document.createElement("article");
    card.className = "card";
    card.id = `svc-${s.id}`;

    const h = document.createElement("h4");
    h.textContent = s.zhTitle; // default zh
    h.dataset.en = s.enTitle;
    h.dataset.zh = s.zhTitle;
    card.appendChild(h);

    const short = document.createElement("p");
    short.className = "short";
    short.textContent = s.zhDesc;
    short.dataset.en = s.enDesc;
    short.dataset.zh = s.zhDesc;
    card.appendChild(short);

    const detail = document.createElement("div");
    detail.className = "desc";
    detail.textContent = ""; // extra details if needed
    card.appendChild(detail);

    // allow click to toggle expanded
    card.addEventListener("click", (e) => {
      // avoid toggling when clicking links or form elements in future
      card.classList.toggle("expanded");
    });

    grid.appendChild(card);

    // add option to select
    const option = document.createElement("option");
    option.value = s.id;
    option.textContent = s.zhTitle;
    option.dataset.en = s.enTitle;
    option.dataset.zh = s.zhTitle;
    select.appendChild(option);
  });
}

// --- Internationalization (simple) ---
function applyLanguage(lang = "zh") {
  // set page lang attr
  document.documentElement.lang = (lang === "zh") ? "zh-Hans" : "en";

  // fill all elements with data-i18n attributes from I18N object
  const keys = document.querySelectorAll("[data-i18n]");
  keys.forEach(el => {
    const path = el.getAttribute("data-i18n");
    // path might be nested like "nav.home" - resolve
    const parts = path.split(".");
    let value = I18N[lang];
    for (let p of parts) {
      value = value?.[p];
      if (value === undefined) break;
    }
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  // update services titles and descriptions
  SERVICES.forEach(s => {
    const card = document.getElementById(`svc-${s.id}`);
    if (!card) return;
    const h = card.querySelector("h4");
    const p = card.querySelector(".short");
    if (lang === "zh") {
      h.textContent = s.zhTitle;
      p.textContent = s.zhDesc;
    } else {
      h.textContent = s.enTitle;
      p.textContent = s.enDesc;
    }
  });

  // update service select options
  const select = document.getElementById("serviceSelect");
  Array.from(select.options).forEach(opt => {
    const s = SERVICES.find(ss => ss.id === opt.value);
    if (s) opt.textContent = (lang === "zh") ? s.zhTitle : s.enTitle;
  });
}

// --- Form handling: show thank you message when redirected to #thankyou ---
function handleFormRedirect() {
  if (window.location.hash === "#thankyou") {
    const t = document.getElementById("thankyou");
    if (t) {
      t.classList.add("show");
      t.setAttribute("aria-hidden", "false");
      // scroll to thank you
      setTimeout(() => {
        t.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // populate services
  buildServices();

  // set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // language toggle
  const langSelect = document.getElementById("langToggle");
  // default is zh
  applyLanguage("zh");
  langSelect.addEventListener("change", (e) => {
    applyLanguage(e.target.value);
  });

  // basic form submit UX: optional client-side validation or spinner could be added
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", () => {
    // small UX: show a quick message - actual redirect handled by Formsubmit
    const btn = bookingForm.querySelector("button[type='submit']");
    if (btn) {
      btn.disabled = true;
      btn.textContent = (langSelect.value === "zh") ? "发送中…" : "Sending...";
    }
  });

  handleFormRedirect();
});
