# RmsCovidStatsCal.ANALYTICSApi

All URIs are relative to *https://api.coronatracker.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v5AnalyticsDailyNewStatsGet**](ANALYTICSApi.md#v5AnalyticsDailyNewStatsGet) | **GET** /v5/analytics/dailyNewStats | 
[**v5AnalyticsNewcasesCountryGet**](ANALYTICSApi.md#v5AnalyticsNewcasesCountryGet) | **GET** /v5/analytics/newcases/country | 
[**v5AnalyticsTrendCountryGet**](ANALYTICSApi.md#v5AnalyticsTrendCountryGet) | **GET** /v5/analytics/trend/country | 


<a name="v5AnalyticsDailyNewStatsGet"></a>
# **v5AnalyticsDailyNewStatsGet**
> [DailyNewStats] v5AnalyticsDailyNewStatsGet(opts)



returns new daily cases and deaths

### Example
```javascript
var RmsCovidStatsCal = require('rms_covid_stats_cal');

var apiInstance = new RmsCovidStatsCal.ANALYTICSApi();

var opts = { 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v5AnalyticsDailyNewStatsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [optional] 

### Return type

[**[DailyNewStats]**](DailyNewStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v5AnalyticsNewcasesCountryGet"></a>
# **v5AnalyticsNewcasesCountryGet**
> [NewcasesCountry] v5AnalyticsNewcasesCountryGet(startDate, endDate, opts)



returns data of covid cases between given startDate and endDate

### Example
```javascript
var RmsCovidStatsCal = require('rms_covid_stats_cal');

var apiInstance = new RmsCovidStatsCal.ANALYTICSApi();

var startDate = "startDate_example"; // String | 

var endDate = "endDate_example"; // String | 

var opts = { 
  'countryCode': "countryCode_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v5AnalyticsNewcasesCountryGet(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**|  | 
 **endDate** | **String**|  | 
 **countryCode** | **String**|  | [optional] 

### Return type

[**[NewcasesCountry]**](NewcasesCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v5AnalyticsTrendCountryGet"></a>
# **v5AnalyticsTrendCountryGet**
> [TrendCountry] v5AnalyticsTrendCountryGet(startDate, endDate, opts)



returns data of a country between start and end date

### Example
```javascript
var RmsCovidStatsCal = require('rms_covid_stats_cal');

var apiInstance = new RmsCovidStatsCal.ANALYTICSApi();

var startDate = "startDate_example"; // String | 

var endDate = "endDate_example"; // String | 

var opts = { 
  'countryCode': "countryCode_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v5AnalyticsTrendCountryGet(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**|  | 
 **endDate** | **String**|  | 
 **countryCode** | **String**|  | [optional] 

### Return type

[**[TrendCountry]**](TrendCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

