const ARTISTS = [
  "Al Jaffee",
  "Alex Ross",
  "Ansel Adams",
  "Andy Warhol",
  "Banksy",
  "Claude Monet",
  "Chuck Jones",
  "Drew Struzan",
  "Edvard Munch",
  "Frida Kahlo",
  "Greg Rutkowski",
  "Jack Davis",
  "Jack Kirby",
  "Jan Vermeer",
  "Jim Lee",
  "Leonardo da Vinci",
  "Michelangelo",
  "Pablo Picasso",
  "Rembrandt",
  "Salvador Dali",
  "Sergio Aragones",
  "Vincent van Gogh",
  "Walt Disney",
];

const ART_STYLES = [
  "3d printed",
  "3d render",
  "abstract",
  "anime",
  "art deco",
  "art nouveau",
  "baroque",
  "bauhaus",
  "beaux arts",
  "biedermeier",
  "brutalist architecture",
  "buddhist art",
  "calligraphy",
  "caricature",
  "cartoon",
  "catholic",
  "cel shading",
  "celtic",
  "chinese calligraphy",
  "chinese ink",
  "chinese painting",
  "chinese seal",
  "crochet",
  "cubism",
  "cubist painting",
  "cubist sculpture",
  "cubist",
  "dreamworks",
  "dutch renaissance",
  "early renaissance",
  "expressionism",
  "flat shading",
  "forced perspective",
  "french impressionism",
  "futurism",
  "geometric",
  "gothic",
  "graffiti",
  "graphic design",
  "grisaille",
  "harlem renaissance",
  "hyperrealism",
  "impressionist",
  "metal hurlant",
  "minimalist",
  "modernism",
  "octane render",
  "oil painting",
  "old master",
  "painterly",
  "painting",
  "paper cutout",
  "pastel drawing",
  "pencil drawing",
  "pencil sketch",
  "photorealism",
  "photorealistic",
  "pixar",
  "pointillism",
  "pop art",
  "portrait",
  "portraiture",
  "post-impressionism",
  "poster",
  "postmodernism",
  "pre-raphaelite",
  "psychedelic",
  "realism",
  "realist",
  "renaissance",
  "romanticism",
  "russian constructivism",
  "sculpture",
  "sketch",
  "silhouette",
  "simplistic",
  "still life",
  "stipple",
  "surrealism",
  "surrealist",
  "tachisme",
  "tachist",
  "typography",
  "unreal engine",
  "urban",
  "vaporwave",
  "vector art",
  "victorian era",
  "vintage",
  "watercolor",
  "woodcut",
];

const GALLERIES = ["artstation", "cgsociety"];

const CAMERA_ATTR = [
  "35mm f1.8",
  "analog photo",
  "anamorphic lens",
  "bird's eye view",
  "bokeh",
  "close up",
  "colorful",
  "dof",
  "distant view",
  "dof",
  "dutch angle",
  "film grain",
  "film look",
  "film",
  "fisheye lens",
  "focal length",
  "full frame",
  "gopro",
  "high angle",
  "high dynamic range",
  "hasselblad",
  "kodak ektachrome e100",
  "kodak portra 800",
  "macro",
  "medium angle",
  "motion blur",
  "rimlight",
  "shallow depth of field",
  "shallow dof",
  "shallow focus",
  "tiny planet",
  "ultrawide gopro lens",
  "wide angle",
];

const LIGHTING = [
  "cinematic lighting",
  "cool color grading",
  "dramatic lighting",
  "dramatic shadows",
  "florescent lighting",
  "hard lighting",
  "hard shadows",
  "indirect light",
  "indirect lighting",
  "volumetric lighting",
  "warm color grading",
];

const MISC = [
  "4k",
  "8k",
  "epic",
  "eye contact",
  "fine detailing",
  "flat shading",
  "hd",
  "highly detailed",
  "intricate design",
  "intricate detail",
  "movie frame",
  "photorealistic",
  "skin pores",
  "vibrant color",
];

const NEGATIVES = [
  "bad composition",
  "bad lighting",
  "bad quality",
  "bad texture",
  "blurry",
  "cg, painting, drawing, sketch, anime, blender",
  "deformed face",
  "deformed hands",
  "deformed legs",
  "deformed limbs",
  "high contrast",
  "high poly",
  "high quality",
  "long neck",
  "low contrast",
  "low poly",
  "low quality",
  "low resolution",
  "mutated",
  "mutation",
  "sharp",
  "short neck",
  "skin pores",
  "skin texture",
  "text",
  "ugly",
  "watermark",
  "weird",
];

const ACTORS = [
  "Al Pacino",
  "Alan Alda",
  "Alan Arkin",
  "Alan Rickman",
  "Alec Baldwin",
  "Alec Guinness",
  "Alfred Hitchcock",
  "Alfred Molina",
  "Anthony Daniels",
  "Anthony Hopkins",
  "Arnold Schwarzenegger",
  "Arthur Darvill",
  "Ben Affleck",
  "Brad Pitt",
  "Brendan Fraser",
  "Brent Spiner",
  "Bruce Willis",
  "Bryan Cranston",
  "Burt Lancaster",
  "Burt Reynolds",
  "Cary Grant",
  "Charlie Chaplin",
  "Charlie Day",
  "Charlie Sheen",
  "Chris Evans",
  "Chris Hemsworth",
  "Chris Pine",
  "Chris Pratt",
  "Chris Rock",
  "Christian Bale",
  "Clark Gable",
  "Clint Eastwood",
  "Colin Firth",
  "Colm Meaney",
  "Cuba Gooding Jr.",
  "Daniel Craig",
  "Daniel Day-Lewis",
  "Daniel Radcliffe",
  "Danny DeVito",
  "David Mitchell",
  "David Tennant",
  "Deforest Kelley",
  "Denzel Washington",
  "Dustin Hoffman",
  "Dwayne Johnson",
  "Eddie Murphy",
  "Edward Norton",
  "Elijah Wood",
  "Elliot Gould",
  "Ethan Hawke",
  "Ewan McGregor",
  "F. Murray Abraham",
  "Forest Whitaker",
  "Frank Sinatra",
  "Frank Welker",
  "Frank Zappa",
  "Gary Oldman",
  "Gene Hackman",
  "Gene Wilder",
  "George C. Scott",
  "George Carlin",
  "George Clooney",
  "George Lucas",
  "George Takei",
  "Gregory Peck",
  "Harrison Ford",
  "Hugh Jackman",
  "Hugh Laurie",
  "Humphrey Bogart",
  "Ian McKellen",
  "Idris Elba",
  "Jack Black",
  "Jack Nicholson",
  "Jackie Chan",
  "James Cagney",
  "James Dean",
  "James Earl Jones",
  "James Franco",
  "James Gandolfini",
  "Jason Statham",
  "Jeff Bridges",
  "Jeff Daniels",
  "Jeff Goldblum",
  "Jeffrey Wright",
  "Jeremy Irons",
  "Jeremy Renner",
  "Jerry Seinfeld",
  "Jim Belushi",
  "Jim Carrey",
  "Jimmy Carr",
  "Jimmy Stewart",
  "Joe Don Baker",
  "John Travolta",
  "Johnathan Frakes",
  "Johnny Depp",
  "Jon Hamm",
  "Jon Voight",
  "Jonah Hill",
  "Joseph Gordon-Levitt",
  "Keanu Reeves",
  "Kevin Costner",
  "Kevin Smith",
  "Kevin Spacey",
  "Kiefer Sutherland",
  "Kirk Douglas",
  "Kurt Russell",
  "Laurence Fishburne",
  "Laurence Olivier",
  "Leonard Nimoy",
  "Leonardo DiCaprio",
  "LeVar Burton",
  "Liam Neeson",
  "Mark Wahlberg",
  "Marlon Brando",
  "Martin Freeman",
  "Matt Damon",
  "Matt Smith",
  "Matthew McConaughey",
  "Mel Brooks",
  "Mel Gibson",
  "Michael Caine",
  "Michael Cera",
  "Michael Dorn",
  "Michael Douglas",
  "Michael Fassbender",
  "Michael J. Fox",
  "Michael Keaton",
  "Morgan Freeman",
  "Paton Oswalt",
  "Patrick Stewart",
  "Paul Giamatti",
  "Paul Newman",
  "Paul Rudd",
  "Peter Capaldi",
  "Peter Falk",
  "Peter O'Toole",
  "Peter Sellers",
  "Peter Serafinowicz",
  "Philip Seymour Hoffman",
  "Robert De Niro",
  "Robert Downey Jr.",
  "Robert Duvall",
  "Robert Mitchum",
  "Robert Redford",
  "Robert Webb",
  "Robin Williams",
  "Roddy Piper",
  "Rowan Atkinson",
  "Russell Brand",
  "Russell Crowe",
  "Ryan Reynolds",
  "Samuel L. Jackson",
  "Sean Connery",
  "Sean Penn",
  "Seth Rogen",
  "Shia LaBeouf",
  "Sidney Poitier",
  "Spencer Tracy",
  "Stephen Fry",
  "Steve Martin",
  "Steve McQueen",
  "Tom Cruise",
  "Tom Hanks",
  "Tom Hardy",
  "Tommy Lee Jones",
  "Tommy Wiseau",
  "Tony Curtis",
  "Val Kilmer",
  "Viggo Mortensen",
  "Vin Diesel",
  "Vincent D'Onofrio",
  "Wil Wheaton",
  "Will Smith",
  "William Holden",
  "William Shatner",
  "Woody Allen",
  "Woody Harrelson",
  "Yul Brynner",
];

const ACTRESSES = [
  "Amanda Peet",
  "Amanda Plummer",
  "Amanda Seyfried",
  "Amy Adams",
  "Amy Poehler",
  "Angelina Jolie",
  "Anne Hathaway",
  "Audrey Hepburn",
  "Ava Gardner",
  "Barbra Streisand",
  "Bette Davis",
  "Billie Piper",
  "Bjork",
  "Cameron Diaz",
  "Cate Blanchett",
  "Catherine Zeta-Jones",
  "Charlize Theron",
  "Chloe Grace Moretz",
  "Cindy Crawford",
  "Claire Danes",
  "Denise Crosby",
  "Diane Keaton",
  "Diane Lane",
  "Drew Barrymore",
  "Elizabeth Taylor",
  "Emma Stone",
  "Emma Watson",
  "Frances McDormand",
  "Gates McFadden",
  "Gillian Anderson",
  "Ginger Rogers",
  "Glenn Close",
  "Grace Kelly",
  "Greta Garbo",
  "Halle Bailey",
  "Halle Berry",
  "Helen Hunt",
  "Helen Mirren",
  "Hilary Swank",
  "Holly Hunter",
  "Ingrid Bergman",
  "Jane Fonda",
  "Jenna Coleman",
  "Jennifer Aniston",
  "Jennifer Lawrence",
  "Joan Crawford",
  "Jodie Whittaker",
  "Judi Dench",
  "Judy Garland",
  "Julia Roberts",
  "Julianne Moore",
  "Karen Gillan",
  "Kate Winslet",
  "Katherine Hepburn",
  "Keira Knightley",
  "Kirsten Dunst",
  "Kristen Stewart",
  "Kylie Minogue",
  "Lauren Bacall",
  "Lena Headey",
  "Linda Cardellini",
  "Liza Minnelli",
  "Lupita Nyong'o",
  "Madonna",
  "Majel Barrett",
  "Margo Martindale",
  "Margo Robbie",
  "Marilyn Monroe",
  "Marina Sirtis",
  "Marlene Dietrich",
  "Megan Fox",
  "Meryl Streep",
  "Michelle Pfeiffer",
  "Milla Jovovich",
  "Natalie Dormer",
  "Natalie Portman",
  "Nichelle Nichols",
  "Nicole Kidman",
  "Olivia Colman",
  "Olivia Munn",
  "Olivia Wilde",
  "Pearl Mackie",
  "Penelope Cruz",
  "Reese Witherspoon",
  "Renee Zellweger",
  "Rita Hayworth",
  "Sally Field",
  "Salma Hayek",
  "Sandra Bullock",
  "Scarlett Johansson",
  "Sharon Stone",
  "Shirley MacLaine",
  "Sigourney Weaver",
  "Sofia Vergara",
  "Sophia Loren",
  "Susan Sarandon",
  "Tilda Swinton",
  "Uma Thurman",
  "Viola Davis",
  "Vivien Leigh",
  "Zoe Saldana",
];
const BOOT_TIMEOUT_MS = 1500;

// the ui isn't available immediately, we we'll wait a bit... adjust to taste
if (window.location.port == 9090) {
  console.log(
    `Probably InvokeAI, waiting ${BOOT_TIMEOUT_MS} for UI to load...`
  );
  setTimeout(boot, BOOT_TIMEOUT_MS);
}

let isPanelOpen = false;
let oldPrompt = null;
let oldPromptNegative = null;

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
  elModal.style.minWidth = "512px";
  elModal.style.zIndex = 999;

  elModal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      togglePanel();
    }
  });

  // set style so it's to the right of the elOpenButton
  elModal.style.left = `${
    elOpenButton.offsetLeft + elOpenButton.offsetWidth + 10
  }px`;
  elModal.style.top = `70px`;

  populateModal(elModal);
  return elModal;
};

const togglePanel = () => {
  isPanelOpen = !isPanelOpen;
  elModal.style.display = isPanelOpen ? "block" : "none";

  // copy the prompt to the staging area
  if (isPanelOpen) {
    oldPrompt = elPrompt.value;
    oldPromptNegative = elPromptNegative.value;

    elPromptStaging.value = oldPrompt;
    elPromptNegativeStaging.value = oldPromptNegative;

    // disable the prompt
    elPrompt.disabled = true;
    elPromptNegative.disabled = true;

    elPromptStaging.focus();
  } else {
    elPrompt.disabled = false;
    elPromptNegative.disabled = false;
  }
};

const populateModal = (el) => {
  el.innerHTML = `
    <div style="display:flex; flex-direction:column; height:100%; padding: 0.25em">
      <div style="flex:0; text-align: center; font-weight:bold; color:#fff">Prompt-a-Roni</div>
      <div style="flex:auto; display:flex; flex-direction: column;" id="modalBody">
      </div>
    </div>
  `;

  const elBody = el.querySelector("#modalBody");

  elBody.append(
    createSplitContainer([
      createApplyButton(),
      createRenderButton(),
      createResetButton(),
    ])
  );
  elBody.append(createStagingAreas());

  elBody.append(createSeparator("Positives"));
  elBody.append(
    createSplitContainer([
      createDropdown(ARTISTS, "", "Artists", "", " style"),
      createDropdown(GALLERIES, "", " Galleries"),
    ])
  );
  elBody.append(
    createSplitContainer([
      createDropdown(ART_STYLES, "", "Styles", "", " style"),
      createDropdown(CAMERA_ATTR, "", "Camera Stuff"),
    ])
  );
  elBody.append(createDropdown(LIGHTING, "", "Lighting"));
  elBody.append(createDropdown(MISC, "", " Misc"));
  elBody.append(createSeparator("Negatives"));
  elBody.append(createDropdown(NEGATIVES, "", " Negatives", "", "", true));
  elBody.append(createSeparator("People"));
  elBody.append(
    createSplitContainer([
      createDropdown(ACTORS, "", "Actors"),
      createDropdown(ACTRESSES, "", "Actresses"),
    ])
  );
};

const createSplitContainer = (children) => {
  const el = document.createElement("div");
  el.style.display = "flex";
  el.style.flexDirection = "row";
  el.style.justifyContent = "space-between";
  el.style.alignItems = "center";

  children.forEach((child) => {
    child.style.gap = "0.5em";
    child.style.flex = `1 1 ${100 / children.length}%`;
    el.append(child);
  });

  return el;
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
  elPositive.style.color = "#fff";
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
  elNegative.style.color = "#fff";
  elNegative.value = elPromptNegative.value;

  el.appendChild(elNegative);

  elPromptStaging = elPositive;
  elPromptNegativeStaging = elNegative;

  return el;
};

const createDropdown = (
  values,
  faIconName = "", // TODO: for later
  title,
  prepend = "",
  append = "",
  isNegative = false
) => {
  const el = document.createElement("select");
  el.style.backgroundColor = "var(--accent-color)";
  el.style.color = "var(--text-color)";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.margin = "0.25em";

  // first select is label
  const option = document.createElement("option");
  option.value = "";
  option.disabled = true;
  option.selected = true;
  option.style.fontWeight = "bold";
  option.text = title;
  el.appendChild(option);

  // add all values
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
  el.style.backgroundColor = "var(--accent-color)";
  el.style.color = "var(--text-color)";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.margin = "0.25em";
  el.style.marginLeft = andRender ? "1em" : "";
  el.style.flex = "1 1 50%";
  el.innerText = andRender ? "Apply & Render" : "Apply";
  el.title = "Apply changes to prompt and close panel";

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

const createRenderButton = (andRender = false) => {
  const el = document.createElement("button");
  el.style.backgroundColor = "var(--accent-color)";
  el.style.color = "var(--text-color)";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.margin = "0.25em";
  el.style.marginLeft = andRender ? "1em" : "";
  el.title = "Render with current prompt";

  el.style.flex = "1 1 50%";
  el.innerText = "Render";

  el.onclick = () => {
    elPrompt.value = elPromptStaging.value;
    elPromptNegative.value = elPromptNegativeStaging.value;
    reactTriggerChange(elPrompt);
    reactTriggerChange(elPromptNegative);

    document.querySelector(".invoke-btn").click();
  };
  return el;
};

const createResetButton = (andRender = false) => {
  const el = document.createElement("button");
  el.style.backgroundColor = "var(--destructive-color)";
  el.style.color = "var(--text-color)";
  el.style.fontWeight = "bold";
  el.style.borderRadius = "0.25rem";
  el.style.padding = "0.5em 1em";
  el.style.margin = "0.25em";
  el.style.marginLeft = andRender ? "1em" : "";
  el.title = "Reset to original prompt";

  el.style.flex = "1 1 50%";
  el.innerText = "Reset";

  el.onclick = () => {
    elPrompt.value = oldPrompt;
    elPromptStaging.value = oldPrompt;
    elPromptNegative.value = oldPromptNegative;
    elPromptNegativeStaging.value = oldPromptNegative;

    reactTriggerChange(elPrompt);
    reactTriggerChange(elPromptNegative);
  };
  return el;
};
