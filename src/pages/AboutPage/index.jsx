import { useState } from "react";
import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { links, instructions } from "../../components/source";
import instruction1 from "../../../assets/instruction1.jpg";
import instruction2 from "../../../assets/instruction2.jpg";
import instruction3 from "../../../assets/instruction3.jpg";
import instruction4 from "../../../assets/instruction4.jpg";
import instruction5 from "../../../assets/instruction5.jpg";
import instruction6 from "../../../assets/instruction6.jpg";
import "./style.css";

export const AboutPage = () => {
  const [instruction, setInstruction] = useState(0);

  const revealedInstruction = (instruction) => {
    if (instruction === 0) {
      return instruction1;
    } else if (instruction === 1) {
      return instruction2;
    } else if (instruction === 2) {
      return instruction3;
    } else if (instruction === 3) {
      return instruction4;
    } else if (instruction === 4) {
      return instruction5;
    } else if (instruction === 5) {
      return instruction6;
    }
  };

  return (
    <>
      <Header />
      <main className="about">
        <section className="about__section">
          <p>
            Hra Rules Open je určena především těm, kdo už se s discgolfem
            setkali a chtějí si osvěžit pravidla formou hry. Pokud vám ale pojem
            discgolf nic neříká, nezoufejte, naši hru si můžete samozřejmě
            zahrát i vy, jen se připravte na to, že některým pojmům možná
            nebudete úplně stoprocentně rozumět.
          </p>
          <p>
            A pokud byste se rádi dozvěděli o discgolfu něco více, doporučuju
            zavítat na stránky{" "}
            <a href="https://cadg.cz" target="_blank">
              České asociace discgolfu
            </a>
            , kde se dozvíte,{" "}
            <a href="https://cadg.cz/discgolf/" target="_blank">
              co je discgolf
            </a>{" "}
            nebo{" "}
            <a href="https://cadg.cz/jak-zacit-hrat-discgolf/" target="_blank">
              jak ho začít hrát
            </a>
            . Ale nyní již k naší online hře.
          </p>
        </section>

        <IconButton type="link" link="/" selected icon="./icon-disgolf.png" />

        <section className="about__section">
          <h2 className="about__title">JAK HRÁT RULES OPEN 2024</h2>
          <div className="about__instructions">
            <img
              src="./icon-arrow-right.png"
              alt="Předchozí"
              className={`about__arrow about__arrow--left ${
                instruction === 0 ? "about__arrow--disabled" : null
              }`}
              onClick={() => {
                setInstruction(instruction - 1);
              }}
            />
            <div className="about__instruction">
              <img
                src={revealedInstruction(instruction)}
                alt={`Ilustrační obrázek instrukcí č. ${instruction + 1}`}
                className="about__instruction-image"
              />
              <p className="about__instruction-text">
                {instructions[instruction].text}
              </p>
            </div>
            <img
              src="./icon-arrow-right.png"
              alt="Následující"
              className={`about__arrow ${
                instruction === instructions.length - 1
                  ? "about__arrow--disabled"
                  : null
              }`}
              onClick={() => {
                setInstruction(instruction + 1);
              }}
            />
          </div>
        </section>

        <IconButton type="link" link="/" selected icon="./icon-disgolf.png" />

        <section className="about__section">
          <h2 className="about__title">O PROJEKTU</h2>
          <p>
            Tato stránka vznikla jako závěrečný projekt semestrálního kurzu (3,5
            měsíce, 300+ hodin) Digitální akademie Web od neziskové organizace{" "}
            <a href="https://www.czechitas.cz/" target="_blank">
              Czechitas
            </a>
            . Kurz je zaměřen na technologie související s frontend vývojem a je
            ukončen prací na projektu, vypracovaném ve dvojici pod vedením
            mentorů z řad odborníků.
          </p>
          <h3>Využité technologie:</h3>
          <p>
            HTML5, CSS3, JavaScript, React a NPM (tvorba webu), Figma
            (prototyp), Dall-E a Gimp (zdroj obrázků a grafické úpravy), Git +
            GitHub, Netlify (verzování projektu a deployment).
          </p>
          <a
            href="https://github.com/jarmilahavirova/Czechitas-final-project"
            target="_blank"
          >
            <h4>Repozitář na GitHubu</h4>
          </a>
        </section>

        <IconButton type="link" link="/" selected icon="./icon-disgolf.png" />

        <section className="about__section">
          <h2 className="about__title">O NÁS</h2>
          <p>
            Autorkami projektu jsou{" "}
            <a
              href="https://www.linkedin.com/in/jarmila-havirova-4a95b69b/"
              target="_blank"
            >
              Jarmila Havířová
            </a>{" "}
            a{" "}
            <a
              href="https://www.linkedin.com/in/jana-dolej%C5%A1%C3%AD-9a69112bb/"
              target="_blank"
            >
              Jana Dolejší.
            </a>
          </p>
          <p>
            Jarča je aktivní hráčka discgolfu - v roce 2024, kdy projekt vznikl,
            bude začínat svou jedenáctou sezónu a má odehráno téměř{" "}
            <a href="https://www.pdga.com/player/62762" target="_blank">
              100 PDGA turnajů{" "}
            </a>
            a nespočet těch lokálních. Discgolf tedy byla jasná první volba jako
            téma na projekt.
          </p>
          <p>
            Janča o discgolfu do doby, než Jarču potkala, neslyšela vůbec nic,
            ale s otevřenou myslí s tématem souhlasila a byla nezávislým
            pohledem zvenčí.
          </p>
        </section>

        <IconButton type="link" link="/" selected icon="./icon-disgolf.png" />

        <section className="about__section">
          <h2 className="about__title">PODĚKOVÁNÍ</h2>
          <p>
            Rády bychom zde poděkovaly všem lektorům, mentorům a koučům, kteří
            nás při našich prvních krůčcích ve světe webového vývoje
            doprovázeli.
          </p>
          <h3>Mentoři</h3>
          <p>
            Především pak velké díky patří našim mentorům, kterými byla{" "}
            <a
              href="https://www.linkedin.com/in/blanka-semanov%C3%A1/"
              target="_blank"
            >
              Blanka Semanová
            </a>{" "}
            a{" "}
            <a href="https://www.linkedin.com/in/lojzatran/" target="_blank">
              Lam Tran
            </a>
            , kteří nás podporovali po lidské i technologické stránce. Zároveň
            nás ale při práci na projektu posouvali dále a naučili nás spoustu
            nového a stavěli před nás výzvy nad rámec obsahu akademie, za což
            jim patří velké díky. Jsme rády, že nás tento závěrečný projekt
            propojil.
          </p>
          <h3>Obrázky a ikony</h3>
          <p>
            Díky poté letí i za Kryštofem Novákem z discgolfového obchodu{" "}
            <a href="https://www.prodiscgolf.cz/" target="_blank">
              prodiscgolf.cz
            </a>
            , který souhlasil s využitím oficiálních discgolfových map a
            teesignů jako podkladů pro náš projekt
          </p>
          <p>
            Velká část obrázků byla generována modelem strojového učení DALL-E
            za pomoci Copilota. Tyto obrázky byly dále zpravovány pomocí
            grafického editoru GIMP. Díky autorům těchto open programů a
            technologií.
          </p>
          <p>
            Veškeré ikony jsou staženy z webové stránky www.flaticon.com a
            credits tedy necháváme i těmto autorům:{" "}
            {links.map((link) => {
              return (
                <>
                  <span>{link.author} za ikonku </span>
                  <a href={link.link} target="_blank">
                    {link.icon}{" "}
                  </a>{" "}
                  <span>, </span>
                </>
              );
            })}
            .
          </p>
        </section>

        <IconButton type="link" link="/" selected icon="./icon-disgolf.png" />

        <section className="about__section">
          <h2 className="about__title">DISCLAIMER</h2>
          <p>
            Tato hra je pouze zábavního charakteru a přistupujte k ní tedy s
            ohledem na tento fakt. Autorky nepřebírají zodpovědnost za jakékoliv
            chyby nebo opomenutí v obsahu tohoto webu. Nepřebírají ani
            zodpovědnost za nepříjemnosti spojené s nesprávným výkladem pravidel
            na základě informací z tohoto webu. Informace na tomto webu jsou
            poskytovány tak, jak jsou, pro svůj zábavní charakter, bez záruky
            úplnosti, přesnosti, užitečnosti či aktuálnosti.
          </p>
        </section>
      </main>
    </>
  );
};
