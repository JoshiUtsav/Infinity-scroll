const container = document.querySelector('.container');
let limitShow = 15;
let pageCount = 1;
let postCount = 1;


const geoPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limitShow}&_page=${pageCount}`);
    const data = await res.json();

    data.map((curElm, index) => {
        const htmldata = `
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curElm.title}</h2>
        <p class="post-info" >${curElm.body}/p>
        </div>`;


        container.insertAdjacentHTML('beforeend', htmldata);
    });
}

const showData = () => {
    setTimeout(() => {
        pageCount++;
        geoPost();
    }, 100);
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    console.log('scrollTop:', scrollTop);
    console.log('clientHeight:', clientHeight);
    console.log('scrollHeight:', scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showData();
    }
});
geoPost();