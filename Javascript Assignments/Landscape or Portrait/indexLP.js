function isLandscape (___, ___) {
  if (___ == ___) return 'Square';
  return (___ > ___) ? 'Landscape' : 'Portrait';
}

let width = 800;
let height = 800;
console.log("This display geometry is", isLandscape (width, height));
