<script>
  import { progress } from '../../store/slider'
  import WallPaint from '../atoms/WallPaint.svelte'
  import Frame from '../atoms/Frame.svelte'
  import Slider from '../atoms/Slider.svelte'
  import Section from '../molecules/Section.svelte'
  import Story from '../molecules/Story.svelte'

  $: negativeProgress = 100 - $progress
</script>

<WallPaint />
<Frame>
  <Section
    image={{ src: '/before.jpg', alt: 'De Blauwburgwal, verwoest door een bomaanslaag op 11 mei, 1940' }}
    clipPath="inset(0% {negativeProgress}% 0% 0%)"
  >
    <Story dot="/dot_old.png" top="70%" left="25%">
      <h2>Cecilia Maria Antonia Vos</h2>
      <p>
        Cecilia was op 11 mei 1940 gebakjes halen bij banketbakkerswinkel Nollen
        aan de Blauwburgwal. Ze woonde met haar familie aan de Blauwburgwal 2 op
        de hoek met de Singel. Ze werd dodelijk gewond, onder het puin van de
        banketbakkerswinkel Nollen.
        <img src="/bakker.jpg" alt="Foto van banketbakker Nollen" />
      </p>
    </Story>
    <Story alignLeft dot="/dot_old.png" top="65%" left="60%">
      <h2>Johannes Pelle</h2>
      <p>
        Johannes, of Jopie zoals zijn vrienden en familie hem noemden om hem te
        onderscheiden van zijn gelijknamige vader, trouwde met Anna M. van
        Tilburg. Zij kregen 3 kinderen, Johannes, Pieter en Antoon. In 1934 is
        Jopie Pelle met zijn gezin verhuisd naar het overgenomen café op de
        Blauwburgwal 25 die hij ‘Café Pelle’ noemde.
      </p>
      <p>
        Een paar jaar later hadden Jopie en Anna kennelijk huwelijksproblemen,
        wat blijkt uit een krantenadvertentie in het Algemeen Handelsblad. Jopie
        verzocht hierbij “geen geld of goed af te geven aan mijn weggelopen
        huisvrouw daar door mij niets vergoed wordt.”. Pelle is tijdens het
        bombardement in zijn café zwaar gewond geraakt en overgebracht naar het
        Wilhelmina Gasthuis waar hij vijf dagen later overleed.
      </p>
      <img src="/cafe.jpg" alt="Foto van café Pelle" />
    </Story>
    <Story dot="/dot_old.png" top="36%" left="25%">
      <h2>Cornelis Gerardus Schavemaker</h2>
      <p>
        Kees, zoals hij in de familie werd genoemd woonde in Den Haag met zijn
        ouders en studeerde voor radio-marconist aan de ambachtsschool. Zijn oom
        Gerardus Schavemaker was van 1931 tot 1939 eigenaar van de
        banketbakkerswinkel Nollen aan de Blauwburgwal 21.
      </p>
      <p>
        Nollen was in Amsterdam beroemd geworden om zijn bolussen, kersentaart
        en paleisbanket.
      </p>
      <p>
        In 1939 droeg de oom van Kees de banketbakkerswinkel over aan Koning. De
        opa van Kees vond het leuk om de nieuwe eigenaar van Nollen nog wat in
        de winkel te helpen. Kees had zijn opa op 8 mei een brief gestuurd dat
        hij in het weekeinde ook op bezoek zou komen. Die zaterdag was Kees in
        de winkel geweest want zijn opa stuurde zijn ouders een brief met de
        verontrustende mededeling: ‘Sinds Zaterdagmorgen heb ik Kees niet meer
        gezien, toen was hij bij mij in de bakkerij. Hij zeide, nou opa ik ga
        nog wat de stad in, tot straks dan,‘n kwartier later kwam een bom op het
        huis, en de heele boel stortte in elkaar, mijzelf hebben ze uit het puin
        vandaan getrokken en ik mankeer niks, de winkeljuffrouw hebben ze dood
        onder het puin opgegraven, en een meisje van 9 jaar. Tot heden echter
        weet ik niets van uw Kees’ Het meisje was Cecilia Vos en de
        winkeljuffrouw was Maria Groenewoud.
      </p>
      <p>
        Op 17 mei kwam het antwoord; ‘Geliefden, toen ik gisteren van U thuis
        kwam, was er van het Wilhelmina Gasthuis een boodschap gekomen….,
        aangezien Kees daar was gebracht, na hem te hebben gevonden. Alvorens de
        kist voor goed wordt gesloten, mogen we hem nog zien.’
      </p>
      <img src="/kees.jpg" alt="Portretfoto van Kees Schavemaker" />
    </Story>
  </Section>
  <Slider />
  <Section
    image={{ src: '/after.jpg', alt: 'De Blauwburgwal, vredig en stil op 2 december 2020' }}
    clipPath="inset(0% 0% 0% {$progress}%)"
  >
    <Story dot="/dot_new.png" top="50%" left="46%">
      <h2>De Blauwburgwal nu</h2>
      <p>
        Op 2 December 2020 bezochten Jonah Meijers en Rosa Voogd de
        Blauwburgwal. Daar namen ze een kijken naar hoe de buurt er in deze
        tijden uitziet. Het plaque van de herdenking op 11 mei 2020 was te
        vinden op nummer 19. Waar vroeger de banketbakkerswinkel Nollen had
        gestaan. De rij gebouwen die er nu staan zien er erg modern en bijna
        niet meer ‘Amsterdams’ uit. De indruk van de binnenkant van de gebouwen
        voelde corporaal, strak en grauw aan. Een heel ander contrast dan
        vroeger met de mooie winkel Nollen. Huidige bewoners zeggen dat ze onder
        de indruk zijn van wat er gebeurd is, maar verder hebben ze er niet veel
        mee. Je kan duidelijk zien dat het bombardement van 11 mei een grote
        impact op de wal heeft gehad maar wat minder op de mensen die er nu
        wonen, het heeft sindsdien de charme verloren die het ooit had. De
        charme die is overgebleven, kan je vinden aan de hoek van de
        Blauwburgwal en de Herengracht. Daar staat een grote boom die ook in de
        foto’s van 1940 terug te vinden is en daar nog steeds zijn leven lijkt
        te leiden als vanouds.
      </p>
    </Story>
  </Section>
</Frame>
