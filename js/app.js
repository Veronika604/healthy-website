// ---------- МЕНЮ ----------
const menus = [
  [
    {meal: "Завтрак", name:"Овсянка с ягодами", kcal:320, protein:10, fat:6, carbs:55, img:"images/oatmeal_berries.jpg"},
    {meal: "Обед", name:"Боул с киноа", kcal:450, protein:15, fat:12, carbs:65, img:"images/fish_kinoa.webp"},
    {meal: "Ужин", name:"Запечённые овощи", kcal:280, protein:6, fat:10, carbs:40, img:"images/roasted_vegies.jpg"}
  ],
  [
    {meal: "Завтрак", name:"Смузи боул", kcal:310, protein:8, fat:5, carbs:50, img:"images/smosie_bowl.jpg"},
    {meal: "Обед", name:"Салат с нутом", kcal:420, protein:18, fat:14, carbs:52, img:"images/nut.jpg"},
    {meal: "Ужин", name:"Тофу с овощами", kcal:300, protein:20, fat:10, carbs:30, img:"images/tofu.jpg"}
  ],
  [
    {meal: "Завтрак", name:"Йогурт с фруктами", kcal:290, protein:12, fat:4, carbs:48, img:"images/yogurt.jpg"},
    {meal: "Обед", name:"Куриный салат", kcal:480, protein:30, fat:18, carbs:40, img:"images/chicken_salad.jpg"},
    {meal: "Ужин", name:"Рататуй", kcal:310, protein:8, fat:12, carbs:35, img:"images/ratattoi.jpg"}
  ],
  [
    {meal: "Завтрак", name:"Авокадо-тост", kcal:350, protein:10, fat:20, carbs:30, img:"images/avocado_toast.jpg"},
    {meal: "Обед", name:"Лосось с киноа", kcal:500, protein:35, fat:20, carbs:40, img:"images/salmon.jpg"},
    {meal: "Ужин", name:"Суп-пюре из тыквы", kcal:260, protein:6, fat:8, carbs:38, img:"images/pumpkin_soup.jpg"}
  ]
];

// ---------- Текущий выбор ----------
let currentMenu = localStorage.getItem("currentMenu");
currentMenu = currentMenu ? parseInt(currentMenu) : 0;

// ---------- Функция отображения меню ----------
function showMenu() {
  const cards = document.querySelectorAll(".card");
  menus[currentMenu].forEach((item, i) => {
    if (!cards[i]) return;
    cards[i].querySelector("h3").innerText = item.meal;
    cards[i].querySelector("p").innerText = `${item.name} — ${item.kcal} ккал (Б:${item.protein}г, Ж:${item.fat}г, У:${item.carbs}г)`;
    cards[i].querySelector("img").src = item.img;
    cards[i].querySelector("img").alt = item.name;
  });
}

// ---------- Смена меню ----------
function changeMenu() {
  currentMenu = (currentMenu + 1) % menus.length;
  localStorage.setItem("currentMenu", currentMenu);
  showMenu();
}

// ---------- Загрузка ----------
document.addEventListener("DOMContentLoaded", showMenu);
// // ---------- МЕНЮ ----------
// // Теперь всего 4 меню
// const menus = [
//   [
//     {meal: "Завтрак", name:"Овсянка с ягодами", kcal:320, protein:10, fat:6, carbs:55, img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"},
//     {meal: "Обед", name:"Боул с киноа", kcal:450, protein:15, fat:12, carbs:65, img:"images/fish_kinoa.webp"},
//     {meal: "Ужин", name:"Запечённые овощи", kcal:280, protein:6, fat:10, carbs:40, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"}
//   ],
//   [
//     {meal: "Завтрак", name:"Смузи боул", kcal:310, protein:8, fat:5, carbs:50, img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"},
//     {meal: "Обед", name:"Салат с нутом", kcal:420, protein:18, fat:14, carbs:52, img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"},
//     {meal: "Ужин", name:"Тофу с овощами", kcal:300, protein:20, fat:10, carbs:30, img:"https://images.unsplash.com/photo-1617196035503-8e618a0e70d1"}
//   ],
//   [
//     {meal: "Завтрак", name:"Йогурт с фруктами", kcal:290, protein:12, fat:4, carbs:48, img:"https://images.unsplash.com/photo-1598300052647-3bb6d7e28985"},
//     {meal: "Обед", name:"Куриный салат", kcal:480, protein:30, fat:18, carbs:40, img:"https://images.unsplash.com/photo-1604908177526-07aa66fcb8b2"},
//     {meal: "Ужин", name:"Рататуй", kcal:310, protein:8, fat:12, carbs:35, img:"https://images.unsplash.com/photo-1600891963921-3b18f80db56e"}
//   ],
//   [
//     {meal: "Завтрак", name:"Авокадо-тост", kcal:350, protein:10, fat:20, carbs:30, img:"https://images.unsplash.com/photo-1550304943-60c0ee9633f2"},
//     {meal: "Обед", name:"Лосось с киноа", kcal:500, protein:35, fat:20, carbs:40, img:"https://images.unsplash.com/photo-1617196035647-1234567890ab"},
//     {meal: "Ужин", name:"Суп-пюре из тыквы", kcal:260, protein:6, fat:8, carbs:38, img:"https://images.unsplash.com/photo-1600891963999-3c20f80db56e"}
//   ]
// ];

// // ---------- Получение текущего меню из localStorage ----------
// let currentMenu = localStorage.getItem("currentMenu");
// currentMenu = currentMenu ? parseInt(currentMenu) : 0;

// // ---------- Функция отображения меню ----------
// function showMenu() {
//   const cards = document.querySelectorAll(".card");
//   menus[currentMenu].forEach((item, i) => {
//     if (!cards[i]) return; // защита на случай, если карточек меньше
//     cards[i].querySelector("h3").innerText = item.meal;
//     cards[i].querySelector("p").innerText = `${item.name} — ${item.kcal} ккал (Б:${item.protein}г, Ж:${item.fat}г, У:${item.carbs}г)`;
//     cards[i].querySelector("img").src = item.img;
//   });
// }

// // ---------- Смена меню ----------
// function changeMenu() {
//   currentMenu = (currentMenu + 1) % menus.length;
//   localStorage.setItem("currentMenu", currentMenu); // сохраняем выбор
//   showMenu();
// }

// // ---------- Запуск при загрузке страницы ----------
// document.addEventListener("DOMContentLoaded", () => {
//   showMenu();
// });

// ---------- THREE.js 3D робот ----------
const container = document.getElementById("three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Свет
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// Материалы
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x6fa59a });
const headMaterial = new THREE.MeshStandardMaterial({ color: 0x3f6f63 });
const armMaterial = new THREE.MeshStandardMaterial({ color: 0x6fa59a });

// Тело
const body = new THREE.Mesh(new THREE.BoxGeometry(1,1.5,0.5), bodyMaterial);
scene.add(body);

// Голова
const head = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.7,0.7), headMaterial);
head.position.y = 1.1;
scene.add(head);

// Руки
const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.8,0.3), armMaterial);
leftArm.position.set(-0.8,0.25,0);
scene.add(leftArm);

const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.8,0.3), armMaterial);
rightArm.position.set(0.8,0.25,0);
scene.add(rightArm);

// Анимация
function animate(){
  requestAnimationFrame(animate);
  const t = Date.now() * 0.002;
  rightArm.rotation.z = Math.sin(t) * 0.5;
  leftArm.rotation.z = Math.cos(t*0.9)*0.2;
  body.position.y = Math.sin(t*0.5)*0.05;
  head.position.y = 1.1 + Math.sin(t*0.5)*0.05;
  renderer.render(scene,camera);
}
animate();

// Ресайз
window.addEventListener("resize", ()=> {
  camera.aspect = container.clientWidth/container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// ---------- Fade-in при скролле ----------
const faders = document.querySelectorAll('.fade-in-on-scroll');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
