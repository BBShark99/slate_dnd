// import tool bar svg items.
import pointer from './assets/toolbar/pointer.svg';
import table from './assets/toolbar/table.svg';
import seats from './assets/toolbar/seats.svg';
import select from './assets/toolbar/select.svg';
import ga from './assets/toolbar/ga.svg';
import rectangle from './assets/toolbar/rectangle.svg';
import text from './assets/toolbar/text.svg';
import toilet from './assets/toolbar/toilet.svg';
import brush from './assets/toolbar/brush.svg';
import pen from './assets/toolbar/pen.svg';
import circle from './assets/toolbar/circle.svg';
import eclipse from './assets/toolbar/eclipse.svg';
import chair from './assets/toolbar/chair.svg';
import seatss from './assets/toolbar/seatss.svg';

// import colored eclipse
import black from './assets/eclipse/black.png';
import blue from './assets/eclipse/blue.png';
import brown from './assets/eclipse/brown.png';
import cyan from './assets/eclipse/cyan.png';
import green from './assets/eclipse/green.png';
import purple from './assets/eclipse/purple.png';
import red from './assets/eclipse/red.png';
import yellow from './assets/eclipse/yellow.png';

export const menu_items = [
    { alt: 'Select Tool', url: pointer, cursor: pointer },
    { alt: 'Table Tool', url: table, cursor: table },
    { alt: 'Seat Tool', url: seats, children: [
        { alt: 'One Seat Tool', url: eclipse , cursor: eclipse},
        { alt: 'Square Seats Tool', url: seatss,  cursor: eclipse},
        { alt: 'Seat Tool', url: chair,  cursor: chair }
    ] },
    { alt: 'Select Tool', url: select, children: [
        { alt: 'Brush Tool', url: brush, cursor: brush },
        { alt: 'Select Tool', url: select, cursor: pointer },
        { alt: 'Pen Tool', url: pen, cursor: pen }
    ] },
    { alt: 'GA Tool', url: ga, cursor: ga },
    { alt: 'Square Select Tool', url: rectangle , children: [
        { alt: 'Circle Select Tool', url: circle, cursor: pointer },
        { alt: 'Square Select Tool', url: rectangle, cursor: pointer }
    ]},
    { alt: 'Text Tool', url: text, cursor: text },
    { alt: 'Toilet Tool', url: toilet, cursor: toilet },
];

export const COLORS = [
    { alt: 'Green Category', url: green },
    { alt: 'Purple Category', url: purple },
    { alt: 'Cyan Category', url: cyan },
    { alt: 'Brown Category', url: brown },
    { alt: 'Red Category', url: red },
    { alt: 'Blue Category', url: blue },
    { alt: 'Yellow Category', url: yellow },
    { alt: 'Black Category', url: black }
];
export const MAX_CATEGORY_AMOUNT = 8;