// script.js

const services = [
  { zh: "针灸", en: "Acupuncture", descZh: "用于缓解疼痛、调节身体功能。", descEn: "Used to relieve pain and regulate body functions." },
  { zh: "推拿", en: "Tuina Massage", descZh: "传统中医按摩，舒缓肌肉及关节。", descEn: "Traditional massage for muscles and joints." },
  { zh: "拔罐", en: "Cupping Therapy", descZh: "改善血液循环，促进代谢。", descEn: "Improves circulation and metabolism." },
  { zh: "刮痧", en: "Gua Sha", descZh: "缓解肌肉紧张与风湿。", descEn: "Relieves muscle tension and stiffness." },
  { zh: "中药调理", en: "Herbal Medicine", descZh: "使用草药治疗慢性病与调理体质。", descEn: "Herbal treatments for chronic conditions." },
  { zh: "针刀", en: "Acupotomy", descZh: "结合针与微创手术，治疗筋骨问题。", descEn: "Minimally invasive therapy for musculoskeletal issues." },
  { zh: "面部针灸", en: "Facial Acupuncture", descZh: "美容与面部紧致疗法。", descEn: "Cosmetic facial rejuvenation treatment." },
  { zh: "耳穴疗法", en: "Auricular Therapy", descZh: "通过耳部穴位调节身体功能。", descEn: "Ear acupuncture to adjust body functions." },
  { zh: "艾灸", en: "Moxibustion", descZh: "温热疗法，改善气血循环。", descEn: "Heat therapy to improve circulation." },
  { zh: "针灸拔罐组合", en: "Acupuncture & Cupping Combo", descZh: "结合两种疗法增强疗效。", descEn: "Combination therapy for enhanced effect." },
  { zh: "儿童推拿", en: "Pediatric Massage", descZh: "针对儿童体质的温和按摩。", descEn: "Gentle massage for children." },
  { zh: "中医体质辨识", en: "TCM Body Constitution Analysis", descZh: "评估体质，提供个性化调理方案。", descEn: "Assess constitution and offer personalized care." },
  { zh: "康复理疗", en: "Rehabilitation Therapy", descZh: "辅助恢复运动功能与疼痛缓解。", descEn: "Assists recovery and pain relief." },
  { zh: "针灸减压疗程", en: "Acupuncture Stress Relief", descZh: "帮助缓解压力与改善睡眠。", descEn: "Reduces stress and improves sleep quality." }
];

const servicesGrid = document.getElementById("servicesGrid");
const serviceSelect = document.getElementById("serviceSelect");
let currentLang = "zh";

// Populate services
function renderServices() {
  servicesGrid.innerHTML = "";
  serviceSelect.innerHTML = "";
  services.forEach(s => {
    // Card
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `<h4>${currentLang === "zh" ? s.zh : s.en}</h4>
                      <p>${currentLang === "zh" ? s.descZh : s.descEn}</p>`;
    servicesGrid.appendChild(card);

    // Booking select
    const option = document.createElement("option");
    option.value = currentLang === "zh" ? s.zh : s.en;
    option.textContent = currentLang === "zh" ? s.zh : s.en;
    serviceSelect.appendChild(option);
  });
}

// Language toggle
document.getElementById("langToggle").addEventListener("change", e => {
  currentLang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key][currentLang];
  });
  renderServices();
});

// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Translations
const translations = {
  clinicName: { zh: "正安中醫", en: "Zheng An TCM" },
  tagline: { zh: "温和专业 · 传统中医关怀", en: "Gentle & Professional Traditional Care" },
  nav: { home: { zh:"首页", en:"Home" }, services:{ zh:"服务", en:"Services" }, booking:{ zh:"预约", en:"Booking" }, contact:{ zh:"联系", en:"Contact" } },
  hero: { title:{ zh:"欢迎来到正安中醫", en:"Welcome to Zheng An TCM" }, subtitle:{ zh:"结合传统与个别化护理，关注身体平衡与长期健康。", en:"Combining traditional care with personalized wellness for your balance and long-term health." }, book:{ zh:"立即预约", en:"Book Now" } },
  about: { title:{ zh:"关于我们", en:"About Us" }, p:{ zh:"正安中醫由经验丰富的中医师执业，提供针灸、推拿、草药等全面中医服务，针对慢性疾病、疼痛管理与日常调理。我们强调个别诊断与温和疗法。", en:"Zheng An TCM is run by experienced practitioners offering acupuncture, massage, herbal treatments and more, focusing on chronic issues, pain management, and personalized care." } },
  services: { title:{ zh:"我们的服务", en:"Our Services" }, intro:{ zh:"点击卡片查看详情。若需更多信息，请在预约栏填写您的问题。", en:"Click the cards to see details. For further inquiries, fill them in the booking form." } },
  booking: { title:{ zh:"预约看诊", en:"Book Appointment" }, instructions:{ zh:"请填写下列资料，我们会尽快与您确认预约。当前表单会发送到占位邮箱（可在代码中替换）。", en:"Fill out the form and we’ll confirm your appointment. The placeholder email can be replaced in code." } },
  form: { name:{ zh:"姓名", en:"Name" }, email:{ zh:"电邮 / Email", en:"Email" }, phone:{ zh:"电话 / Phone", en:"Phone" }, preferred:{ zh:"偏好日期 / Preferred date", en:"Preferred date" }, service:{ zh:"预约服务 / Service", en:"Service" }, notes:{ zh:"备注 / Notes", en:"Notes" }, submit:{ zh:"提交预约", en:"Submit" }, reset:{ zh:"清除", en:"Reset" } },
  thanks: { title:{ zh:"谢谢 — 我们已收到您的预约！", en:"Thank you — we received your request!" }, p:{ zh:"诊所将尽快与您联系确认时间。", en:"The clinic will contact you shortly to confirm." } },
  contact: { title:{ zh:"联系信息", en:"Contact Info" }, addressLabel:{ zh:"地址：", en:"Address:" }, address:{ zh:"示例街道 123 号，市区", en:"123 Example Street, City" }, hoursLabel:{ zh:"营业时间：", en:"Hours:" }, hours:{ zh:"周一–周五 09:00–18:00，周六 09:00–13:00", en:"Mon–Fri 09:00–18:00, Sat 09:00–13:00" }, phoneLabel:{ zh:"电话：", en:"Phone:" }, emailLabel:{ zh:"电邮：", en:"Email:" } },
  footer: { copy:{ zh:"© 正安中醫。保留所有权利。", en:"© Zheng An TCM. All rights reserved." } }
};

// Initial render
renderServices();
document.getElementById("langToggle").dispatchEvent(new Event("change"));
