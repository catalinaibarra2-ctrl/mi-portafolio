Bitácora 
LINK FIGMA: https://www.figma.com/design/C8ll3cx4dvcGYbk6X9QJTv/Sin-t%C3%ADtulo?node-id=0-1&t=PnmrGY5lfURjayy3-1

Esta era mi bitácora antes de la correción: (mi texto se ve mucho más tímidio entonces recibí comentario de aaron para cambiar eso y sonar decisiva de una vez).

Quiero que este proyecto sea sobre mis trabajos en la universidad y un poco de quien soy, y estoy pensando aun si quiero otro apartado sobre mis dibujos fuera de lo académico.
Para la estética las me gustaría hacer algo con imagenes un poco borrosas en el inicio o una vibra de bosque o como un cuento de hadas, para los íconos he pensado utilizar piedras distintas, por ejemplo poner un cuarzo y que al pasar el cursor aparezca “trabajos” o en otra piedra que aparezca “dibujos” y así.

Mis 3 sitios web de referencia son:
1. Este no es un sitio de referencia como tal sino que mi sitio de referencia para la tipografía principal, en el instante que tuve clara la estética que quería, supe la tipografía que iba a usar, y hace un tiempo descubrí a esta diseñadora e ilustradora que creó una tipografía que me gustó mucho, se la pedí y es la que quiero usar :) https://www.instagram.com/p/DWB0OV5iChU/?img_index=1

2. De este sitio me gusta cuando al pasar el cursor sobre las imagenes aparece un degradado de color amarillo, pienso que se ve muy bien y es una manera rápida de hacer saber al usuario que sí estamos por seleccionar un trabajo.
https://mindsparklemag.com/  

3. De este portafolio me gusta la animación, la manera en que se mueven los elementos y pienso que puedo hacerlo con las piedras. 
https://flaviahodel.xyz/ 

Y ESTA ES MI BITÁCORA DEPUES DE LA CORRECÓN:

Este proyecto es sobre mis trabajos en la universidad y sobre quien soy, también quiero hacer otro apartado para mis dibujos.
Para la estética las imágenes quiero que las imágenes de fondo sean borrosas, y que den un guiño a un bosque mágico, para los íconos quiero utilizar piedras distintas, por ejemplo poner un cuarzo y que al pasar el cursor aparezca trabajos y que en otra piedra aparezca dibujos y así. 
En la página de inicio quiero poner un fondo que se encuentre en movimiento pero lento y como ya mencioné, levemente borroso.
En mi nombre existe un cambio de tipografía al pasar el cursor para mejorar la legibilidad.
Los íconos de piedra van a moverse en un lapso de tiempo de 3 segundos en subida y bajada y lo mismo hacia los lados. Las piedras serán dibujos hechos por mi.
En la página que hable sobre mí, pondré dos fotos mías, una de pequeña en donde tengo mi cara manchada de pintura y una actual, información sobre mi y mis gustos y más abajo pondré cosas que me gusten como elementos, ejemplo como botas, cinturones, flores pero estos no escritos, sino como elementos flotantes.
En la página de mis trabajos primero hay una gran galería con solo fotos y al pasar el cursor se iluminará la base con un color, una vez seleccionada, lleva a la página especial para aquel trabajo en donde existe una imagen central, abajo una pequeña descripción y abajo más fotos y otras con zoom.

Mis 3 sitios web de referencia son:
1. Mi sitio de referencia para la tipografía principal, en el instante que tuve clara la estética que quería, supe la tipografía que iba a usar, y hace un ti empo descubrí a esta diseñadora e ilustradora que creó una tipografía que me gustó mucho, se la pedí y es la que quiero usar :) https://www.instagram.com/p/DWB0OV5iChU/?img_index=1

2. De este sitio me gusta cuando al pasar el cursor sobre las imagenes aparece un degradado de color amarillo, pienso que se ve muy bien y es una manera rápida de hacer saber al usuario que sí estamos por seleccionar un trabajo.
https://mindsparklemag.com/  

3. De este portafolio me gusta la animación, la manera en que se mueven los elementos y pienso que puedo hacerlo con las piedras. 
https://flaviahodel.xyz/ 

========
PROCESO DE CÓDIGOS 
Para la entrega anterior hice la página de entradas de Creamfields por lo que tuve que centrar 3 entradas y una imagen correspondiente para cada categoría, en esta ocasión no era tan distinto porque tuve que posicionar mis fotos centradas pero en zigzag una con otra, pero luego me caí en cuenta de que no me estaba resultando muy bien mirando mi trabajo anterior como ejemplo así que le pedí ayuda a la ia para cosas en específico, La primera fue que me ayude a ordenar mis fotos como las tengo en mi figma (sección scc de posicion de pantallas) y efectivamente eran muchisimos números que me dió y que no estaba teniendo en cuenta. Lo mismo al momento de adaprtar el desktop a mobile, me dio muchos números en esa parte.
La segunda ayuda fue para lograr la animación de las piedras porque no tenía idea de como hacer para que se muevan. En Figma animé las cuatro gemas para que se movieran de arriba a abajo en un tiempo de aprox. 2 segundos (la primera sube, la segunda baja, la tercera sube y la cuarta baja). Le dije a Claude que analice el link de mi archivo de Figma y le pedí que me ayude a replicar esa animación y que también me explicara cada cosa me dió esto:
  1. Se le pone la animación a las gemas

  css
  .home-gema {
    animation: flotar 2.05s infinite alternate;
  }  
  flotar es el nombre de la animación (podría llamarse como quieras).
  2.05s es lo que dura, 2,05 segundos, igual que en tu Figma.
  infinite hace que se repita para siempre.
  alternate hace que vaya y vuelva: sube y después baja, en vez de saltar de golpe al inicio.

  2. Cada gema tiene su propio recorrido

  css
  .home-gema-1 { --desde: -54px;  --hasta: -149px; animation-timing-function: linear; }
  .home-gema-2 { --desde: -101px; --hasta: 5px;    animation-timing-function: ease-out; }
  .home-gema-3 { --desde: 30px;   --hasta: -72px;  animation-timing-function: linear; }
  .home-gema-4 { --desde: -130px; --hasta: 2px;    animation-timing-function: ease-out; }
  --desde y --hasta son variables con la posición inicial y final de cada gema, en píxeles hacia arriba (negativo) o hacia abajo (positivo).
  linear mueve la gema a velocidad pareja. ease-out la hace partir rápido y frenar al final.
  Por eso no se mueven todas iguales: cada una sube y baja distinto.

  3. Qué pasa durante la animación

  css
  @keyframes flotar {
  from { transform: translateY(var(--desde)); }
  to   { transform: translateY(var(--hasta)); }
  }
  @keyframes define los pasos de la animación: from es el inicio y to el final.
  translateY mueve el elemento en el eje vertical.
  Toma los valores --desde y --hasta de cada gema. Así, con una sola animación se mueven las 4 de forma distinta.

  Además hay dos detalles extra:

  css
  .home-gema:hover {
  filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.8));
  }

  Este agrega un brillo blanco cuando pasas el mouse por encima de una gema.

  css
  @media (prefers-reduced-motion: reduce) {
    .home-gema { animation: none; }
  }

  Este detiene la animación si la persona tiene activado en su computador "reducir movimiento" (una opción de accesibilidad).

  Para jugar con ella: cambia 2.05s por 4s y las gemas se moverán más lento. También puedes cambiar los números de --desde y --hasta para que suban más o menos.

Y volí a pedirle ayuda para medidas con mis textos y noté que en los valores me salió esto:
```css
font-weight: inherit; 
```
Entonces yo no se que significa inherit; asi que le pedí que me explicara también porque se repetía en hartos valores y me dijo:
Significa "usa el mismo grosor de letra que tiene el elemento que te contiene". Es decir, el elemento hereda el grosor de su elemento padre.
Por qué está en tu CSS. Aparece en esta regla:

css
h1,
p {
  margin: 0;
  font-weight: inherit;
}

Los navegadores ponen todos los <h1> en negrita por defecto. En tu diseño de Figma, títulos como "Entrejuegos" o "Experiencia lumínica" no van en negrita: usan Playfair Display Medium (500) o Roots Regular.

Con font-weight: inherit, el <h1> deja de ponerse en negrita automáticamente y toma el grosor de su contenedor, que es normal (400). Después, cada título recibe su grosor exacto con su propia clase. Por ejemplo, .proy-titulo tiene font-weight: 500.

Otros valores que podrías ver en font-weight:

400 o normal: grosor normal.
500: medium, un poco más grueso.
700 o bold: negrita.
inherit: copia el grosor del elemento padre.

Sin esa línea, tus títulos se verían más gruesos que en Figma.

Entonces yo le pregunté que dónde estaba mi elemento padre porque tampoco entendí eso y me dijo:
El elemento padre no se define en el CSS sino en el HTML: es el elemento que está "por fuera" o que envuelve al otro. En tus páginas la estructura es así:

html
<body>                       ← abuelo
  <main class="lienzo">      ← padre
    <h1>Entrejuegos</h1>     ← hijo
  </main>
</body>

O sea, el padre de tus títulos es <main class="lienzo">, y el padre de ese es <body>.

¿De dónde sale entonces el grosor? La regla de .lienzo en el CSS no dice nada de font-weight, así que el main también lo hereda de su padre, el body. Y en el body sí está definido:

css
body {
  font-family: var(--fuente-texto);
  font-weight: 400;
  color: var(--negro);
  background: #e9ece6;
}

La herencia va bajando en cadena:

body (400) → main.lienzo (hereda 400) → h1 (hereda 400)

Por eso, si algún día quieres que todos los textos del sitio sean más gruesos, basta con cambiar el 400 del body. Los elementos que tienen su propio grosor, como .proy-titulo con 500, mantienen el suyo.

Finalmente si me quedó mas claro.

Creo que no tuve mayores complicaciónes al momento de poner las imagenes o videos, en un momento si me pasaba que no se veían cuando abría el index en el navegador y revisé muchas veces que el video estuviese bien escrito pero despúes me di cuenta de que estaba fallando en Class, arreglando eso pude ver los videos en el index.
También recordé que en Figma puedo ver los CSS de partes seleccionadas así que tambíen revisaba esa parte y revisé los códigos que me dió la IA para entender en que fallé o que me faltaba.

Sobre este proyecto reforcé la importancía del Class, dudo que se me olvide luego de haber pasado harto rato viendo que estaba pasando que no se veían hasta que lo noté. También que al momento de seleccionar proyectos me falta crear más cosas que me guste mostrar y crear, tengo muchas ideas guardadas pero nunca me tomo el tiempo de hacerlas y me hubiese gustado ponerlas en el portafolio, así que también fue una motivación para empezar a crearlas. 
También en Figma con las gemas aprendí a crear movimiento a objetos, algo que no había hecho antes y todavía no lo domino mucho pero la pasé super bien en el proceso, era tal cual lo tenía en mi mente desde un inicio y nunca había dibujado piedras a pesar de que me gustan mucho, así que esta oportunidad también me permitió hacerlo y quedé feliz con el resultado :) . 