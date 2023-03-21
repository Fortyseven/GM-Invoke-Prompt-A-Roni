// ==UserScript==
// @name      InvokeUI Prompt-a-roni
// @version		1
// @grant     none
// @require		https://unpkg.com/react-trigger-change/dist/react-trigger-change.js
// @match 		*://127.0.0.1/
// @run-at    document-idle
// ==/UserScript==

const BOOT_TIMEOUT_MS = 1500;

const ARTISTS = [
  "al jaffee",
  "ansel adams",
  "drew struzan",
  "greg rutkowski",
  "jack davis",
];

const ART_STYLES = [
  "dreamworks",
  "expressionist",
  "forced perspective",
  "harlem renaissance",
  "impressionist",
  "pixar",
  "realist",
  "surrealist",
  "vector art",
  "watercolor",
];

const GALLERIES = ["artstation", "cgsociety"];

const CAMERA_ANGLES = [
  "bird's eye view",
  "close up",
  "distant view",
  "distant",
  "macro",
  "medium angle",
  "ultrawide angle",
  "ultrawide gopro lens",
  "wide angle",
];

const LIGHTING = [
  "volumetric lighting",
  "cinematic lighting",
  "dramatic lighting",
];

const MISC = [
  "35mm f1.8",
  "3d render",
  "4k",
  "8k",
  "analog photo",
  "epic",
  "eye contact",
  "film grain",
  "hasselblad",
  "hd",
  "highly detailed",
  "intricate detail",
  "kodak ektachrome e100",
  "kodak portra 800",
  "motion blur",
  "movie frame",
  "octane render",
  "photo realistic",
  "shallow depth of field",
  "skin pores",
  "unreal engine",
  "vibrant color",
];

const NEGATIVES = [
  "bad composition",
  "bad lighting",
  "bad quality",
  "blurry",
  "cg, painting, drawing, sketch, anime, blender",
  "deformed face",
  "long neck",
  "low poly",
  "low quality",
  "low resolution",
  "mutated",
  "mutation",
  "text",
  "ugly",
  "watermark",
  "weird",
];

// the ui isn't available immediately, we we'll wait a bit... adjust to taste
if (window.location.port == 9090) {
  console.log(
    `Probably InvokeAI, waiting ${BOOT_TIMEOUT_MS} for UI to load...`
  );
  setTimeout(boot, BOOT_TIMEOUT_MS);
}

let isPanelOpen = false;

let elRoot = null;

let elPrompt = null;
let elPromptNegative = null;
let elPromptStaging = null;
let elPromptNegativeStaging = null;
let elOpenButton = null;
let elModal = null;

function boot() {
  // FIXME: this will not work if the prompt is not visible (e.g. training, etc)
  elRoot = document.getElementsByTagName("body")[0];

  elPrompt = document.getElementById("prompt");
  elPromptNegative = document.getElementById("negativePrompt");

  const elButtonPanel = document.getElementsByClassName("app-tabs-list")[0];
  elOpenButton = createOpenButton(() => togglePanel());
  elButtonPanel.append(elOpenButton);

  elRoot.append(createModal());
}

const createOpenButton = (callback) => {
  const el = document.createElement("button");
  el.setAttribute("id", "prompt-a-roni-button");
  el.innerText = "P";
  el.style.backgroundColor = "#ffbb00";
  el.style.color = "#000";
  el.style.width = 24;
  el.style.height = 24;
  el.style.fontWeight = "900";
  el.style.borderRadius = "0.25rem";
  el.onclick = callback;
  return el;
};

const createModal = () => {
  elModal = document.createElement("div");
  elModal.setAttribute("id", "prompt-a-roni-modal");
  elModal.style.background =
    "linear-gradient(180deg, rgba(48,48,48,1) 0%, rgba(12,12,12,1) 100%)";
  elModal.style.border = "2px outset #0002";
  elModal.style.borderRadius = "10px";
  elModal.style.boxShadow = "0 0 3em #000";
  elModal.style.display = "none";
  elModal.style.padding = "0.5rem";
  elModal.style.position = "absolute";
  elModal.style.width = "512px";
  elModal.style.zIndex = 999;

  // set style so it's to the right of the elOpenButton
  elModal.style.left = `${
    elOpenButton.offsetLeft + elOpenButton.offsetWidth + 10
  }px`;
  elModal.style.top = `${elOpenButton.offsetTop - 2}px`;

  populateModal(elModal);
  return elModal;
};

const togglePanel = () => {
  isPanelOpen = !isPanelOpen;
  elModal.style.display = isPanelOpen ? "block" : "none";

  // copy the prompt to the staging area
  if (isPanelOpen) {
    elPromptStaging.value = elPrompt.value;
    elPromptNegativeStaging.value = elPromptNegative.value;
    // disable the prompt
    elPrompt.disabled = true;
    elPromptNegative.disabled = true;
  } else {
    elPrompt.disabled = false;
    elPromptNegative.disabled = false;
  }
};

const populateModal = (el) => {
  el.innerHTML = `
    <div style="display:flex; flex-direction:column; height:100%; padding: 0.25em">
      <div style="flex:0; text-align: center; font-weight:bold">Prompt-a-Roni</div>
      <div style="flex:auto; display:flex; flex-direction: column;" id="modalBody">
      </div>
    </div>
  `;

  const elBody = el.querySelector("#modalBody");

  // prompt staging area
  // create button container side by side
  const elButtonContainer = document.createElement("div");
  elButtonContainer.style.display = "flex";
  elButtonContainer.style.flexDirection = "row";
  elButtonContainer.style.justifyContent = "space-between";
  elButtonContainer.style.alignItems = "center";
  elButtonContainer.style.margin = "0.25em 0";

  elButtonContainer.append(createApplyButton());
  elButtonContainer.append(createApplyAndRenderButton());

  elBody.append(elButtonContainer);
  elBody.append(createStagingAreas());

  elBody.append(createSeparator("Positives"));
  elBody.append(createDropdown(ARTISTS, "Artists", "", " style"));
  elBody.append(createDropdown(CAMERA_ANGLES, "Camera Angles"));
  elBody.append(createDropdown(GALLERIES, "Galleries"));
  elBody.append(createDropdown(LIGHTING, "Lighting"));
  elBody.append(createDropdown(ART_STYLES, "Styles", "", " style"));
  elBody.append(createDropdown(MISC, "Misc"));
  elBody.append(createSeparator("Negatives"));
  elBody.append(createDropdown(NEGATIVES, "Negatives", "", "", true));
};

const createSeparator = (title) => {
  const el = document.createElement("div");
  el.style.color = "#fff";
  el.style.fontSize = "10pt";
  el.style.textAlign = "center";
  el.style.margin = "0.25em 0";
  el.innerText = title;
  return el;
};

const createStagingAreas = () => {
  // create positive and negative textarea boxes and clone prompt values
  const el = document.createElement("div");
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.justifyContent = "space-between";
  el.style.alignItems = "center";
  el.style.margin = "0.25em 0";

  const elPositive = document.createElement("textarea");
  elPositive.setAttribute("id", "prompt-a-roni-positive");
  elPositive.style.borderRadius = "0.25rem";
  elPositive.style.padding = "0.5em 1em";
  elPositive.style.margin = "0.25em 0";
  elPositive.style.width = "100%";
  elPositive.style.minHeight = "10em";
  elPositive.style.resize = "vertical";
  elPositive.style.lineHeight = "1.5";
  elPositive.style.fontFamily = "monospace";
  elPositive.style.fontSize = "10pt";
  elPositive.style.backgroundColor = "rgba(0, 0, 0, 0.46)";
  elPositive.style.border = "2px inset #000";
  elPositive.value = elPrompt.value;

  el.appendChild(elPositive);

  const elNegative = document.createElement("textarea");
  elNegative.setAttribute("id", "prompt-a-roni-negative");
  elNegative.style.borderRadius = "0.25rem";
  elNegative.style.padding = "0.5em 1em";
  elNegative.style.margin = "0.25em 0";
  elNegative.style.resize = "vertical";
  elNegative.style.width = "100%";
  elNegative.style.minHeight = "10em";
  elNegative.style.border = "2px inset #000";
  elNegative.style.lineHeight = "1.5";
  elNegative.style.fontFamily = "monospace";
  elNegative.style.fontSize = "10pt";
  elNegative.style.backgroundColor = "rgba(17, 0, 0, 0.46)";
  elNegative.value = elPromptNegative.value;

  el.appendChild(elNegative);

  elPromptStaging = elPositive;
  elPromptNegativeStaging = elNegative;

  return el;
};

const createDropdown = (
  values,
  title,
  prepend = "",
  append = "",
  isNegative = false
) => {
  const el = document.createElement("select");
  el.style.backgroundColor = "#ffbb00";
  el.style.color = "#000";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.margin = "0.25em 0";

  // first select is label
  const option = document.createElement("option");
  option.value = "";
  option.text = title;
  option.disabled = true;
  option.selected = true;
  option.style.fontWeight = "bold";
  el.appendChild(option);

  // populate with artists
  values.sort().forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    el.appendChild(option);
  });

  el.onchange = () => {
    const prompt = isNegative ? elPromptNegativeStaging : elPromptStaging;

    // check if prompt ends in a comma, don't add it

    let preprepend = ", ";

    if (prompt.value.length == 0) {
      preprepend = "";
    } else if (prompt.value.trim().endsWith(",")) {
      preprepend = " ";
    }

    prompt.value =
      prompt.value.trim() + preprepend + prepend + el.value.trim() + append;

    prompt.focus();

    el.selectedIndex = 0;
  };
  return el;
};

const createApplyButton = (andRender = false) => {
  const el = document.createElement("button");
  el.style.backgroundColor = "#00bbff";
  el.style.color = "#000";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.marginLeft = andRender ? "1em" : "";

  el.style.flex = "1 1 50%";
  el.innerText = andRender ? "Apply & Render" : "Apply";

  el.onclick = () => {
    elPrompt.value = elPromptStaging.value;
    elPromptNegative.value = elPromptNegativeStaging.value;
    reactTriggerChange(elPrompt);
    reactTriggerChange(elPromptNegative);
    togglePanel();

    if (andRender) {
      document.querySelector(".invoke-btn").click();
    }
  };
  return el;
};

const createApplyAndRenderButton = () => {
  return createApplyButton(true);
};
