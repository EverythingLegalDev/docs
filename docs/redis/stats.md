---
slug: stats
title: Redis Stats
---

The [RedisStats](https://github.com/ServiceStack/ServiceStack.Redis/blob/master/src/ServiceStack.Redis/RedisStats.cs)
class provides better visibility and introspection into your running instances:

<table>
    <tr>
        <td><b>TotalCommandsSent</b></td> <td>Total number of commands sent</td>
    </tr>
    <tr>
        <td><b>TotalFailovers</b></td> <td>Number of times the Redis Client Managers have FailoverTo() either by sentinel or manually</td>
    </tr>
    <tr>
        <td><b>TotalDeactivatedClients</b></td> <td>Number of times a Client was deactivated from the pool, either by FailoverTo() or exceptions on client</td>
    </tr>
    <tr>
        <td><b>TotalFailedSentinelWorkers</b></td> <td>Number of times connecting to a Sentinel has failed</td>
    </tr>
    <tr>
        <td><b>TotalForcedMasterFailovers</b></td> <td>Number of times we've forced Sentinel to failover to another master due to consecutive errors</td>
    </tr>
    <tr>
        <td><b>TotalInvalidMasters</b></td> <td>Number of times a connecting to a reported Master wasn't actually a Master</td>
    </tr>
    <tr>
        <td><b>TotalNoMastersFound</b></td> <td>Number of times no Masters could be found in any of the configured hosts</td>
    </tr>
    <tr>
        <td><b>TotalClientsCreated</b></td> <td>Number of Redis Client instances created with RedisConfig.ClientFactory</td>
    </tr>
    <tr>
        <td><b>TotalClientsCreatedOutsidePool</b></td> <td>Number of times a Redis Client was created outside of pool, either due to overflow or reserved slot was overridden</td>
    </tr>
    <tr>
        <td><b>TotalSubjectiveServersDown</b></td> <td>Number of times Redis Sentinel reported a Subjective Down (sdown)</td>
    </tr>
    <tr>
        <td><b>TotalObjectiveServersDown</b></td> <td>Number of times Redis Sentinel reported an Objective Down (odown)</td>
    </tr>
    <tr>
        <td><b>TotalRetryCount</b></td> <td>Number of times a Redis Request was retried due to Socket or Retryable exception</td>
    </tr>
    <tr>
        <td><b>TotalRetrySuccess</b></td> <td>Number of times a Request succeeded after it was retried</td>
    </tr>
    <tr>
        <td><b>TotalRetryTimedout</b></td> <td>Number of times a Retry Request failed after exceeding RetryTimeout</td>
    </tr>
    <tr>
        <td><b>TotalPendingDeactivatedClients</b></td> <td>Total number of deactivated clients that are pending being disposed</td>
    </tr>
</table>

You can get and print a dump of all the stats at anytime with:

```csharp
RedisStats.ToDictionary().PrintDump();
```

And Reset all Stats back to `0` with `RedisStats.Reset()`.
