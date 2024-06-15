import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { links } from "../../components/questions";
import "./style.css";

export const AboutPage = () => {
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
          <p>
            Svou hru začněte na úvodní stránce, kde navolíte, zda chcete hrát
            sami nebo s kamarádem. Vyplňte své jméno, vyberte avatar a můžete
            začít hrát.
          </p>
          {/* obrázek */}
          <p>
            Nyní už je před vámi samotná hra, připravená tak, jak jste si ji
            navolili. Začínáme na jamce jedna a postupně procházíme celé hřiště.
            Aktuální jamku vám prozradí skórkarta i panáčci na mapě. Kvíz pro
            danou jamku spustíte kliknutím na jamku na mapě.
          </p>
          {/* obrázek */}
          <p>
            Hra funguje jako vědomostní hra na téma pravidla discgolfu. Po
            kliknutí na odpověď se hned dozvíte výsledky a může pokračovat další
            hráč. Dávejte však POZOR na to, kdo je zrovna na řadě, hra
            respektuje pořadí dle discgolfových pravidel.
          </p>
          <p>
            Ve hře je zahrnut mimo jiné i prvek náhody v podobě změny počasí a
            stejně jako se může stát, že vám hod zkomplikuje náhlý poryv větru,
            může se i zde objevit vítr, který ovlivní vaše skóre na dané jamce.
          </p>
          {/* obrázek */}
          <p>
            Postupujte takto jamku po jamce až k té deváté, po které se dozvíte,
            jak vaše hra skončila - jaké máte skóre nebo kdo vyhrál.
          </p>
          <p>
            Nyní již víte vše, co k hraní potřebujete, můžete tedy rovnou začít
            klikem na discgolfový koš níže.
          </p>
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
        </section>

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
