<template>
  <section class="about-page">
    <nav class="about-page__toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#intro">Quick Intro</a></li>
        <li><a href="#backstory">Backstory</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#discussion">Discussion</a></li>
        <li><a href="#acknowledgements">Acknowledgements</a></li>
        <li><a href="#socials">Socials</a></li>
      </ul>
    </nav>

    <header id="intro" class="about-page__intro">
      <h1>Quick Intro</h1>
      <p>
        The Main List is a searchable and sortable <b>weekly updated</b> table that allows you to
        find the calculated elo ranking of a fighter, it shows the fighters current elo, as well as
        their top achieved elo. On top of that it also shows you their best win (highest elo
        opponent they've beaten) and "days at peak" which is the number of days they would be ranked
        #1 on this list.
      </p>
      <p>
        Additionally, you get to switch between "normal" and "domination" calculations, these change
        the elo calculation slightly, with the "domination" calculation adding 50% more weight to
        finishes and 100% more weight to first round finishes
      </p>
      <p>
        The UFC Leaderboards provide a way to see how my Elo system would re-order the official UFC
        rankings. With colors denoting significant deviations (more on the page). Excuse my
        excessive styling!
      </p>
    </header>

    <article id="backstory" class="about-page__backstory">
      <h2>Backstory</h2>

      <section class="about-page__idea">
        <h3>Idea</h3>
        <p>
          The inspiration behind this website was a YouTube video released by Trixster Productions.
          Said video showed an ad-hoc analysis of calculating elo for UFC fighters based on their
          UFC records. I thought I could however improve this slightly by expanding the calculation
          beyond simply their UFC records and to also make it interactive, add more insights and
          data and to schedule an automatic weekly update.
        </p>
        <p></p>
      </section>

      <section class="about-page__improvements">
        <h3>Improvements</h3>
        <p>
          There are many reasons why looking at UFC fights alone is insufficient, even if you only
          care about UFC fighters. The crux of the issue is that you're assigning a given "newbie"
          value to everyone on their first UFC fight. However, no fighter enters the UFC with a
          clean record, and there is quite the variation between regional fighters being used as
          Fight Night padding and top tier Pride fighters trasitioning into the UFC. Even today
          before getting to the UFC, some fighers have sucessful careers in other promotions
          fighting great fighters and only experience their sunset in the UFC. Yet others never make
          it such as Fedor Emelianenko who many consider GOAT. And while Fedor never fought UFC
          fighters in the UFC, he did fight them outside of it and so if a UFC fighter beat Fedor,
          they should be credited for it.
        </p>
        <p>
          Another more basic issue is the insufficient number of fights that you run your
          calculations on. All fighters will essentially be within a very short throw of each other
          and will not spread normally.
        </p>
      </section>
    </article>

    <article id="development" class="about-page__dev">
      <h2>Development</h2>

      <section class="about-page__elo">
        <h3>Statistical ranking systems are foundamentally unsuitable for MMA</h3>
        <p>
          It is pertinent to first point out, that despite using every recorded fight for our
          calculation, it is still insufficient to truly make use of the Elo system. Discplines
          where Elo truly shines are ones like Chess, where it is possible to participate in
          thousands of games and continously against better opposition until you are the best.
          Magnus Carlsen played over 3000 ranked matches throughout his career. This is impossible
          in MMA, and add insult to injury, the variety of organizations and weight classes gives us
          situations such as Jon Jones entering a relatively vacuous heavyweight division.
        </p>

        <p>
          And not only do fighters fight less, their current elo is not necessarily a good
          indication of their current ability (unlike chess), the nature of the sport means a
          fighters ability can and will inevitably free-fall after an injury or accumulation of
          injuries sometimes in their 30's. Yet their skills are generally much too undeveloped in
          their 20's. Natural ageing also plays a part which it does not in games like Chess. Thus
          even in a perfect world where each MMA fighter has ample competition that they're able to
          fight weekly, their Elo ranking would lag significantly behind the dynamic development of
          their actual ability. Thus, I leave it to the reader to understand that this is not an
          exact science, but neither are the journalist decided rankings put up on ufc.com/rankings
          :)
        </p>
      </section>
      <section class="about-page__bell">
        <h3>Parameter Tuning - Reaching a bell curve</h3>
        <p>
          With the aforementioned disclaimer out of the way, let us focus on what can be done to at
          least immmitate a proper elo distribution that makes sense. The 2 factors that we got to
          play around with are the starting Elo and the base factor which determines how much Elo is
          transfered after each match. I first ran the calculation using the same parameters as
          Trixtar Production (1000,40) and also another variation of (1200,75), I arrived the below
          histograms
        </p>
        <img src="/1.png" alt="Histogram showing parameter tuning results" class="image" />
        <p>
          As can be noted we have a huge spike around the basis Elo, this is because most fighters
          have very few fights and therefore do not deviate much, in the next histograms I only took
          into account fighters with at least 10 fights. Still the initial condition of 1000/40 did
          not resemble a normal distribution, and the top 10 list, included at it's peak a gentleman
          named Travis Fulton. Travis "gamed" these specific settings by fighting new and/or less
          skilled fighters many many times. He finished his career (RIP) at 255 wins and 54 losses.
          And with as much respect as is deserved to someone who fought essentially every week it
          also needs to be said that he probably is not the best fighter out there. Thus I
          experimented with different initial settings until I found a distribution that looked like
          a bell-curve (1200/60). It doesn't flatten out at the top like 1200/75, but isn't jaggedy
          like 1000/40.
        </p>
        <img src="/3.png" alt="Histogram showing parameter tuning results" class="image" />
        <p>
          It does have a small issue, but when considered with the lens of "MMA", this is actually
          no issue at all: the left side of the curve falls precipitiously, however, remember that
          only fighters with 10 fights are considered, if you loose over and over again, chances
          are, you don't want to fight again, as there's a limit to how much abuse a human body can
          take thus the only genetlemen in the far left would be professional record padders. On the
          right side however, we can see a beautiful smooth curve leading us to the very best and
          rarest fighters in the world.
        </p>
        <p>
          The happy surprise in all this? I did not check the top 10 rankings before I plotted them,
          but I am not unhappy with them, there are a couple unexpected names (Gegard Mousasi,
          Patricio Freire) but they are not so unexpected when you look at them more closely. The
          rest of the fighters in the top 10 are all someone's GOAT.
        </p>
      </section>
    </article>

    <article id="discussion" class="about-page__discussion">
      <h2>Discussion</h2>

      <section>
        <h3>Bias Disclaimer - Jon Jones</h3>
        <p>
          I added back the no-contest against DC. This was the famous "picogram" incident. Since the
          incident the ruling authorities (USADA) have declared said amount to fall within
          acceptable levels. As this was not in order to sanction cheating, but an admittal that
          there's nothing alarm raising about said amount, I decided to re-write the record in this
          instance.
        </p>
        <p>
          I know this is going to ruffle some feathers, as no-one else getting caught in said rule
          is going to have their decision re-written in a similar fashion, and it was clearly an
          offense at the time that it happened. But this was the most high-elo MMA fight in history
          of the sport, as such I did not want to have it excluded from consideration by a rule that
          no longer exists, and as far as I know DC himself does not credit the picogram for the
          highkick
        </p>
        <p>
          I had intended to have a separate version without this, however it became a bit too
          complex and annoying to work with 4 different calculations. As of writing this
          (2025/01/12), Jon Jones would've placed first in both versions of the ranking irregardles
          of inclusion or exclusion of that fight. However, I expect that if Islam wins against
          Arman next week, he would overtake Jones in the 'domination' version of that calculation.
          I am not here to change your opinion, just to disclose this change that I've intentionally
          made.
        </p>
      </section>
      <section>
        <h3>Learnings</h3>
        <p>
          I might fill this section up later, as there's a lot of very interesting insights to talk
          about.
        </p>
      </section>
    </article>

    <article id="acknowledgements" class="about-page__acknowledgements">
      <h2>Acknowledgements</h2>
      <p>
        Special thanks to Sherdog! Without their permissive robots.txt and their vast and easily
        scrappable catalogue of fights, this project would not be possible. And the creator of the
        original formula 1 video which inspired the MMA video which inspired me.
      </p>
    </article>

    <footer id="socials" class="about-page__socials">
      <h2>Follow</h2>
      <p>
        <a
          href="https://www.linkedin.com/in/kresanek/"
          target="https://www.linkedin.com/in/kresanek/"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
        |
        <a
          href="https://github.com/RKKRRRKK"
          target="https://github.com/RKKRRRKK"
          rel="noopener noreferrer"
          >GitHub</a
        >
      </p>
    </footer>
  </section>
</template>

<script setup></script>

<style scoped>
.about-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-page__toc {
  margin-bottom: 2rem;
}
.about-page__toc ul {
  list-style: none;
  padding-left: 0;
}
.about-page__toc li {
  margin: 0.25rem 0;
}
.about-page__toc a {
  text-decoration: none;
  color: #007bff;
}
.about-page__toc a:hover {
  text-decoration: underline;
}

.about-page__intro,
.about-page__backstory,
.about-page__development,
.about-page__discussion,
.about-page__acknowledgements,
.about-page__socials {
  margin-bottom: 2rem;
}

.about-page__idea,
.about-page__improvements,
.about-page__bell,
.about-page__elo {
  margin-top: 1rem;
  margin-left: 1rem;
}
.image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>
