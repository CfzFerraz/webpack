import soma from './calc.js';
import Heading from './components/heading.js';

console.log('Testando webpack');

soma(2, 4);
soma(10, 20);

//loaders
const heading = new Heading();

heading.create("Esse título é dinâmico");
heading.create("hot reload");