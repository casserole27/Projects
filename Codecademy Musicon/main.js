const context = {
  title: 'Welcome to Musicon',
  body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
  instruments: [
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: '$649.00',
      sale: '$349.00'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/violin.png',
      name: 'Violin',
      description: 'A versatile instrument that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
      price: '$245.00'
    }
  ]
};

 const templateElement = document.getElementById("templateHB");
/* This is grabbing the element that has the id of "templateHB" from the DOM, and assigning
it to a const variable called "templateElement". This is the script tag with type="text/x-handlebars-template".
*/

 const templateSource = templateElement.innerHTML;
/* Then we want the HTML found inside templateElement, and we pull that by using '.innerHTML'
We assigned this inner HTML to a const variable called templateSource.
*/

 const template = Handlebars.compile(templateSource);
/* We called the Handlebars.complie() method, and passed in the templateSource variable as an argument. 
This method will now complie the inner HTML of the templateElement information and creates a templating function.
A template string with expressions must be passed into Handlebars.complie() => the innerHTML contains the handlebars 
expressions in the {{}}.
*/


 const compiledHtml = template(context);
/*
The templating function takes an object as an argument, in this case the context object.
*/


 document.getElementById("information").innerHTML = compiledHtml;
/*
It then interpolates the objects values into the template expressions -- where we put {{}} -- 
and returns a completed HTML string.
We pull the element where we want to place this HTML byt its id,
and assign compiledHtml to its inner HTML.
*/


/*
With the const context variable, this looks like the beginning of a Handlebars template.
The context variable is an object with title, body, and instruments keys.
Instuments is an array of objects with image, name, description, and price keys. Some of them have a sale key as well.  
/*

