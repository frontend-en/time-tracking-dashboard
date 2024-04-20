

### Screenshot

![](./images/Screenshot_2.jpg)
![](./images/Screenshot_2-mob.jpg)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


```js

use closest

cards.addEventListener('click', (e) => {

  const buttonElem = e.target.closest('button')

  if (buttonElem === null) {
    e.stopPropagation()
    return
  }

  if (buttonElem) {

    removeChildren(cards)

    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    buttonElem.classList.add('active')

    const term = buttonElem.textContent.toLowerCase()

    renderAll(render, term)
  }
})
```


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/frontend-en)
