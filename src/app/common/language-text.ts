import { IAbout, IContact, IGallery, INavabar, IPoster, IWarning } from "./iComponents";

interface Translation<T> {
    [key: string]: T;
}

export const Navbar: Translation<INavabar> = {
    es: {
        home: "Home",
        about: "Nosotros",
        contact: "Contacto",
        gallery: "Galería"
    },
    en: {
        home: "Home",
        about: "About",
        contact: "Contact Us",
        gallery: "Gallery"
    }
}

export const Poster: Translation<IPoster> = {
    es: {
        title1: "Bienvenido a",
        title2: "In & Out",
        subtitle: "Estamos para servirte, solo elige tu dumpster, llámanos y lo tendrás disponible en el tiempo acordado",
        button: "Renta ahora"
    },
    en: {
        title1: "Welcome to",
        title2: "In & Out",
        subtitle: "We are here to serve you, just choose your dumpster, call us and you will have it available at the agreed time.",
        button: "Rent it Now"
    }
}

export const Warning: Translation<IWarning> = {
    es: {
        text: "NO materiales peligrosos, productos químicos, llantas, asbesto, tanques de gasolina, roca, tierra, ladrillo, piedra."
    },
    en: {
        text: "NO hazardous Materials, Chemicals, Tires, Asbestos, Gas Tanks, Rock, Dirt, Brick, Stone."
    }
}

export const Gallery: Translation<IGallery> = {
    es: {
        title: "Galería",
        subtitle: "Elige nuestros dumpsters para cualquier uso: Construcción, remodelaciones, limpieza de casas, comercial u otro…  llámanos o escríbenos y te atenderemos rápidamente, ofreciéndote el contenedor que se ajuste a tus necesidades y el mejor precio.",
        dumpsters: [
            {
                src: "../../assets/images/dumpsters/dumspterpict1.jpg",
                model: "10 yardas",
                price: "Desde 300 USD"
            },
            {
                src: "../../assets/images/dumpsters/dumspterpict2.jpg",
                model: "15 yardas",
                price: "Desde 360 USD"
            },
            {
                src: "../../assets/images/dumpsters/dumspterpict3.jpg",
                model: "20 yardas",
                price: "Desde 390 USD"
            },
            {
                src: "../../assets/images/dumpsters/big-dumspter.jpg",
                model: "30 yardas",
                price: "Desde 475 USD"
            },
        ],
        moreInfo: `Actualmente contamos con servicio en Detroit y sus alrededores. 

        Algunos de estos: Taylor, Lincoln Park, Southgate, Melvindale, Ecorse, Allen Park, Dearborn, Dearborn Heights, Romulus, Livonia, Hamtramck, Highland Park, Inkster, Warren, Westland, Woodhaven, Wyandotte, Southfield, Oak Park, Grosse Pointe Farms, Harper Woods.
        `
    },
    en: {
        title: "Gallery",
        subtitle: "Choose our dumpsters for any use: Construction, remodeling, house cleaning, commercial or other… call or text us and we will respond you quickly, offering you the best container and the best price.",
        dumpsters: [
            {
                src: "../../assets/images/dumpsters/dumspterpict1.jpg",
                model: "10 yards",
                price: "From $300 and up"
            },
            {
                src: "../../assets/images/dumpsters/dumspterpict2.jpg",
                model: "15 yards",
                price: "From $360 and up"
            },
            {
                src: "../../assets/images/dumpsters/dumspterpict3.jpg",
                model: "20 yards",
                price: "From $390 and up"
            },
            {
                src: "../../assets/images/dumpsters/big-dumspter.jpg",
                model: "30 yards",
                price: "From $475 and up"
            },
        ],
        moreInfo: `Currently, we have service at Detroit and surrounding areas.  Some of Those: 
        Taylor, Lincoln Park, Southgate, Melvindale, Ecorse, Allen Park, Dearborn, Dearborn Heights, Romulus, Livonia, Hamtramck, Highland Park, Inkster, Warren, Westland, Woodhaven, Wyandotte, Southfield, Oak Park, Grosse Pointe Farms, Harper Woods.
        `
    }
}

export const About: Translation<IAbout> = {
    es: {
        title: "Acerca de nosotros",
        text: `En IN&OUT Dumpster Rentals nuestro mayor objetivo es que estés satisfecho con nuestro servicio.

        Entendemos tus necesidades y por ello contamos con servicio toda la semana y solucionamos lo necesario para satisfacer las necesidades de tu proyecto.
        
        Lo recibirás en el tiempo y día acordado.
        
        Nuestra promesa es que siempre te daremos información suficiente y clara, seremos honestos.
        Siempre que sea necesarario te asesoraremos en cuanto al tipo de contenedor que les servirá
        Queremo ser tus aliados y te trataremos como familia…
        `
    },
    en: {
        title: "About us",
        text: `At IN&OUT Dumpster Rentals, our main goal is your satisfaction with the services we provide.

        We understand your needs, for that reason we are always available to schedule a rental that fits your project needs.
        
        You will receive it in the agreed time.
        
        Our promise is that we will always give you enough and clear information. 
        
        We always be honest, whenever necessary, we will advise you on the type of container that will serve you.
        
        We want to be your allies and we will treat you like family...        
        `
    }
}

export const Contact: Translation<IContact> = {
    es: {
        title: "Contáctanos",
        name: "Nombre Completo",
        phone: "Teléfono",
        mail: "Correo Electrónico",
        button: "Enviar",
    },
    en: {
        title: "Contact Us",
        name: "Full Name",
        phone: "Phone Number",
        mail: "Email",
        button: "Submit"
    }
}
