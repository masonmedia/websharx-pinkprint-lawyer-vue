<script setup lang="ts">
useHead({ title: 'The Pinkprint Lawyer — Light Editorial' })
useScrollAnimation('.hero-pad')

const { data: page } = await useHomePage()

const formState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

async function handleContactSubmit(e: Event) {
  const form = e.target as HTMLFormElement
  formState.value = 'submitting'
  try {
    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
    })
    formState.value = 'success'
    form.reset()
  } catch {
    formState.value = 'error'
  }
}
</script>

<template>
  <div class="bg-white">

    <!-- NAV -->
    <nav class="navbar navbar-expand-lg sticky-top py-3 bg-white border-bottom border-blush">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary.png" alt="The Pinkprint Lawyer" height="46" />
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-label="Open navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav gap-4">
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">Shop</a></li>
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">Membership</a></li>
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">Legal/Admin</a></li>
            <li class="nav-item"><a class="nav-link fw-medium text-plum nav-link-sm" href="#">Contact</a></li>
          </ul>
        </div>
        <div class="d-none d-lg-flex align-items-center gap-2">
          <NuxtLink to="/dark" class="btn btn-ghost-light rounded-3 px-4 py-2 fw-semibold nav-link-sm">Dark Theme</NuxtLink>
          <a href="#" class="btn btn-rose rounded-3 px-4 py-2 fw-semibold nav-link-sm">Log In</a>
        </div>
      </div>
    </nav>

    <!-- OFFCANVAS MOBILE NAV -->
    <div class="offcanvas offcanvas-end bg-blush" tabindex="-1" id="mobileNav">
      <div class="offcanvas-header bg-blush border-bottom border-blush">
        <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary.png" alt="The Pinkprint Lawyer" height="40" />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column gap-3 pt-4">
        <a href="#" class="nav-link fs-5 text-plum fw-medium">Home</a>
        <a href="#" class="nav-link fs-5 text-plum fw-medium">About</a>
        <a href="#" class="nav-link fs-5 text-plum fw-medium">Shop</a>
        <a href="#" class="nav-link fs-5 text-plum fw-medium">Membership</a>
        <a href="#" class="nav-link fs-5 text-plum fw-medium">Legal/Admin</a>
        <a href="#" class="nav-link fs-5 text-plum fw-medium">Contact</a>
        <div class="d-flex flex-column gap-2 mt-3">
          <a href="#" class="btn btn-rose rounded-3 py-2 fw-semibold">Log In</a>
        </div>
      </div>
    </div>

    <!-- HERO -->
    <section class="bg-white hero-pad">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <span class="d-inline-flex align-items-center gap-2 bg-pink-tint text-rose rounded-pill px-3 py-2 fw-semibold mb-4 eyebrow">
              <i class="bi bi-patch-check-fill"></i> {{ page?.hero.eyebrow }}
            </span>
            <h1 class="display-4 fw-bold text-plum ls-tight mb-4">{{ page?.hero.heading }}</h1>
            <p class="lead text-plum mb-3 body-lead">{{ page?.hero.lead }}</p>
            <p class="text-muted-pp fst-italic mb-5 body-sm">{{ page?.hero.tagline }}</p>
            <div class="d-flex flex-wrap gap-3">
              <a :href="page?.hero.ctaPrimaryUrl" class="btn btn-plum rounded-3 px-4 py-3 fw-semibold">{{ page?.hero.ctaPrimaryLabel }} <i class="bi bi-arrow-right ms-1"></i></a>
              <a :href="page?.hero.ctaSecondaryUrl" class="btn btn-outline-plum rounded-3 px-4 py-3 fw-semibold">{{ page?.hero.ctaSecondaryLabel }}</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rounded-5 overflow-hidden bg-blush-mid">
              <img :src="page?.hero.imageUrl" alt="Legal scales of justice illustration" class="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CREDENTIAL BAR -->
    <div class="border-top border-bottom border-blush py-5" data-scroll>
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-4">
          <template v-for="(cred, i) in page?.creds" :key="i">
            <span class="d-flex align-items-center cred-bar-item">
              <i :class="['bi cred-bar-icon', ['bi-award-fill','bi-briefcase-fill','bi-journal-richtext','bi-people-fill','bi-book-fill'][i]]"></i>
              {{ cred }}
            </span>
            <span v-if="i < (page?.creds.length ?? 0) - 1" class="cred-divider d-none d-md-block"></span>
          </template>
        </div>
      </div>
    </div>

    <!-- MISSION -->
    <section class="p-5">
      <div class="container py-5">
        <div class="row g-0">
          <div class="col-xl-6 mission-col-img">
            <img class="rounded-4 fill-img" :src="page?.mission.imageUrl" alt="Attorney at desk" />
          </div>
          <div class="col-xl-6 d-flex align-items-center">
            <div class="mission-content px-5">
              <p class="text-pink fw-semibold text-uppercase ls-wide mb-3 eyebrow">{{ page?.mission.eyebrow }}</p>
              <h2 class="ls-tight fw-bold display-6 mb-4">{{ page?.mission.heading }}</h2>
              <p class="text-secondary text-opacity-75 body-lead mb-0">{{ page?.mission.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO IT'S FOR -->
    <section class="bg-blush section-pad">
      <div class="container">
        <div class="text-center mb-5">
          <p class="text-rose fw-semibold text-uppercase ls-wide mb-2 eyebrow">{{ page?.audience.eyebrow }}</p>
          <h2 class="text-plum ls-tight mb-3 display-5 fw-bold">{{ page?.audience.heading }}</h2>
          <p class="mx-auto text-muted-pp mw-520 body-md">{{ page?.audience.subtext }}</p>
        </div>
        <div class="row g-4">
          <div v-for="(item, i) in page?.audience.items" :key="i" class="col-md-4">
            <div class="bg-white rounded-4 p-4 h-100 d-flex flex-column">
              <div class="icon-wrap-tint rounded-3 d-flex align-items-center justify-content-center mb-4 flex-shrink-0 icon-56">
                <i :class="['bi fs-4', ['bi-mortarboard-fill','bi-book-fill','bi-briefcase-fill'][i]]"></i>
              </div>
              <p class="text-rose fw-semibold text-uppercase ls-wide mb-2 stage-tag">{{ item.stage }}</p>
              <h3 class="text-plum mb-3 fw-bold card-h">{{ item.title }}</h3>
              <p class="text-plum mb-4 body-sm">{{ item.body }}</p>
              <div class="mt-auto">
                <span class="d-inline-flex align-items-center gap-2 bg-blush text-muted-pp rounded-pill px-3 py-2 fw-semibold badge-sm">
                  <i class="bi bi-arrow-right-circle"></i> {{ item.badge }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FULL BLEED GAVEL -->
    <div class="gavel-bg" :style="page?.fullbleedImageUrl ? `background-image: url('${page.fullbleedImageUrl}')` : ''" data-scroll></div>

    <!-- ABOUT SHAKIERAH -->
    <section class="bg-plum section-pad">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="rounded-4 overflow-hidden">
              <img :src="page?.about.imageUrl" alt="Shakierah Smith" class="about-img" />
            </div>
          </div>
          <div class="col-lg-7">
            <p class="text-pink fw-semibold text-uppercase ls-wide mb-3 eyebrow">{{ page?.about.eyebrow }}</p>
            <h2 class="text-white ls-tight mb-4 display-5 fw-bold">{{ page?.about.heading }}</h2>
            <p class="text-light-75 mb-3 body-lead">{{ page?.about.body1 }}</p>
            <p class="text-light-75 mb-5 body-lead">{{ page?.about.body2 }}</p>
            <a :href="page?.about.ctaUrl" class="btn btn-outline-light rounded-3 px-4 py-3 fw-semibold">{{ page?.about.ctaLabel }} <i class="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="bg-white section-pad">
      <div class="container">
        <div class="row align-items-end mb-4">
          <div class="col-md-8">
            <p class="text-rose fw-semibold text-uppercase ls-wide mb-2 eyebrow">{{ page?.products.eyebrow }}</p>
            <h2 class="text-plum ls-tight fw-bold display-6">{{ page?.products.heading }}</h2>
          </div>
          <div class="col-md-4 text-md-end mt-3 mt-md-0">
            <a href="#" class="btn btn-outline-plum rounded-3 px-4 py-3 fw-semibold">View All Resources</a>
          </div>
        </div>
        <p class="text-muted-pp mb-5 body-md">{{ page?.products.subtext }}</p>
        <div class="row g-4">
          <div v-for="(item, i) in page?.products.items" :key="i" class="col-sm-6 col-lg-3">
            <div class="bg-blush rounded-4 p-4 h-100 d-flex flex-column card-lift">
              <div class="icon-wrap-tint rounded-3 d-flex align-items-center justify-content-center mb-4 flex-shrink-0 icon-52">
                <i :class="['bi fs-icon-lg', ['bi-journal-bookmark','bi-book','bi-clipboard2-check','bi-briefcase'][i]]"></i>
              </div>
              <p class="text-muted-pp fw-semibold text-uppercase ls-wide mb-2 stage-tag">{{ item.stage }}</p>
              <h4 class="text-plum mb-3 fw-bold card-h-sm">{{ item.title }}</h4>
              <p class="text-plum mb-4 body-xs">{{ item.body }}</p>
              <div class="mt-auto">
                <a :href="item.cta_url" class="card-link d-inline-flex align-items-center gap-2">{{ item.cta }} <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="bg-blush-mid rounded-4 p-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 card-lift">
              <div class="d-flex align-items-center gap-4">
                <div class="icon-wrap-tint rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 icon-96">
                  <i class="bi bi-calendar2-check-fill fs-icon-36"></i>
                </div>
                <div>
                  <p class="text-rose fw-semibold text-uppercase ls-wide mb-1 stage-tag">{{ page?.products.session.eyebrow }}</p>
                  <h4 class="text-plum fw-bold mb-1 card-h-lg">{{ page?.products.session.title }}</h4>
                  <p class="text-muted-pp mb-0 body-sm mw-540">{{ page?.products.session.body }}</p>
                </div>
              </div>
              <div class="d-flex flex-column align-items-center align-items-md-end gap-2 flex-shrink-0">
                <a :href="page?.products.session.ctaUrl" class="btn btn-rose rounded-3 px-4 py-3 fw-semibold">{{ page?.products.session.ctaLabel }} <i class="bi bi-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="bg-pink-tint section-pad">
      <div class="container">
        <div class="text-center mb-5">
          <p class="text-rose fw-semibold text-uppercase ls-wide mb-2 eyebrow">{{ page?.hiw.eyebrow }}</p>
          <h2 class="text-plum ls-tight mb-3 display-5 fw-bold">{{ page?.hiw.heading }}</h2>
          <p class="mx-auto text-muted-pp mw-480 body-md">{{ page?.hiw.subtext }}</p>
        </div>
        <div class="row g-4">
          <div v-for="(step, i) in page?.hiw.steps" :key="i" class="col-md-4">
            <div class="bg-white rounded-4 p-4 h-100 d-flex flex-column">
              <div class="icon-wrap-tint rounded-3 d-flex align-items-center justify-content-center mb-4 flex-shrink-0 icon-52">
                <i :class="['bi fs-icon-lg', ['bi-compass-fill','bi-map-fill','bi-rocket-takeoff-fill'][i]]"></i>
              </div>
              <h4 class="text-plum mb-3 fw-bold card-h-md">{{ step.title }}</h4>
              <p class="text-plum mb-0 body-sm">{{ step.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-blush section-pad">
      <div class="container">
        <div class="text-center mb-5">
          <p class="text-rose fw-semibold text-uppercase ls-wide mb-2 eyebrow">{{ page?.testimonials.eyebrow }}</p>
          <h2 class="text-plum ls-tight fw-bold display-5">{{ page?.testimonials.heading }}</h2>
        </div>
        <div class="row g-4">
          <div v-for="(item, i) in page?.testimonials.items" :key="i" class="col-md-4">
            <div class="bg-white rounded-4 p-4 h-100 d-flex flex-column">
              <div class="text-rose mb-3 stars">★★★★★</div>
              <i class="bi bi-quote text-pink mb-3 quote-icon"></i>
              <blockquote class="fst-italic text-plum mb-4 flex-grow-1 testimonial-text">{{ item.quote }}</blockquote>
              <div class="d-flex align-items-center gap-3 mt-auto">
                <div class="icon-wrap-tint rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 icon-44"><i class="bi bi-person-fill fs-icon-md"></i></div>
                <div>
                  <div class="text-plum fw-semibold author-name-sm">{{ item.name }}</div>
                  <div class="text-muted-pp author-role">{{ item.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOOK SPOTLIGHT -->
    <section class="bg-secondary bg-opacity-10 section-pad">
      <div class="container">
        <div class="text-center mb-5">
          <p class="text-rose fw-semibold text-uppercase ls-wide mb-3 eyebrow">{{ page?.book.eyebrow }}</p>
          <h2 class="text-plum ls-tight fw-bold display-6 mb-4">{{ page?.book.heading }}</h2>
          <p class="mx-auto text-plum mb-4 body-lead mw-620">{{ page?.book.body }}</p>
          <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <span class="bg-pink-tint text-rose fw-semibold rounded-pill px-3 py-2 badge-sm">Pre-Law</span>
            <span class="bg-pink-tint text-rose fw-semibold rounded-pill px-3 py-2 badge-sm">Law School</span>
            <span class="bg-pink-tint text-rose fw-semibold rounded-pill px-3 py-2 badge-sm">Bar &amp; Beyond</span>
            <span class="bg-pink-tint text-rose fw-semibold rounded-pill px-3 py-2 badge-sm">First-Gen Perspective</span>
            <span class="bg-pink-tint text-rose fw-semibold rounded-pill px-3 py-2 badge-sm">Digital &amp; Print</span>
          </div>
          <a :href="page?.book.ctaUrl" class="btn btn-rose rounded-3 px-4 py-3 fw-semibold">{{ page?.book.ctaLabel }} <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
        <div class="row g-4 justify-content-center mt-2">
          <div v-for="(cover, i) in page?.book.covers" :key="i" class="col-sm-4 col-lg-3">
            <img :src="cover.url" :alt="`The Pinkprint Lawyer Book Cover ${i + 1}`" class="w-100 rounded-4 book-shadow" />
          </div>
        </div>
      </div>
    </section>

    <!-- START HERE -->
    <section class="bg-rose section-pad">
      <div class="container">
        <div class="text-center mb-5">
          <p class="fw-semibold text-uppercase ls-wide mb-2 text-light-60 eyebrow">{{ page?.start.eyebrow }}</p>
          <h2 class="text-white ls-tight mb-3 display-5 fw-bold">{{ page?.start.heading }}</h2>
          <p class="mx-auto text-light-75 mw-560 body-md">{{ page?.start.body }}</p>
        </div>
        <div class="row g-4 mb-5">
          <div v-for="(path, i) in page?.start.paths" :key="i" class="col-md-4">
            <div class="rounded-4 p-4 h-100 d-flex flex-column card-glass">
              <div class="icon-wrap-ghost rounded-3 d-flex align-items-center justify-content-center mb-4 flex-shrink-0 icon-52">
                <i :class="['bi text-white fs-icon-lg', ['bi-mortarboard-fill','bi-book-fill','bi-clipboard2-check'][i]]"></i>
              </div>
              <span class="d-inline-flex align-items-center rounded-pill px-3 py-2 fw-semibold mb-3 text-white text-uppercase ls-wide badge-start badge-glass">{{ path.badge }}</span>
              <h4 class="text-white mb-3 fw-bold card-h-md">{{ path.title }}</h4>
              <p class="text-light-75 mb-4 body-xs">{{ path.body }}</p>
              <a :href="path.cta_url" class="card-link-light d-inline-flex align-items-center gap-2 mt-auto">{{ path.cta }} <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a :href="page?.start.ctaUrl" class="btn btn-white rounded-3 px-4 py-3 fw-semibold">{{ page?.start.ctaLabel }} <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="bg-plum section-pad">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <p class="text-pink fw-semibold text-uppercase ls-wide mb-3 eyebrow">{{ page?.contact.eyebrow }}</p>
            <h2 class="text-white ls-tight mb-4 display-6 fw-bold">{{ page?.contact.heading }}</h2>
            <p class="text-light-75 mb-4 body-lead">{{ page?.contact.body1 }}</p>
            <p class="text-light-60 mb-5 body-sm">{{ page?.contact.body2 }}</p>
            <div class="d-flex flex-column gap-3">
              <div class="d-flex align-items-start gap-3">
                <div class="icon-wrap-dim rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 icon-40"><i class="bi bi-envelope-fill fs-icon-sm"></i></div>
                <div>
                  <p class="text-white fw-semibold mb-1 body-sm">General Inquiries</p>
                  <p class="text-light-60 mb-0 body-xs">Questions about The Pinkprint Lawyer, resources, or educational content.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="icon-wrap-dim rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 icon-40"><i class="bi bi-people-fill fs-icon-sm"></i></div>
                <div>
                  <p class="text-white fw-semibold mb-1 body-sm">Collaborations &amp; Partnerships</p>
                  <p class="text-light-60 mb-0 body-xs">Brands, organizations, and institutions aligned with access, education, and professional development.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="icon-wrap-dim rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 icon-40"><i class="bi bi-mic-fill fs-icon-sm"></i></div>
                <div>
                  <p class="text-white fw-semibold mb-1 body-sm">Speaking Engagements</p>
                  <p class="text-light-60 mb-0 body-xs">Panels, workshops, guest lectures, or speaking opportunities.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="icon-wrap-dim rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 icon-40"><i class="bi bi-newspaper fs-icon-sm"></i></div>
                <div>
                  <p class="text-white fw-semibold mb-1 body-sm">Media &amp; Press</p>
                  <p class="text-light-60 mb-0 body-xs">Interviews, features, or press-related inquiries.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="bg-plum-mid rounded-4 p-4 p-md-5">
              <p class="text-light-60 mb-4 body-sm">If you are unsure which category your message falls under, that is okay — just share the details, and we will take it from there.</p>
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="d-flex flex-column gap-3" @submit.prevent="handleContactSubmit">
                <input type="hidden" name="form-name" value="contact" />
                <p class="d-none"><label>Don't fill this out: <input name="bot-field" /></label></p>
                <div>
                  <label for="contact-name" class="text-light-60 fw-semibold text-uppercase ls-wide eyebrow d-block mb-2">Name</label>
                  <input id="contact-name" type="text" name="name" required class="optin-input optin-input-full" placeholder="Your full name" />
                </div>
                <div>
                  <label for="contact-email" class="text-light-60 fw-semibold text-uppercase ls-wide eyebrow d-block mb-2">Email</label>
                  <input id="contact-email" type="email" name="email" required class="optin-input optin-input-full" placeholder="Your email address" />
                </div>
                <div>
                  <label for="contact-type" class="text-light-60 fw-semibold text-uppercase ls-wide eyebrow d-block mb-2">Inquiry Type</label>
                  <select id="contact-type" name="inquiry-type" class="optin-input optin-input-full">
                    <option value="" disabled selected>Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration &amp; Partnership</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media &amp; Press</option>
                  </select>
                </div>
                <div>
                  <label for="contact-message" class="text-light-60 fw-semibold text-uppercase ls-wide eyebrow d-block mb-2">Message</label>
                  <textarea id="contact-message" name="message" required class="optin-input optin-input-full" rows="4" placeholder="Share the details of your inquiry"></textarea>
                </div>
                <button type="submit" :disabled="formState === 'submitting'" class="btn-optin btn-optin-full w-100 mt-1">
                  {{ formState === 'submitting' ? 'Sending…' : 'Send Message' }}
                </button>
                <p v-if="formState === 'success'" class="text-white mb-0 body-sm text-center">Thank you — your message has been sent.</p>
                <p v-if="formState === 'error'" class="text-danger mb-0 body-sm text-center">Something went wrong. Please try again.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-white border-top border-blush footer-pad">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary.png" alt="The Pinkprint Lawyer" height="42" />
            <p class="text-muted-pp mt-3 mb-3 footer-tagline">Your roadmap through law school<br />and into the profession.</p>
            <div class="d-flex gap-2">
              <a href="#" aria-label="Instagram" class="bg-blush rounded-3 d-flex align-items-center justify-content-center text-plum text-decoration-none icon-36"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"  class="bg-blush rounded-3 d-flex align-items-center justify-content-center text-plum text-decoration-none icon-36"><i class="bi bi-linkedin"></i></a>
              <a href="#" aria-label="TikTok"    class="bg-blush rounded-3 d-flex align-items-center justify-content-center text-plum text-decoration-none icon-36"><i class="bi bi-tiktok"></i></a>
              <a href="#" aria-label="YouTube"   class="bg-blush rounded-3 d-flex align-items-center justify-content-center text-plum text-decoration-none icon-36"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <p class="text-plum fw-semibold text-uppercase ls-wide mb-3 footer-section-label">About</p>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Shakierah Smith</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Our Mission</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">The Book</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Press</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="text-plum fw-semibold text-uppercase ls-wide mb-3 footer-section-label">Shop</p>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Browse the Shop</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Book a Session</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="text-plum fw-semibold text-uppercase ls-wide mb-3 footer-section-label">Membership</p>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Join</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Member Login</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="text-plum fw-semibold text-uppercase ls-wide mb-3 footer-section-label">Legal/Admin</p>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Contact</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Privacy Policy</a>
            <a href="#" class="d-block text-muted-pp text-decoration-none mb-2 footer-link-sm">Terms of Use</a>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 border-top border-blush pt-4 mt-5">
          <p class="text-muted-pp mb-0 footer-meta">© 2025 The Pinkprint Lawyer. All rights reserved.</p>
          <div class="d-flex gap-4">
            <a href="#" class="text-muted-pp text-decoration-none footer-meta">Privacy Policy</a>
            <a href="#" class="text-muted-pp text-decoration-none footer-meta">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
