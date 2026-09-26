(function () {
  "use strict";

  var BOOKS = {
    frankenstein: {
      title: "Frankenstein", by: "Mary Shelley · 1818", level: "Grades 10–12", status: "Guide of the week",
      blurb: "An explorer in the Arctic ice takes aboard a half-frozen stranger, whose confession — of a secret experiment and what came of it — becomes the heart of the book.",
      themes: ["Creation & responsibility", "Isolation", "Nature & the sublime", "Justice & blame"],
      questions: [
        "The story reaches us through three narrators. Whose account do you trust most, and does the frame change how you judge Victor?",
        "Victor never gives his creation a name. What does that absence do to the way everyone treats him?",
        "Is the novel a warning against ambition itself, or against something narrower — secrecy, isolation, or refusing responsibility?"
      ],
      featured: true
    },
    pride: {
      title: "Pride and Prejudice", by: "Jane Austen · 1813", level: "Grades 9–12", status: "Complete",
      blurb: "Five Bennet sisters and no fortune among them, in a county where marriage is the only secure career — and where first impressions are rarely the last word.",
      themes: ["First impressions", "Marriage & money", "Self-knowledge", "Family"],
      questions: [
        "Elizabeth prides herself on reading people well. Where in the first half is she right, and where is she wrong for reasons that reveal something about her?",
        "Compare the marriages already underway in the novel. Which one, if any, does the book hold up as a model?",
        "Mrs. Bennet is played for comedy, but her anxiety has a real basis. Does the entail change how you read her?"
      ]
    },
    janeeyre: {
      title: "Jane Eyre", by: "Charlotte Brontë · 1847", level: "Grades 10–12", status: "Complete",
      blurb: "An orphan grows up unloved at Gateshead and half-starved at Lowood, then takes a post as governess in a house with an unexplained sound on its upper floor.",
      themes: ["Independence", "Conscience & faith", "Class & belonging", "The gothic house"],
      questions: [
        "Jane narrates as an adult looking back. Where do you feel the older Jane’s judgement shaping the younger Jane’s story?",
        "Lowood is cruel, yet Jane finds her first real friend there. What does Helen Burns give her that no one else does?",
        "Jane repeatedly insists on her freedom — to work, to leave, to refuse. Which of her decisions felt hardest to you, and why?"
      ]
    },
    middlemarch: {
      title: "Middlemarch", by: "George Eliot · 1871–72", level: "Grade 12 and up", status: "Needs review",
      blurb: "A provincial town on the eve of the 1832 Reform Act, seen through several lives at once: an idealistic young woman, an ambitious doctor, a banker with a past, and the neighbours watching them all.",
      themes: ["Vocation", "Marriage as a test", "Reform & change", "Gossip & community"],
      questions: [
        "Dorothea and Lydgate both begin with grand plans for a useful life. What gets in their way — circumstance, character, or other people?",
        "Eliot’s narrator often steps back to comment on everyone, including characters we dislike. Does that voice make you more forgiving?",
        "How does talk — rumour, reputation, the opinions of neighbours — move the plot?"
      ]
    },
    moby: {
      title: "Moby-Dick", by: "Herman Melville · 1851", level: "Grades 11–12", status: "Complete",
      blurb: "Ishmael signs on to a Nantucket whaler, only to learn that its captain has a single purpose that has very little to do with oil.",
      themes: ["Obsession", "Fellowship across difference", "Knowledge & classification", "Nature’s indifference"],
      questions: [
        "Ishmael fades as a character for long stretches. Why start with such a personal narrator and then let him recede?",
        "The chapters on whales and whaling divide readers. Did you skim them or savour them — and what do they add to the voyage?",
        "Ishmael and Queequeg’s friendship is established early and warmly. How does it frame everything that follows aboard ship?"
      ]
    },
    gatsby: {
      title: "The Great Gatsby", by: "F. Scott Fitzgerald · 1925", level: "Grades 10–12", status: "Complete",
      blurb: "Nick Carraway rents a small house on Long Island next to a mansion where the parties never seem to stop — and whose host almost no one has actually met.",
      themes: ["Reinvention", "Wealth & carelessness", "Memory & the past", "The American Dream"],
      questions: [
        "Nick tells us he is slow to judge. Is he? Find a moment where his narration quietly takes a side.",
        "East Egg and West Egg are only a bay apart. What separates them, and why can’t money alone cross that water?",
        "Many key scenes are parties. How does the mood of each one track the story’s larger arc?"
      ]
    },
    wuthering: {
      title: "Wuthering Heights", by: "Emily Brontë · 1847", level: "Grades 11–12", status: "Needs themes",
      blurb: "A new tenant grows curious about his strange landlord, and the housekeeper begins a story that spans two houses and two generations on the Yorkshire moors.",
      themes: ["Revenge", "Nature & culture", "Class & inheritance", "Unreliable witnesses"],
      questions: [
        "Most of the story reaches us through Nelly Dean, who was there for much of it and had opinions. How far do you trust her?",
        "The two houses feel like opposites. What does each stand for, and which characters belong where?",
        "Is Heathcliff a victim, a villain, or both? Does your answer change between the first and second halves?"
      ]
    },
    expectations: {
      title: "Great Expectations", by: "Charles Dickens · 1861", level: "Grades 9–12", status: "In progress",
      blurb: "Pip, a blacksmith’s apprentice on the Kent marshes, learns he has come into money from an unnamed benefactor and must go to London to become a gentleman.",
      themes: ["Social ambition", "Guilt & loyalty", "What makes a gentleman", "Secrets"],
      questions: [
        "The adult Pip narrates his younger self with obvious embarrassment. Which of young Pip’s choices is hardest to forgive?",
        "Joe Gargery has no money and no polish. What does the novel suggest truly makes a gentleman?",
        "Dickens published this in weekly parts. Can you spot the cliffhangers, and does that change how the pacing feels?"
      ]
    },
    dorian: {
      title: "The Picture of Dorian Gray", by: "Oscar Wilde · 1890", level: "Grades 11–12", status: "Complete",
      blurb: "A young man, newly painted by an admiring artist and newly befriended by a witty aristocrat, makes an idle wish about the portrait.",
      themes: ["Beauty & morality", "Influence", "Art for art’s sake", "The double life"],
      questions: [
        "Lord Henry talks; Dorian acts. How much responsibility does Henry bear for what Dorian becomes?",
        "Wilde’s preface argues that art has no moral purpose. Does the novel itself agree with its preface?",
        "Basil, Henry, and Dorian each see the portrait differently. What does each man want from it?"
      ]
    },
    dracula: {
      title: "Dracula", by: "Bram Stoker · 1897", level: "Grades 9–12", status: "In progress",
      blurb: "Told in diaries, letters, and newspaper cuttings, it opens with a young solicitor travelling to Transylvania to settle a London property sale for a reclusive count.",
      themes: ["Old world & modernity", "Knowledge as teamwork", "Fear of the outsider", "Gender roles"],
      questions: [
        "The story is assembled from documents. Who does the assembling, and why does that matter by the end?",
        "The characters rely on typewriters, phonographs, and railway timetables. Is technology their weapon or a false comfort?",
        "Mina is both the group’s organiser and the person they try hardest to protect. How does the novel handle that tension?"
      ]
    },
    persuasion: {
      title: "Persuasion", by: "Jane Austen · 1817", level: "Grades 10–12", status: "Stub",
      blurb: "Eight years after being talked out of an engagement, Anne Elliot finds the man she refused back in her circle — prosperous, admired, and apparently indifferent to her.",
      themes: ["Second chances", "Constancy", "Advice & influence", "The navy & new money"],
      questions: [
        "Was Lady Russell wrong to advise Anne as she did? Was Anne wrong to listen?",
        "Anne is quieter than most Austen heroines. How does Austen make a reserved character so vivid?",
        "The naval officers and the Elliot family represent different kinds of worth. Where do the novel’s sympathies lie?"
      ]
    },
    dalloway: {
      title: "Mrs Dalloway", by: "Virginia Woolf · 1925", level: "Grades 11–12", status: "In progress",
      blurb: "A single June day in 1920s London: Clarissa Dalloway prepares for a party that evening, while across the city a war veteran struggles to hold his day together.",
      themes: ["Time & memory", "War’s aftermath", "Social performance", "Connection & solitude"],
      questions: [
        "The novel moves between minds without chapter breaks. Where did you lose your footing, and where did the shifts feel most meaningful?",
        "Clarissa and Septimus never meet. Why pair them, and what do they share?",
        "Clocks keep striking the hour. What does measured time do against the looser time of memory?"
      ]
    }
  };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var navToggle = $(".nav-toggle");
  var nav = $("#site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var tocToggle = $(".toc-toggle");
  var toc = $("#toc");
  if (tocToggle && toc) {
    tocToggle.addEventListener("click", function () {
      var open = toc.classList.toggle("is-open");
      tocToggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", toc).forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 960px)").matches) {
          toc.classList.remove("is-open");
          tocToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  var tocLinks = toc ? $$('a[href^="#"]', toc) : [];
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) map[el.id] = a;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          tocLinks.forEach(function (a) { a.classList.remove("is-active"); });
          map[entry.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { observer.observe(document.getElementById(id)); });
  }

  $$("[data-spoiler]").forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", function () {
      var on = btn.getAttribute("aria-checked") !== "true";
      btn.setAttribute("aria-checked", String(on));
      if (panel) panel.hidden = !on;
    });
  });

  var guides = $$(".guide");
  var inputs = $$("[data-search]");
  var chips = $$(".chip");
  var countEl = $("[data-count]");
  var emptyEl = $("[data-empty]");
  var emptyTerm = $("[data-empty-term]");
  var activeFilter = "all";

  function normalise(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  }

  function applyFilter() {
    if (!guides.length) return;
    var q = normalise(inputs.length ? inputs[0].value : "");
    var terms = q.split(/\s+/).filter(Boolean);
    var shown = 0;
    guides.forEach(function (g) {
      var hay = normalise(g.getAttribute("data-keywords") + " " + g.getAttribute("data-tags") + " " + g.textContent);
      var tags = (g.getAttribute("data-tags") || "").split(" ");
      var matchText = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      var matchTag = activeFilter === "all" || tags.indexOf(activeFilter) !== -1;
      var visible = matchText && matchTag;
      g.hidden = !visible;
      if (visible) shown++;
    });
    if (countEl) {
      countEl.textContent = shown === guides.length
        ? "Showing all " + shown + " guides"
        : "Showing " + shown + " of " + guides.length + " guides";
    }
    if (emptyEl) {
      emptyEl.hidden = shown !== 0;
      if (emptyTerm) emptyTerm.textContent = q ? "“" + (inputs[0].value.trim()) + "”" : "this filter";
    }
  }

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      inputs.forEach(function (other) { if (other !== input) other.value = input.value; });
      applyFilter();
    });
  });

  $$("[data-search-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var shelf = document.getElementById("shelf");
      if (shelf) shelf.scrollIntoView({ block: "start" });
    });
  });

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      activeFilter = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      applyFilter();
    });
  });

  $$("[data-hint]").forEach(function (hint) {
    hint.addEventListener("click", function () {
      var v = hint.getAttribute("data-hint");
      inputs.forEach(function (i) { i.value = v; });
      applyFilter();
      var shelf = document.getElementById("shelf");
      if (shelf) shelf.scrollIntoView({ block: "start" });
    });
  });

  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get("q") && inputs.length) {
      inputs.forEach(function (i) { i.value = params.get("q"); });
      applyFilter();
    }
  } catch (err) {  }

  var dialog = $("#guide-dialog");
  var lastTrigger = null;

  function openGuide(key, trigger) {
    var book = BOOKS[key];
    if (!book) return;
    if (book.featured) {
      var feat = document.getElementById("featured");
      if (feat) { feat.scrollIntoView({ block: "start" }); }
      return;
    }
    if (!dialog || typeof dialog.showModal !== "function") return;
    lastTrigger = trigger || null;

    $("[data-dlg-title]", dialog).textContent = book.title;
    $("[data-dlg-by]", dialog).textContent = book.by + (book.level ? " · Suggested level: " + book.level.replace(/ /g, "\u00a0") : "");
    $("[data-dlg-status]", dialog).textContent = "Guide preview · " + book.status;
    $("[data-dlg-blurb]", dialog).textContent = book.blurb;

    var tags = $("[data-dlg-tags]", dialog);
    tags.innerHTML = "";
    book.themes.forEach(function (t) {
      var li = document.createElement("li");
      li.className = "tag";
      li.textContent = t;
      tags.appendChild(li);
    });

    var qs = $("[data-dlg-questions]", dialog);
    qs.innerHTML = "";
    book.questions.forEach(function (q) {
      var li = document.createElement("li");
      var p = document.createElement("p");
      p.textContent = q;
      li.appendChild(p);
      qs.appendChild(li);
    });

    var coverHost = $("[data-dlg-cover]", dialog);
    coverHost.innerHTML = "";
    var source = $('.guide[data-book="' + key + '"]');
    if (source) {
      var cover = $(".cover", source).cloneNode(true);
      coverHost.appendChild(cover);
      var sub = $(".guide-sub", source).cloneNode(true);
      coverHost.appendChild(sub);
    }

    $("[data-copy-status]", dialog).textContent = "";
    dialog.dataset.book = key;
    dialog.showModal();
  }

  $$(".guide").forEach(function (g) {
    var btn = $(".guide-btn", g);
    btn.addEventListener("click", function () { openGuide(g.getAttribute("data-book"), btn); });
  });
  $$("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () { openGuide(btn.getAttribute("data-open"), btn); });
  });

  if (dialog) {
    $("[data-close]", dialog).addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      if (lastTrigger) lastTrigger.focus();
    });
    $("[data-dlg-edit]", dialog).addEventListener("click", function () { dialog.close(); lastTrigger = null; });

    $("[data-copy]", dialog).addEventListener("click", function () {
      var book = BOOKS[dialog.dataset.book];
      if (!book) return;
      var text = book.title + " (" + book.by + ") — questions from ReadingClub.wiki\n\n" +
        book.questions.map(function (q, i) { return (i + 1) + ". " + q; }).join("\n");
      var status = $("[data-copy-status]", dialog);
      var done = function () { status.textContent = "Copied to clipboard."; };
      var fail = function () { status.textContent = "Couldn’t copy — select the questions instead."; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fail);
      } else { fail(); }
    });
  }

  $$("[data-random]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var keys = Object.keys(BOOKS).filter(function (k) { return !BOOKS[k].featured; });
      openGuide(keys[Math.floor(Math.random() * keys.length)], btn);
    });
  });

  $$("[data-print]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.add("print-featured");
      window.print();
    });
  });
  window.addEventListener("afterprint", function () { document.body.classList.remove("print-featured"); });
})();

function rcThanks(form) {
  var note = form.querySelector(".thanks");
  if (note) note.hidden = false;
  form.reset();
  return false;
}
