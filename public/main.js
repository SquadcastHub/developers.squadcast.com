// ns-hugo:/Users/Shubhanjan/Desktop/developers.squadcast.com/assets/events.ts
var SEARCH_ID = /^(Docs|Site)Search/;
var SEARCH_INPUT;
function $clickaway(ev) {
  if (SEARCH_INPUT && ev.target !== SEARCH_INPUT) {
    $focus(SEARCH_INPUT, false);
  }
}
function $focus(elem, bool) {
  elem.toggleAttribute("is-focus-visible", bool);
  if (bool)
    elem.focus();
  if (SEARCH_ID && SEARCH_ID.test(elem.id)) {
    SEARCH_INPUT = elem;
    elem.parentElement.parentElement.toggleAttribute("is-focused", bool);
    elem.setAttribute("aria-expanded", "" + bool);
    if (bool)
      addEventListener("click", $clickaway);
    else
      removeEventListener("click", $clickaway);
  }
}
function $tabbable(links, bool) {
  for (let i = 0; i < links.length; i++) {
    bool ? links[i].removeAttribute("tabindex") : links[i].setAttribute("tabindex", "-1");
  }
}
function load() {
  let hash = location.hash.substring(1);
  let item = hash && document.getElementById(hash);
  let timer = item && setInterval(() => {
    if (document.readyState !== "complete")
      return;
    clearInterval(timer);
    setTimeout(() => {
      item.scrollIntoView({ behavior: "smooth" });
    }, 250);
  }, 10);
}
function mobile() {
  let root = document.documentElement;
  let btn = document.querySelector(".DocsMobileTitleHeader--sidebar-toggle-button");
  if (btn)
    btn.addEventListener("click", () => {
      root.toggleAttribute("is-mobile-sidebar-open");
    });
  let input = document.querySelector("#DocsSearch--input") || document.querySelector("#SiteSearch--input");
  if (input)
    input.addEventListener("click", () => {
      $focus(input, true);
    });
}
function $copy(ev) {
  let btn = ev.target.closest("button");
  let txt = btn.getAttribute("data-clipboard");
  if (txt) {
    try {
      navigator.clipboard.writeText(txt);
    } catch (err) {
    }
  }
}
function copy() {
  let btns = document.querySelectorAll("button[data-clipboard]");
  for (let i = 0; i < btns.length; i++)
    btns[i].addEventListener("click", $copy);
}
function focus() {
  let isTAB = false;
  addEventListener("keydown", (ev) => {
    isTAB = ev.which === 9;
  });
  addEventListener("focusin", (ev) => {
    if (isTAB)
      $focus(ev.target, true);
  });
  addEventListener("focusout", (ev) => {
    $focus(ev.target, false);
  });
}
function dropdowns() {
  let attr = "data-expanded";
  document.querySelectorAll(".Dropdown").forEach((div) => {
    let btn = div.querySelector("button");
    let links = div.querySelectorAll("li>a");
    let focused = 0;
    if (btn && links.length > 0) {
      let arrows = (ev) => {
        let key = ev.which;
        let isTAB = key === 9;
        if (key === 27)
          return close(ev);
        if (isTAB || key === 40)
          focused++;
        else if (key === 38 || isTAB && ev.shiftKey)
          focused--;
        if (focused < 0)
          focused = links.length;
        else
          focused %= links.length;
        if (isTAB)
          ev.preventDefault();
        $focus(links[focused], true);
      };
      let close = (ev) => {
        ev.stopPropagation();
        removeEventListener("click", close);
        $tabbable(links, false);
        div.setAttribute(attr, "false");
        btn.setAttribute(attr, "false");
        div.removeEventListener("keydown", arrows);
      };
      let open = (ev) => {
        ev.stopPropagation();
        addEventListener("click", close);
        $tabbable(links, true);
        div.setAttribute(attr, "true");
        btn.setAttribute(attr, "true");
        $focus(links[focused = 0], true);
        div.addEventListener("keydown", arrows);
      };
      btn.addEventListener("click", (ev) => {
        if (div.getAttribute(attr) === "true") {
          close(ev);
        } else {
          open(ev);
        }
      });
    }
  });
}

// ns-hugo:/Users/Shubhanjan/Desktop/developers.squadcast.com/assets/contents.ts
function toc() {
  let target = document.querySelector("ul.DocsTableOfContents");
  let article = target && document.querySelector("article.DocsMarkdown");
  if (article) {
    let headers = article.querySelectorAll("h2,h3,h4");
    let i = 0, tmp, last, container = target;
    if (!headers.length)
      return;
    for (; i < headers.length; i++) {
      tmp = headers[i];
      if (tmp.nodeName === "H2") {
        container = target;
      } else if (last && tmp.nodeName > last.h) {
        container = last.appendChild(document.createElement("ul"));
      } else if (last && tmp.nodeName < last.h) {
        container = container.parentElement || target;
      }
      last = document.createElement("li");
      let text = tmp.lastElementChild.textContent.trim();
      last.innerHTML = `<a class="DocsTableOfContents-link" href="#${tmp.id}">${text}</a>`;
      container.appendChild(last);
      last.h = tmp.nodeName;
    }
    target.removeAttribute("hidden");
  }
}

// node_modules/fromnow/dist/fromnow.mjs
var MIN = 6e4;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var YEAR = DAY * 365;
var MONTH = DAY * 30;
function fromnow_default(date, opts) {
  opts = opts || {};
  var del = new Date(date).getTime() - Date.now();
  var abs = Math.abs(del);
  if (abs < MIN)
    return "just now";
  var periods = {
    year: abs / YEAR,
    month: abs % YEAR / MONTH,
    day: abs % MONTH / DAY,
    hour: abs % DAY / HOUR,
    minute: abs % HOUR / MIN
  };
  var k, val, keep = [], max = opts.max || MIN;
  for (k in periods) {
    if (keep.length < max) {
      val = Math.floor(periods[k]);
      if (val || opts.zero) {
        keep.push(val + " " + (val == 1 ? k : k + "s"));
      }
    }
  }
  k = keep.length;
  max = ", ";
  if (k > 1 && opts.and) {
    if (k == 2)
      max = " ";
    keep[--k] = "and " + keep[k];
  }
  val = keep.join(max);
  if (opts.suffix) {
    val += del < 0 ? " ago" : " from now";
  }
  return val;
}

// ns-hugo:/Users/Shubhanjan/Desktop/developers.squadcast.com/assets/timeago.ts
function init() {
  let i = 0, tmp;
  let arr = document.querySelectorAll("time.relative");
  for (; i < arr.length; i++) {
    tmp = arr[i].getAttribute("datetime");
    if (tmp)
      arr[i].textContent = fromnow_default(tmp, { max: 1, suffix: true });
  }
}

// ns-hugo:/Users/Shubhanjan/Desktop/developers.squadcast.com/assets/navlinks.ts
function init2() {
  document.querySelectorAll(".DocsSidebar--nav-expand-collapse-button").forEach((btn) => {
    let item = btn.parentNode;
    if (item)
      btn.addEventListener("click", toggle);
    let div = item.querySelector("div");
    if (div && div.hasAttribute("is-expanded"))
      div.style.height = "auto";
  });
}
function toggle(ev) {
  let attr = "is-expanded";
  let item = ev.target.closest("li");
  if (item.timer)
    item.timer = clearTimeout(item.timer);
  let isExpanded = item.hasAttribute(attr);
  let aria = item.querySelector("span[is-visually-hidden]");
  aria.textContent = isExpanded ? "Expand" : "Collapse";
  let container = item.querySelector("div");
  container.className = "DocsSidebar--nav-item-collapse-container";
  container.style.cssText = "min-height:0px;transition-duration:400ms;";
  let sizes = [0, container.firstElementChild.clientHeight];
  let initial = +isExpanded;
  container.style.height = sizes[initial] + "px";
  let subnav = container.querySelector("ul");
  let items = subnav && subnav.querySelectorAll("li>a,li>button");
  if (items)
    $tabbable(items, !isExpanded);
  item.toggleAttribute(attr, !isExpanded);
  setTimeout(() => {
    container.style.height = sizes[1 - initial] + "px";
  }, 1);
  if (isExpanded) {
  } else {
    item.timer = setTimeout(() => {
      container.style.height = "auto";
      container.classList.add("DocsSidebar--nav-item-collapse-entered");
    }, 400);
  }
}

// <stdin>
(function() {
  init2();
  init();
  load();
  focus();
  mobile();
  dropdowns();
  copy();
  toc();
})();
