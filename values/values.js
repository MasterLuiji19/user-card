let linkArr = document.querySelectorAll('.menu-likes__item');
let infoBlock = document.querySelector('.values-info');

for (let i = 0; i < linkArr.length; i++)
{
    linkArr[i].addEventListener('click', (event) =>
    {
        infoBlock.style.display = 'block'
        for (let i = 0; i < linkArr.length; i++)
        {
            linkArr[i].style.display = 'none';
        }
        event.currentTarget.style.display = 'flex';
    });
}
