// Slow Garden — Day 0: one seed, water it, it sprouts.
// State lives in localStorage so the garden remembers you between visits.
(function () {
  var STAGES = [
    { min: 0,  emoji: "🫘", name: "种子",   message: "土里埋着一颗种子，它在等第一场水。" },
    { min: 1,  emoji: "🌱", name: "破土",   message: "它探出头了！第一片嫩芽向你打招呼。" },
    { min: 4,  emoji: "🌱", name: "发芽",   message: "芽儿站稳了，开始认真晒太阳。" },
    { min: 8,  emoji: "🌿", name: "幼苗",   message: "叶子舒展开来，它已经是一株小苗了。" },
    { min: 14, emoji: "🪴", name: "茁壮",   message: "它长得很结实。明天，这座花园的代码还会再长大一点。" }
  ];

  var plant = document.getElementById("plant");
  var message = document.getElementById("stage-message");
  var waterCountEl = document.getElementById("water-count");
  var stageNameEl = document.getElementById("stage-name");
  var visitDaysEl = document.getElementById("visit-days");

  function load(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  var waters = load("sg_waters", 0);
  var days = load("sg_days", []);
  var today = new Date().toDateString();
  if (days.indexOf(today) === -1) { days.push(today); save("sg_days", days); }

  function stageFor(count) {
    var s = STAGES[0];
    STAGES.forEach(function (st) { if (count >= st.min) s = st; });
    return { def: s, index: STAGES.indexOf(s) };
  }

  function render() {
    var st = stageFor(waters);
    plant.textContent = st.def.emoji;
    plant.className = "plant stage-" + st.index;
    message.textContent = st.def.message;
    waterCountEl.textContent = waters;
    stageNameEl.textContent = st.def.name;
    visitDaysEl.textContent = days.length;
  }

  var night = load("sg_night", false);
  var daynightBtn = document.getElementById("daynight-btn");
  function renderNight() {
    document.body.classList.toggle("night", night);
    daynightBtn.textContent = night ? "☀️ 白天" : "🌙 夜晚";
  }
  daynightBtn.addEventListener("click", function () {
    night = !night;
    save("sg_night", night);
    renderNight();
  });
  renderNight();

  document.getElementById("water-btn").addEventListener("click", function () {
    waters += 1;
    save("sg_waters", waters);
    render();
    plant.classList.add("watering");
    setTimeout(function () { plant.classList.remove("watering"); }, 550);
  });

  render();
})();
