# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workspaces
```
```js
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_workspaces.AssociateIpGroups({
  "DirectoryId": "",
  "GroupIds": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows desktops for your users.</p>

## Actions

### AssociateIpGroups



```js
amazonaws_workspaces.AssociateIpGroups({
  "DirectoryId": "",
  "GroupIds": []
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * GroupIds **required** [IpGroupIdList](#ipgroupidlist)

#### Output
* output [AssociateIpGroupsResult](#associateipgroupsresult)

### AuthorizeIpRules



```js
amazonaws_workspaces.AuthorizeIpRules({
  "GroupId": "",
  "UserRules": []
}, context)
```

#### Input
* input `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRuleList](#iprulelist)

#### Output
* output [AuthorizeIpRulesResult](#authorizeiprulesresult)

### CreateIpGroup



```js
amazonaws_workspaces.CreateIpGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupDesc [IpGroupDesc](#ipgroupdesc)
  * GroupName **required** [IpGroupName](#ipgroupname)
  * UserRules [IpRuleList](#iprulelist)

#### Output
* output [CreateIpGroupResult](#createipgroupresult)

### CreateTags



```js
amazonaws_workspaces.CreateTags({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * Tags **required** [TagList](#taglist)

#### Output
* output [CreateTagsResult](#createtagsresult)

### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({
  "Workspaces": []
}, context)
```

#### Input
* input `object`
  * Workspaces **required** [WorkspaceRequestList](#workspacerequestlist)

#### Output
* output [CreateWorkspacesResult](#createworkspacesresult)

### DeleteIpGroup



```js
amazonaws_workspaces.DeleteIpGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** [IpGroupId](#ipgroupid)

#### Output
* output [DeleteIpGroupResult](#deleteipgroupresult)

### DeleteTags



```js
amazonaws_workspaces.DeleteTags({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [DeleteTagsResult](#deletetagsresult)

### DescribeIpGroups



```js
amazonaws_workspaces.DescribeIpGroups({}, context)
```

#### Input
* input `object`
  * GroupIds [IpGroupIdList](#ipgroupidlist)
  * MaxResults [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [DescribeIpGroupsResult](#describeipgroupsresult)

### DescribeTags



```js
amazonaws_workspaces.DescribeTags({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeWorkspaceBundles



```js
amazonaws_workspaces.DescribeWorkspaceBundles({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * BundleIds [BundleIdList](#bundleidlist)
  * NextToken [PaginationToken](#paginationtoken)
  * Owner [BundleOwner](#bundleowner)

#### Output
* output [DescribeWorkspaceBundlesResult](#describeworkspacebundlesresult)

### DescribeWorkspaceDirectories



```js
amazonaws_workspaces.DescribeWorkspaceDirectories({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * DirectoryIds [DirectoryIdList](#directoryidlist)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [DescribeWorkspaceDirectoriesResult](#describeworkspacedirectoriesresult)

### DescribeWorkspaces



```js
amazonaws_workspaces.DescribeWorkspaces({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * BundleId [BundleId](#bundleid)
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)
  * UserName [UserName](#username)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

#### Output
* output [DescribeWorkspacesResult](#describeworkspacesresult)

### DescribeWorkspacesConnectionStatus



```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({}, context)
```

#### Input
* input `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

#### Output
* output [DescribeWorkspacesConnectionStatusResult](#describeworkspacesconnectionstatusresult)

### DisassociateIpGroups



```js
amazonaws_workspaces.DisassociateIpGroups({
  "DirectoryId": "",
  "GroupIds": []
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * GroupIds **required** [IpGroupIdList](#ipgroupidlist)

#### Output
* output [DisassociateIpGroupsResult](#disassociateipgroupsresult)

### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({
  "WorkspaceId": "",
  "WorkspaceProperties": {}
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceProperties **required** [WorkspaceProperties](#workspaceproperties)

#### Output
* output [ModifyWorkspacePropertiesResult](#modifyworkspacepropertiesresult)

### ModifyWorkspaceState



```js
amazonaws_workspaces.ModifyWorkspaceState({
  "WorkspaceId": "",
  "WorkspaceState": ""
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceState **required** [TargetWorkspaceState](#targetworkspacestate)

#### Output
* output [ModifyWorkspaceStateResult](#modifyworkspacestateresult)

### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({
  "RebootWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * RebootWorkspaceRequests **required** [RebootWorkspaceRequests](#rebootworkspacerequests)

#### Output
* output [RebootWorkspacesResult](#rebootworkspacesresult)

### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({
  "RebuildWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * RebuildWorkspaceRequests **required** [RebuildWorkspaceRequests](#rebuildworkspacerequests)

#### Output
* output [RebuildWorkspacesResult](#rebuildworkspacesresult)

### RevokeIpRules



```js
amazonaws_workspaces.RevokeIpRules({
  "GroupId": "",
  "UserRules": []
}, context)
```

#### Input
* input `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRevokedRuleList](#iprevokedrulelist)

#### Output
* output [RevokeIpRulesResult](#revokeiprulesresult)

### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({
  "StartWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * StartWorkspaceRequests **required** [StartWorkspaceRequests](#startworkspacerequests)

#### Output
* output [StartWorkspacesResult](#startworkspacesresult)

### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({
  "StopWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * StopWorkspaceRequests **required** [StopWorkspaceRequests](#stopworkspacerequests)

#### Output
* output [StopWorkspacesResult](#stopworkspacesresult)

### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({
  "TerminateWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * TerminateWorkspaceRequests **required** [TerminateWorkspaceRequests](#terminateworkspacerequests)

#### Output
* output [TerminateWorkspacesResult](#terminateworkspacesresult)

### UpdateRulesOfIpGroup



```js
amazonaws_workspaces.UpdateRulesOfIpGroup({
  "GroupId": "",
  "UserRules": []
}, context)
```

#### Input
* input `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRuleList](#iprulelist)

#### Output
* output [UpdateRulesOfIpGroupResult](#updaterulesofipgroupresult)



## Definitions

### ARN
* ARN `string`

### AccessDeniedException
* AccessDeniedException `object`: The user is not authorized to access a resource.
  * message [ExceptionMessage](#exceptionmessage)

### Alias
* Alias `string`

### AssociateIpGroupsRequest
* AssociateIpGroupsRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * GroupIds **required** [IpGroupIdList](#ipgroupidlist)

### AssociateIpGroupsResult
* AssociateIpGroupsResult `object`

### AuthorizeIpRulesRequest
* AuthorizeIpRulesRequest `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRuleList](#iprulelist)

### AuthorizeIpRulesResult
* AuthorizeIpRulesResult `object`

### BooleanObject
* BooleanObject `boolean`

### BundleId
* BundleId `string`

### BundleIdList
* BundleIdList `array`
  * items [BundleId](#bundleid)

### BundleList
* BundleList `array`
  * items [WorkspaceBundle](#workspacebundle)

### BundleOwner
* BundleOwner `string`

### Compute
* Compute `string` (values: VALUE, STANDARD, PERFORMANCE, POWER, GRAPHICS)

### ComputeType
* ComputeType `object`: Information about the compute type.
  * Name [Compute](#compute)

### ComputerName
* ComputerName `string`

### ConnectionState
* ConnectionState `string` (values: CONNECTED, DISCONNECTED, UNKNOWN)

### CreateIpGroupRequest
* CreateIpGroupRequest `object`
  * GroupDesc [IpGroupDesc](#ipgroupdesc)
  * GroupName **required** [IpGroupName](#ipgroupname)
  * UserRules [IpRuleList](#iprulelist)

### CreateIpGroupResult
* CreateIpGroupResult `object`
  * GroupId [IpGroupId](#ipgroupid)

### CreateTagsRequest
* CreateTagsRequest `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * Tags **required** [TagList](#taglist)

### CreateTagsResult
* CreateTagsResult `object`

### CreateWorkspacesRequest
* CreateWorkspacesRequest `object`
  * Workspaces **required** [WorkspaceRequestList](#workspacerequestlist)

### CreateWorkspacesResult
* CreateWorkspacesResult `object`
  * FailedRequests [FailedCreateWorkspaceRequests](#failedcreateworkspacerequests)
  * PendingRequests [WorkspaceList](#workspacelist)

### DefaultOu
* DefaultOu `string`

### DefaultWorkspaceCreationProperties
* DefaultWorkspaceCreationProperties `object`: Information about defaults used to create a WorkSpace.
  * CustomSecurityGroupId [SecurityGroupId](#securitygroupid)
  * DefaultOu [DefaultOu](#defaultou)
  * EnableInternetAccess [BooleanObject](#booleanobject)
  * EnableWorkDocs [BooleanObject](#booleanobject)
  * UserEnabledAsLocalAdministrator [BooleanObject](#booleanobject)

### DeleteIpGroupRequest
* DeleteIpGroupRequest `object`
  * GroupId **required** [IpGroupId](#ipgroupid)

### DeleteIpGroupResult
* DeleteIpGroupResult `object`

### DeleteTagsRequest
* DeleteTagsRequest `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### DeleteTagsResult
* DeleteTagsResult `object`

### DescribeIpGroupsRequest
* DescribeIpGroupsRequest `object`
  * GroupIds [IpGroupIdList](#ipgroupidlist)
  * MaxResults [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeIpGroupsResult
* DescribeIpGroupsResult `object`
  * NextToken [PaginationToken](#paginationtoken)
  * Result [WorkspacesIpGroupsList](#workspacesipgroupslist)

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)

### DescribeTagsResult
* DescribeTagsResult `object`
  * TagList [TagList](#taglist)

### DescribeWorkspaceBundlesRequest
* DescribeWorkspaceBundlesRequest `object`
  * BundleIds [BundleIdList](#bundleidlist)
  * NextToken [PaginationToken](#paginationtoken)
  * Owner [BundleOwner](#bundleowner)

### DescribeWorkspaceBundlesResult
* DescribeWorkspaceBundlesResult `object`
  * Bundles [BundleList](#bundlelist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspaceDirectoriesRequest
* DescribeWorkspaceDirectoriesRequest `object`
  * DirectoryIds [DirectoryIdList](#directoryidlist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspaceDirectoriesResult
* DescribeWorkspaceDirectoriesResult `object`
  * Directories [DirectoryList](#directorylist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspacesConnectionStatusRequest
* DescribeWorkspacesConnectionStatusRequest `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

### DescribeWorkspacesConnectionStatusResult
* DescribeWorkspacesConnectionStatusResult `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspacesConnectionStatus [WorkspaceConnectionStatusList](#workspaceconnectionstatuslist)

### DescribeWorkspacesRequest
* DescribeWorkspacesRequest `object`
  * BundleId [BundleId](#bundleid)
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)
  * UserName [UserName](#username)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

### DescribeWorkspacesResult
* DescribeWorkspacesResult `object`
  * NextToken [PaginationToken](#paginationtoken)
  * Workspaces [WorkspaceList](#workspacelist)

### Description
* Description `string`

### DirectoryId
* DirectoryId `string`

### DirectoryIdList
* DirectoryIdList `array`
  * items [DirectoryId](#directoryid)

### DirectoryList
* DirectoryList `array`
  * items [WorkspaceDirectory](#workspacedirectory)

### DirectoryName
* DirectoryName `string`

### DisassociateIpGroupsRequest
* DisassociateIpGroupsRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * GroupIds **required** [IpGroupIdList](#ipgroupidlist)

### DisassociateIpGroupsResult
* DisassociateIpGroupsResult `object`

### DnsIpAddresses
* DnsIpAddresses `array`
  * items [IpAddress](#ipaddress)

### ErrorType
* ErrorType `string`

### ExceptionMessage
* ExceptionMessage `string`

### FailedCreateWorkspaceRequest
* FailedCreateWorkspaceRequest `object`: Information about a WorkSpace that could not be created.
  * ErrorCode [ErrorType](#errortype)
  * ErrorMessage [Description](#description)
  * WorkspaceRequest [WorkspaceRequest](#workspacerequest)

### FailedCreateWorkspaceRequests
* FailedCreateWorkspaceRequests `array`
  * items [FailedCreateWorkspaceRequest](#failedcreateworkspacerequest)

### FailedRebootWorkspaceRequests
* FailedRebootWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedRebuildWorkspaceRequests
* FailedRebuildWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStartWorkspaceRequests
* FailedStartWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStopWorkspaceRequests
* FailedStopWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedTerminateWorkspaceRequests
* FailedTerminateWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedWorkspaceChangeRequest
* FailedWorkspaceChangeRequest `object`: Information about a WorkSpace that could not be rebooted (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
  * ErrorCode [ErrorType](#errortype)
  * ErrorMessage [Description](#description)
  * WorkspaceId [WorkspaceId](#workspaceid)

### InvalidParameterValuesException
* InvalidParameterValuesException `object`: One or more parameter values are not valid.
  * message [ExceptionMessage](#exceptionmessage)

### InvalidResourceStateException
* InvalidResourceStateException `object`: The state of the resource is not valid for this operation.
  * message [ExceptionMessage](#exceptionmessage)

### IpAddress
* IpAddress `string`

### IpGroupDesc
* IpGroupDesc `string`

### IpGroupId
* IpGroupId `string`

### IpGroupIdList
* IpGroupIdList `array`
  * items [IpGroupId](#ipgroupid)

### IpGroupName
* IpGroupName `string`

### IpRevokedRuleList
* IpRevokedRuleList `array`
  * items [IpRule](#iprule)

### IpRule
* IpRule `string`

### IpRuleDesc
* IpRuleDesc `string`

### IpRuleItem
* IpRuleItem `object`: Information about a rule for an IP access control group.
  * ipRule [IpRule](#iprule)
  * ruleDesc [IpRuleDesc](#ipruledesc)

### IpRuleList
* IpRuleList `array`
  * items [IpRuleItem](#ipruleitem)

### Limit
* Limit `integer`

### ModificationResourceEnum
* ModificationResourceEnum `string` (values: ROOT_VOLUME, USER_VOLUME, COMPUTE_TYPE)

### ModificationState
* ModificationState `object`: Information about a WorkSpace modification.
  * Resource [ModificationResourceEnum](#modificationresourceenum)
  * State [ModificationStateEnum](#modificationstateenum)

### ModificationStateEnum
* ModificationStateEnum `string` (values: UPDATE_INITIATED, UPDATE_IN_PROGRESS)

### ModificationStateList
* ModificationStateList `array`
  * items [ModificationState](#modificationstate)

### ModifyWorkspacePropertiesRequest
* ModifyWorkspacePropertiesRequest `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceProperties **required** [WorkspaceProperties](#workspaceproperties)

### ModifyWorkspacePropertiesResult
* ModifyWorkspacePropertiesResult `object`

### ModifyWorkspaceStateRequest
* ModifyWorkspaceStateRequest `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceState **required** [TargetWorkspaceState](#targetworkspacestate)

### ModifyWorkspaceStateResult
* ModifyWorkspaceStateResult `object`

### NonEmptyString
* NonEmptyString `string`

### OperationInProgressException
* OperationInProgressException `object`: The properties of this WorkSpace are currently being modified. Try again in a moment.
  * message [ExceptionMessage](#exceptionmessage)

### OperationNotSupportedException
* OperationNotSupportedException `object`: This operation is not supported.
  * message [ExceptionMessage](#exceptionmessage)

### PaginationToken
* PaginationToken `string`

### RebootRequest
* RebootRequest `object`: Information used to reboot a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### RebootWorkspaceRequests
* RebootWorkspaceRequests `array`
  * items [RebootRequest](#rebootrequest)

### RebootWorkspacesRequest
* RebootWorkspacesRequest `object`
  * RebootWorkspaceRequests **required** [RebootWorkspaceRequests](#rebootworkspacerequests)

### RebootWorkspacesResult
* RebootWorkspacesResult `object`
  * FailedRequests [FailedRebootWorkspaceRequests](#failedrebootworkspacerequests)

### RebuildRequest
* RebuildRequest `object`: Information used to rebuild a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### RebuildWorkspaceRequests
* RebuildWorkspaceRequests `array`
  * items [RebuildRequest](#rebuildrequest)

### RebuildWorkspacesRequest
* RebuildWorkspacesRequest `object`
  * RebuildWorkspaceRequests **required** [RebuildWorkspaceRequests](#rebuildworkspacerequests)

### RebuildWorkspacesResult
* RebuildWorkspacesResult `object`
  * FailedRequests [FailedRebuildWorkspaceRequests](#failedrebuildworkspacerequests)

### RegistrationCode
* RegistrationCode `string`

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The specified resource already exists.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceAssociatedException
* ResourceAssociatedException `object`: The resource is associated with a directory.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceCreationFailedException
* ResourceCreationFailedException `object`: The resource could not be created.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceLimitExceededException
* ResourceLimitExceededException `object`: Your resource limits have been exceeded.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The resource could not be found.
  * ResourceId [NonEmptyString](#nonemptystring)
  * message [ExceptionMessage](#exceptionmessage)

### ResourceUnavailableException
* ResourceUnavailableException `object`: The specified resource is not available.
  * ResourceId [NonEmptyString](#nonemptystring)
  * message [ExceptionMessage](#exceptionmessage)

### RevokeIpRulesRequest
* RevokeIpRulesRequest `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRevokedRuleList](#iprevokedrulelist)

### RevokeIpRulesResult
* RevokeIpRulesResult `object`

### RootStorage
* RootStorage `object`: Information about the root volume for a WorkSpace bundle.
  * Capacity [NonEmptyString](#nonemptystring)

### RootVolumeSizeGib
* RootVolumeSizeGib `integer`

### RunningMode
* RunningMode `string` (values: AUTO_STOP, ALWAYS_ON)

### RunningModeAutoStopTimeoutInMinutes
* RunningModeAutoStopTimeoutInMinutes `integer`

### SecurityGroupId
* SecurityGroupId `string`

### StartRequest
* StartRequest `object`: Information used to start a WorkSpace.
  * WorkspaceId [WorkspaceId](#workspaceid)

### StartWorkspaceRequests
* StartWorkspaceRequests `array`
  * items [StartRequest](#startrequest)

### StartWorkspacesRequest
* StartWorkspacesRequest `object`
  * StartWorkspaceRequests **required** [StartWorkspaceRequests](#startworkspacerequests)

### StartWorkspacesResult
* StartWorkspacesResult `object`
  * FailedRequests [FailedStartWorkspaceRequests](#failedstartworkspacerequests)

### StopRequest
* StopRequest `object`: Information used to stop a WorkSpace.
  * WorkspaceId [WorkspaceId](#workspaceid)

### StopWorkspaceRequests
* StopWorkspaceRequests `array`
  * items [StopRequest](#stoprequest)

### StopWorkspacesRequest
* StopWorkspacesRequest `object`
  * StopWorkspaceRequests **required** [StopWorkspaceRequests](#stopworkspacerequests)

### StopWorkspacesResult
* StopWorkspacesResult `object`
  * FailedRequests [FailedStopWorkspaceRequests](#failedstopworkspacerequests)

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Information about a tag.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [NonEmptyString](#nonemptystring)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TargetWorkspaceState
* TargetWorkspaceState `string` (values: AVAILABLE, ADMIN_MAINTENANCE)

### TerminateRequest
* TerminateRequest `object`: Information used to terminate a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### TerminateWorkspaceRequests
* TerminateWorkspaceRequests `array`
  * items [TerminateRequest](#terminaterequest)

### TerminateWorkspacesRequest
* TerminateWorkspacesRequest `object`
  * TerminateWorkspaceRequests **required** [TerminateWorkspaceRequests](#terminateworkspacerequests)

### TerminateWorkspacesResult
* TerminateWorkspacesResult `object`
  * FailedRequests [FailedTerminateWorkspaceRequests](#failedterminateworkspacerequests)

### Timestamp
* Timestamp `string`

### UnsupportedWorkspaceConfigurationException
* UnsupportedWorkspaceConfigurationException `object`: The configuration of this WorkSpace is not supported for this operation. For more information, see the <a href="http://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. 
  * message [ExceptionMessage](#exceptionmessage)

### UpdateRulesOfIpGroupRequest
* UpdateRulesOfIpGroupRequest `object`
  * GroupId **required** [IpGroupId](#ipgroupid)
  * UserRules **required** [IpRuleList](#iprulelist)

### UpdateRulesOfIpGroupResult
* UpdateRulesOfIpGroupResult `object`

### UserName
* UserName `string`

### UserStorage
* UserStorage `object`: Information about the user storage for a WorkSpace bundle.
  * Capacity [NonEmptyString](#nonemptystring)

### UserVolumeSizeGib
* UserVolumeSizeGib `integer`

### VolumeEncryptionKey
* VolumeEncryptionKey `string`

### Workspace
* Workspace `object`: Information about a WorkSpace.
  * BundleId [BundleId](#bundleid)
  * ComputerName [ComputerName](#computername)
  * DirectoryId [DirectoryId](#directoryid)
  * ErrorCode [WorkspaceErrorCode](#workspaceerrorcode)
  * ErrorMessage [Description](#description)
  * IpAddress [IpAddress](#ipaddress)
  * ModificationStates [ModificationStateList](#modificationstatelist)
  * RootVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * State [WorkspaceState](#workspacestate)
  * SubnetId [SubnetId](#subnetid)
  * UserName [UserName](#username)
  * UserVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * VolumeEncryptionKey [VolumeEncryptionKey](#volumeencryptionkey)
  * WorkspaceId [WorkspaceId](#workspaceid)
  * WorkspaceProperties [WorkspaceProperties](#workspaceproperties)

### WorkspaceBundle
* WorkspaceBundle `object`: Information about a WorkSpace bundle.
  * BundleId [BundleId](#bundleid)
  * ComputeType [ComputeType](#computetype)
  * Description [Description](#description)
  * Name [NonEmptyString](#nonemptystring)
  * Owner [BundleOwner](#bundleowner)
  * RootStorage [RootStorage](#rootstorage)
  * UserStorage [UserStorage](#userstorage)

### WorkspaceConnectionStatus
* WorkspaceConnectionStatus `object`: Describes the connection status of a WorkSpace.
  * ConnectionState [ConnectionState](#connectionstate)
  * ConnectionStateCheckTimestamp [Timestamp](#timestamp)
  * LastKnownUserConnectionTimestamp [Timestamp](#timestamp)
  * WorkspaceId [WorkspaceId](#workspaceid)

### WorkspaceConnectionStatusList
* WorkspaceConnectionStatusList `array`
  * items [WorkspaceConnectionStatus](#workspaceconnectionstatus)

### WorkspaceDirectory
* WorkspaceDirectory `object`: Information about an AWS Directory Service directory for use with Amazon WorkSpaces.
  * Alias [Alias](#alias)
  * CustomerUserName [UserName](#username)
  * DirectoryId [DirectoryId](#directoryid)
  * DirectoryName [DirectoryName](#directoryname)
  * DirectoryType [WorkspaceDirectoryType](#workspacedirectorytype)
  * DnsIpAddresses [DnsIpAddresses](#dnsipaddresses)
  * IamRoleId [ARN](#arn)
  * RegistrationCode [RegistrationCode](#registrationcode)
  * State [WorkspaceDirectoryState](#workspacedirectorystate)
  * SubnetIds [SubnetIds](#subnetids)
  * WorkspaceCreationProperties [DefaultWorkspaceCreationProperties](#defaultworkspacecreationproperties)
  * WorkspaceSecurityGroupId [SecurityGroupId](#securitygroupid)
  * ipGroupIds [IpGroupIdList](#ipgroupidlist)

### WorkspaceDirectoryState
* WorkspaceDirectoryState `string` (values: REGISTERING, REGISTERED, DEREGISTERING, DEREGISTERED, ERROR)

### WorkspaceDirectoryType
* WorkspaceDirectoryType `string` (values: SIMPLE_AD, AD_CONNECTOR)

### WorkspaceErrorCode
* WorkspaceErrorCode `string`

### WorkspaceId
* WorkspaceId `string`

### WorkspaceIdList
* WorkspaceIdList `array`
  * items [WorkspaceId](#workspaceid)

### WorkspaceList
* WorkspaceList `array`
  * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: Information about a WorkSpace.
  * ComputeTypeName [Compute](#compute)
  * RootVolumeSizeGib [RootVolumeSizeGib](#rootvolumesizegib)
  * RunningMode [RunningMode](#runningmode)
  * RunningModeAutoStopTimeoutInMinutes [RunningModeAutoStopTimeoutInMinutes](#runningmodeautostoptimeoutinminutes)
  * UserVolumeSizeGib [UserVolumeSizeGib](#uservolumesizegib)

### WorkspaceRequest
* WorkspaceRequest `object`: Information used to create a WorkSpace.
  * BundleId **required** [BundleId](#bundleid)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RootVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * Tags [TagList](#taglist)
  * UserName **required** [UserName](#username)
  * UserVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * VolumeEncryptionKey [VolumeEncryptionKey](#volumeencryptionkey)
  * WorkspaceProperties [WorkspaceProperties](#workspaceproperties)

### WorkspaceRequestList
* WorkspaceRequestList `array`
  * items [WorkspaceRequest](#workspacerequest)

### WorkspaceState
* WorkspaceState `string` (values: PENDING, AVAILABLE, IMPAIRED, UNHEALTHY, REBOOTING, STARTING, REBUILDING, MAINTENANCE, ADMIN_MAINTENANCE, TERMINATING, TERMINATED, SUSPENDED, UPDATING, STOPPING, STOPPED, ERROR)

### WorkspacesIpGroup
* WorkspacesIpGroup `object`: Information about an IP access control group.
  * groupDesc [IpGroupDesc](#ipgroupdesc)
  * groupId [IpGroupId](#ipgroupid)
  * groupName [IpGroupName](#ipgroupname)
  * userRules [IpRuleList](#iprulelist)

### WorkspacesIpGroupsList
* WorkspacesIpGroupsList `array`
  * items [WorkspacesIpGroup](#workspacesipgroup)


