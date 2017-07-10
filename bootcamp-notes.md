# Historial bootcamp frontend día a día
---
## Día uno

bitbucket = github. Bitbucket nos da la posibilidad de crear repositorios privados y públicos gratis y github solo los publicos son gratis ya los privados son de costo.

SSH es un protocolo de conexción con un servidor remoto. el key es algo que nos permitirá autenticarnos en el servidor sin tener que estar poniendo la contraseña.
Este esá compuesto por dos partes un key privado y otro público.

Configurar llave ssh para acceder github.
Hacemos el paso uno y dos que encontramos [aquí](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html)

Preparamos el entorno de desarrollo instalando node.js, atom o sublime como editor de texto, git bash.

**Primer ejercicio:**
SPA con webtask

Una app monolitca es que tiene todo dentro de la misma maquina db, front, back

Lanzar mini app en webtask 
1. instalamos webtaks con npm i -g wt-cli
1. wt -h me da la lista de los comandos que hay disponibles en webtask
1. wt ls me muestra que webtask tengo creadas
1. wt init (pide el correo de usuario de webtask)
1. wt edit no abre el editor visual de webtak
1. para subirlo desde un archivo del pc le damos wt create y el nombre del archivo
> Herramienta ["Typeform"](http://typeform.io/) para hacer formularios súper amigables


## Día dos

**Markdown:** sintaxis básica de formato, para dar formato a texto. Plataformas como github, slack, whatsapp lo soportan.

**Ejemplos markdown:**

# Título

## Subtitulo

**negrita** en alguno basta con un asterisco como whatsapp ejm: *negrita*

__cursiva__ en alguno basta con un asterisco como whatsapp ejm: _cursiva_

listas desordenadas

* Item 1
* Item 2
  *Item 2.1
  *Item 2.2

también con - ejem: - Item 1

Lista ordenas.

	1. Item 1
	1. Item 2

> citas de texto

Primer ejemplo de markdown en editor online de markdown llamado [Dillinger](http://dillinger.io/):

# Mi biografía
Mi nombre es **William Serna** soy de Belllo, Antioquia.

1. Programar
1. Dibujar
1. Fútbol

Esta es mi foto: 

![Foto William Serna](https://avatars0.githubusercontent.com/u/11982017?v=3&s=460)

Este es mi [Github](https://github.com/wsernalaverde)

Herramienta para cargar imágenes random del tamaño que y necesite (https://placeholder.com/)

 
**Comandos bash**

- ls (lista todo lo que hay dentro de la carpeta que estamos)

- ls -l (lista todo pero con detalle de cada uno)

- ls -a (lista hasta con los archivos ocultos)

- cd (sirve para cambiar de directorio) + nombre del directorio. Con tab podemos completar. Cd solo me lleva a la carpeta principal del pc

- pwd (muestra toda la ruta en la que estoy actualmente)

- mkdir (sirve para crear carpetas)

- rm -r + nom carpeta (remove directorio o archivo)

- rm -rf + nom carpeta/archivo (remove directorio o archivo forzado así este siendo ejecutado)

- rm -rf * (borra todo lo que este en la carpeta en la que esté actualmente)

- cp -r nomdirectorio nomdelacopia (copiar un directorio)

- _Nota: para los comando sobre carpetas debo usar el argumento r que significa recursividad. Para los archivos no es necesario._

- mv (sirve para renombrar el archivo o para moverlo a otra carpeta). mv nomarchivo newnombre ó mv nomarchivo rutadest

- touch (crear un archivo) touch nomarchivo+ la extensión

- more (es similar a cat pero este nos da la posibilidad de navegar con las flechitas como scroll)

- echo (para imprimir), esto lo podemos gurdar en un archivo ejm: echo hola index.js. hola me quedaría escrito dentro de un archivo index.js que crea.

- cat  ( abrir el archivo en la terminal )

- ctrl + u ( me borra la línea que haya copiado hasta el momento en la terminal )

**Crear control de versiones en una carpeta** 
Saber estado de [git](https://marklodato.github.io/visual-git-guide/index-en.html). En git hay tres estados el primero los archivos que tengo en mi pc, el segundo es el staying que hay están los archivos que a los que le voy hacer commit y el último es el master

1. inicializamos con git init
1. git status (es para saber el estado de mis archivos me muestra los que están en staying y los que no)
1. luego creamos el archivo .md con touch file.md
1. luego agregamos el archivo al estado staying con git add y nomarchivo
1. luego hacemos commit con git commit -m "comentario del commit"
1. con git log nos muestra el historial de lo que hemos hecho
1. con git checkout puedo navegar entre los commits ejm git checkout y minimo los primero 9 numero del id del commit y luego para devolverme al master con git checkout master.
1. para agregar a staying todos los archivos lo hacemos con git add . y si algún momento borro un archivo para que coja el cambio lo hago con git add -u .


## Día tres

Hoy vamos hacer push en github de la carpeta de control de versiones que tenemos en el pc.

1. primero creamos el repositorio en github, sin la opción de inicializar con readme automaticamente
1. luego conectamos la carpeta donde tenemos los archivos con el repositorio con >git remote add origin2 https://github.com/wsernalaverde/frontend-bootcamp.git. Esta url final es la url que nos da git del repositorio.
1. debemos hacer git add de todos los archivos con >git add .
1. luego hacemos el commit con >git commit -m "comentarios de los cambios"
1. ahora solo no queda hacer push a github con >git push -u origin master
_Nota:_ si le damos origin solo se conectará a través del protocolo ssh pero si tenemos problemas podemos usar origin2 que usará el protocolo https, lo usamos así >git push -u origin2 master. El paramatro -u nos sirve para guardar lo que hay después de este es decir origin master para que la próxima vez solo tengamos que hacer git push

**Inciar servidor rápido en python**
Para iniciar un servidor local rapidamente, teniendo instalado Python: `python -m http.server 8000`

Vimos html básico

## Día cuatro

**Html Entities**

son los carácteres reservados para la sintaxis de html como <, >, &

Para hacer estos caráctares si lo necesitamos como texto dentro de la página, usamos las QUOTES.

En esta página podemos encontrar una gran cantidad de códigos que para realizar algunos de los carácteres reservados que existen. [aquí](http://ascii.cl/es/codigos-html.htm)


**CSS**

**Rules**
- Selector
- Propiedad
- Valor

selector {
	propiedad: valor;
}

Uno puede poner los estilos de tres formas:

1. Con la etiqueta "style" en el head del html. Ejemplo: 
<style>
selector {
	propiedad: valor;
}
</style>
1. Estilos en línea con el atributo style dentro de la etiqueta que se lo vamos aplicar. Ejemplo: <p style="color:black;">texto</p>
1. En un archivo .css donde estarán todos los estilos y los podemos linkear en la diferentes páginas de nuestro sitio con la etiquta link. Ejemplo: <link rel="stylesheet" type="text/css" href="ruta de la imagen">

**Unidades de medidas**

Existen diferentes tipos de medidas como px, em, vh, %.

px: unidad de medida

em: un em es el tamaño de la m de la base del texto relativo a su padre. Por ejemplo si tengo un texto de 14px  y a otro texto le pongo 2em entonces un 1em serían 14px y 2 sería el doble 28px; Si el padre no tiene una medida definida coge la medida por default del navegador.

%: tomará el tamaño del procentaje asignado relativo a su contenedor padre

**Elementos bloques y en línea**

Los elementos en bloque ocupan todo el width de su contenedor padre. Entre dos elementos bloques no se va sumar el margin que tenga cada elemento si no que solo va prevalecer el mayor margen de os dos elementos.
Los elementos en línea ocupan el width de lo que mida su contenido, a estos no se les puede definir un width con esta propiedad, nunca lo va reocnocer. Los margenes solo lo afectan a los lados, no arriba ni abajo.

**Modelo de caja**

En html siempre vamos a diagramar como si tuevieramos un conjunto de cajas, donde cada caja siempre va a tener un contenido, un padding, un border y un margin por todos los costados de la caja.

>[Imágenes creadas a base de un solo div](http://a.singlediv.com/)

**Resetear estilos**

para resetear los estilos que por defecto trae el navegador podemos ponerle el estilo que queramos con el selector *. 
Ejemplo: *{
	margin:0;
	padding:0;
}
o podemos usar librerías para esto como [Normalize.css](https://necolas.github.io/normalize.css/)

Por defecto los elementos están con una propiedad llamada content-box que lo que hace es que va a sumar el tamaño del contenido con los padding y los borders entonces el elemento tendría una tamaño total de la sma de estos. si queremos quitar estos podemos usar la propiedad box-sizing que le dice que no los sume entonces va coger el tamaño que le definamos en el width.

**Selectores**

Los selectores más usados en css son de etiqueta, por clase y por id.

- etiqueta: se llaman por el nombre de la etiqueta html ejm: p{
	propiedad: valor;
}
- clases: se llaman en el archivo css con . más el nombre de la clase y en html se le asigna la clase a la etiqueta html que queramos con el atributo class. ejm:
en el css
 .nombreclase{
	propiedad: valor;
}

en el html
  `<p class="nombreclase">texto</p>`
- id: se llaman en el archivo css con # más el nombre del id y en html se le asigna el id a la etiqueta html que queramos con el atributo id. ejm
en el css
 #nombreid{
   propiedad: valor;
 }
 `<p id="nombreclase">texto</p>`

 >calcular tamaño de un elemento en css lo hago con width:calc(100%-100px)

 **Pseudo-clases**

 :link = un link que nunca ha sido visitado

 :visited = el estado cuando el link ya ha sido visitado

 :hover = el estado cuando el puntero del mouse está sobre el link

 :active = el estado cuando el link está siendo presionado

 **Especifidad**

Esto es como la importancia de las reglas declaradas en el css

specifity calculator es una herramienta que nos sirve para calcular la importancia de la reglas css

## Día cinco

>Los elemento tipo bloque no tienen en cuenta los espacios que hay entre etiquetas en el código, mientras que los elementos tipo inline o inline-block si lo tiene en cuenta, estos espacios que hayan entre etiquetas en el navegador se van a renderizar y serán visibles en el navegador.

>Si tengo un a dentro de un li para que este a se rellene dentro de todo el espacio del li le puedo dar al a la propiedad y valor de display:block.

>Propiedad nueva columna que nos permite tener un texto en múltiples columnas, se usa así
.texto{
 -moz-column-count: 3;
 -moz-column-gap: 1em;
 -webkit-column-count: 3;
 -webkit-column-gap: 1em;
 column-count:3;
 column-gap:1em
}
en column-count le decimos el número de columnas que deseamos tener en el texto, en column gap le damos el espacio que vamos a tener entre las columnas. Como esta propiedad es muy nueva debemos utilizar los prefijos para que la reconoscan distintos navegadores. -moz y -webkit. En los navegadores IE9 y Opera Mini no funciona.

```html
<html>
<head>
	
</head>
<body></body>
</html>

```

## Día seis

**CSS Floats**


propiedad float. Un elemento puede flotar a la izquerda o a la derecha.

Full-bleed: es cuando el elemento maquetado va ocupar el 100% de la pantalla

los contenedores flotantes no generan un height, para solucionar esto podemos darle la propiedad overflow:hidden al contenedor donde se encuentran los flotantes.

> unsplash.it : en esta página podemos sacar img hd free

En los media object para cuando tenemos la imagen flotando a la izquierda y el texto a la derecha y queremos que el texto no no se pase abajo de la imagen le damos al texto la propiedad overflow:hidden.

##Día siete

JavaScript (pasar notas de las hojas al este archivo)**Pendiente**

## Día ocho

**Closure**

Con esto podemos crear funciones dinámicas con la capacidad de recordar parámetros. Creamos una función que no retorna otra función que guarda el parametro pasado a la primera función.

Ejm: 

´´´
function sumar(x){
	return function (y){ return x + y }
}

var a = sumar(1);

a /*queda valiendo una función*/ function (y){ return 1 + y } //que le va sumar uno a cualquier número que le pasemos

a(10);

//me va imprimir 11

´´´

>También la puedo ejecutar inmediatamente si necesidad de almacenarla en una variable así

´´´´javascript

function makeAdder(x, y){
 return function(n, m){
    return x+y+n+m;
 }
}

makeAdder(1,1)(2,2) /* con los primeros le pasamos los parámetros a la primera función y con los segundo parentesis ejecutamos la segunda función que nos retorna y le pasamos los parámetros que esta necesita*/

// me imprime 6


´´´

**setTimeout()**

Esta función nos sirve para ejecutar algo después de cierto tiempo que le definamos. Primero le debemos declarar la función a ejecutar y separado por una coma le pasamos el tiempo en milisegundos que queremos que tarde en ejecutarse este.

Ejm: 

´´´
setTimeout(function(){
	console.log('imprimir cada 5 segundos')
}, 5000)

´´´

Ejemplo de setTimeout con un for, si tenemos unsetTimeout dentro de un for. El for se ejecuta más rápido que el setTimeout entonces este solo alcanzaría a ejecutarse una sola vez.

´´´
for(var i=0; i<10; i++){
	setTimeout(function(){
		console.log(i);
	}, 5000)
}

´´´
>  Esto me va imprimir el valor de i cada cinco segundos pero como el for termina más rápido que el setTimeout solo me va imprimir i una vez y con el último valor en el que quedó i, para lograr que se ejecute las n veces y concerve cada valor de i debemos hacer un closure

´´´
for(var i=0; i<10; i++){
	setTimeout((function(i){
		return function(){ console.log(i); };
	}(i)), 1000)
}

for(var i=0; i<10; i++){
	(function(x){
	 return function(){ setTimeout(function(){
		console.log(i);
	}, 5000)}
	})(i)}

´´´

**IIFE**

Immediately Invoked Function Expression, quiere decir que podemos ejecutar una función inmediatamente la declaramos. Para esto debemos declarar la función y ponerle dos parentesis al final y todo esto completo meterlo dentro de parentesis. [referencia]

Ejm:

´´´
(function miFuncion(nombre){
	console.log('Este es mi nombre ' + nombre);
}('William'));

´´´

[referencia]:http://benalman.com/news/2010/11/immediately-invoked-function-expression/

**This**

Palabra reservada de js, que nos permite cambiar el contexto de una función.

Ejm:


>el contexto global en los navegadores es el objeto window, por ejemplo todas la variables o funciones que creamos en la consola de del navegador quedan guardadas en este objeto. Y en node es el objeto global

## Día nueve

> this = contexto en javaScript

**HTML Semantico**

outliner html es una herramienta que nos ayuda a revisar si la estrcutura semántica de nuestro html se encuentra correctamente definida.

## Día diez

**Formularios**

La etiqueta para crear formularios ser llama form:

´´´´html
<form>
	<!--Aquí van todos los inputs del formulario-->
</form>

´´´

Existen una variada cantidad de inputs de entrada en los formularios.

- <input type="text"> //este es para agregar una caja de texto.
- <input type="email"> //este un campo de texto especial para que ingresen un email

>Rejects 

>Bootstrap validator

>mailgun servicio para envío de correos sin necesidad de un servidor. es gratis


**Media queries**

con está declaración le decimos al navegador que aplique los estilos dependiendo de su condición de medida.

>codrops

>browser diet

>A/B Testing: comparar dos diseños de una web para saber cual es más usable.

## Día once

kdiff3