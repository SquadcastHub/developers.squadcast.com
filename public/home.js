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

// <stdin>
(function() {
  init();
  focus();
  mobile();
})();
