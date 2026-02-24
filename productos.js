const productos = [
    {
        id: "camisa-boxy-celeste",
        nombre: "Camisa Boxy Texture",
        precio: "15.000",
        descripcion: "Camisa de corte boxy con textura gofrada. Ideal para un look relajado pero sofisticado. Calce oversize.",
        imagenes: ["Pink Productos/Camisa Boxy 3.jpeg", "Pink Productos/Camisas Boxy 2.jpeg", "Pink Productos/Camisas Boxy.jpeg"],
        categoria: "Camisas",
        colores: ["Celeste", "Negro"]
    },
    {
        id: "remera-la-girl",
        nombre: "L.A. Girl Vintage Tee",
        precio: "10.000",
        descripcion: "Remera de algodón premium con estampa inspirada en el streetstyle de Los Ángeles. Cuello en V contrastado.",
        imagenes: ["Pink Productos/L.A Girl 2.jpeg", "Pink ProductoS/L.A Girl.jpeg"],
        categoria: "Remeras",
        colores: ["Rosa", "Marron"]
    },
    {
        id: "top-abstract",
        nombre: "Top Abstract Osadía",
        precio: "9.000",
        descripcion: "Top de rib con estampa batik hecha a mano. Ajuste al cuerpo y terminación en ondas.",
        imagenes: ["Pink Productos/TOP Mujer.jpeg"],
        categoria: "Tops"
    },
    {
        id: "RemeGangster",
        nombre: "Remera Gangster",
        precio: "15.000",
        descripcion: "La Remera Gangster combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Gangster” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Oversize Remeras/IMG13 (1).PNG", "Ropa/Oversize Remeras/IMG13 (2).PNG", "Ropa/Oversize Remeras/IMG13 (3).PNG"],
        categoria: "Remeras Oversize"
    },
    {
        id: "RemeMari",
        nombre: "Remera Butterfly Oversize",
        precio: "15.000",
        descripcion: "La Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Oversize Remeras/IMG10 (1).PNG", "Ropa/Oversize Remeras/IMG10 (2).PNG"],
        categoria: "Remeras Oversize"
    },
    {
        id: "Reme23",
        nombre: "Remera Speed 23 Oversize",
        precio: "15.000",
        descripcion: "LRemera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Oversize Remeras/IMG01 (1).PNG", "Ropa/Oversize Remeras/IMG01 (2).PNG", "Ropa/Oversize Remeras/IMG01 (3).PNG"],
        categoria: "Remeras Oversize"
    },
    {
        id: "RemeBoxyDUTY",
        nombre: "Remera BoxyFit Duty",
        precio: "14.000",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Remeras Boxy Fitt/IMG97 (1).PNG", "Ropa/Remeras Boxy Fitt/IMG97 (2).PNG", "Ropa/Remeras Boxy Fitt/IMG97 (3).PNG"],
        categoria: "Remeras BoxyFit"

    },
    {
        id: "RemeRome",
        nombre: "Remera BoxyFit Rome",
        precio: "14.000",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Remeras Boxy Fitt/IMG22 (1).PNG", "Ropa/Remeras Boxy Fitt/IMG22 (2).PNG"],
        categoria: "Remeras BoxyFit"

    },
    {
        id: "Reme23BOXY",
        nombre: "Remera BoxyFit Speed 23",
        precio: "14.000",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Remeras Boxy Fitt/IMG16 (2).PNG", "Ropa/Remeras Boxy Fitt/IMG16 (1).PNG"],
        categoria: "Remeras BoxyFit"

    },
    {
        id: "MuscuBlanca",
        nombre: "Musculosa Blanca Osadia",
        precio: "13.500",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Musculosas/IMG51 (1).png", "Ropa/Musculosas/IMG51 (2).png"],
        categoria: "Musculosas Osadia"
    },
    {
        id: "MuscuVerde",
        nombre: "Musculosa Verde Osadia",
        precio: "13.500",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Musculosas/IMG20 (1).png", "Ropa/Musculosas/IMG20 (2).png"],
        categoria: "Musculosas Osadia"
    },
    {
        id: "popu",
        nombre: "Remera Puperas Osadia",
        precio: "10.500",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Puperas/Puperas Adidas.png",],
        categoria: "Remeras Puperas",
        colores: ["Blanca", "Negra", "Blanca Nike"]

    },
    {
        id: "POOPU",
        nombre: "Remera Puperas Osadia",
        precio: "13.500",
        descripcion: "Remera oversize confeccionada en algodón premium, suave y cómoda para el uso diario. Presenta estampa frontal estilo deportivo con diseño “23” y detalles gráficos en rojo y blanco que le aportan un look urbano y moderno. Ideal para combinar con jeans o joggers y lograr un outfit relajado con personalidad.a Remera Butterfly Oversize fusiona arte y estilo urbano en una prenda con fuerte personalidad. Confeccionada en algodón premium de tacto suave, ofrece una caída relajada y cómoda ideal para el uso diario. Su diseño destaca por la estampa trasera de mariposas en tonos turquesa y negro, acompañada de tipografía estilo street que refuerza su identidad moderna. El color rosa malva aporta un equilibrio entre actitud y versatilidad, convirtiéndola en una pieza clave para looks urbanos con carácter. Perfecta para combinar con jeans, joggers o bermudas, logrando outfits relajados pero con presenciaLa Remera Mari combina minimalismo y actitud urbana en una prenda versátil y cómoda para el día a día. Confeccionada en algodón premium de tacto suave, ofrece una caída natural que se adapta al cuerpo sin perder estructura. Su diseño en color blanco limpio resalta la estampa frontal “Mari” en tipografía de inspiración street, logrando un equilibrio entre estilo clásico y personalidad contemporánea. Ideal para quienes buscan una prenda simple pero con carácter. Perfecta para combinar con jeans, joggers o bermudas, tanto en looks relajados como en outfits más urbanos.",
        imagenes: ["Ropa/Puperas/Puperas.png"],
        categoria: "Remeras Puperas",
        colores: ["Blanca", "Negra", "Rosa Nude"]
    },
    {
        id: "jeans",
        nombre: "Jeans Baggy Osadia",
        precio: "47.700",
        descripcion: "Jeans baggy premium, suave y cómodo para el uso diario. Presentan corte relajado y diseño urbano que combina estilo clásico con modernidad. Ideal para combinar con remeras oversize o camisetas de estilo streetwear, logrando outfits relajados pero con personalidad. Convirtiéndolos en una pieza clave para looks urbanos.",
        imagenes: ["Ropa/Jeans Baggy/jeans.png", "Ropa/Jeans Baggy/jeans1.png", "Ropa/Jeans Baggy/jeans2.png"],
        categoria: "Jeans Baggy"
    },
    {
        id: "jeanss",
        nombre: "Jeans Baggy Osadia",
        precio: "44.900",
        descripcion: "Jeans baggy premium, suave y cómodo para el uso diario. Presentan corte relajado y diseño urbano que combina estilo clásico con modernidad. Ideal para combinar con remeras oversize o camisetas de estilo streetwear, logrando outfits relajados pero con personalidad. Su diseño en color negro camuflado aporta versatilidad y elegancia, convirtiéndolos en una pieza clave para looks urbanos.",
        imagenes: ["Ropa/Jeans Baggy/camuflado.png", "Ropa/Jeans Baggy/camuflado1.png"],
        categoria: "Jeans Baggy"
    },
    {
        id: "jeansss",
        nombre: "Jeans Baggy Osadia",
        precio: "44.900",
        descripcion: "Jeans baggy premium, suave y cómodo para el uso diario. Presentan corte relajado y diseño urbano que combina estilo clásico con modernidad. Ideal para combinar con remeras oversize o camisetas de estilo streetwear, logrando outfits relajados pero con personalidad. Su diseño en color negro aporta versatilidad y elegancia, convirtiéndolos en una pieza clave para looks urbanos.",
        imagenes: ["Ropa/Jeans Baggy/jeansnegro.png", "Ropa/Jeans Baggy/jeansnegro1.png"],
        categoria: "Jeans Baggy"
    },
    {
        id: "Bermu",
        nombre: "Bermudas Osadia",
        precio: "37.900",
        descripcion: "Bermuda premium. Presentan corte relajado y diseño urbano que combina estilo clásico con modernidad. Ideal para combinar con remeras oversize o camisetas de estilo streetwear, logrando outfits relajados pero con personalidad. Su diseño aporta versatilidad y elegancia, convirtiéndolos en una pieza clave para looks urbanos.",
        imagenes: ["Ropa/Bermudas/bermuda.png", "Ropa/Bermudas/bermuda1.png"],
        categoria: "Bermudas"
    },
    {
        id: "Bermuu",
        nombre: "Bermudas Osadia",
        precio: "37.900",
        descripcion: "Bermudas premium, suave y cómodo para el uso diario. Presentan corte relajado y diseño urbano que combina estilo clásico con modernidad. Ideal para combinar con remeras oversize o camisetas de estilo streetwear, logrando outfits relajados pero con personalidad. Su diseño en color negro aporta versatilidad y elegancia, convirtiéndolos en una pieza clave para looks urbanos.",
        imagenes: ["Ropa/Bermudas/bermudanegra1.png", "Ropa/Bermudas/bermudanegra2.png", "Ropa/Bermudas/bermudanegra3.png"],
        categoria: "Bermudas"
    },
];