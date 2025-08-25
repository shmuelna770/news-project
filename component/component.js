import { getData } from "../js/dal.js"


function creatNewsCard(titleText, editorName, imgUrl, linkUrl) {

    const main = document.getElementById('root')

    const title = document.createElement('a');
    title.classList.add("truncate")
    title.textContent = titleText
    title.href = linkUrl



    const editor = document.createElement('h4');
    editor.textContent = editorName;

    const image = document.createElement('img');
    image.src = imgUrl;

    const card = document.createElement('div');
    card.classList.add('card');

    card.append(title, image, editor);
    main.appendChild(card)

}


async function loadData() {
    const articles = await getData()
    console.log('article', articles);


    articles?.forEach(article => {
        if (article.author && article.title && article.urlToImage) {
            creatNewsCard(article.title, article.author, article.urlToImage);
        }

    });
}
await loadData()

function creatNavBar() {

    const nav = document.createElement('nav')

    const home = document.createElement('a')
    home.textContent = "home"
    home.href="#home"

    const creat = document.createElement('a')
    creat.textContent = "add post"
    creat.href='#create'

    const news = document.createElement('a')
    news.textContent = "news"
    news.href='#news'

    nav.append(home, creat, news)
    document.body.prepend(nav)
}


creatNavBar()


// const root = document.getElementById('root');
// const card1 = creatNewsCard("hello1","https://www.prog.co.il/attachments/1-jpg.715018/", "free text1", "shmuel1" );
// const card2 = creatNewsCard("hello2","https://www.prog.co.il/attachments/1-jpg.715018/", "free text2", "shmuel2" );
// const card3 = creatNewsCard("hello3", "free text3", "shmuel3", "https://www.prog.co.il/attachments/1-jpg.715018/");
// const card4 = creatNewsCard("hello4", "free text4", "shmuel4", "https://www.prog.co.il/attachments/1-jpg.715018/");
// const card5 = creatNewsCard("hello4", "free text4", "shmuel4", "https://www.prog.co.il/attachments/1-jpg.715018/");
// const card6 = creatNewsCard("hello4", "free text4", "shmuel4", "https://www.prog.co.il/attachments/1-jpg.715018/");
// const card7 = creatNewsCard("hello4", "free text4", "shmuel4", "https://www.prog.co.il/attachments/1-jpg.715018/");
// const card8 = creatNewsCard("hello4", "free text4", "shmuel4", "https://www.prog.co.il/attachments/1-jpg.715018/");
// root.append(card1, card2, card3, card4,card5,card6,card7,card8);