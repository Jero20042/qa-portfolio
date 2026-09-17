const content = {
  ru: {
    title: 'Артём Стрельцов — Automation QA Engineer',
    nav: ['Обо мне', 'Опыт', 'Стек', 'Контакты'], contact: 'Связаться', available: 'Открыт к удалённым предложениям',
    role: 'Middle+/Senior AQA (Java) <span>/</span> 4+ года опыта',
    intro: 'Тестирую сложные микросервисные и банковские продукты: строю автотесты, настраиваю CI/CD и нахожу проблемы до того, как их увидит пользователь.',
    write: 'Написать мне', view: 'Смотреть опыт', relocation: 'готов к релокации', current: 'текущая роль', logs: 'логи и тестовые данные',
    labels: ['01 / Профиль', '02 / Путь', '03 / Компетенции', '04 / Образование'],
    aboutTitle: 'Тестирование — это<br>не финальный этап.<br><em>Это культура команды.</em>',
    about: ['Automation QA Engineer на Java с опытом в сложных микросервисных и банковских продуктах. Уверенно работаю с UI, API, базами данных, брокерами сообщений и пайплайнами.', 'Помогаю командам выпускать изменения быстро, не жертвуя качеством: от тест-дизайна и диагностики до инфраструктуры и внедрения у заказчика. Ищу удалённую роль с возможностью работать из-за рубежа.'],
    stats: ['лет в QA', 'компании', 'и интеграции'], experienceTitle: 'Опыт, который<br><em>можно проверить.</em>',
    dates: ['08.2025 — сейчас', '12.2024 — 08.2025', '02.2024 — 12.2024', '02.2021 — 06.2022'],
    roles: ['Senior Automation QA', 'Инженер по тестированию', 'Младший инженер по тестированию', 'Асессор-тестировщик'],
    jobs: ['Автоматизация UI, API и интеграций на Java; развитие тестовой инфраструктуры, CI/CD-пайплайнов и тестовых данных.', 'Банковское ПО и процессинги: UI/API, тестовые стенды, БД, интеграции, тест-дизайн и автотесты на C# и Java. Участие во внедрении у заказчиков, включая зарубежные командировки.', 'Функциональное и интеграционное тестирование, документация, API и поддержка автотестов.', 'Ручное тестирование сервисов и мобильных приложений, тестовая документация, API и Selenium WebDriver.'],
    skillsTitle: 'Стек для<br><em>надёжных релизов.</em>', skillsDescription: 'Подбираю инструменты под задачу и поддерживаю тесты так, чтобы они были полезны команде, а не просто «зелёными».', skillHeads: ['Автоматизация', 'Системы и API', 'Инфраструктура', 'Диагностика и данные'],
    education: ['Высшее — Экономист', 'Программирование в компьютерных системах — Техник-программист', 'Курсы QA и Java'], footerEyebrow: 'Есть интересная задача?', footerTitle: 'Давайте сделаем<br><em>качественно.</em>', hh: 'Резюме на HH.ru', network: 'Моя сетка'
  },
  en: {
    title: 'Artem Streltsov — Automation QA Engineer',
    nav: ['About', 'Experience', 'Stack', 'Contacts'], contact: 'Get in touch', available: 'Open to remote opportunities',
    role: 'Middle+/Senior AQA (Java) <span>/</span> 4+ years of experience',
    intro: 'I test complex microservice and banking products: build automated tests, configure CI/CD and find issues before users do.',
    write: 'Contact me', view: 'View experience', relocation: 'open to relocation', current: 'current role', logs: 'logs and test data',
    labels: ['01 / Profile', '02 / Journey', '03 / Capabilities', '04 / Education'],
    aboutTitle: 'Testing is not<br>the final stage.<br><em>It is a team culture.</em>',
    about: ['Java Automation QA Engineer with experience in complex microservice and banking products. I work confidently across UI, API, databases, message brokers and pipelines.', 'I help teams ship quickly without sacrificing quality: from test design and diagnostics to infrastructure and client-side implementations. I am looking for a remote role that can be performed internationally.'],
    stats: ['years in QA', 'companies', 'and integrations'], experienceTitle: 'Experience you<br><em>can rely on.</em>',
    dates: ['08.2025 — present', '12.2024 — 08.2025', '02.2024 — 12.2024', '02.2021 — 06.2022'],
    roles: ['Senior Automation QA', 'QA Engineer', 'Junior QA Engineer', 'QA Assessor'],
    jobs: ['Java UI, API and integration automation; development of test infrastructure, CI/CD pipelines and test data.', 'Banking software and processing systems: UI/API, test environments, databases, integrations, test design and C#/Java automation. Participated in client deployments, including international business trips.', 'Functional and integration testing, documentation, API testing and automated-test maintenance.', 'Manual testing of services and mobile applications, test documentation, API testing and Selenium WebDriver.'],
    skillsTitle: 'A stack for<br><em>reliable releases.</em>', skillsDescription: 'I select tools for the problem at hand and maintain tests so they serve the team, not merely stay green.', skillHeads: ['Automation', 'Systems & API', 'Infrastructure', 'Diagnostics & data'],
    education: ['Higher education — Economist', 'Computer Systems Programming — Programmer Technician', 'QA and Java courses'], footerEyebrow: 'Have an interesting challenge?', footerTitle: 'Let’s make it<br><em>reliable.</em>', hh: 'HH.ru resume', network: 'My network'
  }
};

const select = (selector) => [...document.querySelectorAll(selector)];
const languageSwitch = document.createElement('div');
languageSwitch.className = 'language-switch';
languageSwitch.setAttribute('role', 'group');
languageSwitch.setAttribute('aria-label', 'Language');
languageSwitch.innerHTML = '<button class="active" type="button" data-language="ru">RU</button><button type="button" data-language="en">EN</button>';
document.querySelector('.nav-contact').before(languageSwitch);

const linkedIcon = '<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8 18H5V9h3v9ZM6.5 7.7A1.75 1.75 0 1 1 6.5 4a1.75 1.75 0 0 1 0 3.7ZM19 18h-3v-4.4c0-1.1 0-2.5-1.5-2.5S13 12.3 13 13.5V18h-3V9h2.9v1.2h.1A3.2 3.2 0 0 1 15.9 8.7c3.1 0 3.6 2 3.6 4.7V18Z"/></svg>';
const contacts = document.querySelector('.contacts');
contacts.insertAdjacentHTML('beforeend', `<a class="contact-link" href="https://www.linkedin.com/in/artem-streltsov-697825429" target="_blank" rel="noreferrer">${linkedIcon}LinkedIn <span>↗</span></a><a class="contact-link hh-link" href="https://hh.ru/resume/3c95fa5eff0f1987b80039ed1f6c585962787a?from=share_ios" target="_blank" rel="noreferrer"><b class="contact-icon">hh</b><span></span> <span>↗</span></a><a class="contact-link network-link" href="https://set.ki/TSEzc7z" target="_blank" rel="noreferrer"><b class="contact-icon">↗</b><span></span> <span>↗</span></a>`);

function setLanguage(language) {
  const t = content[language];
  document.documentElement.lang = language; document.title = t.title;
  select('.nav nav a').forEach((el, i) => el.textContent = t.nav[i]);
  document.querySelector('.nav-contact').childNodes[0].textContent = `${t.contact} `;
  document.querySelector('.hero .eyebrow').lastChild.textContent = ` ${t.available}`;
  document.querySelector('h1').innerHTML = language === 'en' ? 'Artem<br><em>Streltsov</em>' : 'Артём<br><em>Стрельцов</em>';
  document.querySelector('.role').innerHTML = t.role; document.querySelector('.intro').textContent = t.intro;
  document.querySelector('.button-primary .button-label').textContent = t.write;
  document.querySelector('.button-text .button-label').textContent = t.view;
  document.querySelector('.card-bottom small').textContent = t.relocation;
  select('.section-label').forEach((el, i) => el.textContent = t.labels[i]);
  document.querySelector('.about-grid h2').innerHTML = t.aboutTitle; select('.about-text p').forEach((el, i) => el.textContent = t.about[i]);
  select('.stats span').slice(0, 3).forEach((el, i) => el.textContent = t.stats[i]);
  document.querySelector('.experience > h2').innerHTML = t.experienceTitle;
  select('.job').forEach((job, i) => { job.querySelector('.job-date').textContent = t.dates[i]; job.querySelector('h3').textContent = t.roles[i]; job.querySelector('.job-main > p:not(.job-company)').textContent = t.jobs[i]; });
  document.querySelector('.job-company span').textContent = t.current;
  document.querySelector('.skills-head h2').innerHTML = t.skillsTitle; document.querySelector('.skills-head > p').textContent = t.skillsDescription;
  select('.skill-grid h3').forEach((el, i) => el.textContent = t.skillHeads[i]);
  const diagnosticStack = document.querySelector('.skill-grid > div:last-child p');
  diagnosticStack.innerHTML = `PostgreSQL · MS SQL · MySQL · SQLite · JOIN · Fiddler · Charles · ${t.logs}`;
  select('.education-list p > span').forEach((el, i) => el.textContent = t.education[i]);
  document.querySelector('footer .eyebrow').textContent = t.footerEyebrow; document.querySelector('footer h2').innerHTML = t.footerTitle;
  document.querySelector('.footer-bottom span:first-child').textContent = language === 'en' ? '© 2026 Artem Streltsov' : '© 2026 Артём Стрельцов';
  document.querySelector('.hh-link span').textContent = t.hh; document.querySelector('.network-link span').textContent = t.network;
  select('[data-language]').forEach((button) => button.classList.toggle('active', button.dataset.language === language)); localStorage.setItem('portfolio-language', language);
}

select('[data-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem('portfolio-language') || 'ru');

const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add('in-view'); observer.unobserve(target); } }), { threshold: 0.12 });
select('.job, .stats div, .skill-grid div, .education-list > div').forEach((item, index) => { item.style.opacity = '0'; item.style.transform = 'translateY(14px)'; item.style.transition = `opacity .45s ${index % 4 * 80}ms ease, transform .45s ${index % 4 * 80}ms ease, padding .25s ease, background .25s ease`; observer.observe(item); });
const style = document.createElement('style'); style.textContent = '.in-view{opacity:1!important;transform:translateY(0)!important}.language-switch{display:flex;gap:3px;margin-left:auto;margin-right:24px;border:1px solid var(--line);padding:3px}.language-switch button{border:0;background:transparent;color:var(--muted);font:800 9px Space Grotesk;letter-spacing:.08em;padding:6px 7px;cursor:pointer}.language-switch button.active{background:var(--acid);color:var(--ink)}.contact-link{display:flex;align-items:center;gap:8px}.contact-icon{width:14px;height:14px;flex:0 0 14px;fill:currentColor;font:800 10px Space Grotesk}@media(max-width:750px){.language-switch{margin-left:auto;margin-right:0}.nav-contact{display:none}}'; document.head.appendChild(style);
