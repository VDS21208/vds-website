export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const CaseStudiesPartsFragmentDoc = gql`
    fragment CaseStudiesParts on CaseStudies {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const ProductsPartsFragmentDoc = gql`
    fragment ProductsParts on Products {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const IndustriesPartsFragmentDoc = gql`
    fragment IndustriesParts on Industries {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const PlatformPartsFragmentDoc = gql`
    fragment PlatformParts on Platform {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const PlatformAnalyticsPartsFragmentDoc = gql`
    fragment PlatformAnalyticsParts on PlatformAnalytics {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
  analyticIcon
  analyticImage
  analyticHeadline
  useCases
  specsList {
    __typename
    label
    value
  }
}
    `;
export const ComparePartsFragmentDoc = gql`
    fragment CompareParts on Compare {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const UseCasesPartsFragmentDoc = gql`
    fragment UseCasesParts on UseCases {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const SolutionsPartsFragmentDoc = gql`
    fragment SolutionsParts on Solutions {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const GuidesPartsFragmentDoc = gql`
    fragment GuidesParts on Guides {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const IntegrationsPartsFragmentDoc = gql`
    fragment IntegrationsParts on Integrations {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const PartnersPartsFragmentDoc = gql`
    fragment PartnersParts on Partners {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const AboutUsPartsFragmentDoc = gql`
    fragment AboutUsParts on AboutUs {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const LocationsPartsFragmentDoc = gql`
    fragment LocationsParts on Locations {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const CityLocationsPartsFragmentDoc = gql`
    fragment CityLocationsParts on CityLocations {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const StateLocationsPartsFragmentDoc = gql`
    fragment StateLocationsParts on StateLocations {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const PricingPartsFragmentDoc = gql`
    fragment PricingParts on Pricing {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const SingletonsPartsFragmentDoc = gql`
    fragment SingletonsParts on Singletons {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const ResourcesPartsFragmentDoc = gql`
    fragment ResourcesParts on Resources {
  __typename
  url
  collection
  pageType
  status
  h1
  heroEyebrow
  heroSubhead
  heroImage
  heroCTAPrimary {
    __typename
    label
    url
  }
  heroCTASecondary {
    __typename
    label
    url
  }
  heroStats
  seoTitle
  metaDescription
  canonical
  ogTitle
  ogDescription
  ogImage
  ogType
  robots
  tags
  finalCTAHeading
  finalCTABody
  finalCTAButtons {
    __typename
    label
    url
  }
  faq {
    __typename
    q
    a
  }
  body
}
    `;
export const NavPartsFragmentDoc = gql`
    fragment NavParts on Nav {
  __typename
  sections {
    __typename
    label
    url
    primary {
      __typename
      label
      url
      notes
    }
  }
}
    `;
export const BlogDocument = gql`
    query blog($relativePath: String!) {
  blog(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogParts
  }
}
    ${BlogPartsFragmentDoc}`;
export const BlogConnectionDocument = gql`
    query blogConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogFilter) {
  blogConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogParts
      }
    }
  }
}
    ${BlogPartsFragmentDoc}`;
export const CaseStudiesDocument = gql`
    query caseStudies($relativePath: String!) {
  caseStudies(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CaseStudiesParts
  }
}
    ${CaseStudiesPartsFragmentDoc}`;
export const CaseStudiesConnectionDocument = gql`
    query caseStudiesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseStudiesFilter) {
  caseStudiesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CaseStudiesParts
      }
    }
  }
}
    ${CaseStudiesPartsFragmentDoc}`;
export const ProductsDocument = gql`
    query products($relativePath: String!) {
  products(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductsParts
  }
}
    ${ProductsPartsFragmentDoc}`;
export const ProductsConnectionDocument = gql`
    query productsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductsFilter) {
  productsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductsParts
      }
    }
  }
}
    ${ProductsPartsFragmentDoc}`;
export const IndustriesDocument = gql`
    query industries($relativePath: String!) {
  industries(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IndustriesParts
  }
}
    ${IndustriesPartsFragmentDoc}`;
export const IndustriesConnectionDocument = gql`
    query industriesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IndustriesFilter) {
  industriesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IndustriesParts
      }
    }
  }
}
    ${IndustriesPartsFragmentDoc}`;
export const PlatformDocument = gql`
    query platform($relativePath: String!) {
  platform(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PlatformParts
  }
}
    ${PlatformPartsFragmentDoc}`;
export const PlatformConnectionDocument = gql`
    query platformConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PlatformFilter) {
  platformConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PlatformParts
      }
    }
  }
}
    ${PlatformPartsFragmentDoc}`;
export const PlatformAnalyticsDocument = gql`
    query platformAnalytics($relativePath: String!) {
  platformAnalytics(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PlatformAnalyticsParts
  }
}
    ${PlatformAnalyticsPartsFragmentDoc}`;
export const PlatformAnalyticsConnectionDocument = gql`
    query platformAnalyticsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PlatformAnalyticsFilter) {
  platformAnalyticsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PlatformAnalyticsParts
      }
    }
  }
}
    ${PlatformAnalyticsPartsFragmentDoc}`;
export const CompareDocument = gql`
    query compare($relativePath: String!) {
  compare(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CompareParts
  }
}
    ${ComparePartsFragmentDoc}`;
export const CompareConnectionDocument = gql`
    query compareConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CompareFilter) {
  compareConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CompareParts
      }
    }
  }
}
    ${ComparePartsFragmentDoc}`;
export const UseCasesDocument = gql`
    query useCases($relativePath: String!) {
  useCases(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UseCasesParts
  }
}
    ${UseCasesPartsFragmentDoc}`;
export const UseCasesConnectionDocument = gql`
    query useCasesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UseCasesFilter) {
  useCasesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UseCasesParts
      }
    }
  }
}
    ${UseCasesPartsFragmentDoc}`;
export const SolutionsDocument = gql`
    query solutions($relativePath: String!) {
  solutions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SolutionsParts
  }
}
    ${SolutionsPartsFragmentDoc}`;
export const SolutionsConnectionDocument = gql`
    query solutionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SolutionsFilter) {
  solutionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SolutionsParts
      }
    }
  }
}
    ${SolutionsPartsFragmentDoc}`;
export const GuidesDocument = gql`
    query guides($relativePath: String!) {
  guides(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GuidesParts
  }
}
    ${GuidesPartsFragmentDoc}`;
export const GuidesConnectionDocument = gql`
    query guidesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GuidesFilter) {
  guidesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GuidesParts
      }
    }
  }
}
    ${GuidesPartsFragmentDoc}`;
export const IntegrationsDocument = gql`
    query integrations($relativePath: String!) {
  integrations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IntegrationsParts
  }
}
    ${IntegrationsPartsFragmentDoc}`;
export const IntegrationsConnectionDocument = gql`
    query integrationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IntegrationsFilter) {
  integrationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IntegrationsParts
      }
    }
  }
}
    ${IntegrationsPartsFragmentDoc}`;
export const PartnersDocument = gql`
    query partners($relativePath: String!) {
  partners(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PartnersParts
  }
}
    ${PartnersPartsFragmentDoc}`;
export const PartnersConnectionDocument = gql`
    query partnersConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PartnersFilter) {
  partnersConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PartnersParts
      }
    }
  }
}
    ${PartnersPartsFragmentDoc}`;
export const AboutUsDocument = gql`
    query aboutUs($relativePath: String!) {
  aboutUs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AboutUsParts
  }
}
    ${AboutUsPartsFragmentDoc}`;
export const AboutUsConnectionDocument = gql`
    query aboutUsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutUsFilter) {
  aboutUsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AboutUsParts
      }
    }
  }
}
    ${AboutUsPartsFragmentDoc}`;
export const LocationsDocument = gql`
    query locations($relativePath: String!) {
  locations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...LocationsParts
  }
}
    ${LocationsPartsFragmentDoc}`;
export const LocationsConnectionDocument = gql`
    query locationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LocationsFilter) {
  locationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...LocationsParts
      }
    }
  }
}
    ${LocationsPartsFragmentDoc}`;
export const CityLocationsDocument = gql`
    query cityLocations($relativePath: String!) {
  cityLocations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CityLocationsParts
  }
}
    ${CityLocationsPartsFragmentDoc}`;
export const CityLocationsConnectionDocument = gql`
    query cityLocationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CityLocationsFilter) {
  cityLocationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CityLocationsParts
      }
    }
  }
}
    ${CityLocationsPartsFragmentDoc}`;
export const StateLocationsDocument = gql`
    query stateLocations($relativePath: String!) {
  stateLocations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...StateLocationsParts
  }
}
    ${StateLocationsPartsFragmentDoc}`;
export const StateLocationsConnectionDocument = gql`
    query stateLocationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: StateLocationsFilter) {
  stateLocationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...StateLocationsParts
      }
    }
  }
}
    ${StateLocationsPartsFragmentDoc}`;
export const PricingDocument = gql`
    query pricing($relativePath: String!) {
  pricing(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PricingParts
  }
}
    ${PricingPartsFragmentDoc}`;
export const PricingConnectionDocument = gql`
    query pricingConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PricingFilter) {
  pricingConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PricingParts
      }
    }
  }
}
    ${PricingPartsFragmentDoc}`;
export const SingletonsDocument = gql`
    query singletons($relativePath: String!) {
  singletons(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SingletonsParts
  }
}
    ${SingletonsPartsFragmentDoc}`;
export const SingletonsConnectionDocument = gql`
    query singletonsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SingletonsFilter) {
  singletonsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SingletonsParts
      }
    }
  }
}
    ${SingletonsPartsFragmentDoc}`;
export const ResourcesDocument = gql`
    query resources($relativePath: String!) {
  resources(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ResourcesParts
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const ResourcesConnectionDocument = gql`
    query resourcesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ResourcesFilter) {
  resourcesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ResourcesParts
      }
    }
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const NavDocument = gql`
    query nav($relativePath: String!) {
  nav(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavParts
  }
}
    ${NavPartsFragmentDoc}`;
export const NavConnectionDocument = gql`
    query navConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavFilter) {
  navConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NavParts
      }
    }
  }
}
    ${NavPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    blog(variables, options) {
      return requester(BlogDocument, variables, options);
    },
    blogConnection(variables, options) {
      return requester(BlogConnectionDocument, variables, options);
    },
    caseStudies(variables, options) {
      return requester(CaseStudiesDocument, variables, options);
    },
    caseStudiesConnection(variables, options) {
      return requester(CaseStudiesConnectionDocument, variables, options);
    },
    products(variables, options) {
      return requester(ProductsDocument, variables, options);
    },
    productsConnection(variables, options) {
      return requester(ProductsConnectionDocument, variables, options);
    },
    industries(variables, options) {
      return requester(IndustriesDocument, variables, options);
    },
    industriesConnection(variables, options) {
      return requester(IndustriesConnectionDocument, variables, options);
    },
    platform(variables, options) {
      return requester(PlatformDocument, variables, options);
    },
    platformConnection(variables, options) {
      return requester(PlatformConnectionDocument, variables, options);
    },
    platformAnalytics(variables, options) {
      return requester(PlatformAnalyticsDocument, variables, options);
    },
    platformAnalyticsConnection(variables, options) {
      return requester(PlatformAnalyticsConnectionDocument, variables, options);
    },
    compare(variables, options) {
      return requester(CompareDocument, variables, options);
    },
    compareConnection(variables, options) {
      return requester(CompareConnectionDocument, variables, options);
    },
    useCases(variables, options) {
      return requester(UseCasesDocument, variables, options);
    },
    useCasesConnection(variables, options) {
      return requester(UseCasesConnectionDocument, variables, options);
    },
    solutions(variables, options) {
      return requester(SolutionsDocument, variables, options);
    },
    solutionsConnection(variables, options) {
      return requester(SolutionsConnectionDocument, variables, options);
    },
    guides(variables, options) {
      return requester(GuidesDocument, variables, options);
    },
    guidesConnection(variables, options) {
      return requester(GuidesConnectionDocument, variables, options);
    },
    integrations(variables, options) {
      return requester(IntegrationsDocument, variables, options);
    },
    integrationsConnection(variables, options) {
      return requester(IntegrationsConnectionDocument, variables, options);
    },
    partners(variables, options) {
      return requester(PartnersDocument, variables, options);
    },
    partnersConnection(variables, options) {
      return requester(PartnersConnectionDocument, variables, options);
    },
    aboutUs(variables, options) {
      return requester(AboutUsDocument, variables, options);
    },
    aboutUsConnection(variables, options) {
      return requester(AboutUsConnectionDocument, variables, options);
    },
    locations(variables, options) {
      return requester(LocationsDocument, variables, options);
    },
    locationsConnection(variables, options) {
      return requester(LocationsConnectionDocument, variables, options);
    },
    cityLocations(variables, options) {
      return requester(CityLocationsDocument, variables, options);
    },
    cityLocationsConnection(variables, options) {
      return requester(CityLocationsConnectionDocument, variables, options);
    },
    stateLocations(variables, options) {
      return requester(StateLocationsDocument, variables, options);
    },
    stateLocationsConnection(variables, options) {
      return requester(StateLocationsConnectionDocument, variables, options);
    },
    pricing(variables, options) {
      return requester(PricingDocument, variables, options);
    },
    pricingConnection(variables, options) {
      return requester(PricingConnectionDocument, variables, options);
    },
    singletons(variables, options) {
      return requester(SingletonsDocument, variables, options);
    },
    singletonsConnection(variables, options) {
      return requester(SingletonsConnectionDocument, variables, options);
    },
    resources(variables, options) {
      return requester(ResourcesDocument, variables, options);
    },
    resourcesConnection(variables, options) {
      return requester(ResourcesConnectionDocument, variables, options);
    },
    nav(variables, options) {
      return requester(NavDocument, variables, options);
    },
    navConnection(variables, options) {
      return requester(NavConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/edd06e46-2a52-4d7c-aa15-5b90816145c0/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
