<?php include('_header.php'); ?>

  <main class="layout l-front-page l-front-page--2" data-lg-page="second">
    <section class="section s-hero h-fullheight">
      <div class="h-wrapper">
        <div class="s__inner">
          <div class="s__content" data-lg-reveal="fade">
            <h1 class="s__title t-title-xl">
              Lorem ipsum dolor sit amet.
            </h1>

            <div class="s__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus a deleniti suscipit, labore magnam iusto eveniet
              aliquid. Voluptatem, dolorem quia?
            </div>
            <!-- .s__text -->

            <a href="/demo/" class="s__btn btn-outline">
              Lorem, ipsum dolor.
            </a>
          </div>
          <!-- .s__content -->

          <div class="s__illustration">
            <div
              data-lg-lottie="/demo/static/lottie/example.json"
              data-lg-lottie-loop
              data-lg-lottie-loop-frame="93"
              data-lg-lottie-autoplay
            ></div>
          </div>
          <!-- .s__illustration -->
        </div>
        <!-- .s__inner -->
      </div>
      <!-- .h-wrapper -->
    </section>
    <!-- .p-hero -->

    <section class="section s-parallax" data-lg-reveal="slide-y">
      <h2 class="s__title t-title-lg">Here are some parallax examples</h2>

      <div
        class="s__shape s__shape--1"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
        data-lg-reveal="fade"
      ></div>
      <div
        class="s__shape s__shape--2"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
        data-lg-parallax-anchor="bottom"
        data-lg-reveal="fade"
      ></div>
      <div
        class="s__shape s__shape--3"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
        data-lg-parallax-anchor="top"
        data-lg-reveal="fade"
      ></div>

      <div
        class="s__media"
        data-lg-parallax="child"
        data-lg-parallax-amplitude="-5"
        data-lg-reveal="fade"
        data-lg-reveal-multiple
      >
        <img
          src="/demo/static/img/image-1.jpg"
          alt=""
          width="2560"
          height="1440"
        />
      </div>
    </section>
    <!-- .s-parallax -->

    <section class="section s-sticky">
      <div class="h-wrapper">
        <div class="s__content rte">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias dolores, ex tenetur amet adipisci consequuntur debitis
            laudantium? Sapiente fugiat vero excepturi animi molestiae,
            sunt asperiores, possimus quae placeat neque minus.
          </p>
          <p>
            Culpa sunt tempora facilis delectus molestiae necessitatibus
            praesentium. Reiciendis eius dolorum blanditiis voluptatum
            incidunt qui excepturi porro autem provident temporibus
            deserunt iste quod ea odio, magnam aliquam eveniet nobis
            voluptates.
          </p>
          <p>
            Qui quas hic mollitia eos, eligendi nam aliquam recusandae
            optio laboriosam. Eum repellat voluptate commodi voluptates
            ullam sunt, reprehenderit consectetur ut facere sit
            necessitatibus, quasi neque officiis assumenda consequatur
            provident!
          </p>
          <p>
            Dolor, odit? Nihil sed soluta ullam! Quaerat tempora voluptas
            fuga eos, iusto voluptate quod id excepturi ut facere
            officiis. Harum aliquid mollitia ipsa cumque animi sapiente
            reprehenderit, illo expedita magnam?
          </p>
          <p>
            Illum maiores corporis laborum voluptatem minus eum dolorum
            necessitatibus ducimus magni, nisi atque provident quod
            consequatur porro aliquam laudantium quas neque cum impedit
            fugiat quidem hic rerum. Corporis, temporibus aliquid.
          </p>

          <div
              data-lg-lottie="/demo/static/lottie/example.json"
              data-lg-lottie-loop
              data-lg-lottie-autoplay
            ></div>
        </div>
        <!-- .s__content -->

        <div class="block b-sticky" data-lg-sticky>This is sticky</div>
        <!-- .b-sticky -->
      </div>
      <!-- .h-wrapper -->
    </section>
    <!-- .s-sticky -->
  </main>
  <!-- .l-front-page -->

<?php include('_footer.php'); ?>