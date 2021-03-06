# @datafire/azure_domainservices

Client library for Domain Services Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_domainservices
```
```js
let azure_domainservices = require('@datafire/azure_domainservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_domainservices.DomainServiceOperations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The AAD Domain Services API.

## Actions

### DomainServiceOperations_List
Lists all the available Domain Services operations.


```js
azure_domainservices.DomainServiceOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### DomainServices_List
The List Domain Services in Subscription operation lists all the domain services available under the given subscription (and across all resource groups within that subscription).


```js
azure_domainservices.DomainServices_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DomainServiceListResult](#domainservicelistresult)

### DomainServices_ListByResourceGroup
The List Domain Services in Resource Group operation lists all the domain services available under the given resource group.


```js
azure_domainservices.DomainServices_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
* output [DomainServiceListResult](#domainservicelistresult)

### DomainServices_Delete
The Delete Domain Service operation deletes an existing Domain Service.


```js
azure_domainservices.DomainServices_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainServiceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * domainServiceName **required** `string`: The name of the domain service in the specified subscription and resource group.

#### Output
* output [DomainService](#domainservice)

### DomainServices_Get
The Get Domain Service operation retrieves a json representation of the Domain Service.


```js
azure_domainservices.DomainServices_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainServiceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * domainServiceName **required** `string`: The name of the domain service in the specified subscription and resource group.

#### Output
* output [DomainService](#domainservice)

### DomainServices_Update
The Update Domain Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.


```js
azure_domainservices.DomainServices_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainServiceName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * domainServiceName **required** `string`: The name of the domain service in the specified subscription and resource group.
  * properties **required** [DomainServicePatchProperties](#domainservicepatchproperties)

#### Output
* output [DomainService](#domainservice)

### DomainServices_CreateOrUpdate
The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.


```js
azure_domainservices.DomainServices_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainServiceName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * domainServiceName **required** `string`: The name of the domain service in the specified subscription and resource group.
  * properties **required** [DomainServiceProperties](#domainserviceproperties)

#### Output
* output [DomainService](#domainservice)



## Definitions

### DomainService
* DomainService `object`: Domain service.
  * properties [DomainServiceProperties](#domainserviceproperties)
  * etag `string`: Resource etag
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DomainServiceListResult
* DomainServiceListResult `object`: The response from the List Domain Services operation.
  * value `array`: the list of domain services.
    * items [DomainService](#domainservice)

### DomainServicePatchProperties
* DomainServicePatchProperties `object`: Update Properties of the Domain Service.
  * ldapsSettings [LdapsSettings](#ldapssettings)

### DomainServiceProperties
* DomainServiceProperties `object`: Properties of the Domain Service.
  * domainControllerIpAddress `array`: List of Domain Controller IP Address
    * items `string`: Domain Controller IP Address
  * domainName `string`: The name of the Azure domain that the user would like to deploy Domain Services to.
  * ldapsSettings [LdapsSettings](#ldapssettings)
  * provisioningState `string`: the current deployment or provisioning state, which only appears in the response.
  * serviceStatus `string`: Status of Domain Service instance
  * subnetId `string`: The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
  * tenantId `string`: Azure Active Directory tenant id
  * vnetSiteId `string`: Virtual network site id

### LdapsSettings
* LdapsSettings `object`: Secure LDAP Settings
  * certificateNotAfter `string`: NotAfter DateTime of configure ldaps certificate.
  * certificateThumbprint `string`: Thumbprint of configure ldaps certificate.
  * externalAccess `string` (values: Enabled, Disabled): A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
  * externalAccessIpAddress `string`: External access ip address.
  * ldaps `string` (values: Enabled, Disabled): A flag to determine whether or not Secure LDAP is enabled or disabled.
  * pfxCertificate `string`: The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
  * pfxCertificatePassword `string`: The password to decrypt the provided Secure LDAP certificate pfx file.
  * publicCertificate `string`: Public certificate used to configure secure ldap.

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Domain Services.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Domain Services.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operation supported by Domain Services.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: The origin of the operation.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of domain service operation response.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### Resource
* Resource `object`: The Resource model definition.
  * etag `string`: Resource etag
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type


