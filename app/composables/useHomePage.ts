const WP_API = 'https://pinkprint.wpenginepowered.com/wp-json/wp/v2'
const HOME_PAGE_ID = 87

function parseJsonField<T>(value: string | T, fallback: T): T {
  if (typeof value !== 'string') return value ?? fallback
  try { return JSON.parse(value) as T } catch { return fallback }
}

export function useHomePage() {
  return useAsyncData('home-page', async () => {
    const data = await $fetch<{ meta: Record<string, string> }>(
      `${WP_API}/pages/${HOME_PAGE_ID}?_fields=meta`
    )
    const m = data.meta

    return {
      hero: {
        eyebrow: m.ppl_hero_eyebrow,
        heading: m.ppl_hero_heading,
        lead: m.ppl_hero_lead,
        tagline: m.ppl_hero_tagline,
        ctaPrimaryLabel: m.ppl_hero_cta_primary_label,
        ctaPrimaryUrl: m.ppl_hero_cta_primary_url,
        ctaSecondaryLabel: m.ppl_hero_cta_secondary_label,
        ctaSecondaryUrl: m.ppl_hero_cta_secondary_url,
        imageUrl: m.ppl_hero_image_url,
      },
      creds: [m.ppl_cred_1, m.ppl_cred_2, m.ppl_cred_3, m.ppl_cred_4, m.ppl_cred_5].filter(Boolean),
      mission: {
        eyebrow: m.ppl_mission_eyebrow,
        heading: m.ppl_mission_heading,
        body: m.ppl_mission_body,
        imageUrl: m.ppl_mission_image_url,
      },
      audience: {
        eyebrow: m.ppl_audience_eyebrow,
        heading: m.ppl_audience_heading,
        subtext: m.ppl_audience_subtext,
        items: parseJsonField<{ stage: string; title: string; body: string; badge: string }[]>(m.ppl_audience_items, []),
      },
      about: {
        eyebrow: m.ppl_about_eyebrow,
        heading: m.ppl_about_heading,
        body1: m.ppl_about_body_1,
        body2: m.ppl_about_body_2,
        imageUrl: m.ppl_about_image_url,
        ctaLabel: m.ppl_about_cta_label,
        ctaUrl: m.ppl_about_cta_url,
      },
      products: {
        eyebrow: m.ppl_products_eyebrow,
        heading: m.ppl_products_heading,
        subtext: m.ppl_products_subtext,
        items: parseJsonField<{ stage: string; title: string; body: string; cta: string; cta_url: string }[]>(m.ppl_products_items, []),
        session: {
          eyebrow: m.ppl_session_eyebrow,
          title: m.ppl_session_title,
          body: m.ppl_session_body,
          ctaLabel: m.ppl_session_cta_label,
          ctaUrl: m.ppl_session_cta_url,
        },
      },
      hiw: {
        eyebrow: m.ppl_hiw_eyebrow,
        heading: m.ppl_hiw_heading,
        subtext: m.ppl_hiw_subtext,
        steps: [
          { title: m.ppl_step_1_title, body: m.ppl_step_1_body },
          { title: m.ppl_step_2_title, body: m.ppl_step_2_body },
          { title: m.ppl_step_3_title, body: m.ppl_step_3_body },
        ],
      },
      testimonials: {
        eyebrow: m.ppl_testimonials_eyebrow,
        heading: m.ppl_testimonials_heading,
        items: parseJsonField<{ quote: string; name: string; role: string }[]>(m.ppl_testimonials_items, []),
      },
      book: {
        eyebrow: m.ppl_book_eyebrow,
        heading: m.ppl_book_heading,
        body: m.ppl_book_body,
        ctaLabel: m.ppl_book_cta_label,
        ctaUrl: m.ppl_book_cta_url,
        covers: parseJsonField<{ url: string }[]>(m.ppl_book_covers, []),
      },
      start: {
        eyebrow: m.ppl_start_eyebrow,
        heading: m.ppl_start_heading,
        body: m.ppl_start_body,
        paths: parseJsonField<{ badge: string; title: string; body: string; cta: string; cta_url: string }[]>(m.ppl_start_paths, []),
        ctaLabel: m.ppl_start_cta_label,
        ctaUrl: m.ppl_start_cta_url,
      },
      fullbleedImageUrl: m.ppl_fullbleed_image_url,
      contact: {
        eyebrow: m.ppl_contact_eyebrow,
        heading: m.ppl_contact_heading,
        body1: m.ppl_contact_body_1,
        body2: m.ppl_contact_body_2,
      },
    }
  })
}
