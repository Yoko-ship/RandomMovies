import "./vibeMenu.css"
import { useState } from "react"


function Vibe(){

    const [isActive,setIsActive] = useState(false)
    
    const [inspire,setInspire] = useState(null);

    const [adventure,setAdventure] = useState(null);

    const [romantic,setRomantic] = useState(null);

    const [relax,setRelax] = useState(null)



    const inspiring = [
        {name: "Социальная сеть", link:"/vibe/social-network", picture:"https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/m/mqp5xwmbdyrt3a9.jpg"},
        {name: "Форрест Гамп", link:"/vibe/forrest-gump", picture:"https://pic.rutubelist.ru/video/5f/b4/5fb460577bc8350bd103b4ab8551b920.jpg"},
        {name: "Гладиатор", link:"/vibe/gladiator", picture:"https://pic.rutubelist.ru/video/f5/c5/f5c5a7133000fba03b379947e6363753.jpg"},
        {name: "Интерстеллар", link:"/vibe/interstellar", picture:"https://wallpaper.forfun.com/fetch/9d/9dfa49cd99347c1f21df21d3cf6c1c70.jpeg"},
        {name: "Чудо", link:"/vibe/Wonder", picture:"https://avatars.mds.yandex.net/i?id=fcf931e27de964c3801aa353deeda62a_l-4254007-images-thumbs&n=13"},
        {name: "Рокки", link:"/vibe/roccky", picture:"https://avatars.mds.yandex.net/i?id=8b35e6a787cdee9682a02b99ec59f119_l-8496495-images-thumbs&n=13"},
        {name: "День сурка", link:"/vibe/densurka", picture:"https://avatars.mds.yandex.net/i?id=e16f5165f87945db50831b1149a2a792999ad2bf-4937119-images-thumbs&n=13"},
        {name: "Стив Джобс", link:"/vibe/steevejobs", picture:"https://wallpaper.forfun.com/fetch/79/79657c1db730c2ff304d78c408d01274.jpeg"},
        {name: "Кунг-фу Панда", link:"/vibe/kung-fu-panda", picture:"https://avatars.mds.yandex.net/i?id=cfa2604ab0c5ed2e0fb0643d33fe3346_l-8494072-images-thumbs&n=13"},
        {name: "Собачья жизнь", link:"/vibe/sobachya-jizn", picture:"https://negrowhite.net/uploads/2019/05/larazondeestarcontigo_top_01.jpg"},
    ];

    const adventuring = [
        {name: "Индиана Джонс и Колесо Судьбы",link:"/vibe/indiana-djons-and-koleso-sydbi",picture:"https://avatars.mds.yandex.net/i?id=c6dc0ce1902f0e3f79c58655a7fab69b_l-10491665-images-thumbs&n=13"},
        {name: "Джуманджи: Новый уровень",link:"/vibe/djumanji-noviy-uroven",picture:"https://www.zastavki.com/pictures/1920x1080/2020Movies_The_main_characters_of_the_movie_Jumanji__A_New_Level__2019_138818_23.jpg"},
        {name: "Аватар Путь воды",link:"/vibe/avatar-way-of-water",picture:"https://cdn.mos.cms.futurecdn.net/WeCDDaq43Lo3FKWsdhvNTN-1920-80.jpg"},
        {name: "Мулан",link:"/vibe/mulan",picture:"https://avatars.mds.yandex.net/i?id=8fc226f43708054a64c0d78ab22bb97a_l-8231149-images-thumbs&n=13"},
        {name: "Шан-Чи",link:"/vibe/shan-chi",picture:"https://avatars.mds.yandex.net/i?id=3339a739c92f5885cd1ab856f67901ab_l-4078174-images-thumbs&n=13"},
        {name: "Годзилла против Конга",link:"/vibe/godzilla-protiv-konga",picture:"https://vkplay.ru/hotbox/content_files/news/2021/03/17/0ecacb933eeb42b09e880c7ddcdb9b5a.jpg"},
        {name: "Cкуби-Ду",link:"/vibe/Scoob",picture:"https://pushinka.top/uploads/posts/2023-04/1681368369_pushinka-top-p-skubi-dubi-du-krasivo-38.jpg"},
        {name: "Капитан Марвел",link:"/vibe/capitan-Marvel",picture:"https://avatars.mds.yandex.net/i?id=52c3482308d10917cb4856b5a3cc7a55_l-13101529-images-thumbs&n=13"},
        {name: "Черная Вдова",link:"/vibe/black-widow",picture:"https://sm.ign.com/t/ign_fr/screenshot/default/black-widow-movie-official_q3un.2560.jpg"},
        {name: "Пираты Карибского Моря",link:"/vibe/Pirates of the Caribbean",picture:"https://avatars.mds.yandex.net/i?id=ef04f92749fd44d9a16df95952d20c92_l-5297839-images-thumbs&n=13"},
    ]

    const romanturing =[
        {name:"После",link:"/vibe/Posle",picture:"https://tv.rambler.ru/epg/pic/6042503?img-format=auto&img-1-resize=width:220,height:125,fit:cover&img-2-filter=sharpen"},
        {name:"Пятьдесят оттенков серого",link:"/vibe/Fifty Shades of Grey",picture:"https://avatars.mds.yandex.net/i?id=13f1435e1e418ebb84e9cf80dcac5d6c_l-5228110-images-thumbs&n=13"},
        {name:"Таймлесс",link:"/vibe/timeless",picture:"https://avatars.mds.yandex.net/i?id=9f0dca90bc7eb294fcb98370944d3147_l-5273084-images-thumbs&n=13"},
        {name:"Дневник Памяти",link:"/vibe/The Notebook",picture:"https://avatars.mds.yandex.net/i?id=fa2ee095943cdcd3a17ab376cd1e6699_l-5854625-images-thumbs&n=13"},
        {name:"Один день",link:"/vibe/One-Day",picture:"https://m.media-amazon.com/images/S/pv-target-images/c16f37633b6d90c2d86731e1a7334c915656c3fa4a62175fe1fa25b9c82007ff.jpg"},
        {name:"Чарли и шоколадная фабрика",link:"/vibe/Charlie and the Chocolate Factory",picture:"https://avatars.mds.yandex.net/i?id=e93cbcd06bdf59947554d7e81a5b69d0_l-4936722-images-thumbs&n=13"},
        {name:"Cумерки",link:"/vibe/Twilight",picture:"https://furman.top/uploads/posts/2024-03/1710783312_furman-top-p-zastavka-sumerki-7.jpg"},
        {name:"Титаник",link:"/vibe/Titanik",picture:"https://wallpapers.com/images/hd/titanic-pictures-wp7as1bg9ezazclj.jpg"},
        {name:"Ромео и Джульетта",link:"/vibe/Romeo and Juliet",picture:"https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/382b7a698bf222888894a71cde607c11/1920x1080"},
        {name:"После2",link:"/vibe/Posle",picture:"https://tv.rambler.ru/epg/pic/6042503?img-format=auto&img-1-resize=width:220,height:125,fit:cover&img-2-filter=sharpen"},
    ]

    const relaxing = [
        {name:"Зверополис",link:"/vibe/Zootopia",picture:"https://avatars.mds.yandex.net/i?id=e3d45908a6a9155878551385629cffd3_l-5232642-images-thumbs&n=13"},
        {name:"Дневник Бриджит Джонс",link:"/vibe/Bridget Jones's Diary",picture:"https://avatars.mds.yandex.net/i?id=00a602bf7110e1fb6e03e9fc3257c58f_l-7764851-images-thumbs&n=13"},
        {name:"Книжный клуб",link:"/vibe/Book Club",picture:"https://avatars.mds.yandex.net/i?id=7868d5ba58e6c7e4d26be814ed759d4d_l-9989050-images-thumbs&n=13"},
        {name:"Ешь,молис,люби",link:"/vibe/Eat Pray Love",picture:"https://i.pinimg.com/736x/e2/3f/22/e23f22ad59a5f78c49aff6fb5b638428.jpg"},
        {name:"Мой ужасный сосед",link:"/vibe/A Man Called Otto",picture:"https://sun1-83.userapi.com/Fyf59gP6AZ0aZX9j7YNi1ZYgCrcUxRLZeE3yhw/oY2er9c23NM.jpg"},
    ]




    const randomHandler = ()=>{
        const randomIndex = Math.floor(Math.random() * inspiring.length);
        return inspiring[randomIndex]
    }

    const randomAdventure = ()=>{
        const randomIndexAdventure = Math.floor(Math.random() * adventuring.length);
        return adventuring[randomIndexAdventure]
    }

    const randomRomantic = ()=>{
        const randomIndexRomantic = Math.floor(Math.random() * romanturing.length)
        return romanturing[randomIndexRomantic]
    }

    const randomRelaxing = ()=>{
        const randomIndexRelaxing = Math.floor(Math.random() * relaxing.length);
        return relaxing[randomIndexRelaxing]
    }


    const handleButton = ()=>{
        setInspire(randomHandler());
        setIsActive(true)
        setAdventure(null)
        setRomantic(null)
    }

    const handleAdventure = ()=>{
        setAdventure(randomAdventure())
        setIsActive(true)
        setInspire(null)
        setRomantic(null)

    }

    const handleRomantic = ()=>{
        setRomantic(randomRomantic())
        setIsActive(true)
        setInspire(null)
        setAdventure(null)
    }

    const handleRelaxing = ()=>{
        setRelax(randomRelaxing());
        setIsActive(true)
        setInspire(null);
        setAdventure(null);
        setRomantic(null);
    }
   

    function closingButton(){
        setIsActive(false);
        setInspire(null);
        setAdventure(null);
        setRomantic(null);
        setRelax(null);
    }



    return(
        <>
            <div className="main-vibe">
                <h1>Вайб-Чойс: Почувствуй фильм!</h1>
                <div className="span-vibe">
                    <span>
                    Когда заходишь на ВайбКино, тебе больше не нужно листать бесконечные каталоги в поисках того самого фильма.<br/>
                    Просто выбери свой вайб, и мы подкинем тебе кино, которое идеально впишется в твое настроение.<br/>
                    Чувствуешь себя chill или хочется чего-то мощного? ВайбЧойс подберет фильм, который зайдет тебе прямо в сердце.
                    </span>
                </div>
            </div>

            <div className="vibe-bar">
                <div className="grid-buttons">
                    <button onClick={handleButton}>Вдохновляющий</button>
                    <button onClick={handleAdventure}>Приключенческий</button>
                    <button onClick={handleRomantic}>Романтический</button>
                    <button onClick={handleRelaxing}>Расслабленный</button>
                    <button>Мрачный</button>
                    <button>Весёлый</button>
                </div>
            </div>

            {inspire &&(
            <div className={`card ${isActive ? 'active': ''}`}>
                    <div className="card-content">
                        <button onClick={closingButton} className="closed">X</button>
                        <img src={inspire.picture} alt={inspire.name}/><br/>
                        <span>{inspire.name}</span>  
                        <a href={inspire.link} target="_blank" rel="noopener noreferrer"><p>Ссылка</p></a>    
                    </div>
            </div>

            
            )}

            {adventure &&(
            <div className={`card ${isActive ? 'active': ''}`}>
                    <div className="card-content">
                        <button onClick={closingButton} className="closed">X</button>
                        <img src={adventure.picture} alt={adventure.name}/><br/>
                        <span>{adventure.name}</span>  
                        <a href={adventure.link} target="_blank" rel="noopener noreferrer"><p>Ссылка</p></a>    
                    </div>
            </div>
            
            )}

            {romantic &&(
            <div className={`card ${isActive ? 'active': ''}`}>
                    <div className="card-content">
                        <button onClick={closingButton} className="closed">X</button>
                        <img src={romantic.picture} alt={romantic.name}/><br/>
                        <span>{romantic.name}</span>  
                        <a href={romantic.link} target="_blank" rel="noopener noreferrer"><p>Ссылка</p></a>    
                    </div>
            </div>
            )}
            
            {relax &&(
            <div className={`card ${isActive ? 'active': ''}`}>
                    <div className="card-content">
                        <button onClick={closingButton} className="closed">X</button>
                        <img src={relax.picture} alt={relax.name}/><br/>
                        <span>{relax.name}</span>  
                        <a href={relax.link} target="_blank" rel="noopener noreferrer"><p>Ссылка</p></a>    
                    </div>
            </div>
            )}
        </>
    )
}

export default Vibe