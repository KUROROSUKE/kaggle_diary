kagd_data = {
  meta: {
    created_date: "",
    metrics     : "RMSE",
  },
  cells: []
}

let cell_nums = 0

const add_cell_button         = document.getElementById("add_cell_button");
const add_cell_select         = document.getElementById("add_cell_select");
const submission_form         = document.getElementById("submission_form");
const dataAnalysis_form       = document.getElementById("dataAnalysis_form");
const idea_form               = document.getElementById("idea_form");
const featureEngineering_form = document.getElementById("featureEngineering_form");
const add_page                = document.getElementById("add_page");

add_cell_button.addEventListener("click", function() {
  add_cell_select.style.display = "inline";
  add_cell_button.style.display = "none";
})


function addSubmission() {
  if (submission_form.style.display == "none") {
    submission_form.style.display = "block";
    add_cell_select.style.display = "none";
  } else {}
}
function addDataAnalysis() {
  if (dataAnalysis_form.style.display == "none") {
    dataAnalysis_form.style.display = "block";
    add_cell_select.style.display = "none";
  } else {}
}
function addIdea() {
  if (idea_form.style.display == "none") {
    idea_form.style.display = "block";
    add_cell_select.style.display = "none";
  } else {}
}
function addFeatureEngineering() {
  if (featureEngineering_form.style.display == "none") {
    featureEngineering_form.style.display = "block";
    add_cell_select.style.display = "none";
  } else {}
}


function getDate() {
  const now = new Date();
  const year  = now.getFullYear();
  const month = now.getMonth() + 1;
  const day   = now.getDate();
  return {year, month, day};
}


function load_kagd_file() {
  // kagd拡張子のファイルを読み込んでviewAllCells()する
}

function viewSubmissionCell(cell_data) {
  // 1列目に「モデル名」「CVスコア」「PBスコア」
  // 2列目に「パラメータ」「特徴量」
  // 3列目に「変更点」「備考」
  const v = (x) => (x ?? "").toString().trim();

  const wrap = document.createElement("div");
  wrap.className = "submission-cell";

  // 左上 Submit タグ
  const tag = document.createElement("div");
  tag.className = "submission-tag";
  tag.textContent = "Submit";
  wrap.appendChild(tag);

  // ===== 上段：モデル名 | CV | PB（横並び） =====
  const top = document.createElement("div");
  top.className = "submission-top";

  const model = v(cell_data?.data?.model_name);
  const cv    = v(cell_data?.data?.cv_score);
  const pb    = v(cell_data?.data?.pb_score);

  if (model) {
    const m = document.createElement("div");
    m.className = "top-model";
    m.textContent = model;
    top.appendChild(m);
  }

  const scores = document.createElement("div");
  scores.className = "top-scores";

  if (cv) {
    const cvEl = document.createElement("div");
    cvEl.textContent = `CV: ${cv}`;
    scores.appendChild(cvEl);
  }
  if (pb) {
    const pbEl = document.createElement("div");
    pbEl.textContent = `PB: ${pb}`;
    scores.appendChild(pbEl);
  }

  if (scores.childNodes.length > 0) top.appendChild(scores);
  if (top.childNodes.length > 0) wrap.appendChild(top);

  // ===== 表形式（共通） =====
  const makeTable = () => {
    const t = document.createElement("div");
    t.className = "kv-table";
    return t;
  };

  const addRow = (table, label, value, usePre = false) => {
    const val = v(value);
    if (!val) return;

    const row = document.createElement("div");
    row.className = "kv-row";

    const l = document.createElement("div");
    l.className = "kv-label";
    l.textContent = label;

    const r = document.createElement(usePre ? "pre" : "div");
    r.className = "kv-value";
    r.textContent = val;

    row.appendChild(l);
    row.appendChild(r);
    table.appendChild(row);
  };

  // ===== 中段：パラメータ・特徴量 ===== 
  const mid = makeTable();
  addRow(mid, "パラメータ", cell_data?.data?.parameters, true);
  addRow(mid, "特徴量",     cell_data?.data?.features);
  if (mid.childNodes.length > 0) wrap.appendChild(mid);

  // ===== 下段：変更点・備考 =====
  const bottom = makeTable();
  addRow(bottom, "変更点", cell_data?.data?.changed);
  addRow(bottom, "備考",   cell_data?.data?.else_info);
  if (bottom.childNodes.length > 0) wrap.appendChild(bottom);

  // セル区切り
  const hr = document.createElement("hr");
  hr.className = "submission-sep";
  wrap.appendChild(hr);

  add_page.appendChild(wrap);
}
function viewDataAnalysisCell(cell_data) {
  // 1列目に「対象列」
  // 2列目に「結果」と（あれば）「画像ファイル」。
  // 3列目に「備考」
  // クリックしたら「コード」のコピー用ボタンと「仮定/目的/理由など」を表示。
}
function viewIdeaCell(cell_data) {
  // 1列目に「重要度」「達成の有無」
  // 2列目に「内容」を表示。
  // クリックしたら「どこから思いついたか、など」と「備考」を表示。
}







function viewSubmissionCell(cell_data) {
  // 1列目に「モデル名」「CVスコア」「PBスコア」
  // 2列目に「パラメータ」「特徴量」
  // 3列目に「変更点」「備考」
  const v = (x) => (x ?? "").toString().trim();

  const wrap = document.createElement("div");
  wrap.className = "submission-cell";

  // 左上 Submit タグ
  const tag = document.createElement("div");
  tag.className = "submission-tag";
  tag.textContent = "Submit";
  wrap.appendChild(tag);

  // ===== 上段：モデル名 | CV | PB（横並び） =====
  const top = document.createElement("div");
  top.className = "submission-top";

  const model = v(cell_data?.data?.model_name);
  const cv    = v(cell_data?.data?.cv_score);
  const pb    = v(cell_data?.data?.pb_score);

  if (model) {
    const m = document.createElement("div");
    m.className = "top-model";
    m.textContent = model;
    top.appendChild(m);
  }

  const scores = document.createElement("div");
  scores.className = "top-scores";

  if (cv) {
    const cvEl = document.createElement("div");
    cvEl.textContent = `CV: ${cv}`;
    scores.appendChild(cvEl);
  }
  if (pb) {
    const pbEl = document.createElement("div");
    pbEl.textContent = `PB: ${pb}`;
    scores.appendChild(pbEl);
  }

  if (scores.childNodes.length > 0) top.appendChild(scores);
  if (top.childNodes.length > 0) wrap.appendChild(top);

  // ===== 表形式（共通） =====
  const makeTable = () => {
    const t = document.createElement("div");
    t.className = "kv-table";
    return t;
  };

  const addRow = (table, label, value, usePre = false) => {
    const val = v(value);
    if (!val) return;

    const row = document.createElement("div");
    row.className = "kv-row";

    const l = document.createElement("div");
    l.className = "kv-label";
    l.textContent = label;

    const r = document.createElement(usePre ? "pre" : "div");
    r.className = "kv-value";
    r.textContent = val;

    row.appendChild(l);
    row.appendChild(r);
    table.appendChild(row);
  };

  // ===== 中段：パラメータ・特徴量 ===== 
  const mid = makeTable();
  addRow(mid, "パラメータ", cell_data?.data?.parameters, true);
  addRow(mid, "特徴量",     cell_data?.data?.features);
  if (mid.childNodes.length > 0) wrap.appendChild(mid);

  // ===== 下段：変更点・備考 =====
  const bottom = makeTable();
  addRow(bottom, "変更点", cell_data?.data?.changed);
  addRow(bottom, "備考",   cell_data?.data?.else_info);
  if (bottom.childNodes.length > 0) wrap.appendChild(bottom);

  // セル区切り
  const hr = document.createElement("hr");
  hr.className = "submission-sep";
  wrap.appendChild(hr);

  add_page.appendChild(wrap);
}





function viewCell(cell_data) {
  // cell_dataを描画する

}

function viewAllCells() {
  // kagd_data にあるcellを全部描画する
}



function saveForm(type) {
  const {year, month, day} = getDate();
  const cell = {
    id: cell_nums,
    type: type,
    year:year,
    month:month,
    day:day,
    data: {
      model_name: document.getElementById("submission_model_name").value,
      cv_score  : document.getElementById("submission_CV_score").value,
      pb_score  : document.getElementById("submission_PB_score").value,
      features  : document.getElementById("submission_features").value,
      parameters: document.getElementById("submission_parameters").value,
      changed   : document.getElementById("submission_changed").value,
      else_info : document.getElementById("submission_else").value,
      file_path : document.getElementById("submission_file_path").value
    }
  };
  // kagd_data に cell_id(cells_num) と一緒に保存してview
  viewSubmissionCell(cell);
  kagd_data.cells.push(cell);
  cell_nums++;
}

async function saveSubmissionForm() {
  const {year, month, day} = getDate();
  const cell = {
    id: cell_nums,
    type: "submission",
    year:year,
    month:month,
    day:day,
    data: {
      model_name: document.getElementById("submission_model_name").value,
      cv_score  : document.getElementById("submission_CV_score").value,
      pb_score  : document.getElementById("submission_PB_score").value,
      features  : document.getElementById("submission_features").value,
      parameters: document.getElementById("submission_parameters").value,
      changed   : document.getElementById("submission_changed").value,
      else_info : document.getElementById("submission_else").value,
      file_path : document.getElementById("submission_file_path").value
    }
  };
  // kagd_data に cell_id(cells_num) と一緒に保存してview
  await viewSubmissionCell(cell);
  kagd_data.cells.push(cell);
  cell_nums++;
}


function saveDataAnalysisForm() {
}

function saveIdeaForm() {
}