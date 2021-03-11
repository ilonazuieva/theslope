function slope([ x1, y1, x2, y2 ]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
}
//https://www.codewars.com/kata/55a75e2d0803fea18f00009d
//https://en.wikipedia.org/wiki/Slope