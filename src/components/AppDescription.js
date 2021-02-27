import React from "react";
import Layout from "../hoc/Layout";
import "../style/main.scss";

const division = [
  "Wyszukiwarka projektów githubowych",
  "Założenia całej aplikacji",
  "Wyliczanie silni",
];

const sub11 = "Wykorzystane jest publiczne API Githuba";
const sub12 = "Czeka na podanie loginu użytkownika:";
const sub12sub = ["waliduje poprawność", "obsługuje nieistniejące loginy"];
const sub13 =
  "wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:";
const sub13sub = "wyświetla maksymalnie 5 commitów każdego z projektów";

const sub2 = [
  "wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem",
  "proszę zawrzeć też autora aplikacji - własne imię i nazwisko",
];
const sub3 = [
  "input do podania liczby dla której będzie wyliczona silnia",
  "historia poprzednich wyliczeń.",
];
const general = [
  "korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna",
  "wyświetla co drugi element każdej listy wyróżnionym kolorem",
  "jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny publicznie",
  "Miło widziane użycie middlewarów reduxowych.",
];

function AppDescription() {
  return (
    <Layout>
      <section>
        <article>
          <h2>Aplikacja ma się składać z minimum 3 ekranów:</h2>
          <div>
            <ol>
              {division.map((part, index) => {
                return (
                  <li key={`part-${index}`}>
                    <h3>{part}</h3>
                  </li>
                );
              })}
            </ol>
          </div>
        </article>
        <article className="description-uls">
          <h4>Ad.1</h4>
          <ul>
            <li>{sub11}</li>
            <li>{sub12}</li>
            <li className="description-li">
              <ul className="description-ul">
                {sub12sub.map((item, index) => (
                  <li key={`sub12sub-${index}`}>{item}</li>
                ))}
              </ul>
            </li>
            <li>{sub13}</li>
            <li className="description-li">
              <ul className="description-ul">
                <li>{sub13sub}</li>
              </ul>
            </li>
          </ul>
        </article>
        <article className="description-uls">
          <h4>Ad.2</h4>
          <ul>
            {sub2.map((li, index) => (
              <li key={`ad2-${index}`}>{li}</li>
            ))}
          </ul>
        </article>
        <article className="description-uls">
          <h4>Ad.3</h4>
          <ul>
            {sub2.map((li, index) => (
              <li key={`ad3-${index}`}>{li}</li>
            ))}
          </ul>
        </article>
        <article className="description-uls">
        <h4>Ogólne:</h4>
        <ul>
            {general.map((li, index) => (
              <li key={`general-${index}`}>{li}</li>
            ))}
          </ul>
        </article>
      </section>
    </Layout>
  );
}

export default AppDescription;
