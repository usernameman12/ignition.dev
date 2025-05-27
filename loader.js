// loader.js
(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const commands = {
    select(id, selector) {
      ignition._elements[id] = $(selector);
      console.log(`Selected "${selector}" as "${id}"`);
    },

    html(id, content) {
      const el = ignition._elements[id];
      if (el) el.innerHTML = content;
    },

    text(id, content) {
      const el = ignition._elements[id];
      if (el) el.textContent = content;
    },

    style(id, styles) {
      const el = ignition._elements[id];
      if (el) Object.assign(el.style, styles);
    },

    show(id) {
      const el = ignition._elements[id];
      if (el) el.style.display = "";
    },

    hide(id) {
      const el = ignition._elements[id];
      if (el) el.style.display = "none";
    },

    toggle(id) {
      const el = ignition._elements[id];
      if (el) {
        el.style.display = (el.style.display === "none") ? "" : "none";
      }
    },

    addClass(id, className) {
      const el = ignition._elements[id];
      if (el) el.classList.add(className);
    },

    removeClass(id, className) {
      const el = ignition._elements[id];
      if (el) el.classList.remove(className);
    },

    toggleClass(id, className) {
      const el = ignition._elements[id];
      if (el) el.classList.toggle(className);
    },

    on(id, event, handler) {
      const el = ignition._elements[id];
      if (el) el.addEventListener(event, handler);
    },

    off(id, event, handler) {
      const el = ignition._elements[id];
      if (el) el.removeEventListener(event, handler);
    },

    create(id, tag = "div", props = {}) {
      const el = document.createElement(tag);
      Object.assign(el, props);
      ignition._elements[id] = el;
      console.log(`Created <${tag}> as "${id}"`);
    },

    append(id, parentSelector) {
      const el = ignition._elements[id];
      const parent = $(parentSelector);
      if (el && parent) parent.appendChild(el);
    },

    remove(id) {
      const el = ignition._elements[id];
      if (el) el.remove();
    },

    list() {
      console.table(ignition._elements);
    },

    attr(id, attrName, value) {
      const el = ignition._elements[id];
      if (!el) return;
      if (value === undefined) return el.getAttribute(attrName);
      el.setAttribute(attrName, value);
    },

    css(selector, styleObj) {
      $$(selector).forEach(el => Object.assign(el.style, styleObj));
    },

    run(fn) {
      fn(ignition._elements);
    }
  };

  Object.assign(ignition, commands);
})();
