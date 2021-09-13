# RmsCovidStatsCal.WORLDOMETERApi

All URIs are relative to *https://api.coronatracker.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3StatsWorldometerCountryGet**](WORLDOMETERApi.md#v3StatsWorldometerCountryGet) | **GET** /v3/stats/worldometer/country | 
[**v3StatsWorldometerGlobalGet**](WORLDOMETERApi.md#v3StatsWorldometerGlobalGet) | **GET** /v3/stats/worldometer/global | 


<a name="v3StatsWorldometerCountryGet"></a>
# **v3StatsWorldometerCountryGet**
> [WorldometerCountry] v3StatsWorldometerCountryGet(countryCode)



returns data of all countries or specific country by countryCode

### Example
```javascript
var RmsCovidStatsCal = require('rms_covid_stats_cal');

var apiInstance = new RmsCovidStatsCal.WORLDOMETERApi();

var countryCode = "countryCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v3StatsWorldometerCountryGet(countryCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**|  | 

### Return type

[**[WorldometerCountry]**](WorldometerCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v3StatsWorldometerGlobalGet"></a>
# **v3StatsWorldometerGlobalGet**
> WorldometerGlobal v3StatsWorldometerGlobalGet()



returns all data of all countries

### Example
```javascript
var RmsCovidStatsCal = require('rms_covid_stats_cal');

var apiInstance = new RmsCovidStatsCal.WORLDOMETERApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v3StatsWorldometerGlobalGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorldometerGlobal**](WorldometerGlobal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

