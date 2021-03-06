# @datafire/amazonaws_guardduty

Client library for Amazon GuardDuty

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_guardduty
```
```js
let amazonaws_guardduty = require('@datafire/amazonaws_guardduty').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_guardduty.ListDetectors({}).then(data => {
  console.log(data);
});
```

## Description

Assess, monitor, manage, and remediate security issues across your AWS infrastructure, applications, and data.

## Actions

### ListDetectors



```js
amazonaws_guardduty.ListDetectors({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDetectorsResponse](#listdetectorsresponse)

### CreateDetector



```js
amazonaws_guardduty.CreateDetector({}, context)
```

#### Input
* input `object`
  * Enable [Enable](#enable)

#### Output
* output [CreateDetectorResponse](#createdetectorresponse)

### DeleteDetector



```js
amazonaws_guardduty.DeleteDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [DeleteDetectorResponse](#deletedetectorresponse)

### GetDetector



```js
amazonaws_guardduty.GetDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [GetDetectorResponse](#getdetectorresponse)

### UpdateDetector



```js
amazonaws_guardduty.UpdateDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * Enable [Enable](#enable)

#### Output
* output [UpdateDetectorResponse](#updatedetectorresponse)

### ListFilters



```js
amazonaws_guardduty.ListFilters({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * detectorId **required** `string`

#### Output
* output [ListFiltersResponse](#listfiltersresponse)

### CreateFilter



```js
amazonaws_guardduty.CreateFilter({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * Action [FilterAction](#filteraction)
  * ClientToken [__stringMin0Max64](#__stringmin0max64)
  * Description [FilterDescription](#filterdescription)
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * Name [FilterName](#filtername)
  * Rank [FilterRank](#filterrank)

#### Output
* output [CreateFilterResponse](#createfilterresponse)

### DeleteFilter



```js
amazonaws_guardduty.DeleteFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`

#### Output
* output [DeleteFilterResponse](#deletefilterresponse)

### GetFilter



```js
amazonaws_guardduty.GetFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`

#### Output
* output [GetFilterResponse](#getfilterresponse)

### UpdateFilter



```js
amazonaws_guardduty.UpdateFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`
  * Action [FilterAction](#filteraction)
  * Description [FilterDescription](#filterdescription)
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * Rank [FilterRank](#filterrank)

#### Output
* output [UpdateFilterResponse](#updatefilterresponse)

### ListFindings



```js
amazonaws_guardduty.ListFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * detectorId **required** `string`
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortCriteria](#sortcriteria)

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### ArchiveFindings



```js
amazonaws_guardduty.ArchiveFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * FindingIds [FindingIds](#findingids)

#### Output
* output [ArchiveFindingsResponse](#archivefindingsresponse)

### CreateSampleFindings



```js
amazonaws_guardduty.CreateSampleFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * FindingTypes [FindingTypes](#findingtypes)

#### Output
* output [CreateSampleFindingsResponse](#createsamplefindingsresponse)

### UpdateFindingsFeedback



```js
amazonaws_guardduty.UpdateFindingsFeedback({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * Comments [Comments](#comments)
  * Feedback [Feedback](#feedback)
  * FindingIds [FindingIds](#findingids)

#### Output
* output [UpdateFindingsFeedbackResponse](#updatefindingsfeedbackresponse)

### GetFindings



```js
amazonaws_guardduty.GetFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * FindingIds [FindingIds](#findingids)
  * SortCriteria [SortCriteria](#sortcriteria)

#### Output
* output [GetFindingsResponse](#getfindingsresponse)

### GetFindingsStatistics



```js
amazonaws_guardduty.GetFindingsStatistics({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * FindingStatisticTypes [FindingStatisticTypes](#findingstatistictypes)

#### Output
* output [GetFindingsStatisticsResponse](#getfindingsstatisticsresponse)

### UnarchiveFindings



```js
amazonaws_guardduty.UnarchiveFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * FindingIds [FindingIds](#findingids)

#### Output
* output [UnarchiveFindingsResponse](#unarchivefindingsresponse)

### ListIPSets



```js
amazonaws_guardduty.ListIPSets({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * detectorId **required** `string`

#### Output
* output [ListIPSetsResponse](#listipsetsresponse)

### CreateIPSet



```js
amazonaws_guardduty.CreateIPSet({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * Activate [Activate](#activate)
  * Format [IpSetFormat](#ipsetformat)
  * Location [Location](#location)
  * Name [Name](#name)

#### Output
* output [CreateIPSetResponse](#createipsetresponse)

### DeleteIPSet



```js
amazonaws_guardduty.DeleteIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`

#### Output
* output [DeleteIPSetResponse](#deleteipsetresponse)

### GetIPSet



```js
amazonaws_guardduty.GetIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`

#### Output
* output [GetIPSetResponse](#getipsetresponse)

### UpdateIPSet



```js
amazonaws_guardduty.UpdateIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`
  * Activate [Activate](#activate)
  * Location [Location](#location)
  * Name [Name](#name)

#### Output
* output [UpdateIPSetResponse](#updateipsetresponse)

### GetMasterAccount



```js
amazonaws_guardduty.GetMasterAccount({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [GetMasterAccountResponse](#getmasteraccountresponse)

### AcceptInvitation



```js
amazonaws_guardduty.AcceptInvitation({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * InvitationId [InvitationId](#invitationid)
  * MasterId [MasterId](#masterid)

#### Output
* output [AcceptInvitationResponse](#acceptinvitationresponse)

### DisassociateFromMasterAccount



```js
amazonaws_guardduty.DisassociateFromMasterAccount({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [DisassociateFromMasterAccountResponse](#disassociatefrommasteraccountresponse)

### ListMembers



```js
amazonaws_guardduty.ListMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * detectorId **required** `string`

#### Output
* output [ListMembersResponse](#listmembersresponse)

### CreateMembers



```js
amazonaws_guardduty.CreateMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountDetails [AccountDetails](#accountdetails)

#### Output
* output [CreateMembersResponse](#createmembersresponse)

### DeleteMembers



```js
amazonaws_guardduty.DeleteMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [DeleteMembersResponse](#deletemembersresponse)

### DisassociateMembers



```js
amazonaws_guardduty.DisassociateMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [DisassociateMembersResponse](#disassociatemembersresponse)

### GetMembers



```js
amazonaws_guardduty.GetMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [GetMembersResponse](#getmembersresponse)

### InviteMembers



```js
amazonaws_guardduty.InviteMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)
  * DisableEmailNotification [__boolean](#__boolean)
  * Message [Message](#message)

#### Output
* output [InviteMembersResponse](#invitemembersresponse)

### StartMonitoringMembers



```js
amazonaws_guardduty.StartMonitoringMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [StartMonitoringMembersResponse](#startmonitoringmembersresponse)

### StopMonitoringMembers



```js
amazonaws_guardduty.StopMonitoringMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [StopMonitoringMembersResponse](#stopmonitoringmembersresponse)

### ListThreatIntelSets



```js
amazonaws_guardduty.ListThreatIntelSets({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * detectorId **required** `string`

#### Output
* output [ListThreatIntelSetsResponse](#listthreatintelsetsresponse)

### CreateThreatIntelSet



```js
amazonaws_guardduty.CreateThreatIntelSet({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * Activate [Activate](#activate)
  * Format [ThreatIntelSetFormat](#threatintelsetformat)
  * Location [Location](#location)
  * Name [Name](#name)

#### Output
* output [CreateThreatIntelSetResponse](#createthreatintelsetresponse)

### DeleteThreatIntelSet



```js
amazonaws_guardduty.DeleteThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`

#### Output
* output [DeleteThreatIntelSetResponse](#deletethreatintelsetresponse)

### GetThreatIntelSet



```js
amazonaws_guardduty.GetThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`

#### Output
* output [GetThreatIntelSetResponse](#getthreatintelsetresponse)

### UpdateThreatIntelSet



```js
amazonaws_guardduty.UpdateThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`
  * Activate [Activate](#activate)
  * Location [Location](#location)
  * Name [Name](#name)

#### Output
* output [UpdateThreatIntelSetResponse](#updatethreatintelsetresponse)

### ListInvitations



```js
amazonaws_guardduty.ListInvitations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### GetInvitationsCount



```js
amazonaws_guardduty.GetInvitationsCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetInvitationsCountResponse](#getinvitationscountresponse)

### DeclineInvitations



```js
amazonaws_guardduty.DeclineInvitations({}, context)
```

#### Input
* input `object`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [DeclineInvitationsResponse](#declineinvitationsresponse)

### DeleteInvitations



```js
amazonaws_guardduty.DeleteInvitations({}, context)
```

#### Input
* input `object`
  * AccountIds [AccountIds](#accountids)

#### Output
* output [DeleteInvitationsResponse](#deleteinvitationsresponse)



## Definitions

### AcceptInvitationRequest
* AcceptInvitationRequest `object`: AcceptInvitation request body.
  * InvitationId [InvitationId](#invitationid)
  * MasterId [MasterId](#masterid)

### AcceptInvitationResponse
* AcceptInvitationResponse `object`

### AccessKeyDetails
* AccessKeyDetails `object`: The IAM access key details (IAM user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.
  * AccessKeyId [__string](#__string)
  * PrincipalId [__string](#__string)
  * UserName [__string](#__string)
  * UserType [__string](#__string)

### AccountDetail
* AccountDetail `object`: An object containing the member's accountId and email address.
  * AccountId **required** [AccountId](#accountid)
  * Email **required** [Email](#email)

### AccountDetails
* AccountDetails `array`: A list of account/email pairs.
  * items [AccountDetail](#accountdetail)

### AccountId
* AccountId `string`: AWS account ID.

### AccountIds
* AccountIds `array`: A list of account IDs.
  * items [__string](#__string)

### Action
* Action `object`: Information about the activity described in a finding.
  * ActionType [__string](#__string)
  * AwsApiCallAction [AwsApiCallAction](#awsapicallaction)
  * DnsRequestAction [DnsRequestAction](#dnsrequestaction)
  * NetworkConnectionAction [NetworkConnectionAction](#networkconnectionaction)
  * PortProbeAction [PortProbeAction](#portprobeaction)

### Activate
* Activate `boolean`: Whether we should start processing the list immediately or not.

### ArchiveFindingsRequest
* ArchiveFindingsRequest `object`: ArchiveFindings request body.
  * FindingIds [FindingIds](#findingids)

### ArchiveFindingsResponse
* ArchiveFindingsResponse `object`

### AwsApiCallAction
* AwsApiCallAction `object`: Information about the AWS_API_CALL action described in this finding.
  * Api [__string](#__string)
  * CallerType [__string](#__string)
  * DomainDetails [DomainDetails](#domaindetails)
  * RemoteIpDetails [RemoteIpDetails](#remoteipdetails)
  * ServiceName [__string](#__string)

### BadRequestException
* BadRequestException `object`: Error response object.
  * Message [__string](#__string)
  * Type [__string](#__string)

### City
* City `object`: City information of the remote IP address.
  * CityName [__string](#__string)

### Comments
* Comments `string`: Additional feedback about the GuardDuty findings.

### Condition
* Condition `object`: Finding attribute (for example, accountId) for which conditions and values must be specified when querying findings.
  * Eq [Eq](#eq)
  * Gt [__integer](#__integer)
  * Gte [__integer](#__integer)
  * Lt [__integer](#__integer)
  * Lte [__integer](#__integer)
  * Neq [Neq](#neq)

### CountBySeverityFindingStatistic
* CountBySeverityFindingStatistic `integer`: The count of findings for the given severity.

### Country
* Country `object`: Country information of the remote IP address.
  * CountryCode [__string](#__string)
  * CountryName [__string](#__string)

### CreateDetectorRequest
* CreateDetectorRequest `object`: CreateDetector request body.
  * Enable [Enable](#enable)

### CreateDetectorResponse
* CreateDetectorResponse `object`
  * DetectorId [DetectorId](#detectorid)

### CreateFilterRequest
* CreateFilterRequest `object`: CreateFilterRequest request body.
  * Action [FilterAction](#filteraction)
  * ClientToken [__stringMin0Max64](#__stringmin0max64)
  * Description [FilterDescription](#filterdescription)
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * Name [FilterName](#filtername)
  * Rank [FilterRank](#filterrank)

### CreateFilterResponse
* CreateFilterResponse `object`
  * Name [FilterName](#filtername)

### CreateIPSetRequest
* CreateIPSetRequest `object`: CreateIPSet request body.
  * Activate [Activate](#activate)
  * Format [IpSetFormat](#ipsetformat)
  * Location [Location](#location)
  * Name [Name](#name)

### CreateIPSetResponse
* CreateIPSetResponse `object`
  * IpSetId [IpSetId](#ipsetid)

### CreateMembersRequest
* CreateMembersRequest `object`: CreateMembers request body.
  * AccountDetails [AccountDetails](#accountdetails)

### CreateMembersResponse
* CreateMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### CreateSampleFindingsRequest
* CreateSampleFindingsRequest `object`: CreateSampleFindings request body.
  * FindingTypes [FindingTypes](#findingtypes)

### CreateSampleFindingsResponse
* CreateSampleFindingsResponse `object`

### CreateThreatIntelSetRequest
* CreateThreatIntelSetRequest `object`: CreateThreatIntelSet request body.
  * Activate [Activate](#activate)
  * Format [ThreatIntelSetFormat](#threatintelsetformat)
  * Location [Location](#location)
  * Name [Name](#name)

### CreateThreatIntelSetResponse
* CreateThreatIntelSetResponse `object`
  * ThreatIntelSetId [ThreatIntelSetId](#threatintelsetid)

### CreatedAt
* CreatedAt `string`: The first time a resource was created. The format will be ISO-8601.

### DeclineInvitationsRequest
* DeclineInvitationsRequest `object`: DeclineInvitations request body.
  * AccountIds [AccountIds](#accountids)

### DeclineInvitationsResponse
* DeclineInvitationsResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### DeleteDetectorRequest
* DeleteDetectorRequest `object`

### DeleteDetectorResponse
* DeleteDetectorResponse `object`

### DeleteFilterRequest
* DeleteFilterRequest `object`

### DeleteFilterResponse
* DeleteFilterResponse `object`

### DeleteIPSetRequest
* DeleteIPSetRequest `object`

### DeleteIPSetResponse
* DeleteIPSetResponse `object`

### DeleteInvitationsRequest
* DeleteInvitationsRequest `object`: DeleteInvitations request body.
  * AccountIds [AccountIds](#accountids)

### DeleteInvitationsResponse
* DeleteInvitationsResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### DeleteMembersRequest
* DeleteMembersRequest `object`: DeleteMembers request body.
  * AccountIds [AccountIds](#accountids)

### DeleteMembersResponse
* DeleteMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### DeleteThreatIntelSetRequest
* DeleteThreatIntelSetRequest `object`

### DeleteThreatIntelSetResponse
* DeleteThreatIntelSetResponse `object`

### DetectorId
* DetectorId `string`: The unique identifier for a detector.

### DetectorIds
* DetectorIds `array`: A list of detector Ids.
  * items [DetectorId](#detectorid)

### DetectorStatus
* DetectorStatus `string` (values: ENABLED, DISABLED): The status of detector.

### DisassociateFromMasterAccountRequest
* DisassociateFromMasterAccountRequest `object`

### DisassociateFromMasterAccountResponse
* DisassociateFromMasterAccountResponse `object`

### DisassociateMembersRequest
* DisassociateMembersRequest `object`: DisassociateMembers request body.
  * AccountIds [AccountIds](#accountids)

### DisassociateMembersResponse
* DisassociateMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### DnsRequestAction
* DnsRequestAction `object`: Information about the DNS_REQUEST action described in this finding.
  * Domain [Domain](#domain)

### Domain
* Domain `string`: A domain name.

### DomainDetails
* DomainDetails `object`: Domain information for the AWS API call.

### Email
* Email `string`: Member account's email address.

### Enable
* Enable `boolean`: A boolean value that specifies whether the detector is to be enabled.

### Eq
* Eq `array`: Represents the equal condition to be applied to a single field when querying for findings.
  * items [__string](#__string)

### ErrorResponse
* ErrorResponse `object`: Error response object.
  * Message [__string](#__string)
  * Type [__string](#__string)

### Feedback
* Feedback `string` (values: USEFUL, NOT_USEFUL): Finding Feedback Value

### FilterAction
* FilterAction `string` (values: NOOP, ARCHIVE): The action associated with a filter.

### FilterDescription
* FilterDescription `string`: The filter description

### FilterName
* FilterName `string`: The unique identifier for a filter

### FilterNames
* FilterNames `array`: A list of filter names
  * items [FilterName](#filtername)

### FilterRank
* FilterRank `integer`: Relative position of filter among list of exisiting filters.

### Finding
* Finding `object`: Representation of a abnormal or suspicious activity.
  * AccountId **required** [__string](#__string)
  * Arn **required** [__string](#__string)
  * Confidence [__double](#__double)
  * CreatedAt **required** [CreatedAt](#createdat)
  * Description [__string](#__string)
  * Id **required** [__string](#__string)
  * Partition [__string](#__string)
  * Region **required** [__string](#__string)
  * Resource **required** [Resource](#resource)
  * SchemaVersion **required** [__string](#__string)
  * Service [Service](#service)
  * Severity **required** [__double](#__double)
  * Title [__string](#__string)
  * Type **required** [__string](#__string)
  * UpdatedAt **required** [UpdatedAt](#updatedat)

### FindingCriteria
* FindingCriteria `object`: Represents the criteria used for querying findings.
  * Criterion [__mapOfCondition](#__mapofcondition)

### FindingId
* FindingId `string`: The unique identifier for the Finding

### FindingIds
* FindingIds `array`: The list of the Findings.
  * items [FindingId](#findingid)

### FindingStatisticType
* FindingStatisticType `string` (values: COUNT_BY_SEVERITY): The types of finding statistics.

### FindingStatisticTypes
* FindingStatisticTypes `array`: The list of the finding statistics.
  * items [FindingStatisticType](#findingstatistictype)

### FindingStatistics
* FindingStatistics `object`: Finding statistics object.
  * CountBySeverity [__mapOfCountBySeverityFindingStatistic](#__mapofcountbyseverityfindingstatistic)

### FindingType
* FindingType `string`: The finding type for the finding

### FindingTypes
* FindingTypes `array`: The list of the finding types.
  * items [FindingType](#findingtype)

### Findings
* Findings `array`: A list of findings.
  * items [Finding](#finding)

### GeoLocation
* GeoLocation `object`: Location information of the remote IP address.
  * Lat [__double](#__double)
  * Lon [__double](#__double)

### GetDetectorRequest
* GetDetectorRequest `object`

### GetDetectorResponse
* GetDetectorResponse `object`
  * CreatedAt [CreatedAt](#createdat)
  * ServiceRole [ServiceRole](#servicerole)
  * Status [DetectorStatus](#detectorstatus)
  * UpdatedAt [UpdatedAt](#updatedat)

### GetFilterRequest
* GetFilterRequest `object`

### GetFilterResponse
* GetFilterResponse `object`
  * Action [FilterAction](#filteraction)
  * Description [FilterDescription](#filterdescription)
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * Name [FilterName](#filtername)
  * Rank [FilterRank](#filterrank)

### GetFindingsRequest
* GetFindingsRequest `object`: GetFindings request body.
  * FindingIds [FindingIds](#findingids)
  * SortCriteria [SortCriteria](#sortcriteria)

### GetFindingsResponse
* GetFindingsResponse `object`
  * Findings [Findings](#findings)

### GetFindingsStatisticsRequest
* GetFindingsStatisticsRequest `object`: GetFindingsStatistics request body.
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * FindingStatisticTypes [FindingStatisticTypes](#findingstatistictypes)

### GetFindingsStatisticsResponse
* GetFindingsStatisticsResponse `object`
  * FindingStatistics [FindingStatistics](#findingstatistics)

### GetIPSetRequest
* GetIPSetRequest `object`

### GetIPSetResponse
* GetIPSetResponse `object`
  * Format [IpSetFormat](#ipsetformat)
  * Location [Location](#location)
  * Name [Name](#name)
  * Status [IpSetStatus](#ipsetstatus)

### GetInvitationsCountRequest
* GetInvitationsCountRequest `object`

### GetInvitationsCountResponse
* GetInvitationsCountResponse `object`
  * InvitationsCount [__integer](#__integer)

### GetMasterAccountRequest
* GetMasterAccountRequest `object`

### GetMasterAccountResponse
* GetMasterAccountResponse `object`
  * Master [Master](#master)

### GetMembersRequest
* GetMembersRequest `object`: GetMembers request body.
  * AccountIds [AccountIds](#accountids)

### GetMembersResponse
* GetMembersResponse `object`
  * Members [Members](#members)
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### GetThreatIntelSetRequest
* GetThreatIntelSetRequest `object`

### GetThreatIntelSetResponse
* GetThreatIntelSetResponse `object`
  * Format [ThreatIntelSetFormat](#threatintelsetformat)
  * Location [Location](#location)
  * Name [Name](#name)
  * Status [ThreatIntelSetStatus](#threatintelsetstatus)

### IamInstanceProfile
* IamInstanceProfile `object`: The profile information of the EC2 instance.
  * Arn [__string](#__string)
  * Id [__string](#__string)

### InstanceDetails
* InstanceDetails `object`: The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.
  * AvailabilityZone [__string](#__string)
  * IamInstanceProfile [IamInstanceProfile](#iaminstanceprofile)
  * ImageDescription [__string](#__string)
  * ImageId [__string](#__string)
  * InstanceId [__string](#__string)
  * InstanceState [__string](#__string)
  * InstanceType [__string](#__string)
  * LaunchTime [__string](#__string)
  * NetworkInterfaces [NetworkInterfaces](#networkinterfaces)
  * Platform [__string](#__string)
  * ProductCodes [ProductCodes](#productcodes)
  * Tags [Tags](#tags)

### InternalServerErrorException
* InternalServerErrorException `object`: Error response object.
  * Message [__string](#__string)
  * Type [__string](#__string)

### Invitation
* Invitation `object`: Invitation from an AWS account to become the current account's master.
  * AccountId [__string](#__string)
  * InvitationId [InvitationId](#invitationid)
  * InvitedAt [InvitedAt](#invitedat)
  * RelationshipStatus [__string](#__string)

### InvitationId
* InvitationId `string`: This value is used to validate the master account to the member account.

### Invitations
* Invitations `array`: A list of invitation descriptions.
  * items [Invitation](#invitation)

### InviteMembersRequest
* InviteMembersRequest `object`: InviteMembers request body.
  * AccountIds [AccountIds](#accountids)
  * DisableEmailNotification [__boolean](#__boolean)
  * Message [Message](#message)

### InviteMembersResponse
* InviteMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### InvitedAt
* InvitedAt `string`: Timestamp at which a member has been invited. The format will be ISO-8601.

### IpSetFormat
* IpSetFormat `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE): The format of the ipSet.

### IpSetId
* IpSetId `string`: The unique identifier for an IP Set

### IpSetIds
* IpSetIds `array`: A list of the IP set IDs
  * items [IpSetId](#ipsetid)

### IpSetStatus
* IpSetStatus `string` (values: INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED): The status of ipSet file uploaded.

### Ipv6Address
* Ipv6Address `string`: IpV6 address of the EC2 instance.

### Ipv6Addresses
* Ipv6Addresses `array`: A list of EC2 instance IPv6 address information.
  * items [Ipv6Address](#ipv6address)

### ListDetectorsRequest
* ListDetectorsRequest `object`

### ListDetectorsResponse
* ListDetectorsResponse `object`
  * DetectorIds [DetectorIds](#detectorids)
  * NextToken [NextToken](#nexttoken)

### ListFiltersRequest
* ListFiltersRequest `object`

### ListFiltersResponse
* ListFiltersResponse `object`
  * FilterNames [FilterNames](#filternames)
  * NextToken [NextToken](#nexttoken)

### ListFindingsRequest
* ListFindingsRequest `object`: ListFindings request body.
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortCriteria](#sortcriteria)

### ListFindingsResponse
* ListFindingsResponse `object`
  * FindingIds [FindingIds](#findingids)
  * NextToken [NextToken](#nexttoken)

### ListIPSetsRequest
* ListIPSetsRequest `object`

### ListIPSetsResponse
* ListIPSetsResponse `object`
  * IpSetIds [IpSetIds](#ipsetids)
  * NextToken [NextToken](#nexttoken)

### ListInvitationsRequest
* ListInvitationsRequest `object`

### ListInvitationsResponse
* ListInvitationsResponse `object`
  * Invitations [Invitations](#invitations)
  * NextToken [NextToken](#nexttoken)

### ListMembersRequest
* ListMembersRequest `object`

### ListMembersResponse
* ListMembersResponse `object`
  * Members [Members](#members)
  * NextToken [NextToken](#nexttoken)

### ListThreatIntelSetsRequest
* ListThreatIntelSetsRequest `object`

### ListThreatIntelSetsResponse
* ListThreatIntelSetsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * ThreatIntelSetIds [ThreatIntelSetIds](#threatintelsetids)

### LocalPortDetails
* LocalPortDetails `object`: Local port information of the connection.
  * Port [__integer](#__integer)
  * PortName [__string](#__string)

### Location
* Location `string`: The location of the S3 bucket where the list resides. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)

### Master
* Master `object`: Contains details about the master account.
  * AccountId [__string](#__string)
  * InvitationId [InvitationId](#invitationid)
  * InvitedAt [InvitedAt](#invitedat)
  * RelationshipStatus [__string](#__string)

### MasterId
* MasterId `string`: The master account ID.

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: Contains details about the member account.
  * AccountId **required** [AccountId](#accountid)
  * DetectorId [DetectorId](#detectorid)
  * Email **required** [Email](#email)
  * InvitedAt [InvitedAt](#invitedat)
  * MasterId **required** [MasterId](#masterid)
  * RelationshipStatus **required** [__string](#__string)
  * UpdatedAt **required** [UpdatedAt](#updatedat)

### Members
* Members `array`: A list of member descriptions.
  * items [Member](#member)

### Message
* Message `string`: The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members.

### Name
* Name `string`: The user-friendly name to identify the list.

### Neq
* Neq `array`: Represents the not equal condition to be applied to a single field when querying for findings.
  * items [__string](#__string)

### NetworkConnectionAction
* NetworkConnectionAction `object`: Information about the NETWORK_CONNECTION action described in this finding.
  * Blocked [__boolean](#__boolean)
  * ConnectionDirection [__string](#__string)
  * LocalPortDetails [LocalPortDetails](#localportdetails)
  * Protocol [__string](#__string)
  * RemoteIpDetails [RemoteIpDetails](#remoteipdetails)
  * RemotePortDetails [RemotePortDetails](#remoteportdetails)

### NetworkInterface
* NetworkInterface `object`: The network interface information of the EC2 instance.
  * Ipv6Addresses [Ipv6Addresses](#ipv6addresses)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * PrivateDnsName [PrivateDnsName](#privatednsname)
  * PrivateIpAddress [PrivateIpAddress](#privateipaddress)
  * PrivateIpAddresses [PrivateIpAddresses](#privateipaddresses)
  * PublicDnsName [__string](#__string)
  * PublicIp [__string](#__string)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SubnetId [__string](#__string)
  * VpcId [__string](#__string)

### NetworkInterfaceId
* NetworkInterfaceId `string`: The ID of the network interface.

### NetworkInterfaces
* NetworkInterfaces `array`: The network interface information of the EC2 instance.
  * items [NetworkInterface](#networkinterface)

### NextToken
* NextToken `string`: You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.

### OrderBy
* OrderBy `string` (values: ASC, DESC)

### Organization
* Organization `object`: ISP Organization information of the remote IP address.
  * Asn [__string](#__string)
  * AsnOrg [__string](#__string)
  * Isp [__string](#__string)
  * Org [__string](#__string)

### PortProbeAction
* PortProbeAction `object`: Information about the PORT_PROBE action described in this finding.
  * Blocked [__boolean](#__boolean)
  * PortProbeDetails [__listOfPortProbeDetail](#__listofportprobedetail)

### PortProbeDetail
* PortProbeDetail `object`: Details about the port probe finding.
  * LocalPortDetails [LocalPortDetails](#localportdetails)
  * RemoteIpDetails [RemoteIpDetails](#remoteipdetails)

### PrivateDnsName
* PrivateDnsName `string`: Private DNS name of the EC2 instance.

### PrivateIpAddress
* PrivateIpAddress `string`: Private IP address of the EC2 instance.

### PrivateIpAddressDetails
* PrivateIpAddressDetails `object`: Other private IP address information of the EC2 instance.
  * PrivateDnsName [PrivateDnsName](#privatednsname)
  * PrivateIpAddress [PrivateIpAddress](#privateipaddress)

### PrivateIpAddresses
* PrivateIpAddresses `array`: Other private IP address information of the EC2 instance.
  * items [PrivateIpAddressDetails](#privateipaddressdetails)

### ProductCode
* ProductCode `object`: The product code of the EC2 instance.
  * Code [__string](#__string)
  * ProductType [__string](#__string)

### ProductCodes
* ProductCodes `array`: The product code of the EC2 instance.
  * items [ProductCode](#productcode)

### RemoteIpDetails
* RemoteIpDetails `object`: Remote IP information of the connection.
  * City [City](#city)
  * Country [Country](#country)
  * GeoLocation [GeoLocation](#geolocation)
  * IpAddressV4 [__string](#__string)
  * Organization [Organization](#organization)

### RemotePortDetails
* RemotePortDetails `object`: Remote port information of the connection.
  * Port [__integer](#__integer)
  * PortName [__string](#__string)

### Resource
* Resource `object`: The AWS resource associated with the activity that prompted GuardDuty to generate a finding.
  * AccessKeyDetails [AccessKeyDetails](#accesskeydetails)
  * InstanceDetails [InstanceDetails](#instancedetails)
  * ResourceType [__string](#__string)

### SecurityGroup
* SecurityGroup `object`: Security groups associated with the EC2 instance.
  * GroupId [__string](#__string)
  * GroupName [__string](#__string)

### SecurityGroups
* SecurityGroups `array`: Security groups associated with the EC2 instance.
  * items [SecurityGroup](#securitygroup)

### Service
* Service `object`: Additional information assigned to the generated finding by GuardDuty.
  * Action [Action](#action)
  * Archived [__boolean](#__boolean)
  * Count [__integer](#__integer)
  * DetectorId [DetectorId](#detectorid)
  * EventFirstSeen [__string](#__string)
  * EventLastSeen [__string](#__string)
  * ResourceRole [__string](#__string)
  * ServiceName [__string](#__string)
  * UserFeedback [__string](#__string)

### ServiceRole
* ServiceRole `string`: Customer serviceRole name or ARN for accessing customer resources

### SortCriteria
* SortCriteria `object`: Represents the criteria used for sorting findings.
  * AttributeName [__string](#__string)
  * OrderBy [OrderBy](#orderby)

### StartMonitoringMembersRequest
* StartMonitoringMembersRequest `object`: StartMonitoringMembers request body.
  * AccountIds [AccountIds](#accountids)

### StartMonitoringMembersResponse
* StartMonitoringMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### StopMonitoringMembersRequest
* StopMonitoringMembersRequest `object`: StopMonitoringMembers request body.
  * AccountIds [AccountIds](#accountids)

### StopMonitoringMembersResponse
* StopMonitoringMembersResponse `object`
  * UnprocessedAccounts [UnprocessedAccounts](#unprocessedaccounts)

### Tag
* Tag `object`: A tag of the EC2 instance.
  * Key [__string](#__string)
  * Value [__string](#__string)

### Tags
* Tags `array`: The tags of the EC2 instance.
  * items [Tag](#tag)

### ThreatIntelSetFormat
* ThreatIntelSetFormat `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE): The format of the threatIntelSet.

### ThreatIntelSetId
* ThreatIntelSetId `string`: The unique identifier for an threat intel set

### ThreatIntelSetIds
* ThreatIntelSetIds `array`: The list of the threat intel set IDs
  * items [ThreatIntelSetId](#threatintelsetid)

### ThreatIntelSetStatus
* ThreatIntelSetStatus `string` (values: INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED): The status of threatIntelSet file uploaded.

### UnarchiveFindingsRequest
* UnarchiveFindingsRequest `object`: UnarchiveFindings request body.
  * FindingIds [FindingIds](#findingids)

### UnarchiveFindingsResponse
* UnarchiveFindingsResponse `object`

### UnprocessedAccount
* UnprocessedAccount `object`: An object containing the unprocessed account and a result string explaining why it was unprocessed.
  * AccountId **required** [__string](#__string)
  * Result **required** [__string](#__string)

### UnprocessedAccounts
* UnprocessedAccounts `array`: A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
  * items [UnprocessedAccount](#unprocessedaccount)

### UpdateDetectorRequest
* UpdateDetectorRequest `object`: UpdateDetector request body.
  * Enable [Enable](#enable)

### UpdateDetectorResponse
* UpdateDetectorResponse `object`

### UpdateFilterRequest
* UpdateFilterRequest `object`: UpdateFilterRequest request body.
  * Action [FilterAction](#filteraction)
  * Description [FilterDescription](#filterdescription)
  * FindingCriteria [FindingCriteria](#findingcriteria)
  * Rank [FilterRank](#filterrank)

### UpdateFilterResponse
* UpdateFilterResponse `object`
  * Name [FilterName](#filtername)

### UpdateFindingsFeedbackRequest
* UpdateFindingsFeedbackRequest `object`: UpdateFindingsFeedback request body.
  * Comments [Comments](#comments)
  * Feedback [Feedback](#feedback)
  * FindingIds [FindingIds](#findingids)

### UpdateFindingsFeedbackResponse
* UpdateFindingsFeedbackResponse `object`

### UpdateIPSetRequest
* UpdateIPSetRequest `object`: UpdateIPSet request body.
  * Activate [Activate](#activate)
  * Location [Location](#location)
  * Name [Name](#name)

### UpdateIPSetResponse
* UpdateIPSetResponse `object`

### UpdateThreatIntelSetRequest
* UpdateThreatIntelSetRequest `object`: UpdateThreatIntelSet request body.
  * Activate [Activate](#activate)
  * Location [Location](#location)
  * Name [Name](#name)

### UpdateThreatIntelSetResponse
* UpdateThreatIntelSetResponse `object`

### UpdatedAt
* UpdatedAt `string`: The first time a resource was created. The format will be ISO-8601.

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __listOfPortProbeDetail
* __listOfPortProbeDetail `array`
  * items [PortProbeDetail](#portprobedetail)

### __long
* __long `integer`

### __mapOfCondition
* __mapOfCondition `array`
  * items `object`
    * key [__string](#__string)
    * value [Condition](#condition)

### __mapOfCountBySeverityFindingStatistic
* __mapOfCountBySeverityFindingStatistic `array`
  * items `object`
    * key [__string](#__string)
    * value [CountBySeverityFindingStatistic](#countbyseverityfindingstatistic)

### __string
* __string `string`

### __stringMin0Max64
* __stringMin0Max64 `string`

### __timestamp
* __timestamp `string`


