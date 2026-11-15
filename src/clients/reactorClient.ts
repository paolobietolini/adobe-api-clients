import type {
  AppConfigurationsCompanyLookupResponse,
  AppConfigurationsCreatePayload,
  AppConfigurationsEntity,
  AppConfigurationsLookupResponse,
  AppConfigurationsUpdateResponse,
  AuditEventsEntity,
  AuditEventsLookupResponse,
  BuildsCreateResponse,
  BuildsEntity,
  BuildsLookupResponse,
  BuildsUpdatePayload,
  BuildsUpdateResponse,
  CallbacksCreatePayload,
  CallbacksCreateResponse,
  CallbacksEntity,
  CallbacksLookupResponse,
  CallbacksUpdatePayload,
  CallbacksUpdateResponse,
  CompaniesEntity,
  CompaniesLookupResponse,
  CreateExtensionPackageBody,
  CreatePropertyPayload,
  DataElementsCreatePayload,
  DataElementsCreateResponse,
  DataElementsEntity,
  DataElementsLookupResponse,
  DataElementsNotesCreatePayload,
  DataElementsNotesCreateResponse,
  DataElementsUpdatePayload,
  DataElementsUpdateResponse,
  EnvironmentsCreatePayload,
  EnvironmentsCreateResponse,
  EnvironmentsEntity,
  EnvironmentsHostLookupResponse,
  EnvironmentsHostRelationshipLookupResponse,
  EnvironmentsLibraryLookupResponse,
  EnvironmentsLookupResponse,
  EnvironmentsPropertyLookupResponse,
  EnvironmentsUpdatePayload,
  EnvironmentsUpdateResponse,
  ExtensionPackagesCreateResponse,
  ExtensionPackagesCreateUsageAuthorizationPayload,
  ExtensionPackagesCreateUsageAuthorizationResponse,
  ExtensionPackagesEntity,
  ExtensionPackagesLookupResponse,
  ExtensionPackagesPatchPayload,
  ExtensionPackagesPatchResponse,
  ExtensionPackagesUpdateUsageAuthorizationPayload,
  ExtensionPackagesUpdateUsageAuthorizationResponse,
  ExtensionsCreatePayload,
  ExtensionsCreateResponse,
  ExtensionsEntity,
  ExtensionsExtensionPackageLookupResponse,
  ExtensionsLookupResponse,
  ExtensionsNotesCreatePayload,
  ExtensionsNotesCreateResponse,
  ExtensionsOriginLookupResponse,
  ExtensionsPropertyLookupResponse,
  ExtensionsUpdatePayload,
  ExtensionsUpdateResponse,
  GetRuleComponentExtensionParams,
  HostsCreatePayload,
  HostsCreateResponse,
  HostsEntity,
  HostsLookupResponse,
  HostsPropertyLookupResponse,
  HostsUpdatePayload,
  HostsUpdateResponse,
  LibrariesCreateDataElementRelationshipsPayload,
  LibrariesCreateEnvironmentRelationshipsPayload,
  LibrariesCreateExtensionRelationshipsPayload,
  LibrariesCreatePayload,
  LibrariesCreateResponse,
  LibrariesCreateRuleRelationshipsPayload,
  LibrariesDataElementRelationshipsCreateResponse,
  LibrariesDataElementRelationshipsDeleteResponse,
  LibrariesDataElementRelationshipsListResponse,
  LibrariesDataElementRelationshipsUpdateResponse,
  LibrariesDeleteDataElementRelationshipsPayload,
  LibrariesDeleteRuleRelationshipsPayload,
  LibrariesEntity,
  LibrariesEnvironmentRelationshipCreateResponse,
  LibrariesEnvironmentRelationshipDeleteResponse,
  LibrariesEnvironmentRelationshipLookupResponse,
  LibrariesExtensionRelationshipsCreateResponse,
  LibrariesExtensionRelationshipsDeleteResponse,
  LibrariesExtensionRelationshipsListResponse,
  LibrariesExtensionRelationshipsUpdateResponse,
  LibrariesLookupEnvironmentResponse,
  LibrariesLookupResponse,
  LibrariesLookupUpstreamResponse,
  LibrariesNotesCreatePayload,
  LibrariesNotesCreateResponse,
  LibrariesPropertyLookupResponse,
  LibrariesRuleRelationshipsCreateResponse,
  LibrariesRuleRelationshipsDeleteResponse,
  LibrariesRuleRelationshipsListResponse,
  LibrariesRuleRelationshipsUpdateResponse,
  LibrariesUpdateDataElementRelationshipsPayload,
  LibrariesUpdateExtensionRelationshipsPayload,
  LibrariesUpdatePayload,
  LibrariesUpdateResponse,
  LibrariesUpdateRuleRelationshipsPayload,
  ListAppConfigurationsParams,
  ListAuditEventsParams,
  ListBuildsParams,
  ListCallbacksParams,
  ListCompaniesParams,
  ListDataElementNotesParams,
  ListEnvironmentSecretsParams,
  ListEnvironmentsParams,
  ListExtensionLibrariesParams,
  ListExtensionNotesParams,
  ListExtensionPackagesParams,
  ListExtensionRelationshipsParams,
  ListExtensionRevisionsParams,
  ListExtensionsParams,
  ListHostsParams,
  ListLibrariesParams,
  ListLibraryBuildsParams,
  ListLibraryDataElementsParams,
  ListLibraryExtensionsParams,
  ListLibraryNotesParams,
  ListLibraryRelationshipsParams,
  ListLibraryRuleRelationshipsParams,
  ListLibraryRulesParams,
  ListPropertiesParams,
  ListPropertyDataElementsParams,
  ListPropertyNotesParams,
  ListPropertySecretsParams,
  ListRuleComponentNotesParams,
  ListRuleComponentsParams,
  ListRuleComponentsRelatedRulesParams,
  ListRuleLibrariesParams,
  ListRuleNotesParams,
  ListRuleRevisionsParams,
  ListRulesComponentsNotesParams,
  ListRulesParams,
  ListSecretDataElementsParams,
  ListSecretNotesParams,
  NotesEntity,
  NotesLookupResponse,
  ProfilesLookupResponse,
  PropertiesEntity,
  PropertiesLookupResponse,
  PropertiesNotesCreatePayload,
  PropertiesNotesCreateResponse,
  PropertiesUpdatePayload,
  PropertiesUpdateResponse,
  ReactorList,
  RetrieveDataExtensionPackageUsageAuthorizationResponse,
  RetrieveExtensionPackageUsageAuthorizationForPackageResponse,
  RetrieveExtensionPackageUsageAuthorizationResponse,
  RetrieveRuleComponentOriginParams,
  RuleComponentsCreatePayload,
  RuleComponentsCreateResponse,
  RuleComponentsEntity,
  RuleComponentsExtensionLookupResponse,
  RuleComponentsLookupResponse,
  RuleComponentsNotesCreatePayload,
  RuleComponentsNotesCreateResponse,
  RuleComponentsOriginLookupResponse,
  RuleComponentsUpdatePayload,
  RuleComponentsUpdateResponse,
  RulesCreatePayload,
  RulesCreateResponse,
  RulesEntity,
  RulesLookupResponse,
  RulesNotesCreatePayload,
  RulesNotesCreateResponse,
  RulesOriginLookupResponse,
  RulesPropertyLookupResponse,
  RulesUpdatePayload,
  RulesUpdateResponse,
  SearchPayload,
  SearchResponse,
  SecretsCreatePayload,
  SecretsCreateResponse,
  SecretsEntity,
  SecretsLookupEnvironmentResponse,
  SecretsLookupResponse,
  SecretsNotesCreatePayload,
  SecretsNotesCreateResponse,
  SecretsPropertyLookupResponse,
  SecretsUpdatePayload,
  SecretsUpdateResponse,
  UpdateExtensionPackageBody,
} from "../utils/types/reactor/index.ts";
import { paginate } from "../utils/paginate.ts";
import type { AuthClient } from "./authClient.ts";
import { HttpClient } from "./httpClient.ts";

export class ReactorClient {
  readonly #http: HttpClient;

  /** @param orgId IMS org id, e.g. `ABC123@AdobeOrg` */
  constructor(auth: AuthClient, orgId: string) {
    this.#http = new HttpClient(auth, "https://reactor.adobe.io", "", {
      "x-gw-ims-org-id": orgId,
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json;revision=1",
    });
  }

  /**
   * Iterates every item of a paged list, one request per page, lazily.
   * Reactor pages are 1-based.
   * @example
   * for await (const p of reactor.paginate((n) => reactor.listProperties(cid, { "page[number]": n, "page[size]": 100 }))) {}
   */
  paginate<T>(
    fetchPage: (page: number) => Promise<ReactorList<T>>,
    opts: { maxPages?: number } = {},
  ) {
    return paginate<T>(
      async (page) => {
        const r = await fetchPage(page);
        return {
          items: r.data,
          hasMore: r.meta?.pagination?.next_page != null,
        };
      },
      { start: 1, ...opts },
    );
  }

  /** GET /companies - List companies */
  listCompanies(params: ListCompaniesParams = {}) {
    return this.#http.send<ReactorList<CompaniesEntity>>("GET", "companies", { params });
  }

  /** GET /companies/{COMPANY_ID} - Retrieve a company */
  retrieveCompany(companyId: string) {
    return this.#http.send<CompaniesLookupResponse>("GET", `companies/${encodeURIComponent(companyId)}`);
  }

  /** GET /companies/{COMPANY_ID}/properties - List a company's properties */
  listProperties(companyId: string, params: ListPropertiesParams = {}) {
    return this.#http.send<ReactorList<PropertiesEntity>>("GET", `companies/${encodeURIComponent(companyId)}/properties`, { params });
  }

  /** POST /companies/{COMPANY_ID}/properties - Create a new property */
  createProperty(companyId: string, body: CreatePropertyPayload) {
    return this.#http.send<PropertiesLookupResponse>("POST", `companies/${encodeURIComponent(companyId)}/properties`, { body });
  }

  /** GET /companies/{COMPANY_ID}/app_configurations - List a company's app configurations */
  listAppConfigurations(companyId: string, params: ListAppConfigurationsParams = {}) {
    return this.#http.send<ReactorList<AppConfigurationsEntity>>("GET", `companies/${encodeURIComponent(companyId)}/app_configurations`, { params });
  }

  /** POST /companies/{COMPANY_ID}/app_configurations - Create an app configuration */
  createAppConfiguration(companyId: string, body: AppConfigurationsCreatePayload) {
    return this.#http.send<AppConfigurationsLookupResponse>("POST", `companies/${encodeURIComponent(companyId)}/app_configurations`, { body });
  }

  /** GET /properties/{PROPERTY_ID} - Retrieve a property */
  retrieveProperty(propertyId: string) {
    return this.#http.send<PropertiesLookupResponse>("GET", `properties/${encodeURIComponent(propertyId)}`);
  }

  /** DELETE /properties/{PROPERTY_ID} - Delete a property */
  deleteProperty(propertyId: string) {
    return this.#http.send<void>("DELETE", `properties/${encodeURIComponent(propertyId)}`);
  }

  /** PATCH /properties/{PROPERTY_ID} - Update a property */
  updateProperty(propertyId: string, body: PropertiesUpdatePayload) {
    return this.#http.send<PropertiesUpdateResponse>("PATCH", `properties/${encodeURIComponent(propertyId)}`, { body });
  }

  /** GET /app_configurations/{CONFIG_ID} - Retrieve an app configuration */
  retrieveAppConfiguration(configId: string) {
    return this.#http.send<AppConfigurationsLookupResponse>("GET", `app_configurations/${encodeURIComponent(configId)}`);
  }

  /** DELETE /app_configurations/{CONFIG_ID} - Delete an app configuration */
  deleteAppConfiguration(configId: string) {
    return this.#http.send<void>("DELETE", `app_configurations/${encodeURIComponent(configId)}`);
  }

  /** PATCH /app_configurations/{CONFIG_ID} - Update an app configuration */
  updateAppConfiguration(configId: string, body: AppConfigurationsCreatePayload) {
    return this.#http.send<AppConfigurationsUpdateResponse>("PATCH", `app_configurations/${encodeURIComponent(configId)}`, { body });
  }

  /** GET /app_configurations/{CONFIG_ID}/company - Retrieve the company that owns an app configuration */
  retrieveAppConfigurationCompany(configId: string) {
    return this.#http.send<AppConfigurationsCompanyLookupResponse>("GET", `app_configurations/${encodeURIComponent(configId)}/company`);
  }

  /** GET /properties/{PROPERTY_ID}/company - Retrieve the company that owns a property */
  retrievePropertyCompany(propertyId: string) {
    return this.#http.send<CompaniesLookupResponse>("GET", `properties/${encodeURIComponent(propertyId)}/company`);
  }

  /** GET /properties/{PROPERTY_ID}/callbacks - List a property's callbacks */
  listCallbacks(propertyId: string, params: ListCallbacksParams = {}) {
    return this.#http.send<ReactorList<CallbacksEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/callbacks`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/callbacks - Create a new callback */
  createCallback(propertyId: string, body: CallbacksCreatePayload) {
    return this.#http.send<CallbacksCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/callbacks`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/data_elements - List a property's data elements */
  listPropertyDataElements(propertyId: string, params: ListPropertyDataElementsParams = {}) {
    return this.#http.send<ReactorList<DataElementsEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/data_elements`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/data_elements - Create a data element */
  createDataElement(propertyId: string, body: DataElementsCreatePayload) {
    return this.#http.send<DataElementsCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/data_elements`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/environments - List a property's environments */
  listEnvironments(propertyId: string, params: ListEnvironmentsParams = {}) {
    return this.#http.send<ReactorList<EnvironmentsEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/environments`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/environments - Create an environment */
  createEnvironment(propertyId: string, body: EnvironmentsCreatePayload) {
    return this.#http.send<EnvironmentsCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/environments`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/extensions - List a property's extensions */
  listExtensions(propertyId: string, params: ListExtensionsParams = {}) {
    return this.#http.send<ReactorList<ExtensionsEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/extensions`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/extensions - Create an extension */
  createExtension(propertyId: string, body: ExtensionsCreatePayload) {
    return this.#http.send<ExtensionsCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/extensions`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/hosts - List a property's hosts */
  listHosts(propertyId: string, params: ListHostsParams = {}) {
    return this.#http.send<ReactorList<HostsEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/hosts`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/hosts - Create a host */
  createHost(propertyId: string, body: HostsCreatePayload) {
    return this.#http.send<HostsCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/hosts`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/libraries - List a property's libraries */
  listLibraries(propertyId: string, params: ListLibrariesParams = {}) {
    return this.#http.send<ReactorList<LibrariesEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/libraries`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/libraries - Create a library */
  createLibrary(propertyId: string, body: LibrariesCreatePayload) {
    return this.#http.send<LibrariesCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/libraries`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/rules - List a property's rules */
  listRules(propertyId: string, params: ListRulesParams = {}) {
    return this.#http.send<ReactorList<RulesEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/rules`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/rules - Create a rule */
  createRule(propertyId: string, body: RulesCreatePayload) {
    return this.#http.send<RulesCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/rules`, { body });
  }

  /** GET /properties/{PROPERTY_ID}/secrets - List a property's secrets */
  listPropertySecrets(propertyId: string, params: ListPropertySecretsParams = {}) {
    return this.#http.send<ReactorList<SecretsEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/secrets`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/secrets - Create a secret */
  createSecret(propertyId: string, body: SecretsCreatePayload) {
    return this.#http.send<SecretsCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/secrets`, { body });
  }

  /** GET /callbacks/{CALLBACK_ID} - Retrieve a callback */
  retrieveCallback(callbackId: string) {
    return this.#http.send<CallbacksLookupResponse>("GET", `callbacks/${encodeURIComponent(callbackId)}`);
  }

  /** DELETE /callbacks/{CALLBACK_ID} - Delete a callback */
  deleteCallback(callbackId: string) {
    return this.#http.send<void>("DELETE", `callbacks/${encodeURIComponent(callbackId)}`);
  }

  /** PATCH /callbacks/{CALLBACK_ID} - Update a callback */
  updateCallback(callbackId: string, body: CallbacksUpdatePayload) {
    return this.#http.send<CallbacksUpdateResponse>("PATCH", `callbacks/${encodeURIComponent(callbackId)}`, { body });
  }

  /** GET /data_elements/{DATA_ELEMENT_ID} - Retrieve a data element */
  retrieveDataElement(dataElementId: string) {
    return this.#http.send<DataElementsLookupResponse>("GET", `data_elements/${encodeURIComponent(dataElementId)}`);
  }

  /** PATCH /data_elements/{DATA_ELEMENT_ID} - Update a data element */
  updateDataElement(dataElementId: string, body: DataElementsUpdatePayload) {
    return this.#http.send<DataElementsUpdateResponse>("PATCH", `data_elements/${encodeURIComponent(dataElementId)}`, { body });
  }

  /** GET /environments/{ENVIRONMENT_ID} - Retrieve an environment */
  retrieveEnvironment(environmentId: string) {
    return this.#http.send<EnvironmentsLookupResponse>("GET", `environments/${encodeURIComponent(environmentId)}`);
  }

  /** DELETE /environments/{ENVIRONMENT_ID} - Delete an environment */
  deleteEnvironment(environmentId: string) {
    return this.#http.send<void>("DELETE", `environments/${encodeURIComponent(environmentId)}`);
  }

  /** PATCH /environments/{ENVIRONMENT_ID} - Update an environment */
  updateEnvironment(environmentId: string, body: EnvironmentsUpdatePayload) {
    return this.#http.send<EnvironmentsUpdateResponse>("PATCH", `environments/${encodeURIComponent(environmentId)}`, { body });
  }

  /** GET /secrets/{SECRET_ID} - Retrieve a secret */
  retrieveSecret(secretId: string) {
    return this.#http.send<SecretsLookupResponse>("GET", `secrets/${encodeURIComponent(secretId)}`);
  }

  /** DELETE /secrets/{SECRET_ID} - Delete a secret */
  deleteSecret(secretId: string) {
    return this.#http.send<void>("DELETE", `secrets/${encodeURIComponent(secretId)}`);
  }

  /** PATCH /secrets/{SECRET_ID} - Test or retry a secret */
  testOrRetrySecret(secretId: string, body: SecretsUpdatePayload) {
    return this.#http.send<SecretsUpdateResponse>("PATCH", `secrets/${encodeURIComponent(secretId)}`, { body });
  }

  /** GET /environments/{ENVIRONMENT_ID}/builds - List an environment's builds */
  listBuilds(environmentId: string, params: ListBuildsParams = {}) {
    return this.#http.send<ReactorList<BuildsEntity>>("GET", `environments/${encodeURIComponent(environmentId)}/builds`, { params });
  }

  /** GET /environments/{ENVIRONMENT_ID}/secrets - List an environment's secrets */
  listEnvironmentSecrets(environmentId: string, params: ListEnvironmentSecretsParams = {}) {
    return this.#http.send<ReactorList<SecretsEntity>>("GET", `environments/${encodeURIComponent(environmentId)}/secrets`, { params });
  }

  /** GET /environments/{ENVIRONMENT_ID}/host - Retrieve a host */
  retrieveEnvironmentHost(environmentId: string) {
    return this.#http.send<EnvironmentsHostLookupResponse>("GET", `environments/${encodeURIComponent(environmentId)}/host`);
  }

  /** GET /environments/{ENVIRONMENT_ID}/relationships/host - Retrieve the host relationship for an environment */
  retrieveHostRelationship(environmentId: string) {
    return this.#http.send<EnvironmentsHostRelationshipLookupResponse>("GET", `environments/${encodeURIComponent(environmentId)}/relationships/host`);
  }

  /** GET /environments/{ENVIRONMENT_ID}/library - Retrieve an environment's related library */
  retrieveEnvironmentLibrary(environmentId: string) {
    return this.#http.send<EnvironmentsLibraryLookupResponse>("GET", `environments/${encodeURIComponent(environmentId)}/library`);
  }

  /** GET /environments/{ENVIRONMENT_ID}/property - Retrieve the property that owns an environment */
  retrieveEnvironmentProperty(environmentId: string) {
    return this.#http.send<EnvironmentsPropertyLookupResponse>("GET", `environments/${encodeURIComponent(environmentId)}/property`);
  }

  /** GET /extension_packages - List extension packages */
  listExtensionPackages(params: ListExtensionPackagesParams = {}) {
    return this.#http.send<ReactorList<ExtensionPackagesEntity>>("GET", "extension_packages", { params });
  }

  /** POST /extension_packages - Create an extension package */
  createExtensionPackage(body: CreateExtensionPackageBody) {
    return this.#http.send<ExtensionPackagesCreateResponse>("POST", "extension_packages", { body });
  }

  /** GET /extension_packages/{EXTENSION_PACKAGE_ID} - Retrieve an extension package */
  retrieveExtensionPackage(extensionPackageId: string) {
    return this.#http.send<ExtensionPackagesLookupResponse>("GET", `extension_packages/${encodeURIComponent(extensionPackageId)}`);
  }

  /** POST /extension_packages/{EXTENSION_PACKAGE_ID} - Update an extension package */
  updateExtensionPackage(extensionPackageId: string, body: UpdateExtensionPackageBody) {
    return this.#http.send<ExtensionPackagesLookupResponse>("POST", `extension_packages/${encodeURIComponent(extensionPackageId)}`, { body });
  }

  /** PATCH /extension_packages/{EXTENSION_PACKAGE_ID} - Privately release or discontinue an extension package */
  privateReleaseExtensionPackage(extensionPackageId: string, body: ExtensionPackagesPatchPayload) {
    return this.#http.send<ExtensionPackagesPatchResponse>("PATCH", `extension_packages/${encodeURIComponent(extensionPackageId)}`, { body });
  }

  /** GET /extension_packages/{EXTENSION_PACKAGE_ID}/versions - Retrieve an extension package's versions */
  retrieveExtensionPackageVersion(extensionPackageId: string) {
    return this.#http.send<ReactorList<ExtensionPackagesEntity>>("GET", `extension_packages/${encodeURIComponent(extensionPackageId)}/versions`);
  }

  /** GET /extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations - Retrieve extension package usage authorizations for an extension package */
  retrieveExtensionPackageUsageAuthorizationForPackage(extensionPackageId: string) {
    return this.#http.send<RetrieveExtensionPackageUsageAuthorizationForPackageResponse>("GET", `extension_packages/${encodeURIComponent(extensionPackageId)}/extension_package_usage_authorizations`);
  }

  /** POST /extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations - Create an extension package usage authorization */
  createExtensionPackageUsageAuthorization(extensionPackageId: string, body: ExtensionPackagesCreateUsageAuthorizationPayload) {
    return this.#http.send<ExtensionPackagesCreateUsageAuthorizationResponse>("POST", `extension_packages/${encodeURIComponent(extensionPackageId)}/extension_package_usage_authorizations`, { body });
  }

  /** GET /extension_package_usage_authorizations - Retrieve a list of extension package usage authorizations */
  retrieveExtensionPackageUsageAuthorization() {
    return this.#http.send<RetrieveExtensionPackageUsageAuthorizationResponse>("GET", "extension_package_usage_authorizations");
  }

  /** DELETE /extension_package_usage_authorizations/{ID} - Delete an extension package usage authorization */
  deletePackageUsageAuthorization(id: string) {
    return this.#http.send<void>("DELETE", `extension_package_usage_authorizations/${encodeURIComponent(id)}`);
  }

  /** PATCH /extension_package_usage_authorizations/{ID} - Update an extension package usage authorization */
  updateExtensionPackageUsageAuthorization(id: string, body: ExtensionPackagesUpdateUsageAuthorizationPayload) {
    return this.#http.send<ExtensionPackagesUpdateUsageAuthorizationResponse>("PATCH", `extension_package_usage_authorizations/${encodeURIComponent(id)}`, { body });
  }

  /** GET /extension_package_usage_authorizations/{EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID}/extension_package - Retrieve data for the extension package for an extension package usage authorization */
  retrieveDataExtensionPackageUsageAuthorization(extensionPackageUsageAuthorizationId: string) {
    return this.#http.send<RetrieveDataExtensionPackageUsageAuthorizationResponse>("GET", `extension_package_usage_authorizations/${encodeURIComponent(extensionPackageUsageAuthorizationId)}/extension_package`);
  }

  /** GET /extensions/{EXTENSION_ID} - Retrieve an extension */
  retrieveExtension(extensionId: string) {
    return this.#http.send<ExtensionsLookupResponse>("GET", `extensions/${encodeURIComponent(extensionId)}`);
  }

  /** DELETE /extensions/{EXTENSION_ID} - Delete an extension */
  deleteExtension(extensionId: string) {
    return this.#http.send<void>("DELETE", `extensions/${encodeURIComponent(extensionId)}`);
  }

  /** PATCH /extensions/{EXTENSION_ID} - Revise an extension */
  reviseExtension(extensionId: string, body: ExtensionsUpdatePayload) {
    return this.#http.send<ExtensionsUpdateResponse>("PATCH", `extensions/${encodeURIComponent(extensionId)}`, { body });
  }

  /** GET /extensions/{EXTENSION_ID}/extension_package - Retrieve the extension package for an extension */
  retrievePackageForExtension(extensionId: string) {
    return this.#http.send<ExtensionsExtensionPackageLookupResponse>("GET", `extensions/${encodeURIComponent(extensionId)}/extension_package`);
  }

  /** GET /extensions/{EXTENSION_ID}/libraries - List the libraries that use an extension */
  listExtensionLibraries(extensionId: string, params: ListExtensionLibrariesParams = {}) {
    return this.#http.send<ReactorList<LibrariesEntity>>("GET", `extensions/${encodeURIComponent(extensionId)}/libraries`, { params });
  }

  /** GET /extensions/{EXTENSION_ID}/property - Retrieve an extension's property */
  retrieveExtensionProperty(extensionId: string) {
    return this.#http.send<ExtensionsPropertyLookupResponse>("GET", `extensions/${encodeURIComponent(extensionId)}/property`);
  }

  /** GET /extensions/{EXTENSION_ID}/origin - Retrieve an extension's origin */
  retrieveExtensionOrigin(extensionId: string) {
    return this.#http.send<ExtensionsOriginLookupResponse>("GET", `extensions/${encodeURIComponent(extensionId)}/origin`);
  }

  /** GET /extensions/{EXTENSION_ID}/revisions - List an extension's revisions */
  listExtensionRevisions(extensionId: string, params: ListExtensionRevisionsParams = {}) {
    return this.#http.send<ReactorList<ExtensionsEntity>>("GET", `extensions/${encodeURIComponent(extensionId)}/revisions`, { params });
  }

  /** GET /hosts/{HOST_ID} - Retrieve a host */
  retrieveHost(hostId: string) {
    return this.#http.send<HostsLookupResponse>("GET", `hosts/${encodeURIComponent(hostId)}`);
  }

  /** DELETE /hosts/{HOST_ID} - Delete a host */
  deleteHost(hostId: string) {
    return this.#http.send<void>("DELETE", `hosts/${encodeURIComponent(hostId)}`);
  }

  /** PATCH /hosts/{HOST_ID} - Update a host */
  updateHost(hostId: string, body: HostsUpdatePayload) {
    return this.#http.send<HostsUpdateResponse>("PATCH", `hosts/${encodeURIComponent(hostId)}`, { body });
  }

  /** GET /hosts/{HOST_ID}/property - Retrieve a host's property */
  retrieveHostProperty(hostId: string) {
    return this.#http.send<HostsPropertyLookupResponse>("GET", `hosts/${encodeURIComponent(hostId)}/property`);
  }

  /** GET /libraries/{LIBRARY_ID} - Retrieve a library */
  retrieveLibrary(libraryId: string) {
    return this.#http.send<LibrariesLookupResponse>("GET", `libraries/${encodeURIComponent(libraryId)}`);
  }

  /** DELETE /libraries/{LIBRARY_ID} - Delete a library */
  deleteLibrary(libraryId: string) {
    return this.#http.send<void>("DELETE", `libraries/${encodeURIComponent(libraryId)}`);
  }

  /** PATCH /libraries/{LIBRARY_ID} - Update a library */
  updateLibrary(libraryId: string, body: LibrariesUpdatePayload) {
    return this.#http.send<LibrariesUpdateResponse>("PATCH", `libraries/${encodeURIComponent(libraryId)}`, { body });
  }

  /** GET /libraries/{LIBRARY_ID}/property - Retrieve a library's property */
  retrieveLibraryProperty(libraryId: string) {
    return this.#http.send<LibrariesPropertyLookupResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/property`);
  }

  /** GET /libraries/{LIBRARY_ID}/builds - List a library's builds */
  listLibraryBuilds(libraryId: string, params: ListLibraryBuildsParams = {}) {
    return this.#http.send<ReactorList<BuildsEntity>>("GET", `libraries/${encodeURIComponent(libraryId)}/builds`, { params });
  }

  /** POST /libraries/{LIBRARY_ID}/builds - Create a build */
  createBuild(libraryId: string) {
    return this.#http.send<BuildsCreateResponse>("POST", `libraries/${encodeURIComponent(libraryId)}/builds`);
  }

  /** GET /libraries/{LIBRARY_ID}/environment - Retrieve a library's related environment */
  retrieveLibraryEnvironment(libraryId: string) {
    return this.#http.send<LibrariesLookupEnvironmentResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/environment`);
  }

  /** GET /libraries/{LIBRARY_ID}/upstream_library - Retrieve a library's upstream library */
  retrieveUpstreamLibrary(libraryId: string) {
    return this.#http.send<LibrariesLookupUpstreamResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/upstream_library`);
  }

  /** GET /libraries/{LIBRARY_ID}/data_elements - List a library's related data elements */
  listLibraryDataElements(libraryId: string, params: ListLibraryDataElementsParams = {}) {
    return this.#http.send<ReactorList<DataElementsEntity>>("GET", `libraries/${encodeURIComponent(libraryId)}/data_elements`, { params });
  }

  /** GET /libraries/{LIBRARY_ID}/relationships/data_elements - List a library's data element relationships */
  listLibraryRelationships(libraryId: string, params: ListLibraryRelationshipsParams = {}) {
    return this.#http.send<LibrariesDataElementRelationshipsListResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/relationships/data_elements`, { params });
  }

  /** POST /libraries/{LIBRARY_ID}/relationships/data_elements - Add data elements to a specific library. */
  addDataElement(libraryId: string, body: LibrariesCreateDataElementRelationshipsPayload) {
    return this.#http.send<LibrariesDataElementRelationshipsCreateResponse>("POST", `libraries/${encodeURIComponent(libraryId)}/relationships/data_elements`, { body });
  }

  /** DELETE /libraries/{LIBRARY_ID}/relationships/data_elements - Remove a library's data element relationships */
  deleteLibraryRelationships(libraryId: string, body: LibrariesDeleteDataElementRelationshipsPayload) {
    return this.#http.send<LibrariesDataElementRelationshipsDeleteResponse>("DELETE", `libraries/${encodeURIComponent(libraryId)}/relationships/data_elements`, { body });
  }

  /** PATCH /libraries/{LIBRARY_ID}/relationships/data_elements - Replace all data element relationships for a specific library */
  updateLibraryRelationships(libraryId: string, body: LibrariesUpdateDataElementRelationshipsPayload) {
    return this.#http.send<LibrariesDataElementRelationshipsUpdateResponse>("PATCH", `libraries/${encodeURIComponent(libraryId)}/relationships/data_elements`, { body });
  }

  /** GET /libraries/{LIBRARY_ID}/relationships/environment - Retrieve a library's environment relationship */
  getLibraryEnvironmentRelationship(libraryId: string) {
    return this.#http.send<LibrariesEnvironmentRelationshipLookupResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/relationships/environment`);
  }

  /** DELETE /libraries/{LIBRARY_ID}/relationships/environment - Remove a library's environment relationship */
  removeLibraryRelationship(libraryId: string) {
    return this.#http.send<LibrariesEnvironmentRelationshipDeleteResponse>("DELETE", `libraries/${encodeURIComponent(libraryId)}/relationships/environment`);
  }

  /** PATCH /libraries/{LIBRARY_ID}/relationships/environment - Set a library's environment relationship */
  updateLibraryRelationship(libraryId: string, body: LibrariesCreateEnvironmentRelationshipsPayload) {
    return this.#http.send<LibrariesEnvironmentRelationshipCreateResponse>("PATCH", `libraries/${encodeURIComponent(libraryId)}/relationships/environment`, { body });
  }

  /** GET /libraries/{LIBRARY_ID}/extensions - List a library's related extensions */
  listLibraryExtensions(libraryId: string, params: ListLibraryExtensionsParams = {}) {
    return this.#http.send<ReactorList<ExtensionsEntity>>("GET", `libraries/${encodeURIComponent(libraryId)}/extensions`, { params });
  }

  /** GET /libraries/{LIBRARY_ID}/relationships/extensions - List a library's extension relationships */
  listExtensionRelationships(libraryId: string, params: ListExtensionRelationshipsParams = {}) {
    return this.#http.send<LibrariesExtensionRelationshipsListResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/relationships/extensions`, { params });
  }

  /** POST /libraries/{LIBRARY_ID}/relationships/extensions - Add extensions to a specific library */
  addExtension(libraryId: string, body: LibrariesCreateExtensionRelationshipsPayload) {
    return this.#http.send<LibrariesExtensionRelationshipsCreateResponse>("POST", `libraries/${encodeURIComponent(libraryId)}/relationships/extensions`, { body });
  }

  /** DELETE /libraries/{LIBRARY_ID}/relationships/extensions - Remove a library's extensions */
  removeLibraryExtensions(libraryId: string) {
    return this.#http.send<LibrariesExtensionRelationshipsDeleteResponse>("DELETE", `libraries/${encodeURIComponent(libraryId)}/relationships/extensions`);
  }

  /** PATCH /libraries/{LIBRARY_ID}/relationships/extensions - Replace all extensions for a specific library */
  updateLibraryExtensions(libraryId: string, body: LibrariesUpdateExtensionRelationshipsPayload) {
    return this.#http.send<LibrariesExtensionRelationshipsUpdateResponse>("PATCH", `libraries/${encodeURIComponent(libraryId)}/relationships/extensions`, { body });
  }

  /** GET /libraries/{LIBRARY_ID}/rules - List a library's related rules */
  listLibraryRules(libraryId: string, params: ListLibraryRulesParams = {}) {
    return this.#http.send<ReactorList<RulesEntity>>("GET", `libraries/${encodeURIComponent(libraryId)}/rules`, { params });
  }

  /** GET /libraries/{LIBRARY_ID}/relationships/rules - List a library's rule relationships */
  listLibraryRuleRelationships(libraryId: string, params: ListLibraryRuleRelationshipsParams = {}) {
    return this.#http.send<LibrariesRuleRelationshipsListResponse>("GET", `libraries/${encodeURIComponent(libraryId)}/relationships/rules`, { params });
  }

  /** POST /libraries/{LIBRARY_ID}/relationships/rules - Add rules to a specific library */
  addLibraryRules(libraryId: string, body: LibrariesCreateRuleRelationshipsPayload) {
    return this.#http.send<LibrariesRuleRelationshipsCreateResponse>("POST", `libraries/${encodeURIComponent(libraryId)}/relationships/rules`, { body });
  }

  /** DELETE /libraries/{LIBRARY_ID}/relationships/rules - Remove a library's rules */
  removeLibraryRules(libraryId: string, body: LibrariesDeleteRuleRelationshipsPayload) {
    return this.#http.send<LibrariesRuleRelationshipsDeleteResponse>("DELETE", `libraries/${encodeURIComponent(libraryId)}/relationships/rules`, { body });
  }

  /** PATCH /libraries/{LIBRARY_ID}/relationships/rules - Replace all rules for a specific library */
  updateLibraryRules(libraryId: string, body: LibrariesUpdateRuleRelationshipsPayload) {
    return this.#http.send<LibrariesRuleRelationshipsUpdateResponse>("PATCH", `libraries/${encodeURIComponent(libraryId)}/relationships/rules`, { body });
  }

  /** GET /builds/{BUILD_ID} - Look up a build by ID. */
  getBuild(buildId: string) {
    return this.#http.send<BuildsLookupResponse>("GET", `builds/${encodeURIComponent(buildId)}`);
  }

  /** PATCH /builds/{BUILD_ID} - Republish a build */
  republishBuild(buildId: string, body: BuildsUpdatePayload) {
    return this.#http.send<BuildsUpdateResponse>("PATCH", `builds/${encodeURIComponent(buildId)}`, { body });
  }

  /** GET /rules/{RULE_ID} - Retrieve a rule */
  retrieveRule(ruleId: string) {
    return this.#http.send<RulesLookupResponse>("GET", `rules/${encodeURIComponent(ruleId)}`);
  }

  /** DELETE /rules/{RULE_ID} - Delete a rule */
  deleteRule(ruleId: string) {
    return this.#http.send<void>("DELETE", `rules/${encodeURIComponent(ruleId)}`);
  }

  /** PATCH /rules/{RULE_ID} - Update a rule */
  updateRule(ruleId: string, body: RulesUpdatePayload) {
    return this.#http.send<RulesUpdateResponse>("PATCH", `rules/${encodeURIComponent(ruleId)}`, { body });
  }

  /** GET /rules/{RULE_ID}/rule_components - List a rule's components */
  listRuleComponents(ruleId: string, params: ListRuleComponentsParams = {}) {
    return this.#http.send<ReactorList<RuleComponentsEntity>>("GET", `rules/${encodeURIComponent(ruleId)}/rule_components`, { params });
  }

  /** POST /rules/{RULE_ID}/rule_components - Create a new rule component */
  createRuleComponent(ruleId: string, body: RuleComponentsCreatePayload) {
    return this.#http.send<RuleComponentsCreateResponse>("POST", `rules/${encodeURIComponent(ruleId)}/rule_components`, { body });
  }

  /** GET /rules/{RULE_ID}/libraries - List all libraries that use a specific rule */
  listRuleLibraries(ruleId: string, params: ListRuleLibrariesParams = {}) {
    return this.#http.send<ReactorList<LibrariesEntity>>("GET", `rules/${encodeURIComponent(ruleId)}/libraries`, { params });
  }

  /** GET /rules/{RULE_ID}/property - Retrieve the property that owns a specific rule */
  retrieveRuleProperty(ruleId: string) {
    return this.#http.send<RulesPropertyLookupResponse>("GET", `rules/${encodeURIComponent(ruleId)}/property`);
  }

  /** GET /rules/{RULE_ID}/origin - Retrieve a rule's related origin */
  retrieveRuleOrigin(ruleId: string) {
    return this.#http.send<RulesOriginLookupResponse>("GET", `rules/${encodeURIComponent(ruleId)}/origin`);
  }

  /** GET /rules/{RULE_ID}/revisions - List a rule's revisions */
  listRuleRevisions(ruleId: string, params: ListRuleRevisionsParams = {}) {
    return this.#http.send<ReactorList<RulesEntity>>("GET", `rules/${encodeURIComponent(ruleId)}/revisions`, { params });
  }

  /** GET /rules/{RULE_ID}/rule_component_notes - List the notes for a rule's components */
  listRulesComponentsNotes(ruleId: string, params: ListRulesComponentsNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `rules/${encodeURIComponent(ruleId)}/rule_component_notes`, { params });
  }

  /** GET /rule_components/{RULE_COMPONENT_ID} - Retrieve a rule component */
  retrieveRuleComponent(ruleComponentId: string) {
    return this.#http.send<RuleComponentsLookupResponse>("GET", `rule_components/${encodeURIComponent(ruleComponentId)}`);
  }

  /** DELETE /rule_components/{RULE_COMPONENT_ID} - Delete a rule component */
  deleteRuleComponent(ruleComponentId: string) {
    return this.#http.send<void>("DELETE", `rule_components/${encodeURIComponent(ruleComponentId)}`);
  }

  /** PATCH /rule_components/{RULE_COMPONENT_ID} - Update a rule component */
  updateRuleComponent(ruleComponentId: string, body: RuleComponentsUpdatePayload) {
    return this.#http.send<RuleComponentsUpdateResponse>("PATCH", `rule_components/${encodeURIComponent(ruleComponentId)}`, { body });
  }

  /** GET /rule_components/{RULE_COMPONENT_ID}/extension - Look up the extension that provides a specific rule component. */
  getRuleComponentExtension(ruleComponentId: string, params: GetRuleComponentExtensionParams = {}) {
    return this.#http.send<RuleComponentsExtensionLookupResponse>("GET", `rule_components/${encodeURIComponent(ruleComponentId)}/extension`, { params });
  }

  /** GET /rule_components/{RULE_COMPONENT_ID}/origin - Retrieve a rule component's origin */
  retrieveRuleComponentOrigin(ruleComponentId: string, params: RetrieveRuleComponentOriginParams = {}) {
    return this.#http.send<RuleComponentsOriginLookupResponse>("GET", `rule_components/${encodeURIComponent(ruleComponentId)}/origin`, { params });
  }

  /** GET /rule_components/{RULE_COMPONENT_ID}/rules - List the rules that utilize a rule component */
  listRuleComponentsRelatedRules(ruleComponentId: string, params: ListRuleComponentsRelatedRulesParams = {}) {
    return this.#http.send<ReactorList<RulesEntity>>("GET", `rule_components/${encodeURIComponent(ruleComponentId)}/rules`, { params });
  }

  /** GET /notes/{NOTE_ID} - Retrieve a note */
  retrieveNote(noteId: string) {
    return this.#http.send<NotesLookupResponse>("GET", `notes/${encodeURIComponent(noteId)}`);
  }

  /** GET /properties/{PROPERTY_ID}/notes - List a property's notes */
  listPropertyNotes(propertyId: string, params: ListPropertyNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `properties/${encodeURIComponent(propertyId)}/notes`, { params });
  }

  /** POST /properties/{PROPERTY_ID}/notes - Create a note for a property */
  createPropertyNote(propertyId: string, body: PropertiesNotesCreatePayload) {
    return this.#http.send<PropertiesNotesCreateResponse>("POST", `properties/${encodeURIComponent(propertyId)}/notes`, { body });
  }

  /** GET /data_elements/{DATA_ELEMENT_ID}/notes - List a data element's notes */
  listDataElementNotes(dataElementId: string, params: ListDataElementNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `data_elements/${encodeURIComponent(dataElementId)}/notes`, { params });
  }

  /** POST /data_elements/{DATA_ELEMENT_ID}/notes - Create a note for a data element */
  createNote(dataElementId: string, body: DataElementsNotesCreatePayload) {
    return this.#http.send<DataElementsNotesCreateResponse>("POST", `data_elements/${encodeURIComponent(dataElementId)}/notes`, { body });
  }

  /** GET /secrets/{SECRET_ID}/notes - List a secret's notes */
  listSecretNotes(secretId: string, params: ListSecretNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `secrets/${encodeURIComponent(secretId)}/notes`, { params });
  }

  /** POST /secrets/{SECRET_ID}/notes - Create a note for a secret */
  createSecretNote(secretId: string, body: SecretsNotesCreatePayload) {
    return this.#http.send<SecretsNotesCreateResponse>("POST", `secrets/${encodeURIComponent(secretId)}/notes`, { body });
  }

  /** GET /secrets/{SECRET_ID}/data_elements - List the data elements that reference a secret */
  listSecretDataElements(secretId: string, params: ListSecretDataElementsParams = {}) {
    return this.#http.send<ReactorList<DataElementsEntity>>("GET", `secrets/${encodeURIComponent(secretId)}/data_elements`, { params });
  }

  /** GET /secrets/{SECRET_ID}/environment - Retrieve a secret's environment */
  retrieveSecretEnvironment(secretId: string) {
    return this.#http.send<SecretsLookupEnvironmentResponse>("GET", `secrets/${encodeURIComponent(secretId)}/environment`);
  }

  /** GET /secrets/{SECRET_ID}/property - Retrieve a secret's property */
  retrieveSecretProperty(secretId: string) {
    return this.#http.send<SecretsPropertyLookupResponse>("GET", `secrets/${encodeURIComponent(secretId)}/property`);
  }

  /** GET /extensions/{EXTENSION_ID}/notes - List an extension's notes */
  listExtensionNotes(extensionId: string, params: ListExtensionNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `extensions/${encodeURIComponent(extensionId)}/notes`, { params });
  }

  /** POST /extensions/{EXTENSION_ID}/notes - Create a note for an extension */
  createExtensionNote(extensionId: string, body: ExtensionsNotesCreatePayload) {
    return this.#http.send<ExtensionsNotesCreateResponse>("POST", `extensions/${encodeURIComponent(extensionId)}/notes`, { body });
  }

  /** GET /libraries/{LIBRARY_ID}/notes - List a library's notes */
  listLibraryNotes(libraryId: string, params: ListLibraryNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `libraries/${encodeURIComponent(libraryId)}/notes`, { params });
  }

  /** POST /libraries/{LIBRARY_ID}/notes - Create a note for a library */
  createLibraryNote(libraryId: string, body: LibrariesNotesCreatePayload) {
    return this.#http.send<LibrariesNotesCreateResponse>("POST", `libraries/${encodeURIComponent(libraryId)}/notes`, { body });
  }

  /** GET /rules/{RULE_ID}/notes - List a rule's notes */
  listRuleNotes(ruleId: string, params: ListRuleNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `rules/${encodeURIComponent(ruleId)}/notes`, { params });
  }

  /** POST /rules/{RULE_ID}/notes - Create a note for a rule */
  createNoteRule(ruleId: string, body: RulesNotesCreatePayload) {
    return this.#http.send<RulesNotesCreateResponse>("POST", `rules/${encodeURIComponent(ruleId)}/notes`, { body });
  }

  /** GET /rule_components/{RULE_COMPONENT_ID}/notes - List a rule component's notes */
  listRuleComponentNotes(ruleComponentId: string, params: ListRuleComponentNotesParams = {}) {
    return this.#http.send<ReactorList<NotesEntity>>("GET", `rule_components/${encodeURIComponent(ruleComponentId)}/notes`, { params });
  }

  /** POST /rule_components/{RULE_COMPONENT_ID}/notes - Create a note for a rule component */
  createRuleComponentNote(ruleComponentId: string, body: RuleComponentsNotesCreatePayload) {
    return this.#http.send<RuleComponentsNotesCreateResponse>("POST", `rule_components/${encodeURIComponent(ruleComponentId)}/notes`, { body });
  }

  /** GET /audit_events - List audit events */
  listAuditEvents(params: ListAuditEventsParams = {}) {
    return this.#http.send<ReactorList<AuditEventsEntity>>("GET", "audit_events", { params });
  }

  /** GET /audit_events/{EVENT_ID} - Retrieve an audit event */
  retrieveAuditEvent(eventId: string) {
    return this.#http.send<AuditEventsLookupResponse>("GET", `audit_events/${encodeURIComponent(eventId)}`);
  }

  /** GET /profile - Retrieve the details of the currently logged-in user */
  retrieveUserDetails() {
    return this.#http.send<ProfilesLookupResponse>("GET", "profile");
  }

  /** POST /search - Perform a search */
  createSearch(body: SearchPayload) {
    return this.#http.send<SearchResponse>("POST", "search", { body });
  }
}
