# @datafire/amazonaws_monitoring
<p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

## Operation: DeleteAlarms
Deletes the specified alarms. In the event of an error, no alarms are deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteAlarmsInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DescribeAlarmHistory
<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned.</p> <p>Note that Amazon CloudWatch retains the history of an alarm even if you delete the alarm.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DescribeAlarmHistoryInput"
    },
    "MaxRecords": {
      "type": "string",
      "description": "Pagination limit"
    },
    "NextToken": {
      "type": "string",
      "description": "Pagination token"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DescribeAlarmHistoryOutput"
}
```
## Operation: DescribeAlarms
Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DescribeAlarmsInput"
    },
    "MaxRecords": {
      "type": "string",
      "description": "Pagination limit"
    },
    "NextToken": {
      "type": "string",
      "description": "Pagination token"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DescribeAlarmsOutput"
}
```
## Operation: DescribeAlarmsForMetric
Retrieves the alarms for the specified metric. Specify a statistic, period, or unit to filter the results.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DescribeAlarmsForMetricInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DescribeAlarmsForMetricOutput"
}
```
## Operation: DisableAlarmActions
Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DisableAlarmActionsInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: EnableAlarmActions
Enables the actions for the specified alarms.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/EnableAlarmActionsInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetMetricStatistics
<p>Gets statistics for the specified metric.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of 60 seconds (1 minute) are available for 15 days</p> </li> <li> <p>Data points with a period of 300 seconds (5 minute) are available for 63 days</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months)</p> </li> </ul> <p>Note that CloudWatch started retaining 5-minute and 1-hour metric data as of 9 July 2016.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, Amazon CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. A period can be as short as one minute (60 seconds). Note that data points are not returned in chronological order.</p> <p>Amazon CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, Amazon CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you cannot retrieve percentile statistics for this data unless one of the following conditions is true:</p> <ul> <li> <p>The SampleCount of the statistic set is 1</p> </li> <li> <p>The Min and the Max of the statistic set are equal</p> </li> </ul> <p>For a list of metrics and dimensions supported by AWS services, see the <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetMetricStatisticsInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetMetricStatisticsOutput"
}
```
## Operation: ListMetrics
<p>List the specified metrics. You can use the returned metrics with <a>GetMetricStatistics</a> to obtain statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using <a>GetMetricStatistics</a>.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListMetricsInput"
    },
    "NextToken": {
      "type": "string",
      "description": "Pagination token"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListMetricsOutput"
}
```
## Operation: PutMetricAlarm
<p>Creates or updates an alarm and associates it with the specified metric. Optionally, this operation can associate one or more Amazon SNS resources with the alarm.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is evaluated and its state is set appropriately. Any actions associated with the state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an AWS Identity and Access Management (IAM) user, you must have Amazon EC2 permissions for some operations:</p> <ul> <li> <p> <code>ec2:DescribeInstanceStatus</code> and <code>ec2:DescribeInstances</code> for all alarms on EC2 instance status metrics</p> </li> <li> <p> <code>ec2:StopInstances</code> for alarms with stop actions</p> </li> <li> <p> <code>ec2:TerminateInstances</code> for alarms with terminate actions</p> </li> <li> <p> <code>ec2:DescribeInstanceRecoveryAttribute</code> and <code>ec2:RecoverInstances</code> for alarms with recover actions</p> </li> </ul> <p>If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions won't be performed. However, if you are later granted the required permissions, the alarm actions that you created earlier will be performed.</p> <p>If you are using an IAM role (for example, an Amazon EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies.</p> <p>If you are using temporary security credentials granted using the AWS Security Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance using alarm actions.</p> <p>Note that you must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the <b>EC2ActionsAccess</b> IAM role. After this IAM role is created, you can create stop, terminate, or reboot alarms using a command-line interface or an API.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutMetricAlarmInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: PutMetricData
<p>Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates the data points with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a>ListMetrics</a>.</p> <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. For more information on specifying dimensions, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a>GetMetricStatistics</a> from the time they are submitted.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you cannot retrieve percentile statistics for this data unless one of the following conditions is true:</p> <ul> <li> <p>The SampleCount of the statistic set is 1</p> </li> <li> <p>The Min and the Max of the statistic set are equal</p> </li> </ul>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutMetricDataInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SetAlarmState
Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an Amazon SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens very quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a>DescribeAlarmHistory</a>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SetAlarmStateInput"
    },
    "Action": {
      "type": "string"
    },
    "Version": {
      "type": "string"
    },
    "X-Amz-Content-Sha256": {
      "type": "string"
    },
    "X-Amz-Date": {
      "type": "string"
    },
    "X-Amz-Algorithm": {
      "type": "string"
    },
    "X-Amz-Credential": {
      "type": "string"
    },
    "X-Amz-Security-Token": {
      "type": "string"
    },
    "X-Amz-Signature": {
      "type": "string"
    },
    "X-Amz-SignedHeaders": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Action",
    "Version"
  ]
}
```
### Output Schema
```json
{}
```
