<script>
  import Title from './components/atoms/Title.svelte'
  import Introduction from './components/atoms/Introduction.svelte'
  import Wall from './components/organisms/Wall.svelte'
  import Subtitle from './components/atoms/Subtitle.svelte'
</script>

<style global>
  @import 'normalize.css/opinionated';
  *,
  *:before,
  *:after {
    user-select: none;
  }
  body {
    pointer-events: none;
    font-family: 'Lora', serif;
  }
  a {
    pointer-events: all;
  }
</style>

<Title>De Blauwburgwal - toen en nu</Title>
<Introduction large center>
  Dataweek project van Jonah Meijers en Rosa Voogd.
</Introduction>
<Introduction>
  Met dit project willen wij inzicht geven in het bombardement op de
  Blauwburgwal van 11 mei 1940. U krijgt te zien hoe de plek is veranderd van
  voor de bominslag, na de bominslag en het heden. Dit kunt U zien in de foto’s
  maar ook lezen in de verhalen van slachtoffers en hun leven voor de ramp.
</Introduction>
<Introduction>
  Totaal zijn er 44 mensen overleden, 79 gewond geraakt en zijn er meerdere
  gebouwen volledig ingestort. Hier kunt u de verhalen van enkelen bekijken en
  lezen. Met dank aan Fred Geukes Foppen, wie deze verhalen heeft weten te
  verzamelen. Hij heeft hier 2 boeken over geschreven (Bommen Op De Blauwburgwal
  & In Memoriam De Blauwburgwal 11 mei 1940) waar wij veel data uit hebben
  gehaald om in een ander jasje aan U te presenteren. Als u meer over de
  verhalen van deze mensen te weten wil komen kunt u de boeken van Fred Geukes
  Foppen vinden in de
  <a
    href="https://www.stadsboekwinkel.nl/auteur/fred-geukes-foppen/"
    target="_bank"
    rel="noopener norferrer"
  >stadsboekwinkel</a>.
</Introduction>
<Wall />
<Subtitle>Bronnen</Subtitle>
<Introduction>
  Fred Geukes Foppen. (2020). In Memoriam De Blauwburgwal 11 Mei 1940.
  Amsterdam, Nederland: Champlemy Pers Amsterdam.
</Introduction>
<Introduction>
  Gemeente Amsterdam Klaas-Bindert de Haan. (2014 april). Amsterdam in de Tweede
  Wereldoorlog. Geraadpleegd op december 2020, van
  <a
    href="https://maps.amsterdam.nl/woii/?LANG=nl"
    target="_bank"
    rel="noopener noreferrer"
  >https://maps.amsterdam.nl/woii/?LANG=nl</a>
</Introduction>
<Introduction>
  Mandry, G. (z.d.). [Vintage paper]. Geraadpleegd van
  <a
    href="https://www.pinterest.pt/pin/540150549038715687/"
    target="_blank"
    rel="noopener noreferrer"
  >https://www.pinterest.pt/pin/540150549038715687/</a>
</Introduction>
<Introduction>
  Auteursrechtvrij. (1940). Bominslag op de Blauwburgwal [foto]. Geraadpleegd
  van
  <a
    href="https://archief.amsterdam/beeldbank/detail/9e4c5a2f-d217-6e77-d8a4-2b078a8c1978"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://archief.amsterdam/beeldbank/detail/9e4c5a2f-d217-6e77-d8a4-2b078a8c1978
  </a>
</Introduction>
<Introduction>
  Auteursrechtvrij. (1936). Blauwburgwal 19 [foto]. Geraadpleegd van
  <a
    href="https://archief.amsterdam/beeldbank/detail/14839cf0-b1e8-ea1d-32fc-a393a0e5e882/media/88f662cc-baab-e5e3-881d-316a05053ce0?mode=detail&view=horizontal&q=012000003615&rows=1&page=1"
    target="_blank"
    rel="noopener noreferrer"
  >https://archief.amsterdam/beeldbank/detail/14839cf0-b1e8-ea1d-32fc-a393a0e5e882/media/88f662cc-baab-e5e3-881d-316a05053ce0?mode=detail&view=horizontal&q=012000003615&rows=1&page=1</a>
</Introduction>
