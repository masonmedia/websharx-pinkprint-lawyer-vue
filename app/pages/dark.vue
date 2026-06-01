<script setup lang="ts">
useHead({ title: 'The Pinkprint Lawyer — Dark Luxury' })
useScrollAnimation('.hero')
</script>

<template>
  <div>

    <!-- NAV -->
    <nav class="navbar navbar-expand-lg py-3 dark-navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary (2).png" alt="The Pinkprint Lawyer" height="44" />
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-label="Open navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav gap-4">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Membership</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Legal/Admin</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
        <div class="d-none d-lg-flex align-items-center gap-2">
          <NuxtLink to="/" class="btn btn-nav-cta btn-nav-ghost">Light Theme</NuxtLink>
          <a href="#" class="btn btn-nav-cta">Log In</a>
        </div>
      </div>
    </nav>

    <!-- OFFCANVAS MOBILE NAV -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileNav" style="background-color: var(--plum-mid);">
      <div class="offcanvas-header" style="background-color: var(--plum); border-bottom: 1px solid rgba(255,137,197,0.25);">
        <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary (2).png" alt="The Pinkprint Lawyer" height="40" />
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column gap-3 pt-4">
        <a href="#" class="nav-link fs-5">Home</a>
        <a href="#" class="nav-link fs-5">About</a>
        <a href="#" class="nav-link fs-5">Shop</a>
        <a href="#" class="nav-link fs-5">Membership</a>
        <a href="#" class="nav-link fs-5">Legal/Admin</a>
        <a href="#" class="nav-link fs-5">Contact</a>
        <a href="#" class="btn btn-nav-cta mt-3">Log In</a>
      </div>
    </div>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-gradient"></div>
      <div class="container position-relative">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <p class="hero-eyebrow mb-4">First-Generation. Practicing. Prepared.</p>
            <h1 class="mb-4">Your <em>Pinkprint</em> for Law School, the Bar, and Beyond.</h1>
            <p class="hero-lead mb-5">Resources that are practical, evidence-informed, and designed to help you move through each stage of this journey with clarity, confidence, and intention. This is not about perfection. It is about preparation.</p>
            <div class="d-flex flex-wrap gap-3">
              <a href="#" class="btn btn-hero-primary">Start Here</a>
              <a href="#" class="btn btn-hero-ghost">Explore the Pinkprints</a>
            </div>
          </div>
          <div class="col-lg-5 text-center d-none d-lg-block">
            <div class="hero-photo position-relative d-inline-block">
              <img src="https://images.pexels.com/photos/26646636/pexels-photo-26646636.png" alt="Attorney" />
              <div class="hero-photo-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIVIDER BAND -->
    <div class="band-divider" data-scroll>
      <div class="container">
        <div class="row align-items-center text-center text-md-start">
          <div class="col-md-8">
            <p>First-generation law graduate &nbsp;·&nbsp; Practicing attorney &nbsp;·&nbsp; Published researcher &nbsp;·&nbsp; Dedicated mentor</p>
          </div>
          <div class="col-md-4 text-md-end mt-2 mt-md-0">
            <a href="#" class="text-white fw-semibold band-link">Meet Shakierah →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="section-about">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="about-photo">
              <img src="https://cdn.rit.edu/images/news/2024-04/WEB-20240210_shakira-smith_nycalumniupdate_0011_jamod.jpg" alt="Shakierah Smith" />
            </div>
          </div>
          <div class="col-lg-7">
            <p class="section-label mb-3">About The Pinkprint</p>
            <h2 class="mb-4">Too many law students are expected to simply "figure it out".</h2>
            <p class="about-lead mb-4">I did not enter law school with a built-in roadmap or a family of attorneys. I came in as a first-generation student, learning the language, the expectations, and the unspoken rules of the profession in real time — often through trial and error. What I quickly recognized was that intelligence and work ethic were not the issue. Access to clear, honest guidance was.</p>
            <p class="about-lead mb-5">My path was defined by preparation, discipline, and a deep commitment to excellence. I graduated in the top five percent of my class at the University at Buffalo School of Law. Out of this came The Pinkprint Lawyer — a guide for law students left to just "figure it out".</p>
            <a href="#" class="btn-product">Read the Full Story <i class="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- AUDIENCE -->
    <section class="section-audience">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label mb-2">Who This Platform Serves</p>
          <h2>Built for every stage of<br class="d-none d-md-block" /> the legal journey.</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="audience-card">
              <div class="audience-icon"><i class="bi bi-mortarboard"></i></div>
              <p class="audience-card-num">Aspiring</p>
              <h3>Pre-Law Students</h3>
              <p>Preparing for law school and want to make well-informed decisions before day one.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="audience-card">
              <div class="audience-icon"><i class="bi bi-journal-bookmark"></i></div>
              <p class="audience-card-num">Current</p>
              <h3>Law Students</h3>
              <p>Managing coursework, examinations, and professional opportunities — you want structure, not overwhelm.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="audience-card">
              <div class="audience-icon"><i class="bi bi-bank"></i></div>
              <p class="audience-card-num">Graduates</p>
              <h3>Bar Candidates</h3>
              <p>Transitioning into the profession and approaching what comes next with confidence and clarity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section class="section-products">
      <div class="container">
        <div class="row align-items-end mb-5">
          <div class="col-md-8">
            <p class="section-label mb-2">Featured Digital Products</p>
            <h2>Clear takeaways.<br class="d-none d-md-block" /> Realistic strategies. Immediate results.</h2>
          </div>
          <div class="col-md-4 text-md-end mt-3 mt-md-0">
            <a href="#" class="btn-product">View All Pinkprints</a>
          </div>
        </div>
        <div class="product-row">
          <div class="row align-items-center g-4">
            <div class="col-lg-1"><p class="product-num mb-0">01</p></div>
            <div class="col-lg-7">
              <h4>Pre-Law Preparation &amp; Planning</h4>
              <p>Tools and frameworks to help prospective students make evidence-informed decisions before day one.</p>
            </div>
            <div class="col-lg-2"><span class="product-tag">Aspiring</span></div>
            <div class="col-lg-2 text-lg-end"><a href="#" class="btn-product">Get It</a></div>
          </div>
        </div>
        <div class="product-row">
          <div class="row align-items-center g-4">
            <div class="col-lg-1"><p class="product-num mb-0">02</p></div>
            <div class="col-lg-7">
              <h4>Law School Study Systems &amp; Academic Strategy</h4>
              <p>Structured frameworks designed to help you manage coursework and perform with intention.</p>
            </div>
            <div class="col-lg-2"><span class="product-tag">Current</span></div>
            <div class="col-lg-2 text-lg-end"><a href="#" class="btn-product">Get It</a></div>
          </div>
        </div>
        <div class="product-row">
          <div class="row align-items-center g-4">
            <div class="col-lg-1"><p class="product-num mb-0">03</p></div>
            <div class="col-lg-7">
              <h4>Bar Exam Prep &amp; Career Development</h4>
              <p>Examination preparation, internship positioning, and career development guides.</p>
            </div>
            <div class="col-lg-2"><span class="product-tag">Graduates</span></div>
            <div class="col-lg-2 text-lg-end"><a href="#" class="btn-product">Get It</a></div>
          </div>
        </div>
        <div class="product-row">
          <div class="row align-items-center g-4">
            <div class="col-lg-1"><p class="product-num mb-0">04</p></div>
            <div class="col-lg-7">
              <h4>Post-Graduate &amp; Early Career Guidance</h4>
              <p>Transition resources for attorneys entering the profession after bar passage.</p>
            </div>
            <div class="col-lg-2"><span class="product-tag">Attorneys</span></div>
            <div class="col-lg-2 text-lg-end"><a href="#" class="btn-product">Get It</a></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="product-session-card">
            <div class="row align-items-center g-4">
              <div class="col-lg-1">
                <div class="session-icon-wrap">
                  <i class="bi bi-calendar2-check-fill fs-icon-lg text-pink"></i>
                </div>
              </div>
              <div class="col-lg-7">
                <p class="product-num mb-1">1-on-1 Strategy Session</p>
                <h4 class="mb-1">Pre-Law, Law School &amp; Post-Law Strategy Meeting</h4>
                <p>A focused, one-hour session tailored to where you are in your journey — from choosing a law school to navigating the bar and early career.</p>
              </div>
              <div class="col-lg-4 text-lg-end">
                <a href="#" class="btn-product">Book a Session</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOOK SPOTLIGHT -->
    <section class="section-book">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label mb-3">Now Available</p>
          <h2 class="mb-4">The Pinkprint Guides</h2>
          <p class="book-lead">Three guides. One through-line. Each Pinkprint meets you at a different stage of the legal journey — from your first steps into law school through the bar exam and into the profession.</p>
          <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <span class="product-tag">Pre-Law</span>
            <span class="product-tag">Law School</span>
            <span class="product-tag">Bar &amp; Beyond</span>
            <span class="product-tag">First-Gen Perspective</span>
            <span class="product-tag">Digital &amp; Print</span>
          </div>
          <a href="#" class="btn-book">Shop the Guides <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
        <div class="row g-4 justify-content-center mt-2">
          <div class="col-sm-4 col-lg-3">
            <img src="/assets/book_covers/Book (1)/The Pinkprint Lawyer_Book (1) - Front Cover.png" alt="The Pinkprint Lawyer Book Cover 1" class="w-100 rounded-4 book-shadow-dark" />
          </div>
          <div class="col-sm-4 col-lg-3">
            <img src="/assets/book_covers/Book (2)/The Pinkprint Lawyer_Book (2) - Front Cover.png" alt="The Pinkprint Lawyer Book Cover 2" class="w-100 rounded-4 book-shadow-dark" />
          </div>
          <div class="col-sm-4 col-lg-3">
            <img src="/assets/book_covers/Book (3)/The Pinkprint Lawyer_Book (3) - Front Cover.png" alt="The Pinkprint Lawyer Book Cover 3" class="w-100 rounded-4 book-shadow-dark" />
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section-testimonials">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label mb-2">From the Community</p>
          <h2>What readers and students<br class="d-none d-md-block" /> are saying.</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="testimonial-card">
              <div class="testimonial-stars mb-3">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-quote">"I went into 1L thinking I just needed to work hard. The Pinkprint Lawyer showed me I needed to work smart. The study systems guide alone changed my entire approach to outlining and exam preparation."</p>
              <p class="testimonial-name mb-1">Danielle R.</p>
              <p class="testimonial-role">2L at a Top-25 Law School</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial-card">
              <div class="testimonial-stars mb-3">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-quote">"As a first-gen student I had no one to ask. Shakierah's resources filled that gap in a way I can't overstate. The bar prep guide helped me stay organized through the most stressful months of my life."</p>
              <p class="testimonial-name mb-1">Marcus T.</p>
              <p class="testimonial-role">Newly Admitted Attorney</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial-card">
              <div class="testimonial-stars mb-3">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-quote">"The pre-law planning guide helped me realize I was applying to the wrong schools for the wrong reasons. I redirected, got in somewhere that fit, and I'm thriving. Worth every penny and more."</p>
              <p class="testimonial-name mb-1">Imani L.</p>
              <p class="testimonial-role">Pre-Law Student, University of Florida</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- START HERE -->
    <section class="section-start">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label mb-2">Find Your Path</p>
          <h2 class="text-plum">Start Here — choose what fits<br class="d-none d-md-block" /> your current season.</h2>
        </div>
        <div class="row g-4 mb-5">
          <div class="col-md-4">
            <div class="start-path">
              <div class="start-path-icon"><i class="bi bi-mortarboard-fill"></i></div>
              <h4>New to Law School</h4>
              <p>Explore pre-law preparation guides and foundation resources built for day one.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="start-path">
              <div class="start-path-icon"><i class="bi bi-journal-bookmark-fill"></i></div>
              <h4>Currently Enrolled</h4>
              <p>Find study systems, exam strategy, and academic frameworks for active students.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="start-path">
              <div class="start-path-icon"><i class="bi bi-briefcase-fill"></i></div>
              <h4>Preparing for the Bar</h4>
              <p>Access bar prep resources and early-career transition tools for graduates.</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#" class="btn btn-start-dark">Start Here <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section-contact">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <p class="section-label mb-3">Contact</p>
            <h2 class="mb-4">Get in Touch</h2>
            <p class="contact-lead">I am always open to thoughtful conversation and meaningful opportunities. This page is the best way to get in touch for professional inquiries, collaborations, or invitations.</p>
            <p class="contact-sub">Whether you are reaching out with a question or exploring a potential partnership, I appreciate clarity and intention, and I do my best to respond with the same.</p>
            <div class="d-flex flex-column gap-3">
              <div class="d-flex align-items-start gap-3">
                <div class="contact-icon-wrap"><i class="bi bi-envelope-fill"></i></div>
                <div>
                  <p class="contact-item-title">General Inquiries</p>
                  <p class="contact-item-desc">Questions about The Pinkprint Lawyer, resources, or educational content.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="contact-icon-wrap"><i class="bi bi-people-fill"></i></div>
                <div>
                  <p class="contact-item-title">Collaborations &amp; Partnerships</p>
                  <p class="contact-item-desc">Brands, organizations, and institutions aligned with access, education, and professional development.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="contact-icon-wrap"><i class="bi bi-mic-fill"></i></div>
                <div>
                  <p class="contact-item-title">Speaking Engagements</p>
                  <p class="contact-item-desc">Panels, workshops, guest lectures, or speaking opportunities.</p>
                </div>
              </div>
              <div class="d-flex align-items-start gap-3">
                <div class="contact-icon-wrap"><i class="bi bi-newspaper"></i></div>
                <div>
                  <p class="contact-item-title">Media &amp; Press</p>
                  <p class="contact-item-desc">Interviews, features, or press-related inquiries.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="contact-form-card">
              <p class="contact-item-desc mb-4">If you are unsure which category your message falls under, that is okay — just share the details, and we will take it from there.</p>
              <div class="d-flex flex-column gap-3">
                <div>
                  <label class="contact-label">Name</label>
                  <input type="text" class="contact-input" placeholder="Your full name" />
                </div>
                <div>
                  <label class="contact-label">Email</label>
                  <input type="email" class="contact-input" placeholder="Your email address" />
                </div>
                <div>
                  <label class="contact-label">Inquiry Type</label>
                  <select class="contact-input">
                    <option value="" disabled selected>Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration &amp; Partnership</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media &amp; Press</option>
                  </select>
                </div>
                <div>
                  <label class="contact-label">Message</label>
                  <textarea class="contact-input" rows="4" placeholder="Share the details of your inquiry"></textarea>
                </div>
                <button class="btn-contact mt-1">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="dark-footer">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="footer-logo">
              <img src="/assets/logos/1_Primary/The Pinkprint Lawyer_Primary (2).png" alt="The Pinkprint Lawyer" />
            </div>
            <p class="footer-tagline-dark mt-3">Your roadmap through law school<br />and into the profession.</p>
            <div class="d-flex gap-2 mt-3">
              <a href="#" aria-label="Instagram" class="footer-social-icon"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"  class="footer-social-icon"><i class="bi bi-linkedin"></i></a>
              <a href="#" aria-label="TikTok"    class="footer-social-icon"><i class="bi bi-tiktok"></i></a>
              <a href="#" aria-label="YouTube"   class="footer-social-icon"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <p class="footer-col-title">About</p>
            <a href="#" class="footer-link-dark">Shakierah Smith</a>
            <a href="#" class="footer-link-dark">Our Mission</a>
            <a href="#" class="footer-link-dark">Press</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="footer-col-title">Shop</p>
            <a href="#" class="footer-link-dark">Browse the Shop</a>
            <a href="#" class="footer-link-dark">Book a Session</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="footer-col-title">Membership</p>
            <a href="#" class="footer-link-dark">Join</a>
            <a href="#" class="footer-link-dark">Member Login</a>
          </div>
          <div class="col-6 col-lg-2">
            <p class="footer-col-title">Legal/Admin</p>
            <a href="#" class="footer-link-dark">Contact</a>
            <a href="#" class="footer-link-dark">Privacy Policy</a>
            <a href="#" class="footer-link-dark">Terms of Use</a>
          </div>
        </div>
        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p class="footer-copy mb-0">© 2025 The Pinkprint Lawyer. All rights reserved.</p>
          <div class="d-flex gap-4">
            <a href="#" class="footer-link-dark mb-0">Privacy</a>
            <a href="#" class="footer-link-dark mb-0">Terms</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
