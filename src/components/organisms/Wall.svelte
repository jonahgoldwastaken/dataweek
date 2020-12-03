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
    <Story dot="/dot_old.png" top="400px" left="200px">
      <h2>Er was eens</h2>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
      <p>Een mooi verhaaltje</p>
    </Story>
  </Section>
  <Slider />
  <Section
    image={{ src: '/after.jpg', alt: 'De Blauwburgwal, vredig en stil op 2 december 2020' }}
    clipPath="inset(0% 0% 0% {$progress}%)"
  >
    <Story dot="/dot_new.png" top="350px" left="360px">
      <h2>Test</h2>
    </Story>
  </Section>
</Frame>
