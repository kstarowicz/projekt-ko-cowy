import React from "react";
import "./AboutMe.scss";

export default function AboutMe(){
    return(
        <div className="container container-about-me">
            <p className="text text-about-me">
                Strona pomoże sprawdzić przedmioty z numerami seryjnymi z rynku wtórnego,<br/>
                czy nie zostały wcześniej zgubione czy też skradzione.<br/>
                Strona również ma na celu pomóc
                osobom, które zgubiły lub zostały okradzione z przedmiotów,<br/>
                które posiadają numery seryjne.

                Zakładka <strong>"Dodaj urządzenia"</strong> pozwoli ci dodać twój sprzęt<br/>
                do listy posiadanych przez Ciebie przedmiotów oraz zgłosić kradzież lub zgubienie.<br/>
                Zakładka <strong>"Wyszukaj"</strong> pozwoli Ci sprawdzić czy dany sprzęt został skradziony.<br/>
                Jeśli widzisz sposób na ulepszenie naszego serwisu to zapraszam do kontaktu poprzez poniższy formularz
            </p>
        </div>
    )
}