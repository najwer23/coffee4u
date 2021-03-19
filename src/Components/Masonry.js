import '../CSS/Masonry.css';

class Masonry {
    constructor(params) {
        this.grid = document.querySelector(params.grid);
        this.items = document.querySelectorAll(params.items);
        this.content = params.content;
    }

    resizeAllGridItems() {
        for (let i = 0; i < this.items.length; i++) {
            this.resizeGridItem(this.items[i]);
        }
    }

    resizeGridItem(item) {
        let rowHeight = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-auto-rows'));
        let rowGap = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-row-gap'));
        let rowSpan = Math.ceil((item.querySelector(this.content).getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
        item.style.visibility = "visible";
    }
}

export default Masonry;



// Special thanks:
// https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
// https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
