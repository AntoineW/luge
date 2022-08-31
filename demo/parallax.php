<?php include('_header.php'); ?>

  <main class="layout l-parallax" data-lg-page="scroll">
    <section class="section s-hero h-fullheight">
      <div class="h-wrapper">
        <div class="s__inner">
          <div class="s__content">
            <h1 class="s__title t-title-xl">
              Parallax
            </h1>
          </div>
          <!-- .s__content -->
        </div>
        <!-- .s__inner -->
      </div>
      <!-- .h-wrapper -->
    </section>
    <!-- .p-hero -->

    <section class="section s-parallax">
      <h2 class="s__title t-title-lg">Here are some parallax examples</h2>

      <div
        class="s__shape s__shape--1"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
      ></div>

      <div
        class="s__shape s__shape--2"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
        data-lg-parallax-anchor="bottom"
      ></div>

      <div
        class="s__shape s__shape--3"
        data-lg-parallax
        data-lg-parallax-amplitude="1"
        data-lg-parallax-anchor="top"
      ></div>

      <div
        class="s__media"
        data-lg-parallax="media"
      >
        <img
          src="/demo/static/img/image-1.jpg"
          alt=""
          width="2560"
          height="1440"
        />
      </div>
    </section>
  </main>
  <!-- .l-reveal -->

<?php include('_footer.php'); ?>