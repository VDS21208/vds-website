import { defineCollection, z } from 'astro:content';

const ctaSchema = z.object({
  label: z.string(),
  url: z.string(),
}).nullable().optional();

const faqSchema = z.array(z.object({
  q: z.string(),
  a: z.string(),
})).optional().default([]);

const pageSchema = z.object({
  url: z.string(),
  collection: z.string().optional(),
  pageType: z.string().optional().default(""),
  parent: z.string().optional().default(""),
  status: z.string().optional().default("Launch"),
  seoTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),
  announcementBar: z.string().optional().default(""),
  h1: z.string().optional().default(""),
  heroEyebrow: z.string().optional().default(""),
  heroSubhead: z.string().optional().default(""),
  heroCTAPrimary: ctaSchema,
  heroCTASecondary: ctaSchema,
  heroStats: z.array(z.string()).optional().default([]),
  heroImage: z.string().optional().default(""),
  faq: faqSchema,
  finalCTAHeading: z.string().optional().default(""),
  finalCTABody: z.string().optional().default(""),
  finalCTAButtons: z.array(z.object({ label: z.string(), url: z.string() })).optional().default([]),
  schemaType: z.string().optional().default("Article"),
  internalLinks: z.string().optional().default(""),
  canonical: z.string().optional().default(""),
  ogTitle: z.string().optional().default(""),
  ogDescription: z.string().optional().default(""),
  ogImage: z.string().optional().default(""),
  ogType: z.string().optional().default("website"),
  robots: z.string().optional().default("index, follow"),
  speakable: z.string().optional().default(""),
  author: z.string().optional().default("Vision Detection Systems"),
  analyticIcon: z.string().optional().default(""),
  analyticImage: z.string().optional().default(""),
  analyticHeadline: z.string().optional().default(""),
  useCases: z.array(z.string()).optional().default([]),
  specsList: z.array(z.object({ label: z.string(), value: z.string() })).optional().default([]),
  relatedIndustries: z.array(z.string()).optional().default([]),
  featureTiles: z.array(z.object({ title: z.string(), body: z.string() })).optional().default([]),
  tags: z.string().optional().default(""),
  notes: z.string().optional().default(""),
});

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pageSchema,
  }),
};
