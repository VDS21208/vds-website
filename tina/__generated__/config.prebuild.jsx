// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var seoFields = [
  { type: "string", name: "seoTitle", label: "SEO Title (60 chars max)" },
  {
    type: "string",
    name: "metaDescription",
    label: "Meta Description (155 chars max)",
    ui: { component: "textarea" }
  },
  { type: "string", name: "canonical", label: "Canonical URL" },
  { type: "string", name: "ogTitle", label: "OpenGraph Title" },
  { type: "string", name: "ogDescription", label: "OpenGraph Description", ui: { component: "textarea" } },
  { type: "image", name: "ogImage", label: "OpenGraph Image" },
  {
    type: "string",
    name: "ogType",
    label: "OpenGraph Type",
    options: ["website", "article", "product"]
  },
  {
    type: "string",
    name: "robots",
    label: "Robots Meta",
    options: ["index, follow", "noindex, follow", "noindex, nofollow"]
  },
  { type: "string", name: "tags", label: "Tags / Keywords" }
];
var heroFields = [
  { type: "string", name: "h1", label: "H1 \u2014 Page Title" },
  { type: "string", name: "heroEyebrow", label: "Hero Eyebrow (small label)" },
  {
    type: "string",
    name: "heroSubhead",
    label: "Hero Subhead",
    ui: { component: "textarea" }
  },
  { type: "image", name: "heroImage", label: "Hero Image" },
  {
    type: "object",
    name: "heroCTAPrimary",
    label: "Hero Primary CTA",
    fields: [
      { type: "string", name: "label", label: "Button Label" },
      { type: "string", name: "url", label: "Button URL" }
    ]
  },
  {
    type: "object",
    name: "heroCTASecondary",
    label: "Hero Secondary CTA",
    fields: [
      { type: "string", name: "label", label: "Button Label" },
      { type: "string", name: "url", label: "Button URL" }
    ]
  },
  {
    type: "string",
    name: "heroStats",
    label: "Hero Stats (one per line)",
    list: true
  }
];
var ctaFields = [
  { type: "string", name: "finalCTAHeading", label: "Final CTA Heading" },
  {
    type: "string",
    name: "finalCTABody",
    label: "Final CTA Body",
    ui: { component: "textarea" }
  },
  {
    type: "object",
    name: "finalCTAButtons",
    label: "Final CTA Buttons",
    list: true,
    fields: [
      { type: "string", name: "label", label: "Label" },
      { type: "string", name: "url", label: "URL" }
    ]
  }
];
var faqField = {
  type: "object",
  name: "faq",
  label: "FAQ Items",
  list: true,
  ui: { itemProps: (item) => ({ label: item?.q || "FAQ Item" }) },
  fields: [
    { type: "string", name: "q", label: "Question" },
    { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
  ]
};
var sharedFields = [
  ...heroFields,
  ...seoFields,
  ...ctaFields,
  faqField,
  {
    type: "rich-text",
    name: "body",
    label: "Body Content",
    isBody: true
  }
];
function makeCollection(name, label, path, extra = []) {
  return {
    name,
    label,
    path,
    format: "md",
    ui: {
      filename: { readonly: false },
      router: ({ document }) => {
        const url = document?.url || document?.data?.url;
        if (url) {
          const clean = url.startsWith("/") ? url : "/" + url;
          return clean.endsWith("/") ? clean : clean + "/";
        }
        return "/";
      }
    },
    fields: [
      { type: "string", name: "url", label: "URL (path)" },
      { type: "string", name: "collection", label: "Collection (internal)" },
      { type: "string", name: "pageType", label: "Page Type" },
      {
        type: "string",
        name: "status",
        label: "Status",
        options: ["Launch", "Expansion", "Draft"]
      },
      ...sharedFields,
      ...extra
    ]
  };
}
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "studio",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      makeCollection("blog", "\u{1F4DD} Blog Posts", "src/content/pages/blog"),
      makeCollection("caseStudies", "\u{1F4CA} Case Studies", "src/content/pages/case-studies"),
      makeCollection("products", "\u{1F4F7} Products", "src/content/pages/products"),
      makeCollection("industries", "\u{1F3ED} Industries", "src/content/pages/industries"),
      makeCollection("platform", "\u2699\uFE0F Platform Features", "src/content/pages/platform"),
      makeCollection("platformAnalytics", "\u{1F9E0} AI Analytics", "src/content/pages/platform-analytics", [
        { type: "string", name: "analyticIcon", label: "Lucide icon name" },
        { type: "image", name: "analyticImage", label: "Analytic UI screenshot" },
        { type: "string", name: "analyticHeadline", label: "Analytic headline" },
        { type: "string", name: "useCases", label: "Use cases (one per line)", list: true },
        {
          type: "object",
          name: "specsList",
          label: "Tech specs",
          list: true,
          ui: { itemProps: (item) => ({ label: item?.label || "Spec" }) },
          fields: [
            { type: "string", name: "label", label: "Spec name" },
            { type: "string", name: "value", label: "Value" }
          ]
        }
      ]),
      makeCollection("compare", "\u2696\uFE0F Compare", "src/content/pages/compare"),
      makeCollection("useCases", "\u{1F3AF} Use Cases", "src/content/pages/use-cases"),
      makeCollection("solutions", "\u{1F4A1} Solutions", "src/content/pages/solutions"),
      makeCollection("guides", "\u{1F4DA} Guides", "src/content/pages/guides"),
      makeCollection("integrations", "\u{1F50C} Integrations", "src/content/pages/integrations"),
      makeCollection("partners", "\u{1F91D} Partners", "src/content/pages/partners"),
      makeCollection("aboutUs", "\u{1F3E2} About Us", "src/content/pages/about-us"),
      makeCollection("locations", "\u{1F4CD} Locations", "src/content/pages/locations"),
      makeCollection("cityLocations", "\u{1F306} City Locations", "src/content/pages/city-locations"),
      makeCollection("stateLocations", "\u{1F30E} State Locations", "src/content/pages/state-locations"),
      makeCollection("pricing", "\u{1F4B0} Pricing", "src/content/pages/pricing"),
      makeCollection("singletons", "\u{1F511} Singletons (Home / Platform / etc.)", "src/content/pages/singletons"),
      makeCollection("resources", "\u{1F4E6} Resources", "src/content/pages/resources"),
      {
        name: "nav",
        label: "\u{1F9ED} Site Navigation",
        path: "src/data",
        format: "json",
        match: { include: "nav" },
        fields: [
          {
            type: "object",
            name: "sections",
            label: "Nav Sections",
            list: true,
            ui: { itemProps: (s) => ({ label: s?.label || "Section" }) },
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "url", label: "Section URL" },
              {
                type: "object",
                name: "primary",
                label: "Primary Links",
                list: true,
                ui: { itemProps: (l) => ({ label: l?.label || "Link" }) },
                fields: [
                  { type: "string", name: "label" },
                  { type: "string", name: "url" },
                  { type: "string", name: "notes", label: "Subtitle (mega menu description)" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
