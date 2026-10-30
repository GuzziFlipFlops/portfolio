const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const aliases = {
  teams: 'frc-team-365',
  projects: 'garden-rover',
  software: 'ios-accessibility'
};

function activateTab(tab, { focus = false, updateUrl = true } = {}) {
  const panelId = tab.getAttribute('aria-controls');
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => { panel.hidden = panel.id !== panelId; });
  if (focus) tab.focus();
  if (updateUrl) history.replaceState(null, '', '#' + panelId);
}

function tabFromHash() {
  const hash = location.hash.slice(1);
  return tabs.find((tab) => tab.getAttribute('aria-controls') === (aliases[hash] || hash));
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {
    activateTab(tab);
    if (event.detail > 0 && window.matchMedia('(max-width: 640px)').matches) {
      document.getElementById('evidence').scrollIntoView({ block: 'start' });
    }
  });
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(tabs[next], { focus: true });
  });
});

window.addEventListener('hashchange', () => {
  const tab = tabFromHash();
  if (tab) activateTab(tab, { updateUrl: false });
});
activateTab(tabFromHash() || tabs[0], { updateUrl: false });
