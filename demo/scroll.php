<?php include('_header.php'); ?>

  <main class="layout l-scroll" data-lg-page="scroll">
    <section class="section s-hero h-fullheight">
      <div class="h-wrapper">
        <div class="s__inner">
          <div class="s__content">
            <h1 class="s__title t-title-xl">
              Scroll animations
            </h1>
          </div>
          <!-- .s__content -->
        </div>
        <!-- .s__inner -->
      </div>
      <!-- .h-wrapper -->
    </section>
    <!-- .p-hero -->

    <div class="b-scroll b-scroll--1" data-lg-scroll data-lg-scroll-animate="{'opacity': ['0', '1'], 'rotateY': ['-90', '90']}" data-lg-scroll-inertia="1.9">
      Scroll block 1
    </div><!-- .b-scroll -->

    <div class="b-scroll" data-lg-scroll data-lg-scroll-animate="{'x': ['-50vw', '50vw'], 'y': ['-100vh', '100vh']}" data-lg-scroll-inertia="0.1">
      Scroll block 2
    </div><!-- .b-scroll -->

    <div class="b-scroll" data-lg-scroll data-lg-scroll-animate="{'rotate': ['-360deg', '360deg'], 'scale': [0, 1]}" data-lg-scroll-yoyo>
      Scroll block 3
    </div><!-- .b-scroll -->

    <div class="b-grid">
      <?php for ( $i = 1; $i <= 12; $i++ ) : ?>
      <div class="b-grid__cell" data-lg-scroll data-lg-scroll-animate="{'rotateY': ['0deg', '360deg']}" data-lg-scroll-inertia="{0.1,0.2}">
        <div class="b-grid__cell__inner">
          <?php echo $i; ?>
        </div>
      </div>
      <?php endfor; ?>
    </div><!-- .b-grid -->

    <div class="b-background" data-lg-scroll="background-y" data-lg-scroll-inertia="0.05">
      <span data-lg-scroll data-lg-scroll-animate="{'scale': ['0', '4.0']}" data-lg-scroll-yoyo>
        Lorem, ipsum.
      </span>
    </div>
  </main>
  <!-- .l-reveal -->

<?php include('_footer.php'); ?>