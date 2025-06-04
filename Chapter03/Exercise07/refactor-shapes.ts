interface Shape {
    type: "circle" | "rectangle" | "rightTriangle" | "square",
    area?: number
}

interface Circle extends Shape {
    type: "circle",
    radius: number
}

interface Rectangle extends Shape {
    type: "rectangle",
    length: number,
    width: number,
}

interface RightTriangle extends Shape {
    type: "rightTriangle",
    base: number,
    height: number,
}

interface Square extends Shape {
    type: "square",
    width: number
}

function getCircleArea(circle: Circle): number {
    const PI = 3.14;
    const { radius } = circle;

    return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle): number {
    const { length, width } = rectangle;
    return length * width;
}

function getSquareArea(square: Square): number {
    const { width: squareWidth } = square;
    const rectangle: Rectangle = { type: "rectangle", length: squareWidth, width: squareWidth };

    return getRectangleArea(rectangle);
}

function getRightTriangleArea(rightTriangle: RightTriangle): number {
    const { base, height } = rightTriangle;
    return (base * height) / 2;
}

function getArea(shape: Shape): void {
    switch (shape.type) {
        case 'circle':
            shape.area = getCircleArea(shape as Circle);
            break;
        case 'rectangle':
            shape.area = getRectangleArea(shape as Rectangle);
            break;
        case 'square':
            shape.area = getSquareArea(shape as Square);
            break;
        case 'rightTriangle':
            shape.area = getRightTriangleArea(shape as RightTriangle);
            break;
    }
}

const circle: Circle = { type: 'circle', radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: 'rectangle', length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: 'square', width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = { type: 'rightTriangle', base: 9, height: 4 };
getArea(rightTriangle);
console.log(rightTriangle);