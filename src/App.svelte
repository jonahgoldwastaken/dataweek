<script>
  import Introduction from './components/atoms/Introduction.svelte'

  import Title from './components/atoms/Title.svelte'

  import Wall from './components/organisms/Wall.svelte'
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
  lezen. Met dank aan
  <strong>Fred Geukes Foppen</strong>, wie deze verhalen heeft weten te
  verzamelen. Hij heeft hier 2 boeken over geschreven (Bommen Op De Blauwburgwal
  & In Memoriam De Blauwburgwal 11 mei 1940) waar wij veel data uit hebben
  gehaald om in een ander jasje aan U te presenteren. Als u meer over deze
  mensen te weten wil komen kunt u de boeken van Fred Geukes Foppen vinden in de
  stadsboekwinkel
</Introduction>
<Wall />
