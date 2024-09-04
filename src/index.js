import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const RouteData = [
  {path:"/movies/deadpool3",src:"https://rutube.ru/play/embed/1f42612dac697079368f3dbc88a6b7d6/"},
  {path:"/movies/badguys",src:"https://rutube.ru/play/embed/12ac4ab8ea01c183a97decc7019ea492/"},
  {path:"movies/tihoe-mesto-den-pervyi",src:"https://rutube.ru/play/embed/646d4bfab8ceafb6e01bd01c16dcbf93/"},
  {path:"/movies/smerch-2",src:"https://rutube.ru/play/embed/2dc294faf2ea21a90460f3c85134e8d1/"},
  {path:"/movies/furiosa-hroniki-bezumnogo-maksa",src:"https://rutube.ru/play/embed/208028ef0f49462ce9dbb18460cf2a5f/"},
  {path:"/movies/planeta-obezyan-novoe-tsarstvo",src:"https://rutube.ru/play/embed/6076154248ddf71005ca27c7fe2bc4be/"},
  {path:"/movies/garfild-2024",src:"https://rutube.ru/play/embed/b6ec4867b358ef5ed1bc14e73aeca30c/"},
  {path:"/movies/na-krayu-zemli-2023",src:"https://rutube.ru/play/embed/5c3cd09e3e3d24d8b868807c46db326a/?t=23"},
  {path:"/movies/golovolomka-2",src:"https://rutube.ru/play/embed/5ae8c04c684f1724fd3a9ac86d6406cd/"},
  {path:"/movies/golovolomka-2015",src:"https://rutube.ru/play/embed/d9364562caf7fcec637bc9c0f40f44be"},
  {path:"/movies/baikery-2023",src:"https://rutube.ru/play/embed/5aed1e43d8121eae5850168350569050/?t=22"},
  {path:"/movies/zheleznyi-chelovek-2",src:"https://rutube.ru/play/embed/5bbbcbe68318b0ff935bbfa0e23ecb8f/"},
  {path:"/movies/temnyi-rytsar",src:"https://rutube.ru/play/embed/74fb252e6f3a0e6eaedb0909dc6eaf29/"},
  {path:"/movies/vonka",src:"https://rutube.ru/play/embed/4359442a94657a7ea671d397685725f5/"},
  {path:"/movies/tachki-2",src:"https://rutube.ru/play/embed/c1200268257b04a80733e2a86af63667/"},
  {path:"/movies/transformery-2007",src:"https://rutube.ru/play/embed/bc4103bc1dd2b38d5393fad14485686a/"},
  {path:"/movies/logan-2017",src:"https://rutube.ru/play/embed/d05f1c7f60beaddbd1a18b3681d8d405/"},
  {path:"/movies/harry-potter1",src:"https://rutube.ru/play/embed/cb7b3c0aad5c8a1e5cf5d22f59cc65b3/"},
  {path:"/movies/avengers-final",src:"https://rutube.ru/play/embed/d51829c9977d7fd1c1b31faca955a2c8/"}
  
]


const RouteVibeData = [
  {path:"/vibe/social-network",src:"https://rutube.ru/play/embed/73dd2e99b442b1eb61c570108817813b/"},
  {path:"/vibe/forrest-gump",src:"https://rutube.ru/play/embed/48a7dd6b620b30713b614f38c00a4739/"},
  {path:"/vibe/gladiator",src:"https://rutube.ru/play/embed/4282c18411899128b37d1dda827bef97//"},
  {path:"/vibe/interstellar",src:"https://rutube.ru/play/embed/17465fc541700b94ebd5648423675100/"},
  {path:"/vibe/Wonder",src:"https://rutube.ru/play/embed/262c7314db26b07893e67c7cfafa4d12/"},
  {path:"/vibe/roccky",src:"https://rutube.ru/play/embed/5784ba796f5da4d17237a64f34251659/"},
  {path:"/vibe/densurka",src:"https://rutube.ru/play/embed/7137fdcf6c797b32d455cc512a02a23b/"},
  {path:"/vibe/steevejobs",src:"https://rutube.ru/play/embed/fca037a881b56238b042b36f2cf153e9/"},
  {path:"/vibe/kung-fu-panda",src:"https://rutube.ru/play/embed/f2df15b7cc3134ace8b5ea911e7fccfc/"},
  {path:"/vibe/sobachya-jizn",src:"https://rutube.ru/play/embed/71fe1d918c62bebc2252e55c96abca69/"},
  {path:"/vibe/indiana-djons-and-koleso-sydbi",src:"https://rutube.ru/play/embed/66a34b0f604ae337d3c12b032dc67734/"},
  {path:"/vibe/djumanji-noviy-uroven",src:"https://rutube.ru/play/embed/260d0e9e2dcc49a4166e400646b972a8/"},
  {path:"/vibe/avatar-way-of-water",src:"https://rutube.ru/play/embed/fe7091148b2ff0d71e77474ab00edeec/"},
  {path:"/vibe/mulan",src:"https://rutube.ru/play/embed/22bf36cc500667f1d47371f9a693b553/"},
  {path:"/vibe/shan-chi",src:"https://rutube.ru/play/embed/7fa720b03721c849e597e4eaf7db9b99/"},
  {path:"/vibe/godzilla-protiv-konga",src:"https://rutube.ru/play/embed/c066d2de28ba0ad1696e12ca8a708b9a/"},
  {path:"/vibe/Scoob",src:"https://rutube.ru/play/embed/9d36de129dc6256600145f79cc616a12/"},
  {path:"/vibe/capitan-Marvel",src:"https://rutube.ru/play/embed/c6803543d290cd04d3002799a6a8bf1c/"},
  {path:"/vibe/black-widow",src:"https://rutube.ru/play/embed/d979aa5016a1fad18a38e4351786f53b/"},
  {path:"/vibe/Pirates of the Caribbean",src:"https://rutube.ru/play/embed/9be840192ca99761d9f704b1dcec6e34/"},
  {path:"/vibe/Posle",src:"https://rutube.ru/play/embed/5f9e0814034ee885176955c9037532cd/"},
  {path:"/vibe/Fifty Shades of Grey",src:"https://rutube.ru/play/embed/e89241074805fa7adfe2462b50e1293d/"},
  {path:"/vibe/timeless",src:"https://rutube.ru/play/embed/90f68abcf40a55d86b96d90d1459e95e/"},
  {path:"/vibe/The Notebook",src:"https://rutube.ru/play/embed/b6000df41b71d9d6470ea58789fc0cf2/"},
  {path:"/vibe/One-Day",src:"https://rutube.ru/play/embed/9f91e68cdbeddba4a4a0044d489c370b/"},
  {path:"/vibe/Charlie and the Chocolate Factory",src:"https://rutube.ru/play/embed/5f9e0814034ee885176955c9037532cd/"},
  {path:"/vibe/Twilight",src:"https://rutube.ru/play/embed/351a513f33477a16eca825d44c675fa9/"},
  {path:"/vibe/Titanik",src:"https://rutube.ru/play/embed/7a2bff0fba2b8cc93ccbdf3da064d94a/"},
  {path:"/vibe/Zootopia",src:"https://rutube.ru/play/embed/2319c1c20e8b5c8228f1afc098aa30a7/"},
  {path:"/vibe/Bridget Jones's Diary",src:"https://rutube.ru/play/embed/535246c03cadea7f308eabf349d39c19//"},
  {path:"/vibe/Book Club",src:"https://rutube.ru/play/embed/de8101a306aa39ede0ab5fe4d11dbbfb/"},
  {path:"/vibe/Eat Pray Love",src:"https://rutube.ru/play/embed/a3ce15d51e5132bd9afd6783dd3f3b8b/"},
  {path:"/vibe/A Man Called Otto",src:"https://rutube.ru/play/embed/e937a9be51059d012871ddc2d235b02c/"},
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App filter={RouteData} data={RouteVibeData}/>
  </React.StrictMode>
);

